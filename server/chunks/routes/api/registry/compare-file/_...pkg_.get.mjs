import { d as defineCachedEventHandler, G as CACHE_MAX_AGE_ONE_YEAR, g as getRouterParam, k as getQuery, p as parsePackageParams, c as createError, H as parseVersionRange, I as PackageFileDiffQuerySchema, J as createDiff, K as insertSkipBlocks, L as countDiffStats, M as getLanguageFromPath, O as getShikiHighlighter, i as handleApiError } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'marked';
import 'sanitize-html';
import 'node:dns/promises';
import 'ipaddr.js';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import 'vue-router';
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const CACHE_VERSION = 1;
const DIFF_TIMEOUT = 15e3;
const MAX_DIFF_FILE_SIZE = 250 * 1024;
async function fetchFileContentForDiff(packageName, version, filePath, signal) {
  const url = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/${filePath}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DIFF_TIMEOUT);
  if (signal) {
    signal.addEventListener("abort", () => controller.abort(signal.reason), { once: true });
  }
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      if (response.status === 404) return null;
      throw createError({
        statusCode: response.status >= 500 ? 502 : response.status,
        message: `Failed to fetch file (${response.status})`
      });
    }
    const contentLength = response.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_DIFF_FILE_SIZE) {
      throw createError({
        statusCode: 413,
        message: `File too large to diff (${(parseInt(contentLength, 10) / 1024).toFixed(0)}KB). Maximum is ${MAX_DIFF_FILE_SIZE / 1024}KB.`
      });
    }
    const content = await response.text();
    if (content.length > MAX_DIFF_FILE_SIZE) {
      throw createError({
        statusCode: 413,
        message: `File too large to diff (${(content.length / 1024).toFixed(0)}KB). Maximum is ${MAX_DIFF_FILE_SIZE / 1024}KB.`
      });
    }
    return content;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    if (error?.name === "AbortError") {
      throw createError({
        statusCode: 504,
        message: "Diff request timed out while fetching file"
      });
    }
    throw createError({
      statusCode: 502,
      message: "Failed to fetch file for diff"
    });
  } finally {
    clearTimeout(timeoutId);
  }
}
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const startTime = Date.now();
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
    const { rawPackageName, rawVersion: fullPathAfterV } = parsePackageParams(pkgParamSegments);
    const versionSegments = fullPathAfterV?.split("/") ?? [];
    if (versionSegments.length < 2) {
      throw createError({
        statusCode: 400,
        message: "Version range and file path are required"
      });
    }
    const rawVersionRange = versionSegments[0];
    const rawFilePath = versionSegments.slice(1).join("/");
    const range = parseVersionRange(rawVersionRange);
    if (!range) {
      throw createError({
        statusCode: 400,
        message: "Invalid version range format. Use from...to (e.g., 1.0.0...2.0.0)"
      });
    }
    try {
      const { packageName, fromVersion, toVersion, filePath } = v.parse(
        PackageFileDiffQuerySchema,
        {
          packageName: rawPackageName,
          fromVersion: range.from,
          toVersion: range.to,
          filePath: rawFilePath
        }
      );
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), DIFF_TIMEOUT);
      try {
        const query = getQuery(event);
        const diffOptions = {
          mergeModifiedLines: query.mergeModifiedLines !== "false",
          maxChangeRatio: parseFloat(query.maxChangeRatio) || 0.45,
          maxDiffDistance: parseInt(query.maxDiffDistance, 10) || 30,
          inlineMaxCharEdits: parseInt(query.inlineMaxCharEdits, 10) || 2
        };
        const [fromContent, toContent] = await Promise.all([
          fetchFileContentForDiff(packageName, fromVersion, filePath, controller.signal),
          fetchFileContentForDiff(packageName, toVersion, filePath, controller.signal)
        ]);
        clearTimeout(timeoutId);
        let type;
        if (fromContent === null && toContent === null) {
          throw createError({
            statusCode: 404,
            message: "File not found in either version"
          });
        } else if (fromContent === null) {
          type = "add";
        } else if (toContent === null) {
          type = "delete";
        } else {
          type = "modify";
        }
        const diff = createDiff(fromContent ?? "", toContent ?? "", filePath, diffOptions);
        if (!diff) {
          return {
            package: packageName,
            from: fromVersion,
            to: toVersion,
            path: filePath,
            type,
            hunks: [],
            stats: { additions: 0, deletions: 0 },
            meta: { computeTime: Date.now() - startTime }
          };
        }
        const hunkOnly = diff.hunks.filter((h) => h.type === "hunk");
        const hunksWithSkips = insertSkipBlocks(hunkOnly);
        const stats = countDiffStats(hunksWithSkips);
        const language = getLanguageFromPath(filePath);
        const shiki = await getShikiHighlighter();
        const loadedLangs = shiki.getLoadedLanguages();
        const canHighlight = loadedLangs.includes(language);
        if (canHighlight) {
          for (const hunk of hunksWithSkips) {
            if (hunk.type !== "hunk") continue;
            for (const line of hunk.lines) {
              line.content = line.content.map((seg) => {
                const code = seg.value.length ? seg.value : " ";
                try {
                  const raw = shiki.codeToHtml(code, {
                    lang: language,
                    themes: { light: "github-light", dark: "github-dark" },
                    defaultColor: "dark"
                  });
                  const html = raw.match(/<code[^>]*>([\s\S]*?)<\/code>/)?.[1];
                  return html ? { ...seg, html } : seg;
                } catch {
                  return seg;
                }
              });
            }
          }
        }
        return {
          package: packageName,
          from: fromVersion,
          to: toVersion,
          path: filePath,
          type,
          hunks: hunksWithSkips,
          stats,
          meta: { computeTime: Date.now() - startTime }
        };
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === "AbortError") {
          throw createError({
            statusCode: 504,
            message: "Diff computation timed out"
          });
        }
        throw error;
      }
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: "Failed to compute file diff"
      });
    }
  },
  {
    // Diff between specific versions never changes - cache permanently
    maxAge: CACHE_MAX_AGE_ONE_YEAR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      const query = getQuery(event);
      const merge = query.mergeModifiedLines !== "false";
      const ratio = Math.round((parseFloat(query.maxChangeRatio) || 0.45) * 100);
      const distance = parseInt(query.maxDiffDistance, 10) || 30;
      const charEdits = parseInt(query.inlineMaxCharEdits, 10) || 2;
      const optionsKey = `${merge}:${ratio}:${distance}:${charEdits}`;
      return `compare-file:v${CACHE_VERSION}:${pkg.replace(/\/+$/, "").trim()}:${optionsKey}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

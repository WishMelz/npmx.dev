import { d as defineCachedEventHandler, G as CACHE_MAX_AGE_ONE_YEAR, g as getRouterParam, p as parsePackageParams, c as createError, W as ERROR_PACKAGE_VERSION_AND_FILE_FAILED, X as PackageFileQuerySchema, M as getLanguageFromPath, r as getPackageFileTree, Y as resolveDependencyVersions, s as flattenFileTree, Z as createImportResolver, _ as highlightCode, B as fetchNpmPackage, $ as parseRepositoryInfo, a0 as renderReadmeHtml, i as handleApiError } from '../../../../nitro/nitro.mjs';
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

const CACHE_VERSION = 3;
const MAX_FILE_SIZE = 500 * 1024;
const IMPORT_LANGUAGES = /* @__PURE__ */ new Set([
  "javascript",
  "typescript",
  "jsx",
  "tsx",
  "vue",
  "svelte",
  "astro"
]);
async function fetchPackageJson(packageName, version) {
  try {
    const url = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/package.json`;
    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
async function fetchFileContent(packageName, version, filePath) {
  const url = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/${filePath}`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw createError({ statusCode: 404, message: "File not found" });
    }
    throw createError({
      statusCode: 502,
      message: "Failed to fetch file from jsDelivr"
    });
  }
  const contentLength = response.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_FILE_SIZE) {
    throw createError({
      statusCode: 413,
      message: `File too large (${(parseInt(contentLength, 10) / 1024 / 1024).toFixed(1)}MB). Maximum size is ${MAX_FILE_SIZE / 1024}KB.`
    });
  }
  const content = await response.text();
  if (content.length > MAX_FILE_SIZE) {
    throw createError({
      statusCode: 413,
      message: `File too large (${(content.length / 1024 / 1024).toFixed(1)}MB). Maximum size is ${MAX_FILE_SIZE / 1024}KB.`
    });
  }
  return content;
}
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
    const { rawPackageName, rawVersion: fullPathAfterV } = parsePackageParams(pkgParamSegments);
    const versionSegments = fullPathAfterV?.split("/") ?? [];
    if (versionSegments.length < 2) {
      throw createError({
        // TODO: throwing 404 rather than 400 as it's cacheable
        statusCode: 404,
        message: ERROR_PACKAGE_VERSION_AND_FILE_FAILED
      });
    }
    const rawVersion = versionSegments[0];
    const rawFilePath = versionSegments.slice(1).join("/");
    try {
      const { packageName, version, filePath } = v.parse(PackageFileQuerySchema, {
        packageName: rawPackageName,
        version: rawVersion,
        filePath: rawFilePath
      });
      const content = await fetchFileContent(packageName, version, filePath);
      const language = getLanguageFromPath(filePath);
      let dependencies;
      let resolveRelative;
      if (IMPORT_LANGUAGES.has(language)) {
        const [pkgJson, fileTreeResponse] = await Promise.all([
          fetchPackageJson(packageName, version),
          getPackageFileTree(packageName, version).catch(() => null)
        ]);
        if (pkgJson) {
          const allDeps = {
            ...pkgJson.dependencies,
            ...pkgJson.peerDependencies,
            ...pkgJson.optionalDependencies
            // Note: excluding devDependencies as they're less likely to be imported in dist files
          };
          if (Object.keys(allDeps).length > 0) {
            const resolved = await resolveDependencyVersions(allDeps);
            dependencies = {};
            for (const [name, ver] of Object.entries(resolved)) {
              dependencies[name] = { version: ver };
            }
          }
        }
        if (fileTreeResponse) {
          const files = flattenFileTree(fileTreeResponse.tree);
          resolveRelative = createImportResolver(files, filePath, packageName, version);
        }
      }
      const html = await highlightCode(content, language, {
        dependencies,
        resolveRelative
      });
      let markdownHtml;
      if (language === "markdown") {
        try {
          const packageData = await fetchNpmPackage(rawPackageName);
          const repoInfo = parseRepositoryInfo(packageData.repository);
          markdownHtml = await renderReadmeHtml(content, rawPackageName, repoInfo);
        } catch {
          markdownHtml = void 0;
        }
      }
      return {
        package: packageName,
        version,
        path: filePath,
        language,
        content,
        html,
        lines: content.split("\n").length,
        markdownHtml
      };
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: "Failed to fetch file content"
      });
    }
  },
  {
    // File content for a specific version never changes - cache permanently
    maxAge: CACHE_MAX_AGE_ONE_YEAR,
    // 1 year
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `file:v${CACHE_VERSION}:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

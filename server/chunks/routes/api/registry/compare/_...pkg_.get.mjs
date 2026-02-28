import { d as defineCachedEventHandler, G as CACHE_MAX_AGE_ONE_YEAR, g as getRouterParam, p as parsePackageParams, c as createError, H as parseVersionRange, Q as PackageCompareQuerySchema, r as getPackageFileTree, R as buildCompareResponse, i as handleApiError } from '../../../../nitro/nitro.mjs';
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
const COMPARE_TIMEOUT = 8e3;
async function fetchPackageJson(packageName, version, signal) {
  try {
    const url = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/package.json`;
    const response = await fetch(url, { signal });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const startTime = Date.now();
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
    const { rawPackageName, rawVersion: rawVersionRange } = parsePackageParams(pkgParamSegments);
    if (!rawVersionRange) {
      throw createError({
        statusCode: 400,
        message: "Version range is required (e.g., 1.0.0...2.0.0)"
      });
    }
    const range = parseVersionRange(rawVersionRange);
    if (!range) {
      throw createError({
        statusCode: 400,
        message: "Invalid version range format. Use from...to (e.g., 1.0.0...2.0.0)"
      });
    }
    try {
      const { packageName, fromVersion, toVersion } = v.parse(PackageCompareQuerySchema, {
        packageName: rawPackageName,
        fromVersion: range.from,
        toVersion: range.to
      });
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), COMPARE_TIMEOUT);
      try {
        const [fromTree, toTree, fromPkg, toPkg] = await Promise.all([
          getPackageFileTree(packageName, fromVersion, controller.signal),
          getPackageFileTree(packageName, toVersion, controller.signal),
          fetchPackageJson(packageName, fromVersion, controller.signal),
          fetchPackageJson(packageName, toVersion, controller.signal)
        ]);
        clearTimeout(timeoutId);
        const computeTime = Date.now() - startTime;
        return buildCompareResponse(
          packageName,
          fromVersion,
          toVersion,
          fromTree.tree,
          toTree.tree,
          fromPkg,
          toPkg,
          computeTime
        );
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === "AbortError") {
          throw createError({
            statusCode: 504,
            message: "Comparison timed out. Try comparing fewer files."
          });
        }
        throw error;
      }
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: "Failed to compare package versions"
      });
    }
  },
  {
    // Comparison between specific versions never changes hence cache permanently
    maxAge: CACHE_MAX_AGE_ONE_YEAR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `compare:v${CACHE_VERSION}:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

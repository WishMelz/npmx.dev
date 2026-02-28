import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, k as getQuery, z as hash, c as createError, p as parsePackageParams, V as groupVersionDownloads, i as handleApiError } from '../../../../nitro/nitro.mjs';
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

const QuerySchema = v.object({
  mode: v.optional(v.picklist(["major", "minor"]), "major"),
  filterThreshold: v.optional(
    v.pipe(
      v.string(),
      v.toNumber(),
      // Fails validation on invalid conversion (e.g., "abc") instead of producing NaN
      v.minValue(0)
      // Ensure non-negative values
    )
  ),
  filterOldVersions: v.optional(v.picklist(["true", "false"]), "false")
});
const ____slug__get = defineCachedEventHandler(
  async (event) => {
    const slugParam = getRouterParam(event, "slug");
    const pkgParamSegments = slugParam?.split("/") ?? [];
    const lastSegment = pkgParamSegments.at(-1);
    if (!lastSegment || lastSegment !== "versions") {
      throw createError({
        statusCode: 404,
        message: "Invalid endpoint. Expected /versions"
      });
    }
    const segments = pkgParamSegments.slice(0, -1);
    const { rawPackageName } = parsePackageParams(segments);
    if (!rawPackageName) {
      throw createError({
        statusCode: 404,
        message: "Package name is required"
      });
    }
    try {
      const query = getQuery(event);
      const parsed = v.parse(QuerySchema, query);
      const mode = parsed.mode;
      const filterThreshold = parsed.filterThreshold ?? 1;
      const filterOldVersionsBool = parsed.filterOldVersions === "true";
      const url = `https://api.npmjs.org/versions/${rawPackageName}/last-week`;
      const npmResponse = await fetch(url);
      if (!npmResponse.ok) {
        if (npmResponse.status === 404) {
          throw createError({
            statusCode: 404,
            message: "Package not found"
          });
        }
        throw createError({
          statusCode: 502,
          message: "Failed to fetch version download data from npm API"
        });
      }
      const data = await npmResponse.json();
      let groups = groupVersionDownloads(data.downloads, mode);
      if (filterThreshold > 0) {
        groups = groups.filter((group) => group.percentage >= filterThreshold);
      }
      const totalDownloads = Object.values(data.downloads).reduce((sum, count) => sum + count, 0);
      const apiResponse = {
        package: rawPackageName,
        mode,
        totalDownloads,
        groups,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (filterOldVersionsBool) {
        try {
          const oneYearAgo = /* @__PURE__ */ new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
          const afterDate = oneYearAgo.toISOString();
          const decodedPackageName = decodeURIComponent(rawPackageName);
          const fastMetaUrl = `https://npm.antfu.dev/versions/${encodeURIComponent(decodedPackageName)}?after=${encodeURIComponent(afterDate)}`;
          const fastMetaResponse = await fetch(fastMetaUrl);
          if (!fastMetaResponse.ok) {
            throw new Error(`npm-fast-meta returned ${fastMetaResponse.status}`);
          }
          const versionData = await fastMetaResponse.json();
          apiResponse.recentVersions = versionData.versions;
        } catch {
        }
      }
      return apiResponse;
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: "Failed to fetch version download distribution"
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const slug = getRouterParam(event, "slug") ?? "";
      const query = getQuery(event);
      return `version-downloads:v5:${slug}:${hash(query)}`;
    }
  }
);

export { ____slug__get as default };
//# sourceMappingURL=_...slug_.get.mjs.map

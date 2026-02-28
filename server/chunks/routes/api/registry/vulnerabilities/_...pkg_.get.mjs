import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, p as parsePackageParams, m as PackageRouteParamsSchema, aa as fetchLatestVersionWithFallback, c as createError, aj as analyzeDependencyTree, i as handleApiError } from '../../../../nitro/nitro.mjs';
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

const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
    const { rawPackageName, rawVersion } = parsePackageParams(pkgParamSegments);
    try {
      const { packageName, version: requestedVersion } = v.parse(PackageRouteParamsSchema, {
        packageName: decodeURIComponent(rawPackageName),
        version: rawVersion
      });
      let version = requestedVersion;
      if (!version) {
        const latestVersion = await fetchLatestVersionWithFallback(packageName);
        if (!latestVersion) {
          throw createError({
            statusCode: 404,
            message: "No latest version found"
          });
        }
        version = latestVersion;
      }
      return await analyzeDependencyTree(packageName, version);
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: "Failed to analyze vulnerabilities"
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `vulnerabilities:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

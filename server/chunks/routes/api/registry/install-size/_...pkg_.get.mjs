import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, p as parsePackageParams, n as PackageRouteParamsSchema, ad as fetchLatestVersionWithFallback, c as createError, ae as calculateInstallSize, i as handleApiError, af as ERROR_CALC_INSTALL_SIZE_FAILED } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'fast-npm-meta';
import 'node:crypto';
import 'validate-npm-package-name';
import '@shikijs/primitive';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'gray-matter';
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
      return await calculateInstallSize(packageName, version);
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_CALC_INSTALL_SIZE_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `install-size:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

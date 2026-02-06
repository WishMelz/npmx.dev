import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, p as parsePackageParams, P as fetchLatestVersionWithFallback, c as createError, V as analyzeDependencyTree, h as handleApiError } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { a as PackageRouteParamsSchema } from '../../../../_/package.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:module';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import 'semver';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'marked';
import 'sanitize-html';
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
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    var _a, _b;
    const pkgParamSegments = (_b = (_a = getRouterParam(event, "pkg")) == null ? void 0 : _a.split("/")) != null ? _b : [];
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
      var _a;
      const pkg = (_a = getRouterParam(event, "pkg")) != null ? _a : "";
      return `vulnerabilities:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

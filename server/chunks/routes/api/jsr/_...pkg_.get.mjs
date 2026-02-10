import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, f as fetchJsrPackageInfo, h as handleApiError, E as ERROR_JSR_FETCH_FAILED } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { P as PackageNameSchema } from '../../../_/package.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atproto/oauth-client-node';
import '@upstash/redis';
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
    const pkgPath = getRouterParam(event, "pkg");
    try {
      const packageName = v.parse(PackageNameSchema, pkgPath);
      return await fetchJsrPackageInfo(packageName);
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_JSR_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    name: "api-jsr-package",
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `jsr:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

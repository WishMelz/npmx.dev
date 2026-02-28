import { d as defineCachedEventHandler, G as CACHE_MAX_AGE_ONE_YEAR, g as getRouterParam, p as parsePackageParams, a1 as PackageVersionQuerySchema, a2 as fetchFileTree, a3 as convertToFileTree, i as handleApiError, a4 as ERROR_FILE_LIST_FETCH_FAILED } from '../../../../nitro/nitro.mjs';
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
      const { packageName, version } = v.parse(PackageVersionQuerySchema, {
        packageName: rawPackageName,
        version: rawVersion
      });
      const jsDelivrData = await fetchFileTree(packageName, version);
      const tree = convertToFileTree(jsDelivrData.files);
      return {
        package: packageName,
        version,
        default: jsDelivrData.default ?? void 0,
        tree
      };
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_FILE_LIST_FETCH_FAILED
      });
    }
  },
  {
    // Files for a specific version never change - cache permanently
    maxAge: CACHE_MAX_AGE_ONE_YEAR,
    // 1 year
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `files:v2:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

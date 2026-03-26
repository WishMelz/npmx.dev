import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, al as resolvePackageReadmeSource, a3 as renderReadmeHtml, i as handleApiError, D as ERROR_NPM_FETCH_FAILED } from '../../../../nitro/nitro.mjs';
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
import 'valibot';
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
    try {
      const packagePath = getRouterParam(event, "pkg") ?? "";
      const { packageName, markdown, repoInfo } = await resolvePackageReadmeSource(packagePath);
      if (!markdown) {
        return { html: "", mdExists: false, playgroundLinks: [], toc: [] };
      }
      return await renderReadmeHtml(markdown, packageName, repoInfo);
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_NPM_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `readme:v9:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

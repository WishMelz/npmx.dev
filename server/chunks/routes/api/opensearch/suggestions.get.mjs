import { j as defineEventHandler, k as getQuery, S as SearchQuerySchema, N as NPM_REGISTRY, i as handleApiError, l as ERROR_SUGGESTIONS_FETCH_FAILED } from '../../../nitro/nitro.mjs';
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

const suggestions_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    const q = v.parse(SearchQuerySchema, query.q);
    if (!q) {
      return [q, []];
    }
    const params = new URLSearchParams({ text: q, size: "10" });
    const response = await $fetch(`${NPM_REGISTRY}/-/v1/search?${params}`);
    const suggestions = response.objects.map((obj) => obj.package.name);
    return [q, suggestions];
  } catch (error) {
    handleApiError(error, {
      statusCode: 502,
      message: ERROR_SUGGESTIONS_FETCH_FAILED
    });
  }
});

export { suggestions_get as default };
//# sourceMappingURL=suggestions.get.mjs.map

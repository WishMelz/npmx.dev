import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_DAY, g as getRouterParam, c as createError } from '../../../../../nitro/nitro.mjs';
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
import 'valibot';
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

const _repo__get = defineCachedEventHandler(
  async (event) => {
    const owner = getRouterParam(event, "owner");
    const repo = getRouterParam(event, "repo");
    if (!owner || !repo) {
      throw createError({
        status: 400,
        message: "repository not provided"
      });
    }
    const url = `https://api.github.com/repos/${owner}/${repo}/stats/contributors`;
    const headers = {
      "User-Agent": "npmx",
      "Accept": "application/vnd.github+json"
    };
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const maxAttempts = 6;
    let delayMs = 1e3;
    try {
      for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const response = await $fetch.raw(url, { headers });
        const status = response.status;
        if (status === 200) {
          return Array.isArray(response._data) ? response._data : [];
        }
        if (status === 204) {
          return [];
        }
        if (status === 202) {
          if (attempt === maxAttempts - 1) return [];
          await sleep(delayMs);
          delayMs = Math.min(delayMs * 2, 16e3);
          continue;
        }
        return [];
      }
      return [];
    } catch {
      return [];
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_DAY
  }
);

export { _repo__get as default };
//# sourceMappingURL=_repo_.get.mjs.map

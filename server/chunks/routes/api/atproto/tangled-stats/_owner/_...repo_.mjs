import { d as defineCachedEventHandler, C as CACHE_MAX_AGE_ONE_MINUTE, g as getRouterParam, a as Constellation } from '../../../../../nitro/nitro.mjs';
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

const ____repo_ = defineCachedEventHandler(
  async (event) => {
    let owner = getRouterParam(event, "owner");
    let repo = getRouterParam(event, "repo");
    let cachedFetch;
    if (event.context.cachedFetch) {
      cachedFetch = event.context.cachedFetch;
    } else {
      cachedFetch = async (url, options = {}, _ttl) => {
        const data = await $fetch(url, options);
        return { data, isStale: false, cachedAt: null };
      };
    }
    try {
      const { data: html } = await cachedFetch(
        `https://tangled.org/${owner}/${repo}`,
        {
          headers: { "User-Agent": "npmx", "Accept": "text/html" }
        },
        CACHE_MAX_AGE_ONE_MINUTE * 10
      );
      const atUriMatch = html.match(/data-star-subject-at="([^"]+)"/);
      const starMatch = html.match(/countHint=(\d+)/);
      let stars = starMatch?.[1] ? parseInt(starMatch[1], 10) : 0;
      let forks = 0;
      const atUri = atUriMatch?.[1];
      if (atUri) {
        try {
          const constellation = new Constellation(cachedFetch);
          const { data: allLinks } = await constellation.getAllLinks(atUri);
          stars = allLinks.links["sh.tangled.feed.star"]?.[".subject"]?.distinct_dids ?? stars;
          forks = allLinks.links["sh.tangled.repo"]?.[".source"]?.distinct_dids ?? 0;
        } catch {
        }
      }
      return {
        stars,
        forks
      };
    } catch {
      return {
        stars: 0,
        forks: 0
      };
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_MINUTE * 10
  }
);

export { ____repo_ as default };
//# sourceMappingURL=_...repo_.mjs.map

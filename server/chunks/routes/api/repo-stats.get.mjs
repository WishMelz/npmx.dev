import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, c as createError } from '../../nitro/nitro.mjs';
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

const REPO = "npmx-dev/npmx.dev";
const GITHUB_HEADERS = {
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "npmx"
};
const repoStats_get = defineCachedEventHandler(
  async () => {
    const [contributorsCount, commitsCount, prsCount] = await Promise.all([
      fetchPageCount(`https://api.github.com/repos/${REPO}/contributors?per_page=1&anon=false`),
      fetchPageCount(`https://api.github.com/repos/${REPO}/commits?per_page=1`),
      fetchSearchCount("issues", `repo:${REPO} is:pr is:merged`)
    ]);
    return {
      contributors: contributorsCount,
      commits: commitsCount,
      pullRequests: prsCount
    };
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    name: "repo-stats",
    getKey: () => "repo-stats"
  }
);
async function fetchPageCount(url) {
  const response = await fetch(url, { headers: GITHUB_HEADERS });
  if (!response.ok) {
    throw createError({ statusCode: response.status, message: `Failed to fetch ${url}` });
  }
  const link = response.headers.get("link");
  if (link) {
    const match = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
    if (match?.[1]) {
      return Number.parseInt(match[1], 10);
    }
  }
  const body = await response.json();
  return body.length;
}
async function fetchSearchCount(type, query) {
  const response = await fetch(
    `https://api.github.com/search/${type}?q=${encodeURIComponent(query)}&per_page=1`,
    { headers: GITHUB_HEADERS }
  );
  if (!response.ok) {
    throw createError({ statusCode: response.status, message: `Failed to fetch ${type} count` });
  }
  const data = await response.json();
  return data.total_count;
}

export { repoStats_get as default };
//# sourceMappingURL=repo-stats.get.mjs.map

import { d as defineCachedEventHandler, c as createError, E as ERROR_PDS_FETCH_FAILED, B as BLUESKY_API } from '../../../nitro/nitro.mjs';
import { Client } from '@atproto/lex';
import { g as getProfiles } from '../../../_/getProfiles.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atcute/tid';
import 'diff';
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
import '../../../_/defs.defs.mjs';
import '../../../_/defs.defs2.mjs';

const NPMX_PDS_HOST = "https://npmx.social";
const LIST_REPOS_LIMIT = 1e3;
const USER_BATCH_AMOUNT = 25;
const blueskyClient = new Client({ service: BLUESKY_API });
async function fetchAllDids() {
  const dids = [];
  let cursor;
  do {
    const url = new URL(`${NPMX_PDS_HOST}/xrpc/com.atproto.sync.listRepos`);
    url.searchParams.set("limit", String(LIST_REPOS_LIMIT));
    if (cursor) url.searchParams.set("cursor", cursor);
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: ERROR_PDS_FETCH_FAILED
      });
    }
    const data = await response.json();
    dids.push(...data.repos.map((repo) => repo.did));
    cursor = data.cursor;
  } while (cursor);
  return dids;
}
const pdsUsers_get = defineCachedEventHandler(
  async () => {
    const dids = await fetchAllDids();
    const batchPromises = [];
    for (let i = 0; i < dids.length; i += USER_BATCH_AMOUNT) {
      const batch = dids.slice(i, i + USER_BATCH_AMOUNT);
      batchPromises.push(
        blueskyClient.call(
          getProfiles,
          { actors: batch },
          { validateResponse: false }
        ).then(
          (data) => data.profiles.map((profile) => ({
            did: profile.did,
            handle: profile.handle,
            displayName: profile.displayName,
            avatar: profile.avatar
          }))
        ).catch((err) => {
          console.warn("Failed to fetch batch:", err);
          return [];
        })
      );
    }
    return (await Promise.all(batchPromises)).flat();
  },
  {
    maxAge: 3600,
    name: "pds-users",
    getKey: () => "pds-users"
  }
);

export { pdsUsers_get as default };
//# sourceMappingURL=pds-users.get.mjs.map

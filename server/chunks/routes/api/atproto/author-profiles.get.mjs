import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_DAY, k as getQuery, c as createError, bu as BLUESKY_API } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { object, optional, pipe, string, custom, boolean, array, isoDate } from 'valibot';
import { isAtIdentifierString, l, Client } from '@atproto/lex';
import { p as profileViewDetailed } from '../../../_/defs.defs2.mjs';
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
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import '../../../_/defs.defs.mjs';

const AuthorSchema = object({
  name: string(),
  blueskyHandle: optional(
    pipe(
      string(),
      custom((v) => typeof v === "string" && isAtIdentifierString(v))
    )
  )
});
object({
  authors: array(AuthorSchema),
  title: string(),
  date: pipe(string(), isoDate()),
  description: string(),
  path: string(),
  slug: string(),
  excerpt: optional(string()),
  tags: optional(array(string())),
  draft: optional(boolean())
});

const $nsid = "app.bsky.actor.getProfiles";
const main = l.query(
  $nsid,
  l.params({
    actors: l.array(l.string({ format: "at-identifier" }), { maxLength: 25 })
  }),
  l.jsonPayload({
    profiles: l.array(
      l.ref(
        (() => profileViewDetailed)
      )
    )
  })
);
const $lxm = main.nsid, $params = main.parameters, $output = main.output;

const getProfiles_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const getProfiles = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: getProfiles_defs,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const authorProfiles_get = defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const authorsParam = query.authors;
    if (!authorsParam || typeof authorsParam !== "string") {
      throw createError({
        statusCode: 400,
        statusMessage: "authors query parameter is required (JSON array)"
      });
    }
    let authors;
    try {
      const parsed = JSON.parse(authorsParam);
      authors = v.parse(v.array(AuthorSchema), parsed);
    } catch (error) {
      if (error instanceof v.ValiError) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid authors format: ${error.message}`
        });
      }
      throw createError({
        statusCode: 400,
        statusMessage: "authors must be valid JSON"
      });
    }
    if (!Array.isArray(authors) || authors.length === 0) {
      return { authors: [] };
    }
    const handles = authors.map((a) => a.blueskyHandle).filter((v2) => v2 != null);
    if (handles.length === 0) {
      return {
        authors: authors.map((author) => Object.assign(author, { avatar: null, profileUrl: null }))
      };
    }
    const client = new Client({ service: BLUESKY_API });
    const response = await client.call(getProfiles, { actors: handles }).catch(() => ({ profiles: [] }));
    const avatarMap = /* @__PURE__ */ new Map();
    for (const profile of response.profiles) {
      if (profile.avatar) {
        avatarMap.set(profile.handle, profile.avatar);
      }
    }
    const resolvedAuthors = authors.map(
      (author) => Object.assign(author, {
        avatar: author.blueskyHandle ? avatarMap.get(author.blueskyHandle) || null : null,
        profileUrl: author.blueskyHandle ? `https://bsky.app/profile/${author.blueskyHandle}` : null
      })
    );
    return { authors: resolvedAuthors };
  },
  {
    name: "author-profiles",
    maxAge: CACHE_MAX_AGE_ONE_DAY,
    getKey: (event) => {
      const { authors } = getQuery(event);
      return `author-profiles:${authors ?? "npmx.dev"}`;
    }
  }
);

export { authorProfiles_get as default };
//# sourceMappingURL=author-profiles.get.mjs.map

import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_DAY, l as getQuery, c as createError, B as BLUESKY_API } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { object, optional, pipe, string, custom, nullable, boolean, array, isoTimestamp } from 'valibot';
import nodeCrypto from 'node:crypto';
import { isAtIdentifierString, Client } from '@atproto/lex';
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
import 'fast-npm-meta';
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

const AuthorSchema = object({
  name: string(),
  blueskyHandle: optional(
    pipe(
      string(),
      custom((v) => typeof v === "string" && isAtIdentifierString(v))
    )
  )
});
const ResolvedAuthorSchema = object({
  name: string(),
  blueskyHandle: optional(
    pipe(
      string(),
      custom((v) => typeof v === "string" && isAtIdentifierString(v))
    )
  ),
  avatar: nullable(string()),
  profileUrl: nullable(string())
});
object({
  authors: array(AuthorSchema),
  title: string(),
  date: pipe(string(), isoTimestamp()),
  description: string(),
  path: string(),
  slug: string(),
  excerpt: optional(string()),
  tags: optional(array(string())),
  draft: optional(boolean())
});
object({
  authors: array(ResolvedAuthorSchema),
  title: string(),
  date: pipe(string(), isoTimestamp()),
  description: string(),
  path: string(),
  slug: string(),
  excerpt: optional(string()),
  tags: optional(array(string())),
  draft: optional(boolean())
});

const blueskyAuthorProfiles_get = defineCachedEventHandler(
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
    const handles = authors.map((a) => a.blueskyHandle).filter((handle) => handle != null);
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
      const hash = nodeCrypto.createHash("md5").update(JSON.stringify(authors ?? "npmx.dev")).digest("hex");
      return `author-profiles:${hash}`;
    }
  }
);

export { blueskyAuthorProfiles_get as default };
//# sourceMappingURL=bluesky-author-profiles.get.mjs.map

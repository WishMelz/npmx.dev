import { d as defineCachedEventHandler, l as CACHE_MAX_AGE_ONE_DAY, j as getQuery, c as createError, b6 as BLUESKY_API } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { object, optional, string, boolean, array, pipe, isoDate } from 'valibot';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:module';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import 'semver';
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

const AuthorSchema = object({
  name: string(),
  blueskyHandle: optional(string())
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
    const handles = authors.filter((a) => a.blueskyHandle).map((a) => a.blueskyHandle);
    if (handles.length === 0) {
      return {
        authors: authors.map((author) => Object.assign(author, { avatar: null, profileUrl: null }))
      };
    }
    const response = await $fetch(`${BLUESKY_API}app.bsky.actor.getProfiles`, {
      query: { actors: handles }
    }).catch(() => ({ profiles: [] }));
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
      return `author-profiles:${authors != null ? authors : "npmx.dev"}`;
    }
  }
);

export { authorProfiles_get as default };
//# sourceMappingURL=author-profiles.get.mjs.map

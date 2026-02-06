import { b7 as AT_URI_REGEX, d as defineCachedEventHandler, C as CACHE_MAX_AGE_ONE_MINUTE, j as getQuery, c as createError, b6 as BLUESKY_API } from '../../../nitro/nitro.mjs';
import { object, pipe, string, startsWith, minLength, regex, safeParse, flatten } from 'valibot';
import { AppBskyFeedDefs, jsonToLex, AppBskyFeedPost, AppBskyEmbedImages, AppBskyEmbedExternal } from '@atproto/api';
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

const BlueSkyUriSchema = object({
  uri: pipe(
    string(),
    startsWith("at://"),
    minLength(10),
    regex(AT_URI_REGEX, "Must be a valid at:// URI")
  )
});

const $bluesky = $fetch.create({ baseURL: BLUESKY_API });
const blueskyComments_get = defineCachedEventHandler(
  async (event) => {
    var _a, _b, _c, _d, _e;
    const query = getQuery(event);
    const parsed = safeParse(BlueSkyUriSchema, query);
    if (!parsed.success) {
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid URI format: ${((_a = flatten(parsed.issues).root) == null ? void 0 : _a[0]) || "Must be a valid at:// URI"}`
      });
    }
    const { uri } = parsed.output;
    try {
      const [threadResponse, likesResponse, postsResponse] = await Promise.all([
        $bluesky("/app.bsky.feed.getPostThread", {
          query: { uri, depth: 10 }
        }).catch((err) => {
          console.warn(`[Bluesky] Thread fetch failed for ${uri}:`, err.message);
          return null;
        }),
        $bluesky("/app.bsky.feed.getLikes", {
          query: { uri, limit: 50 }
        }).catch(() => ({ likes: [] })),
        $bluesky("/app.bsky.feed.getPosts", {
          query: { uris: [uri] }
        }).catch(() => ({ posts: [] }))
      ]);
      if (!threadResponse) {
        return {
          thread: null,
          likes: [],
          totalLikes: 0,
          postUrl: atUriToWebUrl(uri),
          _empty: true
        };
      }
      const thread = parseThread(threadResponse.thread);
      return {
        thread,
        likes: likesResponse.likes,
        totalLikes: (_e = (_d = (_c = (_b = postsResponse.posts) == null ? void 0 : _b[0]) == null ? void 0 : _c.likeCount) != null ? _d : thread == null ? void 0 : thread.likeCount) != null ? _e : 0,
        postUrl: atUriToWebUrl(uri)
      };
    } catch (error) {
      console.error("[Bluesky] Unexpected error:", error);
      return {
        thread: null,
        likes: [],
        totalLikes: 0,
        postUrl: atUriToWebUrl(uri),
        _error: true
      };
    }
  },
  {
    name: "bluesky-comments",
    maxAge: CACHE_MAX_AGE_ONE_MINUTE,
    getKey: (event) => {
      const { uri } = getQuery(event);
      return `bluesky:${uri}`;
    }
  }
);
function atUriToWebUrl(uri) {
  const match = uri.match(AT_URI_REGEX);
  if (!match) return null;
  const [, did, rkey] = match;
  return `https://bsky.app/profile/${did}/post/${rkey}`;
}
function parseEmbed(embed) {
  if (!embed) return void 0;
  if (AppBskyEmbedImages.isView(embed)) {
    return {
      type: "images",
      images: embed.images
    };
  }
  if (AppBskyEmbedExternal.isView(embed)) {
    return {
      type: "external",
      external: embed.external
    };
  }
  return void 0;
}
function parseThread(thread) {
  var _a, _b, _c;
  if (!AppBskyFeedDefs.isThreadViewPost(thread)) return null;
  const { post } = thread;
  const lexPostRecord = jsonToLex(post.record);
  const recordValidation = AppBskyFeedPost.validateRecord(lexPostRecord);
  if (!recordValidation.success) return null;
  const record = recordValidation.value;
  const replies = [];
  if (thread.replies) {
    for (const reply of thread.replies) {
      if (AppBskyFeedDefs.isThreadViewPost(reply)) {
        const parsed = parseThread(reply);
        if (parsed) replies.push(parsed);
      }
    }
    replies.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  return {
    uri: post.uri,
    cid: post.cid,
    author: {
      did: post.author.did,
      handle: post.author.handle,
      displayName: post.author.displayName,
      avatar: post.author.avatar
    },
    text: record.text,
    facets: record.facets,
    embed: parseEmbed(post.embed),
    createdAt: record.createdAt,
    likeCount: (_a = post.likeCount) != null ? _a : 0,
    replyCount: (_b = post.replyCount) != null ? _b : 0,
    repostCount: (_c = post.repostCount) != null ? _c : 0,
    replies
  };
}

export { blueskyComments_get as default };
//# sourceMappingURL=bluesky-comments.get.mjs.map

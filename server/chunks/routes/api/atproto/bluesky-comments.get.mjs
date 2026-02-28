import { bv as main$a, d as defineCachedEventHandler, C as CACHE_MAX_AGE_ONE_MINUTE, k as getQuery, c as createError, bu as BLUESKY_API, bT as BSKY_POST_AT_URI_REGEX } from '../../../nitro/nitro.mjs';
import { l, isAtUriString, Client } from '@atproto/lex';
import { a as profileView, t as threadgateView, b as threadViewPost, n as notFoundPost, c as blockedPost, d as postView, m as main$4, e as main$5, f as main$6, g as main$7, h as main$8, i as main$9, v as view, j as view$1 } from '../../../_/defs.defs2.mjs';
import { s as selfLabels } from '../../../_/defs.defs.mjs';
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
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const $nsid$3 = "app.bsky.feed.getLikes";
const like = l.typedObject(
  $nsid$3,
  "like",
  l.object({
    actor: l.ref((() => profileView)),
    createdAt: l.string({ format: "datetime" }),
    indexedAt: l.string({ format: "datetime" })
  })
);
const main$3 = l.query(
  $nsid$3,
  l.params({
    cid: l.optional(l.string({ format: "cid" })),
    uri: l.string({ format: "at-uri" }),
    limit: l.optional(
      l.withDefault(l.integer({ maximum: 100, minimum: 1 }), 50)
    ),
    cursor: l.optional(l.string())
  }),
  l.jsonPayload({
    cid: l.optional(l.string({ format: "cid" })),
    uri: l.string({ format: "at-uri" }),
    likes: l.array(l.ref((() => like))),
    cursor: l.optional(l.string())
  })
);
const $lxm$2 = main$3.nsid, $params$2 = main$3.parameters, $output$2 = main$3.output;

const getLikes_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm$2,
  $nsid: $nsid$3,
  $output: $output$2,
  $params: $params$2,
  like: like,
  main: main$3
}, Symbol.toStringTag, { value: 'Module' }));

const getLikes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: getLikes_defs,
  $lxm: $lxm$2,
  $nsid: $nsid$3,
  $output: $output$2,
  $params: $params$2,
  like: like,
  main: main$3
}, Symbol.toStringTag, { value: 'Module' }));

const $nsid$2 = "app.bsky.feed.getPostThread";
const main$2 = l.query(
  $nsid$2,
  l.params({
    uri: l.string({ format: "at-uri" }),
    depth: l.optional(
      l.withDefault(l.integer({ maximum: 1e3, minimum: 0 }), 6)
    ),
    parentHeight: l.optional(
      l.withDefault(l.integer({ maximum: 1e3, minimum: 0 }), 80)
    )
  }),
  l.jsonPayload({
    thread: l.typedUnion(
      [
        l.typedRef(
          (() => threadViewPost)
        ),
        l.typedRef((() => notFoundPost)),
        l.typedRef((() => blockedPost))
      ],
      false
    ),
    threadgate: l.optional(
      l.ref((() => threadgateView))
    )
  }),
  ["NotFound"]
);
const $lxm$1 = main$2.nsid, $params$1 = main$2.parameters, $output$1 = main$2.output;

const getPostThread_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm$1,
  $nsid: $nsid$2,
  $output: $output$1,
  $params: $params$1,
  main: main$2
}, Symbol.toStringTag, { value: 'Module' }));

const getPostThread = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: getPostThread_defs,
  $lxm: $lxm$1,
  $nsid: $nsid$2,
  $output: $output$1,
  $params: $params$1,
  main: main$2
}, Symbol.toStringTag, { value: 'Module' }));

const $nsid$1 = "app.bsky.feed.getPosts";
const main$1 = l.query(
  $nsid$1,
  l.params({
    uris: l.array(l.string({ format: "at-uri" }), { maxLength: 25 })
  }),
  l.jsonPayload({
    posts: l.array(l.ref((() => postView)))
  })
);
const $lxm = main$1.nsid, $params = main$1.parameters, $output = main$1.output;

const getPosts_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm,
  $nsid: $nsid$1,
  $output: $output,
  $params: $params,
  main: main$1
}, Symbol.toStringTag, { value: 'Module' }));

const getPosts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: getPosts_defs,
  $lxm: $lxm,
  $nsid: $nsid$1,
  $output: $output,
  $params: $params,
  main: main$1
}, Symbol.toStringTag, { value: 'Module' }));

const $nsid = "app.bsky.feed.post";
const main = l.record(
  "tid",
  $nsid,
  l.object({
    tags: l.optional(
      l.array(l.string({ maxLength: 640, maxGraphemes: 64 }), { maxLength: 8 })
    ),
    text: l.string({ maxLength: 3e3, maxGraphemes: 300 }),
    embed: l.optional(
      l.typedUnion(
        [
          l.typedRef((() => main$5)),
          l.typedRef((() => main$6)),
          l.typedRef((() => main$7)),
          l.typedRef((() => main$8)),
          l.typedRef(
            (() => main$9)
          )
        ],
        false
      )
    ),
    langs: l.optional(
      l.array(l.string({ format: "language" }), { maxLength: 3 })
    ),
    reply: l.optional(l.ref((() => replyRef))),
    facets: l.optional(
      l.array(l.ref((() => main$4)))
    ),
    labels: l.optional(
      l.typedUnion(
        [l.typedRef((() => selfLabels))],
        false
      )
    ),
    entities: l.optional(l.array(l.ref((() => entity)))),
    createdAt: l.string({ format: "datetime" })
  })
);
main.$type;
const $safeValidate = /* @__PURE__ */ main.safeValidate.bind(main);
const entity = l.typedObject(
  $nsid,
  "entity",
  l.object({
    type: l.string(),
    index: l.ref((() => textSlice)),
    value: l.string()
  })
);
const replyRef = l.typedObject(
  $nsid,
  "replyRef",
  l.object({
    root: l.ref((() => main$a)),
    parent: l.ref((() => main$a))
  })
);
const textSlice = l.typedObject(
  $nsid,
  "textSlice",
  l.object({
    end: l.integer({ minimum: 0 }),
    start: l.integer({ minimum: 0 })
  })
);

const blueskyClient = new Client({ service: BLUESKY_API });
const blueskyComments_get = defineCachedEventHandler(
  async (event) => {
    const { uri } = getQuery(event);
    if (typeof uri !== "string" || !isAtUriString(uri)) {
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid URI format: Must be a valid at:// URI`
      });
    }
    try {
      const [threadResponse, likesResponse, postsResponse] = await Promise.all([
        blueskyClient.call(getPostThread, { uri, depth: 10 }).catch((err) => {
          console.warn(`[Bluesky] Thread fetch failed for ${uri}:`, err.message);
          return null;
        }),
        blueskyClient.call(getLikes, { uri, limit: 50 }).catch(() => ({ likes: [] })),
        blueskyClient.call(getPosts, { uris: [uri] }).catch(() => ({ posts: [] }))
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
        totalLikes: postsResponse.posts?.[0]?.likeCount ?? thread?.likeCount ?? 0,
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
  const match = uri.match(BSKY_POST_AT_URI_REGEX);
  if (!match) return null;
  const [, did, rkey] = match;
  return `https://bsky.app/profile/${did}/post/${rkey}`;
}
function parseEmbed(embed) {
  if (!embed) return void 0;
  if (view.$isTypeOf(embed)) {
    return {
      type: "images",
      images: embed.images
    };
  }
  if (view$1.$isTypeOf(embed)) {
    return {
      type: "external",
      external: embed.external
    };
  }
  return void 0;
}
function parseThread(thread) {
  if (!threadViewPost.$isTypeOf(thread)) return null;
  const { post } = thread;
  const recordValidation = $safeValidate(post.record);
  if (!recordValidation.success) return null;
  const record = recordValidation.value;
  const replies = [];
  if (thread.replies) {
    for (const reply of thread.replies) {
      if (threadViewPost.$isTypeOf(reply)) {
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
    likeCount: post.likeCount ?? 0,
    replyCount: post.replyCount ?? 0,
    repostCount: post.repostCount ?? 0,
    replies
  };
}

export { blueskyComments_get as default };
//# sourceMappingURL=bluesky-comments.get.mjs.map

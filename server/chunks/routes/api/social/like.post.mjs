import { e as eventHandlerWithOAuthSession, c as createError, ak as throwOnMissingOAuthScope, al as readBody, am as PackageLikesUtils, ap as PACKAGE_SUBJECT_REF, aq as $build, an as like, ao as LIKES_SCOPE } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { Client } from '@atproto/lex';
import { P as PackageLikeBodySchema } from '../../../_/social.mjs';
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

const like_post = eventHandlerWithOAuthSession(async (event, oAuthSession) => {
  const loggedInUsersDid = oAuthSession?.did.toString();
  if (!oAuthSession || !loggedInUsersDid) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  await throwOnMissingOAuthScope(oAuthSession, LIKES_SCOPE);
  const body = v.parse(PackageLikeBodySchema, await readBody(event));
  const likesUtil = new PackageLikesUtils();
  const likesResult = await likesUtil.getLikes(body.packageName, loggedInUsersDid);
  if (likesResult.userHasLiked) {
    return likesResult;
  }
  const subjectRef = PACKAGE_SUBJECT_REF(body.packageName);
  const client = new Client(oAuthSession);
  const like$1 = $build({
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    subjectRef
  });
  const result = await client.create(like, like$1);
  if (!result) {
    throw createError({
      status: 500,
      message: "Failed to create a like"
    });
  }
  return await likesUtil.likeAPackageAndReturnLikes(body.packageName, loggedInUsersDid, result.uri);
});

export { like_post as default };
//# sourceMappingURL=like.post.mjs.map

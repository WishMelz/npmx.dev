import { e as eventHandlerWithOAuthSession, c as createError, ak as throwOnMissingOAuthScope, al as readBody, am as PackageLikesUtils, an as like, ao as LIKES_SCOPE } from '../../../nitro/nitro.mjs';
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

const like_delete = eventHandlerWithOAuthSession(async (event, oAuthSession) => {
  const loggedInUsersDid = oAuthSession?.did.toString();
  if (!oAuthSession || !loggedInUsersDid) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  await throwOnMissingOAuthScope(oAuthSession, LIKES_SCOPE);
  const body = v.parse(PackageLikeBodySchema, await readBody(event));
  const likesUtil = new PackageLikesUtils();
  const getTheUsersLikedRecord = await likesUtil.getTheUsersLikedRecord(
    body.packageName,
    loggedInUsersDid
  );
  if (getTheUsersLikedRecord) {
    const client = new Client(oAuthSession);
    await client.delete(like, {
      rkey: getTheUsersLikedRecord.rkey
    });
    const result = await likesUtil.unlikeAPackageAndReturnLikes(body.packageName, loggedInUsersDid);
    return result;
  } else {
    await likesUtil.setUnlikeInCache(body.packageName, loggedInUsersDid);
  }
  console.warn(
    `User ${loggedInUsersDid} tried to unlike a package ${body.packageName} but it was not liked by them.`
  );
  return await likesUtil.getLikes(body.packageName, loggedInUsersDid);
});

export { like_delete as default };
//# sourceMappingURL=like.delete.mjs.map

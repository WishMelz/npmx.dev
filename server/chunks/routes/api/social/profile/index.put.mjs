import { e as eventHandlerWithOAuthSession, c as createError, an as throwOnMissingOAuthScope, ao as readBody, av as $build, aw as profile, au as ProfileUtils, ax as PROFILE_SCOPE } from '../../../../nitro/nitro.mjs';
import { parse } from 'valibot';
import { Client } from '@atproto/lex';
import { a as ProfileEditBodySchema } from '../../../../_/social.mjs';
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

const index_put = eventHandlerWithOAuthSession(async (event, oAuthSession) => {
  const loggedInUsersDid = oAuthSession?.did.toString();
  if (!oAuthSession || !loggedInUsersDid) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  await throwOnMissingOAuthScope(oAuthSession, PROFILE_SCOPE);
  const requestBody = await readBody(event);
  if (requestBody.website && !URL.canParse(requestBody.website)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid website" });
  }
  const body = parse(ProfileEditBodySchema, requestBody);
  const client = new Client(oAuthSession);
  const profile$1 = $build({
    displayName: body.displayName,
    ...body.description ? {
      description: body.description
    } : {},
    ...body.website ? {
      website: body.website
    } : {}
  });
  const result = await client.put(profile, profile$1, { rkey: "self" });
  if (!result) {
    throw createError({
      status: 500,
      message: "Failed to update the profile"
    });
  }
  const profileUtil = new ProfileUtils();
  await profileUtil.updateProfileCache(loggedInUsersDid, body);
  return result.validationStatus;
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map

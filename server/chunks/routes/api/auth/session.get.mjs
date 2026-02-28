import { e as eventHandlerWithOAuthSession } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { safeParse } from 'valibot';
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
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const PublicUserSessionSchema = v.object({
  // Safe to pass to the frontend
  did: v.string(),
  handle: v.string(),
  pds: v.pipe(v.string(), v.url()),
  avatar: v.optional(v.pipe(v.string(), v.url())),
  relogin: v.optional(v.boolean())
});

const session_get = eventHandlerWithOAuthSession(async (event, _, serverSession) => {
  const result = safeParse(PublicUserSessionSchema, serverSession.data.public);
  if (!result.success) {
    return null;
  }
  if (serverSession.data.oauthSession && serverSession.data?.public?.did) {
    await serverSession.update({
      oauthSession: void 0
    });
    return {
      ...result.output,
      relogin: true
    };
  }
  return result.output;
});

export { session_get as default };
//# sourceMappingURL=session.get.mjs.map

import { i as defineEventHandler, b8 as useServerSession } from '../../../nitro/nitro.mjs';
import { object, optional, pipe, string, url, safeParse } from 'valibot';
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

const PublicUserSessionSchema = object({
  // Safe to pass to the frontend
  did: string(),
  handle: string(),
  pds: pipe(string(), url()),
  avatar: optional(pipe(string(), url()))
});

const session_get = defineEventHandler(async (event) => {
  const serverSession = await useServerSession(event);
  const result = safeParse(PublicUserSessionSchema, serverSession.data.public);
  if (!result.success) {
    return null;
  }
  return result.output;
});

export { session_get as default };
//# sourceMappingURL=session.get.mjs.map

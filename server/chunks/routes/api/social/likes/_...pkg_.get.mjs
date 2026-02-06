import { e as eventHandlerWithOAuthSession, g as getRouterParam, c as createError, Y as PackageLikesUtils } from '../../../../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atproto/oauth-client-node';
import 'valibot';
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

const ____pkg__get = eventHandlerWithOAuthSession(async (event, oAuthSession, _) => {
  const packageName = getRouterParam(event, "pkg");
  if (!packageName) {
    throw createError({
      status: 400,
      message: "package name not provided"
    });
  }
  const likesUtil = new PackageLikesUtils();
  return await likesUtil.getLikes(packageName, oAuthSession == null ? void 0 : oAuthSession.did.toString());
});

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

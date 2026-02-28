import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_DAY, g as getRouterParam, a$ as getGravatarFromUsername, c as createError, b0 as ERROR_GRAVATAR_EMAIL_UNAVAILABLE, i as handleApiError, b1 as ERROR_GRAVATAR_FETCH_FAILED } from '../../../nitro/nitro.mjs';
import * as v from 'valibot';
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

const NPM_USERNAME_RE = /^[a-z0-9]([\w.-]*[a-z0-9])?$/i;
const NPM_USERNAME_MAX_LENGTH = 50;
const NpmUsernameSchema = v.pipe(
  v.string(),
  v.trim(),
  v.nonEmpty("Username is required"),
  v.maxLength(NPM_USERNAME_MAX_LENGTH, "Username is too long"),
  v.regex(NPM_USERNAME_RE, "Invalid username format")
);
const GravatarQuerySchema = v.object({
  username: NpmUsernameSchema
});

const _username__get = defineCachedEventHandler(
  async (event) => {
    const rawUsername = getRouterParam(event, "username");
    try {
      const { username } = v.parse(GravatarQuerySchema, {
        username: rawUsername
      });
      const hash = await getGravatarFromUsername(username);
      if (!hash) {
        throw createError({
          statusCode: 404,
          message: ERROR_GRAVATAR_EMAIL_UNAVAILABLE
        });
      }
      return { hash };
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_GRAVATAR_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_DAY,
    swr: true,
    getKey: (event) => {
      const username = getRouterParam(event, "username")?.trim().toLowerCase();
      return `gravatar:v1:${username}`;
    }
  }
);

export { _username__get as default };
//# sourceMappingURL=_username_.get.mjs.map

import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, c as createError, N as NPM_REGISTRY, ad as FetchError } from '../../../../../nitro/nitro.mjs';
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
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const NPM_ORG_NAME_RE = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function validateOrgName(name) {
  if (!name || name.length > 50 || !NPM_ORG_NAME_RE.test(name)) {
    throw createError({
      // TODO: throwing 404 rather than 400 as it's cacheable
      statusCode: 404,
      message: `Invalid org name: ${name}`
    });
  }
}
const packages_get = defineCachedEventHandler(
  async (event) => {
    const org = getRouterParam(event, "org")?.toLowerCase();
    if (!org) {
      throw createError({
        // TODO: throwing 404 rather than 400 as it's cacheable
        statusCode: 404,
        message: "Org name is required"
      });
    }
    validateOrgName(org);
    try {
      const data = await $fetch(
        `${NPM_REGISTRY}/-/org/${encodeURIComponent(org)}/package`
      );
      return {
        packages: Object.keys(data),
        count: Object.keys(data).length
      };
    } catch (error) {
      if (error instanceof FetchError && error.statusCode === 404) {
        throw createError({ statusCode: 404, message: `Organization not found: ${org}` });
      }
      console.warn(`[org-packages] Failed to fetch packages for org ${org}:`, error);
      return {
        packages: [],
        count: 0
      };
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const org = getRouterParam(event, "org")?.toLowerCase() ?? "";
      return `org-packages:v1:${org}`;
    }
  }
);

export { packages_get as default };
//# sourceMappingURL=packages.get.mjs.map

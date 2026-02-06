import { d as defineCachedEventHandler, c as createError } from '../../nitro/nitro.mjs';
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

const contributors_get = defineCachedEventHandler(
  async () => {
    const allContributors = [];
    let page = 1;
    const perPage = 100;
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/npmx-dev/npmx.dev/contributors?per_page=${perPage}&page=${page}`,
        {
          headers: {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "npmx"
          }
        }
      );
      if (!response.ok) {
        throw createError({
          statusCode: response.status,
          message: "Failed to fetch contributors"
        });
      }
      const contributors = await response.json();
      if (contributors.length === 0) {
        break;
      }
      allContributors.push(...contributors);
      if (contributors.length < perPage) {
        break;
      }
      page++;
    }
    return allContributors.filter((c) => !c.login.includes("[bot]"));
  },
  {
    maxAge: 3600,
    // Cache for 1 hour
    name: "github-contributors",
    getKey: () => "contributors"
  }
);

export { contributors_get as default };
//# sourceMappingURL=contributors.get.mjs.map

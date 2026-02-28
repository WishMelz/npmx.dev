import { j as defineEventHandler, g as getRouterParam } from '../../../nitro/nitro.mjs';
import { all } from 'module-replacements';
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

const replacementMap = new Map(
  all.moduleReplacements.map((r) => [r.moduleName, r])
);
const ____pkg__get = defineEventHandler((event) => {
  const pkg = getRouterParam(event, "pkg");
  if (!pkg) return null;
  return replacementMap.get(pkg) ?? null;
});

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

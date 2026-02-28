import { d as defineCachedEventHandler, g as getRouterParam, c as createError, T as parsePackageParam, A as assertValidPackageName, U as generateDocsWithDeno } from '../../../../nitro/nitro.mjs';
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

const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const pkgParam = getRouterParam(event, "pkg");
    if (!pkgParam) {
      throw createError({ statusCode: 404, message: "Package name is required" });
    }
    const { packageName, version } = parsePackageParam(pkgParam);
    if (!packageName) {
      throw createError({ statusCode: 404, message: "Package name is required" });
    }
    assertValidPackageName(packageName);
    if (!version) {
      throw createError({ statusCode: 404, message: "Package version is required" });
    }
    let generated;
    try {
      generated = await generateDocsWithDeno(packageName, version);
    } catch (error) {
      console.error(`Doc generation failed for ${packageName}@${version}:`, error);
      return {
        package: packageName,
        version,
        html: "",
        toc: null,
        status: "error",
        message: "Failed to generate documentation. Please try again later."
      };
    }
    if (!generated) {
      return {
        package: packageName,
        version,
        html: "",
        toc: null,
        status: "missing",
        message: "Docs are not available for this package. It may not have TypeScript types."
      };
    }
    return {
      package: packageName,
      version,
      html: generated.html,
      toc: generated.toc,
      status: "ok"
    };
  },
  {
    maxAge: 60 * 60,
    // 1 hour cache
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `docs:v2:${pkg}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

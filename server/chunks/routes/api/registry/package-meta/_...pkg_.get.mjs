import { d as defineCachedEventHandler, ae as CACHE_MAX_AGE_FIVE_MINUTES, g as getRouterParam, c as createError, n as encodePackageName, B as fetchNpmPackage, af as NPM_API, i as handleApiError, F as ERROR_NPM_FETCH_FAILED } from '../../../../nitro/nitro.mjs';
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
    const packageName = decodeURIComponent(pkgParam);
    const encodedName = encodePackageName(packageName);
    try {
      const [packument, downloads] = await Promise.all([
        fetchNpmPackage(packageName),
        $fetch(`${NPM_API}/downloads/point/last-week/${encodedName}`).catch(
          () => null
        )
      ]);
      const latestVersion = packument["dist-tags"]?.latest || Object.values(packument["dist-tags"] ?? {})[0] || "";
      const modified = packument.time?.modified || packument.time?.[latestVersion] || "";
      const date = packument.time?.[latestVersion] || modified;
      let repositoryUrl;
      if (packument.repository) {
        const repo = packument.repository;
        const rawUrl = typeof repo === "string" ? repo : repo.url;
        if (rawUrl) {
          repositoryUrl = rawUrl.replace(/^git\+/, "").replace(/^git:\/\//, "https://").replace(/\.git$/, "");
        }
      }
      let bugsUrl;
      if (packument.bugs) {
        const bugs = packument.bugs;
        bugsUrl = typeof bugs === "string" ? bugs : bugs.url;
      }
      let author;
      if (packument.author) {
        const a = packument.author;
        author = typeof a === "string" ? { name: a } : { name: a.name, email: a.email, url: a.url };
      }
      const license = packument.license ? typeof packument.license === "string" ? packument.license : packument.license.type : void 0;
      return {
        name: packument.name,
        version: latestVersion,
        description: packument.description,
        keywords: packument.keywords,
        license,
        date,
        links: {
          npm: `https://www.npmjs.com/package/${packument.name}`,
          homepage: packument.homepage,
          repository: repositoryUrl,
          bugs: bugsUrl
        },
        author,
        maintainers: packument.maintainers,
        weeklyDownloads: downloads?.downloads
      };
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_NPM_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_FIVE_MINUTES,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `package-meta:v1:${pkg}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

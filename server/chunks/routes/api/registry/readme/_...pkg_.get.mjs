import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, p as parsePackageParams, u as fetchNpmPackage, U as NPM_MISSING_README_SENTINEL, J as parseRepositoryInfo, K as renderReadmeHtml, h as handleApiError, w as ERROR_NPM_FETCH_FAILED } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { a as PackageRouteParamsSchema } from '../../../../_/package.mjs';
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

const standardReadmeFilenames = [
  "README.md",
  "readme.md",
  "Readme.md",
  "README",
  "readme",
  "README.markdown",
  "readme.markdown"
];
const standardReadmePattern = /^readme(\.md|\.markdown)?$/i;
async function fetchReadmeFromJsdelivr(packageName, readmeFilenames, version) {
  const versionSuffix = version ? `@${version}` : "";
  for (const filename of readmeFilenames) {
    try {
      const url = `https://cdn.jsdelivr.net/npm/${packageName}${versionSuffix}/${filename}`;
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      }
    } catch {
    }
  }
  return null;
}
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    var _a, _b;
    const pkgParamSegments = (_b = (_a = getRouterParam(event, "pkg")) == null ? void 0 : _a.split("/")) != null ? _b : [];
    const { rawPackageName, rawVersion } = parsePackageParams(pkgParamSegments);
    try {
      const { packageName, version } = v.parse(PackageRouteParamsSchema, {
        packageName: rawPackageName,
        version: rawVersion
      });
      const packageData = await fetchNpmPackage(packageName);
      let readmeContent;
      let readmeFilename;
      if (version) {
        const versionData = packageData.versions[version];
        if (versionData) {
          readmeContent = versionData.readme;
          readmeFilename = versionData.readmeFilename;
        }
      } else {
        readmeContent = packageData.readme;
        readmeFilename = packageData.readmeFilename;
      }
      const hasValidNpmReadme = readmeContent && readmeContent !== NPM_MISSING_README_SENTINEL;
      if (!hasValidNpmReadme || !isStandardReadme(readmeFilename)) {
        const jsdelivrReadme = await fetchReadmeFromJsdelivr(
          packageName,
          standardReadmeFilenames,
          version
        );
        if (jsdelivrReadme) {
          readmeContent = jsdelivrReadme;
        }
      }
      if (!readmeContent || readmeContent === NPM_MISSING_README_SENTINEL) {
        return { html: "", playgroundLinks: [], toc: [] };
      }
      const repoInfo = parseRepositoryInfo(packageData.repository);
      return await renderReadmeHtml(readmeContent, packageName, repoInfo);
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_NPM_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      var _a;
      const pkg = (_a = getRouterParam(event, "pkg")) != null ? _a : "";
      return `readme:v8:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);
function isStandardReadme(filename) {
  return !!filename && standardReadmePattern.test(filename);
}

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

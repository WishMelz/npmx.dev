import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, p as parsePackageParams, c as createError, u as fetchNpmPackage, S as parseAttestationToProvenanceDetails, h as handleApiError, T as ERROR_PROVENANCE_FETCH_FAILED } from '../../../../nitro/nitro.mjs';
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

const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    var _a, _b, _c;
    const pkgParamSegments = (_b = (_a = getRouterParam(event, "pkg")) == null ? void 0 : _a.split("/")) != null ? _b : [];
    const { rawPackageName, rawVersion } = parsePackageParams(pkgParamSegments);
    if (!rawVersion) {
      throw createError({
        statusCode: 400,
        message: "Version is required for provenance."
      });
    }
    try {
      const parsed = v.parse(PackageRouteParamsSchema, {
        packageName: rawPackageName,
        version: rawVersion
      });
      const { packageName, version } = parsed;
      const packument = await fetchNpmPackage(packageName);
      const versionData = packument.versions[version];
      if (!versionData) {
        throw createError({
          statusCode: 404,
          message: `Version ${version} not found for package ${packageName}.`
        });
      }
      const dist = versionData.dist;
      const attestationsUrl = (_c = dist == null ? void 0 : dist.attestations) == null ? void 0 : _c.url;
      if (!attestationsUrl) {
        return null;
      }
      const response = await $fetch(attestationsUrl);
      const details = parseAttestationToProvenanceDetails(response);
      return details;
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_PROVENANCE_FETCH_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      var _a;
      const pkg = (_a = getRouterParam(event, "pkg")) != null ? _a : "";
      return `provenance:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

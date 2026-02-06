import { d as defineCachedEventHandler, l as CACHE_MAX_AGE_ONE_DAY, g as getRouterParam, p as parsePackageParams, N as NPM_REGISTRY, m as hasBuiltInTypes, n as getTypesPackageName, o as analyzePackage, h as handleApiError, q as ERROR_PACKAGE_ANALYSIS_FAILED, r as getCreatePackageName, s as parseRepoUrl } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { a as PackageRouteParamsSchema } from '../../../../_/package.mjs';
import { getLatestVersion, getLatestVersionBatch } from 'fast-npm-meta';
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
    var _a, _b, _c, _d;
    const pkgParamSegments = (_b = (_a = getRouterParam(event, "pkg")) == null ? void 0 : _a.split("/")) != null ? _b : [];
    const { rawPackageName, rawVersion } = parsePackageParams(pkgParamSegments);
    try {
      const { packageName, version } = v.parse(PackageRouteParamsSchema, {
        packageName: rawPackageName,
        version: rawVersion
      });
      const encodedName = encodePackageName(packageName);
      const versionSuffix = version ? `/${version}` : "/latest";
      const pkg = await $fetch(
        `${NPM_REGISTRY}/${encodedName}${versionSuffix}`
      );
      let typesPackage;
      if (!hasBuiltInTypes(pkg)) {
        const typesPkgName = getTypesPackageName(packageName);
        typesPackage = await fetchTypesPackageInfo(typesPkgName);
      }
      const createPackage = await findAssociatedCreatePackage(packageName, pkg);
      const analysis = analyzePackage(pkg, { typesPackage, createPackage });
      return {
        package: packageName,
        version: (_d = (_c = pkg.version) != null ? _c : version) != null ? _d : "latest",
        ...analysis
      };
    } catch (error) {
      handleApiError(error, {
        statusCode: 502,
        message: ERROR_PACKAGE_ANALYSIS_FAILED
      });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_DAY,
    // 24 hours - analysis rarely changes
    swr: true,
    getKey: (event) => {
      var _a;
      const pkg = (_a = getRouterParam(event, "pkg")) != null ? _a : "";
      return `analysis:v1:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);
function encodePackageName(name) {
  if (name.startsWith("@")) {
    return `@${encodeURIComponent(name.slice(1))}`;
  }
  return encodeURIComponent(name);
}
async function fetchTypesPackageInfo(packageName) {
  const result = await getLatestVersion(packageName, { metadata: true, throw: false });
  if ("error" in result) {
    return void 0;
  }
  return {
    packageName,
    deprecated: result.deprecated
  };
}
function getCreatePackageNameCandidates(packageName) {
  const baseName = getCreatePackageName(packageName);
  return [baseName, `${baseName}-app`];
}
async function findAssociatedCreatePackage(packageName, basePkg) {
  const candidates = getCreatePackageNameCandidates(packageName);
  const results = await getLatestVersionBatch(candidates, { metadata: true, throw: false });
  for (let i = 0; i < candidates.length; i++) {
    const result = results[i];
    const candidateName = candidates[i];
    if (!result || !candidateName || "error" in result) continue;
    const createPkgInfo = await fetchCreatePackageForValidation(
      candidateName,
      basePkg,
      result.deprecated
    );
    if (createPkgInfo) {
      return createPkgInfo;
    }
  }
  return void 0;
}
async function fetchCreatePackageForValidation(createPkgName, basePkg, deprecated) {
  try {
    const encodedName = encodePackageName(createPkgName);
    const createPkg = await $fetch(`${NPM_REGISTRY}/${encodedName}/latest`);
    if (!isAssociatedPackage(basePkg, createPkg)) {
      return void 0;
    }
    return {
      packageName: createPkgName,
      deprecated
    };
  } catch {
    return void 0;
  }
}
function isAssociatedPackage(basePkg, createPkg) {
  var _a, _b, _c, _d, _e, _f;
  const baseMaintainers = new Set((_b = (_a = basePkg.maintainers) == null ? void 0 : _a.map((m) => m.name.toLowerCase())) != null ? _b : []);
  const createMaintainers = (_d = (_c = createPkg.maintainers) == null ? void 0 : _c.map((m) => m.name.toLowerCase())) != null ? _d : [];
  const hasSharedMaintainer = createMaintainers.some((name) => baseMaintainers.has(name));
  return hasSharedMaintainer || hasSameRepositoryOwner((_e = basePkg.repository) == null ? void 0 : _e.url, (_f = createPkg.repository) == null ? void 0 : _f.url);
}
function hasSameRepositoryOwner(baseRepoUrl, createRepoUrl) {
  if (!baseRepoUrl || !createRepoUrl) return false;
  const baseRef = parseRepoUrl(baseRepoUrl);
  const createRef = parseRepoUrl(createRepoUrl);
  if (!baseRef || !createRef) return false;
  if (baseRef.provider !== createRef.provider) return false;
  if (baseRef.host && createRef.host && baseRef.host !== createRef.host) return false;
  return baseRef.owner.toLowerCase() === createRef.owner.toLowerCase();
}

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

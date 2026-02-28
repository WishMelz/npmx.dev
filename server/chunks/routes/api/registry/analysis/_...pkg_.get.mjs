import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_DAY, g as getRouterParam, p as parsePackageParams, m as PackageRouteParamsSchema, n as encodePackageName, N as NPM_REGISTRY, o as hasBuiltInTypes, q as getTypesPackageName, r as getPackageFileTree, s as flattenFileTree, t as analyzePackage, v as getDevDependencySuggestion, i as handleApiError, w as ERROR_PACKAGE_ANALYSIS_FAILED, x as getCreatePackageName, y as parseRepoUrl } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { getLatestVersion, getLatestVersionBatch } from 'fast-npm-meta';
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
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
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
      let files;
      if (!hasBuiltInTypes(pkg)) {
        const typesPkgName = getTypesPackageName(packageName);
        const resolvedVersion = pkg.version ?? version ?? "latest";
        const [typesResult, fileTreeResult] = await Promise.allSettled([
          fetchTypesPackageInfo(typesPkgName),
          getPackageFileTree(packageName, resolvedVersion)
        ]);
        if (typesResult.status === "fulfilled") {
          typesPackage = typesResult.value;
        }
        if (fileTreeResult.status === "fulfilled") {
          files = flattenFileTree(fileTreeResult.value.tree);
        }
      }
      const createPackage = await findAssociatedCreatePackage(packageName, pkg);
      const analysis = analyzePackage(pkg, {
        typesPackage,
        createPackage,
        files
      });
      const devDependencySuggestion = getDevDependencySuggestion(packageName, pkg.readme);
      return {
        package: packageName,
        version: pkg.version ?? version ?? "latest",
        devDependencySuggestion,
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
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `analysis:v2:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);
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
  const baseMaintainers = new Set(basePkg.maintainers?.map((m) => m.name.toLowerCase()) ?? []);
  const createMaintainers = createPkg.maintainers?.map((m) => m.name.toLowerCase()) ?? [];
  const hasSharedMaintainer = createMaintainers.some((name) => baseMaintainers.has(name));
  return hasSharedMaintainer || hasSameRepositoryOwner(basePkg.repository?.url, createPkg.repository?.url);
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

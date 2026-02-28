import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, c as createError, T as parsePackageParam, m as PackageRouteParamsSchema, B as fetchNpmPackage, D as setHeader, G as CACHE_MAX_AGE_ONE_YEAR, i as handleApiError, au as ERROR_SKILLS_FETCH_FAILED, r as getPackageFileTree, av as findSkillDirs, aw as fetchSkillsList, ax as fetchSkillContent, ay as ERROR_SKILL_NOT_FOUND, az as fetchSkillFile, aA as ERROR_SKILL_FILE_NOT_FOUND } from '../../nitro/nitro.mjs';
import * as v from 'valibot';
import { S as SkillNameSchema } from '../../_/skills.mjs';
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

const CACHE_VERSION = 1;
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const pkgParam = getRouterParam(event, "pkg");
    if (!pkgParam) {
      throw createError({ statusCode: 404, message: "Package name is required" });
    }
    const { packageName, version: rawVersion, rest } = parsePackageParam(pkgParam);
    try {
      const validated = v.parse(PackageRouteParamsSchema, { packageName, version: rawVersion });
      let version = validated.version;
      let isVersioned = !!version;
      if (!version) {
        const packument = await fetchNpmPackage(validated.packageName);
        version = packument["dist-tags"]?.latest;
        if (!version) {
          throw createError({ statusCode: 404, message: "No latest version found" });
        }
      }
      if (isVersioned) {
        setHeader(event, "Cache-Control", `public, max-age=${CACHE_MAX_AGE_ONE_YEAR}, immutable`);
      }
      if (rest.length === 0) {
        return await handleDiscovery(validated.packageName, version);
      }
      const skillName = v.parse(SkillNameSchema, rest[0]);
      if (rest.length === 1) {
        return await handleSkillContent(validated.packageName, version, skillName);
      }
      const filePath = rest.slice(1).join("/");
      return await handleSkillFile(event, validated.packageName, version, skillName, filePath);
    } catch (error) {
      handleApiError(error, { statusCode: 502, message: ERROR_SKILLS_FETCH_FAILED });
    }
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => {
      const pkg = getRouterParam(event, "pkg") ?? "";
      return `skills:v${CACHE_VERSION}:${pkg.replace(/\/+$/, "").trim()}`;
    }
  }
);
async function handleDiscovery(packageName, version) {
  const fileTree = await getPackageFileTree(packageName, version);
  const skillDirs = findSkillDirs(fileTree.tree);
  if (skillDirs.length === 0) {
    return { package: packageName, version, skills: [] };
  }
  const skills = await fetchSkillsList(packageName, version, skillDirs);
  return { package: packageName, version, skills };
}
async function handleSkillContent(packageName, version, skillName) {
  try {
    const { frontmatter, content } = await fetchSkillContent(packageName, version, skillName);
    return { package: packageName, version, skill: skillName, frontmatter, content };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error && error.statusCode === 404) {
      throw createError({ statusCode: 404, message: ERROR_SKILL_NOT_FOUND });
    }
    throw error;
  }
}
async function handleSkillFile(event, packageName, version, skillName, filePath) {
  if (filePath.includes("..") || filePath.startsWith("/")) {
    throw createError({ statusCode: 400, message: "Invalid file path" });
  }
  const allowedPrefixes = ["scripts/", "references/", "assets/", "refs/"];
  if (!allowedPrefixes.some((p) => filePath.startsWith(p))) {
    throw createError({
      statusCode: 400,
      message: "File must be in scripts/, references/, or assets/ subdirectory"
    });
  }
  try {
    const content = await fetchSkillFile(packageName, version, `skills/${skillName}/${filePath}`);
    const ext = filePath.split(".").pop()?.toLowerCase() || "";
    const contentTypes = {
      md: "text/markdown",
      txt: "text/plain",
      json: "application/json",
      js: "text/javascript",
      ts: "text/typescript",
      sh: "text/x-shellscript",
      py: "text/x-python"
    };
    setHeader(event, "Content-Type", contentTypes[ext] || "text/plain");
    return content;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error && error.statusCode === 404) {
      throw createError({ statusCode: 404, message: ERROR_SKILL_FILE_NOT_FOUND });
    }
    throw error;
  }
}

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

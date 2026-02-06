import { d as defineCachedEventHandler, b as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, j as getQuery, c as createError, p as parsePackageParams, t as assertValidPackageName, u as fetchNpmPackage, v as setHeader, h as handleApiError, w as ERROR_NPM_FETCH_FAILED } from '../../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { a as PackageRouteParamsSchema } from '../../../../../_/package.mjs';
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

const NPM_DOWNLOADS_API = "https://api.npmjs.org/downloads/point";
const OSV_QUERY_API = "https://api.osv.dev/v1/query";
const BUNDLEPHOBIA_API = "https://bundlephobia.com/api/size";
const NPMS_API = "https://api.npms.io/v2/package";
const QUERY_SCHEMA = v.object({
  color: v.optional(v.string()),
  name: v.optional(v.string()),
  labelColor: v.optional(v.string()),
  label: v.optional(v.string())
});
const COLORS = {
  blue: "#3b82f6",
  green: "#22c55e",
  purple: "#a855f7",
  orange: "#f97316",
  red: "#ef4444",
  cyan: "#06b6d4",
  slate: "#64748b",
  yellow: "#eab308"};
const DEFAULT_CHAR_WIDTH = 7;
const CHARS_WIDTH = {
  engines: 5.5
};
function measureTextWidth(text, charWidth) {
  charWidth != null ? charWidth : charWidth = DEFAULT_CHAR_WIDTH;
  const paddingX = 8;
  return Math.max(40, Math.round(text.length * charWidth) + paddingX * 2);
}
function formatBytes(bytes) {
  if (!+bytes) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  return `${value} ${sizes[i]}`;
}
function formatNumber(num) {
  return new Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" }).format(
    num
  );
}
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function getLatestVersion(pkgData) {
  var _a;
  return (_a = pkgData["dist-tags"]) == null ? void 0 : _a.latest;
}
async function fetchDownloads(packageName, period) {
  var _a;
  try {
    const response = await fetch(`${NPM_DOWNLOADS_API}/${period}/${packageName}`);
    const data = await response.json();
    return (_a = data.downloads) != null ? _a : 0;
  } catch {
    return 0;
  }
}
async function fetchNpmsScore(packageName) {
  try {
    const response = await fetch(`${NPMS_API}/${encodeURIComponent(packageName)}`);
    const data = await response.json();
    return data.score;
  } catch {
    return null;
  }
}
async function fetchVulnerabilities(packageName, version) {
  var _a, _b;
  try {
    const response = await fetch(OSV_QUERY_API, {
      method: "POST",
      body: JSON.stringify({
        version,
        package: { name: packageName, ecosystem: "npm" }
      })
    });
    const data = await response.json();
    return (_b = (_a = data.vulns) == null ? void 0 : _a.length) != null ? _b : 0;
  } catch {
    return 0;
  }
}
async function fetchInstallSize(packageName, version) {
  var _a;
  try {
    const response = await fetch(`${BUNDLEPHOBIA_API}?package=${packageName}@${version}`);
    const data = await response.json();
    return (_a = data.size) != null ? _a : null;
  } catch {
    return null;
  }
}
const badgeStrategies = {
  "version": async (pkgData, requestedVersion) => {
    var _a;
    const value = (_a = requestedVersion != null ? requestedVersion : getLatestVersion(pkgData)) != null ? _a : "unknown";
    return { label: "version", value, color: COLORS.blue };
  },
  "license": async (pkgData) => {
    var _a, _b;
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? (_a = pkgData.versions) == null ? void 0 : _a[latest] : void 0;
    const value = (_b = versionData == null ? void 0 : versionData.license) != null ? _b : "unknown";
    return { label: "license", value, color: COLORS.green };
  },
  "size": async (pkgData) => {
    var _a, _b, _c;
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? (_a = pkgData.versions) == null ? void 0 : _a[latest] : void 0;
    let bytes = (_c = (_b = versionData == null ? void 0 : versionData.dist) == null ? void 0 : _b.unpackedSize) != null ? _c : 0;
    if (latest) {
      const installSize = await fetchInstallSize(pkgData.name, latest);
      if (installSize !== null) bytes = installSize;
    }
    return { label: "install size", value: formatBytes(bytes), color: COLORS.purple };
  },
  "downloads": async (pkgData) => {
    const count = await fetchDownloads(pkgData.name, "last-month");
    return { label: "downloads/mo", value: formatNumber(count), color: COLORS.orange };
  },
  "downloads-day": async (pkgData) => {
    const count = await fetchDownloads(pkgData.name, "last-day");
    return { label: "downloads/day", value: formatNumber(count), color: COLORS.orange };
  },
  "downloads-week": async (pkgData) => {
    const count = await fetchDownloads(pkgData.name, "last-week");
    return { label: "downloads/wk", value: formatNumber(count), color: COLORS.orange };
  },
  "downloads-month": async (pkgData) => {
    const count = await fetchDownloads(pkgData.name, "last-month");
    return { label: "downloads/mo", value: formatNumber(count), color: COLORS.orange };
  },
  "downloads-year": async (pkgData) => {
    const count = await fetchDownloads(pkgData.name, "last-year");
    return { label: "downloads/yr", value: formatNumber(count), color: COLORS.orange };
  },
  "vulnerabilities": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const count = latest ? await fetchVulnerabilities(pkgData.name, latest) : 0;
    const isSafe = count === 0;
    const color = isSafe ? COLORS.green : COLORS.red;
    return { label: "vulns", value: String(count), color };
  },
  "dependencies": async (pkgData) => {
    var _a, _b;
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? (_a = pkgData.versions) == null ? void 0 : _a[latest] : void 0;
    const count = Object.keys((_b = versionData == null ? void 0 : versionData.dependencies) != null ? _b : {}).length;
    return { label: "dependencies", value: String(count), color: COLORS.cyan };
  },
  "created": async (pkgData) => {
    var _a, _b, _c;
    const dateStr = (_c = (_a = pkgData.time) == null ? void 0 : _a.created) != null ? _c : (_b = pkgData.time) == null ? void 0 : _b.modified;
    return { label: "created", value: formatDate(dateStr), color: COLORS.slate };
  },
  "updated": async (pkgData) => {
    var _a, _b, _c, _d;
    const dateStr = (_d = (_c = (_a = pkgData.time) == null ? void 0 : _a.modified) != null ? _c : (_b = pkgData.time) == null ? void 0 : _b.created) != null ? _d : (/* @__PURE__ */ new Date()).toISOString();
    return { label: "updated", value: formatDate(dateStr), color: COLORS.slate };
  },
  "engines": async (pkgData) => {
    var _a, _b, _c, _d;
    const latest = getLatestVersion(pkgData);
    const nodeVersion = (_d = latest && ((_c = (_b = (_a = pkgData.versions) == null ? void 0 : _a[latest]) == null ? void 0 : _b.engines) == null ? void 0 : _c.node)) != null ? _d : "*";
    return { label: "node", value: nodeVersion, color: COLORS.yellow };
  },
  "types": async (pkgData) => {
    var _a;
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? (_a = pkgData.versions) == null ? void 0 : _a[latest] : void 0;
    const hasTypes = !!((versionData == null ? void 0 : versionData.types) || (versionData == null ? void 0 : versionData.typings));
    const value = hasTypes ? "included" : "missing";
    const color = hasTypes ? COLORS.blue : COLORS.slate;
    return { label: "types", value, color };
  },
  "maintainers": async (pkgData) => {
    var _a, _b;
    const count = (_b = (_a = pkgData.maintainers) == null ? void 0 : _a.length) != null ? _b : 0;
    return { label: "maintainers", value: String(count), color: COLORS.cyan };
  },
  "deprecated": async (pkgData) => {
    var _a, _b;
    const latest = getLatestVersion(pkgData);
    const isDeprecated = !!(latest && ((_b = (_a = pkgData.versions) == null ? void 0 : _a[latest]) == null ? void 0 : _b.deprecated));
    return {
      label: "status",
      value: isDeprecated ? "deprecated" : "active",
      color: isDeprecated ? COLORS.red : COLORS.green
    };
  },
  "quality": async (pkgData) => {
    const score = await fetchNpmsScore(pkgData.name);
    const value = score ? `${Math.round(score.detail.quality * 100)}%` : "unknown";
    return { label: "quality", value, color: COLORS.purple };
  },
  "popularity": async (pkgData) => {
    const score = await fetchNpmsScore(pkgData.name);
    const value = score ? `${Math.round(score.detail.popularity * 100)}%` : "unknown";
    return { label: "popularity", value, color: COLORS.cyan };
  },
  "maintenance": async (pkgData) => {
    const score = await fetchNpmsScore(pkgData.name);
    const value = score ? `${Math.round(score.detail.maintenance * 100)}%` : "unknown";
    return { label: "maintenance", value, color: COLORS.yellow };
  },
  "score": async (pkgData) => {
    const score = await fetchNpmsScore(pkgData.name);
    const value = score ? `${Math.round(score.final * 100)}%` : "unknown";
    return { label: "score", value, color: COLORS.blue };
  }
};
const BadgeTypeSchema = v.picklist(Object.keys(badgeStrategies));
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    var _a, _b;
    const query = getQuery(event);
    const typeParam = getRouterParam(event, "type");
    const pkgParamSegments = (_b = (_a = getRouterParam(event, "pkg")) == null ? void 0 : _a.split("/")) != null ? _b : [];
    if (pkgParamSegments.length === 0) {
      throw createError({ statusCode: 404, message: "Package name is required." });
    }
    const { rawPackageName, rawVersion } = parsePackageParams(pkgParamSegments);
    try {
      const { packageName, version: requestedVersion } = v.parse(PackageRouteParamsSchema, {
        packageName: rawPackageName,
        version: rawVersion
      });
      const queryParams = v.safeParse(QUERY_SCHEMA, query);
      const userColor = queryParams.success ? queryParams.output.color : void 0;
      const labelColor = queryParams.success ? queryParams.output.labelColor : void 0;
      const showName = queryParams.success && queryParams.output.name === "true";
      const userLabel = queryParams.success ? queryParams.output.label : void 0;
      const badgeTypeResult = v.safeParse(BadgeTypeSchema, typeParam);
      const strategyKey = badgeTypeResult.success ? badgeTypeResult.output : "version";
      const strategy = badgeStrategies[strategyKey];
      assertValidPackageName(packageName);
      const pkgData = await fetchNpmPackage(packageName);
      const strategyResult = await strategy(pkgData, requestedVersion);
      const finalLabel = userLabel ? userLabel : showName ? packageName : strategyResult.label;
      const finalValue = strategyResult.value;
      const rawColor = userColor != null ? userColor : strategyResult.color;
      const finalColor = (rawColor == null ? void 0 : rawColor.startsWith("#")) ? rawColor : `#${rawColor}`;
      const rawLabelColor = labelColor != null ? labelColor : "#0a0a0a";
      const finalLabelColor = (rawLabelColor == null ? void 0 : rawLabelColor.startsWith("#")) ? rawLabelColor : `#${rawLabelColor}`;
      const leftWidth = measureTextWidth(finalLabel);
      const rightWidth = measureTextWidth(
        finalValue,
        CHARS_WIDTH[strategyKey]
      );
      const totalWidth = leftWidth + rightWidth;
      const height = 20;
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${finalLabel}: ${finalValue}">
          <clipPath id="r">
            <rect width="${totalWidth}" height="${height}" rx="3" fill="#fff"/>
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="${leftWidth}" height="${height}" fill="${finalLabelColor}"/>
            <rect x="${leftWidth}" width="${rightWidth}" height="${height}" fill="${finalColor}"/>
          </g>
          <g text-anchor="middle" font-family="'Geist', system-ui, -apple-system, sans-serif" font-size="11">
            <text x="${leftWidth / 2}" y="14" fill="#ffffff">${finalLabel}</text>
            <text x="${leftWidth + rightWidth / 2}" y="14" fill="#ffffff">${finalValue}</text>
          </g>
        </svg>
      `.trim();
      setHeader(event, "Content-Type", "image/svg+xml");
      setHeader(
        event,
        "Cache-Control",
        `public, max-age=${CACHE_MAX_AGE_ONE_HOUR}, s-maxage=${CACHE_MAX_AGE_ONE_HOUR}`
      );
      return svg;
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
      var _a, _b;
      const type = (_a = getRouterParam(event, "type")) != null ? _a : "version";
      const pkg = (_b = getRouterParam(event, "pkg")) != null ? _b : "";
      const query = getQuery(event);
      return `badge:${type}:${pkg}:${JSON.stringify(query)}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, g as getRouterParam, k as getQuery, z as hash, c as createError, p as parsePackageParams, m as PackageRouteParamsSchema, A as assertValidPackageName, B as fetchNpmPackage, D as setHeader, i as handleApiError, F as ERROR_NPM_FETCH_FAILED } from '../../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { createCanvas } from '@napi-rs/canvas';
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

const NPM_DOWNLOADS_API = "https://api.npmjs.org/downloads/point";
const OSV_QUERY_API = "https://api.osv.dev/v1/query";
const BUNDLEPHOBIA_API = "https://bundlephobia.com/api/size";
const NPMS_API = "https://api.npms.io/v2/package";
const SafeStringSchema = v.pipe(v.string(), v.regex(/^[^<>"&]*$/, "Invalid characters"));
const QUERY_SCHEMA = v.object({
  color: v.optional(SafeStringSchema),
  name: v.optional(v.string()),
  labelColor: v.optional(SafeStringSchema),
  label: v.optional(SafeStringSchema)
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
const CHAR_WIDTH = 7;
const SHIELDS_CHAR_WIDTH = 6;
const BADGE_PADDING_X = 8;
const MIN_BADGE_TEXT_WIDTH = 40;
const SHIELDS_LABEL_PADDING_X = 5;
const BADGE_FONT_SHORTHAND = "normal normal 400 11px Geist, system-ui, -apple-system, sans-serif";
const SHIELDS_FONT_SHORTHAND = "normal normal 400 11px Verdana, Geneva, DejaVu Sans, sans-serif";
let cachedCanvasContext;
function getCanvasContext() {
  if (cachedCanvasContext !== void 0) {
    return cachedCanvasContext;
  }
  try {
    cachedCanvasContext = createCanvas(1, 1).getContext("2d");
  } catch {
    cachedCanvasContext = null;
  }
  return cachedCanvasContext;
}
function measureTextWidth(text, font) {
  const context = getCanvasContext();
  if (context) {
    context.font = font;
    const measuredWidth = context.measureText(text).width;
    if (Number.isFinite(measuredWidth) && measuredWidth > 0) {
      return Math.ceil(measuredWidth);
    }
  }
  return null;
}
function measureDefaultTextWidth(text) {
  const measuredWidth = measureTextWidth(text, BADGE_FONT_SHORTHAND);
  if (measuredWidth !== null) {
    return Math.max(MIN_BADGE_TEXT_WIDTH, measuredWidth + BADGE_PADDING_X * 2);
  }
  return Math.max(MIN_BADGE_TEXT_WIDTH, Math.round(text.length * CHAR_WIDTH) + BADGE_PADDING_X * 2);
}
function measureShieldsTextLength(text) {
  const measuredWidth = measureTextWidth(text, SHIELDS_FONT_SHORTHAND);
  if (measuredWidth !== null) {
    return Math.max(1, measuredWidth);
  }
  return Math.max(1, Math.round(text.length * SHIELDS_CHAR_WIDTH));
}
function renderDefaultBadgeSvg(params) {
  const { finalColor, finalLabel, finalLabelColor, finalValue } = params;
  const leftWidth = finalLabel.trim().length === 0 ? 0 : measureDefaultTextWidth(finalLabel);
  const rightWidth = measureDefaultTextWidth(finalValue);
  const totalWidth = leftWidth + rightWidth;
  const height = 20;
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${finalLabel}: ${finalValue}">
      <clipPath id="r">
        <rect width="${totalWidth}" height="${height}" rx="3" fill="#fff"/>
      </clipPath>
      <g clip-path="url(#r)">
        <rect width="${leftWidth}" height="${height}" fill="${finalLabelColor}"/>
        <rect x="${leftWidth}" width="${rightWidth}" height="${height}" fill="${finalColor}"/>
      </g>
      <g text-anchor="middle" font-family="Geist, system-ui, -apple-system, sans-serif" font-size="11">
        <text x="${leftWidth / 2}" y="14" fill="#ffffff">${finalLabel}</text>
        <text x="${leftWidth + rightWidth / 2}" y="14" fill="#ffffff">${finalValue}</text>
      </g>
    </svg>
  `.trim();
}
function renderShieldsBadgeSvg(params) {
  const { finalColor, finalLabel, finalLabelColor, finalValue } = params;
  const hasLabel = finalLabel.trim().length > 0;
  const leftTextLength = hasLabel ? measureShieldsTextLength(finalLabel) : 0;
  const rightTextLength = measureShieldsTextLength(finalValue);
  const leftWidth = hasLabel ? leftTextLength + SHIELDS_LABEL_PADDING_X * 2 : 0;
  const rightWidth = rightTextLength + SHIELDS_LABEL_PADDING_X * 2;
  const totalWidth = leftWidth + rightWidth;
  const height = 20;
  const title = `${finalLabel}: ${finalValue}`;
  const leftCenter = Math.round(leftWidth / 2 * 10);
  const rightCenter = Math.round((leftWidth + rightWidth / 2) * 10);
  const leftTextLengthAttr = leftTextLength * 10;
  const rightTextLengthAttr = rightTextLength * 10;
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${title}">
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <clipPath id="r">
        <rect width="${totalWidth}" height="${height}" rx="3" fill="#fff"/>
      </clipPath>
      <g clip-path="url(#r)">
        <rect width="${leftWidth}" height="${height}" fill="${finalLabelColor}"/>
        <rect x="${leftWidth}" width="${rightWidth}" height="${height}" fill="${finalColor}"/>
        <rect width="${totalWidth}" height="${height}" fill="url(#s)"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="Verdana, Geneva, DejaVu Sans, sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text aria-hidden="true" x="${leftCenter}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${leftTextLengthAttr}">${finalLabel}</text>
        <text x="${leftCenter}" y="140" transform="scale(.1)" fill="#fff" textLength="${leftTextLengthAttr}">${finalLabel}</text>
        <text aria-hidden="true" x="${rightCenter}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${rightTextLengthAttr}">${finalValue}</text>
        <text x="${rightCenter}" y="140" transform="scale(.1)" fill="#fff" textLength="${rightTextLengthAttr}">${finalValue}</text>
      </g>
    </svg>
  `.trim();
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
  return pkgData["dist-tags"]?.latest;
}
async function fetchDownloads(packageName, period) {
  try {
    const response = await fetch(`${NPM_DOWNLOADS_API}/${period}/${packageName}`);
    const data = await response.json();
    return data.downloads ?? 0;
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
  try {
    const response = await fetch(OSV_QUERY_API, {
      method: "POST",
      body: JSON.stringify({
        version,
        package: { name: packageName, ecosystem: "npm" }
      })
    });
    const data = await response.json();
    return data.vulns?.length ?? 0;
  } catch {
    return 0;
  }
}
async function fetchInstallSize(packageName, version) {
  try {
    const response = await fetch(`${BUNDLEPHOBIA_API}?package=${packageName}@${version}`);
    const data = await response.json();
    return data.size ?? null;
  } catch {
    return null;
  }
}
const badgeStrategies = {
  "version": async (pkgData, requestedVersion) => {
    const version = requestedVersion ?? getLatestVersion(pkgData) ?? "unknown";
    return {
      label: "version",
      value: version === "unknown" ? version : `v${version}`,
      color: COLORS.blue
    };
  },
  "license": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? pkgData.versions?.[latest] : void 0;
    const value = versionData?.license ?? "unknown";
    return { label: "license", value, color: COLORS.green };
  },
  "size": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? pkgData.versions?.[latest] : void 0;
    let bytes = versionData?.dist?.unpackedSize ?? 0;
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
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? pkgData.versions?.[latest] : void 0;
    const count = Object.keys(versionData?.dependencies ?? {}).length;
    return { label: "dependencies", value: String(count), color: COLORS.cyan };
  },
  "created": async (pkgData) => {
    const dateStr = pkgData.time?.created ?? pkgData.time?.modified;
    return { label: "created", value: formatDate(dateStr), color: COLORS.slate };
  },
  "updated": async (pkgData) => {
    const dateStr = pkgData.time?.modified ?? pkgData.time?.created ?? (/* @__PURE__ */ new Date()).toISOString();
    return { label: "updated", value: formatDate(dateStr), color: COLORS.slate };
  },
  "engines": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const nodeVersion = (latest && pkgData.versions?.[latest]?.engines?.node) ?? "*";
    return { label: "node", value: nodeVersion, color: COLORS.yellow };
  },
  "types": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const versionData = latest ? pkgData.versions?.[latest] : void 0;
    const hasTypes = !!(versionData?.types || versionData?.typings);
    const value = hasTypes ? "included" : "missing";
    const color = hasTypes ? COLORS.blue : COLORS.slate;
    return { label: "types", value, color };
  },
  "maintainers": async (pkgData) => {
    const count = pkgData.maintainers?.length ?? 0;
    return { label: "maintainers", value: String(count), color: COLORS.cyan };
  },
  "deprecated": async (pkgData) => {
    const latest = getLatestVersion(pkgData);
    const isDeprecated = !!(latest && pkgData.versions?.[latest]?.deprecated);
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
const BadgeStyleSchema = v.picklist(["default", "shieldsio"]);
const ____pkg__get = defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const typeParam = getRouterParam(event, "type");
    const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
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
      const badgeStyleResult = v.safeParse(BadgeStyleSchema, query.style);
      const badgeStyle = badgeStyleResult.success ? badgeStyleResult.output : "default";
      const badgeTypeResult = v.safeParse(BadgeTypeSchema, typeParam);
      const strategyKey = badgeTypeResult.success ? badgeTypeResult.output : "version";
      const strategy = badgeStrategies[strategyKey];
      assertValidPackageName(packageName);
      const pkgData = await fetchNpmPackage(packageName);
      const strategyResult = await strategy(pkgData, requestedVersion);
      const finalLabel = userLabel ? userLabel : showName ? packageName : strategyResult.label;
      const finalValue = strategyResult.value;
      const rawColor = userColor ?? strategyResult.color;
      const finalColor = rawColor?.startsWith("#") ? rawColor : `#${rawColor}`;
      const defaultLabelColor = badgeStyle === "shieldsio" ? "#555" : "#0a0a0a";
      const rawLabelColor = labelColor ?? defaultLabelColor;
      const finalLabelColor = rawLabelColor.startsWith("#") ? rawLabelColor : `#${rawLabelColor}`;
      const renderFn = badgeStyle === "shieldsio" ? renderShieldsBadgeSvg : renderDefaultBadgeSvg;
      const svg = renderFn({ finalColor, finalLabel, finalLabelColor, finalValue });
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
      const type = getRouterParam(event, "type") ?? "version";
      const pkg = getRouterParam(event, "pkg") ?? "";
      const query = getQuery(event);
      return `badge:${type}:${pkg}:${hash(query)}`;
    }
  }
);

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

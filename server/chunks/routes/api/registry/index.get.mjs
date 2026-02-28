import { j as defineEventHandler, k as getQuery, c as createError, u as useRuntimeConfig, a5 as verifyImageUrl, a6 as isAllowedImageUrl, a7 as resolveAndValidateHost, a8 as setResponseHeaders, b as CACHE_MAX_AGE_ONE_DAY, a9 as sendStream } from '../../../nitro/nitro.mjs';
import { Readable } from 'node:stream';
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

const FETCH_TIMEOUT_MS = 15e3;
const MAX_SIZE = 10 * 1024 * 1024;
const MAX_REDIRECTS = 5;
const REDIRECT_STATUSES = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const rawUrl = query.url;
  const url = Array.isArray(rawUrl) ? rawUrl[0] : rawUrl;
  const sig = Array.isArray(query.sig) ? query.sig[0] : query.sig;
  if (!url) {
    throw createError({
      statusCode: 400,
      message: 'Missing required "url" query parameter.'
    });
  }
  if (!sig) {
    throw createError({
      statusCode: 400,
      message: 'Missing required "sig" query parameter.'
    });
  }
  const { imageProxySecret } = useRuntimeConfig();
  if (!imageProxySecret || !verifyImageUrl(url, sig, imageProxySecret)) {
    throw createError({
      statusCode: 403,
      message: "Invalid signature."
    });
  }
  if (!isAllowedImageUrl(url)) {
    throw createError({
      statusCode: 400,
      message: "Invalid or disallowed image URL."
    });
  }
  if (!await resolveAndValidateHost(url)) {
    throw createError({
      statusCode: 400,
      message: "Invalid or disallowed image URL."
    });
  }
  try {
    let currentUrl = url;
    let response;
    for (let i = 0; i <= MAX_REDIRECTS; i++) {
      response = await fetch(currentUrl, {
        headers: {
          "User-Agent": "npmx-image-proxy/1.0",
          "Accept": "image/*"
        },
        redirect: "manual",
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
      });
      if (!REDIRECT_STATUSES.has(response.status)) {
        break;
      }
      const location = response.headers.get("location");
      if (!location) {
        break;
      }
      const redirectUrl = new URL(location, currentUrl).href;
      if (!isAllowedImageUrl(redirectUrl)) {
        throw createError({
          statusCode: 400,
          message: "Redirect to disallowed URL."
        });
      }
      if (!await resolveAndValidateHost(redirectUrl)) {
        throw createError({
          statusCode: 400,
          message: "Redirect to disallowed URL."
        });
      }
      await response.body?.cancel();
      currentUrl = redirectUrl;
    }
    if (!response) {
      throw createError({
        statusCode: 502,
        message: "Failed to fetch image."
      });
    }
    if (REDIRECT_STATUSES.has(response.status)) {
      await response.body?.cancel();
      throw createError({
        statusCode: 502,
        message: "Too many redirects."
      });
    }
    if (!response.ok) {
      await response.body?.cancel();
      throw createError({
        statusCode: response.status === 404 ? 404 : 502,
        message: `Failed to fetch image: ${response.status}`
      });
    }
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    if (!contentType.startsWith("image/") || contentType.includes("svg")) {
      await response.body?.cancel();
      throw createError({
        statusCode: 400,
        message: "URL does not point to an allowed image type."
      });
    }
    const contentLength = response.headers.get("content-length");
    if (contentLength && Number.parseInt(contentLength, 10) > MAX_SIZE) {
      await response.body?.cancel();
      throw createError({
        statusCode: 413,
        message: "Image too large."
      });
    }
    if (!response.body) {
      throw createError({
        statusCode: 502,
        message: "No response body from upstream."
      });
    }
    setResponseHeaders(event, {
      "Content-Type": contentType,
      "Cache-Control": `public, max-age=${CACHE_MAX_AGE_ONE_DAY}, s-maxage=${CACHE_MAX_AGE_ONE_DAY}`,
      // Security headers - prevent content sniffing and restrict usage
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'"
    });
    let bytesRead = 0;
    const upstream = Readable.fromWeb(response.body);
    const limited = new Readable({
      read() {
        upstream.resume();
      }
    });
    upstream.on("data", (chunk) => {
      bytesRead += chunk.length;
      if (bytesRead > MAX_SIZE) {
        upstream.destroy();
        limited.destroy(new Error("Image too large"));
      } else {
        if (!limited.push(chunk)) {
          upstream.pause();
        }
      }
    });
    upstream.on("end", () => limited.push(null));
    upstream.on("error", (err) => limited.destroy(err));
    return sendStream(event, limited);
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    throw createError({
      statusCode: 502,
      message: "Failed to proxy image."
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map

import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { LRUCache } from 'lru-cache';
import { createGenerator } from '@unocss/core';
import presetWind from '@unocss/preset-wind3';
import { parse as parse$2 } from 'devalue';
import { createConsola } from 'consola';
import { requestLocalLock, AtprotoDohHandleResolver, NodeOAuthClient } from '@atproto/oauth-client-node';
import * as v$1 from 'valibot';
import { object, array, string, boolean, pipe, minLength, url, parse as parse$3 } from 'valibot';
import { Redis } from '@upstash/redis';
import { isBuiltin } from 'node:module';
import { doc } from '@jsr/deno__doc';
import nodeCrypto, { createHash } from 'node:crypto';
import { getLatestVersion } from 'fast-npm-meta';
import validatePackageName from 'validate-npm-package-name';
import { maxSatisfying, prerelease } from 'semver';
import { FontStyle, INITIAL, EncodedTokenMetadata, Registry as Registry$1, Theme } from '@shikijs/vscode-textmate';
import { toHtml } from 'hast-util-to-html';
import { toRegExp } from 'oniguruma-to-es';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { createUnhead } from 'unhead';
import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$2, join } from 'node:path';
import { toValue, isRef, hasInjectionContext, inject, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'vue';
import { createRouterMatcher } from 'vue-router';
import { l as l$3 } from '@atproto/lex';
import { fileURLToPath } from 'node:url';
import { createHead as createHead$1, propsToString } from 'unhead/server';
import { FlatMetaPlugin } from 'unhead/plugins';
import { walkResolver } from 'unhead/utils';
import { createRenderer } from 'vue-bundle-renderer/runtime';
import { renderToString } from 'vue/server-renderer';

const subtle = nodeCrypto.webcrypto?.subtle || {};
const randomUUID = () => {
  return nodeCrypto.randomUUID();
};
const getRandomValues = (array) => {
  return nodeCrypto.webcrypto.getRandomValues(array);
};
const _crypto = {
  randomUUID,
  getRandomValues,
  subtle
};

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$2(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$2(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$2(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$2(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode$1;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode$1(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode$1(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode$1(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

// src/utils.ts
var alphabetByEncoding = {};
var alphabetByValue = Array.from({ length: 64 });
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["-"] = 62;
alphabetByValue[62] = "-";
alphabetByEncoding["_"] = 63;
alphabetByValue[63] = "_";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
var stringToBuffer = (value) => {
  return new TextEncoder().encode(value);
};
var bufferToString = (value) => {
  return new TextDecoder().decode(value);
};
var base64urlDecode = (_input) => {
  const input = _input + "=".repeat((4 - _input.length % 4) % 4);
  let totalByteLength = input.length / 4 * 3;
  if (input.endsWith("==")) {
    totalByteLength -= 2;
  } else if (input.endsWith("=")) {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] === "=") {
        bits >>= bitsPerLetter;
      } else {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      }
    }
    const chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};
var base64urlEncode = (_input) => {
  const input = typeof _input === "string" ? stringToBuffer(_input) : _input;
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
  }
  return str;
};

// src/index.ts
var defaults = {
  encryption: { saltBits: 256, algorithm: "aes-256-cbc", iterations: 1, minPasswordlength: 32 },
  integrity: { saltBits: 256, algorithm: "sha256", iterations: 1, minPasswordlength: 32 },
  ttl: 0,
  timestampSkewSec: 60,
  localtimeOffsetMsec: 0
};
var clone = (options) => ({
  ...options,
  encryption: { ...options.encryption },
  integrity: { ...options.integrity }
});
var algorithms = {
  "aes-128-ctr": { keyBits: 128, ivBits: 128, name: "AES-CTR" },
  "aes-256-cbc": { keyBits: 256, ivBits: 128, name: "AES-CBC" },
  sha256: { keyBits: 256, name: "SHA-256" }
};
var macPrefix = "Fe26.2";
var randomBytes = (_crypto, size) => {
  const bytes = new Uint8Array(size);
  _crypto.getRandomValues(bytes);
  return bytes;
};
var randomBits = (_crypto, bits) => {
  if (bits < 1)
    throw new Error("Invalid random bits count");
  const bytes = Math.ceil(bits / 8);
  return randomBytes(_crypto, bytes);
};
var pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {
  const passwordBuffer = stringToBuffer(password);
  const importedKey = await _crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const saltBuffer = stringToBuffer(salt);
  const params = { name: "PBKDF2", hash, salt: saltBuffer, iterations };
  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
  return derivation;
};
var generateKey = async (_crypto, password, options) => {
  var _a;
  if (!(password == null ? void 0 : password.length))
    throw new Error("Empty password");
  if (options == null || typeof options !== "object")
    throw new Error("Bad options");
  if (!(options.algorithm in algorithms))
    throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  const result = {};
  const hmac = (_a = options.hmac) != null ? _a : false;
  const id = hmac ? { name: "HMAC", hash: algorithm.name } : { name: algorithm.name };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength)
      throw new Error(
        `Password string too short (min ${options.minPasswordlength} characters required)`
      );
    let { salt = "" } = options;
    if (!salt) {
      const { saltBits = 0 } = options;
      if (!saltBits)
        throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(_crypto, saltBits);
      salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(
      _crypto,
      password,
      salt,
      options.iterations,
      algorithm.keyBits / 8,
      "SHA-1"
    );
    const importedEncryptionKey = await _crypto.subtle.importKey(
      "raw",
      derivedKey,
      id,
      false,
      usage
    );
    result.key = importedEncryptionKey;
    result.salt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8)
      throw new Error("Key buffer (password) too small");
    result.key = await _crypto.subtle.importKey("raw", password, id, false, usage);
    result.salt = "";
  }
  if (options.iv)
    result.iv = options.iv;
  else if ("ivBits" in algorithm)
    result.iv = randomBits(_crypto, algorithm.ivBits);
  return result;
};
var getEncryptParams = (algorithm, key, data) => {
  return [
    algorithm === "aes-128-ctr" ? { name: "AES-CTR", counter: key.iv, length: 128 } : { name: "AES-CBC", iv: key.iv },
    key.key,
    typeof data === "string" ? stringToBuffer(data) : data
  ];
};
var encrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const encrypted = await _crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return { encrypted: new Uint8Array(encrypted), key };
};
var decrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const decrypted = await _crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return bufferToString(new Uint8Array(decrypted));
};
var hmacWithPassword = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, { ...options, hmac: true });
  const textBuffer = stringToBuffer(data);
  const signed = await _crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
  const digest = base64urlEncode(new Uint8Array(signed));
  return { digest, salt: key.salt };
};
var normalizePassword = (password) => {
  if (typeof password === "string" || password instanceof Uint8Array)
    return { encryption: password, integrity: password };
  if ("secret" in password)
    return { id: password.id, encryption: password.secret, integrity: password.secret };
  return { id: password.id, encryption: password.encryption, integrity: password.integrity };
};
var seal = async (_crypto, object, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const objectString = JSON.stringify(object);
  const pass = normalizePassword(password);
  const { id = "", encryption, integrity } = pass;
  if (id && !/^\w+$/.test(id))
    throw new Error("Invalid password id");
  const { encrypted, key } = await encrypt(_crypto, encryption, opts.encryption, objectString);
  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));
  const iv = base64urlEncode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(_crypto, integrity, opts.integrity, macBaseString);
  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;
  return sealed;
};
var fixedTimeComparison = (a, b) => {
  let mismatch = a.length === b.length ? 0 : 1;
  if (mismatch)
    b = a;
  for (let i = 0; i < a.length; i += 1)
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
};
var unseal = async (_crypto, sealed, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const parts = sealed.split("*");
  if (parts.length !== 8)
    throw new Error("Incorrect number of sealed components");
  const prefix = parts[0];
  let passwordId = parts[1];
  const encryptionSalt = parts[2];
  const encryptionIv = parts[3];
  const encryptedB64 = parts[4];
  const expiration = parts[5];
  const hmacSalt = parts[6];
  const hmac = parts[7];
  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix)
    throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration))
      throw new Error("Invalid expiration");
    const exp = Number.parseInt(expiration, 10);
    if (exp <= now - opts.timestampSkewSec * 1e3)
      throw new Error("Expired seal");
  }
  let pass = "";
  passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array)
    pass = password;
  else if (passwordId in password) {
    pass = password[passwordId];
  } else {
    throw new Error(`Cannot find password: ${passwordId}`);
  }
  pass = normalizePassword(pass);
  const macOptions = opts.integrity;
  macOptions.salt = hmacSalt;
  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);
  if (!fixedTimeComparison(mac.digest, hmac))
    throw new Error("Bad hmac value");
  const encrypted = base64urlDecode(encryptedB64);
  const decryptOptions = opts.encryption;
  decryptOptions.salt = encryptionSalt;
  decryptOptions.iv = base64urlDecode(encryptionIv);
  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);
  if (decrypted)
    return JSON.parse(decrypted);
  return null;
};

function o$1(n){throw new Error(`${n} is not implemented yet!`)}let i$2 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o$1("Readable.asyncIterator")}iterator(e){throw o$1("Readable.iterator")}map(e,t){throw o$1("Readable.map")}filter(e,t){throw o$1("Readable.filter")}forEach(e,t){throw o$1("Readable.forEach")}reduce(e,t,r){throw o$1("Readable.reduce")}find(e,t){throw o$1("Readable.find")}findIndex(e,t){throw o$1("Readable.findIndex")}some(e,t){throw o$1("Readable.some")}toArray(e){throw o$1("Readable.toArray")}every(e,t){throw o$1("Readable.every")}flatMap(e,t){throw o$1("Readable.flatMap")}drop(e,t){throw o$1("Readable.drop")}take(e,t){throw o$1("Readable.take")}asIndexedPairs(e){throw o$1("Readable.asIndexedPairs")}};let l$2 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$2=class c{allowHalfOpen=true;_destroy;constructor(e=new i$2,t=new l$2){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _$1(){return Object.assign(c$2.prototype,i$2.prototype),Object.assign(c$2.prototype,l$2.prototype),c$2}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_$1();let A$1 = class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i$2{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$2{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R$1(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S$1=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R$1(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S$1.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C$1(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode$2(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [name, opts.domain || "", opts.path || "/"].join(";");
}

function parseCookies(event) {
  return parse$1(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

const getSessionPromise = Symbol("getSession");
const DEFAULT_NAME = "h3";
const DEFAULT_COOKIE = {
  path: "/",
  secure: true,
  httpOnly: true
};
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      return event.context.sessions?.[sessionName]?.id;
    },
    get data() {
      return event.context.sessions?.[sessionName]?.data || {};
    },
    update: async (update) => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot update read-only session.");
      }
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot clear read-only session.");
      }
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (!event.context.sessions) {
    event.context.sessions = /* @__PURE__ */ Object.create(null);
  }
  const existingSession = event.context.sessions[sessionName];
  if (existingSession) {
    return existingSession[getSessionPromise] || existingSession;
  }
  const session = {
    id: "",
    createdAt: 0,
    data: /* @__PURE__ */ Object.create(null)
  };
  event.context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = _getReqHeader(event, headerName);
    if (typeof headerValue === "string") {
      sealedSession = headerValue;
    }
  }
  if (!sealedSession) {
    const cookieHeader = _getReqHeader(event, "cookie");
    if (cookieHeader) {
      sealedSession = parse$1(cookieHeader + "")[sessionName];
    }
  }
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {
    }).then((unsealed) => {
      Object.assign(session, unsealed);
      delete event.context.sessions[sessionName][getSessionPromise];
      return session;
    });
    event.context.sessions[sessionName][getSessionPromise] = promise;
    await promise;
  }
  if (!session.id) {
    if (!isEvent(event)) {
      throw new Error(
        "Cannot initialize a new session. Make sure using `useSession(event)` in main handler."
      );
    }
    session.id = config.generateId?.() ?? (config.crypto || _crypto).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
function _getReqHeader(event, name) {
  if (event.node) {
    return event.node?.req.headers[name];
  }
  if (event.request) {
    return event.request.headers?.get(name);
  }
  if (event.headers) {
    return event.headers.get(name);
  }
}
async function updateSession(event, config, update) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  if (typeof update === "function") {
    update = update(session.data);
  }
  if (update) {
    Object.assign(session.data, update);
  }
  if (config.cookie !== false) {
    const sealed = await sealSession(event, config);
    setCookie(event, sessionName, sealed, {
      ...DEFAULT_COOKIE,
      expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : void 0,
      ...config.cookie
    });
  }
  return session;
}
async function sealSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  const sealed = await seal(
    config.crypto || _crypto,
    session,
    config.password,
    {
      ...defaults,
      ttl: config.maxAge ? config.maxAge * 1e3 : 0,
      ...config.seal
    }
  );
  return sealed;
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await unseal(
    config.crypto || _crypto,
    sealed,
    config.password,
    {
      ...defaults,
      ttl: config.maxAge ? config.maxAge * 1e3 : 0,
      ...config.seal
    }
  );
  if (config.maxAge) {
    const age = Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY);
    if (age > config.maxAge * 1e3) {
      throw new Error("Session expired!");
    }
  }
  return unsealed;
}
function clearSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (event.context.sessions?.[sessionName]) {
    delete event.context.sessions[sessionName];
  }
  setCookie(event, sessionName, "", {
    ...DEFAULT_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver$1(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver$1(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i$1=globalThis.AbortController,l$1=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$1;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$1(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i$1;
const ofetch = createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController });
const $fetch$1 = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive$1(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify$1(value) {
  if (isPrimitive$1(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify$1(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$2 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$2,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify$1(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify$1(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {
  ["nuxt-og-image:fonts:Inter-normal-400.ttf.base64"]: {
    import: () => import('../raw/Inter-normal-400.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"652cc-qEeSD1DXCSV8gPP2rnBA6ePGdZ4\"","mtime":"2026-02-06T00:55:03.548Z"}
  },
  ["nuxt-og-image:fonts:Inter-normal-700.ttf.base64"]: {
    import: () => import('../raw/Inter-normal-700.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"674f0-FZReUXHhPTnY0HmYVn2iPpKm9ds\"","mtime":"2026-02-06T00:55:03.548Z"}
  }
};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$2(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$2(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME$1 = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME$1, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME$1,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME$1,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('fetch-cache', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.cache/fetch"}));
storage$1.mount('atproto', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.cache/atproto"}));
storage$1.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c$1().serialize(o)}const c$1=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r$1="sha256",s="base64url";function digest(t){if(e)return e(r$1,t,s);const o=createHash(r$1).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {},
  "env": "canary",
  "buildInfo": {
    "version": "0.0.0",
    "time": 1770339303622,
    "commit": "5ce85b500350de376c1c2aa29aa576e3054e505c",
    "shortCommit": "5ce85b5",
    "branch": "main",
    "env": "canary",
    "privacyPolicyDate": "2026-02-06T00:55:03.621Z"
  }
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "5dbbee00-9a86-4bea-b4ca-2f4f0946f937",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/": {
        "prerender": true
      },
      "/opensearch.xml": {
        "isr": true
      },
      "/**": {
        "isr": {
          "expiration": 60,
          "fallback": "spa.prerender-fallback.html"
        }
      },
      "/__og-image__/**": {
        "isr": {
          "expiration": 60
        }
      },
      "/api/**": {
        "isr": 60
      },
      "/200.html": {
        "prerender": true
      },
      "/package/**": {
        "isr": {
          "expiration": 60,
          "fallback": "spa.prerender-fallback.html"
        }
      },
      "/:pkg/.well-known/skills/**": {
        "isr": 3600
      },
      "/:scope/:pkg/.well-known/skills/**": {
        "isr": 3600
      },
      "/search": {
        "isr": false,
        "cache": false
      },
      "/api/auth/**": {
        "isr": false,
        "cache": false
      },
      "/api/social/**": {
        "isr": false,
        "cache": false
      },
      "/api/opensearch/suggestions": {
        "isr": {
          "expiration": 86400,
          "passQuery": true,
          "allowQuery": [
            "q"
          ]
        }
      },
      "/package-code/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/package-docs/:pkg/v/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/package-docs/:scope/:pkg/v/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/api/registry/docs/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/api/registry/file/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/api/registry/provenance/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/api/registry/files/**": {
        "isr": true,
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_avatar/**": {
        "isr": 3600,
        "proxy": {
          "to": "https://www.gravatar.com/avatar/**",
          "_proxyStripBase": "/_avatar"
        }
      },
      "/about": {
        "prerender": true
      },
      "/settings": {
        "prerender": true
      },
      "/oauth-client-metadata.json": {
        "prerender": true
      },
      "/_v/script.js": {
        "proxy": {
          "to": "https://npmx.dev/_vercel/insights/script.js"
        }
      },
      "/_v/view": {
        "proxy": {
          "to": "https://npmx.dev/_vercel/insights/view"
        }
      },
      "/_v/event": {
        "proxy": {
          "to": "https://npmx.dev/_vercel/insights/event"
        }
      },
      "/_v/session": {
        "proxy": {
          "to": "https://npmx.dev/_vercel/insights/session"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/lunaria/**": {
        "headers": {
          "cache-control": "public, max-age=86400, immutable"
        }
      },
      "/_scripts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/opensearch.xml/_payload.json": {
        "isr": true
      },
      "/api/opensearch/suggestions/_payload.json": {
        "isr": {
          "expiration": 86400,
          "passQuery": true,
          "allowQuery": [
            "q"
          ]
        }
      }
    }
  },
  "public": {
    "nuxt-scripts": {
      "version": "",
      "defaultScriptOptions": {
        "trigger": "onNuxtReady"
      }
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en-US",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "ar-EG",
          "name": "العربية",
          "dir": "rtl",
          "language": ""
        },
        {
          "code": "az-AZ",
          "name": "Azərbaycanca",
          "language": ""
        },
        {
          "code": "cs-CZ",
          "name": "Čeština",
          "language": ""
        },
        {
          "code": "de-DE",
          "name": "Deutsch",
          "language": ""
        },
        {
          "code": "en-GB",
          "name": "English (UK)",
          "language": ""
        },
        {
          "code": "en-US",
          "name": "English (US)",
          "language": ""
        },
        {
          "code": "es-419",
          "name": "Español (Latinoamérica)",
          "language": ""
        },
        {
          "code": "es-ES",
          "name": "Español (España)",
          "language": ""
        },
        {
          "code": "fr-FR",
          "name": "Français",
          "language": ""
        },
        {
          "code": "hi-IN",
          "name": "हिंदी",
          "language": ""
        },
        {
          "code": "hu-HU",
          "name": "Magyar",
          "language": ""
        },
        {
          "code": "id-ID",
          "name": "Indonesia",
          "language": ""
        },
        {
          "code": "it-IT",
          "name": "Italiano",
          "language": ""
        },
        {
          "code": "ja-JP",
          "name": "日本語",
          "language": ""
        },
        {
          "code": "mr-IN",
          "name": "मराठी",
          "language": ""
        },
        {
          "code": "ne-NP",
          "name": "नेपाली",
          "language": ""
        },
        {
          "code": "pl-PL",
          "name": "Polski",
          "language": ""
        },
        {
          "code": "pt-BR",
          "name": "Português (Brasil)",
          "language": ""
        },
        {
          "code": "ru-RU",
          "name": "Русский",
          "language": ""
        },
        {
          "code": "uk-UA",
          "name": "Українська",
          "language": ""
        },
        {
          "code": "zh-CN",
          "name": "简体中文",
          "language": ""
        },
        {
          "code": "zh-TW",
          "name": "繁體中文",
          "language": ""
        }
      ],
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "ar-EG": {
          "domain": ""
        },
        "az-AZ": {
          "domain": ""
        },
        "cs-CZ": {
          "domain": ""
        },
        "de-DE": {
          "domain": ""
        },
        "en-GB": {
          "domain": ""
        },
        "en-US": {
          "domain": ""
        },
        "es-419": {
          "domain": ""
        },
        "es-ES": {
          "domain": ""
        },
        "fr-FR": {
          "domain": ""
        },
        "hi-IN": {
          "domain": ""
        },
        "hu-HU": {
          "domain": ""
        },
        "id-ID": {
          "domain": ""
        },
        "it-IT": {
          "domain": ""
        },
        "ja-JP": {
          "domain": ""
        },
        "mr-IN": {
          "domain": ""
        },
        "ne-NP": {
          "domain": ""
        },
        "pl-PL": {
          "domain": ""
        },
        "pt-BR": {
          "domain": ""
        },
        "ru-RU": {
          "domain": ""
        },
        "uk-UA": {
          "domain": ""
        },
        "zh-CN": {
          "domain": ""
        },
        "zh-TW": {
          "domain": ""
        }
      }
    }
  },
  "sessionPassword": "",
  "upstash": {
    "redisRestUrl": "",
    "redisRestToken": ""
  },
  "nuxt-scripts": {
    "version": "0.13.2"
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "npmx.dev",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "npmx"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://npmx.dev",
        "name": "npmx",
        "description": "A fast, modern browser for the npm registry"
      },
      {
        "_context": "@nuxtjs/i18n",
        "defaultLocale": "en-US"
      }
    ],
    "version": "3.2.18",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-og-image": {
    "version": "5.1.13",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "Default",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/5.1.13",
    "fonts": [
      {
        "cacheKey": "Inter:undefined:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:undefined:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": false,
    "colorPreference": "dark",
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message
	errorObject.message ||= "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await import('../_/error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length === 0) {
      return () => {
      };
    }
    stack.push(entry);
    return () => {
      const idx = stack.indexOf(entry);
      if (idx !== -1)
        stack.splice(idx, 1);
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function getSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _SmPnDpRvCvP8zH4MUVDdDuWhx3lA45xsNgsvlq30BE = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = !!process.env.NUXT_NO_SSR || event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const DRIVER_NAME = "lru-cache";
const lruCacheDriver = defineDriver((opts = {}) => {
  const cache = new LRUCache({
    max: 1e3,
    sizeCalculation: opts.maxSize || opts.maxEntrySize ? (value, key) => {
      return key.length + byteLength(value);
    } : void 0,
    ...opts
  });
  return {
    name: DRIVER_NAME,
    options: opts,
    getInstance: () => cache,
    hasItem(key) {
      return cache.has(key);
    },
    getItem(key) {
      return cache.get(key) ?? null;
    },
    getItemRaw(key) {
      return cache.get(key) ?? null;
    },
    setItem(key, value) {
      cache.set(key, value);
    },
    setItemRaw(key, value) {
      cache.set(key, value);
    },
    removeItem(key) {
      cache.delete(key);
    },
    getKeys() {
      return [...cache.keys()];
    },
    clear() {
      cache.clear();
    },
    dispose() {
      cache.clear();
    }
  };
});
function byteLength(value) {
  if (typeof Buffer !== "undefined") {
    try {
      return Buffer.byteLength(value);
    } catch {
    }
  }
  try {
    return typeof value === "string" ? value.length : JSON.stringify(value).length;
  } catch {
  }
  return 0;
}

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"production"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const a=t==="test"||n(o.TEST),h=t==="dev"||t==="development";n(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? h;
  const isPrerender = ctx.isPrerender ?? !!o.prerender;
  let host = "";
  let port = "";
  let protocol = o.NITRO_SSL_CERT && o.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = o.__NUXT_DEV__ || o.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(/^https?:\/\//, "").replace(/\/$/, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  const hostIsLocalhost = !host || host.startsWith("localhost") || host.startsWith("127.");
  if (isDev && hostIsLocalhost && ctx.requestHost) {
    const reqHost = ctx.requestHost.split(":")[0] || "";
    if (reqHost && !reqHost.startsWith("localhost") && !reqHost.startsWith("127.")) {
      host = ctx.requestHost;
      protocol = ctx.requestProtocol || protocol;
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = o.NITRO_HOST || o.HOST || "";
    if (isDev)
      port = o.NITRO_PORT || o.PORT || "3000";
  }
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  host = o.NUXT_SITE_HOST_OVERRIDE || host;
  port = o.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(/^https?:\/\//, "");
  } else if (!host.includes("localhost") && !host.startsWith("127.")) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: false,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => String(g[1]).toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const vals = f.split(":");
      const includesStyle = vals.length === 3;
      let name, weight, style;
      if (includesStyle) {
        name = vals[0];
        style = vals[1];
        weight = vals[2];
      } else {
        name = vals[0];
        weight = vals[1];
      }
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: style || "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.style}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

const theme = {"spacing":{"DEFAULT":"4px"},"font":{"mono":"'Geist Mono', monospace","sans":"'Geist', system-ui, -apple-system, sans-serif"},"colors":{"bg":{"DEFAULT":"var(--bg)","subtle":"var(--bg-subtle)","muted":"var(--bg-muted)","elevated":"var(--bg-elevated)"},"fg":{"DEFAULT":"var(--fg)","muted":"var(--fg-muted)","subtle":"var(--fg-subtle)"},"border":{"DEFAULT":"var(--border)","subtle":"var(--border-subtle)","hover":"var(--border-hover)"},"accent":{"DEFAULT":"var(--accent)","fallback":"var(--accent-muted)"},"syntax":{"fn":"var(--syntax-fn)","str":"var(--syntax-str)","kw":"var(--syntax-kw)","comment":"var(--syntax-comment)"},"badge":{"orange":"var(--badge-orange)","yellow":"var(--badge-yellow)","green":"var(--badge-green)","cyan":"var(--badge-cyan)","blue":"var(--badge-blue)","indigo":"var(--badge-indigo)","purple":"var(--badge-purple)","pink":"var(--badge-pink)"},"provider":{"stackblitz":"#1389FD","codesandbox":"#FFCC00","codepen":"#47CF73","replit":"#F26207","gitpod":"#FFAE33","vue":"#4FC08D","nuxt":"#00DC82","vite":"#646CFF","jsfiddle":"#0084FF"}},"animation":{"keyframes":{"skeleton-pulse":"{0%, 100% { opacity: 0.4 } 50% { opacity: 0.7 }}","fade-in":"{from { opacity: 0 } to { opacity: 1 }}","slide-up":"{from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) }}","scale-in":"{from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) }}"},"durations":{"skeleton-pulse":"2s","fade-in":"0.3s","slide-up":"0.4s","scale-in":"0.2s"},"timingFns":{"skeleton-pulse":"ease-in-out","fade-in":"ease-out","slide-up":"cubic-bezier(0.22, 1, 0.36, 1)","scale-in":"cubic-bezier(0.22, 1, 0.36, 1)"},"counts":{"skeleton-pulse":"infinite"}}};

function useSiteConfig(e, _options) {
  return getSiteConfig(e, _options);
}

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(/&amp;/g, "&");
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const componentNames = [{"hash":"W9TzSCVeOX6OtGZQRLIXXdkfp6-QgFBa4TZtowYZGCk","pascalName":"OgImageDefault","kebabName":"og-image-default","path":"/home/runner/work/npmx.dev/npmx.dev/app/components/OgImage/Default.vue","category":"app"},{"hash":"IStdj4o6dQf58QkDhtA7RS9YxmJGtEVFxYOCgHQoCl0","pascalName":"OgImagePackage","kebabName":"og-image-package","path":"/home/runner/work/npmx.dev/npmx.dev/app/components/OgImage/Package.vue","category":"app"},{"hash":"SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community"},{"hash":"tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY","pascalName":"Frame","kebabName":"frame","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community"},{"hash":"NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM","pascalName":"Nuxt","kebabName":"nuxt","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community"},{"hash":"VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community"},{"hash":"8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM","pascalName":"Pergel","kebabName":"pergel","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community"},{"hash":"b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community"},{"hash":"vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI","pascalName":"UnJs","kebabName":"un-js","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community"},{"hash":"hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw","pascalName":"Wave","kebabName":"wave","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community"},{"hash":"zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws","pascalName":"WithEmoji","kebabName":"with-emoji","path":"/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig(e);
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await import('../_/renderer.mjs').then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await import('../_/renderer2.mjs').then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey$1(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  const query = getQuery(e);
  let queryParams = {};
  for (const k in query) {
    const v = String(query[k]);
    if (!v)
      continue;
    if (v.startsWith("{")) {
      try {
        queryParams[k] = JSON.parse(v);
      } catch (error) {
      }
    } else {
      queryParams[k] = v;
    }
  }
  queryParams = separateProps(queryParams);
  const basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  const basePathWithQuery = queryParams._query && typeof queryParams._query === "object" ? withQuery(basePath, queryParams._query) : basePath;
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePathWithQuery);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePathWithQuery, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError$1({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError$1({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is not enabled.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? String(match[1]) : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  let options = false;
  try {
    const payload2 = parse$2(_payload || "{}");
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
  }
  if (options && typeof options?.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options || {});
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 500) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  if (res._data) {
    return [res._data, null];
  } else if (res.text) {
    return [await res.text(), null];
  }
  return ["", null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  const cachedHtmlPayload = await htmlPayloadCache.getItem(key);
  if (cachedHtmlPayload && cachedHtmlPayload.expiresAt < Date.now())
    return cachedHtmlPayload.value;
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    const payload2 = extractAndNormaliseOgImageOptions(html);
    if (payload2 && typeof payload2 === "object" && payload2.socialPreview?.og?.image) {
      const image = payload2.socialPreview.og.image;
      const p = {
        custom: true,
        url: typeof image === "string" ? image : image
      };
      if (typeof image === "object" && image["image:width"]) {
        p.width = image["image:width"];
      }
      if (typeof image === "object" && image["image:height"]) {
        p.height = image["image:height"];
      }
      return p;
    }
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  if (payload) {
    await htmlPayloadCache.setItem(key, {
      // 60 minutes for prerender, 10 seconds for runtime
      expiresAt: Date.now() + 1e3 * (10),
      value: payload
    });
  }
  return typeof payload === "object" ? payload : createError$1({
    statusCode: 500,
    statusMessage: "[Nuxt OG Image] Invalid payload type."
  });
}

const _cUuuyVJjvtFumvigOL7z4D3PeHs68iyGFYSny_kN4 = defineNitroPlugin(async (nitro) => {
  return;
});

/*!
  * shared v11.2.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

// @ts-nocheck
const localeCodes =  [
  "ar-EG",
  "az-AZ",
  "cs-CZ",
  "de-DE",
  "en-GB",
  "en-US",
  "es-419",
  "es-ES",
  "fr-FR",
  "hi-IN",
  "hu-HU",
  "id-ID",
  "it-IT",
  "ja-JP",
  "mr-IN",
  "ne-NP",
  "pl-PL",
  "pt-BR",
  "ru-RU",
  "uk-UA",
  "zh-CN",
  "zh-TW"
];
const localeLoaders = {
  "ar-EG": [
    {
      key: "locale_ar_46json_b1650369",
      load: () => import('../_/ar.mjs' /* webpackChunkName: "locale_ar_46json_b1650369" */),
      cache: true
    },
    {
      key: "locale_ar_45EG_46json_6b7ccb90",
      load: () => import('../_/ar-EG.mjs' /* webpackChunkName: "locale_ar_45EG_46json_6b7ccb90" */),
      cache: true
    }
  ],
  "az-AZ": [
    {
      key: "locale_az_45AZ_46json_a18dff2a",
      load: () => import('../_/az-AZ.mjs' /* webpackChunkName: "locale_az_45AZ_46json_a18dff2a" */),
      cache: true
    }
  ],
  "cs-CZ": [
    {
      key: "locale_cs_45CZ_46json_2c508961",
      load: () => import('../_/cs-CZ.mjs' /* webpackChunkName: "locale_cs_45CZ_46json_2c508961" */),
      cache: true
    }
  ],
  "de-DE": [
    {
      key: "locale_de_45DE_46json_793c67f4",
      load: () => import('../_/de-DE.mjs' /* webpackChunkName: "locale_de_45DE_46json_793c67f4" */),
      cache: true
    }
  ],
  "en-GB": [
    {
      key: "locale_en_46json_d1b6dca7",
      load: () => import('../_/en.mjs' /* webpackChunkName: "locale_en_46json_d1b6dca7" */),
      cache: true
    },
    {
      key: "locale_en_45GB_46json_cc746880",
      load: () => import('../_/en-GB.mjs' /* webpackChunkName: "locale_en_45GB_46json_cc746880" */),
      cache: true
    }
  ],
  "en-US": [
    {
      key: "locale_en_46json_d1b6dca7",
      load: () => import('../_/en.mjs' /* webpackChunkName: "locale_en_46json_d1b6dca7" */),
      cache: true
    },
    {
      key: "locale_en_45US_46json_47d8b921",
      load: () => import('../_/en-US.mjs' /* webpackChunkName: "locale_en_45US_46json_47d8b921" */),
      cache: true
    }
  ],
  "es-419": [
    {
      key: "locale_es_46json_9914f8cb",
      load: () => import('../_/es.mjs' /* webpackChunkName: "locale_es_46json_9914f8cb" */),
      cache: true
    },
    {
      key: "locale_es_45419_46json_3dd7580f",
      load: () => import('../_/es-419.mjs' /* webpackChunkName: "locale_es_45419_46json_3dd7580f" */),
      cache: true
    }
  ],
  "es-ES": [
    {
      key: "locale_es_46json_9914f8cb",
      load: () => import('../_/es.mjs' /* webpackChunkName: "locale_es_46json_9914f8cb" */),
      cache: true
    },
    {
      key: "locale_es_45ES_46json_b63f6fce",
      load: () => import('../_/es-ES.mjs' /* webpackChunkName: "locale_es_45ES_46json_b63f6fce" */),
      cache: true
    }
  ],
  "fr-FR": [
    {
      key: "locale_fr_45FR_46json_090490e0",
      load: () => import('../_/fr-FR.mjs' /* webpackChunkName: "locale_fr_45FR_46json_090490e0" */),
      cache: true
    }
  ],
  "hi-IN": [
    {
      key: "locale_hi_45IN_46json_6033ac52",
      load: () => import('../_/hi-IN.mjs' /* webpackChunkName: "locale_hi_45IN_46json_6033ac52" */),
      cache: true
    }
  ],
  "hu-HU": [
    {
      key: "locale_hu_45HU_46json_2ab63b85",
      load: () => import('../_/hu-HU.mjs' /* webpackChunkName: "locale_hu_45HU_46json_2ab63b85" */),
      cache: true
    }
  ],
  "id-ID": [
    {
      key: "locale_id_45ID_46json_37e457bf",
      load: () => import('../_/id-ID.mjs' /* webpackChunkName: "locale_id_45ID_46json_37e457bf" */),
      cache: true
    }
  ],
  "it-IT": [
    {
      key: "locale_it_45IT_46json_5966b358",
      load: () => import('../_/it-IT.mjs' /* webpackChunkName: "locale_it_45IT_46json_5966b358" */),
      cache: true
    }
  ],
  "ja-JP": [
    {
      key: "locale_ja_45JP_46json_02b78096",
      load: () => import('../_/ja-JP.mjs' /* webpackChunkName: "locale_ja_45JP_46json_02b78096" */),
      cache: true
    }
  ],
  "mr-IN": [
    {
      key: "locale_mr_45IN_46json_0c594f3b",
      load: () => import('../_/mr-IN.mjs' /* webpackChunkName: "locale_mr_45IN_46json_0c594f3b" */),
      cache: true
    }
  ],
  "ne-NP": [
    {
      key: "locale_ne_45NP_46json_4258d553",
      load: () => import('../_/ne-NP.mjs' /* webpackChunkName: "locale_ne_45NP_46json_4258d553" */),
      cache: true
    }
  ],
  "pl-PL": [
    {
      key: "locale_pl_45PL_46json_d72446a2",
      load: () => import('../_/pl-PL.mjs' /* webpackChunkName: "locale_pl_45PL_46json_d72446a2" */),
      cache: true
    }
  ],
  "pt-BR": [
    {
      key: "locale_pt_45BR_46json_095c9ce2",
      load: () => import('../_/pt-BR.mjs' /* webpackChunkName: "locale_pt_45BR_46json_095c9ce2" */),
      cache: true
    }
  ],
  "ru-RU": [
    {
      key: "locale_ru_45RU_46json_f34297b4",
      load: () => import('../_/ru-RU.mjs' /* webpackChunkName: "locale_ru_45RU_46json_f34297b4" */),
      cache: true
    }
  ],
  "uk-UA": [
    {
      key: "locale_uk_45UA_46json_99fdf60e",
      load: () => import('../_/uk-UA.mjs' /* webpackChunkName: "locale_uk_45UA_46json_99fdf60e" */),
      cache: true
    }
  ],
  "zh-CN": [
    {
      key: "locale_zh_45CN_46json_78414034",
      load: () => import('../_/zh-CN.mjs' /* webpackChunkName: "locale_zh_45CN_46json_78414034" */),
      cache: true
    }
  ],
  "zh-TW": [
    {
      key: "locale_zh_45TW_46json_07b72df2",
      load: () => import('../_/zh-TW.mjs' /* webpackChunkName: "locale_zh_45TW_46json_07b72df2" */),
      cache: true
    }
  ]
};
const vueI18nConfigs = [
  () => import('../_/i18n.config.mjs' /* webpackChunkName: "config_i18n_46config_46ts_97aac619" */)
];
const normalizedLocales = [
  {
    code: "ar-EG",
    name: "العربية",
    dir: "rtl",
    language: undefined
  },
  {
    code: "az-AZ",
    name: "Azərbaycanca",
    language: undefined
  },
  {
    code: "cs-CZ",
    name: "Čeština",
    language: undefined
  },
  {
    code: "de-DE",
    name: "Deutsch",
    language: undefined
  },
  {
    code: "en-GB",
    name: "English (UK)",
    language: undefined
  },
  {
    code: "en-US",
    name: "English (US)",
    language: undefined
  },
  {
    code: "es-419",
    name: "Español (Latinoamérica)",
    language: undefined
  },
  {
    code: "es-ES",
    name: "Español (España)",
    language: undefined
  },
  {
    code: "fr-FR",
    name: "Français",
    language: undefined
  },
  {
    code: "hi-IN",
    name: "हिंदी",
    language: undefined
  },
  {
    code: "hu-HU",
    name: "Magyar",
    language: undefined
  },
  {
    code: "id-ID",
    name: "Indonesia",
    language: undefined
  },
  {
    code: "it-IT",
    name: "Italiano",
    language: undefined
  },
  {
    code: "ja-JP",
    name: "日本語",
    language: undefined
  },
  {
    code: "mr-IN",
    name: "मराठी",
    language: undefined
  },
  {
    code: "ne-NP",
    name: "नेपाली",
    language: undefined
  },
  {
    code: "pl-PL",
    name: "Polski",
    language: undefined
  },
  {
    code: "pt-BR",
    name: "Português (Brasil)",
    language: undefined
  },
  {
    code: "ru-RU",
    name: "Русский",
    language: undefined
  },
  {
    code: "uk-UA",
    name: "Українська",
    language: undefined
  },
  {
    code: "zh-CN",
    name: "简体中文",
    language: undefined
  },
  {
    code: "zh-TW",
    name: "繁體中文",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

async function mapWithConcurrency(items, fn, concurrency = 10) {
  const results = Array.from({ length: items.length });
  let currentIndex = 0;
  async function worker() {
    while (currentIndex < items.length) {
      const index = currentIndex++;
      results[index] = await fn(items[index], index);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function isBinaryOnlyPackage(pkg) {
  if (isCreatePackage(pkg.name)) {
    return true;
  }
  const hasBin = pkg.bin !== void 0 && (typeof pkg.bin === "string" || Object.keys(pkg.bin).length > 0);
  const hasEntryPoint = !!pkg.main || !!pkg.module || !!pkg.exports;
  return hasBin && !hasEntryPoint;
}
function isCreatePackage(packageName) {
  const baseName = packageName.startsWith("@") ? packageName.split("/")[1] : packageName;
  return (baseName == null ? void 0 : baseName.startsWith("create-")) || packageName.includes("/create-") || false;
}

const $nsid$1 = "com.atproto.repo.strongRef";
const main$1 = l$3.typedObject(
  $nsid$1,
  "main",
  l$3.object({
    cid: l$3.string({ format: "cid" }),
    uri: l$3.string({ format: "at-uri" })
  })
);
main$1.$type;

const $nsid = "dev.npmx.feed.like";
const main = l$3.record(
  "tid",
  $nsid,
  l$3.object({
    createdAt: l$3.string({ format: "datetime" }),
    subject: l$3.optional(
      l$3.ref((() => main$1))
    ),
    subjectRef: l$3.string({ format: "uri" })
  })
);
const $isTypeOf = /* @__PURE__ */ main.isTypeOf.bind(main), $build = /* @__PURE__ */ main.build.bind(main), $type = main.$type;
const $assert = /* @__PURE__ */ main.assert.bind(main), $check = /* @__PURE__ */ main.check.bind(main), $cast = /* @__PURE__ */ main.cast.bind(main), $ifMatches = /* @__PURE__ */ main.ifMatches.bind(main), $matches = /* @__PURE__ */ main.matches.bind(main), $parse = /* @__PURE__ */ main.parse.bind(main), $safeParse = /* @__PURE__ */ main.safeParse.bind(main), $validate = /* @__PURE__ */ main.validate.bind(main), $safeValidate = /* @__PURE__ */ main.safeValidate.bind(main);

const like_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $assert: $assert,
  $build: $build,
  $cast: $cast,
  $check: $check,
  $ifMatches: $ifMatches,
  $isTypeOf: $isTypeOf,
  $matches: $matches,
  $nsid: $nsid,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const like = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $assert: $assert,
  $build: $build,
  $cast: $cast,
  $check: $check,
  $defs: like_defs,
  $ifMatches: $ifMatches,
  $isTypeOf: $isTypeOf,
  $matches: $matches,
  $nsid: $nsid,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const CACHE_MAX_AGE_ONE_MINUTE = 60;
const CACHE_MAX_AGE_FIVE_MINUTES = 60 * 5;
const CACHE_MAX_AGE_ONE_HOUR = 60 * 60;
const CACHE_MAX_AGE_ONE_DAY = 60 * 60 * 24;
const CACHE_MAX_AGE_ONE_YEAR = 60 * 60 * 24 * 365;
const BLUESKY_API = "https://public.api.bsky.app/xrpc/";
const NPM_REGISTRY$1 = "https://registry.npmjs.org";
const ERROR_PACKAGE_ANALYSIS_FAILED = "Failed to analyze package.";
const ERROR_PACKAGE_VERSION_AND_FILE_FAILED = "Version and file path are required.";
const ERROR_FILE_LIST_FETCH_FAILED = "Failed to fetch file list.";
const ERROR_CALC_INSTALL_SIZE_FAILED = "Failed to calculate install size.";
const NPM_MISSING_README_SENTINEL = "ERROR: No README data found!";
const ERROR_JSR_FETCH_FAILED = "Failed to fetch package from JSR registry.";
const ERROR_NPM_FETCH_FAILED = "Failed to fetch package from npm registry.";
const ERROR_PROVENANCE_FETCH_FAILED = "Failed to fetch provenance.";
const UNSET_NUXT_SESSION_PASSWORD = "NUXT_SESSION_PASSWORD not set";
const ERROR_SUGGESTIONS_FETCH_FAILED = "Failed to fetch suggestions.";
const ERROR_SKILLS_FETCH_FAILED = "Failed to fetch skills.";
const ERROR_SKILL_NOT_FOUND = "Skill not found.";
const ERROR_SKILL_FILE_NOT_FOUND = "Skill file not found.";
const ERROR_GRAVATAR_FETCH_FAILED = "Failed to fetch Gravatar profile.";
const ERROR_GRAVATAR_EMAIL_UNAVAILABLE = "User's email not accessible.";
const ERROR_NEED_REAUTH = "User needs to reauthenticate";
const CONSTELLATION_HOST = "constellation.microcosm.blue";
const SLINGSHOT_HOST = "slingshot.microcosm.blue";
const PACKAGE_SUBJECT_REF = (packageName) => `https://npmx.dev/package/${packageName}`;
const LIKES_SCOPE = `repo:${$nsid}`;
const ACCENT_COLORS = {
  light: {
    coral: "oklch(0.70 0.19 14.75)",
    amber: "oklch(0.8 0.25 84.429)",
    emerald: "oklch(0.70 0.17 166.95)",
    sky: "oklch(0.70 0.15 230.318)",
    violet: "oklch(0.70 0.17 286.067)",
    magenta: "oklch(0.75 0.18 330)"
  },
  dark: {
    coral: "oklch(0.704 0.177 14.75)",
    amber: "oklch(0.828 0.165 84.429)",
    emerald: "oklch(0.792 0.153 166.95)",
    sky: "oklch(0.787 0.128 230.318)",
    violet: "oklch(0.78 0.148 286.067)",
    magenta: "oklch(0.78 0.15 330)"
  }
};
const BACKGROUND_THEMES = {
  neutral: "oklch(0.555 0 0)",
  stone: "oklch(0.555 0.013 58.123)",
  zinc: "oklch(0.555 0.016 285.931)",
  slate: "oklch(0.555 0.046 257.407)",
  black: "oklch(0.4 0 0)"
};
const AT_URI_REGEX = /^at:\/\/(did:plc:[a-z0-9]+)\/app\.bsky\.feed\.post\/([a-z0-9]+)$/;

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, key + "" , value);
const HEADERS = { "User-Agent": "npmx" };
class Constellation {
  constructor(fetch) {
    __publicField$5(this, "cachedFetch");
    this.cachedFetch = fetch;
  }
  /**
   * Gets backlinks from constellation
   * https://constellation.microcosm.blue/xrpc/blue.microcosm.links.getBacklinks?subject=at%3A%2F%2Fdid%3Aplc%3Aa4pqq234yw7fqbddawjo7y35%2Fapp.bsky.feed.post%2F3m237ilwc372e&source=app.bsky.feed.like%3Asubject.uri&limit=16
   * @param subject - A uri encoded link. did, url, or at-uri
   * @param collection - The lexicon collection to check like dev.npmx.feed.like
   * @param recordPath - Where in the record to check for the subject
   * @param limit - The number of backlinks to return
   * @param cursor - The cursor to use for pagination
   * @param reverse - Whether to reverse the order of the results
   * @param filterByDids - An array of dids to filter by in the results
   * @param ttl - The ttl to use for the cache
   */
  async getBackLinks(subject, collection, recordPath, limit = 16, cursor, reverse = false, filterByDids = [], ttl = void 0) {
    const source = encodeURIComponent(`${collection}:${recordPath}`);
    let urlToCall = `https://${CONSTELLATION_HOST}/xrpc/blue.microcosm.links.getBacklinks?subject=${encodeURIComponent(subject)}&source=${source}&limit=${limit}`;
    if (cursor) urlToCall += `&cursor=${cursor}`;
    if (reverse) urlToCall += "&reverse=true";
    filterByDids.forEach((did) => urlToCall += `&did=${did}`);
    return await this.cachedFetch(urlToCall, { headers: HEADERS }, ttl);
  }
  /**
   *  Gets the distinct dids that link to a target record
   * @param target - A uri encoded link. did, url, or at-uri
   * @param collection - The lexicon collection to check like dev.npmx.feed.like
   * @param recordPath - Where in the record to check for the subject
   * @param limit - The number of distinct dids to return
   * @param cursor - The cursor to use for pagination
   * @param ttl - The ttl to use for the cache
   */
  async getLinksDistinctDids(target, collection, recordPath, limit = 16, cursor, ttl = void 0) {
    let urlToCall = `https://${CONSTELLATION_HOST}/links/distinct-dids?target=${encodeURIComponent(target)}&collection=${collection}&path=${recordPath}&limit=${limit}`;
    if (cursor) urlToCall += `&cursor=${cursor}`;
    return await this.cachedFetch(urlToCall, { headers: HEADERS }, ttl);
  }
  /**
   * Gets all links from constellation and their counts
   * @param target - A uri encoded link. did, url, or at-uri
   * @param ttl - The ttl to use for the cache
   */
  async getAllLinks(target, ttl = void 0) {
    return await this.cachedFetch(
      `https://${CONSTELLATION_HOST}/links/all?target=${target}`,
      { headers: HEADERS },
      ttl
    );
  }
}

const emojis = {
  "100": "\u{1F4AF}",
  "1234": "\u{1F522}",
  "grinning": "\u{1F600}",
  "smiley": "\u{1F603}",
  "smile": "\u{1F604}",
  "grin": "\u{1F601}",
  "laughing": "\u{1F606}",
  "satisfied": "\u{1F606}",
  "sweat_smile": "\u{1F605}",
  "rofl": "\u{1F923}",
  "joy": "\u{1F602}",
  "slightly_smiling_face": "\u{1F642}",
  "upside_down_face": "\u{1F643}",
  "melting_face": "\u{1FAE0}",
  "wink": "\u{1F609}",
  "blush": "\u{1F60A}",
  "innocent": "\u{1F607}",
  "smiling_face_with_three_hearts": "\u{1F970}",
  "heart_eyes": "\u{1F60D}",
  "star_struck": "\u{1F929}",
  "kissing_heart": "\u{1F618}",
  "kissing": "\u{1F617}",
  "relaxed": "\u263A\uFE0F",
  "kissing_closed_eyes": "\u{1F61A}",
  "kissing_smiling_eyes": "\u{1F619}",
  "smiling_face_with_tear": "\u{1F972}",
  "yum": "\u{1F60B}",
  "stuck_out_tongue": "\u{1F61B}",
  "stuck_out_tongue_winking_eye": "\u{1F61C}",
  "zany_face": "\u{1F92A}",
  "stuck_out_tongue_closed_eyes": "\u{1F61D}",
  "money_mouth_face": "\u{1F911}",
  "hugs": "\u{1F917}",
  "hand_over_mouth": "\u{1F92D}",
  "face_with_open_eyes_and_hand_over_mouth": "\u{1FAE2}",
  "face_with_peeking_eye": "\u{1FAE3}",
  "shushing_face": "\u{1F92B}",
  "thinking": "\u{1F914}",
  "saluting_face": "\u{1FAE1}",
  "zipper_mouth_face": "\u{1F910}",
  "raised_eyebrow": "\u{1F928}",
  "neutral_face": "\u{1F610}",
  "expressionless": "\u{1F611}",
  "no_mouth": "\u{1F636}",
  "dotted_line_face": "\u{1FAE5}",
  "face_in_clouds": "\u{1F636}\u200D\u{1F32B}\uFE0F",
  "smirk": "\u{1F60F}",
  "unamused": "\u{1F612}",
  "roll_eyes": "\u{1F644}",
  "grimacing": "\u{1F62C}",
  "face_exhaling": "\u{1F62E}\u200D\u{1F4A8}",
  "lying_face": "\u{1F925}",
  "shaking_face": "\u{1FAE8}",
  "relieved": "\u{1F60C}",
  "pensive": "\u{1F614}",
  "sleepy": "\u{1F62A}",
  "drooling_face": "\u{1F924}",
  "sleeping": "\u{1F634}",
  "mask": "\u{1F637}",
  "face_with_thermometer": "\u{1F912}",
  "face_with_head_bandage": "\u{1F915}",
  "nauseated_face": "\u{1F922}",
  "vomiting_face": "\u{1F92E}",
  "sneezing_face": "\u{1F927}",
  "hot_face": "\u{1F975}",
  "cold_face": "\u{1F976}",
  "woozy_face": "\u{1F974}",
  "dizzy_face": "\u{1F635}",
  "face_with_spiral_eyes": "\u{1F635}\u200D\u{1F4AB}",
  "exploding_head": "\u{1F92F}",
  "cowboy_hat_face": "\u{1F920}",
  "partying_face": "\u{1F973}",
  "disguised_face": "\u{1F978}",
  "sunglasses": "\u{1F60E}",
  "nerd_face": "\u{1F913}",
  "monocle_face": "\u{1F9D0}",
  "confused": "\u{1F615}",
  "face_with_diagonal_mouth": "\u{1FAE4}",
  "worried": "\u{1F61F}",
  "slightly_frowning_face": "\u{1F641}",
  "frowning_face": "\u2639\uFE0F",
  "open_mouth": "\u{1F62E}",
  "hushed": "\u{1F62F}",
  "astonished": "\u{1F632}",
  "flushed": "\u{1F633}",
  "pleading_face": "\u{1F97A}",
  "face_holding_back_tears": "\u{1F979}",
  "frowning": "\u{1F626}",
  "anguished": "\u{1F627}",
  "fearful": "\u{1F628}",
  "cold_sweat": "\u{1F630}",
  "disappointed_relieved": "\u{1F625}",
  "cry": "\u{1F622}",
  "sob": "\u{1F62D}",
  "scream": "\u{1F631}",
  "confounded": "\u{1F616}",
  "persevere": "\u{1F623}",
  "disappointed": "\u{1F61E}",
  "sweat": "\u{1F613}",
  "weary": "\u{1F629}",
  "tired_face": "\u{1F62B}",
  "yawning_face": "\u{1F971}",
  "triumph": "\u{1F624}",
  "rage": "\u{1F621}",
  "pout": "\u{1F621}",
  "angry": "\u{1F620}",
  "cursing_face": "\u{1F92C}",
  "smiling_imp": "\u{1F608}",
  "imp": "\u{1F47F}",
  "skull": "\u{1F480}",
  "skull_and_crossbones": "\u2620\uFE0F",
  "hankey": "\u{1F4A9}",
  "poop": "\u{1F4A9}",
  "shit": "\u{1F4A9}",
  "clown_face": "\u{1F921}",
  "japanese_ogre": "\u{1F479}",
  "japanese_goblin": "\u{1F47A}",
  "ghost": "\u{1F47B}",
  "alien": "\u{1F47D}",
  "space_invader": "\u{1F47E}",
  "robot": "\u{1F916}",
  "smiley_cat": "\u{1F63A}",
  "smile_cat": "\u{1F638}",
  "joy_cat": "\u{1F639}",
  "heart_eyes_cat": "\u{1F63B}",
  "smirk_cat": "\u{1F63C}",
  "kissing_cat": "\u{1F63D}",
  "scream_cat": "\u{1F640}",
  "crying_cat_face": "\u{1F63F}",
  "pouting_cat": "\u{1F63E}",
  "see_no_evil": "\u{1F648}",
  "hear_no_evil": "\u{1F649}",
  "speak_no_evil": "\u{1F64A}",
  "love_letter": "\u{1F48C}",
  "cupid": "\u{1F498}",
  "gift_heart": "\u{1F49D}",
  "sparkling_heart": "\u{1F496}",
  "heartpulse": "\u{1F497}",
  "heartbeat": "\u{1F493}",
  "revolving_hearts": "\u{1F49E}",
  "two_hearts": "\u{1F495}",
  "heart_decoration": "\u{1F49F}",
  "heavy_heart_exclamation": "\u2763\uFE0F",
  "broken_heart": "\u{1F494}",
  "heart_on_fire": "\u2764\uFE0F\u200D\u{1F525}",
  "mending_heart": "\u2764\uFE0F\u200D\u{1FA79}",
  "heart": "\u2764\uFE0F",
  "pink_heart": "\u{1FA77}",
  "orange_heart": "\u{1F9E1}",
  "yellow_heart": "\u{1F49B}",
  "green_heart": "\u{1F49A}",
  "blue_heart": "\u{1F499}",
  "light_blue_heart": "\u{1FA75}",
  "purple_heart": "\u{1F49C}",
  "brown_heart": "\u{1F90E}",
  "black_heart": "\u{1F5A4}",
  "grey_heart": "\u{1FA76}",
  "white_heart": "\u{1F90D}",
  "kiss": "\u{1F48B}",
  "anger": "\u{1F4A2}",
  "boom": "\u{1F4A5}",
  "collision": "\u{1F4A5}",
  "dizzy": "\u{1F4AB}",
  "sweat_drops": "\u{1F4A6}",
  "dash": "\u{1F4A8}",
  "hole": "\u{1F573}\uFE0F",
  "speech_balloon": "\u{1F4AC}",
  "eye_speech_bubble": "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
  "left_speech_bubble": "\u{1F5E8}\uFE0F",
  "right_anger_bubble": "\u{1F5EF}\uFE0F",
  "thought_balloon": "\u{1F4AD}",
  "zzz": "\u{1F4A4}",
  "wave": "\u{1F44B}",
  "raised_back_of_hand": "\u{1F91A}",
  "raised_hand_with_fingers_splayed": "\u{1F590}\uFE0F",
  "hand": "\u270B",
  "raised_hand": "\u270B",
  "vulcan_salute": "\u{1F596}",
  "rightwards_hand": "\u{1FAF1}",
  "leftwards_hand": "\u{1FAF2}",
  "palm_down_hand": "\u{1FAF3}",
  "palm_up_hand": "\u{1FAF4}",
  "leftwards_pushing_hand": "\u{1FAF7}",
  "rightwards_pushing_hand": "\u{1FAF8}",
  "ok_hand": "\u{1F44C}",
  "pinched_fingers": "\u{1F90C}",
  "pinching_hand": "\u{1F90F}",
  "v": "\u270C\uFE0F",
  "crossed_fingers": "\u{1F91E}",
  "hand_with_index_finger_and_thumb_crossed": "\u{1FAF0}",
  "love_you_gesture": "\u{1F91F}",
  "metal": "\u{1F918}",
  "call_me_hand": "\u{1F919}",
  "point_left": "\u{1F448}",
  "point_right": "\u{1F449}",
  "point_up_2": "\u{1F446}",
  "middle_finger": "\u{1F595}",
  "fu": "\u{1F595}",
  "point_down": "\u{1F447}",
  "point_up": "\u261D\uFE0F",
  "index_pointing_at_the_viewer": "\u{1FAF5}",
  "+1": "\u{1F44D}",
  "thumbsup": "\u{1F44D}",
  "-1": "\u{1F44E}",
  "thumbsdown": "\u{1F44E}",
  "fist_raised": "\u270A",
  "fist": "\u270A",
  "fist_oncoming": "\u{1F44A}",
  "facepunch": "\u{1F44A}",
  "punch": "\u{1F44A}",
  "fist_left": "\u{1F91B}",
  "fist_right": "\u{1F91C}",
  "clap": "\u{1F44F}",
  "raised_hands": "\u{1F64C}",
  "heart_hands": "\u{1FAF6}",
  "open_hands": "\u{1F450}",
  "palms_up_together": "\u{1F932}",
  "handshake": "\u{1F91D}",
  "pray": "\u{1F64F}",
  "writing_hand": "\u270D\uFE0F",
  "nail_care": "\u{1F485}",
  "selfie": "\u{1F933}",
  "muscle": "\u{1F4AA}",
  "mechanical_arm": "\u{1F9BE}",
  "mechanical_leg": "\u{1F9BF}",
  "leg": "\u{1F9B5}",
  "foot": "\u{1F9B6}",
  "ear": "\u{1F442}",
  "ear_with_hearing_aid": "\u{1F9BB}",
  "nose": "\u{1F443}",
  "brain": "\u{1F9E0}",
  "anatomical_heart": "\u{1FAC0}",
  "lungs": "\u{1FAC1}",
  "tooth": "\u{1F9B7}",
  "bone": "\u{1F9B4}",
  "eyes": "\u{1F440}",
  "eye": "\u{1F441}\uFE0F",
  "tongue": "\u{1F445}",
  "lips": "\u{1F444}",
  "biting_lip": "\u{1FAE6}",
  "baby": "\u{1F476}",
  "child": "\u{1F9D2}",
  "boy": "\u{1F466}",
  "girl": "\u{1F467}",
  "adult": "\u{1F9D1}",
  "blond_haired_person": "\u{1F471}",
  "man": "\u{1F468}",
  "bearded_person": "\u{1F9D4}",
  "man_beard": "\u{1F9D4}\u200D\u2642\uFE0F",
  "woman_beard": "\u{1F9D4}\u200D\u2640\uFE0F",
  "red_haired_man": "\u{1F468}\u200D\u{1F9B0}",
  "curly_haired_man": "\u{1F468}\u200D\u{1F9B1}",
  "white_haired_man": "\u{1F468}\u200D\u{1F9B3}",
  "bald_man": "\u{1F468}\u200D\u{1F9B2}",
  "woman": "\u{1F469}",
  "red_haired_woman": "\u{1F469}\u200D\u{1F9B0}",
  "person_red_hair": "\u{1F9D1}\u200D\u{1F9B0}",
  "curly_haired_woman": "\u{1F469}\u200D\u{1F9B1}",
  "person_curly_hair": "\u{1F9D1}\u200D\u{1F9B1}",
  "white_haired_woman": "\u{1F469}\u200D\u{1F9B3}",
  "person_white_hair": "\u{1F9D1}\u200D\u{1F9B3}",
  "bald_woman": "\u{1F469}\u200D\u{1F9B2}",
  "person_bald": "\u{1F9D1}\u200D\u{1F9B2}",
  "blond_haired_woman": "\u{1F471}\u200D\u2640\uFE0F",
  "blonde_woman": "\u{1F471}\u200D\u2640\uFE0F",
  "blond_haired_man": "\u{1F471}\u200D\u2642\uFE0F",
  "older_adult": "\u{1F9D3}",
  "older_man": "\u{1F474}",
  "older_woman": "\u{1F475}",
  "frowning_person": "\u{1F64D}",
  "frowning_man": "\u{1F64D}\u200D\u2642\uFE0F",
  "frowning_woman": "\u{1F64D}\u200D\u2640\uFE0F",
  "pouting_face": "\u{1F64E}",
  "pouting_man": "\u{1F64E}\u200D\u2642\uFE0F",
  "pouting_woman": "\u{1F64E}\u200D\u2640\uFE0F",
  "no_good": "\u{1F645}",
  "no_good_man": "\u{1F645}\u200D\u2642\uFE0F",
  "ng_man": "\u{1F645}\u200D\u2642\uFE0F",
  "no_good_woman": "\u{1F645}\u200D\u2640\uFE0F",
  "ng_woman": "\u{1F645}\u200D\u2640\uFE0F",
  "ok_person": "\u{1F646}",
  "ok_man": "\u{1F646}\u200D\u2642\uFE0F",
  "ok_woman": "\u{1F646}\u200D\u2640\uFE0F",
  "tipping_hand_person": "\u{1F481}",
  "information_desk_person": "\u{1F481}",
  "tipping_hand_man": "\u{1F481}\u200D\u2642\uFE0F",
  "sassy_man": "\u{1F481}\u200D\u2642\uFE0F",
  "tipping_hand_woman": "\u{1F481}\u200D\u2640\uFE0F",
  "sassy_woman": "\u{1F481}\u200D\u2640\uFE0F",
  "raising_hand": "\u{1F64B}",
  "raising_hand_man": "\u{1F64B}\u200D\u2642\uFE0F",
  "raising_hand_woman": "\u{1F64B}\u200D\u2640\uFE0F",
  "deaf_person": "\u{1F9CF}",
  "deaf_man": "\u{1F9CF}\u200D\u2642\uFE0F",
  "deaf_woman": "\u{1F9CF}\u200D\u2640\uFE0F",
  "bow": "\u{1F647}",
  "bowing_man": "\u{1F647}\u200D\u2642\uFE0F",
  "bowing_woman": "\u{1F647}\u200D\u2640\uFE0F",
  "facepalm": "\u{1F926}",
  "man_facepalming": "\u{1F926}\u200D\u2642\uFE0F",
  "woman_facepalming": "\u{1F926}\u200D\u2640\uFE0F",
  "shrug": "\u{1F937}",
  "man_shrugging": "\u{1F937}\u200D\u2642\uFE0F",
  "woman_shrugging": "\u{1F937}\u200D\u2640\uFE0F",
  "health_worker": "\u{1F9D1}\u200D\u2695\uFE0F",
  "man_health_worker": "\u{1F468}\u200D\u2695\uFE0F",
  "woman_health_worker": "\u{1F469}\u200D\u2695\uFE0F",
  "student": "\u{1F9D1}\u200D\u{1F393}",
  "man_student": "\u{1F468}\u200D\u{1F393}",
  "woman_student": "\u{1F469}\u200D\u{1F393}",
  "teacher": "\u{1F9D1}\u200D\u{1F3EB}",
  "man_teacher": "\u{1F468}\u200D\u{1F3EB}",
  "woman_teacher": "\u{1F469}\u200D\u{1F3EB}",
  "judge": "\u{1F9D1}\u200D\u2696\uFE0F",
  "man_judge": "\u{1F468}\u200D\u2696\uFE0F",
  "woman_judge": "\u{1F469}\u200D\u2696\uFE0F",
  "farmer": "\u{1F9D1}\u200D\u{1F33E}",
  "man_farmer": "\u{1F468}\u200D\u{1F33E}",
  "woman_farmer": "\u{1F469}\u200D\u{1F33E}",
  "cook": "\u{1F9D1}\u200D\u{1F373}",
  "man_cook": "\u{1F468}\u200D\u{1F373}",
  "woman_cook": "\u{1F469}\u200D\u{1F373}",
  "mechanic": "\u{1F9D1}\u200D\u{1F527}",
  "man_mechanic": "\u{1F468}\u200D\u{1F527}",
  "woman_mechanic": "\u{1F469}\u200D\u{1F527}",
  "factory_worker": "\u{1F9D1}\u200D\u{1F3ED}",
  "man_factory_worker": "\u{1F468}\u200D\u{1F3ED}",
  "woman_factory_worker": "\u{1F469}\u200D\u{1F3ED}",
  "office_worker": "\u{1F9D1}\u200D\u{1F4BC}",
  "man_office_worker": "\u{1F468}\u200D\u{1F4BC}",
  "woman_office_worker": "\u{1F469}\u200D\u{1F4BC}",
  "scientist": "\u{1F9D1}\u200D\u{1F52C}",
  "man_scientist": "\u{1F468}\u200D\u{1F52C}",
  "woman_scientist": "\u{1F469}\u200D\u{1F52C}",
  "technologist": "\u{1F9D1}\u200D\u{1F4BB}",
  "man_technologist": "\u{1F468}\u200D\u{1F4BB}",
  "woman_technologist": "\u{1F469}\u200D\u{1F4BB}",
  "singer": "\u{1F9D1}\u200D\u{1F3A4}",
  "man_singer": "\u{1F468}\u200D\u{1F3A4}",
  "woman_singer": "\u{1F469}\u200D\u{1F3A4}",
  "artist": "\u{1F9D1}\u200D\u{1F3A8}",
  "man_artist": "\u{1F468}\u200D\u{1F3A8}",
  "woman_artist": "\u{1F469}\u200D\u{1F3A8}",
  "pilot": "\u{1F9D1}\u200D\u2708\uFE0F",
  "man_pilot": "\u{1F468}\u200D\u2708\uFE0F",
  "woman_pilot": "\u{1F469}\u200D\u2708\uFE0F",
  "astronaut": "\u{1F9D1}\u200D\u{1F680}",
  "man_astronaut": "\u{1F468}\u200D\u{1F680}",
  "woman_astronaut": "\u{1F469}\u200D\u{1F680}",
  "firefighter": "\u{1F9D1}\u200D\u{1F692}",
  "man_firefighter": "\u{1F468}\u200D\u{1F692}",
  "woman_firefighter": "\u{1F469}\u200D\u{1F692}",
  "police_officer": "\u{1F46E}",
  "cop": "\u{1F46E}",
  "policeman": "\u{1F46E}\u200D\u2642\uFE0F",
  "policewoman": "\u{1F46E}\u200D\u2640\uFE0F",
  "detective": "\u{1F575}\uFE0F",
  "male_detective": "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
  "female_detective": "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
  "guard": "\u{1F482}",
  "guardsman": "\u{1F482}\u200D\u2642\uFE0F",
  "guardswoman": "\u{1F482}\u200D\u2640\uFE0F",
  "ninja": "\u{1F977}",
  "construction_worker": "\u{1F477}",
  "construction_worker_man": "\u{1F477}\u200D\u2642\uFE0F",
  "construction_worker_woman": "\u{1F477}\u200D\u2640\uFE0F",
  "person_with_crown": "\u{1FAC5}",
  "prince": "\u{1F934}",
  "princess": "\u{1F478}",
  "person_with_turban": "\u{1F473}",
  "man_with_turban": "\u{1F473}\u200D\u2642\uFE0F",
  "woman_with_turban": "\u{1F473}\u200D\u2640\uFE0F",
  "man_with_gua_pi_mao": "\u{1F472}",
  "woman_with_headscarf": "\u{1F9D5}",
  "person_in_tuxedo": "\u{1F935}",
  "man_in_tuxedo": "\u{1F935}\u200D\u2642\uFE0F",
  "woman_in_tuxedo": "\u{1F935}\u200D\u2640\uFE0F",
  "person_with_veil": "\u{1F470}",
  "man_with_veil": "\u{1F470}\u200D\u2642\uFE0F",
  "woman_with_veil": "\u{1F470}\u200D\u2640\uFE0F",
  "bride_with_veil": "\u{1F470}\u200D\u2640\uFE0F",
  "pregnant_woman": "\u{1F930}",
  "pregnant_man": "\u{1FAC3}",
  "pregnant_person": "\u{1FAC4}",
  "breast_feeding": "\u{1F931}",
  "woman_feeding_baby": "\u{1F469}\u200D\u{1F37C}",
  "man_feeding_baby": "\u{1F468}\u200D\u{1F37C}",
  "person_feeding_baby": "\u{1F9D1}\u200D\u{1F37C}",
  "angel": "\u{1F47C}",
  "santa": "\u{1F385}",
  "mrs_claus": "\u{1F936}",
  "mx_claus": "\u{1F9D1}\u200D\u{1F384}",
  "superhero": "\u{1F9B8}",
  "superhero_man": "\u{1F9B8}\u200D\u2642\uFE0F",
  "superhero_woman": "\u{1F9B8}\u200D\u2640\uFE0F",
  "supervillain": "\u{1F9B9}",
  "supervillain_man": "\u{1F9B9}\u200D\u2642\uFE0F",
  "supervillain_woman": "\u{1F9B9}\u200D\u2640\uFE0F",
  "mage": "\u{1F9D9}",
  "mage_man": "\u{1F9D9}\u200D\u2642\uFE0F",
  "mage_woman": "\u{1F9D9}\u200D\u2640\uFE0F",
  "fairy": "\u{1F9DA}",
  "fairy_man": "\u{1F9DA}\u200D\u2642\uFE0F",
  "fairy_woman": "\u{1F9DA}\u200D\u2640\uFE0F",
  "vampire": "\u{1F9DB}",
  "vampire_man": "\u{1F9DB}\u200D\u2642\uFE0F",
  "vampire_woman": "\u{1F9DB}\u200D\u2640\uFE0F",
  "merperson": "\u{1F9DC}",
  "merman": "\u{1F9DC}\u200D\u2642\uFE0F",
  "mermaid": "\u{1F9DC}\u200D\u2640\uFE0F",
  "elf": "\u{1F9DD}",
  "elf_man": "\u{1F9DD}\u200D\u2642\uFE0F",
  "elf_woman": "\u{1F9DD}\u200D\u2640\uFE0F",
  "genie": "\u{1F9DE}",
  "genie_man": "\u{1F9DE}\u200D\u2642\uFE0F",
  "genie_woman": "\u{1F9DE}\u200D\u2640\uFE0F",
  "zombie": "\u{1F9DF}",
  "zombie_man": "\u{1F9DF}\u200D\u2642\uFE0F",
  "zombie_woman": "\u{1F9DF}\u200D\u2640\uFE0F",
  "troll": "\u{1F9CC}",
  "massage": "\u{1F486}",
  "massage_man": "\u{1F486}\u200D\u2642\uFE0F",
  "massage_woman": "\u{1F486}\u200D\u2640\uFE0F",
  "haircut": "\u{1F487}",
  "haircut_man": "\u{1F487}\u200D\u2642\uFE0F",
  "haircut_woman": "\u{1F487}\u200D\u2640\uFE0F",
  "walking": "\u{1F6B6}",
  "walking_man": "\u{1F6B6}\u200D\u2642\uFE0F",
  "walking_woman": "\u{1F6B6}\u200D\u2640\uFE0F",
  "standing_person": "\u{1F9CD}",
  "standing_man": "\u{1F9CD}\u200D\u2642\uFE0F",
  "standing_woman": "\u{1F9CD}\u200D\u2640\uFE0F",
  "kneeling_person": "\u{1F9CE}",
  "kneeling_man": "\u{1F9CE}\u200D\u2642\uFE0F",
  "kneeling_woman": "\u{1F9CE}\u200D\u2640\uFE0F",
  "person_with_probing_cane": "\u{1F9D1}\u200D\u{1F9AF}",
  "man_with_probing_cane": "\u{1F468}\u200D\u{1F9AF}",
  "woman_with_probing_cane": "\u{1F469}\u200D\u{1F9AF}",
  "person_in_motorized_wheelchair": "\u{1F9D1}\u200D\u{1F9BC}",
  "man_in_motorized_wheelchair": "\u{1F468}\u200D\u{1F9BC}",
  "woman_in_motorized_wheelchair": "\u{1F469}\u200D\u{1F9BC}",
  "person_in_manual_wheelchair": "\u{1F9D1}\u200D\u{1F9BD}",
  "man_in_manual_wheelchair": "\u{1F468}\u200D\u{1F9BD}",
  "woman_in_manual_wheelchair": "\u{1F469}\u200D\u{1F9BD}",
  "runner": "\u{1F3C3}",
  "running": "\u{1F3C3}",
  "running_man": "\u{1F3C3}\u200D\u2642\uFE0F",
  "running_woman": "\u{1F3C3}\u200D\u2640\uFE0F",
  "woman_dancing": "\u{1F483}",
  "dancer": "\u{1F483}",
  "man_dancing": "\u{1F57A}",
  "business_suit_levitating": "\u{1F574}\uFE0F",
  "dancers": "\u{1F46F}",
  "dancing_men": "\u{1F46F}\u200D\u2642\uFE0F",
  "dancing_women": "\u{1F46F}\u200D\u2640\uFE0F",
  "sauna_person": "\u{1F9D6}",
  "sauna_man": "\u{1F9D6}\u200D\u2642\uFE0F",
  "sauna_woman": "\u{1F9D6}\u200D\u2640\uFE0F",
  "climbing": "\u{1F9D7}",
  "climbing_man": "\u{1F9D7}\u200D\u2642\uFE0F",
  "climbing_woman": "\u{1F9D7}\u200D\u2640\uFE0F",
  "person_fencing": "\u{1F93A}",
  "horse_racing": "\u{1F3C7}",
  "skier": "\u26F7\uFE0F",
  "snowboarder": "\u{1F3C2}",
  "golfing": "\u{1F3CC}\uFE0F",
  "golfing_man": "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
  "golfing_woman": "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
  "surfer": "\u{1F3C4}",
  "surfing_man": "\u{1F3C4}\u200D\u2642\uFE0F",
  "surfing_woman": "\u{1F3C4}\u200D\u2640\uFE0F",
  "rowboat": "\u{1F6A3}",
  "rowing_man": "\u{1F6A3}\u200D\u2642\uFE0F",
  "rowing_woman": "\u{1F6A3}\u200D\u2640\uFE0F",
  "swimmer": "\u{1F3CA}",
  "swimming_man": "\u{1F3CA}\u200D\u2642\uFE0F",
  "swimming_woman": "\u{1F3CA}\u200D\u2640\uFE0F",
  "bouncing_ball_person": "\u26F9\uFE0F",
  "bouncing_ball_man": "\u26F9\uFE0F\u200D\u2642\uFE0F",
  "basketball_man": "\u26F9\uFE0F\u200D\u2642\uFE0F",
  "bouncing_ball_woman": "\u26F9\uFE0F\u200D\u2640\uFE0F",
  "basketball_woman": "\u26F9\uFE0F\u200D\u2640\uFE0F",
  "weight_lifting": "\u{1F3CB}\uFE0F",
  "weight_lifting_man": "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
  "weight_lifting_woman": "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
  "bicyclist": "\u{1F6B4}",
  "biking_man": "\u{1F6B4}\u200D\u2642\uFE0F",
  "biking_woman": "\u{1F6B4}\u200D\u2640\uFE0F",
  "mountain_bicyclist": "\u{1F6B5}",
  "mountain_biking_man": "\u{1F6B5}\u200D\u2642\uFE0F",
  "mountain_biking_woman": "\u{1F6B5}\u200D\u2640\uFE0F",
  "cartwheeling": "\u{1F938}",
  "man_cartwheeling": "\u{1F938}\u200D\u2642\uFE0F",
  "woman_cartwheeling": "\u{1F938}\u200D\u2640\uFE0F",
  "wrestling": "\u{1F93C}",
  "men_wrestling": "\u{1F93C}\u200D\u2642\uFE0F",
  "women_wrestling": "\u{1F93C}\u200D\u2640\uFE0F",
  "water_polo": "\u{1F93D}",
  "man_playing_water_polo": "\u{1F93D}\u200D\u2642\uFE0F",
  "woman_playing_water_polo": "\u{1F93D}\u200D\u2640\uFE0F",
  "handball_person": "\u{1F93E}",
  "man_playing_handball": "\u{1F93E}\u200D\u2642\uFE0F",
  "woman_playing_handball": "\u{1F93E}\u200D\u2640\uFE0F",
  "juggling_person": "\u{1F939}",
  "man_juggling": "\u{1F939}\u200D\u2642\uFE0F",
  "woman_juggling": "\u{1F939}\u200D\u2640\uFE0F",
  "lotus_position": "\u{1F9D8}",
  "lotus_position_man": "\u{1F9D8}\u200D\u2642\uFE0F",
  "lotus_position_woman": "\u{1F9D8}\u200D\u2640\uFE0F",
  "bath": "\u{1F6C0}",
  "sleeping_bed": "\u{1F6CC}",
  "people_holding_hands": "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
  "two_women_holding_hands": "\u{1F46D}",
  "couple": "\u{1F46B}",
  "two_men_holding_hands": "\u{1F46C}",
  "couplekiss": "\u{1F48F}",
  "couplekiss_man_woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
  "couplekiss_man_man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
  "couplekiss_woman_woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
  "couple_with_heart": "\u{1F491}",
  "couple_with_heart_woman_man": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
  "couple_with_heart_man_man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
  "couple_with_heart_woman_woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
  "family": "\u{1F46A}",
  "family_man_woman_boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
  "family_man_woman_girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
  "family_man_woman_girl_boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  "family_man_woman_boy_boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  "family_man_woman_girl_girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  "family_man_man_boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
  "family_man_man_girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
  "family_man_man_girl_boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
  "family_man_man_boy_boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
  "family_man_man_girl_girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
  "family_woman_woman_boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
  "family_woman_woman_girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
  "family_woman_woman_girl_boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  "family_woman_woman_boy_boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  "family_woman_woman_girl_girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  "family_man_boy": "\u{1F468}\u200D\u{1F466}",
  "family_man_boy_boy": "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
  "family_man_girl": "\u{1F468}\u200D\u{1F467}",
  "family_man_girl_boy": "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
  "family_man_girl_girl": "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
  "family_woman_boy": "\u{1F469}\u200D\u{1F466}",
  "family_woman_boy_boy": "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  "family_woman_girl": "\u{1F469}\u200D\u{1F467}",
  "family_woman_girl_boy": "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  "family_woman_girl_girl": "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  "speaking_head": "\u{1F5E3}\uFE0F",
  "bust_in_silhouette": "\u{1F464}",
  "busts_in_silhouette": "\u{1F465}",
  "people_hugging": "\u{1FAC2}",
  "footprints": "\u{1F463}",
  "monkey_face": "\u{1F435}",
  "monkey": "\u{1F412}",
  "gorilla": "\u{1F98D}",
  "orangutan": "\u{1F9A7}",
  "dog": "\u{1F436}",
  "dog2": "\u{1F415}",
  "guide_dog": "\u{1F9AE}",
  "service_dog": "\u{1F415}\u200D\u{1F9BA}",
  "poodle": "\u{1F429}",
  "wolf": "\u{1F43A}",
  "fox_face": "\u{1F98A}",
  "raccoon": "\u{1F99D}",
  "cat": "\u{1F431}",
  "cat2": "\u{1F408}",
  "black_cat": "\u{1F408}\u200D\u2B1B",
  "lion": "\u{1F981}",
  "tiger": "\u{1F42F}",
  "tiger2": "\u{1F405}",
  "leopard": "\u{1F406}",
  "horse": "\u{1F434}",
  "moose": "\u{1FACE}",
  "donkey": "\u{1FACF}",
  "racehorse": "\u{1F40E}",
  "unicorn": "\u{1F984}",
  "zebra": "\u{1F993}",
  "deer": "\u{1F98C}",
  "bison": "\u{1F9AC}",
  "cow": "\u{1F42E}",
  "ox": "\u{1F402}",
  "water_buffalo": "\u{1F403}",
  "cow2": "\u{1F404}",
  "pig": "\u{1F437}",
  "pig2": "\u{1F416}",
  "boar": "\u{1F417}",
  "pig_nose": "\u{1F43D}",
  "ram": "\u{1F40F}",
  "sheep": "\u{1F411}",
  "goat": "\u{1F410}",
  "dromedary_camel": "\u{1F42A}",
  "camel": "\u{1F42B}",
  "llama": "\u{1F999}",
  "giraffe": "\u{1F992}",
  "elephant": "\u{1F418}",
  "mammoth": "\u{1F9A3}",
  "rhinoceros": "\u{1F98F}",
  "hippopotamus": "\u{1F99B}",
  "mouse": "\u{1F42D}",
  "mouse2": "\u{1F401}",
  "rat": "\u{1F400}",
  "hamster": "\u{1F439}",
  "rabbit": "\u{1F430}",
  "rabbit2": "\u{1F407}",
  "chipmunk": "\u{1F43F}\uFE0F",
  "beaver": "\u{1F9AB}",
  "hedgehog": "\u{1F994}",
  "bat": "\u{1F987}",
  "bear": "\u{1F43B}",
  "polar_bear": "\u{1F43B}\u200D\u2744\uFE0F",
  "koala": "\u{1F428}",
  "panda_face": "\u{1F43C}",
  "sloth": "\u{1F9A5}",
  "otter": "\u{1F9A6}",
  "skunk": "\u{1F9A8}",
  "kangaroo": "\u{1F998}",
  "badger": "\u{1F9A1}",
  "feet": "\u{1F43E}",
  "paw_prints": "\u{1F43E}",
  "turkey": "\u{1F983}",
  "chicken": "\u{1F414}",
  "rooster": "\u{1F413}",
  "hatching_chick": "\u{1F423}",
  "baby_chick": "\u{1F424}",
  "hatched_chick": "\u{1F425}",
  "bird": "\u{1F426}",
  "penguin": "\u{1F427}",
  "dove": "\u{1F54A}\uFE0F",
  "eagle": "\u{1F985}",
  "duck": "\u{1F986}",
  "swan": "\u{1F9A2}",
  "owl": "\u{1F989}",
  "dodo": "\u{1F9A4}",
  "feather": "\u{1FAB6}",
  "flamingo": "\u{1F9A9}",
  "peacock": "\u{1F99A}",
  "parrot": "\u{1F99C}",
  "wing": "\u{1FABD}",
  "black_bird": "\u{1F426}\u200D\u2B1B",
  "goose": "\u{1FABF}",
  "frog": "\u{1F438}",
  "crocodile": "\u{1F40A}",
  "turtle": "\u{1F422}",
  "lizard": "\u{1F98E}",
  "snake": "\u{1F40D}",
  "dragon_face": "\u{1F432}",
  "dragon": "\u{1F409}",
  "sauropod": "\u{1F995}",
  "t-rex": "\u{1F996}",
  "whale": "\u{1F433}",
  "whale2": "\u{1F40B}",
  "dolphin": "\u{1F42C}",
  "flipper": "\u{1F42C}",
  "seal": "\u{1F9AD}",
  "fish": "\u{1F41F}",
  "tropical_fish": "\u{1F420}",
  "blowfish": "\u{1F421}",
  "shark": "\u{1F988}",
  "octopus": "\u{1F419}",
  "shell": "\u{1F41A}",
  "coral": "\u{1FAB8}",
  "jellyfish": "\u{1FABC}",
  "snail": "\u{1F40C}",
  "butterfly": "\u{1F98B}",
  "bug": "\u{1F41B}",
  "ant": "\u{1F41C}",
  "bee": "\u{1F41D}",
  "honeybee": "\u{1F41D}",
  "beetle": "\u{1FAB2}",
  "lady_beetle": "\u{1F41E}",
  "cricket": "\u{1F997}",
  "cockroach": "\u{1FAB3}",
  "spider": "\u{1F577}\uFE0F",
  "spider_web": "\u{1F578}\uFE0F",
  "scorpion": "\u{1F982}",
  "mosquito": "\u{1F99F}",
  "fly": "\u{1FAB0}",
  "worm": "\u{1FAB1}",
  "microbe": "\u{1F9A0}",
  "bouquet": "\u{1F490}",
  "cherry_blossom": "\u{1F338}",
  "white_flower": "\u{1F4AE}",
  "lotus": "\u{1FAB7}",
  "rosette": "\u{1F3F5}\uFE0F",
  "rose": "\u{1F339}",
  "wilted_flower": "\u{1F940}",
  "hibiscus": "\u{1F33A}",
  "sunflower": "\u{1F33B}",
  "blossom": "\u{1F33C}",
  "tulip": "\u{1F337}",
  "hyacinth": "\u{1FABB}",
  "seedling": "\u{1F331}",
  "potted_plant": "\u{1FAB4}",
  "evergreen_tree": "\u{1F332}",
  "deciduous_tree": "\u{1F333}",
  "palm_tree": "\u{1F334}",
  "cactus": "\u{1F335}",
  "ear_of_rice": "\u{1F33E}",
  "herb": "\u{1F33F}",
  "shamrock": "\u2618\uFE0F",
  "four_leaf_clover": "\u{1F340}",
  "maple_leaf": "\u{1F341}",
  "fallen_leaf": "\u{1F342}",
  "leaves": "\u{1F343}",
  "empty_nest": "\u{1FAB9}",
  "nest_with_eggs": "\u{1FABA}",
  "mushroom": "\u{1F344}",
  "grapes": "\u{1F347}",
  "melon": "\u{1F348}",
  "watermelon": "\u{1F349}",
  "tangerine": "\u{1F34A}",
  "orange": "\u{1F34A}",
  "mandarin": "\u{1F34A}",
  "lemon": "\u{1F34B}",
  "banana": "\u{1F34C}",
  "pineapple": "\u{1F34D}",
  "mango": "\u{1F96D}",
  "apple": "\u{1F34E}",
  "green_apple": "\u{1F34F}",
  "pear": "\u{1F350}",
  "peach": "\u{1F351}",
  "cherries": "\u{1F352}",
  "strawberry": "\u{1F353}",
  "blueberries": "\u{1FAD0}",
  "kiwi_fruit": "\u{1F95D}",
  "tomato": "\u{1F345}",
  "olive": "\u{1FAD2}",
  "coconut": "\u{1F965}",
  "avocado": "\u{1F951}",
  "eggplant": "\u{1F346}",
  "potato": "\u{1F954}",
  "carrot": "\u{1F955}",
  "corn": "\u{1F33D}",
  "hot_pepper": "\u{1F336}\uFE0F",
  "bell_pepper": "\u{1FAD1}",
  "cucumber": "\u{1F952}",
  "leafy_green": "\u{1F96C}",
  "broccoli": "\u{1F966}",
  "garlic": "\u{1F9C4}",
  "onion": "\u{1F9C5}",
  "peanuts": "\u{1F95C}",
  "beans": "\u{1FAD8}",
  "chestnut": "\u{1F330}",
  "ginger_root": "\u{1FADA}",
  "pea_pod": "\u{1FADB}",
  "bread": "\u{1F35E}",
  "croissant": "\u{1F950}",
  "baguette_bread": "\u{1F956}",
  "flatbread": "\u{1FAD3}",
  "pretzel": "\u{1F968}",
  "bagel": "\u{1F96F}",
  "pancakes": "\u{1F95E}",
  "waffle": "\u{1F9C7}",
  "cheese": "\u{1F9C0}",
  "meat_on_bone": "\u{1F356}",
  "poultry_leg": "\u{1F357}",
  "cut_of_meat": "\u{1F969}",
  "bacon": "\u{1F953}",
  "hamburger": "\u{1F354}",
  "fries": "\u{1F35F}",
  "pizza": "\u{1F355}",
  "hotdog": "\u{1F32D}",
  "sandwich": "\u{1F96A}",
  "taco": "\u{1F32E}",
  "burrito": "\u{1F32F}",
  "tamale": "\u{1FAD4}",
  "stuffed_flatbread": "\u{1F959}",
  "falafel": "\u{1F9C6}",
  "egg": "\u{1F95A}",
  "fried_egg": "\u{1F373}",
  "shallow_pan_of_food": "\u{1F958}",
  "stew": "\u{1F372}",
  "fondue": "\u{1FAD5}",
  "bowl_with_spoon": "\u{1F963}",
  "green_salad": "\u{1F957}",
  "popcorn": "\u{1F37F}",
  "butter": "\u{1F9C8}",
  "salt": "\u{1F9C2}",
  "canned_food": "\u{1F96B}",
  "bento": "\u{1F371}",
  "rice_cracker": "\u{1F358}",
  "rice_ball": "\u{1F359}",
  "rice": "\u{1F35A}",
  "curry": "\u{1F35B}",
  "ramen": "\u{1F35C}",
  "spaghetti": "\u{1F35D}",
  "sweet_potato": "\u{1F360}",
  "oden": "\u{1F362}",
  "sushi": "\u{1F363}",
  "fried_shrimp": "\u{1F364}",
  "fish_cake": "\u{1F365}",
  "moon_cake": "\u{1F96E}",
  "dango": "\u{1F361}",
  "dumpling": "\u{1F95F}",
  "fortune_cookie": "\u{1F960}",
  "takeout_box": "\u{1F961}",
  "crab": "\u{1F980}",
  "lobster": "\u{1F99E}",
  "shrimp": "\u{1F990}",
  "squid": "\u{1F991}",
  "oyster": "\u{1F9AA}",
  "icecream": "\u{1F366}",
  "shaved_ice": "\u{1F367}",
  "ice_cream": "\u{1F368}",
  "doughnut": "\u{1F369}",
  "cookie": "\u{1F36A}",
  "birthday": "\u{1F382}",
  "cake": "\u{1F370}",
  "cupcake": "\u{1F9C1}",
  "pie": "\u{1F967}",
  "chocolate_bar": "\u{1F36B}",
  "candy": "\u{1F36C}",
  "lollipop": "\u{1F36D}",
  "custard": "\u{1F36E}",
  "honey_pot": "\u{1F36F}",
  "baby_bottle": "\u{1F37C}",
  "milk_glass": "\u{1F95B}",
  "coffee": "\u2615",
  "teapot": "\u{1FAD6}",
  "tea": "\u{1F375}",
  "sake": "\u{1F376}",
  "champagne": "\u{1F37E}",
  "wine_glass": "\u{1F377}",
  "cocktail": "\u{1F378}",
  "tropical_drink": "\u{1F379}",
  "beer": "\u{1F37A}",
  "beers": "\u{1F37B}",
  "clinking_glasses": "\u{1F942}",
  "tumbler_glass": "\u{1F943}",
  "pouring_liquid": "\u{1FAD7}",
  "cup_with_straw": "\u{1F964}",
  "bubble_tea": "\u{1F9CB}",
  "beverage_box": "\u{1F9C3}",
  "mate": "\u{1F9C9}",
  "ice_cube": "\u{1F9CA}",
  "chopsticks": "\u{1F962}",
  "plate_with_cutlery": "\u{1F37D}\uFE0F",
  "fork_and_knife": "\u{1F374}",
  "spoon": "\u{1F944}",
  "hocho": "\u{1F52A}",
  "knife": "\u{1F52A}",
  "jar": "\u{1FAD9}",
  "amphora": "\u{1F3FA}",
  "earth_africa": "\u{1F30D}",
  "earth_americas": "\u{1F30E}",
  "earth_asia": "\u{1F30F}",
  "globe_with_meridians": "\u{1F310}",
  "world_map": "\u{1F5FA}\uFE0F",
  "japan": "\u{1F5FE}",
  "compass": "\u{1F9ED}",
  "mountain_snow": "\u{1F3D4}\uFE0F",
  "mountain": "\u26F0\uFE0F",
  "volcano": "\u{1F30B}",
  "mount_fuji": "\u{1F5FB}",
  "camping": "\u{1F3D5}\uFE0F",
  "beach_umbrella": "\u{1F3D6}\uFE0F",
  "desert": "\u{1F3DC}\uFE0F",
  "desert_island": "\u{1F3DD}\uFE0F",
  "national_park": "\u{1F3DE}\uFE0F",
  "stadium": "\u{1F3DF}\uFE0F",
  "classical_building": "\u{1F3DB}\uFE0F",
  "building_construction": "\u{1F3D7}\uFE0F",
  "bricks": "\u{1F9F1}",
  "rock": "\u{1FAA8}",
  "wood": "\u{1FAB5}",
  "hut": "\u{1F6D6}",
  "houses": "\u{1F3D8}\uFE0F",
  "derelict_house": "\u{1F3DA}\uFE0F",
  "house": "\u{1F3E0}",
  "house_with_garden": "\u{1F3E1}",
  "office": "\u{1F3E2}",
  "post_office": "\u{1F3E3}",
  "european_post_office": "\u{1F3E4}",
  "hospital": "\u{1F3E5}",
  "bank": "\u{1F3E6}",
  "hotel": "\u{1F3E8}",
  "love_hotel": "\u{1F3E9}",
  "convenience_store": "\u{1F3EA}",
  "school": "\u{1F3EB}",
  "department_store": "\u{1F3EC}",
  "factory": "\u{1F3ED}",
  "japanese_castle": "\u{1F3EF}",
  "european_castle": "\u{1F3F0}",
  "wedding": "\u{1F492}",
  "tokyo_tower": "\u{1F5FC}",
  "statue_of_liberty": "\u{1F5FD}",
  "church": "\u26EA",
  "mosque": "\u{1F54C}",
  "hindu_temple": "\u{1F6D5}",
  "synagogue": "\u{1F54D}",
  "shinto_shrine": "\u26E9\uFE0F",
  "kaaba": "\u{1F54B}",
  "fountain": "\u26F2",
  "tent": "\u26FA",
  "foggy": "\u{1F301}",
  "night_with_stars": "\u{1F303}",
  "cityscape": "\u{1F3D9}\uFE0F",
  "sunrise_over_mountains": "\u{1F304}",
  "sunrise": "\u{1F305}",
  "city_sunset": "\u{1F306}",
  "city_sunrise": "\u{1F307}",
  "bridge_at_night": "\u{1F309}",
  "hotsprings": "\u2668\uFE0F",
  "carousel_horse": "\u{1F3A0}",
  "playground_slide": "\u{1F6DD}",
  "ferris_wheel": "\u{1F3A1}",
  "roller_coaster": "\u{1F3A2}",
  "barber": "\u{1F488}",
  "circus_tent": "\u{1F3AA}",
  "steam_locomotive": "\u{1F682}",
  "railway_car": "\u{1F683}",
  "bullettrain_side": "\u{1F684}",
  "bullettrain_front": "\u{1F685}",
  "train2": "\u{1F686}",
  "metro": "\u{1F687}",
  "light_rail": "\u{1F688}",
  "station": "\u{1F689}",
  "tram": "\u{1F68A}",
  "monorail": "\u{1F69D}",
  "mountain_railway": "\u{1F69E}",
  "train": "\u{1F68B}",
  "bus": "\u{1F68C}",
  "oncoming_bus": "\u{1F68D}",
  "trolleybus": "\u{1F68E}",
  "minibus": "\u{1F690}",
  "ambulance": "\u{1F691}",
  "fire_engine": "\u{1F692}",
  "police_car": "\u{1F693}",
  "oncoming_police_car": "\u{1F694}",
  "taxi": "\u{1F695}",
  "oncoming_taxi": "\u{1F696}",
  "car": "\u{1F697}",
  "red_car": "\u{1F697}",
  "oncoming_automobile": "\u{1F698}",
  "blue_car": "\u{1F699}",
  "pickup_truck": "\u{1F6FB}",
  "truck": "\u{1F69A}",
  "articulated_lorry": "\u{1F69B}",
  "tractor": "\u{1F69C}",
  "racing_car": "\u{1F3CE}\uFE0F",
  "motorcycle": "\u{1F3CD}\uFE0F",
  "motor_scooter": "\u{1F6F5}",
  "manual_wheelchair": "\u{1F9BD}",
  "motorized_wheelchair": "\u{1F9BC}",
  "auto_rickshaw": "\u{1F6FA}",
  "bike": "\u{1F6B2}",
  "kick_scooter": "\u{1F6F4}",
  "skateboard": "\u{1F6F9}",
  "roller_skate": "\u{1F6FC}",
  "busstop": "\u{1F68F}",
  "motorway": "\u{1F6E3}\uFE0F",
  "railway_track": "\u{1F6E4}\uFE0F",
  "oil_drum": "\u{1F6E2}\uFE0F",
  "fuelpump": "\u26FD",
  "wheel": "\u{1F6DE}",
  "rotating_light": "\u{1F6A8}",
  "traffic_light": "\u{1F6A5}",
  "vertical_traffic_light": "\u{1F6A6}",
  "stop_sign": "\u{1F6D1}",
  "construction": "\u{1F6A7}",
  "anchor": "\u2693",
  "ring_buoy": "\u{1F6DF}",
  "boat": "\u26F5",
  "sailboat": "\u26F5",
  "canoe": "\u{1F6F6}",
  "speedboat": "\u{1F6A4}",
  "passenger_ship": "\u{1F6F3}\uFE0F",
  "ferry": "\u26F4\uFE0F",
  "motor_boat": "\u{1F6E5}\uFE0F",
  "ship": "\u{1F6A2}",
  "airplane": "\u2708\uFE0F",
  "small_airplane": "\u{1F6E9}\uFE0F",
  "flight_departure": "\u{1F6EB}",
  "flight_arrival": "\u{1F6EC}",
  "parachute": "\u{1FA82}",
  "seat": "\u{1F4BA}",
  "helicopter": "\u{1F681}",
  "suspension_railway": "\u{1F69F}",
  "mountain_cableway": "\u{1F6A0}",
  "aerial_tramway": "\u{1F6A1}",
  "artificial_satellite": "\u{1F6F0}\uFE0F",
  "rocket": "\u{1F680}",
  "flying_saucer": "\u{1F6F8}",
  "bellhop_bell": "\u{1F6CE}\uFE0F",
  "luggage": "\u{1F9F3}",
  "hourglass": "\u231B",
  "hourglass_flowing_sand": "\u23F3",
  "watch": "\u231A",
  "alarm_clock": "\u23F0",
  "stopwatch": "\u23F1\uFE0F",
  "timer_clock": "\u23F2\uFE0F",
  "mantelpiece_clock": "\u{1F570}\uFE0F",
  "clock12": "\u{1F55B}",
  "clock1230": "\u{1F567}",
  "clock1": "\u{1F550}",
  "clock130": "\u{1F55C}",
  "clock2": "\u{1F551}",
  "clock230": "\u{1F55D}",
  "clock3": "\u{1F552}",
  "clock330": "\u{1F55E}",
  "clock4": "\u{1F553}",
  "clock430": "\u{1F55F}",
  "clock5": "\u{1F554}",
  "clock530": "\u{1F560}",
  "clock6": "\u{1F555}",
  "clock630": "\u{1F561}",
  "clock7": "\u{1F556}",
  "clock730": "\u{1F562}",
  "clock8": "\u{1F557}",
  "clock830": "\u{1F563}",
  "clock9": "\u{1F558}",
  "clock930": "\u{1F564}",
  "clock10": "\u{1F559}",
  "clock1030": "\u{1F565}",
  "clock11": "\u{1F55A}",
  "clock1130": "\u{1F566}",
  "new_moon": "\u{1F311}",
  "waxing_crescent_moon": "\u{1F312}",
  "first_quarter_moon": "\u{1F313}",
  "moon": "\u{1F314}",
  "waxing_gibbous_moon": "\u{1F314}",
  "full_moon": "\u{1F315}",
  "waning_gibbous_moon": "\u{1F316}",
  "last_quarter_moon": "\u{1F317}",
  "waning_crescent_moon": "\u{1F318}",
  "crescent_moon": "\u{1F319}",
  "new_moon_with_face": "\u{1F31A}",
  "first_quarter_moon_with_face": "\u{1F31B}",
  "last_quarter_moon_with_face": "\u{1F31C}",
  "thermometer": "\u{1F321}\uFE0F",
  "sunny": "\u2600\uFE0F",
  "full_moon_with_face": "\u{1F31D}",
  "sun_with_face": "\u{1F31E}",
  "ringed_planet": "\u{1FA90}",
  "star": "\u2B50",
  "star2": "\u{1F31F}",
  "stars": "\u{1F320}",
  "milky_way": "\u{1F30C}",
  "cloud": "\u2601\uFE0F",
  "partly_sunny": "\u26C5",
  "cloud_with_lightning_and_rain": "\u26C8\uFE0F",
  "sun_behind_small_cloud": "\u{1F324}\uFE0F",
  "sun_behind_large_cloud": "\u{1F325}\uFE0F",
  "sun_behind_rain_cloud": "\u{1F326}\uFE0F",
  "cloud_with_rain": "\u{1F327}\uFE0F",
  "cloud_with_snow": "\u{1F328}\uFE0F",
  "cloud_with_lightning": "\u{1F329}\uFE0F",
  "tornado": "\u{1F32A}\uFE0F",
  "fog": "\u{1F32B}\uFE0F",
  "wind_face": "\u{1F32C}\uFE0F",
  "cyclone": "\u{1F300}",
  "rainbow": "\u{1F308}",
  "closed_umbrella": "\u{1F302}",
  "open_umbrella": "\u2602\uFE0F",
  "umbrella": "\u2614",
  "parasol_on_ground": "\u26F1\uFE0F",
  "zap": "\u26A1",
  "snowflake": "\u2744\uFE0F",
  "snowman_with_snow": "\u2603\uFE0F",
  "snowman": "\u26C4",
  "comet": "\u2604\uFE0F",
  "fire": "\u{1F525}",
  "droplet": "\u{1F4A7}",
  "ocean": "\u{1F30A}",
  "jack_o_lantern": "\u{1F383}",
  "christmas_tree": "\u{1F384}",
  "fireworks": "\u{1F386}",
  "sparkler": "\u{1F387}",
  "firecracker": "\u{1F9E8}",
  "sparkles": "\u2728",
  "balloon": "\u{1F388}",
  "tada": "\u{1F389}",
  "confetti_ball": "\u{1F38A}",
  "tanabata_tree": "\u{1F38B}",
  "bamboo": "\u{1F38D}",
  "dolls": "\u{1F38E}",
  "flags": "\u{1F38F}",
  "wind_chime": "\u{1F390}",
  "rice_scene": "\u{1F391}",
  "red_envelope": "\u{1F9E7}",
  "ribbon": "\u{1F380}",
  "gift": "\u{1F381}",
  "reminder_ribbon": "\u{1F397}\uFE0F",
  "tickets": "\u{1F39F}\uFE0F",
  "ticket": "\u{1F3AB}",
  "medal_military": "\u{1F396}\uFE0F",
  "trophy": "\u{1F3C6}",
  "medal_sports": "\u{1F3C5}",
  "1st_place_medal": "\u{1F947}",
  "2nd_place_medal": "\u{1F948}",
  "3rd_place_medal": "\u{1F949}",
  "soccer": "\u26BD",
  "baseball": "\u26BE",
  "softball": "\u{1F94E}",
  "basketball": "\u{1F3C0}",
  "volleyball": "\u{1F3D0}",
  "football": "\u{1F3C8}",
  "rugby_football": "\u{1F3C9}",
  "tennis": "\u{1F3BE}",
  "flying_disc": "\u{1F94F}",
  "bowling": "\u{1F3B3}",
  "cricket_game": "\u{1F3CF}",
  "field_hockey": "\u{1F3D1}",
  "ice_hockey": "\u{1F3D2}",
  "lacrosse": "\u{1F94D}",
  "ping_pong": "\u{1F3D3}",
  "badminton": "\u{1F3F8}",
  "boxing_glove": "\u{1F94A}",
  "martial_arts_uniform": "\u{1F94B}",
  "goal_net": "\u{1F945}",
  "golf": "\u26F3",
  "ice_skate": "\u26F8\uFE0F",
  "fishing_pole_and_fish": "\u{1F3A3}",
  "diving_mask": "\u{1F93F}",
  "running_shirt_with_sash": "\u{1F3BD}",
  "ski": "\u{1F3BF}",
  "sled": "\u{1F6F7}",
  "curling_stone": "\u{1F94C}",
  "dart": "\u{1F3AF}",
  "yo_yo": "\u{1FA80}",
  "kite": "\u{1FA81}",
  "gun": "\u{1F52B}",
  "8ball": "\u{1F3B1}",
  "crystal_ball": "\u{1F52E}",
  "magic_wand": "\u{1FA84}",
  "video_game": "\u{1F3AE}",
  "joystick": "\u{1F579}\uFE0F",
  "slot_machine": "\u{1F3B0}",
  "game_die": "\u{1F3B2}",
  "jigsaw": "\u{1F9E9}",
  "teddy_bear": "\u{1F9F8}",
  "pinata": "\u{1FA85}",
  "mirror_ball": "\u{1FAA9}",
  "nesting_dolls": "\u{1FA86}",
  "spades": "\u2660\uFE0F",
  "hearts": "\u2665\uFE0F",
  "diamonds": "\u2666\uFE0F",
  "clubs": "\u2663\uFE0F",
  "chess_pawn": "\u265F\uFE0F",
  "black_joker": "\u{1F0CF}",
  "mahjong": "\u{1F004}",
  "flower_playing_cards": "\u{1F3B4}",
  "performing_arts": "\u{1F3AD}",
  "framed_picture": "\u{1F5BC}\uFE0F",
  "art": "\u{1F3A8}",
  "thread": "\u{1F9F5}",
  "sewing_needle": "\u{1FAA1}",
  "yarn": "\u{1F9F6}",
  "knot": "\u{1FAA2}",
  "eyeglasses": "\u{1F453}",
  "dark_sunglasses": "\u{1F576}\uFE0F",
  "goggles": "\u{1F97D}",
  "lab_coat": "\u{1F97C}",
  "safety_vest": "\u{1F9BA}",
  "necktie": "\u{1F454}",
  "shirt": "\u{1F455}",
  "tshirt": "\u{1F455}",
  "jeans": "\u{1F456}",
  "scarf": "\u{1F9E3}",
  "gloves": "\u{1F9E4}",
  "coat": "\u{1F9E5}",
  "socks": "\u{1F9E6}",
  "dress": "\u{1F457}",
  "kimono": "\u{1F458}",
  "sari": "\u{1F97B}",
  "one_piece_swimsuit": "\u{1FA71}",
  "swim_brief": "\u{1FA72}",
  "shorts": "\u{1FA73}",
  "bikini": "\u{1F459}",
  "womans_clothes": "\u{1F45A}",
  "folding_hand_fan": "\u{1FAAD}",
  "purse": "\u{1F45B}",
  "handbag": "\u{1F45C}",
  "pouch": "\u{1F45D}",
  "shopping": "\u{1F6CD}\uFE0F",
  "school_satchel": "\u{1F392}",
  "thong_sandal": "\u{1FA74}",
  "mans_shoe": "\u{1F45E}",
  "shoe": "\u{1F45E}",
  "athletic_shoe": "\u{1F45F}",
  "hiking_boot": "\u{1F97E}",
  "flat_shoe": "\u{1F97F}",
  "high_heel": "\u{1F460}",
  "sandal": "\u{1F461}",
  "ballet_shoes": "\u{1FA70}",
  "boot": "\u{1F462}",
  "hair_pick": "\u{1FAAE}",
  "crown": "\u{1F451}",
  "womans_hat": "\u{1F452}",
  "tophat": "\u{1F3A9}",
  "mortar_board": "\u{1F393}",
  "billed_cap": "\u{1F9E2}",
  "military_helmet": "\u{1FA96}",
  "rescue_worker_helmet": "\u26D1\uFE0F",
  "prayer_beads": "\u{1F4FF}",
  "lipstick": "\u{1F484}",
  "ring": "\u{1F48D}",
  "gem": "\u{1F48E}",
  "mute": "\u{1F507}",
  "speaker": "\u{1F508}",
  "sound": "\u{1F509}",
  "loud_sound": "\u{1F50A}",
  "loudspeaker": "\u{1F4E2}",
  "mega": "\u{1F4E3}",
  "postal_horn": "\u{1F4EF}",
  "bell": "\u{1F514}",
  "no_bell": "\u{1F515}",
  "musical_score": "\u{1F3BC}",
  "musical_note": "\u{1F3B5}",
  "notes": "\u{1F3B6}",
  "studio_microphone": "\u{1F399}\uFE0F",
  "level_slider": "\u{1F39A}\uFE0F",
  "control_knobs": "\u{1F39B}\uFE0F",
  "microphone": "\u{1F3A4}",
  "headphones": "\u{1F3A7}",
  "radio": "\u{1F4FB}",
  "saxophone": "\u{1F3B7}",
  "accordion": "\u{1FA97}",
  "guitar": "\u{1F3B8}",
  "musical_keyboard": "\u{1F3B9}",
  "trumpet": "\u{1F3BA}",
  "violin": "\u{1F3BB}",
  "banjo": "\u{1FA95}",
  "drum": "\u{1F941}",
  "long_drum": "\u{1FA98}",
  "maracas": "\u{1FA87}",
  "flute": "\u{1FA88}",
  "iphone": "\u{1F4F1}",
  "calling": "\u{1F4F2}",
  "phone": "\u260E\uFE0F",
  "telephone": "\u260E\uFE0F",
  "telephone_receiver": "\u{1F4DE}",
  "pager": "\u{1F4DF}",
  "fax": "\u{1F4E0}",
  "battery": "\u{1F50B}",
  "low_battery": "\u{1FAAB}",
  "electric_plug": "\u{1F50C}",
  "computer": "\u{1F4BB}",
  "desktop_computer": "\u{1F5A5}\uFE0F",
  "printer": "\u{1F5A8}\uFE0F",
  "keyboard": "\u2328\uFE0F",
  "computer_mouse": "\u{1F5B1}\uFE0F",
  "trackball": "\u{1F5B2}\uFE0F",
  "minidisc": "\u{1F4BD}",
  "floppy_disk": "\u{1F4BE}",
  "cd": "\u{1F4BF}",
  "dvd": "\u{1F4C0}",
  "abacus": "\u{1F9EE}",
  "movie_camera": "\u{1F3A5}",
  "film_strip": "\u{1F39E}\uFE0F",
  "film_projector": "\u{1F4FD}\uFE0F",
  "clapper": "\u{1F3AC}",
  "tv": "\u{1F4FA}",
  "camera": "\u{1F4F7}",
  "camera_flash": "\u{1F4F8}",
  "video_camera": "\u{1F4F9}",
  "vhs": "\u{1F4FC}",
  "mag": "\u{1F50D}",
  "mag_right": "\u{1F50E}",
  "candle": "\u{1F56F}\uFE0F",
  "bulb": "\u{1F4A1}",
  "flashlight": "\u{1F526}",
  "izakaya_lantern": "\u{1F3EE}",
  "lantern": "\u{1F3EE}",
  "diya_lamp": "\u{1FA94}",
  "notebook_with_decorative_cover": "\u{1F4D4}",
  "closed_book": "\u{1F4D5}",
  "book": "\u{1F4D6}",
  "open_book": "\u{1F4D6}",
  "green_book": "\u{1F4D7}",
  "blue_book": "\u{1F4D8}",
  "orange_book": "\u{1F4D9}",
  "books": "\u{1F4DA}",
  "notebook": "\u{1F4D3}",
  "ledger": "\u{1F4D2}",
  "page_with_curl": "\u{1F4C3}",
  "scroll": "\u{1F4DC}",
  "page_facing_up": "\u{1F4C4}",
  "newspaper": "\u{1F4F0}",
  "newspaper_roll": "\u{1F5DE}\uFE0F",
  "bookmark_tabs": "\u{1F4D1}",
  "bookmark": "\u{1F516}",
  "label": "\u{1F3F7}\uFE0F",
  "moneybag": "\u{1F4B0}",
  "coin": "\u{1FA99}",
  "yen": "\u{1F4B4}",
  "dollar": "\u{1F4B5}",
  "euro": "\u{1F4B6}",
  "pound": "\u{1F4B7}",
  "money_with_wings": "\u{1F4B8}",
  "credit_card": "\u{1F4B3}",
  "receipt": "\u{1F9FE}",
  "chart": "\u{1F4B9}",
  "envelope": "\u2709\uFE0F",
  "email": "\u{1F4E7}",
  "e-mail": "\u{1F4E7}",
  "incoming_envelope": "\u{1F4E8}",
  "envelope_with_arrow": "\u{1F4E9}",
  "outbox_tray": "\u{1F4E4}",
  "inbox_tray": "\u{1F4E5}",
  "package": "\u{1F4E6}",
  "mailbox": "\u{1F4EB}",
  "mailbox_closed": "\u{1F4EA}",
  "mailbox_with_mail": "\u{1F4EC}",
  "mailbox_with_no_mail": "\u{1F4ED}",
  "postbox": "\u{1F4EE}",
  "ballot_box": "\u{1F5F3}\uFE0F",
  "pencil2": "\u270F\uFE0F",
  "black_nib": "\u2712\uFE0F",
  "fountain_pen": "\u{1F58B}\uFE0F",
  "pen": "\u{1F58A}\uFE0F",
  "paintbrush": "\u{1F58C}\uFE0F",
  "crayon": "\u{1F58D}\uFE0F",
  "memo": "\u{1F4DD}",
  "pencil": "\u{1F4DD}",
  "briefcase": "\u{1F4BC}",
  "file_folder": "\u{1F4C1}",
  "open_file_folder": "\u{1F4C2}",
  "card_index_dividers": "\u{1F5C2}\uFE0F",
  "date": "\u{1F4C5}",
  "calendar": "\u{1F4C6}",
  "spiral_notepad": "\u{1F5D2}\uFE0F",
  "spiral_calendar": "\u{1F5D3}\uFE0F",
  "card_index": "\u{1F4C7}",
  "chart_with_upwards_trend": "\u{1F4C8}",
  "chart_with_downwards_trend": "\u{1F4C9}",
  "bar_chart": "\u{1F4CA}",
  "clipboard": "\u{1F4CB}",
  "pushpin": "\u{1F4CC}",
  "round_pushpin": "\u{1F4CD}",
  "paperclip": "\u{1F4CE}",
  "paperclips": "\u{1F587}\uFE0F",
  "straight_ruler": "\u{1F4CF}",
  "triangular_ruler": "\u{1F4D0}",
  "scissors": "\u2702\uFE0F",
  "card_file_box": "\u{1F5C3}\uFE0F",
  "file_cabinet": "\u{1F5C4}\uFE0F",
  "wastebasket": "\u{1F5D1}\uFE0F",
  "lock": "\u{1F512}",
  "unlock": "\u{1F513}",
  "lock_with_ink_pen": "\u{1F50F}",
  "closed_lock_with_key": "\u{1F510}",
  "key": "\u{1F511}",
  "old_key": "\u{1F5DD}\uFE0F",
  "hammer": "\u{1F528}",
  "axe": "\u{1FA93}",
  "pick": "\u26CF\uFE0F",
  "hammer_and_pick": "\u2692\uFE0F",
  "hammer_and_wrench": "\u{1F6E0}\uFE0F",
  "dagger": "\u{1F5E1}\uFE0F",
  "crossed_swords": "\u2694\uFE0F",
  "bomb": "\u{1F4A3}",
  "boomerang": "\u{1FA83}",
  "bow_and_arrow": "\u{1F3F9}",
  "shield": "\u{1F6E1}\uFE0F",
  "carpentry_saw": "\u{1FA9A}",
  "wrench": "\u{1F527}",
  "screwdriver": "\u{1FA9B}",
  "nut_and_bolt": "\u{1F529}",
  "gear": "\u2699\uFE0F",
  "clamp": "\u{1F5DC}\uFE0F",
  "balance_scale": "\u2696\uFE0F",
  "probing_cane": "\u{1F9AF}",
  "link": "\u{1F517}",
  "chains": "\u26D3\uFE0F",
  "hook": "\u{1FA9D}",
  "toolbox": "\u{1F9F0}",
  "magnet": "\u{1F9F2}",
  "ladder": "\u{1FA9C}",
  "alembic": "\u2697\uFE0F",
  "test_tube": "\u{1F9EA}",
  "petri_dish": "\u{1F9EB}",
  "dna": "\u{1F9EC}",
  "microscope": "\u{1F52C}",
  "telescope": "\u{1F52D}",
  "satellite": "\u{1F4E1}",
  "syringe": "\u{1F489}",
  "drop_of_blood": "\u{1FA78}",
  "pill": "\u{1F48A}",
  "adhesive_bandage": "\u{1FA79}",
  "crutch": "\u{1FA7C}",
  "stethoscope": "\u{1FA7A}",
  "x_ray": "\u{1FA7B}",
  "door": "\u{1F6AA}",
  "elevator": "\u{1F6D7}",
  "mirror": "\u{1FA9E}",
  "window": "\u{1FA9F}",
  "bed": "\u{1F6CF}\uFE0F",
  "couch_and_lamp": "\u{1F6CB}\uFE0F",
  "chair": "\u{1FA91}",
  "toilet": "\u{1F6BD}",
  "plunger": "\u{1FAA0}",
  "shower": "\u{1F6BF}",
  "bathtub": "\u{1F6C1}",
  "mouse_trap": "\u{1FAA4}",
  "razor": "\u{1FA92}",
  "lotion_bottle": "\u{1F9F4}",
  "safety_pin": "\u{1F9F7}",
  "broom": "\u{1F9F9}",
  "basket": "\u{1F9FA}",
  "roll_of_paper": "\u{1F9FB}",
  "bucket": "\u{1FAA3}",
  "soap": "\u{1F9FC}",
  "bubbles": "\u{1FAE7}",
  "toothbrush": "\u{1FAA5}",
  "sponge": "\u{1F9FD}",
  "fire_extinguisher": "\u{1F9EF}",
  "shopping_cart": "\u{1F6D2}",
  "smoking": "\u{1F6AC}",
  "coffin": "\u26B0\uFE0F",
  "headstone": "\u{1FAA6}",
  "funeral_urn": "\u26B1\uFE0F",
  "nazar_amulet": "\u{1F9FF}",
  "hamsa": "\u{1FAAC}",
  "moyai": "\u{1F5FF}",
  "placard": "\u{1FAA7}",
  "identification_card": "\u{1FAAA}",
  "atm": "\u{1F3E7}",
  "put_litter_in_its_place": "\u{1F6AE}",
  "potable_water": "\u{1F6B0}",
  "wheelchair": "\u267F",
  "mens": "\u{1F6B9}",
  "womens": "\u{1F6BA}",
  "restroom": "\u{1F6BB}",
  "baby_symbol": "\u{1F6BC}",
  "wc": "\u{1F6BE}",
  "passport_control": "\u{1F6C2}",
  "customs": "\u{1F6C3}",
  "baggage_claim": "\u{1F6C4}",
  "left_luggage": "\u{1F6C5}",
  "warning": "\u26A0\uFE0F",
  "children_crossing": "\u{1F6B8}",
  "no_entry": "\u26D4",
  "no_entry_sign": "\u{1F6AB}",
  "no_bicycles": "\u{1F6B3}",
  "no_smoking": "\u{1F6AD}",
  "do_not_litter": "\u{1F6AF}",
  "non-potable_water": "\u{1F6B1}",
  "no_pedestrians": "\u{1F6B7}",
  "no_mobile_phones": "\u{1F4F5}",
  "underage": "\u{1F51E}",
  "radioactive": "\u2622\uFE0F",
  "biohazard": "\u2623\uFE0F",
  "arrow_up": "\u2B06\uFE0F",
  "arrow_upper_right": "\u2197\uFE0F",
  "arrow_right": "\u27A1\uFE0F",
  "arrow_lower_right": "\u2198\uFE0F",
  "arrow_down": "\u2B07\uFE0F",
  "arrow_lower_left": "\u2199\uFE0F",
  "arrow_left": "\u2B05\uFE0F",
  "arrow_upper_left": "\u2196\uFE0F",
  "arrow_up_down": "\u2195\uFE0F",
  "left_right_arrow": "\u2194\uFE0F",
  "leftwards_arrow_with_hook": "\u21A9\uFE0F",
  "arrow_right_hook": "\u21AA\uFE0F",
  "arrow_heading_up": "\u2934\uFE0F",
  "arrow_heading_down": "\u2935\uFE0F",
  "arrows_clockwise": "\u{1F503}",
  "arrows_counterclockwise": "\u{1F504}",
  "back": "\u{1F519}",
  "end": "\u{1F51A}",
  "on": "\u{1F51B}",
  "soon": "\u{1F51C}",
  "top": "\u{1F51D}",
  "place_of_worship": "\u{1F6D0}",
  "atom_symbol": "\u269B\uFE0F",
  "om": "\u{1F549}\uFE0F",
  "star_of_david": "\u2721\uFE0F",
  "wheel_of_dharma": "\u2638\uFE0F",
  "yin_yang": "\u262F\uFE0F",
  "latin_cross": "\u271D\uFE0F",
  "orthodox_cross": "\u2626\uFE0F",
  "star_and_crescent": "\u262A\uFE0F",
  "peace_symbol": "\u262E\uFE0F",
  "menorah": "\u{1F54E}",
  "six_pointed_star": "\u{1F52F}",
  "khanda": "\u{1FAAF}",
  "aries": "\u2648",
  "taurus": "\u2649",
  "gemini": "\u264A",
  "cancer": "\u264B",
  "leo": "\u264C",
  "virgo": "\u264D",
  "libra": "\u264E",
  "scorpius": "\u264F",
  "sagittarius": "\u2650",
  "capricorn": "\u2651",
  "aquarius": "\u2652",
  "pisces": "\u2653",
  "ophiuchus": "\u26CE",
  "twisted_rightwards_arrows": "\u{1F500}",
  "repeat": "\u{1F501}",
  "repeat_one": "\u{1F502}",
  "arrow_forward": "\u25B6\uFE0F",
  "fast_forward": "\u23E9",
  "next_track_button": "\u23ED\uFE0F",
  "play_or_pause_button": "\u23EF\uFE0F",
  "arrow_backward": "\u25C0\uFE0F",
  "rewind": "\u23EA",
  "previous_track_button": "\u23EE\uFE0F",
  "arrow_up_small": "\u{1F53C}",
  "arrow_double_up": "\u23EB",
  "arrow_down_small": "\u{1F53D}",
  "arrow_double_down": "\u23EC",
  "pause_button": "\u23F8\uFE0F",
  "stop_button": "\u23F9\uFE0F",
  "record_button": "\u23FA\uFE0F",
  "eject_button": "\u23CF\uFE0F",
  "cinema": "\u{1F3A6}",
  "low_brightness": "\u{1F505}",
  "high_brightness": "\u{1F506}",
  "signal_strength": "\u{1F4F6}",
  "wireless": "\u{1F6DC}",
  "vibration_mode": "\u{1F4F3}",
  "mobile_phone_off": "\u{1F4F4}",
  "female_sign": "\u2640\uFE0F",
  "male_sign": "\u2642\uFE0F",
  "transgender_symbol": "\u26A7\uFE0F",
  "heavy_multiplication_x": "\u2716\uFE0F",
  "heavy_plus_sign": "\u2795",
  "heavy_minus_sign": "\u2796",
  "heavy_division_sign": "\u2797",
  "heavy_equals_sign": "\u{1F7F0}",
  "infinity": "\u267E\uFE0F",
  "bangbang": "\u203C\uFE0F",
  "interrobang": "\u2049\uFE0F",
  "question": "\u2753",
  "grey_question": "\u2754",
  "grey_exclamation": "\u2755",
  "exclamation": "\u2757",
  "heavy_exclamation_mark": "\u2757",
  "wavy_dash": "\u3030\uFE0F",
  "currency_exchange": "\u{1F4B1}",
  "heavy_dollar_sign": "\u{1F4B2}",
  "medical_symbol": "\u2695\uFE0F",
  "recycle": "\u267B\uFE0F",
  "fleur_de_lis": "\u269C\uFE0F",
  "trident": "\u{1F531}",
  "name_badge": "\u{1F4DB}",
  "beginner": "\u{1F530}",
  "o": "\u2B55",
  "white_check_mark": "\u2705",
  "ballot_box_with_check": "\u2611\uFE0F",
  "heavy_check_mark": "\u2714\uFE0F",
  "x": "\u274C",
  "negative_squared_cross_mark": "\u274E",
  "curly_loop": "\u27B0",
  "loop": "\u27BF",
  "part_alternation_mark": "\u303D\uFE0F",
  "eight_spoked_asterisk": "\u2733\uFE0F",
  "eight_pointed_black_star": "\u2734\uFE0F",
  "sparkle": "\u2747\uFE0F",
  "copyright": "\xA9\uFE0F",
  "registered": "\xAE\uFE0F",
  "tm": "\u2122\uFE0F",
  "hash": "#\uFE0F\u20E3",
  "asterisk": "*\uFE0F\u20E3",
  "zero": "0\uFE0F\u20E3",
  "one": "1\uFE0F\u20E3",
  "two": "2\uFE0F\u20E3",
  "three": "3\uFE0F\u20E3",
  "four": "4\uFE0F\u20E3",
  "five": "5\uFE0F\u20E3",
  "six": "6\uFE0F\u20E3",
  "seven": "7\uFE0F\u20E3",
  "eight": "8\uFE0F\u20E3",
  "nine": "9\uFE0F\u20E3",
  "keycap_ten": "\u{1F51F}",
  "capital_abcd": "\u{1F520}",
  "abcd": "\u{1F521}",
  "symbols": "\u{1F523}",
  "abc": "\u{1F524}",
  "a": "\u{1F170}\uFE0F",
  "ab": "\u{1F18E}",
  "b": "\u{1F171}\uFE0F",
  "cl": "\u{1F191}",
  "cool": "\u{1F192}",
  "free": "\u{1F193}",
  "information_source": "\u2139\uFE0F",
  "id": "\u{1F194}",
  "m": "\u24C2\uFE0F",
  "new": "\u{1F195}",
  "ng": "\u{1F196}",
  "o2": "\u{1F17E}\uFE0F",
  "ok": "\u{1F197}",
  "parking": "\u{1F17F}\uFE0F",
  "sos": "\u{1F198}",
  "up": "\u{1F199}",
  "vs": "\u{1F19A}",
  "koko": "\u{1F201}",
  "sa": "\u{1F202}\uFE0F",
  "ideograph_advantage": "\u{1F250}",
  "accept": "\u{1F251}",
  "congratulations": "\u3297\uFE0F",
  "secret": "\u3299\uFE0F",
  "u6e80": "\u{1F235}",
  "red_circle": "\u{1F534}",
  "orange_circle": "\u{1F7E0}",
  "yellow_circle": "\u{1F7E1}",
  "green_circle": "\u{1F7E2}",
  "large_blue_circle": "\u{1F535}",
  "purple_circle": "\u{1F7E3}",
  "brown_circle": "\u{1F7E4}",
  "black_circle": "\u26AB",
  "white_circle": "\u26AA",
  "red_square": "\u{1F7E5}",
  "orange_square": "\u{1F7E7}",
  "yellow_square": "\u{1F7E8}",
  "green_square": "\u{1F7E9}",
  "blue_square": "\u{1F7E6}",
  "purple_square": "\u{1F7EA}",
  "brown_square": "\u{1F7EB}",
  "black_large_square": "\u2B1B",
  "white_large_square": "\u2B1C",
  "black_medium_square": "\u25FC\uFE0F",
  "white_medium_square": "\u25FB\uFE0F",
  "black_medium_small_square": "\u25FE",
  "white_medium_small_square": "\u25FD",
  "black_small_square": "\u25AA\uFE0F",
  "white_small_square": "\u25AB\uFE0F",
  "large_orange_diamond": "\u{1F536}",
  "large_blue_diamond": "\u{1F537}",
  "small_orange_diamond": "\u{1F538}",
  "small_blue_diamond": "\u{1F539}",
  "small_red_triangle": "\u{1F53A}",
  "small_red_triangle_down": "\u{1F53B}",
  "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
  "radio_button": "\u{1F518}",
  "white_square_button": "\u{1F533}",
  "black_square_button": "\u{1F532}",
  "checkered_flag": "\u{1F3C1}",
  "triangular_flag_on_post": "\u{1F6A9}",
  "crossed_flags": "\u{1F38C}",
  "black_flag": "\u{1F3F4}",
  "white_flag": "\u{1F3F3}\uFE0F",
  "rainbow_flag": "\u{1F3F3}\uFE0F\u200D\u{1F308}",
  "transgender_flag": "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
  "pirate_flag": "\u{1F3F4}\u200D\u2620\uFE0F",
  "ascension_island": "\u{1F1E6}\u{1F1E8}",
  "andorra": "\u{1F1E6}\u{1F1E9}",
  "united_arab_emirates": "\u{1F1E6}\u{1F1EA}",
  "afghanistan": "\u{1F1E6}\u{1F1EB}",
  "antigua_barbuda": "\u{1F1E6}\u{1F1EC}",
  "anguilla": "\u{1F1E6}\u{1F1EE}",
  "albania": "\u{1F1E6}\u{1F1F1}",
  "armenia": "\u{1F1E6}\u{1F1F2}",
  "angola": "\u{1F1E6}\u{1F1F4}",
  "antarctica": "\u{1F1E6}\u{1F1F6}",
  "argentina": "\u{1F1E6}\u{1F1F7}",
  "american_samoa": "\u{1F1E6}\u{1F1F8}",
  "austria": "\u{1F1E6}\u{1F1F9}",
  "australia": "\u{1F1E6}\u{1F1FA}",
  "aruba": "\u{1F1E6}\u{1F1FC}",
  "aland_islands": "\u{1F1E6}\u{1F1FD}",
  "azerbaijan": "\u{1F1E6}\u{1F1FF}",
  "bosnia_herzegovina": "\u{1F1E7}\u{1F1E6}",
  "barbados": "\u{1F1E7}\u{1F1E7}",
  "bangladesh": "\u{1F1E7}\u{1F1E9}",
  "belgium": "\u{1F1E7}\u{1F1EA}",
  "burkina_faso": "\u{1F1E7}\u{1F1EB}",
  "bulgaria": "\u{1F1E7}\u{1F1EC}",
  "bahrain": "\u{1F1E7}\u{1F1ED}",
  "burundi": "\u{1F1E7}\u{1F1EE}",
  "benin": "\u{1F1E7}\u{1F1EF}",
  "st_barthelemy": "\u{1F1E7}\u{1F1F1}",
  "bermuda": "\u{1F1E7}\u{1F1F2}",
  "brunei": "\u{1F1E7}\u{1F1F3}",
  "bolivia": "\u{1F1E7}\u{1F1F4}",
  "caribbean_netherlands": "\u{1F1E7}\u{1F1F6}",
  "brazil": "\u{1F1E7}\u{1F1F7}",
  "bahamas": "\u{1F1E7}\u{1F1F8}",
  "bhutan": "\u{1F1E7}\u{1F1F9}",
  "bouvet_island": "\u{1F1E7}\u{1F1FB}",
  "botswana": "\u{1F1E7}\u{1F1FC}",
  "belarus": "\u{1F1E7}\u{1F1FE}",
  "belize": "\u{1F1E7}\u{1F1FF}",
  "canada": "\u{1F1E8}\u{1F1E6}",
  "cocos_islands": "\u{1F1E8}\u{1F1E8}",
  "congo_kinshasa": "\u{1F1E8}\u{1F1E9}",
  "central_african_republic": "\u{1F1E8}\u{1F1EB}",
  "congo_brazzaville": "\u{1F1E8}\u{1F1EC}",
  "switzerland": "\u{1F1E8}\u{1F1ED}",
  "cote_divoire": "\u{1F1E8}\u{1F1EE}",
  "cook_islands": "\u{1F1E8}\u{1F1F0}",
  "chile": "\u{1F1E8}\u{1F1F1}",
  "cameroon": "\u{1F1E8}\u{1F1F2}",
  "cn": "\u{1F1E8}\u{1F1F3}",
  "colombia": "\u{1F1E8}\u{1F1F4}",
  "clipperton_island": "\u{1F1E8}\u{1F1F5}",
  "costa_rica": "\u{1F1E8}\u{1F1F7}",
  "cuba": "\u{1F1E8}\u{1F1FA}",
  "cape_verde": "\u{1F1E8}\u{1F1FB}",
  "curacao": "\u{1F1E8}\u{1F1FC}",
  "christmas_island": "\u{1F1E8}\u{1F1FD}",
  "cyprus": "\u{1F1E8}\u{1F1FE}",
  "czech_republic": "\u{1F1E8}\u{1F1FF}",
  "de": "\u{1F1E9}\u{1F1EA}",
  "diego_garcia": "\u{1F1E9}\u{1F1EC}",
  "djibouti": "\u{1F1E9}\u{1F1EF}",
  "denmark": "\u{1F1E9}\u{1F1F0}",
  "dominica": "\u{1F1E9}\u{1F1F2}",
  "dominican_republic": "\u{1F1E9}\u{1F1F4}",
  "algeria": "\u{1F1E9}\u{1F1FF}",
  "ceuta_melilla": "\u{1F1EA}\u{1F1E6}",
  "ecuador": "\u{1F1EA}\u{1F1E8}",
  "estonia": "\u{1F1EA}\u{1F1EA}",
  "egypt": "\u{1F1EA}\u{1F1EC}",
  "western_sahara": "\u{1F1EA}\u{1F1ED}",
  "eritrea": "\u{1F1EA}\u{1F1F7}",
  "es": "\u{1F1EA}\u{1F1F8}",
  "ethiopia": "\u{1F1EA}\u{1F1F9}",
  "eu": "\u{1F1EA}\u{1F1FA}",
  "european_union": "\u{1F1EA}\u{1F1FA}",
  "finland": "\u{1F1EB}\u{1F1EE}",
  "fiji": "\u{1F1EB}\u{1F1EF}",
  "falkland_islands": "\u{1F1EB}\u{1F1F0}",
  "micronesia": "\u{1F1EB}\u{1F1F2}",
  "faroe_islands": "\u{1F1EB}\u{1F1F4}",
  "fr": "\u{1F1EB}\u{1F1F7}",
  "gabon": "\u{1F1EC}\u{1F1E6}",
  "gb": "\u{1F1EC}\u{1F1E7}",
  "uk": "\u{1F1EC}\u{1F1E7}",
  "grenada": "\u{1F1EC}\u{1F1E9}",
  "georgia": "\u{1F1EC}\u{1F1EA}",
  "french_guiana": "\u{1F1EC}\u{1F1EB}",
  "guernsey": "\u{1F1EC}\u{1F1EC}",
  "ghana": "\u{1F1EC}\u{1F1ED}",
  "gibraltar": "\u{1F1EC}\u{1F1EE}",
  "greenland": "\u{1F1EC}\u{1F1F1}",
  "gambia": "\u{1F1EC}\u{1F1F2}",
  "guinea": "\u{1F1EC}\u{1F1F3}",
  "guadeloupe": "\u{1F1EC}\u{1F1F5}",
  "equatorial_guinea": "\u{1F1EC}\u{1F1F6}",
  "greece": "\u{1F1EC}\u{1F1F7}",
  "south_georgia_south_sandwich_islands": "\u{1F1EC}\u{1F1F8}",
  "guatemala": "\u{1F1EC}\u{1F1F9}",
  "guam": "\u{1F1EC}\u{1F1FA}",
  "guinea_bissau": "\u{1F1EC}\u{1F1FC}",
  "guyana": "\u{1F1EC}\u{1F1FE}",
  "hong_kong": "\u{1F1ED}\u{1F1F0}",
  "heard_mcdonald_islands": "\u{1F1ED}\u{1F1F2}",
  "honduras": "\u{1F1ED}\u{1F1F3}",
  "croatia": "\u{1F1ED}\u{1F1F7}",
  "haiti": "\u{1F1ED}\u{1F1F9}",
  "hungary": "\u{1F1ED}\u{1F1FA}",
  "canary_islands": "\u{1F1EE}\u{1F1E8}",
  "indonesia": "\u{1F1EE}\u{1F1E9}",
  "ireland": "\u{1F1EE}\u{1F1EA}",
  "israel": "\u{1F1EE}\u{1F1F1}",
  "isle_of_man": "\u{1F1EE}\u{1F1F2}",
  "india": "\u{1F1EE}\u{1F1F3}",
  "british_indian_ocean_territory": "\u{1F1EE}\u{1F1F4}",
  "iraq": "\u{1F1EE}\u{1F1F6}",
  "iran": "\u{1F1EE}\u{1F1F7}",
  "iceland": "\u{1F1EE}\u{1F1F8}",
  "it": "\u{1F1EE}\u{1F1F9}",
  "jersey": "\u{1F1EF}\u{1F1EA}",
  "jamaica": "\u{1F1EF}\u{1F1F2}",
  "jordan": "\u{1F1EF}\u{1F1F4}",
  "jp": "\u{1F1EF}\u{1F1F5}",
  "kenya": "\u{1F1F0}\u{1F1EA}",
  "kyrgyzstan": "\u{1F1F0}\u{1F1EC}",
  "cambodia": "\u{1F1F0}\u{1F1ED}",
  "kiribati": "\u{1F1F0}\u{1F1EE}",
  "comoros": "\u{1F1F0}\u{1F1F2}",
  "st_kitts_nevis": "\u{1F1F0}\u{1F1F3}",
  "north_korea": "\u{1F1F0}\u{1F1F5}",
  "kr": "\u{1F1F0}\u{1F1F7}",
  "kuwait": "\u{1F1F0}\u{1F1FC}",
  "cayman_islands": "\u{1F1F0}\u{1F1FE}",
  "kazakhstan": "\u{1F1F0}\u{1F1FF}",
  "laos": "\u{1F1F1}\u{1F1E6}",
  "lebanon": "\u{1F1F1}\u{1F1E7}",
  "st_lucia": "\u{1F1F1}\u{1F1E8}",
  "liechtenstein": "\u{1F1F1}\u{1F1EE}",
  "sri_lanka": "\u{1F1F1}\u{1F1F0}",
  "liberia": "\u{1F1F1}\u{1F1F7}",
  "lesotho": "\u{1F1F1}\u{1F1F8}",
  "lithuania": "\u{1F1F1}\u{1F1F9}",
  "luxembourg": "\u{1F1F1}\u{1F1FA}",
  "latvia": "\u{1F1F1}\u{1F1FB}",
  "libya": "\u{1F1F1}\u{1F1FE}",
  "morocco": "\u{1F1F2}\u{1F1E6}",
  "monaco": "\u{1F1F2}\u{1F1E8}",
  "moldova": "\u{1F1F2}\u{1F1E9}",
  "montenegro": "\u{1F1F2}\u{1F1EA}",
  "st_martin": "\u{1F1F2}\u{1F1EB}",
  "madagascar": "\u{1F1F2}\u{1F1EC}",
  "marshall_islands": "\u{1F1F2}\u{1F1ED}",
  "macedonia": "\u{1F1F2}\u{1F1F0}",
  "mali": "\u{1F1F2}\u{1F1F1}",
  "myanmar": "\u{1F1F2}\u{1F1F2}",
  "mongolia": "\u{1F1F2}\u{1F1F3}",
  "macau": "\u{1F1F2}\u{1F1F4}",
  "northern_mariana_islands": "\u{1F1F2}\u{1F1F5}",
  "martinique": "\u{1F1F2}\u{1F1F6}",
  "mauritania": "\u{1F1F2}\u{1F1F7}",
  "montserrat": "\u{1F1F2}\u{1F1F8}",
  "malta": "\u{1F1F2}\u{1F1F9}",
  "mauritius": "\u{1F1F2}\u{1F1FA}",
  "maldives": "\u{1F1F2}\u{1F1FB}",
  "malawi": "\u{1F1F2}\u{1F1FC}",
  "mexico": "\u{1F1F2}\u{1F1FD}",
  "malaysia": "\u{1F1F2}\u{1F1FE}",
  "mozambique": "\u{1F1F2}\u{1F1FF}",
  "namibia": "\u{1F1F3}\u{1F1E6}",
  "new_caledonia": "\u{1F1F3}\u{1F1E8}",
  "niger": "\u{1F1F3}\u{1F1EA}",
  "norfolk_island": "\u{1F1F3}\u{1F1EB}",
  "nigeria": "\u{1F1F3}\u{1F1EC}",
  "nicaragua": "\u{1F1F3}\u{1F1EE}",
  "netherlands": "\u{1F1F3}\u{1F1F1}",
  "norway": "\u{1F1F3}\u{1F1F4}",
  "nepal": "\u{1F1F3}\u{1F1F5}",
  "nauru": "\u{1F1F3}\u{1F1F7}",
  "niue": "\u{1F1F3}\u{1F1FA}",
  "new_zealand": "\u{1F1F3}\u{1F1FF}",
  "oman": "\u{1F1F4}\u{1F1F2}",
  "panama": "\u{1F1F5}\u{1F1E6}",
  "peru": "\u{1F1F5}\u{1F1EA}",
  "french_polynesia": "\u{1F1F5}\u{1F1EB}",
  "papua_new_guinea": "\u{1F1F5}\u{1F1EC}",
  "philippines": "\u{1F1F5}\u{1F1ED}",
  "pakistan": "\u{1F1F5}\u{1F1F0}",
  "poland": "\u{1F1F5}\u{1F1F1}",
  "st_pierre_miquelon": "\u{1F1F5}\u{1F1F2}",
  "pitcairn_islands": "\u{1F1F5}\u{1F1F3}",
  "puerto_rico": "\u{1F1F5}\u{1F1F7}",
  "palestinian_territories": "\u{1F1F5}\u{1F1F8}",
  "portugal": "\u{1F1F5}\u{1F1F9}",
  "palau": "\u{1F1F5}\u{1F1FC}",
  "paraguay": "\u{1F1F5}\u{1F1FE}",
  "qatar": "\u{1F1F6}\u{1F1E6}",
  "reunion": "\u{1F1F7}\u{1F1EA}",
  "romania": "\u{1F1F7}\u{1F1F4}",
  "serbia": "\u{1F1F7}\u{1F1F8}",
  "ru": "\u{1F1F7}\u{1F1FA}",
  "rwanda": "\u{1F1F7}\u{1F1FC}",
  "saudi_arabia": "\u{1F1F8}\u{1F1E6}",
  "solomon_islands": "\u{1F1F8}\u{1F1E7}",
  "seychelles": "\u{1F1F8}\u{1F1E8}",
  "sudan": "\u{1F1F8}\u{1F1E9}",
  "sweden": "\u{1F1F8}\u{1F1EA}",
  "singapore": "\u{1F1F8}\u{1F1EC}",
  "st_helena": "\u{1F1F8}\u{1F1ED}",
  "slovenia": "\u{1F1F8}\u{1F1EE}",
  "svalbard_jan_mayen": "\u{1F1F8}\u{1F1EF}",
  "slovakia": "\u{1F1F8}\u{1F1F0}",
  "sierra_leone": "\u{1F1F8}\u{1F1F1}",
  "san_marino": "\u{1F1F8}\u{1F1F2}",
  "senegal": "\u{1F1F8}\u{1F1F3}",
  "somalia": "\u{1F1F8}\u{1F1F4}",
  "suriname": "\u{1F1F8}\u{1F1F7}",
  "south_sudan": "\u{1F1F8}\u{1F1F8}",
  "sao_tome_principe": "\u{1F1F8}\u{1F1F9}",
  "el_salvador": "\u{1F1F8}\u{1F1FB}",
  "sint_maarten": "\u{1F1F8}\u{1F1FD}",
  "syria": "\u{1F1F8}\u{1F1FE}",
  "swaziland": "\u{1F1F8}\u{1F1FF}",
  "tristan_da_cunha": "\u{1F1F9}\u{1F1E6}",
  "turks_caicos_islands": "\u{1F1F9}\u{1F1E8}",
  "chad": "\u{1F1F9}\u{1F1E9}",
  "french_southern_territories": "\u{1F1F9}\u{1F1EB}",
  "togo": "\u{1F1F9}\u{1F1EC}",
  "thailand": "\u{1F1F9}\u{1F1ED}",
  "tajikistan": "\u{1F1F9}\u{1F1EF}",
  "tokelau": "\u{1F1F9}\u{1F1F0}",
  "timor_leste": "\u{1F1F9}\u{1F1F1}",
  "turkmenistan": "\u{1F1F9}\u{1F1F2}",
  "tunisia": "\u{1F1F9}\u{1F1F3}",
  "tonga": "\u{1F1F9}\u{1F1F4}",
  "tr": "\u{1F1F9}\u{1F1F7}",
  "trinidad_tobago": "\u{1F1F9}\u{1F1F9}",
  "tuvalu": "\u{1F1F9}\u{1F1FB}",
  "taiwan": "\u{1F1F9}\u{1F1FC}",
  "tanzania": "\u{1F1F9}\u{1F1FF}",
  "ukraine": "\u{1F1FA}\u{1F1E6}",
  "uganda": "\u{1F1FA}\u{1F1EC}",
  "us_outlying_islands": "\u{1F1FA}\u{1F1F2}",
  "united_nations": "\u{1F1FA}\u{1F1F3}",
  "us": "\u{1F1FA}\u{1F1F8}",
  "uruguay": "\u{1F1FA}\u{1F1FE}",
  "uzbekistan": "\u{1F1FA}\u{1F1FF}",
  "vatican_city": "\u{1F1FB}\u{1F1E6}",
  "st_vincent_grenadines": "\u{1F1FB}\u{1F1E8}",
  "venezuela": "\u{1F1FB}\u{1F1EA}",
  "british_virgin_islands": "\u{1F1FB}\u{1F1EC}",
  "us_virgin_islands": "\u{1F1FB}\u{1F1EE}",
  "vietnam": "\u{1F1FB}\u{1F1F3}",
  "vanuatu": "\u{1F1FB}\u{1F1FA}",
  "wallis_futuna": "\u{1F1FC}\u{1F1EB}",
  "samoa": "\u{1F1FC}\u{1F1F8}",
  "kosovo": "\u{1F1FD}\u{1F1F0}",
  "yemen": "\u{1F1FE}\u{1F1EA}",
  "mayotte": "\u{1F1FE}\u{1F1F9}",
  "south_africa": "\u{1F1FF}\u{1F1E6}",
  "zambia": "\u{1F1FF}\u{1F1F2}",
  "zimbabwe": "\u{1F1FF}\u{1F1FC}",
  "england": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
  "scotland": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
  "wales": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
};
const emojisKeysRegex = new RegExp(
  Object.keys(emojis).map((key) => `:${key}:`).join("|"),
  "g"
);
function convertToEmoji(text) {
  return text.replace(emojisKeysRegex, (match) => {
    const key = match.slice(1, -1);
    return emojis[key] || match;
  });
}

const FETCH_CACHE_ALLOWED_DOMAINS = [
  // npm registry
  "registry.npmjs.org",
  // npm package metadata (packuments)
  "api.npmjs.org",
  // npm download statistics
  // JSR registry
  "jsr.io",
  // JSR package metadata
  // Git hosting providers (for repo metadata)
  "ungh.cc",
  // GitHub proxy (avoids rate limits)
  "api.github.com",
  // GitHub API
  "gitlab.com",
  // GitLab API
  "api.bitbucket.org",
  // Bitbucket API
  "codeberg.org",
  // Codeberg (Gitea-based)
  "gitee.com",
  // Gitee API
  // microcosm endpoints for atproto data
  CONSTELLATION_HOST,
  SLINGSHOT_HOST
];
const FETCH_CACHE_DEFAULT_TTL = 60 * 5;
const FETCH_CACHE_VERSION = "v1";
const FETCH_CACHE_STORAGE_BASE = "fetch-cache";
function isAllowedDomain(url) {
  try {
    const urlObj = typeof url === "string" ? new URL(url) : url;
    return FETCH_CACHE_ALLOWED_DOMAINS.some((domain) => urlObj.host === domain);
  } catch {
    return false;
  }
}
function isCacheEntryStale$1(entry) {
  const now = Date.now();
  const expiresAt = entry.cachedAt + entry.ttl * 1e3;
  return now > expiresAt;
}

const GITLAB_HOSTS = [
  "gitlab.com",
  "gitlab.gnome.org",
  "gitlab.freedesktop.org",
  "invent.kde.org",
  "salsa.debian.org",
  "framagit.org"
];
const providers = [
  {
    id: "github",
    matchHost: (host) => host === "github.com" || host === "www.github.com",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => `https://raw.githubusercontent.com/${ref.owner}/${ref.repo}/${branch}`,
    getBlobBaseUrl: (ref, branch = "HEAD") => `https://github.com/${ref.owner}/${ref.repo}/blob/${branch}`,
    fileToRaw: (url) => url.replace("/tree/", "/raw/"),
    blobToRaw: (url) => url.replace("/blob/", "/raw/")
  },
  {
    id: "gitlab",
    matchHost: (host) => GITLAB_HOSTS.some((h) => host === h || host === `www.${h}`),
    parsePath: (parts) => {
      var _a;
      if (parts.length < 2) return null;
      const repo = decodeURIComponent((_a = parts[parts.length - 1]) != null ? _a : "").trim().replace(/\.git$/i, "");
      const owner = parts.slice(0, -1).map((p) => decodeURIComponent(p).trim()).join("/");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "gitlab.com";
      return `https://${host}/${ref.owner}/${ref.repo}/-/raw/${branch}`;
    },
    getBlobBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "gitlab.com";
      return `https://${host}/${ref.owner}/${ref.repo}/-/blob/${branch}`;
    },
    blobToRaw: (url) => url.replace("/-/blob/", "/-/raw/")
  },
  {
    id: "bitbucket",
    matchHost: (host) => host === "bitbucket.org" || host === "www.bitbucket.org",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => `https://bitbucket.org/${ref.owner}/${ref.repo}/raw/${branch}`,
    getBlobBaseUrl: (ref, branch = "HEAD") => `https://bitbucket.org/${ref.owner}/${ref.repo}/src/${branch}`,
    blobToRaw: (url) => url.replace("/src/", "/raw/")
  },
  {
    id: "codeberg",
    matchHost: (host) => host === "codeberg.org" || host === "www.codeberg.org",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => `https://codeberg.org/${ref.owner}/${ref.repo}/raw/branch/${branch === "HEAD" ? "main" : branch}`,
    getBlobBaseUrl: (ref, branch = "HEAD") => `https://codeberg.org/${ref.owner}/${ref.repo}/src/branch/${branch === "HEAD" ? "main" : branch}`,
    blobToRaw: (url) => url.replace("/src/", "/raw/")
  },
  {
    id: "gitee",
    matchHost: (host) => host === "gitee.com" || host === "www.gitee.com",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "master") => `https://gitee.com/${ref.owner}/${ref.repo}/raw/${branch}`,
    getBlobBaseUrl: (ref, branch = "master") => `https://gitee.com/${ref.owner}/${ref.repo}/blob/${branch}`,
    blobToRaw: (url) => url.replace("/blob/", "/raw/")
  },
  {
    id: "sourcehut",
    matchHost: (host) => host === "sr.ht" || host === "git.sr.ht",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => `https://git.sr.ht/${ref.owner}/${ref.repo}/blob/${branch}`,
    getBlobBaseUrl: (ref, branch = "HEAD") => `https://git.sr.ht/${ref.owner}/${ref.repo}/tree/${branch}/item`
  },
  {
    id: "tangled",
    matchHost: (host) => host === "tangled.sh" || host === "www.tangled.sh" || host === "tangled.org" || host === "www.tangled.org",
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "main") => `https://tangled.sh/${ref.owner}/${ref.repo}/raw/branch/${branch}`,
    getBlobBaseUrl: (ref, branch = "main") => `https://tangled.sh/${ref.owner}/${ref.repo}/src/branch/${branch}`,
    blobToRaw: (url) => url.replace("/blob/", "/raw/branch/")
  },
  {
    id: "radicle",
    matchHost: (host) => host === "radicle.at" || host === "app.radicle.at" || host === "seed.radicle.at",
    parsePath: (parts) => {
      const path = parts.join("/");
      const radMatch = path.match(/rad:[a-zA-Z0-9]+/);
      if (!(radMatch == null ? void 0 : radMatch[0])) return null;
      return { owner: "", repo: radMatch[0] };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => `https://seed.radicle.at/api/v1/projects/${ref.repo}/blob/${branch}`,
    getBlobBaseUrl: (ref, branch = "HEAD") => `https://app.radicle.at/nodes/seed.radicle.at/${ref.repo}/tree/${branch}`
  },
  {
    id: "forgejo",
    matchHost: (host) => {
      const forgejoPatterns = [/^forgejo\./i, /\.forgejo\./i];
      const knownInstances = ["next.forgejo.org", "try.next.forgejo.org"];
      if (knownInstances.some((h) => host === h)) return true;
      return forgejoPatterns.some((p) => p.test(host));
    },
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "codeberg.org";
      return `https://${host}/${ref.owner}/${ref.repo}/raw/branch/${branch === "HEAD" ? "main" : branch}`;
    },
    getBlobBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "codeberg.org";
      return `https://${host}/${ref.owner}/${ref.repo}/src/branch/${branch === "HEAD" ? "main" : branch}`;
    },
    blobToRaw: (url) => url.replace("/src/", "/raw/")
  },
  {
    id: "gitea",
    matchHost: (host) => {
      const giteaPatterns = [/^git\./i, /^gitea\./i, /^code\./i, /^src\./i, /gitea\.io$/i];
      const skipHosts = [
        "github.com",
        "gitlab.com",
        "codeberg.org",
        "bitbucket.org",
        "gitee.com",
        "sr.ht",
        "git.sr.ht",
        "tangled.sh",
        "tangled.org",
        "next.forgejo.org",
        "try.next.forgejo.org",
        ...GITLAB_HOSTS
      ];
      if (skipHosts.some((h) => host === h || host.endsWith(`.${h}`))) return false;
      if (/^forgejo\./i.test(host) || /\.forgejo\./i.test(host)) return false;
      return giteaPatterns.some((p) => p.test(host));
    },
    parsePath: (parts) => {
      var _a, _b;
      if (parts.length < 2) return null;
      const owner = decodeURIComponent((_a = parts[0]) != null ? _a : "").trim();
      const repo = decodeURIComponent((_b = parts[1]) != null ? _b : "").trim().replace(/\.git$/i, "");
      if (!owner || !repo) return null;
      return { owner, repo };
    },
    getRawBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "gitea.io";
      return `https://${host}/${ref.owner}/${ref.repo}/raw/branch/${branch === "HEAD" ? "main" : branch}`;
    },
    getBlobBaseUrl: (ref, branch = "HEAD") => {
      var _a;
      const host = (_a = ref.host) != null ? _a : "gitea.io";
      return `https://${host}/${ref.owner}/${ref.repo}/src/branch/${branch === "HEAD" ? "main" : branch}`;
    },
    blobToRaw: (url) => url.replace("/src/", "/raw/")
  }
];
function normalizeGitUrl(input) {
  const raw = input.trim();
  if (!raw) return null;
  const normalized = raw.replace(/^git\+/, "");
  if (/^(ssh|git):\/\//i.test(normalized)) {
    try {
      const url = new URL(normalized);
      const path = url.pathname.replace(/^\/*/, "");
      return `https://${url.hostname}/${path}`;
    } catch {
    }
  }
  if (!/^https?:\/\//i.test(normalized)) {
    const scp = normalized.match(/^(?:git@)?([^:/]+):(.+)$/i);
    if ((scp == null ? void 0 : scp[1]) && (scp == null ? void 0 : scp[2])) {
      const host = scp[1];
      const path = scp[2].replace(/^\/*/, "");
      return `https://${host}/${path}`;
    }
  }
  return normalized;
}
function parseRepoUrl(input) {
  const normalized = normalizeGitUrl(input);
  if (!normalized) return null;
  try {
    const url = new URL(normalized);
    const host = url.hostname.toLowerCase();
    const parts = url.pathname.split("/").filter(Boolean);
    for (const provider of providers) {
      if (!provider.matchHost(host)) continue;
      const parsed = provider.parsePath(parts);
      if (parsed) {
        const needsHost = ["gitlab", "gitea", "forgejo", "radicle"].includes(provider.id);
        return {
          provider: provider.id,
          owner: parsed.owner,
          repo: parsed.repo,
          host: needsHost ? host : void 0
        };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function parseRepositoryInfo(repository) {
  if (!repository) return void 0;
  let url;
  let directory;
  if (typeof repository === "string") {
    url = repository;
  } else {
    url = repository.url;
    directory = repository.directory;
  }
  if (!url) return void 0;
  const ref = parseRepoUrl(url);
  if (!ref) return void 0;
  const provider = providers.find((p) => p.id === ref.provider);
  if (!provider) return void 0;
  return {
    ...ref,
    rawBaseUrl: provider.getRawBaseUrl(ref),
    blobBaseUrl: provider.getBlobBaseUrl(ref),
    directory: directory ? withoutTrailingSlash(directory) : void 0
  };
}
function convertBlobOrFileToRawUrl(url, providerId) {
  const provider = providers.find((p) => p.id === providerId);
  let rawUrl = url;
  if (provider == null ? void 0 : provider.fileToRaw) {
    rawUrl = provider.fileToRaw(url);
  }
  if (provider == null ? void 0 : provider.blobToRaw) {
    rawUrl = provider.blobToRaw(rawUrl);
  }
  return rawUrl;
}

function encodePackageName(name) {
  if (name.startsWith("@")) {
    return `@${encodeURIComponent(name.slice(1))}`;
  }
  return encodeURIComponent(name);
}
async function fetchLatestVersion(name) {
  try {
    const meta = await getLatestVersion(name);
    return meta.version;
  } catch {
    return null;
  }
}
function assertValidPackageName(name) {
  var _a, _b, _c;
  const result = validatePackageName(name);
  if (!result.validForNewPackages && !result.validForOldPackages) {
    const errors = [...(_a = result.errors) != null ? _a : [], ...(_b = result.warnings) != null ? _b : []];
    throw createError$1({
      // TODO: throwing 404 rather than 400 as it's cacheable
      statusCode: 404,
      message: `Invalid package name: ${(_c = errors[0]) != null ? _c : "unknown error"}`
    });
  }
}

function detectModuleFormat(pkg) {
  const hasExports = pkg.exports != null;
  const hasModule = !!pkg.module;
  const hasMain = !!pkg.main;
  const isTypeModule = pkg.type === "module";
  const isTypeCommonjs = pkg.type === "commonjs" || !pkg.type;
  if (hasExports && pkg.exports) {
    const exportInfo = analyzeExports(pkg.exports);
    if (exportInfo.hasImport && exportInfo.hasRequire) {
      return "dual";
    }
    if (exportInfo.hasImport || exportInfo.hasModule) {
      if (hasMain && !isTypeModule) {
        return "dual";
      }
      return "esm";
    }
    if (exportInfo.hasRequire) {
      if (hasModule) {
        return "dual";
      }
      return "cjs";
    }
  }
  if (hasModule && hasMain) {
    return "dual";
  }
  if (hasModule || isTypeModule) {
    return "esm";
  }
  if (hasMain || isTypeCommonjs) {
    return "cjs";
  }
  return "unknown";
}
function analyzeExports(exports$1, depth = 0) {
  const result = {
    hasImport: false,
    hasRequire: false,
    hasModule: false,
    hasTypes: false
  };
  if (depth > 10) return result;
  if (exports$1 === null || exports$1 === void 0) {
    return result;
  }
  if (typeof exports$1 === "string") {
    if (exports$1.endsWith(".mjs") || exports$1.endsWith(".mts")) {
      result.hasImport = true;
    } else if (exports$1.endsWith(".cjs") || exports$1.endsWith(".cts")) {
      result.hasRequire = true;
    }
    if (exports$1.endsWith(".d.ts") || exports$1.endsWith(".d.mts") || exports$1.endsWith(".d.cts")) {
      result.hasTypes = true;
    }
    return result;
  }
  if (Array.isArray(exports$1)) {
    for (const item of exports$1) {
      const subResult = analyzeExports(item, depth + 1);
      mergeExportsAnalysis(result, subResult);
    }
    return result;
  }
  if (typeof exports$1 === "object") {
    for (const [key, value] of Object.entries(exports$1)) {
      if (key === "import") {
        result.hasImport = true;
      } else if (key === "require") {
        result.hasRequire = true;
      } else if (key === "module") {
        result.hasModule = true;
      } else if (key === "types") {
        result.hasTypes = true;
      }
      const subResult = analyzeExports(value, depth + 1);
      mergeExportsAnalysis(result, subResult);
    }
  }
  return result;
}
function mergeExportsAnalysis(target, source) {
  target.hasImport = target.hasImport || source.hasImport;
  target.hasRequire = target.hasRequire || source.hasRequire;
  target.hasModule = target.hasModule || source.hasModule;
  target.hasTypes = target.hasTypes || source.hasTypes;
}
function getCreatePackageName(packageName) {
  if (packageName.startsWith("@")) {
    const slashIndex = packageName.indexOf("/");
    const scope = packageName.slice(0, slashIndex);
    const name = packageName.slice(slashIndex + 1);
    return `${scope}/create-${name}`;
  }
  return `create-${packageName}`;
}
function getCreateShortName(createPackageName) {
  if (createPackageName.startsWith("@")) {
    const slashIndex = createPackageName.indexOf("/");
    const name = createPackageName.slice(slashIndex + 1);
    if (name.startsWith("create-")) {
      return name.slice("create-".length);
    }
    return name;
  }
  if (createPackageName.startsWith("create-")) {
    return createPackageName.slice("create-".length);
  }
  return createPackageName;
}
function detectTypesStatus(pkg, typesPackageInfo) {
  if (pkg.types || pkg.typings) {
    return { kind: "included" };
  }
  if (pkg.exports) {
    const exportInfo = analyzeExports(pkg.exports);
    if (exportInfo.hasTypes) {
      return { kind: "included" };
    }
  }
  if (typesPackageInfo) {
    return {
      kind: "@types",
      packageName: typesPackageInfo.packageName,
      deprecated: typesPackageInfo.deprecated
    };
  }
  return { kind: "none" };
}
function hasBuiltInTypes(pkg) {
  if (pkg.types || pkg.typings) {
    return true;
  }
  if (pkg.exports) {
    const exportInfo = analyzeExports(pkg.exports);
    if (exportInfo.hasTypes) {
      return true;
    }
  }
  return false;
}
function getTypesPackageName(packageName) {
  if (packageName.startsWith("@")) {
    return `@types/${packageName.slice(1).replace("/", "__")}`;
  }
  return `@types/${packageName}`;
}
function analyzePackage(pkg, options) {
  const moduleFormat = detectModuleFormat(pkg);
  const types = detectTypesStatus(pkg, options == null ? void 0 : options.typesPackage);
  return {
    moduleFormat,
    types,
    engines: pkg.engines,
    createPackage: options == null ? void 0 : options.createPackage
  };
}

function parsePackageParam(pkgParam) {
  const segments = pkgParam.split("/");
  const vIndex = segments.indexOf("v");
  if (vIndex !== -1 && vIndex < segments.length - 1) {
    return {
      packageName: segments.slice(0, vIndex).join("/"),
      version: segments[vIndex + 1],
      rest: segments.slice(vIndex + 2)
    };
  }
  return {
    packageName: segments.join("/"),
    version: void 0,
    rest: []
  };
}

const SEVERITY_LEVELS = ["critical", "high", "moderate", "low"];

const CATEGORY_ORDER = ["performance", "health", "compatibility", "security"];
const FACET_INFO = {
  // Performance
  packageSize: {
    category: "performance"
  },
  installSize: {
    category: "performance"
  },
  dependencies: {
    category: "performance"
  },
  totalDependencies: {
    category: "performance"
  },
  // Health
  downloads: {
    category: "health"
  },
  lastUpdated: {
    category: "health"
  },
  deprecated: {
    category: "health"
  },
  // Compatibility
  engines: {
    category: "compatibility"
  },
  types: {
    category: "compatibility"
  },
  moduleFormat: {
    category: "compatibility"
  },
  // Security
  license: {
    category: "security"
  },
  vulnerabilities: {
    category: "security"
  }
};
const ALL_FACETS = Object.keys(FACET_INFO);
const FACETS_BY_CATEGORY = ALL_FACETS.reduce(
  (acc, facet) => {
    acc[FACET_INFO[facet].category].push(facet);
    return acc;
  },
  { performance: [], health: [], compatibility: [], security: [] }
);
const DEFAULT_FACETS = ALL_FACETS.filter((f) => !FACET_INFO[f].comingSoon);
const comingSoonFacets = Object.keys(FACET_INFO).filter(
  (f) => FACET_INFO[f].comingSoon
);
comingSoonFacets.length > 0;

const SEVERITY_TEXT_COLORS = {
  critical: "text-red-500",
  high: "text-orange-500",
  moderate: "text-yellow-500",
  low: "text-blue-500",
  unknown: "text-fg-subtle"
};
function getHighestSeverity(counts) {
  var _a;
  for (const s of SEVERITY_LEVELS) {
    if (((_a = counts[s]) != null ? _a : 0) > 0) return s;
  }
  return "unknown";
}

const spdxLicenseIds = [
	"X11",
	"HPND-export2-US",
	"OpenPBS-2.3",
	"OSL-3.0",
	"Rdisc",
	"LPD-document",
	"BSD-3-Clause-LBNL",
	"AFL-1.1",
	"HP-1989",
	"LGPL-3.0",
	"GPL-1.0",
	"CC-BY-ND-4.0",
	"RSA-MD",
	"HPND-sell-variant",
	"threeparttable",
	"AMPAS",
	"ngrep",
	"mplus",
	"MIT-Festival",
	"HDF5",
	"Artistic-1.0-Perl",
	"BSD-4-Clause-UC",
	"SAX-PD",
	"APSL-1.1",
	"AGPL-1.0-or-later",
	"ANTLR-PD",
	"Zimbra-1.3",
	"GLWTPL",
	"Minpack",
	"OSL-2.1",
	"PolyForm-Small-Business-1.0.0",
	"DOC",
	"Cronyx",
	"LPPL-1.3c",
	"SGI-OpenGL",
	"libtiff",
	"OpenVision",
	"TrustedQSL",
	"AGPL-1.0",
	"Sun-PPP",
	"Entessa",
	"AFL-2.0",
	"Sleepycat",
	"Latex2e",
	"FDK-AAC",
	"CECILL-C",
	"ODC-By-1.0",
	"Bitstream-Charter",
	"UMich-Merit",
	"CC-BY-NC-2.5",
	"diffmark",
	"BlueOak-1.0.0",
	"Info-ZIP",
	"CC-BY-NC-ND-4.0",
	"JSON",
	"Sendmail-8.23",
	"SGI-B-1.0",
	"RPL-1.1",
	"ISC",
	"FSFUL",
	"Multics",
	"3D-Slicer-1.0",
	"Libpng",
	"LPPL-1.0",
	"NGPL",
	"Clips",
	"CC-BY-4.0",
	"GFDL-1.1-or-later",
	"GPL-1.0-or-later",
	"GFDL-1.3-invariants-only",
	"Sun-PPP-2000",
	"Glide",
	"Furuseth",
	"GFDL-1.3-no-invariants-or-later",
	"any-OSI",
	"LGPL-2.0-or-later",
	"ADSL",
	"Noweb",
	"Linux-man-pages-1-para",
	"CC-BY-SA-3.0",
	"TAPR-OHL-1.0",
	"SMLNJ",
	"OFL-1.1-RFN",
	"SL",
	"Afmparse",
	"CC-SA-1.0",
	"APSL-1.0",
	"Hippocratic-2.1",
	"UPL-1.0",
	"CC-BY-NC-SA-4.0",
	"xzoom",
	"SchemeReport",
	"Boehm-GC",
	"xinetd",
	"CC-BY-NC-ND-3.0",
	"CECILL-2.1",
	"SSLeay-standalone",
	"CATOSL-1.1",
	"NIST-PD",
	"GPL-2.0-or-later",
	"CECILL-1.1",
	"GFDL-1.2-no-invariants-only",
	"mpich2",
	"JasPer-2.0",
	"RPSL-1.0",
	"OLDAP-1.4",
	"TU-Berlin-1.0",
	"CC-BY-3.0-AT",
	"BSD-3-Clause-No-Nuclear-License",
	"Xdebug-1.03",
	"SISSL",
	"Apache-1.1",
	"HPND-DEC",
	"Unlicense-libtelnet",
	"Condor-1.1",
	"Unicode-TOU",
	"OML",
	"QPL-1.0-INRIA-2004",
	"CC-BY-ND-1.0",
	"PolyForm-Noncommercial-1.0.0",
	"man2html",
	"OLFL-1.3",
	"copyleft-next-0.3.0",
	"LGPLLR",
	"CDDL-1.1",
	"Xfig",
	"CC-BY-2.5-AU",
	"APL-1.0",
	"OpenSSL-standalone",
	"OGDL-Taiwan-1.0",
	"BSL-1.0",
	"GPL-3.0+",
	"generic-xts",
	"PHP-3.0",
	"LAL-1.2",
	"DRL-1.1",
	"LPL-1.0",
	"Leptonica",
	"CNRI-Jython",
	"DL-DE-ZERO-2.0",
	"Cube",
	"w3m",
	"TGPPL-1.0",
	"HPND-UC-export-US",
	"GPL-2.0+",
	"EFL-1.0",
	"NRL",
	"CPAL-1.0",
	"NCSA",
	"CC-BY-SA-2.1-JP",
	"PPL",
	"GPL-2.0-with-font-exception",
	"GPL-1.0-only",
	"ASWF-Digital-Assets-1.1",
	"NCL",
	"App-s2p",
	"BitTorrent-1.0",
	"HPND-merchantability-variant",
	"EPICS",
	"BSD-3-Clause-Attribution",
	"curl",
	"NLPL",
	"Apache-2.0",
	"BSD-Protection",
	"DEC-3-Clause",
	"MakeIndex",
	"RSCPL",
	"bcrypt-Solar-Designer",
	"OGL-UK-1.0",
	"LGPL-3.0+",
	"OLDAP-2.1",
	"GPL-2.0-with-classpath-exception",
	"HPND-export-US-modify",
	"MIT-0",
	"MPL-2.0-no-copyleft-exception",
	"CERN-OHL-S-2.0",
	"TMate",
	"GPL-1.0+",
	"CMU-Mach",
	"OSL-2.0",
	"UnixCrypt",
	"Plexus",
	"MulanPSL-2.0",
	"OSET-PL-2.1",
	"DocBook-Schema",
	"CC-BY-NC-ND-3.0-DE",
	"IPA",
	"LGPL-2.1-or-later",
	"zlib-acknowledgement",
	"Zed",
	"Fair",
	"AGPL-3.0-only",
	"GFDL-1.2-invariants-only",
	"Spencer-86",
	"AMDPLPA",
	"NPOSL-3.0",
	"SWL",
	"CC-BY-SA-2.0-UK",
	"Brian-Gladman-2-Clause",
	"CC-BY-NC-SA-2.0",
	"CERN-OHL-P-2.0",
	"OFL-1.0-RFN",
	"Linux-man-pages-copyleft-var",
	"Nunit",
	"OFL-1.1-no-RFN",
	"BSD-3-Clause-flex",
	"Intel-ACPI",
	"CFITSIO",
	"Bitstream-Vera",
	"HPND",
	"HPND-UC",
	"PSF-2.0",
	"xkeyboard-config-Zinoviev",
	"mpi-permissive",
	"TORQUE-1.1",
	"CC-BY-NC-ND-2.5",
	"cve-tou",
	"Artistic-2.0",
	"ANTLR-PD-fallback",
	"CERN-OHL-W-2.0",
	"Spencer-99",
	"PHP-3.01",
	"SugarCRM-1.1.3",
	"GFDL-1.3-only",
	"SNIA",
	"HPND-sell-variant-MIT-disclaimer",
	"libpng-2.0",
	"BSD-4-Clause",
	"HPND-Intel",
	"LiLiQ-R-1.1",
	"any-OSI-perl-modules",
	"Aspell-RU",
	"LiLiQ-P-1.1",
	"HPND-INRIA-IMAG",
	"BUSL-1.1",
	"Parity-7.0.0",
	"TTYP0",
	"LOOP",
	"LiLiQ-Rplus-1.1",
	"BSD-3-Clause-No-Nuclear-License-2014",
	"BSD-3-Clause-Sun",
	"Parity-6.0.0",
	"IBM-pibs",
	"bzip2-1.0.6",
	"GFDL-1.2-no-invariants-or-later",
	"FSFULLRWD",
	"Game-Programming-Gems",
	"gnuplot",
	"X11-swapped",
	"NLOD-1.0",
	"CPOL-1.02",
	"OAR",
	"Abstyles",
	"SISSL-1.2",
	"Unicode-DFS-2015",
	"Graphics-Gems",
	"CC-BY-SA-4.0",
	"Dotseqn",
	"RHeCos-1.1",
	"BSD-3-Clause-Clear",
	"CC-BY-SA-2.0",
	"GFDL-1.2-invariants-or-later",
	"EUDatagrid",
	"libselinux-1.0",
	"FreeImage",
	"APSL-1.2",
	"Sendmail",
	"SHL-0.5",
	"Ubuntu-font-1.0",
	"BSD-4-Clause-Shortened",
	"GCR-docs",
	"GFDL-1.1-invariants-only",
	"ZPL-2.1",
	"CC-PDDC",
	"OCLC-2.0",
	"OpenSSL",
	"MS-RL",
	"BSD-3-Clause-acpica",
	"TCP-wrappers",
	"CC-BY-NC-SA-3.0-DE",
	"LPPL-1.3a",
	"OLDAP-1.2",
	"HP-1986",
	"hdparm",
	"PADL",
	"OPL-UK-3.0",
	"BSD-1-Clause",
	"MIT-CMU",
	"Mup",
	"ICU",
	"xpp",
	"Artistic-1.0-cl8",
	"CC-BY-2.5",
	"XSkat",
	"YPL-1.0",
	"W3C-20150513",
	"SGI-B-1.1",
	"LGPL-2.1-only",
	"CUA-OPL-1.0",
	"Eurosym",
	"FSFULLRSD",
	"CC-BY-NC-SA-2.0-FR",
	"X11-distribute-modifications-variant",
	"MPEG-SSG",
	"MIT-Modern-Variant",
	"CAL-1.0",
	"HPND-doc-sell",
	"Naumen",
	"Unicode-3.0",
	"Unicode-DFS-2016",
	"HIDAPI",
	"Baekmuk",
	"Kazlib",
	"HPND-MIT-disclaimer",
	"OLDAP-2.2.2",
	"AdaCore-doc",
	"0BSD",
	"ISC-Veillard",
	"CERN-OHL-1.2",
	"dvipdfm",
	"MulanPSL-1.0",
	"JPL-image",
	"FSFULLR",
	"CryptoSwift",
	"CC-BY-NC-3.0-DE",
	"BitTorrent-1.1",
	"EPL-2.0",
	"Vim",
	"Inner-Net-2.0",
	"LGPL-2.0-only",
	"Zimbra-1.4",
	"Cornell-Lossless-JPEG",
	"Knuth-CTAN",
	"OLDAP-1.1",
	"CC-BY-NC-ND-2.0",
	"Borceux",
	"DSDP",
	"Unlicense",
	"ECL-2.0",
	"HPND-Pbmplus",
	"ASWF-Digital-Assets-1.0",
	"HPND-sell-MIT-disclaimer-xserver",
	"SPL-1.0",
	"AFL-3.0",
	"OLDAP-2.6",
	"BSD-Advertising-Acknowledgement",
	"SAX-PD-2.0",
	"Crossword",
	"swrule",
	"LZMA-SDK-9.11-to-9.20",
	"GFDL-1.2",
	"MIPS",
	"CNRI-Python",
	"UCAR",
	"InnoSetup",
	"MIT-Wu",
	"CC-BY-NC-SA-2.0-DE",
	"HPND-sell-variant-MIT-disclaimer-rev",
	"GPL-2.0-with-bison-exception",
	"CC-BY-NC-SA-3.0",
	"GL2PS",
	"Martin-Birgmeier",
	"xlock",
	"etalab-2.0",
	"OLDAP-2.8",
	"W3C-19980720",
	"CC-BY-3.0-US",
	"CPL-1.0",
	"OFFIS",
	"CC0-1.0",
	"CECILL-2.0",
	"OCCT-PL",
	"NPL-1.0",
	"magaz",
	"Soundex",
	"SOFA",
	"Frameworx-1.0",
	"check-cvs",
	"OLDAP-2.2.1",
	"Apache-1.0",
	"URT-RLE",
	"mailprio",
	"OLDAP-2.4",
	"BSD-Source-beginning-file",
	"CC-BY-SA-1.0",
	"CDL-1.0",
	"OLDAP-1.3",
	"HPND-Netrek",
	"Artistic-1.0",
	"checkmk",
	"Saxpath",
	"CMU-Mach-nodoc",
	"NCGL-UK-2.0",
	"EUPL-1.1",
	"CC-BY-ND-2.5",
	"SunPro",
	"Elastic-2.0",
	"ODbL-1.0",
	"CERN-OHL-1.1",
	"IEC-Code-Components-EULA",
	"OGL-UK-2.0",
	"Caldera-no-preamble",
	"libutil-David-Nugent",
	"ThirdEye",
	"MIT-open-group",
	"EUPL-1.0",
	"NICTA-1.0",
	"CDDL-1.0",
	"MIT-feh",
	"LGPL-2.0+",
	"CC-BY-3.0-IGO",
	"OLDAP-2.3",
	"bzip2-1.0.5",
	"RPL-1.5",
	"OPUBL-1.0",
	"AGPL-1.0-only",
	"TOSL",
	"FTL",
	"WTFPL",
	"Intel",
	"Barr",
	"Zlib",
	"BSD-Systemics-W3Works",
	"psfrag",
	"AAL",
	"CECILL-B",
	"NTIA-PD",
	"AGPL-3.0",
	"CC-BY-NC-1.0",
	"libpng-1.6.35",
	"BSD-2-Clause",
	"wxWindows",
	"NASA-1.3",
	"Mackerras-3-Clause-acknowledgment",
	"BSD-4.3RENO",
	"Pixar",
	"CC-BY-3.0-NL",
	"AMD-newlib",
	"MIT-Click",
	"AML-glslang",
	"MIT-advertising",
	"CC-BY-2.0",
	"CC-BY-NC-ND-1.0",
	"OLDAP-2.5",
	"Zend-2.0",
	"HPND-Fenneberg-Livingston",
	"DRL-1.0",
	"NIST-Software",
	"LGPL-2.1+",
	"CrystalStacker",
	"BSD-Source-Code",
	"Spencer-94",
	"SimPL-2.0",
	"OSL-1.1",
	"CDLA-Permissive-1.0",
	"metamail",
	"GFDL-1.1-only",
	"CC-BY-ND-3.0",
	"CC-BY-3.0-DE",
	"HPND-export-US",
	"NBPL-1.0",
	"GPL-2.0-only",
	"NAIST-2003",
	"SSH-OpenSSH",
	"Nokia",
	"gtkbook",
	"Boehm-GC-without-fee",
	"GPL-3.0-or-later",
	"CECILL-1.0",
	"AGPL-3.0-or-later",
	"Xnet",
	"NOSL",
	"ImageMagick",
	"MITNFA",
	"APAFML",
	"Jam",
	"FBM",
	"BSD-2-Clause-Darwin",
	"HTMLTIDY",
	"W3C",
	"AFL-1.2",
	"YPL-1.1",
	"iMatix",
	"Caldera",
	"SCEA",
	"O-UDA-1.0",
	"LPPL-1.2",
	"HPND-export-US-acknowledgement",
	"GFDL-1.2-or-later",
	"McPhee-slideshow",
	"Ruby",
	"Kastrup",
	"Adobe-Glyph",
	"CC-BY-SA-3.0-AT",
	"DocBook-Stylesheet",
	"Aladdin",
	"MIT-testregex",
	"BSD-3-Clause-Modification",
	"BSD-3-Clause-No-Military-License",
	"Adobe-Display-PostScript",
	"psutils",
	"StandardML-NJ",
	"LGPL-3.0-or-later",
	"GPL-3.0",
	"LZMA-SDK-9.22",
	"Bahyph",
	"BSD-Attribution-HPND-disclaimer",
	"Motosoto",
	"MIT-Khronos-old",
	"Ruby-pty",
	"CC-BY-NC-SA-1.0",
	"Artistic-dist",
	"IJG",
	"Linux-OpenIB",
	"ulem",
	"MIT",
	"GFDL-1.3-no-invariants-only",
	"Symlinks",
	"NPL-1.1",
	"Giftware",
	"CDLA-Permissive-2.0",
	"LAL-1.3",
	"Widget-Workshop",
	"Latex2e-translated-notice",
	"Gutmann",
	"GPL-2.0-with-GCC-exception",
	"COIL-1.0",
	"Watcom-1.0",
	"HPND-Kevlin-Henney",
	"fwlw",
	"DL-DE-BY-2.0",
	"BSD-2-Clause-NetBSD",
	"Interbase-1.0",
	"GFDL-1.1",
	"OGTSL",
	"BSD-Inferno-Nettverk",
	"BSD-2-Clause-Views",
	"ssh-keyscan",
	"GFDL-1.1-invariants-or-later",
	"Mackerras-3-Clause",
	"TPL-1.0",
	"ErlPL-1.1",
	"LPPL-1.1",
	"BSD-2-Clause-first-lines",
	"OGL-Canada-2.0",
	"D-FSL-1.0",
	"SMAIL-GPL",
	"CC-PDM-1.0",
	"CDLA-Sharing-1.0",
	"GD",
	"GFDL-1.3-invariants-or-later",
	"Zeeff",
	"Imlib2",
	"CC-BY-NC-2.0",
	"Adobe-Utopia",
	"ZPL-2.0",
	"Beerware",
	"SUL-1.0",
	"EPL-1.0",
	"CC-BY-1.0",
	"CC-BY-NC-4.0",
	"FSFAP",
	"VSL-1.0",
	"lsof",
	"Wsuipa",
	"Unlicense-libwhirlpool",
	"NTP-0",
	"BSD-3-Clause",
	"APSL-2.0",
	"CAL-1.0-Combined-Work-Exception",
	"OGL-UK-3.0",
	"CC-BY-SA-3.0-IGO",
	"SGP4",
	"SSH-short",
	"OLDAP-2.7",
	"VOSTROM",
	"CC-BY-3.0",
	"CC-BY-NC-ND-3.0-IGO",
	"dtoa",
	"SMPPL",
	"MIT-enna",
	"Catharon",
	"SHL-0.51",
	"copyleft-next-0.3.1",
	"BSD-2-Clause-Patent",
	"FSL-1.1-ALv2",
	"Python-2.0.1",
	"CC-BY-ND-2.0",
	"MTLL",
	"OFL-1.0",
	"Qhull",
	"IPL-1.0",
	"Linux-man-pages-copyleft-2-para",
	"softSurfer",
	"snprintf",
	"GFDL-1.2-only",
	"EUPL-1.2",
	"ZPL-1.1",
	"TTWL",
	"MPL-2.0",
	"HPND-doc",
	"GPL-3.0-with-GCC-exception",
	"BSD-Systemics",
	"DocBook-DTD",
	"EFL-2.0",
	"HaskellReport",
	"BSD-3-Clause-No-Nuclear-Warranty",
	"Newsletr",
	"OFL-1.1",
	"GFDL-1.1-no-invariants-only",
	"CC-BY-ND-3.0-DE",
	"UCL-1.0",
	"OGC-1.0",
	"eGenix",
	"OPL-1.0",
	"Xerox",
	"NIST-PD-fallback",
	"SGI-B-2.0",
	"GPL-2.0-with-autoconf-exception",
	"TermReadKey",
	"Sendmail-Open-Source-1.1",
	"NTP",
	"BSD-2-Clause-FreeBSD",
	"HPND-Markus-Kuhn",
	"BSD-2-Clause-pkgconf-disclaimer",
	"TCL",
	"NetCDF",
	"wwl",
	"Python-2.0",
	"FSFAP-no-warranty-disclaimer",
	"python-ldap",
	"CC-BY-SA-2.5",
	"GPL-3.0-only",
	"GFDL-1.3-or-later",
	"LGPL-3.0-only",
	"Glulxe",
	"CC-BY-NC-SA-3.0-IGO",
	"BSD-3-Clause-Open-MPI",
	"Net-SNMP",
	"FSL-1.1-MIT",
	"Linux-man-pages-copyleft",
	"ECL-1.0",
	"jove",
	"BSD-3-Clause-HP",
	"AML",
	"FreeBSD-DOC",
	"XFree86-1.1",
	"eCos-2.0",
	"CC-BY-3.0-AU",
	"Arphic-1999",
	"GPL-3.0-with-autoconf-exception",
	"OSL-1.0",
	"GFDL-1.3",
	"OFL-1.0-no-RFN",
	"OLDAP-2.0.1",
	"JPNIC",
	"LPL-1.02",
	"OLDAP-2.0",
	"Adobe-2006",
	"CC-BY-NC-SA-2.5",
	"C-UDA-1.0",
	"Lucida-Bitmap-Fonts",
	"Ferguson-Twofish",
	"MMIXware",
	"SSPL-1.0",
	"MPL-1.0",
	"TPDL",
	"OLDAP-2.2",
	"gSOAP-1.3b",
	"TU-Berlin-2.0",
	"pkgconf",
	"CC-BY-NC-SA-2.0-UK",
	"DocBook-XML",
	"CNRI-Python-GPL-Compatible",
	"MS-LPL",
	"Brian-Gladman-3-Clause",
	"LGPL-2.0",
	"LGPL-2.1",
	"radvd",
	"MPL-1.1",
	"blessing",
	"HPND-sell-regexpr",
	"AFL-2.1",
	"CC-BY-SA-3.0-DE",
	"PDDL-1.0",
	"BSD-4.3TAHOE",
	"CC-BY-NC-3.0",
	"NLOD-2.0",
	"GPL-2.0",
	"GFDL-1.1-no-invariants-or-later",
	"ClArtistic",
	"pnmstitch",
	"MirOS",
	"QPL-1.0",
	"IJG-short",
	"Community-Spec-1.0",
	"NCBI-PD",
	"PostgreSQL",
	"MS-PL"
];

const SPDX_LICENSE_IDS = new Set(spdxLicenseIds);
function isValidSpdxLicense(license) {
  return SPDX_LICENSE_IDS.has(license);
}
function parseLicenseExpression(expression) {
  const result = [];
  const pattern = /\b(OR|AND|WITH)\b|([A-Za-z0-9.\-+]+)/g;
  let match;
  while ((match = pattern.exec(expression)) !== null) {
    if (match[1]) {
      result.push({ type: "operator", value: match[1] });
    } else if (match[2]) {
      const id = match[2];
      const isValid = isValidSpdxLicense(id);
      result.push({
        type: "license",
        value: id,
        url: isValid ? `https://spdx.org/licenses/${id}.html` : void 0
      });
    }
  }
  return result;
}

function normalizeUrlForComparison(url) {
  let normalized = withoutProtocol(url).toLowerCase();
  normalized = withoutTrailingSlash(normalized);
  normalized = normalized.replace(/^www\./, "").replace(/#.*$/, "").replace(/\/tree\/(head|main|master)(\/|$)/i, "/");
  return withoutTrailingSlash(normalized);
}
function areUrlsEquivalent(url1, url2) {
  return normalizeUrlForComparison(url1) === normalizeUrlForComparison(url2);
}
function normalizeSearchParam(query) {
  if (!query) return "";
  if (typeof query === "string") return query;
  return normalizeSearchParam(query[0]);
}

const DEFAULT_COLUMNS = [
  { id: "name", visible: true, sortable: true, width: "minmax(200px, 1fr)" },
  { id: "version", visible: true, sortable: false, width: "100px" },
  {
    id: "description",
    visible: true,
    sortable: false,
    width: "minmax(200px, 2fr)"
  },
  { id: "downloads", visible: true, sortable: true, width: "120px" },
  { id: "updated", visible: true, sortable: true, width: "120px" },
  { id: "maintainers", visible: false, sortable: false, width: "150px" },
  { id: "keywords", visible: false, sortable: false, width: "200px" },
  {
    id: "qualityScore",
    visible: false,
    sortable: true,
    width: "100px",
    disabled: true
  },
  {
    id: "popularityScore",
    visible: false,
    sortable: true,
    width: "100px",
    disabled: true
  },
  {
    id: "maintenanceScore",
    visible: false,
    sortable: true,
    width: "100px",
    disabled: true
  },
  {
    id: "combinedScore",
    visible: false,
    sortable: true,
    width: "100px",
    disabled: true
  },
  {
    id: "security",
    visible: false,
    sortable: false,
    width: "80px",
    disabled: true
  }
];
const SORT_KEYS = [
  { key: "relevance", defaultDirection: "desc", searchOnly: true },
  { key: "downloads-week", defaultDirection: "desc" },
  { key: "downloads-day", defaultDirection: "desc", disabled: true },
  { key: "downloads-month", defaultDirection: "desc", disabled: true },
  { key: "downloads-year", defaultDirection: "desc", disabled: true },
  { key: "updated", defaultDirection: "desc" },
  { key: "name", defaultDirection: "asc" },
  { key: "quality", defaultDirection: "desc", disabled: true },
  { key: "popularity", defaultDirection: "desc", disabled: true },
  { key: "maintenance", defaultDirection: "desc", disabled: true },
  { key: "score", defaultDirection: "desc", disabled: true }
];
const VALID_SORT_KEYS = /* @__PURE__ */ new Set([
  "relevance",
  "downloads-week",
  "downloads-day",
  "downloads-month",
  "downloads-year",
  "updated",
  "name",
  "quality",
  "popularity",
  "maintenance",
  "score"
]);
function parseSortOption(option) {
  const match = option.match(/^(.+)-(asc|desc)$/);
  if (match) {
    const key = match[1];
    const direction = match[2];
    if (VALID_SORT_KEYS.has(key)) {
      return { key, direction };
    }
  }
  return { key: "downloads-week", direction: "desc" };
}
const DOWNLOAD_RANGES = [
  { value: "any" },
  { value: "lt100", max: 100 },
  { value: "100-1k", min: 100, max: 1e3 },
  { value: "1k-10k", min: 1e3, max: 1e4 },
  { value: "10k-100k", min: 1e4, max: 1e5 },
  { value: "gt100k", min: 1e5 }
];
const UPDATED_WITHIN_OPTIONS = [
  { value: "any" },
  { value: "week", days: 7 },
  { value: "month", days: 30 },
  { value: "quarter", days: 90 },
  { value: "year", days: 365 }
];
const SECURITY_FILTER_VALUES = ["all", "secure", "warnings"];
const SEARCH_SCOPE_VALUES = ["name", "description", "keywords", "all"];
const DEFAULT_FILTERS = {
  text: "",
  searchScope: "name",
  downloadRange: "any",
  keywords: [],
  security: "all",
  updatedWithin: "any"
};
const PAGE_SIZE_OPTIONS = [10, 25, 50, 100, "all"];
const DEFAULT_PREFERENCES = {
  viewMode: "cards",
  columns: DEFAULT_COLUMNS,
  paginationMode: "infinite",
  pageSize: 25
};

function useNitroOrigin(e) {
  return getNitroOrigin(e);
}

function createUpstashLock(redis) {
  return async (key, fn) => {
    const lockKey = `oauth:lock:${key}`;
    const lockValue = crypto.randomUUID();
    const lockTTL = 30;
    const acquired = await redis.set(lockKey, lockValue, {
      nx: true,
      ex: lockTTL
    });
    if (!acquired) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const retryAcquired = await redis.set(lockKey, lockValue, {
        nx: true,
        ex: lockTTL
      });
      if (!retryAcquired) {
        return await fn();
      }
    }
    try {
      return await fn();
    } finally {
      const currentValue = await redis.get(lockKey);
      if (currentValue === lockValue) {
        await redis.del(lockKey);
      }
    }
  };
}
function getOAuthLock() {
  var _a, _b;
  const config = useRuntimeConfig();
  if (((_a = config.upstash) == null ? void 0 : _a.redisRestUrl) && ((_b = config.upstash) == null ? void 0 : _b.redisRestToken)) {
    const redis = new Redis({
      url: config.upstash.redisRestUrl,
      token: config.upstash.redisRestToken
    });
    return createUpstashLock(redis);
  }
  return requestLocalLock;
}

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, key + "" , value);
class OAuthSessionStore {
  constructor(session) {
    __publicField$4(this, "session");
    this.session = session;
  }
  async get() {
    const sessionData = this.session.data;
    if (!sessionData) return void 0;
    return sessionData.oauthSession;
  }
  async set(_key, val) {
    try {
      await this.session.update({
        oauthSession: val
      });
    } catch (error) {
      console.error(
        "[oauth session store] Failed to set session:",
        error instanceof Error ? error.message : "Unknown error"
      );
      throw error;
    }
  }
  async del() {
    await this.session.update({
      oauthSession: void 0
    });
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, key + "" , value);
class OAuthStateStore {
  constructor(session) {
    __publicField$3(this, "session");
    this.session = session;
  }
  async get() {
    const sessionData = this.session.data;
    if (!sessionData) return void 0;
    return sessionData.oauthState;
  }
  async set(_key, val) {
    await this.session.update({
      oauthState: val
    });
  }
  async del() {
    await this.session.update({
      oauthState: void 0
    });
  }
}

const useServerSession = async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.sessionPassword) {
    throw new Error("Session password is not configured");
  }
  const serverSession = useSession(event, {
    password: config.sessionPassword
  });
  return serverSession;
};

const useOAuthStorage = (session) => {
  return {
    stateStore: new OAuthStateStore(session),
    sessionStore: new OAuthSessionStore(session)
  };
};

const OAuthMetadataSchema = object({
  client_id: pipe(string(), url()),
  client_name: string(),
  client_uri: pipe(string(), url()),
  redirect_uris: pipe(array(string()), minLength(1)),
  scope: string(),
  grant_types: array(string()),
  application_type: string(),
  token_endpoint_auth_method: string(),
  dpop_bound_access_tokens: boolean(),
  response_types: array(string())
});

const clientUri = "http://127.0.0.1:3000";

const scope = `atproto ${LIKES_SCOPE}`;
const handleResolver = new AtprotoDohHandleResolver({
  dohEndpoint: "https://cloudflare-dns.com/dns-query"
});
function getOauthClientMetadata() {
  const client_uri = clientUri;
  const redirect_uri = `${client_uri}/api/auth/atproto`;
  const client_id = `${client_uri}/oauth-client-metadata.json`;
  return parse$3(OAuthMetadataSchema, {
    client_name: "npmx.dev",
    client_id,
    client_uri,
    scope,
    redirect_uris: [redirect_uri],
    grant_types: ["authorization_code", "refresh_token"],
    application_type: "web",
    token_endpoint_auth_method: "none",
    dpop_bound_access_tokens: true,
    response_types: ["code"]
  });
}
async function getOAuthSession(event) {
  const serverSession = await useServerSession(event);
  try {
    const clientMetadata = getOauthClientMetadata();
    const { stateStore, sessionStore } = useOAuthStorage(serverSession);
    const client = new NodeOAuthClient({
      stateStore,
      sessionStore,
      clientMetadata,
      requestLock: getOAuthLock(),
      handleResolver
    });
    const currentSession = serverSession.data;
    if (!currentSession) return { oauthSession: void 0, serverSession };
    const oauthSession = await client.restore(currentSession.public.did);
    return { oauthSession, serverSession };
  } catch (error) {
    console.error(
      "[oauth] Failed to get session:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return { oauthSession: void 0, serverSession };
  }
}
async function throwOnMissingOAuthScope(oAuthSession, requiredScopes) {
  const tokenInfo = await oAuthSession.getTokenInfo();
  if (!tokenInfo.scope.includes(requiredScopes)) {
    throw createError$1({
      status: 403,
      message: ERROR_NEED_REAUTH
    });
  }
}
function eventHandlerWithOAuthSession(handler) {
  return defineEventHandler(async (event) => {
    const { oauthSession, serverSession } = await getOAuthSession(event);
    return await handler(event, oauthSession, serverSession);
  });
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
class RedisCacheAdapter {
  constructor(redis, prefix) {
    __publicField$2(this, "redis");
    __publicField$2(this, "prefix");
    this.redis = redis;
    this.prefix = prefix;
  }
  formatKey(key) {
    return `${this.prefix}:${key}`;
  }
  async get(key) {
    const formattedKey = this.formatKey(key);
    const value = await this.redis.get(formattedKey);
    if (!value) return;
    return value;
  }
  async set(key, value, ttl) {
    const formattedKey = this.formatKey(key);
    if (ttl) {
      await this.redis.setex(formattedKey, ttl, value);
    } else {
      await this.redis.set(formattedKey, value);
    }
  }
  async delete(key) {
    const formattedKey = this.formatKey(key);
    await this.redis.del(formattedKey);
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, key + "" , value);
function isCacheEntryStale(entry) {
  if (!entry.ttl) return false;
  const now = Date.now();
  const expiresAt = entry.cachedAt + entry.ttl * 1e3;
  return now > expiresAt;
}
class LocalCacheAdapter {
  constructor() {
    __publicField$1(this, "storage", useStorage("atproto:generic"));
  }
  async get(key) {
    const result = await this.storage.getItem(key);
    if (!result) return;
    if (isCacheEntryStale(result)) {
      await this.storage.removeItem(key);
      return;
    }
    return result.value;
  }
  async set(key, value, ttl) {
    await this.storage.setItem(key, { value, ttl, cachedAt: Date.now() });
  }
  async delete(key) {
    await this.storage.removeItem(key);
  }
}

function getCacheAdapter(prefix) {
  var _a, _b;
  const config = useRuntimeConfig();
  if (((_a = config.upstash) == null ? void 0 : _a.redisRestUrl) && ((_b = config.upstash) == null ? void 0 : _b.redisRestToken)) {
    const redis = new Redis({
      url: config.upstash.redisRestUrl,
      token: config.upstash.redisRestToken
    });
    return new RedisCacheAdapter(redis, prefix);
  }
  return new LocalCacheAdapter();
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const CACHE_PREFIX = "atproto-likes:";
const CACHE_PACKAGE_TOTAL_KEY = (packageName) => `${CACHE_PREFIX}${packageName}:total`;
const CACHE_USER_LIKES_KEY = (packageName, did) => `${CACHE_PREFIX}${packageName}:users:${did}:liked`;
const CACHE_USERS_BACK_LINK = (packageName, did) => `${CACHE_PREFIX}${packageName}:users:${did}:backlink`;
const CACHE_MAX_AGE = CACHE_MAX_AGE_ONE_MINUTE * 5;
class PackageLikesUtils {
  constructor() {
    __publicField(this, "constellation");
    __publicField(this, "cache");
    this.constellation = new Constellation(
      // Passes in a fetch wrapped as cachedfetch since are already doing some heavy caching here
      async (url, options = {}, _ttl) => {
        const data = await $fetch(url, options);
        return { data, isStale: false, cachedAt: null };
      }
    );
    this.cache = getCacheAdapter("generic");
  }
  /**
   * Gets the true total count of likes for a npm package from the network
   * @param subjectRef
   * @returns
   */
  async constellationLikes(subjectRef) {
    const { data: totalLinks } = await this.constellation.getLinksDistinctDids(
      subjectRef,
      $nsid,
      ".subjectRef",
      //Limit doesn't matter here since we are just counting the total likes
      1,
      void 0,
      0
    );
    return totalLinks.total;
  }
  /**
   * Checks if the user has liked the npm package from the network
   * @param subjectRef
   * @param usersDid
   * @returns
   */
  async constellationUserHasLiked(subjectRef, usersDid) {
    const { data: userLikes } = await this.constellation.getBackLinks(
      subjectRef,
      $nsid,
      "subjectRef",
      //Limit doesn't matter here since we are just counting the total likes
      1,
      void 0,
      false,
      [[usersDid]],
      0
    );
    return userLikes.total > 0;
  }
  /**
   * Gets the likes for a npm package on npmx. Tries a local cahce first, if not found uses constellation
   * @param packageName
   * @param usersDid
   * @returns
   */
  async getLikes(packageName, usersDid) {
    const totalLikesKey = CACHE_PACKAGE_TOTAL_KEY(packageName);
    const subjectRef = PACKAGE_SUBJECT_REF(packageName);
    const cachedLikes = await this.cache.get(totalLikesKey);
    let totalLikes = 0;
    if (cachedLikes) {
      totalLikes = cachedLikes;
    } else {
      totalLikes = await this.constellationLikes(subjectRef);
      await this.cache.set(totalLikesKey, totalLikes, CACHE_MAX_AGE);
    }
    let userHasLiked = false;
    if (usersDid) {
      const userCachedLike = await this.cache.get(
        CACHE_USER_LIKES_KEY(packageName, usersDid)
      );
      if (userCachedLike) {
        userHasLiked = userCachedLike;
      } else {
        userHasLiked = await this.constellationUserHasLiked(subjectRef, usersDid);
        await this.cache.set(
          CACHE_USER_LIKES_KEY(packageName, usersDid),
          userHasLiked,
          CACHE_MAX_AGE
        );
      }
    }
    return {
      totalLikes,
      userHasLiked
    };
  }
  /**
   * Gets the definite answer if the user has liked a npm package. Either from the cache or the network
   * @param packageName
   * @param usersDid
   * @returns
   */
  async hasTheUserLikedThePackage(packageName, usersDid) {
    const cached = await this.cache.get(CACHE_USER_LIKES_KEY(packageName, usersDid));
    if (cached !== void 0) {
      return cached;
    }
    const subjectRef = PACKAGE_SUBJECT_REF(packageName);
    const userHasLiked = await this.constellationUserHasLiked(subjectRef, usersDid);
    await this.cache.set(CACHE_USER_LIKES_KEY(packageName, usersDid), userHasLiked, CACHE_MAX_AGE);
    return userHasLiked;
  }
  /**
   * It is asummed it has been checked by this point that if a user has liked a package and the new like was made as a record
   * to the user's atproto repostiory
   * @param packageName
   * @param usersDid
   * @param atUri - The URI of the like record
   */
  async likeAPackageAndReturnLikes(packageName, usersDid, atUri) {
    const totalLikesKey = CACHE_PACKAGE_TOTAL_KEY(packageName);
    const subjectRef = PACKAGE_SUBJECT_REF(packageName);
    const splitAtUri = atUri.replace("at://", "").split("/");
    const collection = splitAtUri[1];
    const rkey = splitAtUri[2];
    if (!collection || !rkey) {
      throw new Error(`Invalid atUri given: ${atUri}`);
    }
    const backLink = {
      did: usersDid,
      collection,
      rkey
    };
    const usersBackLinkKey = CACHE_USERS_BACK_LINK(packageName, usersDid);
    await this.cache.set(usersBackLinkKey, backLink, CACHE_MAX_AGE);
    let totalLikes = await this.cache.get(totalLikesKey);
    if (!totalLikes) {
      totalLikes = await this.constellationLikes(subjectRef);
    }
    totalLikes = totalLikes + 1;
    await this.cache.set(totalLikesKey, totalLikes, CACHE_MAX_AGE);
    await this.cache.set(CACHE_USER_LIKES_KEY(packageName, usersDid), true, CACHE_MAX_AGE);
    return {
      totalLikes,
      userHasLiked: true
    };
  }
  /**
   * We need to get the record the user has that they liked the package
   * @param packageName
   * @param usersDid
   * @returns
   */
  async getTheUsersLikedRecord(packageName, usersDid) {
    const usersBackLinkKey = CACHE_USERS_BACK_LINK(packageName, usersDid);
    const backLink = await this.cache.get(usersBackLinkKey);
    if (backLink) {
      return backLink;
    }
    const subjectRef = PACKAGE_SUBJECT_REF(packageName);
    const { data: userLikes } = await this.constellation.getBackLinks(
      subjectRef,
      $nsid,
      "subjectRef",
      //Limit doesn't matter here since we are just counting the total likes
      1,
      void 0,
      false,
      [[usersDid]],
      0
    );
    if (userLikes.total > 0 && userLikes.records.length > 0) {
      return userLikes.records[0];
    }
  }
  /**
   * Access to unlike a package for a user in the cache.
   * @param packageName
   * @param usersDid
   */
  async setUnlikeInCache(packageName, usersDid) {
    await this.cache.set(CACHE_USER_LIKES_KEY(packageName, usersDid), false, CACHE_MAX_AGE);
  }
  /**
   * At this point you should have checked if the user had a record for the package on the network and removed it before updating the cache
   * @param packageName
   * @param usersDid
   * @returns
   */
  async unlikeAPackageAndReturnLikes(packageName, usersDid) {
    const totalLikesKey = CACHE_PACKAGE_TOTAL_KEY(packageName);
    const subjectRef = PACKAGE_SUBJECT_REF(packageName);
    let totalLikes = await this.cache.get(totalLikesKey);
    if (!totalLikes) {
      totalLikes = await this.constellationLikes(subjectRef);
    }
    totalLikes = Math.max(totalLikes - 1, 0);
    await this.cache.set(totalLikesKey, totalLikes, CACHE_MAX_AGE);
    await this.setUnlikeInCache(packageName, usersDid);
    await this.cache.delete(CACHE_USERS_BACK_LINK(packageName, usersDid));
    return {
      totalLikes,
      userHasLiked: false
    };
  }
}

let ShikiError$1 = class ShikiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

function resolveColorReplacements(theme, options) {
  const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
  const themeName = typeof theme === "string" ? theme : theme.name;
  for (const [key, value] of Object.entries(options?.colorReplacements || {})) {
    if (typeof value === "string")
      replacements[key] = value;
    else if (key === themeName)
      Object.assign(replacements, value);
  }
  return replacements;
}
function applyColorReplacements(color, replacements) {
  if (!color)
    return color;
  return replacements?.[color?.toLowerCase()] || color;
}

function toArray$1(x) {
  return Array.isArray(x) ? x : [x];
}
async function normalizeGetter(p) {
  return Promise.resolve(typeof p === "function" ? p() : p).then((r) => r.default || r);
}
function isPlainLang(lang) {
  return !lang || ["plaintext", "txt", "text", "plain"].includes(lang);
}
function isSpecialLang(lang) {
  return lang === "ansi" || isPlainLang(lang);
}
function isNoneTheme(theme) {
  return theme === "none";
}
function isSpecialTheme(theme) {
  return isNoneTheme(theme);
}

function addClassToHast(node, className) {
  if (!className)
    return node;
  node.properties ||= {};
  node.properties.class ||= [];
  if (typeof node.properties.class === "string")
    node.properties.class = node.properties.class.split(/\s+/g);
  if (!Array.isArray(node.properties.class))
    node.properties.class = [];
  const targets = Array.isArray(className) ? className : className.split(/\s+/g);
  for (const c of targets) {
    if (c && !node.properties.class.includes(c))
      node.properties.class.push(c);
  }
  return node;
}

function splitLines(code, preserveEnding = false) {
  if (code.length === 0) {
    return [["", 0]];
  }
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i = 0; i < parts.length; i += 2) {
    const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
    lines.push([line, index]);
    index += parts[i].length;
    index += parts[i + 1]?.length || 0;
  }
  return lines;
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    if (index === code.length) {
      return {
        line: lines.length - 1,
        character: lines[lines.length - 1].length
      };
    }
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length)
        break;
      character -= lineText.length;
      line++;
    }
    return { line, character };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i = 0; i < line; i++)
      index += lines[i].length;
    index += character;
    return index;
  }
  return {
    lines,
    indexToPos,
    posToIndex
  };
}

const DEFAULT_COLOR_LIGHT_DARK = "light-dark()";
const COLOR_KEYS = ["color", "background-color"];

function splitToken(token, offsets) {
  let lastOffset = 0;
  const tokens = [];
  for (const offset of offsets) {
    if (offset > lastOffset) {
      tokens.push({
        ...token,
        content: token.content.slice(lastOffset, offset),
        offset: token.offset + lastOffset
      });
    }
    lastOffset = offset;
  }
  if (lastOffset < token.content.length) {
    tokens.push({
      ...token,
      content: token.content.slice(lastOffset),
      offset: token.offset + lastOffset
    });
  }
  return tokens;
}
function splitTokens(tokens, breakpoints) {
  const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a, b) => a - b);
  if (!sorted.length)
    return tokens;
  return tokens.map((line) => {
    return line.flatMap((token) => {
      const breakpointsInToken = sorted.filter((i) => token.offset < i && i < token.offset + token.content.length).map((i) => i - token.offset).sort((a, b) => a - b);
      if (!breakpointsInToken.length)
        return token;
      return splitToken(token, breakpointsInToken);
    });
  });
}
function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
  const token = {
    content: merged.content,
    explanation: merged.explanation,
    offset: merged.offset
  };
  const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
  const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
  const mergedStyles = {};
  const varKey = (idx, key) => {
    const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
    return cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
  };
  styles.forEach((cur, idx) => {
    for (const key of styleKeys) {
      const value = cur[key] || "inherit";
      if (idx === 0 && defaultColor && COLOR_KEYS.includes(key)) {
        if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && styles.length > 1) {
          const lightIndex = variantsOrder.findIndex((t) => t === "light");
          const darkIndex = variantsOrder.findIndex((t) => t === "dark");
          if (lightIndex === -1 || darkIndex === -1)
            throw new ShikiError$1('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          const lightValue = styles[lightIndex][key] || "inherit";
          const darkValue = styles[darkIndex][key] || "inherit";
          mergedStyles[key] = `light-dark(${lightValue}, ${darkValue})`;
          if (colorsRendering === "css-vars")
            mergedStyles[varKey(idx, key)] = value;
        } else {
          mergedStyles[key] = value;
        }
      } else {
        if (colorsRendering === "css-vars")
          mergedStyles[varKey(idx, key)] = value;
      }
    }
  });
  token.htmlStyle = mergedStyles;
  return token;
}
function getTokenStyleObject(token) {
  const styles = {};
  if (token.color)
    styles.color = token.color;
  if (token.bgColor)
    styles["background-color"] = token.bgColor;
  if (token.fontStyle) {
    if (token.fontStyle & FontStyle.Italic)
      styles["font-style"] = "italic";
    if (token.fontStyle & FontStyle.Bold)
      styles["font-weight"] = "bold";
    const decorations = [];
    if (token.fontStyle & FontStyle.Underline)
      decorations.push("underline");
    if (token.fontStyle & FontStyle.Strikethrough)
      decorations.push("line-through");
    if (decorations.length)
      styles["text-decoration"] = decorations.join(" ");
  }
  return styles;
}
function stringifyTokenStyle(token) {
  if (typeof token === "string")
    return token;
  return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(";");
}

const _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
  _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
  return _grammarStateMap.get(keys);
}
class GrammarState {
  /**
   * Theme to Stack mapping
   */
  _stacks = {};
  lang;
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(lang, themes) {
    return new GrammarState(
      Object.fromEntries(toArray$1(themes).map((theme) => [theme, INITIAL])),
      lang
    );
  }
  constructor(...args) {
    if (args.length === 2) {
      const [stacksMap, lang] = args;
      this.lang = lang;
      this._stacks = stacksMap;
    } else {
      const [stack, lang, theme] = args;
      this.lang = lang;
      this._stacks = { [theme]: stack };
    }
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(theme = this.theme) {
    return this._stacks[theme];
  }
  getScopes(theme = this.theme) {
    return getScopes(this._stacks[theme]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
}
function getScopes(stack) {
  const scopes = [];
  const visited = /* @__PURE__ */ new Set();
  function pushScope(stack2) {
    if (visited.has(stack2))
      return;
    visited.add(stack2);
    const name = stack2?.nameScopesList?.scopeName;
    if (name)
      scopes.push(name);
    if (stack2.parent)
      pushScope(stack2.parent);
  }
  pushScope(stack);
  return scopes;
}
function getGrammarStack(state, theme) {
  if (!(state instanceof GrammarState))
    throw new ShikiError$1("Invalid grammar state");
  return state.getInternalStack(theme);
}

function transformerDecorations() {
  const map = /* @__PURE__ */ new WeakMap();
  function getContext(shiki) {
    if (!map.has(shiki.meta)) {
      let normalizePosition = function(p) {
        if (typeof p === "number") {
          if (p < 0 || p > shiki.source.length)
            throw new ShikiError$1(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
          return {
            ...converter.indexToPos(p),
            offset: p
          };
        } else {
          const line = converter.lines[p.line];
          if (line === void 0)
            throw new ShikiError$1(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
          let character = p.character;
          if (character < 0)
            character = line.length + character;
          if (character < 0 || character > line.length)
            throw new ShikiError$1(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
          return {
            ...p,
            character,
            offset: converter.posToIndex(p.line, character)
          };
        }
      };
      const converter = createPositionConverter(shiki.source);
      const decorations = (shiki.options.decorations || []).map((d) => ({
        ...d,
        start: normalizePosition(d.start),
        end: normalizePosition(d.end)
      }));
      verifyIntersections(decorations);
      map.set(shiki.meta, {
        decorations,
        converter,
        source: shiki.source
      });
    }
    return map.get(shiki.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(tokens) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const breakpoints = ctx.decorations.flatMap((d) => [d.start.offset, d.end.offset]);
      const splitted = splitTokens(tokens, breakpoints);
      return splitted;
    },
    code(codeEl) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const lines = Array.from(codeEl.children).filter((i) => i.type === "element" && i.tagName === "span");
      if (lines.length !== ctx.converter.lines.length)
        throw new ShikiError$1(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
      function applyLineSection(line, start, end, decoration) {
        const lineEl = lines[line];
        let text = "";
        let startIndex = -1;
        let endIndex = -1;
        if (start === 0)
          startIndex = 0;
        if (end === 0)
          endIndex = 0;
        if (end === Number.POSITIVE_INFINITY)
          endIndex = lineEl.children.length;
        if (startIndex === -1 || endIndex === -1) {
          for (let i = 0; i < lineEl.children.length; i++) {
            text += stringify(lineEl.children[i]);
            if (startIndex === -1 && text.length === start)
              startIndex = i + 1;
            if (endIndex === -1 && text.length === end)
              endIndex = i + 1;
          }
        }
        if (startIndex === -1)
          throw new ShikiError$1(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
        if (endIndex === -1)
          throw new ShikiError$1(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
        const children = lineEl.children.slice(startIndex, endIndex);
        if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
          applyDecoration(lineEl, decoration, "line");
        } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
          applyDecoration(children[0], decoration, "token");
        } else {
          const wrapper = {
            type: "element",
            tagName: "span",
            properties: {},
            children
          };
          applyDecoration(wrapper, decoration, "wrapper");
          lineEl.children.splice(startIndex, children.length, wrapper);
        }
      }
      function applyLine(line, decoration) {
        lines[line] = applyDecoration(lines[line], decoration, "line");
      }
      function applyDecoration(el, decoration, type) {
        const properties = decoration.properties || {};
        const transform = decoration.transform || ((i) => i);
        el.tagName = decoration.tagName || "span";
        el.properties = {
          ...el.properties,
          ...properties,
          class: el.properties.class
        };
        if (decoration.properties?.class)
          addClassToHast(el, decoration.properties.class);
        el = transform(el, type) || el;
        return el;
      }
      const lineApplies = [];
      const sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset || a.end.offset - b.end.offset);
      for (const decoration of sorted) {
        const { start, end } = decoration;
        if (start.line === end.line) {
          applyLineSection(start.line, start.character, end.character, decoration);
        } else if (start.line < end.line) {
          applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
          for (let i = start.line + 1; i < end.line; i++)
            lineApplies.unshift(() => applyLine(i, decoration));
          applyLineSection(end.line, 0, end.character, decoration);
        }
      }
      lineApplies.forEach((i) => i());
    }
  };
}
function verifyIntersections(items) {
  for (let i = 0; i < items.length; i++) {
    const foo = items[i];
    if (foo.start.offset > foo.end.offset)
      throw new ShikiError$1(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
    for (let j = i + 1; j < items.length; j++) {
      const bar = items[j];
      const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
      const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
      const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
      const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
      if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
        if (isFooHasBarStart && isFooHasBarEnd)
          continue;
        if (isBarHasFooStart && isBarHasFooEnd)
          continue;
        if (isBarHasFooStart && foo.start.offset === foo.end.offset)
          continue;
        if (isFooHasBarEnd && bar.start.offset === bar.end.offset)
          continue;
        throw new ShikiError$1(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
      }
    }
  }
}
function stringify(el) {
  if (el.type === "text")
    return el.value;
  if (el.type === "element")
    return el.children.map(stringify).join("");
  return "";
}

const builtInTransformers = [
  /* @__PURE__ */ transformerDecorations()
];
function getTransformers(options) {
  const transformers = sortTransformersByEnforcement(options.transformers || []);
  return [
    ...transformers.pre,
    ...transformers.normal,
    ...transformers.post,
    ...builtInTransformers
  ];
}
function sortTransformersByEnforcement(transformers) {
  const pre = [];
  const post = [];
  const normal = [];
  for (const transformer of transformers) {
    switch (transformer.enforce) {
      case "pre":
        pre.push(transformer);
        break;
      case "post":
        post.push(transformer);
        break;
      default:
        normal.push(transformer);
    }
  }
  return { pre, post, normal };
}

// src/colors.ts
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];

// src/decorations.ts
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};

// src/parser.ts
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B", position);
  if (nextEscape !== -1) {
    if (value[nextEscape + 1] === "[") {
      const nextClose = value.indexOf("m", nextEscape);
      if (nextClose !== -1) {
        return {
          sequence: value.substring(nextEscape + 2, nextClose).split(";"),
          startPosition: nextEscape,
          position: nextClose + 1
        };
      }
    }
  }
  return {
    position: value.length
  };
}
function parseColor(sequence) {
  const colorMode = sequence.shift();
  if (colorMode === "2") {
    const rgb = sequence.splice(0, 3).map((x) => Number.parseInt(x));
    if (rgb.length !== 3 || rgb.some((x) => Number.isNaN(x)))
      return;
    return {
      type: "rgb",
      rgb
    };
  } else if (colorMode === "5") {
    const index = sequence.shift();
    if (index) {
      return { type: "table", index: Number(index) };
    }
  }
}
function parseSequence(sequence) {
  const commands = [];
  while (sequence.length > 0) {
    const code = sequence.shift();
    if (!code)
      continue;
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
        if (decoration === "dim") {
          commands.push({
            type: "resetDecoration",
            value: "bold"
          });
        }
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt === 53) {
      commands.push({
        type: "setDecoration",
        value: "overline"
      });
    } else if (codeInt === 55) {
      commands.push({
        type: "resetDecoration",
        value: "overline"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text.length > 0) {
          tokens.push({
            value: text,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}

// src/palette.ts
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i = 0; i < namedColors.length; i++) {
      colorTable.push(namedColor(namedColors[i]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r = 0; r < 6; r++) {
      for (let g = 0; g < 6; g++) {
        for (let b = 0; b < 6; b++) {
          colorTable.push(rgbColor([levels[r], levels[g], levels[b]]));
        }
      }
    }
    let level = 8;
    for (let i = 0; i < 24; i++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}

const defaultAnsiColors = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function tokenizeAnsiWithTheme(theme, fileContents, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const lines = splitLines(fileContents);
  const ansiPalette = Object.fromEntries(
    namedColors.map((name) => {
      const key = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
      const themeColor = theme.colors?.[key];
      return [name, themeColor || defaultAnsiColors[name]];
    })
  );
  const colorPalette = createColorPalette(ansiPalette);
  const parser = createAnsiSequenceParser();
  return lines.map(
    (line) => parser.parse(line[0]).map((token) => {
      let color;
      let bgColor;
      if (token.decorations.has("reverse")) {
        color = token.background ? colorPalette.value(token.background) : theme.bg;
        bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
      } else {
        color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
        bgColor = token.background ? colorPalette.value(token.background) : void 0;
      }
      color = applyColorReplacements(color, colorReplacements);
      bgColor = applyColorReplacements(bgColor, colorReplacements);
      if (token.decorations.has("dim"))
        color = dimColor(color);
      let fontStyle = FontStyle.None;
      if (token.decorations.has("bold"))
        fontStyle |= FontStyle.Bold;
      if (token.decorations.has("italic"))
        fontStyle |= FontStyle.Italic;
      if (token.decorations.has("underline"))
        fontStyle |= FontStyle.Underline;
      if (token.decorations.has("strikethrough"))
        fontStyle |= FontStyle.Strikethrough;
      return {
        content: token.value,
        offset: line[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color,
        bgColor,
        fontStyle
      };
    })
  );
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 8) {
      const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${hex.slice(0, 6)}${alpha}`;
    } else if (hex.length === 6) {
      return `#${hex}80`;
    } else if (hex.length === 4) {
      const r = hex[0];
      const g = hex[1];
      const b = hex[2];
      const a = hex[3];
      const alpha = Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0");
      return `#${r}${r}${g}${g}${b}${b}${alpha}`;
    } else if (hex.length === 3) {
      const r = hex[0];
      const g = hex[1];
      const b = hex[2];
      return `#${r}${r}${g}${g}${b}${b}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  if (cssVarMatch)
    return `var(${cssVarMatch[1]}-dim)`;
  return color;
}

function codeToTokensBase(internal, code, options = {}) {
  const {
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  const lang = internal.resolveLangAlias(options.lang || "text");
  if (isPlainLang(lang) || isNoneTheme(themeName))
    return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
  const { theme, colorMap } = internal.setTheme(themeName);
  if (lang === "ansi")
    return tokenizeAnsiWithTheme(theme, code, options);
  const _grammar = internal.getLanguage(options.lang || "text");
  if (options.grammarState) {
    if (options.grammarState.lang !== _grammar.name) {
      throw new ShikiError$1(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
    }
    if (!options.grammarState.themes.includes(theme.name)) {
      throw new ShikiError$1(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
    }
  }
  return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
  if (args.length === 2) {
    return getLastGrammarStateFromMap(args[1]);
  }
  const [internal, code, options = {}] = args;
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    throw new ShikiError$1("Plain language does not have grammar state");
  if (lang === "ansi")
    throw new ShikiError$1("ANSI language does not have grammar state");
  const { theme, colorMap } = internal.setTheme(themeName);
  const _grammar = internal.getLanguage(lang);
  return new GrammarState(
    _tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack,
    _grammar.name,
    theme.name
  );
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
  const grammarState = new GrammarState(
    result.stateStack,
    grammar.name,
    theme.name
  );
  setLastGrammarStateToMap(result.tokens, grammarState);
  return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const {
    tokenizeMaxLineLength = 0,
    tokenizeTimeLimit = 500
  } = options;
  const lines = splitLines(code);
  let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(
    options.grammarContextCode,
    grammar,
    theme,
    colorMap,
    {
      ...options,
      grammarState: void 0,
      grammarContextCode: void 0
    }
  ).stateStack : INITIAL;
  let actual = [];
  const final = [];
  for (let i = 0, len = lines.length; i < len; i++) {
    const [line, lineOffset] = lines[i];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
      actual = [];
      final.push([{
        content: line,
        offset: lineOffset,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let resultWithScopes;
    let tokensWithScopes;
    let tokensWithScopesIndex;
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
      tokensWithScopes = resultWithScopes.tokens;
      tokensWithScopesIndex = 0;
    }
    const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
    const tokensLength = result.tokens.length / 2;
    for (let j = 0; j < tokensLength; j++) {
      const startIndex = result.tokens[2 * j];
      const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex)
        continue;
      const metadata = result.tokens[2 * j + 1];
      const color = applyColorReplacements(
        colorMap[EncodedTokenMetadata.getForeground(metadata)],
        colorReplacements
      );
      const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
      const token = {
        content: line.substring(startIndex, nextStartIndex),
        offset: lineOffset + startIndex,
        color,
        fontStyle
      };
      if (options.includeExplanation) {
        const themeSettingsSelectors = [];
        if (options.includeExplanation !== "scopeName") {
          for (const setting of theme.settings) {
            let selectors;
            switch (typeof setting.scope) {
              case "string":
                selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                break;
              case "object":
                selectors = setting.scope;
                break;
              default:
                continue;
            }
            themeSettingsSelectors.push({
              settings: setting,
              selectors: selectors.map((selector) => selector.split(/ /))
            });
          }
        }
        token.explanation = [];
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          const tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          );
          offset += tokenWithScopesText.length;
          token.explanation.push({
            content: tokenWithScopesText,
            scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(
              tokenWithScopes.scopes
            ) : explainThemeScopesFull(
              themeSettingsSelectors,
              tokenWithScopes.scopes
            )
          });
          tokensWithScopesIndex += 1;
        }
      }
      actual.push(token);
    }
    final.push(actual);
    actual = [];
    stateStack = result.ruleStack;
  }
  return {
    tokens: final,
    stateStack
  };
}
function explainThemeScopesNameOnly(scopes) {
  return scopes.map((scope) => ({ scopeName: scope }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
  const result = [];
  for (let i = 0, len = scopes.length; i < len; i++) {
    const scope = scopes[i];
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i))
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
  if (!matchesOne(selectors[selectors.length - 1], scope))
    return false;
  let selectorParentIndex = selectors.length - 2;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
      selectorParentIndex -= 1;
    parentIndex -= 1;
  }
  if (selectorParentIndex === -1)
    return true;
  return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
  const result = [];
  for (const { selectors, settings } of themeSettingsSelectors) {
    for (const selectorPieces of selectors) {
      if (matches(selectorPieces, scope, parentScopes)) {
        result.push(settings);
        break;
      }
    }
  }
  return result;
}

function codeToTokensWithThemes(internal, code, options) {
  const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] }));
  const themedTokens = themes.map((t) => {
    const tokens2 = codeToTokensBase(internal, code, {
      ...options,
      theme: t.theme
    });
    const state = getLastGrammarStateFromMap(tokens2);
    const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
    return {
      tokens: tokens2,
      state,
      theme
    };
  });
  const tokens = syncThemesTokenization(
    ...themedTokens.map((i) => i.tokens)
  );
  const mergedTokens = tokens[0].map(
    (line, lineIdx) => line.map((_token, tokenIdx) => {
      const mergedToken = {
        content: _token.content,
        variants: {},
        offset: _token.offset
      };
      if ("includeExplanation" in options && options.includeExplanation) {
        mergedToken.explanation = _token.explanation;
      }
      tokens.forEach((t, themeIdx) => {
        const {
          content: _,
          explanation: __,
          offset: ___,
          ...styles
        } = t[lineIdx][tokenIdx];
        mergedToken.variants[themes[themeIdx].color] = styles;
      });
      return mergedToken;
    })
  );
  const mergedGrammarState = themedTokens[0].state ? new GrammarState(
    Object.fromEntries(themedTokens.map((s) => [s.theme, s.state?.getInternalStack(s.theme)])),
    themedTokens[0].state.lang
  ) : void 0;
  if (mergedGrammarState)
    setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
  return mergedTokens;
}
function syncThemesTokenization(...themes) {
  const outThemes = themes.map(() => []);
  const count = themes.length;
  for (let i = 0; i < themes[0].length; i++) {
    const lines = themes.map((t) => t[i]);
    const outLines = outThemes.map(() => []);
    outThemes.forEach((t, i2) => t.push(outLines[i2]));
    const indexes = lines.map(() => 0);
    const current = lines.map((l) => l[0]);
    while (current.every((t) => t)) {
      const minLength = Math.min(...current.map((t) => t.content.length));
      for (let n = 0; n < count; n++) {
        const token = current[n];
        if (token.content.length === minLength) {
          outLines[n].push(token);
          indexes[n] += 1;
          current[n] = lines[n][indexes[n]];
        } else {
          outLines[n].push({
            ...token,
            content: token.content.slice(0, minLength)
          });
          current[n] = {
            ...token,
            content: token.content.slice(minLength),
            offset: token.offset + minLength
          };
        }
      }
    }
  }
  return outThemes;
}

function codeToTokens(internal, code, options) {
  let bg;
  let fg;
  let tokens;
  let themeName;
  let rootStyle;
  let grammarState;
  if ("themes" in options) {
    const {
      defaultColor = "light",
      cssVariablePrefix = "--shiki-",
      colorsRendering = "css-vars"
    } = options;
    const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] })).sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
    if (themes.length === 0)
      throw new ShikiError$1("`themes` option must not be empty");
    const themeTokens = codeToTokensWithThemes(
      internal,
      code,
      options
    );
    grammarState = getLastGrammarStateFromMap(themeTokens);
    if (defaultColor && DEFAULT_COLOR_LIGHT_DARK !== defaultColor && !themes.find((t) => t.color === defaultColor))
      throw new ShikiError$1(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    const themeRegs = themes.map((t) => internal.getTheme(t.theme));
    const themesOrder = themes.map((t) => t.color);
    tokens = themeTokens.map((line) => line.map((token) => flatTokenVariants(token, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
    if (grammarState)
      setLastGrammarStateToMap(tokens, grammarState);
    const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
    fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
    bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
    themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
    rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
  } else if ("theme" in options) {
    const colorReplacements = resolveColorReplacements(options.theme, options);
    tokens = codeToTokensBase(
      internal,
      code,
      options
    );
    const _theme = internal.getTheme(options.theme);
    bg = applyColorReplacements(_theme.bg, colorReplacements);
    fg = applyColorReplacements(_theme.fg, colorReplacements);
    themeName = _theme.name;
    grammarState = getLastGrammarStateFromMap(tokens);
  } else {
    throw new ShikiError$1("Invalid options, either `theme` or `themes` must be provided");
  }
  return {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  };
}
function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
  return themes.map((t, idx) => {
    const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
    const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
    if (idx === 0 && defaultColor) {
      if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && themes.length > 1) {
        const lightIndex = themes.findIndex((t2) => t2.color === "light");
        const darkIndex = themes.findIndex((t2) => t2.color === "dark");
        if (lightIndex === -1 || darkIndex === -1)
          throw new ShikiError$1('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        const lightValue = applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit";
        const darkValue = applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit";
        return `light-dark(${lightValue}, ${darkValue});${cssVar}`;
      }
      return value;
    }
    if (colorsRendering === "css-vars") {
      return cssVar;
    }
    return null;
  }).filter((i) => !!i).join(";");
}

function codeToHast(internal, code, options, transformerContext = {
  meta: {},
  options,
  codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
  codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
}) {
  let input = code;
  for (const transformer of getTransformers(options))
    input = transformer.preprocess?.call(transformerContext, input, options) || input;
  let {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  } = codeToTokens(internal, input, options);
  const {
    mergeWhitespaces = true,
    mergeSameStyleTokens = false
  } = options;
  if (mergeWhitespaces === true)
    tokens = mergeWhitespaceTokens(tokens);
  else if (mergeWhitespaces === "never")
    tokens = splitWhitespaceTokens(tokens);
  if (mergeSameStyleTokens) {
    tokens = mergeAdjacentStyledTokens(tokens);
  }
  const contextSource = {
    ...transformerContext,
    get source() {
      return input;
    }
  };
  for (const transformer of getTransformers(options))
    tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
  return tokensToHast(
    tokens,
    {
      ...options,
      fg,
      bg,
      themeName,
      rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
    },
    contextSource,
    grammarState
  );
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
  const transformers = getTransformers(options);
  const lines = [];
  const root = {
    type: "root",
    children: []
  };
  const {
    structure = "classic",
    tabindex = "0"
  } = options;
  const properties = {
    class: `shiki ${options.themeName || ""}`
  };
  if (options.rootStyle !== false) {
    if (options.rootStyle != null)
      properties.style = options.rootStyle;
    else
      properties.style = `background-color:${options.bg};color:${options.fg}`;
  }
  if (tabindex !== false && tabindex != null)
    properties.tabindex = tabindex.toString();
  for (const [key, value] of Object.entries(options.meta || {})) {
    if (!key.startsWith("_"))
      properties[key] = value;
  }
  let preNode = {
    type: "element",
    tagName: "pre",
    properties,
    children: [],
    data: options.data
  };
  let codeNode = {
    type: "element",
    tagName: "code",
    properties: {},
    children: lines
  };
  const lineNodes = [];
  const context = {
    ...transformerContext,
    structure,
    addClassToHast,
    get source() {
      return transformerContext.source;
    },
    get tokens() {
      return tokens;
    },
    get options() {
      return options;
    },
    get root() {
      return root;
    },
    get pre() {
      return preNode;
    },
    get code() {
      return codeNode;
    },
    get lines() {
      return lineNodes;
    }
  };
  tokens.forEach((line, idx) => {
    if (idx) {
      if (structure === "inline")
        root.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      else if (structure === "classic")
        lines.push({ type: "text", value: "\n" });
    }
    let lineNode = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    let col = 0;
    for (const token of line) {
      let tokenNode = {
        type: "element",
        tagName: "span",
        properties: {
          ...token.htmlAttrs
        },
        children: [{ type: "text", value: token.content }]
      };
      const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      if (style)
        tokenNode.properties.style = style;
      for (const transformer of transformers)
        tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token) || tokenNode;
      if (structure === "inline")
        root.children.push(tokenNode);
      else if (structure === "classic")
        lineNode.children.push(tokenNode);
      col += token.content.length;
    }
    if (structure === "classic") {
      for (const transformer of transformers)
        lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
      lineNodes.push(lineNode);
      lines.push(lineNode);
    } else if (structure === "inline") {
      lineNodes.push(lineNode);
    }
  });
  if (structure === "classic") {
    for (const transformer of transformers)
      codeNode = transformer?.code?.call(context, codeNode) || codeNode;
    preNode.children.push(codeNode);
    for (const transformer of transformers)
      preNode = transformer?.pre?.call(context, preNode) || preNode;
    root.children.push(preNode);
  } else if (structure === "inline") {
    const syntheticLines = [];
    let currentLine = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    for (const child of root.children) {
      if (child.type === "element" && child.tagName === "br") {
        syntheticLines.push(currentLine);
        currentLine = {
          type: "element",
          tagName: "span",
          properties: { class: "line" },
          children: []
        };
      } else if (child.type === "element" || child.type === "text") {
        currentLine.children.push(child);
      }
    }
    syntheticLines.push(currentLine);
    const syntheticCode = {
      type: "element",
      tagName: "code",
      properties: {},
      children: syntheticLines
    };
    let transformedCode = syntheticCode;
    for (const transformer of transformers)
      transformedCode = transformer?.code?.call(context, transformedCode) || transformedCode;
    root.children = [];
    for (let i = 0; i < transformedCode.children.length; i++) {
      if (i > 0)
        root.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      const line = transformedCode.children[i];
      if (line.type === "element")
        root.children.push(...line.children);
    }
  }
  let result = root;
  for (const transformer of transformers)
    result = transformer?.root?.call(context, result) || result;
  if (grammarState)
    setLastGrammarStateToMap(result, grammarState);
  return result;
}
function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    let carryOnContent = "";
    let firstOffset;
    line.forEach((token, idx) => {
      const isDecorated = token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough);
      const couldMerge = !isDecorated;
      if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
        if (firstOffset === void 0)
          firstOffset = token.offset;
        carryOnContent += token.content;
      } else {
        if (carryOnContent) {
          if (couldMerge) {
            newLine.push({
              ...token,
              offset: firstOffset,
              content: carryOnContent + token.content
            });
          } else {
            newLine.push(
              {
                content: carryOnContent,
                offset: firstOffset
              },
              token
            );
          }
          firstOffset = void 0;
          carryOnContent = "";
        } else {
          newLine.push(token);
        }
      }
    });
    return newLine;
  });
}
function splitWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    return line.flatMap((token) => {
      if (token.content.match(/^\s+$/))
        return token;
      const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match)
        return token;
      const [, leading, content, trailing] = match;
      if (!leading && !trailing)
        return token;
      const expanded = [{
        ...token,
        offset: token.offset + leading.length,
        content
      }];
      if (leading) {
        expanded.unshift({
          content: leading,
          offset: token.offset
        });
      }
      if (trailing) {
        expanded.push({
          content: trailing,
          offset: token.offset + leading.length + content.length
        });
      }
      return expanded;
    });
  });
}
function mergeAdjacentStyledTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    for (const token of line) {
      if (newLine.length === 0) {
        newLine.push({ ...token });
        continue;
      }
      const prevToken = newLine[newLine.length - 1];
      const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
      const currentStyle = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & FontStyle.Underline || prevToken.fontStyle & FontStyle.Strikethrough);
      const isDecorated = token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough);
      if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) {
        prevToken.content += token.content;
      } else {
        newLine.push({ ...token });
      }
    }
    return newLine;
  });
}

const hastToHtml = toHtml;
function codeToHtml(internal, code, options) {
  const context = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  };
  let result = hastToHtml(codeToHast(internal, code, options, context));
  for (const transformer of getTransformers(options))
    result = transformer.postprocess?.call(context, result, options) || result;
  return result;
}

const VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
const VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
const RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
  if (rawTheme?.[RESOLVED_KEY])
    return rawTheme;
  const theme = {
    ...rawTheme
  };
  if (theme.tokenColors && !theme.settings) {
    theme.settings = theme.tokenColors;
    delete theme.tokenColors;
  }
  theme.type ||= "dark";
  theme.colorReplacements = { ...theme.colorReplacements };
  theme.settings ||= [];
  let { bg, fg } = theme;
  if (!bg || !fg) {
    const globalSetting = theme.settings ? theme.settings.find((s) => !s.name && !s.scope) : void 0;
    if (globalSetting?.settings?.foreground)
      fg = globalSetting.settings.foreground;
    if (globalSetting?.settings?.background)
      bg = globalSetting.settings.background;
    if (!fg && theme?.colors?.["editor.foreground"])
      fg = theme.colors["editor.foreground"];
    if (!bg && theme?.colors?.["editor.background"])
      bg = theme.colors["editor.background"];
    if (!fg)
      fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    if (!bg)
      bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    theme.fg = fg;
    theme.bg = bg;
  }
  if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
    theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg
      }
    });
  }
  let replacementCount = 0;
  const replacementMap = /* @__PURE__ */ new Map();
  function getReplacementColor(value) {
    if (replacementMap.has(value))
      return replacementMap.get(value);
    replacementCount += 1;
    const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
    if (theme.colorReplacements?.[`#${hex}`])
      return getReplacementColor(value);
    replacementMap.set(value, hex);
    return hex;
  }
  theme.settings = theme.settings.map((setting) => {
    const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
    const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
    if (!replaceFg && !replaceBg)
      return setting;
    const clone = {
      ...setting,
      settings: {
        ...setting.settings
      }
    };
    if (replaceFg) {
      const replacement = getReplacementColor(setting.settings.foreground);
      theme.colorReplacements[replacement] = setting.settings.foreground;
      clone.settings.foreground = replacement;
    }
    if (replaceBg) {
      const replacement = getReplacementColor(setting.settings.background);
      theme.colorReplacements[replacement] = setting.settings.background;
      clone.settings.background = replacement;
    }
    return clone;
  });
  for (const key of Object.keys(theme.colors || {})) {
    if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
      if (!theme.colors[key]?.startsWith("#")) {
        const replacement = getReplacementColor(theme.colors[key]);
        theme.colorReplacements[replacement] = theme.colors[key];
        theme.colors[key] = replacement;
      }
    }
  }
  Object.defineProperty(theme, RESOLVED_KEY, {
    enumerable: false,
    writable: false,
    value: true
  });
  return theme;
}

async function resolveLangs(langs) {
  return Array.from(new Set((await Promise.all(
    langs.filter((l) => !isSpecialLang(l)).map(async (lang) => await normalizeGetter(lang).then((r) => Array.isArray(r) ? r : [r]))
  )).flat()));
}
async function resolveThemes(themes) {
  const resolved = await Promise.all(
    themes.map(
      async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))
    )
  );
  return resolved.filter((i) => !!i);
}

let _emitDeprecation = 3;
function warnDeprecated(message, version = 3) {
  if (version > _emitDeprecation)
    return;
  {
    console.trace(`[SHIKI DEPRECATE]: ${message}`);
  }
}

class ShikiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
}

function resolveLangAlias(name, alias) {
  if (!alias)
    return name;
  if (alias[name]) {
    const resolved = /* @__PURE__ */ new Set([name]);
    while (alias[name]) {
      name = alias[name];
      if (resolved.has(name))
        throw new ShikiError(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
      resolved.add(name);
    }
  }
  return name;
}

class Registry extends Registry$1 {
  constructor(_resolver, _themes, _langs, _alias = {}) {
    super(_resolver);
    this._resolver = _resolver;
    this._themes = _themes;
    this._langs = _langs;
    this._alias = _alias;
    this._themes.map((t) => this.loadTheme(t));
    this.loadLanguages(this._langs);
  }
  _resolvedThemes = /* @__PURE__ */ new Map();
  _resolvedGrammars = /* @__PURE__ */ new Map();
  _langMap = /* @__PURE__ */ new Map();
  _langGraph = /* @__PURE__ */ new Map();
  _textmateThemeCache = /* @__PURE__ */ new WeakMap();
  _loadedThemesCache = null;
  _loadedLanguagesCache = null;
  getTheme(theme) {
    if (typeof theme === "string")
      return this._resolvedThemes.get(theme);
    else
      return this.loadTheme(theme);
  }
  loadTheme(theme) {
    const _theme = normalizeTheme(theme);
    if (_theme.name) {
      this._resolvedThemes.set(_theme.name, _theme);
      this._loadedThemesCache = null;
    }
    return _theme;
  }
  getLoadedThemes() {
    if (!this._loadedThemesCache)
      this._loadedThemesCache = [...this._resolvedThemes.keys()];
    return this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(theme) {
    let textmateTheme = this._textmateThemeCache.get(theme);
    if (!textmateTheme) {
      textmateTheme = Theme.createFromRawTheme(theme);
      this._textmateThemeCache.set(theme, textmateTheme);
    }
    this._syncRegistry.setTheme(textmateTheme);
  }
  getGrammar(name) {
    name = resolveLangAlias(name, this._alias);
    return this._resolvedGrammars.get(name);
  }
  loadLanguage(lang) {
    if (this.getGrammar(lang.name))
      return;
    const embeddedLazilyBy = new Set(
      [...this._langMap.values()].filter((i) => i.embeddedLangsLazy?.includes(lang.name))
    );
    this._resolver.addLanguage(lang);
    const grammarConfig = {
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
    const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    g.name = lang.name;
    this._resolvedGrammars.set(lang.name, g);
    if (lang.aliases) {
      lang.aliases.forEach((alias) => {
        this._alias[alias] = lang.name;
      });
    }
    this._loadedLanguagesCache = null;
    if (embeddedLazilyBy.size) {
      for (const e of embeddedLazilyBy) {
        this._resolvedGrammars.delete(e.name);
        this._loadedLanguagesCache = null;
        this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
        this._syncRegistry?._grammars?.delete(e.scopeName);
        this.loadLanguage(this._langMap.get(e.name));
      }
    }
  }
  dispose() {
    super.dispose();
    this._resolvedThemes.clear();
    this._resolvedGrammars.clear();
    this._langMap.clear();
    this._langGraph.clear();
    this._loadedThemesCache = null;
  }
  loadLanguages(langs) {
    for (const lang of langs)
      this.resolveEmbeddedLanguages(lang);
    const langsGraphArray = Array.from(this._langGraph.entries());
    const missingLangs = langsGraphArray.filter(([_, lang]) => !lang);
    if (missingLangs.length) {
      const dependents = langsGraphArray.filter(([_, lang]) => {
        if (!lang)
          return false;
        const embedded = lang.embeddedLanguages || lang.embeddedLangs;
        return embedded?.some((l) => missingLangs.map(([name]) => name).includes(l));
      }).filter((lang) => !missingLangs.includes(lang));
      throw new ShikiError(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
    }
    for (const [_, lang] of langsGraphArray)
      this._resolver.addLanguage(lang);
    for (const [_, lang] of langsGraphArray)
      this.loadLanguage(lang);
  }
  getLoadedLanguages() {
    if (!this._loadedLanguagesCache) {
      this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
      ];
    }
    return this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(lang) {
    this._langMap.set(lang.name, lang);
    this._langGraph.set(lang.name, lang);
    const embedded = lang.embeddedLanguages ?? lang.embeddedLangs;
    if (embedded) {
      for (const embeddedLang of embedded)
        this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
    }
  }
}

class Resolver {
  _langs = /* @__PURE__ */ new Map();
  _scopeToLang = /* @__PURE__ */ new Map();
  _injections = /* @__PURE__ */ new Map();
  _onigLib;
  constructor(engine, langs) {
    this._onigLib = {
      createOnigScanner: (patterns) => engine.createScanner(patterns),
      createOnigString: (s) => engine.createString(s)
    };
    langs.forEach((i) => this.addLanguage(i));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(langIdOrAlias) {
    return this._langs.get(langIdOrAlias);
  }
  loadGrammar(scopeName) {
    return this._scopeToLang.get(scopeName);
  }
  addLanguage(l) {
    this._langs.set(l.name, l);
    if (l.aliases) {
      l.aliases.forEach((a) => {
        this._langs.set(a, l);
      });
    }
    this._scopeToLang.set(l.scopeName, l);
    if (l.injectTo) {
      l.injectTo.forEach((i) => {
        if (!this._injections.get(i))
          this._injections.set(i, []);
        this._injections.get(i).push(l.scopeName);
      });
    }
  }
  getInjections(scopeName) {
    const scopeParts = scopeName.split(".");
    let injections = [];
    for (let i = 1; i <= scopeParts.length; i++) {
      const subScopeName = scopeParts.slice(0, i).join(".");
      injections = [...injections, ...this._injections.get(subScopeName) || []];
    }
    return injections;
  }
}

let instancesCount = 0;
function createShikiInternalSync(options) {
  instancesCount += 1;
  if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
    console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let isDisposed = false;
  if (!options.engine)
    throw new ShikiError("`engine` option is required for synchronous mode");
  const langs = (options.langs || []).flat(1);
  const themes = (options.themes || []).flat(1).map(normalizeTheme);
  const resolver = new Resolver(options.engine, langs);
  const _registry = new Registry(resolver, themes, langs, options.langAlias);
  let _lastTheme;
  function resolveLangAlias$1(name) {
    return resolveLangAlias(name, options.langAlias);
  }
  function getLanguage(name) {
    ensureNotDisposed();
    const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
    if (!_lang)
      throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
    return _lang;
  }
  function getTheme(name) {
    if (name === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    ensureNotDisposed();
    const _theme = _registry.getTheme(name);
    if (!_theme)
      throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
    return _theme;
  }
  function setTheme(name) {
    ensureNotDisposed();
    const theme = getTheme(name);
    if (_lastTheme !== name) {
      _registry.setTheme(theme);
      _lastTheme = name;
    }
    const colorMap = _registry.getColorMap();
    return {
      theme,
      colorMap
    };
  }
  function getLoadedThemes() {
    ensureNotDisposed();
    return _registry.getLoadedThemes();
  }
  function getLoadedLanguages() {
    ensureNotDisposed();
    return _registry.getLoadedLanguages();
  }
  function loadLanguageSync(...langs2) {
    ensureNotDisposed();
    _registry.loadLanguages(langs2.flat(1));
  }
  async function loadLanguage(...langs2) {
    return loadLanguageSync(await resolveLangs(langs2));
  }
  function loadThemeSync(...themes2) {
    ensureNotDisposed();
    for (const theme of themes2.flat(1)) {
      _registry.loadTheme(theme);
    }
  }
  async function loadTheme(...themes2) {
    ensureNotDisposed();
    return loadThemeSync(await resolveThemes(themes2));
  }
  function ensureNotDisposed() {
    if (isDisposed)
      throw new ShikiError("Shiki instance has been disposed");
  }
  function dispose() {
    if (isDisposed)
      return;
    isDisposed = true;
    _registry.dispose();
    instancesCount -= 1;
  }
  return {
    setTheme,
    getTheme,
    getLanguage,
    getLoadedThemes,
    getLoadedLanguages,
    resolveLangAlias: resolveLangAlias$1,
    loadLanguage,
    loadLanguageSync,
    loadTheme,
    loadThemeSync,
    dispose,
    [Symbol.dispose]: dispose
  };
}

async function createShikiInternal(options) {
  if (!options.engine) {
    warnDeprecated("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  }
  const [
    themes,
    langs,
    engine
  ] = await Promise.all([
    resolveThemes(options.themes || []),
    resolveLangs(options.langs || []),
    options.engine
  ]);
  return createShikiInternalSync({
    ...options,
    themes,
    langs,
    engine
  });
}

async function createHighlighterCore(options) {
  const internal = await createShikiInternal(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
    codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
    codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
    codeToHast: (code, options2) => codeToHast(internal, code, options2),
    codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...internal,
    getInternalContext: () => internal
  };
}

const MAX = 4294967295;
class JavaScriptScanner {
  constructor(patterns, options = {}) {
    this.patterns = patterns;
    this.options = options;
    const {
      forgiving = false,
      cache,
      regexConstructor
    } = options;
    if (!regexConstructor) {
      throw new Error("Option `regexConstructor` is not provided");
    }
    this.regexps = patterns.map((p) => {
      if (typeof p !== "string") {
        return p;
      }
      const cached = cache?.get(p);
      if (cached) {
        if (cached instanceof RegExp) {
          return cached;
        }
        if (forgiving)
          return null;
        throw cached;
      }
      try {
        const regex = regexConstructor(p);
        cache?.set(p, regex);
        return regex;
      } catch (e) {
        cache?.set(p, e);
        if (forgiving)
          return null;
        throw e;
      }
    });
  }
  regexps;
  findNextMatchSync(string, startPosition, _options) {
    const str = typeof string === "string" ? string : string.content;
    const pending = [];
    function toResult(index, match, offset = 0) {
      return {
        index,
        captureIndices: match.indices.map((indice) => {
          if (indice == null) {
            return {
              start: MAX,
              end: MAX,
              length: 0
            };
          }
          return {
            start: indice[0] + offset,
            end: indice[1] + offset,
            length: indice[1] - indice[0]
          };
        })
      };
    }
    for (let i = 0; i < this.regexps.length; i++) {
      const regexp = this.regexps[i];
      if (!regexp)
        continue;
      try {
        regexp.lastIndex = startPosition;
        const match = regexp.exec(str);
        if (!match)
          continue;
        if (match.index === startPosition) {
          return toResult(i, match, 0);
        }
        pending.push([i, match, 0]);
      } catch (e) {
        if (this.options.forgiving)
          continue;
        throw e;
      }
    }
    if (pending.length) {
      const minIndex = Math.min(...pending.map((m) => m[1].index));
      for (const [i, match, offset] of pending) {
        if (match.index === minIndex) {
          return toResult(i, match, offset);
        }
      }
    }
    return null;
  }
}

function defaultJavaScriptRegexConstructor(pattern, options) {
  return toRegExp(
    pattern,
    {
      global: true,
      hasIndices: true,
      // This has no benefit for the standard JS engine, but it avoids a perf penalty for
      // precompiled grammars when constructing extremely long patterns that aren't always used
      lazyCompileLength: 3e3,
      rules: {
        // Needed since TextMate grammars merge backrefs across patterns
        allowOrphanBackrefs: true,
        // Improves search performance for generated regexes
        asciiWordBoundaries: true,
        // Follow `vscode-oniguruma` which enables this Oniguruma option by default
        captureGroup: true,
        // Oniguruma uses depth limit `20`; lowered here to keep regexes shorter and maybe
        // sometimes faster, but can be increased if issues reported due to low limit
        recursionLimit: 5,
        // Oniguruma option for `^`->`\A`, `$`->`\Z`; improves search performance without any
        // change in meaning since TM grammars search line by line
        singleline: true
      },
      ...options
    }
  );
}
function createJavaScriptRegexEngine(options = {}) {
  const _options = Object.assign(
    {
      target: "auto",
      cache: /* @__PURE__ */ new Map()
    },
    options
  );
  _options.regexConstructor ||= (pattern) => defaultJavaScriptRegexConstructor(pattern, { target: _options.target });
  return {
    createScanner(patterns) {
      return new JavaScriptScanner(patterns, _options);
    },
    createString(s) {
      return {
        content: s
      };
    }
  };
}

let highlighter = null;
async function getShikiHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighterCore({
      themes: [import('../_/github-dark.mjs'), import('../_/github-light.mjs')],
      langs: [
        // Core web languages
        import('../_/javascript.mjs'),
        import('../_/typescript.mjs'),
        import('../_/json.mjs'),
        import('../_/jsonc.mjs'),
        import('../_/html.mjs'),
        import('../_/css.mjs'),
        import('../_/scss.mjs'),
        import('../_/less.mjs'),
        // Frameworks
        import('../_/vue.mjs'),
        import('../_/jsx.mjs'),
        import('../_/tsx.mjs'),
        import('../_/svelte.mjs'),
        import('../_/astro.mjs'),
        import('../_/glimmer-js.mjs'),
        import('../_/glimmer-ts.mjs'),
        // Shell/CLI
        import('../_/shell.mjs').then(function (n) { return n.b; }),
        import('../_/shell.mjs').then(function (n) { return n.s; }),
        // Config/Data formats
        import('../_/yaml.mjs'),
        import('../_/toml.mjs'),
        import('../_/xml.mjs'),
        import('../_/markdown.mjs'),
        // Other languages
        import('../_/diff.mjs'),
        import('../_/sql.mjs'),
        import('../_/graphql.mjs'),
        import('../_/python.mjs'),
        import('../_/rust.mjs'),
        import('../_/go.mjs')
      ],
      langAlias: {
        gjs: "glimmer-js",
        gts: "glimmer-ts"
      },
      engine: createJavaScriptRegexEngine()
    });
  }
  return highlighter;
}
function highlightCodeSync(shiki, code, language) {
  const loadedLangs = shiki.getLoadedLanguages();
  if (loadedLangs.includes(language)) {
    try {
      let html = shiki.codeToHtml(code, {
        lang: language,
        themes: { light: "github-light", dark: "github-dark" },
        defaultColor: "dark"
      });
      html = html.replace(/<pre([^>]*)\s+style="[^"]*"/, "<pre$1");
      return escapeRawGt(html);
    } catch {
    }
  }
  const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<pre><code class="language-${language}">${escaped}</code></pre>
`;
}
async function highlightCodeBlock(code, language) {
  const shiki = await getShikiHighlighter();
  return highlightCodeSync(shiki, code, language);
}
function escapeRawGt(html) {
  return html.replace(/>([^<]*)/g, (match, textContent) => {
    const escapedText = textContent.replace(/>/g, "&gt;");
    return `>${escapedText}`;
  });
}

const EXTENSION_MAP = {
  // JavaScript/TypeScript
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  ts: "typescript",
  mts: "typescript",
  cts: "typescript",
  jsx: "jsx",
  tsx: "tsx",
  // Web
  html: "html",
  htm: "html",
  css: "css",
  scss: "scss",
  sass: "scss",
  less: "less",
  vue: "vue",
  svelte: "svelte",
  astro: "astro",
  gjs: "glimmer-js",
  gts: "glimmer-ts",
  // Data formats
  json: "json",
  jsonc: "jsonc",
  json5: "jsonc",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
  xml: "xml",
  svg: "xml",
  // Shell
  sh: "bash",
  bash: "bash",
  zsh: "bash",
  fish: "bash",
  // Docs
  md: "markdown",
  mdx: "markdown",
  markdown: "markdown",
  // Other languages
  py: "python",
  rs: "rust",
  go: "go",
  sql: "sql",
  graphql: "graphql",
  gql: "graphql",
  diff: "diff",
  patch: "diff"
};
const FILENAME_MAP = {
  ".gitignore": "bash",
  ".npmignore": "bash",
  ".editorconfig": "toml",
  ".prettierrc": "json",
  ".eslintrc": "json",
  "tsconfig.json": "jsonc",
  "jsconfig.json": "jsonc",
  "package.json": "json",
  "package-lock.json": "json",
  "pnpm-lock.yaml": "yaml",
  "yarn.lock": "yaml",
  "Makefile": "bash",
  "Dockerfile": "bash",
  "LICENSE": "text",
  "CHANGELOG": "markdown",
  "CHANGELOG.md": "markdown",
  "README": "markdown",
  "README.md": "markdown",
  "README.markdown": "markdown"
};
function getLanguageFromPath(filePath) {
  var _a;
  const filename = filePath.split("/").pop() || "";
  if (FILENAME_MAP[filename]) {
    return FILENAME_MAP[filename];
  }
  const ext = ((_a = filename.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
  return EXTENSION_MAP[ext] || "text";
}
function isNpmPackage(specifier) {
  const pkg = specifier.replace(/^['"]|['"]$/g, "").trim();
  if (pkg.startsWith(".") || pkg.startsWith("/")) return false;
  if (pkg.startsWith("node:")) return false;
  if (isBuiltin(pkg)) return false;
  if (!pkg) return false;
  return true;
}
function getPackageName(specifier) {
  const pkg = specifier.replace(/^['"]|['"]$/g, "").trim();
  if (pkg.startsWith("@")) {
    const parts = pkg.split("/");
    if (parts[0] && parts[1]) {
      return `${parts[0]}/${parts[1]}`;
    }
  }
  const firstSlash = pkg.indexOf("/");
  if (firstSlash > 0) {
    return pkg.substring(0, firstSlash);
  }
  return pkg;
}
function linkifyImports(html, options) {
  const { dependencies, resolveRelative } = options != null ? options : {};
  const getHref = (moduleSpecifier) => {
    const cleanSpec = moduleSpecifier.replace(/^['"]|['"]$/g, "").trim();
    if (cleanSpec.startsWith(".") && resolveRelative) {
      return resolveRelative(moduleSpecifier);
    }
    if (!isNpmPackage(moduleSpecifier)) {
      return null;
    }
    const packageName = getPackageName(moduleSpecifier);
    const dep = dependencies == null ? void 0 : dependencies[packageName];
    if (dep) {
      return `/package-code/${packageName}/v/${dep.version}`;
    }
    return `/package/${packageName}`;
  };
  let result = html.replace(
    /(<span[^>]*>from<\/span>)(<span[^>]*>) (['"][^'"]+['"])<\/span>/g,
    (match, fromSpan, stringSpanOpen, moduleSpecifier) => {
      const href = getHref(moduleSpecifier);
      if (!href) return match;
      return `${fromSpan}${stringSpanOpen} <a href="${href}" class="import-link">${moduleSpecifier}</a></span>`;
    }
  );
  result = result.replace(
    /(<span[^>]*>import<\/span>)(<span[^>]*>) (['"][^'"]+['"])<\/span>/g,
    (match, importSpan, stringSpanOpen, moduleSpecifier) => {
      const href = getHref(moduleSpecifier);
      if (!href) return match;
      return `${importSpan}${stringSpanOpen} <a href="${href}" class="import-link">${moduleSpecifier}</a></span>`;
    }
  );
  result = result.replace(
    /(<span[^>]*>)(\s*)(require|import)(<\/span>)(<span[^>]*>\(<\/span>)(<span[^>]*>)(['"][^'"]+['"])<\/span>/g,
    (match, spanOpen, whitespace, keyword, spanClose, parenSpan, stringSpanOpen, moduleSpecifier) => {
      const href = getHref(moduleSpecifier);
      if (!href) return match;
      return `${spanOpen}${whitespace}${keyword}${spanClose}${parenSpan}${stringSpanOpen}<a href="${href}" class="import-link">${moduleSpecifier}</a></span>`;
    }
  );
  return result;
}
const IMPORT_LANGUAGES = /* @__PURE__ */ new Set([
  "javascript",
  "typescript",
  "jsx",
  "tsx",
  "vue",
  "svelte",
  "astro"
]);
async function highlightCode(code, language, options) {
  const shiki = await getShikiHighlighter();
  const loadedLangs = shiki.getLoadedLanguages();
  if (loadedLangs.includes(language)) {
    try {
      let html = shiki.codeToHtml(code, {
        lang: language,
        themes: { light: "github-light", dark: "github-dark" },
        defaultColor: "dark"
      });
      html = escapeRawGt(html);
      if (IMPORT_LANGUAGES.has(language)) {
        html = linkifyImports(html, {
          dependencies: options == null ? void 0 : options.dependencies,
          resolveRelative: options == null ? void 0 : options.resolveRelative
        });
      }
      if (html.includes('<span class="line">')) {
        return html.replace(/<\/span>\n<span class="line">/g, '</span><span class="line">');
      }
      const codeMatch = html.match(/<code[^>]*>([\s\S]*)<\/code>/);
      if (codeMatch == null ? void 0 : codeMatch[1]) {
        const codeContent = codeMatch[1];
        const lines2 = codeContent.split("\n");
        const wrappedLines2 = lines2.map((line, i) => {
          if (i === lines2.length - 1 && line === "") return null;
          return `<span class="line">${line}</span>`;
        }).filter((line) => line !== null).join("");
        return html.replace(codeMatch[1], wrappedLines2);
      }
      return html;
    } catch {
    }
  }
  const lines = code.split("\n");
  const wrappedLines = lines.map((line) => {
    const escaped = line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<span class="line">${escaped}</span>`;
  }).join("");
  return `<pre class="shiki github-dark"><code>${wrappedLines}</code></pre>`;
}

const PACKUMENT_FETCH_CONCURRENCY = 20;
const TARGET_PLATFORM = {
  os: "linux",
  cpu: "x64",
  libc: "glibc"
};
const fetchPackument = defineCachedFunction(
  async (name) => {
    try {
      const encodedName = name.startsWith("@") ? `@${encodeURIComponent(name.slice(1))}` : encodeURIComponent(name);
      return await $fetch(`https://registry.npmjs.org/${encodedName}`);
    } catch (error) {
      return null;
    }
  },
  {
    maxAge: 60 * 60,
    swr: true,
    name: "packument",
    getKey: (name) => name
  }
);
function matchesPlatform(version) {
  if (version.os && Array.isArray(version.os) && version.os.length > 0) {
    const osMatch = version.os.some((os) => {
      if (os.startsWith("!")) return os.slice(1) !== TARGET_PLATFORM.os;
      return os === TARGET_PLATFORM.os;
    });
    if (!osMatch) return false;
  }
  if (version.cpu && Array.isArray(version.cpu) && version.cpu.length > 0) {
    const cpuMatch = version.cpu.some((cpu) => {
      if (cpu.startsWith("!")) return cpu.slice(1) !== TARGET_PLATFORM.cpu;
      return cpu === TARGET_PLATFORM.cpu;
    });
    if (!cpuMatch) return false;
  }
  const libc = version.libc;
  if (libc && Array.isArray(libc) && libc.length > 0) {
    const libcMatch = libc.some((l) => {
      if (l.startsWith("!")) return l.slice(1) !== TARGET_PLATFORM.libc;
      return l === TARGET_PLATFORM.libc;
    });
    if (!libcMatch) return false;
  }
  return true;
}
function resolveVersion(range, versions) {
  if (versions.includes(range)) return range;
  if (range.startsWith("npm:")) {
    const atIndex = range.lastIndexOf("@");
    if (atIndex > 4) {
      return resolveVersion(range.slice(atIndex + 1), versions);
    }
    return null;
  }
  if (range.startsWith("http://") || range.startsWith("https://") || range.startsWith("git://") || range.startsWith("git+") || range.startsWith("file:") || range.includes("/")) {
    return null;
  }
  return maxSatisfying(versions, range);
}
async function resolveDependencyTree(rootName, rootVersion, options = {}) {
  const resolved = /* @__PURE__ */ new Map();
  const seen = /* @__PURE__ */ new Set();
  let currentLevel = /* @__PURE__ */ new Map([
    [rootName, { range: rootVersion, optional: false, path: [] }]
  ]);
  let level = 0;
  while (currentLevel.size > 0) {
    const nextLevel = /* @__PURE__ */ new Map();
    for (const name of currentLevel.keys()) {
      seen.add(name);
    }
    const entries = [...currentLevel.entries()];
    await mapWithConcurrency(
      entries,
      async ([name, { range, optional, path }]) => {
        var _a, _b;
        const packument = await fetchPackument(name);
        if (!packument) return;
        const versions = Object.keys(packument.versions);
        const version = resolveVersion(range, versions);
        if (!version) return;
        const versionData = packument.versions[version];
        if (!versionData) return;
        if (!matchesPlatform(versionData)) return;
        const size = (_b = (_a = versionData.dist) == null ? void 0 : _a.unpackedSize) != null ? _b : 0;
        const key = `${name}@${version}`;
        const currentPath = [...path, `${name}@${version}`];
        if (!resolved.has(key)) {
          const pkg = { name, version, size, optional };
          if (options.trackDepth) {
            pkg.depth = level === 0 ? "root" : level === 1 ? "direct" : "transitive";
            pkg.path = currentPath;
          }
          if (versionData.deprecated) {
            pkg.deprecated = versionData.deprecated;
          }
          resolved.set(key, pkg);
        }
        if (versionData.dependencies) {
          for (const [depName, depRange] of Object.entries(versionData.dependencies)) {
            if (!seen.has(depName) && !nextLevel.has(depName)) {
              nextLevel.set(depName, { range: depRange, optional: false, path: currentPath });
            }
          }
        }
        if (versionData.optionalDependencies) {
          for (const [depName, depRange] of Object.entries(versionData.optionalDependencies)) {
            if (!seen.has(depName) && !nextLevel.has(depName)) {
              nextLevel.set(depName, { range: depRange, optional: true, path: currentPath });
            }
          }
        }
      },
      PACKUMENT_FETCH_CONCURRENCY
    );
    currentLevel = nextLevel;
    level++;
  }
  return resolved;
}

const OSV_DETAIL_CONCURRENCY = 25;
async function queryOsvBatch(packages) {
  var _a, _b;
  if (packages.length === 0) return { vulnerableIndices: [], failed: false };
  try {
    const response = await $fetch("https://api.osv.dev/v1/querybatch", {
      method: "POST",
      body: {
        queries: packages.map((pkg) => ({
          package: { name: pkg.name, ecosystem: "npm" },
          version: pkg.version
        }))
      }
    });
    const vulnerableIndices = [];
    for (let i = 0; i < response.results.length; i++) {
      const result = response.results[i];
      if ((result == null ? void 0 : result.vulns) && result.vulns.length > 0) {
        vulnerableIndices.push(i);
      }
      if (result == null ? void 0 : result.next_page_token) {
        console.warn(
          `[dep-analysis] OSV batch result has pagination token for package index ${i} (${(_a = packages[i]) == null ? void 0 : _a.name}@${(_b = packages[i]) == null ? void 0 : _b.version}) - some vulnerabilities may be missing`
        );
      }
    }
    return { vulnerableIndices, failed: false };
  } catch (error) {
    console.warn(`[dep-analysis] OSV batch query failed:`, error);
    return { vulnerableIndices: [], failed: true };
  }
}
async function queryOsvDetails(pkg) {
  try {
    const response = await $fetch("https://api.osv.dev/v1/query", {
      method: "POST",
      body: {
        package: { name: pkg.name, ecosystem: "npm" },
        version: pkg.version
      }
    });
    const vulns = response.vulns || [];
    if (vulns.length === 0) return null;
    const counts = { total: vulns.length, critical: 0, high: 0, moderate: 0, low: 0 };
    const vulnerabilities = [];
    const severityOrder = {
      critical: 0,
      high: 1,
      moderate: 2,
      low: 3,
      unknown: 4
    };
    const sortedVulns = [...vulns].sort(
      (a, b) => severityOrder[getSeverityLevel(a)] - severityOrder[getSeverityLevel(b)]
    );
    for (const vuln of sortedVulns) {
      const severity = getSeverityLevel(vuln);
      if (severity === "critical") counts.critical++;
      else if (severity === "high") counts.high++;
      else if (severity === "moderate") counts.moderate++;
      else if (severity === "low") counts.low++;
      vulnerabilities.push({
        id: vuln.id,
        summary: vuln.summary || "No description available",
        severity,
        aliases: vuln.aliases || [],
        url: getVulnerabilityUrl(vuln)
      });
    }
    return {
      name: pkg.name,
      version: pkg.version,
      depth: pkg.depth,
      path: pkg.path,
      vulnerabilities,
      counts
    };
  } catch (error) {
    console.warn(`[dep-analysis] OSV detail query failed for ${pkg.name}@${pkg.version}:`, error);
    return null;
  }
}
function getVulnerabilityUrl(vuln) {
  var _a;
  if (vuln.id.startsWith("GHSA-")) {
    return `https://github.com/advisories/${vuln.id}`;
  }
  const cveAlias = (_a = vuln.aliases) == null ? void 0 : _a.find((a) => a.startsWith("CVE-"));
  if (cveAlias) {
    return `https://nvd.nist.gov/vuln/detail/${cveAlias}`;
  }
  return `https://osv.dev/vulnerability/${vuln.id}`;
}
function getSeverityLevel(vuln) {
  var _a, _b, _c;
  const dbSeverity = (_b = (_a = vuln.database_specific) == null ? void 0 : _a.severity) == null ? void 0 : _b.toLowerCase();
  if (dbSeverity) {
    if (dbSeverity === "critical") return "critical";
    if (dbSeverity === "high") return "high";
    if (dbSeverity === "moderate" || dbSeverity === "medium") return "moderate";
    if (dbSeverity === "low") return "low";
  }
  const severityEntry = (_c = vuln.severity) == null ? void 0 : _c[0];
  if (severityEntry == null ? void 0 : severityEntry.score) {
    const match = severityEntry.score.match(/(?:^|[/:])(\d+(?:\.\d+)?)$/);
    if (match == null ? void 0 : match[1]) {
      const score = parseFloat(match[1]);
      if (score >= 9) return "critical";
      if (score >= 7) return "high";
      if (score >= 4) return "moderate";
      if (score > 0) return "low";
    }
  }
  return "unknown";
}
const analyzeDependencyTree = defineCachedFunction(
  async (name, version) => {
    const resolved = await resolveDependencyTree(name, version, { trackDepth: true });
    const packages = Array.from(resolved.values(), (pkg) => ({
      name: pkg.name,
      version: pkg.version,
      depth: pkg.depth,
      path: pkg.path || []
    }));
    const deprecatedPackages = [...resolved.values()].filter((pkg) => pkg.deprecated).map((pkg) => ({
      name: pkg.name,
      version: pkg.version,
      depth: pkg.depth,
      path: pkg.path || [],
      message: pkg.deprecated
    })).sort((a, b) => {
      const depthOrder2 = { root: 0, direct: 1, transitive: 2 };
      return depthOrder2[a.depth] - depthOrder2[b.depth];
    });
    const { vulnerableIndices, failed: batchFailed } = await queryOsvBatch(packages);
    let vulnerablePackages = [];
    let failedQueries = batchFailed ? packages.length : 0;
    if (!batchFailed && vulnerableIndices.length > 0) {
      const detailResults = await mapWithConcurrency(
        vulnerableIndices,
        (i) => queryOsvDetails(packages[i]),
        OSV_DETAIL_CONCURRENCY
      );
      for (const result of detailResults) {
        if (result) {
          vulnerablePackages.push(result);
        } else {
          failedQueries++;
        }
      }
    }
    const depthOrder = { root: 0, direct: 1, transitive: 2 };
    vulnerablePackages.sort((a, b) => {
      if (a.depth !== b.depth) return depthOrder[a.depth] - depthOrder[b.depth];
      if (a.counts.critical !== b.counts.critical) return b.counts.critical - a.counts.critical;
      if (a.counts.high !== b.counts.high) return b.counts.high - a.counts.high;
      if (a.counts.moderate !== b.counts.moderate) return b.counts.moderate - a.counts.moderate;
      return b.counts.total - a.counts.total;
    });
    const totalCounts = { total: 0, critical: 0, high: 0, moderate: 0, low: 0 };
    for (const pkg of vulnerablePackages) {
      totalCounts.total += pkg.counts.total;
      totalCounts.critical += pkg.counts.critical;
      totalCounts.high += pkg.counts.high;
      totalCounts.moderate += pkg.counts.moderate;
      totalCounts.low += pkg.counts.low;
    }
    if (batchFailed) {
      console.error(
        `[dep-analysis] Critical: OSV batch query failed for ${name}@${version} (${packages.length} packages)`
      );
    }
    return {
      package: name,
      version,
      vulnerablePackages,
      deprecatedPackages,
      totalPackages: packages.length,
      failedQueries,
      totalCounts
    };
  },
  {
    maxAge: 60 * 60,
    swr: true,
    name: "dependency-analysis",
    getKey: (name, version) => `v2:${name}@${version}`
  }
);

const FETCH_TIMEOUT_MS = 30 * 1e3;
async function getDocNodes(packageName, version) {
  const typesUrl = await getTypesUrl(packageName, version);
  if (!typesUrl) {
    return { version: 1, nodes: [] };
  }
  let result;
  try {
    result = await doc([typesUrl], {
      load: createLoader(),
      resolve: createResolver()
    });
  } catch {
    return { version: 1, nodes: [] };
  }
  const allNodes = [];
  for (const nodes of Object.values(result)) {
    allNodes.push(...nodes);
  }
  return { version: 1, nodes: allNodes };
}
function createLoader() {
  return async (specifier, _isDynamic, _cacheSetting, _checksum) => {
    var _a, _b;
    let url;
    try {
      url = new URL(specifier);
    } catch (e) {
      console.error(e);
      return void 0;
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return void 0;
    }
    try {
      const response = await $fetch.raw(url.toString(), {
        method: "GET",
        timeout: FETCH_TIMEOUT_MS,
        redirect: "follow"
      });
      if (response.status !== 200) {
        return void 0;
      }
      const content = (_b = await ((_a = response._data) == null ? void 0 : _a.text())) != null ? _b : "";
      const headers = {};
      for (const [key, value] of response.headers) {
        headers[key.toLowerCase()] = value;
      }
      return {
        kind: "module",
        specifier: response.url || specifier,
        headers,
        content
      };
    } catch (e) {
      console.error(e);
      return void 0;
    }
  };
}
function createResolver() {
  return (specifier, referrer) => {
    if (specifier.startsWith(".") || specifier.startsWith("/")) {
      return new URL(specifier, referrer).toString();
    }
    if (!specifier.startsWith("http://") && !specifier.startsWith("https://")) {
      const baseUrl = new URL(referrer);
      if (baseUrl.hostname === "esm.sh") {
        return `https://esm.sh/${specifier}`;
      }
    }
    return specifier;
  };
}
async function getTypesUrl(packageName, version) {
  const url = `https://esm.sh/${packageName}@${version}`;
  try {
    const response = await $fetch.raw(url, {
      method: "HEAD",
      timeout: FETCH_TIMEOUT_MS
    });
    return response.headers.get("x-typescript-types");
  } catch (e) {
    console.error(e);
    return null;
  }
}

const ESC = String.fromCharCode(27);
const ANSI_PATTERN = new RegExp(`${ESC}\\[[0-9;]*m`, "g");
function stripAnsi(text) {
  return text.replace(ANSI_PATTERN, "");
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function cleanSymbolName(name) {
  if (name.startsWith("default.")) {
    return name.slice(8);
  }
  if (name.startsWith("default_")) {
    return name.slice(8);
  }
  return name;
}
function createSymbolId(kind, name) {
  return `${kind}-${name}`.replace(/[^a-zA-Z0-9-]/g, "_");
}
function parseJsDocLinks(text, symbolLookup) {
  let result = escapeHtml(text);
  result = result.replace(/\{@link\s+([^\s}]+)(?:\s+([^}]+))?\}/g, (_, target, label) => {
    const displayText = label || target;
    if (target.startsWith("http://") || target.startsWith("https://")) {
      return `<a href="${target}" target="_blank" rel="noreferrer" class="docs-link">${displayText}</a>`;
    }
    const symbolId = symbolLookup.get(target);
    if (symbolId) {
      return `<a href="#${symbolId}" class="docs-symbol-link">${displayText}</a>`;
    }
    return `<code class="docs-symbol-ref">${displayText}</code>`;
  });
  return result;
}
async function renderMarkdown(text, symbolLookup) {
  const codeBlockData = [];
  let result = text.replace(
    /```[ \t]*(\w*)[ \t]*(?:\r\n|\r|\n)([\s\S]*?)(?:\r\n|\r|\n)?```/g,
    (_, lang, code) => {
      const index = codeBlockData.length;
      codeBlockData.push({ lang: lang || "text", code: code.trim() });
      return `__CODE_BLOCK_${index}__`;
    }
  );
  result = parseJsDocLinks(result, symbolLookup);
  result = result.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer" class="docs-link">$1</a>'
  );
  result = result.replace(/`([^`]+)`/g, '<code class="docs-inline-code">$1</code>').replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\n\n+/g, "<br><br>").replace(/\n/g, "<br>");
  for (let i = 0; i < codeBlockData.length; i++) {
    const { lang, code } = codeBlockData[i];
    const highlighted = await highlightCodeBlock(code, lang);
    result = result.replace(`__CODE_BLOCK_${i}__`, highlighted);
  }
  return result;
}

function getNodeSignature(node) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  const name = cleanSymbolName(node.name);
  switch (node.kind) {
    case "function": {
      const typeParams = (_b = (_a = node.functionDef) == null ? void 0 : _a.typeParams) == null ? void 0 : _b.map((t) => t.name).join(", ");
      const typeParamsStr = typeParams ? `<${typeParams}>` : "";
      const params = ((_d = (_c = node.functionDef) == null ? void 0 : _c.params) == null ? void 0 : _d.map((p) => formatParam(p)).join(", ")) || "";
      const ret = formatType((_e = node.functionDef) == null ? void 0 : _e.returnType) || "void";
      const asyncStr = ((_f = node.functionDef) == null ? void 0 : _f.isAsync) ? "async " : "";
      return `${asyncStr}function ${name}${typeParamsStr}(${params}): ${ret}`;
    }
    case "class": {
      const ext = ((_g = node.classDef) == null ? void 0 : _g.extends) ? ` extends ${formatType(node.classDef.extends)}` : "";
      const impl = (_i = (_h = node.classDef) == null ? void 0 : _h.implements) == null ? void 0 : _i.map((t) => formatType(t)).join(", ");
      const implStr = impl ? ` implements ${impl}` : "";
      const abstractStr = ((_j = node.classDef) == null ? void 0 : _j.isAbstract) ? "abstract " : "";
      return `${abstractStr}class ${name}${ext}${implStr}`;
    }
    case "interface": {
      const typeParams = (_l = (_k = node.interfaceDef) == null ? void 0 : _k.typeParams) == null ? void 0 : _l.map((t) => t.name).join(", ");
      const typeParamsStr = typeParams ? `<${typeParams}>` : "";
      const ext = (_n = (_m = node.interfaceDef) == null ? void 0 : _m.extends) == null ? void 0 : _n.map((t) => formatType(t)).join(", ");
      const extStr = ext ? ` extends ${ext}` : "";
      return `interface ${name}${typeParamsStr}${extStr}`;
    }
    case "typeAlias": {
      const typeParams = (_p = (_o = node.typeAliasDef) == null ? void 0 : _o.typeParams) == null ? void 0 : _p.map((t) => t.name).join(", ");
      const typeParamsStr = typeParams ? `<${typeParams}>` : "";
      const type = formatType((_q = node.typeAliasDef) == null ? void 0 : _q.tsType) || "unknown";
      return `type ${name}${typeParamsStr} = ${type}`;
    }
    case "variable": {
      const keyword = ((_r = node.variableDef) == null ? void 0 : _r.kind) === "const" ? "const" : "let";
      const type = formatType((_s = node.variableDef) == null ? void 0 : _s.tsType) || "unknown";
      return `${keyword} ${name}: ${type}`;
    }
    case "enum": {
      return `enum ${name}`;
    }
    default:
      return null;
  }
}
function formatParam(param) {
  const optional = param.optional ? "?" : "";
  const type = formatType(param.tsType);
  return type ? `${param.name}${optional}: ${type}` : `${param.name}${optional}`;
}
function formatType(type) {
  var _a;
  if (!type) return "";
  if (type.repr) return stripAnsi(type.repr);
  if (type.kind === "keyword" && type.keyword) {
    return type.keyword;
  }
  if (type.kind === "typeRef" && type.typeRef) {
    const params = (_a = type.typeRef.typeParams) == null ? void 0 : _a.map((t) => formatType(t)).join(", ");
    return params ? `${type.typeRef.typeName}<${params}>` : type.typeRef.typeName;
  }
  if (type.kind === "array" && type.array) {
    return `${formatType(type.array)}[]`;
  }
  if (type.kind === "union" && type.union) {
    return type.union.map((t) => formatType(t)).join(" | ");
  }
  return type.repr ? stripAnsi(type.repr) : "unknown";
}

function flattenNamespaces(nodes) {
  var _a;
  const result = [];
  for (const node of nodes) {
    if (node.kind === "import" || node.kind === "reference") {
      continue;
    }
    result.push(node);
    if (node.kind === "namespace" && ((_a = node.namespaceDef) == null ? void 0 : _a.elements)) {
      for (const element of node.namespaceDef.elements) {
        result.push({
          ...element,
          name: `${node.name}.${element.name}`
        });
      }
    }
  }
  return result;
}
function buildSymbolLookup(nodes) {
  const lookup = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    const cleanName = cleanSymbolName(node.name);
    const id = createSymbolId(node.kind, cleanName);
    lookup.set(cleanName, id);
  }
  return lookup;
}
function mergeOverloads(nodes) {
  var _a;
  const byKey = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    const cleanName = cleanSymbolName(node.name);
    const key = `${node.kind}:${cleanName}`;
    const existing = byKey.get(key);
    if (existing) {
      existing.push(node);
    } else {
      byKey.set(key, [node]);
    }
  }
  const result = [];
  for (const [, groupedNodes] of byKey) {
    const first = groupedNodes[0];
    if (!first) continue;
    const withDoc = (_a = groupedNodes.find((n) => {
      var _a2;
      return (_a2 = n.jsDoc) == null ? void 0 : _a2.doc;
    })) != null ? _a : first;
    result.push({
      name: cleanSymbolName(first.name),
      kind: first.kind,
      nodes: groupedNodes,
      jsDoc: withDoc.jsDoc
    });
  }
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}
function groupMergedByKind(symbols) {
  var _a, _b;
  const grouped = {};
  for (const sym of symbols) {
    const kindGroup = (_b = grouped[_a = sym.kind]) != null ? _b : grouped[_a] = [];
    kindGroup.push(sym);
  }
  return grouped;
}

const MAX_OVERLOAD_SIGNATURES = 5;
const MAX_TOC_ITEMS_PER_KIND = 50;
const KIND_DISPLAY_ORDER = [
  "function",
  "class",
  "interface",
  "typeAlias",
  "variable",
  "enum",
  "namespace"
];
const KIND_TITLES = {
  function: "Functions",
  class: "Classes",
  interface: "Interfaces",
  typeAlias: "Type Aliases",
  variable: "Variables",
  enum: "Enums",
  namespace: "Namespaces"
};
async function renderDocNodes(symbols, symbolLookup) {
  const grouped = groupMergedByKind(symbols);
  const sections = [];
  for (const kind of KIND_DISPLAY_ORDER) {
    const kindSymbols = grouped[kind];
    if (!kindSymbols || kindSymbols.length === 0) continue;
    sections.push(await renderKindSection(kind, kindSymbols, symbolLookup));
  }
  return sections.join("\n");
}
async function renderKindSection(kind, symbols, symbolLookup) {
  const title = KIND_TITLES[kind] || kind;
  const lines = [];
  lines.push(`<section class="docs-section" id="section-${kind}">`);
  lines.push(`<h2 class="docs-section-title">${title}</h2>`);
  for (const symbol of symbols) {
    lines.push(await renderMergedSymbol(symbol, symbolLookup));
  }
  lines.push(`</section>`);
  return lines.join("\n");
}
async function renderMergedSymbol(symbol, symbolLookup) {
  var _a, _b, _c;
  const primaryNode = symbol.nodes[0];
  if (!primaryNode) return "";
  const lines = [];
  const id = createSymbolId(symbol.kind, symbol.name);
  const hasOverloads = symbol.nodes.length > 1;
  lines.push(`<article class="docs-symbol" id="${id}">`);
  lines.push(`<header class="docs-symbol-header">`);
  lines.push(
    `<a href="#${id}" class="docs-anchor" aria-label="Link to ${escapeHtml(symbol.name)}">#</a>`
  );
  lines.push(`<h3 class="docs-symbol-name">${escapeHtml(symbol.name)}</h3>`);
  lines.push(`<span class="docs-badge docs-badge--${symbol.kind}">${symbol.kind}</span>`);
  if ((_a = primaryNode.functionDef) == null ? void 0 : _a.isAsync) {
    lines.push(`<span class="docs-badge docs-badge--async">async</span>`);
  }
  if (hasOverloads) {
    lines.push(`<span class="docs-overload-count">${symbol.nodes.length} overloads</span>`);
  }
  lines.push(`</header>`);
  const signatures = symbol.nodes.slice(0, hasOverloads ? MAX_OVERLOAD_SIGNATURES : 1).map((n) => getNodeSignature(n)).filter(Boolean);
  if (signatures.length > 0) {
    const signatureCode = signatures.join("\n");
    const highlightedSignature = await highlightCodeBlock(signatureCode, "typescript");
    lines.push(`<div class="docs-signature">${highlightedSignature}</div>`);
    if (symbol.nodes.length > MAX_OVERLOAD_SIGNATURES) {
      const remaining = symbol.nodes.length - MAX_OVERLOAD_SIGNATURES;
      lines.push(`<p class="docs-more-overloads">+ ${remaining} more overloads</p>`);
    }
  }
  if ((_b = symbol.jsDoc) == null ? void 0 : _b.doc) {
    const description = symbol.jsDoc.doc.trim();
    lines.push(
      `<div class="docs-description">${await renderMarkdown(description, symbolLookup)}</div>`
    );
  }
  if (((_c = symbol.jsDoc) == null ? void 0 : _c.tags) && symbol.jsDoc.tags.length > 0) {
    lines.push(await renderJsDocTags(symbol.jsDoc.tags, symbolLookup));
  }
  if (symbol.kind === "class" && primaryNode.classDef) {
    lines.push(renderClassMembers(primaryNode.classDef));
  } else if (symbol.kind === "interface" && primaryNode.interfaceDef) {
    lines.push(renderInterfaceMembers(primaryNode.interfaceDef));
  } else if (symbol.kind === "enum" && primaryNode.enumDef) {
    lines.push(renderEnumMembers(primaryNode.enumDef));
  }
  lines.push(`</article>`);
  return lines.join("\n");
}
async function renderJsDocTags(tags, symbolLookup) {
  const lines = [];
  const params = tags.filter((t) => t.kind === "param");
  const returns = tags.find((t) => t.kind === "return");
  const examples = tags.filter((t) => t.kind === "example");
  const deprecated = tags.find((t) => t.kind === "deprecated");
  const see = tags.filter((t) => t.kind === "see");
  if (deprecated) {
    lines.push(`<div class="docs-deprecated">`);
    lines.push(`<strong>Deprecated</strong>`);
    if (deprecated.doc) {
      const renderedMessage = await renderMarkdown(deprecated.doc.replace(/\n/g, " "), symbolLookup);
      lines.push(`<div class="docs-deprecated-message">${renderedMessage}</div>`);
    }
    lines.push(`</div>`);
  }
  if (params.length > 0) {
    lines.push(`<div class="docs-params">`);
    lines.push(`<h4>Parameters</h4>`);
    lines.push(`<dl>`);
    for (const param of params) {
      lines.push(
        `<dt><code>${escapeHtml(param.name || "")}${param.optional ? "?" : ""}</code></dt>`
      );
      if (param.doc) {
        lines.push(`<dd>${parseJsDocLinks(param.doc, symbolLookup)}</dd>`);
      }
    }
    lines.push(`</dl>`);
    lines.push(`</div>`);
  }
  if (returns == null ? void 0 : returns.doc) {
    lines.push(`<div class="docs-returns">`);
    lines.push(`<h4>Returns</h4>`);
    lines.push(`<p>${parseJsDocLinks(returns.doc, symbolLookup)}</p>`);
    lines.push(`</div>`);
  }
  if (examples.length > 0) {
    lines.push(`<div class="docs-examples">`);
    lines.push(`<h4>Example${examples.length > 1 ? "s" : ""}</h4>`);
    for (const example of examples) {
      if (example.doc) {
        const langMatch = example.doc.match(/```(\w+)?/);
        const lang = (langMatch == null ? void 0 : langMatch[1]) || "typescript";
        const code = example.doc.replace(/```\w*\n?/g, "").trim();
        const highlighted = await highlightCodeBlock(code, lang);
        lines.push(highlighted);
      }
    }
    lines.push(`</div>`);
  }
  if (see.length > 0) {
    lines.push(`<div class="docs-see">`);
    lines.push(`<h4>See Also</h4>`);
    lines.push(`<ul>`);
    for (const s of see) {
      if (s.doc) {
        lines.push(`<li>${parseJsDocLinks(s.doc, symbolLookup)}</li>`);
      }
    }
    lines.push(`</ul>`);
    lines.push(`</div>`);
  }
  return lines.join("\n");
}
function renderClassMembers(def) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const lines = [];
  const { constructors, properties, methods } = def;
  if (constructors && constructors.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Constructor</h4>`);
    for (const ctor of constructors) {
      const params = ((_a = ctor.params) == null ? void 0 : _a.map((p) => formatParam(p)).join(", ")) || "";
      lines.push(`<pre><code>constructor(${escapeHtml(params)})</code></pre>`);
    }
    lines.push(`</div>`);
  }
  if (properties && properties.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Properties</h4>`);
    lines.push(`<dl>`);
    for (const prop of properties) {
      const modifiers = [];
      if (prop.isStatic) modifiers.push("static");
      if (prop.readonly) modifiers.push("readonly");
      const modStr = modifiers.length > 0 ? `${modifiers.join(" ")} ` : "";
      const type = formatType(prop.tsType);
      const opt = prop.optional ? "?" : "";
      lines.push(
        `<dt><code>${escapeHtml(modStr)}${escapeHtml(prop.name)}${opt}: ${escapeHtml(type)}</code></dt>`
      );
      if ((_b = prop.jsDoc) == null ? void 0 : _b.doc) {
        lines.push(`<dd>${escapeHtml((_c = prop.jsDoc.doc.split("\n")[0]) != null ? _c : "")}</dd>`);
      }
    }
    lines.push(`</dl>`);
    lines.push(`</div>`);
  }
  if (methods && methods.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Methods</h4>`);
    lines.push(`<dl>`);
    for (const method of methods) {
      const params = ((_e = (_d = method.functionDef) == null ? void 0 : _d.params) == null ? void 0 : _e.map((p) => formatParam(p)).join(", ")) || "";
      const ret = formatType((_f = method.functionDef) == null ? void 0 : _f.returnType) || "void";
      const staticStr = method.isStatic ? "static " : "";
      lines.push(
        `<dt><code>${escapeHtml(staticStr)}${escapeHtml(method.name)}(${escapeHtml(params)}): ${escapeHtml(ret)}</code></dt>`
      );
      if ((_g = method.jsDoc) == null ? void 0 : _g.doc) {
        lines.push(`<dd>${escapeHtml((_h = method.jsDoc.doc.split("\n")[0]) != null ? _h : "")}</dd>`);
      }
    }
    lines.push(`</dl>`);
    lines.push(`</div>`);
  }
  return lines.join("\n");
}
function renderInterfaceMembers(def) {
  var _a, _b, _c, _d, _e;
  const lines = [];
  const { properties, methods } = def;
  if (properties && properties.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Properties</h4>`);
    lines.push(`<dl>`);
    for (const prop of properties) {
      const type = formatType(prop.tsType);
      const opt = prop.optional ? "?" : "";
      const ro = prop.readonly ? "readonly " : "";
      lines.push(
        `<dt><code>${escapeHtml(ro)}${escapeHtml(prop.name)}${opt}: ${escapeHtml(type)}</code></dt>`
      );
      if ((_a = prop.jsDoc) == null ? void 0 : _a.doc) {
        lines.push(`<dd>${escapeHtml((_b = prop.jsDoc.doc.split("\n")[0]) != null ? _b : "")}</dd>`);
      }
    }
    lines.push(`</dl>`);
    lines.push(`</div>`);
  }
  if (methods && methods.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Methods</h4>`);
    lines.push(`<dl>`);
    for (const method of methods) {
      const params = ((_c = method.params) == null ? void 0 : _c.map((p) => formatParam(p)).join(", ")) || "";
      const ret = formatType(method.returnType) || "void";
      lines.push(
        `<dt><code>${escapeHtml(method.name)}(${escapeHtml(params)}): ${escapeHtml(ret)}</code></dt>`
      );
      if ((_d = method.jsDoc) == null ? void 0 : _d.doc) {
        lines.push(`<dd>${escapeHtml((_e = method.jsDoc.doc.split("\n")[0]) != null ? _e : "")}</dd>`);
      }
    }
    lines.push(`</dl>`);
    lines.push(`</div>`);
  }
  return lines.join("\n");
}
function renderEnumMembers(def) {
  const lines = [];
  const { members } = def;
  if (members && members.length > 0) {
    lines.push(`<div class="docs-members">`);
    lines.push(`<h4>Members</h4>`);
    lines.push(`<ul class="docs-enum-members">`);
    for (const member of members) {
      lines.push(`<li><code>${escapeHtml(member.name)}</code></li>`);
    }
    lines.push(`</ul>`);
    lines.push(`</div>`);
  }
  return lines.join("\n");
}
function renderToc(symbols) {
  const grouped = groupMergedByKind(symbols);
  const lines = [];
  lines.push(`<nav class="toc text-sm" aria-label="Table of contents">`);
  lines.push(`<ul class="space-y-3">`);
  for (const kind of KIND_DISPLAY_ORDER) {
    const kindSymbols = grouped[kind];
    if (!kindSymbols || kindSymbols.length === 0) continue;
    const title = KIND_TITLES[kind] || kind;
    lines.push(`<li>`);
    lines.push(
      `<a href="#section-${kind}" class="font-semibold text-fg-muted hover:text-fg block mb-1">${title} <span class="text-fg-subtle font-normal">(${kindSymbols.length})</span></a>`
    );
    const showSymbols = kindSymbols.slice(0, MAX_TOC_ITEMS_PER_KIND);
    lines.push(`<ul class="ps-3 space-y-0.5 border-is border-border/50">`);
    for (const symbol of showSymbols) {
      const id = createSymbolId(symbol.kind, symbol.name);
      lines.push(
        `<li><a href="#${id}" class="text-fg-subtle hover:text-fg font-mono text-xs block py-0.5 truncate">${escapeHtml(symbol.name)}</a></li>`
      );
    }
    if (kindSymbols.length > MAX_TOC_ITEMS_PER_KIND) {
      const remaining = kindSymbols.length - MAX_TOC_ITEMS_PER_KIND;
      lines.push(`<li class="text-fg-subtle text-xs py-0.5">... and ${remaining} more</li>`);
    }
    lines.push(`</ul>`);
    lines.push(`</li>`);
  }
  lines.push(`</ul>`);
  lines.push(`</nav>`);
  return lines.join("\n");
}

async function generateDocsWithDeno(packageName, version) {
  const result = await getDocNodes(packageName, version);
  if (!result.nodes || result.nodes.length === 0) {
    return null;
  }
  const flattenedNodes = flattenNamespaces(result.nodes);
  const mergedSymbols = mergeOverloads(flattenedNodes);
  const symbolLookup = buildSymbolLookup(flattenedNodes);
  const html = await renderDocNodes(mergedSymbols, symbolLookup);
  const toc = renderToc(mergedSymbols);
  return { html, toc, nodes: flattenedNodes };
}

function handleApiError(error, fallback) {
  var _a;
  if (isError(error)) {
    throw error;
  }
  if (v$1.isValiError(error)) {
    throw createError$1({
      // TODO: throwing 404 rather than 400 as it's cacheable
      statusCode: 404,
      message: error.issues[0].message
    });
  }
  throw createError$1({
    statusCode: (_a = fallback.statusCode) != null ? _a : 502,
    message: fallback.message
  });
}

async function fetchFileTree(packageName, version) {
  const url = `https://data.jsdelivr.com/v1/packages/npm/${packageName}@${version}`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw createError$1({ statusCode: 404, message: "Package or version not found" });
    }
    throw createError$1({ statusCode: 502, message: "Failed to fetch file list from jsDelivr" });
  }
  return response.json();
}
function convertToFileTree(nodes, parentPath = "") {
  const result = [];
  for (const node of nodes) {
    const path = parentPath ? `${parentPath}/${node.name}` : node.name;
    if (node.type === "directory") {
      result.push({
        name: node.name,
        path,
        type: "directory",
        children: node.files ? convertToFileTree(node.files, path) : []
      });
    } else {
      result.push({
        name: node.name,
        path,
        type: "file",
        size: node.size
      });
    }
  }
  result.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "directory" ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
  return result;
}
async function getPackageFileTree(packageName, version) {
  var _a;
  const jsDelivrData = await fetchFileTree(packageName, version);
  const tree = convertToFileTree(jsDelivrData.files);
  return {
    package: packageName,
    version,
    default: (_a = jsDelivrData.default) != null ? _a : void 0,
    tree
  };
}

const NPM_REGISTRY = "https://registry.npmjs.org";
const fetchNpmPackage = defineCachedFunction(
  async (name) => {
    const encodedName = encodePackageName(name);
    return await $fetch(`${NPM_REGISTRY}/${encodedName}`);
  },
  {
    maxAge: CACHE_MAX_AGE_FIVE_MINUTES,
    swr: true,
    name: "npm-package",
    getKey: (name) => name
  }
);
async function fetchLatestVersionWithFallback(name) {
  var _a, _b;
  const version = await fetchLatestVersion(name);
  if (version) return version;
  try {
    const packument = await fetchNpmPackage(name);
    return (_b = (_a = packument["dist-tags"]) == null ? void 0 : _a.latest) != null ? _b : null;
  } catch {
    return null;
  }
}
function constraintIncludesPrerelease(constraint) {
  return /-(alpha|beta|rc|next|canary|dev|preview|pre|experimental)/i.test(constraint) || /-\d/.test(constraint);
}
async function resolveVersionConstraint(packageName, constraint) {
  try {
    const packument = await fetchNpmPackage(packageName);
    let versions = Object.keys(packument.versions);
    if (!constraintIncludesPrerelease(constraint)) {
      versions = versions.filter((v) => !prerelease(v));
    }
    return maxSatisfying(versions, constraint);
  } catch {
    return null;
  }
}
async function resolveDependencyVersions(dependencies) {
  const entries = Object.entries(dependencies);
  const results = await Promise.all(
    entries.map(async ([name, constraint]) => {
      const resolved2 = await resolveVersionConstraint(name, constraint);
      return [name, resolved2];
    })
  );
  const resolved = {};
  for (const [name, version] of results) {
    if (version) {
      resolved[name] = version;
    }
  }
  return resolved;
}
const fetchUserEmail = defineCachedFunction(
  async (username) => {
    var _a;
    const handle = username.trim();
    if (!handle) return null;
    const params = new URLSearchParams({
      text: `maintainer:${handle}`,
      size: "20"
    });
    const response = await $fetch(`${NPM_REGISTRY}/-/v1/search?${params}`);
    const lowerHandle = handle.toLowerCase();
    for (const result of response.objects) {
      const maintainers = (_a = result.package.maintainers) != null ? _a : [];
      const match = maintainers.find(
        (person) => {
          var _a2, _b;
          return ((_a2 = person.username) == null ? void 0 : _a2.toLowerCase()) === lowerHandle || ((_b = person.name) == null ? void 0 : _b.toLowerCase()) === lowerHandle;
        }
      );
      if (match == null ? void 0 : match.email) {
        return match.email;
      }
    }
    return null;
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_DAY,
    swr: true,
    name: "npm-user-email",
    getKey: (username) => `npm-user-email:${username.trim().toLowerCase()}`
  }
);

async function getGravatarFromUsername(username) {
  const handle = username.trim();
  if (!handle) return null;
  const email = await fetchUserEmail(handle);
  if (!email) return null;
  const trimmedEmail = email.trim().toLowerCase();
  return createHash("md5").update(trimmedEmail).digest("hex");
}

function flattenFileTree(tree) {
  const files = /* @__PURE__ */ new Set();
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.type === "file") {
        files.add(node.path);
      } else if (node.children) {
        traverse(node.children);
      }
    }
  }
  traverse(tree);
  return files;
}
function normalizePath(path) {
  const parts = path.split("/");
  const result = [];
  for (const part of parts) {
    if (part === "." || part === "") {
      continue;
    }
    if (part === "..") {
      result.pop();
    } else {
      result.push(part);
    }
  }
  return result.join("/");
}
function dirname$1(path) {
  const lastSlash = path.lastIndexOf("/");
  return lastSlash === -1 ? "" : path.substring(0, lastSlash);
}
function getExtensionPriority(sourceFile) {
  const ext = sourceFile.split(".").slice(1).join(".");
  if (ext === "d.ts" || ext === "d.mts" || ext === "d.cts") {
    return [
      [],
      // exact match first
      [".d.ts", ".d.mts", ".d.cts"],
      [".ts", ".mts", ".cts"],
      [".js", ".mjs", ".cjs"],
      [".tsx", ".jsx"],
      [".json"]
    ];
  }
  if (ext === "ts" || ext === "tsx") {
    return [[], [".ts", ".tsx"], [".d.ts"], [".js", ".jsx"], [".json"]];
  }
  if (ext === "mts") {
    return [[], [".mts"], [".d.mts", ".d.ts"], [".mjs", ".js"], [".json"]];
  }
  if (ext === "cts") {
    return [[], [".cts"], [".d.cts", ".d.ts"], [".cjs", ".js"], [".json"]];
  }
  if (ext === "js" || ext === "jsx") {
    return [[], [".js", ".jsx"], [".ts", ".tsx"], [".json"]];
  }
  if (ext === "mjs") {
    return [[], [".mjs"], [".js"], [".mts", ".ts"], [".json"]];
  }
  if (ext === "cjs") {
    return [[], [".cjs"], [".js"], [".cts", ".ts"], [".json"]];
  }
  return [[], [".ts", ".js"], [".d.ts"], [".json"]];
}
function getIndexExtensions(sourceFile) {
  const ext = sourceFile.split(".").slice(1).join(".");
  if (ext === "d.ts" || ext === "d.mts" || ext === "d.cts") {
    return ["index.d.ts", "index.d.mts", "index.d.cts", "index.ts", "index.js"];
  }
  if (ext === "mts" || ext === "mjs") {
    return ["index.mts", "index.mjs", "index.ts", "index.js"];
  }
  if (ext === "cts" || ext === "cjs") {
    return ["index.cts", "index.cjs", "index.ts", "index.js"];
  }
  if (ext === "ts" || ext === "tsx") {
    return ["index.ts", "index.tsx", "index.js", "index.jsx"];
  }
  return ["index.js", "index.ts", "index.mjs", "index.cjs"];
}
function resolveRelativeImport(specifier, currentFile, files) {
  const cleanSpecifier = specifier.replace(/^['"]|['"]$/g, "").trim();
  if (!cleanSpecifier.startsWith(".")) {
    return null;
  }
  const currentDir = dirname$1(currentFile);
  const basePath = currentDir ? normalizePath(`${currentDir}/${cleanSpecifier}`) : normalizePath(cleanSpecifier);
  if (!basePath || basePath.startsWith("..")) {
    return null;
  }
  const extensionGroups = getExtensionPriority(currentFile);
  const indexExtensions = getIndexExtensions(currentFile);
  for (const extensions of extensionGroups) {
    if (extensions.length === 0) {
      if (files.has(basePath)) {
        return { path: basePath };
      }
    } else {
      for (const ext of extensions) {
        const pathWithExt = basePath + ext;
        if (files.has(pathWithExt)) {
          return { path: pathWithExt };
        }
      }
    }
  }
  for (const indexFile of indexExtensions) {
    const indexPath = `${basePath}/${indexFile}`;
    if (files.has(indexPath)) {
      return { path: indexPath };
    }
  }
  return null;
}
function createImportResolver(files, currentFile, packageName, version) {
  return (specifier) => {
    const resolved = resolveRelativeImport(specifier, currentFile, files);
    if (resolved) {
      return `/package-code/${packageName}/v/${version}/${resolved.path}`;
    }
    return null;
  };
}

const calculateInstallSize = defineCachedFunction(
  async (name, version) => {
    var _a;
    const resolved = await resolveDependencyTree(name, version);
    const selfKey = `${name}@${version}`;
    const selfEntry = resolved.get(selfKey);
    const selfSize = (_a = selfEntry == null ? void 0 : selfEntry.size) != null ? _a : 0;
    const dependencies = [];
    let totalSize = selfSize;
    let dependencyCount = 0;
    for (const [key, dep] of resolved) {
      if (key === selfKey) continue;
      dependencies.push({
        name: dep.name,
        version: dep.version,
        size: dep.size,
        optional: dep.optional || void 0
      });
      totalSize += dep.size;
      dependencyCount++;
    }
    dependencies.sort((a, b) => b.size - a.size);
    return {
      package: name,
      version,
      selfSize,
      totalSize,
      dependencyCount,
      dependencies
    };
  },
  {
    // Cache for 1 hour - dependency resolutions can change with new releases
    maxAge: 60 * 60,
    swr: true,
    name: "install-size",
    getKey: (name, version) => `${name}@${version}`
  }
);

const JSR_REGISTRY = "https://jsr.io";
const fetchJsrPackageInfo = defineCachedFunction(
  async (npmPackageName) => {
    if (!npmPackageName.startsWith("@")) {
      return { exists: false };
    }
    const match = npmPackageName.match(/^@([^/]+)\/(.+)$/);
    if (!match) {
      return { exists: false };
    }
    const [, scope, name] = match;
    try {
      const meta = await $fetch(`${JSR_REGISTRY}/@${scope}/${name}/meta.json`, {
        // Short timeout since this is a nice-to-have feature
        timeout: 3e3
      });
      const versions = Object.entries(meta.versions).filter(([, v]) => !v.yanked).map(([version]) => version);
      versions.sort();
      const latestVersion = versions[versions.length - 1];
      return {
        exists: true,
        scope: meta.scope,
        name: meta.name,
        url: `${JSR_REGISTRY}/@${meta.scope}/${meta.name}`,
        latestVersion
      };
    } catch {
      return { exists: false };
    }
  },
  {
    maxAge: 60 * 60 * 24,
    // 1 day
    swr: true,
    name: "jsr-package-info",
    getKey: (name) => name
  }
);

function parsePackageParams(segments) {
  const vIndex = segments.indexOf("v");
  if (vIndex !== -1 && vIndex < segments.length - 1) {
    return {
      rawPackageName: segments.slice(0, vIndex).join("/"),
      rawVersion: segments.slice(vIndex + 1).join("/")
    };
  }
  return {
    rawPackageName: segments.join("/"),
    rawVersion: void 0
  };
}

const SLSA_PROVENANCE_V1 = "https://slsa.dev/provenance/v1";
const SLSA_PROVENANCE_V0_2 = "https://slsa.dev/provenance/v0.2";
const PROVIDER_IDS = {
  "https://github.com/actions/runner/github-hosted": {
    provider: "github",
    providerLabel: "GitHub Actions"
  },
  "https://github.com/actions/runner": { provider: "github", providerLabel: "GitHub Actions" }
};
function getProviderInfo(builderId) {
  const exact = PROVIDER_IDS[builderId];
  if (exact) return exact;
  if (builderId.includes("gitlab.com") && builderId.includes("/runners/"))
    return { provider: "gitlab", providerLabel: "GitLab CI" };
  return { provider: "unknown", providerLabel: builderId ? "CI" : "Unknown" };
}
const SIGSTORE_SEARCH_BASE = "https://search.sigstore.dev";
function decodePayload(payloadBase64) {
  if (!payloadBase64 || typeof payloadBase64 !== "string") return null;
  try {
    const decoded = Buffer.from(payloadBase64, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}
function repoUrlToCommitUrl(repository, sha) {
  const normalized = repository.replace(/\/$/, "").replace(/\.git$/, "");
  if (normalized.includes("github.com")) return `${normalized}/commit/${sha}`;
  if (normalized.includes("gitlab.com")) return `${normalized}/-/commit/${sha}`;
  return `${normalized}/commit/${sha}`;
}
function repoUrlToBlobUrl(repository, path, ref = "main") {
  const normalized = repository.replace(/\/$/, "").replace(/\.git$/, "");
  if (normalized.includes("github.com")) return `${normalized}/blob/${ref}/${path}`;
  if (normalized.includes("gitlab.com")) return `${normalized}/-/blob/${ref}/${path}`;
  return `${normalized}/blob/${ref}/${path}`;
}
function parseAttestationToProvenanceDetails(response) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const body = response;
  const list = body == null ? void 0 : body.attestations;
  if (!Array.isArray(list)) return null;
  const slsaAttestation = (_a = list.find((a) => a.predicateType === SLSA_PROVENANCE_V1)) != null ? _a : list.find((a) => a.predicateType === SLSA_PROVENANCE_V0_2);
  if (!((_b = slsaAttestation == null ? void 0 : slsaAttestation.bundle) == null ? void 0 : _b.dsseEnvelope)) return null;
  const payload = decodePayload(slsaAttestation.bundle.dsseEnvelope.payload);
  if (!(payload == null ? void 0 : payload.predicate)) return null;
  const pred = payload.predicate;
  const builderId = (_g = (_f = (_d = (_c = pred.runDetails) == null ? void 0 : _c.builder) == null ? void 0 : _d.id) != null ? _f : (_e = pred.builder) == null ? void 0 : _e.id) != null ? _g : "";
  const providerInfo = getProviderInfo(builderId);
  const workflow = (_i = (_h = pred.buildDefinition) == null ? void 0 : _h.externalParameters) == null ? void 0 : _i.workflow;
  const repo = (_k = (_j = workflow == null ? void 0 : workflow.repository) == null ? void 0 : _j.replace(/\/$/, "").replace(/\.git$/, "")) != null ? _k : "";
  const workflowPath = (_l = workflow == null ? void 0 : workflow.path) != null ? _l : "";
  const ref = (_n = (_m = workflow == null ? void 0 : workflow.ref) == null ? void 0 : _m.replace(/^refs\/heads\//, "").replace(/^refs\/tags\//, "")) != null ? _n : "main";
  const resolved = (_p = (_o = pred.buildDefinition) == null ? void 0 : _o.resolvedDependencies) == null ? void 0 : _p[0];
  const commitSha = (_r = (_q = resolved == null ? void 0 : resolved.digest) == null ? void 0 : _q.gitCommit) != null ? _r : "";
  const rawInvocationId = (_v = (_t = (_s = pred.runDetails) == null ? void 0 : _s.metadata) == null ? void 0 : _t.invocationId) != null ? _v : (_u = pred.metadata) == null ? void 0 : _u.buildInvocationId;
  const buildSummaryUrl = (rawInvocationId == null ? void 0 : rawInvocationId.startsWith("http://")) || (rawInvocationId == null ? void 0 : rawInvocationId.startsWith("https://")) ? rawInvocationId : void 0;
  const sourceCommitUrl = repo && commitSha ? repoUrlToCommitUrl(repo, commitSha) : void 0;
  const buildFileUrl = repo && workflowPath ? repoUrlToBlobUrl(repo, workflowPath, ref) : void 0;
  const tlogEntries = (_w = slsaAttestation.bundle.verificationMaterial) == null ? void 0 : _w.tlogEntries;
  const logIndex = (_x = tlogEntries == null ? void 0 : tlogEntries[0]) == null ? void 0 : _x.logIndex;
  const publicLedgerUrl = logIndex ? `${SIGSTORE_SEARCH_BASE}/?logIndex=${logIndex}` : void 0;
  return {
    provider: providerInfo.provider,
    providerLabel: providerInfo.providerLabel,
    buildSummaryUrl,
    sourceCommitUrl,
    sourceCommitSha: commitSha || void 0,
    buildFileUrl,
    buildFilePath: workflowPath || void 0,
    publicLedgerUrl
  };
}

const PLAYGROUND_PROVIDERS = [
  {
    id: "stackblitz",
    name: "StackBlitz",
    domains: ["stackblitz.com", "stackblitz.io"],
    icon: "stackblitz"
  },
  {
    id: "codesandbox",
    name: "CodeSandbox",
    domains: ["codesandbox.io", "githubbox.com", "csb.app"],
    icon: "codesandbox"
  },
  {
    id: "codepen",
    name: "CodePen",
    domains: ["codepen.io"],
    icon: "codepen"
  },
  {
    id: "jsfiddle",
    name: "JSFiddle",
    domains: ["jsfiddle.net"],
    icon: "jsfiddle"
  },
  {
    id: "replit",
    name: "Replit",
    domains: ["repl.it", "replit.com"],
    icon: "replit"
  },
  {
    id: "gitpod",
    name: "Gitpod",
    domains: ["gitpod.io"],
    icon: "gitpod"
  },
  {
    id: "vue-playground",
    name: "Vue Playground",
    domains: ["play.vuejs.org", "sfc.vuejs.org"],
    icon: "vue"
  },
  {
    id: "nuxt-new",
    name: "Nuxt Starter",
    domains: ["nuxt.new"],
    icon: "nuxt"
  },
  {
    id: "vite-new",
    name: "Vite Starter",
    domains: ["vite.new"],
    icon: "vite"
  }
];
function matchPlaygroundProvider(url) {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    for (const provider of PLAYGROUND_PROVIDERS) {
      for (const domain of provider.domains) {
        if (hostname === domain || hostname.endsWith(`.${domain}`)) {
          return provider;
        }
      }
    }
  } catch {
  }
  return null;
}
const ALLOWED_TAGS = [
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "br",
  "hr",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
  "a",
  "strong",
  "em",
  "del",
  "s",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "img",
  "picture",
  "source",
  "details",
  "summary",
  "div",
  "span",
  "sup",
  "sub",
  "kbd",
  "mark",
  "button"
];
const ALLOWED_ATTR = {
  "*": ["id"],
  // Allow id on all tags
  "a": ["href", "title", "target", "rel"],
  "img": ["src", "alt", "title", "width", "height", "align"],
  "source": ["src", "srcset", "type", "media"],
  "button": ["class", "title", "type", "aria-label", "data-copy"],
  "th": ["colspan", "rowspan", "align"],
  "td": ["colspan", "rowspan", "align"],
  "h3": ["data-level", "align"],
  "h4": ["data-level", "align"],
  "h5": ["data-level", "align"],
  "h6": ["data-level", "align"],
  "blockquote": ["data-callout"],
  "details": ["open"],
  "code": ["class"],
  "pre": ["class", "style"],
  "span": ["class", "style"],
  "div": ["class", "style", "align"],
  "p": ["align"]
};
function slugify(text) {
  return text.replace(/<[^>]*>/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function resolveUrl(url, packageName, repoInfo) {
  var _a, _b;
  if (!url) return url;
  if (url.startsWith("#")) {
    return `#user-content-${url.slice(1)}`;
  }
  if (hasProtocol(url, { acceptRelative: true })) {
    try {
      const parsed = new URL(url, "https://example.com");
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return url;
      }
    } catch {
    }
    if (url.startsWith("//")) {
      return url;
    }
  }
  const isMarkdownFile = /\.md$/i.test((_b = (_a = url.split("?")[0]) == null ? void 0 : _a.split("#")[0]) != null ? _b : "");
  if (repoInfo == null ? void 0 : repoInfo.rawBaseUrl) {
    let relativePath = url.replace(/^\.\//, "");
    if (repoInfo.directory) {
      const dirParts = repoInfo.directory.split("/").filter(Boolean);
      while (relativePath.startsWith("../")) {
        relativePath = relativePath.slice(3);
        dirParts.pop();
      }
      if (dirParts.length > 0) {
        relativePath = `${dirParts.join("/")}/${relativePath}`;
      }
    }
    const baseUrl = isMarkdownFile ? repoInfo.blobBaseUrl : repoInfo.rawBaseUrl;
    return `${baseUrl}/${relativePath}`;
  }
  if (isMarkdownFile) {
    return url;
  }
  return `https://cdn.jsdelivr.net/npm/${packageName}/${url.replace(/^\.\//, "")}`;
}
function resolveImageUrl(url, packageName, repoInfo) {
  const resolved = resolveUrl(url, packageName, repoInfo);
  if (repoInfo == null ? void 0 : repoInfo.provider) {
    return convertBlobOrFileToRawUrl(resolved, repoInfo.provider);
  }
  return resolved;
}
function prefixId(tagName, attribs) {
  if (attribs.id && !attribs.id.startsWith("user-content-")) {
    attribs.id = `user-content-${attribs.id}`;
  }
  return { tagName, attribs };
}
async function renderReadmeHtml(content, packageName, repoInfo) {
  if (!content) return { html: "", playgroundLinks: [], toc: [] };
  const shiki = await getShikiHighlighter();
  const renderer = new marked.Renderer();
  const collectedLinks = [];
  const seenUrls = /* @__PURE__ */ new Set();
  const toc = [];
  const usedSlugs = /* @__PURE__ */ new Map();
  let lastSemanticLevel = 2;
  renderer.heading = function({ tokens, depth }) {
    var _a;
    let semanticLevel;
    if (depth === 1) {
      semanticLevel = 3;
    } else {
      const maxAllowed = Math.min(lastSemanticLevel + 1, 6);
      semanticLevel = Math.min(depth + 2, maxAllowed);
    }
    lastSemanticLevel = semanticLevel;
    const text = this.parser.parseInline(tokens);
    let slug = slugify(text);
    if (!slug) slug = "heading";
    const count = (_a = usedSlugs.get(slug)) != null ? _a : 0;
    usedSlugs.set(slug, count + 1);
    const uniqueSlug = count === 0 ? slug : `${slug}-${count}`;
    const id = `user-content-${uniqueSlug}`;
    const plainText = text.replace(/<[^>]*>/g, "").trim();
    if (plainText) {
      toc.push({ text: plainText, id, depth });
    }
    return `<h${semanticLevel} id="${id}" data-level="${depth}">${text}</h${semanticLevel}>
`;
  };
  renderer.code = ({ text, lang }) => {
    const html = highlightCodeSync(shiki, text, lang || "text");
    return `<div class="readme-code-block" >
<button type="button" class="readme-copy-button" aria-label="Copy code" check-icon="i-carbon:checkmark" copy-icon="i-carbon:copy" data-copy>
<span class="i-carbon:copy" aria-hidden="true"></span>
<span class="sr-only">Copy code</span>
</button>
${html}
</div>`;
  };
  renderer.image = ({ href, title, text }) => {
    const resolvedHref = resolveImageUrl(href, packageName, repoInfo);
    const titleAttr = title ? ` title="${title}"` : "";
    const altAttr = text ? ` alt="${text}"` : "";
    return `<img src="${resolvedHref}"${altAttr}${titleAttr}>`;
  };
  renderer.link = function({ href, title, tokens }) {
    const resolvedHref = resolveUrl(href, packageName, repoInfo);
    const text = this.parser.parseInline(tokens);
    const titleAttr = title ? ` title="${title}"` : "";
    const isExternal = resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://");
    const relAttr = isExternal ? ' rel="nofollow noreferrer noopener"' : "";
    const targetAttr = isExternal ? ' target="_blank"' : "";
    const provider = matchPlaygroundProvider(resolvedHref);
    if (provider && !seenUrls.has(resolvedHref)) {
      seenUrls.add(resolvedHref);
      const plainText = text.replace(/<[^>]*>/g, "").trim();
      collectedLinks.push({
        url: resolvedHref,
        provider: provider.id,
        providerName: provider.name,
        label: plainText || title || provider.name
      });
    }
    return `<a href="${resolvedHref}"${titleAttr}${relAttr}${targetAttr}>${text}</a>`;
  };
  renderer.blockquote = function({ tokens }) {
    const body = this.parser.parse(tokens);
    const calloutMatch = body.match(/^<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:<br>)?\s*/i);
    if (calloutMatch == null ? void 0 : calloutMatch[1]) {
      const calloutType = calloutMatch[1].toLowerCase();
      const cleanedBody = body.replace(calloutMatch[0], "<p>");
      return `<blockquote data-callout="${calloutType}">${cleanedBody}</blockquote>
`;
    }
    return `<blockquote>${body}</blockquote>
`;
  };
  marked.setOptions({ renderer });
  const rawHtml = marked.parse(content);
  const sanitized = sanitizeHtml(rawHtml, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTR,
    allowedSchemes: ["http", "https", "mailto"],
    // Transform img src URLs (GitHub blob → raw, relative → GitHub raw)
    transformTags: {
      img: (tagName, attribs) => {
        if (attribs.src) {
          attribs.src = resolveImageUrl(attribs.src, packageName, repoInfo);
        }
        return { tagName, attribs };
      },
      source: (tagName, attribs) => {
        if (attribs.src) {
          attribs.src = resolveImageUrl(attribs.src, packageName, repoInfo);
        }
        if (attribs.srcset) {
          attribs.srcset = attribs.srcset.split(",").map((entry) => {
            const parts = entry.trim().split(/\s+/);
            const url = parts[0];
            if (!url) return entry.trim();
            const descriptor = parts[1];
            const resolvedUrl = resolveImageUrl(url, packageName, repoInfo);
            return descriptor ? `${resolvedUrl} ${descriptor}` : resolvedUrl;
          }).join(", ");
        }
        return { tagName, attribs };
      },
      a: (tagName, attribs) => {
        if (attribs.href && hasProtocol(attribs.href, { acceptRelative: true })) {
          attribs.rel = "nofollow noreferrer noopener";
          attribs.target = "_blank";
        }
        return { tagName, attribs };
      },
      div: prefixId,
      p: prefixId,
      span: prefixId,
      section: prefixId,
      article: prefixId
    }
  });
  return {
    html: convertToEmoji(sanitized),
    playgroundLinks: collectedLinks,
    toc
  };
}

const MAX_SKILL_FILE_SIZE = 500 * 1024;
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw createError$1({ statusCode: 400, message: "Invalid SKILL.md: missing YAML frontmatter" });
  }
  const yamlBlock = match[1];
  const content = match[2];
  const frontmatter = {};
  let currentKey = "";
  let inMetadata = false;
  const metadata = {};
  for (const line of yamlBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    if (line.startsWith("  ") && inMetadata) {
      const [key, ...valueParts] = trimmed.split(":");
      if (key && valueParts.length) {
        metadata[key.trim()] = valueParts.join(":").trim().replace(/^["']|["']$/g, "");
      }
    } else {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        currentKey = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        inMetadata = currentKey === "metadata" && !value;
        if (!inMetadata && value) {
          frontmatter[currentKey] = value.replace(/^["']|["']$/g, "");
        }
      }
    }
  }
  if (Object.keys(metadata).length > 0) {
    frontmatter.metadata = metadata;
  }
  if (!frontmatter.name || !frontmatter.description) {
    throw createError$1({
      statusCode: 400,
      message: "Invalid SKILL.md: missing required name or description"
    });
  }
  return { frontmatter, content };
}
function findSkillDirs(tree) {
  const skillsDir = tree.find((node) => node.type === "directory" && node.name === "skills");
  if (!(skillsDir == null ? void 0 : skillsDir.children)) return [];
  return skillsDir.children.filter(
    (child) => {
      var _a;
      return child.type === "directory" && ((_a = child.children) == null ? void 0 : _a.some((f) => f.type === "file" && f.name === "SKILL.md"));
    }
  ).map((child) => ({ name: child.name, children: child.children || [] }));
}
const countFilesRecursive = (nodes) => nodes.reduce((acc, n) => acc + (n.type === "file" ? 1 : countFilesRecursive(n.children || [])), 0);
function countSkillFiles(children) {
  const counts = {};
  for (const child of children) {
    if (child.type !== "directory") continue;
    const name = child.name.toLowerCase();
    const count = countFilesRecursive(child.children || []);
    if (count === 0) continue;
    if (name === "scripts") counts.scripts = count;
    else if (name === "references" || name === "refs")
      counts.references = (counts.references || 0) + count;
    else if (name === "assets") counts.assets = count;
  }
  return Object.keys(counts).length ? counts : void 0;
}
async function fetchSkillFile(packageName, version, filePath) {
  const url = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/${filePath}`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw createError$1({ statusCode: 404, message: "File not found" });
    }
    throw createError$1({ statusCode: 502, message: "Failed to fetch file from jsDelivr" });
  }
  const contentLength = response.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_SKILL_FILE_SIZE) {
    throw createError$1({
      statusCode: 413,
      message: `File too large (${(parseInt(contentLength, 10) / 1024 / 1024).toFixed(1)}MB). Maximum size is ${MAX_SKILL_FILE_SIZE / 1024}KB.`
    });
  }
  const content = await response.text();
  if (content.length > MAX_SKILL_FILE_SIZE) {
    throw createError$1({
      statusCode: 413,
      message: `File too large (${(content.length / 1024 / 1024).toFixed(1)}MB). Maximum size is ${MAX_SKILL_FILE_SIZE / 1024}KB.`
    });
  }
  return content;
}
async function fetchSkillContent(packageName, version, skillName) {
  const raw = await fetchSkillFile(packageName, version, `skills/${skillName}/SKILL.md`);
  return parseFrontmatter(raw);
}
function validateSkill(frontmatter) {
  const warnings = [];
  if (!frontmatter.license) {
    warnings.push({ type: "warning", message: "No license specified" });
  }
  if (!frontmatter.compatibility) {
    warnings.push({ type: "warning", message: "No compatibility info" });
  }
  return warnings;
}
async function fetchSkillsList(packageName, version, skillDirs) {
  const skills = await Promise.all(
    skillDirs.map(async ({ name: dirName, children }) => {
      try {
        const { frontmatter } = await fetchSkillContent(packageName, version, dirName);
        const warnings = validateSkill(frontmatter);
        const fileCounts = countSkillFiles(children);
        const item = {
          name: frontmatter.name,
          description: frontmatter.description,
          dirName,
          license: frontmatter.license,
          compatibility: frontmatter.compatibility,
          warnings: warnings.length > 0 ? warnings : void 0,
          fileCounts
        };
        return item;
      } catch {
        return null;
      }
    })
  );
  return skills.filter((s) => s !== null);
}
async function fetchSkillsListForWellKnown(packageName, version, skillNames) {
  const skills = await Promise.all(
    skillNames.map(async (dirName) => {
      try {
        const { frontmatter } = await fetchSkillContent(packageName, version, dirName);
        return { name: dirName, description: frontmatter.description, files: ["SKILL.md"] };
      } catch {
        return null;
      }
    })
  );
  return skills.filter((s) => s !== null);
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"twitter:card","content":"summary_large_image"}],"link":[{"rel":"search","type":"application/opensearchdescription+xml","title":"npm","href":"/opensearch.xml"}],"style":[],"script":[],"noscript":[],"htmlAttrs":{"lang":"en-US"},"title":"npmx"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL("", match.path));
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _sH7oZzloj9iS_rXERGAtgrAn66JDknwP9Zp5w6RXgiY = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async ({ event }) => {
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/sEXdXGnD") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      await sendRedirect(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"npmx-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"theme\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"theme\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"dark\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _9vcjAATVbwN0rUYCPzWhulYa5xY7gZ2MLUmNQ6rjb64 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}
function generateFetchCacheKey(url, method = "GET", body) {
  const urlObj = typeof url === "string" ? new URL(url) : url;
  const bodyHash = body ? simpleHash(JSON.stringify(body)) : "";
  const searchHash = urlObj.search ? simpleHash(urlObj.search) : "";
  const parts = [
    FETCH_CACHE_VERSION,
    urlObj.host,
    method.toUpperCase(),
    urlObj.pathname,
    searchHash,
    bodyHash
  ].filter(Boolean);
  return parts.join(":");
}
const _SZqlklXq2Q0Txed4w7q1LrwGRTou8FmZWCd87BHPyVo = defineNitroPlugin((nitroApp) => {
  const storage = useStorage(FETCH_CACHE_STORAGE_BASE);
  function createCachedFetch(event) {
    return async (url, options = {}, ttl = FETCH_CACHE_DEFAULT_TTL) => {
      if (!isAllowedDomain(url)) {
        const data2 = await $fetch$1(url, options);
        return { data: data2, isStale: false, cachedAt: null };
      }
      const method = options.method || "GET";
      const cacheKey = generateFetchCacheKey(url, method, options.body);
      let cached = null;
      try {
        cached = await storage.getItem(cacheKey);
      } catch (error) {
      }
      if (cached) {
        const isStale = isCacheEntryStale$1(cached);
        if (!isStale) {
          return { data: cached.data, isStale: false, cachedAt: cached.cachedAt };
        }
        event.waitUntil(
          (async () => {
            try {
              const freshData = await $fetch$1(url, options);
              const entry = {
                data: freshData,
                status: 200,
                headers: {},
                cachedAt: Date.now(),
                ttl
              };
              await storage.setItem(cacheKey, entry);
              if (false) ;
            } catch (error) {
            }
          })()
        );
        return { data: cached.data, isStale: true, cachedAt: cached.cachedAt };
      }
      const data = await $fetch$1(url, options);
      const cachedAt = Date.now();
      event.waitUntil(
        (async () => {
          try {
            const entry = {
              data,
              status: 200,
              headers: {},
              cachedAt,
              ttl
            };
            await storage.setItem(cacheKey, entry);
          } catch (error) {
          }
        })()
      );
      return { data, isStale: false, cachedAt };
    };
  }
  nitroApp.hooks.hook("request", (event) => {
    var _a;
    (_a = event.context).cachedFetch || (_a.cachedFetch = createCachedFetch(event));
  });
});

const plugins = [
  _SmPnDpRvCvP8zH4MUVDdDuWhx3lA45xsNgsvlq30BE,
_cUuuyVJjvtFumvigOL7z4D3PeHs68iyGFYSny_kN4,
_sH7oZzloj9iS_rXERGAtgrAn66JDknwP9Zp5w6RXgiY,
_9vcjAATVbwN0rUYCPzWhulYa5xY7gZ2MLUmNQ6rjb64,
_SZqlklXq2Q0Txed4w7q1LrwGRTou8FmZWCd87BHPyVo
];

const assets = {
  "/200.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"113d-ZS6P6iIpOpO3QsDjhwCUj51o1R0\"",
    "mtime": "2026-02-06T00:55:32.362Z",
    "size": 4413,
    "path": "../public/200.html"
  },
  "/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-+C/Btp8NKTIrEgfTij73qE7itH8\"",
    "mtime": "2026-02-06T00:55:32.840Z",
    "size": 69,
    "path": "../public/_payload.json"
  },
  "/apple-touch-icon-180x180.png": {
    "type": "image/png",
    "etag": "\"2e2-VLVkcPn3OpHPlEXxTQ/dzOSZjRE\"",
    "mtime": "2026-02-06T00:55:35.937Z",
    "size": 738,
    "path": "../public/apple-touch-icon-180x180.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"207-tt7DvpzvvO2FmBwoOyMnNey8QcQ\"",
    "mtime": "2026-02-06T00:55:35.943Z",
    "size": 519,
    "path": "../public/favicon.ico"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b5-G2pIlMyimVowBSCXj6LiFAwGJpU\"",
    "mtime": "2026-02-06T00:55:35.730Z",
    "size": 437,
    "path": "../public/favicon.svg"
  },
  "/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"58d9-AHTncLo3zxI4hnpev7xJ3byL9uE\"",
    "mtime": "2026-02-06T00:55:32.522Z",
    "size": 22745,
    "path": "../public/index.html"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b5-G2pIlMyimVowBSCXj6LiFAwGJpU\"",
    "mtime": "2026-02-06T00:55:35.730Z",
    "size": 437,
    "path": "../public/logo.svg"
  },
  "/maskable-icon-512x512.png": {
    "type": "image/png",
    "etag": "\"821-61Hl0dDCekNjAXh3T6ggARLTbYY\"",
    "mtime": "2026-02-06T00:55:35.926Z",
    "size": 2081,
    "path": "../public/maskable-icon-512x512.png"
  },
  "/oauth-client-metadata.json": {
    "type": "application/json",
    "etag": "\"18f-bhb7oWVuni9fnHznxSOHIjWftUI\"",
    "mtime": "2026-02-06T00:55:32.362Z",
    "size": 399,
    "path": "../public/oauth-client-metadata.json"
  },
  "/pwa-192x192.png": {
    "type": "image/png",
    "etag": "\"3e5-H3bAfip2/FAKMw3oCB2dgrHcLVA\"",
    "mtime": "2026-02-06T00:55:35.848Z",
    "size": 997,
    "path": "../public/pwa-192x192.png"
  },
  "/pwa-512x512.png": {
    "type": "image/png",
    "etag": "\"7c9-S1/Z9JY2pz8hQfMiE1VOWmH5NyA\"",
    "mtime": "2026-02-06T00:55:35.882Z",
    "size": 1993,
    "path": "../public/pwa-512x512.png"
  },
  "/pwa-64x64.png": {
    "type": "image/png",
    "etag": "\"1cd-wYW5odAxE0Ear8mtY48n668bOb0\"",
    "mtime": "2026-02-06T00:55:35.841Z",
    "size": 461,
    "path": "../public/pwa-64x64.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"7a-moDf16LdjkizouGZpqw41PYyak0\"",
    "mtime": "2026-02-06T00:55:35.766Z",
    "size": 122,
    "path": "../public/robots.txt"
  },
  "/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-CheBg6_RDr9geh9VxFDbypGWtW1kp21S9XQO2C0HoaY.woff": {
    "type": "font/woff",
    "etag": "\"899c-YVXzTwAg2UNe1sozFSk8cvxnE/U\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 35228,
    "path": "../public/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-CheBg6_RDr9geh9VxFDbypGWtW1kp21S9XQO2C0HoaY.woff"
  },
  "/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-UvlbS8pEHvbCPHhlTdh08_bk6vUgDtCgRQ9IfTw4R8c.woff": {
    "type": "font/woff",
    "etag": "\"8ec4-AGwH44lPWLI6QQInnp58QjPkhvc\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 36548,
    "path": "../public/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-UvlbS8pEHvbCPHhlTdh08_bk6vUgDtCgRQ9IfTw4R8c.woff"
  },
  "/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-bttogbVYxZ4HuE8jYDYBDBfVXC_neRviApPfv_5-Y0U.woff": {
    "type": "font/woff",
    "etag": "\"89d8-R7x2bx4ERBsMQCUlSRUjOW/V1xc\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 35288,
    "path": "../public/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-bttogbVYxZ4HuE8jYDYBDBfVXC_neRviApPfv_5-Y0U.woff"
  },
  "/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-tQEHGgKg4Z9ypiJ7wmiohXwUuz4qqoeiqgwM5fK5pnI.woff": {
    "type": "font/woff",
    "etag": "\"86ec-Oyv+46lrN8ha5fcnt7NIUEmx4x0\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 34540,
    "path": "../public/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-tQEHGgKg4Z9ypiJ7wmiohXwUuz4qqoeiqgwM5fK5pnI.woff"
  },
  "/_fonts/1xv7aEbTueF3YeE8nN5uPloPWq5ORfusEaPnuNVSazw-bWs3_klpcDK9SnLk9GCiQMdhM3xdSwYL-bUwM-XzihA.woff2": {
    "type": "font/woff2",
    "etag": "\"3bbc-yIq31clx5fmYaFvR64IwWmNC1Wg\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 15292,
    "path": "../public/_fonts/1xv7aEbTueF3YeE8nN5uPloPWq5ORfusEaPnuNVSazw-bWs3_klpcDK9SnLk9GCiQMdhM3xdSwYL-bUwM-XzihA.woff2"
  },
  "/_fonts/B4TjMYiMc_uvQl1ZPjAvT5UpGkUP_0_3f861-mJlHFk-t81UzrwN9y3nUoppUSul_Ckx0SfF8AtCRCVOQ6DNoi8.woff2": {
    "type": "font/woff2",
    "etag": "\"6ee4-pjaCfR+0f5/d+U1V7Y8l6FFV0eo\"",
    "mtime": "2026-02-06T00:55:35.735Z",
    "size": 28388,
    "path": "../public/_fonts/B4TjMYiMc_uvQl1ZPjAvT5UpGkUP_0_3f861-mJlHFk-t81UzrwN9y3nUoppUSul_Ckx0SfF8AtCRCVOQ6DNoi8.woff2"
  },
  "/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-z4269tsqp9KjdmRIB3Um403sBivmhD2kbyK6gltkuCM.woff": {
    "type": "font/woff",
    "etag": "\"8aa8-MQZn27U+6bOGjrid4c6B97WX+vo\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 35496,
    "path": "../public/_fonts/1ZTlEDqU4DtwDJiND8f6qaugUpa0RIDvQl-v7iM6l54-z4269tsqp9KjdmRIB3Um403sBivmhD2kbyK6gltkuCM.woff"
  },
  "/_fonts/B4XYTmqECKGO9n0zrFAlXFGSLhSzMlW_Nn_uM0SnSn0-Q3PEIfzrk5Se4RiLlWaFLtfP1u4ziB_W7z5xjPSthMY.woff2": {
    "type": "font/woff2",
    "etag": "\"3140-hgJLJd4hcykvj1g23Dav18tAYi4\"",
    "mtime": "2026-02-06T00:55:35.734Z",
    "size": 12608,
    "path": "../public/_fonts/B4XYTmqECKGO9n0zrFAlXFGSLhSzMlW_Nn_uM0SnSn0-Q3PEIfzrk5Se4RiLlWaFLtfP1u4ziB_W7z5xjPSthMY.woff2"
  },
  "/_fonts/PvQGA9Wjw0v5beTMDlAbhFZtFsd7PjAovDfhkiht2-g-ViVurePxxMFVOHLra_2YdxwnXzH_7ENiQgnDz9KTx24.woff2": {
    "type": "font/woff2",
    "etag": "\"3954-t7e3J6H/3Zx5M4MjoG9qgLG2+9A\"",
    "mtime": "2026-02-06T00:55:35.735Z",
    "size": 14676,
    "path": "../public/_fonts/PvQGA9Wjw0v5beTMDlAbhFZtFsd7PjAovDfhkiht2-g-ViVurePxxMFVOHLra_2YdxwnXzH_7ENiQgnDz9KTx24.woff2"
  },
  "/_fonts/h_KmxwHWAbZ0E7eWhUEfoCxrf9wSDGQad1CgON153wo-xVohHeBXbIAU4vUJtoWtsm1yfctzwYNXfAnqDyzLsY8.woff2": {
    "type": "font/woff2",
    "etag": "\"7a38-OCC83C4Yf/UzKrDV3IUp+OEP1XQ\"",
    "mtime": "2026-02-06T00:55:35.735Z",
    "size": 31288,
    "path": "../public/_fonts/h_KmxwHWAbZ0E7eWhUEfoCxrf9wSDGQad1CgON153wo-xVohHeBXbIAU4vUJtoWtsm1yfctzwYNXfAnqDyzLsY8.woff2"
  },
  "/_fonts/trbWC_h5_lDjsEIz3K7rNSraDGuAz-l9Xvco9sJCGbU-Zn0cT8wZtJCmifQ_2GyGJSLEVeJBMlxSH3lS9Qv7bZ8.woff2": {
    "type": "font/woff2",
    "etag": "\"32ec-/+4nMoWsKdc2mxFp7bEmRxGqsew\"",
    "mtime": "2026-02-06T00:55:35.735Z",
    "size": 13036,
    "path": "../public/_fonts/trbWC_h5_lDjsEIz3K7rNSraDGuAz-l9Xvco9sJCGbU-Zn0cT8wZtJCmifQ_2GyGJSLEVeJBMlxSH3lS9Qv7bZ8.woff2"
  },
  "/_nuxt/-zwaqH4q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27c97-iOp96oIPUZCaOCqtpXbidLyw3ZE\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 162967,
    "path": "../public/_nuxt/-zwaqH4q.js"
  },
  "/_nuxt/5M4O0qYS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e-m1Z1EyB4QJjjr53UGVMM9lWCZoo\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 30,
    "path": "../public/_nuxt/5M4O0qYS.js"
  },
  "/_nuxt/6NxHgAjT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9dd-rnnBS6ueE4IpzuUMda6OhSenz44\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 2525,
    "path": "../public/_nuxt/6NxHgAjT.js"
  },
  "/_nuxt/AW1FnksL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"84f-kGzxjvG6jBSb8OzRY4ArnzVB+aQ\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 2127,
    "path": "../public/_nuxt/AW1FnksL.js"
  },
  "/_nuxt/B0eavyHV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dcc-7t2ftWaK6m+I1Gg9GcQ9W/dk5h0\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 7628,
    "path": "../public/_nuxt/B0eavyHV.js"
  },
  "/_nuxt/B2WnyP8F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"356-fCEF0if/5eNEXe4IkStI+iILQKU\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 854,
    "path": "../public/_nuxt/B2WnyP8F.js"
  },
  "/_nuxt/B23oRW23.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d46a-oDnHwgjXWVWHW9DTq2R1n6hA2F0\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 54378,
    "path": "../public/_nuxt/B23oRW23.js"
  },
  "/_nuxt/BAE1jUvy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26d8-5OpM+lo3xn2LAPwqaNSmPHuFQOM\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 9944,
    "path": "../public/_nuxt/BAE1jUvy.js"
  },
  "/_nuxt/B3ttKBBJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3528-5apT7dhHGLl5NsJPrkebDk4dylI\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 13608,
    "path": "../public/_nuxt/B3ttKBBJ.js"
  },
  "/_nuxt/BBqNoCJI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e-m1Z1EyB4QJjjr53UGVMM9lWCZoo\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 30,
    "path": "../public/_nuxt/BBqNoCJI.js"
  },
  "/_nuxt/BI9MO6h8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f58-cTHy0oUVbPJCGMFlBahauniFNr4\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 8024,
    "path": "../public/_nuxt/BI9MO6h8.js"
  },
  "/_nuxt/BJYNw5Yx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b75b-uHEN9bMY0rcv9TAmjEIb6nu843I\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 46939,
    "path": "../public/_nuxt/BJYNw5Yx.js"
  },
  "/_nuxt/BKKlS1SP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1438-FUxpONdJRWxcMdsYNnDvmyp86+o\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 5176,
    "path": "../public/_nuxt/BKKlS1SP.js"
  },
  "/_nuxt/BV-5EVOr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12fea-khKQnL9lA6YBL/ooEYD2qDaUdkQ\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 77802,
    "path": "../public/_nuxt/BV-5EVOr.js"
  },
  "/_nuxt/BaDa17wg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc60-qT0EtKGY/mpM/0HLzPp7xoDvL4U\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 52320,
    "path": "../public/_nuxt/BaDa17wg.js"
  },
  "/_nuxt/BWD8CC9k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e2-pLOWHvyAhJx/T+Ie6zw/rTz6PLw\"",
    "mtime": "2026-02-06T00:55:35.759Z",
    "size": 482,
    "path": "../public/_nuxt/BWD8CC9k.js"
  },
  "/_nuxt/BeMEcqcI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed-m8m7x/HrzU9awKMQ2GzqLLIjYII\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 237,
    "path": "../public/_nuxt/BeMEcqcI.js"
  },
  "/_nuxt/BhbKnaCd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1240-/7Jzku3cUXdTq1RwFhAgJ9+cm/U\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 4672,
    "path": "../public/_nuxt/BhbKnaCd.js"
  },
  "/_nuxt/BfEy3o9Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31032-Tf44xPHhUzvGSd76drOLamEFKdE\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 200754,
    "path": "../public/_nuxt/BfEy3o9Q.js"
  },
  "/_nuxt/BjOv20t4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ca1e-/2RbLcCZUGGT8f2wq9Wtm4QLuWg\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 51742,
    "path": "../public/_nuxt/BjOv20t4.js"
  },
  "/_nuxt/BqeM2XAD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8be-qklbdO4YnZe9mQqYmTLQoFKuYtE\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 51390,
    "path": "../public/_nuxt/BqeM2XAD.js"
  },
  "/_nuxt/BtCnJe7S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a87-IlcM/ax674zXcxYUQ6khm9OUfWU\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 6791,
    "path": "../public/_nuxt/BtCnJe7S.js"
  },
  "/_nuxt/BvqiXGyc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"106be-rdRPfYe0UwXO0ZF0Es/9oK7WPfc\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 67262,
    "path": "../public/_nuxt/BvqiXGyc.js"
  },
  "/_nuxt/C0ptHgxC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7805-YvsX05gLK+YGcf3mfwSWr5erUkI\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 30725,
    "path": "../public/_nuxt/C0ptHgxC.js"
  },
  "/_nuxt/C12rYHxR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10b3-sCs32LtbdHG5+/UvVQ5s5Tv3WR0\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 4275,
    "path": "../public/_nuxt/C12rYHxR.js"
  },
  "/_nuxt/Bv7AjlnL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"802e6-i93D8fulyp1qBLCofGicqxAucHg\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 525030,
    "path": "../public/_nuxt/Bv7AjlnL.js"
  },
  "/_nuxt/C4-lN6Vp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10569-vsH2e4FRgqoh/nvp6+aCF6J+W7U\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 66921,
    "path": "../public/_nuxt/C4-lN6Vp.js"
  },
  "/_nuxt/C8P_4bwo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f3df-joupNk0PHFVr92MGQabd6k1BKi4\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 62431,
    "path": "../public/_nuxt/C8P_4bwo.js"
  },
  "/_nuxt/CDafDYxg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51c-tDZuIuDvJClxVdiyECJJnorcZOY\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 1308,
    "path": "../public/_nuxt/CDafDYxg.js"
  },
  "/_nuxt/CCNLAz2Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a41-EPAyWtLBRJ/szI7xJnk3A0xIk1o\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 10817,
    "path": "../public/_nuxt/CCNLAz2Y.js"
  },
  "/_nuxt/CDpi2BBo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7fac-duEdX9h3gli73Z1AR34Z+kC6/zU\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 32684,
    "path": "../public/_nuxt/CDpi2BBo.js"
  },
  "/_nuxt/CDwyBMzQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"73-a2ONouByRbo67NxGK+cYxOCvqfw\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 115,
    "path": "../public/_nuxt/CDwyBMzQ.js"
  },
  "/_nuxt/CNn4Oyjt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de93-PnzGhOH4oObIQfSd4X2gUxZVMM0\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 56979,
    "path": "../public/_nuxt/CNn4Oyjt.js"
  },
  "/_nuxt/CR97qMAa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0a-1M4E9SiggjeS9Udi9xuToCFta7g\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 3338,
    "path": "../public/_nuxt/CR97qMAa.js"
  },
  "/_nuxt/CZq-eOlU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1668-6HPPbXOufXfW4mfMtifbu5pxDd8\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 5736,
    "path": "../public/_nuxt/CZq-eOlU.js"
  },
  "/_nuxt/CVzYsuX4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7fe-Yo6xnCpSQ4ACMeRsJVIaMFgr3m0\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 2046,
    "path": "../public/_nuxt/CVzYsuX4.js"
  },
  "/_nuxt/Cb5ErLvx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"722-nzcqzTTRObJtFQgVO+Vrkh90JnE\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 1826,
    "path": "../public/_nuxt/Cb5ErLvx.js"
  },
  "/_nuxt/Cb8gj75f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"839d-OFXl4zBhQ8tBbboEVK/ZFL2z39Q\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 33693,
    "path": "../public/_nuxt/Cb8gj75f.js"
  },
  "/_nuxt/Cd4M2hkN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aaa-TjMSy4o9aHfQ6+19zzwW3CQmxWk\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 2730,
    "path": "../public/_nuxt/Cd4M2hkN.js"
  },
  "/_nuxt/Ci2-n1pO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9038-So4ZhihSqC2v151oiRZ2XOOmzvI\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 36920,
    "path": "../public/_nuxt/Ci2-n1pO.js"
  },
  "/_nuxt/CfGg_eax.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"640-wSIDBYXAdq+tMq0UrtJB76yEZKM\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 1600,
    "path": "../public/_nuxt/CfGg_eax.js"
  },
  "/_nuxt/CjO9qOAq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8-Xu3W12OomQyZytNQzNPbKnVv9ck\"",
    "mtime": "2026-02-06T00:55:35.760Z",
    "size": 248,
    "path": "../public/_nuxt/CjO9qOAq.js"
  },
  "/_nuxt/Cme_Zfau.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d756-mGMwoxzXNZ22jAYRAFFUVy4LGLo\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 55126,
    "path": "../public/_nuxt/Cme_Zfau.js"
  },
  "/_nuxt/CnZD0_JQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"655e-q62jhTrAgU6DdgD0u1QHkW1ZuAw\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 25950,
    "path": "../public/_nuxt/CnZD0_JQ.js"
  },
  "/_nuxt/CoCpJTuE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e-m1Z1EyB4QJjjr53UGVMM9lWCZoo\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 30,
    "path": "../public/_nuxt/CoCpJTuE.js"
  },
  "/_nuxt/CpoGGL5Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed21-LdvuVxZ5CRFnCKpWQ1AZT4ZBLA0\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 60705,
    "path": "../public/_nuxt/CpoGGL5Q.js"
  },
  "/_nuxt/D59AxwVN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54a-Nl8ihTlyEd4hrvhIKOX2q0njvxw\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 1354,
    "path": "../public/_nuxt/D59AxwVN.js"
  },
  "/_nuxt/D5lD9dAu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cac4-EDZmRMchUevlG0oFlJmqqQBRu74\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 51908,
    "path": "../public/_nuxt/D5lD9dAu.js"
  },
  "/_nuxt/D610zLqC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"708-rl7VKjHUFY99g+PE1RHo2YPDlz4\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 1800,
    "path": "../public/_nuxt/D610zLqC.js"
  },
  "/_nuxt/D68ZD4di.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"84fa-/jMVzKmERge5r73V2Qfd1m1nIFg\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 34042,
    "path": "../public/_nuxt/D68ZD4di.js"
  },
  "/_nuxt/D6m3bHhT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bea-6AqCe1Qn3PZ5Wc89XI6Gt//ekPg\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 3050,
    "path": "../public/_nuxt/D6m3bHhT.js"
  },
  "/_nuxt/D9ah8-E2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e4-4bZf1euAsYOK6WcAxXWmwu0qBio\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 228,
    "path": "../public/_nuxt/D9ah8-E2.js"
  },
  "/_nuxt/DT0MzBej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4f5-xCT4LtmaZnsitevQ6cSo+g+U13g\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 1269,
    "path": "../public/_nuxt/DT0MzBej.js"
  },
  "/_nuxt/DTOCsEob.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"28b-G5UZKvf+mOZV+e2mnFqZsB/tX9c\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 651,
    "path": "../public/_nuxt/DTOCsEob.js"
  },
  "/_nuxt/DR3gxO-K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b912-pNdbzjrEINv0vZZJUbkmvV8WIOA\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 47378,
    "path": "../public/_nuxt/DR3gxO-K.js"
  },
  "/_nuxt/DW1PNgOj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"329-nle8abYF5TypRpv5RGMpSzvPqVk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 809,
    "path": "../public/_nuxt/DW1PNgOj.js"
  },
  "/_nuxt/DX333Aik.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54-MasMfSk/A98C3Gn9uIOxtFxkWNw\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 84,
    "path": "../public/_nuxt/DX333Aik.js"
  },
  "/_nuxt/DcaMdvXn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"188d-MmMyNgC1dmQTv8r2uHzqjzgP19A\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 6285,
    "path": "../public/_nuxt/DcaMdvXn.js"
  },
  "/_nuxt/DXsJDxbi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ae0c-dW/KahQPeAWADgCXrGGDrbdGYgk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 44556,
    "path": "../public/_nuxt/DXsJDxbi.js"
  },
  "/_nuxt/DdnUmJCz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"976e-aYGpagIB8iZH8x8KcEcGT9MDaf8\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 38766,
    "path": "../public/_nuxt/DdnUmJCz.js"
  },
  "/_nuxt/DfK0lA_U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d26-u3GboN/faOaAPGi0UKGD9uIaNuA\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 3366,
    "path": "../public/_nuxt/DfK0lA_U.js"
  },
  "/_nuxt/DfPmSS2s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d-37zzqWPvY2Me3+V99RzxMEGTLeg\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 29,
    "path": "../public/_nuxt/DfPmSS2s.js"
  },
  "/_nuxt/DiWB3hII.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42c2-8diCdMzcetK+oJXmHhlbOQ4OKlE\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 17090,
    "path": "../public/_nuxt/DiWB3hII.js"
  },
  "/_nuxt/Djj1k8bc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"715a-2gYzsIfkCE66nGBimK3N3o2QAFg\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 29018,
    "path": "../public/_nuxt/Djj1k8bc.js"
  },
  "/_nuxt/Dny7P6d5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ce36-m8bwX6Auy3RDRwqv9RAKRtDNmBk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 52790,
    "path": "../public/_nuxt/Dny7P6d5.js"
  },
  "/_nuxt/DmewYmFZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a2e-ChS8h09DuckWrQL4AAe8Bzu0pyY\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 39470,
    "path": "../public/_nuxt/DmewYmFZ.js"
  },
  "/_nuxt/DownloadAnalytics.D8uGZe0j.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"184-V1oNmZyaBFoEBrBY/chCs6UEzyI\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 388,
    "path": "../public/_nuxt/DownloadAnalytics.D8uGZe0j.css"
  },
  "/_nuxt/Ds0_zan1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd8-PdpHl60rjeuZswtQmSpIrvuStdk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 3032,
    "path": "../public/_nuxt/Ds0_zan1.js"
  },
  "/_nuxt/DwPyTK4D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d0d-z8lfChcjcc4V+mdnO01i+E4hWIU\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 7437,
    "path": "../public/_nuxt/DwPyTK4D.js"
  },
  "/_nuxt/EQcK1uD5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ce-6embSZFPnZ5zZJhkHQ8NsZODSgk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 1230,
    "path": "../public/_nuxt/EQcK1uD5.js"
  },
  "/_nuxt/IIbtAw_M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9-8PSx5Mzju+YPCCirESlXYWzMthk\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 217,
    "path": "../public/_nuxt/IIbtAw_M.js"
  },
  "/_nuxt/J-M0dD3r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fb-daBaLxHp8PIDMqyWfyxaF3Tybw4\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 251,
    "path": "../public/_nuxt/J-M0dD3r.js"
  },
  "/_nuxt/NXSXBue_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46b-5IZRTepaMLvwD6B94wY1xFO1cWI\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 1131,
    "path": "../public/_nuxt/NXSXBue_.js"
  },
  "/_nuxt/OdelxPuo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"868a-hbnTcIm6j8g72MptSKZbLtRa6Wo\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 34442,
    "path": "../public/_nuxt/OdelxPuo.js"
  },
  "/_nuxt/Readme.C48kxvH3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"294e-cqmKoTXFlIlamQVwpSIfDSHuq6k\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 10574,
    "path": "../public/_nuxt/Readme.C48kxvH3.css"
  },
  "/_nuxt/TVbFNAyW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ab0b-RmKmFLOUiuc0CUa95ZTUThFGrNg\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 109323,
    "path": "../public/_nuxt/TVbFNAyW.js"
  },
  "/_nuxt/UTpN-G6s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6561-AyKfFyLR4ePb69Z5/BrTs3cLxTg\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 25953,
    "path": "../public/_nuxt/UTpN-G6s.js"
  },
  "/_nuxt/ZqobVOOx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c19-1p/i4q7e6QeXA56cUhhAqBzRtfw\"",
    "mtime": "2026-02-06T00:55:35.761Z",
    "size": 19481,
    "path": "../public/_nuxt/ZqobVOOx.js"
  },
  "/_nuxt/_...CS7URGwr.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"38e-pAXTER7/74wMP2N3sZZI/6vfPjo\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 910,
    "path": "../public/_nuxt/_...CS7URGwr.css"
  },
  "/_nuxt/_...CtRXyIA1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e38-iSLbhoqlCExWwFxYKr/2u1y3C7o\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 3640,
    "path": "../public/_nuxt/_...CtRXyIA1.css"
  },
  "/_nuxt/_...GRJ8hYbI.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"395e-nSiO89L1wqyyO88AoaMBwhjDNhM\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 14686,
    "path": "../public/_nuxt/_...GRJ8hYbI.css"
  },
  "/_nuxt/compare.Cl1mU3Wy.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b1-GksXZtbQ5GIUEZTodofIg6v2e0o\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 1201,
    "path": "../public/_nuxt/compare.Cl1mU3Wy.css"
  },
  "/_nuxt/doGiDiFk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5224-SAkZlOEI3deWAGW/Zl6DmBJE5xU\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 21028,
    "path": "../public/_nuxt/doGiDiFk.js"
  },
  "/_nuxt/ei-Zp2fn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"498e-5K0KIQtcRqxrCeRmVb08w586yRQ\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 18830,
    "path": "../public/_nuxt/ei-Zp2fn.js"
  },
  "/_nuxt/gB79hySc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ba04-y/epBkkmbXO50xGw7V6drE2+MyQ\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 47620,
    "path": "../public/_nuxt/gB79hySc.js"
  },
  "/_nuxt/nKawFXuj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c01b-v0KDZnE0u4bKa3i+X1Dum2/M9Ek\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 49179,
    "path": "../public/_nuxt/nKawFXuj.js"
  },
  "/_nuxt/povsfZkU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f74-VaHxAk0SNkNhjiLT1V+BQnHi6tg\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 24436,
    "path": "../public/_nuxt/povsfZkU.js"
  },
  "/_nuxt/useStructuredFilters.CEf54qXA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"337-BgNqjfdKOdYaqlFZQJ5lYzz5AxQ\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 823,
    "path": "../public/_nuxt/useStructuredFilters.CEf54qXA.css"
  },
  "/_nuxt/settings.exxRw66R.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"101-ev/9HAPFHfAg2bCoNnjH3Q0hyNs\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 257,
    "path": "../public/_nuxt/settings.exxRw66R.css"
  },
  "/about/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"2161a-ONYAQ+/zGZYFAAqz/DrlfUJJnhk\"",
    "mtime": "2026-02-06T00:55:35.356Z",
    "size": 136730,
    "path": "../public/about/_payload.json"
  },
  "/about/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1f787-10G9W1uYcCvk7rwZcFijqGaC0jY\"",
    "mtime": "2026-02-06T00:55:35.344Z",
    "size": 128903,
    "path": "../public/about/index.html"
  },
  "/lunaria/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"27aae-FDVzFmqAPYtwM15K0m1Qn9vyZOE\"",
    "mtime": "2026-02-06T00:55:35.737Z",
    "size": 162478,
    "path": "../public/lunaria/index.html"
  },
  "/lunaria/status.json": {
    "type": "application/json",
    "etag": "\"20be0-1OtrBVfttdOn9D3lt+aOzXxULKA\"",
    "mtime": "2026-02-06T00:55:35.737Z",
    "size": 134112,
    "path": "../public/lunaria/status.json"
  },
  "/settings/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-wXktYqlgWDsJZUdptIazIAbIQHM\"",
    "mtime": "2026-02-06T00:55:32.840Z",
    "size": 69,
    "path": "../public/settings/_payload.json"
  },
  "/__og-image__/static/og.png": {
    "type": "image/png",
    "etag": "\"8255-gZVmmVigSePTumQZzAfQQtdILDk\"",
    "mtime": "2026-02-06T00:55:34.890Z",
    "size": 33365,
    "path": "../public/__og-image__/static/og.png"
  },
  "/settings/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"6d10-cX0r6dE67FBtYQ8SD6zRM3uN4N8\"",
    "mtime": "2026-02-06T00:55:32.522Z",
    "size": 27920,
    "path": "../public/settings/index.html"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-m9CDNXzWrDasQ/S94wpmfDgoi74\"",
    "mtime": "2026-02-06T00:55:35.727Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/__og-image__/static/about/og.png": {
    "type": "image/png",
    "etag": "\"9235-GFKYMZU8aw8O1fbbvZxgwU8oyt0\"",
    "mtime": "2026-02-06T00:55:35.566Z",
    "size": 37429,
    "path": "../public/__og-image__/static/about/og.png"
  },
  "/__og-image__/static/settings/og.png": {
    "type": "image/png",
    "etag": "\"72d4-0ncvZK7yNNcVgLVQGbclCBJKDKk\"",
    "mtime": "2026-02-06T00:55:34.890Z",
    "size": 29396,
    "path": "../public/__og-image__/static/settings/og.png"
  },
  "/_nuxt/entry.DyKKpoVz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a1660-yAT791wBat31Ml12ZLjsrR01o4U\"",
    "mtime": "2026-02-06T00:55:35.762Z",
    "size": 661088,
    "path": "../public/_nuxt/entry.DyKKpoVz.css"
  },
  "/_i18n/sEXdXGnD/ar-EG/messages.json": {
    "type": "application/json",
    "etag": "\"11eb0-lO+bigZeowQQmkifaTwQggmEvRA\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 73392,
    "path": "../public/_i18n/sEXdXGnD/ar-EG/messages.json"
  },
  "/_i18n/sEXdXGnD/az-AZ/messages.json": {
    "type": "application/json",
    "etag": "\"e293-4Ao1N31cw2qFrYST1fex+4FlGy4\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 58003,
    "path": "../public/_i18n/sEXdXGnD/az-AZ/messages.json"
  },
  "/_i18n/sEXdXGnD/cs-CZ/messages.json": {
    "type": "application/json",
    "etag": "\"10084-Pe2QPZcdnIRiOvk89JUBRFW1we8\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 65668,
    "path": "../public/_i18n/sEXdXGnD/cs-CZ/messages.json"
  },
  "/_i18n/sEXdXGnD/en-GB/messages.json": {
    "type": "application/json",
    "etag": "\"108f4-5Lgg3ucVfbAdazGjf4PuzoQ+Rt4\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 67828,
    "path": "../public/_i18n/sEXdXGnD/en-GB/messages.json"
  },
  "/_i18n/sEXdXGnD/de-DE/messages.json": {
    "type": "application/json",
    "etag": "\"118c7-ogM13lEitdoxx1UIwgnNMx4vn9o\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 71879,
    "path": "../public/_i18n/sEXdXGnD/de-DE/messages.json"
  },
  "/_i18n/sEXdXGnD/en-US/messages.json": {
    "type": "application/json",
    "etag": "\"847a-MoylWLuN0O5UysFTv1ZVMnZD9c0\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 33914,
    "path": "../public/_i18n/sEXdXGnD/en-US/messages.json"
  },
  "/_i18n/sEXdXGnD/es-419/messages.json": {
    "type": "application/json",
    "etag": "\"fdea-BS3UEcr4K0RY0JuMKy1FSY+1fHc\"",
    "mtime": "2026-02-06T00:55:32.691Z",
    "size": 65002,
    "path": "../public/_i18n/sEXdXGnD/es-419/messages.json"
  },
  "/_i18n/sEXdXGnD/es-ES/messages.json": {
    "type": "application/json",
    "etag": "\"fdf0-d+3OnoPi1gyDbRnY78xRPn/qJfY\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 65008,
    "path": "../public/_i18n/sEXdXGnD/es-ES/messages.json"
  },
  "/_i18n/sEXdXGnD/fr-FR/messages.json": {
    "type": "application/json",
    "etag": "\"1015a-O1CwUvXB8xDeKkNgLp3lTu5H5Ws\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 65882,
    "path": "../public/_i18n/sEXdXGnD/fr-FR/messages.json"
  },
  "/_i18n/sEXdXGnD/hi-IN/messages.json": {
    "type": "application/json",
    "etag": "\"140bc-1uIAWTsaxmiWqEydUzOCD/C4kYc\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 82108,
    "path": "../public/_i18n/sEXdXGnD/hi-IN/messages.json"
  },
  "/_i18n/sEXdXGnD/hu-HU/messages.json": {
    "type": "application/json",
    "etag": "\"e1fe-kQx8V4rm2/i0JyAHJHWN4WOKVxc\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 57854,
    "path": "../public/_i18n/sEXdXGnD/hu-HU/messages.json"
  },
  "/_i18n/sEXdXGnD/it-IT/messages.json": {
    "type": "application/json",
    "etag": "\"ff8c-rg82VOYieG9lKjFgyQX8eI+Hw3I\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 65420,
    "path": "../public/_i18n/sEXdXGnD/it-IT/messages.json"
  },
  "/_i18n/sEXdXGnD/id-ID/messages.json": {
    "type": "application/json",
    "etag": "\"eb06-qkZl4TKFFMic3E2DDqOufnTWpFY\"",
    "mtime": "2026-02-06T00:55:32.691Z",
    "size": 60166,
    "path": "../public/_i18n/sEXdXGnD/id-ID/messages.json"
  },
  "/_i18n/sEXdXGnD/ja-JP/messages.json": {
    "type": "application/json",
    "etag": "\"10fd4-1lnnLKHW+pIJJDevhil1CVC6nMw\"",
    "mtime": "2026-02-06T00:55:32.689Z",
    "size": 69588,
    "path": "../public/_i18n/sEXdXGnD/ja-JP/messages.json"
  },
  "/_i18n/sEXdXGnD/ne-NP/messages.json": {
    "type": "application/json",
    "etag": "\"14407-r5NpJzRglaEHH5CTWeOA5o/RCOw\"",
    "mtime": "2026-02-06T00:55:32.839Z",
    "size": 82951,
    "path": "../public/_i18n/sEXdXGnD/ne-NP/messages.json"
  },
  "/_i18n/sEXdXGnD/mr-IN/messages.json": {
    "type": "application/json",
    "etag": "\"b65c-xZhU5CSJuFw7YhJQO/Ldwpb0KdY\"",
    "mtime": "2026-02-06T00:55:32.638Z",
    "size": 46684,
    "path": "../public/_i18n/sEXdXGnD/mr-IN/messages.json"
  },
  "/_i18n/sEXdXGnD/pl-PL/messages.json": {
    "type": "application/json",
    "etag": "\"1026b-kwXuaqiCgBBN3TIRufJzd1A/PbQ\"",
    "mtime": "2026-02-06T00:55:32.848Z",
    "size": 66155,
    "path": "../public/_i18n/sEXdXGnD/pl-PL/messages.json"
  },
  "/_i18n/sEXdXGnD/pt-BR/messages.json": {
    "type": "application/json",
    "etag": "\"f4c6-yQRysccY35jSlz9wa0y9MVn24To\"",
    "mtime": "2026-02-06T00:55:32.849Z",
    "size": 62662,
    "path": "../public/_i18n/sEXdXGnD/pt-BR/messages.json"
  },
  "/_i18n/sEXdXGnD/ru-RU/messages.json": {
    "type": "application/json",
    "etag": "\"10e3d-1uBCPB0jg4doXlQNpdcAMAwJePU\"",
    "mtime": "2026-02-06T00:55:32.849Z",
    "size": 69181,
    "path": "../public/_i18n/sEXdXGnD/ru-RU/messages.json"
  },
  "/_i18n/sEXdXGnD/uk-UA/messages.json": {
    "type": "application/json",
    "etag": "\"1083f-C2v+hXIo5lHiB66ocMWyF3EcLQ0\"",
    "mtime": "2026-02-06T00:55:32.849Z",
    "size": 67647,
    "path": "../public/_i18n/sEXdXGnD/uk-UA/messages.json"
  },
  "/_i18n/sEXdXGnD/zh-CN/messages.json": {
    "type": "application/json",
    "etag": "\"eed2-ovwqNMYogfpJKCmBXifWyrarTuc\"",
    "mtime": "2026-02-06T00:55:32.849Z",
    "size": 61138,
    "path": "../public/_i18n/sEXdXGnD/zh-CN/messages.json"
  },
  "/_i18n/sEXdXGnD/zh-TW/messages.json": {
    "type": "application/json",
    "etag": "\"f0aa-3agN6LVrFRdByg698vjyMbH3IYg\"",
    "mtime": "2026-02-06T00:55:32.857Z",
    "size": 61610,
    "path": "../public/_i18n/sEXdXGnD/zh-TW/messages.json"
  },
  "/_nuxt/builds/meta/5dbbee00-9a86-4bea-b4ca-2f4f0946f937.json": {
    "type": "application/json",
    "etag": "\"70-K+qwbppxeIDraH2JiQ20HWPr8Z4\"",
    "mtime": "2026-02-06T00:55:35.724Z",
    "size": 112,
    "path": "../public/_nuxt/builds/meta/5dbbee00-9a86-4bea-b4ca-2f4f0946f937.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000},"/lunaria/":{"maxAge":86400},"/_scripts/":{"maxAge":31536000},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _dVXdTP = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}
function useSeoMeta(input = {}, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  head.use(FlatMetaPlugin);
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    _flatMeta: meta
  }, options);
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const createHeadCore = createUnhead;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: decodePath(event.path),
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('../build/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getPrecomputedDependencies = () => import('../build/client.precomputed.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = await getPrecomputedDependencies();
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: undefined,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = await getPrecomputedDependencies();
	// @ts-expect-error virtual file
	const spaTemplate = await import('../virtual/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: undefined,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => import('../build/styles.mjs').then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
async function getIslandContext(event) {
	// TODO: Strict validation for url
	let url = event.path || "";
	const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	// TODO: Validate context
	const context = event.method === "GET" ? getQuery(event) : await readBody(event);
	const ctx = {
		url: "/",
		...context,
		id: hashId,
		name: componentName,
		props: destr(context.props) || {},
		slots: {},
		components: {}
	};
	return ctx;
}

const _83gola = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
const _getMessagesCached = cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: 60 * 60 * 24,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessagesCached;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: 60 * 60 * 24,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: 60 * 60 * 24,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError$1({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError$1({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: 60 * 60 * 24,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
const _messagesHandlerCached = defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: 10,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _e3Ccyh = _messagesHandlerCached;

const _lazy_LgTtQ_ = () => import('../routes/api/atproto/author-profiles.get.mjs');
const _lazy_QnPGq7 = () => import('../routes/api/atproto/bluesky-comments.get.mjs');
const _lazy_TlkEaA = () => import('../routes/api/atproto/tangled-stats/_owner/_...repo_.mjs');
const _lazy_fD1TXG = () => import('../routes/api/auth/atproto.get.mjs');
const _lazy_3xKwqT = () => import('../routes/api/auth/session.delete.mjs');
const _lazy_JO4NNW = () => import('../routes/api/auth/session.get.mjs');
const _lazy_I6HujA = () => import('../routes/api/contributors.get.mjs');
const _lazy_rFs6FD = () => import('../routes/api/gravatar/_username_.get.mjs');
const _lazy_NHjMKq = () => import('../routes/api/jsr/_...pkg_.get.mjs');
const _lazy_u1JtjL = () => import('../routes/api/opensearch/suggestions.get.mjs');
const _lazy_tfskr7 = () => import('../routes/api/registry/analysis/_...pkg_.get.mjs');
const _lazy_WRXhNR = () => import('../routes/api/registry/badge/_type/_...pkg_.get.mjs');
const _lazy_cK4BJ0 = () => import('../routes/api/registry/docs/_...pkg_.get.mjs');
const _lazy_WopQrS = () => import('../routes/api/registry/file/_...pkg_.get.mjs');
const _lazy_x5wIcA = () => import('../routes/api/registry/files/_...pkg_.get.mjs');
const _lazy_Ap5PQl = () => import('../routes/api/registry/install-size/_...pkg_.get.mjs');
const _lazy_5TWnGI = () => import('../routes/api/registry/org/_org/packages.get.mjs');
const _lazy_9A38Ra = () => import('../routes/api/registry/provenance/_...pkg_.get.mjs');
const _lazy_8gXIud = () => import('../routes/api/registry/readme/_...pkg_.get.mjs');
const _lazy_wQBSjK = () => import('../routes/api/registry/vulnerabilities/_...pkg_.get.mjs');
const _lazy_5TW01O = () => import('../routes/api/replacements/_...pkg_.get.mjs');
const _lazy_TSlCKb = () => import('../routes/api/social/like.delete.mjs');
const _lazy_oHAgXm = () => import('../routes/api/social/like.post.mjs');
const _lazy_oES_vj = () => import('../routes/api/social/likes/_...pkg_.get.mjs');
const _lazy_2oWMRW = () => import('../routes/_pkg/_scope/.well-known/skills/_...skills_.mjs').then(function (n) { return n._; });
const _lazy_jjyaxU = () => import('../routes/_pkg/_scope/.well-known/skills/_...skills_.mjs').then(function (n) { return n.a; });
const _lazy_yjwmf3 = () => import('../routes/oauth-client-metadata.json.get.mjs');
const _lazy_wwf7To = () => import('../routes/opensearch.xml.get.mjs');
const _lazy_EhlKhc = () => import('../routes/skills/_...pkg_.get.mjs');
const _lazy_7n6NnU = () => import('../routes/renderer.mjs');
const _lazy_Grhm2T = () => import('../routes/__og-image__/font/font.mjs');
const _lazy_XklOrB = () => import('../routes/__og-image__/image/image.mjs');

const handlers = [
  { route: '', handler: _dVXdTP, lazy: false, middleware: true, method: undefined },
  { route: '/api/atproto/author-profiles', handler: _lazy_LgTtQ_, lazy: true, middleware: false, method: "get" },
  { route: '/api/atproto/bluesky-comments', handler: _lazy_QnPGq7, lazy: true, middleware: false, method: "get" },
  { route: '/api/atproto/tangled-stats/:owner/**:repo', handler: _lazy_TlkEaA, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/atproto', handler: _lazy_fD1TXG, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/session', handler: _lazy_3xKwqT, lazy: true, middleware: false, method: "delete" },
  { route: '/api/auth/session', handler: _lazy_JO4NNW, lazy: true, middleware: false, method: "get" },
  { route: '/api/contributors', handler: _lazy_I6HujA, lazy: true, middleware: false, method: "get" },
  { route: '/api/gravatar/:username', handler: _lazy_rFs6FD, lazy: true, middleware: false, method: "get" },
  { route: '/api/jsr/**:pkg', handler: _lazy_NHjMKq, lazy: true, middleware: false, method: "get" },
  { route: '/api/opensearch/suggestions', handler: _lazy_u1JtjL, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/analysis/**:pkg', handler: _lazy_tfskr7, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/badge/:type/**:pkg', handler: _lazy_WRXhNR, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/docs/**', handler: _lazy_cK4BJ0, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/docs/**:pkg', handler: _lazy_cK4BJ0, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/files/**', handler: _lazy_WopQrS, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/file/**', handler: _lazy_WopQrS, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/file/**:pkg', handler: _lazy_WopQrS, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/files/**:pkg', handler: _lazy_x5wIcA, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/install-size/**:pkg', handler: _lazy_Ap5PQl, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/org/:org/packages', handler: _lazy_5TWnGI, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/provenance/**', handler: _lazy_9A38Ra, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/provenance/**:pkg', handler: _lazy_9A38Ra, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/readme/**:pkg', handler: _lazy_8gXIud, lazy: true, middleware: false, method: "get" },
  { route: '/api/registry/vulnerabilities/**:pkg', handler: _lazy_wQBSjK, lazy: true, middleware: false, method: "get" },
  { route: '/api/replacements/**:pkg', handler: _lazy_5TW01O, lazy: true, middleware: false, method: "get" },
  { route: '/api/social/like', handler: _lazy_TSlCKb, lazy: true, middleware: false, method: "delete" },
  { route: '/api/social/like', handler: _lazy_oHAgXm, lazy: true, middleware: false, method: "post" },
  { route: '/api/social/likes/**:pkg', handler: _lazy_oES_vj, lazy: true, middleware: false, method: "get" },
  { route: '/:pkg/.well-known/skills/**:skills', handler: _lazy_2oWMRW, lazy: true, middleware: false, method: undefined },
  { route: '/:pkg/:scope/.well-known/skills/**:skills', handler: _lazy_jjyaxU, lazy: true, middleware: false, method: undefined },
  { route: '/oauth-client-metadata.json', handler: _lazy_yjwmf3, lazy: true, middleware: false, method: "get" },
  { route: '/opensearch.xml', handler: _lazy_wwf7To, lazy: true, middleware: false, method: "get" },
  { route: '/skills/**:pkg', handler: _lazy_EhlKhc, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_7n6NnU, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_Grhm2T, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _83gola, lazy: false, middleware: true, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_XklOrB, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_XklOrB, lazy: true, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _e3Ccyh, lazy: false, middleware: false, method: undefined },
  { route: '/package-code/**', handler: _lazy_7n6NnU, lazy: true, middleware: false, method: undefined },
  { route: '/package-docs/:pkg/v/**', handler: _lazy_7n6NnU, lazy: true, middleware: false, method: undefined },
  { route: '/package-docs/:scope/:pkg/v/**', handler: _lazy_7n6NnU, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_7n6NnU, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b$1(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C$1(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { PACKAGE_SUBJECT_REF as $, ERROR_PACKAGE_VERSION_AND_FILE_FAILED as A, getLanguageFromPath as B, CACHE_MAX_AGE_ONE_MINUTE as C, getPackageFileTree as D, ERROR_JSR_FETCH_FAILED as E, resolveDependencyVersions as F, flattenFileTree as G, createImportResolver as H, highlightCode as I, parseRepositoryInfo as J, renderReadmeHtml as K, fetchFileTree as L, convertToFileTree as M, NPM_REGISTRY$1 as N, ERROR_FILE_LIST_FETCH_FAILED as O, fetchLatestVersionWithFallback as P, calculateInstallSize as Q, ERROR_CALC_INSTALL_SIZE_FAILED as R, parseAttestationToProvenanceDetails as S, ERROR_PROVENANCE_FETCH_FAILED as T, NPM_MISSING_README_SENTINEL as U, analyzeDependencyTree as V, throwOnMissingOAuthScope as W, readBody as X, PackageLikesUtils as Y, like as Z, LIKES_SCOPE as _, Constellation as a, FACET_INFO as a$, $build as a0, getOauthClientMetadata as a1, getRequestURL as a2, ERROR_SKILLS_FETCH_FAILED as a3, findSkillDirs as a4, fetchSkillsList as a5, fetchSkillContent as a6, ERROR_SKILL_NOT_FOUND as a7, fetchSkillFile as a8, ERROR_SKILL_FILE_NOT_FOUND as a9, getRequestHeader as aA, getCookie as aB, withLeadingSlash as aC, withBase as aD, parse as aE, destr as aF, isEqual as aG, createDefu as aH, parsePath as aI, setCookie as aJ, deleteCookie as aK, mapWithConcurrency as aL, encodePackageName as aM, DEFAULT_FILTERS as aN, DEFAULT_PREFERENCES as aO, DEFAULT_COLUMNS as aP, DOWNLOAD_RANGES as aQ, UPDATED_WITHIN_OPTIONS as aR, parseSortOption as aS, SORT_KEYS as aT, PAGE_SIZE_OPTIONS as aU, SEARCH_SCOPE_VALUES as aV, SECURITY_FILTER_VALUES as aW, ACCENT_COLORS as aX, BACKGROUND_THEMES as aY, DEFAULT_FACETS as aZ, ALL_FACETS as a_, klona as aa, joinURL as ab, withQuery as ac, useHead as ad, hasProtocol as ae, isScriptProtocol as af, hash$1 as ag, defu as ah, useSeoMeta as ai, headSymbol as aj, defuFn as ak, sanitizeStatusCode as al, parseQuery as am, getContext as an, createHooks as ao, withTrailingSlash as ap, withoutTrailingSlash as aq, normalizeSearchParam as ar, $fetch$1 as as, baseURL as at, executeAsync as au, parseURL as av, resolveUnrefHeadInput as aw, toRouteMatcher as ax, createRouter$1 as ay, withoutBase as az, CACHE_MAX_AGE_ONE_HOUR as b, fontCache as b$, CATEGORY_ORDER as b0, FACETS_BY_CATEGORY as b1, GITLAB_HOSTS as b2, fetchLatestVersion as b3, setResponseHeader as b4, normalizeGitUrl as b5, BLUESKY_API as b6, AT_URI_REGEX as b7, useServerSession as b8, getGravatarFromUsername as b9, main$1 as bA, useRuntimeConfig as bB, useOAuthStorage as bC, handleResolver as bD, getOAuthLock as bE, clientUri as bF, scope as bG, sendRedirect as bH, SLINGSHOT_HOST as bI, UNSET_NUXT_SESSION_PASSWORD as bJ, prefixStorage as bK, useStorage as bL, emojiCache as bM, fetchIsland as bN, createHeadCore as bO, normaliseFontInput as bP, theme as bQ, handleCacheHeaders as bR, setHeaders as bS, proxyRequest as bT, resolveContext as bU, H3Error as bV, decodeHtml as bW, logger as bX, toBase64Image as bY, htmlDecodeQuotes as bZ, sendError as b_, ERROR_GRAVATAR_EMAIL_UNAVAILABLE as ba, ERROR_GRAVATAR_FETCH_FAILED as bb, getResponseStatusText as bc, getResponseStatus as bd, appId as be, defineRenderHandler as bf, buildAssetsURL as bg, publicAssetsURL as bh, appTeleportTag as bi, appTeleportAttrs as bj, createSSRContext as bk, appHead as bl, setSSRError as bm, getRouteRules as bn, getRenderer as bo, replaceIslandTeleports as bp, useNitroApp as bq, useOgImageRuntimeConfig as br, useNitroOrigin as bs, areUrlsEquivalent as bt, isBinaryOnlyPackage as bu, isCreatePackage as bv, parseLicenseExpression as bw, SEVERITY_TEXT_COLORS as bx, getHighestSeverity as by, getCreateShortName as bz, createError$1 as c, fetchSkillsListForWellKnown as c0, nodeServer as c1, defineCachedEventHandler as d, eventHandlerWithOAuthSession as e, fetchJsrPackageInfo as f, getRouterParam as g, handleApiError as h, defineEventHandler as i, getQuery as j, ERROR_SUGGESTIONS_FETCH_FAILED as k, CACHE_MAX_AGE_ONE_DAY as l, hasBuiltInTypes as m, getTypesPackageName as n, analyzePackage as o, parsePackageParams as p, ERROR_PACKAGE_ANALYSIS_FAILED as q, getCreatePackageName as r, parseRepoUrl as s, assertValidPackageName as t, fetchNpmPackage as u, setHeader as v, ERROR_NPM_FETCH_FAILED as w, parsePackageParam as x, generateDocsWithDeno as y, CACHE_MAX_AGE_ONE_YEAR as z };
//# sourceMappingURL=nitro.mjs.map

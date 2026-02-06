import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as Vue from 'vue';
import { defineComponent, createElementBlock, inject, toRef, isRef, computed, toValue, getCurrentInstance, onServerPrefetch, reactive, hasInjectionContext, shallowRef, watch, readonly, watchEffect, ref, mergeProps, getCurrentScope, onScopeDispose, provide, cloneVNode, h, createApp, resolveComponent, shallowReadonly, withCtx, unref, createVNode, createTextVNode, toDisplayString, nextTick, defineAsyncComponent, onErrorCaptured, resolveDynamicComponent, shallowReactive, effectScope, customRef, useTemplateRef, Suspense, Fragment, isReadonly, useSSRContext, toRaw, isShallow, isReactive, Text } from 'vue';
import { aa as klona, ab as joinURL, ac as withQuery, ad as useHead, ae as hasProtocol, af as isScriptProtocol, c as createError, ag as hash, ah as defu, ai as useSeoMeta, aj as headSymbol, ak as defuFn, al as sanitizeStatusCode, am as parseQuery, an as getContext, ao as createHooks, ap as withTrailingSlash, aq as withoutTrailingSlash, ar as normalizeSearchParam, as as $fetch$1, at as baseURL, au as executeAsync, av as parseURL, a2 as getRequestURL, aw as resolveUnrefHeadInput, ax as toRouteMatcher, ay as createRouter, az as withoutBase, aA as getRequestHeader, aB as getCookie, aC as withLeadingSlash, aD as withBase, aE as parse$1, aF as destr, aG as isEqual, aH as createDefu, aI as parsePath, aJ as setCookie, aK as deleteCookie } from '../nitro/nitro.mjs';
import { debounce } from 'perfect-debounce';
import { stringify, parse } from 'devalue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrGetDynamicModelProps, ssrRenderList } from 'vue/server-renderer';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atproto/oauth-client-node';
import 'valibot';
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
import 'vue-router';
import '@atproto/lex';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
if (!globalThis.$fetch) globalThis.$fetch = $fetch$1.create({ baseURL: baseURL() });
if (!("global" in globalThis)) globalThis.global = globalThis;
const nuxtLinkDefaults = {
	"componentName": "NuxtLink"};
const asyncDataDefaults = { "deep": false };
const fetchDefaults = {};
function getNuxtAppCtx(id = "nuxt-app") {
	return getContext(id, { asyncContext: false });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
	let hydratingCount = 0;
	const nuxtApp = {
		_id: options.id || "nuxt-app",
		_scope: effectScope(),
		provide: void 0,
		versions: {
			get nuxt() {
				return "4.3.0";
			},
			get vue() {
				return nuxtApp.vueApp.version;
			}
		},
		payload: shallowReactive({
			...options.ssrContext?.payload || {},
			data: shallowReactive({}),
			state: reactive({}),
			once: /* @__PURE__ */ new Set(),
			_errors: shallowReactive({})
		}),
		static: { data: {} },
		runWithContext(fn) {
			if (nuxtApp._scope.active && !getCurrentScope()) return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
			return callWithNuxt(nuxtApp, fn);
		},
		isHydrating: false,
		deferHydration() {
			if (!nuxtApp.isHydrating) return () => {};
			hydratingCount++;
			let called = false;
			return () => {
				if (called) return;
				called = true;
				hydratingCount--;
				if (hydratingCount === 0) {
					nuxtApp.isHydrating = false;
					return nuxtApp.callHook("app:suspense:resolve");
				}
			};
		},
		_asyncDataPromises: {},
		_asyncData: shallowReactive({}),
		_payloadRevivers: {},
		...options
	};
	nuxtApp.payload.serverRendered = true;
	if (nuxtApp.ssrContext) {
		nuxtApp.payload.path = nuxtApp.ssrContext.url;
		nuxtApp.ssrContext.nuxt = nuxtApp;
		nuxtApp.ssrContext.payload = nuxtApp.payload;
		nuxtApp.ssrContext.config = {
			public: nuxtApp.ssrContext.runtimeConfig.public,
			app: nuxtApp.ssrContext.runtimeConfig.app
		};
	}
	nuxtApp.hooks = createHooks();
	nuxtApp.hook = nuxtApp.hooks.hook;
	{
		const contextCaller = async function(hooks, args) {
			for (const hook of hooks) await nuxtApp.runWithContext(() => hook(...args));
		};
		nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
	}
	nuxtApp.callHook = nuxtApp.hooks.callHook;
	nuxtApp.provide = (name, value) => {
		const $name = "$" + name;
		defineGetter(nuxtApp, $name, value);
		defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
	};
	defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
	defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
	const runtimeConfig = options.ssrContext.runtimeConfig;
	nuxtApp.provide("config", runtimeConfig);
	return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
	if (plugin.hooks) nuxtApp.hooks.addHooks(plugin.hooks);
}
async function applyPlugin(nuxtApp, plugin) {
	if (typeof plugin === "function") {
		const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
		if (provide && typeof provide === "object") for (const key in provide) nuxtApp.provide(key, provide[key]);
	}
}
async function applyPlugins(nuxtApp, plugins) {
	const resolvedPlugins = /* @__PURE__ */ new Set();
	const unresolvedPlugins = [];
	const parallels = [];
	let error = void 0;
	let promiseDepth = 0;
	async function executePlugin(plugin) {
		const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
		if (unresolvedPluginsForThisPlugin.length > 0) unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
		else {
			const promise = applyPlugin(nuxtApp, plugin).then(async () => {
				if (plugin._name) {
					resolvedPlugins.add(plugin._name);
					await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
						if (dependsOn.has(plugin._name)) {
							dependsOn.delete(plugin._name);
							if (dependsOn.size === 0) {
								promiseDepth++;
								await executePlugin(unexecutedPlugin);
							}
						}
					}));
				}
			}).catch((e) => {
				if (!plugin.parallel && !nuxtApp.payload.error) throw e;
				error ||= e;
			});
			if (plugin.parallel) parallels.push(promise);
			else await promise;
		}
	}
	for (const plugin of plugins) {
		if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) continue;
		registerPluginHooks(nuxtApp, plugin);
	}
	for (const plugin of plugins) {
		if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) continue;
		await executePlugin(plugin);
	}
	await Promise.all(parallels);
	if (promiseDepth) for (let i = 0; i < promiseDepth; i++) await Promise.all(parallels);
	if (error) throw nuxtApp.payload.error || error;
}
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin) {
	if (typeof plugin === "function") return plugin;
	const _name = plugin._name || plugin.name;
	delete plugin.name;
	return Object.assign(plugin.setup || (() => {}), plugin, {
		[NuxtPluginIndicator]: true,
		_name
	});
}
function callWithNuxt(nuxt, setup, args) {
	const fn = () => setup();
	const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
	return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
}
function tryUseNuxtApp(id) {
	let nuxtAppInstance;
	if (hasInjectionContext()) nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
	nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
	return nuxtAppInstance || null;
}
function useNuxtApp(id) {
	const nuxtAppInstance = tryUseNuxtApp(id);
	if (!nuxtAppInstance) throw new Error("[nuxt] instance unavailable");
	return nuxtAppInstance;
}
/* @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig(_event) {
	return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
	Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter$1 = () => {
	return useNuxtApp()?.$router;
};
const useRoute$1 = () => {
	if (hasInjectionContext()) return inject(PageRouteSymbol, useNuxtApp()._route);
	return useNuxtApp()._route;
};
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
	return middleware;
}
var isProcessingMiddleware = () => {
	try {
		if (useNuxtApp()._processingMiddleware) return true;
	} catch {
		return false;
	}
	return false;
};
var URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
	to ||= "/";
	const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter$1().resolve(to).href;
	const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
	const isExternal = options?.external || isExternalHost;
	if (isExternal) {
		if (!options?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
		const { protocol } = new URL(toPath, "http://localhost");
		if (protocol && isScriptProtocol(protocol)) throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
	}
	const inMiddleware = isProcessingMiddleware();
	const router = useRouter$1();
	const nuxtApp = useNuxtApp();
	if (nuxtApp.ssrContext) {
		const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
		const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
		const redirect = async function(response) {
			await nuxtApp.callHook("app:redirected");
			const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
			const encodedHeader = encodeURL(location2, isExternalHost);
			nuxtApp.ssrContext["~renderResponse"] = {
				statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
				body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
				headers: { location: encodedHeader }
			};
			return response;
		};
		if (!isExternal && inMiddleware) {
			router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
			return to;
		}
		return redirect(!inMiddleware ? void 0 : false);
	}
	if (isExternal) {
		nuxtApp._scope.stop();
		if (options?.replace) (void 0).replace(toPath);
		else (void 0).href = toPath;
		if (inMiddleware) {
			if (!nuxtApp.isHydrating) return false;
			return new Promise(() => {});
		}
		return Promise.resolve();
	}
	return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
	return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
	const url = new URL(location2, "http://localhost");
	if (!isExternalHost) return url.pathname + url.search + url.hash;
	if (location2.startsWith("//")) return url.toString().replace(url.protocol, "");
	return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
	const nuxtError = createError$1(error);
	try {
		const error2 = /* @__PURE__ */ useError();
		error2.value ||= nuxtError;
	} catch {
		throw nuxtError;
	}
	return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && "__nuxt_error" in error;
const createError$1 = (error) => {
	if (typeof error !== "string" && error.statusText) error.message ??= error.statusText;
	const nuxtError = createError(error);
	Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
		value: true,
		configurable: false,
		writable: false
	});
	return nuxtError;
};
function defineHeadPlugin(plugin) {
	return plugin;
}
var SepSub = "%separator";
function sub(p, token, isJson = false) {
	let val;
	if (token === "s" || token === "pageTitle") val = p.pageTitle;
	else if (token.includes(".")) {
		const dotIndex = token.indexOf(".");
		val = p[token.substring(0, dotIndex)]?.[token.substring(dotIndex + 1)];
	} else val = p[token];
	if (val !== void 0) return isJson ? (val || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, "\\\"") : val || "";
}
function processTemplateParams(s, p, sep, isJson = false) {
	if (typeof s !== "string" || !s.includes("%")) return s;
	let decoded = s;
	try {
		decoded = decodeURI(s);
	} catch {}
	const tokens = decoded.match(/%\w+(?:\.\w+)?/g);
	if (!tokens) return s;
	const hasSepSub = s.includes(SepSub);
	s = s.replace(/%\w+(?:\.\w+)?/g, (token) => {
		if (token === SepSub || !tokens.includes(token)) return token;
		const re = sub(p, token.slice(1), isJson);
		return re !== void 0 ? re : token;
	}).trim();
	if (hasSepSub) s = s.split(SepSub).map((part) => part.trim()).filter((part) => part !== "").join(sep ? ` ${sep} ` : " ");
	return s;
}
var SupportedAttrs = {
	meta: "content",
	link: "href",
	htmlAttrs: "lang"
};
var contentAttrs = ["innerHTML", "textContent"];
var TemplateParamsPlugin = /* @__PURE__ */ defineHeadPlugin((head) => {
	return {
		key: "template-params",
		hooks: {
			"entries:normalize": (ctx) => {
				const params = ctx.tags.filter((t) => t.tag === "templateParams" && t.mode === "server")?.[0]?.props || {};
				if (Object.keys(params).length) head._ssrPayload = { templateParams: {
					...head._ssrPayload?.templateParams || {},
					...params
				} };
			},
			"tags:resolve": ({ tagMap, tags }) => {
				const params = tagMap.get("templateParams")?.props || {};
				const sep = params.separator || "|";
				delete params.separator;
				params.pageTitle = processTemplateParams(params.pageTitle || head._title || "", params, sep);
				for (const tag of tags) {
					if (tag.processTemplateParams === false) continue;
					const v = SupportedAttrs[tag.tag];
					if (v && typeof tag.props[v] === "string") tag.props[v] = processTemplateParams(tag.props[v], params, sep);
					else if (tag.processTemplateParams || tag.tag === "titleTemplate" || tag.tag === "title") {
						for (const p of contentAttrs) if (typeof tag[p] === "string") tag[p] = processTemplateParams(tag[p], params, sep, tag.tag === "script" && tag.props.type.endsWith("json"));
					}
				}
				head._templateParams = params;
				head._separator = sep;
			},
			"tags:afterResolve": ({ tagMap }) => {
				const title = tagMap.get("title");
				if (title?.textContent && title.processTemplateParams !== false) title.textContent = processTemplateParams(title.textContent, head._templateParams, head._separator);
			}
		}
	};
});
var unhead_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		nuxtApp.vueApp.use(head);
	}
});
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign$1 = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop$1 = () => {};
var isArray$1 = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {
	}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL$1(parseQuery$1, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery$1(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
function stringifyURL(stringifyQuery$1, location) {
	const query = location.query ? stringifyQuery$1(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : a?.valueOf() === b?.valueOf();
}
function isEquivalentArray(a, b) {
	return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType = /* @__PURE__ */ function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
	return NavigationType$1;
}({});
var NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
	return NavigationDirection$1;
}({});
function normalizeBase(base) {
	if (!base) base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
var ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
	ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes$1;
}({});
var NavigationFailureSymbol = Symbol("");
({
	[ErrorTypes.MATCHER_NOT_FOUND]({ location, currentLocation }) {
		return `No match for\n ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
	},
	[ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
		return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
		return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
		return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	},
	[ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
		return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	}
});
function createRouterError(type, params) {
	return assign$1(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
var propertiesToLog = [
	"params",
	"query",
	"hash"
];
function stringifyRoute(to) {
	if (typeof to === "string") return to;
	if (to.path != null) return to.path;
	const location = {};
	for (const key of propertiesToLog) if (key in to) location[key] = to[key];
	return JSON.stringify(location, null, 2);
}
function parseQuery$2(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray$1(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray$1(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray$1(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
var matchedRouteKey = Symbol("");
var viewDepthKey = Symbol("");
var routerKey = Symbol("");
var routeLocationKey = Symbol("");
var routerViewLocationKey = Symbol("");
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) {
		for (const name in record.components) {
			let rawComponent = record.components[name];
			if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
			if (isRouteComponent(rawComponent)) {
				const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
				guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
			} else {
				let componentPromise = rawComponent();
				guards.push(() => componentPromise.then((resolved) => {
					if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
					const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
					record.mods[name] = resolved;
					record.components[name] = resolvedComponent;
					const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
					return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
				}));
			}
		}
	}
	return guards;
}
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
function createMemoryHistory(base = "") {
	let listeners = [];
	let queue = [["", {}]];
	let position = 0;
	base = normalizeBase(base);
	function setLocation(location$1, state = {}) {
		position++;
		if (position !== queue.length) queue.splice(position);
		queue.push([location$1, state]);
	}
	function triggerListeners(to, from, { direction, delta }) {
		const info = {
			direction,
			delta,
			type: NavigationType.pop
		};
		for (const callback of listeners) callback(to, from, info);
	}
	const routerHistory = {
		location: "",
		state: {},
		base,
		createHref: createHref.bind(null, base),
		replace(to, state) {
			queue.splice(position--, 1);
			setLocation(to, state);
		},
		push(to, state) {
			setLocation(to, state);
		},
		listen(callback) {
			listeners.push(callback);
			return () => {
				const index = listeners.indexOf(callback);
				if (index > -1) listeners.splice(index, 1);
			};
		},
		destroy() {
			listeners = [];
			queue = [["", {}]];
			position = 0;
		},
		go(delta, shouldTrigger = true) {
			const from = this.location;
			const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
			position = Math.max(0, Math.min(position + delta, queue.length - 1));
			if (shouldTrigger) triggerListeners(this.location, from, {
				direction,
				delta
			});
		}
	};
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => queue[position][0]
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => queue[position][1]
	});
	return routerHistory;
}
var TokenType = /* @__PURE__ */ function(TokenType$1) {
	TokenType$1[TokenType$1["Static"] = 0] = "Static";
	TokenType$1[TokenType$1["Param"] = 1] = "Param";
	TokenType$1[TokenType$1["Group"] = 2] = "Group";
	return TokenType$1;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState$1) {
	TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
	TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
	TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
	TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
	TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
	return TokenizerState$1;
}(TokenizerState || {});
var ROOT_TOKEN = {
	type: TokenType.Static,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = TokenizerState.Static;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === TokenizerState.Static) segment.push({
			type: TokenType.Static,
			value: buffer
		});
		else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: TokenType.Param,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== TokenizerState.ParamRegExp) {
			previousState = state;
			state = TokenizerState.EscapeNext;
			continue;
		}
		switch (state) {
			case TokenizerState.Static:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = TokenizerState.Param;
				} else addCharToBuffer();
				break;
			case TokenizerState.EscapeNext:
				addCharToBuffer();
				state = previousState;
				break;
			case TokenizerState.Param:
				if (char === "(") state = TokenizerState.ParamRegExp;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = TokenizerState.Static;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case TokenizerState.ParamRegExp:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = TokenizerState.ParamRegExpEnd;
				else customRe += char;
				break;
			case TokenizerState.ParamRegExpEnd:
				consumeBuffer();
				state = TokenizerState.Static;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var PathScore = /* @__PURE__ */ function(PathScore$1) {
	PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
	PathScore$1[PathScore$1["Root"] = 90] = "Root";
	PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
	PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
	PathScore$1[PathScore$1["Static"] = 40] = "Static";
	PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
	PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
	PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
	PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
	PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
	PathScore$1[PathScore$1["BonusStrict"] = .7000000000000001] = "BonusStrict";
	PathScore$1[PathScore$1["BonusCaseSensitive"] = .25] = "BonusCaseSensitive";
	return PathScore$1;
}(PathScore || {});
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
	const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [PathScore.Root];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
			if (token.type === TokenType.Static) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += PathScore.Static;
			} else if (token.type === TokenType.Param) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re$1 !== BASE_PARAM_PATTERN) {
					subSegmentScore += PathScore.BonusCustomRegExp;
					try {
						`${re$1}`;
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += PathScore.Dynamic;
				if (optional) subSegmentScore += PathScore.BonusOptional;
				if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
				if (re$1 === ".*") subSegmentScore += PathScore.BonusWildcard;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += PathScore.BonusStrict;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === TokenType.Static) path += token.value;
			else if (token.type === TokenType.Param) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray$1(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$1(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
	return 0;
}
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const parser = tokensToParser(tokenizePath(record.path), options);
	const matcher = assign$1(parser, {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign$1({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) {
				originalRecord.alias.push(matcher);
			} else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) {
					removeRoute(record.name);
				}
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$1;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location$1, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location$1 && location$1.name) {
			matcher = matcherMap.get(location$1.name);
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
			name = matcher.record.name;
			params = assign$1(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location$1.params && pickParams(location$1.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location$1.path != null) {
			path = location$1.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
				location: location$1,
				currentLocation
			});
			name = matcher.record.name;
			params = assign$1({}, currentLocation.params, location$1.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) {
		upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	}
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	const route = computed(() => {
		const to = unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
			if (props.viewTransition && false);
			return p;
		}
		return Promise.resolve();
	}
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot$1(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot$1(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot$1(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
var RouterView = RouterViewImpl;
function createRouter$1(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery$2;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign$1({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL$1(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href$1 = routerHistory.createHref(locationNormalized.fullPath);
			return assign$1(locationNormalized, matchedRoute$1, {
				params: decodeParams(matchedRoute$1.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href: href$1
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) {
			matcherLocation = assign$1({}, rawLocation, { path: parseURL$1(parseQuery$1, rawLocation.path, currentLocation.path).path });
		} else {
			const targetParams = assign$1({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign$1({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign$1({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL$1(parseQuery$1, to, currentRoute.value.path) : assign$1({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign$1(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign$1({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace$1 = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign$1(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign$1({}, data, shouldRedirect.state) : data,
			force,
			replace: replace$1
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
				to: toLocation,
				from
			});
			handleScroll();
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
			if (failure$1) {
				if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					return pushWithRedirect(assign$1({ replace: replace$1 }, locationAsObject(failure$1.to), {
						state: typeof failure$1.to === "object" ? assign$1({}, data, failure$1.to.state) : data,
						force
					}), redirectedFrom || toLocation);
				}
			} else failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
			triggerAfterEach(toLocation, from, failure$1);
			return failure$1;
		});
	}
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray$1(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = {};
		if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign$1({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll();
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign$1(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$1);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					pushWithRedirect(assign$1(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop$1);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop$1);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else {
			console.error(error);
		}
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve$1, reject) => {
			readyHandlers.add([resolve$1, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve$1, reject]) => err ? reject(err) : resolve$1());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		return Promise.resolve();
	}
	const go = (delta) => routerHistory.go(delta);
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
function useRouter() {
	return inject(routerKey);
}
function useRoute(_name) {
	return inject(routeLocationKey);
}
function toArray$3(value) {
	return Array.isArray(value) ? value : [value];
}
var matcher = /* @__PURE__ */ (() => {
	const $0 = { prerender: true }, $1 = { payload: true }, $2 = {
		payload: false,
		payload: false
	}, $3 = {}, $4 = {
		payload: true,
		payload: true
	};
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		if (p === "/") r.unshift({ data: $0 });
		if (p === "/opensearch.xml") r.unshift({ data: $1 });
		if (p === "/200.html") r.unshift({ data: $0 });
		if (p === "/search") r.unshift({ data: $2 });
		if (p === "/api/opensearch/suggestions") r.unshift({ data: $1 });
		if (p === "/about") r.unshift({ data: $0 });
		if (p === "/settings") r.unshift({ data: $0 });
		if (p === "/oauth-client-metadata.json") r.unshift({ data: $0 });
		if (p === "/_v/script.js") r.unshift({ data: $3 });
		if (p === "/_v/view") r.unshift({ data: $3 });
		if (p === "/_v/event") r.unshift({ data: $3 });
		if (p === "/_v/session") r.unshift({ data: $3 });
		let s = p.split("/");
		s.length - 1;
		if (s[1] === "__og-image__") r.unshift({
			data: $1,
			params: { "_": s.slice(2).join("/") }
		});
		if (s[1] === "api") {
			if (s[2] === "auth") r.unshift({
				data: $2,
				params: { "_": s.slice(3).join("/") }
			});
			if (s[2] === "social") r.unshift({
				data: $2,
				params: { "_": s.slice(3).join("/") }
			});
			if (s[2] === "registry") {
				if (s[3] === "docs") r.unshift({
					data: $4,
					params: { "_": s.slice(4).join("/") }
				});
				if (s[3] === "file") r.unshift({
					data: $4,
					params: { "_": s.slice(4).join("/") }
				});
				if (s[3] === "provenance") r.unshift({
					data: $4,
					params: { "_": s.slice(4).join("/") }
				});
				if (s[3] === "files") r.unshift({
					data: $4,
					params: { "_": s.slice(4).join("/") }
				});
			}
			r.unshift({
				data: $1,
				params: { "_": s.slice(2).join("/") }
			});
		}
		if (s[1] === "package") r.unshift({
			data: $1,
			params: { "_": s.slice(2).join("/") }
		});
		if (s[1] === "package-code") r.unshift({
			data: $4,
			params: { "_": s.slice(2).join("/") }
		});
		if (s[1] === "package-docs") {
			if (s[3] === "v") r.unshift({
				data: $4,
				params: {
					"pkg": s[2],
					"_": s.slice(4).join("/")
				}
			});
			if (s[4] === "v") r.unshift({
				data: $4,
				params: {
					"scope": s[2],
					"pkg": s[3],
					"_": s.slice(5).join("/")
				}
			});
		}
		if (s[1] === "_avatar") r.unshift({
			data: $1,
			params: { "_": s.slice(2).join("/") }
		});
		if (s[2] === ".well-known") {
			if (s[3] === "skills") r.unshift({
				data: $1,
				params: {
					"pkg": s[1],
					"_": s.slice(4).join("/")
				}
			});
		}
		if (s[3] === ".well-known") {
			if (s[4] === "skills") r.unshift({
				data: $1,
				params: {
					"scope": s[1],
					"pkg": s[2],
					"_": s.slice(5).join("/")
				}
			});
		}
		r.unshift({
			data: $1,
			params: { "_": s.slice(1).join("/") }
		});
		return r;
	};
})();
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froute_rules_default = (path) => defu({}, ...matcher("", path).map((r) => r.data).reverse());
var routeRulesMatcher$1 = virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froute_rules_default;
function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	try {
		return routeRulesMatcher$1(path);
	} catch (e) {
		console.error("[nuxt] Error matching route rules.", e);
		return {};
	}
}
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default = [
	{
		name: "about",
		path: "/about",
		component: () => import('./about-BY7H68VO.mjs')
	},
	{
		name: "index",
		path: "/",
		component: () => import('./pages-qyWWwJRu.mjs')
	},
	{
		name: "org",
		path: "/@:org()",
		alias: ["/org/:org()"],
		component: () => import('./_org_-j5oGJtrN.mjs')
	},
	{
		name: "search",
		path: "/search",
		component: () => import('./search-D-DDFeNV.mjs')
	},
	{
		name: "compare",
		path: "/compare",
		component: () => import('./compare-CuANarsG.mjs')
	},
	{
		name: "privacy",
		path: "/privacy",
		component: () => import('./privacy-Hqynxf3j.mjs')
	},
	{
		name: "settings",
		path: "/settings",
		component: () => import('./settings-CsOOCsRE.mjs')
	},
	{
		name: "~username-orgs",
		path: "/~:username()/orgs",
		component: () => import('./orgs-DXydrsW-.mjs')
	},
	{
		name: "~username",
		path: "/~:username()",
		component: () => import('./~_username_-js2hC0e9.mjs')
	},
	{
		name: "package",
		path: "/package/:package(.*)*",
		alias: ["/:package(.*)*"],
		component: () => import('./_...package_-yUY_z9qI.mjs')
	},
	{
		name: "code",
		path: "/package-code/:path+",
		alias: ["/package/code/:path+", "/code/:path+"],
		component: () => import('./_...path_-Dy17CmOy.mjs')
	},
	{
		name: "docs",
		path: "/package-docs/:path+",
		alias: ["/package/docs/:path+", "/docs/:path+"],
		component: () => import('./_...path_-XQ63-OvY.mjs')
	}
];
/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_shared_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports$1) => {
	Object.defineProperty(exports$1, "__esModule", { value: true });
	var objectToString = Object.prototype.toString;
	var toTypeString = (value) => objectToString.call(value);
	var isPlainObject = (val) => toTypeString(val) === "[object Object]";
	exports$1.isPlainObject = isPlainObject;
}));
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
	const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
	return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
	if (to === from || from === START_LOCATION_NORMALIZED) return false;
	if (generateRouteKey(to) !== generateRouteKey(from)) return true;
	if (to.matched.every((comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default)) return false;
	return true;
}
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const hashScrollBehaviour = useRouter$1().options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
	return new Promise((resolve) => {
		if (from === START_LOCATION_NORMALIZED) {
			resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
			return;
		}
		nuxtApp.hooks.hookOnce(hookToWait, () => {
			requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
		});
	});
} };
function _getHashElementScrollMarginTop(selector) {
	try {
		const elem = (void 0).querySelector(selector);
		if (elem) return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
	} catch {}
	return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	const isPageNavigation = isChangingPage(to, from);
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default = {
	hashMode: false,
	scrollBehaviorType: "auto",
	...router_options_default
};
const globalMiddleware = [
	/* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
		let __temp, __restore;
		if (!to.meta?.validate) return;
		const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
		if (result === true) return;
		return createError$1({
			fatal: false,
			status: result && (result.status || result.statusCode) || 404,
			statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
			data: { path: to.fullPath }
		});
	}),
	/* @__PURE__ */ defineNuxtRouteMiddleware((to) => {}),
	/* @__PURE__ */ defineNuxtRouteMiddleware((to) => {}),
	/* @__PURE__ */ defineNuxtRouteMiddleware((to) => {})
];
const namedMiddleware = {};
var router_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
		const history = virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.routes(virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default : virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter$1({
			...virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION_NORMALIZED) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION_NORMALIZED, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = shallowRef(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = shallowRef(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		router.afterEach((to, from) => {
			if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) syncCurrentRoute();
		});
		const route = { sync: syncCurrentRoute };
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = shallowReactive(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		if (!nuxtApp.ssrContext?.islandContext) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error2) {
			[__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = reactive(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			if (!nuxtApp.ssrContext?.islandContext) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry of toArray$3(componentMiddleware)) middlewareEntries.add(entry);
				}
				const routeRules = getRouteRules({ path: to.path });
				if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
				else middlewareEntries.delete(key);
				for (const entry of middlewareEntries) {
					const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
					if (!middleware) throw new Error(`Unknown route middleware: '${entry}'.`);
					try {
						const result = await nuxtApp.runWithContext(() => middleware(to, from));
						if (result === false || result instanceof Error) {
							const error2 = result || createError$1({
								status: 404,
								statusText: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error2));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error2 = createError$1(err);
						if (error2.fatal) await nuxtApp.runWithContext(() => showError(error2));
						return error2;
					}
				}
			}
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			await nuxtApp.callHook("page:loading:end");
		});
		router.afterEach((to) => {
			if (to.matched.length === 0) return nuxtApp.runWithContext(() => showError(createError$1({
				status: 404,
				fatal: false,
				statusText: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error2) {
				await nuxtApp.runWithContext(() => showError(error2));
			}
		});
		return { provide: { router } };
	}
});
function injectHead(nuxtApp) {
	const nuxt = nuxtApp || useNuxtApp();
	return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
		if (hasInjectionContext()) {
			const head = inject(headSymbol);
			if (!head) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
			return head;
		}
	});
}
function useHead$1(input, options = {}) {
	return useHead(input, {
		head: options.head || injectHead(options.nuxt),
		...options
	});
}
function useSeoMeta$1(input, options = {}) {
	return useSeoMeta(input, {
		head: options.head || injectHead(options.nuxt),
		...options
	});
}
var server_placeholder_default = defineComponent({
	name: "ServerPlaceholder",
	render() {
		return createElementBlock("div");
	}
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
var client_only_default = defineComponent({
	name: "ClientOnly",
	inheritAttrs: false,
	props: [
		"fallback",
		"placeholder",
		"placeholderTag",
		"fallbackTag"
	],
	setup(props, { slots, attrs }) {
		const mounted = shallowRef(false);
		const vm = getCurrentInstance();
		if (vm) vm._nuxtClientOnly = true;
		provide(clientOnlySymbol, true);
		return () => {
			if (mounted.value) {
				const vnodes = slots.default?.();
				if (vnodes && vnodes.length === 1) return [cloneVNode(vnodes[0], attrs)];
				return vnodes;
			}
			const slot = slots.fallback || slots.placeholder;
			if (slot) return h(slot);
			const fallbackStr = props.fallback || props.placeholder || "";
			return createElementBlock(props.fallbackTag || props.placeholderTag || "span", attrs, fallbackStr);
		};
	}
});
function useAsyncData(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
	let [_key, _handler, options = {}] = args;
	const key = computed(() => toValue(_key));
	if (typeof key.value !== "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
	if (typeof _handler !== "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
	const nuxtApp = useNuxtApp();
	options.server ??= true;
	options.default ??= getDefault;
	options.getCachedData ??= getDefaultCachedData;
	options.lazy ??= false;
	options.immediate ??= true;
	options.deep ??= asyncDataDefaults.deep;
	options.dedupe ??= "cancel";
	options._functionName;
	nuxtApp._asyncData[key.value];
	function createInitialFetch() {
		const initialFetchOptions = {
			cause: "initial",
			dedupe: options.dedupe
		};
		if (!nuxtApp._asyncData[key.value]?._init) {
			initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
			nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
		}
		return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
	}
	const initialFetch = createInitialFetch();
	const asyncData = nuxtApp._asyncData[key.value];
	asyncData._deps++;
	if (options.server !== false && nuxtApp.payload.serverRendered && options.immediate) {
		const promise = initialFetch();
		if (getCurrentInstance()) onServerPrefetch(() => promise);
		else nuxtApp.hook("app:created", async () => {
			await promise;
		});
	}
	const asyncReturn = {
		data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
		pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
		status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
		error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
		refresh: (...args2) => {
			if (!nuxtApp._asyncData[key.value]?._init) return createInitialFetch()();
			return nuxtApp._asyncData[key.value].execute(...args2);
		},
		execute: (...args2) => asyncReturn.refresh(...args2),
		clear: () => {
			const entry = nuxtApp._asyncData[key.value];
			if (entry?._abortController) try {
				entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
			} finally {
				entry._abortController = void 0;
			}
			clearNuxtDataByKey(nuxtApp, key.value);
		}
	};
	const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
	Object.assign(asyncDataPromise, asyncReturn);
	return asyncDataPromise;
}
function writableComputedRef(getter) {
	return computed({
		get() {
			return getter()?.value;
		},
		set(value) {
			const ref2 = getter();
			if (ref2) ref2.value = value;
		}
	});
}
function useLazyAsyncData(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
	const [key, handler, options = {}] = args;
	return useAsyncData(key, handler, {
		...options,
		lazy: true
	}, null);
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
	if (typeof keyOrFetcher === "string") return false;
	if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) return false;
	if (typeof keyOrFetcher === "function" && typeof fetcher === "function") return false;
	return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
	if (key in nuxtApp.payload.data) nuxtApp.payload.data[key] = void 0;
	if (key in nuxtApp.payload._errors) nuxtApp.payload._errors[key] = void 0;
	if (nuxtApp._asyncData[key]) {
		nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
		nuxtApp._asyncData[key].error.value = void 0;
		nuxtApp._asyncData[key].status.value = "idle";
	}
	if (key in nuxtApp._asyncDataPromises) nuxtApp._asyncDataPromises[key] = void 0;
}
function pick(obj, keys) {
	const newObj = {};
	for (const key of keys) newObj[key] = obj[key];
	return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
	nuxtApp.payload._errors[key] ??= void 0;
	const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
	const handler = _handler ;
	const _ref = options.deep ? ref : shallowRef;
	const hasCachedData = initialCachedData !== void 0;
	const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
		if (!keys || keys.includes(key)) await asyncData.execute({ cause: "refresh:hook" });
	});
	const asyncData = {
		data: _ref(hasCachedData ? initialCachedData : options.default()),
		pending: computed(() => asyncData.status.value === "pending"),
		error: toRef(nuxtApp.payload._errors, key),
		status: shallowRef("idle"),
		execute: (...args) => {
			const [_opts, newValue = void 0] = args;
			const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
			if (nuxtApp._asyncDataPromises[key]) {
				if ((opts.dedupe ?? options.dedupe) === "defer") return nuxtApp._asyncDataPromises[key];
			}
			{
				const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
				if (cachedData !== void 0) {
					nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
					asyncData.error.value = void 0;
					asyncData.status.value = "success";
					return Promise.resolve(cachedData);
				}
			}
			if (asyncData._abortController) asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
			asyncData._abortController = new AbortController();
			asyncData.status.value = "pending";
			const cleanupController = new AbortController();
			const promise = new Promise((resolve, reject) => {
				try {
					const timeout = opts.timeout ?? options.timeout;
					const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
					if (mergedSignal.aborted) {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
						return;
					}
					mergedSignal.addEventListener("abort", () => {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
					}, {
						once: true,
						signal: cleanupController.signal
					});
					return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
				} catch (err) {
					reject(err);
				}
			}).then(async (_result) => {
				let result = _result;
				if (options.transform) result = await options.transform(_result);
				if (options.pick) result = pick(result, options.pick);
				nuxtApp.payload.data[key] = result;
				asyncData.data.value = result;
				asyncData.error.value = void 0;
				asyncData.status.value = "success";
			}).catch((error) => {
				if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) return nuxtApp._asyncDataPromises[key];
				if (asyncData._abortController?.signal.aborted) return nuxtApp._asyncDataPromises[key];
				if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
					asyncData.status.value = "idle";
					return nuxtApp._asyncDataPromises[key];
				}
				asyncData.error.value = createError$1(error);
				asyncData.data.value = unref(options.default());
				asyncData.status.value = "error";
			}).finally(() => {
				cleanupController.abort();
				delete nuxtApp._asyncDataPromises[key];
			});
			nuxtApp._asyncDataPromises[key] = promise;
			return nuxtApp._asyncDataPromises[key];
		},
		_execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
		_default: options.default,
		_deps: 0,
		_init: true,
		_hash: void 0,
		_off: () => {
			unsubRefreshAsyncData();
			if (nuxtApp._asyncData[key]?._init) nuxtApp._asyncData[key]._init = false;
			if (!hasCustomGetCachedData) nextTick(() => {
				if (!nuxtApp._asyncData[key]?._init) {
					clearNuxtDataByKey(nuxtApp, key);
					asyncData.execute = () => Promise.resolve();
				}
			});
		}
	};
	return asyncData;
}
var getDefault = () => void 0;
var getDefaultCachedData = (key, nuxtApp, ctx) => {
	if (nuxtApp.isHydrating) return nuxtApp.payload.data[key];
	if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") return nuxtApp.static.data[key];
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
	const list = signals.filter((s) => !!s);
	if (typeof timeout === "number" && timeout >= 0) {
		const timeoutSignal = AbortSignal.timeout?.(timeout);
		if (timeoutSignal) list.push(timeoutSignal);
	}
	if (AbortSignal.any) return AbortSignal.any(list);
	const controller = new AbortController();
	for (const sig of list) if (sig.aborted) {
		const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
		return controller.signal;
	}
	const onAbort = () => {
		const reason = list.find((s) => s.aborted)?.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
	};
	for (const sig of list) sig.addEventListener?.("abort", onAbort, {
		once: true,
		signal: cleanupSignal
	});
	return controller.signal;
}
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
	if (init !== void 0 && typeof init !== "function") throw new Error("[nuxt] [useState] init must be a function: " + init);
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = toRef(nuxtApp.payload.state, key);
	if (state.value === void 0 && init) {
		const initialValue = init();
		if (isRef(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return initialValue;
		}
		state.value = initialValue;
	}
	return state;
}
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
	return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function prerenderRoutes(path) {
	return;
}
var PREHYDRATE_ATTR_KEY = "data-prehydrate-id";
function onPrehydrate(callback, key) {
	if (typeof callback !== "string") throw new TypeError("[nuxt] To transform a callback into a string, `onPrehydrate` must be processed by the Nuxt build pipeline. If it is called in a third-party library, make sure to add the library to `build.transpile`.");
	const vm = getCurrentInstance();
	if (vm && key) {
		vm.attrs[PREHYDRATE_ATTR_KEY] ||= "";
		key = ":" + key + ":";
		if (!vm.attrs[PREHYDRATE_ATTR_KEY].includes(key)) vm.attrs[PREHYDRATE_ATTR_KEY] += key;
	}
	const code = vm && key ? `document.querySelectorAll('[${PREHYDRATE_ATTR_KEY}*=${JSON.stringify(key)}]').forEach` + callback : callback + "()";
	useHead$1({ script: [{
		key: vm && key ? key : void 0,
		tagPosition: "bodyClose",
		tagPriority: "critical",
		innerHTML: code
	}] });
	return vm && key ? vm.attrs[PREHYDRATE_ATTR_KEY] : void 0;
}
var import_shared_cjs_prod = require_shared_cjs_prod();
function useFetch(request, arg1, arg2) {
	const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
	const _request = computed(() => toValue(request));
	const key = computed(() => toValue(opts.key) || "$f" + hash([
		autoKey,
		typeof _request.value === "string" ? _request.value : "",
		...generateOptionSegments(opts)
	]));
	if (!opts.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") throw new Error("[nuxt] [useFetch] the request URL must not start with \"//\".");
	const { server, lazy, default: defaultFn, transform, pick, watch: watchSources, immediate, getCachedData, deep, dedupe, timeout, ...fetchOptions } = opts;
	const _fetchOptions = reactive({
		...fetchDefaults,
		...fetchOptions,
		cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
	});
	const _asyncDataOptions = {
		server,
		lazy,
		default: defaultFn,
		transform,
		pick,
		immediate,
		getCachedData,
		deep,
		dedupe,
		timeout,
		watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
	};
	return useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
		let _$fetch = opts.$fetch || globalThis.$fetch;
		if (!opts.$fetch) {
			if (typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/")) _$fetch = useRequestFetch();
		}
		return _$fetch(_request.value, {
			signal,
			..._fetchOptions
		});
	}, _asyncDataOptions);
}
function useLazyFetch(request, arg1, arg2) {
	const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
	return useFetch(request, {
		...opts,
		lazy: true
	}, autoKey);
}
function generateOptionSegments(opts) {
	const segments = [toValue(opts.method)?.toUpperCase() || "GET", toValue(opts.baseURL)];
	for (const _obj of [opts.query || opts.params]) {
		const obj = toValue(_obj);
		if (!obj) continue;
		const unwrapped = {};
		for (const [key, value] of Object.entries(obj)) unwrapped[toValue(key)] = toValue(value);
		segments.push(unwrapped);
	}
	if (opts.body) {
		const value = toValue(opts.body);
		if (!value) segments.push(hash(value));
		else if (value instanceof ArrayBuffer) segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
		else if (value instanceof FormData) {
			const obj = {};
			for (const entry of value.entries()) {
				const [key, val] = entry;
				obj[key] = val instanceof File ? val.name : val;
			}
			segments.push(hash(obj));
		} else if ((0, import_shared_cjs_prod.isPlainObject)(value)) segments.push(hash(reactive(value)));
		else try {
			segments.push(hash(value));
		} catch {
			console.warn("[useFetch] Failed to hash body", value);
		}
	}
	return segments;
}
var CookieDefaults = {
	path: "/",
	watch: true,
	decode: (val) => {
		const decoded = decodeURIComponent(val);
		const parsed = destr(decoded);
		if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) return decoded;
		return parsed;
	},
	encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
	const opts = {
		...CookieDefaults,
		..._opts
	};
	opts.filter ??= (key) => key === name;
	const cookies = readRawCookies(opts) || {};
	let delay;
	if (opts.maxAge !== void 0) delay = opts.maxAge * 1e3;
	else if (opts.expires) delay = opts.expires.getTime() - Date.now();
	const cookie = ref(klona(delay !== void 0 && delay <= 0 ? void 0 : cookies[name] ?? opts.default?.()));
	{
		const nuxtApp = useNuxtApp();
		const writeFinalCookieValue = () => {
			if (opts.readonly || isEqual(cookie.value, cookies[name])) return;
			nuxtApp._cookies ||= {};
			if (name in nuxtApp._cookies) {
				if (isEqual(cookie.value, nuxtApp._cookies[name])) return;
			}
			nuxtApp._cookies[name] = cookie.value;
			writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
		};
		const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
		nuxtApp.hooks.hookOnce("app:error", () => {
			unhook();
			return writeFinalCookieValue();
		});
	}
	return cookie;
}
function readRawCookies(opts = {}) {
	return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
}
function writeServerCookie(event, name, value, opts = {}) {
	if (event) {
		if (value !== null && value !== void 0) return setCookie(event, name, value, opts);
		if (getCookie(event, name) !== void 0) return deleteCookie(event, name, opts);
	}
}
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
}
function useRequestURL(opts) {
	return getRequestURL(useRequestEvent(), opts);
}
var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
	const componentName = options.componentName || "NuxtLink";
	function isHashLinkWithoutHashMode(link) {
		return typeof link === "string" && link.startsWith("#");
	}
	function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
		const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
		if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
		if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
		const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
		return {
			...to,
			name: void 0,
			path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
		};
	}
	function useNuxtLink(props) {
		const router = useRouter$1();
		const config = /* @__PURE__ */ useRuntimeConfig();
		const hasTarget = computed(() => !!props.target && props.target !== "_self");
		const isAbsoluteUrl = computed(() => {
			const path = props.to || props.href || "";
			return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
		});
		const builtinRouterLink = resolveComponent("RouterLink");
		const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
		const isExternal = computed(() => {
			if (props.external) return true;
			const path = props.to || props.href || "";
			if (typeof path === "object") return false;
			return path === "" || isAbsoluteUrl.value;
		});
		const to = computed(() => {
			const path = props.to || props.href || "";
			if (isExternal.value) return path;
			return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
		});
		const link = isExternal.value ? void 0 : useBuiltinLink?.({
			...props,
			to
		});
		const href = computed(() => {
			const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
			if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) return to.value;
			if (isExternal.value) {
				const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
				return applyTrailingSlashBehavior(typeof path === "object" ? router.resolve(path).href : path, effectiveTrailingSlash);
			}
			if (typeof to.value === "object") return router.resolve(to.value)?.href ?? null;
			return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
		});
		return {
			to,
			hasTarget,
			isAbsoluteUrl,
			isExternal,
			href,
			isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
			isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
			route: link?.route ?? computed(() => router.resolve(to.value)),
			async navigate(_e) {
				await navigateTo(href.value, {
					replace: props.replace,
					external: isExternal.value || hasTarget.value
				});
			}
		};
	}
	return defineComponent({
		name: componentName,
		props: {
			to: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			href: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			target: {
				type: String,
				default: void 0,
				required: false
			},
			rel: {
				type: String,
				default: void 0,
				required: false
			},
			noRel: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetchOn: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			noPrefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			activeClass: {
				type: String,
				default: void 0,
				required: false
			},
			exactActiveClass: {
				type: String,
				default: void 0,
				required: false
			},
			prefetchedClass: {
				type: String,
				default: void 0,
				required: false
			},
			replace: {
				type: Boolean,
				default: void 0,
				required: false
			},
			ariaCurrentValue: {
				type: String,
				default: void 0,
				required: false
			},
			external: {
				type: Boolean,
				default: void 0,
				required: false
			},
			custom: {
				type: Boolean,
				default: void 0,
				required: false
			},
			trailingSlash: {
				type: String,
				default: void 0,
				required: false
			}
		},
		useLink: useNuxtLink,
		setup(props, { slots }) {
			const router = useRouter$1();
			const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
			shallowRef(false);
			const el = void 0;
			const elRef = void 0;
			async function prefetch(nuxtApp = useNuxtApp()) {}
			return () => {
				if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
					const routerLinkProps = {
						ref: elRef,
						to: to.value,
						activeClass: props.activeClass || options.activeClass,
						exactActiveClass: props.exactActiveClass || options.exactActiveClass,
						replace: props.replace,
						ariaCurrentValue: props.ariaCurrentValue,
						custom: props.custom
					};
					if (!props.custom) routerLinkProps.rel = props.rel || void 0;
					return h(resolveComponent("RouterLink"), routerLinkProps, slots.default);
				}
				const target = props.target || null;
				const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
				if (props.custom) {
					if (!slots.default) return null;
					return slots.default({
						href: href.value,
						navigate,
						prefetch,
						get route() {
							if (!href.value) return;
							const url = new URL(href.value, "http://localhost");
							return {
								path: url.pathname,
								fullPath: url.pathname,
								get query() {
									return parseQuery(url.search);
								},
								hash: url.hash,
								params: {},
								name: void 0,
								matched: [],
								redirectedFrom: void 0,
								meta: {},
								href: href.value
							};
						},
						rel,
						target,
						isExternal: isExternal.value || hasTarget.value,
						isActive: false,
						isExactActive: false
					});
				}
				return h("a", {
					ref: el,
					href: href.value || null,
					rel,
					target,
					onClick: (event) => {
						if (isExternal.value || hasTarget.value) return;
						event.preventDefault();
						return props.replace ? router.replace(href.value) : router.push(href.value);
					}
				}, slots.default?.());
			};
		}
	});
}
var nuxt_link_default = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
	const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
	if (hasProtocol(to) && !to.startsWith("http")) return to;
	return normalizeFn(to, true);
}
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fapp_config_default = /* @__PURE__ */ defuFn({
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
});
function useAppConfig() {
	const nuxtApp = useNuxtApp();
	nuxtApp._appConfig ||= klona(virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fapp_config_default);
	return nuxtApp._appConfig;
}
var _0_siteConfig_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt-site-config:init",
	enforce: "pre",
	async setup(nuxtApp) {
		const stack = useRequestEvent()?.context?.siteConfig;
		const state = useState("site-config");
		nuxtApp.hooks.hook("app:rendered", () => {
			state.value = stack?.get({
				debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
				resolveRefs: true
			});
		});
		return { provide: { nuxtSiteConfig: stack } };
	}
});
var VALID_ISLAND_KEY_RE = /^[a-z][a-z\d-]*_[a-z\d]+$/i;
function isValidIslandKey(key) {
	return typeof key === "string" && VALID_ISLAND_KEY_RE.test(key) && key.length <= 100;
}
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
	["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
	["Ref", (data) => isRef(data) && data.value],
	["Reactive", (data) => isReactive(data) && toRaw(data)]
];
reducers.push(["Island", (data) => data && data?.__nuxt_island && isValidIslandKey(data.__nuxt_island.key) && data.__nuxt_island]);
var revive_payload_server_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:revive-payload:server",
	setup() {
		for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
	}
});
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcomponents_plugin_default = /* @__PURE__ */ defineNuxtPlugin({ name: "nuxt:global-components" });
const preference = "system";
const dataValue = "theme";
var plugin_server_default = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
	const colorMode = nuxtApp.ssrContext?.islandContext ? ref({}).value : useState("color-mode", () => reactive({
		preference,
		value: preference,
		unknown: true,
		forced: false
	})).value;
	const htmlAttrs = {};
	useHead$1({ htmlAttrs });
	useRouter$1().afterEach((to) => {
		const forcedColorMode = to.meta.colorMode;
		if (forcedColorMode && forcedColorMode !== "system") {
			htmlAttrs["data-color-mode-forced"] = forcedColorMode;
			colorMode.value = forcedColorMode;
			htmlAttrs[`data-${dataValue}`] = colorMode.value;
			colorMode.forced = true;
		} else if (forcedColorMode === "system") console.warn("You cannot force the colorMode to system at the page level.");
	});
	nuxtApp.provide("colorMode", colorMode);
});
function warn(msg, err) {
	if (typeof console !== "undefined") {
		console.warn(`[intlify] ` + msg);
		/* istanbul ignore if */
		if (err) console.warn(err.stack);
	}
}
var makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
var generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
	l: locale,
	k: key,
	s: source
});
var friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
var isNumber = (val) => typeof val === "number" && isFinite(val);
var isDate = (val) => toTypeString(val) === "[object Date]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
var assign = Object.assign;
var _create = Object.create;
var create = (obj = null) => _create(obj);
function escapeHtml(rawText) {
	return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
	return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
	html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
	html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
	if (/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(html)) {
		html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
	}
	[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((pattern) => {
		html = html.replace(pattern, "$1javascript&#58;");
	});
	return html;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key);
}
var isArray = Array.isArray;
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isObject$1 = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var toDisplayString$1 = (val) => {
	return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
	return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
var isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
function deepCopy(src, des) {
	if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) throw new Error("Invalid value");
	const stack = [{
		src,
		des
	}];
	while (stack.length) {
		const { src, des } = stack.pop();
		Object.keys(src).forEach((key) => {
			if (key === "__proto__") return;
			if (isObject$1(src[key]) && !isObject$1(des[key])) des[key] = Array.isArray(src[key]) ? [] : create();
			if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) des[key] = src[key];
			else stack.push({
				src: src[key],
				des: des[key]
			});
		});
	}
}
function localeHead$1(options, currentLanguage = options.getCurrentLanguage(), currentDirection = options.getCurrentDirection()) {
	const metaObject = {
		htmlAttrs: {},
		link: [],
		meta: []
	};
	if (options.dir) metaObject.htmlAttrs.dir = currentDirection;
	if (options.lang && currentLanguage) metaObject.htmlAttrs.lang = currentLanguage;
	if (options.seo) {
		const alternateLinks = getHreflangLinks(options);
		metaObject.link = metaObject.link.concat(alternateLinks, getCanonicalLink(options));
		metaObject.meta = metaObject.meta.concat(getOgUrl(options), getCurrentOgLocale(options), getAlternateOgLocales(options, options.locales.map((x) => x.language || x.code)));
	}
	return metaObject;
}
function createLocaleMap(locales) {
	const localeMap = /* @__PURE__ */ new Map();
	for (const locale of locales) {
		if (!locale.language) {
			console.warn("Locale `language` ISO code is required to generate alternate link");
			continue;
		}
		const [language, region] = locale.language.split("-");
		if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) localeMap.set(language, locale);
		localeMap.set(locale.language, locale);
	}
	return localeMap;
}
function getHreflangLinks(options) {
	if (!options.hreflangLinks) return [];
	const links = [];
	const localeMap = createLocaleMap(options.locales);
	for (const [language, locale] of localeMap.entries()) {
		const link = getHreflangLink(language, locale, options);
		if (!link) continue;
		links.push(link);
		if (options.defaultLocale && options.defaultLocale === locale.code && links[0].hreflang !== "x-default") links.unshift({
			[options.key]: "i18n-xd",
			rel: "alternate",
			href: link.href,
			hreflang: "x-default"
		});
	}
	return links;
}
function getHreflangLink(language, locale, options, routeWithoutQuery = options.strictCanonicals ? options.getRouteWithoutQuery() : void 0) {
	const localePath = options.getLocalizedRoute(locale.code, routeWithoutQuery);
	if (!localePath) return;
	const href = withQuery(hasProtocol(localePath) ? localePath : joinURL(options.baseUrl, localePath), options.strictCanonicals ? getCanonicalQueryParams(options) : {});
	return {
		[options.key]: `i18n-alt-${language}`,
		rel: "alternate",
		href,
		hreflang: language
	};
}
function getCanonicalUrl(options, route = options.getCurrentRoute()) {
	const currentRoute = options.getLocaleRoute(Object.assign({}, route, {
		path: void 0,
		name: options.getRouteBaseName(route)
	}));
	if (!currentRoute) return "";
	return withQuery(joinURL(options.baseUrl, currentRoute.path), getCanonicalQueryParams(options));
}
function getCanonicalLink(options, href = getCanonicalUrl(options)) {
	if (!href) return [];
	return [{
		[options.key]: "i18n-can",
		rel: "canonical",
		href
	}];
}
function getCanonicalQueryParams(options, route = options.getCurrentRoute()) {
	const currentRouteQuery = options.getLocaleRoute(Object.assign({}, route, {
		path: void 0,
		name: options.getRouteBaseName(route)
	}))?.query ?? {};
	const params = {};
	for (const param of options.canonicalQueries.filter((x) => x in currentRouteQuery)) {
		params[param] ??= [];
		for (const val of toArray$2(currentRouteQuery[param])) params[param].push(val || "");
	}
	return params;
}
function getOgUrl(options, href = getCanonicalUrl(options)) {
	if (!href) return [];
	return [{
		[options.key]: "i18n-og-url",
		property: "og:url",
		content: href
	}];
}
function getCurrentOgLocale(options, currentLanguage = options.getCurrentLanguage()) {
	if (!currentLanguage) return [];
	return [{
		[options.key]: "i18n-og",
		property: "og:locale",
		content: formatOgLanguage(currentLanguage)
	}];
}
function getAlternateOgLocales(options, languages, currentLanguage = options.getCurrentLanguage()) {
	return languages.filter((locale) => locale && locale !== currentLanguage).map((locale) => ({
		[options.key]: `i18n-og-alt-${locale}`,
		property: "og:locale:alternate",
		content: formatOgLanguage(locale)
	}));
}
function formatOgLanguage(val = "") {
	return val.replace(/-/g, "_");
}
function toArray$2(value) {
	return Array.isArray(value) ? value : [value];
}
function localePath(ctx, route, locale = ctx.getLocale()) {
	if (isString(route) && hasProtocol(route, { acceptRelative: true })) return route;
	try {
		return resolveRoute(ctx, route, locale).fullPath;
	} catch {
		return "";
	}
}
function localeRoute(ctx, route, locale = ctx.getLocale()) {
	try {
		return resolveRoute(ctx, route, locale);
	} catch {
		return;
	}
}
function normalizeRawLocation(route) {
	if (!isString(route)) return assign({}, route);
	if (route[0] === "/") {
		const { pathname: path, search, hash } = parsePath(route);
		return {
			path,
			query: parseQuery(search),
			hash
		};
	}
	return { name: route };
}
function resolveRoute(ctx, route, locale) {
	const normalized = normalizeRawLocation(route);
	const resolved = ctx.router.resolve(ctx.resolveLocalizedRouteObject(normalized, locale));
	if (resolved.name) return resolved;
	return ctx.router.resolve(route);
}
function switchLocalePath(ctx, locale, route = ctx.router.currentRoute.value) {
	const name = ctx.getRouteBaseName(route);
	if (!name) return "";
	const path = localePath(ctx, {
		name,
		params: assign({}, route.params, ctx.getLocalizedDynamicParams(locale)),
		fullPath: route.fullPath,
		query: route.query,
		hash: route.hash,
		path: route.path,
		meta: route.meta
	}, locale);
	return ctx.afterSwitchLocalePath(path, locale);
}
function createHeadContext(ctx, config, locale = ctx.getLocale(), locales = ctx.getLocales(), baseUrl = ctx.getBaseUrl()) {
	const currentLocale = locales.find((l) => l.code === locale) || { };
	const canonicalQueries = typeof config.seo === "object" && config.seo?.canonicalQueries || [];
	if (!baseUrl && true) console.warn("I18n `baseUrl` is required to generate valid SEO tag links.");
	return {
		...config,
		key: "id",
		locales,
		baseUrl,
		canonicalQueries,
		hreflangLinks: ctx.routingOptions.hreflangLinks,
		defaultLocale: ctx.routingOptions.defaultLocale,
		strictCanonicals: ctx.routingOptions.strictCanonicals,
		getRouteBaseName: ctx.getRouteBaseName,
		getCurrentRoute: () => ctx.router.currentRoute.value,
		getCurrentLanguage: () => currentLocale.language,
		getCurrentDirection: () => currentLocale.dir || "ltr",
		getLocaleRoute: (route) => localeRoute(ctx, route),
		getLocalizedRoute: (locale2, route) => switchLocalePath(ctx, locale2, route),
		getRouteWithoutQuery: () => {
			try {
				return assign({}, ctx.router.resolve({ query: {} }), { meta: ctx.router.currentRoute.value.meta });
			} catch {
				return;
			}
		}
	};
}
function localeHead(ctx, { dir = true, lang = true, seo = true }) {
	return localeHead$1(createHeadContext(ctx, {
		dir,
		lang,
		seo
	}));
}
function parseAcceptLanguage(value) {
	return value.split(",").map((tag) => tag.split(";")[0]).filter((tag) => !(tag === "*" || tag === ""));
}
function createPathIndexLanguageParser(index = 0) {
	return (path) => {
		const parts = (typeof path === "string" ? path : path.pathname).split("?")[0].split("/");
		if (parts[0] === "") parts.shift();
		return parts.length > index ? parts[index] || "" : "";
	};
}
var separator = "___";
function normalizeRouteName(routeName) {
	if (typeof routeName === "string") return routeName;
	if (routeName != null) return routeName.toString();
	return "";
}
function getRouteBaseName(route) {
	return normalizeRouteName(typeof route === "object" ? route?.name : route).split(separator)[0];
}
var pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
	return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
	const input = normalizeInput(route);
	return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}
function createLocaleRouteNameGetter(defaultLocale) {
	return (routeName) => normalizeRouteName(routeName);
}
function createLocalizedRouteByPathResolver(router) {
	return (route) => route;
}
const localeCodes = [
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
	"ar-EG": [{
		key: "locale_ar_46json_b1650369",
		load: () => import(
			'./ar-Br7K2gQ-.mjs'
			/* webpackChunkName: "locale_ar_46json_b1650369" */
),
		cache: true
	}, {
		key: "locale_ar_45EG_46json_6b7ccb90",
		load: () => import(
			'./ar-EG-CoIDp8YS.mjs'
			/* webpackChunkName: "locale_ar_45EG_46json_6b7ccb90" */
),
		cache: true
	}],
	"az-AZ": [{
		key: "locale_az_45AZ_46json_a18dff2a",
		load: () => import(
			'./az-AZ-BRTVuS10.mjs'
			/* webpackChunkName: "locale_az_45AZ_46json_a18dff2a" */
),
		cache: true
	}],
	"cs-CZ": [{
		key: "locale_cs_45CZ_46json_2c508961",
		load: () => import(
			'./cs-CZ-CfyKeuO7.mjs'
			/* webpackChunkName: "locale_cs_45CZ_46json_2c508961" */
),
		cache: true
	}],
	"de-DE": [{
		key: "locale_de_45DE_46json_793c67f4",
		load: () => import(
			'./de-DE-Ciedb_7j.mjs'
			/* webpackChunkName: "locale_de_45DE_46json_793c67f4" */
),
		cache: true
	}],
	"en-GB": [{
		key: "locale_en_46json_d1b6dca7",
		load: () => import(
			'./en-BZ8EW1dL.mjs'
			/* webpackChunkName: "locale_en_46json_d1b6dca7" */
),
		cache: true
	}, {
		key: "locale_en_45GB_46json_cc746880",
		load: () => import(
			'./en-GB-BmDs0uVN.mjs'
			/* webpackChunkName: "locale_en_45GB_46json_cc746880" */
),
		cache: true
	}],
	"en-US": [{
		key: "locale_en_46json_d1b6dca7",
		load: () => import(
			'./en-BZ8EW1dL.mjs'
			/* webpackChunkName: "locale_en_46json_d1b6dca7" */
),
		cache: true
	}, {
		key: "locale_en_45US_46json_47d8b921",
		load: () => import(
			'./en-US-C9olwkpw.mjs'
			/* webpackChunkName: "locale_en_45US_46json_47d8b921" */
),
		cache: true
	}],
	"es-419": [{
		key: "locale_es_46json_9914f8cb",
		load: () => import(
			'./es-C6xi4iPX.mjs'
			/* webpackChunkName: "locale_es_46json_9914f8cb" */
),
		cache: true
	}, {
		key: "locale_es_45419_46json_3dd7580f",
		load: () => import(
			'./es-419-CJw7whRT.mjs'
			/* webpackChunkName: "locale_es_45419_46json_3dd7580f" */
),
		cache: true
	}],
	"es-ES": [{
		key: "locale_es_46json_9914f8cb",
		load: () => import(
			'./es-C6xi4iPX.mjs'
			/* webpackChunkName: "locale_es_46json_9914f8cb" */
),
		cache: true
	}, {
		key: "locale_es_45ES_46json_b63f6fce",
		load: () => import(
			'./es-ES-DX72whO3.mjs'
			/* webpackChunkName: "locale_es_45ES_46json_b63f6fce" */
),
		cache: true
	}],
	"fr-FR": [{
		key: "locale_fr_45FR_46json_090490e0",
		load: () => import(
			'./fr-FR-BXB6OKEW.mjs'
			/* webpackChunkName: "locale_fr_45FR_46json_090490e0" */
),
		cache: true
	}],
	"hi-IN": [{
		key: "locale_hi_45IN_46json_6033ac52",
		load: () => import(
			'./hi-IN-1vXFvkyV.mjs'
			/* webpackChunkName: "locale_hi_45IN_46json_6033ac52" */
),
		cache: true
	}],
	"hu-HU": [{
		key: "locale_hu_45HU_46json_2ab63b85",
		load: () => import(
			'./hu-HU-Qt3mrAIt.mjs'
			/* webpackChunkName: "locale_hu_45HU_46json_2ab63b85" */
),
		cache: true
	}],
	"id-ID": [{
		key: "locale_id_45ID_46json_37e457bf",
		load: () => import(
			'./id-ID-CVQ6UaXR.mjs'
			/* webpackChunkName: "locale_id_45ID_46json_37e457bf" */
),
		cache: true
	}],
	"it-IT": [{
		key: "locale_it_45IT_46json_5966b358",
		load: () => import(
			'./it-IT-CwHT3Sux.mjs'
			/* webpackChunkName: "locale_it_45IT_46json_5966b358" */
),
		cache: true
	}],
	"ja-JP": [{
		key: "locale_ja_45JP_46json_02b78096",
		load: () => import(
			'./ja-JP-C3jU6eF3.mjs'
			/* webpackChunkName: "locale_ja_45JP_46json_02b78096" */
),
		cache: true
	}],
	"mr-IN": [{
		key: "locale_mr_45IN_46json_0c594f3b",
		load: () => import(
			'./mr-IN-CZhrDck5.mjs'
			/* webpackChunkName: "locale_mr_45IN_46json_0c594f3b" */
),
		cache: true
	}],
	"ne-NP": [{
		key: "locale_ne_45NP_46json_4258d553",
		load: () => import(
			'./ne-NP-BxgQl2kE.mjs'
			/* webpackChunkName: "locale_ne_45NP_46json_4258d553" */
),
		cache: true
	}],
	"pl-PL": [{
		key: "locale_pl_45PL_46json_d72446a2",
		load: () => import(
			'./pl-PL-mKfoCCGb.mjs'
			/* webpackChunkName: "locale_pl_45PL_46json_d72446a2" */
),
		cache: true
	}],
	"pt-BR": [{
		key: "locale_pt_45BR_46json_095c9ce2",
		load: () => import(
			'./pt-BR-D3vsKKnx.mjs'
			/* webpackChunkName: "locale_pt_45BR_46json_095c9ce2" */
),
		cache: true
	}],
	"ru-RU": [{
		key: "locale_ru_45RU_46json_f34297b4",
		load: () => import(
			'./ru-RU-C7gZsXWj.mjs'
			/* webpackChunkName: "locale_ru_45RU_46json_f34297b4" */
),
		cache: true
	}],
	"uk-UA": [{
		key: "locale_uk_45UA_46json_99fdf60e",
		load: () => import(
			'./uk-UA-DUVQNMnb.mjs'
			/* webpackChunkName: "locale_uk_45UA_46json_99fdf60e" */
),
		cache: true
	}],
	"zh-CN": [{
		key: "locale_zh_45CN_46json_78414034",
		load: () => import(
			'./zh-CN-D06xv5ze.mjs'
			/* webpackChunkName: "locale_zh_45CN_46json_78414034" */
),
		cache: true
	}],
	"zh-TW": [{
		key: "locale_zh_45TW_46json_07b72df2",
		load: () => import(
			'./zh-TW-CZvrppGV.mjs'
			/* webpackChunkName: "locale_zh_45TW_46json_07b72df2" */
),
		cache: true
	}]
};
const vueI18nConfigs = [() => import(
	'./i18n.config-DdYBbD9c.mjs'
	/* webpackChunkName: "config_i18n_46config_46ts_97aac619" */
)];
const normalizedLocales = [
	{
		code: "ar-EG",
		name: "العربية",
		dir: "rtl",
		language: void 0
	},
	{
		code: "az-AZ",
		name: "Azərbaycanca",
		language: void 0
	},
	{
		code: "cs-CZ",
		name: "Čeština",
		language: void 0
	},
	{
		code: "de-DE",
		name: "Deutsch",
		language: void 0
	},
	{
		code: "en-GB",
		name: "English (UK)",
		language: void 0
	},
	{
		code: "en-US",
		name: "English (US)",
		language: void 0
	},
	{
		code: "es-419",
		name: "Español (Latinoamérica)",
		language: void 0
	},
	{
		code: "es-ES",
		name: "Español (España)",
		language: void 0
	},
	{
		code: "fr-FR",
		name: "Français",
		language: void 0
	},
	{
		code: "hi-IN",
		name: "हिंदी",
		language: void 0
	},
	{
		code: "hu-HU",
		name: "Magyar",
		language: void 0
	},
	{
		code: "id-ID",
		name: "Indonesia",
		language: void 0
	},
	{
		code: "it-IT",
		name: "Italiano",
		language: void 0
	},
	{
		code: "ja-JP",
		name: "日本語",
		language: void 0
	},
	{
		code: "mr-IN",
		name: "मराठी",
		language: void 0
	},
	{
		code: "ne-NP",
		name: "नेपाली",
		language: void 0
	},
	{
		code: "pl-PL",
		name: "Polski",
		language: void 0
	},
	{
		code: "pt-BR",
		name: "Português (Brasil)",
		language: void 0
	},
	{
		code: "ru-RU",
		name: "Русский",
		language: void 0
	},
	{
		code: "uk-UA",
		name: "Українська",
		language: void 0
	},
	{
		code: "zh-CN",
		name: "简体中文",
		language: void 0
	},
	{
		code: "zh-TW",
		name: "繁體中文",
		language: void 0
	}
];
var cacheMessages = /* @__PURE__ */ new Map();
var merger = createDefu((obj, key, value) => {
	if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
		obj[key] ??= create(null);
		deepCopy(value, obj[key]);
		return true;
	}
});
async function loadVueI18nOptions(vueI18nConfigs) {
	const nuxtApp = useNuxtApp();
	let vueI18nOptions = { messages: create(null) };
	for (const configFile of vueI18nConfigs) {
		const resolver = await configFile().then((x) => x.default);
		const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
		vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
	}
	vueI18nOptions.fallbackLocale ??= false;
	return vueI18nOptions;
}
var isModule = (val) => toTypeString(val) === "[object Module]";
var isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages$1(locale, loader) {
	const nuxtApp = useNuxtApp();
	try {
		const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
		return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
	} catch (e) {
		throw new Error(`Failed loading locale (${locale}): ` + e.message);
	}
}
async function getLocaleMessagesMergedCached(locale, loaders = []) {
	const nuxtApp = useNuxtApp();
	const messages = await Promise.all(loaders.map(async (loader) => {
		const cached = getCachedMessages(loader);
		const messages2 = cached || await nuxtApp.runWithContext(() => getLocaleMessages$1(locale, loader));
		if (!cached && loader.cache !== false) cacheMessages.set(loader.key, {
			ttl: Date.now() + 86400 * 1e3,
			value: messages2
		});
		return messages2;
	}));
	const merged = {};
	for (const message of messages) deepCopy(message, merged);
	return merged;
}
function getCachedMessages(loader) {
	if (loader.cache === false) return;
	const cache = cacheMessages.get(loader.key);
	if (cache == null) return;
	return cache.ttl > Date.now() ? cache.value : void 0;
}
function getI18nTarget(i18n) {
	return i18n != null && "global" in i18n && "mode" in i18n ? i18n.global : i18n;
}
function getComposer$3(i18n) {
	const target = getI18nTarget(i18n);
	return "__composer" in target ? target.__composer : target;
}
function useRuntimeI18n(nuxtApp, event) {
	if (!nuxtApp) return (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
	return nuxtApp.$config.public.i18n;
}
function useI18nDetection(nuxtApp) {
	const detectBrowserLanguage = useRuntimeI18n(nuxtApp).detectBrowserLanguage;
	const detect = detectBrowserLanguage || {};
	return {
		...detect,
		enabled: !!detectBrowserLanguage,
		cookieKey: detect.cookieKey || "i18n_redirected"
	};
}
function resolveRootRedirect(config) {
	if (!config) return;
	return {
		path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
		code: !isString(config) && config.statusCode || 302
	};
}
function toArray$1(value) {
	return Array.isArray(value) ? value : [value];
}
function matchDomainLocale(locales, host, pathLocale) {
	const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
	const matches = locales.filter((locale) => normalizeDomain(locale.domain) === host || toArray$1(locale.domains).includes(host));
	if (matches.length <= 1) return matches[0]?.code;
	return matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code;
}
function domainFromLocale(domainLocales, url, locale) {
	const lang = normalizedLocales.find((x) => x.code === locale);
	const domain = domainLocales?.[locale]?.domain || lang?.domain || lang?.domains?.find((v) => v === url.host);
	if (!domain) return;
	if (hasProtocol(domain, { strict: true })) return domain;
	return url.protocol + "//" + domain;
}
function getDefaultLocaleForDomain(host) {
	return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");
const resolveSupportedLocale = (locale) => isSupportedLocale(locale) ? locale : void 0;
const useLocaleConfigs = () => useState("i18n:cached-locale-configs", () => void 0);
const useResolvedLocale = () => useState("i18n:resolved-locale", () => "");
function useI18nCookie({ cookieCrossOrigin, cookieDomain, cookieSecure, cookieKey }) {
	const date = /* @__PURE__ */ new Date();
	return useCookie(cookieKey, {
		path: "/",
		readonly: false,
		expires: new Date(date.setDate(date.getDate() + 365)),
		sameSite: cookieCrossOrigin ? "none" : "lax",
		domain: cookieDomain || void 0,
		secure: cookieCrossOrigin || cookieSecure
	});
}
function createNuxtI18nContext(nuxt, vueI18n, defaultLocale) {
	const i18n = getI18nTarget(vueI18n);
	const runtimeI18n = useRuntimeI18n(nuxt);
	const detectConfig = useI18nDetection(nuxt);
	const serverLocaleConfigs = useLocaleConfigs();
	const localeCookie = useI18nCookie(detectConfig);
	const loadMap = /* @__PURE__ */ new Set();
	const getLocaleConfig = (locale) => serverLocaleConfigs.value[locale];
	const getDomainFromLocale = (locale) => domainFromLocale(runtimeI18n.domainLocales, useRequestURL({ xForwardedHost: true }), locale);
	const baseUrl = createBaseUrlGetter(nuxt, runtimeI18n.baseUrl);
	const resolvedLocale = useResolvedLocale();
	if (nuxt.ssrContext?.event?.context?.nuxtI18n?.detectLocale) resolvedLocale.value = nuxt.ssrContext.event.context.nuxtI18n.detectLocale;
	const loadMessagesFromClient = async (locale) => {
		const locales = getLocaleConfig(locale)?.fallbacks ?? [];
		if (!locales.includes(locale)) locales.push(locale);
		for (const k of locales) {
			const msg = await nuxt.runWithContext(() => getLocaleMessagesMergedCached(k, localeLoaders[k]));
			i18n.mergeLocaleMessage(k, msg);
		}
	};
	const loadMessagesFromServer = async (locale) => {
		if (locale in localeLoaders === false) return;
		const headers = getLocaleConfig(locale)?.cacheable ? {} : { "Cache-Control": "no-cache" };
		const messages = await $fetch(`/_i18n/sEXdXGnD/${locale}/messages.json`, { headers });
		for (const k of Object.keys(messages)) i18n.mergeLocaleMessage(k, messages[k]);
	};
	const ctx = {
		vueI18n,
		initial: true,
		preloaded: false,
		config: runtimeI18n,
		rootRedirect: resolveRootRedirect(runtimeI18n.rootRedirect),
		redirectStatusCode: runtimeI18n.redirectStatusCode ?? 302,
		dynamicResourcesSSG: false,
		getDefaultLocale: () => defaultLocale,
		getLocale: () => unref(i18n.locale),
		setLocale: async (locale) => {
			const oldLocale = ctx.getLocale();
			if (locale === oldLocale || !isSupportedLocale(locale)) return;
			if (isRef(i18n.locale)) i18n.locale.value = locale;
			else i18n.locale = locale;
			await nuxt.callHook("i18n:localeSwitched", {
				newLocale: locale,
				oldLocale
			});
			resolvedLocale.value = locale;
		},
		setLocaleSuspend: async (locale) => {
			if (!isSupportedLocale(locale)) return;
			ctx.vueI18n.__pendingLocale = locale;
			ctx.vueI18n.__pendingLocalePromise = new Promise((resolve) => {
				ctx.vueI18n.__resolvePendingLocalePromise = async () => {
					ctx.setCookieLocale(locale);
					await ctx.setLocale(locale);
					ctx.vueI18n.__pendingLocale = void 0;
					resolve();
				};
			});
			await ctx.vueI18n.__resolvePendingLocalePromise?.();
		},
		getLocales: () => unref(i18n.locales).map((x) => isString(x) ? { code: x } : x),
		setCookieLocale: (locale) => {
			if (detectConfig.useCookie && isSupportedLocale(locale)) localeCookie.value = locale;
		},
		getBaseUrl: (locale) => {
			if (locale) return joinURL(getDomainFromLocale(locale) || baseUrl(), nuxt.$config.app.baseURL);
			return joinURL(baseUrl(), nuxt.$config.app.baseURL);
		},
		loadMessages: async (locale) => {
			if (nuxt.isHydrating && loadMap.has(locale)) return;
			try {
				return ctx.dynamicResourcesSSG || false ? await loadMessagesFromClient(locale) : await loadMessagesFromServer(locale);
			} catch (e) {
				console.warn(`Failed to load messages for locale "${locale}"`, e);
			} finally {
				loadMap.add(locale);
			}
		},
		composableCtx: void 0
	};
	ctx.composableCtx = createComposableContext(ctx, nuxt);
	return ctx;
}
function useNuxtI18nContext(nuxt) {
	if (nuxt._nuxtI18n == null) throw new Error("Nuxt I18n context has not been set up yet.");
	return nuxt._nuxtI18n;
}
function matchBrowserLocale(locales, browserLocales) {
	const matchedLocales = [];
	for (const [index, browserCode] of browserLocales.entries()) {
		const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
		if (matchedLocale) {
			matchedLocales.push({
				code: matchedLocale.code,
				score: 1 - index / browserLocales.length
			});
			break;
		}
	}
	for (const [index, browserCode] of browserLocales.entries()) {
		const languageCode = browserCode.split("-")[0].toLowerCase();
		const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
		if (matchedLocale) {
			matchedLocales.push({
				code: matchedLocale.code,
				score: .999 - index / browserLocales.length
			});
			break;
		}
	}
	return matchedLocales;
}
function compareBrowserLocale(a, b) {
	if (a.score === b.score) return b.code.length - a.code.length;
	return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
	return matchBrowserLocale(locales.map((l) => ({
		code: l.code,
		language: l.language || l.code
	})), browserLocales).sort(compareBrowserLocale).at(0)?.code ?? "";
}
var getCookieLocale = (event, cookieName) => getCookie(event, cookieName) || void 0;
var getRouteLocale = (event, route) => getLocaleFromRoute(route);
var getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
var getHostLocale = (event, path, domainLocales) => {
	const host = getRequestURL(event, { xForwardedHost: true }).host;
	return matchDomainLocale(normalizedLocales.map((l) => ({
		...l,
		domain: domainLocales[l.code]?.domain ?? l.domain
	})), host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
	if (!event) throw new Error("H3Event is required for server-side locale detection");
	const runtimeI18n = useRuntimeI18n(nuxtApp);
	return {
		cookie: () => getCookieLocale(event, config.cookieKey),
		header: () => getHeaderLocale(event),
		navigator: () => void 0,
		host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
		route: (path) => getRouteLocale(event, path)
	};
};
const isRouteLocationPathRaw = (val) => !!val.path && !val.name;
function useComposableContext(nuxtApp) {
	const context = nuxtApp?._nuxtI18n?.composableCtx;
	if (!context) throw new Error("i18n context is not initialized. Ensure the i18n plugin is installed and the composable is used within a Vue component or setup function.");
	return context;
}
var formatTrailingSlash = withoutTrailingSlash;
function createComposableContext(ctx, nuxtApp = useNuxtApp()) {
	const router = useRouter$1();
	useDetectors(useRequestEvent(), useI18nDetection(nuxtApp), nuxtApp);
	const defaultLocale = ctx.getDefaultLocale();
	const getLocalizedRouteName = createLocaleRouteNameGetter();
	function resolveLocalizedRouteByName(route, locale) {
		route.name = getRouteBaseName(route.name || router.currentRoute.value);
		const localizedName = getLocalizedRouteName(route.name, locale);
		if (router.hasRoute(localizedName)) route.name = localizedName;
		return route;
	}
	const routeByPathResolver = createLocalizedRouteByPathResolver();
	function resolveLocalizedRouteByPath(input, locale) {
		const route = routeByPathResolver(input, locale);
		const baseName = getRouteBaseName(route);
		if (baseName) {
			route.name = getLocalizedRouteName(baseName, locale);
			return route;
		}
		route.path = formatTrailingSlash(route.path, true);
		return route;
	}
	const composableCtx = {
		router,
		_head: void 0,
		get head() {
			this._head ??= useHead$1({});
			return this._head;
		},
		metaState: {
			htmlAttrs: {},
			meta: [],
			link: []
		},
		seoSettings: {
			dir: false,
			lang: false,
			seo: false
		},
		localePathPayload: getLocalePathPayload(),
		routingOptions: {
			defaultLocale,
			strictCanonicals: ctx.config.experimental.alternateLinkCanonicalQueries ?? true,
			hreflangLinks: false
		},
		getLocale: ctx.getLocale,
		getLocales: ctx.getLocales,
		getBaseUrl: ctx.getBaseUrl,
		getRouteBaseName,
		getRouteLocalizedParams: () => router.currentRoute.value.meta["nuxtI18nInternal"] ?? {},
		getLocalizedDynamicParams: (locale) => {
			return composableCtx.getRouteLocalizedParams()?.[locale];
		},
		afterSwitchLocalePath: (path, locale) => {
			composableCtx.getRouteLocalizedParams();
			return path;
		},
		resolveLocalizedRouteObject: (route, locale) => {
			return isRouteLocationPathRaw(route) ? resolveLocalizedRouteByPath(route, locale) : resolveLocalizedRouteByName(route, locale);
		}
	};
	return composableCtx;
}
function getLocalePathPayload(nuxtApp = useNuxtApp()) {
	return JSON.parse("{}");
}
async function loadAndSetLocale(nuxtApp, locale) {
	const ctx = useNuxtI18nContext(nuxtApp);
	const oldLocale = ctx.getLocale();
	if (locale === oldLocale && !ctx.initial) return locale;
	const data = {
		oldLocale,
		newLocale: locale,
		initialSetup: ctx.initial,
		context: nuxtApp
	};
	let override = await nuxtApp.callHook("i18n:beforeLocaleSwitch", data);
	override ??= data.newLocale;
	if (isSupportedLocale(override)) locale = override;
	await ctx.loadMessages(locale);
	await ctx.setLocaleSuspend(locale);
	return locale;
}
function skipDetect(detect, path, pathLocale) {
	return false;
}
function detectLocale(nuxtApp, route) {
	const detectConfig = useI18nDetection(nuxtApp);
	const detectors = useDetectors(useRequestEvent(nuxtApp), detectConfig, nuxtApp);
	const ctx = useNuxtI18nContext(nuxtApp);
	const path = isString(route) ? route : route.path;
	function* detect() {
		if (ctx.initial && detectConfig.enabled && !skipDetect(detectConfig, path, detectors.route(path))) {
			yield detectors.cookie();
			yield detectors.header();
			yield detectors.navigator();
			yield detectConfig.fallbackLocale;
		}
	}
	for (const detected of detect()) if (detected && isSupportedLocale(detected)) return detected;
	return ctx.getLocale() || ctx.getDefaultLocale() || "";
}
function navigate(nuxtApp, to, locale) {}
function createBaseUrlGetter(nuxt, baseUrl, defaultLocale, getDomainFromLocale) {
	if (isFunction(baseUrl)) return () => baseUrl(nuxt);
	return () => {
		return baseUrl ?? "";
	};
}
function createPosition(line, column, offset) {
	return {
		line,
		column,
		offset
	};
}
function createLocation(start, end, source) {
	const loc = {
		start,
		end
	};
	return loc;
}
var CompileErrorCodes = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14};
function createCompileError(code, loc, options = {}) {
	const { domain, messages, args } = options;
	const msg = code;
	const error = new SyntaxError(String(msg));
	error.code = code;
	if (loc) error.location = loc;
	error.domain = domain;
	return error;
}
function defaultOnError(error) {
	throw error;
}
var CHAR_SP = " ";
var CHAR_CR = "\r";
var CHAR_LF = "\n";
var CHAR_LS = String.fromCharCode(8232);
var CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
	const _buf = str;
	let _index = 0;
	let _line = 1;
	let _column = 1;
	let _peekOffset = 0;
	const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
	const isLF = (index) => _buf[index] === CHAR_LF;
	const isPS = (index) => _buf[index] === CHAR_PS;
	const isLS = (index) => _buf[index] === CHAR_LS;
	const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
	const index = () => _index;
	const line = () => _line;
	const column = () => _column;
	const peekOffset = () => _peekOffset;
	const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
	const currentChar = () => charAt(_index);
	const currentPeek = () => charAt(_index + _peekOffset);
	function next() {
		_peekOffset = 0;
		if (isLineEnd(_index)) {
			_line++;
			_column = 0;
		}
		if (isCRLF(_index)) _index++;
		_index++;
		_column++;
		return _buf[_index];
	}
	function peek() {
		if (isCRLF(_index + _peekOffset)) _peekOffset++;
		_peekOffset++;
		return _buf[_index + _peekOffset];
	}
	function reset() {
		_index = 0;
		_line = 1;
		_column = 1;
		_peekOffset = 0;
	}
	function resetPeek(offset = 0) {
		_peekOffset = offset;
	}
	function skipToPeek() {
		const target = _index + _peekOffset;
		while (target !== _index) next();
		_peekOffset = 0;
	}
	return {
		index,
		line,
		column,
		peekOffset,
		charAt,
		currentChar,
		currentPeek,
		next,
		peek,
		reset,
		resetPeek,
		skipToPeek
	};
}
var EOF = void 0;
var DOT = ".";
var LITERAL_DELIMITER = "'";
var ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
	const location = options.location !== false;
	const _scnr = createScanner(source);
	const currentOffset = () => _scnr.index();
	const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
	const _initLoc = currentPosition();
	const _initOffset = currentOffset();
	const _context = {
		currentType: 13,
		offset: _initOffset,
		startLoc: _initLoc,
		endLoc: _initLoc,
		lastType: 13,
		lastOffset: _initOffset,
		lastStartLoc: _initLoc,
		lastEndLoc: _initLoc,
		braceNest: 0,
		inLinked: false,
		text: ""
	};
	const context = () => _context;
	const { onError } = options;
	function emitError(code, pos, offset, ...args) {
		const ctx = context();
		pos.column += offset;
		pos.offset += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
			domain: ERROR_DOMAIN$3,
			args
		}));
	}
	function getToken(context, type, value) {
		context.endLoc = currentPosition();
		context.currentType = type;
		const token = { type };
		if (location) token.loc = createLocation(context.startLoc, context.endLoc);
		if (value != null) token.value = value;
		return token;
	}
	const getEndToken = (context) => getToken(context, 13);
	function eat(scnr, ch) {
		if (scnr.currentChar() === ch) {
			scnr.next();
			return ch;
		} else {
			emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
			return "";
		}
	}
	function peekSpaces(scnr) {
		let buf = "";
		while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
			buf += scnr.currentPeek();
			scnr.peek();
		}
		return buf;
	}
	function skipSpaces(scnr) {
		const buf = peekSpaces(scnr);
		scnr.skipToPeek();
		return buf;
	}
	function isIdentifierStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
	}
	function isNumberStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function isNamedIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isListIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isNumberStart(scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLiteralStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === LITERAL_DELIMITER;
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDotStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 7) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ".";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedModifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 8) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDelimiterStart(scnr, context) {
		const { currentType } = context;
		if (!(currentType === 7 || currentType === 11)) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ":";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedReferStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 9) return false;
		const fn = () => {
			const ch = scnr.currentPeek();
			if (ch === "{") return isIdentifierStart(scnr.peek());
			else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) return false;
			else if (ch === CHAR_LF) {
				scnr.peek();
				return fn();
			} else return isTextStart(scnr, false);
		};
		const ret = fn();
		scnr.resetPeek();
		return ret;
	}
	function isPluralStart(scnr) {
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === "|";
		scnr.resetPeek();
		return ret;
	}
	function isTextStart(scnr, reset = true) {
		const fn = (hasSpace = false, prev = "") => {
			const ch = scnr.currentPeek();
			if (ch === "{") return hasSpace;
			else if (ch === "@" || !ch) return hasSpace;
			else if (ch === "|") return !(prev === CHAR_SP || prev === CHAR_LF);
			else if (ch === CHAR_SP) {
				scnr.peek();
				return fn(true, CHAR_SP);
			} else if (ch === CHAR_LF) {
				scnr.peek();
				return fn(true, CHAR_LF);
			} else return true;
		};
		const ret = fn();
		reset && scnr.resetPeek();
		return ret;
	}
	function takeChar(scnr, fn) {
		const ch = scnr.currentChar();
		if (ch === EOF) return EOF;
		if (fn(ch)) {
			scnr.next();
			return ch;
		}
		return null;
	}
	function isIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
	}
	function takeIdentifierChar(scnr) {
		return takeChar(scnr, isIdentifier);
	}
	function isNamedIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36 || cc === 45;
	}
	function takeNamedIdentifierChar(scnr) {
		return takeChar(scnr, isNamedIdentifier);
	}
	function isDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function takeDigit(scnr) {
		return takeChar(scnr, isDigit);
	}
	function isHexDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
	}
	function takeHexDigit(scnr) {
		return takeChar(scnr, isHexDigit);
	}
	function getDigits(scnr) {
		let ch = "";
		let num = "";
		while (ch = takeDigit(scnr)) num += ch;
		return num;
	}
	function readText(scnr) {
		let buf = "";
		while (true) {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) break;
			else if (ch === CHAR_SP || ch === CHAR_LF) if (isTextStart(scnr)) {
				buf += ch;
				scnr.next();
			} else if (isPluralStart(scnr)) break;
			else {
				buf += ch;
				scnr.next();
			}
			else {
				buf += ch;
				scnr.next();
			}
		}
		return buf;
	}
	function readNamedIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let name = "";
		while (ch = takeNamedIdentifierChar(scnr)) name += ch;
		const currentChar = scnr.currentChar();
		if (currentChar && currentChar !== "}" && currentChar !== EOF && currentChar !== CHAR_SP && currentChar !== CHAR_LF && currentChar !== "　") {
			const invalidPart = readInvalidIdentifier(scnr);
			emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, name + invalidPart);
			return name + invalidPart;
		}
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return name;
	}
	function readListIdentifier(scnr) {
		skipSpaces(scnr);
		let value = "";
		if (scnr.currentChar() === "-") {
			scnr.next();
			value += `-${getDigits(scnr)}`;
		} else value += getDigits(scnr);
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return value;
	}
	function isLiteral(ch) {
		return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
	}
	function readLiteral(scnr) {
		skipSpaces(scnr);
		eat(scnr, `\'`);
		let ch = "";
		let literal = "";
		while (ch = takeChar(scnr, isLiteral)) if (ch === "\\") literal += readEscapeSequence(scnr);
		else literal += ch;
		const current = scnr.currentChar();
		if (current === CHAR_LF || current === EOF) {
			emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
			if (current === CHAR_LF) {
				scnr.next();
				eat(scnr, `\'`);
			}
			return literal;
		}
		eat(scnr, `\'`);
		return literal;
	}
	function readEscapeSequence(scnr) {
		const ch = scnr.currentChar();
		switch (ch) {
			case "\\":
			case `\'`:
				scnr.next();
				return `\\${ch}`;
			case "u": return readUnicodeEscapeSequence(scnr, ch, 4);
			case "U": return readUnicodeEscapeSequence(scnr, ch, 6);
			default:
				emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
				return "";
		}
	}
	function readUnicodeEscapeSequence(scnr, unicode, digits) {
		eat(scnr, unicode);
		let sequence = "";
		for (let i = 0; i < digits; i++) {
			const ch = takeHexDigit(scnr);
			if (!ch) {
				emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
				break;
			}
			sequence += ch;
		}
		return `\\${unicode}${sequence}`;
	}
	function isInvalidIdentifier(ch) {
		return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
	}
	function readInvalidIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let identifiers = "";
		while (ch = takeChar(scnr, isInvalidIdentifier)) identifiers += ch;
		return identifiers;
	}
	function readLinkedModifier(scnr) {
		let ch = "";
		let name = "";
		while (ch = takeIdentifierChar(scnr)) name += ch;
		return name;
	}
	function readLinkedRefer(scnr) {
		const fn = (buf) => {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) return buf;
			else if (ch === CHAR_SP) return buf;
			else if (ch === CHAR_LF || ch === DOT) {
				buf += ch;
				scnr.next();
				return fn(buf);
			} else {
				buf += ch;
				scnr.next();
				return fn(buf);
			}
		};
		return fn("");
	}
	function readPlural(scnr) {
		skipSpaces(scnr);
		const plural = eat(scnr, "|");
		skipSpaces(scnr);
		return plural;
	}
	function readTokenInPlaceholder(scnr, context) {
		let token = null;
		switch (scnr.currentChar()) {
			case "{":
				if (context.braceNest >= 1) emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 2, "{");
				skipSpaces(scnr);
				context.braceNest++;
				return token;
			case "}":
				if (context.braceNest > 0 && context.currentType === 2) emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 3, "}");
				context.braceNest--;
				context.braceNest > 0 && skipSpaces(scnr);
				if (context.inLinked && context.braceNest === 0) context.inLinked = false;
				return token;
			case "@":
				if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
				token = readTokenInLinked(scnr, context) || getEndToken(context);
				context.braceNest = 0;
				return token;
			default: {
				let validNamedIdentifier = true;
				let validListIdentifier = true;
				let validLiteral = true;
				if (isPluralStart(scnr)) {
					if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (context.braceNest > 0 && (context.currentType === 4 || context.currentType === 5 || context.currentType === 6)) {
					emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					context.braceNest = 0;
					return readToken(scnr, context);
				}
				if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
					token = getToken(context, 4, readNamedIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validListIdentifier = isListIdentifierStart(scnr, context)) {
					token = getToken(context, 5, readListIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validLiteral = isLiteralStart(scnr, context)) {
					token = getToken(context, 6, readLiteral(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
					token = getToken(context, 12, readInvalidIdentifier(scnr));
					emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
					skipSpaces(scnr);
					return token;
				}
				break;
			}
		}
		return token;
	}
	function readTokenInLinked(scnr, context) {
		const { currentType } = context;
		let token = null;
		const ch = scnr.currentChar();
		if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
		switch (ch) {
			case "@":
				scnr.next();
				token = getToken(context, 7, "@");
				context.inLinked = true;
				return token;
			case ".":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 8, ".");
			case ":":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 9, ":");
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
					skipSpaces(scnr);
					return readTokenInLinked(scnr, context);
				}
				if (isLinkedModifierStart(scnr, context)) {
					skipSpaces(scnr);
					return getToken(context, 11, readLinkedModifier(scnr));
				}
				if (isLinkedReferStart(scnr, context)) {
					skipSpaces(scnr);
					if (ch === "{") return readTokenInPlaceholder(scnr, context) || token;
					else return getToken(context, 10, readLinkedRefer(scnr));
				}
				if (currentType === 7) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
				context.braceNest = 0;
				context.inLinked = false;
				return readToken(scnr, context);
		}
	}
	function readToken(scnr, context) {
		let token = { type: 13 };
		if (context.braceNest > 0) return readTokenInPlaceholder(scnr, context) || getEndToken(context);
		if (context.inLinked) return readTokenInLinked(scnr, context) || getEndToken(context);
		switch (scnr.currentChar()) {
			case "{": return readTokenInPlaceholder(scnr, context) || getEndToken(context);
			case "}":
				emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
				scnr.next();
				return getToken(context, 3, "}");
			case "@": return readTokenInLinked(scnr, context) || getEndToken(context);
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isTextStart(scnr)) return getToken(context, 0, readText(scnr));
				break;
		}
		return token;
	}
	function nextToken() {
		const { currentType, offset, startLoc, endLoc } = _context;
		_context.lastType = currentType;
		_context.lastOffset = offset;
		_context.lastStartLoc = startLoc;
		_context.lastEndLoc = endLoc;
		_context.offset = currentOffset();
		_context.startLoc = currentPosition();
		if (_scnr.currentChar() === EOF) return getToken(_context, 13);
		return readToken(_scnr, _context);
	}
	return {
		nextToken,
		currentOffset,
		currentPosition,
		context
	};
}
var ERROR_DOMAIN$2 = "parser";
var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
	switch (match) {
		case `\\\\`: return `\\`;
		case `\\\'`: return `\'`;
		default: {
			const codePoint = parseInt(codePoint4 || codePoint6, 16);
			if (codePoint <= 55295 || codePoint >= 57344) return String.fromCodePoint(codePoint);
			return "�";
		}
	}
}
function createParser(options = {}) {
	const location = options.location !== false;
	const { onError } = options;
	function emitError(tokenzer, code, start, offset, ...args) {
		const end = tokenzer.currentPosition();
		end.offset += offset;
		end.column += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(start, end) : null, {
			domain: ERROR_DOMAIN$2,
			args
		}));
	}
	function startNode(type, offset, loc) {
		const node = { type };
		if (location) {
			node.start = offset;
			node.end = offset;
			node.loc = {
				start: loc,
				end: loc
			};
		}
		return node;
	}
	function endNode(node, offset, pos, type) {
		if (location) {
			node.end = offset;
			if (node.loc) node.loc.end = pos;
		}
	}
	function parseText(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(3, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseList(tokenizer, index) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(5, offset, loc);
		node.index = parseInt(index, 10);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseNamed(tokenizer, key) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(4, offset, loc);
		node.key = key;
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLiteral(tokenizer, value) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(9, offset, loc);
		node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinkedModifier(tokenizer) {
		const token = tokenizer.nextToken();
		const context = tokenizer.context();
		const { lastOffset: offset, lastStartLoc: loc } = context;
		const node = startNode(8, offset, loc);
		if (token.type !== 11) {
			emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
			node.value = "";
			endNode(node, offset, loc);
			return {
				nextConsumeToken: token,
				node
			};
		}
		if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		node.value = token.value || "";
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node };
	}
	function parseLinkedKey(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(7, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinked(tokenizer) {
		const context = tokenizer.context();
		const linkedNode = startNode(6, context.offset, context.startLoc);
		let token = tokenizer.nextToken();
		if (token.type === 8) {
			const parsed = parseLinkedModifier(tokenizer);
			linkedNode.modifier = parsed.node;
			token = parsed.nextConsumeToken || tokenizer.nextToken();
		}
		if (token.type !== 9) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		token = tokenizer.nextToken();
		if (token.type === 2) token = tokenizer.nextToken();
		switch (token.type) {
			case 10:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
				break;
			case 4:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseNamed(tokenizer, token.value || "");
				break;
			case 5:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseList(tokenizer, token.value || "");
				break;
			case 6:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLiteral(tokenizer, token.value || "");
				break;
			default: {
				emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
				const nextContext = tokenizer.context();
				const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
				emptyLinkedKeyNode.value = "";
				endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
				linkedNode.key = emptyLinkedKeyNode;
				endNode(linkedNode, nextContext.offset, nextContext.startLoc);
				return {
					nextConsumeToken: token,
					node: linkedNode
				};
			}
		}
		endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node: linkedNode };
	}
	function parseMessage(tokenizer) {
		const context = tokenizer.context();
		const node = startNode(2, context.currentType === 1 ? tokenizer.currentOffset() : context.offset, context.currentType === 1 ? context.endLoc : context.startLoc);
		node.items = [];
		let nextToken = null;
		do {
			const token = nextToken || tokenizer.nextToken();
			nextToken = null;
			switch (token.type) {
				case 0:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseText(tokenizer, token.value || ""));
					break;
				case 5:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseList(tokenizer, token.value || ""));
					break;
				case 4:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseNamed(tokenizer, token.value || ""));
					break;
				case 6:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseLiteral(tokenizer, token.value || ""));
					break;
				case 7: {
					const parsed = parseLinked(tokenizer);
					node.items.push(parsed.node);
					nextToken = parsed.nextConsumeToken || null;
					break;
				}
			}
		} while (context.currentType !== 13 && context.currentType !== 1);
		endNode(node, context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset(), context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition());
		return node;
	}
	function parsePlural(tokenizer, offset, loc, msgNode) {
		const context = tokenizer.context();
		let hasEmptyMessage = msgNode.items.length === 0;
		const node = startNode(1, offset, loc);
		node.cases = [];
		node.cases.push(msgNode);
		do {
			const msg = parseMessage(tokenizer);
			if (!hasEmptyMessage) hasEmptyMessage = msg.items.length === 0;
			node.cases.push(msg);
		} while (context.currentType !== 13);
		if (hasEmptyMessage) emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseResource(tokenizer) {
		const context = tokenizer.context();
		const { offset, startLoc } = context;
		const msgNode = parseMessage(tokenizer);
		if (context.currentType === 13) return msgNode;
		else return parsePlural(tokenizer, offset, startLoc, msgNode);
	}
	function parse(source) {
		const tokenizer = createTokenizer(source, assign({}, options));
		const context = tokenizer.context();
		const node = startNode(0, context.offset, context.startLoc);
		if (location && node.loc) node.loc.source = source;
		node.body = parseResource(tokenizer);
		if (options.onCacheKey) node.cacheKey = options.onCacheKey(source);
		if (context.currentType !== 13) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	return { parse };
}
function getTokenCaption(token) {
	if (token.type === 13) return "EOF";
	const name = (token.value || "").replace(/\r?\n/gu, "\\n");
	return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
	const _context = {
		ast,
		helpers: /* @__PURE__ */ new Set()
	};
	const context = () => _context;
	const helper = (name) => {
		_context.helpers.add(name);
		return name;
	};
	return {
		context,
		helper
	};
}
function traverseNodes(nodes, transformer) {
	for (let i = 0; i < nodes.length; i++) traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
	switch (node.type) {
		case 1:
			traverseNodes(node.cases, transformer);
			transformer.helper("plural");
			break;
		case 2:
			traverseNodes(node.items, transformer);
			break;
		case 6:
			traverseNode(node.key, transformer);
			transformer.helper("linked");
			transformer.helper("type");
			break;
		case 5:
			transformer.helper("interpolate");
			transformer.helper("list");
			break;
		case 4:
			transformer.helper("interpolate");
			transformer.helper("named");
			break;
	}
}
function transform(ast, options = {}) {
	const transformer = createTransformer(ast);
	transformer.helper("normalize");
	ast.body && traverseNode(ast.body, transformer);
	const context = transformer.context();
	ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
	const body = ast.body;
	if (body.type === 2) optimizeMessageNode(body);
	else body.cases.forEach((c) => optimizeMessageNode(c));
	return ast;
}
function optimizeMessageNode(message) {
	if (message.items.length === 1) {
		const item = message.items[0];
		if (item.type === 3 || item.type === 9) {
			message.static = item.value;
			delete item.value;
		}
	} else {
		const values = [];
		for (let i = 0; i < message.items.length; i++) {
			const item = message.items[i];
			if (!(item.type === 3 || item.type === 9)) break;
			if (item.value == null) break;
			values.push(item.value);
		}
		if (values.length === message.items.length) {
			message.static = join(values);
			for (let i = 0; i < message.items.length; i++) {
				const item = message.items[i];
				if (item.type === 3 || item.type === 9) delete item.value;
			}
		}
	}
}
function minify(node) {
	node.t = node.type;
	switch (node.type) {
		case 0: {
			const resource = node;
			minify(resource.body);
			resource.b = resource.body;
			delete resource.body;
			break;
		}
		case 1: {
			const plural = node;
			const cases = plural.cases;
			for (let i = 0; i < cases.length; i++) minify(cases[i]);
			plural.c = cases;
			delete plural.cases;
			break;
		}
		case 2: {
			const message = node;
			const items = message.items;
			for (let i = 0; i < items.length; i++) minify(items[i]);
			message.i = items;
			delete message.items;
			if (message.static) {
				message.s = message.static;
				delete message.static;
			}
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const valueNode = node;
			if (valueNode.value) {
				valueNode.v = valueNode.value;
				delete valueNode.value;
			}
			break;
		}
		case 6: {
			const linked = node;
			minify(linked.key);
			linked.k = linked.key;
			delete linked.key;
			if (linked.modifier) {
				minify(linked.modifier);
				linked.m = linked.modifier;
				delete linked.modifier;
			}
			break;
		}
		case 5: {
			const list = node;
			list.i = list.index;
			delete list.index;
			break;
		}
		case 4: {
			const named = node;
			named.k = named.key;
			delete named.key;
			break;
		}
	}
	delete node.type;
}
function createCodeGenerator(ast, options) {
	const { filename, breakLineCode, needIndent: _needIndent } = options;
	const location = options.location !== false;
	const _context = {
		filename,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode,
		needIndent: _needIndent,
		indentLevel: 0
	};
	if (location && ast.loc) _context.source = ast.loc.source;
	const context = () => _context;
	function push(code, node) {
		_context.code += code;
	}
	function _newline(n, withBreakLine = true) {
		const _breakLineCode = withBreakLine ? breakLineCode : "";
		push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
	}
	function indent(withNewLine = true) {
		const level = ++_context.indentLevel;
		withNewLine && _newline(level);
	}
	function deindent(withNewLine = true) {
		const level = --_context.indentLevel;
		withNewLine && _newline(level);
	}
	function newline() {
		_newline(_context.indentLevel);
	}
	const helper = (key) => `_${key}`;
	const needIndent = () => _context.needIndent;
	return {
		context,
		push,
		indent,
		deindent,
		newline,
		helper,
		needIndent
	};
}
function generateLinkedNode(generator, node) {
	const { helper } = generator;
	generator.push(`${helper("linked")}(`);
	generateNode(generator, node.key);
	if (node.modifier) {
		generator.push(`, `);
		generateNode(generator, node.modifier);
		generator.push(`, _type`);
	} else generator.push(`, undefined, _type`);
	generator.push(`)`);
}
function generateMessageNode(generator, node) {
	const { helper, needIndent } = generator;
	generator.push(`${helper("normalize")}([`);
	generator.indent(needIndent());
	const length = node.items.length;
	for (let i = 0; i < length; i++) {
		generateNode(generator, node.items[i]);
		if (i === length - 1) break;
		generator.push(", ");
	}
	generator.deindent(needIndent());
	generator.push("])");
}
function generatePluralNode(generator, node) {
	const { helper, needIndent } = generator;
	if (node.cases.length > 1) {
		generator.push(`${helper("plural")}([`);
		generator.indent(needIndent());
		const length = node.cases.length;
		for (let i = 0; i < length; i++) {
			generateNode(generator, node.cases[i]);
			if (i === length - 1) break;
			generator.push(", ");
		}
		generator.deindent(needIndent());
		generator.push(`])`);
	}
}
function generateResource(generator, node) {
	if (node.body) generateNode(generator, node.body);
	else generator.push("null");
}
function generateNode(generator, node) {
	const { helper } = generator;
	switch (node.type) {
		case 0:
			generateResource(generator, node);
			break;
		case 1:
			generatePluralNode(generator, node);
			break;
		case 2:
			generateMessageNode(generator, node);
			break;
		case 6:
			generateLinkedNode(generator, node);
			break;
		case 8:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 7:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 5:
			generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
			break;
		case 4:
			generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
			break;
		case 9:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 3:
			generator.push(JSON.stringify(node.value), node);
			break;
	}
}
var generate = (ast, options = {}) => {
	const mode = isString(options.mode) ? options.mode : "normal";
	const filename = isString(options.filename) ? options.filename : "message.intl";
	!!options.sourceMap;
	const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
	const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
	const helpers = ast.helpers || [];
	const generator = createCodeGenerator(ast, {
		filename,
		breakLineCode,
		needIndent
	});
	generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
	generator.indent(needIndent);
	if (helpers.length > 0) {
		generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
		generator.newline();
	}
	generator.push(`return `);
	generateNode(generator, ast);
	generator.deindent(needIndent);
	generator.push(`}`);
	delete ast.helpers;
	const { code, map } = generator.context();
	return {
		ast,
		code,
		map: map ? map.toJSON() : void 0
	};
};
function baseCompile$1(source, options = {}) {
	const assignedOptions = assign({}, options);
	const jit = !!assignedOptions.jit;
	const enalbeMinify = !!assignedOptions.minify;
	const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
	const ast = createParser(assignedOptions).parse(source);
	if (!jit) {
		transform(ast, assignedOptions);
		return generate(ast, assignedOptions);
	} else {
		enambeOptimize && optimize(ast);
		enalbeMinify && minify(ast);
		return {
			ast,
			code: ""
		};
	}
}
function isMessageAST(val) {
	return isObject$1(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
var PROPS_BODY = ["b", "body"];
function resolveBody(node) {
	return resolveProps(node, PROPS_BODY);
}
var PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
	return resolveProps(node, PROPS_CASES, []);
}
var PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
	return resolveProps(node, PROPS_STATIC);
}
var PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
	return resolveProps(node, PROPS_ITEMS, []);
}
var PROPS_TYPE = ["t", "type"];
function resolveType(node) {
	return resolveProps(node, PROPS_TYPE);
}
var PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
	const resolved = resolveProps(node, PROPS_VALUE);
	if (resolved != null) return resolved;
	else throw createUnhandleNodeError(type);
}
var PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
	return resolveProps(node, PROPS_MODIFIER);
}
var PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
	const resolved = resolveProps(node, PROPS_KEY);
	if (resolved) return resolved;
	else throw createUnhandleNodeError(6);
}
function resolveProps(node, props, defaultValue) {
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (hasOwn(node, prop) && node[prop] != null) return node[prop];
	}
	return defaultValue;
}
var AST_NODE_PROPS_KEYS = [
	...PROPS_BODY,
	...PROPS_CASES,
	...PROPS_STATIC,
	...PROPS_ITEMS,
	...PROPS_KEY,
	...PROPS_MODIFIER,
	...PROPS_VALUE,
	...PROPS_TYPE
];
function createUnhandleNodeError(type) {
	return /* @__PURE__ */ new Error(`unhandled node type: ${type}`);
}
function format(ast) {
	const msg = (ctx) => formatParts(ctx, ast);
	return msg;
}
function formatParts(ctx, ast) {
	const body = resolveBody(ast);
	if (body == null) throw createUnhandleNodeError(0);
	if (resolveType(body) === 1) {
		const cases = resolveCases(body);
		return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
	} else return formatMessageParts(ctx, body);
}
function formatMessageParts(ctx, node) {
	const static_ = resolveStatic(node);
	if (static_ != null) return ctx.type === "text" ? static_ : ctx.normalize([static_]);
	else {
		const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
		return ctx.normalize(messages);
	}
}
function formatMessagePart(ctx, node) {
	const type = resolveType(node);
	switch (type) {
		case 3: return resolveValue$1(node, type);
		case 9: return resolveValue$1(node, type);
		case 4: {
			const named = node;
			if (hasOwn(named, "k") && named.k) return ctx.interpolate(ctx.named(named.k));
			if (hasOwn(named, "key") && named.key) return ctx.interpolate(ctx.named(named.key));
			throw createUnhandleNodeError(type);
		}
		case 5: {
			const list = node;
			if (hasOwn(list, "i") && isNumber(list.i)) return ctx.interpolate(ctx.list(list.i));
			if (hasOwn(list, "index") && isNumber(list.index)) return ctx.interpolate(ctx.list(list.index));
			throw createUnhandleNodeError(type);
		}
		case 6: {
			const linked = node;
			const modifier = resolveLinkedModifier(linked);
			const key = resolveLinkedKey(linked);
			return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
		}
		case 7: return resolveValue$1(node, type);
		case 8: return resolveValue$1(node, type);
		default: throw new Error(`unhandled node on format message part: ${type}`);
	}
}
var defaultOnCacheKey = (message) => message;
var compileCache = create();
function baseCompile(message, options = {}) {
	let detectError = false;
	const onError = options.onError || defaultOnError;
	options.onError = (err) => {
		detectError = true;
		onError(err);
	};
	return {
		...baseCompile$1(message, options),
		detectError
	};
}
/* @__NO_SIDE_EFFECTS__ */
function compile(message, context) {
	if (isString(message)) {
		isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
		const cacheKey = (context.onCacheKey || defaultOnCacheKey)(message);
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		const { ast, detectError } = baseCompile(message, {
			...context,
			location: "production" !== "production",
			jit: true
		});
		const msg = format(ast);
		return !detectError ? compileCache[cacheKey] = msg : msg;
	} else {
		const cacheKey = message.cacheKey;
		if (cacheKey) {
			const cached = compileCache[cacheKey];
			if (cached) return cached;
			return compileCache[cacheKey] = format(message);
		} else return format(message);
	}
}
var CoreErrorCodes = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function createCoreError(code) {
	return createCompileError(code, null, void 0);
}
function getLocale(context, options) {
	return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
var _resolveLocale;
function resolveLocale(locale) {
	if (isString(locale)) return locale;
	else if (isFunction(locale)) if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
	else if (locale.constructor.name === "Function") {
		const resolve = locale();
		if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
		return _resolveLocale = resolve;
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
function fallbackWithSimple(ctx, fallback, start) {
	return [...new Set([start, ...isArray(fallback) ? fallback : isObject$1(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
	const startLocale = isString(start) ? start : DEFAULT_LOCALE;
	const context = ctx;
	if (!context.__localeChainCache) context.__localeChainCache = /* @__PURE__ */ new Map();
	let chain = context.__localeChainCache.get(startLocale);
	if (!chain) {
		chain = [];
		let block = [start];
		while (isArray(block)) block = appendBlockToChain(chain, block, fallback);
		const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
		block = isString(defaults) ? [defaults] : defaults;
		if (isArray(block)) appendBlockToChain(chain, block, false);
		context.__localeChainCache.set(startLocale, chain);
	}
	return chain;
}
function appendBlockToChain(chain, block, blocks) {
	let follow = true;
	for (let i = 0; i < block.length && isBoolean(follow); i++) {
		const locale = block[i];
		if (isString(locale)) follow = appendLocaleToChain(chain, block[i], blocks);
	}
	return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
	let follow;
	const tokens = locale.split("-");
	do {
		follow = appendItemToChain(chain, tokens.join("-"), blocks);
		tokens.splice(-1, 1);
	} while (tokens.length && follow === true);
	return follow;
}
function appendItemToChain(chain, target, blocks) {
	let follow = false;
	if (!chain.includes(target)) {
		follow = true;
		if (target) {
			follow = target[target.length - 1] !== "!";
			const locale = target.replace(/!/g, "");
			chain.push(locale);
			if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) follow = blocks[locale];
		}
	}
	return follow;
}
var pathStateMachine = [];
pathStateMachine[0] = {
	["w"]: [0],
	["i"]: [3, 0],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[1] = {
	["w"]: [1],
	["."]: [2],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[2] = {
	["w"]: [2],
	["i"]: [3, 0],
	["0"]: [3, 0]
};
pathStateMachine[3] = {
	["i"]: [3, 0],
	["0"]: [3, 0],
	["w"]: [1, 1],
	["."]: [2, 1],
	["["]: [4, 1],
	["o"]: [7, 1]
};
pathStateMachine[4] = {
	["'"]: [5, 0],
	["\""]: [6, 0],
	["["]: [4, 2],
	["]"]: [1, 3],
	["o"]: 8,
	["l"]: [4, 0]
};
pathStateMachine[5] = {
	["'"]: [4, 0],
	["o"]: 8,
	["l"]: [5, 0]
};
pathStateMachine[6] = {
	["\""]: [4, 0],
	["o"]: 8,
	["l"]: [6, 0]
};
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
	return literalValueRE.test(exp);
}
function stripQuotes(str) {
	const a = str.charCodeAt(0);
	return a === str.charCodeAt(str.length - 1) && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
	if (ch === void 0 || ch === null) return "o";
	switch (ch.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return ch;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function formatSubPath(path) {
	const trimmed = path.trim();
	if (path.charAt(0) === "0" && isNaN(parseInt(path))) return false;
	return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse$2(path) {
	const keys = [];
	let index = -1;
	let mode = 0;
	let subPathDepth = 0;
	let c;
	let key;
	let newChar;
	let type;
	let transition;
	let action;
	let typeMap;
	const actions = [];
	actions[0] = () => {
		if (key === void 0) key = newChar;
		else key += newChar;
	};
	actions[1] = () => {
		if (key !== void 0) {
			keys.push(key);
			key = void 0;
		}
	};
	actions[2] = () => {
		actions[0]();
		subPathDepth++;
	};
	actions[3] = () => {
		if (subPathDepth > 0) {
			subPathDepth--;
			mode = 4;
			actions[0]();
		} else {
			subPathDepth = 0;
			if (key === void 0) return false;
			key = formatSubPath(key);
			if (key === false) return false;
			else actions[1]();
		}
	};
	function maybeUnescapeQuote() {
		const nextChar = path[index + 1];
		if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === "\"") {
			index++;
			newChar = "\\" + nextChar;
			actions[0]();
			return true;
		}
	}
	while (mode !== null) {
		index++;
		c = path[index];
		if (c === "\\" && maybeUnescapeQuote()) continue;
		type = getPathCharType(c);
		typeMap = pathStateMachine[mode];
		transition = typeMap[type] || typeMap["l"] || 8;
		if (transition === 8) return;
		mode = transition[0];
		if (transition[1] !== void 0) {
			action = actions[transition[1]];
			if (action) {
				newChar = c;
				if (action() === false) return;
			}
		}
		if (mode === 7) return keys;
	}
}
var cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
	return isObject$1(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
	if (!isObject$1(obj)) return null;
	let hit = cache.get(path);
	if (!hit) {
		hit = parse$2(path);
		if (hit) cache.set(path, hit);
	}
	if (!hit) return null;
	const len = hit.length;
	let last = obj;
	let i = 0;
	while (i < len) {
		const key = hit[i];
		if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) return null;
		const val = last[key];
		if (val === void 0) return null;
		if (isFunction(last)) return null;
		last = val;
		i++;
	}
	return last;
}
var VERSION$1 = "11.2.8";
var DEFAULT_LOCALE = "en-US";
var capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
	return {
		upper: (val, type) => {
			return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
		},
		lower: (val, type) => {
			return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
		},
		capitalize: (val, type) => {
			return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
		}
	};
}
var _compiler;
function registerMessageCompiler(compiler) {
	_compiler = compiler;
}
var _resolver;
function registerMessageResolver(resolver) {
	_resolver = resolver;
}
var _fallbacker;
function registerLocaleFallbacker(fallbacker) {
	_fallbacker = fallbacker;
}
var _fallbackContext = null;
var setFallbackContext = (context) => {
	_fallbackContext = context;
};
var getFallbackContext = () => _fallbackContext;
var _cid = 0;
function createCoreContext(options = {}) {
	const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
	const version = isString(options.version) ? options.version : VERSION$1;
	const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
	const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
	const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
	const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
	const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
	const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
	const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
	const pluralRules = options.pluralRules || create();
	const missing = isFunction(options.missing) ? options.missing : null;
	const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	const fallbackFormat = !!options.fallbackFormat;
	const unresolving = !!options.unresolving;
	const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	const processor = isPlainObject(options.processor) ? options.processor : null;
	const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	const escapeParameter = !!options.escapeParameter;
	const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
	const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
	const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
	const fallbackContext = isObject$1(options.fallbackContext) ? options.fallbackContext : void 0;
	const internalOptions = options;
	const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
	const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
	const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
	_cid++;
	const context = {
		version,
		cid: _cid,
		locale,
		fallbackLocale,
		messages,
		modifiers,
		pluralRules,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackFormat,
		unresolving,
		postTranslation,
		processor,
		warnHtmlMessage,
		escapeParameter,
		messageCompiler,
		messageResolver,
		localeFallbacker,
		fallbackContext,
		onWarn,
		__meta
	};
	context.datetimeFormats = datetimeFormats;
	context.numberFormats = numberFormats;
	context.__datetimeFormatters = __datetimeFormatters;
	context.__numberFormatters = __numberFormatters;
	return context;
}
var createResources = (locale) => ({ [locale]: create() });
function handleMissing(context, key, locale, missingWarn, type) {
	const { missing, onWarn } = context;
	if (missing !== null) {
		const ret = missing(context, locale, key, type);
		return isString(ret) ? ret : key;
	} else {
		return key;
	}
}
function updateFallbackLocale(ctx, locale, fallback) {
	const context = ctx;
	context.__localeChainCache = /* @__PURE__ */ new Map();
	ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
	if (locale === compareLocale) return false;
	return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
	const index = locales.indexOf(targetLocale);
	if (index === -1) return false;
	for (let i = index + 1; i < locales.length; i++) if (isAlmostSameLocale(targetLocale, locales[i])) return true;
	return false;
}
function datetime(context, ...args) {
	const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __datetimeFormatters } = context;
	const [key, value, options, overrides] = parseDateTimeArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.DateTimeFormat(locale, overrides).format(value);
	let datetimeFormat = {};
	let targetLocale;
	let format = null;
	const type = "datetime format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		datetimeFormat = datetimeFormats[targetLocale] || {};
		format = datetimeFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __datetimeFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
		__datetimeFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var DATETIME_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	let value;
	if (isString(arg1)) {
		const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!matches) throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
		value = new Date(dateTime);
		try {
			value.toISOString();
		} catch {
			throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (isDate(arg1)) {
		if (isNaN(arg1.getTime())) throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
		value = arg1;
	} else if (isNumber(arg1)) value = arg1;
	else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearDateTimeFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__datetimeFormatters.has(id)) continue;
		context.__datetimeFormatters.delete(id);
	}
}
function number(context, ...args) {
	const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __numberFormatters } = context;
	const [key, value, options, overrides] = parseNumberArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.NumberFormat(locale, overrides).format(value);
	let numberFormat = {};
	let targetLocale;
	let format = null;
	const type = "number format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		numberFormat = numberFormats[targetLocale] || {};
		format = numberFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __numberFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
		__numberFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var NUMBER_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function parseNumberArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	if (!isNumber(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const value = arg1;
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearNumberFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__numberFormatters.has(id)) continue;
		context.__numberFormatters.delete(id);
	}
}
var DEFAULT_MODIFIER = (str) => str;
var DEFAULT_MESSAGE = (ctx) => "";
var DEFAULT_MESSAGE_DATA_TYPE = "text";
var DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
var DEFAULT_INTERPOLATE = toDisplayString$1;
function pluralDefault(choice, choicesLength) {
	choice = Math.abs(choice);
	if (choicesLength === 2) return choice ? choice > 1 ? 1 : 0 : 1;
	return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
	const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
	return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
	if (!props.count) props.count = pluralIndex;
	if (!props.n) props.n = pluralIndex;
}
function createMessageContext(options = {}) {
	const locale = options.locale;
	const pluralIndex = getPluralIndex(options);
	const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
	const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
	const plural = (messages) => {
		return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
	};
	const _list = options.list || [];
	const list = (index) => _list[index];
	const _named = options.named || create();
	isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
	const named = (key) => _named[key];
	function message(key, useLinked) {
		const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject$1(options.messages) ? options.messages[key] : false;
		return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
	}
	const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
	const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
	const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
	const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
	const linked = (key, ...args) => {
		const [arg1, arg2] = args;
		let type = "text";
		let modifier = "";
		if (args.length === 1) {
			if (isObject$1(arg1)) {
				modifier = arg1.modifier || modifier;
				type = arg1.type || type;
			} else if (isString(arg1)) modifier = arg1 || modifier;
		} else if (args.length === 2) {
			if (isString(arg1)) modifier = arg1 || modifier;
			if (isString(arg2)) type = arg2 || type;
		}
		const ret = message(key, true)(ctx);
		const msg = type === "vnode" && isArray(ret) && modifier ? ret[0] : ret;
		return modifier ? _modifier(modifier)(msg, type) : msg;
	};
	const ctx = {
		["list"]: list,
		["named"]: named,
		["plural"]: plural,
		["linked"]: linked,
		["message"]: message,
		["type"]: type,
		["interpolate"]: interpolate,
		["normalize"]: normalize,
		["values"]: assign(create(), _list, _named)
	};
	return ctx;
}
var NOOP_MESSAGE_FUNCTION = () => "";
var isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
	const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
	const [key, options] = parseTranslateArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
	const resolvedMessage = !!options.resolvedMessage;
	const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
	const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
	const locale = getLocale(context, options);
	escapeParameter && escapeParams(options);
	let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
		key,
		locale,
		messages[locale] || create()
	];
	let format = formatScope;
	let cacheBaseKey = key;
	if (!resolvedMessage && !(isString(format) || isMessageAST(format) || isMessageFunction(format))) {
		if (enableDefaultMsg) {
			format = defaultMsgOrKey;
			cacheBaseKey = format;
		}
	}
	if (!resolvedMessage && (!(isString(format) || isMessageAST(format) || isMessageFunction(format)) || !isString(targetLocale))) return unresolving ? -1 : key;
	let occurred = false;
	const onError = () => {
		occurred = true;
	};
	const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) : format;
	if (occurred) return format;
	const messaged = evaluateMessage(context, msg, createMessageContext(getMessageContextOptions(context, targetLocale, message, options)));
	let ret = postTranslation ? postTranslation(messaged, key) : messaged;
	if (escapeParameter && isString(ret)) ret = sanitizeTranslatedHtml(ret);
	return ret;
}
function escapeParams(options) {
	if (isArray(options.list)) options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
	else if (isObject$1(options.named)) Object.keys(options.named).forEach((key) => {
		if (isString(options.named[key])) options.named[key] = escapeHtml(options.named[key]);
	});
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
	const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
	const locales = localeFallbacker(context, fallbackLocale, locale);
	let message = create();
	let targetLocale;
	let format = null;
	const type = "translate";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		message = messages[targetLocale] || create();
		if ((format = resolveValue(message, key)) === null) format = message[key];
		if (isString(format) || isMessageAST(format) || isMessageFunction(format)) break;
		if (!isImplicitFallback(targetLocale, locales)) {
			const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
			if (missingRet !== key) format = missingRet;
		}
	}
	return [
		format,
		targetLocale,
		message
	];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
	const { messageCompiler, warnHtmlMessage } = context;
	if (isMessageFunction(format)) {
		const msg = format;
		msg.locale = msg.locale || targetLocale;
		msg.key = msg.key || key;
		return msg;
	}
	if (messageCompiler == null) {
		const msg = (() => format);
		msg.locale = targetLocale;
		msg.key = key;
		return msg;
	}
	const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
	msg.locale = targetLocale;
	msg.key = key;
	msg.source = format;
	return msg;
}
function evaluateMessage(context, msg, msgCtx) {
	const messaged = msg(msgCtx);
	return messaged;
}
function parseTranslateArgs(...args) {
	const [arg1, arg2, arg3] = args;
	const options = create();
	if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
	if (isNumber(arg2)) options.plural = arg2;
	else if (isString(arg2)) options.default = arg2;
	else if (isPlainObject(arg2) && !isEmptyObject(arg2)) options.named = arg2;
	else if (isArray(arg2)) options.list = arg2;
	if (isNumber(arg3)) options.plural = arg3;
	else if (isString(arg3)) options.default = arg3;
	else if (isPlainObject(arg3)) assign(options, arg3);
	return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
	return {
		locale,
		key,
		warnHtmlMessage,
		onError: (err) => {
			onError && onError(err);
			throw err;
		},
		onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
	};
}
function getMessageContextOptions(context, locale, message, options) {
	const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
	const resolveMessage = (key, useLinked) => {
		let val = resolveValue(message, key);
		if (val == null && (fallbackContext || useLinked)) {
			const [, , message] = resolveMessageFormat(fallbackContext || context, key, locale, fallbackLocale, fallbackWarn, missingWarn);
			val = resolveValue(message, key);
		}
		if (isString(val) || isMessageAST(val)) {
			let occurred = false;
			const onError = () => {
				occurred = true;
			};
			const msg = compileMessageFormat(context, key, locale, val, key, onError);
			return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
		} else if (isMessageFunction(val)) return val;
		else return NOOP_MESSAGE_FUNCTION;
	};
	const ctxOptions = {
		locale,
		modifiers,
		pluralRules,
		messages: resolveMessage
	};
	if (context.processor) ctxOptions.processor = context.processor;
	if (options.list) ctxOptions.list = options.list;
	if (options.named) ctxOptions.named = options.named;
	if (isNumber(options.plural)) ctxOptions.pluralIndex = options.plural;
	return ctxOptions;
}
var VERSION = "11.2.8";
var I18nErrorCodes = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32};
function createI18nError(code, ...args) {
	return createCompileError(code, null, void 0);
}
var TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
var DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
var NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
var SetPluralRulesSymbol = makeSymbol("__setPluralRules");
var InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
var DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
	if (!isObject$1(obj)) return obj;
	if (isMessageAST(obj)) return obj;
	for (const key in obj) {
		if (!hasOwn(obj, key)) continue;
		if (!key.includes(".")) {
			if (isObject$1(obj[key])) handleFlatJson(obj[key]);
		} else {
			const subKeys = key.split(".");
			const lastIndex = subKeys.length - 1;
			let currentObj = obj;
			let hasStringValue = false;
			for (let i = 0; i < lastIndex; i++) {
				if (subKeys[i] === "__proto__") throw new Error(`unsafe key: ${subKeys[i]}`);
				if (!(subKeys[i] in currentObj)) currentObj[subKeys[i]] = create();
				if (!isObject$1(currentObj[subKeys[i]])) {
					hasStringValue = true;
					break;
				}
				currentObj = currentObj[subKeys[i]];
			}
			if (!hasStringValue) {
				if (!isMessageAST(currentObj)) {
					currentObj[subKeys[lastIndex]] = obj[key];
					delete obj[key];
				} else if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) delete obj[key];
			}
			if (!isMessageAST(currentObj)) {
				const target = currentObj[subKeys[lastIndex]];
				if (isObject$1(target)) handleFlatJson(target);
			}
		}
	}
	return obj;
}
function getLocaleMessages(locale, options) {
	const { messages, __i18n, messageResolver, flatJson } = options;
	const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
	if (isArray(__i18n)) __i18n.forEach((custom) => {
		if ("locale" in custom && "resource" in custom) {
			const { locale, resource } = custom;
			if (locale) {
				ret[locale] = ret[locale] || create();
				deepCopy(resource, ret[locale]);
			} else deepCopy(resource, ret);
		} else isString(custom) && deepCopy(JSON.parse(custom), ret);
	});
	if (messageResolver == null && flatJson) {
		for (const key in ret) if (hasOwn(ret, key)) handleFlatJson(ret[key]);
	}
	return ret;
}
function getComponentOptions(instance) {
	return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
	let messages = isObject$1(options.messages) ? options.messages : create();
	if ("__i18nGlobal" in componentOptions) messages = getLocaleMessages(gl.locale.value, {
		messages,
		__i18n: componentOptions.__i18nGlobal
	});
	const locales = Object.keys(messages);
	if (locales.length) locales.forEach((locale) => {
		gl.mergeLocaleMessage(locale, messages[locale]);
	});
	if (isObject$1(options.datetimeFormats)) {
		const locales = Object.keys(options.datetimeFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
		});
	}
	if (isObject$1(options.numberFormats)) {
		const locales = Object.keys(options.numberFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeNumberFormat(locale, options.numberFormats[locale]);
		});
	}
}
function createTextNode(key) {
	return createVNode(Text, null, key, 0);
}
function getCurrentInstance$1() {
	const key = "currentInstance";
	if (key in Vue) return Vue[key];
	else return Vue.getCurrentInstance();
}
var NOOP_RETURN_ARRAY = () => [];
var NOOP_RETURN_FALSE = () => false;
var composerID = 0;
function defineCoreMissingHandler(missing) {
	return ((ctx, locale, key, type) => {
		return missing(locale, key, getCurrentInstance$1() || void 0, type);
	});
}
function createComposer(options = {}) {
	const { __root, __injectWithOption } = options;
	const _isGlobal = __root === void 0;
	const flatJson = options.flatJson;
	const _ref = shallowRef;
	let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
	const _locale = _ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
	const _fallbackLocale = _ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
	const _messages = _ref(getLocaleMessages(_locale.value, options));
	const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
	const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
	let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	let _fallbackFormat = !!options.fallbackFormat;
	let _missing = isFunction(options.missing) ? options.missing : null;
	let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
	let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	let _escapeParameter = !!options.escapeParameter;
	const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
	let _pluralRules = options.pluralRules || __root && __root.pluralRules;
	let _context;
	const getCoreContext = () => {
		_isGlobal && setFallbackContext(null);
		const ctxOptions = {
			version: VERSION,
			locale: _locale.value,
			fallbackLocale: _fallbackLocale.value,
			messages: _messages.value,
			modifiers: _modifiers,
			pluralRules: _pluralRules,
			missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
			missingWarn: _missingWarn,
			fallbackWarn: _fallbackWarn,
			fallbackFormat: _fallbackFormat,
			unresolving: true,
			postTranslation: _postTranslation === null ? void 0 : _postTranslation,
			warnHtmlMessage: _warnHtmlMessage,
			escapeParameter: _escapeParameter,
			messageResolver: options.messageResolver,
			messageCompiler: options.messageCompiler,
			__meta: { framework: "vue" }
		};
		ctxOptions.datetimeFormats = _datetimeFormats.value;
		ctxOptions.numberFormats = _numberFormats.value;
		ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
		ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
		const ctx = createCoreContext(ctxOptions);
		_isGlobal && setFallbackContext(ctx);
		return ctx;
	};
	_context = getCoreContext();
	updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
	function trackReactivityValues() {
		return [
			_locale.value,
			_fallbackLocale.value,
			_messages.value,
			_datetimeFormats.value,
			_numberFormats.value
		];
	}
	const locale = computed({
		get: () => _locale.value,
		set: (val) => {
			_context.locale = val;
			_locale.value = val;
		}
	});
	const fallbackLocale = computed({
		get: () => _fallbackLocale.value,
		set: (val) => {
			_context.fallbackLocale = val;
			_fallbackLocale.value = val;
			updateFallbackLocale(_context, _locale.value, val);
		}
	});
	const messages = computed(() => _messages.value);
	const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
	const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
	function getPostTranslationHandler() {
		return isFunction(_postTranslation) ? _postTranslation : null;
	}
	function setPostTranslationHandler(handler) {
		_postTranslation = handler;
		_context.postTranslation = handler;
	}
	function getMissingHandler() {
		return _missing;
	}
	function setMissingHandler(handler) {
		if (handler !== null) _runtimeMissing = defineCoreMissingHandler(handler);
		_missing = handler;
		_context.missing = _runtimeMissing;
	}
	const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
		trackReactivityValues();
		let ret;
		try {
			if ("production" !== "production" || false);
			if (!_isGlobal) _context.fallbackContext = __root ? getFallbackContext() : void 0;
			ret = fn(_context);
		} finally {
			if (!_isGlobal) _context.fallbackContext = void 0;
		}
		if (warnType !== "translate exists" && isNumber(ret) && ret === -1 || warnType === "translate exists" && !ret) {
			const [key, arg2] = argumentParser();
			return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
		} else if (successCondition(ret)) return ret;
		else
 /* istanbul ignore next */
		throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
	};
	function t(...args) {
		return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
	}
	function rt(...args) {
		const [arg1, arg2, arg3] = args;
		if (arg3 && !isObject$1(arg3)) throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
		return t(...[
			arg1,
			arg2,
			assign({ resolvedMessage: true }, arg3 || {})
		]);
	}
	function d(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function n(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function normalize(values) {
		return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
	}
	const interpolate = (val) => val;
	const processor = {
		normalize,
		interpolate,
		type: "vnode"
	};
	function translateVNode(...args) {
		return wrapWithDeps((context) => {
			let ret;
			const _context = context;
			try {
				_context.processor = processor;
				ret = Reflect.apply(translate, null, [_context, ...args]);
			} finally {
				_context.processor = null;
			}
			return ret;
		}, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
	}
	function numberParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function datetimeParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function setPluralRules(rules) {
		_pluralRules = rules;
		_context.pluralRules = _pluralRules;
	}
	function te(key, locale) {
		return wrapWithDeps(() => {
			if (!key) return false;
			const message = getLocaleMessage(isString(locale) ? locale : _locale.value);
			const resolved = _context.messageResolver(message, key);
			return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
		}, () => [key], "translate exists", (root) => {
			return Reflect.apply(root.te, root, [key, locale]);
		}, NOOP_RETURN_FALSE, (val) => isBoolean(val));
	}
	function resolveMessages(key) {
		let messages = null;
		const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
		for (let i = 0; i < locales.length; i++) {
			const targetLocaleMessages = _messages.value[locales[i]] || {};
			const messageValue = _context.messageResolver(targetLocaleMessages, key);
			if (messageValue != null) {
				messages = messageValue;
				break;
			}
		}
		return messages;
	}
	function tm(key) {
		const messages = resolveMessages(key);
		return messages != null ? messages : __root ? __root.tm(key) || {} : {};
	}
	function getLocaleMessage(locale) {
		return _messages.value[locale] || {};
	}
	function setLocaleMessage(locale, message) {
		if (flatJson) {
			const _message = { [locale]: message };
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
			message = _message[locale];
		}
		_messages.value[locale] = message;
		_context.messages = _messages.value;
	}
	function mergeLocaleMessage(locale, message) {
		_messages.value[locale] = _messages.value[locale] || {};
		const _message = { [locale]: message };
		if (flatJson) {
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
		}
		message = _message[locale];
		deepCopy(message, _messages.value[locale]);
		_context.messages = _messages.value;
	}
	function getDateTimeFormat(locale) {
		return _datetimeFormats.value[locale] || {};
	}
	function setDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = format;
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function mergeDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = assign(_datetimeFormats.value[locale] || {}, format);
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function getNumberFormat(locale) {
		return _numberFormats.value[locale] || {};
	}
	function setNumberFormat(locale, format) {
		_numberFormats.value[locale] = format;
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	function mergeNumberFormat(locale, format) {
		_numberFormats.value[locale] = assign(_numberFormats.value[locale] || {}, format);
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	composerID++;
	const composer = {
		id: composerID,
		locale,
		fallbackLocale,
		get inheritLocale() {
			return _inheritLocale;
		},
		set inheritLocale(val) {
			_inheritLocale = val;
			if (val && __root) {
				_locale.value = __root.locale.value;
				_fallbackLocale.value = __root.fallbackLocale.value;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		},
		get availableLocales() {
			return Object.keys(_messages.value).sort();
		},
		messages,
		get modifiers() {
			return _modifiers;
		},
		get pluralRules() {
			return _pluralRules || {};
		},
		get isGlobal() {
			return _isGlobal;
		},
		get missingWarn() {
			return _missingWarn;
		},
		set missingWarn(val) {
			_missingWarn = val;
			_context.missingWarn = _missingWarn;
		},
		get fallbackWarn() {
			return _fallbackWarn;
		},
		set fallbackWarn(val) {
			_fallbackWarn = val;
			_context.fallbackWarn = _fallbackWarn;
		},
		get fallbackRoot() {
			return _fallbackRoot;
		},
		set fallbackRoot(val) {
			_fallbackRoot = val;
		},
		get fallbackFormat() {
			return _fallbackFormat;
		},
		set fallbackFormat(val) {
			_fallbackFormat = val;
			_context.fallbackFormat = _fallbackFormat;
		},
		get warnHtmlMessage() {
			return _warnHtmlMessage;
		},
		set warnHtmlMessage(val) {
			_warnHtmlMessage = val;
			_context.warnHtmlMessage = val;
		},
		get escapeParameter() {
			return _escapeParameter;
		},
		set escapeParameter(val) {
			_escapeParameter = val;
			_context.escapeParameter = val;
		},
		t,
		getLocaleMessage,
		setLocaleMessage,
		mergeLocaleMessage,
		getPostTranslationHandler,
		setPostTranslationHandler,
		getMissingHandler,
		setMissingHandler,
		[SetPluralRulesSymbol]: setPluralRules
	};
	composer.datetimeFormats = datetimeFormats;
	composer.numberFormats = numberFormats;
	composer.rt = rt;
	composer.te = te;
	composer.tm = tm;
	composer.d = d;
	composer.n = n;
	composer.getDateTimeFormat = getDateTimeFormat;
	composer.setDateTimeFormat = setDateTimeFormat;
	composer.mergeDateTimeFormat = mergeDateTimeFormat;
	composer.getNumberFormat = getNumberFormat;
	composer.setNumberFormat = setNumberFormat;
	composer.mergeNumberFormat = mergeNumberFormat;
	composer[InejctWithOptionSymbol] = __injectWithOption;
	composer[TranslateVNodeSymbol] = translateVNode;
	composer[DatetimePartsSymbol] = datetimeParts;
	composer[NumberPartsSymbol] = numberParts;
	return composer;
}
var baseFormatProps = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (val) => val === "parent" || val === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function getInterpolateArg({ slots }, keys) {
	if (keys.length === 1 && keys[0] === "default") return (slots.default ? slots.default() : []).reduce((slot, current) => {
		return [...slot, ...current.type === Fragment ? current.children : [current]];
	}, []);
	else return keys.reduce((arg, key) => {
		const slot = slots[key];
		if (slot) arg[key] = slot();
		return arg;
	}, create());
}
function getFragmentableTag() {
	return Fragment;
}
var Translation = /* @__PURE__ */ defineComponent({
	name: "i18n-t",
	props: assign({
		keypath: {
			type: String,
			required: true
		},
		plural: {
			type: [Number, String],
			validator: (val) => isNumber(val) || !isNaN(val)
		}
	}, baseFormatProps),
	setup(props, context) {
		const { slots, attrs } = context;
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return () => {
			const keys = Object.keys(slots).filter((key) => key[0] !== "_");
			const options = create();
			if (props.locale) options.locale = props.locale;
			if (props.plural !== void 0) options.plural = isString(props.plural) ? +props.plural : props.plural;
			const arg = getInterpolateArg(context, keys);
			const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
			const assignedAttrs = assign(create(), attrs);
			return h(isString(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
		};
	}
});
function isVNode(target) {
	return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
	const { slots, attrs } = context;
	return () => {
		const options = { part: true };
		let overrides = create();
		if (props.locale) options.locale = props.locale;
		if (isString(props.format)) options.key = props.format;
		else if (isObject$1(props.format)) {
			if (isString(props.format.key)) options.key = props.format.key;
			overrides = Object.keys(props.format).reduce((options, prop) => {
				return slotKeys.includes(prop) ? assign(create(), options, { [prop]: props.format[prop] }) : options;
			}, create());
		}
		const parts = partFormatter(...[
			props.value,
			options,
			overrides
		]);
		let children = [options.key];
		if (isArray(parts)) children = parts.map((part, index) => {
			const slot = slots[part.type];
			const node = slot ? slot({
				[part.type]: part.value,
				index,
				parts
			}) : [part.value];
			if (isVNode(node)) node[0].key = `${part.type}-${index}`;
			return node;
		});
		else if (isString(parts)) children = [parts];
		const assignedAttrs = assign(create(), attrs);
		return h(isString(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
	};
}
var NumberFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-n",
	props: assign({
		value: {
			type: Number,
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
	}
});
function getComposer$1(i18n, instance) {
	const i18nInternal = i18n;
	if (i18n.mode === "composition") return i18nInternal.__getInstance(instance) || i18n.global;
	else {
		const vueI18n = i18nInternal.__getInstance(instance);
		return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
	}
}
function vTDirective(i18n) {
	const _process = (binding) => {
		const { instance, value } = binding;
		/* istanbul ignore if */
		if (!instance || !instance.$) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const composer = getComposer$1(i18n, instance.$);
		const parsedValue = parseValue(value);
		return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
	};
	const register = (el, binding) => {
		const [textContent, composer] = _process(binding);
		el.__composer = composer;
		el.textContent = textContent;
	};
	const unregister = (el) => {
		if (el.__composer) {
			el.__composer = void 0;
			delete el.__composer;
		}
	};
	const update = (el, { value }) => {
		if (el.__composer) {
			const composer = el.__composer;
			const parsedValue = parseValue(value);
			el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
		}
	};
	const getSSRProps = (binding) => {
		const [textContent] = _process(binding);
		return { textContent };
	};
	return {
		created: register,
		unmounted: unregister,
		beforeUpdate: update,
		getSSRProps
	};
}
function parseValue(value) {
	if (isString(value)) return { path: value };
	else if (isPlainObject(value)) {
		if (!("path" in value)) throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
		return value;
	} else throw createI18nError(I18nErrorCodes.INVALID_VALUE);
}
function makeParams(value) {
	const { path, locale, args, choice, plural } = value;
	const options = {};
	const named = args || {};
	if (isString(locale)) options.locale = locale;
	if (isNumber(choice)) options.plural = choice;
	if (isNumber(plural)) options.plural = plural;
	return [
		path,
		named,
		options
	];
}
function apply(app, i18n, ...options) {
	const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
	if (isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true) {
		[Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
		[NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
		[DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
	}
	app.directive("t", vTDirective(i18n));
}
var I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}) {
	const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
	const __instances = /* @__PURE__ */ new Map();
	const [globalScope, __global] = createGlobal(options);
	const symbol = /* @__PURE__ */ makeSymbol("");
	function __getInstance(component) {
		return __instances.get(component) || null;
	}
	function __setInstance(component, instance) {
		__instances.set(component, instance);
	}
	function __deleteInstance(component) {
		__instances.delete(component);
	}
	const i18n = {
		get mode() {
			return "composition";
		},
		async install(app, ...options) {
			app.__VUE_I18N_SYMBOL__ = symbol;
			app.provide(app.__VUE_I18N_SYMBOL__, i18n);
			if (isPlainObject(options[0])) {
				const opts = options[0];
				i18n.__composerExtend = opts.__composerExtend;
				i18n.__vueI18nExtend = opts.__vueI18nExtend;
			}
			let globalReleaseHandler = null;
			if (__globalInjection) globalReleaseHandler = injectGlobalFields(app, i18n.global);
			apply(app, i18n, ...options);
			const unmountApp = app.unmount;
			app.unmount = () => {
				globalReleaseHandler && globalReleaseHandler();
				i18n.dispose();
				unmountApp();
			};
		},
		get global() {
			return __global;
		},
		dispose() {
			globalScope.stop();
		},
		__instances,
		__getInstance,
		__setInstance,
		__deleteInstance
	};
	return i18n;
}
function useI18n(options = {}) {
	const instance = getCurrentInstance$1();
	if (instance == null) throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
	if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
	const i18n = getI18nInstance(instance);
	const gl = getGlobalComposer(i18n);
	const componentOptions = getComponentOptions(instance);
	const scope = getScope(options, componentOptions);
	if (scope === "global") {
		adjustI18nResources(gl, options, componentOptions);
		return gl;
	}
	if (scope === "parent") {
		let composer = getComposer(i18n, instance, options.__useComponent);
		if (composer == null) {
			composer = gl;
		}
		return composer;
	}
	const i18nInternal = i18n;
	let composer = i18nInternal.__getInstance(instance);
	if (composer == null) {
		const composerOptions = assign({}, options);
		if ("__i18n" in componentOptions) composerOptions.__i18n = componentOptions.__i18n;
		if (gl) composerOptions.__root = gl;
		composer = createComposer(composerOptions);
		if (i18nInternal.__composerExtend) composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
		i18nInternal.__setInstance(instance, composer);
	}
	return composer;
}
function createGlobal(options, legacyMode) {
	const scope = effectScope();
	const obj = scope.run(() => createComposer(options));
	if (obj == null) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
	return [scope, obj];
}
function getI18nInstance(instance) {
	const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
	/* istanbul ignore if */
	if (!i18n) throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
	return i18n;
}
function getScope(options, componentOptions) {
	return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
	return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
	let composer = null;
	const root = target.root;
	let current = getParentComponentInstance(target, useComponent);
	while (current != null) {
		const i18nInternal = i18n;
		if (i18n.mode === "composition") composer = i18nInternal.__getInstance(current);
		if (composer != null) break;
		if (root === current) break;
		current = current.parent;
	}
	return composer;
}
function getParentComponentInstance(target, useComponent = false) {
	if (target == null) return null;
	return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
var globalExportProps = [
	"locale",
	"fallbackLocale",
	"availableLocales"
];
var globalExportMethods = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function injectGlobalFields(app, composer) {
	const i18n = Object.create(null);
	globalExportProps.forEach((prop) => {
		const desc = Object.getOwnPropertyDescriptor(composer, prop);
		if (!desc) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const wrap = isRef(desc.value) ? {
			get() {
				return desc.value.value;
			},
			set(val) {
				desc.value.value = val;
			}
		} : { get() {
			return desc.get && desc.get();
		} };
		Object.defineProperty(i18n, prop, wrap);
	});
	app.config.globalProperties.$i18n = i18n;
	globalExportMethods.forEach((method) => {
		const desc = Object.getOwnPropertyDescriptor(composer, method);
		if (!desc || !desc.value) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
	});
	const dispose = () => {
		delete app.config.globalProperties.$i18n;
		globalExportMethods.forEach((method) => {
			delete app.config.globalProperties[`$${method}`];
		});
	};
	return dispose;
}
var DatetimeFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-d",
	props: assign({
		value: {
			type: [Number, Date],
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
	}
});
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
function useRouteBaseName(nuxtApp = useNuxtApp()) {
	const common = useComposableContext(nuxtApp);
	return (route) => {
		if (route == null) return;
		return common.getRouteBaseName(route) || void 0;
	};
}
function useLocalePath(nuxtApp = useNuxtApp()) {
	const common = useComposableContext(nuxtApp);
	return (route, locale) => localePath(common, route, locale);
}
function useLocaleRoute(nuxtApp = useNuxtApp()) {
	const common = useComposableContext(nuxtApp);
	return (route, locale) => localeRoute(common, route, locale);
}
function useSwitchLocalePath(nuxtApp = useNuxtApp()) {
	const common = useComposableContext(nuxtApp);
	return (locale) => switchLocalePath(common, locale);
}
var identifier = "nuxt-i18n-slp";
var switchLocalePathLinkWrapperExpr = new RegExp([
	`<!--${identifier}-\\[(\\w+)\\]-->`,
	`.+?`,
	`<!--/${identifier}-->`
].join(""), "g");
var switch_locale_path_ssr_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "i18n:plugin:switch-locale-path-ssr",
	dependsOn: ["i18n:plugin"],
	setup(_nuxt) {
		const nuxt = useNuxtApp(_nuxt._id);
		const switchLocalePath = useSwitchLocalePath(nuxt);
		nuxt.hook("app:rendered", (ctx) => {
			if (ctx.renderResult?.html == null) return;
			ctx.renderResult.html = ctx.renderResult.html.replaceAll(switchLocalePathLinkWrapperExpr, (match, p1) => {
				const encoded = encodeURI(switchLocalePath(p1 ?? ""));
				return match.replace(/href="([^"]+)"/, `href="${encoded || "#"}" `);
			});
		});
	}
});
var route_locale_detect_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "i18n:plugin:route-locale-detect",
	dependsOn: ["i18n:plugin"],
	async setup(_nuxt) {
		let __temp, __restore;
		const nuxt = useNuxtApp(_nuxt._id);
		const ctx = useNuxtI18nContext(nuxt);
		const resolvedLocale = useResolvedLocale();
		[__temp, __restore] = executeAsync(() => nuxt.runWithContext(() => loadAndSetLocale(nuxt, ctx.initial && resolvedLocale.value || detectLocale(nuxt, nuxt.$router.currentRoute.value)))), await __temp, __restore();
	}
});
var preload_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "i18n:plugin:preload",
	dependsOn: ["i18n:plugin"],
	async setup(_nuxt) {}
});
function extendI18n(i18n, { extendComposer, extendComposerInstance }) {
	const scope = effectScope();
	const installI18n = i18n.install.bind(i18n);
	i18n.install = (app, ...options) => {
		const pluginOptions = assign({}, options[0]);
		pluginOptions.__composerExtend = (c) => {
			extendComposerInstance(c, getComposer$3(i18n));
			return () => {};
		};
		if (i18n.mode === "legacy") pluginOptions.__vueI18nExtend = (vueI18n) => {
			extendComposerInstance(vueI18n, getComposer$3(vueI18n));
			return () => {};
		};
		Reflect.apply(installI18n, i18n, [app, pluginOptions]);
		const globalComposer = getComposer$3(i18n);
		scope.run(() => {
			extendComposer(globalComposer);
			if (i18n.mode === "legacy" && "__composer" in i18n.global) extendComposerInstance(i18n.global, getComposer$3(i18n.global));
		});
		if (i18n.mode === "composition" && app.config.globalProperties.$i18n != null) extendComposerInstance(app.config.globalProperties.$i18n, globalComposer);
		if (app.unmount) {
			const unmountApp = app.unmount.bind(app);
			app.unmount = () => {
				scope.stop();
				unmountApp();
			};
		}
	};
}
const setupVueI18nOptions = async (defaultLocale) => {
	const options = await loadVueI18nOptions(vueI18nConfigs);
	options.locale = defaultLocale || options.locale || "en-US";
	options.defaultLocale = defaultLocale;
	options.fallbackLocale ??= false;
	options.messages ??= {};
	for (const locale of localeCodes) options.messages[locale] ??= {};
	return options;
};
var i18n_default$1 = /* @__PURE__ */ defineNuxtPlugin({
	name: "i18n:plugin",
	parallel: false,
	async setup(_nuxt) {
		let __temp, __restore;
		Object.defineProperty(_nuxt.versions, "nuxtI18n", { get: () => "10.2.1" });
		const nuxt = useNuxtApp(_nuxt._id);
		const runtimeI18n = useRuntimeI18n(nuxt);
		const preloadedOptions = nuxt.ssrContext?.event?.context?.nuxtI18n?.vueI18nOptions;
		const _defaultLocale = getDefaultLocaleForDomain(useRequestURL({ xForwardedHost: true }).host) || runtimeI18n.defaultLocale || "";
		const optionsI18n = preloadedOptions || ([__temp, __restore] = executeAsync(() => setupVueI18nOptions(_defaultLocale)), __temp = await __temp, __restore(), __temp);
		const localeConfigs = useLocaleConfigs();
		localeConfigs.value = useRequestEvent().context.nuxtI18n?.localeConfigs || {};
		prerenderRoutes(localeCodes.map((locale) => `/_i18n/sEXdXGnD/${locale}/messages.json`));
		const i18n = createI18n(optionsI18n);
		const detectors = useDetectors(useRequestEvent(nuxt), useI18nDetection(nuxt), nuxt);
		const ctx = createNuxtI18nContext(nuxt, i18n, optionsI18n.defaultLocale);
		nuxt._nuxtI18n = ctx;
		extendI18n(i18n, {
			extendComposer(composer) {
				composer.locales = computed(() => runtimeI18n.locales);
				composer.localeCodes = computed(() => localeCodes);
				const _baseUrl = ref(ctx.getBaseUrl());
				composer.baseUrl = computed(() => _baseUrl.value);
				composer.strategy = "no_prefix";
				composer.localeProperties = computed(() => normalizedLocales.find((l) => l.code === composer.locale.value) || { code: composer.locale.value });
				composer.setLocale = async (locale) => {
					await loadAndSetLocale(nuxt, locale);
					await nuxt.runWithContext(() => /* @__PURE__ */ navigate(nuxt, nuxt.$router.currentRoute.value));
				};
				composer.loadLocaleMessages = ctx.loadMessages;
				composer.differentDomains = false;
				composer.defaultLocale = optionsI18n.defaultLocale;
				composer.getBrowserLocale = () => resolveSupportedLocale(detectors.header());
				composer.getLocaleCookie = () => resolveSupportedLocale(detectors.cookie());
				composer.setLocaleCookie = ctx.setCookieLocale;
				composer.finalizePendingLocaleChange = async () => {
					if (!i18n.__pendingLocale) return;
					await i18n.__resolvePendingLocalePromise?.();
				};
				composer.waitForPendingLocaleChange = async () => {
					await i18n?.__pendingLocalePromise;
				};
			},
			extendComposerInstance(instance, c) {
				const props = [
					["locales", () => c.locales],
					["localeCodes", () => c.localeCodes],
					["baseUrl", () => c.baseUrl],
					["strategy", () => "no_prefix"],
					["localeProperties", () => c.localeProperties],
					["setLocale", () => (locale) => Reflect.apply(c.setLocale, c, [locale])],
					["loadLocaleMessages", () => (locale) => Reflect.apply(c.loadLocaleMessages, c, [locale])],
					["differentDomains", () => false],
					["defaultLocale", () => c.defaultLocale],
					["getBrowserLocale", () => () => Reflect.apply(c.getBrowserLocale, c, [])],
					["getLocaleCookie", () => () => Reflect.apply(c.getLocaleCookie, c, [])],
					["setLocaleCookie", () => (locale) => Reflect.apply(c.setLocaleCookie, c, [locale])],
					["finalizePendingLocaleChange", () => () => Reflect.apply(c.finalizePendingLocaleChange, c, [])],
					["waitForPendingLocaleChange", () => () => Reflect.apply(c.waitForPendingLocaleChange, c, [])]
				];
				for (const [key, get] of props) Object.defineProperty(instance, key, { get });
			}
		});
		nuxt.vueApp.use(i18n);
		Object.defineProperty(nuxt, "$i18n", { get: () => getI18nTarget(i18n) });
		nuxt.provide("localeHead", (options) => localeHead(nuxt._nuxtI18n.composableCtx, options));
		nuxt.provide("localePath", useLocalePath(nuxt));
		nuxt.provide("localeRoute", useLocaleRoute(nuxt));
		nuxt.provide("routeBaseName", useRouteBaseName(nuxt));
		nuxt.provide("getRouteBaseName", useRouteBaseName(nuxt));
		nuxt.provide("switchLocalePath", useSwitchLocalePath(nuxt));
	}
});
const pwaAssetsIcons = {
	"favicon": {
		"/favicon.ico": {
			"name": "favicon.ico",
			"url": "/favicon.ico",
			"width": 48,
			"height": 48,
			"mimeType": "image/x-icon",
			"link": "<link rel=\"icon\" href=\"/favicon.ico\" sizes=\"48x48\">",
			"linkObject": {
				"id": "fav-48x48",
				"href": "/favicon.ico",
				"rel": "icon",
				"sizes": "48x48"
			}
		},
		"/favicon.svg": {
			"name": "favicon.svg",
			"url": "/favicon.svg",
			"width": 0,
			"height": 0,
			"mimeType": "image/svg+xml",
			"link": "<link rel=\"icon\" href=\"/favicon.svg\" sizes=\"any\" type=\"image/svg+xml\">",
			"linkObject": {
				"id": "fav-svg",
				"type": "image/svg+xml",
				"href": "/favicon.svg",
				"rel": "icon",
				"sizes": "any"
			}
		}
	},
	"transparent": {
		"/pwa-64x64.png": {
			"name": "pwa-64x64.png",
			"url": "/pwa-64x64.png",
			"width": 64,
			"height": 64,
			"mimeType": "image/png"
		},
		"/pwa-192x192.png": {
			"name": "pwa-192x192.png",
			"url": "/pwa-192x192.png",
			"width": 192,
			"height": 192,
			"mimeType": "image/png"
		},
		"/pwa-512x512.png": {
			"name": "pwa-512x512.png",
			"url": "/pwa-512x512.png",
			"width": 512,
			"height": 512,
			"mimeType": "image/png"
		}
	},
	"maskable": { "/maskable-icon-512x512.png": {
		"name": "maskable-icon-512x512.png",
		"url": "/maskable-icon-512x512.png",
		"width": 512,
		"height": 512,
		"mimeType": "image/png"
	} },
	"apple": { "/apple-touch-icon-180x180.png": {
		"name": "apple-touch-icon-180x180.png",
		"url": "/apple-touch-icon-180x180.png",
		"width": 180,
		"height": 180,
		"mimeType": "image/png",
		"link": "<link rel=\"apple-touch-icon\" href=\"/apple-touch-icon-180x180.png\">",
		"linkObject": {
			"id": "ati-180-180",
			"rel": "apple-touch-icon",
			"href": "/apple-touch-icon-180x180.png"
		}
	} },
	"appleSplashScreen": {}
};
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fpwa_icons_plugin_default = /* @__PURE__ */ defineNuxtPlugin(() => {
	return { provide: { pwaIcons: {
		transparent: configureEntry("transparent"),
		maskable: configureEntry("maskable"),
		favicon: configureEntry("favicon"),
		apple: configureEntry("apple"),
		appleSplashScreen: configureEntry("appleSplashScreen")
	} } };
});
function configureEntry(key) {
	return Object.values(pwaAssetsIcons[key] ?? {}).reduce((acc, icon) => {
		const entry = {
			...icon,
			asImage: {
				src: icon.url,
				key: `${key}-${icon.name}`
			}
		};
		if (icon.width && icon.height) {
			entry.asImage.width = icon.width;
			entry.asImage.height = icon.height;
		}
		acc[icon.name] = entry;
		return acc;
	}, {});
}
function getNitroOrigin(e) {
	e = e || useRequestEvent();
	return e?.context?.siteConfigNitroOrigin || "";
}
function useNitroOrigin(e) {
	return getNitroOrigin(e);
}
function useSiteConfig(options) {
	const stack = useRequestEvent()?.context.siteConfig.get(defu({ resolveRefs: true }, options));
	delete stack._priority;
	return stack;
}
function resolveSitePath(pathOrUrl, options) {
	let path = pathOrUrl;
	if (hasProtocol(pathOrUrl, {
		strict: false,
		acceptRelative: true
	})) path = parseURL(pathOrUrl).pathname;
	const base = withLeadingSlash(options.base || "/");
	if (base !== "/" && path.startsWith(base)) path = path.slice(base.length);
	let origin = withoutTrailingSlash(options.siteUrl );
	if (base !== "/" && origin.endsWith(base)) origin = origin.slice(0, origin.indexOf(base));
	const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
	const resolvedUrl = withBase(path, baseWithOrigin);
	return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
var fileExtensions = [
	"jpg",
	"jpeg",
	"png",
	"gif",
	"bmp",
	"webp",
	"svg",
	"ico",
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
	"zip",
	"rar",
	"7z",
	"tar",
	"gz",
	"mp3",
	"wav",
	"flac",
	"ogg",
	"opus",
	"m4a",
	"aac",
	"midi",
	"mid",
	"mp4",
	"avi",
	"mkv",
	"mov",
	"wmv",
	"flv",
	"webm",
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
	"php",
	"py",
	"rb",
	"java",
	"c",
	"cpp",
	"h",
	"go",
	"csv",
	"tsv",
	"sql",
	"yaml",
	"yml",
	"woff",
	"woff2",
	"ttf",
	"otf",
	"eot",
	"exe",
	"msi",
	"apk",
	"ipa",
	"dmg",
	"iso",
	"bin",
	"bat",
	"cmd",
	"sh",
	"env",
	"htaccess",
	"conf",
	"toml",
	"ini",
	"deb",
	"rpm",
	"jar",
	"war",
	"epub",
	"mobi",
	"log",
	"tmp",
	"bak",
	"old",
	"sav"
];
function isPathFile(path) {
	const ext = (path.split("/").pop() || path).match(/\.[0-9a-z]+$/i)?.[0];
	return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
	const $url = parseURL(pathOrUrl);
	if (isPathFile($url.pathname)) return pathOrUrl;
	const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
	return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}
function withSiteUrl(path, options = {}) {
	const siteConfig = useSiteConfig();
	const nitroOrigin = useNitroOrigin();
	const base = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
	return computed(() => {
		return resolveSitePath(unref(path), {
			siteUrl: unref(options.canonical) !== false || false ? siteConfig.url : nitroOrigin,
			trailingSlash: siteConfig.trailingSlash,
			base,
			withBase: unref(options.withBase)
		});
	});
}
const componentNames = [
	{
		"hash": "W9TzSCVeOX6OtGZQRLIXXdkfp6-QgFBa4TZtowYZGCk",
		"pascalName": "OgImageDefault",
		"kebabName": "og-image-default",
		"path": "/home/runner/work/npmx.dev/npmx.dev/app/components/OgImage/Default.vue",
		"category": "app"
	},
	{
		"hash": "IStdj4o6dQf58QkDhtA7RS9YxmJGtEVFxYOCgHQoCl0",
		"pascalName": "OgImagePackage",
		"kebabName": "og-image-package",
		"path": "/home/runner/work/npmx.dev/npmx.dev/app/components/OgImage/Package.vue",
		"category": "app"
	},
	{
		"hash": "SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM",
		"pascalName": "BrandedLogo",
		"kebabName": "branded-logo",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue",
		"category": "community"
	},
	{
		"hash": "tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY",
		"pascalName": "Frame",
		"kebabName": "frame",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue",
		"category": "community"
	},
	{
		"hash": "NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM",
		"pascalName": "Nuxt",
		"kebabName": "nuxt",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue",
		"category": "community"
	},
	{
		"hash": "VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4",
		"pascalName": "NuxtSeo",
		"kebabName": "nuxt-seo",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue",
		"category": "community"
	},
	{
		"hash": "8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM",
		"pascalName": "Pergel",
		"kebabName": "pergel",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue",
		"category": "community"
	},
	{
		"hash": "b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s",
		"pascalName": "SimpleBlog",
		"kebabName": "simple-blog",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue",
		"category": "community"
	},
	{
		"hash": "vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI",
		"pascalName": "UnJs",
		"kebabName": "un-js",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue",
		"category": "community"
	},
	{
		"hash": "hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw",
		"pascalName": "Wave",
		"kebabName": "wave",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue",
		"category": "community"
	},
	{
		"hash": "zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws",
		"pascalName": "WithEmoji",
		"kebabName": "with-emoji",
		"path": "/home/runner/work/npmx.dev/npmx.dev/node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.2_vue@3.5.27_typescript@5.9.3___magicast@0.5.1_uns_049949b0126459fb355642c8c1672b6d/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue",
		"category": "community"
	}
];
function generateMeta(url, resolvedOptions) {
	const meta = [
		{
			property: "og:image",
			content: url
		},
		{
			property: "og:image:type",
			content: () => `image/${getExtension(toValue(url)) || resolvedOptions.extension}`
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: url
		},
		{
			name: "twitter:image:src",
			content: url
		}
	];
	if (resolvedOptions.width) {
		meta.push({
			property: "og:image:width",
			content: resolvedOptions.width
		});
		meta.push({
			name: "twitter:image:width",
			content: resolvedOptions.width
		});
	}
	if (resolvedOptions.height) {
		meta.push({
			property: "og:image:height",
			content: resolvedOptions.height
		});
		meta.push({
			name: "twitter:image:height",
			content: resolvedOptions.height
		});
	}
	if (resolvedOptions.alt) {
		meta.push({
			property: "og:image:alt",
			content: resolvedOptions.alt
		});
		meta.push({
			name: "twitter:image:alt",
			content: resolvedOptions.alt
		});
	}
	return meta;
}
function isInternalRoute(path) {
	return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
	return [
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
	].includes(key);
}
function separateProps(options, ignoreKeys = []) {
	options = options || {};
	const _props = defu(options.props, Object.fromEntries(Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))));
	const props = {};
	Object.entries(_props).forEach(([key, val]) => {
		props[key.replace(/-([a-z])/g, (g) => String(g[1]).toUpperCase())] = val;
	});
	return {
		...Object.fromEntries(Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))),
		props
	};
}
function withoutQuery(path) {
	return path.split("?")[0];
}
function getExtension(path) {
	path = withoutQuery(path);
	const lastSegment = path.split("/").pop() || path;
	const extension = lastSegment.split(".").pop() || lastSegment;
	if (extension === "jpg") return "jpeg";
	return extension;
}
function setHeadOgImagePrebuilt(input) {
	const url = input.url;
	if (!url) return;
	useHead$1({ meta: generateMeta(url, input) }, { tagPriority: "high" });
}
function createOgImageMeta(src, input, ssrContext) {
	const { defaults } = useOgImageRuntimeConfig();
	const _input = separateProps(defu(input, ssrContext._ogImagePayload));
	if (input._query && Object.keys(input._query).length) src = withQuery(src, { _query: input._query });
	const meta = generateMeta(src, input);
	ssrContext._ogImageInstances = ssrContext._ogImageInstances || [];
	const script = [];
	if (src) script.push({
		id: "nuxt-og-image-options",
		type: "application/json",
		processTemplateParams: true,
		innerHTML: () => {
			const payload = resolveUnrefHeadInput(_input);
			if (payload.props && typeof payload.props.title === "undefined") payload.props.title = "%s";
			payload.component = resolveComponentName(input.component, defaults.component || "");
			delete payload.url;
			if (payload._query && Object.keys(payload._query).length === 0) delete payload._query;
			const final = {};
			for (const k in payload) if (payload[k] !== defaults[k]) final[k] = payload[k];
			return stringify(final);
		},
		tagPosition: "bodyClose"
	});
	const instance = useHead$1({
		script,
		meta
	}, { tagPriority: "high" });
	ssrContext._ogImagePayload = _input;
	ssrContext._ogImageInstances.push(instance);
}
function resolveComponentName(component, fallback) {
	component = component || fallback || componentNames?.[0]?.pascalName;
	if (component && componentNames) {
		const originalName = component;
		for (const component2 of componentNames) if (component2.pascalName.endsWith(originalName) || component2.kebabName.endsWith(originalName)) return component2.pascalName;
	}
	return component;
}
function getOgImagePath(pagePath, _options) {
	const baseURL = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
	const extension = _options?.extension || useOgImageRuntimeConfig().defaults?.extension || "png";
	const path = joinURL("/", baseURL, `__og-image__/${"image"}`, pagePath, `og.${extension}`);
	if (Object.keys(_options?._query || {}).length) return withQuery(path, _options._query);
	return path;
}
function useOgImageRuntimeConfig() {
	const c = /* @__PURE__ */ useRuntimeConfig();
	return {
		defaults: {},
		...c["nuxt-og-image"],
		app: { baseURL: c.app.baseURL }
	};
}
function ogImageCanonicalUrls(nuxtApp) {
	nuxtApp.hooks.hook("app:rendered", async (ctx) => {
		const { ssrContext } = ctx;
		const path = parseURL(useRequestEvent()?.path || "").pathname;
		if (isInternalRoute(path)) return;
		ssrContext?.head.use(TemplateParamsPlugin);
		ssrContext?.head.use({
			key: "nuxt-og-image:overrides-and-canonical-urls",
			hooks: { "tags:resolve": async (ctx2) => {
				const hasPrimaryPayload = ctx2.tags.some((tag) => tag.tag === "script" && tag.props.id === "nuxt-og-image-options");
				let overrides;
				for (const tag of ctx2.tags) if (tag.tag === "script" && tag.props.id === "nuxt-og-image-overrides") {
					if (hasPrimaryPayload) {
						overrides = separateProps(parse(tag.innerHTML || "{}"));
						delete ctx2.tags[ctx2.tags.indexOf(tag)];
					} else {
						tag.props.id = "nuxt-og-image-options";
						tag.innerHTML = stringify(separateProps(parse(tag.innerHTML || "{}")));
						tag._d = "script:id:nuxt-og-image-options";
					}
					break;
				}
				ctx2.tags = ctx2.tags.filter(Boolean);
				for (const tag of ctx2.tags) if (tag.tag === "meta" && (tag.props.property === "og:image" || ["twitter:image:src", "twitter:image"].includes(tag.props.name || ""))) {
					if (!tag.props.content) {
						tag.props = {};
						continue;
					}
					if (!tag.props.content?.startsWith("https")) await nuxtApp.runWithContext(() => {
						tag.props.content = toValue(withSiteUrl(tag.props.content || "", { withBase: true }));
					});
				} else if (overrides && tag.tag === "script" && tag.props.id === "nuxt-og-image-options") tag.innerHTML = stringify(defu(overrides, parse(tag.innerHTML || "{}")));
			} }
		});
	});
}
function routeRuleOgImage(nuxtApp) {
	nuxtApp.hooks.hook("app:rendered", async (ctx) => {
		const { ssrContext } = ctx;
		const path = parseURL(useRequestEvent()?.path || "").pathname;
		if (isInternalRoute(path)) return;
		let routeRules = defu({}, ...toRouteMatcher(createRouter({ routes: ssrContext?.runtimeConfig?.nitro?.routeRules })).matchAll(withoutBase(path.split("?")?.[0] || "", ssrContext?.runtimeConfig?.app.baseURL || "")).reverse())?.ogImage;
		if (typeof routeRules === "undefined") return;
		const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
		if (routeRules === false) {
			ogImageInstances?.forEach((e2) => {
				e2.dispose();
			});
			nuxtApp.ssrContext._ogImagePayload = void 0;
			nuxtApp.ssrContext._ogImageInstances = void 0;
			return;
		}
		routeRules = defu(nuxtApp.ssrContext?.event?.context._nitro?.routeRules?.ogImage, routeRules);
		createOgImageMeta(getOgImagePath(ssrContext.url, routeRules), routeRules, nuxtApp.ssrContext);
	});
}
var og_image_canonical_urls_server_default = /* @__PURE__ */ defineNuxtPlugin({ setup(nuxtApp) {
	ogImageCanonicalUrls(nuxtApp);
} });
var route_rule_og_image_server_default = /* @__PURE__ */ defineNuxtPlugin({ setup(nuxtApp) {
	routeRuleOgImage(nuxtApp);
} });
var i18n_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt-site-config:i18n",
	dependsOn: [
		"i18n:plugin",
		"i18n:plugin:ssg-detect",
		"i18n:plugin:route-locale-detect"
	],
	setup(nuxtApp) {
		const i18n = nuxtApp.$i18n;
		if (!i18n) return;
		const stack = useRequestEvent()?.context.siteConfig;
		const i18nBaseUrl = toValue(i18n.baseUrl);
		if (i18nBaseUrl) {
			const siteConfig = stack.get({ resolveRefs: true });
			const currentUrl = siteConfig.url;
			if (currentUrl && !currentUrl.includes("localhost")) {
				const i18nURL = parseURL(i18nBaseUrl, "https://");
				const siteConfigURL = parseURL(currentUrl, "https://");
				if (i18nURL.host !== siteConfigURL.host) {
					if (siteConfig.env === "production") console.error(`[Nuxt Site Config] Your I18n baseUrl \`${i18nURL.host}\` doesn't match your site url ${siteConfigURL.host}. This will cause production SEO issues. Either provide a matching baseUrl or remove the site url config.`);
				}
			}
		}
		const defaultLocale = computed(() => {
			const locale = toValue(i18n.locales).find((l) => l.code === i18n.defaultLocale);
			return locale?.language || locale?.iso || i18n.defaultLocale;
		});
		const i18nUrl = computed(() => {
			return toValue(i18n.baseUrl) || void 0;
		});
		const currentLocale = computed(() => {
			const properties = toValue(i18n.localeProperties);
			if (properties.language) return properties.language;
			return defaultLocale.value;
		});
		const description = computed(() => i18n.te("nuxtSiteConfig.description") ? i18n.t("nuxtSiteConfig.description") : void 0);
		const name = computed(() => i18n.te("nuxtSiteConfig.name") ? i18n.t("nuxtSiteConfig.name") : void 0);
		stack.push({
			_priority: -2,
			_context: "@nuxtjs/i18n",
			url: i18nUrl,
			defaultLocale,
			currentLocale,
			description,
			name
		});
	}
});
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Funocss_default = /* @__PURE__ */ defineNuxtPlugin(() => {});
var prerender_server_default = /* @__PURE__ */ defineNuxtPlugin(async () => {
	return;
});
var virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fplugins_server_default = [
	unhead_default,
	router_default,
	_0_siteConfig_default,
	revive_payload_server_default,
	virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcomponents_plugin_default,
	plugin_server_default,
	switch_locale_path_ssr_default,
	route_locale_detect_default,
	preload_default,
	i18n_default$1,
	virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fpwa_icons_plugin_default,
	og_image_canonical_urls_server_default,
	route_rule_og_image_server_default,
	i18n_default,
	virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Funocss_default,
	prerender_server_default,
	/* @__PURE__ */ defineNuxtPlugin({
		name: "i18n:plugin:ssg-detect",
		dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
		enforce: "post",
		setup(_nuxt) {}
	})
];
const pwaAssetsHead = {
	"links": [
		{
			"href": "/favicon.ico",
			"rel": "icon",
			"sizes": "48x48"
		},
		{
			"href": "/favicon.svg",
			"rel": "icon",
			"sizes": "any",
			"type": "image/svg+xml"
		},
		{
			"href": "/apple-touch-icon-180x180.png",
			"rel": "apple-touch-icon"
		}
	],
	"themeColor": {
		"content": "#0a0a0a"
	}
};
var NuxtPwaAssets_default = defineComponent({ setup() {
	const meta = ref({ link: [] });
	useHead$1(meta);
	if (pwaAssetsHead.themeColor) meta.value.meta = [{
		name: "theme-color",
		content: pwaAssetsHead.themeColor.content
	}];
	if (pwaAssetsHead.links.length) meta.value.link.push(...pwaAssetsHead.links);
	return () => null;
} });
var AppLogo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppLogo",
	__ssrInlineRender: true,
	props: { class: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<svg${ssrRenderAttrs(mergeProps({
				"aria-hidden": "true",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 512 512",
				width: "96",
				height: "96",
				class: __props.class
			}, _attrs))}><title>${ssrInterpolate(_ctx.$t("alt_logo"))}</title><rect fill="var(--bg)" width="512" height="512" rx="64"></rect><rect fill="currentColor" x="110" y="310" width="60" height="60"></rect><text fill="var(--accent)" x="320" y="370" font-family="&#39;Geist Mono&#39;,ui-monospace, SFMono-Regular, &#39;SF Mono&#39;, Menlo, Consolas, monospace" font-size="420" font-weight="500" text-anchor="middle"><tspan>/</tspan></text></svg>`);
		};
	}
});
var _sfc_setup$12 = AppLogo_vue_vue_type_script_setup_true_lang_default.setup;
AppLogo_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppLogo.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var AppLogo_default = Object.assign(AppLogo_vue_vue_type_script_setup_true_lang_default, { __name: "AppLogo" });
const noCorrect = {
	autocapitalize: "off",
	autocomplete: "off",
	autocorrect: "off",
	spellcheck: "false"
};
function isEditableElement(target) {
	if (!target || !(target instanceof HTMLElement)) return false;
	return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
}
function isKeyWithoutModifiers(event, key) {
	return event.key.toLowerCase() === key.toLowerCase() && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
}
var SearchBox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SearchBox",
	__ssrInlineRender: true,
	props: { inputClass: { default: "inline sm:block" } },
	emits: ["blur", "focus"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const router = useRouter$1();
		const route = useRoute$1();
		const isSearchFocused = shallowRef(false);
		const showSearchBar = computed(() => {
			return route.name !== "index";
		});
		const searchQuery = shallowRef(normalizeSearchParam(route.query.q));
		const pagesWithLocalFilter = new Set(["~username", "org"]);
		const updateUrlQuery = debounce((value) => {
			if (pagesWithLocalFilter.has(route.name)) return;
			if (route.name === "search") {
				router.replace({ query: { q: value || void 0 } });
				return;
			}
			if (!value) return;
			router.push({
				name: "search",
				query: { q: value }
			});
		}, 250);
		watch(searchQuery, (value) => {
			updateUrlQuery(value);
		});
		watch(() => route.query.q, (urlQuery) => {
			if (pagesWithLocalFilter.has(route.name)) return;
			const value = normalizeSearchParam(urlQuery);
			if (searchQuery.value !== value) searchQuery.value = value;
		});
		const inputRef = useTemplateRef("inputRef");
		function focus() {
			inputRef.value?.focus();
		}
		__expose({ focus });
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			if (unref(showSearchBar)) _push(`<search${ssrRenderAttrs(mergeProps({ class: "flex-1 sm:max-w-md " + __props.inputClass }, _attrs))}><form method="GET" action="/search" class="relative"><label for="header-search" class="sr-only">${ssrInterpolate(_ctx.$t("search.label"))}</label><div class="${ssrRenderClass([{ "is-focused": unref(isSearchFocused) }, "relative group"])}"><div class="search-box relative flex items-center"><span class="absolute inset-is-3 text-fg-subtle font-mono text-sm pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1"> / </span><input${ssrRenderAttrs((_temp0 = mergeProps({
				id: "header-search",
				ref_key: "inputRef",
				ref: inputRef,
				value: unref(searchQuery),
				type: "search",
				name: "q",
				placeholder: _ctx.$t("search.placeholder")
			}, "noCorrect" in _ctx ? _ctx.noCorrect : unref(noCorrect), { class: "w-full min-w-25 bg-bg-subtle border border-border rounded-md ps-7 pe-3 py-1.5 font-mono text-sm text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 hover:border-fg-subtle outline-2 outline-transparent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70" }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(searchQuery)))))}><button type="submit" class="sr-only">${ssrInterpolate(_ctx.$t("search.button"))}</button></div></div></form></search>`);
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$11 = SearchBox_vue_vue_type_script_setup_true_lang_default.setup;
SearchBox_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/SearchBox.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var SearchBox_default = Object.assign(SearchBox_vue_vue_type_script_setup_true_lang_default, { __name: "HeaderSearchBox" });
function tryOnScopeDispose(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var injectLocal = (...args) => {
	var _getCurrentInstance;
	const key = args[0];
	const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
	const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
	if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
	if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
	return inject(...args);
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
function toRef$1(...args) {
	if (args.length !== 1) return toRef(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : ref(r);
}
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke$1) => {
	return invoke$1();
};
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer$1) => {
		clearTimeout(timer$1);
		lastRejector();
		lastRejector = noop;
	};
	let lastInvoker;
	const filter = (invoke$1) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = void 0;
			}
			return Promise.resolve(invoke$1());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			lastInvoker = invoke$1;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = void 0;
				resolve(lastInvoker());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = void 0;
				resolve(invoke$1());
			}, duration);
		});
	};
	return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
	const { initialState = "active" } = options;
	const isActive = toRef$1(initialState === "active");
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: readonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
function createSingletonPromise(fn) {
	let _promise;
	function wrapper() {
		if (!_promise) _promise = fn();
		return _promise;
	}
	wrapper.reset = async () => {
		const _prev = _promise;
		_promise = void 0;
		if (_prev) await _prev;
	};
	return wrapper;
}
function pxValue(px) {
	return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
	return getCurrentInstance();
}
function createSharedComposable(composable) {
	return composable;
}
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter, ...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget());
	else if (sync) fn();
	else nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = shallowRef(false);
	let timer;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		if (immediateCallback) cb();
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = void 0;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) isPending.value = true;
	tryOnScopeDispose(stop);
	return {
		isPending: shallowReadonly(isPending),
		start,
		stop
	};
}
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
var defaultWindow = void 0;
var defaultNavigator = void 0;
function unrefElement(elRef) {
	var _$el;
	const plain = toValue(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
function onClickOutside(target, handler, options = {}) {
	const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
	if (!window$1) return controls ? {
		stop: noop,
		cancel: noop,
		trigger: noop
	} : noop;
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return toValue(ignore).some((target$1) => {
			if (typeof target$1 === "string") return Array.from(window$1.document.querySelectorAll(target$1)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target$1);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	function hasMultipleRoots(target$1) {
		const vm = toValue(target$1);
		return vm && vm.$.subTree.shapeFlag === 16;
	}
	function checkMultipleRoots(target$1, event) {
		const vm = toValue(target$1);
		const children = vm.$.subTree && vm.$.subTree.children;
		if (children == null || !Array.isArray(children)) return false;
		return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
	}
	const listener = (event) => {
		const el = unrefElement(target);
		if (event.target == null) return;
		if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	let isProcessingClick = false;
	const cleanup = [
		useEventListener(window$1, "click", (event) => {
			if (!isProcessingClick) {
				isProcessingClick = true;
				setTimeout(() => {
					isProcessingClick = false;
				}, 0);
				listener(event);
			}
		}, {
			passive: true,
			capture
		}),
		useEventListener(window$1, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window$1, "blur", (event) => {
			setTimeout(() => {
				var _window$document$acti;
				const el = unrefElement(target);
				if (((_window$document$acti = window$1.document.activeElement) === null || _window$document$acti === void 0 ? void 0 : _window$document$acti.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
			}, 0);
		}, { passive: true })
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	if (controls) return {
		stop,
		cancel: () => {
			shouldListen = false;
		},
		trigger: (event) => {
			shouldListen = true;
			listener(event);
			shouldListen = false;
		}
	};
	return stop;
}
function useMounted() {
	const isMounted = shallowRef(false);
	if (getCurrentInstance());
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function useMutationObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...mutationOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "MutationObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const items = toArray(toValue(target)).map(unrefElement).filter(notNullish);
		return new Set(items);
	}), (newTargets) => {
		cleanup();
		if (isSupported.value && newTargets.size) {
			observer = new MutationObserver(callback);
			newTargets.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keydown"
	});
}
function onKeyUp(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keyup"
	});
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function useSSRWidth() {
	const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
	return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
	const { window: window$1 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
	const ssrSupport = shallowRef(typeof ssrWidth === "number");
	const mediaQuery = shallowRef();
	const matches = shallowRef(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	watchEffect(() => {
		if (ssrSupport.value) {
			ssrSupport.value = !isSupported.value;
			matches.value = toValue(query).split(",").some((queryString) => {
				const not = queryString.includes("not all");
				const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
				let res = Boolean(minWidth || maxWidth);
				if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
				if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
				return not ? !res : res;
			});
			return;
		}
		if (!isSupported.value) return;
		mediaQuery.value = window$1.matchMedia(toValue(query));
		matches.value = mediaQuery.value.matches;
	});
	useEventListener(mediaQuery, "change", handler, { passive: true });
	return computed(() => matches.value);
}
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator: navigator$1 = defaultNavigator } = options;
	const isSupported = /* @__PURE__ */ useSupported(() => navigator$1 && "permissions" in navigator$1);
	const permissionStatus = shallowRef();
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = shallowRef();
	const update = () => {
		var _permissionStatus$val, _permissionStatus$val2;
		state.value = (_permissionStatus$val = (_permissionStatus$val2 = permissionStatus.value) === null || _permissionStatus$val2 === void 0 ? void 0 : _permissionStatus$val2.state) !== null && _permissionStatus$val !== void 0 ? _permissionStatus$val : "prompt";
	};
	useEventListener(permissionStatus, "change", update, { passive: true });
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus.value) try {
			permissionStatus.value = await navigator$1.permissions.query(desc);
		} catch (_unused) {
			permissionStatus.value = void 0;
		} finally {
			update();
		}
		if (controls) return toRaw(permissionStatus.value);
	});
	query();
	if (controls) return {
		state,
		isSupported,
		query
	};
	else return state;
}
function useClipboard(options = {}) {
	const { navigator: navigator$1 = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
	const isClipboardApiSupported = /* @__PURE__ */ useSupported(() => navigator$1 && "clipboard" in navigator$1);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = shallowRef("");
	const copied = shallowRef(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
	async function updateText() {
		let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
		if (!useLegacy) try {
			text.value = await navigator$1.clipboard.readText();
		} catch (_unused) {
			useLegacy = true;
		}
		if (useLegacy) text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText, { passive: true });
	async function copy(value = toValue(source)) {
		if (isSupported.value && value != null) {
			let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
			if (!useLegacy) try {
				await navigator$1.clipboard.writeText(value);
			} catch (_unused2) {
				useLegacy = true;
			}
			if (useLegacy) legacyCopy(value);
			text.value = value;
			copied.value = true;
			timeout.start();
		}
	}
	function legacyCopy(value) {
		const ta = (void 0).createElement("textarea");
		ta.value = value;
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		ta.setAttribute("readonly", "");
		(void 0).body.appendChild(ta);
		ta.select();
		(void 0).execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _document$getSelectio, _document, _document$getSelectio2;
		return (_document$getSelectio = (_document = void 0) === null || _document === void 0 || (_document$getSelectio2 = _document.getSelection) === null || _document$getSelectio2 === void 0 || (_document$getSelectio2 = _document$getSelectio2.call(_document)) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.toString()) !== null && _document$getSelectio !== void 0 ? _document$getSelectio : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		isSupported,
		text: readonly(text),
		copied: readonly(copied),
		copy
	};
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
function usePreferredDark(options) {
	return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults$1, storage, options = {}) {
	var _options$serializer;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults$1 === "function" ? defaults$1() : defaults$1);
	const keyComputed = computed(() => toValue(key));
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults$1);
	const type = guessSerializerType(rawInit);
	const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
		flush,
		deep,
		eventFilter
	});
	watch(keyComputed, () => update(), { flush });
	let firstMounted = false;
	const onStorageEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		update(ev);
	};
	const onStorageCustomEvent = (ev) => {
		if (initOnMounted && !firstMounted) return;
		updateFromCustomEvent(ev);
	};
	if (window$1 && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window$1, "storage", onStorageEvent, { passive: true });
	else useEventListener(window$1, customStorageEventName, onStorageCustomEvent);
	if (initOnMounted) tryOnMounted(() => {
		firstMounted = true;
		update();
	});
	else update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window$1) {
			const payload = {
				key: keyComputed.value,
				oldValue,
				newValue,
				storageArea: storage
			};
			window$1.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
		}
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(keyComputed.value);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(keyComputed.value);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(keyComputed.value, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== keyComputed.value) return;
		pauseWatch();
		try {
			const serializedData = serializer.write(data.value);
			if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
function useCssSupports(...args) {
	let options = {};
	if (typeof toValue(args.at(-1)) === "object") options = args.pop();
	const [prop, value] = args;
	const { window: window$1 = defaultWindow, ssrValue = false } = options;
	const isMounted = useMounted();
	return { isSupported: computed(() => {
		isMounted.value;
		return ssrValue;
	}) };
}
function useResizeObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "ResizeObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const _targets = toValue(target);
		return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
	}), (els) => {
		cleanup();
		if (isSupported.value && window$1) {
			observer = new ResizeObserver(callback);
			for (const _el of els) if (_el) observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window: window$1 = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
	});
	const width = shallowRef(initialSize.width);
	const height = shallowRef(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window$1 && isSVG.value) {
			const $elem = unrefElement(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = toArray(boxSize);
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
function useFocus(target, options = {}) {
	const { initialValue = false, focusVisible = false, preventScroll = false } = options;
	const innerFocused = shallowRef(false);
	const targetElement = computed(() => unrefElement(target));
	const listenerOptions = { passive: true };
	useEventListener(targetElement, "focus", (event) => {
		var _matches, _ref;
		if (!focusVisible || ((_matches = (_ref = event.target).matches) === null || _matches === void 0 ? void 0 : _matches.call(_ref, ":focus-visible"))) innerFocused.value = true;
	}, listenerOptions);
	useEventListener(targetElement, "blur", () => innerFocused.value = false, listenerOptions);
	const focused = computed({
		get: () => innerFocused.value,
		set(value) {
			var _targetElement$value, _targetElement$value2;
			if (!value && innerFocused.value) (_targetElement$value = targetElement.value) === null || _targetElement$value === void 0 || _targetElement$value.blur();
			else if (value && !innerFocused.value) (_targetElement$value2 = targetElement.value) === null || _targetElement$value2 === void 0 || _targetElement$value2.focus({ preventScroll });
		}
	});
	watch(targetElement, () => {
		focused.value = initialValue;
	}, {
		immediate: true,
		flush: "post"
	});
	return { focused };
}
function useLocalStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 === null || window$1 === void 0 ? void 0 : window$1.localStorage, options);
}
var STORAGE_KEY = "npmx-connector";
var DEFAULT_PORT = 31415;
const useConnector = createSharedComposable(function useConnector() {
	const config = useState("connector-config", () => null);
	const state = useState("connector-state", () => ({
		connected: false,
		connecting: false,
		npmUser: null,
		avatar: null,
		operations: [],
		error: null,
		lastExecutionTime: null
	}));
	const baseUrl = computed(() => `http://127.0.0.1:${config.value?.port ?? DEFAULT_PORT}`);
	useRoute$1();
	useRouter$1();
	async function connect(token, port = DEFAULT_PORT) {
		state.value.connecting = true;
		state.value.error = null;
		try {
			const response = await $fetch$1(`http://127.0.0.1:${port}/connect`, {
				method: "POST",
				body: { token },
				timeout: 5e3
			});
			if (response.success && response.data) {
				config.value = {
					token,
					port
				};
				localStorage.setItem(STORAGE_KEY, JSON.stringify(config.value));
				state.value.connected = true;
				state.value.npmUser = response.data.npmUser;
				state.value.avatar = response.data.avatar;
				state.value.error = null;
				await refreshState();
				return true;
			} else {
				state.value.error = response.error ?? "Connection failed";
				return false;
			}
		} catch (err) {
			const message = err instanceof Error ? err.message : "Connection failed";
			if (message.includes("fetch") || message.includes("network") || message.includes("ECONNREFUSED")) state.value.error = "Could not reach connector. Is it running?";
			else if (message.includes("401") || message.includes("Unauthorized")) state.value.error = "Invalid token";
			else state.value.error = message;
			return false;
		} finally {
			state.value.connecting = false;
		}
	}
	async function reconnect() {
		if (!config.value) return false;
		return connect(config.value.token, config.value.port);
	}
	function disconnect() {
		config.value = null;
		localStorage.removeItem(STORAGE_KEY);
		state.value = {
			connected: false,
			connecting: false,
			npmUser: null,
			avatar: null,
			operations: [],
			error: null,
			lastExecutionTime: null
		};
	}
	async function refreshState() {
		if (!config.value) return;
		try {
			const response = await $fetch$1(`${baseUrl.value}/state`, {
				headers: { Authorization: `Bearer ${config.value.token}` },
				timeout: 5e3
			});
			if (response.success && response.data) {
				state.value.npmUser = response.data.npmUser;
				state.value.avatar = response.data.avatar;
				state.value.operations = response.data.operations;
				state.value.connected = true;
			}
		} catch {
			state.value.connected = false;
			state.value.error = "Connection lost";
		}
	}
	async function connectorFetch(path, options = {}) {
		if (!config.value) return null;
		try {
			return await $fetch$1(`${baseUrl.value}${path}`, {
				method: options.method ?? "GET",
				headers: { Authorization: `Bearer ${config.value.token}` },
				body: options.body,
				timeout: 3e4
			});
		} catch (err) {
			state.value.error = err instanceof Error ? err.message : "Request failed";
			return null;
		}
	}
	async function addOperation(operation) {
		const response = await connectorFetch("/operations", {
			method: "POST",
			body: operation
		});
		if (response?.success && response.data) {
			await refreshState();
			return response.data;
		}
		return null;
	}
	async function addOperations(operations) {
		const response = await connectorFetch("/operations/batch", {
			method: "POST",
			body: operations
		});
		if (response?.success && response.data) {
			await refreshState();
			return response.data;
		}
		return [];
	}
	async function removeOperation(id) {
		if ((await connectorFetch(`/operations?id=${id}`, { method: "DELETE" }))?.success) {
			await refreshState();
			return true;
		}
		return false;
	}
	async function clearOperations() {
		const response = await connectorFetch("/operations/all", { method: "DELETE" });
		if (response?.success && response.data) {
			await refreshState();
			return response.data.removed;
		}
		return 0;
	}
	async function approveOperation(id) {
		if ((await connectorFetch(`/approve?id=${id}`, { method: "POST" }))?.success) {
			await refreshState();
			return true;
		}
		return false;
	}
	async function retryOperation(id) {
		if ((await connectorFetch(`/retry?id=${id}`, { method: "POST" }))?.success) {
			await refreshState();
			return true;
		}
		return false;
	}
	async function approveAll() {
		const response = await connectorFetch("/approve-all", { method: "POST" });
		if (response?.success && response.data) {
			await refreshState();
			return response.data.approved;
		}
		return 0;
	}
	async function executeOperations(otp) {
		const response = await connectorFetch("/execute", {
			method: "POST",
			body: otp ? { otp } : void 0
		});
		if (response?.success) {
			await refreshState();
			state.value.lastExecutionTime = Date.now();
			return {
				success: true,
				otpRequired: response.data?.otpRequired
			};
		}
		return { success: false };
	}
	async function listOrgUsers(org) {
		const response = await connectorFetch(`/org/${encodeURIComponent(org)}/users`);
		return response?.success ? response.data ?? null : null;
	}
	async function listOrgTeams(org) {
		const response = await connectorFetch(`/org/${encodeURIComponent(org)}/teams`);
		return response?.success ? response.data ?? null : null;
	}
	async function listTeamUsers(scopeTeam) {
		const response = await connectorFetch(`/team/${encodeURIComponent(scopeTeam)}/users`);
		return response?.success ? response.data ?? null : null;
	}
	async function listPackageCollaborators(pkg) {
		const response = await connectorFetch(`/package/${encodeURIComponent(pkg)}/collaborators`);
		return response?.success ? response.data ?? null : null;
	}
	async function listUserPackages() {
		const response = await connectorFetch("/user/packages");
		return response?.success ? response.data ?? null : null;
	}
	async function listUserOrgs() {
		const response = await connectorFetch("/user/orgs");
		return response?.success ? response.data ?? null : null;
	}
	const pendingOperations = computed(() => state.value.operations.filter((op) => op.status === "pending"));
	const approvedOperations = computed(() => state.value.operations.filter((op) => op.status === "approved"));
	const completedOperations = computed(() => state.value.operations.filter((op) => op.status === "completed" || op.status === "failed" && !op.result?.requiresOtp));
	const activeOperations = computed(() => state.value.operations.filter((op) => op.status === "pending" || op.status === "approved" || op.status === "running" || op.status === "failed" && op.result?.requiresOtp));
	const hasOperations = computed(() => state.value.operations.length > 0);
	const hasPendingOperations = computed(() => pendingOperations.value.length > 0);
	const hasApprovedOperations = computed(() => approvedOperations.value.length > 0);
	const hasActiveOperations = computed(() => activeOperations.value.length > 0);
	const hasCompletedOperations = computed(() => completedOperations.value.length > 0);
	return {
		state: readonly(state),
		config: readonly(config),
		isConnected: computed(() => state.value.connected),
		isConnecting: computed(() => state.value.connecting),
		npmUser: computed(() => state.value.npmUser),
		avatar: computed(() => state.value.avatar),
		error: computed(() => state.value.error),
		lastExecutionTime: computed(() => state.value.lastExecutionTime),
		operations: computed(() => state.value.operations),
		pendingOperations,
		approvedOperations,
		completedOperations,
		activeOperations,
		hasOperations,
		hasPendingOperations,
		hasApprovedOperations,
		hasActiveOperations,
		hasCompletedOperations,
		connect,
		reconnect,
		disconnect,
		refreshState,
		connectorFetch,
		addOperation,
		addOperations,
		removeOperation,
		clearOperations,
		approveOperation,
		retryOperation,
		approveAll,
		executeOperations,
		listOrgUsers,
		listOrgTeams,
		listTeamUsers,
		listPackageCollaborators,
		listUserPackages,
		listUserOrgs
	};
});
var PackagesDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PackagesDropdown",
	__ssrInlineRender: true,
	props: { username: {} },
	setup(__props) {
		const { t: $t } = useI18n();
		const { listUserPackages } = useConnector();
		const isOpen = shallowRef(false);
		const isLoading = shallowRef(false);
		const packages = shallowRef([]);
		shallowRef(false);
		const error = shallowRef(null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: `/~${__props.username}`,
				class: "link-subtle font-mono text-sm inline-flex items-center gap-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("header.packages"))} <span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-carbon-chevron-down w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span>`);
					else return [createTextVNode(toDisplayString(unref($t)("header.packages")) + " ", 1), createVNode("span", {
						class: ["i-carbon-chevron-down w-3 h-3 transition-transform duration-200", { "rotate-180": unref(isOpen) }],
						"aria-hidden": "true"
					}, null, 2)];
				}),
				_: 1
			}, _parent));
			if (unref(isOpen)) {
				_push(`<div class="absolute inset-ie-0 top-full pt-2 w-64 z-50"><div class="bg-bg-elevated border border-border rounded-lg shadow-lg overflow-hidden"><div class="px-3 py-2 border-b border-border"><span class="font-mono text-xs text-fg-subtle">${ssrInterpolate(unref($t)("header.packages_dropdown.title"))}</span></div>`);
				if (unref(isLoading)) _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.packages_dropdown.loading"))}</span></div>`);
				else if (unref(error)) _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.packages_dropdown.error"))}</span></div>`);
				else if (unref(packages).length > 0) {
					_push(`<ul class="py-1 max-h-80 overflow-y-auto"><!--[-->`);
					ssrRenderList(unref(packages), (pkg) => {
						_push(`<li>`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							to: `/package/${pkg}`,
							class: "block px-3 py-2 font-mono text-sm text-fg hover:bg-bg-subtle transition-colors truncate"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(pkg)}`);
								else return [createTextVNode(toDisplayString(pkg), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.packages_dropdown.empty"))}</span></div>`);
				_push(`<div class="px-3 py-2 border-t border-border">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/~${__props.username}`,
					class: "link-subtle font-mono text-xs inline-flex items-center gap-1"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("header.packages_dropdown.view_all"))} <span class="i-carbon:arrow-right rtl-flip w-3 h-3" aria-hidden="true"${_scopeId}></span>`);
						else return [createTextVNode(toDisplayString(unref($t)("header.packages_dropdown.view_all")) + " ", 1), createVNode("span", {
							class: "i-carbon:arrow-right rtl-flip w-3 h-3",
							"aria-hidden": "true"
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$10 = PackagesDropdown_vue_vue_type_script_setup_true_lang_default.setup;
PackagesDropdown_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/PackagesDropdown.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var PackagesDropdown_default = Object.assign(PackagesDropdown_vue_vue_type_script_setup_true_lang_default, { __name: "HeaderPackagesDropdown" });
var OrgsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OrgsDropdown",
	__ssrInlineRender: true,
	props: { username: {} },
	setup(__props) {
		const { t: $t } = useI18n();
		const { listUserOrgs } = useConnector();
		const isOpen = shallowRef(false);
		const isLoading = shallowRef(false);
		const orgs = shallowRef([]);
		shallowRef(false);
		const error = shallowRef(null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: `/~${__props.username}/orgs`,
				class: "link-subtle font-mono text-sm inline-flex items-center gap-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("header.orgs"))} <span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-carbon-chevron-down w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span>`);
					else return [createTextVNode(toDisplayString(unref($t)("header.orgs")) + " ", 1), createVNode("span", {
						class: ["i-carbon-chevron-down w-3 h-3 transition-transform duration-200", { "rotate-180": unref(isOpen) }],
						"aria-hidden": "true"
					}, null, 2)];
				}),
				_: 1
			}, _parent));
			if (unref(isOpen)) {
				_push(`<div class="absolute inset-ie-0 top-full pt-2 w-56 z-50"><div class="bg-bg-elevated border border-border rounded-lg shadow-lg overflow-hidden"><div class="px-3 py-2 border-b border-border"><span class="font-mono text-xs text-fg-subtle">${ssrInterpolate(unref($t)("header.orgs_dropdown.title"))}</span></div>`);
				if (unref(isLoading)) _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.orgs_dropdown.loading"))}</span></div>`);
				else if (unref(error)) _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.orgs_dropdown.error"))}</span></div>`);
				else if (unref(orgs).length > 0) {
					_push(`<ul class="py-1 max-h-80 overflow-y-auto"><!--[-->`);
					ssrRenderList(unref(orgs), (org) => {
						_push(`<li>`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							to: `/@${org}`,
							class: "block px-3 py-2 font-mono text-sm text-fg hover:bg-bg-subtle transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` @${ssrInterpolate(org)}`);
								else return [createTextVNode(" @" + toDisplayString(org), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<div class="px-3 py-4 text-center"><span class="text-fg-muted text-sm">${ssrInterpolate(unref($t)("header.orgs_dropdown.empty"))}</span></div>`);
				_push(`<div class="px-3 py-2 border-t border-border">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/~${__props.username}/orgs`,
					class: "link-subtle font-mono text-xs inline-flex items-center gap-1"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("header.orgs_dropdown.view_all"))} <span class="i-carbon:arrow-right rtl-flip w-3 h-3" aria-hidden="true"${_scopeId}></span>`);
						else return [createTextVNode(toDisplayString(unref($t)("header.orgs_dropdown.view_all")) + " ", 1), createVNode("span", {
							class: "i-carbon:arrow-right rtl-flip w-3 h-3",
							"aria-hidden": "true"
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$9 = OrgsDropdown_vue_vue_type_script_setup_true_lang_default.setup;
OrgsDropdown_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/OrgsDropdown.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var OrgsDropdown_default = Object.assign(OrgsDropdown_vue_vue_type_script_setup_true_lang_default, { __name: "HeaderOrgsDropdown" });
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-end gap-2 px-2 py-1.5 min-w-24" }, _attrs))}><span class="font-mono text-sm text-fg-muted">${ssrInterpolate(_ctx.$t("account_menu.connect"))}</span><span class="i-carbon-chevron-down w-3 h-3 text-fg-muted" aria-hidden="true"></span></div>`);
}
var _sfc_setup$8 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/AccountMenu.server.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var AccountMenu_server_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "HeaderAccountMenu" });
function useIsMobile() {
	return useMediaQuery("(max-width: 767px)");
}
var AppHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppHeader",
	__ssrInlineRender: true,
	props: { showLogo: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		const { isConnected, npmUser } = useConnector();
		const showFullSearch = shallowRef(false);
		const showMobileMenu = shallowRef(false);
		const route = useRoute$1();
		const isMobile = useIsMobile();
		const isSearchExpandedManually = shallowRef(false);
		const searchBoxRef = useTemplateRef("searchBoxRef");
		const isOnHomePage = computed(() => route.name === "index");
		const isOnSearchPage = computed(() => route.name === "search");
		const isSearchExpanded = computed(() => isOnSearchPage.value || isSearchExpandedManually.value);
		watch(isOnSearchPage, (visible) => {
			if (!visible) return;
			searchBoxRef.value?.focus();
			nextTick(() => {
				searchBoxRef.value?.focus();
			});
		}, { flush: "sync" });
		function handleSearchBlur() {
			showFullSearch.value = false;
			if (isMobile.value && !isOnSearchPage.value) setTimeout(() => {
				isSearchExpandedManually.value = false;
			}, 150);
		}
		function handleSearchFocus() {
			showFullSearch.value = true;
		}
		onKeyStroke((e) => isKeyWithoutModifiers(e, ",") && !isEditableElement(e.target), (e) => {
			e.preventDefault();
			navigateTo("/settings");
		}, { dedupe: true });
		onKeyStroke((e) => isKeyWithoutModifiers(e, "c") && !isEditableElement(e.target) && !e.defaultPrevented, (e) => {
			e.preventDefault();
			navigateTo("/compare");
		}, { dedupe: true });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AppLogo = AppLogo_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_HeaderSearchBox = SearchBox_default;
			const _component_HeaderPackagesDropdown = PackagesDropdown_default;
			const _component_HeaderOrgsDropdown = OrgsDropdown_default;
			const _component_HeaderAccountMenu = AccountMenu_server_default;
			const _component_HeaderMobileMenu = server_placeholder_default;
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border" }, _attrs))}><nav${ssrRenderAttr("aria-label", _ctx.$t("nav.main_navigation"))} class="${ssrRenderClass([unref(isOnHomePage) ? "justify-end" : "justify-between", "container min-h-14 flex items-center gap-2"])}">`);
			if (!unref(isSearchExpanded) && !unref(isOnHomePage)) {
				_push(`<button type="button" class="sm:hidden flex-shrink-0 inline-flex items-center gap-2 font-mono text-lg font-medium text-fg hover:text-fg transition-colors duration-200 rounded"${ssrRenderAttr("aria-label", _ctx.$t("nav.tap_to_search"))}>`);
				_push(ssrRenderComponent(_component_AppLogo, { class: "w-8 h-8 rounded-lg" }, null, _parent));
				_push(`<span class="i-carbon:search w-4 h-4 text-fg-subtle" aria-hidden="true"></span></button>`);
			} else _push(`<!---->`);
			if (__props.showLogo) {
				_push(`<div class="hidden sm:flex flex-shrink-0 items-center">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/",
					"aria-label": _ctx.$t("header.home"),
					dir: "ltr",
					class: "inline-flex items-center gap-1 header-logo font-mono text-lg font-medium text-fg hover:text-fg/90 transition-colors duration-200 rounded"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(_component_AppLogo, { class: "w-8 h-8 rounded-lg" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>npmx</span>`);
						} else return [createVNode(_component_AppLogo, { class: "w-8 h-8 rounded-lg" }), createVNode("span", null, "npmx")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<span class="hidden sm:block w-1"></span>`);
			_push(`<div class="${ssrRenderClass([{ "hidden sm:flex": !unref(isSearchExpanded) }, "flex-1 flex items-center justify-center md:gap-6"])}">`);
			_push(ssrRenderComponent(_component_HeaderSearchBox, {
				ref_key: "searchBoxRef",
				ref: searchBoxRef,
				inputClass: unref(isSearchExpanded) ? "w-full" : "",
				class: { "max-w-md": !unref(isSearchExpanded) },
				onFocus: handleSearchFocus,
				onBlur: handleSearchBlur
			}, null, _parent));
			if (!unref(isSearchExpanded) && unref(isConnected) && unref(npmUser)) {
				_push(`<ul class="${ssrRenderClass([{ hidden: unref(showFullSearch) }, "hidden sm:flex items-center gap-4 sm:gap-6 list-none m-0 p-0"])}">`);
				if (unref(isConnected) && unref(npmUser)) {
					_push(`<li class="flex items-center">`);
					_push(ssrRenderComponent(_component_HeaderPackagesDropdown, { username: unref(npmUser) }, null, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(isConnected) && unref(npmUser)) {
					_push(`<li class="flex items-center">`);
					_push(ssrRenderComponent(_component_HeaderOrgsDropdown, { username: unref(npmUser) }, null, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`</ul>`);
			} else _push(`<!---->`);
			_push(`</div><div class="flex-shrink-0 flex items-center gap-0.5 sm:gap-2">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/compare",
				class: "hidden sm:inline-flex link-subtle font-mono text-sm items-center gap-2 px-2 py-1.5 hover:bg-bg-subtle focus-visible:outline-accent/70 rounded",
				"aria-keyshortcuts": "c"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("nav.compare"))} <kbd class="inline-flex items-center justify-center w-5 h-5 text-xs bg-bg-muted border border-border rounded" aria-hidden="true"${_scopeId}> c </kbd>`);
					else return [createTextVNode(toDisplayString(_ctx.$t("nav.compare")) + " ", 1), createVNode("kbd", {
						class: "inline-flex items-center justify-center w-5 h-5 text-xs bg-bg-muted border border-border rounded",
						"aria-hidden": "true"
					}, " c ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/settings",
				class: "hidden sm:inline-flex link-subtle font-mono text-sm items-center gap-2 px-2 py-1.5 hover:bg-bg-subtle focus-visible:outline-accent/70 rounded",
				"aria-keyshortcuts": ","
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("nav.settings"))} <kbd class="inline-flex items-center justify-center w-5 h-5 text-xs bg-bg-muted border border-border rounded" aria-hidden="true"${_scopeId}> , </kbd>`);
					else return [createTextVNode(toDisplayString(_ctx.$t("nav.settings")) + " ", 1), createVNode("kbd", {
						class: "inline-flex items-center justify-center w-5 h-5 text-xs bg-bg-muted border border-border rounded",
						"aria-hidden": "true"
					}, " , ")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden sm:block">`);
			_push(ssrRenderComponent(_component_HeaderAccountMenu, null, null, _parent));
			_push(`</div><button type="button" class="sm:hidden flex items-center p-2 -m-2 text-fg-subtle hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("aria-label", _ctx.$t("nav.open_menu"))}><span class="w-6 h-6 inline-block i-carbon:menu" aria-hidden="true"></span></button></div></nav>`);
			_push(ssrRenderComponent(_component_HeaderMobileMenu, {
				open: unref(showMobileMenu),
				"onUpdate:open": ($event) => isRef(showMobileMenu) ? showMobileMenu.value = $event : null
			}, null, _parent));
			_push(`</header>`);
		};
	}
});
var _sfc_setup$7 = AppHeader_vue_vue_type_script_setup_true_lang_default.setup;
AppHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var AppHeader_default = Object.assign(AppHeader_vue_vue_type_script_setup_true_lang_default, { __name: "AppHeader" });
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		provide(PageRouteSymbol, shallowReactive(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return h(props.vnode, { ref: props.vnodeRef });
		};
	}
});
const RouteProvider = defineRouteProvider();
var page_default = defineComponent({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = ref();
		inject(PageRouteSymbol, null);
		expose({ pageRef });
		inject(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return h(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: (routeProps) => {
				return h(Suspense, { suspensible: true }, { default() {
					return h(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			} });
		};
	}
});
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
var _sfc_main$1 = {
	__name: "NuxtTime",
	__ssrInlineRender: true,
	props: {
		locale: {
			type: String,
			required: false
		},
		datetime: {
			type: [
				String,
				Number,
				Date
			],
			required: true
		},
		localeMatcher: {
			type: String,
			required: false
		},
		weekday: {
			type: String,
			required: false
		},
		era: {
			type: String,
			required: false
		},
		year: {
			type: String,
			required: false
		},
		month: {
			type: String,
			required: false
		},
		day: {
			type: String,
			required: false
		},
		hour: {
			type: String,
			required: false
		},
		minute: {
			type: String,
			required: false
		},
		second: {
			type: String,
			required: false
		},
		timeZoneName: {
			type: String,
			required: false
		},
		formatMatcher: {
			type: String,
			required: false
		},
		hour12: {
			type: Boolean,
			required: false,
			default: void 0
		},
		timeZone: {
			type: String,
			required: false
		},
		calendar: {
			type: String,
			required: false
		},
		dayPeriod: {
			type: String,
			required: false
		},
		numberingSystem: {
			type: String,
			required: false
		},
		dateStyle: {
			type: String,
			required: false
		},
		timeStyle: {
			type: String,
			required: false
		},
		hourCycle: {
			type: String,
			required: false
		},
		relative: {
			type: Boolean,
			required: false
		},
		numeric: {
			type: String,
			required: false
		},
		relativeStyle: {
			type: String,
			required: false
		},
		title: {
			type: [Boolean, String],
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const el = getCurrentInstance()?.vnode.el;
		const renderedDate = el?.getAttribute("datetime");
		const _locale = el?.getAttribute("data-locale");
		const nuxtApp = useNuxtApp();
		const date = computed(() => {
			const date2 = props.datetime;
			if (renderedDate && nuxtApp.isHydrating) return new Date(renderedDate);
			if (!props.datetime) return /* @__PURE__ */ new Date();
			return new Date(date2);
		});
		const now = ref(/* @__PURE__ */ new Date());
		const formatter = computed(() => {
			const { locale: propsLocale, relative, relativeStyle, ...rest } = props;
			if (relative) return new Intl.RelativeTimeFormat(_locale ?? propsLocale, {
				...rest,
				style: relativeStyle
			});
			return new Intl.DateTimeFormat(_locale ?? propsLocale, rest);
		});
		const formattedDate = computed(() => {
			if (!props.relative) return formatter.value.format(date.value);
			const diffInSeconds = (date.value.getTime() - now.value.getTime()) / 1e3;
			const units = [
				{
					unit: "second",
					seconds: 1,
					threshold: 60
				},
				{
					unit: "minute",
					seconds: 60,
					threshold: 60
				},
				{
					unit: "hour",
					seconds: 3600,
					threshold: 24
				},
				{
					unit: "day",
					seconds: 86400,
					threshold: 30
				},
				{
					unit: "month",
					seconds: 2592e3,
					threshold: 12
				},
				{
					unit: "year",
					seconds: 31536e3,
					threshold: Infinity
				}
			];
			const { unit, seconds } = units.find(({ seconds: seconds2, threshold }) => Math.abs(diffInSeconds / seconds2) < threshold) || units[units.length - 1];
			const value = diffInSeconds / seconds;
			return formatter.value.format(Math.round(value), unit);
		});
		const isoDate = computed(() => date.value.toISOString());
		const title = computed(() => props.title === true ? isoDate.value : typeof props.title === "string" ? props.title : void 0);
		const dataset = {};
		for (const prop in props) if (prop !== "datetime") {
			if (props?.[prop]) {
				const propInKebabCase = prop.split(/(?=[A-Z])/).join("-");
				dataset[`data-${propInKebabCase}`] = props?.[prop];
			}
		}
		onPrehydrate("(e=>{let t=window._nuxtTimeNow||=Date.now(),n=(e,t)=>t>0?e[0].toUpperCase()+e.slice(1):e,r=new Date(e.getAttribute(`datetime`)),i={};for(let t of e.getAttributeNames())if(t.startsWith(`data-`)){let r=t.slice(5).split(`-`).map(n).join(``);r===`relativeStyle`&&(r=`style`),i[r]=e.getAttribute(t)}if(i.relative){let n=(r.getTime()-t)/1e3,a=[{unit:`second`,seconds:1,threshold:60},{unit:`minute`,seconds:60,threshold:60},{unit:`hour`,seconds:3600,threshold:24},{unit:`day`,seconds:86400,threshold:30},{unit:`month`,seconds:2592e3,threshold:12},{unit:`year`,seconds:31536e3,threshold:1/0}],{unit:o,seconds:s}=a.find(({seconds:e,threshold:t})=>Math.abs(n/e)<t)||a[a.length-1],c=n/s;e.textContent=new Intl.RelativeTimeFormat(i.locale,i).format(Math.round(c),o)}else e.textContent=new Intl.DateTimeFormat(i.locale,i).format(r)})", "WFaGyVfuXU");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<time${ssrRenderAttrs(mergeProps(dataset, {
				datetime: isoDate.value,
				title: title.value
			}, _attrs))}>${ssrInterpolate(formattedDate.value)}</time>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.3.0_@parcel+watcher@2.5.6_@types+node@24.10.9_@upstash+redis@1.36.1_@vercel+kv@3_749bc52af51d11038cdc08d521e680c5/node_modules/nuxt/dist/app/components/nuxt-time.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var nuxt_time_default = _sfc_main$1;
var BuildEnvironment_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BuildEnvironment",
	__ssrInlineRender: true,
	props: { footer: { type: Boolean } },
	setup(__props) {
		const { locale } = useI18n();
		const buildInfo = useAppConfig().buildInfo;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_NuxtTime = nuxt_time_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: ["font-mono text-xs text-fg-muted flex items-center gap-2 motion-safe:animate-fade-in motion-safe:animate-fill-both", __props.footer ? "mt-4 justify-start" : "mb-8 justify-center"],
				style: { "animation-delay": "0.05s" }
			}, _attrs))}>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "built_at",
				scope: "global"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtTime, {
						datetime: unref(buildInfo).time,
						locale: unref(locale),
						relative: ""
					}, null, _parent, _scopeId));
					else return [createVNode(_component_NuxtTime, {
						datetime: unref(buildInfo).time,
						locale: unref(locale),
						relative: ""
					}, null, 8, ["datetime", "locale"])];
				}),
				_: 1
			}, _parent));
			_push(`<span>·</span>`);
			if (unref(buildInfo).env === "release") _push(ssrRenderComponent(_component_NuxtLink, {
				external: "",
				href: `https://github.com/npmx-dev/npmx.dev/tag/v${unref(buildInfo).version}`,
				target: "_blank",
				class: "hover:text-fg transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` v${ssrInterpolate(unref(buildInfo).version)}`);
					else return [createTextVNode(" v" + toDisplayString(unref(buildInfo).version), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<span class="tracking-wider">${ssrInterpolate(unref(buildInfo).env)}</span>`);
			if (unref(buildInfo).commit && unref(buildInfo).branch !== "release") {
				_push(`<!--[--><span>·</span>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					external: "",
					href: `https://github.com/npmx-dev/npmx.dev/commit/${unref(buildInfo).commit}`,
					target: "_blank",
					class: "hover:text-fg transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(buildInfo).shortCommit)}`);
						else return [createTextVNode(toDisplayString(unref(buildInfo).shortCommit), 1)];
					}),
					_: 1
				}, _parent));
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$5 = BuildEnvironment_vue_vue_type_script_setup_true_lang_default.setup;
BuildEnvironment_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BuildEnvironment.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var BuildEnvironment_default = Object.assign(BuildEnvironment_vue_vue_type_script_setup_true_lang_default, { __name: "BuildEnvironment" });
var AppFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const isHome = computed(() => route.name === "index");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BuildEnvironment = BuildEnvironment_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-border mt-auto" }, _attrs))}><div class="container py-3 sm:py-8 flex flex-col gap-2 sm:gap-4 text-fg-subtle text-sm"><div class="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-baseline justify-between gap-2 sm:gap-4"><div><p class="font-mono text-balance m-0 hidden sm:block">${ssrInterpolate(_ctx.$t("tagline"))}</p>`);
			if (!unref(isHome)) _push(ssrRenderComponent(_component_BuildEnvironment, { footer: "" }, null, _parent));
			else _push(`<!---->`);
			_push(`</div><div class="hidden sm:flex items-center gap-6">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "link-subtle font-mono text-xs flex items-center"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("footer.about"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("footer.about")), 1)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/privacy",
				class: "link-subtle font-mono text-xs min-h-11 flex items-center gap-1 lowercase"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("privacy_policy.title"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("privacy_policy.title")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<a href="https://docs.npmx.dev" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-xs flex items-center gap-1">${ssrInterpolate(_ctx.$t("footer.docs"))} <span class="i-carbon:launch rtl-flip w-3 h-3" aria-hidden="true"></span></a><a href="https://repo.npmx.dev" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-xs flex items-center gap-1">${ssrInterpolate(_ctx.$t("footer.source"))} <span class="i-carbon:launch rtl-flip w-3 h-3" aria-hidden="true"></span></a><a href="https://social.npmx.dev" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-xs flex items-center gap-1">${ssrInterpolate(_ctx.$t("footer.social"))} <span class="i-carbon:launch rtl-flip w-3 h-3" aria-hidden="true"></span></a><a href="https://chat.npmx.dev" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-xs flex items-center gap-1">${ssrInterpolate(_ctx.$t("footer.chat"))} <span class="i-carbon:launch rtl-flip w-3 h-3" aria-hidden="true"></span></a></div></div><p class="text-xs text-fg-muted text-center sm:text-start m-0"><span class="sm:hidden">${ssrInterpolate(_ctx.$t("non_affiliation_disclaimer"))}</span><span class="hidden sm:inline">${ssrInterpolate(_ctx.$t("trademark_disclaimer"))}</span></p></div></footer>`);
		};
	}
});
var _sfc_setup$4 = AppFooter_vue_vue_type_script_setup_true_lang_default.setup;
AppFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AppFooter_default = Object.assign(AppFooter_vue_vue_type_script_setup_true_lang_default, { __name: "AppFooter" });
var scrollThreshold = 300;
var ScrollToTop_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollToTop",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const excludedRoutes = new Set(["index", "code"]);
		const isActive = computed(() => !excludedRoutes.has(route.name));
		const isMounted = useMounted();
		const isVisible = shallowRef(false);
		const { isSupported: supportsScrollStateQueries } = useCssSupports("container-type", "scroll-state", { ssrValue: false });
		function onScroll() {
			if (!supportsScrollStateQueries.value) return;
			isVisible.value = (void 0).scrollY > scrollThreshold;
		}
		useEventListener("scroll", onScroll, { passive: true });
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(isActive) && unref(supportsScrollStateQueries)) _push(`<button${ssrRenderAttrs(mergeProps({
				type: "button",
				class: "scroll-to-top-css fixed bottom-4 inset-ie-4 z-50 w-12 h-12 bg-bg-elevated border border-border rounded-full shadow-lg md:hidden flex items-center justify-center text-fg-muted hover:text-fg transition-colors active:scale-95",
				"aria-label": _ctx.$t("common.scroll_to_top")
			}, _attrs))} data-v-bcb75dc5><span class="i-carbon:arrow-up w-5 h-5" aria-hidden="true" data-v-bcb75dc5></span></button>`);
			else if (unref(isActive) && unref(isMounted) && unref(isVisible)) _push(`<button type="button" class="fixed bottom-4 inset-ie-4 z-50 w-12 h-12 bg-bg-elevated border border-border rounded-full shadow-lg md:hidden flex items-center justify-center text-fg-muted hover:text-fg transition-colors active:scale-95"${ssrRenderAttr("aria-label", _ctx.$t("common.scroll_to_top"))} data-v-bcb75dc5><span class="i-carbon:arrow-up w-5 h-5" aria-hidden="true" data-v-bcb75dc5></span></button>`);
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$3 = ScrollToTop_vue_vue_type_script_setup_true_lang_default.setup;
ScrollToTop_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ScrollToTop_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ScrollToTop_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-bcb75dc5"]]), { __name: "ScrollToTop" });
function initPreferencesOnPrehydrate() {
	onPrehydrate("(()=>{let e={light:{coral:`oklch(0.70 0.19 14.75)`,amber:`oklch(0.8 0.25 84.429)`,emerald:`oklch(0.70 0.17 166.95)`,sky:`oklch(0.70 0.15 230.318)`,violet:`oklch(0.70 0.17 286.067)`,magenta:`oklch(0.75 0.18 330)`},dark:{coral:`oklch(0.704 0.177 14.75)`,amber:`oklch(0.828 0.165 84.429)`,emerald:`oklch(0.792 0.153 166.95)`,sky:`oklch(0.787 0.128 230.318)`,violet:`oklch(0.78 0.148 286.067)`,magenta:`oklch(0.78 0.15 330)`}},t=new Set([`npm`,`pnpm`,`yarn`,`bun`,`deno`,`vlt`]),n=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`),r=document.documentElement.dataset.theme===`light`?`light`:`dark`,i=n.accentColorId;i&&e[r][i]&&document.documentElement.style.setProperty(`--accent-color`,e[r][i]);let a=n.preferredBackgroundTheme;a&&(document.documentElement.dataset.bgTheme=a);let o=localStorage.getItem(`npmx-pm`),s=`npm`;if(o)try{let e=JSON.parse(o);t.has(e)&&(s=e)}catch{t.has(o)&&(s=o)}document.documentElement.dataset.pm=s,document.documentElement.dataset.collapsed=n.sidebar?.collapsed?.join(` `)??``})");
}
const useColorMode = () => {
	return useState("color-mode").value;
};
function setJsonLd(schema) {
	useHead$1({ script: (Array.isArray(schema) ? schema : [schema]).map((s, i) => ({
		type: "application/ld+json",
		innerHTML: JSON.stringify(s),
		key: `json-ld-${i}`
	})) });
}
function createWebSiteSchema(options) {
	const siteUrl = "https://npmx.dev";
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "npmx",
		"url": siteUrl,
		"description": "A fast, modern browser for the npm registry",
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": `${siteUrl}/search?q={search_term_string}`
			},
			"query": "required name=search_term_string"
		}
	};
}
var app_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "app",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const router = useRouter$1();
		const { locale, locales } = useI18n();
		initPreferencesOnPrehydrate();
		const isHomepage = computed(() => route.name === "index");
		const showKbdHints = shallowRef(false);
		const localeMap = locales.value.reduce((acc, l) => {
			acc[l.code] = l.dir ?? "ltr";
			return acc;
		}, {});
		const darkMode = usePreferredDark();
		const colorMode = useColorMode();
		const colorScheme = computed(() => {
			return {
				system: darkMode ? "dark light" : "light dark",
				light: "only light",
				dark: "only dark"
			}[colorMode.preference];
		});
		useHead$1({
			htmlAttrs: {
				"lang": () => locale.value,
				"dir": () => localeMap[locale.value] ?? "ltr",
				"data-kbd-hints": () => showKbdHints.value
			},
			titleTemplate: (titleChunk) => {
				return titleChunk ? titleChunk : "npmx - Better npm Package Browser";
			},
			meta: [{
				name: "color-scheme",
				content: colorScheme
			}]
		});
		setJsonLd(createWebSiteSchema());
		onKeyDown("/", (e) => {
			if (isEditableElement(e.target)) return;
			e.preventDefault();
			const searchInput = (void 0).querySelector("input[type=\"search\"], input[name=\"q\"]");
			if (searchInput) {
				searchInput.focus();
				return;
			}
			router.push("/search");
		}, { dedupe: true });
		onKeyDown("?", (e) => {
			if (isEditableElement(e.target)) return;
			e.preventDefault();
			showKbdHints.value = true;
		}, { dedupe: true });
		onKeyUp("?", (e) => {
			if (isEditableElement(e.target)) return;
			e.preventDefault();
			showKbdHints.value = false;
		}, { dedupe: true });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtPwaAssets = NuxtPwaAssets_default;
			const _component_AppHeader = AppHeader_default;
			const _component_NuxtPage = page_default;
			const _component_AppFooter = AppFooter_default;
			const _component_ScrollToTop = ScrollToTop_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-bg text-fg" }, _attrs))} data-v-4f95d650>`);
			_push(ssrRenderComponent(_component_NuxtPwaAssets, null, null, _parent));
			_push(`<a href="#main-content" class="skip-link font-mono" data-v-4f95d650>${ssrInterpolate(_ctx.$t("common.skip_link"))}</a>`);
			_push(ssrRenderComponent(_component_AppHeader, { "show-logo": !unref(isHomepage) }, null, _parent));
			_push(`<div id="main-content" class="flex-1 flex flex-col" data-v-4f95d650>`);
			_push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
			_push(ssrRenderComponent(_component_ScrollToTop, null, null, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$2 = app_vue_vue_type_script_setup_true_lang_default.setup;
app_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = /* @__PURE__ */ _plugin_vue_export_helper_default(app_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-4f95d650"]]);
var error_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "error",
	__ssrInlineRender: true,
	props: { error: {} },
	setup(__props) {
		const props = __props;
		const status = computed(() => props.error.statusCode || 500);
		const statusText = computed(() => {
			if (props.error.statusMessage) return props.error.statusMessage;
			switch (status.value) {
				case 404: return "Page not found";
				case 500: return "Internal server error";
				case 503: return "Service unavailable";
				default: return "Something went wrong";
			}
		});
		useHead$1({ title: `${status.value} - ${statusText.value}` });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AppHeader = AppHeader_default;
			const _component_AppFooter = AppFooter_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-bg text-fg" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
			_push(`<main class="flex-1 container flex flex-col items-center justify-center py-20 text-center"><p class="font-mono text-8xl sm:text-9xl font-medium text-fg-subtle mb-4">${ssrInterpolate(unref(status))}</p><h1 class="font-mono text-2xl sm:text-3xl font-medium mb-4">${ssrInterpolate(unref(statusText))}</h1>`);
			if (__props.error.message && __props.error.message !== unref(statusText)) _push(`<p class="text-fg-muted text-base max-w-md mb-8">${ssrInterpolate(__props.error.message)}</p>`);
			else _push(`<!---->`);
			_push(`<button type="button" class="font-mono text-sm px-6 py-3 bg-fg text-bg rounded-lg transition-all duration-200 hover:bg-fg/90 active:scale-95"> go home </button></main>`);
			_push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$1 = error_vue_vue_type_script_setup_true_lang_default.setup;
error_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var error_default = error_vue_vue_type_script_setup_true_lang_default;
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const IslandRenderer = defineAsyncComponent(() => import('./island-renderer-DGOIHoh7.mjs').then((r) => r.default || r));
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		provide(PageRouteSymbol, useRoute$1());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
		const error = /* @__PURE__ */ useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		onErrorCaptured((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				onServerPrefetch(() => p);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderSuspense(_push, {
				default: () => {
					if (unref(abortRender)) _push(`<div></div>`);
					else if (unref(error)) _push(ssrRenderComponent(unref(error_default), { error: unref(error) }, null, _parent));
					else if (unref(islandContext)) _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
					else if (unref(SingleRenderer)) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
					else _push(ssrRenderComponent(unref(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.3.0_@parcel+watcher@2.5.6_@types+node@24.10.9_@upstash+redis@1.36.1_@vercel+kv@3_749bc52af51d11038cdc08d521e680c5/node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var nuxt_root_default = _sfc_main;
var entry = async function createNuxtAppServer(ssrContext) {
	const vueApp = createApp(nuxt_root_default);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt__2Fhome_2Frunner_2Fwork_2Fnpmx_dev_2Fnpmx_dev_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$1(error);
	}
	if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) throw new Error("skipping render");
	return vueApp;
};
var entry_default = ((ssrContext) => entry(ssrContext));

export { useAppConfig as A, server_placeholder_default as B, noCorrect as C, setHeadOgImagePrebuilt as D, getOgImagePath as E, useRequestEvent as F, useRouter as G, useHead$1 as H, useState as I, navigateTo as J, createError$1 as K, useAsyncData as L, useFetch as M, useLazyFetch as N, useOgImageRuntimeConfig as O, onPrehydrate as P, useLazyAsyncData as R, isKeyWithoutModifiers as S, createOgImageMeta as T, useSeoMeta$1 as U, injectHead as V, useRoute as W, useRouter$1 as X, useRoute$1 as Y, useNuxtApp as Z, useSupported as _, useConnector as a, useDebounceFn as b, onKeyStroke as c, useEventListener as d, entry_default as default, useFocus as f, useResizeObserver as g, useMutationObserver as h, _plugin_vue_export_helper_default as i, nuxt_link_default as j, useI18n as k, useClipboard as l, useMediaQuery as m, BuildEnvironment_default as n, onClickOutside as o, useLocalStorage as p, showError as q, nuxt_time_default as r, onKeyDown as s, useColorMode as t, useElementSize as u, createSharedComposable as v, AppLogo_default as w, isEditableElement as x, tryOnScopeDispose as y, client_only_default as z };
//# sourceMappingURL=server.mjs.map

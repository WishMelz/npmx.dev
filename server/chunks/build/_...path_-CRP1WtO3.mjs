import { g as useRoute, a as useRouter, e as useNuxtApp, T as useRequestEvent, w as navigateTo, b as useSeoMeta$1, n as nuxt_link_default, q as packageRoute } from './server.mjs';
import { u as useLazyFetch } from './fetch-BX-wNfYP.mjs';
import { u as usePackage } from './usePackage-BKsfNl2r.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { V as VersionSelector_default } from './VersionSelector-CfAJ286A.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-CUGWiqJT.mjs';
import { defineComponent, computed, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { A as assertValidPackageName, aW as fetchLatestVersion, aX as setResponseHeader } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'vue-router';
import 'perfect-debounce';
import 'devalue';
import 'unhead/plugins';
import '@vue/shared';
import './versions-DO0mMTkZ.mjs';
import 'semver';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
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
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

var ____path__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[...path]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute();
		const router = useRouter();
		const parsedRoute = computed(() => {
			const segments = route.params.path?.filter(Boolean);
			const vIndex = segments.indexOf("v");
			if (vIndex === -1 || vIndex >= segments.length - 1) return {
				packageName: segments.join("/"),
				version: null
			};
			return {
				packageName: segments.slice(0, vIndex).join("/"),
				version: segments.slice(vIndex + 1).join("/")
			};
		});
		const packageName = computed(() => parsedRoute.value.packageName);
		const requestedVersion = computed(() => parsedRoute.value.version);
		if (packageName.value) assertValidPackageName(packageName.value);
		const { data: pkg } = usePackage(packageName);
		const latestVersion = computed(() => pkg.value?.["dist-tags"]?.latest ?? null);
		if (!requestedVersion.value && packageName.value) {
			const app = useNuxtApp();
			const version = ([__temp, __restore] = withAsyncContext(() => fetchLatestVersion(packageName.value)), __temp = await __temp, __restore(), __temp);
			if (version) {
				setResponseHeader(useRequestEvent(), "Cache-Control", "no-cache");
				const pathSegments = [
					...packageName.value.split("/"),
					"v",
					version
				];
				app.runWithContext(() => navigateTo({
					name: "docs",
					params: { path: pathSegments }
				}, { redirectCode: 302 }));
			}
		}
		watch([
			requestedVersion,
			latestVersion,
			packageName
		], ([version, latest, name]) => {
			if (!version && latest && name) {
				const pathSegments = [
					...name.split("/"),
					"v",
					latest
				];
				router.replace({
					name: "docs",
					params: { path: pathSegments }
				});
			}
		}, { immediate: true });
		const resolvedVersion = computed(() => requestedVersion.value ?? latestVersion.value);
		const docsUrl = computed(() => {
			if (!packageName.value || !resolvedVersion.value) return null;
			return `/api/registry/docs/${packageName.value}/v/${resolvedVersion.value}`;
		});
		const shouldFetch = computed(() => !!docsUrl.value);
		const { data: docsData, status: docsStatus } = useLazyFetch(() => docsUrl.value ?? "", {
			watch: [docsUrl],
			immediate: shouldFetch.value,
			server: false,
			default: () => ({
				package: packageName.value,
				version: resolvedVersion.value ?? "",
				html: "",
				toc: null,
				status: "missing",
				message: "Docs are not available for this version."
			})
		}, "$9hbk3JExBN");
		const pageTitle = computed(() => {
			if (!packageName.value) return "API Docs - npmx";
			if (!resolvedVersion.value) return `${packageName.value} docs - npmx`;
			return `${packageName.value}@${resolvedVersion.value} docs - npmx`;
		});
		useSeoMeta$1({
			title: () => pageTitle.value,
			ogTitle: () => pageTitle.value,
			twitterTitle: () => pageTitle.value,
			description: () => pkg.value?.license ?? "",
			ogDescription: () => pkg.value?.license ?? "",
			twitterDescription: () => pkg.value?.license ?? ""
		});
		defineOgImageComponent("Default", {
			title: () => `${pkg.value?.name ?? "Package"} - Docs`,
			description: () => pkg.value?.license ?? "",
			primaryColor: "#60a5fa"
		});
		const showLoading = computed(() => docsStatus.value === "pending" || docsStatus.value === "idle" && docsUrl.value !== null);
		const showEmptyState = computed(() => docsData.value?.status !== "ok");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_VersionSelector = VersionSelector_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-page flex-1 flex flex-col" }, _attrs))}><h1 class="sr-only">${ssrInterpolate(unref(packageName))} API Documentation</h1><header aria-label="Package documentation header" class="docs-header sticky z-10 border-b border-border"><div class="absolute inset-0 bg-bg/90 backdrop-blur"></div><div class="relative px-4 sm:px-6 lg:px-8 py-4 z-1"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3 min-w-0">`);
			if (unref(packageName)) _push(ssrRenderComponent(_component_NuxtLink, {
				to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName)),
				class: "font-mono text-lg sm:text-xl font-semibold text-fg hover:text-fg-muted transition-colors truncate"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(packageName))}`);
					else return [createTextVNode(toDisplayString(unref(packageName)), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(resolvedVersion) && unref(pkg)?.versions && unref(pkg)?.["dist-tags"]) _push(ssrRenderComponent(_component_VersionSelector, {
				"package-name": unref(packageName),
				"current-version": unref(resolvedVersion),
				versions: unref(pkg).versions,
				"dist-tags": unref(pkg)["dist-tags"],
				"url-pattern": `/package-docs/${unref(packageName)}/v/{version}`
			}, null, _parent));
			else if (unref(resolvedVersion)) _push(`<span class="text-fg-subtle font-mono text-sm shrink-0">${ssrInterpolate(unref(resolvedVersion))}</span>`);
			else _push(`<!---->`);
			_push(`</div><div class="flex items-center gap-3 shrink-0"><span class="text-xs px-2 py-1 rounded badge-green border border-badge-green/50"> API Docs </span></div></div></div></header><div class="flex" dir="ltr">`);
			if (unref(docsData)?.toc && !unref(showEmptyState)) _push(`<aside class="hidden lg:block w-64 xl:w-72 shrink-0 border-ie border-border"><div class="docs-sidebar sticky overflow-y-auto p-4"><h2 class="text-xs font-semibold text-fg-subtle uppercase tracking-wider mb-4"> Contents </h2><div class="toc-content">${unref(docsData).toc ?? ""}</div></div></aside>`);
			else _push(`<!---->`);
			_push(`<main class="flex-1 min-w-0">`);
			if (unref(showLoading)) {
				_push(`<div class="p-6 sm:p-8 lg:p-12 space-y-4">`);
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-8 w-64 rounded" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full max-w-2xl rounded" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-5/6 max-w-2xl rounded" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-3/4 max-w-2xl rounded" }, null, _parent));
				_push(`</div>`);
			} else if (unref(showEmptyState)) {
				_push(`<div class="p-6 sm:p-8 lg:p-12"><div class="max-w-xl rounded-lg border border-border bg-bg-muted p-6"><h2 class="font-mono text-lg mb-2">${ssrInterpolate(_ctx.$t("package.docs.not_available"))}</h2><p class="text-fg-subtle text-sm">${ssrInterpolate(unref(docsData)?.message ?? _ctx.$t("package.docs.not_available_detail"))}</p><div class="flex gap-4 mt-4">`);
				if (unref(packageName)) _push(ssrRenderComponent(_component_NuxtLink, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName)),
					class: "link-subtle font-mono text-sm"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` View package `);
						else return [createTextVNode(" View package ")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div></div></div>`);
			} else _push(`<div class="docs-content p-6 sm:p-8 lg:p-12">${unref(docsData)?.html ?? ""}</div>`);
			_push(`</main></div></div>`);
		};
	}
});
var _sfc_setup = ____path__vue_vue_type_script_setup_true_lang_default.setup;
____path__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package-docs/[...path].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____path__default = ____path__vue_vue_type_script_setup_true_lang_default;

export { ____path__default as default };
//# sourceMappingURL=_...path_-CRP1WtO3.mjs.map

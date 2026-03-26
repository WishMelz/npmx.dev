import { d as useRoute, i as useRouter, u as useI18n, c as useNuxtApp, Z as useRequestEvent, F as navigateTo, a as useSeoMeta$1, n as nuxt_link_default, w as packageRoute } from './server-placeholder-C9fYItBT.mjs';
import { u as useLazyFetch } from './fetch-CVxFI0ck.mjs';
import { u as usePackage } from './usePackage-RzwDULD4.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { u as usePackageHeaderHeight, H as Header_default } from './Header-ca9VNABN.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-DdKo1i2Y.mjs';
import { defineComponent, computed, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { y as assertValidPackageName, b7 as fetchLatestVersion, aA as setResponseHeader } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'devalue';
import 'perfect-debounce';
import './asyncData-Dr04OizO.mjs';
import './App-BNEn-XjJ.mjs';
import '@floating-ui/vue';
import './useNumberFormatter-6MIdB6Qd.mjs';
import './CopyToClipboardButton-TTydHqo-.mjs';
import './likes-xTtdlbfa.mjs';
import './versions-c9k_hFa5.mjs';
import 'semver';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import '@jsr/deno__doc';
import 'valibot';
import 'fast-npm-meta';
import 'node:crypto';
import 'validate-npm-package-name';
import '@shikijs/primitive';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'gray-matter';
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
import 'vue-router';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

//#region app/pages/package-docs/[...path].vue?vue&type=script&setup=true&lang.ts
var ____path__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[...path]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute();
		const router = useRouter();
		const { t } = useI18n();
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
				message: t("package.docs.default_not_available")
			})
		}, "$9hbk3JExBN");
		const latestVersionDetailed = computed(() => {
			if (!pkg.value) return null;
			const latestTag = pkg.value["dist-tags"]?.latest;
			if (!latestTag) return null;
			return pkg.value.versions[latestTag] ?? null;
		});
		const versionUrlPattern = computed(() => `/package-docs/${pkg.value?.name || packageName.value}/v/{version}`);
		const pageTitle = computed(() => {
			if (!packageName.value) return t("package.docs.page_title");
			if (!resolvedVersion.value) return t("package.docs.page_title_name", { name: packageName.value });
			return t("package.docs.page_title_version", { name: `${packageName.value}@${resolvedVersion.value}` });
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
			title: () => t("package.docs.og_title", { name: pkg.value?.name ?? "Package" }),
			description: () => pkg.value?.license ?? "",
			primaryColor: "#60a5fa"
		});
		const showLoading = computed(() => docsStatus.value === "pending" || docsStatus.value === "idle" && docsUrl.value !== null);
		const showEmptyState = computed(() => docsData.value?.status !== "ok");
		const packageHeaderHeight = usePackageHeaderHeight();
		const stickyStyle = computed(() => {
			return { "--combined-header-height": `${56 + (packageHeaderHeight.value || 44)}px` };
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageHeader = Header_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "docs-page flex-1 flex flex-col",
				style: unref(stickyStyle)
			}, _attrs))}>`);
			_push(ssrRenderComponent(_component_PackageHeader, {
				pkg: unref(pkg),
				"resolved-version": unref(resolvedVersion),
				"display-version": unref(pkg)?.requestedVersion,
				"latest-version": unref(latestVersionDetailed),
				"version-url-pattern": unref(versionUrlPattern),
				page: "docs"
			}, null, _parent));
			_push(`<div class="flex" dir="ltr">`);
			if (unref(docsData)?.toc && !unref(showEmptyState)) _push(`<aside class="hidden lg:block w-64 xl:w-72 shrink-0 border-ie border-border"><div class="docs-sidebar sticky overflow-y-auto p-4"><h2 class="text-xs font-semibold text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(_ctx.$t("package.docs.contents"))}</h2><div class="toc-content">${unref(docsData).toc ?? ""}</div></div></aside>`);
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
						if (_push) _push(`${ssrInterpolate(_ctx.$t("package.docs.view_package"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("package.docs.view_package")), 1)];
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
//#endregion
//#region app/pages/package-docs/[...path].vue
var _sfc_setup = ____path__vue_vue_type_script_setup_true_lang_default.setup;
____path__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package-docs/[...path].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____path__default = ____path__vue_vue_type_script_setup_true_lang_default;

export { ____path__default as default };
//# sourceMappingURL=_...path_-CTOujMEV.mjs.map

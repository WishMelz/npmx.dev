import { i as _plugin_vue_export_helper_default, k as useI18n, X as useRouter$1, d as useEventListener, N as useLazyFetch, K as createError$1, l as useClipboard, M as useFetch, H as useHead$1, U as useSeoMeta$1, c as onKeyStroke, J as navigateTo, S as isKeyWithoutModifiers, x as isEditableElement, j as nuxt_link_default, z as client_only_default, Y as useRoute$1, v as createSharedComposable, p as useLocalStorage, m as useMediaQuery, o as onClickOutside, t as useColorMode, a as useConnector, C as noCorrect, P as onPrehydrate, B as server_placeholder_default } from './server.mjs';
import { u as useResolvedVersion, a as useRepoMeta } from './useRepoMeta-B_K3z5Dv.mjs';
import { u as useCachedFetch, N as NPM_REGISTRY } from './useCachedFetch-B1uvSFXX.mjs';
import { u as usePackage } from './usePackage-BXGEuekC.mjs';
import { A as App_default } from './App-ao9FX9qi.mjs';
import { b as useAccentColor, a as useSettings } from './useSettings-rf2hWHFQ.mjs';
import { D as DateTime_default } from './DateTime-BZR-7EUH.mjs';
import { u as useMarkdown, P as ProvenanceBadge_default } from './useMarkdown-VT0m3PMc.mjs';
import { f as formatBytes, a as formatCompactNumber, d as decodeHtmlEntities } from './formatters-CMCwf4t3.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { g as getDependencyCount, u as useCssVariables, l as lightenOklch, D as DownloadAnalytics_default } from './DownloadAnalytics-Cw74_EQM.mjs';
import { getVersions } from 'fast-npm-meta';
import { compare, prerelease, maxSatisfying, gt, diff, major, minor } from 'semver';
import { b as buildVersionToTagsMap, f as filterExcludedTags, g as getPrereleaseChannel, i as isSameVersionGroup, a as getVersionGroupKey, c as getVersionGroupLabel } from './versions-BaJFJggK.mjs';
import { R as Readme_default, S as SkeletonInline_default } from './SkeletonInline-D4ycEi2C.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-DjwIIYSm.mjs';
import { defineComponent, useTemplateRef, shallowRef, computed, withAsyncContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, toValue, useId, resolveComponent, watch, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vShow, withModifiers, isRef, vModelText, nextTick, resolveDynamicComponent, createPropsRestProxy, renderSlot, useSSRContext } from 'vue';
import { t as assertValidPackageName, ab as joinURL, bt as areUrlsEquivalent, bu as isBinaryOnlyPackage, bv as isCreatePackage, aM as encodePackageName, bw as parseLicenseExpression, bx as SEVERITY_TEXT_COLORS, by as getHighestSeverity, bz as getCreateShortName, aL as mapWithConcurrency } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderTeleport, ssrRenderStyle, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { VueUiSparkline } from 'vue-data-ui/vue-ui-sparkline';
import 'perfect-debounce';
import 'devalue';
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
import 'validate-npm-package-name';
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
import '@floating-ui/vue';
import './frameworks-BKkcLNOX.mjs';

function useModal(modalId) {
	const getModal = () => (void 0).querySelector(`#${modalId}`);
	function open() {
		const modal = getModal();
		if (modal) setTimeout(() => {
			modal.showModal();
		});
	}
	function close() {
		const modal = getModal();
		if (modal) modal.close();
	}
	return {
		open,
		close
	};
}

var allVersionsCache = /* @__PURE__ */ new Map();
async function fetchAllPackageVersions(packageName) {
	const cached = allVersionsCache.get(packageName);
	if (cached) return cached;
	const promise = (async () => {
		const data = await getVersions(packageName, { metadata: true });
		return Object.entries(data.versionsMeta).map(([version, meta]) => ({
			version,
			time: meta.time,
			hasProvenance: meta.provenance === "trustedPublisher" || meta.provenance === true,
			deprecated: meta.deprecated
		})).sort((a, b) => compare(b.version, a.version));
	})();
	allVersionsCache.set(packageName, promise);
	return promise;
}

var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_SkeletonInline = SkeletonInline_default;
	const _component_SkeletonBlock = SkeletonBlock_default;
	_push(`<article${ssrRenderAttrs(mergeProps({
		"aria-busy": "true",
		"aria-label": _ctx.$t("package.skeleton.loading"),
		class: "motion-safe:animate-fade-in"
	}, _attrs))}><header class="mb-8 pb-8 border-b border-border"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"><div class="flex-1 min-w-0"><h1 class="font-mono text-2xl sm:text-3xl font-medium mb-2">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-9 w-48" }, null, _parent));
	_push(`</h1><div class="relative max-w-2xl min-h-[4.5rem]"><div class="space-y-2">`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-4/5" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-3/5" }, null, _parent));
	_push(`</div></div></div>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "shrink-0 h-8 w-20 rounded-md" }, null, _parent));
	_push(`</div><dl class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6"><div class="space-y-1"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.skeleton.license"))}</dt><dd class="font-mono text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-12" }, null, _parent));
	_push(`</dd></div><div class="space-y-1"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.skeleton.weekly"))}</dt><dd class="font-mono text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-20" }, null, _parent));
	_push(`</dd></div><div class="space-y-1"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.skeleton.size"))}</dt><dd class="font-mono text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-16" }, null, _parent));
	_push(`</dd></div><div class="space-y-1"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.skeleton.deps"))}</dt><dd class="font-mono text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-8" }, null, _parent));
	_push(`</dd></div><div class="space-y-1 col-span-2"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.skeleton.published"))}</dt><dd class="font-mono text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</dd></div></dl><nav aria-label="Package links" class="mt-6"><ul class="flex flex-wrap items-center gap-4 list-none m-0 p-0"><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-14" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-20" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-16" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-12" }, null, _parent));
	_push(`</li></ul></nav></header><section class="mb-8"><h2 id="install-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.skeleton.get_started"))}</h2><div class="relative"><div class="bg-bg-muted border border-border rounded-md p-4 font-mono text-sm overflow-x-auto pe-16">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-52" }, null, _parent));
	_push(`</div>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "absolute top-3 inset-ie-3 h-6 w-12 rounded" }, null, _parent));
	_push(`</div></section><div class="grid lg:grid-cols-3 gap-8"><div class="lg:col-span-2 order-2 lg:order-1"><section><h2 id="readme-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(_ctx.$t("package.skeleton.readme"))}</h2><div class="space-y-4">`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-7 w-2/3" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-4/5" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-6 w-1/2 mt-6" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-3/4" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-24 w-full rounded-lg mt-4" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-5/6" }, null, _parent));
	_push(`</div></section></div><div class="order-1 lg:order-2 space-y-8"><section><h2 id="maintainers-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.skeleton.maintainers"))}</h2><ul class="space-y-2 list-none m-0 p-0"><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-24" }, null, _parent));
	_push(`</li></ul></section><section><h2 id="keywords-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.skeleton.keywords"))}</h2><ul class="flex flex-wrap gap-1.5 list-none m-0 p-0"><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-16 rounded" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-12 rounded" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-20 rounded" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-14 rounded" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-18 rounded" }, null, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-10 rounded" }, null, _parent));
	_push(`</li></ul></section><section><h2 id="versions-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.skeleton.versions"))}</h2><div class="space-y-1"><div class="flex items-center justify-between py-1.5 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-16" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div><div class="flex items-center justify-between py-1.5 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-14" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div><div class="flex items-center justify-between py-1.5 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-18" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div><div class="flex items-center justify-between py-1.5 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-14" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div><div class="flex items-center justify-between py-1.5 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-16" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div></div></section><section><h2 id="dependencies-heading-skeleton" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.skeleton.dependencies"))}</h2><ul class="space-y-1 list-none m-0 p-0"><li class="flex items-center justify-between py-1 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-12" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-32" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-10" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-20" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-14" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm">`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-28" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-12" }, null, _parent));
	_push(`</li></ul></section></div></div></article>`);
}
var _sfc_setup$18 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Skeleton.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Skeleton_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "PackageSkeleton" });
var LicenseDisplay_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LicenseDisplay",
	__ssrInlineRender: true,
	props: { license: {} },
	setup(__props) {
		const props = __props;
		const tokens = computed(() => parseLicenseExpression(props.license));
		const hasAnyValidLicense = computed(() => tokens.value.some((t) => t.type === "license" && t.url));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-flex items-baseline gap-x-1.5 flex-wrap gap-y-0.5" }, _attrs))}><!--[-->`);
			ssrRenderList(unref(tokens), (token, i) => {
				_push(`<!--[-->`);
				if (token.type === "license" && token.url) _push(`<a${ssrRenderAttr("href", token.url)} target="_blank" rel="noopener noreferrer" class="link-subtle"${ssrRenderAttr("title", _ctx.$t("package.license.view_spdx"))}>${ssrInterpolate(token.value)}</a>`);
				else if (token.type === "license") _push(`<span>${ssrInterpolate(token.value)}</span>`);
				else if (token.type === "operator") _push(`<span class="text-[0.65em]">${ssrInterpolate(token.value)}</span>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]-->`);
			if (unref(hasAnyValidLicense)) _push(`<span class="i-carbon-scales w-3.5 h-3.5 text-fg-subtle flex-shrink-0 self-center" aria-hidden="true"></span>`);
			else _push(`<!---->`);
			_push(`</span>`);
		};
	}
});
var _sfc_setup$17 = LicenseDisplay_vue_vue_type_script_setup_true_lang_default.setup;
LicenseDisplay_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LicenseDisplay.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var LicenseDisplay_default = Object.assign(LicenseDisplay_vue_vue_type_script_setup_true_lang_default, { __name: "LicenseDisplay" });
const packageManagers = [
	{
		id: "npm",
		label: "npm",
		action: "install",
		executeLocal: "npx",
		executeRemote: "npx",
		create: "npm create",
		icon: "i-simple-icons:npm"
	},
	{
		id: "pnpm",
		label: "pnpm",
		action: "add",
		executeLocal: "pnpm exec",
		executeRemote: "pnpm dlx",
		create: "pnpm create",
		icon: "i-simple-icons:pnpm"
	},
	{
		id: "yarn",
		label: "yarn",
		action: "add",
		executeLocal: "npx",
		executeRemote: "yarn dlx",
		create: "yarn create",
		icon: "i-simple-icons:yarn"
	},
	{
		id: "bun",
		label: "bun",
		action: "add",
		executeLocal: "bunx",
		executeRemote: "bunx",
		create: "bun create",
		icon: "i-simple-icons:bun"
	},
	{
		id: "deno",
		label: "deno",
		action: "add",
		executeLocal: "deno run",
		executeRemote: "deno run",
		create: "deno run",
		icon: "i-simple-icons:deno"
	},
	{
		id: "vlt",
		label: "vlt",
		action: "install",
		executeLocal: "vlt x",
		executeRemote: "vlt x",
		create: "vlt x",
		icon: "i-custom-vlt"
	}
];
function getPackageSpecifier(options) {
	const { packageName, packageManager, jsrInfo } = options;
	if (packageManager === "deno") {
		if (jsrInfo?.exists && jsrInfo.scope && jsrInfo.name) return `jsr:@${jsrInfo.scope}/${jsrInfo.name}`;
		return `npm:${packageName}`;
	}
	return packageName;
}
function getInstallCommand(options) {
	return getInstallCommandParts(options).join(" ");
}
function getInstallCommandParts(options) {
	const pm = packageManagers.find((p) => p.id === options.packageManager);
	if (!pm) return [];
	const spec = getPackageSpecifier(options);
	const version = options.version ? `@${options.version}` : "";
	return [
		pm.label,
		pm.action,
		`${spec}${version}`
	];
}
function getExecuteCommandParts(options) {
	const pm = packageManagers.find((p) => p.id === options.packageManager);
	if (!pm) return [];
	if (options.isCreatePackage) {
		const shortName = getCreateShortName(options.packageName);
		if (shortName !== options.packageName) return [...pm.create.split(" "), shortName];
	}
	return [...(pm.executeRemote ).split(" "), getPackageSpecifier(options)];
}
const useSelectedPackageManager = createSharedComposable(function useSelectedPackageManager() {
	return useLocalStorage("npmx-pm", "npm");
});
var ManagerSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ManagerSelect",
	__ssrInlineRender: true,
	setup(__props) {
		const selectedPM = useSelectedPackageManager();
		const listRef = useTemplateRef("listRef");
		const triggerRef = useTemplateRef("triggerRef");
		const isOpen = shallowRef(false);
		const highlightedIndex = shallowRef(-1);
		const dropdownPosition = shallowRef(null);
		function getDropdownStyle() {
			if (!dropdownPosition.value) return {};
			return {
				top: `${dropdownPosition.value.top}px`,
				left: `${dropdownPosition.value.left}px`
			};
		}
		useEventListener("scroll", close, true);
		const listboxId = `${useId()}-listbox`;
		function close() {
			isOpen.value = false;
			highlightedIndex.value = -1;
		}
		const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
		onClickOutside(listRef, close, { ignore: [triggerRef] });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><button type="button" class="flex items-center gap-1.5 px-2 py-2 font-mono text-xs text-fg-muted bg-bg-subtle border border-border-subtle border-solid rounded-md transition-colors duration-150 hover:text-fg hover:border-border-hover active:scale-95 focus:border-border-hover focus-visible:outline-accent/70 hover:text-fg"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-haspopup="listbox"${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.pm_label"))}${ssrRenderAttr("aria-controls", listboxId)}><!--[-->`);
			ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pmOption) => {
				_push(`<!--[--><span class="${ssrRenderClass([pmOption.icon, "inline-block h-3 w-3 pm-select-content"])}"${ssrRenderAttr("data-pm-select", pmOption.id)} aria-hidden="true"></span><span class="pm-select-content"${ssrRenderAttr("data-pm-select", pmOption.id)}${ssrRenderAttr("aria-hidden", pmOption.id !== unref(selectedPM))}>${ssrInterpolate(pmOption.label)}</span><!--]-->`);
			});
			_push(`<!--]--><span class="${ssrRenderClass([[{ "rotate-180": unref(isOpen) }, unref(prefersReducedMotion) ? "" : "transition-transform duration-200"], "i-carbon:chevron-down w-3 h-3"])}" aria-hidden="true"></span></button>`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(isOpen)) {
					_push(`<ul${ssrRenderAttr("id", listboxId)} role="listbox"${ssrRenderAttr("aria-activedescendant", unref(highlightedIndex) >= 0 ? `${listboxId}-${("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers))[unref(highlightedIndex)]?.id}` : void 0)}${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.pm_label"))} style="${ssrRenderStyle(getDropdownStyle())}" class="fixed bg-bg-subtle border border-border rounded-md shadow-lg z-50"><!--[-->`);
					ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm, index) => {
						_push(`<li${ssrRenderAttr("id", `${listboxId}-${pm.id}`)} role="option"${ssrRenderAttr("aria-selected", unref(selectedPM) === pm.id)} class="${ssrRenderClass([[unref(selectedPM) === pm.id ? "text-fg" : "text-fg-subtle", unref(highlightedIndex) === index ? "bg-bg-elevated" : "hover:bg-bg-elevated"], "flex items-center gap-2 px-3 py-1.5 font-mono text-xs cursor-pointer transition-colors duration-150"])}"><span class="${ssrRenderClass([pm.icon, "inline-block h-3 w-3"])}" aria-hidden="true"></span><span>${ssrInterpolate(pm.label)}</span>`);
						if (unref(selectedPM) === pm.id) _push(`<span class="i-carbon:checkmark w-3 h-3 text-accent ms-auto" aria-hidden="true"></span>`);
						else _push(`<!---->`);
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$16 = ManagerSelect_vue_vue_type_script_setup_true_lang_default.setup;
ManagerSelect_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ManagerSelect.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var ManagerSelect_default = Object.assign(ManagerSelect_vue_vue_type_script_setup_true_lang_default, { __name: "PackageManagerSelect" });
var Execute_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Execute",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		jsrInfo: {},
		isCreatePackage: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		useSelectedPackageManager();
		function getExecutePartsForPM(pmId) {
			return getExecuteCommandParts({
				packageName: props.packageName,
				packageManager: pmId,
				jsrInfo: props.jsrInfo,
				isCreatePackage: props.isCreatePackage
			});
		}
		const { copied: executeCopied, copy: copyExecute } = useClipboard({ copiedDuring: 2e3 });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))}><div class="bg-bg-subtle border border-border rounded-lg overflow-hidden"><div class="flex gap-1.5 px-3 pt-2 sm:px-4 sm:pt-3"><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span></div><div class="px-3 pt-2 pb-3 sm:px-4 sm:pt-3 sm:pb-4 space-y-1"><!--[-->`);
			ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
				_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/executecmd"><span class="text-fg-subtle font-mono text-sm select-none">\$</span><code class="font-mono text-sm"><!--[-->`);
				ssrRenderList(getExecutePartsForPM(pm.id), (part, i) => {
					_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
				});
				_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/executecmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.copy_command"))}>${ssrInterpolate(unref(executeCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</button></div>`);
			});
			_push(`<!--]--></div></div></div>`);
		};
	}
});
var _sfc_setup$15 = Execute_vue_vue_type_script_setup_true_lang_default.setup;
Execute_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Terminal/Execute.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var Execute_default = Object.assign(Execute_vue_vue_type_script_setup_true_lang_default, { __name: "TerminalExecute" });
function useInstallCommand(packageName, requestedVersion, jsrInfo, typesPackageName) {
	const selectedPM = useSelectedPackageManager();
	const { settings } = useSettings();
	const showTypesInInstall = computed(() => {
		return settings.value.includeTypesInInstall && !!toValue(typesPackageName);
	});
	const installCommandParts = computed(() => {
		const name = toValue(packageName);
		if (!name) return [];
		return getInstallCommandParts({
			packageName: name,
			packageManager: selectedPM.value,
			version: toValue(requestedVersion),
			jsrInfo: toValue(jsrInfo)
		});
	});
	const installCommand = computed(() => {
		const name = toValue(packageName);
		if (!name) return "";
		return getInstallCommand({
			packageName: name,
			packageManager: selectedPM.value,
			version: toValue(requestedVersion),
			jsrInfo: toValue(jsrInfo)
		});
	});
	const devFlag = computed(() => {
		return selectedPM.value === "bun" ? "-d" : "-D";
	});
	const typesInstallCommandParts = computed(() => {
		const types = toValue(typesPackageName);
		if (!types) return [];
		const pm = packageManagers.find((p) => p.id === selectedPM.value);
		if (!pm) return [];
		const pkgSpec = selectedPM.value === "deno" ? `npm:${types}` : types;
		return [
			pm.label,
			pm.action,
			devFlag.value,
			pkgSpec
		];
	});
	const fullInstallCommand = computed(() => {
		if (!installCommand.value) return "";
		const types = toValue(typesPackageName);
		if (!showTypesInInstall.value || !types) return installCommand.value;
		const pm = packageManagers.find((p) => p.id === selectedPM.value);
		if (!pm) return installCommand.value;
		const pkgSpec = selectedPM.value === "deno" ? `npm:${types}` : types;
		return `${installCommand.value}; ${pm.label} ${pm.action} ${devFlag.value} ${pkgSpec}`;
	});
	const { copied, copy } = useClipboard({ copiedDuring: 2e3 });
	async function copyInstallCommand() {
		if (!fullInstallCommand.value) return;
		await copy(fullInstallCommand.value);
	}
	return {
		selectedPM,
		installCommandParts,
		installCommand,
		typesInstallCommandParts,
		fullInstallCommand,
		showTypesInInstall,
		copied,
		copyInstallCommand
	};
}
function getExecutableInfo(packageName, bin) {
	if (!bin) return {
		primaryCommand: "",
		commands: [],
		hasExecutable: false
	};
	if (typeof bin === "string") return {
		primaryCommand: packageName,
		commands: [packageName],
		hasExecutable: true
	};
	const commands = Object.keys(bin);
	const firstCommand = commands[0];
	if (!firstCommand) return {
		primaryCommand: "",
		commands: [],
		hasExecutable: false
	};
	const baseName = packageName.startsWith("@") ? packageName.split("/")[1] : packageName;
	return {
		primaryCommand: baseName && commands.includes(baseName) ? baseName : firstCommand,
		commands,
		hasExecutable: true
	};
}
function getRunCommandParts(options) {
	const pm = packageManagers.find((p) => p.id === options.packageManager);
	if (!pm) return [];
	const spec = getPackageSpecifier(options);
	const executeParts = (pm.executeLocal).split(" ");
	if (options.packageManager === "deno") return [...executeParts, spec];
	if (options.command && options.command !== options.packageName) {
		const baseName = options.packageName.startsWith("@") ? options.packageName.split("/")[1] : options.packageName;
		if (options.command === baseName) return [...executeParts, spec];
		return [...executeParts, options.command];
	}
	return [...executeParts, spec];
}
var Install_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Install",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		requestedVersion: {},
		jsrInfo: {},
		typesPackageName: {},
		executableInfo: {},
		createPackageInfo: {}
	},
	setup(__props) {
		const props = __props;
		const { showTypesInInstall, copied} = useInstallCommand(() => props.packageName, () => props.requestedVersion ?? null, () => props.jsrInfo ?? null, () => props.typesPackageName ?? null);
		function getInstallPartsForPM(pmId) {
			return getInstallCommandParts({
				packageName: props.packageName,
				packageManager: pmId,
				version: props.requestedVersion,
				jsrInfo: props.jsrInfo
			});
		}
		function getRunPartsForPM(pmId, command) {
			return getRunCommandParts({
				packageName: props.packageName,
				packageManager: pmId,
				jsrInfo: props.jsrInfo,
				command});
		}
		function getCreatePartsForPM(pmId) {
			if (!props.createPackageInfo) return [];
			const pm = packageManagers.find((p) => p.id === pmId);
			if (!pm) return [];
			const createPkgName = props.createPackageInfo.packageName;
			let shortName;
			if (createPkgName.startsWith("@")) {
				const slashIndex = createPkgName.indexOf("/");
				const name = createPkgName.slice(slashIndex + 1);
				shortName = name.startsWith("create-") ? name.slice(7) : name;
			} else shortName = createPkgName.startsWith("create-") ? createPkgName.slice(7) : createPkgName;
			return [...pm.create.split(" "), shortName];
		}
		function getTypesInstallPartsForPM(pmId) {
			if (!props.typesPackageName) return [];
			const pm = packageManagers.find((p) => p.id === pmId);
			if (!pm) return [];
			const devFlag = pmId === "bun" ? "-d" : "-D";
			const pkgSpec = pmId === "deno" ? `npm:${props.typesPackageName}` : props.typesPackageName;
			return [
				pm.label,
				pm.action,
				devFlag,
				pkgSpec
			];
		}
		const { copied: runCopied, copy: copyRun } = useClipboard({ copiedDuring: 2e3 });
		const { copied: createCopied, copy: copyCreate } = useClipboard({ copiedDuring: 2e3 });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_TooltipApp = App_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))}><div class="bg-bg-subtle border border-border rounded-lg overflow-hidden"><div class="flex gap-1.5 px-3 pt-2 sm:px-4 sm:pt-3"><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span></div><div class="px-3 pt-2 pb-3 sm:px-4 sm:pt-3 sm:pb-4 space-y-1 overflow-x-auto"><!--[-->`);
			ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
				_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/installcmd min-w-0"><span class="text-fg-subtle font-mono text-sm select-none shrink-0">\$</span><code class="font-mono text-sm min-w-0"><!--[-->`);
				ssrRenderList(getInstallPartsForPM(pm.id), (part, i) => {
					_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
				});
				_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/installcmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70 select-none"${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.copy_command"))}><span aria-live="polite">${ssrInterpolate(unref(copied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</span></button></div>`);
			});
			_push(`<!--]-->`);
			if (__props.typesPackageName && unref(showTypesInInstall)) {
				_push(`<!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 min-w-0"><span class="text-fg-subtle font-mono text-sm select-none shrink-0">\$</span><code class="font-mono text-sm min-w-0"><!--[-->`);
					ssrRenderList(getTypesInstallPartsForPM(pm.id), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: `/package/${__props.typesPackageName}`,
						class: "text-fg-subtle hover:text-fg-muted text-xs transition-colors focus-visible:outline-accent/70 rounded select-none",
						title: _ctx.$t("package.get_started.view_types", { package: __props.typesPackageName })
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:arrow-right rtl-flip w-3 h-3 align-middle" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>View ${ssrInterpolate(__props.typesPackageName)}</span>`);
							else return [createVNode("span", {
								class: "i-carbon:arrow-right rtl-flip w-3 h-3 align-middle",
								"aria-hidden": "true"
							}), createVNode("span", { class: "sr-only" }, "View " + toDisplayString(__props.typesPackageName), 1)];
						}),
						_: 2
					}, _parent));
					_push(`</div>`);
				});
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			if (__props.executableInfo?.hasExecutable) {
				_push(`<!--[--><div class="flex items-center gap-2 pt-1"><span class="text-fg-subtle font-mono text-sm select-none"># ${ssrInterpolate(_ctx.$t("package.run.locally"))}</span></div><!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/runcmd"><span class="text-fg-subtle font-mono text-sm select-none">\$</span><code class="font-mono text-sm"><!--[-->`);
					ssrRenderList(getRunPartsForPM(pm.id, __props.executableInfo?.primaryCommand), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/runcmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70 select-none">${ssrInterpolate(unref(runCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</button></div>`);
				});
				_push(`<!--]--><!--]-->`);
			} else _push(`<!---->`);
			if (__props.createPackageInfo) {
				_push(`<!--[--><div class="flex items-center gap-2 pt-1 select-none"><span class="text-fg-subtle font-mono text-sm"># ${ssrInterpolate(_ctx.$t("package.create.title"))}</span>`);
				_push(ssrRenderComponent(_component_TooltipApp, { text: _ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName }) }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
							to: `/package/${__props.createPackageInfo.packageName}`,
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-muted hover:text-fg text-xs transition-colors focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="i-carbon:information w-3 h-3" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName }))}</span>`);
								else return [createVNode("span", {
									class: "i-carbon:information w-3 h-3",
									"aria-hidden": "true"
								}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName })), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(_component_NuxtLink, {
							to: `/package/${__props.createPackageInfo.packageName}`,
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-muted hover:text-fg text-xs transition-colors focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, {
							default: withCtx(() => [createVNode("span", {
								class: "i-carbon:information w-3 h-3",
								"aria-hidden": "true"
							}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName })), 1)]),
							_: 1
						}, 8, ["to"])];
					}),
					_: 1
				}, _parent));
				_push(`</div><!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/createcmd"><span class="text-fg-subtle font-mono text-sm select-none">\$</span><code class="font-mono text-sm"><!--[-->`);
					ssrRenderList(getCreatePartsForPM(pm.id), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/createcmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70 select-none"${ssrRenderAttr("aria-label", _ctx.$t("package.create.copy_command"))}><span aria-live="polite">${ssrInterpolate(unref(createCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</span></button></div>`);
				});
				_push(`<!--]--><!--]-->`);
			} else _push(`<!---->`);
			_push(`</div></div></div>`);
		};
	}
});
var _sfc_setup$14 = Install_vue_vue_type_script_setup_true_lang_default.setup;
Install_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Terminal/Install.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Install_default = Object.assign(Install_vue_vue_type_script_setup_true_lang_default, { __name: "TerminalInstall" });
var Replacement_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Replacement",
	__ssrInlineRender: true,
	props: { replacement: {} },
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const message = computed(() => {
			switch (props.replacement.type) {
				case "native": return ["package.replacement.native", {
					replacement: props.replacement.replacement,
					nodeVersion: props.replacement.nodeVersion
				}];
				case "simple": return ["package.replacement.simple", {
					replacement: props.replacement.replacement,
					community: $t("package.replacement.community")
				}];
				case "documented": return ["package.replacement.documented", { community: $t("package.replacement.community") }];
				case "none": return ["package.replacement.none", {}];
			}
		});
		const mdnUrl = computed(() => {
			if (props.replacement.type !== "native" || !props.replacement.mdnPath) return null;
			return `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/${props.replacement.mdnPath}`;
		});
		const docPath = computed(() => {
			if (props.replacement.type !== "documented" || !props.replacement.docPath) return null;
			return `https://github.com/es-tooling/module-replacements/blob/main/docs/modules/${props.replacement.docPath}.md`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-amber-600/40 bg-amber-500/10 rounded-lg px-3 py-2 text-base text-amber-700 dark:text-amber-400" }, _attrs))}><h2 class="font-medium mb-1 flex items-center gap-2"><span class="i-carbon-idea w-4 h-4" aria-hidden="true"></span> ${ssrInterpolate(unref($t)("package.replacement.title"))}</h2><p class="text-sm m-0">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: unref(message)[0],
				scope: "global"
			}, {
				replacement: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(message)[1].replacement ?? "")}`);
					else return [createTextVNode(toDisplayString(unref(message)[1].replacement ?? ""), 1)];
				}),
				nodeVersion: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(message)[1].nodeVersion ?? "")}`);
					else return [createTextVNode(toDisplayString(unref(message)[1].nodeVersion ?? ""), 1)];
				}),
				community: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://e18e.dev/docs/replacements/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"${_scopeId}>${ssrInterpolate(unref($t)("package.replacement.community"))} <span class="i-carbon-launch w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
					else return [createVNode("a", {
						href: "https://e18e.dev/docs/replacements/",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"
					}, [createTextVNode(toDisplayString(unref($t)("package.replacement.community")) + " ", 1), createVNode("span", {
						class: "i-carbon-launch w-3 h-3",
						"aria-hidden": "true"
					})])];
				}),
				_: 1
			}, _parent));
			if (unref(mdnUrl)) _push(`<a${ssrRenderAttr("href", unref(mdnUrl))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors">${ssrInterpolate(unref($t)("package.replacement.mdn"))} <span class="i-carbon-launch w-3 h-3" aria-hidden="true"></span></a>`);
			else _push(`<!---->`);
			if (unref(docPath)) _push(`<a${ssrRenderAttr("href", unref(docPath))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors">${ssrInterpolate(unref($t)("package.replacement.learn_more"))} <span class="i-carbon-launch w-3 h-3" aria-hidden="true"></span></a>`);
			else _push(`<!---->`);
			_push(`</p></div>`);
		};
	}
});
var _sfc_setup$13 = Replacement_vue_vue_type_script_setup_true_lang_default.setup;
Replacement_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Replacement.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var Replacement_default = Object.assign(Replacement_vue_vue_type_script_setup_true_lang_default, { __name: "PackageReplacement" });
var PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PackageProvenanceSection",
	__ssrInlineRender: true,
	props: { details: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "provenance",
				"aria-labelledby": "provenance-heading",
				class: "scroll-mt-20"
			}, _attrs))}><h2 id="provenance-heading" class="group text-xs text-fg-subtle uppercase tracking-wider mb-3"><a href="#provenance" class="inline-flex items-center gap-1.5 text-fg-subtle hover:text-fg-muted transition-colors duration-200 no-underline">${ssrInterpolate(_ctx.$t("package.provenance_section.title"))} <span class="i-carbon-link w-3 h-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true"></span></a></h2><div class="space-y-3 border border-border rounded-lg p-4 sm:p-5"><div class="space-y-1"><p class="flex items-start gap-2 text-sm text-fg m-0"><span class="i-lucide-shield-check w-4 h-4 shrink-0 text-emerald-500 mt-0.5" aria-hidden="true"></span>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.provenance_section.built_and_signed_on",
				tag: "span"
			}, {
				provider: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>${ssrInterpolate(__props.details.providerLabel)}</strong>`);
					else return [createVNode("strong", null, toDisplayString(__props.details.providerLabel), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p>`);
			if (__props.details.buildSummaryUrl) _push(`<a${ssrRenderAttr("href", __props.details.buildSummaryUrl)} target="_blank" rel="noopener noreferrer" class="link text-sm text-fg-muted inline-flex">${ssrInterpolate(_ctx.$t("package.provenance_section.view_build_summary"))}</a>`);
			else _push(`<!---->`);
			_push(`</div><dl class="m-0 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">`);
			if (__props.details.sourceCommitUrl) _push(`<div class="min-w-0 flex flex-col gap-0.5"><dt class="font-mono text-xs text-fg-muted m-0">${ssrInterpolate(_ctx.$t("package.provenance_section.source_commit"))}</dt><dd class="m-0 min-w-0"><a${ssrRenderAttr("href", __props.details.sourceCommitUrl)} target="_blank" rel="noopener noreferrer" class="link font-mono text-sm block min-w-0 truncate"${ssrRenderAttr("title", __props.details.sourceCommitSha ?? __props.details.sourceCommitUrl)}>${ssrInterpolate(__props.details.sourceCommitSha ? `${__props.details.sourceCommitSha.slice(0, 12)}` : __props.details.sourceCommitUrl)}</a></dd></div>`);
			else _push(`<!---->`);
			if (__props.details.buildFileUrl) _push(`<div class="min-w-0 flex flex-col gap-0.5"><dt class="font-mono text-xs text-fg-muted m-0">${ssrInterpolate(_ctx.$t("package.provenance_section.build_file"))}</dt><dd class="m-0 min-w-0"><a${ssrRenderAttr("href", __props.details.buildFileUrl)} target="_blank" rel="noopener noreferrer" class="link font-mono text-sm block min-w-0 break-words"${ssrRenderAttr("title", __props.details.buildFilePath ?? __props.details.buildFileUrl)}>${ssrInterpolate(__props.details.buildFilePath ?? __props.details.buildFileUrl)}</a></dd></div>`);
			else _push(`<!---->`);
			if (__props.details.publicLedgerUrl) _push(`<div class="min-w-0 flex flex-col gap-0.5"><dt class="font-mono text-xs text-fg-muted m-0">${ssrInterpolate(_ctx.$t("package.provenance_section.public_ledger"))}</dt><dd class="m-0 min-w-0"><a${ssrRenderAttr("href", __props.details.publicLedgerUrl)} target="_blank" rel="noopener noreferrer" class="link text-sm inline-flex">${ssrInterpolate(_ctx.$t("package.provenance_section.transparency_log_entry"))}</a></dd></div>`);
			else _push(`<!---->`);
			_push(`</dl></div></section>`);
		};
	}
});
var _sfc_setup$12 = PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default.setup;
PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PackageProvenanceSection.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var PackageProvenanceSection_default = Object.assign(PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default, { __name: "PackageProvenanceSection" });
var CollapsibleSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollapsibleSection",
	__ssrInlineRender: true,
	props: {
		title: {},
		isLoading: {
			type: Boolean,
			default: false
		},
		headingLevel: { default: "h2" },
		id: {},
		icon: {}
	},
	setup(__props) {
		const props = __props;
		const appSettings = useSettings();
		const buttonId = `${props.id}-collapsible-button`;
		const contentId = `${props.id}-collapsible-content`;
		const headingId = `${props.id}-heading`;
		const isOpen = shallowRef(true);
		onPrehydrate("(()=>{let e=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`)?.sidebar?.collapsed||[];for(let t of e)document.documentElement.dataset.collapsed?.includes(t)||(document.documentElement.dataset.collapsed=(document.documentElement.dataset.collapsed+` `+t).trim())})");
		function toggle() {
			isOpen.value = !isOpen.value;
			const removed = appSettings.settings.value.sidebar.collapsed.filter((c) => c !== props.id);
			if (isOpen.value) appSettings.settings.value.sidebar.collapsed = removed;
			else {
				removed.push(props.id);
				appSettings.settings.value.sidebar.collapsed = removed;
			}
			(void 0).documentElement.dataset.collapsed = appSettings.settings.value.sidebar.collapsed.join(" ");
		}
		const ariaLabel = computed(() => {
			const action = isOpen.value ? "Collapse" : "Expand";
			return props.title ? `${action} ${props.title}` : action;
		});
		useHead$1({ style: [{ innerHTML: `
:root[data-collapsed~='${props.id}'] section[data-anchor-id='${props.id}'] .collapsible-content {
  grid-template-rows: 0fr;
}` }] });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "scroll-mt-20",
				"data-anchor-id": __props.id
			}, _attrs))}><div class="flex items-center justify-between mb-3 px-1">`);
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.headingLevel), {
				id: headingId,
				class: "group text-xs text-fg-subtle uppercase tracking-wider flex items-center gap-2"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<button${ssrRenderAttr("id", buttonId)} type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg-muted transition-colors duration-200 shrink-0 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("aria-expanded", isOpen.value)}${ssrRenderAttr("aria-controls", contentId)}${ssrRenderAttr("aria-label", ariaLabel.value)}${_scopeId}>`);
						if (__props.isLoading) _push(`<span class="i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin" aria-hidden="true"${_scopeId}></span>`);
						else _push(`<span class="${ssrRenderClass([isOpen.value ? "i-carbon:chevron-down" : "i-carbon:chevron-right", "w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span>`);
						_push(`</button><a${ssrRenderAttr("href", `#${__props.id}`)} class="inline-flex items-center gap-1.5 text-fg-subtle hover:text-fg-muted transition-colors duration-200 no-underline"${_scopeId}>`);
						if (__props.icon) _push(`<span class="${ssrRenderClass(__props.icon)}" aria-hidden="true"${_scopeId}></span>`);
						else _push(`<!---->`);
						_push(` ${ssrInterpolate(__props.title)} <span class="i-carbon:link w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true"${_scopeId}></span></a>`);
					} else return [createVNode("button", {
						id: buttonId,
						type: "button",
						class: "w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg-muted transition-colors duration-200 shrink-0 focus-visible:outline-accent/70 rounded",
						"aria-expanded": isOpen.value,
						"aria-controls": contentId,
						"aria-label": ariaLabel.value,
						onClick: toggle
					}, [__props.isLoading ? (openBlock(), createBlock("span", {
						key: 0,
						class: "i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin",
						"aria-hidden": "true"
					})) : (openBlock(), createBlock("span", {
						key: 1,
						class: ["w-3 h-3 transition-transform duration-200", isOpen.value ? "i-carbon:chevron-down" : "i-carbon:chevron-right"],
						"aria-hidden": "true"
					}, null, 2))], 8, ["aria-expanded", "aria-label"]), createVNode("a", {
						href: `#${__props.id}`,
						class: "inline-flex items-center gap-1.5 text-fg-subtle hover:text-fg-muted transition-colors duration-200 no-underline"
					}, [
						__props.icon ? (openBlock(), createBlock("span", {
							key: 0,
							class: __props.icon,
							"aria-hidden": "true"
						}, null, 2)) : createCommentVNode("", true),
						createTextVNode(" " + toDisplayString(__props.title) + " ", 1),
						createVNode("span", {
							class: "i-carbon:link w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
							"aria-hidden": "true"
						})
					], 8, ["href"])];
				}),
				_: 1
			}), _parent);
			_push(`<div class="pe-1">`);
			ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
			_push(`</div></div><div${ssrRenderAttr("id", contentId)} class="grid ms-6 grid-rows-[1fr] transition-[grid-template-rows] duration-200 ease-in-out collapsible-content overflow-hidden"${ssrIncludeBooleanAttr(!isOpen.value) ? " inert" : ""}><div class="min-h-0 min-w-0">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></section>`);
		};
	}
});
var _sfc_setup$11 = CollapsibleSection_vue_vue_type_script_setup_true_lang_default.setup;
CollapsibleSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollapsibleSection.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var CollapsibleSection_default = Object.assign(CollapsibleSection_vue_vue_type_script_setup_true_lang_default, { __name: "CollapsibleSection" });
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(ssrRenderComponent(server_placeholder_default, mergeProps({
		modalTitle: _ctx.$t("package.downloads.modal_title"),
		id: "chart-modal",
		class: "h-full sm:h-min sm:border sm:border-border sm:rounded-lg shadow-xl sm:max-h-[90vh] sm:max-w-3xl"
	}, _attrs), {}, _parent));
}
var _sfc_setup$10 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ChartModal.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var ChartModal_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "PackageChartModal" });
var WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WeeklyDownloadStats",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		createdIso: {}
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const chartModal = useModal("chart-modal");
		const isChartModalOpen = shallowRef(false);
		async function openChartModal() {
			isChartModalOpen.value = true;
			await nextTick();
			await nextTick();
			chartModal.open();
		}
		const { accentColors, selectedAccentColor } = useAccentColor();
		const colorMode = useColorMode();
		const resolvedMode = shallowRef("light");
		const rootEl = shallowRef(null);
		watch(() => colorMode.value, (value) => {
			resolvedMode.value = value === "dark" ? "dark" : "light";
		}, { flush: "sync" });
		const { colors } = useCssVariables([
			"--bg",
			"--fg",
			"--bg-subtle",
			"--bg-elevated",
			"--border-hover",
			"--fg-subtle",
			"--border",
			"--border-subtle"
		], {
			element: rootEl,
			watchHtmlAttributes: true,
			watchResize: false
		});
		const isDarkMode = computed(() => resolvedMode.value === "dark");
		const accentColorValueById = computed(() => {
			const map = {};
			for (const item of accentColors.value) map[item.id] = item.value;
			return map;
		});
		const accent = computed(() => {
			const id = selectedAccentColor.value;
			return id ? accentColorValueById.value[id] ?? colors.value.fgSubtle ?? "oklch(0.633 0 0)" : colors.value.fgSubtle ?? "oklch(0.633 0 0)";
		});
		const pulseColor = computed(() => {
			if (!selectedAccentColor.value) return colors.value.fgSubtle;
			return isDarkMode.value ? accent.value : lightenOklch(accent.value, .5);
		});
		const weeklyDownloads = shallowRef([]);
		async function loadWeeklyDownloads() {}
		watch(() => props.packageName, () => loadWeeklyDownloads());
		const dataset = computed(() => weeklyDownloads.value.map((d) => ({
			value: d?.downloads ?? 0,
			period: $t("package.downloads.date_range", {
				start: d.weekStart ?? "-",
				end: d.weekEnd ?? "-"
			})
		})));
		const lastDatapoint = computed(() => dataset.value.at(-1)?.period ?? "");
		const config = computed(() => {
			return {
				theme: "dark",
				skeletonConfig: { style: {
					backgroundColor: "transparent",
					dataLabel: {
						show: true,
						color: "transparent"
					},
					area: {
						color: colors.value.borderHover,
						useGradient: false,
						opacity: 10
					},
					line: { color: colors.value.borderHover }
				} },
				skeletonDataset: Array.from({ length: 52 }, () => 0),
				style: {
					backgroundColor: "transparent",
					animation: { show: false },
					area: {
						color: colors.value.borderHover,
						useGradient: false,
						opacity: 10
					},
					dataLabel: {
						offsetX: -10,
						fontSize: 28,
						bold: false,
						color: colors.value.fg
					},
					line: {
						color: colors.value.borderHover,
						pulse: {
							show: true,
							loop: true,
							radius: 1.5,
							color: pulseColor.value,
							easing: "ease-in-out",
							trail: {
								show: true,
								length: 20,
								opacity: .75
							}
						}
					},
					plot: {
						radius: 6,
						stroke: isDarkMode.value ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)"
					},
					title: {
						text: lastDatapoint.value,
						fontSize: 12,
						color: colors.value.fgSubtle,
						bold: false
					},
					verticalIndicator: {
						strokeDasharray: 0,
						color: isDarkMode.value ? "oklch(0.985 0 0)" : colors.value.fgSubtle
					}
				}
			};
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_ClientOnly = client_only_default;
			const _component_SkeletonInline = SkeletonInline_default;
			const _component_PackageChartModal = ChartModal_default;
			const _component_PackageDownloadAnalytics = DownloadAnalytics_default;
			_push(`<!--[--><div class="space-y-8">`);
			_push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "downloads",
				title: unref($t)("package.downloads.title")
			}, {
				actions: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("title", unref($t)("package.downloads.analyze"))}${_scopeId}><span class="i-carbon:data-analytics w-4 h-4" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.downloads.analyze"))}</span></button>`);
					else return [createVNode("button", {
						type: "button",
						onClick: openChartModal,
						class: "text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded",
						title: unref($t)("package.downloads.analyze")
					}, [createVNode("span", {
						class: "i-carbon:data-analytics w-4 h-4",
						"aria-hidden": "true"
					}), createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.downloads.analyze")), 1)], 8, ["title"])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="w-full overflow-hidden"${_scopeId}>`);
						_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="min-h-[75.195px]"${_scopeId}><div class="h-6 flex items-center ps-3"${_scopeId}>`);
								_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-3 w-36" }, null, _parent, _scopeId));
								_push(`</div><div class="aspect-[500/80] flex items-center"${_scopeId}><div class="w-[42%] flex items-center ps-0.5"${_scopeId}>`);
								_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-24" }, null, _parent, _scopeId));
								_push(`</div><div class="flex-1 flex items-end gap-0.5 h-4/5 pe-3"${_scopeId}><!--[-->`);
								ssrRenderList(16, (i) => {
									_push(ssrRenderComponent(_component_SkeletonInline, {
										key: i,
										class: "flex-1 rounded-sm",
										style: { height: `${25 + i * 7 % 50}%` }
									}, null, _parent, _scopeId));
								});
								_push(`<!--]--></div></div></div>`);
							} else return [createVNode("div", { class: "min-h-[75.195px]" }, [createVNode("div", { class: "h-6 flex items-center ps-3" }, [createVNode(_component_SkeletonInline, { class: "h-3 w-36" })]), createVNode("div", { class: "aspect-[500/80] flex items-center" }, [createVNode("div", { class: "w-[42%] flex items-center ps-0.5" }, [createVNode(_component_SkeletonInline, { class: "h-7 w-24" })]), createVNode("div", { class: "flex-1 flex items-end gap-0.5 h-4/5 pe-3" }, [(openBlock(), createBlock(Fragment, null, renderList(16, (i) => {
								return createVNode(_component_SkeletonInline, {
									key: i,
									class: "flex-1 rounded-sm",
									style: { height: `${25 + i * 7 % 50}%` }
								}, null, 8, ["style"]);
							}), 64))])])])];
						}) }, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "w-full overflow-hidden" }, [createVNode(_component_ClientOnly, null, {
						fallback: withCtx(() => [createVNode("div", { class: "min-h-[75.195px]" }, [createVNode("div", { class: "h-6 flex items-center ps-3" }, [createVNode(_component_SkeletonInline, { class: "h-3 w-36" })]), createVNode("div", { class: "aspect-[500/80] flex items-center" }, [createVNode("div", { class: "w-[42%] flex items-center ps-0.5" }, [createVNode(_component_SkeletonInline, { class: "h-7 w-24" })]), createVNode("div", { class: "flex-1 flex items-end gap-0.5 h-4/5 pe-3" }, [(openBlock(), createBlock(Fragment, null, renderList(16, (i) => {
							return createVNode(_component_SkeletonInline, {
								key: i,
								class: "flex-1 rounded-sm",
								style: { height: `${25 + i * 7 % 50}%` }
							}, null, 8, ["style"]);
						}), 64))])])])]),
						default: withCtx(() => [createVNode(unref(VueUiSparkline), {
							class: "w-full max-w-xs",
							dataset: unref(dataset),
							config: unref(config)
						}, {
							skeleton: withCtx(() => [createVNode("div")]),
							_: 1
						}, 8, ["dataset", "config"])]),
						_: 1
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			if (unref(isChartModalOpen)) _push(ssrRenderComponent(_component_PackageChartModal, { onClose: ($event) => isChartModalOpen.value = false }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_PackageDownloadAnalytics, {
						weeklyDownloads: unref(weeklyDownloads),
						inModal: true,
						packageName: props.packageName,
						createdIso: __props.createdIso
					}, null, _parent, _scopeId));
					else return [createVNode(_component_PackageDownloadAnalytics, {
						weeklyDownloads: unref(weeklyDownloads),
						inModal: true,
						packageName: props.packageName,
						createdIso: __props.createdIso
					}, null, 8, [
						"weeklyDownloads",
						"packageName",
						"createdIso"
					])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$9 = WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default.setup;
WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/WeeklyDownloadStats.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var WeeklyDownloadStats_default = Object.assign(WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default, { __name: "PackageWeeklyDownloadStats" });
var Playgrounds_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Playgrounds",
	__ssrInlineRender: true,
	props: { links: {} },
	setup(__props) {
		const props = __props;
		const providerIcons = {
			"stackblitz": "i-simple-icons:stackblitz",
			"codesandbox": "i-simple-icons:codesandbox",
			"codepen": "i-simple-icons:codepen",
			"replit": "i-simple-icons:replit",
			"gitpod": "i-simple-icons:gitpod",
			"vue-playground": "i-simple-icons:vuedotjs",
			"nuxt-new": "i-simple-icons:nuxtdotjs",
			"vite-new": "i-simple-icons:vite",
			"jsfiddle": "i-carbon:code"
		};
		const providerColors = {
			"stackblitz": "text-provider-stackblitz",
			"codesandbox": "text-provider-codesandbox",
			"codepen": "text-provider-codepen",
			"replit": "text-provider-replit",
			"gitpod": "text-provider-gitpod",
			"vue-playground": "text-provider-vue",
			"nuxt-new": "text-provider-nuxt",
			"vite-new": "text-provider-vite",
			"jsfiddle": "text-provider-jsfiddle"
		};
		function getIcon(provider) {
			return providerIcons[provider] || "i-carbon:play";
		}
		function getColor(provider) {
			return providerColors[provider] || "text-fg-muted";
		}
		const isOpen = shallowRef(false);
		const dropdownRef = useTemplateRef("dropdownRef");
		useTemplateRef("menuRef");
		const focusedIndex = shallowRef(-1);
		onClickOutside(dropdownRef, () => {
			isOpen.value = false;
		});
		const hasSingleLink = computed(() => props.links.length === 1);
		const hasMultipleLinks = computed(() => props.links.length > 1);
		const firstLink = computed(() => props.links[0]);
		function closeDropdown() {
			isOpen.value = false;
			focusedIndex.value = -1;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			if (__props.links.length > 0) {
				_push(`<section${ssrRenderAttrs(mergeProps({ class: "px-1" }, _attrs))}><h2 id="playgrounds-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.playgrounds.title"))}</h2><div class="relative">`);
				if (unref(hasSingleLink) && unref(firstLink)) _push(ssrRenderComponent(_component_TooltipApp, {
					text: unref(firstLink).providerName,
					class: "w-full"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<a${ssrRenderAttr("href", unref(firstLink).url)} target="_blank" rel="noopener noreferrer" class="w-full flex items-center gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"${_scopeId}><span class="${ssrRenderClass([
							getIcon(unref(firstLink).provider),
							getColor(unref(firstLink).provider),
							"w-4 h-4 shrink-0"
						])}" aria-hidden="true"${_scopeId}></span><span class="truncate text-fg-muted"${_scopeId}>${ssrInterpolate(unref(decodeHtmlEntities)(unref(firstLink).label))}</span></a>`);
						else return [createVNode("a", {
							href: unref(firstLink).url,
							target: "_blank",
							rel: "noopener noreferrer",
							class: "w-full flex items-center gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"
						}, [createVNode("span", {
							class: [
								getIcon(unref(firstLink).provider),
								getColor(unref(firstLink).provider),
								"w-4 h-4 shrink-0"
							],
							"aria-hidden": "true"
						}, null, 2), createVNode("span", { class: "truncate text-fg-muted" }, toDisplayString(unref(decodeHtmlEntities)(unref(firstLink).label)), 1)], 8, ["href"])];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(hasMultipleLinks)) _push(`<button type="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", unref(isOpen))} class="w-full flex items-center justify-between gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"><span class="flex items-center gap-2"><span class="i-carbon:play w-4 h-4 shrink-0 text-fg-muted" aria-hidden="true"></span><span class="text-fg-muted">${ssrInterpolate(_ctx.$t("package.playgrounds.choose"))} (${ssrInterpolate(__props.links.length)})</span></span><span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-carbon:chevron-down w-3 h-3 text-fg-subtle transition-transform duration-200 motion-reduce:transition-none"])}" aria-hidden="true"></span></button>`);
				else _push(`<!---->`);
				if (unref(isOpen) && unref(hasMultipleLinks)) {
					_push(`<div role="menu" class="absolute top-full inset-is-0 inset-ie-0 mt-1 bg-bg-elevated border border-border rounded-lg shadow-lg z-50 py-1 overflow-visible"><!--[-->`);
					ssrRenderList(__props.links, (link) => {
						_push(ssrRenderComponent(_component_TooltipApp, {
							key: link.url,
							text: link.providerName,
							class: "block"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" role="menuitem" class="flex items-center gap-2 px-3 py-2 text-sm font-mono text-fg-muted hover:text-fg hover:bg-bg-muted focus-visible:outline-accent/70 focus-visible:text-fg focus-visible:bg-bg-muted transition-colors duration-150"${_scopeId}><span class="${ssrRenderClass([
									getIcon(link.provider),
									getColor(link.provider),
									"w-4 h-4 shrink-0"
								])}" aria-hidden="true"${_scopeId}></span><span class="truncate"${_scopeId}>${ssrInterpolate(unref(decodeHtmlEntities)(link.label))}</span></a>`);
								else return [createVNode("a", {
									href: link.url,
									target: "_blank",
									rel: "noopener noreferrer",
									role: "menuitem",
									class: "flex items-center gap-2 px-3 py-2 text-sm font-mono text-fg-muted hover:text-fg hover:bg-bg-muted focus-visible:outline-accent/70 focus-visible:text-fg focus-visible:bg-bg-muted transition-colors duration-150",
									onClick: closeDropdown
								}, [createVNode("span", {
									class: [
										getIcon(link.provider),
										getColor(link.provider),
										"w-4 h-4 shrink-0"
									],
									"aria-hidden": "true"
								}, null, 2), createVNode("span", { class: "truncate" }, toDisplayString(unref(decodeHtmlEntities)(link.label)), 1)], 8, ["href"])];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div></section>`);
			} else _push(`<!---->`);
		};
	}
});
var _sfc_setup$8 = Playgrounds_vue_vue_type_script_setup_true_lang_default.setup;
Playgrounds_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Playgrounds.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Playgrounds_default = Object.assign(Playgrounds_vue_vue_type_script_setup_true_lang_default, { __name: "PackagePlaygrounds" });
var Compatibility_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Compatibility",
	__ssrInlineRender: true,
	props: { engines: {} },
	setup(__props) {
		const props = __props;
		const engineNames = {
			bun: "Bun",
			node: "Node.js",
			npm: "npm"
		};
		const engineIcons = {
			bun: "i-simple-icons:bun",
			node: "i-simple-icons:nodedotjs",
			npm: "i-simple-icons:npm"
		};
		function getName(engine) {
			return engineNames[engine] || engine;
		}
		function getIcon(engine) {
			return engineIcons[engine] || "i-carbon:code";
		}
		const sortedEngines = computed(() => {
			return Object.entries(props.engines ?? {}).sort(([a], [b]) => a.localeCompare(b));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			if (unref(sortedEngines).length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.compatibility"),
				id: "compatibility"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<dl class="space-y-2"${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedEngines), ([engine, version]) => {
							_push(`<div class="flex justify-between gap-4 py-1"${_scopeId}><dt class="flex items-center gap-2 text-fg-muted text-sm shrink-0"${_scopeId}><span class="${ssrRenderClass([getIcon(engine), "inline-block w-4 h-4 shrink-0 text-fg-muted"])}" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(getName(engine))}</dt><dd class="font-mono text-sm text-fg text-end"${ssrRenderAttr("title", version)}${_scopeId}>${ssrInterpolate(version)}</dd></div>`);
						});
						_push(`<!--]--></dl>`);
					} else return [createVNode("dl", { class: "space-y-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedEngines), ([engine, version]) => {
						return openBlock(), createBlock("div", {
							key: engine,
							class: "flex justify-between gap-4 py-1"
						}, [createVNode("dt", { class: "flex items-center gap-2 text-fg-muted text-sm shrink-0" }, [createVNode("span", {
							class: [getIcon(engine), "inline-block w-4 h-4 shrink-0 text-fg-muted"],
							"aria-hidden": "true"
						}, null, 2), createTextVNode(" " + toDisplayString(getName(engine)), 1)]), createVNode("dd", {
							class: "font-mono text-sm text-fg text-end",
							title: version
						}, toDisplayString(version), 9, ["title"])]);
					}), 128))])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$7 = Compatibility_vue_vue_type_script_setup_true_lang_default.setup;
Compatibility_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Compatibility.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Compatibility_default = Object.assign(Compatibility_vue_vue_type_script_setup_true_lang_default, { __name: "PackageCompatibility" });
var MAX_VISIBLE_TAGS = 10;
var Versions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Versions",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		versions: {},
		distTags: {},
		time: {}
	},
	setup(__props) {
		const props = __props;
		function versionRoute(version) {
			return {
				name: "package",
				params: { package: [
					...props.packageName.split("/"),
					"v",
					version
				] }
			};
		}
		const versionToTags = computed(() => buildVersionToTagsMap(props.distTags));
		const allTagRows = computed(() => {
			const versionMap = /* @__PURE__ */ new Map();
			for (const [tag, version] of Object.entries(props.distTags)) {
				const existing = versionMap.get(version);
				if (existing) existing.tags.push(tag);
				else versionMap.set(version, {
					tags: [tag],
					versionData: props.versions[version]
				});
			}
			for (const entry of versionMap.values()) entry.tags.sort((a, b) => {
				if (a === "latest") return -1;
				if (b === "latest") return 1;
				return a.localeCompare(b);
			});
			return Array.from(versionMap.entries()).map(([version, { tags, versionData }]) => ({
				id: `version:${version}`,
				tag: tags[0],
				tags,
				primaryVersion: {
					version,
					time: props.time[version],
					tags,
					hasProvenance: versionData?.hasProvenance,
					deprecated: versionData?.deprecated
				}
			})).sort((a, b) => compare(b.primaryVersion.version, a.primaryVersion.version));
		});
		const isPackageDeprecated = computed(() => {
			const latestVersion = props.distTags.latest;
			if (!latestVersion) return false;
			return !!props.versions[latestVersion]?.deprecated;
		});
		const visibleTagRows = computed(() => {
			const rows = isPackageDeprecated.value ? allTagRows.value : allTagRows.value.filter((row) => !row.primaryVersion.deprecated);
			const first = rows.slice(0, MAX_VISIBLE_TAGS);
			const latestTagRow = rows.find((row) => row.tag === "latest");
			if (latestTagRow && !first.includes(latestTagRow)) {
				first.pop();
				first.push(latestTagRow);
			}
			return first;
		});
		const hiddenTagRows = computed(() => allTagRows.value.filter((row) => !visibleTagRows.value.includes(row)));
		const expandedTags = ref(/* @__PURE__ */ new Set());
		const tagVersions = ref(/* @__PURE__ */ new Map());
		const loadingTags = ref(/* @__PURE__ */ new Set());
		const otherVersionsExpanded = shallowRef(false);
		const expandedMajorGroups = ref(/* @__PURE__ */ new Set());
		const otherMajorGroups = shallowRef([]);
		const otherVersionsLoading = shallowRef(false);
		const allVersionsCache = shallowRef(null);
		const loadingVersions = shallowRef(false);
		const hasLoadedAll = shallowRef(false);
		async function loadAllVersions() {
			if (allVersionsCache.value) return allVersionsCache.value;
			if (loadingVersions.value) {
				await new Promise((resolve) => {
					const unwatch = watch(allVersionsCache, (val) => {
						if (val) {
							unwatch();
							resolve();
						}
					});
				});
				return allVersionsCache.value;
			}
			loadingVersions.value = true;
			try {
				const versions = await fetchAllPackageVersions(props.packageName);
				allVersionsCache.value = versions;
				hasLoadedAll.value = true;
				return versions;
			} finally {
				loadingVersions.value = false;
			}
		}
		function processLoadedVersions(allVersions) {
			const distTags = props.distTags;
			const claimedVersions = /* @__PURE__ */ new Set();
			for (const row of allTagRows.value) {
				const tagVersion = distTags[row.tag];
				if (!tagVersion) continue;
				const tagChannel = getPrereleaseChannel(tagVersion);
				const channelVersions = allVersions.filter((v) => {
					const vChannel = getPrereleaseChannel(v.version);
					return isSameVersionGroup(v.version, tagVersion) && vChannel === tagChannel;
				}).sort((a, b) => compare(b.version, a.version)).map((v) => ({
					version: v.version,
					time: v.time,
					tags: versionToTags.value.get(v.version),
					hasProvenance: v.hasProvenance,
					deprecated: v.deprecated
				}));
				tagVersions.value.set(row.tag, channelVersions);
				for (const v of channelVersions) claimedVersions.add(v.version);
			}
			const byGroupKey = /* @__PURE__ */ new Map();
			for (const v of allVersions) {
				if (claimedVersions.has(v.version)) continue;
				const groupKey = getVersionGroupKey(v.version);
				if (!byGroupKey.has(groupKey)) byGroupKey.set(groupKey, []);
				byGroupKey.get(groupKey).push({
					version: v.version,
					time: v.time,
					tags: versionToTags.value.get(v.version),
					hasProvenance: v.hasProvenance,
					deprecated: v.deprecated
				});
			}
			for (const versions of byGroupKey.values()) versions.sort((a, b) => compare(b.version, a.version));
			otherMajorGroups.value = Array.from(byGroupKey.keys()).sort((a, b) => {
				const [aMajor, aMinor] = a.split(".").map(Number);
				const [bMajor, bMinor] = b.split(".").map(Number);
				if (aMajor !== bMajor) return (bMajor ?? 0) - (aMajor ?? 0);
				return (bMinor ?? -1) - (aMinor ?? -1);
			}).map((groupKey) => ({
				groupKey,
				label: getVersionGroupLabel(groupKey),
				versions: byGroupKey.get(groupKey)
			}));
			expandedMajorGroups.value.clear();
		}
		async function expandTagRow(tag) {
			if (expandedTags.value.has(tag)) {
				expandedTags.value.delete(tag);
				expandedTags.value = new Set(expandedTags.value);
				return;
			}
			if (!hasLoadedAll.value) {
				loadingTags.value.add(tag);
				loadingTags.value = new Set(loadingTags.value);
				try {
					processLoadedVersions(await loadAllVersions());
				} catch (error) {
					console.error("Failed to load versions:", error);
				} finally {
					loadingTags.value.delete(tag);
					loadingTags.value = new Set(loadingTags.value);
				}
			}
			expandedTags.value.add(tag);
			expandedTags.value = new Set(expandedTags.value);
		}
		async function expandOtherVersions() {
			if (otherVersionsExpanded.value) {
				otherVersionsExpanded.value = false;
				return;
			}
			if (!hasLoadedAll.value) {
				otherVersionsLoading.value = true;
				try {
					processLoadedVersions(await loadAllVersions());
				} catch (error) {
					console.error("Failed to load versions:", error);
				} finally {
					otherVersionsLoading.value = false;
				}
			}
			otherVersionsExpanded.value = true;
		}
		function toggleMajorGroup(groupKey) {
			if (expandedMajorGroups.value.has(groupKey)) expandedMajorGroups.value.delete(groupKey);
			else expandedMajorGroups.value.add(groupKey);
		}
		function getTagVersions(tag) {
			return tagVersions.value.get(tag) ?? [];
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_DateTime = DateTime_default;
			const _component_ProvenanceBadge = ProvenanceBadge_default;
			if (unref(allTagRows).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.versions.title"),
				id: "versions"
			}, _attrs), {
				actions: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", `https://majors.nullvoxpopuli.com/q?packages=${__props.packageName}`)} target="_blank" rel="noopener noreferrer" class="text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("title", _ctx.$t("package.downloads.community_distribution"))}${_scopeId}><span class="i-carbon:load-balancer-network w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.downloads.community_distribution"))}</span></a>`);
					else return [createVNode("a", {
						href: `https://majors.nullvoxpopuli.com/q?packages=${__props.packageName}`,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded",
						title: _ctx.$t("package.downloads.community_distribution")
					}, [createVNode("span", {
						class: "i-carbon:load-balancer-network w-3.5 h-3.5",
						"aria-hidden": "true"
					}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.downloads.community_distribution")), 1)], 8, ["href", "title"])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-0.5 min-w-0"${_scopeId}><!--[-->`);
						ssrRenderList(unref(visibleTagRows), (row) => {
							_push(`<div${_scopeId}><div class="${ssrRenderClass([row.tag === "latest" ? "bg-bg-subtle rounded-lg" : "", "flex items-center gap-2 pe-2 px-1"])}"${_scopeId}>`);
							if (getTagVersions(row.tag).length > 1 || !unref(hasLoadedAll)) {
								_push(`<button type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors rounded-sm"${ssrRenderAttr("aria-expanded", unref(expandedTags).has(row.tag))}${ssrRenderAttr("aria-label", unref(expandedTags).has(row.tag) ? _ctx.$t("package.versions.collapse", { tag: row.tag }) : _ctx.$t("package.versions.expand", { tag: row.tag }))} data-testid="tag-expand-button"${_scopeId}>`);
								if (unref(loadingTags).has(row.tag)) _push(`<span class="i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin" data-testid="loading-spinner" aria-hidden="true"${_scopeId}></span>`);
								else _push(`<span class="${ssrRenderClass([unref(expandedTags).has(row.tag) ? "i-carbon:chevron-down" : "i-carbon:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true"${_scopeId}></span>`);
								_push(`</button>`);
							} else _push(`<span class="w-4"${_scopeId}></span>`);
							_push(`<div class="flex-1 py-1.5 min-w-0 flex gap-2 justify-between items-center"${_scopeId}><div class="overflow-hidden"${_scopeId}><div${_scopeId}>`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: versionRoute(row.primaryVersion.version),
								class: ["block font-mono text-sm transition-colors duration-200 truncate inline-flex items-center gap-1 focus-visible:outline-none focus-visible:text-accent", row.primaryVersion.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
								title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (row.primaryVersion.deprecated) _push(`<span class="i-carbon-warning-hex w-3.5 h-3.5 shrink-0" aria-hidden="true"${_scopeId}></span>`);
										else _push(`<!---->`);
										_push(` ${ssrInterpolate(row.primaryVersion.version)}`);
									} else return [row.primaryVersion.deprecated ? (openBlock(), createBlock("span", {
										key: 0,
										class: "i-carbon-warning-hex w-3.5 h-3.5 shrink-0",
										"aria-hidden": "true"
									})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(row.primaryVersion.version), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div>`);
							if (row.tags.length) {
								_push(`<div class="flex items-center gap-1 mt-0.5 flex-wrap"${_scopeId}><!--[-->`);
								ssrRenderList(row.tags, (tag) => {
									_push(`<span class="text-[9px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[150px]"${ssrRenderAttr("title", tag)}${_scopeId}>${ssrInterpolate(tag)}</span>`);
								});
								_push(`<!--]--></div>`);
							} else _push(`<!---->`);
							_push(`</div><div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
							if (row.primaryVersion.time) _push(ssrRenderComponent(_component_DateTime, {
								datetime: row.primaryVersion.time,
								year: "numeric",
								month: "short",
								day: "numeric",
								class: "text-xs text-fg-subtle"
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (row.primaryVersion.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
								"package-name": __props.packageName,
								version: row.primaryVersion.version,
								compact: ""
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div></div></div>`);
							if (unref(expandedTags).has(row.tag) && getTagVersions(row.tag).length > 1) {
								_push(`<div class="ms-4 ps-2 border-is border-border space-y-0.5 pe-2"${_scopeId}><!--[-->`);
								ssrRenderList(getTagVersions(row.tag).slice(1), (v) => {
									_push(`<div class="py-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}>`);
									_push(ssrRenderComponent(_component_NuxtLink, {
										to: versionRoute(v.version),
										class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", v.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-subtle hover:text-fg-muted"],
										title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												if (v.deprecated) _push(`<span class="i-carbon-warning-hex w-3 h-3 shrink-0" aria-hidden="true"${_scopeId}></span>`);
												else _push(`<!---->`);
												_push(` ${ssrInterpolate(v.version)}`);
											} else return [v.deprecated ? (openBlock(), createBlock("span", {
												key: 0,
												class: "i-carbon-warning-hex w-3 h-3 shrink-0",
												"aria-hidden": "true"
											})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(v.version), 1)];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`<div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
									if (v.time) _push(ssrRenderComponent(_component_DateTime, {
										datetime: v.time,
										class: "text-[10px] text-fg-subtle",
										year: "numeric",
										month: "short",
										day: "numeric"
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
									if (v.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
										"package-name": __props.packageName,
										version: v.version,
										compact: ""
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
									_push(`</div></div>`);
									if (v.tags?.length && unref(filterExcludedTags)(v.tags, row.tags).length) {
										_push(`<div class="flex items-center gap-1 mt-0.5"${_scopeId}><!--[-->`);
										ssrRenderList(unref(filterExcludedTags)(v.tags, row.tags), (tag) => {
											_push(`<span class="text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]"${ssrRenderAttr("title", tag)}${_scopeId}>${ssrInterpolate(tag)}</span>`);
										});
										_push(`<!--]--></div>`);
									} else _push(`<!---->`);
									_push(`</div>`);
								});
								_push(`<!--]--></div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						});
						_push(`<!--]--><div class="p-1"${_scopeId}><button type="button" class="flex items-center gap-2 text-start rounded-sm"${ssrRenderAttr("aria-expanded", unref(otherVersionsExpanded))}${ssrRenderAttr("aria-label", unref(otherVersionsExpanded) ? _ctx.$t("package.versions.collapse_other") : _ctx.$t("package.versions.expand_other"))}${_scopeId}><span class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors"${_scopeId}>`);
						if (unref(otherVersionsLoading)) _push(`<span class="i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin" data-testid="loading-spinner" aria-hidden="true"${_scopeId}></span>`);
						else _push(`<span class="${ssrRenderClass([unref(otherVersionsExpanded) ? "i-carbon:chevron-down" : "i-carbon:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true"${_scopeId}></span>`);
						_push(`</span><span class="text-xs text-fg-muted py-1.5"${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.other_versions"))} `);
						if (unref(hiddenTagRows).length > 0) _push(`<span class="text-fg-subtle"${_scopeId}> (${ssrInterpolate(_ctx.$t("package.versions.more_tagged", { count: unref(hiddenTagRows).length }, unref(hiddenTagRows).length))}) </span>`);
						else _push(`<!---->`);
						_push(`</span></button>`);
						if (unref(otherVersionsExpanded)) {
							_push(`<div class="ms-4 ps-2 border-is border-border space-y-0.5"${_scopeId}><!--[-->`);
							ssrRenderList(unref(hiddenTagRows), (row) => {
								_push(`<div class="py-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(_component_NuxtLink, {
									to: versionRoute(row.primaryVersion.version),
									class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", row.primaryVersion.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
									title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (row.primaryVersion.deprecated) _push(`<span class="i-carbon-warning-hex w-3 h-3 shrink-0" aria-hidden="true"${_scopeId}></span>`);
											else _push(`<!---->`);
											_push(` ${ssrInterpolate(row.primaryVersion.version)}`);
										} else return [row.primaryVersion.deprecated ? (openBlock(), createBlock("span", {
											key: 0,
											class: "i-carbon-warning-hex w-3 h-3 shrink-0",
											"aria-hidden": "true"
										})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(row.primaryVersion.version), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<div class="flex items-center gap-2 shrink-0 pe-2"${_scopeId}>`);
								if (row.primaryVersion.time) _push(ssrRenderComponent(_component_DateTime, {
									datetime: row.primaryVersion.time,
									class: "text-[10px] text-fg-subtle",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
								_push(`</div></div>`);
								if (row.tags.length) {
									_push(`<div class="flex items-center gap-1 mt-0.5 flex-wrap"${_scopeId}><!--[-->`);
									ssrRenderList(row.tags, (tag) => {
										_push(`<span class="text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]"${ssrRenderAttr("title", tag)}${_scopeId}>${ssrInterpolate(tag)}</span>`);
									});
									_push(`<!--]--></div>`);
								} else _push(`<!---->`);
								_push(`</div>`);
							});
							_push(`<!--]-->`);
							if (unref(otherMajorGroups).length > 0) {
								_push(`<!--[-->`);
								ssrRenderList(unref(otherMajorGroups), (group) => {
									_push(`<div${_scopeId}>`);
									if (group.versions.length > 1) {
										_push(`<div class="py-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2 min-w-0"${_scopeId}><button type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0 focus-visible:outline-accent/70 rounded-sm"${ssrRenderAttr("aria-expanded", unref(expandedMajorGroups).has(group.groupKey))}${ssrRenderAttr("aria-label", unref(expandedMajorGroups).has(group.groupKey) ? _ctx.$t("package.versions.collapse_major", { major: group.label }) : _ctx.$t("package.versions.expand_major", { major: group.label }))} data-testid="major-group-expand-button"${_scopeId}><span class="${ssrRenderClass([unref(expandedMajorGroups).has(group.groupKey) ? "i-carbon:chevron-down" : "i-carbon:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true"${_scopeId}></span></button>`);
										if (group.versions[0]?.version) _push(ssrRenderComponent(_component_NuxtLink, {
											to: versionRoute(group.versions[0]?.version),
											class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", group.versions[0]?.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
											title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													if (group.versions[0]?.deprecated) _push(`<span class="i-carbon-warning-hex w-3 h-3 shrink-0" aria-hidden="true"${_scopeId}></span>`);
													else _push(`<!---->`);
													_push(` ${ssrInterpolate(group.versions[0]?.version)}`);
												} else return [group.versions[0]?.deprecated ? (openBlock(), createBlock("span", {
													key: 0,
													class: "i-carbon-warning-hex w-3 h-3 shrink-0",
													"aria-hidden": "true"
												})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(group.versions[0]?.version), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div><div class="flex items-center gap-2 shrink-0 pe-2"${_scopeId}>`);
										if (group.versions[0]?.time) _push(ssrRenderComponent(_component_DateTime, {
											datetime: group.versions[0]?.time,
											class: "text-[10px] text-fg-subtle",
											year: "numeric",
											month: "short",
											day: "numeric"
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (group.versions[0]?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
											"package-name": __props.packageName,
											version: group.versions[0]?.version,
											compact: ""
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div></div>`);
										if (group.versions[0]?.tags?.length) {
											_push(`<div class="flex items-center gap-1 ms-5 flex-wrap"${_scopeId}><!--[-->`);
											ssrRenderList(group.versions[0].tags, (tag) => {
												_push(`<span class="text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]"${ssrRenderAttr("title", tag)}${_scopeId}>${ssrInterpolate(tag)}</span>`);
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else {
										_push(`<div class="py-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2 min-w-0"${_scopeId}><span class="w-4 shrink-0"${_scopeId}></span>`);
										if (group.versions[0]?.version) _push(ssrRenderComponent(_component_NuxtLink, {
											to: versionRoute(group.versions[0]?.version),
											class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", group.versions[0]?.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
											title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													if (group.versions[0]?.deprecated) _push(`<span class="i-carbon-warning-hex w-3 h-3 shrink-0" aria-hidden="true"${_scopeId}></span>`);
													else _push(`<!---->`);
													_push(` ${ssrInterpolate(group.versions[0]?.version)}`);
												} else return [group.versions[0]?.deprecated ? (openBlock(), createBlock("span", {
													key: 0,
													class: "i-carbon-warning-hex w-3 h-3 shrink-0",
													"aria-hidden": "true"
												})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(group.versions[0]?.version), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div><div class="flex items-center gap-2 shrink-0 pe-2"${_scopeId}>`);
										if (group.versions[0]?.time) _push(ssrRenderComponent(_component_DateTime, {
											datetime: group.versions[0]?.time,
											class: "text-[10px] text-fg-subtle",
											year: "numeric",
											month: "short",
											day: "numeric"
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (group.versions[0]?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
											"package-name": __props.packageName,
											version: group.versions[0]?.version,
											compact: ""
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div></div>`);
										if (group.versions[0]?.tags?.length) {
											_push(`<div class="flex items-center gap-1 ms-5"${_scopeId}><!--[-->`);
											ssrRenderList(group.versions[0].tags, (tag) => {
												_push(`<span class="text-[8px] font-semibold text-fg-subtle uppercase tracking-wide"${_scopeId}>${ssrInterpolate(tag)}</span>`);
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									}
									if (unref(expandedMajorGroups).has(group.groupKey) && group.versions.length > 1) {
										_push(`<div class="ms-6 space-y-0.5"${_scopeId}><!--[-->`);
										ssrRenderList(group.versions.slice(1), (v) => {
											_push(`<div class="py-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}>`);
											_push(ssrRenderComponent(_component_NuxtLink, {
												to: versionRoute(v.version),
												class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", v.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-subtle hover:text-fg-muted"],
												title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														if (v.deprecated) _push(`<span class="i-carbon-warning-hex w-3 h-3 shrink-0" aria-hidden="true"${_scopeId}></span>`);
														else _push(`<!---->`);
														_push(` ${ssrInterpolate(v.version)}`);
													} else return [v.deprecated ? (openBlock(), createBlock("span", {
														key: 0,
														class: "i-carbon-warning-hex w-3 h-3 shrink-0",
														"aria-hidden": "true"
													})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(v.version), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`<div class="flex items-center gap-2 shrink-0 pe-2"${_scopeId}>`);
											if (v.time) _push(ssrRenderComponent(_component_DateTime, {
												datetime: v.time,
												class: "text-[10px] text-fg-subtle",
												year: "numeric",
												month: "short",
												day: "numeric"
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											if (v.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
												"package-name": __props.packageName,
												version: v.version,
												compact: ""
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											_push(`</div></div>`);
											if (v.tags?.length) {
												_push(`<div class="flex items-center gap-1 mt-0.5"${_scopeId}><!--[-->`);
												ssrRenderList(v.tags, (tag) => {
													_push(`<span class="text-[8px] font-semibold text-fg-subtle uppercase tracking-wide"${_scopeId}>${ssrInterpolate(tag)}</span>`);
												});
												_push(`<!--]--></div>`);
											} else _push(`<!---->`);
											_push(`</div>`);
										});
										_push(`<!--]--></div>`);
									} else _push(`<!---->`);
									_push(`</div>`);
								});
								_push(`<!--]-->`);
							} else if (unref(hasLoadedAll) && unref(hiddenTagRows).length === 0) _push(`<div class="py-1 text-xs text-fg-subtle"${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.all_covered"))}</div>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "space-y-0.5 min-w-0" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(visibleTagRows), (row) => {
						return openBlock(), createBlock("div", { key: row.id }, [createVNode("div", { class: ["flex items-center gap-2 pe-2 px-1", row.tag === "latest" ? "bg-bg-subtle rounded-lg" : ""] }, [getTagVersions(row.tag).length > 1 || !unref(hasLoadedAll) ? (openBlock(), createBlock("button", {
							key: 0,
							type: "button",
							class: "w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors rounded-sm",
							"aria-expanded": unref(expandedTags).has(row.tag),
							"aria-label": unref(expandedTags).has(row.tag) ? _ctx.$t("package.versions.collapse", { tag: row.tag }) : _ctx.$t("package.versions.expand", { tag: row.tag }),
							"data-testid": "tag-expand-button",
							onClick: ($event) => expandTagRow(row.tag)
						}, [unref(loadingTags).has(row.tag) ? (openBlock(), createBlock("span", {
							key: 0,
							class: "i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin",
							"data-testid": "loading-spinner",
							"aria-hidden": "true"
						})) : (openBlock(), createBlock("span", {
							key: 1,
							class: ["w-3 h-3 transition-transform duration-200 rtl-flip", unref(expandedTags).has(row.tag) ? "i-carbon:chevron-down" : "i-carbon:chevron-right"],
							"aria-hidden": "true"
						}, null, 2))], 8, [
							"aria-expanded",
							"aria-label",
							"onClick"
						])) : (openBlock(), createBlock("span", {
							key: 1,
							class: "w-4"
						})), createVNode("div", { class: "flex-1 py-1.5 min-w-0 flex gap-2 justify-between items-center" }, [createVNode("div", { class: "overflow-hidden" }, [createVNode("div", null, [createVNode(_component_NuxtLink, {
							to: versionRoute(row.primaryVersion.version),
							class: ["block font-mono text-sm transition-colors duration-200 truncate inline-flex items-center gap-1 focus-visible:outline-none focus-visible:text-accent", row.primaryVersion.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
							title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version
						}, {
							default: withCtx(() => [row.primaryVersion.deprecated ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-carbon-warning-hex w-3.5 h-3.5 shrink-0",
								"aria-hidden": "true"
							})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(row.primaryVersion.version), 1)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title"
						])]), row.tags.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex items-center gap-1 mt-0.5 flex-wrap"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(row.tags, (tag) => {
							return openBlock(), createBlock("span", {
								key: tag,
								class: "text-[9px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[150px]",
								title: tag
							}, toDisplayString(tag), 9, ["title"]);
						}), 128))])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [row.primaryVersion.time ? (openBlock(), createBlock(_component_DateTime, {
							key: 0,
							datetime: row.primaryVersion.time,
							year: "numeric",
							month: "short",
							day: "numeric",
							class: "text-xs text-fg-subtle"
						}, null, 8, ["datetime"])) : createCommentVNode("", true), row.primaryVersion.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
							key: 1,
							"package-name": __props.packageName,
							version: row.primaryVersion.version,
							compact: ""
						}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])])], 2), unref(expandedTags).has(row.tag) && getTagVersions(row.tag).length > 1 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "ms-4 ps-2 border-is border-border space-y-0.5 pe-2"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(getTagVersions(row.tag).slice(1), (v) => {
							return openBlock(), createBlock("div", {
								key: v.version,
								class: "py-1"
							}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_NuxtLink, {
								to: versionRoute(v.version),
								class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", v.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-subtle hover:text-fg-muted"],
								title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version
							}, {
								default: withCtx(() => [v.deprecated ? (openBlock(), createBlock("span", {
									key: 0,
									class: "i-carbon-warning-hex w-3 h-3 shrink-0",
									"aria-hidden": "true"
								})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(v.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title"
							]), createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [v.time ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: v.time,
								class: "text-[10px] text-fg-subtle",
								year: "numeric",
								month: "short",
								day: "numeric"
							}, null, 8, ["datetime"])) : createCommentVNode("", true), v.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
								key: 1,
								"package-name": __props.packageName,
								version: v.version,
								compact: ""
							}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), v.tags?.length && unref(filterExcludedTags)(v.tags, row.tags).length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 mt-0.5"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(filterExcludedTags)(v.tags, row.tags), (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: "text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]",
									title: tag
								}, toDisplayString(tag), 9, ["title"]);
							}), 128))])) : createCommentVNode("", true)]);
						}), 128))])) : createCommentVNode("", true)]);
					}), 128)), createVNode("div", { class: "p-1" }, [createVNode("button", {
						type: "button",
						class: "flex items-center gap-2 text-start rounded-sm",
						"aria-expanded": unref(otherVersionsExpanded),
						"aria-label": unref(otherVersionsExpanded) ? _ctx.$t("package.versions.collapse_other") : _ctx.$t("package.versions.expand_other"),
						onClick: expandOtherVersions
					}, [createVNode("span", { class: "w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors" }, [unref(otherVersionsLoading) ? (openBlock(), createBlock("span", {
						key: 0,
						class: "i-carbon:rotate-180 w-3 h-3 motion-safe:animate-spin",
						"data-testid": "loading-spinner",
						"aria-hidden": "true"
					})) : (openBlock(), createBlock("span", {
						key: 1,
						class: ["w-3 h-3 transition-transform duration-200 rtl-flip", unref(otherVersionsExpanded) ? "i-carbon:chevron-down" : "i-carbon:chevron-right"],
						"aria-hidden": "true"
					}, null, 2))]), createVNode("span", { class: "text-xs text-fg-muted py-1.5" }, [createTextVNode(toDisplayString(_ctx.$t("package.versions.other_versions")) + " ", 1), unref(hiddenTagRows).length > 0 ? (openBlock(), createBlock("span", {
						key: 0,
						class: "text-fg-subtle"
					}, " (" + toDisplayString(_ctx.$t("package.versions.more_tagged", { count: unref(hiddenTagRows).length }, unref(hiddenTagRows).length)) + ") ", 1)) : createCommentVNode("", true)])], 8, ["aria-expanded", "aria-label"]), unref(otherVersionsExpanded) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "ms-4 ps-2 border-is border-border space-y-0.5"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(hiddenTagRows), (row) => {
						return openBlock(), createBlock("div", {
							key: row.id,
							class: "py-1"
						}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_NuxtLink, {
							to: versionRoute(row.primaryVersion.version),
							class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", row.primaryVersion.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
							title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version
						}, {
							default: withCtx(() => [row.primaryVersion.deprecated ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-carbon-warning-hex w-3 h-3 shrink-0",
								"aria-hidden": "true"
							})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(row.primaryVersion.version), 1)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title"
						]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2" }, [row.primaryVersion.time ? (openBlock(), createBlock(_component_DateTime, {
							key: 0,
							datetime: row.primaryVersion.time,
							class: "text-[10px] text-fg-subtle",
							year: "numeric",
							month: "short",
							day: "numeric"
						}, null, 8, ["datetime"])) : createCommentVNode("", true)])]), row.tags.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex items-center gap-1 mt-0.5 flex-wrap"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(row.tags, (tag) => {
							return openBlock(), createBlock("span", {
								key: tag,
								class: "text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]",
								title: tag
							}, toDisplayString(tag), 9, ["title"]);
						}), 128))])) : createCommentVNode("", true)]);
					}), 128)), unref(otherMajorGroups).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(otherMajorGroups), (group) => {
						return openBlock(), createBlock("div", { key: group.groupKey }, [group.versions.length > 1 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "py-1"
						}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [createVNode("button", {
							type: "button",
							class: "w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0 focus-visible:outline-accent/70 rounded-sm",
							"aria-expanded": unref(expandedMajorGroups).has(group.groupKey),
							"aria-label": unref(expandedMajorGroups).has(group.groupKey) ? _ctx.$t("package.versions.collapse_major", { major: group.label }) : _ctx.$t("package.versions.expand_major", { major: group.label }),
							"data-testid": "major-group-expand-button",
							onClick: ($event) => toggleMajorGroup(group.groupKey)
						}, [createVNode("span", {
							class: ["w-3 h-3 transition-transform duration-200 rtl-flip", unref(expandedMajorGroups).has(group.groupKey) ? "i-carbon:chevron-down" : "i-carbon:chevron-right"],
							"aria-hidden": "true"
						}, null, 2)], 8, [
							"aria-expanded",
							"aria-label",
							"onClick"
						]), group.versions[0]?.version ? (openBlock(), createBlock(_component_NuxtLink, {
							key: 0,
							to: versionRoute(group.versions[0]?.version),
							class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", group.versions[0]?.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
							title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version
						}, {
							default: withCtx(() => [group.versions[0]?.deprecated ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-carbon-warning-hex w-3 h-3 shrink-0",
								"aria-hidden": "true"
							})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(group.versions[0]?.version), 1)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title"
						])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2" }, [group.versions[0]?.time ? (openBlock(), createBlock(_component_DateTime, {
							key: 0,
							datetime: group.versions[0]?.time,
							class: "text-[10px] text-fg-subtle",
							year: "numeric",
							month: "short",
							day: "numeric"
						}, null, 8, ["datetime"])) : createCommentVNode("", true), group.versions[0]?.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
							key: 1,
							"package-name": __props.packageName,
							version: group.versions[0]?.version,
							compact: ""
						}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), group.versions[0]?.tags?.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex items-center gap-1 ms-5 flex-wrap"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions[0].tags, (tag) => {
							return openBlock(), createBlock("span", {
								key: tag,
								class: "text-[8px] font-semibold text-fg-subtle uppercase tracking-wide truncate max-w-[120px]",
								title: tag
							}, toDisplayString(tag), 9, ["title"]);
						}), 128))])) : createCommentVNode("", true)])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "py-1"
						}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [createVNode("span", { class: "w-4 shrink-0" }), group.versions[0]?.version ? (openBlock(), createBlock(_component_NuxtLink, {
							key: 0,
							to: versionRoute(group.versions[0]?.version),
							class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", group.versions[0]?.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-muted hover:text-fg"],
							title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version
						}, {
							default: withCtx(() => [group.versions[0]?.deprecated ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-carbon-warning-hex w-3 h-3 shrink-0",
								"aria-hidden": "true"
							})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(group.versions[0]?.version), 1)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title"
						])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2" }, [group.versions[0]?.time ? (openBlock(), createBlock(_component_DateTime, {
							key: 0,
							datetime: group.versions[0]?.time,
							class: "text-[10px] text-fg-subtle",
							year: "numeric",
							month: "short",
							day: "numeric"
						}, null, 8, ["datetime"])) : createCommentVNode("", true), group.versions[0]?.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
							key: 1,
							"package-name": __props.packageName,
							version: group.versions[0]?.version,
							compact: ""
						}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), group.versions[0]?.tags?.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex items-center gap-1 ms-5"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions[0].tags, (tag) => {
							return openBlock(), createBlock("span", {
								key: tag,
								class: "text-[8px] font-semibold text-fg-subtle uppercase tracking-wide"
							}, toDisplayString(tag), 1);
						}), 128))])) : createCommentVNode("", true)])), unref(expandedMajorGroups).has(group.groupKey) && group.versions.length > 1 ? (openBlock(), createBlock("div", {
							key: 2,
							class: "ms-6 space-y-0.5"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions.slice(1), (v) => {
							return openBlock(), createBlock("div", {
								key: v.version,
								class: "py-1"
							}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_NuxtLink, {
								to: versionRoute(v.version),
								class: ["block font-mono text-xs transition-colors duration-200 truncate inline-flex items-center gap-1", v.deprecated ? "text-red-400 hover:text-red-300" : "text-fg-subtle hover:text-fg-muted"],
								title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version
							}, {
								default: withCtx(() => [v.deprecated ? (openBlock(), createBlock("span", {
									key: 0,
									class: "i-carbon-warning-hex w-3 h-3 shrink-0",
									"aria-hidden": "true"
								})) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(v.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title"
							]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2" }, [v.time ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: v.time,
								class: "text-[10px] text-fg-subtle",
								year: "numeric",
								month: "short",
								day: "numeric"
							}, null, 8, ["datetime"])) : createCommentVNode("", true), v.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
								key: 1,
								"package-name": __props.packageName,
								version: v.version,
								compact: ""
							}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), v.tags?.length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 mt-0.5"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(v.tags, (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: "text-[8px] font-semibold text-fg-subtle uppercase tracking-wide"
								}, toDisplayString(tag), 1);
							}), 128))])) : createCommentVNode("", true)]);
						}), 128))])) : createCommentVNode("", true)]);
					}), 128)) : unref(hasLoadedAll) && unref(hiddenTagRows).length === 0 ? (openBlock(), createBlock("div", {
						key: 1,
						class: "py-1 text-xs text-fg-subtle"
					}, toDisplayString(_ctx.$t("package.versions.all_covered")), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true)])])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$6 = Versions_vue_vue_type_script_setup_true_lang_default.setup;
Versions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Versions.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Versions_default = Object.assign(Versions_vue_vue_type_script_setup_true_lang_default, { __name: "PackageVersions" });
function constraintIncludesPrerelease(constraint) {
	return /-(alpha|beta|rc|next|canary|dev|preview|pre|experimental)/i.test(constraint) || /-\d/.test(constraint);
}
function isNonSemverConstraint(constraint) {
	return constraint.startsWith("git") || constraint.startsWith("http") || constraint.startsWith("file:") || constraint.startsWith("npm:") || constraint.startsWith("link:") || constraint.startsWith("workspace:") || constraint.includes("/");
}
function getOutdatedTooltip(info, t) {
	if (info.majorsBehind > 0) return t("package.dependencies.outdated_major", {
		count: info.majorsBehind,
		latest: info.latest
	}, info.majorsBehind);
	if (info.minorsBehind > 0) return t("package.dependencies.outdated_minor", {
		count: info.minorsBehind,
		latest: info.latest
	}, info.minorsBehind);
	return t("package.dependencies.outdated_patch", { latest: info.latest });
}
function getVersionClass(info) {
	if (!info) return "text-fg-subtle";
	if (info.majorsBehind === 0 && info.minorsBehind === 0 && info.resolved === info.latest) return "text-green-500 cursor-help";
	if (info.majorsBehind > 0) return "text-red-500 cursor-help";
	if (info.minorsBehind > 0) return "text-orange-500 cursor-help";
	return "text-yellow-500 cursor-help";
}
var packumentCache = /* @__PURE__ */ new Map();
async function checkDependencyOutdated(cachedFetch, packageName, constraint) {
	if (isNonSemverConstraint(constraint)) return null;
	let packument;
	const cached = packumentCache.get(packageName);
	if (cached) packument = await cached;
	else {
		const promise = cachedFetch(`${NPM_REGISTRY}/${encodePackageName(packageName)}`).then(({ data }) => data).catch(() => null);
		packumentCache.set(packageName, promise);
		packument = await promise;
	}
	if (!packument) return null;
	const latestTag = packument["dist-tags"]?.latest;
	if (!latestTag) return null;
	if (constraint === "latest") return {
		resolved: latestTag,
		latest: latestTag,
		majorsBehind: 0,
		minorsBehind: 0,
		diffType: null
	};
	let versions = Object.keys(packument.versions);
	if (!constraintIncludesPrerelease(constraint)) versions = versions.filter((v) => !prerelease(v));
	const resolved = maxSatisfying(versions, constraint);
	if (!resolved) return null;
	if (resolved === latestTag) return null;
	if (gt(resolved, latestTag)) return null;
	const diffType = diff(resolved, latestTag);
	const majorsBehind = major(latestTag) - major(resolved);
	return {
		resolved,
		latest: latestTag,
		majorsBehind,
		minorsBehind: majorsBehind === 0 ? minor(latestTag) - minor(resolved) : 0,
		diffType
	};
}
function useOutdatedDependencies(dependencies) {
	const cachedFetch = useCachedFetch();
	const outdated = shallowRef({});
	async function fetchOutdatedInfo(deps) {
		if (!deps || Object.keys(deps).length === 0) {
			outdated.value = {};
			return;
		}
		const batchResults = await mapWithConcurrency(Object.entries(deps), async ([name, constraint]) => {
			return [name, await checkDependencyOutdated(cachedFetch, name, constraint)];
		}, 5);
		const results = {};
		for (const [name, info] of batchResults) if (info) results[name] = info;
		outdated.value = results;
	}
	watch(() => toValue(dependencies), (deps) => {
		fetchOutdatedInfo(deps);
	}, { immediate: true });
	return outdated;
}
var InstallScripts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstallScripts",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		installScripts: {}
	},
	setup(__props) {
		const props = __props;
		const outdatedNpxDeps = useOutdatedDependencies(() => props.installScripts.npxDependencies);
		const hasNpxDeps = computed(() => Object.keys(props.installScripts.npxDependencies).length > 0);
		const sortedNpxDeps = computed(() => {
			return Object.entries(props.installScripts.npxDependencies).sort(([a], [b]) => a.localeCompare(b));
		});
		const isExpanded = shallowRef(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.install_scripts.title"),
				id: "installScripts",
				icon: "i-carbon:warning-alt w-3 h-3 text-yellow-500"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<dl class="space-y-2 m-0"${_scopeId}><!--[-->`);
						ssrRenderList(__props.installScripts.scripts, (scriptName) => {
							_push(`<div${_scopeId}><dt class="font-mono text-xs text-fg-muted"${_scopeId}>${ssrInterpolate(scriptName)}</dt><dd tabindex="0" class="font-mono text-sm text-fg-subtle m-0 truncate focus:whitespace-normal focus:overflow-visible cursor-help rounded focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"${ssrRenderAttr("title", __props.installScripts.content?.[scriptName])}${_scopeId}>${ssrInterpolate(__props.installScripts.content?.[scriptName] || _ctx.$t("package.install_scripts.script_label"))}</dd></div>`);
						});
						_push(`<!--]--></dl>`);
						if (unref(hasNpxDeps)) {
							_push(`<div class="mt-3"${_scopeId}><button type="button" class="flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("aria-expanded", unref(isExpanded))} aria-controls="npx-packages-details"${_scopeId}><span class="${ssrRenderClass([{ "rotate-90": unref(isExpanded) }, "i-carbon:chevron-right rtl-flip w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("package.install_scripts.npx_packages", { count: unref(sortedNpxDeps).length }, unref(sortedNpxDeps).length))}</button><ul id="npx-packages-details" class="mt-2 space-y-1 list-none m-0 p-0 ps-4" style="${ssrRenderStyle(unref(isExpanded) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
							ssrRenderList(unref(sortedNpxDeps), ([dep, version]) => {
								_push(`<li class="flex items-center justify-between py-0.5 text-sm gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(_component_NuxtLink, {
									to: {
										name: "package",
										params: { package: dep.split("/") }
									},
									class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(dep)}`);
										else return [createTextVNode(toDisplayString(dep), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<span class="flex items-center gap-1"${_scopeId}>`);
								if (unref(outdatedNpxDeps)[dep] && unref(outdatedNpxDeps)[dep].resolved !== unref(outdatedNpxDeps)[dep].latest) _push(`<span class="${ssrRenderClass([unref(getVersionClass)(unref(outdatedNpxDeps)[dep]), "shrink-0"])}"${ssrRenderAttr("title", unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t))} aria-hidden="true"${_scopeId}><span class="i-carbon:warning-alt w-3 h-3"${_scopeId}></span></span>`);
								else _push(`<!---->`);
								_push(`<span class="${ssrRenderClass([unref(getVersionClass)(unref(outdatedNpxDeps)[dep]), "font-mono text-xs text-end truncate"])}"${ssrRenderAttr("title", unref(outdatedNpxDeps)[dep] ? unref(outdatedNpxDeps)[dep].resolved === unref(outdatedNpxDeps)[dep].latest ? _ctx.$t("package.install_scripts.currently", { version: unref(outdatedNpxDeps)[dep].latest }) : unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t) : version)}${_scopeId}>${ssrInterpolate(version)}</span></span></li>`);
							});
							_push(`<!--]--></ul></div>`);
						} else _push(`<!---->`);
					} else return [createVNode("dl", { class: "space-y-2 m-0" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.installScripts.scripts, (scriptName) => {
						return openBlock(), createBlock("div", { key: scriptName }, [createVNode("dt", { class: "font-mono text-xs text-fg-muted" }, toDisplayString(scriptName), 1), createVNode("dd", {
							tabindex: "0",
							class: "font-mono text-sm text-fg-subtle m-0 truncate focus:whitespace-normal focus:overflow-visible cursor-help rounded focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
							title: __props.installScripts.content?.[scriptName]
						}, toDisplayString(__props.installScripts.content?.[scriptName] || _ctx.$t("package.install_scripts.script_label")), 9, ["title"])]);
					}), 128))]), unref(hasNpxDeps) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "mt-3"
					}, [createVNode("button", {
						type: "button",
						class: "flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded",
						"aria-expanded": unref(isExpanded),
						"aria-controls": "npx-packages-details",
						onClick: ($event) => isExpanded.value = !unref(isExpanded)
					}, [createVNode("span", {
						class: ["i-carbon:chevron-right rtl-flip w-3 h-3 transition-transform duration-200", { "rotate-90": unref(isExpanded) }],
						"aria-hidden": "true"
					}, null, 2), createTextVNode(" " + toDisplayString(_ctx.$t("package.install_scripts.npx_packages", { count: unref(sortedNpxDeps).length }, unref(sortedNpxDeps).length)), 1)], 8, ["aria-expanded", "onClick"]), withDirectives(createVNode("ul", {
						id: "npx-packages-details",
						class: "mt-2 space-y-1 list-none m-0 p-0 ps-4"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedNpxDeps), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-0.5 text-sm gap-2"
						}, [createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: dep.split("/") }
							},
							class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode("span", { class: "flex items-center gap-1" }, [unref(outdatedNpxDeps)[dep] && unref(outdatedNpxDeps)[dep].resolved !== unref(outdatedNpxDeps)[dep].latest ? (openBlock(), createBlock("span", {
							key: 0,
							class: ["shrink-0", unref(getVersionClass)(unref(outdatedNpxDeps)[dep])],
							title: unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t),
							"aria-hidden": "true"
						}, [createVNode("span", { class: "i-carbon:warning-alt w-3 h-3" })], 10, ["title"])) : createCommentVNode("", true), createVNode("span", {
							class: ["font-mono text-xs text-end truncate", unref(getVersionClass)(unref(outdatedNpxDeps)[dep])],
							title: unref(outdatedNpxDeps)[dep] ? unref(outdatedNpxDeps)[dep].resolved === unref(outdatedNpxDeps)[dep].latest ? _ctx.$t("package.install_scripts.currently", { version: unref(outdatedNpxDeps)[dep].latest }) : unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t) : version
						}, toDisplayString(version), 11, ["title"])])]);
					}), 128))], 512), [[vShow, unref(isExpanded)]])])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
		};
	}
});
var _sfc_setup$5 = InstallScripts_vue_vue_type_script_setup_true_lang_default.setup;
InstallScripts_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/InstallScripts.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var InstallScripts_default = Object.assign(InstallScripts_vue_vue_type_script_setup_true_lang_default, { __name: "PackageInstallScripts" });
function useDependencyAnalysis(packageName, version) {
	return useFetch(() => `/api/registry/vulnerabilities/${encodePackageName(toValue(packageName))}/v/${toValue(version)}`, "$YrUoddHvgS");
}
var Dependencies_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Dependencies",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		version: {},
		dependencies: {},
		peerDependencies: {},
		peerDependenciesMeta: {},
		optionalDependencies: {}
	},
	setup(__props) {
		const props = __props;
		const outdatedDeps = useOutdatedDependencies(() => props.dependencies);
		const { data: vulnTree } = useDependencyAnalysis(() => props.packageName, () => props.version);
		function getVulnerableDepInfo(depName) {
			if (!vulnTree.value) return null;
			return vulnTree.value.vulnerablePackages.find((p) => p.name === depName && p.depth === "direct");
		}
		function getDeprecatedDepInfo(depName) {
			if (!vulnTree.value) return null;
			return vulnTree.value.deprecatedPackages.find((p) => p.name === depName && p.depth === "direct");
		}
		const depsExpanded = shallowRef(false);
		const peerDepsExpanded = shallowRef(false);
		const optionalDepsExpanded = shallowRef(false);
		const sortedDependencies = computed(() => {
			if (!props.dependencies) return [];
			return Object.entries(props.dependencies).sort(([a], [b]) => a.localeCompare(b));
		});
		const sortedPeerDependencies = computed(() => {
			if (!props.peerDependencies) return [];
			return Object.entries(props.peerDependencies).map(([name, version]) => ({
				name,
				version,
				optional: props.peerDependenciesMeta?.[name]?.optional ?? false
			})).sort((a, b) => {
				if (a.optional !== b.optional) return a.optional ? 1 : -1;
				return a.name.localeCompare(b.name);
			});
		});
		const sortedOptionalDependencies = computed(() => {
			if (!props.optionalDependencies) return [];
			return Object.entries(props.optionalDependencies).sort(([a], [b]) => a.localeCompare(b));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}>`);
			if (unref(sortedDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "dependencies",
				title: _ctx.$t("package.dependencies.title", { count: unref(sortedDependencies).length })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedDependencies).slice(0, unref(depsExpanded) ? void 0 : 10), ([dep, version]) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: dep.split("/") }
								},
								class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0 flex-1"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(dep)}`);
									else return [createTextVNode(toDisplayString(dep), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<span class="flex items-center gap-1 max-w-[40%]"${_scopeId}>`);
							if (unref(outdatedDeps)[dep]) _push(`<span class="${ssrRenderClass([unref(getVersionClass)(unref(outdatedDeps)[dep]), "shrink-0"])}"${ssrRenderAttr("title", unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t))} aria-hidden="true"${_scopeId}><span class="i-carbon:warning-alt w-3 h-3"${_scopeId}></span></span>`);
							else _push(`<!---->`);
							if (getVulnerableDepInfo(dep)) _push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										getVulnerableDepInfo(dep).version
									] }
								},
								class: ["shrink-0", unref(SEVERITY_TEXT_COLORS)[unref(getHighestSeverity)(getVulnerableDepInfo(dep).counts)]],
								title: `${getVulnerableDepInfo(dep).counts.total} vulnerabilities`
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="i-carbon:security w-3 h-3" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.dependencies.view_vulnerabilities"))}</span>`);
									else return [createVNode("span", {
										class: "i-carbon:security w-3 h-3",
										"aria-hidden": "true"
									}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.dependencies.view_vulnerabilities")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (getDeprecatedDepInfo(dep)) _push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										getDeprecatedDepInfo(dep).version
									] }
								},
								class: "shrink-0 text-purple-500",
								title: getDeprecatedDepInfo(dep).message
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="i-carbon-warning-hex w-3 h-3" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.deprecated.label"))}</span>`);
									else return [createVNode("span", {
										class: "i-carbon-warning-hex w-3 h-3",
										"aria-hidden": "true"
									}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.deprecated.label")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										version
									] }
								},
								class: ["font-mono text-xs text-end truncate", unref(getVersionClass)(unref(outdatedDeps)[dep])],
								title: unref(outdatedDeps)[dep] ? unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t) : version
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(version)}`);
									else return [createTextVNode(toDisplayString(version), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							if (unref(outdatedDeps)[dep]) _push(`<span class="sr-only"${_scopeId}> (${ssrInterpolate(unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t))}) </span>`);
							else _push(`<!---->`);
							if (getVulnerableDepInfo(dep)) _push(`<span class="sr-only"${_scopeId}> (${ssrInterpolate(getVulnerableDepInfo(dep).counts.total)} vulnerabilities) </span>`);
							else _push(`<!---->`);
							_push(`</span></li>`);
						});
						_push(`<!--]--></ul>`);
						if (unref(sortedDependencies).length > 10 && !unref(depsExpanded)) _push(`<button type="button" class="my-2 ms-1 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.dependencies.show_all", { count: unref(sortedDependencies).length }))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedDependencies).slice(0, unref(depsExpanded) ? void 0 : 10), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-1 text-sm gap-2"
						}, [createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: dep.split("/") }
							},
							class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0 flex-1"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode("span", { class: "flex items-center gap-1 max-w-[40%]" }, [
							unref(outdatedDeps)[dep] ? (openBlock(), createBlock("span", {
								key: 0,
								class: ["shrink-0", unref(getVersionClass)(unref(outdatedDeps)[dep])],
								title: unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t),
								"aria-hidden": "true"
							}, [createVNode("span", { class: "i-carbon:warning-alt w-3 h-3" })], 10, ["title"])) : createCommentVNode("", true),
							getVulnerableDepInfo(dep) ? (openBlock(), createBlock(_component_NuxtLink, {
								key: 1,
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										getVulnerableDepInfo(dep).version
									] }
								},
								class: ["shrink-0", unref(SEVERITY_TEXT_COLORS)[unref(getHighestSeverity)(getVulnerableDepInfo(dep).counts)]],
								title: `${getVulnerableDepInfo(dep).counts.total} vulnerabilities`
							}, {
								default: withCtx(() => [createVNode("span", {
									class: "i-carbon:security w-3 h-3",
									"aria-hidden": "true"
								}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.dependencies.view_vulnerabilities")), 1)]),
								_: 1
							}, 8, [
								"to",
								"class",
								"title"
							])) : createCommentVNode("", true),
							getDeprecatedDepInfo(dep) ? (openBlock(), createBlock(_component_NuxtLink, {
								key: 2,
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										getDeprecatedDepInfo(dep).version
									] }
								},
								class: "shrink-0 text-purple-500",
								title: getDeprecatedDepInfo(dep).message
							}, {
								default: withCtx(() => [createVNode("span", {
									class: "i-carbon-warning-hex w-3 h-3",
									"aria-hidden": "true"
								}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.deprecated.label")), 1)]),
								_: 1
							}, 8, ["to", "title"])) : createCommentVNode("", true),
							createVNode(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										version
									] }
								},
								class: ["font-mono text-xs text-end truncate", unref(getVersionClass)(unref(outdatedDeps)[dep])],
								title: unref(outdatedDeps)[dep] ? unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t) : version
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title"
							]),
							unref(outdatedDeps)[dep] ? (openBlock(), createBlock("span", {
								key: 3,
								class: "sr-only"
							}, " (" + toDisplayString(unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)) + ") ", 1)) : createCommentVNode("", true),
							getVulnerableDepInfo(dep) ? (openBlock(), createBlock("span", {
								key: 4,
								class: "sr-only"
							}, " (" + toDisplayString(getVulnerableDepInfo(dep).counts.total) + " vulnerabilities) ", 1)) : createCommentVNode("", true)
						])]);
					}), 128))], 8, ["aria-label"]), unref(sortedDependencies).length > 10 && !unref(depsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "my-2 ms-1 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
						onClick: ($event) => depsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.dependencies.show_all", { count: unref(sortedDependencies).length })), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(sortedPeerDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "peer-dependencies",
				title: _ctx.$t("package.peer_dependencies.title", { count: unref(sortedPeerDependencies).length })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.peer_dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedPeerDependencies).slice(0, unref(peerDepsExpanded) ? void 0 : 10), (peer) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-1 min-w-0"${_scopeId}><div class="flex items-center gap-1 min-w-0 flex-1"${_scopeId}>`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: peer.name.split("/") }
								},
								class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(peer.name)}`);
									else return [createTextVNode(toDisplayString(peer.name), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							if (peer.optional) _push(`<span class="px-1 py-0.5 font-mono text-[10px] text-fg-subtle bg-bg-muted border border-border rounded shrink-0"${ssrRenderAttr("title", _ctx.$t("package.dependencies.optional"))}${_scopeId}>${ssrInterpolate(_ctx.$t("package.dependencies.optional"))}</span>`);
							else _push(`<!---->`);
							_push(`</div>`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...peer.name.split("/"),
										"v",
										peer.version
									] }
								},
								class: "font-mono text-xs text-fg-subtle max-w-[40%] truncate",
								title: peer.version
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(peer.version)}`);
									else return [createTextVNode(toDisplayString(peer.version), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
						if (unref(sortedPeerDependencies).length > 10 && !unref(peerDepsExpanded)) _push(`<button type="button" class="mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.peer_dependencies.show_all", { count: unref(sortedPeerDependencies).length }))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.peer_dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedPeerDependencies).slice(0, unref(peerDepsExpanded) ? void 0 : 10), (peer) => {
						return openBlock(), createBlock("li", {
							key: peer.name,
							class: "flex items-center justify-between py-1 text-sm gap-1 min-w-0"
						}, [createVNode("div", { class: "flex items-center gap-1 min-w-0 flex-1" }, [createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: peer.name.split("/") }
							},
							class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(peer.name), 1)]),
							_: 2
						}, 1032, ["to"]), peer.optional ? (openBlock(), createBlock("span", {
							key: 0,
							class: "px-1 py-0.5 font-mono text-[10px] text-fg-subtle bg-bg-muted border border-border rounded shrink-0",
							title: _ctx.$t("package.dependencies.optional")
						}, toDisplayString(_ctx.$t("package.dependencies.optional")), 9, ["title"])) : createCommentVNode("", true)]), createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: [
									...peer.name.split("/"),
									"v",
									peer.version
								] }
							},
							class: "font-mono text-xs text-fg-subtle max-w-[40%] truncate",
							title: peer.version
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(peer.version), 1)]),
							_: 2
						}, 1032, ["to", "title"])]);
					}), 128))], 8, ["aria-label"]), unref(sortedPeerDependencies).length > 10 && !unref(peerDepsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
						onClick: ($event) => peerDepsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.peer_dependencies.show_all", { count: unref(sortedPeerDependencies).length })), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(sortedOptionalDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "optional-dependencies",
				title: _ctx.$t("package.optional_dependencies.title", { count: unref(sortedOptionalDependencies).length })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.optional_dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedOptionalDependencies).slice(0, unref(optionalDepsExpanded) ? void 0 : 10), ([dep, version]) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: dep.split("/") }
								},
								class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0 flex-1"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(dep)}`);
									else return [createTextVNode(toDisplayString(dep), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "package",
									params: { package: [
										...dep.split("/"),
										"v",
										version
									] }
								},
								class: "font-mono text-xs text-fg-subtle max-w-[40%] text-end truncate",
								title: version
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(version)}`);
									else return [createTextVNode(toDisplayString(version), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
						if (unref(sortedOptionalDependencies).length > 10 && !unref(optionalDepsExpanded)) _push(`<button type="button" class="mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.optional_dependencies.show_all", { count: unref(sortedOptionalDependencies).length }))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.optional_dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedOptionalDependencies).slice(0, unref(optionalDepsExpanded) ? void 0 : 10), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-1 text-sm gap-2"
						}, [createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: dep.split("/") }
							},
							class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0 flex-1"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode(_component_NuxtLink, {
							to: {
								name: "package",
								params: { package: [
									...dep.split("/"),
									"v",
									version
								] }
							},
							class: "font-mono text-xs text-fg-subtle max-w-[40%] text-end truncate",
							title: version
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
							_: 2
						}, 1032, ["to", "title"])]);
					}), 128))], 8, ["aria-label"]), unref(sortedOptionalDependencies).length > 10 && !unref(optionalDepsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
						onClick: ($event) => optionalDepsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.optional_dependencies.show_all", { count: unref(sortedOptionalDependencies).length })), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$4 = Dependencies_vue_vue_type_script_setup_true_lang_default.setup;
Dependencies_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Dependencies.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Dependencies_default = Object.assign(Dependencies_vue_vue_type_script_setup_true_lang_default, { __name: "PackageDependencies" });
var Link_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Link",
	__ssrInlineRender: true,
	props: {
		disabled: { type: Boolean },
		type: {},
		current: { type: Boolean },
		to: {},
		href: {},
		custom: {},
		external: { type: Boolean },
		target: {},
		rel: {},
		noRel: { type: Boolean },
		prefetchedClass: {},
		prefetch: { type: Boolean },
		prefetchOn: {},
		noPrefetch: { type: Boolean },
		trailingSlash: {},
		activeClass: {},
		exactActiveClass: {},
		ariaCurrentValue: {},
		viewTransition: { type: Boolean },
		replace: { type: Boolean }
	},
	setup(__props) {
		const props = createPropsRestProxy(__props, ["current"]);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			if (__props.disabled) {
				_push(`<span${ssrRenderAttrs(mergeProps({ class: "opacity-50" }, _attrs))}>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</span>`);
			} else _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ class: ["inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1", {
				"bg-bg-muted text-fg-muted border-border hover:text-fg hover:border-border-hover": !__props.current,
				"bg-fg text-bg border-fg hover:text-text-bg/50": __props.current,
				"opacity-50 cursor-not-allowed": __props.disabled
			}] }, props, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$3 = Link_vue_vue_type_script_setup_true_lang_default.setup;
Link_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/Link.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Link_default = Object.assign(Link_vue_vue_type_script_setup_true_lang_default, { __name: "TagLink" });
var Keywords_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Keywords",
	__ssrInlineRender: true,
	props: { keywords: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_TagLink = Link_default;
			if (__props.keywords?.length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.keywords_title"),
				id: "keywords"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="flex flex-wrap gap-1.5 list-none m-0 p-1"${_scopeId}><!--[-->`);
						ssrRenderList(__props.keywords.slice(0, 15), (keyword) => {
							_push(`<li${_scopeId}>`);
							_push(ssrRenderComponent(_component_TagLink, { to: {
								name: "search",
								query: { q: `keywords:${keyword}` }
							} }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(keyword)}`);
									else return [createTextVNode(toDisplayString(keyword), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
					} else return [createVNode("ul", { class: "flex flex-wrap gap-1.5 list-none m-0 p-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.keywords.slice(0, 15), (keyword) => {
						return openBlock(), createBlock("li", { key: keyword }, [createVNode(_component_TagLink, { to: {
							name: "search",
							query: { q: `keywords:${keyword}` }
						} }, {
							default: withCtx(() => [createTextVNode(toDisplayString(keyword), 1)]),
							_: 2
						}, 1032, ["to"])]);
					}), 128))])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$2 = Keywords_vue_vue_type_script_setup_true_lang_default.setup;
Keywords_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Keywords.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Keywords_default = Object.assign(Keywords_vue_vue_type_script_setup_true_lang_default, { __name: "PackageKeywords" });
var DEFAULT_VISIBLE_MAINTAINERS = 5;
var Maintainers_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Maintainers",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		maintainers: {}
	},
	setup(__props) {
		const props = __props;
		const { isConnected, lastExecutionTime, npmUser, addOperation, listPackageCollaborators, listTeamUsers } = useConnector();
		const showAddOwner = shallowRef(false);
		const newOwnerUsername = shallowRef("");
		const isAdding = shallowRef(false);
		const showAllMaintainers = shallowRef(false);
		const canManageOwners = computed(() => isConnected.value);
		const visibleMaintainers = computed(() => {
			if (canManageOwners.value || showAllMaintainers.value) return maintainerAccess.value;
			return maintainerAccess.value.slice(0, DEFAULT_VISIBLE_MAINTAINERS);
		});
		const hiddenMaintainersCount = computed(() => Math.max(0, maintainerAccess.value.length - DEFAULT_VISIBLE_MAINTAINERS));
		const orgName = computed(() => {
			if (!props.packageName.startsWith("@")) return null;
			const match = props.packageName.match(/^@([^/]+)\//);
			return match ? match[1] : null;
		});
		const collaborators = shallowRef({});
		const teamMembers = ref({});
		const isLoadingAccess = shallowRef(false);
		const maintainerAccess = computed(() => {
			if (!props.maintainers) return [];
			return props.maintainers.map((maintainer) => {
				const name = maintainer.name;
				if (!name) return {
					...maintainer,
					accessVia: []
				};
				const accessVia = [];
				if (collaborators.value[name]) accessVia.push("owner");
				for (const [collab, _perm] of Object.entries(collaborators.value)) if (collab.includes(":")) {
					const teamName = collab.split(":")[1];
					if (teamMembers.value[collab]?.includes(name)) accessVia.push(teamName || collab);
				}
				if (accessVia.length === 0) accessVia.push("owner");
				return {
					...maintainer,
					accessVia
				};
			});
		});
		async function loadAccessInfo() {
			if (!isConnected.value) return;
			isLoadingAccess.value = true;
			try {
				const collabResult = await listPackageCollaborators(props.packageName);
				if (collabResult) {
					collaborators.value = collabResult;
					const teamPromises = [];
					for (const collab of Object.keys(collabResult)) if (collab.includes(":")) teamPromises.push(listTeamUsers(collab).then((members) => {
						if (members) teamMembers.value[collab] = members;
					}));
					await Promise.all(teamPromises);
				}
			} finally {
				isLoadingAccess.value = false;
			}
		}
		async function handleAddOwner() {
			if (!newOwnerUsername.value.trim()) return;
			isAdding.value = true;
			try {
				const username = newOwnerUsername.value.trim().replace(/^@/, "");
				await addOperation({
					type: "owner:add",
					params: {
						user: username,
						pkg: props.packageName
					},
					description: `Add @${username} as owner of ${props.packageName}`,
					command: `npm owner add ${username} ${props.packageName}`
				});
				newOwnerUsername.value = "";
				showAddOwner.value = false;
			} finally {
				isAdding.value = false;
			}
		}
		async function handleRemoveOwner(username) {
			await addOperation({
				type: "owner:rm",
				params: {
					user: username,
					pkg: props.packageName
				},
				description: `Remove @${username} from ${props.packageName}`,
				command: `npm owner rm ${username} ${props.packageName}`
			});
		}
		watch([
			isConnected,
			() => props.packageName,
			lastExecutionTime
		], ([connected]) => {
			if (connected && orgName.value) loadAccessInfo();
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_NuxtLink = nuxt_link_default;
			let _temp0;
			if (__props.maintainers?.length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				id: "maintainers",
				title: _ctx.$t("package.maintainers.title")
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-2 list-none m-0 p-0 my-1 px-1"${ssrRenderAttr("aria-label", _ctx.$t("package.maintainers.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(visibleMaintainers), (maintainer) => {
							_push(`<li class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2 min-w-0"${_scopeId}>`);
							if (maintainer.name) _push(ssrRenderComponent(_component_NuxtLink, {
								to: {
									name: "~username",
									params: { username: maintainer.name }
								},
								class: "link-subtle font-mono text-sm shrink-0"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` ~${ssrInterpolate(maintainer.name)}`);
									else return [createTextVNode(" ~" + toDisplayString(maintainer.name), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<span class="font-mono text-sm text-fg-muted"${_scopeId}>${ssrInterpolate(maintainer.email)}</span>`);
							if (unref(isConnected) && maintainer.accessVia?.length && !unref(isLoadingAccess)) _push(`<span class="text-xs text-fg-subtle truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.via", { teams: maintainer.accessVia.join(", ") }))}</span>`);
							else _push(`<!---->`);
							if (unref(canManageOwners) && maintainer.name === unref(npmUser)) _push(`<span class="text-xs text-fg-subtle shrink-0"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.you"))}</span>`);
							else _push(`<!---->`);
							_push(`</div>`);
							if (unref(canManageOwners) && maintainer.name && maintainer.name !== unref(npmUser)) _push(`<button type="button" class="p-1 text-fg-subtle hover:text-red-400 transition-colors duration-200 shrink-0 rounded focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.maintainers.remove_owner", { name: maintainer.name }))}${_scopeId}><span class="i-carbon-close w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span></button>`);
							else _push(`<!---->`);
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
						if (!unref(canManageOwners) && unref(hiddenMaintainersCount) > 0) _push(`<button type="button" class="mt-2 text-xs text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded"${_scopeId}>${ssrInterpolate(unref(showAllMaintainers) ? _ctx.$t("package.maintainers.show_less") : _ctx.$t("package.maintainers.show_more", { count: unref(hiddenMaintainersCount) }))}</button>`);
						else _push(`<!---->`);
						if (unref(canManageOwners)) {
							_push(`<div class="mt-3"${_scopeId}>`);
							if (unref(showAddOwner)) _push(`<div${_scopeId}><form class="flex items-center gap-2"${_scopeId}><label for="add-owner-username" class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.username_to_add"))}</label><input${ssrRenderAttrs((_temp0 = mergeProps({
								id: "add-owner-username",
								value: unref(newOwnerUsername),
								type: "text",
								name: "add-owner-username",
								placeholder: _ctx.$t("package.maintainers.username_placeholder")
							}, "noCorrect" in _ctx ? _ctx.noCorrect : unref(noCorrect), { class: "flex-1 px-2 py-1 font-mono text-sm bg-bg-subtle border border-border rounded text-fg placeholder:text-fg-subtle transition-colors duration-200 focus:border-border-hover focus-visible:outline-accent/70" }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(newOwnerUsername)))))}${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(!unref(newOwnerUsername).trim() || unref(isAdding)) ? " disabled" : ""} class="px-2 py-1 font-mono text-xs text-bg bg-fg rounded transition-all duration-200 hover:bg-fg/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(unref(isAdding) ? "…" : _ctx.$t("package.maintainers.add_button"))}</button><button type="button" class="p-1 text-fg-subtle hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.maintainers.cancel_add"))}${_scopeId}><span class="i-carbon-close w-4 h-4" aria-hidden="true"${_scopeId}></span></button></form></div>`);
							else _push(`<button type="button" class="w-full px-3 py-1.5 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded transition-colors duration-200 hover:text-fg hover:border-border-hover focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.add_owner"))}</button>`);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						createVNode("ul", {
							class: "space-y-2 list-none m-0 p-0 my-1 px-1",
							"aria-label": _ctx.$t("package.maintainers.list_label")
						}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(visibleMaintainers), (maintainer) => {
							return openBlock(), createBlock("li", {
								key: maintainer.name ?? maintainer.email,
								class: "flex items-center justify-between gap-2"
							}, [createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [
								maintainer.name ? (openBlock(), createBlock(_component_NuxtLink, {
									key: 0,
									to: {
										name: "~username",
										params: { username: maintainer.name }
									},
									class: "link-subtle font-mono text-sm shrink-0"
								}, {
									default: withCtx(() => [createTextVNode(" ~" + toDisplayString(maintainer.name), 1)]),
									_: 2
								}, 1032, ["to"])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "font-mono text-sm text-fg-muted"
								}, toDisplayString(maintainer.email), 1)),
								unref(isConnected) && maintainer.accessVia?.length && !unref(isLoadingAccess) ? (openBlock(), createBlock("span", {
									key: 2,
									class: "text-xs text-fg-subtle truncate"
								}, toDisplayString(_ctx.$t("package.maintainers.via", { teams: maintainer.accessVia.join(", ") })), 1)) : createCommentVNode("", true),
								unref(canManageOwners) && maintainer.name === unref(npmUser) ? (openBlock(), createBlock("span", {
									key: 3,
									class: "text-xs text-fg-subtle shrink-0"
								}, toDisplayString(_ctx.$t("package.maintainers.you")), 1)) : createCommentVNode("", true)
							]), unref(canManageOwners) && maintainer.name && maintainer.name !== unref(npmUser) ? (openBlock(), createBlock("button", {
								key: 0,
								type: "button",
								class: "p-1 text-fg-subtle hover:text-red-400 transition-colors duration-200 shrink-0 rounded focus-visible:outline-accent/70",
								"aria-label": _ctx.$t("package.maintainers.remove_owner", { name: maintainer.name }),
								onClick: ($event) => handleRemoveOwner(maintainer.name)
							}, [createVNode("span", {
								class: "i-carbon-close w-3.5 h-3.5",
								"aria-hidden": "true"
							})], 8, ["aria-label", "onClick"])) : createCommentVNode("", true)]);
						}), 128))], 8, ["aria-label"]),
						!unref(canManageOwners) && unref(hiddenMaintainersCount) > 0 ? (openBlock(), createBlock("button", {
							key: 0,
							type: "button",
							class: "mt-2 text-xs text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded",
							onClick: ($event) => showAllMaintainers.value = !unref(showAllMaintainers)
						}, toDisplayString(unref(showAllMaintainers) ? _ctx.$t("package.maintainers.show_less") : _ctx.$t("package.maintainers.show_more", { count: unref(hiddenMaintainersCount) })), 9, ["onClick"])) : createCommentVNode("", true),
						unref(canManageOwners) ? (openBlock(), createBlock("div", {
							key: 1,
							class: "mt-3"
						}, [unref(showAddOwner) ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("form", {
							class: "flex items-center gap-2",
							onSubmit: withModifiers(handleAddOwner, ["prevent"])
						}, [
							createVNode("label", {
								for: "add-owner-username",
								class: "sr-only"
							}, toDisplayString(_ctx.$t("package.maintainers.username_to_add")), 1),
							withDirectives(createVNode("input", mergeProps({
								id: "add-owner-username",
								"onUpdate:modelValue": ($event) => isRef(newOwnerUsername) ? newOwnerUsername.value = $event : null,
								type: "text",
								name: "add-owner-username",
								placeholder: _ctx.$t("package.maintainers.username_placeholder")
							}, "noCorrect" in _ctx ? _ctx.noCorrect : unref(noCorrect), { class: "flex-1 px-2 py-1 font-mono text-sm bg-bg-subtle border border-border rounded text-fg placeholder:text-fg-subtle transition-colors duration-200 focus:border-border-hover focus-visible:outline-accent/70" }), null, 16, ["onUpdate:modelValue", "placeholder"]), [[vModelText, unref(newOwnerUsername)]]),
							createVNode("button", {
								type: "submit",
								disabled: !unref(newOwnerUsername).trim() || unref(isAdding),
								class: "px-2 py-1 font-mono text-xs text-bg bg-fg rounded transition-all duration-200 hover:bg-fg/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-accent/70"
							}, toDisplayString(unref(isAdding) ? "…" : _ctx.$t("package.maintainers.add_button")), 9, ["disabled"]),
							createVNode("button", {
								type: "button",
								class: "p-1 text-fg-subtle hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
								"aria-label": _ctx.$t("package.maintainers.cancel_add"),
								onClick: ($event) => showAddOwner.value = false
							}, [createVNode("span", {
								class: "i-carbon-close w-4 h-4",
								"aria-hidden": "true"
							})], 8, ["aria-label", "onClick"])
						], 32)])) : (openBlock(), createBlock("button", {
							key: 1,
							type: "button",
							class: "w-full px-3 py-1.5 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded transition-colors duration-200 hover:text-fg hover:border-border-hover focus-visible:outline-accent/70",
							onClick: ($event) => showAddOwner.value = true
						}, toDisplayString(_ctx.$t("package.maintainers.add_owner")), 9, ["onClick"]))])) : createCommentVNode("", true)
					];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$1 = Maintainers_vue_vue_type_script_setup_true_lang_default.setup;
Maintainers_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Maintainers.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Maintainers_default = Object.assign(Maintainers_vue_vue_type_script_setup_true_lang_default, { __name: "PackageMaintainers" });
const useAtproto = createSharedComposable(function useAtproto() {
	const { data: user, pending, clear } = useFetch("/api/auth/session", {
		server: false,
		immediate: true
	}, "$aDcMA1jK0A");
	async function logout() {
		await $fetch("/api/auth/session", { method: "delete" });
		clear();
	}
	return {
		user,
		pending,
		logout
	};
});
function usePackageRoute() {
	const route = useRoute$1();
	const parsedRoute = computed(() => {
		const segments = route.params.package?.filter(Boolean) || [];
		const vIndex = segments.indexOf("v");
		if (vIndex !== -1 && vIndex < segments.length - 1) return {
			packageName: segments.slice(0, vIndex).join("/"),
			requestedVersion: segments.slice(vIndex + 1).join("/")
		};
		const fullPath = segments.join("/");
		const versionMatch = fullPath.match(/^(@[^/]+\/[^/]+|[^/]+)@([^/]+)$/);
		if (versionMatch) {
			const [, packageName, requestedVersion] = versionMatch;
			return {
				packageName,
				requestedVersion
			};
		}
		return {
			packageName: fullPath,
			requestedVersion: null
		};
	});
	const packageName = computed(() => parsedRoute.value.packageName);
	return {
		packageName,
		requestedVersion: computed(() => parsedRoute.value.requestedVersion),
		orgName: computed(() => {
			const name = packageName.value;
			if (!name.startsWith("@")) return null;
			const match = name.match(/^@([^/]+)\//);
			return match ? match[1] : null;
		})
	};
}
function useActiveTocItem(toc) {
	return {
		activeId: ref(null),
		scrollToHeading: (_id) => {}
	};
}
function usePackageAnalysis(packageName, version) {
	return useLazyFetch(() => {
		const name = toValue(packageName);
		const ver = toValue(version);
		const base = `/api/registry/analysis/${name}`;
		return ver ? `${base}/v/${ver}` : base;
	}, "$u06C65qZ1E");
}
function useModuleReplacement(packageName) {
	return useLazyFetch(() => `/api/replacements/${toValue(packageName)}`, "$W7kFmyuEGB");
}
var ____package__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[...package]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { t: $t } = useI18n();
		defineOgImageComponent("Package", {
			name: () => packageName.value,
			version: () => requestedVersion.value ?? "",
			primaryColor: "#60a5fa"
		});
		const router = useRouter$1();
		const header = useTemplateRef("header");
		const isHeaderPinned = shallowRef(false);
		function checkHeaderPosition() {
			const el = header.value;
			if (!el) return;
			const style = getComputedStyle(el);
			const top = parseFloat(style.top) || 0;
			const rect = el.getBoundingClientRect();
			isHeaderPinned.value = Math.abs(rect.top - top) < 1;
		}
		useEventListener("scroll", checkHeaderPosition, { passive: true });
		useEventListener("resize", checkHeaderPosition);
		const { packageName, requestedVersion, orgName } = usePackageRoute();
		const selectedPM = useSelectedPackageManager();
		const activePmId = computed(() => selectedPM.value ?? "npm");
		assertValidPackageName(packageName.value);
		const { data: readmeData } = useLazyFetch(() => {
			const base = `/api/registry/readme/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, { default: () => ({
			html: "",
			playgroundLinks: [],
			toc: []
		}) }, "$1XumswUYeP");
		useActiveTocItem(computed(() => readmeData.value?.toc ?? []));
		const { data: jsrInfo } = useLazyFetch(() => `/api/jsr/${packageName.value}`, {
			default: () => ({ exists: false }),
			immediate: computed(() => packageName.value.startsWith("@")).value
		}, "$VhtsHuTANO");
		const { data: installSize, status: installSizeStatus, execute: fetchInstallSize } = useLazyFetch(() => {
			const base = `/api/registry/install-size/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, {
			server: false,
			immediate: false
		}, "$HKLthQFKWK");
		const { data: skillsData } = useLazyFetch(() => {
			const base = `/skills/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, { default: () => ({
			package: "",
			version: "",
			skills: []
		}) }, "$jqPB18T-jP");
		const { data: packageAnalysis } = usePackageAnalysis(packageName, requestedVersion);
		const { data: moduleReplacement } = useModuleReplacement(packageName);
		const { data: resolvedVersion, status: versionStatus, error: versionError } = ([__temp, __restore] = withAsyncContext(() => useResolvedVersion(packageName, requestedVersion)), __temp = await __temp, __restore(), __temp);
		if (versionStatus.value === "error" && versionError.value?.statusCode && versionError.value.statusCode >= 400 && versionError.value.statusCode < 500) throw createError$1({
			statusCode: 404,
			statusMessage: $t("package.not_found"),
			message: $t("package.not_found_message")
		});
		const { data: pkg, status, error } = usePackage(packageName, resolvedVersion.value ?? requestedVersion.value);
		const displayVersion = computed(() => pkg.value?.requestedVersion ?? null);
		const pkgDescription = useMarkdown(() => ({
			text: pkg.value?.description ?? "",
			packageName: pkg.value?.name
		}));
		const { copied: copiedPkgName, copy: copyPkgName } = useClipboard({
			source: packageName,
			copiedDuring: 2e3
		});
		const { data: vulnTree, status: vulnTreeStatus } = useDependencyAnalysis(packageName, () => resolvedVersion.value ?? "");
		const { data: provenanceData, status: provenanceStatus, execute: fetchProvenance } = useLazyFetch(() => {
			const v = displayVersion.value;
			if (!v || !hasProvenance(v)) return "";
			return `/api/registry/provenance/${packageName.value}/v/${v.version}`;
		}, {
			default: () => null,
			server: false,
			immediate: false
		}, "$nH3JTI2Gtm");
		const provenanceBadgeMounted = shallowRef(false);
		const latestVersion = computed(() => {
			if (!pkg.value) return null;
			const latestTag = pkg.value["dist-tags"]?.latest;
			if (!latestTag) return null;
			return pkg.value.versions[latestTag] ?? null;
		});
		const deprecationNotice = computed(() => {
			if (!displayVersion.value?.deprecated) return null;
			if (!!latestVersion.value?.deprecated) return {
				type: "package",
				message: displayVersion.value.deprecated
			};
			return {
				type: "version",
				message: displayVersion.value.deprecated
			};
		});
		const deprecationNoticeMessage = useMarkdown(() => ({ text: deprecationNotice.value?.message ?? "" }));
		const sizeTooltip = computed(() => {
			return [displayVersion.value && displayVersion.value.dist.unpackedSize && $t("package.stats.size_tooltip.unpacked", { size: formatBytes(displayVersion.value.dist.unpackedSize) }), installSize.value && installSize.value.dependencyCount && $t("package.stats.size_tooltip.total", {
				size: formatBytes(installSize.value.totalSize),
				count: installSize.value.dependencyCount
			})].filter(Boolean).join("\n");
		});
		const hasDependencies = computed(() => {
			if (!displayVersion.value) return false;
			const deps = displayVersion.value.dependencies;
			const peerDeps = displayVersion.value.peerDependencies;
			const optionalDeps = displayVersion.value.optionalDependencies;
			return deps && Object.keys(deps).length > 0 || peerDeps && Object.keys(peerDeps).length > 0 || optionalDeps && Object.keys(optionalDeps).length > 0;
		});
		const vulnCount = computed(() => vulnTree.value?.totalCounts.total ?? 0);
		computed(() => vulnCount.value > 0);
		const totalDepsCount = computed(() => {
			if (vulnTree.value) return vulnTree.value.totalPackages - 1;
			if (installSize.value) return installSize.value.dependencyCount;
			return null;
		});
		const repositoryUrl = computed(() => {
			const repo = displayVersion.value?.repository;
			if (!repo?.url) return null;
			let url = normalizeGitUrl(repo.url);
			if (repo.directory) url = joinURL(`${url}/tree/HEAD`, repo.directory);
			return url;
		});
		const { meta: repoMeta, repoRef, stars, starsLink, forks, forksLink } = useRepoMeta(repositoryUrl);
		const PROVIDER_ICONS = {
			github: "i-carbon:logo-github",
			gitlab: "i-simple-icons:gitlab",
			bitbucket: "i-simple-icons:bitbucket",
			codeberg: "i-simple-icons:codeberg",
			gitea: "i-simple-icons:gitea",
			forgejo: "i-simple-icons:forgejo",
			gitee: "i-simple-icons:gitee",
			sourcehut: "i-simple-icons:sourcehut",
			tangled: "i-custom:tangled",
			radicle: "i-carbon:network-3"
		};
		const repoProviderIcon = computed(() => {
			const provider = repoRef.value?.provider;
			if (!provider) return "i-carbon:logo-github";
			return PROVIDER_ICONS[provider] ?? "i-carbon:code";
		});
		const homepageUrl = computed(() => {
			const homepage = displayVersion.value?.homepage;
			if (!homepage) return null;
			if (repositoryUrl.value && areUrlsEquivalent(homepage, repositoryUrl.value)) return null;
			return homepage;
		});
		const docsLink = computed(() => {
			if (!resolvedVersion.value) return null;
			return `/package-docs/${pkg.value.name}/v/${resolvedVersion.value}`;
		});
		const fundingUrl = computed(() => {
			let funding = displayVersion.value?.funding;
			if (Array.isArray(funding)) funding = funding[0];
			if (!funding) return null;
			return typeof funding === "string" ? funding : funding.url;
		});
		function normalizeGitUrl(url) {
			return url.replace(/^git\+/, "").replace(/^git:\/\//, "https://").replace(/\.git$/, "").replace(/^ssh:\/\/git@github\.com/, "https://github.com").replace(/^git@github\.com:/, "https://github.com/");
		}
		function hasProvenance(version) {
			if (!version?.dist) return false;
			return !!version.dist.attestations;
		}
		const typesPackageName = computed(() => {
			if (!packageAnalysis.value) return null;
			if (packageAnalysis.value.types.kind !== "@types") return null;
			if (packageAnalysis.value.types.deprecated) return null;
			return packageAnalysis.value.types.packageName;
		});
		const executableInfo = computed(() => {
			if (!displayVersion.value || !pkg.value) return null;
			return getExecutableInfo(pkg.value.name, displayVersion.value.bin);
		});
		const isBinaryOnly = computed(() => {
			if (!displayVersion.value || !pkg.value) return false;
			return isBinaryOnlyPackage({
				name: pkg.value.name,
				bin: displayVersion.value.bin,
				main: displayVersion.value.main,
				module: displayVersion.value.module,
				exports: displayVersion.value.exports
			});
		});
		const isCreatePkg = computed(() => {
			if (!pkg.value) return false;
			return isCreatePackage(pkg.value.name);
		});
		const createPackageInfo = computed(() => {
			if (!packageAnalysis.value?.createPackage) return null;
			if (packageAnalysis.value.createPackage.deprecated) return null;
			return packageAnalysis.value.createPackage;
		});
		const canonicalUrl = computed(() => {
			const base = `https://npmx.dev/package/${packageName.value}`;
			return requestedVersion.value ? `${base}/v/${requestedVersion.value}` : base;
		});
		const { user } = useAtproto();
		const { data: likesData } = useFetch(() => `/api/social/likes/${packageName.value}`, {
			default: () => ({
				totalLikes: 0,
				userHasLiked: false
			}),
			server: false
		}, "$Mx3AzflW4D");
		ref(false);
		useHead$1({ link: [{
			rel: "canonical",
			href: canonicalUrl
		}] });
		useSeoMeta$1({
			title: () => pkg.value?.name ? `${pkg.value.name} - npmx` : "Package - npmx",
			ogTitle: () => pkg.value?.name ? `${pkg.value.name} - npmx` : "Package - npmx",
			twitterTitle: () => pkg.value?.name ? `${pkg.value.name} - npmx` : "Package - npmx",
			description: () => pkg.value?.description ?? "",
			ogDescription: () => pkg.value?.description ?? "",
			twitterDescription: () => pkg.value?.description ?? ""
		});
		onKeyStroke((e) => isKeyWithoutModifiers(e, ".") && !isEditableElement(e.target), (e) => {
			if (pkg.value == null || resolvedVersion.value == null) return;
			e.preventDefault();
			navigateTo({
				name: "code",
				params: { path: [
					pkg.value.name,
					"v",
					resolvedVersion.value
				] }
			});
		}, { dedupe: true });
		onKeyStroke((e) => isKeyWithoutModifiers(e, "d") && !isEditableElement(e.target), (e) => {
			if (!docsLink.value) return;
			e.preventDefault();
			navigateTo(docsLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => isKeyWithoutModifiers(e, "c") && !isEditableElement(e.target), (e) => {
			if (!pkg.value) return;
			e.preventDefault();
			router.push({
				path: "/compare",
				query: { packages: pkg.value.name }
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageSkeleton = Skeleton_default;
			const _component_TooltipApp = App_default;
			const _component_ClientOnly = client_only_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			const _component_LicenseDisplay = LicenseDisplay_default;
			const _component_DateTime = DateTime_default;
			const _component_PackageManagerSelect = ManagerSelect_default;
			const _component_TerminalExecute = Execute_default;
			const _component_TerminalInstall = Install_default;
			const _component_PackageReplacement = Replacement_default;
			const _component_Readme = Readme_default;
			const _component_PackageProvenanceSection = PackageProvenanceSection_default;
			const _component_PackageWeeklyDownloadStats = WeeklyDownloadStats_default;
			const _component_PackagePlaygrounds = Playgrounds_default;
			const _component_PackageCompatibility = Compatibility_default;
			const _component_PackageVersions = Versions_default;
			const _component_PackageInstallScripts = InstallScripts_default;
			const _component_PackageDependencies = Dependencies_default;
			const _component_PackageKeywords = Keywords_default;
			const _component_PackageMaintainers = Maintainers_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 w-full py-8" }, _attrs))} data-v-7aaa75be>`);
			if (unref(status) === "pending") _push(ssrRenderComponent(_component_PackageSkeleton, null, null, _parent));
			else if (unref(status) === "success" && unref(pkg)) {
				_push(`<article class="package-page" data-v-7aaa75be><header class="${ssrRenderClass([{ "border-b": unref(isHeaderPinned) }, "area-header sticky top-14 z-1 bg-[--bg] py-2 border-border"])}" data-v-7aaa75be><div class="flex items-baseline gap-2 sm:gap-3 flex-wrap min-w-0" data-v-7aaa75be><div class="group relative flex flex-col items-start min-w-0" data-v-7aaa75be><h1 class="font-mono text-2xl sm:text-3xl font-medium min-w-0 break-words"${ssrRenderAttr("title", unref(pkg).name)} data-v-7aaa75be>`);
				if (unref(orgName)) _push(ssrRenderComponent(unref(nuxt_link_default), {
					to: {
						name: "org",
						params: { org: unref(orgName) }
					},
					class: "text-fg-muted hover:text-fg transition-colors duration-200"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` @${ssrInterpolate(unref(orgName))}`);
						else return [createTextVNode(" @" + toDisplayString(unref(orgName)), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(orgName)) _push(`<span data-v-7aaa75be>/</span>`);
				else _push(`<!---->`);
				_push(`<span class="${ssrRenderClass({ "text-fg-muted": unref(orgName) })}" data-v-7aaa75be>${ssrInterpolate(unref(orgName) ? unref(pkg).name.replace(`@${unref(orgName)}/`, "") : unref(pkg).name)}</span></h1><button type="button" class="${ssrRenderClass([unref(copiedPkgName) ? "text-accent bg-accent/10" : "text-fg-muted bg-bg border-border", "copy-button absolute z-20 inset-is-0 top-full inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-mono whitespace-nowrap transition-all duration-150 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:pointer-events-auto"])}"${ssrRenderAttr("aria-label", unref(copiedPkgName) ? unref($t)("common.copied") : unref($t)("package.copy_name"))} data-v-7aaa75be><span class="${ssrRenderClass([unref(copiedPkgName) ? "i-carbon:checkmark" : "i-carbon:copy", "w-3.5 h-3.5"])}" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(unref(copiedPkgName) ? unref($t)("common.copied") : unref($t)("package.copy_name"))}</button></div>`);
				if (unref(resolvedVersion)) {
					_push(`<span class="inline-flex items-baseline gap-1.5 font-mono text-base sm:text-lg text-fg-muted shrink-0" data-v-7aaa75be>`);
					if (unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion)) _push(`<!--[--><span class="font-mono text-fg-muted text-sm" data-v-7aaa75be>${ssrInterpolate(unref(requestedVersion))}</span><span class="i-carbon:arrow-right rtl-flip w-3 h-3" aria-hidden="true" data-v-7aaa75be></span><!--]-->`);
					else _push(`<!---->`);
					if (unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion)) _push(ssrRenderComponent(unref(nuxt_link_default), {
						to: `/package/${unref(pkg).name}/v/${unref(resolvedVersion)}`,
						title: unref($t)("package.view_permalink")
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(resolvedVersion))}`);
							else return [createTextVNode(toDisplayString(unref(resolvedVersion)), 1)];
						}),
						_: 1
					}, _parent));
					else _push(`<span data-v-7aaa75be>v${ssrInterpolate(unref(resolvedVersion))}</span>`);
					if (hasProvenance(unref(displayVersion)) && unref(provenanceBadgeMounted)) _push(ssrRenderComponent(_component_TooltipApp, {
						text: unref(provenanceData) && unref(provenanceStatus) !== "pending" ? unref($t)("package.provenance_section.built_and_signed_on", { provider: unref(provenanceData).providerLabel }) : unref($t)("package.verified_provenance"),
						position: "bottom"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<a href="#provenance"${ssrRenderAttr("aria-label", unref($t)("package.provenance_section.view_more_details"))} class="inline-flex items-center justify-center gap-1.5 text-fg-muted hover:text-emerald-500 transition-colors duration-200 min-w-6 min-h-6" data-v-7aaa75be${_scopeId}><span class="i-lucide-shield-check w-3.5 h-3.5 shrink-0" aria-hidden="true" data-v-7aaa75be${_scopeId}></span></a>`);
							else return [createVNode("a", {
								href: "#provenance",
								"aria-label": unref($t)("package.provenance_section.view_more_details"),
								class: "inline-flex items-center justify-center gap-1.5 text-fg-muted hover:text-emerald-500 transition-colors duration-200 min-w-6 min-h-6"
							}, [createVNode("span", {
								class: "i-lucide-shield-check w-3.5 h-3.5 shrink-0",
								"aria-hidden": "true"
							})], 8, ["aria-label"])];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					if (unref(requestedVersion) && unref(latestVersion) && unref(resolvedVersion) !== unref(latestVersion).version) _push(`<span class="text-fg-subtle text-sm shrink-0" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.not_latest"))}</span>`);
					else _push(`<!---->`);
					_push(`</span>`);
				} else _push(`<!---->`);
				_push(`<div class="flex gap-2 sm:gap-3 flex-wrap" data-v-7aaa75be>`);
				_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-1.5 list-none m-0 p-0 relative top-[5px] self-baseline ms-1 sm:ms-2" data-v-7aaa75be${_scopeId}>`);
						_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-16 h-5.5 rounded" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded bg-bg-subtle" }, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center gap-1.5 list-none m-0 p-0 relative top-[5px] self-baseline ms-1 sm:ms-2" }, [
						createVNode(_component_SkeletonBlock, { class: "w-16 h-5.5 rounded" }),
						createVNode(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }),
						createVNode(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }),
						createVNode(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded bg-bg-subtle" })
					])];
				}) }, _parent));
				_push(`</div>`);
				if (unref(resolvedVersion)) {
					_push(`<nav${ssrRenderAttr("aria-label", unref($t)("package.navigation"))} class="hidden sm:flex items-center gap-0.5 p-0.5 bg-bg-subtle border border-border-subtle rounded-md shrink-0 ms-auto self-center" data-v-7aaa75be>`);
					if (unref(docsLink)) _push(ssrRenderComponent(unref(nuxt_link_default), {
						to: unref(docsLink),
						class: "px-2 py-1.5 font-mono text-xs rounded transition-colors duration-150 border border-transparent text-fg-subtle hover:text-fg hover:bg-bg hover:shadow hover:border-border inline-flex items-center gap-1.5",
						"aria-keyshortcuts": "d"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:document w-3 h-3" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.docs"))} <kbd class="inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded" aria-hidden="true" data-v-7aaa75be${_scopeId}> d </kbd>`);
							else return [
								createVNode("span", {
									class: "i-carbon:document w-3 h-3",
									"aria-hidden": "true"
								}),
								createTextVNode(" " + toDisplayString(unref($t)("package.links.docs")) + " ", 1),
								createVNode("kbd", {
									class: "inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded",
									"aria-hidden": "true"
								}, " d ")
							];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					_push(ssrRenderComponent(unref(nuxt_link_default), {
						to: `/package-code/${unref(pkg).name}/v/${unref(resolvedVersion)}`,
						class: "px-2 py-1.5 font-mono text-xs rounded transition-colors duration-150 border border-transparent text-fg-subtle hover:text-fg hover:bg-bg hover:shadow hover:border-border inline-flex items-center gap-1.5",
						"aria-keyshortcuts": "."
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:code w-3 h-3" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.code"))} <kbd class="inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded" aria-hidden="true" data-v-7aaa75be${_scopeId}> . </kbd>`);
							else return [
								createVNode("span", {
									class: "i-carbon:code w-3 h-3",
									"aria-hidden": "true"
								}),
								createTextVNode(" " + toDisplayString(unref($t)("package.links.code")) + " ", 1),
								createVNode("kbd", {
									class: "inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded",
									"aria-hidden": "true"
								}, " . ")
							];
						}),
						_: 1
					}, _parent));
					_push(ssrRenderComponent(unref(nuxt_link_default), {
						to: {
							path: "/compare",
							query: { packages: unref(pkg).name }
						},
						class: "px-2 py-1.5 font-mono text-xs rounded transition-colors duration-150 border border-transparent text-fg-subtle hover:text-fg hover:bg-bg hover:shadow hover:border-border inline-flex items-center gap-1.5",
						"aria-keyshortcuts": "c"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:compare w-3 h-3" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.compare"))} <kbd class="inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded" aria-hidden="true" data-v-7aaa75be${_scopeId}> c </kbd>`);
							else return [
								createVNode("span", {
									class: "i-carbon:compare w-3 h-3",
									"aria-hidden": "true"
								}),
								createTextVNode(" " + toDisplayString(unref($t)("package.links.compare")) + " ", 1),
								createVNode("kbd", {
									class: "inline-flex items-center justify-center w-4 h-4 text-xs bg-bg-muted border border-border rounded",
									"aria-hidden": "true"
								}, " c ")
							];
						}),
						_: 1
					}, _parent));
					_push(`</nav>`);
				} else _push(`<!---->`);
				_push(`</div></header><section class="area-details" data-v-7aaa75be><div class="mb-4" data-v-7aaa75be><div class="max-w-2xl min-h-[4.5rem]" data-v-7aaa75be>`);
				if (unref(pkgDescription)) _push(`<p class="text-fg-muted text-base m-0" data-v-7aaa75be><span data-v-7aaa75be>${unref(pkgDescription) ?? ""}</span></p>`);
				else _push(`<p class="text-fg-subtle text-base m-0 italic" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.no_description"))}</p>`);
				_push(`</div><ul class="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-4 list-none m-0 p-0 mt-3" data-v-7aaa75be>`);
				if (unref(repositoryUrl)) {
					_push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(repositoryUrl))} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="${ssrRenderClass([unref(repoProviderIcon), "w-4 h-4"])}" aria-hidden="true" data-v-7aaa75be></span>`);
					if (unref(repoRef)) _push(`<span data-v-7aaa75be>${ssrInterpolate(unref(repoRef).owner)}<span class="opacity-50" data-v-7aaa75be>/</span>${ssrInterpolate(unref(repoRef).repo)}</span>`);
					else _push(`<span data-v-7aaa75be>${ssrInterpolate(unref($t)("package.links.repo"))}</span>`);
					_push(`</a></li>`);
				} else _push(`<!---->`);
				if (unref(repositoryUrl) && unref(repoMeta) && unref(starsLink)) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(starsLink))} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="w-4 h-4 i-carbon:star" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(("formatCompactNumber" in _ctx ? _ctx.formatCompactNumber : unref(formatCompactNumber))(unref(stars), { decimals: 1 }))}</a></li>`);
				else _push(`<!---->`);
				if (unref(forks) && unref(forksLink)) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(forksLink))} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="i-carbon:fork w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(("formatCompactNumber" in _ctx ? _ctx.formatCompactNumber : unref(formatCompactNumber))(unref(forks), { decimals: 1 }))}</a></li>`);
				else _push(`<!---->`);
				if (unref(homepageUrl)) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(homepageUrl))} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="i-carbon:link w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(unref($t)("package.links.homepage"))}</a></li>`);
				else _push(`<!---->`);
				if (unref(displayVersion)?.bugs?.url) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(displayVersion).bugs.url)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="i-carbon:warning w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(unref($t)("package.links.issues"))}</a></li>`);
				else _push(`<!---->`);
				_push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", `https://www.npmjs.com/package/${unref(pkg).name}`)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5"${ssrRenderAttr("title", unref($t)("common.view_on_npm"))} data-v-7aaa75be><span class="i-carbon:logo-npm w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> npm </a></li>`);
				if (unref(jsrInfo)?.exists && unref(jsrInfo).url) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(jsrInfo).url)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5"${ssrRenderAttr("title", unref($t)("badges.jsr.title"))} data-v-7aaa75be><span class="i-simple-icons:jsr w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(unref($t)("package.links.jsr"))}</a></li>`);
				else _push(`<!---->`);
				if (unref(fundingUrl)) _push(`<li data-v-7aaa75be><a${ssrRenderAttr("href", unref(fundingUrl))} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5" data-v-7aaa75be><span class="i-carbon:favorite w-4 h-4" aria-hidden="true" data-v-7aaa75be></span> ${ssrInterpolate(unref($t)("package.links.fund"))}</a></li>`);
				else _push(`<!---->`);
				if (unref(docsLink) && unref(displayVersion)) {
					_push(`<li class="sm:hidden" data-v-7aaa75be>`);
					_push(ssrRenderComponent(unref(nuxt_link_default), {
						to: unref(docsLink),
						class: "link-subtle font-mono text-sm inline-flex items-center gap-1.5"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:document w-4 h-4" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.docs"))}`);
							else return [createVNode("span", {
								class: "i-carbon:document w-4 h-4",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(unref($t)("package.links.docs")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(resolvedVersion)) {
					_push(`<li class="sm:hidden" data-v-7aaa75be>`);
					_push(ssrRenderComponent(unref(nuxt_link_default), {
						to: `/package-code/${unref(pkg).name}/v/${unref(resolvedVersion)}`,
						class: "link-subtle font-mono text-sm inline-flex items-center gap-1.5"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-carbon:code w-4 h-4" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.code"))}`);
							else return [createVNode("span", {
								class: "i-carbon:code w-4 h-4",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(unref($t)("package.links.code")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`<li class="sm:hidden" data-v-7aaa75be>`);
				_push(ssrRenderComponent(unref(nuxt_link_default), {
					to: {
						path: "/compare",
						query: { packages: unref(pkg).name }
					},
					class: "link-subtle font-mono text-sm inline-flex items-center gap-1.5"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-carbon:compare w-4 h-4" aria-hidden="true" data-v-7aaa75be${_scopeId}></span> ${ssrInterpolate(unref($t)("package.links.compare"))}`);
						else return [createVNode("span", {
							class: "i-carbon:compare w-4 h-4",
							"aria-hidden": "true"
						}), createTextVNode(" " + toDisplayString(unref($t)("package.links.compare")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</li></ul></div>`);
				if (unref(deprecationNotice)) {
					_push(`<div class="border border-red-400 bg-red-400/10 rounded-lg px-3 py-2 text-base text-red-400" data-v-7aaa75be><h2 class="font-medium mb-2" data-v-7aaa75be>${ssrInterpolate(unref(deprecationNotice).type === "package" ? unref($t)("package.deprecation.package") : unref($t)("package.deprecation.version"))}</h2>`);
					if (unref(deprecationNoticeMessage)) _push(`<p class="text-base m-0" data-v-7aaa75be><span data-v-7aaa75be>${unref(deprecationNoticeMessage) ?? ""}</span></p>`);
					else _push(`<p class="text-base m-0 italic" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.deprecation.no_reason"))}</p>`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<dl class="grid grid-cols-2 sm:grid-cols-7 md:grid-cols-11 gap-3 sm:gap-4 py-4 sm:py-6 mt-4 sm:mt-6 border-t border-b border-border" data-v-7aaa75be><div class="space-y-1 sm:col-span-2" data-v-7aaa75be><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.license"))}</dt><dd class="font-mono text-sm text-fg" data-v-7aaa75be>`);
				if (unref(pkg).license) _push(ssrRenderComponent(_component_LicenseDisplay, { license: unref(pkg).license }, null, _parent));
				else _push(`<span data-v-7aaa75be>${ssrInterpolate(unref($t)("package.license.none"))}</span>`);
				_push(`</dd></div><div class="space-y-1 sm:col-span-2" data-v-7aaa75be><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.deps"))}</dt><dd class="font-mono text-sm text-fg flex items-center justify-start gap-2" data-v-7aaa75be><span class="text-fg-muted" data-v-7aaa75be>${ssrInterpolate(unref(getDependencyCount)(unref(displayVersion)))}</span>`);
				if (unref(getDependencyCount)(unref(displayVersion)) !== unref(totalDepsCount)) {
					_push(`<!--[--><span class="text-fg-subtle mx-1" data-v-7aaa75be>/</span>`);
					_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="text-fg-subtle" data-v-7aaa75be${_scopeId}>-</span>`);
						else return [createVNode("span", { class: "text-fg-subtle" }, "-")];
					}) }, _parent));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				if (unref(getDependencyCount)(unref(displayVersion)) > 0) _push(`<a${ssrRenderAttr("href", `https://npmgraph.js.org/?q=${unref(pkg).name}`)} target="_blank" rel="noopener noreferrer" class="text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("title", unref($t)("package.stats.view_dependency_graph"))} data-v-7aaa75be><span class="i-carbon:network-3 w-3.5 h-3.5" aria-hidden="true" data-v-7aaa75be></span><span class="sr-only" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.view_dependency_graph"))}</span></a>`);
				else _push(`<!---->`);
				if (unref(getDependencyCount)(unref(displayVersion)) > 0) _push(`<a${ssrRenderAttr("href", `https://node-modules.dev/grid/depth#install=${unref(pkg).name}${unref(resolvedVersion) ? `@${unref(resolvedVersion)}` : ""}`)} target="_blank" rel="noopener noreferrer" class="text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("title", unref($t)("package.stats.inspect_dependency_tree"))} data-v-7aaa75be><span class="i-lucide-view w-3.5 h-3.5" aria-hidden="true" data-v-7aaa75be></span><span class="sr-only" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.inspect_dependency_tree"))}</span></a>`);
				else _push(`<!---->`);
				_push(`</dd></div><div class="space-y-1 sm:col-span-3" data-v-7aaa75be><dt class="text-xs text-fg-subtle uppercase tracking-wider flex items-center gap-1" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.install_size"))} `);
				_push(ssrRenderComponent(_component_TooltipApp, { text: unref(sizeTooltip) }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span tabindex="0" class="inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-subtle cursor-help focus-visible:outline-2 focus-visible:outline-accent/70 rounded" data-v-7aaa75be${_scopeId}><span class="i-carbon:information w-3 h-3" aria-hidden="true" data-v-7aaa75be${_scopeId}></span></span>`);
						else return [createVNode("span", {
							tabindex: "0",
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-subtle cursor-help focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, [createVNode("span", {
							class: "i-carbon:information w-3 h-3",
							"aria-hidden": "true"
						})])];
					}),
					_: 1
				}, _parent));
				_push(`</dt><dd class="font-mono text-sm text-fg" data-v-7aaa75be><span class="text-fg-muted" data-v-7aaa75be>`);
				if (unref(displayVersion)?.dist?.unpackedSize) _push(`<span data-v-7aaa75be>${ssrInterpolate(unref(formatBytes)(unref(displayVersion).dist.unpackedSize))}</span>`);
				else _push(`<span data-v-7aaa75be>-</span>`);
				_push(`</span>`);
				if (unref(getDependencyCount)(unref(displayVersion)) > 0) {
					_push(`<!--[--><span class="text-fg-subtle mx-1" data-v-7aaa75be>/</span>`);
					if (unref(installSizeStatus) === "pending") _push(`<span class="inline-flex items-center gap-1 text-fg-subtle" data-v-7aaa75be><span class="i-carbon:circle-dash w-3 h-3 motion-safe:animate-spin" aria-hidden="true" data-v-7aaa75be></span></span>`);
					else if (unref(installSize)?.totalSize) _push(`<span data-v-7aaa75be>${ssrInterpolate(unref(formatBytes)(unref(installSize).totalSize))}</span>`);
					else _push(`<span class="text-fg-subtle" data-v-7aaa75be>-</span>`);
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</dd></div>`);
				_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="space-y-1 sm:col-span-2" data-v-7aaa75be${_scopeId}><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be${_scopeId}>${ssrInterpolate(unref($t)("package.stats.vulns"))}</dt><dd class="font-mono text-sm text-fg-subtle" data-v-7aaa75be${_scopeId}>-</dd></div>`);
					else return [createVNode("div", { class: "space-y-1 sm:col-span-2" }, [createVNode("dt", { class: "text-xs text-fg-subtle uppercase tracking-wider" }, toDisplayString(unref($t)("package.stats.vulns")), 1), createVNode("dd", { class: "font-mono text-sm text-fg-subtle" }, "-")])];
				}) }, _parent));
				if (unref(resolvedVersion) && unref(pkg).time?.[unref(resolvedVersion)]) {
					_push(`<div class="space-y-1 sm:col-span-2" data-v-7aaa75be><dt class="text-xs text-fg-subtle uppercase tracking-wider"${ssrRenderAttr("title", unref($t)("package.stats.published_tooltip", {
						package: unref(pkg).name,
						version: unref(resolvedVersion)
					}))} data-v-7aaa75be>${ssrInterpolate(unref($t)("package.stats.published"))}</dt><dd class="font-mono text-sm text-fg" data-v-7aaa75be>`);
					_push(ssrRenderComponent(_component_DateTime, {
						datetime: unref(pkg).time[unref(resolvedVersion)],
						"date-style": "medium"
					}, null, _parent));
					_push(`</dd></div>`);
				} else _push(`<!---->`);
				_push(`</dl>`);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(`</section>`);
				if (unref(isBinaryOnly)) {
					_push(`<section class="area-install scroll-mt-20" data-v-7aaa75be><div class="flex flex-wrap items-center justify-between mb-3" data-v-7aaa75be><h2 id="run-heading" class="text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.run.title"))}</h2>`);
					_push(ssrRenderComponent(_component_PackageManagerSelect, null, null, _parent));
					_push(`</div><div role="tabpanel"${ssrRenderAttr("id", `pm-panel-${unref(activePmId)}`)}${ssrRenderAttr("aria-labelledby", `pm-tab-${unref(activePmId)}`)} data-v-7aaa75be>`);
					_push(ssrRenderComponent(_component_TerminalExecute, {
						"package-name": unref(pkg).name,
						"jsr-info": unref(jsrInfo),
						"is-create-package": unref(isCreatePkg)
					}, null, _parent));
					_push(`</div></section>`);
				} else {
					_push(`<section id="get-started" class="area-install scroll-mt-20" data-v-7aaa75be><div class="flex flex-wrap items-center justify-between mb-3" data-v-7aaa75be><h2 id="get-started-heading" class="group text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be><a href="#get-started" class="inline-flex items-center gap-1.5 py-1 text-fg-subtle hover:text-fg-muted transition-colors duration-200 no-underline" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.get_started.title"))} <span class="i-carbon:link w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" data-v-7aaa75be></span></a></h2>`);
					_push(ssrRenderComponent(_component_PackageManagerSelect, null, null, _parent));
					_push(`</div><div role="tabpanel"${ssrRenderAttr("id", `pm-panel-${unref(activePmId)}`)}${ssrRenderAttr("aria-labelledby", `pm-tab-${unref(activePmId)}`)} data-v-7aaa75be>`);
					_push(ssrRenderComponent(_component_TerminalInstall, {
						"package-name": unref(pkg).name,
						"requested-version": unref(requestedVersion),
						"jsr-info": unref(jsrInfo),
						"types-package-name": unref(typesPackageName),
						"executable-info": unref(executableInfo),
						"create-package-info": unref(createPackageInfo)
					}, null, _parent));
					_push(`</div></section>`);
				}
				_push(`<div class="area-vulns space-y-6" data-v-7aaa75be>`);
				if (unref(moduleReplacement)) _push(ssrRenderComponent(_component_PackageReplacement, { replacement: unref(moduleReplacement) }, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(`</div><section id="readme" class="area-readme min-w-0 scroll-mt-20" data-v-7aaa75be><div class="flex flex-wrap items-center justify-between mb-4 px-1" data-v-7aaa75be><h2 id="readme-heading" class="group text-xs text-fg-subtle uppercase tracking-wider" data-v-7aaa75be><a href="#readme" class="inline-flex py-4 px-2 items-center gap-1.5 text-fg-subtle hover:text-fg-muted transition-colors duration-200 no-underline mt-1" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.readme.title"))} <span class="i-carbon:link w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" data-v-7aaa75be></span></a></h2>`);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(`</div>`);
				if (unref(readmeData)?.html) _push(ssrRenderComponent(_component_Readme, { html: unref(readmeData).html }, null, _parent));
				else {
					_push(`<p class="text-fg-subtle italic" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.readme.no_readme"))} `);
					if (unref(repositoryUrl)) _push(`<a${ssrRenderAttr("href", unref(repositoryUrl))} target="_blank" rel="noopener noreferrer" class="link" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.readme.view_on_github"))}</a>`);
					else _push(`<!---->`);
					_push(`</p>`);
				}
				if (hasProvenance(unref(displayVersion)) && unref(provenanceBadgeMounted)) {
					_push(`<section id="provenance" class="scroll-mt-20" data-v-7aaa75be>`);
					if (unref(provenanceStatus) === "pending") _push(`<div class="mt-8 flex items-center gap-2 text-fg-subtle text-sm" data-v-7aaa75be><span class="i-carbon-circle-dash w-4 h-4 motion-safe:animate-spin" aria-hidden="true" data-v-7aaa75be></span><span data-v-7aaa75be>${ssrInterpolate(unref($t)("package.provenance_section.title"))}…</span></div>`);
					else if (unref(provenanceData)) _push(ssrRenderComponent(_component_PackageProvenanceSection, {
						details: unref(provenanceData),
						class: "mt-8"
					}, null, _parent));
					else if (unref(provenanceStatus) === "error") _push(`<div class="mt-8 flex items-center gap-2 text-fg-subtle text-sm" data-v-7aaa75be><span class="i-carbon:warning w-4 h-4" aria-hidden="true" data-v-7aaa75be></span><span data-v-7aaa75be>${ssrInterpolate(unref($t)("package.provenance_section.error_loading"))}</span></div>`);
					else _push(`<!---->`);
					_push(`</section>`);
				} else _push(`<!---->`);
				_push(`</section><div class="area-sidebar" data-v-7aaa75be><div class="sidebar-scroll sticky top-34 space-y-6 sm:space-y-8 min-w-0 overflow-y-auto pe-2.5 lg:max-h-[calc(100dvh-8.5rem)] lg:overscroll-contain xl:top-22 xl:pt-2 xl:max-h-[calc(100dvh-6rem)]" data-v-7aaa75be>`);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(ssrRenderComponent(_component_PackageWeeklyDownloadStats, {
					packageName: unref(packageName),
					createdIso: unref(pkg)?.time?.created ?? null
				}, null, _parent));
				if (unref(readmeData)?.playgroundLinks?.length) _push(ssrRenderComponent(_component_PackagePlaygrounds, { links: unref(readmeData).playgroundLinks }, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_PackageCompatibility, { engines: unref(displayVersion)?.engines }, null, _parent));
				if (unref(pkg).versions && Object.keys(unref(pkg).versions).length > 0) _push(ssrRenderComponent(_component_PackageVersions, {
					"package-name": unref(pkg).name,
					versions: unref(pkg).versions,
					"dist-tags": unref(pkg)["dist-tags"] ?? {},
					time: unref(pkg).time
				}, null, _parent));
				else _push(`<!---->`);
				if (unref(displayVersion)?.installScripts) _push(ssrRenderComponent(_component_PackageInstallScripts, {
					"package-name": unref(pkg).name,
					"install-scripts": unref(displayVersion).installScripts
				}, null, _parent));
				else _push(`<!---->`);
				if (unref(hasDependencies) && unref(resolvedVersion) && unref(displayVersion)) _push(ssrRenderComponent(_component_PackageDependencies, {
					"package-name": unref(pkg).name,
					version: unref(resolvedVersion),
					dependencies: unref(displayVersion).dependencies,
					"peer-dependencies": unref(displayVersion).peerDependencies,
					"peer-dependencies-meta": unref(displayVersion).peerDependenciesMeta,
					"optional-dependencies": unref(displayVersion).optionalDependencies
				}, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_PackageKeywords, { keywords: unref(displayVersion)?.keywords }, null, _parent));
				_push(ssrRenderComponent(_component_PackageMaintainers, {
					"package-name": unref(pkg).name,
					maintainers: unref(pkg).maintainers
				}, null, _parent));
				_push(`</div></div></article>`);
			} else if (unref(status) === "error") {
				_push(`<div role="alert" class="flex flex-col items-center py-20 text-center" data-v-7aaa75be><h1 class="font-mono text-2xl font-medium mb-4" data-v-7aaa75be>${ssrInterpolate(unref($t)("package.not_found"))}</h1><p class="text-fg-muted mb-8" data-v-7aaa75be>${ssrInterpolate(unref(error)?.message ?? unref($t)("package.not_found_message"))}</p>`);
				_push(ssrRenderComponent(unref(nuxt_link_default), {
					to: "/",
					class: "btn"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("common.go_back_home"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("common.go_back_home")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
var _sfc_setup = ____package__vue_vue_type_script_setup_true_lang_default.setup;
____package__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package/[...package].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____package__default = /* @__PURE__ */ _plugin_vue_export_helper_default(____package__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0a634e96"]]);

export { ____package__default as default };
//# sourceMappingURL=_...package_-yUY_z9qI.mjs.map

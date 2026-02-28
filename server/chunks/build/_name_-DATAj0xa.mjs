import { _ as _plugin_vue_export_helper_default, u as useI18n, a as useRouter, Z as useMediaQuery, W as useEventListener, $ as useIntersectionObserver, F as useClipboard, S as createError$1, Q as showError, e as useNuxtApp, g as useRoute, a0 as useScroll, R as useHead$1, b as useSeoMeta$1, J as useKeyboardShortcuts, K as onKeyStroke, w as navigateTo, L as isKeyWithoutModifiers, M as isEditableElement, B as Base_default, q as packageRoute, V as diffRoute, o as Base_default$1, n as nuxt_link_default, D as client_only_default, E as DateTime_default, a1 as createSharedComposable, a2 as tryOnScopeDispose, a3 as useMounted, C as onClickOutside, a4 as useWindowScroll, a5 as useElementBounding, r as useSettings, N as useAccentColor, I as useColorMode, m as Base_default$1$1, k as useGlobalSearch, t as useConnector, a6 as useLocalStorage, a7 as useWindowSize, O as onPrehydrate, x as server_placeholder_default, a8 as useElementSize } from './server.mjs';
import { u as useLazyFetch, a as useFetch } from './fetch-BX-wNfYP.mjs';
import { u as useResolvedVersion, a as useRepoMeta } from './useRepoMeta-B-WVfbhK.mjs';
import { u as usePackage, p as parseNodeScript } from './usePackage-BKsfNl2r.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { A as App_default, S as Static_default } from './App-B-_OJFKC.mjs';
import { g as getDependencyCount, C as CopyToClipboardButton_default, a as useCssVariables, l as lightenOklch, b as applyBlocklistCorrection, c as applyDataCorrection, T as TrendsChart_default, f as fetchAllPackageVersions, t as transparentizeOklch, d as copyAltTextForVersionsBarChart } from './TrendsChart-BwimLnmi.mjs';
import { u as useNumberFormatter, a as useCompactNumberFormatter, b as useBytesFormatter } from './useNumberFormatter-CNADtHud.mjs';
import { F as Field_default } from './Field-BBRX0YgS.mjs';
import { b as buildVersionToTagsMap, f as filterVersions, d as filterExcludedTags, g as getPrereleaseChannel, i as isSameVersionGroup, a as getVersionGroupKey, c as getVersionGroupLabel } from './versions-DO0mMTkZ.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-CUGWiqJT.mjs';
import { u as useMarkdown, P as ProvenanceBadge_default } from './useMarkdown-GGTGrYo2.mjs';
import { R as Readme_default, S as SkeletonInline_default } from './SkeletonInline-5VR7VjON.mjs';
import { defineComponent, useTemplateRef, shallowRef, ref, computed, withAsyncContext, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, toValue, resolveDynamicComponent, renderSlot, useId, Transition, renderList, isRef, withDirectives, vShow, withModifiers, nextTick, useSSRContext } from 'vue';
import { A as assertValidPackageName, a_ as joinURL, b2 as areUrlsEquivalent, b3 as isBinaryOnlyPackage, b4 as isCreatePackage, n as encodePackageName, b5 as parseLicenseExpression, b6 as NPMX_DOCS_SITE, b7 as SEVERITY_TEXT_COLORS, b8 as getHighestSeverity, ad as FetchError, b9 as ERROR_NEED_REAUTH, ba as getCreateShortName } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { getVersionsBatch } from 'fast-npm-meta';
import { major, prerelease, valid, compare, validRange, maxSatisfying, gt, diff, minor } from 'semver';
import { VueUiSparkline } from 'vue-data-ui/vue-ui-sparkline';
import 'vue-router';
import 'perfect-debounce';
import 'devalue';
import 'unhead/plugins';
import '@vue/shared';
import '@floating-ui/vue';
import './frameworks-Cvl8C7l0.mjs';
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

var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_SkeletonInline = SkeletonInline_default;
	const _component_SkeletonBlock = SkeletonBlock_default;
	_push(`<article${ssrRenderAttrs(mergeProps({
		"aria-busy": "true",
		"aria-label": _ctx.$t("package.skeleton.loading"),
		class: "package-page motion-safe:animate-fade-in"
	}, _attrs))} data-v-60799a45><header class="area-header sticky top-14 z-1 bg-[--bg] py-2" data-v-60799a45><div class="flex items-baseline gap-x-2 gap-y-1 sm:gap-x-3 flex-wrap min-w-0" data-v-60799a45><div class="min-w-0" data-v-60799a45><h1 class="font-mono text-2xl sm:text-3xl font-medium" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-9 w-48" }, null, _parent));
	_push(`</h1></div><span class="inline-flex items-baseline font-mono text-base sm:text-lg shrink-0" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-20" }, null, _parent));
	_push(`</span><div class="hidden sm:flex items-center gap-0.5 p-0.5 bg-bg-subtle border border-border-subtle rounded-md shrink-0 ms-auto self-center" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-22 rounded" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-20 rounded" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-26 rounded" }, null, _parent));
	_push(`</div><div class="basis-full flex gap-2 sm:gap-3 flex-wrap items-stretch" data-v-60799a45><div class="flex items-center gap-1.5 self-baseline" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-16 h-5.5 rounded" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-13 h-5.5 rounded bg-bg-subtle" }, null, _parent));
	_push(`</div>`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-14 h-5.5 rounded self-baseline" }, null, _parent));
	_push(`</div></div></header><section class="area-details" data-v-60799a45><div class="mb-4" data-v-60799a45><div class="max-w-2xl" data-v-60799a45><div class="space-y-2" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-full" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-4/5" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-5 w-3/5" }, null, _parent));
	_push(`</div></div><ul class="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-4 list-none m-0 p-0 mt-3 text-sm" data-v-60799a45><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-14" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-16" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-10" }, null, _parent));
	_push(`</li></ul></div><dl class="grid grid-cols-2 sm:grid-cols-7 md:grid-cols-11 gap-3 sm:gap-4 py-4 sm:py-6 mt-4 sm:mt-6 border-t border-b border-border" data-v-60799a45><div class="space-y-1 sm:col-span-2" data-v-60799a45><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.stats.license"))}</dt><dd class="font-mono text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-12" }, null, _parent));
	_push(`</dd></div><div class="space-y-1 sm:col-span-2" data-v-60799a45><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.stats.deps"))}</dt><dd class="font-mono text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-12" }, null, _parent));
	_push(`</dd></div><div class="space-y-1 sm:col-span-3" data-v-60799a45><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.stats.install_size"))}</dt><dd class="font-mono text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-16" }, null, _parent));
	_push(`</dd></div><div class="space-y-1 sm:col-span-2" data-v-60799a45><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.stats.vulns"))}</dt><dd class="font-mono text-sm text-fg-subtle" data-v-60799a45>-</dd></div><div class="space-y-1 sm:col-span-2" data-v-60799a45><dt class="text-xs text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.stats.published"))}</dt><dd class="font-mono text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</dd></div></dl></section><section class="area-install scroll-mt-20" data-v-60799a45><div class="flex flex-wrap items-center justify-between mb-3" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.get_started.title"))}</h2>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-24 rounded" }, null, _parent));
	_push(`</div><div class="bg-bg-subtle border border-border rounded-lg overflow-hidden" data-v-60799a45><div class="flex gap-1.5 px-3 pt-2 sm:px-4 sm:pt-3" data-v-60799a45><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle" data-v-60799a45></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle" data-v-60799a45></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle" data-v-60799a45></span></div><div class="px-3 pt-2 pb-3 sm:px-4 sm:pt-3 sm:pb-4 space-y-1" data-v-60799a45><div class="flex items-center gap-2" data-v-60799a45><span class="text-fg-subtle font-mono text-sm select-none shrink-0" data-v-60799a45>\$</span>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-40" }, null, _parent));
	_push(`</div><div class="flex items-center gap-2 pt-1" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(`</div><div class="flex items-center gap-2" data-v-60799a45><span class="text-fg-subtle font-mono text-sm select-none shrink-0" data-v-60799a45>\$</span>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</div><div class="flex items-center gap-2 pt-1" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-36" }, null, _parent));
	_push(`</div><div class="flex items-center gap-2" data-v-60799a45><span class="text-fg-subtle font-mono text-sm select-none shrink-0" data-v-60799a45>\$</span>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-32" }, null, _parent));
	_push(`</div></div></div></section><div class="area-vulns" data-v-60799a45></div><section class="area-readme min-w-0 scroll-mt-20" data-v-60799a45><div class="flex flex-wrap items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.readme.title"))}</h2></div><div class="space-y-4" data-v-60799a45>`);
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
	_push(`</div></section><div class="area-sidebar" data-v-60799a45><div class="sticky top-30 xl:top-14 space-y-6 sm:space-y-8 min-w-0 overflow-y-auto pe-2.5 lg:max-h-[calc(100dvh-8.5rem)] lg:overscroll-contain xl:pt-2 xl:max-h-[calc(100dvh-6rem)]" data-v-60799a45><div class="flex flex-col gap-4 sm:gap-6 xl:pt-2" data-v-60799a45><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.downloads.title"))}</h2></div><div class="ms-6 max-w-xs" data-v-60799a45><div class="h-6 flex items-center ps-3" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-3 w-36" }, null, _parent));
	_push(`</div><div class="aspect-[500/80] flex items-center" data-v-60799a45><div class="w-[42%] flex items-center ps-0.5" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-24" }, null, _parent));
	_push(`</div><div class="flex-1 flex items-end pe-3" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-px w-full" }, null, _parent));
	_push(`</div></div></div></section><section class="px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider mb-3" data-v-60799a45>${ssrInterpolate(_ctx.$t("package.playgrounds.title"))}</h2>`);
	_push(ssrRenderComponent(_component_SkeletonBlock, { class: "w-full h-9 rounded-md" }, null, _parent));
	_push(`</section><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.compatibility"))}</h2></div><div class="ms-6 space-y-2" data-v-60799a45><div class="flex justify-between gap-4 py-1" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-16" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-20" }, null, _parent));
	_push(`</div></div></section><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.skeleton.versions"))}</h2></div><div class="ms-6 space-y-0.5 min-w-0" data-v-60799a45><!--[-->`);
	ssrRenderList(4, (i) => {
		_push(`<div class="flex items-center gap-2 px-1" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-right w-3 h-3 text-fg-subtle" aria-hidden="true" data-v-60799a45></span></span><div class="flex-1 py-1.5 min-w-0 flex gap-2 justify-between items-center" data-v-60799a45><div data-v-60799a45>`);
		_push(ssrRenderComponent(_component_SkeletonInline, { class: ["h-4", i === 1 ? "w-12" : i === 2 ? "w-22" : i === 3 ? "w-26" : "w-14"] }, null, _parent));
		_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-2.5 w-10 mt-0.5" }, null, _parent));
		_push(`</div>`);
		_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-3 w-20 shrink-0" }, null, _parent));
		_push(`</div></div>`);
	});
	_push(`<!--]--><div class="flex items-center gap-2 p-1" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-right w-3 h-3 text-fg-subtle" aria-hidden="true" data-v-60799a45></span></span>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-3 w-28" }, null, _parent));
	_push(`</div></div></section><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.skeleton.dependencies"))}</h2></div><ul class="ms-6 px-1 space-y-1 list-none m-0 p-0" data-v-60799a45><li class="flex items-center justify-between py-1 text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-24" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-12" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-32" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-10" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-20" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-14" }, null, _parent));
	_push(`</li><li class="flex items-center justify-between py-1 text-sm" data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-28" }, null, _parent));
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-12" }, null, _parent));
	_push(`</li></ul></section><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.skeleton.keywords"))}</h2></div><ul class="ms-6 flex flex-wrap gap-1.5 list-none m-0 p-1" data-v-60799a45><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-16 rounded" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-12 rounded" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-20 rounded" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-14 rounded" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-18 rounded" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-6 w-10 rounded" }, null, _parent));
	_push(`</li></ul></section><section data-v-60799a45><div class="flex items-center justify-between mb-3 px-1" data-v-60799a45><h2 class="text-xs font-mono text-fg-subtle uppercase tracking-wider flex items-center gap-2" data-v-60799a45><span class="w-4 h-4 flex items-center justify-center shrink-0" data-v-60799a45><span class="i-lucide:chevron-down w-3 h-3" aria-hidden="true" data-v-60799a45></span></span> ${ssrInterpolate(_ctx.$t("package.skeleton.maintainers"))}</h2></div><ul class="ms-6 space-y-2 list-none my-1 px-1" data-v-60799a45><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-28" }, null, _parent));
	_push(`</li><li data-v-60799a45>`);
	_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-5 w-24" }, null, _parent));
	_push(`</li></ul></section></div></div></div></article>`);
}
var _sfc_setup$25 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Skeleton.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
var Skeleton_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-60799a45"]]), { __name: "PackageSkeleton" });
var Group_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Group",
	__ssrInlineRender: true,
	props: { as: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as || "div"), mergeProps({ class: "flex items-center shrink-0 [&>*:not(:first-child)]:rounded-s-none [&>*:not(:first-child)]:border-s-0 [&>*:not(:last-child)]:rounded-e-none" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
var _sfc_setup$24 = Group_vue_vue_type_script_setup_true_lang_default.setup;
Group_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Group.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
var Group_default = Object.assign(Group_vue_vue_type_script_setup_true_lang_default, { __name: "ButtonGroup" });
/**
* Composable for fetching package analysis data (module format, types info, etc.)
*/
function usePackageAnalysis(packageName, version) {
	return useLazyFetch(() => {
		const name = toValue(packageName);
		const ver = toValue(version);
		const base = `/api/registry/analysis/${name}`;
		return ver ? `${base}/v/${ver}` : base;
	}, "$u06C65qZ1E");
}
var MetricsBadges_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricsBadges",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		isBinary: { type: Boolean },
		version: {}
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const { data: analysis, status } = usePackageAnalysis(() => props.packageName, () => props.version);
		const isLoading = computed(() => status.value !== "error" && !analysis.value);
		const hasEsm = computed(() => {
			if (!analysis.value) return false;
			return analysis.value.moduleFormat === "esm" || analysis.value.moduleFormat === "dual";
		});
		const hasCjs = computed(() => {
			if (!analysis.value) return false;
			return analysis.value.moduleFormat === "cjs" || analysis.value.moduleFormat === "dual";
		});
		const hasTypes = computed(() => {
			if (!analysis.value) return false;
			return analysis.value.types?.kind === "included" || analysis.value.types?.kind === "@types";
		});
		const typesTooltip = computed(() => {
			if (!analysis.value) return "";
			switch (analysis.value.types?.kind) {
				case "included": return $t("package.metrics.types_included");
				case "@types": return $t("package.metrics.types_available", { package: analysis.value.types.packageName });
				default: return $t("package.metrics.no_types");
			}
		});
		const typesHref = computed(() => {
			if (!analysis.value) return null;
			if (analysis.value.types?.kind === "@types") return `/package/${analysis.value.types.packageName}`;
			return null;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-1.5 list-none m-0 p-0" }, _attrs))}>`);
			if (!props.isBinary) {
				_push(`<li class="contents">`);
				_push(ssrRenderComponent(_component_TooltipApp, {
					text: unref(typesTooltip),
					strategy: "fixed"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) if (unref(typesHref)) _push(ssrRenderComponent(unref(Base_default), {
							variant: "button-secondary",
							size: "small",
							to: unref(typesHref),
							classicon: "i-lucide:check"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.metrics.types_label"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.metrics.types_label")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Static_default), {
							variant: unref(hasTypes) && !unref(isLoading) ? "default" : "ghost",
							tabindex: 0,
							classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : unref(hasTypes) ? "i-lucide:check" : "i-lucide:x"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.metrics.types_label"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.metrics.types_label")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [unref(typesHref) ? (openBlock(), createBlock(unref(Base_default), {
							key: 0,
							variant: "button-secondary",
							size: "small",
							to: unref(typesHref),
							classicon: "i-lucide:check"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.metrics.types_label")), 1)]),
							_: 1
						}, 8, ["to"])) : (openBlock(), createBlock(unref(Static_default), {
							key: 1,
							variant: unref(hasTypes) && !unref(isLoading) ? "default" : "ghost",
							tabindex: 0,
							classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : unref(hasTypes) ? "i-lucide:check" : "i-lucide:x"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.metrics.types_label")), 1)]),
							_: 1
						}, 8, ["variant", "classicon"]))];
					}),
					_: 1
				}, _parent));
				_push(`</li>`);
			} else _push(`<!---->`);
			_push(`<li class="contents">`);
			_push(ssrRenderComponent(_component_TooltipApp, {
				text: unref(isLoading) ? "" : unref(hasEsm) ? unref($t)("package.metrics.esm") : unref($t)("package.metrics.no_esm"),
				strategy: "fixed"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Static_default), {
						tabindex: "0",
						variant: unref(hasEsm) && !unref(isLoading) ? "default" : "ghost",
						classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : unref(hasEsm) ? "i-lucide:check" : "i-lucide:x"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` ESM `);
							else return [createTextVNode(" ESM ")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Static_default), {
						tabindex: "0",
						variant: unref(hasEsm) && !unref(isLoading) ? "default" : "ghost",
						classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : unref(hasEsm) ? "i-lucide:check" : "i-lucide:x"
					}, {
						default: withCtx(() => [createTextVNode(" ESM ")]),
						_: 1
					}, 8, ["variant", "classicon"])];
				}),
				_: 1
			}, _parent));
			_push(`</li>`);
			if (unref(isLoading) || unref(hasCjs)) {
				_push(`<li class="contents">`);
				_push(ssrRenderComponent(_component_TooltipApp, {
					text: unref(isLoading) ? "" : unref($t)("package.metrics.cjs"),
					strategy: "fixed"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(unref(Static_default), {
							tabindex: "0",
							variant: unref(isLoading) ? "ghost" : "default",
							classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : "i-lucide:check"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` CJS `);
								else return [createTextVNode(" CJS ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(unref(Static_default), {
							tabindex: "0",
							variant: unref(isLoading) ? "ghost" : "default",
							classicon: unref(isLoading) ? "i-svg-spinners:ring-resize " : "i-lucide:check"
						}, {
							default: withCtx(() => [createTextVNode(" CJS ")]),
							_: 1
						}, 8, ["variant", "classicon"])];
					}),
					_: 1
				}, _parent));
				_push(`</li>`);
			} else _push(`<!---->`);
			_push(`</ul>`);
		};
	}
});
var _sfc_setup$23 = MetricsBadges_vue_vue_type_script_setup_true_lang_default.setup;
MetricsBadges_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/MetricsBadges.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
var MetricsBadges_default = Object.assign(MetricsBadges_vue_vue_type_script_setup_true_lang_default, { __name: "PackageMetricsBadges" });
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
				else if (token.type === "operator") _push(`<span class="text-4xs">${ssrInterpolate(token.value)}</span>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]-->`);
			if (unref(hasAnyValidLicense)) _push(`<span class="i-lucide:scale w-3.5 h-3.5 text-fg-subtle flex-shrink-0 self-center" aria-hidden="true"></span>`);
			else _push(`<!---->`);
			_push(`</span>`);
		};
	}
});
var _sfc_setup$22 = LicenseDisplay_vue_vue_type_script_setup_true_lang_default.setup;
LicenseDisplay_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LicenseDisplay.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
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
		executeLocal: "vlx",
		executeRemote: "vlx",
		create: "vlx",
		icon: "i-custom-vlt"
	}
];
function getDevDependencyFlag(packageManager) {
	return packageManager === "bun" ? "-d" : "-D";
}
/**
* Get the package specifier for a given package manager.
* Handles jsr: prefix for deno (when available on JSR).
*/
function getPackageSpecifier(options) {
	const { packageName, packageManager, jsrInfo } = options;
	if (packageManager === "deno") {
		if (jsrInfo?.exists && jsrInfo.scope && jsrInfo.name) return `jsr:@${jsrInfo.scope}/${jsrInfo.name}`;
		return `npm:${packageName}`;
	}
	return packageName;
}
/**
* Generate the full install command for a package.
*/
function getInstallCommand(options) {
	return getInstallCommandParts(options).join(" ");
}
/**
* Generate install command as an array of parts.
* First element is the command (e.g., "npm"), rest are arguments.
* Useful for rendering with different styling for command vs args.
*/
function getInstallCommandParts(options) {
	const pm = packageManagers.find((p) => p.id === options.packageManager);
	if (!pm) return [];
	const spec = getPackageSpecifier(options);
	const version = options.version ? `@${options.version}` : "";
	const devFlag = options.dev ? [getDevDependencyFlag(options.packageManager)] : [];
	return [
		pm.label,
		pm.action,
		...devFlag,
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
/**
* Composable for managing the selected package manager preference.
*
* This composable syncs the selected PM to both localStorage and the
* `data-pm` attribute on `<html>`. The attribute enables CSS-based
* visibility of PM-specific content without JavaScript.
*
*/
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
			_push(`<!--[--><button type="button" class="cursor-pointer flex items-center gap-1.5 px-2 py-2 font-mono text-xs text-fg-muted bg-bg-subtle border border-border-subtle border-solid rounded-md transition-colors duration-150 hover:text-fg hover:border-border-hover active:scale-95 focus:border-border-hover focus-visible:outline-accent/70"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-haspopup="listbox"${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.pm_label"))}${ssrRenderAttr("aria-controls", listboxId)}><!--[-->`);
			ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pmOption) => {
				_push(`<!--[--><span class="${ssrRenderClass([pmOption.icon, "inline-block h-3 w-3 pm-select-content"])}"${ssrRenderAttr("data-pm-select", pmOption.id)} aria-hidden="true"></span><span class="pm-select-content"${ssrRenderAttr("data-pm-select", pmOption.id)}${ssrRenderAttr("aria-hidden", pmOption.id !== unref(selectedPM))}>${ssrInterpolate(pmOption.label)}</span><!--]-->`);
			});
			_push(`<!--]--><span class="${ssrRenderClass([[{ "rotate-180": unref(isOpen) }, unref(prefersReducedMotion) ? "" : "transition-transform duration-200"], "i-lucide:chevron-down w-3 h-3"])}" aria-hidden="true"></span></button>`);
			ssrRenderTeleport(_push, (_push) => {
				if (unref(isOpen)) {
					_push(`<ul${ssrRenderAttr("id", listboxId)} role="listbox"${ssrRenderAttr("aria-activedescendant", unref(highlightedIndex) >= 0 ? `${listboxId}-${("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers))[unref(highlightedIndex)]?.id}` : void 0)}${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.pm_label"))} style="${ssrRenderStyle(getDropdownStyle())}" class="fixed bg-bg-subtle border border-border rounded-md shadow-lg z-50"><!--[-->`);
					ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm, index) => {
						_push(`<li${ssrRenderAttr("id", `${listboxId}-${pm.id}`)} role="option"${ssrRenderAttr("aria-selected", unref(selectedPM) === pm.id)} class="${ssrRenderClass([[unref(selectedPM) === pm.id ? "text-fg" : "text-fg-subtle", unref(highlightedIndex) === index ? "bg-bg-elevated" : "hover:bg-bg-elevated"], "cursor-pointer flex items-center gap-2 px-3 py-1.5 font-mono text-xs transition-colors duration-150"])}"><span class="${ssrRenderClass([pm.icon, "inline-block h-3 w-3"])}" aria-hidden="true"></span><span>${ssrInterpolate(pm.label)}</span>`);
						if (unref(selectedPM) === pm.id) _push(`<span class="i-lucide:check w-3 h-3 text-accent ms-auto" aria-hidden="true"></span>`);
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
var _sfc_setup$21 = ManagerSelect_vue_vue_type_script_setup_true_lang_default.setup;
ManagerSelect_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ManagerSelect.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var ManagerSelect_default = Object.assign(ManagerSelect_vue_vue_type_script_setup_true_lang_default, { __name: "PackageManagerSelect" });
/**
* A terminal-style execute command display for binary-only packages.
* Renders all package manager variants with CSS-based visibility.
*/
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
		const { copied: executeCopied} = useClipboard({ copiedDuring: 2e3 });
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
var _sfc_setup$20 = Execute_vue_vue_type_script_setup_true_lang_default.setup;
Execute_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Terminal/Execute.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var Execute_default = Object.assign(Execute_vue_vue_type_script_setup_true_lang_default, { __name: "TerminalExecute" });
/**
* Composable for generating install commands with support for
* multiple package managers, @types packages, and JSR.
*/
function useInstallCommand(packageName, requestedVersion, jsrInfo, typesPackageName, installVersionOverride) {
	const selectedPM = useSelectedPackageManager();
	const { settings } = useSettings();
	const showTypesInInstall = computed(() => {
		return settings.value.includeTypesInInstall && !!toValue(typesPackageName);
	});
	const installCommandParts = computed(() => {
		const name = toValue(packageName);
		if (!name) return [];
		const version = toValue(installVersionOverride) ?? toValue(requestedVersion);
		return getInstallCommandParts({
			packageName: name,
			packageManager: selectedPM.value,
			version,
			jsrInfo: toValue(jsrInfo)
		});
	});
	const installCommand = computed(() => {
		const name = toValue(packageName);
		if (!name) return "";
		const version = toValue(installVersionOverride) ?? toValue(requestedVersion);
		return getInstallCommand({
			packageName: name,
			packageManager: selectedPM.value,
			version,
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
/**
* Extract executable command information from a package's bin field.
* Handles both string format ("bin": "./cli.js") and object format ("bin": { "cmd": "./cli.js" }).
*/
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
/**
* Generate run command as an array of parts.
* First element is the package manager label (e.g., "pnpm"), rest are arguments.
* For example: ["pnpm", "exec", "eslint"] or ["pnpm", "dlx", "create-vite"]
*/
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
		installVersionOverride: {},
		jsrInfo: {},
		devDependencySuggestion: {},
		typesPackageName: {},
		executableInfo: {},
		createPackageInfo: {}
	},
	setup(__props) {
		const props = __props;
		const { selectedPM, showTypesInInstall, copied} = useInstallCommand(() => props.packageName, () => props.requestedVersion ?? null, () => props.jsrInfo ?? null, () => props.typesPackageName ?? null, () => props.installVersionOverride ?? null);
		function getInstallPartsForPM(pmId) {
			return getInstallCommandParts({
				packageName: props.packageName,
				packageManager: pmId,
				version: props.installVersionOverride ?? props.requestedVersion,
				jsrInfo: props.jsrInfo
			});
		}
		const devDependencySuggestion = computed(() => props.devDependencySuggestion ?? { recommended: false });
		function getDevInstallPartsForPM(pmId) {
			return getInstallCommandParts({
				packageName: props.packageName,
				packageManager: pmId,
				version: props.requestedVersion,
				jsrInfo: props.jsrInfo,
				dev: true
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
			const devFlag = getDevDependencyFlag(pmId);
			const pkgSpec = pmId === "deno" ? `npm:${props.typesPackageName}` : props.typesPackageName;
			return [
				pm.label,
				pm.action,
				devFlag,
				pkgSpec
			];
		}
		const { copied: runCopied} = useClipboard({ copiedDuring: 2e3 });
		const { copied: createCopied} = useClipboard({ copiedDuring: 2e3 });
		const { copied: devInstallCopied, copy: copyDevInstall } = useClipboard({ copiedDuring: 2e3 });
		const copyDevInstallCommand = () => copyDevInstall(getInstallCommand({
			packageName: props.packageName,
			packageManager: selectedPM.value,
			version: props.requestedVersion,
			jsrInfo: props.jsrInfo,
			dev: true
		}));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			const _component_NuxtLink = nuxt_link_default;
			const _component_TooltipApp = App_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))}><div class="bg-bg-subtle border border-border rounded-lg overflow-hidden"><div class="flex gap-1.5 px-3 pt-2 sm:px-4 sm:pt-3"><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span><span class="w-2.5 h-2.5 rounded-full bg-fg-subtle"></span></div><div class="px-3 pt-2 pb-3 sm:px-4 sm:pt-3 sm:pb-4 space-y-1 overflow-x-auto" dir="ltr"><!--[-->`);
			ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
				_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/installcmd min-w-0"><span class="self-start text-fg-subtle font-mono text-sm select-none shrink-0">\$</span><code class="font-mono text-sm min-w-0"><!--[-->`);
				ssrRenderList(getInstallPartsForPM(pm.id), (part, i) => {
					_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
				});
				_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/installcmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70 select-none"${ssrRenderAttr("aria-label", _ctx.$t("package.get_started.copy_command"))}><span aria-live="polite">${ssrInterpolate(unref(copied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</span></button></div>`);
			});
			_push(`<!--]-->`);
			if (unref(devDependencySuggestion).recommended) {
				_push(`<!--[--><div class="flex items-center gap-2 pt-1 select-none"><span class="text-fg-subtle font-mono text-sm"># ${ssrInterpolate(_ctx.$t("package.get_started.dev_dependency_hint"))}</span></div><!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/devinstallcmd min-w-0"><span class="text-fg-subtle font-mono text-sm select-none shrink-0">\$</span><code class="font-mono text-sm min-w-0"><!--[-->`);
					ssrRenderList(getDevInstallPartsForPM(pm.id), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code>`);
					_push(ssrRenderComponent(_component_ButtonBase, {
						type: "button",
						size: "small",
						class: "text-fg-muted bg-bg-subtle/80 border-border opacity-0 group-hover/devinstallcmd:opacity-100 active:scale-95 focus-visible:opacity-100 select-none",
						"aria-label": _ctx.$t("package.get_started.copy_dev_command"),
						onClick: copyDevInstallCommand
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span aria-live="polite"${_scopeId}>${ssrInterpolate(unref(devInstallCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</span>`);
							else return [createVNode("span", { "aria-live": "polite" }, toDisplayString(unref(devInstallCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy")), 1)];
						}),
						_: 2
					}, _parent));
					_push(`</div>`);
				});
				_push(`<!--]--><!--]-->`);
			} else _push(`<!---->`);
			if (__props.typesPackageName && unref(showTypesInInstall)) {
				_push(`<!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 min-w-0"><span class="self-start text-fg-subtle font-mono text-sm select-none shrink-0">\$</span><code class="font-mono text-sm min-w-0"><!--[-->`);
					ssrRenderList(getTypesInstallPartsForPM(pm.id), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.typesPackageName),
						class: "text-fg-subtle hover:text-fg-muted text-xs transition-colors focus-visible:outline-accent/70 rounded select-none",
						title: _ctx.$t("package.get_started.view_types", { package: __props.typesPackageName })
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-lucide:arrow-right rtl-flip w-3 h-3 align-middle" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>View ${ssrInterpolate(__props.typesPackageName)}</span>`);
							else return [createVNode("span", {
								class: "i-lucide:arrow-right rtl-flip w-3 h-3 align-middle",
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
				_push(`<!--[--><div class="flex items-center gap-2 pt-1" dir="auto"><span class="text-fg-subtle font-mono text-sm select-none"># ${ssrInterpolate(_ctx.$t("package.run.locally"))}</span></div><!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/runcmd"><span class="self-start text-fg-subtle font-mono text-sm select-none">\$</span><code class="font-mono text-sm"><!--[-->`);
					ssrRenderList(getRunPartsForPM(pm.id, __props.executableInfo?.primaryCommand), (part, i) => {
						_push(`<span class="${ssrRenderClass(i === 0 ? "text-fg" : "text-fg-muted")}">${ssrInterpolate(i > 0 ? " " : "")}${ssrInterpolate(part)}</span>`);
					});
					_push(`<!--]--></code><button type="button" class="px-2 py-0.5 font-mono text-xs text-fg-muted bg-bg-subtle/80 border border-border rounded transition-colors duration-200 opacity-0 group-hover/runcmd:opacity-100 hover:text-fg hover:border-border-hover active:scale-95 focus-visible:opacity-100 focus-visible:outline-accent/70 select-none">${ssrInterpolate(unref(runCopied) ? _ctx.$t("common.copied") : _ctx.$t("common.copy"))}</button></div>`);
				});
				_push(`<!--]--><!--]-->`);
			} else _push(`<!---->`);
			if (__props.createPackageInfo) {
				_push(`<!--[--><div class="flex items-center gap-2 pt-1 select-none" dir="auto"><span class="text-fg-subtle font-mono text-sm"># ${ssrInterpolate(_ctx.$t("package.create.title"))}</span>`);
				_push(ssrRenderComponent(_component_TooltipApp, { text: _ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName }) }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.createPackageInfo.packageName),
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-muted hover:text-fg text-xs transition-colors focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="i-lucide:info w-3 h-3" aria-hidden="true"${_scopeId}></span><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName }))}</span>`);
								else return [createVNode("span", {
									class: "i-lucide:info w-3 h-3",
									"aria-hidden": "true"
								}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName })), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(_component_NuxtLink, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.createPackageInfo.packageName),
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-muted hover:text-fg text-xs transition-colors focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, {
							default: withCtx(() => [createVNode("span", {
								class: "i-lucide:info w-3 h-3",
								"aria-hidden": "true"
							}), createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.create.view", { packageName: __props.createPackageInfo.packageName })), 1)]),
							_: 1
						}, 8, ["to"])];
					}),
					_: 1
				}, _parent));
				_push(`</div><!--[-->`);
				ssrRenderList("packageManagers" in _ctx ? _ctx.packageManagers : unref(packageManagers), (pm) => {
					_push(`<div${ssrRenderAttr("data-pm-cmd", pm.id)} class="flex items-center gap-2 group/createcmd"><span class="self-start text-fg-subtle font-mono text-sm select-none">\$</span><code class="font-mono text-sm"><!--[-->`);
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
var _sfc_setup$19 = Install_vue_vue_type_script_setup_true_lang_default.setup;
Install_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Terminal/Install.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Install_default = Object.assign(Install_vue_vue_type_script_setup_true_lang_default, { __name: "TerminalInstall" });
var Replacement_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Replacement",
	__ssrInlineRender: true,
	props: { replacement: {} },
	setup(__props) {
		const props = __props;
		const mdnUrl = computed(() => {
			if (props.replacement.type !== "native" || !props.replacement.mdnPath) return null;
			return `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/${props.replacement.mdnPath}`;
		});
		const docPath = computed(() => {
			if (props.replacement.type !== "documented" || !props.replacement.docPath) return null;
			return `https://e18e.dev/docs/replacements/${props.replacement.docPath}.html`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-amber-600/40 bg-amber-500/10 rounded-lg px-3 py-2 text-base text-amber-800 dark:text-amber-400" }, _attrs))}><h2 class="font-medium mb-1 flex items-center gap-2"><span class="i-lucide:lightbulb w-4 h-4" aria-hidden="true"></span> ${ssrInterpolate(_ctx.$t("package.replacement.title"))}</h2><p class="text-sm m-0">`);
			if (__props.replacement.type === "native") _push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.replacement.native",
				scope: "global"
			}, {
				replacement: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.replacement.replacement)}`);
					else return [createTextVNode(toDisplayString(__props.replacement.replacement), 1)];
				}),
				nodeVersion: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.replacement.nodeVersion)}`);
					else return [createTextVNode(toDisplayString(__props.replacement.nodeVersion), 1)];
				}),
				_: 1
			}, _parent));
			else if (__props.replacement.type === "simple") _push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.replacement.simple",
				scope: "global"
			}, {
				community: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://e18e.dev/docs/replacements/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("package.replacement.community"))} <span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
					else return [createVNode("a", {
						href: "https://e18e.dev/docs/replacements/",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"
					}, [createTextVNode(toDisplayString(_ctx.$t("package.replacement.community")) + " ", 1), createVNode("span", {
						class: "i-lucide:external-link w-3 h-3",
						"aria-hidden": "true"
					})])];
				}),
				replacement: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.replacement.replacement)}`);
					else return [createTextVNode(toDisplayString(__props.replacement.replacement), 1)];
				}),
				_: 1
			}, _parent));
			else if (__props.replacement.type === "documented") _push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.replacement.documented",
				scope: "global"
			}, {
				community: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://e18e.dev/docs/replacements/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("package.replacement.community"))} <span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
					else return [createVNode("a", {
						href: "https://e18e.dev/docs/replacements/",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors"
					}, [createTextVNode(toDisplayString(_ctx.$t("package.replacement.community")) + " ", 1), createVNode("span", {
						class: "i-lucide:external-link w-3 h-3",
						"aria-hidden": "true"
					})])];
				}),
				_: 1
			}, _parent));
			else _push(`<!--[-->${ssrInterpolate(_ctx.$t("package.replacement.none"))}<!--]-->`);
			if (unref(mdnUrl)) _push(`<a${ssrRenderAttr("href", unref(mdnUrl))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors">${ssrInterpolate(_ctx.$t("package.replacement.mdn"))} <span class="i-lucide:external-link w-3 h-3" aria-hidden="true"></span></a>`);
			else _push(`<!---->`);
			if (unref(docPath)) _push(`<a${ssrRenderAttr("href", unref(docPath))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 ms-1 underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg transition-colors">${ssrInterpolate(_ctx.$t("package.replacement.learn_more"))} <span class="i-lucide:external-link w-3 h-3" aria-hidden="true"></span></a>`);
			else _push(`<!---->`);
			_push(`</p></div>`);
		};
	}
});
var _sfc_setup$18 = Replacement_vue_vue_type_script_setup_true_lang_default.setup;
Replacement_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Replacement.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Replacement_default = Object.assign(Replacement_vue_vue_type_script_setup_true_lang_default, { __name: "PackageReplacement" });
var SizeIncrease_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SizeIncrease",
	__ssrInlineRender: true,
	props: { diff: {} },
	setup(__props) {
		const props = __props;
		const bytesFormatter = useBytesFormatter();
		const numberFormatter = useNumberFormatter();
		const sizePercent = computed(() => Math.round(props.diff.sizeRatio * 100));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-amber-600/40 bg-amber-500/10 rounded-lg px-3 py-2 text-base text-amber-800 dark:text-amber-400" }, _attrs))}><h2 class="font-medium mb-1 flex items-center gap-2"><span class="i-lucide:trending-up w-4 h-4" aria-hidden="true"></span> ${ssrInterpolate(__props.diff.sizeThresholdExceeded && __props.diff.depThresholdExceeded ? _ctx.$t("package.size_increase.title_both", { version: __props.diff.comparisonVersion }) : __props.diff.sizeThresholdExceeded ? _ctx.$t("package.size_increase.title_size", { version: __props.diff.comparisonVersion }) : _ctx.$t("package.size_increase.title_deps", { version: __props.diff.comparisonVersion }))}</h2><p class="text-sm m-0 mt-1">`);
			if (__props.diff.sizeThresholdExceeded) _push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.size_increase.size",
				scope: "global"
			}, {
				percent: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>${ssrInterpolate(unref(sizePercent))}%</strong>`);
					else return [createVNode("strong", null, toDisplayString(unref(sizePercent)) + "%", 1)];
				}),
				size: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>${ssrInterpolate(unref(bytesFormatter).format(__props.diff.sizeIncrease))}</strong>`);
					else return [createVNode("strong", null, toDisplayString(unref(bytesFormatter).format(__props.diff.sizeIncrease)), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.diff.sizeThresholdExceeded && __props.diff.depThresholdExceeded) _push(`<!--[--> · <!--]-->`);
			else _push(`<!---->`);
			if (__props.diff.depThresholdExceeded) _push(ssrRenderComponent(_component_i18n_t, {
				keypath: "package.size_increase.deps",
				scope: "global"
			}, {
				count: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>+${ssrInterpolate(unref(numberFormatter).format(__props.diff.depDiff))}</strong>`);
					else return [createVNode("strong", null, "+" + toDisplayString(unref(numberFormatter).format(__props.diff.depDiff)), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</p></div>`);
		};
	}
});
var _sfc_setup$17 = SizeIncrease_vue_vue_type_script_setup_true_lang_default.setup;
SizeIncrease_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/SizeIncrease.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var SizeIncrease_default = Object.assign(SizeIncrease_vue_vue_type_script_setup_true_lang_default, { __name: "PackageSizeIncrease" });
var ReadmeTocDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ReadmeTocDropdown",
	__ssrInlineRender: true,
	props: {
		toc: {},
		activeId: {}
	},
	setup(__props) {
		const props = __props;
		function buildTocTree(items) {
			const result = [];
			const stack = [];
			for (const item of items) {
				const node = {
					...item,
					children: []
				};
				while (stack.length > 0 && stack[stack.length - 1].depth >= item.depth) stack.pop();
				if (stack.length === 0) result.push(node);
				else stack[stack.length - 1].children.push(node);
				stack.push(node);
			}
			return result;
		}
		const tocTree = computed(() => buildTocTree(props.toc));
		const idToIndex = computed(() => {
			const map = /* @__PURE__ */ new Map();
			props.toc.forEach((item, index) => map.set(item.id, index));
			return map;
		});
		const listRef = useTemplateRef("listRef");
		const triggerRef = useTemplateRef("triggerRef");
		const isOpen = shallowRef(false);
		const highlightedIndex = shallowRef(-1);
		const dropdownPosition = shallowRef(null);
		function getDropdownStyle() {
			if (!dropdownPosition.value) return {};
			return {
				top: `${dropdownPosition.value.top}px`,
				right: `${(void 0).documentElement.clientWidth - dropdownPosition.value.right}px`
			};
		}
		function handleScroll(event) {
			if (!isOpen.value) return;
			if (listRef.value && event.target instanceof Node && listRef.value.contains(event.target)) return;
			close();
		}
		useEventListener("scroll", handleScroll, { passive: true });
		const listboxId = `${useId()}-toc-listbox`;
		function toggle() {
			if (isOpen.value) close();
			else {
				const rect = triggerRef.value?.getBoundingClientRect();
				if (rect) dropdownPosition.value = {
					top: rect.bottom + 4,
					right: rect.right
				};
				isOpen.value = true;
				highlightedIndex.value = idToIndex.value.get(props.activeId ?? "") ?? 0;
			}
		}
		function close() {
			isOpen.value = false;
			highlightedIndex.value = -1;
		}
		function select() {
			close();
			triggerRef.value?.focus();
		}
		function getIndex(id) {
			return idToIndex.value.get(id) ?? -1;
		}
		const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
		onClickOutside(listRef, close, { ignore: [triggerRef] });
		function handleKeydown(event) {
			if (!isOpen.value) return;
			const itemCount = props.toc.length;
			switch (event.key) {
				case "ArrowDown":
					event.preventDefault();
					highlightedIndex.value = (highlightedIndex.value + 1) % itemCount;
					break;
				case "ArrowUp":
					event.preventDefault();
					highlightedIndex.value = highlightedIndex.value <= 0 ? itemCount - 1 : highlightedIndex.value - 1;
					break;
				case "Enter":
					event.preventDefault();
					if (props.toc[highlightedIndex.value]) select();
					break;
				case "Escape":
					close();
					triggerRef.value?.focus();
					break;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				ref_key: "triggerRef",
				ref: triggerRef,
				type: "button",
				"aria-expanded": unref(isOpen),
				"aria-haspopup": "listbox",
				"aria-label": _ctx.$t("package.readme.toc_title"),
				"aria-controls": listboxId,
				onClick: toggle,
				onKeydown: handleKeydown,
				classicon: "i-lucide:list",
				class: "px-2.5",
				block: ""
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="${ssrRenderClass([[{ "rotate-180": unref(isOpen) }, unref(prefersReducedMotion) ? "" : "transition-transform duration-200"], "i-lucide:chevron-down w-3 h-3"])}" aria-hidden="true"${_scopeId}></span>`);
					else return [createVNode("span", {
						class: ["i-lucide:chevron-down w-3 h-3", [{ "rotate-180": unref(isOpen) }, unref(prefersReducedMotion) ? "" : "transition-transform duration-200"]],
						"aria-hidden": "true"
					}, null, 2)];
				}),
				_: 1
			}, _parent));
			ssrRenderTeleport(_push, (_push) => {
				if (unref(isOpen)) {
					_push(`<div${ssrRenderAttr("id", listboxId)} role="listbox"${ssrRenderAttr("aria-activedescendant", unref(highlightedIndex) >= 0 ? `${listboxId}-${__props.toc[unref(highlightedIndex)]?.id}` : void 0)}${ssrRenderAttr("aria-label", _ctx.$t("package.readme.toc_title"))} style="${ssrRenderStyle(getDropdownStyle())}" class="fixed bg-bg-subtle border border-border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto w-56 overscroll-contain"><!--[-->`);
					ssrRenderList(unref(tocTree), (node) => {
						_push(`<!--[-->`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							id: `${listboxId}-${node.id}`,
							to: `#${node.id}`,
							role: "option",
							"aria-selected": __props.activeId === node.id,
							class: ["flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer transition-colors duration-150", [__props.activeId === node.id ? "text-fg font-medium" : "text-fg-muted", unref(highlightedIndex) === getIndex(node.id) ? "bg-bg-elevated" : "hover:bg-bg-elevated"]],
							dir: "auto",
							onClick: ($event) => select(),
							onMouseenter: ($event) => highlightedIndex.value = getIndex(node.id)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="truncate"${_scopeId}>${ssrInterpolate(node.text)}</span>`);
								else return [createVNode("span", { class: "truncate" }, toDisplayString(node.text), 1)];
							}),
							_: 2
						}, _parent));
						_push(`<!--[-->`);
						ssrRenderList(node.children, (child) => {
							_push(`<!--[-->`);
							_push(ssrRenderComponent(_component_NuxtLink, {
								id: `${listboxId}-${child.id}`,
								to: `#${child.id}`,
								role: "option",
								"aria-selected": __props.activeId === child.id,
								class: ["flex items-center gap-2 px-3 py-1.5 ps-6 text-sm cursor-pointer transition-colors duration-150", [__props.activeId === child.id ? "text-fg font-medium" : "text-fg-subtle", unref(highlightedIndex) === getIndex(child.id) ? "bg-bg-elevated" : "hover:bg-bg-elevated"]],
								dir: "auto",
								onClick: ($event) => select(),
								onMouseenter: ($event) => highlightedIndex.value = getIndex(child.id)
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="truncate"${_scopeId}>${ssrInterpolate(child.text)}</span>`);
									else return [createVNode("span", { class: "truncate" }, toDisplayString(child.text), 1)];
								}),
								_: 2
							}, _parent));
							_push(`<!--[-->`);
							ssrRenderList(child.children, (grandchild) => {
								_push(ssrRenderComponent(_component_NuxtLink, {
									id: `${listboxId}-${grandchild.id}`,
									to: `#${grandchild.id}`,
									key: grandchild.id,
									role: "option",
									"aria-selected": __props.activeId === grandchild.id,
									class: ["flex items-center gap-2 px-3 py-1.5 ps-9 text-sm cursor-pointer transition-colors duration-150", [__props.activeId === grandchild.id ? "text-fg font-medium" : "text-fg-subtle", unref(highlightedIndex) === getIndex(grandchild.id) ? "bg-bg-elevated" : "hover:bg-bg-elevated"]],
									dir: "auto",
									onClick: ($event) => select(),
									onMouseenter: ($event) => highlightedIndex.value = getIndex(grandchild.id)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<span class="truncate"${_scopeId}>${ssrInterpolate(grandchild.text)}</span>`);
										else return [createVNode("span", { class: "truncate" }, toDisplayString(grandchild.text), 1)];
									}),
									_: 2
								}, _parent));
							});
							_push(`<!--]--><!--]-->`);
						});
						_push(`<!--]--><!--]-->`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$16 = ReadmeTocDropdown_vue_vue_type_script_setup_true_lang_default.setup;
ReadmeTocDropdown_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReadmeTocDropdown.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var ReadmeTocDropdown_default = Object.assign(ReadmeTocDropdown_vue_vue_type_script_setup_true_lang_default, { __name: "ReadmeTocDropdown" });
var PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PackageProvenanceSection",
	__ssrInlineRender: true,
	props: { details: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_LinkBase = Base_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "provenance",
				"aria-labelledby": "provenance-heading",
				class: "scroll-mt-20"
			}, _attrs))}><h2 id="provenance-heading" class="group text-xs text-fg-subtle uppercase tracking-wider mb-3">`);
			_push(ssrRenderComponent(_component_LinkBase, { to: "#provenance" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("package.provenance_section.title"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("package.provenance_section.title")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</h2><div class="space-y-3 border border-border rounded-lg p-4 sm:p-5"><div class="space-y-1"><p class="flex items-start gap-2 text-sm text-fg m-0"><span class="i-lucide:shield-check w-4 h-4 shrink-0 text-emerald-500 mt-0.5" aria-hidden="true"></span>`);
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
var _sfc_setup$15 = PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default.setup;
PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PackageProvenanceSection.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var PackageProvenanceSection_default = Object.assign(PackageProvenanceSection_vue_vue_type_script_setup_true_lang_default, { __name: "PackageProvenanceSection" });
var Sidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Sidebar",
	__ssrInlineRender: true,
	setup(__props) {
		const viewport = useWindowSize();
		const scroll = useWindowScroll();
		const container = useTemplateRef("container");
		const content = useTemplateRef("content");
		const bounds = useElementBounding(content);
		const active = computed(() => {
			return bounds.height.value > viewport.height.value;
		});
		const direction = computed((previous = "up") => {
			if (!active.value) return "up";
			return scroll.directions.bottom ? "down" : scroll.directions.top ? "up" : previous;
		});
		const offset = computed(() => {
			if (!active.value) return 0;
			if (!container.value) return 0;
			if (!content.value) return 0;
			return direction.value === "down" ? content.value.offsetTop : container.value.offsetHeight - content.value.offsetTop - content.value.offsetHeight;
		});
		const style = computed(() => {
			return direction.value === "down" ? { paddingBlockStart: `${offset.value}px` } : { paddingBlockEnd: `${offset.value}px` };
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "container",
				ref: container,
				class: "group relative data-[active=true]:flex",
				"data-direction": unref(direction),
				"data-active": unref(active),
				style: unref(style)
			}, _attrs))}><div class="sticky w-full group-data-[direction=up]:self-start group-data-[direction=up]:top-30 group-data-[direction=up]:xl:top-14 group-data-[direction=down]:self-end group-data-[direction=down]:bottom-8">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div>`);
		};
	}
});
var _sfc_setup$14 = Sidebar_vue_vue_type_script_setup_true_lang_default.setup;
Sidebar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Sidebar.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Sidebar_default = Object.assign(Sidebar_vue_vue_type_script_setup_true_lang_default, { __name: "PackageSidebar" });
var AccessControls_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AccessControls",
	__ssrInlineRender: true,
	props: { packageName: {} },
	setup(__props) {
		const props = __props;
		const { isConnected, lastExecutionTime, listOrgTeams, listPackageCollaborators, addOperation, error: connectorError } = useConnector();
		const orgName = computed(() => {
			if (!props.packageName.startsWith("@")) return null;
			const match = props.packageName.match(/^@([^/]+)\//);
			return match ? match[1] : null;
		});
		const collaborators = shallowRef({});
		const teams = shallowRef([]);
		const isLoadingCollaborators = shallowRef(false);
		const isLoadingTeams = shallowRef(false);
		const error = shallowRef(null);
		const showGrantAccess = shallowRef(false);
		const selectedTeam = shallowRef("");
		const permission = shallowRef("read-only");
		const isGranting = shallowRef(false);
		const collaboratorList = computed(() => {
			return Object.entries(collaborators.value).map(([name, perm]) => {
				const isTeam = name.includes(":");
				return {
					name,
					permission: perm,
					isTeam,
					displayName: isTeam ? name.split(":")[1] : name
				};
			}).sort((a, b) => {
				if (a.isTeam !== b.isTeam) return a.isTeam ? -1 : 1;
				return a.name.localeCompare(b.name);
			});
		});
		async function loadCollaborators() {
			if (!isConnected.value) return;
			isLoadingCollaborators.value = true;
			error.value = null;
			try {
				const result = await listPackageCollaborators(props.packageName);
				if (result) collaborators.value = result;
				else error.value = connectorError.value || "Failed to load collaborators";
			} finally {
				isLoadingCollaborators.value = false;
			}
		}
		async function loadTeams() {
			if (!isConnected.value || !orgName.value) return;
			isLoadingTeams.value = true;
			try {
				const result = await listOrgTeams(orgName.value);
				if (result) teams.value = result.map((t) => t.replace(`${orgName.value}:`, ""));
			} finally {
				isLoadingTeams.value = false;
			}
		}
		watch(() => [
			isConnected.value,
			props.packageName,
			lastExecutionTime.value
		], ([connected]) => {
			if (connected && orgName.value) {
				loadCollaborators();
				loadTeams();
			}
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectField = Field_default;
			if (unref(isConnected) && unref(orgName)) {
				_push(`<section${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between mb-3"><h2 id="access-heading" class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(_ctx.$t("package.access.title"))}</h2><button type="button" class="p-1 text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.access.refresh"))}${ssrIncludeBooleanAttr(unref(isLoadingCollaborators)) ? " disabled" : ""}><span class="${ssrRenderClass([{ "motion-safe:animate-spin": unref(isLoadingCollaborators) }, "i-lucide:refresh-ccw w-3.5 h-3.5"])}" aria-hidden="true"></span></button></div>`);
				if (unref(isLoadingCollaborators) && unref(collaboratorList).length === 0) _push(`<div class="py-4 text-center"><span class="i-svg-spinners:ring-resize w-4 h-4 text-fg-muted animate-spin mx-auto" aria-hidden="true"></span></div>`);
				else if (unref(error)) _push(`<div class="text-xs text-red-400 mb-2" role="alert">${ssrInterpolate(unref(error))}</div>`);
				else _push(`<!---->`);
				if (unref(collaboratorList).length > 0) {
					_push(`<ul class="space-y-1 mb-3"${ssrRenderAttr("aria-label", _ctx.$t("package.access.list_label"))}><!--[-->`);
					ssrRenderList(unref(collaboratorList), (collab) => {
						_push(`<li class="flex items-center justify-between py-1"><div class="flex items-center gap-2 min-w-0">`);
						if (collab.isTeam) _push(`<span class="i-lucide:users w-3.5 h-3.5 text-fg-subtle shrink-0" aria-hidden="true"></span>`);
						else _push(`<span class="i-lucide:user w-3.5 h-3.5 text-fg-subtle shrink-0" aria-hidden="true"></span>`);
						_push(`<span class="font-mono text-sm text-fg-muted truncate">${ssrInterpolate(collab.isTeam ? collab.displayName : `@${collab.name}`)}</span><span class="${ssrRenderClass([collab.permission === "read-write" ? "bg-green-500/20 text-green-400" : "bg-fg-subtle/20 text-fg-muted", "px-1 py-0.5 font-mono text-xs rounded shrink-0"])}">${ssrInterpolate(collab.permission === "read-write" ? _ctx.$t("package.access.rw") : _ctx.$t("package.access.ro"))}</span></div>`);
						if (collab.isTeam) _push(`<button type="button" class="p-1 text-fg-subtle hover:text-red-400 transition-colors duration-200 shrink-0 rounded focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.access.revoke_access", { name: collab.displayName }))}><span class="i-lucide:x w-3.5 h-3.5" aria-hidden="true"></span></button>`);
						else _push(`<span class="text-xs text-fg-subtle">${ssrInterpolate(_ctx.$t("package.access.owner"))}</span>`);
						_push(`</li>`);
					});
					_push(`<!--]--></ul>`);
				} else if (!unref(isLoadingCollaborators) && !unref(error)) _push(`<p class="text-xs text-fg-subtle mb-3">${ssrInterpolate(_ctx.$t("package.access.no_access"))}</p>`);
				else _push(`<!---->`);
				if (unref(showGrantAccess)) {
					_push(`<div><form class="space-y-2"><div class="flex items-center gap-2">`);
					_push(ssrRenderComponent(_component_SelectField, {
						label: _ctx.$t("package.access.select_team_label"),
						"hidden-label": "",
						id: "grant-team-select",
						modelValue: unref(selectedTeam),
						"onUpdate:modelValue": ($event) => isRef(selectedTeam) ? selectedTeam.value = $event : null,
						name: "grant-team",
						block: "",
						size: "sm",
						disabled: unref(isLoadingTeams),
						items: [{
							label: unref(isLoadingTeams) ? _ctx.$t("package.access.loading_teams") : _ctx.$t("package.access.select_team"),
							value: "",
							disabled: true
						}, ...unref(teams).map((team) => ({
							label: `${unref(orgName)}:${team}`,
							value: team
						}))]
					}, null, _parent));
					_push(ssrRenderComponent(_component_SelectField, {
						label: _ctx.$t("package.access.permission_label"),
						"hidden-label": "",
						id: "grant-permission-select",
						modelValue: unref(permission),
						"onUpdate:modelValue": ($event) => isRef(permission) ? permission.value = $event : null,
						name: "grant-permission",
						block: "",
						size: "sm",
						items: [{
							label: _ctx.$t("package.access.permission.read_only"),
							value: "read-only"
						}, {
							label: _ctx.$t("package.access.permission.read_write"),
							value: "read-write"
						}]
					}, null, _parent));
					_push(`<button type="submit"${ssrIncludeBooleanAttr(!unref(selectedTeam) || unref(isGranting)) ? " disabled" : ""} class="px-3 py-2 font-mono text-xs text-bg bg-fg rounded transition-all duration-200 hover:bg-fg/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-accent/70">${ssrInterpolate(unref(isGranting) ? "…" : _ctx.$t("package.access.grant_button"))}</button><button type="button" class="p-1.5 text-fg-subtle hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${ssrRenderAttr("aria-label", _ctx.$t("package.access.cancel_grant"))}><span class="i-lucide:x w-4 h-4" aria-hidden="true"></span></button></div></form></div>`);
				} else _push(`<button type="button" class="w-full px-3 py-1.5 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded transition-colors duration-200 hover:text-fg hover:border-border-hover focus-visible:outline-accent/70">${ssrInterpolate(_ctx.$t("package.access.grant_access"))}</button>`);
				_push(`</section>`);
			} else _push(`<!---->`);
		};
	}
});
var _sfc_setup$13 = AccessControls_vue_vue_type_script_setup_true_lang_default.setup;
AccessControls_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/AccessControls.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var AccessControls_default = Object.assign(AccessControls_vue_vue_type_script_setup_true_lang_default, { __name: "PackageAccessControls" });
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
		const isOpen = shallowRef(true);
		onPrehydrate("(()=>{let e=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`)?.sidebar?.collapsed||[];for(let t of e)document.documentElement.dataset.collapsed?.split(` `).includes(t)||(document.documentElement.dataset.collapsed=(document.documentElement.dataset.collapsed+` `+t).trim())})");
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
				id: __props.id,
				"data-anchor-id": __props.id,
				class: "scroll-mt-20 xl:scroll-mt-0"
			}, _attrs))}><div class="flex items-center justify-between mb-3 px-1">`);
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.headingLevel), { class: "group text-xs text-fg-subtle uppercase tracking-wider flex items-center gap-2" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<button${ssrRenderAttr("id", buttonId)} type="button" class="size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg-muted transition-colors duration-200 shrink-0 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("aria-expanded", isOpen.value)}${ssrRenderAttr("aria-controls", contentId)}${ssrRenderAttr("aria-label", ariaLabel.value)}${_scopeId}>`);
						if (__props.isLoading) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3" aria-hidden="true"${_scopeId}></span>`);
						else _push(`<span class="${ssrRenderClass([isOpen.value ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span>`);
						_push(`</button>`);
						_push(ssrRenderComponent(unref(Base_default), { to: `#${__props.id}` }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(__props.title)}`);
								else return [createTextVNode(toDisplayString(__props.title), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode("button", {
						id: buttonId,
						type: "button",
						class: "size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg-muted transition-colors duration-200 shrink-0 focus-visible:outline-accent/70 rounded",
						"aria-expanded": isOpen.value,
						"aria-controls": contentId,
						"aria-label": ariaLabel.value,
						onClick: toggle
					}, [__props.isLoading ? (openBlock(), createBlock("span", {
						key: 0,
						class: "i-svg-spinners:ring-resize w-3 h-3",
						"aria-hidden": "true"
					})) : (openBlock(), createBlock("span", {
						key: 1,
						class: ["w-3 h-3 transition-transform duration-200", isOpen.value ? "i-lucide:chevron-down" : "i-lucide:chevron-right"],
						"aria-hidden": "true"
					}, null, 2))], 8, ["aria-expanded", "aria-label"]), createVNode(unref(Base_default), { to: `#${__props.id}` }, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
						_: 1
					}, 8, ["to"])];
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
var _sfc_setup$12 = CollapsibleSection_vue_vue_type_script_setup_true_lang_default.setup;
CollapsibleSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollapsibleSection.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var CollapsibleSection_default = Object.assign(CollapsibleSection_vue_vue_type_script_setup_true_lang_default, { __name: "CollapsibleSection" });
var SkillsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkillsCard",
	__ssrInlineRender: true,
	props: {
		skills: {},
		packageName: {},
		version: {}
	},
	setup(__props) {
		const skillsModal = useModal("skills-modal");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			if (__props.skills.length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.skills.title"),
				id: "skills"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"${_scopeId}><span class="i-custom:agent-skills w-4 h-4 shrink-0 text-fg-muted" aria-hidden="true"${_scopeId}></span><span class="text-fg-muted"${_scopeId}>${ssrInterpolate(_ctx.$t("package.skills.skills_available", { count: __props.skills.length }, __props.skills.length))}</span></button>`);
					else return [createVNode("button", {
						type: "button",
						class: "w-full flex items-center gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200",
						onClick: ($event) => unref(skillsModal).open()
					}, [createVNode("span", {
						class: "i-custom:agent-skills w-4 h-4 shrink-0 text-fg-muted",
						"aria-hidden": "true"
					}), createVNode("span", { class: "text-fg-muted" }, toDisplayString(_ctx.$t("package.skills.skills_available", { count: __props.skills.length }, __props.skills.length)), 1)], 8, ["onClick"])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$11 = SkillsCard_vue_vue_type_script_setup_true_lang_default.setup;
SkillsCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/SkillsCard.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var SkillsCard_default = Object.assign(SkillsCard_vue_vue_type_script_setup_true_lang_default, { __name: "PackageSkillsCard" });
var ChartModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChartModal",
	__ssrInlineRender: true,
	props: { modalTitle: {} },
	emits: ["transitioned"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(server_placeholder_default, mergeProps({
				modalTitle: __props.modalTitle ?? _ctx.$t("package.trends.title"),
				id: "chart-modal",
				class: "h-full sm:h-min sm:border sm:border-border sm:rounded-lg shadow-xl sm:max-h-[90vh] sm:max-w-3xl",
				onTransitioned: ($event) => emit("transitioned")
			}, _attrs), {}, _parent));
		};
	}
});
var _sfc_setup$10 = ChartModal_vue_vue_type_script_setup_true_lang_default.setup;
ChartModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ChartModal.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var ChartModal_default = Object.assign(ChartModal_vue_vue_type_script_setup_true_lang_default, { __name: "PackageChartModal" });
var WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WeeklyDownloadStats",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		createdIso: {},
		repoRef: {}
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const router = useRouter();
		const route = useRoute();
		const { settings } = useSettings();
		const chartModal = useModal("chart-modal");
		const hasChartModalTransitioned = shallowRef(false);
		const modalTitle = computed(() => {
			const facet = route.query.facet;
			if (facet === "likes") return $t("package.trends.items.likes");
			if (facet === "contributors") return $t("package.trends.items.contributors");
			return $t("package.trends.items.downloads");
		});
		const isChartModalOpen = shallowRef(false);
		function handleModalClose() {
			isChartModalOpen.value = false;
			hasChartModalTransitioned.value = false;
			router.replace({ query: {
				...route.query,
				modal: void 0,
				granularity: void 0,
				end: void 0,
				start: void 0,
				facet: void 0
			} });
		}
		function handleModalTransitioned() {
			hasChartModalTransitioned.value = true;
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
		function toggleSparklineAnimation() {
			settings.value.sidebar.animateSparkline = !settings.value.sidebar.animateSparkline;
		}
		const hasSparklineAnimation = computed(() => settings.value.sidebar.animateSparkline);
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
		const isLoadingWeeklyDownloads = shallowRef(true);
		const hasWeeklyDownloads = computed(() => weeklyDownloads.value.length > 0);
		async function openChartModal() {
			if (!hasWeeklyDownloads.value) return;
			isChartModalOpen.value = true;
			hasChartModalTransitioned.value = false;
			await router.replace({ query: {
				...route.query,
				modal: "chart"
			} });
			await nextTick();
			await nextTick();
			chartModal.open();
		}
		async function loadWeeklyDownloads() {}
		watch(() => props.packageName, () => loadWeeklyDownloads());
		const correctedDownloads = computed(() => {
			let data = weeklyDownloads.value;
			if (!data.length) return data;
			if (settings.value.chartFilter.anomaliesFixed) data = applyBlocklistCorrection({
				data,
				packageName: props.packageName,
				granularity: "weekly"
			});
			data = applyDataCorrection(data, settings.value.chartFilter);
			return data;
		});
		const dataset = computed(() => correctedDownloads.value.map((d) => ({
			value: d?.value ?? 0,
			period: $t("package.trends.date_range", {
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
							show: hasSparklineAnimation.value,
							loop: true,
							radius: 1.5,
							color: pulseColor.value,
							easing: "ease-in-out",
							trail: {
								show: true,
								length: 30,
								opacity: .75
							}
						}
					},
					plot: {
						radius: 6,
						stroke: isDarkMode.value ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)"
					},
					title: {
						text: String(lastDatapoint.value),
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
			const _component_ButtonBase = Base_default$1;
			const _component_ClientOnly = client_only_default;
			const _component_SkeletonInline = SkeletonInline_default;
			const _component_PackageChartModal = ChartModal_default;
			const _component_PackageTrendsChart = TrendsChart_default;
			_push(`<!--[--><div class="space-y-8" data-v-63214107>`);
			_push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "downloads",
				title: unref($t)("package.downloads.title")
			}, {
				actions: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) if (unref(hasWeeklyDownloads)) _push(ssrRenderComponent(_component_ButtonBase, {
						type: "button",
						onClick: openChartModal,
						class: "text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded",
						title: unref($t)("package.trends.title"),
						classicon: "i-lucide:chart-line"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="sr-only" data-v-63214107${_scopeId}>${ssrInterpolate(unref($t)("package.trends.title"))}</span>`);
							else return [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.trends.title")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else if (unref(isLoadingWeeklyDownloads)) _push(`<span class="min-w-6 min-h-6 -m-1 p-1" data-v-63214107${_scopeId}></span>`);
					else _push(`<!---->`);
					else return [unref(hasWeeklyDownloads) ? (openBlock(), createBlock(_component_ButtonBase, {
						key: 0,
						type: "button",
						onClick: openChartModal,
						class: "text-fg-subtle hover:text-fg transition-colors duration-200 inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 focus-visible:outline-accent/70 rounded",
						title: unref($t)("package.trends.title"),
						classicon: "i-lucide:chart-line"
					}, {
						default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.trends.title")), 1)]),
						_: 1
					}, 8, ["title"])) : unref(isLoadingWeeklyDownloads) ? (openBlock(), createBlock("span", {
						key: 1,
						class: "min-w-6 min-h-6 -m-1 p-1"
					})) : createCommentVNode("", true)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="w-full overflow-hidden h-[76px] motion-safe:h-[calc(92px+0.75rem)]" data-v-63214107${_scopeId}>`);
						if (unref(isLoadingWeeklyDownloads) || unref(hasWeeklyDownloads)) {
							_push(`<!--[-->`);
							_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="max-w-xs" data-v-63214107${_scopeId}><div class="h-6 flex items-center ps-3" data-v-63214107${_scopeId}>`);
									_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-3 w-36" }, null, _parent, _scopeId));
									_push(`</div><div class="aspect-[500/80] flex items-center" data-v-63214107${_scopeId}><div class="w-[42%] flex items-center ps-0.5" data-v-63214107${_scopeId}>`);
									_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-7 w-24" }, null, _parent, _scopeId));
									_push(`</div><div class="flex-1 flex items-end pe-3" data-v-63214107${_scopeId}>`);
									_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-px w-full" }, null, _parent, _scopeId));
									_push(`</div></div><div class="w-full hidden motion-safe:flex flex-1 items-end justify-end" data-v-63214107${_scopeId}>`);
									_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-[20px] w-30" }, null, _parent, _scopeId));
									_push(`</div></div>`);
								} else return [createVNode("div", { class: "max-w-xs" }, [
									createVNode("div", { class: "h-6 flex items-center ps-3" }, [createVNode(_component_SkeletonInline, { class: "h-3 w-36" })]),
									createVNode("div", { class: "aspect-[500/80] flex items-center" }, [createVNode("div", { class: "w-[42%] flex items-center ps-0.5" }, [createVNode(_component_SkeletonInline, { class: "h-7 w-24" })]), createVNode("div", { class: "flex-1 flex items-end pe-3" }, [createVNode(_component_SkeletonInline, { class: "h-px w-full" })])]),
									createVNode("div", { class: "w-full hidden motion-safe:flex flex-1 items-end justify-end" }, [createVNode(_component_SkeletonInline, { class: "h-[20px] w-30" })])
								])];
							}) }, _parent, _scopeId));
							if (unref(hasWeeklyDownloads)) {
								_push(`<div class="hidden motion-safe:flex justify-end p-1" data-v-63214107${_scopeId}>`);
								_push(ssrRenderComponent(_component_ButtonBase, {
									size: "small",
									onClick: toggleSparklineAnimation
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(unref(hasSparklineAnimation) ? unref($t)("package.trends.pause_animation") : unref($t)("package.trends.play_animation"))}`);
										else return [createTextVNode(toDisplayString(unref(hasSparklineAnimation) ? unref($t)("package.trends.pause_animation") : unref($t)("package.trends.play_animation")), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`<!--]-->`);
						} else _push(`<p class="py-2 text-sm font-mono text-fg-subtle" data-v-63214107${_scopeId}>${ssrInterpolate(unref($t)("package.trends.no_data"))}</p>`);
						_push(`</div>`);
					} else return [createVNode("div", { class: "w-full overflow-hidden h-[76px] motion-safe:h-[calc(92px+0.75rem)]" }, [unref(isLoadingWeeklyDownloads) || unref(hasWeeklyDownloads) ? (openBlock(), createBlock(Fragment, { key: 0 }, [createVNode(_component_ClientOnly, null, {
						fallback: withCtx(() => [createVNode("div", { class: "max-w-xs" }, [
							createVNode("div", { class: "h-6 flex items-center ps-3" }, [createVNode(_component_SkeletonInline, { class: "h-3 w-36" })]),
							createVNode("div", { class: "aspect-[500/80] flex items-center" }, [createVNode("div", { class: "w-[42%] flex items-center ps-0.5" }, [createVNode(_component_SkeletonInline, { class: "h-7 w-24" })]), createVNode("div", { class: "flex-1 flex items-end pe-3" }, [createVNode(_component_SkeletonInline, { class: "h-px w-full" })])]),
							createVNode("div", { class: "w-full hidden motion-safe:flex flex-1 items-end justify-end" }, [createVNode(_component_SkeletonInline, { class: "h-[20px] w-30" })])
						])]),
						default: withCtx(() => [createVNode(unref(VueUiSparkline), {
							class: "w-full max-w-xs",
							dataset: unref(dataset),
							config: unref(config)
						}, {
							skeleton: withCtx(() => [createVNode("div")]),
							_: 1
						}, 8, ["dataset", "config"])]),
						_: 1
					}), unref(hasWeeklyDownloads) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "hidden motion-safe:flex justify-end p-1"
					}, [createVNode(_component_ButtonBase, {
						size: "small",
						onClick: toggleSparklineAnimation
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(hasSparklineAnimation) ? unref($t)("package.trends.pause_animation") : unref($t)("package.trends.play_animation")), 1)]),
						_: 1
					})])) : createCommentVNode("", true)], 64)) : (openBlock(), createBlock("p", {
						key: 1,
						class: "py-2 text-sm font-mono text-fg-subtle"
					}, toDisplayString(unref($t)("package.trends.no_data")), 1))])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			if (unref(isChartModalOpen) && unref(hasWeeklyDownloads)) _push(ssrRenderComponent(_component_PackageChartModal, {
				"modal-title": unref(modalTitle),
				onClose: handleModalClose,
				onTransitioned: handleModalTransitioned
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(``);
						if (unref(hasChartModalTransitioned)) _push(ssrRenderComponent(_component_PackageTrendsChart, {
							weeklyDownloads: unref(weeklyDownloads),
							inModal: true,
							packageName: props.packageName,
							repoRef: props.repoRef,
							createdIso: __props.createdIso,
							permalink: "",
							"show-facet-selector": ""
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						if (!unref(hasChartModalTransitioned)) _push(`<div class="w-full aspect-[390/634.5] sm:aspect-[718/647]" data-v-63214107${_scopeId}></div>`);
						else _push(`<!---->`);
					} else return [createVNode(Transition, {
						name: "opacity",
						mode: "out-in"
					}, {
						default: withCtx(() => [unref(hasChartModalTransitioned) ? (openBlock(), createBlock(_component_PackageTrendsChart, {
							key: 0,
							weeklyDownloads: unref(weeklyDownloads),
							inModal: true,
							packageName: props.packageName,
							repoRef: props.repoRef,
							createdIso: __props.createdIso,
							permalink: "",
							"show-facet-selector": ""
						}, null, 8, [
							"weeklyDownloads",
							"packageName",
							"repoRef",
							"createdIso"
						])) : createCommentVNode("", true)]),
						_: 1
					}), !unref(hasChartModalTransitioned) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "w-full aspect-[390/634.5] sm:aspect-[718/647]"
					})) : createCommentVNode("", true)];
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
var WeeklyDownloadStats_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(WeeklyDownloadStats_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-63214107"]]), { __name: "PackageWeeklyDownloadStats" });
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
			"jsfiddle": "i-lucide:code",
			"typescript-playground": "i-simple-icons:typescript",
			"solid-playground": "i-simple-icons:solid",
			"svelte-playground": "i-simple-icons:svelte",
			"tailwind-playground": "i-simple-icons:tailwindcss",
			"storybook": "i-simple-icons:storybook"
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
			"jsfiddle": "text-provider-jsfiddle",
			"typescript-playground": "text-provider-typescript",
			"solid-playground": "text-provider-solid",
			"svelte-playground": "text-provider-svelte",
			"tailwind-playground": "text-provider-tailwind",
			"storybook": "text-provider-storybook"
		};
		function getIcon(provider) {
			return providerIcons[provider] || "i-lucide:play";
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
				_push(`<section${ssrRenderAttrs(mergeProps({ class: "px-1" }, _attrs))}><h2 id="playgrounds-heading" class="text-xs font-mono text-fg uppercase tracking-wider mb-3">${ssrInterpolate(_ctx.$t("package.playgrounds.title"))}</h2><div class="relative">`);
				if (unref(hasSingleLink) && unref(firstLink)) _push(ssrRenderComponent(_component_TooltipApp, {
					text: unref(firstLink).providerName,
					class: "w-full"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<a${ssrRenderAttr("href", unref(firstLink).url)} target="_blank" rel="noopener noreferrer" class="w-full flex items-center gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"${_scopeId}><span class="${ssrRenderClass([
							getIcon(unref(firstLink).provider),
							getColor(unref(firstLink).provider),
							"w-4 h-4 shrink-0"
						])}" aria-hidden="true"${_scopeId}></span><span class="truncate text-fg-muted"${_scopeId}>${ssrInterpolate(unref(firstLink).label)}</span></a>`);
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
						}, null, 2), createVNode("span", { class: "truncate text-fg-muted" }, toDisplayString(unref(firstLink).label), 1)], 8, ["href"])];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(hasMultipleLinks)) _push(`<button type="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", unref(isOpen))} class="w-full flex items-center justify-between gap-2 px-3 py-2 text-sm font-mono bg-bg-muted border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated focus-visible:outline-accent/70 transition-colors duration-200"><span class="flex items-center gap-2"><span class="i-lucide:play w-4 h-4 shrink-0 text-fg-muted" aria-hidden="true"></span><span class="text-fg-muted">${ssrInterpolate(_ctx.$t("package.playgrounds.choose"))} (${ssrInterpolate(__props.links.length)})</span></span><span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-lucide:chevron-down w-3 h-3 text-fg-subtle transition-transform duration-200 motion-reduce:transition-none"])}" aria-hidden="true"></span></button>`);
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
								])}" aria-hidden="true"${_scopeId}></span><span class="truncate"${_scopeId}>${ssrInterpolate(link.label)}</span></a>`);
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
								}, null, 2), createVNode("span", { class: "truncate" }, toDisplayString(link.label), 1)], 8, ["href"])];
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
			npm: "i-simple-icons:npm",
			pnpm: "i-simple-icons:pnpm",
			yarn: "i-simple-icons:yarn"
		};
		function getName(engine) {
			return engineNames[engine] || engine;
		}
		function getIcon(engine) {
			return engineIcons[engine] || "i-lucide:code";
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
							_push(`<div class="flex justify-between gap-4 py-1"${_scopeId}><dt class="flex items-center gap-2 text-fg-muted text-sm shrink-0"${_scopeId}><span class="${ssrRenderClass([getIcon(engine), "inline-block w-4 h-4 shrink-0 text-fg-muted"])}" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(getName(engine))}</dt><dd class="font-mono text-sm text-fg text-end"${ssrRenderAttr("title", version)} dir="ltr"${_scopeId}>${ssrInterpolate(version)}</dd></div>`);
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
							title: version,
							dir: "ltr"
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
/**
* Composable for managing version download distribution data and state.
*
* Fetches version download statistics from the API, manages grouping/filtering state,
* and formats data for chart visualization.
*
* @param packageName - The package name to fetch version downloads for
* @returns Reactive state and computed chart data
*/
function useVersionDistribution(packageName) {
	const groupingMode = ref("major");
	const showRecentOnly = ref(false);
	const showLowUsageVersions = ref(false);
	const pending = ref(false);
	const error = ref(null);
	const data = ref(null);
	/**
	* Fetches version download distribution from the API
	*/
	async function fetchDistribution() {
		const pkgName = toValue(packageName);
		if (!pkgName) {
			data.value = null;
			return;
		}
		pending.value = true;
		error.value = null;
		try {
			const mode = groupingMode.value;
			data.value = await $fetch(`/api/registry/downloads/${encodeURIComponent(pkgName)}/versions`, {
				query: {
					mode,
					filterOldVersions: showRecentOnly.value ? "true" : "false",
					filterThreshold: showLowUsageVersions.value ? "0" : "1"
				},
				cache: "default"
			});
		} catch (err) {
			error.value = err instanceof Error ? err : /* @__PURE__ */ new Error("Failed to fetch version distribution");
			data.value = null;
		} finally {
			pending.value = false;
		}
	}
	/**
	* Applies filtering to version groups based on current filter settings
	* Sorts groups from oldest to newest version
	*/
	const filteredGroups = computed(() => {
		if (!data.value) return [];
		let groups = data.value.groups;
		if (showRecentOnly.value && data.value.recentVersions) {
			const recentVersionsSet = new Set(data.value.recentVersions);
			groups = groups.filter((group) => {
				return group.versions.some((v) => {
					if (recentVersionsSet.has(v.version)) return true;
					if (v.version.includes("-")) {
						const baseVersion = v.version.split("-")[0];
						if (baseVersion && recentVersionsSet.has(baseVersion)) return true;
					}
					return false;
				});
			});
		}
		return groups.slice().sort((a, b) => {
			const aParts = a.groupKey.replace(/\.x$/, "").split(".").map(Number);
			const bParts = b.groupKey.replace(/\.x$/, "").split(".").map(Number);
			for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
				const aPart = aParts[i] ?? 0;
				const bPart = bParts[i] ?? 0;
				if (aPart !== bPart) return aPart - bPart;
			}
			return 0;
		});
	});
	const chartDataset = computed(() => {
		const groups = filteredGroups.value;
		if (!groups.length) return [];
		return groups.map((group) => ({
			name: group.label,
			downloads: group.downloads
		}));
	});
	const totalDownloads = computed(() => {
		const groups = filteredGroups.value;
		if (!groups || !groups.length) return 0;
		return groups.reduce((sum, group) => sum + group.downloads, 0);
	});
	const hasData = computed(() => {
		return data.value !== null && filteredGroups.value.length > 0;
	});
	watch(showRecentOnly, () => {
		fetchDistribution();
	});
	watch(showLowUsageVersions, () => {
		fetchDistribution();
	});
	watch(groupingMode, () => {
		fetchDistribution();
	}, { immediate: true });
	watch(() => toValue(packageName), () => {
		fetchDistribution();
	}, { immediate: false });
	return {
		groupingMode,
		showRecentOnly,
		showLowUsageVersions,
		pending,
		error,
		filteredGroups,
		chartDataset,
		totalDownloads,
		hasData,
		fetchDistribution
	};
}
var mobileBreakpointWidth = 640;
var VersionDistribution_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VersionDistribution",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		inModal: { type: Boolean }
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const { accentColors, selectedAccentColor } = useAccentColor();
		const { copy} = useClipboard();
		const colorMode = useColorMode();
		const resolvedMode = shallowRef("light");
		const rootEl = shallowRef(null);
		const { colors } = useCssVariables([
			"--bg",
			"--fg",
			"--bg-subtle",
			"--bg-elevated",
			"--fg-subtle",
			"--border",
			"--border-subtle"
		], {
			element: rootEl,
			watchHtmlAttributes: true,
			watchResize: false
		});
		watch(() => colorMode.value, (value) => {
			resolvedMode.value = value === "dark" ? "dark" : "light";
		}, { flush: "sync" });
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
		computed(() => ({
			fg: colors.value.fg ?? "oklch(0.633 0 0)",
			bg: colors.value.bg ?? "oklch(0.633 0 0)",
			fgSubtle: colors.value.fgSubtle ?? "oklch(0.633 0 0)"
		}));
		const { width } = useElementSize(rootEl);
		const isMobile = computed(() => width.value > 0 && width.value < mobileBreakpointWidth);
		const { groupingMode, showRecentOnly, showLowUsageVersions, pending, error, chartDataset, hasData } = useVersionDistribution(() => props.packageName);
		const compactNumberFormatter = useCompactNumberFormatter();
		const showLoadingIndicator = computed(() => pending.value);
		const loadFile = (link, filename) => {
			const a = (void 0).createElement("a");
			a.href = link;
			a.download = filename;
			a.click();
			a.remove();
		};
		const sanitise = (value) => value.replace(/^@/, "").replace(/[\\/:"*?<>|]/g, "-").replace(/\//g, "-");
		const { locale } = useI18n();
		function formatDate(date) {
			return date.toLocaleString(locale.value, {
				month: "short",
				day: "numeric",
				timeZone: "UTC"
			});
		}
		const endDate = computed(() => {
			const t = /* @__PURE__ */ new Date();
			return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() - 1));
		});
		const startDate = computed(() => {
			const start = new Date(endDate.value);
			start.setUTCDate(start.getUTCDate() - 6);
			return start;
		});
		const { t } = useI18n();
		const dateRangeLabel = computed(() => {
			const from = formatDate(startDate.value);
			const to = formatDate(endDate.value);
			const endYear = endDate.value.getUTCFullYear();
			const startYear = startDate.value.getUTCFullYear();
			if (startYear !== endYear) return t("package.versions.distribution_range_date_multiple_years", {
				from,
				to,
				startYear,
				endYear
			});
			return t("package.versions.distribution_range_date_same_year", {
				from,
				to,
				endYear
			});
		});
		function buildExportFilename(extension) {
			const range = dateRangeLabel.value.replaceAll(" ", "_").replaceAll(",", "");
			const label = props.packageName;
			return `${sanitise(label ?? "")}_${range}.${extension}`;
		}
		const xyDataset = computed(() => {
			if (!chartDataset.value.length) return [];
			return [{
				name: props.packageName,
				series: chartDataset.value.map((item) => item.downloads),
				type: "bar",
				color: accent.value
			}];
		});
		const xAxisLabels = computed(() => {
			return chartDataset.value.map((item) => item.name);
		});
		const hasMinimap = computed(() => {
			return (xyDataset.value[0]?.series ?? []).length > 6;
		});
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "",
				chart: {
					title: {
						text: dateRangeLabel.value,
						fontSize: isMobile.value ? 24 : 16,
						bold: false
					},
					height: isMobile.value ? 750 : hasMinimap.value ? 500 : 611,
					backgroundColor: colors.value.bg,
					padding: {
						top: 24,
						right: 24,
						bottom: 60
					},
					userOptions: {
						buttons: {
							pdf: false,
							labels: false,
							fullscreen: false,
							table: false,
							tooltip: false,
							altCopy: true
						},
						buttonTitles: {
							csv: $t("package.trends.download_file", { fileType: "CSV" }),
							img: $t("package.trends.download_file", { fileType: "PNG" }),
							svg: $t("package.trends.download_file", { fileType: "SVG" }),
							annotator: $t("package.trends.toggle_annotator"),
							altCopy: $t("package.trends.copy_alt.button_label")
						},
						callbacks: {
							img: (args) => {
								const imageUri = args?.imageUri;
								if (!imageUri) return;
								loadFile(imageUri, buildExportFilename("png"));
							},
							csv: (csvStr) => {
								if (!csvStr) return;
								const PLACEHOLDER_CHAR = "\0";
								const multilineDateTemplate = $t("package.trends.date_range_multiline", {
									start: PLACEHOLDER_CHAR,
									end: PLACEHOLDER_CHAR
								}).replaceAll(PLACEHOLDER_CHAR, "").trim();
								const blob = new Blob([csvStr.replace("data:text/csv;charset=utf-8,", "").replaceAll(`\n${multilineDateTemplate}`, ` ${multilineDateTemplate}`)]);
								const url = URL.createObjectURL(blob);
								loadFile(url, buildExportFilename("csv"));
								URL.revokeObjectURL(url);
							},
							svg: (args) => {
								const blob = args?.blob;
								if (!blob) return;
								const url = URL.createObjectURL(blob);
								loadFile(url, buildExportFilename("svg"));
								URL.revokeObjectURL(url);
							},
							altCopy: ({ dataset: dst, config: cfg }) => copyAltTextForVersionsBarChart({
								dataset: dst,
								config: {
									...cfg,
									datapointLabels: xAxisLabels.value,
									dateRangeLabel: dateRangeLabel.value,
									semverGroupingMode: groupingMode.value,
									copy,
									$t,
									numberFormatter: compactNumberFormatter.value.format
								}
							})
						}
					},
					grid: {
						stroke: colors.value.border,
						showHorizontalLines: true,
						labels: {
							fontSize: isMobile.value ? 24 : 16,
							color: pending.value ? colors.value.border : colors.value.fgSubtle,
							axis: {
								yLabel: $t("package.versions.y_axis_label"),
								yLabelOffsetX: 12,
								fontSize: isMobile.value ? 32 : 24
							},
							yAxis: {
								formatter: ({ value }) => {
									return compactNumberFormatter.value.format(Number.isFinite(value) ? value : 0);
								},
								useNiceScale: true
							},
							xAxisLabels: {
								show: xAxisLabels.value.length <= 25,
								values: xAxisLabels.value,
								fontSize: 16,
								color: colors.value.fgSubtle
							}
						}
					},
					highlighter: { useLine: false },
					legend: {
						show: false,
						position: "top"
					},
					bar: {
						periodGap: 16,
						innerGap: 8,
						borderRadius: 4
					},
					tooltip: {
						teleportTo: props.inModal ? "#chart-modal" : void 0,
						borderColor: "transparent",
						backdropFilter: false,
						backgroundColor: "transparent",
						customFormat: ({ datapoint, absoluteIndex, bars }) => {
							if (!datapoint || pending.value) return "";
							const index = Number(absoluteIndex);
							if (!Number.isInteger(index) || index < 0 || index >= chartDataset.value.length) return "";
							const chartItem = chartDataset.value[index];
							if (!chartItem) return "";
							const barSeries = Array.isArray(bars?.[0]?.series) ? bars[0].series : [];
							const barValue = index < barSeries.length ? barSeries[index] : void 0;
							const raw = Number(barValue ?? chartItem.downloads ?? 0);
							const v = compactNumberFormatter.value.format(Number.isFinite(raw) ? raw : 0);
							return `<div class="font-mono text-xs p-3 border border-border rounded-md bg-[var(--bg)]/10 backdrop-blur-md">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between gap-4">
                <span class="text-3xs tracking-wide text-[var(--fg)]/70">
                  ${chartItem.name}
                </span>
                <span class="text-base text-[var(--fg)] font-mono tabular-nums">
                  ${v}
                </span>
              </div>
            </div>
          </div>`;
						}
					},
					zoom: {
						maxWidth: isMobile.value ? 350 : 500,
						highlightColor: colors.value.bgElevated,
						useResetSlot: true,
						minimap: {
							show: true,
							lineColor: "#FAFAFA",
							selectedColor: accent.value,
							selectedColorOpacity: .06,
							frameColor: colors.value.border,
							handleWidth: isMobile.value ? 40 : 20,
							handleBorderColor: colors.value.fgSubtle,
							handleType: "grab"
						},
						preview: {
							fill: transparentizeOklch(accent.value, isDarkMode.value ? .95 : .92),
							stroke: transparentizeOklch(accent.value, .5),
							strokeWidth: 1,
							strokeDasharray: 3
						}
					}
				}
			};
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonGroup = Group_default;
			const _component_ButtonBase = Base_default$1;
			const _component_ClientOnly = client_only_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "w-full flex flex-col",
				id: "version-distribution",
				"aria-busy": unref(pending) ? "true" : "false"
			}, _attrs))} data-v-191ee4eb><div class="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-end mb-6" data-v-191ee4eb><div class="flex flex-col gap-1" data-v-191ee4eb><label class="text-3xs font-mono text-fg-subtle tracking-wide uppercase" data-v-191ee4eb>${ssrInterpolate(unref($t)("package.versions.distribution_title"))}</label>`);
			_push(ssrRenderComponent(_component_ButtonGroup, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => groupingMode.value = "major",
							variant: unref(groupingMode) === "major" ? "primary" : "secondary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_major"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_major")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => groupingMode.value = "minor",
							variant: unref(groupingMode) === "minor" ? "primary" : "secondary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_minor"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_minor")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_component_ButtonBase, {
						onClick: ($event) => groupingMode.value = "major",
						variant: unref(groupingMode) === "major" ? "primary" : "secondary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_major")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"]), createVNode(_component_ButtonBase, {
						onClick: ($event) => groupingMode.value = "minor",
						variant: unref(groupingMode) === "minor" ? "primary" : "secondary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_minor")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"])];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex flex-col gap-1" data-v-191ee4eb><label class="text-3xs font-mono text-fg-subtle tracking-wide uppercase flex items-center gap-2" data-v-191ee4eb><span data-v-191ee4eb>${ssrInterpolate(unref($t)("package.versions.grouping_versions_title"))}</span>`);
			_push(ssrRenderComponent(App_default, {
				text: unref($t)("package.versions.recent_versions_only_tooltip"),
				interactive: "",
				position: "top",
				to: __props.inModal ? "#chart-modal" : void 0,
				offset: 8
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span tabindex="0" class="i-lucide:info w-3.5 h-3.5 text-fg-subtle cursor-help shrink-0 rounded-sm" role="img" aria-label="versions info" data-v-191ee4eb${_scopeId}></span>`);
					else return [createVNode("span", {
						tabindex: "0",
						class: "i-lucide:info w-3.5 h-3.5 text-fg-subtle cursor-help shrink-0 rounded-sm",
						role: "img",
						"aria-label": "versions info"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</label>`);
			_push(ssrRenderComponent(_component_ButtonGroup, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => showRecentOnly.value = false,
							variant: unref(showRecentOnly) ? "secondary" : "primary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_versions_all"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_versions_all")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => showRecentOnly.value = true,
							variant: unref(showRecentOnly) ? "primary" : "secondary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_versions_only_recent"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_versions_only_recent")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_component_ButtonBase, {
						onClick: ($event) => showRecentOnly.value = false,
						variant: unref(showRecentOnly) ? "secondary" : "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_versions_all")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"]), createVNode(_component_ButtonBase, {
						onClick: ($event) => showRecentOnly.value = true,
						variant: unref(showRecentOnly) ? "primary" : "secondary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_versions_only_recent")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"])];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex flex-col gap-1" data-v-191ee4eb><label class="text-3xs font-mono text-fg-subtle tracking-wide uppercase flex items-center gap-2" data-v-191ee4eb><span data-v-191ee4eb>${ssrInterpolate(unref($t)("package.versions.grouping_usage_title"))}</span>`);
			_push(ssrRenderComponent(App_default, {
				text: unref($t)("package.versions.show_low_usage_tooltip"),
				interactive: "",
				position: "top",
				to: __props.inModal ? "#chart-modal" : void 0,
				offset: 8
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span tabindex="0" class="i-lucide:info w-3.5 h-3.5 text-fg-subtle cursor-help shrink-0 rounded-sm" role="img" aria-label="versions info" data-v-191ee4eb${_scopeId}></span>`);
					else return [createVNode("span", {
						tabindex: "0",
						class: "i-lucide:info w-3.5 h-3.5 text-fg-subtle cursor-help shrink-0 rounded-sm",
						role: "img",
						"aria-label": "versions info"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</label>`);
			_push(ssrRenderComponent(_component_ButtonGroup, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => showLowUsageVersions.value = false,
							variant: unref(showLowUsageVersions) ? "secondary" : "primary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_usage_all"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_usage_all")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: ($event) => showLowUsageVersions.value = true,
							variant: unref(showLowUsageVersions) ? "primary" : "secondary"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("package.versions.grouping_usage_low"))}`);
								else return [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_usage_low")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_component_ButtonBase, {
						onClick: ($event) => showLowUsageVersions.value = false,
						variant: unref(showLowUsageVersions) ? "secondary" : "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_usage_all")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"]), createVNode(_component_ButtonBase, {
						onClick: ($event) => showLowUsageVersions.value = true,
						variant: unref(showLowUsageVersions) ? "primary" : "secondary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.versions.grouping_usage_low")), 1)]),
						_: 1
					}, 8, ["onClick", "variant"])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><h2 id="version-distribution-title" class="sr-only" data-v-191ee4eb>${ssrInterpolate(unref($t)("package.versions.distribution_title"))}</h2><div role="region" aria-labelledby="version-distribution-title" class="${ssrRenderClass([unref(isMobile) ? "min-h-[260px]" : "min-h-[520px]", "relative"])}" data-v-191ee4eb>`);
			if (unref(xyDataset).length > 0 && !unref(error)) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div data-v-191ee4eb${_scopeId}></div>`);
				else return [createVNode("div")];
			}) }, _parent));
			else _push(`<!---->`);
			if (!unref(hasData) && !unref(pending) && !unref(error)) _push(`<div class="flex items-center justify-center h-full" data-v-191ee4eb><div class="text-sm text-fg-subtle font-mono text-center flex flex-col items-center gap-2" data-v-191ee4eb><span class="i-lucide:database w-8 h-8" data-v-191ee4eb></span><p data-v-191ee4eb>${ssrInterpolate(unref($t)("package.trends.no_data"))}</p></div></div>`);
			else _push(`<!---->`);
			if (unref(error)) _push(`<div class="flex items-center justify-center h-full" role="alert" data-v-191ee4eb><div class="text-sm text-fg-subtle font-mono text-center flex flex-col items-center gap-2" data-v-191ee4eb><span class="i-lucide:octagon-alert w-8 h-8 text-red-400" data-v-191ee4eb></span><p data-v-191ee4eb>${ssrInterpolate(unref(error).message)}</p><p class="text-xs" data-v-191ee4eb>Package: ${ssrInterpolate(__props.packageName)}</p></div></div>`);
			else _push(`<!---->`);
			if (unref(showLoadingIndicator)) _push(`<div role="status" aria-live="polite" class="absolute top-1/2 inset-is-1/2 -translate-x-1/2 -translate-y-1/2" data-v-191ee4eb><div class="text-xs text-fg-subtle font-mono bg-bg/70 backdrop-blur px-3 py-2 rounded-md border border-border" data-v-191ee4eb>${ssrInterpolate(unref($t)("common.loading"))}</div></div>`);
			else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
var _sfc_setup$6 = VersionDistribution_vue_vue_type_script_setup_true_lang_default.setup;
VersionDistribution_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/VersionDistribution.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var VersionDistribution_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(VersionDistribution_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-191ee4eb"]]), { __name: "PackageVersionDistribution" });
var QUERY_MODAL_VALUE = "versions";
var MAX_VISIBLE_TAGS = 10;
var Versions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Versions",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		versions: {},
		distTags: {},
		time: {},
		selectedVersion: {}
	},
	setup(__props) {
		const props = __props;
		const chartModal = useModal("chart-modal");
		const hasDistributionModalTransitioned = shallowRef(false);
		const isDistributionModalOpen = shallowRef(false);
		let distributionModalFallbackTimer = null;
		function clearDistributionModalFallbackTimer() {
			if (distributionModalFallbackTimer) {
				clearTimeout(distributionModalFallbackTimer);
				distributionModalFallbackTimer = null;
			}
		}
		const router = useRouter();
		const route = useRoute();
		async function openDistributionModal() {
			isDistributionModalOpen.value = true;
			hasDistributionModalTransitioned.value = false;
			await nextTick();
			chartModal.open();
			await router.replace({ query: {
				...route.query,
				modal: QUERY_MODAL_VALUE
			} });
			clearDistributionModalFallbackTimer();
			distributionModalFallbackTimer = setTimeout(() => {
				if (!hasDistributionModalTransitioned.value) hasDistributionModalTransitioned.value = true;
			}, 500);
		}
		function closeDistributionModal() {
			isDistributionModalOpen.value = false;
			router.replace({ query: {
				...route.query,
				modal: void 0
			} });
			hasDistributionModalTransitioned.value = false;
			clearDistributionModalFallbackTimer();
		}
		function handleDistributionModalTransitioned() {
			hasDistributionModalTransitioned.value = true;
			clearDistributionModalFallbackTimer();
		}
		/** Maximum number of dist-tag rows to show before collapsing into "Other versions" */
		function versionRoute(version) {
			return packageRoute(props.packageName, version);
		}
		const versionToTags = computed(() => buildVersionToTagsMap(props.distTags));
		const effectiveCurrentVersion = computed(() => props.selectedVersion ?? props.distTags.latest ?? void 0);
		const semverFilter = ref("");
		const allKnownVersions = computed(() => {
			const versions = new Set(Object.keys(props.versions));
			for (const versionList of tagVersions.value.values()) for (const v of versionList) versions.add(v.version);
			for (const group of otherMajorGroups.value) for (const v of group.versions) versions.add(v.version);
			return [...versions];
		});
		const filteredVersionSet = computed(() => filterVersions(allKnownVersions.value, semverFilter.value));
		const isFilterActive = computed(() => semverFilter.value.trim() !== "");
		const isInvalidRange = computed(() => isFilterActive.value && validRange(semverFilter.value.trim()) === null);
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
			const rowsMaybeFilteredForDeprecation = isPackageDeprecated.value ? allTagRows.value : allTagRows.value.filter((row) => !row.primaryVersion.deprecated);
			const rows = isFilterActive.value ? rowsMaybeFilteredForDeprecation.filter((row) => filteredVersionSet.value.has(row.primaryVersion.version)) : rowsMaybeFilteredForDeprecation;
			const first = rows.slice(0, MAX_VISIBLE_TAGS);
			const latestTagRow = rows.find((row) => row.tag === "latest");
			if (latestTagRow && !first.includes(latestTagRow)) {
				first.pop();
				first.push(latestTagRow);
			}
			return first;
		});
		const hiddenTagRows = computed(() => {
			const hiddenRows = allTagRows.value.filter((row) => !visibleTagRows.value.includes(row));
			return isFilterActive.value ? hiddenRows.filter((row) => filteredVersionSet.value.has(row.primaryVersion.version)) : hiddenRows;
		});
		const expandedTags = ref(/* @__PURE__ */ new Set());
		const tagVersions = ref(/* @__PURE__ */ new Map());
		const loadingTags = ref(/* @__PURE__ */ new Set());
		const otherVersionsExpanded = shallowRef(false);
		const expandedMajorGroups = ref(/* @__PURE__ */ new Set());
		const otherMajorGroups = shallowRef([]);
		const otherVersionsLoading = shallowRef(false);
		const filteredOtherMajorGroups = computed(() => {
			if (!isFilterActive.value) return otherMajorGroups.value;
			return otherMajorGroups.value.map((group) => ({
				...group,
				versions: group.versions.filter((v) => filteredVersionSet.value.has(v.version))
			})).filter((group) => group.versions.length > 0);
		});
		const hasNoFilterMatches = computed(() => {
			if (!isFilterActive.value) return false;
			return visibleTagRows.value.length === 0 && hiddenTagRows.value.length === 0 && filteredOtherMajorGroups.value.length === 0;
		});
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
		function getFilteredTagVersions(tag) {
			const versions = getTagVersions(tag);
			if (!isFilterActive.value) return versions;
			return versions.filter((v) => filteredVersionSet.value.has(v.version));
		}
		function findClaimingTag(version) {
			const versionChannel = getPrereleaseChannel(version);
			for (const row of allTagRows.value) {
				const tagVersion = props.distTags[row.tag];
				if (!tagVersion) continue;
				const tagChannel = getPrereleaseChannel(tagVersion);
				if (isSameVersionGroup(version, tagVersion) && versionChannel === tagChannel) return row.tag;
			}
			return null;
		}
		function rowContainsCurrentVersion(row) {
			if (!effectiveCurrentVersion.value) return false;
			if (row.primaryVersion.version === effectiveCurrentVersion.value) return true;
			if (getTagVersions(row.tag).some((v) => v.version === effectiveCurrentVersion.value)) return true;
			return findClaimingTag(effectiveCurrentVersion.value) === row.tag;
		}
		function otherVersionsContainsCurrent() {
			if (!effectiveCurrentVersion.value) return false;
			const claimingTag = findClaimingTag(effectiveCurrentVersion.value);
			if (claimingTag) {
				if (!visibleTagRows.value.some((row) => row.tag === claimingTag)) return true;
				return false;
			}
			return true;
		}
		function hiddenRowContainsCurrent(row) {
			if (!effectiveCurrentVersion.value) return false;
			if (row.primaryVersion.version === effectiveCurrentVersion.value) return true;
			return findClaimingTag(effectiveCurrentVersion.value) === row.tag;
		}
		function majorGroupContainsCurrent(group) {
			if (!effectiveCurrentVersion.value) return false;
			return group.versions.some((v) => v.version === effectiveCurrentVersion.value);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_ButtonBase = Base_default$1;
			const _component_InputBase = Base_default$1$1;
			const _component_TooltipApp = App_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_LinkBase = Base_default;
			const _component_DateTime = DateTime_default;
			const _component_ProvenanceBadge = ProvenanceBadge_default;
			const _component_PackageChartModal = ChartModal_default;
			const _component_PackageVersionDistribution = VersionDistribution_default;
			_push(`<!--[-->`);
			if (unref(allTagRows).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				title: _ctx.$t("package.versions.title"),
				id: "versions"
			}, {
				actions: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_ButtonBase, {
						variant: "secondary",
						class: "text-fg-subtle hover:text-fg transition-colors min-w-6 min-h-6 -m-1 p-1 rounded",
						title: _ctx.$t("package.downloads.community_distribution"),
						classicon: "i-lucide:file-stack",
						onClick: openDistributionModal
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="sr-only" data-v-fb7112b1${_scopeId}>${ssrInterpolate(_ctx.$t("package.downloads.community_distribution"))}</span>`);
							else return [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.downloads.community_distribution")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_ButtonBase, {
						variant: "secondary",
						class: "text-fg-subtle hover:text-fg transition-colors min-w-6 min-h-6 -m-1 p-1 rounded",
						title: _ctx.$t("package.downloads.community_distribution"),
						classicon: "i-lucide:file-stack",
						onClick: openDistributionModal
					}, {
						default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.downloads.community_distribution")), 1)]),
						_: 1
					}, 8, ["title"])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-0.5 min-w-0" data-v-fb7112b1${_scopeId}><div data-v-fb7112b1${_scopeId}><div class="flex items-center gap-2 p-1" data-v-fb7112b1${_scopeId}>`);
						_push(ssrRenderComponent(_component_InputBase, {
							modelValue: unref(semverFilter),
							"onUpdate:modelValue": ($event) => isRef(semverFilter) ? semverFilter.value = $event : null,
							type: "text",
							placeholder: _ctx.$t("package.versions.filter_placeholder"),
							"aria-label": _ctx.$t("package.versions.filter_placeholder"),
							"aria-invalid": unref(isInvalidRange) ? "true" : void 0,
							"aria-describedby": unref(isInvalidRange) ? "semver-filter-error" : void 0,
							autocomplete: "off",
							class: ["flex-1 min-w-0", unref(isInvalidRange) ? "!border-red-500" : ""],
							size: "small"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_TooltipApp, {
							interactive: "",
							position: "top"
						}, {
							content: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<p class="text-xs text-fg-muted" data-v-fb7112b1${_scopeId}>`);
									_push(ssrRenderComponent(_component_i18n_t, {
										keypath: "package.versions.filter_tooltip",
										tag: "span"
									}, {
										link: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_component_LinkBase, { to: `${unref(NPMX_DOCS_SITE)}/guide/semver-ranges` }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(_ctx.$t("package.versions.filter_tooltip_link"))}`);
													else return [createTextVNode(toDisplayString(_ctx.$t("package.versions.filter_tooltip_link")), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											else return [createVNode(_component_LinkBase, { to: `${unref(NPMX_DOCS_SITE)}/guide/semver-ranges` }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("package.versions.filter_tooltip_link")), 1)]),
												_: 1
											}, 8, ["to"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</p>`);
								} else return [createVNode("p", { class: "text-xs text-fg-muted" }, [createVNode(_component_i18n_t, {
									keypath: "package.versions.filter_tooltip",
									tag: "span"
								}, {
									link: withCtx(() => [createVNode(_component_LinkBase, { to: `${unref(NPMX_DOCS_SITE)}/guide/semver-ranges` }, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("package.versions.filter_tooltip_link")), 1)]),
										_: 1
									}, 8, ["to"])]),
									_: 1
								})])];
							}),
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span tabindex="0" class="block cursor-help shrink-0 -m-2 p-2 -me-1 focus-visible:outline-2 focus-visible:outline-accent/70 rounded" data-v-fb7112b1${_scopeId}><span class="block i-lucide:info w-3.5 h-3.5 text-fg-subtle" role="img"${ssrRenderAttr("aria-label", _ctx.$t("package.versions.filter_help"))} data-v-fb7112b1${_scopeId}></span></span>`);
								else return [createVNode("span", {
									tabindex: "0",
									class: "block cursor-help shrink-0 -m-2 p-2 -me-1 focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
								}, [createVNode("span", {
									class: "block i-lucide:info w-3.5 h-3.5 text-fg-subtle",
									role: "img",
									"aria-label": _ctx.$t("package.versions.filter_help")
								}, null, 8, ["aria-label"])])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (unref(isInvalidRange)) _push(`<p id="semver-filter-error" class="text-red-500 text-3xs mt-1" role="alert" data-v-fb7112b1${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.filter_invalid"))}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (unref(hasNoFilterMatches)) _push(`<div class="px-1 py-2 text-xs text-fg-subtle" role="status" aria-live="polite" data-v-fb7112b1${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.no_matches"))}</div>`);
						else _push(`<!---->`);
						_push(`<!--[-->`);
						ssrRenderList(unref(visibleTagRows), (row) => {
							_push(`<div data-v-fb7112b1${_scopeId}><div class="${ssrRenderClass([rowContainsCurrentVersion(row) ? "bg-bg-subtle" : "", "flex items-center gap-2 pe-2 px-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg"])}" data-v-fb7112b1${_scopeId}>`);
							if (getTagVersions(row.tag).length > 1 || !unref(hasLoadedAll)) {
								_push(`<button type="button" class="size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors rounded-sm relative z-10"${ssrRenderAttr("aria-expanded", unref(expandedTags).has(row.tag))}${ssrRenderAttr("aria-label", unref(expandedTags).has(row.tag) ? _ctx.$t("package.versions.collapse", { tag: row.tag }) : _ctx.$t("package.versions.expand", { tag: row.tag }))} data-testid="tag-expand-button" data-v-fb7112b1${_scopeId}>`);
								if (unref(loadingTags).has(row.tag)) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3" data-testid="loading-spinner" aria-hidden="true" data-v-fb7112b1${_scopeId}></span>`);
								else _push(`<span class="${ssrRenderClass([unref(expandedTags).has(row.tag) ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "size-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true" data-v-fb7112b1${_scopeId}></span>`);
								_push(`</button>`);
							} else _push(`<span class="w-5" data-v-fb7112b1${_scopeId}></span>`);
							_push(`<div class="flex-1 py-1.5 min-w-0 flex gap-2 justify-between items-center" data-v-fb7112b1${_scopeId}><div class="overflow-hidden" data-v-fb7112b1${_scopeId}>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: versionRoute(row.primaryVersion.version),
								block: "",
								class: ["text-sm after:absolute after:inset-0 after:content-['']", row.primaryVersion.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
								title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version,
								classicon: row.primaryVersion.deprecated ? "i-lucide:octagon-alert" : void 0
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(row.primaryVersion.version)}</span>`);
									else return [createVNode("span", {
										dir: "ltr",
										class: "block truncate"
									}, toDisplayString(row.primaryVersion.version), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							if (row.tags.length) {
								_push(`<div class="flex items-center gap-1 mt-0.5 flex-wrap relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
								ssrRenderList(row.tags, (tag) => {
									_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-4xs font-semibold uppercase tracking-wide truncate"])}"${ssrRenderAttr("title", tag)} data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
								});
								_push(`<!--]--></div>`);
							} else _push(`<!---->`);
							_push(`</div><div class="flex items-center gap-2 shrink-0 relative z-10" data-v-fb7112b1${_scopeId}>`);
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
								compact: "",
								linked: false
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div></div></div>`);
							if (unref(expandedTags).has(row.tag) && getFilteredTagVersions(row.tag).length > 1) {
								_push(`<div class="ms-4 ps-2 border-is border-border space-y-0.5 pe-2" data-v-fb7112b1${_scopeId}><!--[-->`);
								ssrRenderList(getFilteredTagVersions(row.tag).slice(1), (v) => {
									_push(`<div class="${ssrRenderClass([v.version === unref(effectiveCurrentVersion) ? "bg-bg-elevated/20 rounded" : "", "py-1 relative group/version-row hover:bg-bg-elevated/20 focus-within:bg-bg-elevated/20 transition-colors duration-200"])}" data-v-fb7112b1${_scopeId}><div class="flex items-center justify-between gap-2" data-v-fb7112b1${_scopeId}>`);
									_push(ssrRenderComponent(_component_LinkBase, {
										to: versionRoute(v.version),
										block: "",
										class: ["text-xs after:absolute after:inset-0 after:content-['']", v.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
										title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version,
										classicon: v.deprecated ? "i-lucide:octagon-alert" : void 0
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(v.version)}</span>`);
											else return [createVNode("span", {
												dir: "ltr",
												class: "block truncate"
											}, toDisplayString(v.version), 1)];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`<div class="flex items-center gap-2 shrink-0 relative z-10" data-v-fb7112b1${_scopeId}>`);
									if (v.time) _push(ssrRenderComponent(_component_DateTime, {
										datetime: v.time,
										class: "text-3xs text-fg-subtle",
										year: "numeric",
										month: "short",
										day: "numeric"
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
									if (v.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
										"package-name": __props.packageName,
										version: v.version,
										compact: "",
										linked: false
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
									_push(`</div></div>`);
									if (v.tags?.length && unref(filterExcludedTags)(v.tags, row.tags).length) {
										_push(`<div class="flex items-center gap-1 mt-0.5 relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
										ssrRenderList(unref(filterExcludedTags)(v.tags, row.tags), (tag) => {
											_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]"])}"${ssrRenderAttr("title", tag)} data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
										});
										_push(`<!--]--></div>`);
									} else _push(`<!---->`);
									_push(`</div>`);
								});
								_push(`<!--]--></div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						});
						_push(`<!--]--><div class="p-1" data-v-fb7112b1${_scopeId}><button type="button" class="${ssrRenderClass([otherVersionsContainsCurrent() ? "bg-bg-subtle" : "", "flex items-center gap-2 text-start rounded-sm w-full"])}"${ssrRenderAttr("aria-expanded", unref(otherVersionsExpanded))}${ssrRenderAttr("aria-label", unref(otherVersionsExpanded) ? _ctx.$t("package.versions.collapse_other") : _ctx.$t("package.versions.expand_other"))} data-v-fb7112b1${_scopeId}><span class="size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors" data-v-fb7112b1${_scopeId}>`);
						if (unref(otherVersionsLoading)) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3" data-testid="loading-spinner" aria-hidden="true" data-v-fb7112b1${_scopeId}></span>`);
						else _push(`<span class="${ssrRenderClass([unref(otherVersionsExpanded) ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true" data-v-fb7112b1${_scopeId}></span>`);
						_push(`</span><span class="text-xs text-fg-muted py-1.5" data-v-fb7112b1${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.other_versions"))} `);
						if (unref(hiddenTagRows).length > 0) _push(`<span class="text-fg-subtle" data-v-fb7112b1${_scopeId}> (${ssrInterpolate(_ctx.$t("package.versions.more_tagged", { count: unref(hiddenTagRows).length }, unref(hiddenTagRows).length))}) </span>`);
						else _push(`<!---->`);
						_push(`</span></button>`);
						if (unref(otherVersionsExpanded)) {
							_push(`<div class="ms-4 ps-2 border-is border-border space-y-0.5" data-v-fb7112b1${_scopeId}><!--[-->`);
							ssrRenderList(unref(hiddenTagRows), (row) => {
								_push(`<div class="${ssrRenderClass([hiddenRowContainsCurrent(row) ? "bg-bg-subtle" : "", "py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg"])}" data-v-fb7112b1${_scopeId}><div class="flex items-center justify-between gap-2" data-v-fb7112b1${_scopeId}>`);
								_push(ssrRenderComponent(_component_LinkBase, {
									to: versionRoute(row.primaryVersion.version),
									block: "",
									class: ["text-xs after:absolute after:inset-0 after:content-['']", row.primaryVersion.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
									title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version,
									classicon: row.primaryVersion.deprecated ? "i-lucide:octagon-alert" : void 0
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(row.primaryVersion.version)}</span>`);
										else return [createVNode("span", {
											dir: "ltr",
											class: "block truncate"
										}, toDisplayString(row.primaryVersion.version), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<div class="flex items-center gap-2 shrink-0 pe-2 relative z-10" data-v-fb7112b1${_scopeId}>`);
								if (row.primaryVersion.time) _push(ssrRenderComponent(_component_DateTime, {
									datetime: row.primaryVersion.time,
									class: "text-3xs text-fg-subtle",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
								_push(`</div></div>`);
								if (row.tags.length) {
									_push(`<div class="flex items-center gap-1 mt-0.5 flex-wrap relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
									ssrRenderList(row.tags, (tag) => {
										_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]"])}"${ssrRenderAttr("title", tag)} data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
									});
									_push(`<!--]--></div>`);
								} else _push(`<!---->`);
								_push(`</div>`);
							});
							_push(`<!--]-->`);
							if (unref(filteredOtherMajorGroups).length > 0) {
								_push(`<!--[-->`);
								ssrRenderList(unref(filteredOtherMajorGroups), (group) => {
									_push(`<div data-v-fb7112b1${_scopeId}>`);
									if (group.versions.length > 1) {
										_push(`<div class="${ssrRenderClass([majorGroupContainsCurrent(group) ? "bg-bg-subtle" : "", "py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg"])}" data-v-fb7112b1${_scopeId}><div class="flex items-center justify-between gap-2" data-v-fb7112b1${_scopeId}><div class="flex items-center gap-2 min-w-0" data-v-fb7112b1${_scopeId}><button type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0 rounded-sm relative z-10"${ssrRenderAttr("aria-expanded", unref(expandedMajorGroups).has(group.groupKey))}${ssrRenderAttr("aria-label", unref(expandedMajorGroups).has(group.groupKey) ? _ctx.$t("package.versions.collapse_major", { major: group.label }) : _ctx.$t("package.versions.expand_major", { major: group.label }))} data-testid="major-group-expand-button" data-v-fb7112b1${_scopeId}><span class="${ssrRenderClass([unref(expandedMajorGroups).has(group.groupKey) ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true" data-v-fb7112b1${_scopeId}></span></button>`);
										if (group.versions[0]?.version) _push(ssrRenderComponent(_component_LinkBase, {
											to: versionRoute(group.versions[0]?.version),
											block: "",
											class: ["text-xs after:absolute after:inset-0 after:content-['']", group.versions[0]?.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
											title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version,
											classicon: group.versions[0]?.deprecated ? "i-lucide:octagon-alert" : void 0
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(group.versions[0]?.version)}</span>`);
												else return [createVNode("span", {
													dir: "ltr",
													class: "block truncate"
												}, toDisplayString(group.versions[0]?.version), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div><div class="flex items-center gap-2 shrink-0 pe-2 relative z-10" data-v-fb7112b1${_scopeId}>`);
										if (group.versions[0]?.time) _push(ssrRenderComponent(_component_DateTime, {
											datetime: group.versions[0]?.time,
											class: "text-3xs text-fg-subtle",
											year: "numeric",
											month: "short",
											day: "numeric"
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (group.versions[0]?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
											"package-name": __props.packageName,
											version: group.versions[0]?.version,
											compact: "",
											linked: false
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div></div>`);
										if (group.versions[0]?.tags?.length) {
											_push(`<div class="flex items-center gap-1 ms-5 flex-wrap relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
											ssrRenderList(group.versions[0].tags, (tag) => {
												_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]"])}"${ssrRenderAttr("title", tag)} data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else {
										_push(`<div class="${ssrRenderClass([majorGroupContainsCurrent(group) ? "bg-bg-subtle" : "", "py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg"])}" data-v-fb7112b1${_scopeId}><div class="flex items-center justify-between gap-2" data-v-fb7112b1${_scopeId}><div class="flex items-center gap-2 min-w-0" data-v-fb7112b1${_scopeId}>`);
										if (group.versions[0]?.version) _push(ssrRenderComponent(_component_LinkBase, {
											to: versionRoute(group.versions[0]?.version),
											block: "",
											class: ["text-xs ms-6 after:absolute after:inset-0 after:content-['']", group.versions[0]?.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
											title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version,
											classicon: group.versions[0]?.deprecated ? "i-lucide:octagon-alert" : void 0
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(group.versions[0]?.version)}</span>`);
												else return [createVNode("span", {
													dir: "ltr",
													class: "block truncate"
												}, toDisplayString(group.versions[0]?.version), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div><div class="flex items-center gap-2 shrink-0 pe-2 relative z-10" data-v-fb7112b1${_scopeId}>`);
										if (group.versions[0]?.time) _push(ssrRenderComponent(_component_DateTime, {
											datetime: group.versions[0]?.time,
											class: "text-3xs text-fg-subtle",
											year: "numeric",
											month: "short",
											day: "numeric"
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (group.versions[0]?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
											"package-name": __props.packageName,
											version: group.versions[0]?.version,
											compact: "",
											linked: false
										}, null, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`</div></div>`);
										if (group.versions[0]?.tags?.length) {
											_push(`<div class="flex items-center gap-1 ms-5 relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
											ssrRenderList(group.versions[0].tags, (tag) => {
												_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-5xs font-semibold uppercase tracking-wide"])}" data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									}
									if (unref(expandedMajorGroups).has(group.groupKey) && group.versions.length > 1) {
										_push(`<div class="ms-6 space-y-0.5" data-v-fb7112b1${_scopeId}><!--[-->`);
										ssrRenderList(group.versions.slice(1), (v) => {
											_push(`<div class="${ssrRenderClass([v.version === unref(effectiveCurrentVersion) ? "bg-bg-elevated/20 rounded" : "", "py-1 relative group/version-row hover:bg-bg-elevated/20 focus-within:bg-bg-elevated/20 transition-colors duration-200"])}" data-v-fb7112b1${_scopeId}><div class="flex items-center justify-between gap-2" data-v-fb7112b1${_scopeId}>`);
											_push(ssrRenderComponent(_component_LinkBase, {
												to: versionRoute(v.version),
												block: "",
												class: ["text-xs after:absolute after:inset-0 after:content-['']", v.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
												title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version,
												classicon: v.deprecated ? "i-lucide:octagon-alert" : void 0
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`<span dir="ltr" class="block truncate" data-v-fb7112b1${_scopeId}>${ssrInterpolate(v.version)}</span>`);
													else return [createVNode("span", {
														dir: "ltr",
														class: "block truncate"
													}, toDisplayString(v.version), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`<div class="flex items-center gap-2 shrink-0 pe-2 relative z-10" data-v-fb7112b1${_scopeId}>`);
											if (v.time) _push(ssrRenderComponent(_component_DateTime, {
												datetime: v.time,
												class: "text-3xs text-fg-subtle",
												year: "numeric",
												month: "short",
												day: "numeric"
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											if (v.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
												"package-name": __props.packageName,
												version: v.version,
												compact: "",
												linked: false
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											_push(`</div></div>`);
											if (v.tags?.length) {
												_push(`<div class="flex items-center gap-1 mt-0.5 relative z-10" data-v-fb7112b1${_scopeId}><!--[-->`);
												ssrRenderList(v.tags, (tag) => {
													_push(`<span class="${ssrRenderClass([tag === "latest" ? "text-accent" : "text-fg-subtle", "text-5xs font-semibold uppercase tracking-wide"])}" data-v-fb7112b1${_scopeId}>${ssrInterpolate(tag)}</span>`);
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
							} else if (unref(hasLoadedAll) && unref(hiddenTagRows).length === 0) _push(`<div class="py-1 text-xs text-fg-subtle" data-v-fb7112b1${_scopeId}>${ssrInterpolate(_ctx.$t("package.versions.all_covered"))}</div>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "space-y-0.5 min-w-0" }, [
						createVNode("div", null, [createVNode("div", { class: "flex items-center gap-2 p-1" }, [createVNode(_component_InputBase, {
							modelValue: unref(semverFilter),
							"onUpdate:modelValue": ($event) => isRef(semverFilter) ? semverFilter.value = $event : null,
							type: "text",
							placeholder: _ctx.$t("package.versions.filter_placeholder"),
							"aria-label": _ctx.$t("package.versions.filter_placeholder"),
							"aria-invalid": unref(isInvalidRange) ? "true" : void 0,
							"aria-describedby": unref(isInvalidRange) ? "semver-filter-error" : void 0,
							autocomplete: "off",
							class: ["flex-1 min-w-0", unref(isInvalidRange) ? "!border-red-500" : ""],
							size: "small"
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"placeholder",
							"aria-label",
							"aria-invalid",
							"aria-describedby",
							"class"
						]), createVNode(_component_TooltipApp, {
							interactive: "",
							position: "top"
						}, {
							content: withCtx(() => [createVNode("p", { class: "text-xs text-fg-muted" }, [createVNode(_component_i18n_t, {
								keypath: "package.versions.filter_tooltip",
								tag: "span"
							}, {
								link: withCtx(() => [createVNode(_component_LinkBase, { to: `${unref(NPMX_DOCS_SITE)}/guide/semver-ranges` }, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("package.versions.filter_tooltip_link")), 1)]),
									_: 1
								}, 8, ["to"])]),
								_: 1
							})])]),
							default: withCtx(() => [createVNode("span", {
								tabindex: "0",
								class: "block cursor-help shrink-0 -m-2 p-2 -me-1 focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
							}, [createVNode("span", {
								class: "block i-lucide:info w-3.5 h-3.5 text-fg-subtle",
								role: "img",
								"aria-label": _ctx.$t("package.versions.filter_help")
							}, null, 8, ["aria-label"])])]),
							_: 1
						})]), unref(isInvalidRange) ? (openBlock(), createBlock("p", {
							key: 0,
							id: "semver-filter-error",
							class: "text-red-500 text-3xs mt-1",
							role: "alert"
						}, toDisplayString(_ctx.$t("package.versions.filter_invalid")), 1)) : createCommentVNode("", true)]),
						unref(hasNoFilterMatches) ? (openBlock(), createBlock("div", {
							key: 0,
							class: "px-1 py-2 text-xs text-fg-subtle",
							role: "status",
							"aria-live": "polite"
						}, toDisplayString(_ctx.$t("package.versions.no_matches")), 1)) : createCommentVNode("", true),
						(openBlock(true), createBlock(Fragment, null, renderList(unref(visibleTagRows), (row) => {
							return openBlock(), createBlock("div", { key: row.id }, [createVNode("div", { class: ["flex items-center gap-2 pe-2 px-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg", rowContainsCurrentVersion(row) ? "bg-bg-subtle" : ""] }, [getTagVersions(row.tag).length > 1 || !unref(hasLoadedAll) ? (openBlock(), createBlock("button", {
								key: 0,
								type: "button",
								class: "size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors rounded-sm relative z-10",
								"aria-expanded": unref(expandedTags).has(row.tag),
								"aria-label": unref(expandedTags).has(row.tag) ? _ctx.$t("package.versions.collapse", { tag: row.tag }) : _ctx.$t("package.versions.expand", { tag: row.tag }),
								"data-testid": "tag-expand-button",
								onClick: ($event) => expandTagRow(row.tag)
							}, [unref(loadingTags).has(row.tag) ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-svg-spinners:ring-resize w-3 h-3",
								"data-testid": "loading-spinner",
								"aria-hidden": "true"
							})) : (openBlock(), createBlock("span", {
								key: 1,
								class: ["size-3 transition-transform duration-200 rtl-flip", unref(expandedTags).has(row.tag) ? "i-lucide:chevron-down" : "i-lucide:chevron-right"],
								"aria-hidden": "true"
							}, null, 2))], 8, [
								"aria-expanded",
								"aria-label",
								"onClick"
							])) : (openBlock(), createBlock("span", {
								key: 1,
								class: "w-5"
							})), createVNode("div", { class: "flex-1 py-1.5 min-w-0 flex gap-2 justify-between items-center" }, [createVNode("div", { class: "overflow-hidden" }, [createVNode(_component_LinkBase, {
								to: versionRoute(row.primaryVersion.version),
								block: "",
								class: ["text-sm after:absolute after:inset-0 after:content-['']", row.primaryVersion.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
								title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version,
								classicon: row.primaryVersion.deprecated ? "i-lucide:octagon-alert" : void 0
							}, {
								default: withCtx(() => [createVNode("span", {
									dir: "ltr",
									class: "block truncate"
								}, toDisplayString(row.primaryVersion.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title",
								"classicon"
							]), row.tags.length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 mt-0.5 flex-wrap relative z-10"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(row.tags, (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: ["text-4xs font-semibold uppercase tracking-wide truncate", tag === "latest" ? "text-accent" : "text-fg-subtle"],
									title: tag
								}, toDisplayString(tag), 11, ["title"]);
							}), 128))])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0 relative z-10" }, [row.primaryVersion.time ? (openBlock(), createBlock(_component_DateTime, {
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
								compact: "",
								linked: false
							}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])])], 2), unref(expandedTags).has(row.tag) && getFilteredTagVersions(row.tag).length > 1 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "ms-4 ps-2 border-is border-border space-y-0.5 pe-2"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(getFilteredTagVersions(row.tag).slice(1), (v) => {
								return openBlock(), createBlock("div", {
									key: v.version,
									class: ["py-1 relative group/version-row hover:bg-bg-elevated/20 focus-within:bg-bg-elevated/20 transition-colors duration-200", v.version === unref(effectiveCurrentVersion) ? "bg-bg-elevated/20 rounded" : ""]
								}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_LinkBase, {
									to: versionRoute(v.version),
									block: "",
									class: ["text-xs after:absolute after:inset-0 after:content-['']", v.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
									title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version,
									classicon: v.deprecated ? "i-lucide:octagon-alert" : void 0
								}, {
									default: withCtx(() => [createVNode("span", {
										dir: "ltr",
										class: "block truncate"
									}, toDisplayString(v.version), 1)]),
									_: 2
								}, 1032, [
									"to",
									"class",
									"title",
									"classicon"
								]), createVNode("div", { class: "flex items-center gap-2 shrink-0 relative z-10" }, [v.time ? (openBlock(), createBlock(_component_DateTime, {
									key: 0,
									datetime: v.time,
									class: "text-3xs text-fg-subtle",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, 8, ["datetime"])) : createCommentVNode("", true), v.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
									key: 1,
									"package-name": __props.packageName,
									version: v.version,
									compact: "",
									linked: false
								}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), v.tags?.length && unref(filterExcludedTags)(v.tags, row.tags).length ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex items-center gap-1 mt-0.5 relative z-10"
								}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(filterExcludedTags)(v.tags, row.tags), (tag) => {
									return openBlock(), createBlock("span", {
										key: tag,
										class: ["text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]", tag === "latest" ? "text-accent" : "text-fg-subtle"],
										title: tag
									}, toDisplayString(tag), 11, ["title"]);
								}), 128))])) : createCommentVNode("", true)], 2);
							}), 128))])) : createCommentVNode("", true)]);
						}), 128)),
						createVNode("div", { class: "p-1" }, [createVNode("button", {
							type: "button",
							class: ["flex items-center gap-2 text-start rounded-sm w-full", otherVersionsContainsCurrent() ? "bg-bg-subtle" : ""],
							"aria-expanded": unref(otherVersionsExpanded),
							"aria-label": unref(otherVersionsExpanded) ? _ctx.$t("package.versions.collapse_other") : _ctx.$t("package.versions.expand_other"),
							onClick: expandOtherVersions
						}, [createVNode("span", { class: "size-5 -me-1 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors" }, [unref(otherVersionsLoading) ? (openBlock(), createBlock("span", {
							key: 0,
							class: "i-svg-spinners:ring-resize w-3 h-3",
							"data-testid": "loading-spinner",
							"aria-hidden": "true"
						})) : (openBlock(), createBlock("span", {
							key: 1,
							class: ["w-3 h-3 transition-transform duration-200 rtl-flip", unref(otherVersionsExpanded) ? "i-lucide:chevron-down" : "i-lucide:chevron-right"],
							"aria-hidden": "true"
						}, null, 2))]), createVNode("span", { class: "text-xs text-fg-muted py-1.5" }, [createTextVNode(toDisplayString(_ctx.$t("package.versions.other_versions")) + " ", 1), unref(hiddenTagRows).length > 0 ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-fg-subtle"
						}, " (" + toDisplayString(_ctx.$t("package.versions.more_tagged", { count: unref(hiddenTagRows).length }, unref(hiddenTagRows).length)) + ") ", 1)) : createCommentVNode("", true)])], 10, ["aria-expanded", "aria-label"]), unref(otherVersionsExpanded) ? (openBlock(), createBlock("div", {
							key: 0,
							class: "ms-4 ps-2 border-is border-border space-y-0.5"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(hiddenTagRows), (row) => {
							return openBlock(), createBlock("div", {
								key: row.id,
								class: ["py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg", hiddenRowContainsCurrent(row) ? "bg-bg-subtle" : ""]
							}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_LinkBase, {
								to: versionRoute(row.primaryVersion.version),
								block: "",
								class: ["text-xs after:absolute after:inset-0 after:content-['']", row.primaryVersion.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
								title: row.primaryVersion.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: row.primaryVersion.version }) : row.primaryVersion.version,
								classicon: row.primaryVersion.deprecated ? "i-lucide:octagon-alert" : void 0
							}, {
								default: withCtx(() => [createVNode("span", {
									dir: "ltr",
									class: "block truncate"
								}, toDisplayString(row.primaryVersion.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title",
								"classicon"
							]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2 relative z-10" }, [row.primaryVersion.time ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: row.primaryVersion.time,
								class: "text-3xs text-fg-subtle",
								year: "numeric",
								month: "short",
								day: "numeric"
							}, null, 8, ["datetime"])) : createCommentVNode("", true)])]), row.tags.length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 mt-0.5 flex-wrap relative z-10"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(row.tags, (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: ["text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]", tag === "latest" ? "text-accent" : "text-fg-subtle"],
									title: tag
								}, toDisplayString(tag), 11, ["title"]);
							}), 128))])) : createCommentVNode("", true)], 2);
						}), 128)), unref(filteredOtherMajorGroups).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(filteredOtherMajorGroups), (group) => {
							return openBlock(), createBlock("div", { key: group.groupKey }, [group.versions.length > 1 ? (openBlock(), createBlock("div", {
								key: 0,
								class: ["py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg", majorGroupContainsCurrent(group) ? "bg-bg-subtle" : ""]
							}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [createVNode("button", {
								type: "button",
								class: "w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0 rounded-sm relative z-10",
								"aria-expanded": unref(expandedMajorGroups).has(group.groupKey),
								"aria-label": unref(expandedMajorGroups).has(group.groupKey) ? _ctx.$t("package.versions.collapse_major", { major: group.label }) : _ctx.$t("package.versions.expand_major", { major: group.label }),
								"data-testid": "major-group-expand-button",
								onClick: ($event) => toggleMajorGroup(group.groupKey)
							}, [createVNode("span", {
								class: ["w-3 h-3 transition-transform duration-200 rtl-flip", unref(expandedMajorGroups).has(group.groupKey) ? "i-lucide:chevron-down" : "i-lucide:chevron-right"],
								"aria-hidden": "true"
							}, null, 2)], 8, [
								"aria-expanded",
								"aria-label",
								"onClick"
							]), group.versions[0]?.version ? (openBlock(), createBlock(_component_LinkBase, {
								key: 0,
								to: versionRoute(group.versions[0]?.version),
								block: "",
								class: ["text-xs after:absolute after:inset-0 after:content-['']", group.versions[0]?.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
								title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version,
								classicon: group.versions[0]?.deprecated ? "i-lucide:octagon-alert" : void 0
							}, {
								default: withCtx(() => [createVNode("span", {
									dir: "ltr",
									class: "block truncate"
								}, toDisplayString(group.versions[0]?.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title",
								"classicon"
							])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2 relative z-10" }, [group.versions[0]?.time ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: group.versions[0]?.time,
								class: "text-3xs text-fg-subtle",
								year: "numeric",
								month: "short",
								day: "numeric"
							}, null, 8, ["datetime"])) : createCommentVNode("", true), group.versions[0]?.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
								key: 1,
								"package-name": __props.packageName,
								version: group.versions[0]?.version,
								compact: "",
								linked: false
							}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), group.versions[0]?.tags?.length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 ms-5 flex-wrap relative z-10"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions[0].tags, (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: ["text-5xs font-semibold uppercase tracking-wide truncate max-w-[120px]", tag === "latest" ? "text-accent" : "text-fg-subtle"],
									title: tag
								}, toDisplayString(tag), 11, ["title"]);
							}), 128))])) : createCommentVNode("", true)], 2)) : (openBlock(), createBlock("div", {
								key: 1,
								class: ["py-1 relative group/version-row hover:bg-bg-subtle focus-within:bg-bg-subtle transition-colors duration-200 rounded-lg", majorGroupContainsCurrent(group) ? "bg-bg-subtle" : ""]
							}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [group.versions[0]?.version ? (openBlock(), createBlock(_component_LinkBase, {
								key: 0,
								to: versionRoute(group.versions[0]?.version),
								block: "",
								class: ["text-xs ms-6 after:absolute after:inset-0 after:content-['']", group.versions[0]?.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
								title: group.versions[0]?.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: group.versions[0]?.version }) : group.versions[0]?.version,
								classicon: group.versions[0]?.deprecated ? "i-lucide:octagon-alert" : void 0
							}, {
								default: withCtx(() => [createVNode("span", {
									dir: "ltr",
									class: "block truncate"
								}, toDisplayString(group.versions[0]?.version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title",
								"classicon"
							])) : createCommentVNode("", true)]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2 relative z-10" }, [group.versions[0]?.time ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: group.versions[0]?.time,
								class: "text-3xs text-fg-subtle",
								year: "numeric",
								month: "short",
								day: "numeric"
							}, null, 8, ["datetime"])) : createCommentVNode("", true), group.versions[0]?.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
								key: 1,
								"package-name": __props.packageName,
								version: group.versions[0]?.version,
								compact: "",
								linked: false
							}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), group.versions[0]?.tags?.length ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1 ms-5 relative z-10"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions[0].tags, (tag) => {
								return openBlock(), createBlock("span", {
									key: tag,
									class: ["text-5xs font-semibold uppercase tracking-wide", tag === "latest" ? "text-accent" : "text-fg-subtle"]
								}, toDisplayString(tag), 3);
							}), 128))])) : createCommentVNode("", true)], 2)), unref(expandedMajorGroups).has(group.groupKey) && group.versions.length > 1 ? (openBlock(), createBlock("div", {
								key: 2,
								class: "ms-6 space-y-0.5"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(group.versions.slice(1), (v) => {
								return openBlock(), createBlock("div", {
									key: v.version,
									class: ["py-1 relative group/version-row hover:bg-bg-elevated/20 focus-within:bg-bg-elevated/20 transition-colors duration-200", v.version === unref(effectiveCurrentVersion) ? "bg-bg-elevated/20 rounded" : ""]
								}, [createVNode("div", { class: "flex items-center justify-between gap-2" }, [createVNode(_component_LinkBase, {
									to: versionRoute(v.version),
									block: "",
									class: ["text-xs after:absolute after:inset-0 after:content-['']", v.deprecated ? "text-red-800 group-hover/version-row:text-red-700 dark:text-red-400 dark:group-hover/version-row:text-red-300" : void 0],
									title: v.deprecated ? _ctx.$t("package.versions.deprecated_title", { version: v.version }) : v.version,
									classicon: v.deprecated ? "i-lucide:octagon-alert" : void 0
								}, {
									default: withCtx(() => [createVNode("span", {
										dir: "ltr",
										class: "block truncate"
									}, toDisplayString(v.version), 1)]),
									_: 2
								}, 1032, [
									"to",
									"class",
									"title",
									"classicon"
								]), createVNode("div", { class: "flex items-center gap-2 shrink-0 pe-2 relative z-10" }, [v.time ? (openBlock(), createBlock(_component_DateTime, {
									key: 0,
									datetime: v.time,
									class: "text-3xs text-fg-subtle",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, 8, ["datetime"])) : createCommentVNode("", true), v.hasProvenance ? (openBlock(), createBlock(_component_ProvenanceBadge, {
									key: 1,
									"package-name": __props.packageName,
									version: v.version,
									compact: "",
									linked: false
								}, null, 8, ["package-name", "version"])) : createCommentVNode("", true)])]), v.tags?.length ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex items-center gap-1 mt-0.5 relative z-10"
								}, [(openBlock(true), createBlock(Fragment, null, renderList(v.tags, (tag) => {
									return openBlock(), createBlock("span", {
										key: tag,
										class: ["text-5xs font-semibold uppercase tracking-wide", tag === "latest" ? "text-accent" : "text-fg-subtle"]
									}, toDisplayString(tag), 3);
								}), 128))])) : createCommentVNode("", true)], 2);
							}), 128))])) : createCommentVNode("", true)]);
						}), 128)) : unref(hasLoadedAll) && unref(hiddenTagRows).length === 0 ? (openBlock(), createBlock("div", {
							key: 1,
							class: "py-1 text-xs text-fg-subtle"
						}, toDisplayString(_ctx.$t("package.versions.all_covered")), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true)])
					])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(isDistributionModalOpen)) _push(ssrRenderComponent(_component_PackageChartModal, {
				"modal-title": _ctx.$t("package.versions.distribution_modal_title"),
				onClose: closeDistributionModal,
				onTransitioned: handleDistributionModalTransitioned
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(``);
						if (unref(hasDistributionModalTransitioned)) _push(ssrRenderComponent(_component_PackageVersionDistribution, {
							"package-name": __props.packageName,
							"in-modal": true
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						if (!unref(hasDistributionModalTransitioned)) _push(`<div class="w-full aspect-[272/609] sm:aspect-[718/592.67]" data-v-fb7112b1${_scopeId}></div>`);
						else _push(`<!---->`);
					} else return [createVNode(Transition, {
						name: "opacity",
						mode: "out-in"
					}, {
						default: withCtx(() => [unref(hasDistributionModalTransitioned) ? (openBlock(), createBlock(_component_PackageVersionDistribution, {
							key: 0,
							"package-name": __props.packageName,
							"in-modal": true
						}, null, 8, ["package-name"])) : createCommentVNode("", true)]),
						_: 1
					}), !unref(hasDistributionModalTransitioned) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "w-full aspect-[272/609] sm:aspect-[718/592.67]"
					})) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$5 = Versions_vue_vue_type_script_setup_true_lang_default.setup;
Versions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Versions.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Versions_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Versions_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-fb7112b1"]]), { __name: "PackageVersions" });
/**
* Check if a version constraint explicitly includes a prerelease tag.
* e.g., "^1.0.0-alpha" or ">=2.0.0-beta.1" include prereleases
*/
function constraintIncludesPrerelease(constraint) {
	return /-(?:alpha|beta|rc|next|canary|dev|preview|pre|experimental)/i.test(constraint) || /-\d/.test(constraint);
}
/**
* Check if a constraint is a non-semver value (git URL, file path, etc.)
*/
function isNonSemverConstraint(constraint) {
	return constraint.startsWith("git") || constraint.startsWith("http") || constraint.startsWith("file:") || constraint.startsWith("npm:") || constraint.startsWith("link:") || constraint.startsWith("workspace:") || constraint.includes("/");
}
/**
* Get tooltip text for an outdated dependency
*/
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
/**
* Get CSS class for a dependency version based on outdated status
*/
function getVersionClass(info) {
	if (!info) return "text-fg-subtle";
	if (info.majorsBehind === 0 && info.minorsBehind === 0 && info.resolved === info.latest) return "text-green-700 dark:text-green-500 cursor-help";
	if (info.majorsBehind > 0) return "text-red-700 dark:text-red-500 cursor-help";
	if (info.minorsBehind > 0) return "text-orange-700 dark:text-orange-500 cursor-help";
	return "text-yellow-700 dark:text-yellow-500 cursor-help";
}
var BATCH_SIZE = 50;
function resolveOutdated(versions, latestTag, constraint) {
	if (constraint === "latest") return {
		resolved: latestTag,
		latest: latestTag,
		majorsBehind: 0,
		minorsBehind: 0,
		diffType: null
	};
	let filteredVersions = versions;
	if (!constraintIncludesPrerelease(constraint)) filteredVersions = versions.filter((v) => !prerelease(v));
	const resolved = maxSatisfying(filteredVersions, constraint);
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
/**
* Check for outdated dependencies via fast-npm-meta batch version lookups.
* Returns a reactive map of dependency name to outdated info.
*/
function useOutdatedDependencies(dependencies) {
	const outdated = shallowRef({});
	async function fetchOutdatedInfo(deps) {
		if (!deps || Object.keys(deps).length === 0) {
			outdated.value = {};
			return;
		}
		const semverEntries = Object.entries(deps).filter(([, constraint]) => !isNonSemverConstraint(constraint));
		if (semverEntries.length === 0) {
			outdated.value = {};
			return;
		}
		const packageNames = semverEntries.map(([name]) => name);
		const chunks = [];
		for (let i = 0; i < packageNames.length; i += BATCH_SIZE) chunks.push(packageNames.slice(i, i + BATCH_SIZE));
		const allVersionData = (await Promise.all(chunks.map((chunk) => getVersionsBatch(chunk, { throw: false })))).flat();
		const versionMap = /* @__PURE__ */ new Map();
		for (const data of allVersionData) {
			if ("error" in data) continue;
			versionMap.set(data.name, data);
		}
		const results = {};
		for (const [name, constraint] of semverEntries) {
			const data = versionMap.get(name);
			if (!data) continue;
			const latestTag = data.distTags.latest;
			if (!latestTag) continue;
			const info = resolveOutdated(data.versions, latestTag, constraint);
			if (info) results[name] = info;
		}
		outdated.value = results;
	}
	watch(() => toValue(dependencies), (deps) => {
		fetchOutdatedInfo(deps).catch(() => {});
	}, { immediate: true });
	return outdated;
}
var InstallScripts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstallScripts",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		version: {},
		installScripts: {}
	},
	setup(__props) {
		const props = __props;
		function getCodeLink(filePath) {
			const split = props.packageName.split("/");
			return {
				name: "code",
				params: {
					org: split.length === 2 ? split[0] : null,
					packageName: split.length === 2 ? split[1] : split[0],
					version: props.version,
					filePath
				}
			};
		}
		const scriptParts = computed(() => {
			const parts = {};
			for (const scriptName of props.installScripts.scripts) {
				const content = props.installScripts.content?.[scriptName];
				if (!content) continue;
				const parsed = parseNodeScript(content);
				if (parsed) parts[scriptName] = {
					prefix: parsed.prefix,
					filePath: parsed.filePath,
					link: getCodeLink(parsed.filePath)
				};
				else parts[scriptName] = {
					prefix: null,
					filePath: null,
					link: getCodeLink("package.json")
				};
			}
			return parts;
		});
		const outdatedNpxDeps = useOutdatedDependencies(() => props.installScripts.npxDependencies);
		const hasNpxDeps = computed(() => Object.keys(props.installScripts.npxDependencies).length > 0);
		const sortedNpxDeps = computed(() => {
			return Object.entries(props.installScripts.npxDependencies).sort(([a], [b]) => a.localeCompare(b));
		});
		const isExpanded = shallowRef(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_LinkBase = Base_default;
			const _component_TooltipApp = App_default;
			_push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.install_scripts.title"),
				id: "installScripts",
				icon: "i-lucide:circle-alert w-3 h-3 text-yellow-500"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<dl class="space-y-2 m-0"${_scopeId}><!--[-->`);
						ssrRenderList(__props.installScripts.scripts, (scriptName) => {
							_push(`<div${_scopeId}><dt class="font-mono text-xs text-fg-muted"${_scopeId}>${ssrInterpolate(scriptName)}</dt><dd class="font-mono text-sm text-fg-subtle m-0 truncate"${ssrRenderAttr("title", __props.installScripts.content?.[scriptName])}${_scopeId}>`);
							if (__props.installScripts.content?.[scriptName] && unref(scriptParts)[scriptName]) {
								_push(`<!--[-->`);
								if (unref(scriptParts)[scriptName].prefix) {
									_push(`<!--[-->${ssrInterpolate(unref(scriptParts)[scriptName].prefix)}`);
									_push(ssrRenderComponent(_component_LinkBase, { to: unref(scriptParts)[scriptName].link }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(unref(scriptParts)[scriptName].filePath)}`);
											else return [createTextVNode(toDisplayString(unref(scriptParts)[scriptName].filePath), 1)];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`<!--]-->`);
								} else _push(ssrRenderComponent(_component_LinkBase, { to: unref(scriptParts)[scriptName].link }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(__props.installScripts.content[scriptName])}`);
										else return [createTextVNode(toDisplayString(__props.installScripts.content[scriptName]), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<!--]-->`);
							} else _push(`<span tabindex="0" class="cursor-help"${_scopeId}>${ssrInterpolate(_ctx.$t("package.install_scripts.script_label"))}</span>`);
							_push(`</dd></div>`);
						});
						_push(`<!--]--></dl>`);
						if (unref(hasNpxDeps)) {
							_push(`<div class="mt-3"${_scopeId}><button type="button" class="flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded"${ssrRenderAttr("aria-expanded", unref(isExpanded))} aria-controls="npx-packages-details"${_scopeId}><span class="${ssrRenderClass([{ "rotate-90": unref(isExpanded) }, "i-lucide:chevron-right rtl-flip w-3 h-3 transition-transform duration-200"])}" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("package.install_scripts.npx_packages", { count: unref(sortedNpxDeps).length }, unref(sortedNpxDeps).length))}</button><ul id="npx-packages-details" class="mt-2 space-y-1 list-none m-0 p-0 ps-4" style="${ssrRenderStyle(unref(isExpanded) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
							ssrRenderList(unref(sortedNpxDeps), ([dep, version]) => {
								_push(`<li class="flex items-center justify-between py-0.5 text-sm gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(_component_LinkBase, {
									to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
									class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(dep)}`);
										else return [createTextVNode(toDisplayString(dep), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<span class="flex items-center gap-1"${_scopeId}>`);
								if (unref(outdatedNpxDeps)[dep] && unref(outdatedNpxDeps)[dep].resolved !== unref(outdatedNpxDeps)[dep].latest) _push(ssrRenderComponent(_component_TooltipApp, {
									class: ["shrink-0 p-2 -m-2", unref(getVersionClass)(unref(outdatedNpxDeps)[dep])],
									"aria-hidden": "true",
									text: unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<span class="i-lucide:circle-alert w-3 h-3"${_scopeId}></span>`);
										else return [createVNode("span", { class: "i-lucide:circle-alert w-3 h-3" })];
									}),
									_: 2
								}, _parent, _scopeId));
								else _push(`<!---->`);
								_push(`<span class="${ssrRenderClass([unref(getVersionClass)(unref(outdatedNpxDeps)[dep]), "font-mono text-xs text-end truncate"])}"${ssrRenderAttr("title", unref(outdatedNpxDeps)[dep] ? unref(outdatedNpxDeps)[dep].resolved === unref(outdatedNpxDeps)[dep].latest ? _ctx.$t("package.install_scripts.currently", { version: unref(outdatedNpxDeps)[dep].latest }) : unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t) : version)}${_scopeId}>${ssrInterpolate(version)}</span></span></li>`);
							});
							_push(`<!--]--></ul></div>`);
						} else _push(`<!---->`);
					} else return [createVNode("dl", { class: "space-y-2 m-0" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.installScripts.scripts, (scriptName) => {
						return openBlock(), createBlock("div", { key: scriptName }, [createVNode("dt", { class: "font-mono text-xs text-fg-muted" }, toDisplayString(scriptName), 1), createVNode("dd", {
							class: "font-mono text-sm text-fg-subtle m-0 truncate",
							title: __props.installScripts.content?.[scriptName]
						}, [__props.installScripts.content?.[scriptName] && unref(scriptParts)[scriptName] ? (openBlock(), createBlock(Fragment, { key: 0 }, [unref(scriptParts)[scriptName].prefix ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(scriptParts)[scriptName].prefix), 1), createVNode(_component_LinkBase, { to: unref(scriptParts)[scriptName].link }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(scriptParts)[scriptName].filePath), 1)]),
							_: 2
						}, 1032, ["to"])], 64)) : (openBlock(), createBlock(_component_LinkBase, {
							key: 1,
							to: unref(scriptParts)[scriptName].link
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.installScripts.content[scriptName]), 1)]),
							_: 2
						}, 1032, ["to"]))], 64)) : (openBlock(), createBlock("span", {
							key: 1,
							tabindex: "0",
							class: "cursor-help"
						}, toDisplayString(_ctx.$t("package.install_scripts.script_label")), 1))], 8, ["title"])]);
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
						class: ["i-lucide:chevron-right rtl-flip w-3 h-3 transition-transform duration-200", { "rotate-90": unref(isExpanded) }],
						"aria-hidden": "true"
					}, null, 2), createTextVNode(" " + toDisplayString(_ctx.$t("package.install_scripts.npx_packages", { count: unref(sortedNpxDeps).length }, unref(sortedNpxDeps).length)), 1)], 8, ["aria-expanded", "onClick"]), withDirectives(createVNode("ul", {
						id: "npx-packages-details",
						class: "mt-2 space-y-1 list-none m-0 p-0 ps-4"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedNpxDeps), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-0.5 text-sm gap-2"
						}, [createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
							class: "font-mono text-fg-muted hover:text-fg transition-colors duration-200 truncate min-w-0"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode("span", { class: "flex items-center gap-1" }, [unref(outdatedNpxDeps)[dep] && unref(outdatedNpxDeps)[dep].resolved !== unref(outdatedNpxDeps)[dep].latest ? (openBlock(), createBlock(_component_TooltipApp, {
							key: 0,
							class: ["shrink-0 p-2 -m-2", unref(getVersionClass)(unref(outdatedNpxDeps)[dep])],
							"aria-hidden": "true",
							text: unref(getOutdatedTooltip)(unref(outdatedNpxDeps)[dep], _ctx.$t)
						}, {
							default: withCtx(() => [createVNode("span", { class: "i-lucide:circle-alert w-3 h-3" })]),
							_: 1
						}, 8, ["class", "text"])) : createCommentVNode("", true), createVNode("span", {
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
var _sfc_setup$4 = InstallScripts_vue_vue_type_script_setup_true_lang_default.setup;
InstallScripts_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/InstallScripts.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var InstallScripts_default = Object.assign(InstallScripts_vue_vue_type_script_setup_true_lang_default, { __name: "PackageInstallScripts" });
/**
* Fetch module replacement suggestions for a set of dependencies.
* Returns a reactive map of dependency name to ModuleReplacement.
*/
function useReplacementDependencies(dependencies) {
	return shallowRef({});
}
/**
* Shared composable for dependency analysis data (vulnerabilities, deprecated packages).
* Fetches once and caches the result so multiple components can use it.
* Before: useVulnerabilityTree - but now we use this for both vulnerabilities and deprecated packages.
*/
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
		const { t } = useI18n();
		const props = __props;
		const outdatedDeps = useOutdatedDependencies(() => props.dependencies);
		const replacementDeps = useReplacementDependencies();
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
		function getDepVersionTooltip(dep, version) {
			const outdated = outdatedDeps.value[dep];
			if (outdated) return getOutdatedTooltip(outdated, t);
			if (getVulnerableDepInfo(dep) || getDeprecatedDepInfo(dep)) return version;
			if (replacementDeps.value[dep]) return t("package.dependencies.has_replacement");
			return version;
		}
		function getDepVersionClass(dep) {
			const outdated = outdatedDeps.value[dep];
			if (outdated) return getVersionClass(outdated);
			if (getVulnerableDepInfo(dep) || getDeprecatedDepInfo(dep)) return getVersionClass(void 0);
			if (replacementDeps.value[dep]) return "text-amber-700 dark:text-amber-500";
			return getVersionClass(void 0);
		}
		const numberFormatter = useNumberFormatter();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_LinkBase = Base_default;
			const _component_TooltipApp = App_default;
			const _component_TagStatic = Static_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}>`);
			if (unref(sortedDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "dependencies",
				title: _ctx.$t("package.dependencies.title", { count: unref(numberFormatter).format(unref(sortedDependencies).length) }, unref(sortedDependencies).length)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="px-1 space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedDependencies).slice(0, unref(depsExpanded) ? void 0 : 10), ([dep, version]) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
								class: "block truncate",
								dir: "ltr"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(dep)}`);
									else return [createTextVNode(toDisplayString(dep), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<span class="flex items-center gap-1 max-w-[40%]" dir="ltr"${_scopeId}>`);
							if (unref(outdatedDeps)[dep]) _push(ssrRenderComponent(_component_TooltipApp, {
								class: ["shrink-0", unref(getVersionClass)(unref(outdatedDeps)[dep])],
								text: unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<button type="button" class="p-2 -m-2"${ssrRenderAttr("aria-label", unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t))}${_scopeId}><span class="i-lucide:circle-alert w-3 h-3" aria-hidden="true"${_scopeId}></span></button>`);
									else return [createVNode("button", {
										type: "button",
										class: "p-2 -m-2",
										"aria-label": unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)
									}, [createVNode("span", {
										class: "i-lucide:circle-alert w-3 h-3",
										"aria-hidden": "true"
									})], 8, ["aria-label"])];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(replacementDeps)[dep]) _push(ssrRenderComponent(_component_TooltipApp, {
								class: "shrink-0 text-amber-700 dark:text-amber-500",
								text: _ctx.$t("package.dependencies.has_replacement")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<button type="button" class="p-2 -m-2"${ssrRenderAttr("aria-label", _ctx.$t("package.dependencies.has_replacement"))}${_scopeId}><span class="i-lucide:lightbulb w-3 h-3" aria-hidden="true"${_scopeId}></span></button>`);
									else return [createVNode("button", {
										type: "button",
										class: "p-2 -m-2",
										"aria-label": _ctx.$t("package.dependencies.has_replacement")
									}, [createVNode("span", {
										class: "i-lucide:lightbulb w-3 h-3",
										"aria-hidden": "true"
									})], 8, ["aria-label"])];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (getVulnerableDepInfo(dep)) _push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, getVulnerableDepInfo(dep).version),
								class: ["shrink-0", unref(SEVERITY_TEXT_COLORS)[unref(getHighestSeverity)(getVulnerableDepInfo(dep).counts)]],
								title: `${getVulnerableDepInfo(dep).counts.total} vulnerabilities`,
								classicon: "i-lucide:shield-check"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.dependencies.view_vulnerabilities"))}</span>`);
									else return [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.dependencies.view_vulnerabilities")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (getDeprecatedDepInfo(dep)) _push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, getDeprecatedDepInfo(dep).version),
								class: "shrink-0 text-purple-700 dark:text-purple-500",
								title: getDeprecatedDepInfo(dep).message,
								classicon: "i-lucide:octagon-alert"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.deprecated.label"))}</span>`);
									else return [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.deprecated.label")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, version),
								class: ["block truncate", getDepVersionClass(dep)],
								title: getDepVersionTooltip(dep, version)
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
						if (unref(sortedDependencies).length > 10 && !unref(depsExpanded)) _push(`<button type="button" class="my-2 ms-1 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedDependencies).length) }, unref(sortedDependencies).length))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "px-1 space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedDependencies).slice(0, unref(depsExpanded) ? void 0 : 10), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-1 text-sm gap-2"
						}, [createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
							class: "block truncate",
							dir: "ltr"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode("span", {
							class: "flex items-center gap-1 max-w-[40%]",
							dir: "ltr"
						}, [
							unref(outdatedDeps)[dep] ? (openBlock(), createBlock(_component_TooltipApp, {
								key: 0,
								class: ["shrink-0", unref(getVersionClass)(unref(outdatedDeps)[dep])],
								text: unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)
							}, {
								default: withCtx(() => [createVNode("button", {
									type: "button",
									class: "p-2 -m-2",
									"aria-label": unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)
								}, [createVNode("span", {
									class: "i-lucide:circle-alert w-3 h-3",
									"aria-hidden": "true"
								})], 8, ["aria-label"])]),
								_: 2
							}, 1032, ["class", "text"])) : createCommentVNode("", true),
							unref(replacementDeps)[dep] ? (openBlock(), createBlock(_component_TooltipApp, {
								key: 1,
								class: "shrink-0 text-amber-700 dark:text-amber-500",
								text: _ctx.$t("package.dependencies.has_replacement")
							}, {
								default: withCtx(() => [createVNode("button", {
									type: "button",
									class: "p-2 -m-2",
									"aria-label": _ctx.$t("package.dependencies.has_replacement")
								}, [createVNode("span", {
									class: "i-lucide:lightbulb w-3 h-3",
									"aria-hidden": "true"
								})], 8, ["aria-label"])]),
								_: 1
							}, 8, ["text"])) : createCommentVNode("", true),
							getVulnerableDepInfo(dep) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 2,
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, getVulnerableDepInfo(dep).version),
								class: ["shrink-0", unref(SEVERITY_TEXT_COLORS)[unref(getHighestSeverity)(getVulnerableDepInfo(dep).counts)]],
								title: `${getVulnerableDepInfo(dep).counts.total} vulnerabilities`,
								classicon: "i-lucide:shield-check"
							}, {
								default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.dependencies.view_vulnerabilities")), 1)]),
								_: 1
							}, 8, [
								"to",
								"class",
								"title"
							])) : createCommentVNode("", true),
							getDeprecatedDepInfo(dep) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 3,
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, getDeprecatedDepInfo(dep).version),
								class: "shrink-0 text-purple-700 dark:text-purple-500",
								title: getDeprecatedDepInfo(dep).message,
								classicon: "i-lucide:octagon-alert"
							}, {
								default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("package.deprecated.label")), 1)]),
								_: 1
							}, 8, ["to", "title"])) : createCommentVNode("", true),
							createVNode(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, version),
								class: ["block truncate", getDepVersionClass(dep)],
								title: getDepVersionTooltip(dep, version)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
								_: 2
							}, 1032, [
								"to",
								"class",
								"title"
							]),
							unref(outdatedDeps)[dep] ? (openBlock(), createBlock("span", {
								key: 4,
								class: "sr-only"
							}, " (" + toDisplayString(unref(getOutdatedTooltip)(unref(outdatedDeps)[dep], _ctx.$t)) + ") ", 1)) : createCommentVNode("", true),
							getVulnerableDepInfo(dep) ? (openBlock(), createBlock("span", {
								key: 5,
								class: "sr-only"
							}, " (" + toDisplayString(getVulnerableDepInfo(dep).counts.total) + " vulnerabilities) ", 1)) : createCommentVNode("", true)
						])]);
					}), 128))], 8, ["aria-label"]), unref(sortedDependencies).length > 10 && !unref(depsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "my-2 ms-1 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
						onClick: ($event) => depsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedDependencies).length) }, unref(sortedDependencies).length)), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(sortedPeerDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "peer-dependencies",
				title: _ctx.$t("package.peer_dependencies.title", { count: unref(numberFormatter).format(unref(sortedPeerDependencies).length) })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="px-1 space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.peer_dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedPeerDependencies).slice(0, unref(peerDepsExpanded) ? void 0 : 10), (peer) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-1 min-w-0"${_scopeId}><div class="flex items-center gap-1 min-w-0 flex-1"${_scopeId}>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(peer.name),
								class: "block truncate",
								dir: "ltr"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(peer.name)}`);
									else return [createTextVNode(toDisplayString(peer.name), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							if (peer.optional) _push(ssrRenderComponent(_component_TagStatic, { title: _ctx.$t("package.dependencies.optional") }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(_ctx.$t("package.dependencies.optional"))}`);
									else return [createTextVNode(toDisplayString(_ctx.$t("package.dependencies.optional")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(peer.name, peer.version),
								class: "block truncate max-w-[40%]",
								title: peer.version,
								dir: "ltr"
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
						if (unref(sortedPeerDependencies).length > 10 && !unref(peerDepsExpanded)) _push(`<button type="button" class="mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70"${_scopeId}>${ssrInterpolate(_ctx.$t("package.peer_dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedPeerDependencies).length) }, unref(sortedPeerDependencies).length))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "px-1 space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.peer_dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedPeerDependencies).slice(0, unref(peerDepsExpanded) ? void 0 : 10), (peer) => {
						return openBlock(), createBlock("li", {
							key: peer.name,
							class: "flex items-center justify-between py-1 text-sm gap-1 min-w-0"
						}, [createVNode("div", { class: "flex items-center gap-1 min-w-0 flex-1" }, [createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(peer.name),
							class: "block truncate",
							dir: "ltr"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(peer.name), 1)]),
							_: 2
						}, 1032, ["to"]), peer.optional ? (openBlock(), createBlock(_component_TagStatic, {
							key: 0,
							title: _ctx.$t("package.dependencies.optional")
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("package.dependencies.optional")), 1)]),
							_: 1
						}, 8, ["title"])) : createCommentVNode("", true)]), createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(peer.name, peer.version),
							class: "block truncate max-w-[40%]",
							title: peer.version,
							dir: "ltr"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(peer.version), 1)]),
							_: 2
						}, 1032, ["to", "title"])]);
					}), 128))], 8, ["aria-label"]), unref(sortedPeerDependencies).length > 10 && !unref(peerDepsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "mt-2 font-mono text-xs text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70",
						onClick: ($event) => peerDepsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.peer_dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedPeerDependencies).length) }, unref(sortedPeerDependencies).length)), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(sortedOptionalDependencies).length > 0) _push(ssrRenderComponent(_component_CollapsibleSection, {
				id: "optional-dependencies",
				title: _ctx.$t("package.optional_dependencies.title", { count: unref(numberFormatter).format(unref(sortedOptionalDependencies).length) }, unref(sortedOptionalDependencies).length)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="px-1 space-y-1 list-none m-0"${ssrRenderAttr("aria-label", _ctx.$t("package.optional_dependencies.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(sortedOptionalDependencies).slice(0, unref(optionalDepsExpanded) ? void 0 : 10), ([dep, version]) => {
							_push(`<li class="flex items-center justify-between py-1 text-sm gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
								class: "block truncate",
								dir: "ltr"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(dep)}`);
									else return [createTextVNode(toDisplayString(dep), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, version),
								class: "block truncate",
								title: version,
								dir: "ltr"
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
						if (unref(sortedOptionalDependencies).length > 10 && !unref(optionalDepsExpanded)) _push(`<button type="button" class="mt-2 truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("package.optional_dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedOptionalDependencies).length) }, unref(sortedOptionalDependencies).length))}</button>`);
						else _push(`<!---->`);
					} else return [createVNode("ul", {
						class: "px-1 space-y-1 list-none m-0",
						"aria-label": _ctx.$t("package.optional_dependencies.list_label")
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(sortedOptionalDependencies).slice(0, unref(optionalDepsExpanded) ? void 0 : 10), ([dep, version]) => {
						return openBlock(), createBlock("li", {
							key: dep,
							class: "flex items-center justify-between py-1 text-sm gap-2"
						}, [createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep),
							class: "block truncate",
							dir: "ltr"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep), 1)]),
							_: 2
						}, 1032, ["to"]), createVNode(_component_LinkBase, {
							to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(dep, version),
							class: "block truncate",
							title: version,
							dir: "ltr"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
							_: 2
						}, 1032, ["to", "title"])]);
					}), 128))], 8, ["aria-label"]), unref(sortedOptionalDependencies).length > 10 && !unref(optionalDepsExpanded) ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "mt-2 truncate",
						onClick: ($event) => optionalDepsExpanded.value = true
					}, toDisplayString(_ctx.$t("package.optional_dependencies.show_all", { count: unref(numberFormatter).format(unref(sortedOptionalDependencies).length) }, unref(sortedOptionalDependencies).length)), 9, ["onClick"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$3 = Dependencies_vue_vue_type_script_setup_true_lang_default.setup;
Dependencies_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Dependencies.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Dependencies_default = Object.assign(Dependencies_vue_vue_type_script_setup_true_lang_default, { __name: "PackageDependencies" });
var Keywords_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Keywords",
	__ssrInlineRender: true,
	props: { keywords: {} },
	setup(__props) {
		const { model } = useGlobalSearch();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CollapsibleSection = CollapsibleSection_default;
			const _component_LinkBase = Base_default;
			if (__props.keywords?.length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				title: _ctx.$t("package.keywords_title"),
				id: "keywords"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="flex flex-wrap gap-1.5 list-none m-0 p-1"${_scopeId}><!--[-->`);
						ssrRenderList(__props.keywords.slice(0, 15), (keyword) => {
							_push(`<li${_scopeId}>`);
							_push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								size: "small",
								to: {
									name: "search",
									query: { q: `keyword:${keyword}` }
								},
								onClick: ($event) => model.value = `keyword:${keyword}`
							}, {
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
						return openBlock(), createBlock("li", { key: keyword }, [createVNode(_component_LinkBase, {
							variant: "button-secondary",
							size: "small",
							to: {
								name: "search",
								query: { q: `keyword:${keyword}` }
							},
							onClick: ($event) => model.value = `keyword:${keyword}`
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(keyword), 1)]),
							_: 2
						}, 1032, ["to", "onClick"])]);
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
			const _component_LinkBase = Base_default;
			const _component_ButtonBase = Base_default$1;
			const _component_InputBase = Base_default$1$1;
			if (__props.maintainers?.length) _push(ssrRenderComponent(_component_CollapsibleSection, mergeProps({
				id: "maintainers",
				title: _ctx.$t("package.maintainers.title")
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-2 list-none m-0 p-0 my-1 px-1"${ssrRenderAttr("aria-label", _ctx.$t("package.maintainers.list_label"))}${_scopeId}><!--[-->`);
						ssrRenderList(unref(visibleMaintainers), (maintainer) => {
							_push(`<li class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2 min-w-0"${_scopeId}>`);
							if (maintainer.name) _push(ssrRenderComponent(_component_LinkBase, {
								to: {
									name: "~username",
									params: { username: maintainer.name }
								},
								class: "link-subtle text-sm shrink-0",
								dir: "ltr"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` ~${ssrInterpolate(maintainer.name)}`);
									else return [createTextVNode(" ~" + toDisplayString(maintainer.name), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<span class="font-mono text-sm text-fg-muted" dir="ltr"${_scopeId}>${ssrInterpolate(maintainer.email)}</span>`);
							if (unref(isConnected) && maintainer.accessVia?.length && !unref(isLoadingAccess)) _push(`<span class="text-xs text-fg-subtle truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.via", { teams: maintainer.accessVia.join(", ") }))}</span>`);
							else _push(`<!---->`);
							if (unref(canManageOwners) && maintainer.name === unref(npmUser)) _push(`<span class="text-xs text-fg-subtle shrink-0"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.you"))}</span>`);
							else _push(`<!---->`);
							_push(`</div>`);
							if (unref(canManageOwners) && maintainer.name && maintainer.name !== unref(npmUser)) _push(ssrRenderComponent(_component_ButtonBase, {
								type: "button",
								class: "hover:text-red-400",
								"aria-label": _ctx.$t("package.maintainers.remove_owner", { name: maintainer.name }),
								onClick: ($event) => handleRemoveOwner(maintainer.name)
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="i-lucide:x w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span>`);
									else return [createVNode("span", {
										class: "i-lucide:x w-3.5 h-3.5",
										"aria-hidden": "true"
									})];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
						if (!unref(canManageOwners) && unref(hiddenMaintainersCount) > 0) _push(ssrRenderComponent(_component_ButtonBase, { onClick: ($event) => showAllMaintainers.value = !unref(showAllMaintainers) }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(showAllMaintainers) ? _ctx.$t("package.maintainers.show_less") : _ctx.$t("package.maintainers.show_more", { count: unref(hiddenMaintainersCount) }))}`);
								else return [createTextVNode(toDisplayString(unref(showAllMaintainers) ? _ctx.$t("package.maintainers.show_less") : _ctx.$t("package.maintainers.show_more", { count: unref(hiddenMaintainersCount) })), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if (unref(canManageOwners)) {
							_push(`<div class="mt-3"${_scopeId}>`);
							if (unref(showAddOwner)) {
								_push(`<div${_scopeId}><form class="flex items-center gap-2"${_scopeId}><label for="add-owner-username" class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.maintainers.username_to_add"))}</label>`);
								_push(ssrRenderComponent(_component_InputBase, {
									id: "add-owner-username",
									modelValue: unref(newOwnerUsername),
									"onUpdate:modelValue": ($event) => isRef(newOwnerUsername) ? newOwnerUsername.value = $event : null,
									type: "text",
									name: "add-owner-username",
									placeholder: _ctx.$t("package.maintainers.username_placeholder"),
									"no-correct": "",
									class: "flex-1 min-w-25 m-1",
									size: "small"
								}, null, _parent, _scopeId));
								_push(ssrRenderComponent(_component_ButtonBase, {
									type: "submit",
									disabled: !unref(newOwnerUsername).trim() || unref(isAdding)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(unref(isAdding) ? "…" : _ctx.$t("package.maintainers.add_button"))}`);
										else return [createTextVNode(toDisplayString(unref(isAdding) ? "…" : _ctx.$t("package.maintainers.add_button")), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_ButtonBase, {
									"aria-label": _ctx.$t("package.maintainers.cancel_add"),
									onClick: ($event) => showAddOwner.value = false,
									classicon: "i-lucide:x"
								}, null, _parent, _scopeId));
								_push(`</form></div>`);
							} else _push(ssrRenderComponent(_component_ButtonBase, {
								type: "button",
								onClick: ($event) => showAddOwner.value = true
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(_ctx.$t("package.maintainers.add_owner"))}`);
									else return [createTextVNode(toDisplayString(_ctx.$t("package.maintainers.add_owner")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
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
								maintainer.name ? (openBlock(), createBlock(_component_LinkBase, {
									key: 0,
									to: {
										name: "~username",
										params: { username: maintainer.name }
									},
									class: "link-subtle text-sm shrink-0",
									dir: "ltr"
								}, {
									default: withCtx(() => [createTextVNode(" ~" + toDisplayString(maintainer.name), 1)]),
									_: 2
								}, 1032, ["to"])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "font-mono text-sm text-fg-muted",
									dir: "ltr"
								}, toDisplayString(maintainer.email), 1)),
								unref(isConnected) && maintainer.accessVia?.length && !unref(isLoadingAccess) ? (openBlock(), createBlock("span", {
									key: 2,
									class: "text-xs text-fg-subtle truncate"
								}, toDisplayString(_ctx.$t("package.maintainers.via", { teams: maintainer.accessVia.join(", ") })), 1)) : createCommentVNode("", true),
								unref(canManageOwners) && maintainer.name === unref(npmUser) ? (openBlock(), createBlock("span", {
									key: 3,
									class: "text-xs text-fg-subtle shrink-0"
								}, toDisplayString(_ctx.$t("package.maintainers.you")), 1)) : createCommentVNode("", true)
							]), unref(canManageOwners) && maintainer.name && maintainer.name !== unref(npmUser) ? (openBlock(), createBlock(_component_ButtonBase, {
								key: 0,
								type: "button",
								class: "hover:text-red-400",
								"aria-label": _ctx.$t("package.maintainers.remove_owner", { name: maintainer.name }),
								onClick: ($event) => handleRemoveOwner(maintainer.name)
							}, {
								default: withCtx(() => [createVNode("span", {
									class: "i-lucide:x w-3.5 h-3.5",
									"aria-hidden": "true"
								})]),
								_: 1
							}, 8, ["aria-label", "onClick"])) : createCommentVNode("", true)]);
						}), 128))], 8, ["aria-label"]),
						!unref(canManageOwners) && unref(hiddenMaintainersCount) > 0 ? (openBlock(), createBlock(_component_ButtonBase, {
							key: 0,
							onClick: ($event) => showAllMaintainers.value = !unref(showAllMaintainers)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(showAllMaintainers) ? _ctx.$t("package.maintainers.show_less") : _ctx.$t("package.maintainers.show_more", { count: unref(hiddenMaintainersCount) })), 1)]),
							_: 1
						}, 8, ["onClick"])) : createCommentVNode("", true),
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
							createVNode(_component_InputBase, {
								id: "add-owner-username",
								modelValue: unref(newOwnerUsername),
								"onUpdate:modelValue": ($event) => isRef(newOwnerUsername) ? newOwnerUsername.value = $event : null,
								type: "text",
								name: "add-owner-username",
								placeholder: _ctx.$t("package.maintainers.username_placeholder"),
								"no-correct": "",
								class: "flex-1 min-w-25 m-1",
								size: "small"
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"placeholder"
							]),
							createVNode(_component_ButtonBase, {
								type: "submit",
								disabled: !unref(newOwnerUsername).trim() || unref(isAdding)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(isAdding) ? "…" : _ctx.$t("package.maintainers.add_button")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							createVNode(_component_ButtonBase, {
								"aria-label": _ctx.$t("package.maintainers.cancel_add"),
								onClick: ($event) => showAddOwner.value = false,
								classicon: "i-lucide:x"
							}, null, 8, ["aria-label", "onClick"])
						], 32)])) : (openBlock(), createBlock(_component_ButtonBase, {
							key: 1,
							type: "button",
							onClick: ($event) => showAddOwner.value = true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("package.maintainers.add_owner")), 1)]),
							_: 1
						}, 8, ["onClick"]))])) : createCommentVNode("", true)
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
var TRUST_RANK = {
	none: 0,
	provenance: 1,
	trustedPublisher: 2
};
function resolveTrustLevel(version) {
	if (version.trustLevel) return version.trustLevel;
	return version.hasProvenance ? "provenance" : "none";
}
function toTimestamp(time) {
	if (!time) return NaN;
	return Date.parse(time);
}
function sortByRecency(a, b) {
	const aValid = !Number.isNaN(a.timestamp);
	const bValid = !Number.isNaN(b.timestamp);
	if (!aValid && !bValid) {
		const semverOrder = compare(b.version, a.version);
		if (semverOrder !== 0) return semverOrder;
		return a.index - b.index;
	}
	if (aValid !== bValid) return aValid ? -1 : 1;
	return b.timestamp - a.timestamp;
}
/**
* Detects a security downgrade for a specific viewed version.
* A version is considered downgraded when it has no provenance and
* there exists an older trusted release.
*/
function detectPublishSecurityDowngradeForVersion(versions, viewedVersion) {
	if (versions.length < 2 || !viewedVersion) return null;
	const sorted = versions.map((version, index) => {
		const resolvedTrustLevel = resolveTrustLevel(version);
		return {
			...version,
			index,
			timestamp: toTimestamp(version.time),
			trustRank: TRUST_RANK[resolvedTrustLevel],
			resolvedTrustLevel
		};
	}).sort(sortByRecency);
	const currentIndex = sorted.findIndex((version) => version.version === viewedVersion);
	if (currentIndex === -1) return null;
	const current = sorted[currentIndex];
	if (!current) return null;
	const currentMajor = major(current.version);
	let strongestOlderAny = null;
	let strongestOlderSameMajor = null;
	for (const version of sorted.slice(currentIndex + 1)) {
		if (version.deprecated) continue;
		if (!strongestOlderAny || version.trustRank > strongestOlderAny.trustRank) strongestOlderAny = version;
		if (major(version.version) === currentMajor) {
			if (!strongestOlderSameMajor || version.trustRank > strongestOlderSameMajor.trustRank) strongestOlderSameMajor = version;
		}
	}
	const strongestOlder = strongestOlderSameMajor ?? strongestOlderAny;
	if (!strongestOlder || strongestOlder.trustRank <= current.trustRank) return null;
	const recommendation = strongestOlderSameMajor;
	return {
		downgradedVersion: current.version,
		downgradedPublishedAt: current.time,
		downgradedTrustLevel: current.resolvedTrustLevel,
		trustedVersion: recommendation?.version,
		trustedPublishedAt: recommendation?.time,
		trustedTrustLevel: strongestOlder.resolvedTrustLevel
	};
}
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
/**
* Redirect user to ATProto authentication
*/
async function authRedirect(identifier, options = {}) {
	let query = {
		handle: identifier,
		locale: options.locale || "en"
	};
	if (options.create) query = {
		...query,
		create: "true"
	};
	if (options.redirectTo) query = {
		...query,
		returnTo: options.redirectTo
	};
	await navigateTo({
		path: "/api/auth/atproto",
		query
	}, { external: true });
}
async function handleAuthError(fetchError, userHandle) {
	if (fetchError?.data?.message === ERROR_NEED_REAUTH && userHandle) await authRedirect(userHandle);
	throw fetchError;
}
/**
* Like a package via the API
*/
async function likePackage(packageName, userHandle) {
	try {
		return {
			success: true,
			data: await $fetch("/api/social/like", {
				method: "POST",
				body: { packageName }
			})
		};
	} catch (e) {
		if (e instanceof FetchError) await handleAuthError(e, userHandle);
		return {
			success: false,
			error: e
		};
	}
}
/**
* Unlike a package via the API
*/
async function unlikePackage(packageName, userHandle) {
	try {
		return {
			success: true,
			data: await $fetch("/api/social/like", {
				method: "DELETE",
				body: { packageName }
			})
		};
	} catch (e) {
		if (e instanceof FetchError) await handleAuthError(e, userHandle);
		return {
			success: false,
			error: e
		};
	}
}
/**
* Toggle like status for a package
*/
async function togglePackageLike(packageName, currentlyLiked, userHandle) {
	return currentlyLiked ? unlikePackage(packageName, userHandle) : likePackage(packageName, userHandle);
}
var SIZE_INCREASE_THRESHOLD = .25;
var DEP_INCREASE_THRESHOLD = 5;
function getComparisonVersion(pkg, resolvedVersion) {
	if (prerelease(resolvedVersion) !== null) {
		const latest = pkg["dist-tags"]?.latest;
		if (!latest || latest === resolvedVersion) return null;
		return latest;
	}
	const stableVersions = Object.keys(pkg.time).filter((v) => v !== "modified" && v !== "created" && valid(v) !== null && prerelease(v) === null).sort((a, b) => compare(a, b));
	const currentIdx = stableVersions.indexOf(resolvedVersion);
	if (currentIdx <= 0) return null;
	return stableVersions[currentIdx - 1];
}
function useInstallSizeDiff(packageName, resolvedVersion, pkg, currentInstallSize) {
	const comparisonVersion = computed(() => {
		const pkgVal = toValue(pkg);
		const version = toValue(resolvedVersion);
		if (!pkgVal || !version) return null;
		return getComparisonVersion(pkgVal, version);
	});
	const { data: comparisonInstallSize, status: comparisonStatus, execute: fetchComparisonSize } = useLazyFetch(() => {
		const v = comparisonVersion.value;
		if (!v) return "";
		return `/api/registry/install-size/${toValue(packageName)}/v/${v}`;
	}, {
		server: false,
		immediate: false,
		default: () => null
	}, "$3xFMTFMcdB");
	return {
		diff: computed(() => {
			const current = toValue(currentInstallSize);
			const previous = comparisonInstallSize.value;
			const cv = comparisonVersion.value;
			if (!current || !previous || !cv) return null;
			const name = toValue(packageName);
			const version = toValue(resolvedVersion);
			if (previous.version !== cv || previous.package !== name) return null;
			if (current.version !== version || current.package !== name) return null;
			const sizeRatio = previous.totalSize > 0 ? (current.totalSize - previous.totalSize) / previous.totalSize : 0;
			const depDiff = current.dependencyCount - previous.dependencyCount;
			const sizeThresholdExceeded = sizeRatio > SIZE_INCREASE_THRESHOLD;
			const depThresholdExceeded = depDiff > DEP_INCREASE_THRESHOLD;
			if (!sizeThresholdExceeded && !depThresholdExceeded) return null;
			return {
				comparisonVersion: cv,
				sizeRatio,
				sizeIncrease: current.totalSize - previous.totalSize,
				currentSize: current.totalSize,
				previousSize: previous.totalSize,
				depDiff,
				currentDeps: current.dependencyCount,
				previousDeps: previous.dependencyCount,
				sizeThresholdExceeded,
				depThresholdExceeded
			};
		}),
		comparisonVersion,
		comparisonStatus
	};
}
/**
* Parse package name and optional version from the route URL.
*
* Routes use structured params:
*   /package/nuxt → org: undefined, name: "nuxt"
*   /package/@nuxt/kit → org: "@nuxt", name: "kit"
*   /package/nuxt/v/4.2.0 → org: undefined, name: "nuxt", version: "4.2.0"
*   /package/@nuxt/kit/v/1.0.0 → org: "@nuxt", name: "kit", version: "1.0.0"
*/
function usePackageRoute() {
	const route = useRoute();
	return {
		packageName: computed(() => {
			const { org, name } = route.params;
			return org ? `${org}/${name}` : name;
		}),
		requestedVersion: computed(() => "version" in route.params ? route.params.version : null),
		orgName: computed(() => {
			const org = route.params.org;
			return org ? org.replace(/^@/, "") : null;
		})
	};
}
/**
* Composable for tracking the currently visible heading in a TOC.
* Uses IntersectionObserver to detect which heading is at the top of the viewport.
*
* @param toc - Reactive array of TOC items
* @returns Object containing activeId
*/
function useActiveTocItem(toc) {
	return { activeId: shallowRef(null) };
}
function useModuleReplacement(packageName) {
	return useLazyFetch(() => `/api/replacements/${toValue(packageName)}`, "$W7kFmyuEGB");
}
var easeOutQuad = (t) => t * (2 - t);
var SCROLL_TO_TOP_DURATION = 500;
/**
* Scroll to the top of the page with a smooth animation.
* @param options - Configuration options for the scroll animation.
* @returns An object containing the scrollToTop function and a cancel function.
*/
const useScrollToTop = createSharedComposable(function useScrollToTop() {
	const preferReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	/**
	* Active requestAnimationFrame id for the current auto-scroll animation
	*/
	let rafId = null;
	const isScrolling = ref(false);
	/**
	* Stop any in-flight auto-scroll before starting a new one.
	*/
	function cancel() {
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
		isScrolling.value = false;
	}
	function scrollToTop() {
		cancel();
		if (preferReducedMotion.value) {
			(void 0).scrollTo({
				top: 0,
				behavior: "instant"
			});
			return;
		}
		const start = (void 0).scrollY;
		if (start <= 0) return;
		isScrolling.value = true;
		const startTime = performance.now();
		const change = -start;
		function animate() {
			const elapsed = performance.now() - startTime;
			const t = Math.min(elapsed / SCROLL_TO_TOP_DURATION, 1);
			const y = start + change * easeOutQuad(t);
			(void 0).scrollTo({ top: y });
			if (t < 1 && isScrolling.value) rafId = requestAnimationFrame(animate);
			else cancel();
		}
		rafId = requestAnimationFrame(animate);
	}
	tryOnScopeDispose(cancel);
	return {
		scrollToTop,
		cancel,
		isTouchDeviceClient: shallowRef(false)
	};
});
var _name__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[name]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { t: $t } = useI18n();
		defineOgImageComponent("Package", {
			name: () => packageName.value,
			version: () => requestedVersion.value ?? "",
			primaryColor: "#60a5fa"
		});
		const router = useRouter();
		const header = useTemplateRef("header");
		const isHeaderPinned = shallowRef(false);
		const navExtraOffset = shallowRef(0);
		useMediaQuery("(max-width: 639.9px)");
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
		useIntersectionObserver(ref(null), ([entry]) => {
			if (!entry) return;
			navExtraOffset.value = entry.isIntersecting ? entry.intersectionRect.height : 0;
		}, {
			threshold: Array.from({ length: 11 }, (_, i) => i / 10),
			immediate: false
		});
		const navExtraOffsetStyle = computed(() => ({ "--package-nav-extra": `${navExtraOffset.value}px` }));
		const { packageName, requestedVersion, orgName } = usePackageRoute();
		assertValidPackageName(packageName.value);
		const { data: readmeData } = useLazyFetch(() => {
			const base = `/api/registry/readme/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, { default: () => ({
			html: "",
			mdExists: false,
			playgroundLinks: [],
			toc: [],
			defaultValue: true
		}) }, "$KqKCtcn_vW");
		const playgroundLinks = computed(() => [...readmeData.value.playgroundLinks, ...pkg.value?.storybook?.url ? [{
			url: pkg.value.storybook.url,
			provider: "storybook",
			providerName: "Storybook",
			label: "Storybook"
		}] : []]);
		const { data: readmeMarkdownData, status: readmeMarkdownStatus, execute: fetchReadmeMarkdown } = useLazyFetch(() => {
			const base = `/api/registry/readme/markdown/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, {
			server: false,
			immediate: false,
			default: () => ({})
		}, "$pk6Q1pbWax");
		const { copied: copiedReadme, copy: copyReadme } = useClipboard({
			source: () => "",
			copiedDuring: 2e3
		});
		function prefetchReadmeMarkdown() {
			if (readmeMarkdownStatus.value === "idle") fetchReadmeMarkdown();
		}
		async function copyReadmeHandler() {
			await fetchReadmeMarkdown();
			const markdown = readmeMarkdownData.value?.markdown;
			if (!markdown) return;
			await copyReadme(markdown);
		}
		const { activeId: activeTocId } = useActiveTocItem(computed(() => readmeData.value?.toc ?? []));
		const { data: jsrInfo } = useLazyFetch(() => `/api/jsr/${packageName.value}`, {
			default: () => ({ exists: false }),
			immediate: computed(() => packageName.value.startsWith("@")).value
		}, "$W_n-hQfa8V");
		const { data: installSize, status: installSizeStatus, execute: fetchInstallSize } = useLazyFetch(() => {
			const base = `/api/registry/install-size/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, {
			server: false,
			immediate: false
		}, "$fI8vFFJIrr");
		const { data: skillsData } = useLazyFetch(() => {
			const base = `/skills/${packageName.value}`;
			const version = requestedVersion.value;
			return version ? `${base}/v/${version}` : base;
		}, { default: () => ({
			package: "",
			version: "",
			skills: []
		}) }, "$GeVEIqpikU");
		const { data: packageAnalysis } = usePackageAnalysis(packageName, requestedVersion);
		const { data: moduleReplacement } = useModuleReplacement(packageName);
		const { data: resolvedVersion, status: resolvedStatus } = ([__temp, __restore] = withAsyncContext(() => useResolvedVersion(packageName, requestedVersion)), __temp = await __temp, __restore(), __temp);
		if (!resolvedVersion.value && ["success", "error"].includes(resolvedStatus.value)) throw createError$1({
			statusCode: 404,
			statusMessage: $t("package.not_found"),
			message: $t("package.not_found_message")
		});
		watch([resolvedStatus, resolvedVersion], ([status, version]) => {
			if (!version && status === "success" || status === "error") showError({
				statusCode: 404,
				statusMessage: $t("package.not_found"),
				message: $t("package.not_found_message")
			});
		}, { immediate: true });
		const { data: pkg, status, error } = usePackage(packageName, () => resolvedVersion.value ?? requestedVersion.value);
		const { diff: sizeDiff } = useInstallSizeDiff(packageName, resolvedVersion, pkg, installSize);
		const nuxtApp = useNuxtApp();
		useRoute();
		const hasEmptyPayload = false;
		const isSpaFallback = shallowRef(nuxtApp.isHydrating && hasEmptyPayload);
		const isHydratingWithServerContent = shallowRef(nuxtApp.isHydrating && hasEmptyPayload);
		const hasServerContentOnly = shallowRef(hasEmptyPayload);
		const serverRenderedHtml = shallowRef(hasServerContentOnly.value ? (void 0).getElementById("package-article")?.innerHTML ?? null : null);
		if (isSpaFallback.value || isHydratingWithServerContent.value) nuxtApp.hooks.hookOnce("app:suspense:resolve", () => {
			isSpaFallback.value = false;
			isHydratingWithServerContent.value = false;
		});
		const displayVersion = computed(() => pkg.value?.requestedVersion ?? null);
		const versionSecurityMetadata = computed(() => {
			if (!pkg.value) return [];
			if (pkg.value.securityVersions?.length) return pkg.value.securityVersions;
			return Object.entries(pkg.value.versions).map(([version, metadata]) => ({
				version,
				time: pkg.value?.time?.[version],
				hasProvenance: !!metadata.hasProvenance,
				trustLevel: metadata.trustLevel,
				deprecated: metadata.deprecated
			}));
		});
		const pkgDescription = useMarkdown(() => ({
			text: pkg.value?.description ?? "",
			packageName: pkg.value?.name
		}));
		const { copied: copiedPkgName, copy: copyPkgName } = useClipboard({
			source: packageName,
			copiedDuring: 2e3
		});
		const { copied: copiedVersion, copy: copyVersion } = useClipboard({
			source: () => resolvedVersion.value ?? "",
			copiedDuring: 2e3
		});
		const { scrollToTop, isTouchDeviceClient } = useScrollToTop();
		const { y: scrollY } = useScroll(void 0);
		const showScrollToTop = computed(() => isTouchDeviceClient.value && scrollY.value > 300);
		const { data: vulnTree, status: vulnTreeStatus } = useDependencyAnalysis(packageName, () => resolvedVersion.value ?? "");
		const { data: provenanceData, status: provenanceStatus, execute: fetchProvenance } = useLazyFetch(() => {
			const v = displayVersion.value;
			if (!v || !hasProvenance(v)) return "";
			return `/api/registry/provenance/${packageName.value}/v/${v.version}`;
		}, {
			default: () => null,
			server: false,
			immediate: false
		}, "$a7EY__RKQM");
		const isMounted = useMounted();
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
		const publishSecurityDowngrade = computed(() => {
			const currentVersion = displayVersion.value?.version;
			if (!currentVersion) return null;
			return detectPublishSecurityDowngradeForVersion(versionSecurityMetadata.value, currentVersion);
		});
		const installVersionOverride = computed(() => publishSecurityDowngrade.value?.trustedVersion ?? null);
		const downgradeFallbackInstallText = computed(() => {
			const d = publishSecurityDowngrade.value;
			if (!d?.trustedVersion) return null;
			if (d.trustedTrustLevel === "provenance") return $t("package.security_downgrade.fallback_install_provenance", { version: d.trustedVersion });
			if (d.trustedTrustLevel === "trustedPublisher") return $t("package.security_downgrade.fallback_install_trustedPublisher", { version: d.trustedVersion });
			return null;
		});
		const sizeTooltip = computed(() => {
			return [displayVersion.value && displayVersion.value.dist.unpackedSize && $t("package.stats.size_tooltip.unpacked", { size: bytesFormatter.format(displayVersion.value.dist.unpackedSize) }), installSize.value && installSize.value.dependencyCount && $t("package.stats.size_tooltip.total", {
				size: bytesFormatter.format(installSize.value.totalSize),
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
		const hasVulnerabilities = computed(() => vulnCount.value > 0);
		const totalDepsCount = computed(() => {
			if (vulnTree.value) return vulnTree.value.totalPackages ? vulnTree.value.totalPackages - 1 : 0;
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
			github: "i-simple-icons:github",
			gitlab: "i-simple-icons:gitlab",
			bitbucket: "i-simple-icons:bitbucket",
			codeberg: "i-simple-icons:codeberg",
			gitea: "i-simple-icons:gitea",
			forgejo: "i-simple-icons:forgejo",
			gitee: "i-simple-icons:gitee",
			sourcehut: "i-simple-icons:sourcehut",
			tangled: "i-custom:tangled",
			radicle: "i-lucide:network"
		};
		const repoProviderIcon = computed(() => {
			const provider = repoRef.value?.provider;
			if (!provider) return "i-simple-icons:github";
			return PROVIDER_ICONS[provider] ?? "i-lucide:code";
		});
		const homepageUrl = computed(() => {
			const homepage = displayVersion.value?.homepage;
			if (!homepage) return null;
			if (repositoryUrl.value && areUrlsEquivalent(homepage, repositoryUrl.value)) return null;
			return homepage;
		});
		const docsLink = computed(() => {
			if (!resolvedVersion.value) return null;
			return {
				name: "docs",
				params: { path: [
					pkg.value.name,
					"v",
					resolvedVersion.value
				] }
			};
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
		const authModal = useModal("auth-modal");
		const { data: likesData, status: likeStatus } = useFetch(() => `/api/social/likes/${packageName.value}`, {
			default: () => ({
				totalLikes: 0,
				userHasLiked: false
			}),
			server: false
		}, "$Q5rUFOtpa7");
		const isLoadingLikeData = computed(() => likeStatus.value === "pending" || likeStatus.value === "idle");
		const isLikeActionPending = shallowRef(false);
		const likeAction = async () => {
			if (user.value?.handle == null) {
				authModal.open();
				return;
			}
			if (isLikeActionPending.value) return;
			const currentlyLiked = likesData.value?.userHasLiked ?? false;
			const currentLikes = likesData.value?.totalLikes ?? 0;
			likesData.value = {
				totalLikes: currentlyLiked ? currentLikes - 1 : currentLikes + 1,
				userHasLiked: !currentlyLiked
			};
			isLikeActionPending.value = true;
			try {
				const result = await togglePackageLike(packageName.value, currentlyLiked, user.value?.handle);
				isLikeActionPending.value = false;
				if (result.success) likesData.value = result.data;
				else likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
			} catch {
				likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
				isLikeActionPending.value = false;
			}
		};
		const dependencyCount = computed(() => getDependencyCount(displayVersion.value));
		const numberFormatter = useNumberFormatter();
		const compactNumberFormatter = useCompactNumberFormatter();
		const bytesFormatter = useBytesFormatter();
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
		const codeLink = computed(() => {
			if (pkg.value == null || resolvedVersion.value == null) return null;
			const split = pkg.value.name.split("/");
			return {
				name: "code",
				params: {
					org: split.length === 2 ? split[0] : void 0,
					packageName: split.length === 2 ? split[1] : split[0],
					version: resolvedVersion.value,
					filePath: ""
				}
			};
		});
		const keyboardShortcuts = useKeyboardShortcuts();
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, ".") && !isEditableElement(e.target), (e) => {
			if (codeLink.value === null) return;
			e.preventDefault();
			navigateTo(codeLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "d") && !isEditableElement(e.target), (e) => {
			if (!docsLink.value) return;
			e.preventDefault();
			navigateTo(docsLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "c") && !isEditableElement(e.target), (e) => {
			if (!pkg.value) return;
			e.preventDefault();
			router.push({
				name: "compare",
				query: { packages: pkg.value.name }
			});
		});
		const showSkeleton = shallowRef(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageSkeleton = Skeleton_default;
			const _component_CopyToClipboardButton = CopyToClipboardButton_default;
			const _component_LinkBase = Base_default;
			const _component_TooltipApp = App_default;
			const _component_ButtonGroup = Group_default;
			const _component_ButtonBase = Base_default$1;
			const _component_PackageMetricsBadges = MetricsBadges_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_LicenseDisplay = LicenseDisplay_default;
			const _component_ClientOnly = client_only_default;
			const _component_DateTime = DateTime_default;
			const _component_PackageManagerSelect = ManagerSelect_default;
			const _component_TerminalExecute = Execute_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_TerminalInstall = Install_default;
			const _component_PackageReplacement = Replacement_default;
			const _component_PackageSizeIncrease = SizeIncrease_default;
			const _component_ReadmeTocDropdown = ReadmeTocDropdown_default;
			const _component_Readme = Readme_default;
			const _component_PackageProvenanceSection = PackageProvenanceSection_default;
			const _component_PackageSidebar = Sidebar_default;
			const _component_PackageAccessControls = AccessControls_default;
			const _component_PackageSkillsCard = SkillsCard_default;
			const _component_PackageWeeklyDownloadStats = WeeklyDownloadStats_default;
			const _component_PackagePlaygrounds = Playgrounds_default;
			const _component_PackageCompatibility = Compatibility_default;
			const _component_PackageVersions = Versions_default;
			const _component_PackageInstallScripts = InstallScripts_default;
			const _component_PackageDependencies = Dependencies_default;
			const _component_PackageKeywords = Keywords_default;
			const _component_PackageMaintainers = Maintainers_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 w-full py-8" }, _attrs))}>`);
			if (unref(isSpaFallback) || !unref(hasServerContentOnly) && (unref(showSkeleton) || unref(status) === "pending")) _push(ssrRenderComponent(_component_PackageSkeleton, null, null, _parent));
			else if (unref(isHydratingWithServerContent) || unref(hasServerContentOnly) && unref(serverRenderedHtml) && (!unref(pkg) || unref(readmeData)?.defaultValue)) _push(`<article id="package-article" class="${ssrRenderClass(_ctx.$style.packagePage)}">${unref(serverRenderedHtml) ?? ""}</article>`);
			else if (unref(pkg)) {
				_push(`<article id="package-article" class="${ssrRenderClass(_ctx.$style.packagePage)}"><header class="${ssrRenderClass([[_ctx.$style.areaHeader, { "border-b": unref(isHeaderPinned) }], "sticky top-14 z-1 bg-[--bg] py-2 border-border"])}"><div class="flex items-baseline gap-x-2 gap-y-1 sm:gap-x-3 flex-wrap min-w-0">`);
				_push(ssrRenderComponent(_component_CopyToClipboardButton, {
					copied: unref(copiedPkgName),
					"copy-text": unref($t)("package.copy_name"),
					class: "flex flex-col items-start min-w-0",
					onClick: ($event) => unref(copyPkgName)()
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<h1 class="font-mono text-2xl sm:text-3xl font-medium min-w-0 break-words"${ssrRenderAttr("title", unref(pkg).name)} dir="ltr"${_scopeId}>`);
							if (unref(orgName)) _push(ssrRenderComponent(_component_LinkBase, { to: {
								name: "org",
								params: { org: unref(orgName) }
							} }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` @${ssrInterpolate(unref(orgName))}`);
									else return [createTextVNode(" @" + toDisplayString(unref(orgName)), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(orgName)) _push(`<span${_scopeId}>/</span>`);
							else _push(`<!---->`);
							_push(`<span class="${ssrRenderClass({ "text-fg-muted": unref(orgName) })}"${_scopeId}>${ssrInterpolate(unref(orgName) ? unref(pkg).name.replace(`@${unref(orgName)}/`, "") : unref(pkg).name)}</span></h1>`);
						} else return [createVNode("h1", {
							class: "font-mono text-2xl sm:text-3xl font-medium min-w-0 break-words",
							title: unref(pkg).name,
							dir: "ltr"
						}, [
							unref(orgName) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 0,
								to: {
									name: "org",
									params: { org: unref(orgName) }
								}
							}, {
								default: withCtx(() => [createTextVNode(" @" + toDisplayString(unref(orgName)), 1)]),
								_: 1
							}, 8, ["to"])) : createCommentVNode("", true),
							unref(orgName) ? (openBlock(), createBlock("span", { key: 1 }, "/")) : createCommentVNode("", true),
							createVNode("span", { class: { "text-fg-muted": unref(orgName) } }, toDisplayString(unref(orgName) ? unref(pkg).name.replace(`@${unref(orgName)}/`, "") : unref(pkg).name), 3)
						], 8, ["title"])];
					}),
					_: 1
				}, _parent));
				if (unref(resolvedVersion)) _push(ssrRenderComponent(_component_CopyToClipboardButton, {
					copied: unref(copiedVersion),
					"copy-text": unref($t)("package.copy_version"),
					class: "inline-flex items-baseline gap-1.5 font-mono text-base sm:text-lg text-fg-muted shrink-0",
					onClick: ($event) => unref(copyVersion)()
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion)) _push(`<!--[--><span class="font-mono text-fg-muted text-sm" dir="ltr"${_scopeId}>${ssrInterpolate(unref(requestedVersion))}</span><span class="i-lucide:arrow-right rtl-flip w-3 h-3" aria-hidden="true"${_scopeId}></span><!--]-->`);
							else _push(`<!---->`);
							if (unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion)) _push(ssrRenderComponent(_component_LinkBase, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(pkg).name, unref(resolvedVersion)),
								title: unref($t)("package.view_permalink"),
								dir: "ltr"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(unref(resolvedVersion))}`);
									else return [createTextVNode(toDisplayString(unref(resolvedVersion)), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<span dir="ltr"${_scopeId}>v${ssrInterpolate(unref(resolvedVersion))}</span>`);
							if (hasProvenance(unref(displayVersion))) _push(ssrRenderComponent(_component_TooltipApp, {
								text: unref(provenanceData) && unref(provenanceStatus) !== "pending" ? unref($t)("package.provenance_section.built_and_signed_on", { provider: unref(provenanceData).providerLabel }) : unref($t)("package.verified_provenance"),
								position: "bottom",
								strategy: "fixed"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_component_LinkBase, {
										variant: "button-secondary",
										size: "small",
										to: "#provenance",
										"aria-label": unref($t)("package.provenance_section.view_more_details"),
										classicon: "i-lucide:shield-check"
									}, null, _parent, _scopeId));
									else return [createVNode(_component_LinkBase, {
										variant: "button-secondary",
										size: "small",
										to: "#provenance",
										"aria-label": unref($t)("package.provenance_section.view_more_details"),
										classicon: "i-lucide:shield-check"
									}, null, 8, ["aria-label"])];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(requestedVersion) && unref(latestVersion) && unref(resolvedVersion) !== unref(latestVersion).version) _push(`<span class="text-fg-subtle text-sm shrink-0"${_scopeId}>${ssrInterpolate(unref($t)("package.not_latest"))}</span>`);
							else _push(`<!---->`);
						} else return [
							unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion) ? (openBlock(), createBlock(Fragment, { key: 0 }, [createVNode("span", {
								class: "font-mono text-fg-muted text-sm",
								dir: "ltr"
							}, toDisplayString(unref(requestedVersion)), 1), createVNode("span", {
								class: "i-lucide:arrow-right rtl-flip w-3 h-3",
								"aria-hidden": "true"
							})], 64)) : createCommentVNode("", true),
							unref(requestedVersion) && unref(resolvedVersion) !== unref(requestedVersion) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 1,
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(pkg).name, unref(resolvedVersion)),
								title: unref($t)("package.view_permalink"),
								dir: "ltr"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(resolvedVersion)), 1)]),
								_: 1
							}, 8, ["to", "title"])) : (openBlock(), createBlock("span", {
								key: 2,
								dir: "ltr"
							}, "v" + toDisplayString(unref(resolvedVersion)), 1)),
							hasProvenance(unref(displayVersion)) ? (openBlock(), createBlock(_component_TooltipApp, {
								key: 3,
								text: unref(provenanceData) && unref(provenanceStatus) !== "pending" ? unref($t)("package.provenance_section.built_and_signed_on", { provider: unref(provenanceData).providerLabel }) : unref($t)("package.verified_provenance"),
								position: "bottom",
								strategy: "fixed"
							}, {
								default: withCtx(() => [createVNode(_component_LinkBase, {
									variant: "button-secondary",
									size: "small",
									to: "#provenance",
									"aria-label": unref($t)("package.provenance_section.view_more_details"),
									classicon: "i-lucide:shield-check"
								}, null, 8, ["aria-label"])]),
								_: 1
							}, 8, ["text"])) : createCommentVNode("", true),
							unref(requestedVersion) && unref(latestVersion) && unref(resolvedVersion) !== unref(latestVersion).version ? (openBlock(), createBlock("span", {
								key: 4,
								class: "text-fg-subtle text-sm shrink-0"
							}, toDisplayString(unref($t)("package.not_latest")), 1)) : createCommentVNode("", true)
						];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(resolvedVersion)) _push(ssrRenderComponent(_component_ButtonGroup, {
					as: "nav",
					"aria-label": unref($t)("package.navigation"),
					class: ["hidden sm:flex max-sm:flex max-sm:fixed max-sm:z-40 max-sm:inset-is-1/2 max-sm:-translate-x-1/2 max-sm:rtl:translate-x-1/2 max-sm:bg-[--bg]/90 max-sm:backdrop-blur-md max-sm:border max-sm:border-border max-sm:rounded-md max-sm:shadow-md ms-auto", _ctx.$style.packageNav],
					style: unref(navExtraOffsetStyle)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (unref(docsLink)) _push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								to: unref(docsLink),
								"aria-keyshortcuts": "d",
								classicon: "i-lucide:file-text",
								title: unref($t)("package.links.docs")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="max-sm:sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.links.docs"))}</span>`);
									else return [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.docs")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(codeLink)) _push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								to: unref(codeLink),
								"aria-keyshortcuts": ".",
								classicon: "i-lucide:code",
								title: unref($t)("package.links.code")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="max-sm:sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.links.code"))}</span>`);
									else return [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.code")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								to: {
									name: "compare",
									query: { packages: unref(pkg).name }
								},
								"aria-keyshortcuts": "c",
								classicon: "i-lucide:git-compare",
								title: unref($t)("package.links.compare")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="max-sm:sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.links.compare"))}</span>`);
									else return [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.compare")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							if (unref(displayVersion) && unref(latestVersion) && unref(displayVersion).version !== unref(latestVersion).version) _push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								to: ("diffRoute" in _ctx ? _ctx.diffRoute : unref(diffRoute))(unref(pkg).name, unref(displayVersion).version, unref(latestVersion).version),
								classicon: "i-lucide:diff"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(unref($t)("compare.compare_versions"))}`);
									else return [createTextVNode(toDisplayString(unref($t)("compare.compare_versions")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(showScrollToTop)) _push(ssrRenderComponent(_component_ButtonBase, {
								variant: "secondary",
								title: unref($t)("common.scroll_to_top"),
								"aria-label": unref($t)("common.scroll_to_top"),
								onClick: () => unref(scrollToTop)(),
								classicon: "i-lucide:arrow-up"
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						} else return [
							unref(docsLink) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 0,
								variant: "button-secondary",
								to: unref(docsLink),
								"aria-keyshortcuts": "d",
								classicon: "i-lucide:file-text",
								title: unref($t)("package.links.docs")
							}, {
								default: withCtx(() => [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.docs")), 1)]),
								_: 1
							}, 8, ["to", "title"])) : createCommentVNode("", true),
							unref(codeLink) ? (openBlock(), createBlock(_component_LinkBase, {
								key: 1,
								variant: "button-secondary",
								to: unref(codeLink),
								"aria-keyshortcuts": ".",
								classicon: "i-lucide:code",
								title: unref($t)("package.links.code")
							}, {
								default: withCtx(() => [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.code")), 1)]),
								_: 1
							}, 8, ["to", "title"])) : createCommentVNode("", true),
							createVNode(_component_LinkBase, {
								variant: "button-secondary",
								to: {
									name: "compare",
									query: { packages: unref(pkg).name }
								},
								"aria-keyshortcuts": "c",
								classicon: "i-lucide:git-compare",
								title: unref($t)("package.links.compare")
							}, {
								default: withCtx(() => [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(unref($t)("package.links.compare")), 1)]),
								_: 1
							}, 8, ["to", "title"]),
							unref(displayVersion) && unref(latestVersion) && unref(displayVersion).version !== unref(latestVersion).version ? (openBlock(), createBlock(_component_LinkBase, {
								key: 2,
								variant: "button-secondary",
								to: ("diffRoute" in _ctx ? _ctx.diffRoute : unref(diffRoute))(unref(pkg).name, unref(displayVersion).version, unref(latestVersion).version),
								classicon: "i-lucide:diff"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("compare.compare_versions")), 1)]),
								_: 1
							}, 8, ["to"])) : createCommentVNode("", true),
							unref(showScrollToTop) ? (openBlock(), createBlock(_component_ButtonBase, {
								key: 3,
								variant: "secondary",
								title: unref($t)("common.scroll_to_top"),
								"aria-label": unref($t)("common.scroll_to_top"),
								onClick: () => unref(scrollToTop)(),
								classicon: "i-lucide:arrow-up"
							}, null, 8, [
								"title",
								"aria-label",
								"onClick"
							])) : createCommentVNode("", true)
						];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`<div class="basis-full flex gap-2 sm:gap-3 flex-wrap items-stretch">`);
				if (unref(resolvedVersion)) _push(ssrRenderComponent(_component_PackageMetricsBadges, {
					"package-name": unref(pkg).name,
					version: unref(resolvedVersion),
					"is-binary": unref(isBinaryOnly),
					class: "self-baseline"
				}, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_TooltipApp, {
					text: unref(isLoadingLikeData) ? unref($t)("common.loading") : unref(likesData)?.userHasLiked ? unref($t)("package.likes.unlike") : unref($t)("package.likes.like"),
					position: "bottom",
					class: "items-center",
					strategy: "fixed"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_ButtonBase, {
							onClick: likeAction,
							size: "small",
							"aria-label": unref(likesData)?.userHasLiked ? unref($t)("package.likes.unlike") : unref($t)("package.likes.like"),
							"aria-pressed": unref(likesData)?.userHasLiked,
							classicon: unref(likesData)?.userHasLiked ? "i-lucide:heart-minus text-red-500" : "i-lucide:heart-plus"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) if (unref(isLoadingLikeData)) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3 my-0.5" aria-hidden="true"${_scopeId}></span>`);
								else _push(`<span${_scopeId}>${ssrInterpolate(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0))}</span>`);
								else return [unref(isLoadingLikeData) ? (openBlock(), createBlock("span", {
									key: 0,
									class: "i-svg-spinners:ring-resize w-3 h-3 my-0.5",
									"aria-hidden": "true"
								})) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1))];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(_component_ButtonBase, {
							onClick: likeAction,
							size: "small",
							"aria-label": unref(likesData)?.userHasLiked ? unref($t)("package.likes.unlike") : unref($t)("package.likes.like"),
							"aria-pressed": unref(likesData)?.userHasLiked,
							classicon: unref(likesData)?.userHasLiked ? "i-lucide:heart-minus text-red-500" : "i-lucide:heart-plus"
						}, {
							default: withCtx(() => [unref(isLoadingLikeData) ? (openBlock(), createBlock("span", {
								key: 0,
								class: "i-svg-spinners:ring-resize w-3 h-3 my-0.5",
								"aria-hidden": "true"
							})) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1))]),
							_: 1
						}, 8, [
							"aria-label",
							"aria-pressed",
							"classicon"
						])];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></header><section class="${ssrRenderClass(_ctx.$style.areaDetails)}"><div class="mb-4"><div class="max-w-2xl">`);
				if (unref(pkgDescription)) _push(`<p class="text-fg-muted text-base m-0"><span>${unref(pkgDescription) ?? ""}</span></p>`);
				else _push(`<p class="text-fg-subtle text-base m-0 italic">${ssrInterpolate(unref($t)("package.no_description"))}</p>`);
				_push(`</div><ul class="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-4 list-none m-0 p-0 mt-3 text-sm">`);
				if (unref(repositoryUrl)) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(repositoryUrl),
						classicon: unref(repoProviderIcon)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) if (unref(repoRef)) _push(`<span${_scopeId}>${ssrInterpolate(unref(repoRef).owner)}<span class="opacity-50"${_scopeId}>/</span>${ssrInterpolate(unref(repoRef).repo)}</span>`);
							else _push(`<span${_scopeId}>${ssrInterpolate(unref($t)("package.links.repo"))}</span>`);
							else return [unref(repoRef) ? (openBlock(), createBlock("span", { key: 0 }, [
								createTextVNode(toDisplayString(unref(repoRef).owner), 1),
								createVNode("span", { class: "opacity-50" }, "/"),
								createTextVNode(toDisplayString(unref(repoRef).repo), 1)
							])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref($t)("package.links.repo")), 1))];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(repositoryUrl) && unref(repoMeta) && unref(starsLink)) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(starsLink),
						classicon: "i-lucide:star"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(compactNumberFormatter).format(unref(stars)))}`);
							else return [createTextVNode(toDisplayString(unref(compactNumberFormatter).format(unref(stars))), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(forks) && unref(forksLink)) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(forksLink),
						classicon: "i-lucide:git-fork"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref(compactNumberFormatter).format(unref(forks)))}`);
							else return [createTextVNode(toDisplayString(unref(compactNumberFormatter).format(unref(forks))), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`<li class="basis-full sm:hidden"></li>`);
				if (unref(homepageUrl)) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(homepageUrl),
						classicon: "i-lucide:link"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.homepage"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.homepage")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(displayVersion)?.bugs?.url) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(displayVersion).bugs.url,
						classicon: "i-lucide:circle-alert"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.issues"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.issues")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`<li>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: `https://www.npmjs.com/package/${unref(pkg).name}`,
					title: unref($t)("common.view_on_npm"),
					classicon: "i-simple-icons:npm"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` npm `);
						else return [createTextVNode(" npm ")];
					}),
					_: 1
				}, _parent));
				_push(`</li>`);
				if (unref(jsrInfo)?.exists && unref(jsrInfo).url) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(jsrInfo).url,
						title: unref($t)("badges.jsr.title"),
						classicon: "i-simple-icons:jsr"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.jsr"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.jsr")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(fundingUrl)) {
					_push(`<li>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(fundingUrl),
						classicon: "i-lucide:heart"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.fund"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.fund")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(docsLink) && unref(displayVersion)) {
					_push(`<li class="sm:hidden">`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(docsLink),
						classicon: "i-lucide:file-text"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.docs"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.docs")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				if (unref(resolvedVersion) && unref(codeLink)) {
					_push(`<li class="sm:hidden">`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: unref(codeLink),
						classicon: "i-lucide:code"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.links.code"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.links.code")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`<li class="sm:hidden">`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: {
						name: "compare",
						query: { packages: unref(pkg).name }
					},
					classicon: "i-lucide:git-compare"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("package.links.compare"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("package.links.compare")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</li>`);
				if (unref(displayVersion) && unref(latestVersion) && unref(displayVersion).version !== unref(latestVersion).version) {
					_push(`<li class="sm:hidden">`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: ("diffRoute" in _ctx ? _ctx.diffRoute : unref(diffRoute))(unref(pkg).name, unref(displayVersion).version, unref(latestVersion).version),
						class: "link-subtle font-mono text-sm inline-flex items-center gap-1.5"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="i-lucide:diff w-4 h-4" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(unref($t)("compare.compare_versions"))}`);
							else return [createVNode("span", {
								class: "i-lucide:diff w-4 h-4",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(unref($t)("compare.compare_versions")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`</ul></div>`);
				if (unref(deprecationNotice)) {
					_push(`<div class="border border-red-700 dark:border-red-400 bg-red-400/10 rounded-lg px-3 py-2 text-base text-red-700 dark:text-red-400"><h2 class="font-medium mb-2">${ssrInterpolate(unref(deprecationNotice).type === "package" ? unref($t)("package.deprecation.package") : unref($t)("package.deprecation.version"))}</h2>`);
					if (unref(deprecationNoticeMessage)) _push(`<p class="text-base m-0"><span>${unref(deprecationNoticeMessage) ?? ""}</span></p>`);
					else _push(`<p class="text-base m-0 italic">${ssrInterpolate(unref($t)("package.deprecation.no_reason"))}</p>`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<dl class="grid grid-cols-2 sm:grid-cols-7 md:grid-cols-11 gap-3 sm:gap-4 py-4 sm:py-6 mt-4 sm:mt-6 border-t border-b border-border"><div class="space-y-1 sm:col-span-2"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("package.stats.license"))}</dt><dd class="font-mono text-sm text-fg">`);
				if (unref(pkg).license) _push(ssrRenderComponent(_component_LicenseDisplay, { license: unref(pkg).license }, null, _parent));
				else _push(`<span>${ssrInterpolate(unref($t)("package.license.none"))}</span>`);
				_push(`</dd></div><div class="space-y-1 sm:col-span-2"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("package.stats.deps"))}</dt><dd class="font-mono text-sm text-fg flex items-center justify-start gap-2"><span class="flex items-center gap-1"><span class="text-fg-muted">${ssrInterpolate(unref(numberFormatter).format(unref(dependencyCount)))}</span>`);
				if (unref(dependencyCount) > 0 && unref(dependencyCount) !== unref(totalDepsCount)) {
					_push(`<!--[--><span class="text-fg-subtle">/</span>`);
					_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="text-fg-subtle"${_scopeId}>-</span>`);
						else return [createVNode("span", { class: "text-fg-subtle" }, "-")];
					}) }, _parent));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</span>`);
				if (unref(dependencyCount) > 0) _push(ssrRenderComponent(_component_ButtonGroup, { class: "ms-auto" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								size: "small",
								to: `https://npmgraph.js.org/?q=${unref(pkg).name}`,
								title: unref($t)("package.stats.view_dependency_graph"),
								classicon: "i-lucide:network -rotate-90"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.stats.view_dependency_graph"))}</span>`);
									else return [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.stats.view_dependency_graph")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_component_LinkBase, {
								variant: "button-secondary",
								size: "small",
								to: `https://node-modules.dev/grid/depth#install=${unref(pkg).name}${unref(resolvedVersion) ? `@${unref(resolvedVersion)}` : ""}`,
								title: unref($t)("package.stats.inspect_dependency_tree"),
								classicon: "i-lucide:table"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref($t)("package.stats.inspect_dependency_tree"))}</span>`);
									else return [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.stats.inspect_dependency_tree")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [createVNode(_component_LinkBase, {
							variant: "button-secondary",
							size: "small",
							to: `https://npmgraph.js.org/?q=${unref(pkg).name}`,
							title: unref($t)("package.stats.view_dependency_graph"),
							classicon: "i-lucide:network -rotate-90"
						}, {
							default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.stats.view_dependency_graph")), 1)]),
							_: 1
						}, 8, ["to", "title"]), createVNode(_component_LinkBase, {
							variant: "button-secondary",
							size: "small",
							to: `https://node-modules.dev/grid/depth#install=${unref(pkg).name}${unref(resolvedVersion) ? `@${unref(resolvedVersion)}` : ""}`,
							title: unref($t)("package.stats.inspect_dependency_tree"),
							classicon: "i-lucide:table"
						}, {
							default: withCtx(() => [createVNode("span", { class: "sr-only" }, toDisplayString(unref($t)("package.stats.inspect_dependency_tree")), 1)]),
							_: 1
						}, 8, ["to", "title"])];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</dd></div><div class="space-y-1 sm:col-span-3"><dt class="text-xs text-fg-subtle uppercase tracking-wider flex items-center gap-1">${ssrInterpolate(unref($t)("package.stats.install_size"))} `);
				_push(ssrRenderComponent(_component_TooltipApp, { text: unref(sizeTooltip) }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span tabindex="0" class="inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-subtle cursor-help focus-visible:outline-2 focus-visible:outline-accent/70 rounded"${_scopeId}><span class="i-lucide:info w-3 h-3" aria-hidden="true"${_scopeId}></span></span>`);
						else return [createVNode("span", {
							tabindex: "0",
							class: "inline-flex items-center justify-center min-w-6 min-h-6 -m-1 p-1 text-fg-subtle cursor-help focus-visible:outline-2 focus-visible:outline-accent/70 rounded"
						}, [createVNode("span", {
							class: "i-lucide:info w-3 h-3",
							"aria-hidden": "true"
						})])];
					}),
					_: 1
				}, _parent));
				_push(`</dt><dd class="font-mono text-sm text-fg"><span class="text-fg-muted" dir="ltr">`);
				if (unref(displayVersion)?.dist?.unpackedSize) _push(`<span>${ssrInterpolate(unref(bytesFormatter).format(unref(displayVersion).dist.unpackedSize))}</span>`);
				else _push(`<span>-</span>`);
				_push(`</span>`);
				if (unref(displayVersion)?.dist?.unpackedSize !== unref(installSize)?.totalSize) {
					_push(`<!--[--><span class="text-fg-subtle mx-1">/</span>`);
					if (unref(installSizeStatus) === "pending") _push(`<span class="inline-flex items-center gap-1 text-fg-subtle"><span class="i-svg-spinners:ring-resize w-3 h-3" aria-hidden="true"></span></span>`);
					else if (unref(installSize)?.totalSize) _push(`<span dir="ltr">${ssrInterpolate(unref(bytesFormatter).format(unref(installSize).totalSize))}</span>`);
					else _push(`<span class="text-fg-subtle">-</span>`);
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</dd></div><div class="space-y-1 sm:col-span-2"><dt class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("package.stats.vulns"))}</dt><dd class="font-mono text-sm text-fg">`);
				if (unref(vulnTreeStatus) === "pending" || unref(vulnTreeStatus) === "idle") _push(`<span class="inline-flex items-center gap-1 text-fg-subtle"><span class="i-svg-spinners:ring-resize w-3 h-3" aria-hidden="true"></span></span>`);
				else if (unref(vulnTreeStatus) === "success") {
					_push(`<span>`);
					if (unref(hasVulnerabilities)) _push(`<span class="text-amber-700 dark:text-amber-500">${ssrInterpolate(unref(numberFormatter).format(unref(vulnCount)))}</span>`);
					else _push(`<span class="inline-flex items-center gap-1 text-fg-muted"><span class="i-lucide:check w-3 h-3" aria-hidden="true"></span> ${ssrInterpolate(unref(numberFormatter).format(0))}</span>`);
					_push(`</span>`);
				} else _push(`<span class="text-fg-subtle">-</span>`);
				_push(`</dd></div>`);
				if (unref(resolvedVersion) && unref(pkg).time?.[unref(resolvedVersion)]) {
					_push(`<div class="space-y-1 sm:col-span-2"><dt class="text-xs text-fg-subtle uppercase tracking-wider"${ssrRenderAttr("title", unref($t)("package.stats.published_tooltip", {
						package: unref(pkg).name,
						version: unref(resolvedVersion)
					}))}>${ssrInterpolate(unref($t)("package.stats.published"))}</dt><dd class="font-mono text-sm text-fg">`);
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
					_push(`<section class="${ssrRenderClass([_ctx.$style.areaInstall, "scroll-mt-20"])}"><div class="flex flex-wrap items-center justify-between mb-3"><h2 id="run-heading" class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("package.run.title"))}</h2>`);
					_push(ssrRenderComponent(_component_PackageManagerSelect, null, null, _parent));
					_push(`</div><div>`);
					_push(ssrRenderComponent(_component_TerminalExecute, {
						"package-name": unref(pkg).name,
						"jsr-info": unref(jsrInfo),
						"is-create-package": unref(isCreatePkg)
					}, null, _parent));
					_push(`</div></section>`);
				} else {
					_push(`<section id="get-started" class="${ssrRenderClass([_ctx.$style.areaInstall, "scroll-mt-20"])}"><div class="flex flex-wrap items-center justify-between mb-3"><h2 id="get-started-heading" class="group text-xs text-fg-subtle uppercase tracking-wider">`);
					_push(ssrRenderComponent(_component_LinkBase, { to: "#get-started" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("package.get_started.title"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("package.get_started.title")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</h2>`);
					_push(ssrRenderComponent(_component_PackageManagerSelect, null, null, _parent));
					_push(`</div><div>`);
					if (unref(publishSecurityDowngrade)) {
						_push(`<div role="alert" class="mb-4 rounded-lg border border-amber-600/40 bg-amber-500/10 px-4 py-3 text-amber-700 dark:text-amber-400"><h3 class="m-0 flex items-center gap-2 font-mono text-sm font-medium"><span class="i-lucide:circle-alert w-4 h-4 shrink-0" aria-hidden="true"></span> ${ssrInterpolate(unref($t)("package.security_downgrade.title"))}</h3><p class="mt-2 mb-0 text-sm">`);
						if (unref(publishSecurityDowngrade).downgradedTrustLevel === "none" && unref(publishSecurityDowngrade).trustedTrustLevel === "provenance") _push(ssrRenderComponent(_component_i18n_t, {
							keypath: "package.security_downgrade.description_to_none_provenance",
							tag: "span",
							scope: "global"
						}, {
							provenance: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<a href="https://docs.npmjs.com/generating-provenance-statements" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"${_scopeId}>${ssrInterpolate(unref($t)("package.security_downgrade.provenance_link_text"))}<span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
								else return [createVNode("a", {
									href: "https://docs.npmjs.com/generating-provenance-statements",
									target: "_blank",
									rel: "noopener noreferrer",
									class: "inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"
								}, [createTextVNode(toDisplayString(unref($t)("package.security_downgrade.provenance_link_text")), 1), createVNode("span", {
									class: "i-lucide:external-link w-3 h-3",
									"aria-hidden": "true"
								})])];
							}),
							_: 1
						}, _parent));
						else if (unref(publishSecurityDowngrade).downgradedTrustLevel === "none" && unref(publishSecurityDowngrade).trustedTrustLevel === "trustedPublisher") _push(ssrRenderComponent(_component_i18n_t, {
							keypath: "package.security_downgrade.description_to_none_trustedPublisher",
							tag: "span",
							scope: "global"
						}, {
							trustedPublishing: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<a href="https://docs.npmjs.com/trusted-publishers" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"${_scopeId}>${ssrInterpolate(unref($t)("package.security_downgrade.trusted_publishing_link_text"))}<span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
								else return [createVNode("a", {
									href: "https://docs.npmjs.com/trusted-publishers",
									target: "_blank",
									rel: "noopener noreferrer",
									class: "inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"
								}, [createTextVNode(toDisplayString(unref($t)("package.security_downgrade.trusted_publishing_link_text")), 1), createVNode("span", {
									class: "i-lucide:external-link w-3 h-3",
									"aria-hidden": "true"
								})])];
							}),
							_: 1
						}, _parent));
						else if (unref(publishSecurityDowngrade).downgradedTrustLevel === "provenance" && unref(publishSecurityDowngrade).trustedTrustLevel === "trustedPublisher") _push(ssrRenderComponent(_component_i18n_t, {
							keypath: "package.security_downgrade.description_to_provenance_trustedPublisher",
							tag: "span",
							scope: "global"
						}, {
							provenance: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<a href="https://docs.npmjs.com/generating-provenance-statements" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"${_scopeId}>${ssrInterpolate(unref($t)("package.security_downgrade.provenance_link_text"))}<span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
								else return [createVNode("a", {
									href: "https://docs.npmjs.com/generating-provenance-statements",
									target: "_blank",
									rel: "noopener noreferrer",
									class: "inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"
								}, [createTextVNode(toDisplayString(unref($t)("package.security_downgrade.provenance_link_text")), 1), createVNode("span", {
									class: "i-lucide:external-link w-3 h-3",
									"aria-hidden": "true"
								})])];
							}),
							trustedPublishing: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<a href="https://docs.npmjs.com/trusted-publishers" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"${_scopeId}>${ssrInterpolate(unref($t)("package.security_downgrade.trusted_publishing_link_text"))}<span class="i-lucide:external-link w-3 h-3" aria-hidden="true"${_scopeId}></span></a>`);
								else return [createVNode("a", {
									href: "https://docs.npmjs.com/trusted-publishers",
									target: "_blank",
									rel: "noopener noreferrer",
									class: "inline-flex items-center gap-1 rounded-sm underline underline-offset-4 decoration-amber-600/60 dark:decoration-amber-400/50 hover:decoration-fg focus-visible:decoration-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 transition-colors"
								}, [createTextVNode(toDisplayString(unref($t)("package.security_downgrade.trusted_publishing_link_text")), 1), createVNode("span", {
									class: "i-lucide:external-link w-3 h-3",
									"aria-hidden": "true"
								})])];
							}),
							_: 1
						}, _parent));
						else _push(`<!---->`);
						_push(` ${ssrInterpolate(" ")} `);
						if (unref(downgradeFallbackInstallText)) _push(`<!--[-->${ssrInterpolate(unref(downgradeFallbackInstallText))}<!--]-->`);
						else _push(`<!---->`);
						_push(`</p></div>`);
					} else _push(`<!---->`);
					_push(ssrRenderComponent(_component_TerminalInstall, {
						"package-name": unref(pkg).name,
						"requested-version": unref(requestedVersion),
						"install-version-override": unref(installVersionOverride),
						"jsr-info": unref(jsrInfo),
						"dev-dependency-suggestion": unref(packageAnalysis)?.devDependencySuggestion,
						"types-package-name": unref(typesPackageName),
						"executable-info": unref(executableInfo),
						"create-package-info": unref(createPackageInfo)
					}, null, _parent));
					_push(`</div></section>`);
				}
				_push(`<div class="${ssrRenderClass([_ctx.$style.areaVulns, "space-y-6"])}">`);
				if (unref(moduleReplacement)) _push(ssrRenderComponent(_component_PackageReplacement, { replacement: unref(moduleReplacement) }, null, _parent));
				else _push(`<!---->`);
				if (unref(sizeDiff)) _push(ssrRenderComponent(_component_PackageSizeIncrease, { diff: unref(sizeDiff) }, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(`</div><section id="readme" class="${ssrRenderClass([_ctx.$style.areaReadme, "min-w-0 scroll-mt-20"])}"><div class="flex flex-wrap items-center justify-between mb-3 px-1"><h2 id="readme-heading" class="group text-xs text-fg-subtle uppercase tracking-wider">`);
				_push(ssrRenderComponent(_component_LinkBase, { to: "#readme" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("package.readme.title"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("package.readme.title")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</h2><div class="flex gap-2">`);
				if (unref(readmeData)?.mdExists) _push(ssrRenderComponent(_component_TooltipApp, {
					text: unref($t)("package.readme.copy_as_markdown"),
					position: "bottom"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_ButtonBase, {
							onMouseenter: prefetchReadmeMarkdown,
							onFocus: prefetchReadmeMarkdown,
							onClick: ($event) => copyReadmeHandler(),
							"aria-pressed": unref(copiedReadme),
							"aria-label": unref(copiedReadme) ? unref($t)("common.copied") : unref($t)("package.readme.copy_as_markdown"),
							classicon: unref(copiedReadme) ? "i-lucide:check" : "i-simple-icons:markdown"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(copiedReadme) ? unref($t)("common.copied") : unref($t)("common.copy"))}`);
								else return [createTextVNode(toDisplayString(unref(copiedReadme) ? unref($t)("common.copied") : unref($t)("common.copy")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(_component_ButtonBase, {
							onMouseenter: prefetchReadmeMarkdown,
							onFocus: prefetchReadmeMarkdown,
							onClick: ($event) => copyReadmeHandler(),
							"aria-pressed": unref(copiedReadme),
							"aria-label": unref(copiedReadme) ? unref($t)("common.copied") : unref($t)("package.readme.copy_as_markdown"),
							classicon: unref(copiedReadme) ? "i-lucide:check" : "i-simple-icons:markdown"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(copiedReadme) ? unref($t)("common.copied") : unref($t)("common.copy")), 1)]),
							_: 1
						}, 8, [
							"onClick",
							"aria-pressed",
							"aria-label",
							"classicon"
						])];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(readmeData)?.toc && unref(readmeData).toc.length > 1) _push(ssrRenderComponent(_component_ReadmeTocDropdown, {
					toc: unref(readmeData).toc,
					"active-id": unref(activeTocId)
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</div></div>`);
				if (unref(readmeData)?.html) _push(ssrRenderComponent(_component_Readme, { html: unref(readmeData).html }, null, _parent));
				else {
					_push(`<p class="text-fg-muted italic">${ssrInterpolate(unref($t)("package.readme.no_readme"))} `);
					if (unref(repositoryUrl)) _push(`<a${ssrRenderAttr("href", unref(repositoryUrl))} target="_blank" rel="noopener noreferrer" class="link text-fg underline underline-offset-4 decoration-fg-subtle hover:decoration-fg hover:text-fg transition-colors duration-200">${ssrInterpolate(unref($t)("package.readme.view_on_github"))}</a>`);
					else _push(`<!---->`);
					_push(`</p>`);
				}
				if (hasProvenance(unref(displayVersion)) && unref(isMounted)) {
					_push(`<section id="provenance" class="scroll-mt-20">`);
					if (unref(provenanceStatus) === "pending") _push(`<div class="mt-8 flex items-center gap-2 text-fg-subtle text-sm"><span class="i-svg-spinners:ring-resize w-4 h-4" aria-hidden="true"></span><span>${ssrInterpolate(unref($t)("package.provenance_section.title"))}…</span></div>`);
					else if (unref(provenanceData)) _push(ssrRenderComponent(_component_PackageProvenanceSection, {
						details: unref(provenanceData),
						class: "mt-8"
					}, null, _parent));
					else if (unref(provenanceStatus) === "error") _push(`<div class="mt-8 flex items-center gap-2 text-fg-subtle text-sm"><span class="i-lucide:circle-alert w-4 h-4" aria-hidden="true"></span><span>${ssrInterpolate(unref($t)("package.provenance_section.error_loading"))}</span></div>`);
					else _push(`<!---->`);
					_push(`</section>`);
				} else _push(`<!---->`);
				_push(`</section>`);
				_push(ssrRenderComponent(_component_PackageSidebar, { class: _ctx.$style.areaSidebar }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="flex flex-col gap-4 sm:gap-6 xl:pt-2"${_scopeId}>`);
							_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ; else return [];
							}) }, _parent, _scopeId));
							_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ; else return [];
							}) }, _parent, _scopeId));
							_push(ssrRenderComponent(_component_PackageWeeklyDownloadStats, {
								packageName: unref(packageName),
								createdIso: unref(pkg)?.time?.created ?? null,
								repoRef: unref(repoRef)
							}, null, _parent, _scopeId));
							if (unref(playgroundLinks).length) _push(ssrRenderComponent(_component_PackagePlaygrounds, { links: unref(playgroundLinks) }, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_component_PackageCompatibility, { engines: unref(displayVersion)?.engines }, null, _parent, _scopeId));
							if (unref(pkg).versions && Object.keys(unref(pkg).versions).length > 0) _push(ssrRenderComponent(_component_PackageVersions, {
								"package-name": unref(pkg).name,
								versions: unref(pkg).versions,
								"dist-tags": unref(pkg)["dist-tags"] ?? {},
								time: unref(pkg).time,
								"selected-version": unref(resolvedVersion) ?? unref(pkg)["dist-tags"]?.["latest"]
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(displayVersion)?.installScripts) _push(ssrRenderComponent(_component_PackageInstallScripts, {
								"package-name": unref(pkg).name,
								version: unref(displayVersion).version,
								"install-scripts": unref(displayVersion).installScripts
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(hasDependencies) && unref(resolvedVersion) && unref(displayVersion)) _push(ssrRenderComponent(_component_PackageDependencies, {
								"package-name": unref(pkg).name,
								version: unref(resolvedVersion),
								dependencies: unref(displayVersion).dependencies,
								"peer-dependencies": unref(displayVersion).peerDependencies,
								"peer-dependencies-meta": unref(displayVersion).peerDependenciesMeta,
								"optional-dependencies": unref(displayVersion).optionalDependencies
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_component_PackageKeywords, { keywords: unref(displayVersion)?.keywords }, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_PackageMaintainers, {
								"package-name": unref(pkg).name,
								maintainers: unref(pkg).maintainers
							}, null, _parent, _scopeId));
							_push(`</div>`);
						} else return [createVNode("div", { class: "flex flex-col gap-4 sm:gap-6 xl:pt-2" }, [
							createVNode(_component_ClientOnly, null, {
								fallback: withCtx(() => []),
								default: withCtx(() => [createVNode(_component_PackageAccessControls, { "package-name": unref(pkg).name }, null, 8, ["package-name"])]),
								_: 1
							}),
							createVNode(_component_ClientOnly, null, {
								fallback: withCtx(() => []),
								default: withCtx(() => [unref(skillsData)?.skills?.length ? (openBlock(), createBlock(_component_PackageSkillsCard, {
									key: 0,
									skills: unref(skillsData).skills,
									"package-name": unref(pkg).name,
									version: unref(resolvedVersion) || void 0
								}, null, 8, [
									"skills",
									"package-name",
									"version"
								])) : createCommentVNode("", true)]),
								_: 1
							}),
							createVNode(_component_PackageWeeklyDownloadStats, {
								packageName: unref(packageName),
								createdIso: unref(pkg)?.time?.created ?? null,
								repoRef: unref(repoRef)
							}, null, 8, [
								"packageName",
								"createdIso",
								"repoRef"
							]),
							unref(playgroundLinks).length ? (openBlock(), createBlock(_component_PackagePlaygrounds, {
								key: 0,
								links: unref(playgroundLinks)
							}, null, 8, ["links"])) : createCommentVNode("", true),
							createVNode(_component_PackageCompatibility, { engines: unref(displayVersion)?.engines }, null, 8, ["engines"]),
							unref(pkg).versions && Object.keys(unref(pkg).versions).length > 0 ? (openBlock(), createBlock(_component_PackageVersions, {
								key: 1,
								"package-name": unref(pkg).name,
								versions: unref(pkg).versions,
								"dist-tags": unref(pkg)["dist-tags"] ?? {},
								time: unref(pkg).time,
								"selected-version": unref(resolvedVersion) ?? unref(pkg)["dist-tags"]?.["latest"]
							}, null, 8, [
								"package-name",
								"versions",
								"dist-tags",
								"time",
								"selected-version"
							])) : createCommentVNode("", true),
							unref(displayVersion)?.installScripts ? (openBlock(), createBlock(_component_PackageInstallScripts, {
								key: 2,
								"package-name": unref(pkg).name,
								version: unref(displayVersion).version,
								"install-scripts": unref(displayVersion).installScripts
							}, null, 8, [
								"package-name",
								"version",
								"install-scripts"
							])) : createCommentVNode("", true),
							unref(hasDependencies) && unref(resolvedVersion) && unref(displayVersion) ? (openBlock(), createBlock(_component_PackageDependencies, {
								key: 3,
								"package-name": unref(pkg).name,
								version: unref(resolvedVersion),
								dependencies: unref(displayVersion).dependencies,
								"peer-dependencies": unref(displayVersion).peerDependencies,
								"peer-dependencies-meta": unref(displayVersion).peerDependenciesMeta,
								"optional-dependencies": unref(displayVersion).optionalDependencies
							}, null, 8, [
								"package-name",
								"version",
								"dependencies",
								"peer-dependencies",
								"peer-dependencies-meta",
								"optional-dependencies"
							])) : createCommentVNode("", true),
							createVNode(_component_PackageKeywords, { keywords: unref(displayVersion)?.keywords }, null, 8, ["keywords"]),
							createVNode(_component_PackageMaintainers, {
								"package-name": unref(pkg).name,
								maintainers: unref(pkg).maintainers
							}, null, 8, ["package-name", "maintainers"])
						])];
					}),
					_: 1
				}, _parent));
				_push(`</article>`);
			} else if (unref(status) === "error") {
				_push(`<div role="alert" class="flex flex-col items-center py-20 text-center"><h1 class="font-mono text-2xl font-medium mb-4">${ssrInterpolate(unref($t)("package.not_found"))}</h1><p class="text-fg-muted mb-8">${ssrInterpolate(unref(error)?.message ?? unref($t)("package.not_found_message"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: { name: "index" }
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
var _name__vue_vue_type_style_index_0_lang_module_default = {
	packagePage: "_packagePage_8yfc0_2",
	areaHeader: "_areaHeader_8yfc0_53",
	areaDetails: "_areaDetails_8yfc0_69",
	areaInstall: "_areaInstall_8yfc0_73",
	areaVulns: "_areaVulns_8yfc0_84",
	areaReadme: "_areaReadme_8yfc0_89",
	areaSidebar: "_areaSidebar_8yfc0_97",
	packageNav: "_packageNav_8yfc0_103"
};
var cssModules = { "$style": _name__vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = _name__vue_vue_type_script_setup_true_lang_default.setup;
_name__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package/[[org]]/[name].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _name__default = /* @__PURE__ */ _plugin_vue_export_helper_default(_name__vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]);

export { _name__default as default };
//# sourceMappingURL=_name_-DATAj0xa.mjs.map

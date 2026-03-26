import { u as useI18n, a as useSeoMeta$1, c as useNuxtApp, i as useRouter, P as useClipboard, U as _sfc_main, B as Base_default, m as Base_default$1, _ as _plugin_vue_export_helper_default } from './server-placeholder-C9fYItBT.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { u as useCanGoBack } from './useCanGoBack-CvNAow9_.mjs';
import { S as SkeletonInline_default } from './SkeletonInline-BPNTVz6t.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-DdKo1i2Y.mjs';
import { u as useI18nStatus } from './useI18nStatus-CrSsvs9P.mjs';
import { defineComponent, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import 'semver';
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
import 'perfect-debounce';
import './fetch-CVxFI0ck.mjs';
import './asyncData-Dr04OizO.mjs';

//#region app/components/ProgressBar.vue?vue&type=script&setup=true&lang.ts
var ProgressBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProgressBar",
	__ssrInlineRender: true,
	props: {
		val: {},
		label: {},
		scheme: { default: () => ({
			low: 50,
			medium: 75,
			high: 90,
			full: true
		}) }
	},
	setup(__props) {
		const props = __props;
		const completionClass = computed(() => {
			if (props.scheme.full && props.val === 100) return "full";
			else if (props.val > props.scheme.high) return "high";
			else if (props.val > props.scheme.medium) return "medium";
			else if (props.val > props.scheme.low) return "low";
			return "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<progress${ssrRenderAttrs(mergeProps({
				class: ["flex-1 h-3 rounded-full overflow-hidden", unref(completionClass)],
				max: "100",
				value: __props.val,
				"aria-label": __props.label
			}, _attrs))} data-v-fc5f8a6f></progress>`);
		};
	}
});
//#endregion
//#region app/components/ProgressBar.vue
var _sfc_setup$1 = ProgressBar_vue_vue_type_script_setup_true_lang_default.setup;
ProgressBar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressBar.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ProgressBar_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ProgressBar_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-fc5f8a6f"]]), { __name: "ProgressBar" });
//#endregion
//#region app/pages/translation-status.vue?vue&type=script&setup=true&lang.ts
var translation_status_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "translation-status",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("translation_status.title")} - npmx`,
			description: () => $t("translation_status.welcome", { npmx: "npmx" })
		});
		defineOgImageComponent("Default", {
			title: () => $t("translation_status.title"),
			description: () => $t("translation_status.welcome", { npmx: "npmx" })
		});
		useNuxtApp();
		useRouter();
		const canGoBack = useCanGoBack();
		const { fetchStatus, status } = useI18nStatus();
		const { locale } = useI18n();
		const { copy, copied } = useClipboard();
		const isLoading = computed(() => fetchStatus.value === "idle" || fetchStatus.value === "pending");
		const generatedAt = computed(() => {
			return status.value?.generatedAt ?? (/* @__PURE__ */ new Date()).toISOString();
		});
		const localeEntries = computed(() => status.value?.locales || []);
		function copyMissingKeys(localeEntry) {
			const template = localeEntry.missingKeys.map((key) => `  "${key}": ""`).join(",\n");
			copy(`// Missing translations for ${localeEntry.label} (${localeEntry.lang})
// Add these keys to: i18n/locales/${localeEntry.lang}.json

${template}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_NuxtTime = _sfc_main;
			const _component_SkeletonInline = SkeletonInline_default;
			const _component_LinkBase = Base_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			const _component_ProgressBar = ProgressBar_default;
			const _component_ButtonBase = Base_default$1;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("translation_status.title"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-lucide:arrow-left icon-rtl w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "translation_status.generated_at",
				tag: "p",
				scope: "global",
				class: "text-fg-muted text-lg"
			}, {
				date: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtTime, {
						locale: unref(locale),
						datetime: unref(generatedAt),
						"date-style": "long",
						"time-style": "medium"
					}, null, _parent, _scopeId));
					else return [createVNode(_component_NuxtTime, {
						locale: unref(locale),
						datetime: unref(generatedAt),
						"date-style": "long",
						"time-style": "medium"
					}, null, 8, ["locale", "datetime"])];
				}),
				_: 1
			}, _parent));
			_push(`</header><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "translation_status.welcome",
				scope: "global",
				tag: "span"
			}, {
				npmx: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>npmx</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, "npmx")];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "translation_status.p1",
				scope: "global",
				tag: "span"
			}, {
				lang: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("translation_status.p1_lang", {}, { locale: unref(locale) }))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("translation_status.p1_lang", {}, { locale: unref(locale) })), 1)];
				}),
				count: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) if (unref(isLoading)) _push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-20 mx-1" }, null, _parent, _scopeId));
					else _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("translation_status.p1_count", { count: unref(status)?.sourceLocale.totalKeys ?? 0 }, { locale: unref(locale) }))}</strong>`);
					else return [unref(isLoading) ? (openBlock(), createBlock(_component_SkeletonInline, {
						key: 0,
						class: "h-4 w-20 mx-1"
					})) : (openBlock(), createBlock("strong", {
						key: 1,
						class: "text-fg"
					}, toDisplayString(unref($t)("translation_status.p1_count", { count: unref(status)?.sourceLocale.totalKeys ?? 0 }, { locale: unref(locale) })), 1))];
				}),
				bylang: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: "#by-lang",
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("translation_status.by_locale"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("translation_status.by_locale")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: "#by-lang",
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("translation_status.by_locale")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "translation_status.p2",
				scope: "global",
				tag: "span"
			}, {
				guide: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: "https://github.com/npmx-dev/npmx.dev/blob/main/CONTRIBUTING.md#localization-i18n",
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("translation_status.guide"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("translation_status.guide")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: "https://github.com/npmx-dev/npmx.dev/blob/main/CONTRIBUTING.md#localization-i18n",
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("translation_status.guide")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p><section class="prose prose-invert max-w-none space-y-8 pt-4"><h2 id="by-lang" tabindex="-1" class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("translation_status.by_locale"))}</h2>`);
			if (unref(fetchStatus) !== "success") {
				_push(`<div class="space-y-2">`);
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-20 w-full mb-4" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-20 w-full mb-4" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-20 w-full mb-4" }, null, _parent));
				_push(`</div>`);
			} else if (unref(fetchStatus) === "success") {
				_push(`<!--[-->`);
				ssrRenderList(unref(localeEntries), (localeEntry) => {
					_push(`<details class="group rounded bg-bg-subtle border border-border p-4 mb-4"${ssrRenderAttr("lang", localeEntry.lang)}${ssrRenderAttr("dir", localeEntry.dir === "rtl" ? "rtl" : "auto")}><summary class="max-w-full list-none cursor-pointer select-none"><span class="flex flex-col gap-2"><span class="flex items-center justify-between"><span class="flex items-center gap-2"><span class="i-lucide:arrow-right icon-rtl w-4 h-4 transition-transform group-open:rotate-90 text-fg-muted"></span><span class="text-fg">${ssrInterpolate(localeEntry.label)}</span><span class="text-fg-muted font-normal ps-2">${ssrInterpolate(localeEntry.lang)}</span></span><span class="font-mono text-sm text-fg-muted">${ssrInterpolate(_ctx.$n(localeEntry.percentComplete / 100, "percentage"))}</span></span><span class="flex items-center gap-4 ps-6">`);
					_push(ssrRenderComponent(_component_ProgressBar, {
						val: localeEntry.percentComplete,
						label: unref($t)("translation_status.progress_label", { locale: localeEntry.label })
					}, null, _parent));
					_push(`</span><span class="ps-6 text-sm text-fg-muted flex justify-between gap-4">`);
					if (localeEntry.missingKeys.length > 0) _push(`<!--[--><span class="inline-flex items-center text-amber-800 dark:text-amber-400 gap-1"><span class="i-lucide:list-x w-3.5 h-3.5"></span> ${ssrInterpolate(localeEntry.missingKeys.length)} ${ssrInterpolate(unref($t)("translation_status.missing_text", {}, { locale: localeEntry.lang }))}</span><span>${ssrInterpolate(localeEntry.completedKeys)} / ${ssrInterpolate(localeEntry.totalKeys)}</span><!--]-->`);
					else _push(`<span class="i-lucide:check w-3.5 h-3.5 text-green-700 dark:text-green-500"></span>`);
					_push(`</span></span></summary><div class="ps-6 max-md:ps-3 mt-6">`);
					if (localeEntry.missingKeys.length > 0) {
						_push(`<!--[--><div class="flex items-center justify-between mb-3"><h4 class="text-sm font-medium text-fg my-0">${ssrInterpolate(unref($t)("translation_status.missing_keys", {}, { locale: localeEntry.lang }))}</h4>`);
						_push(ssrRenderComponent(_component_ButtonBase, {
							type: "button",
							size: "sm",
							onClick: ($event) => copyMissingKeys(localeEntry)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(copied) ? unref($t)("common.copied", {}, { locale: localeEntry.lang }) : unref($t)("i18n.copy_keys", {}, { locale: localeEntry.lang }))}`);
								else return [createTextVNode(toDisplayString(unref(copied) ? unref($t)("common.copied", {}, { locale: localeEntry.lang }) : unref($t)("i18n.copy_keys", {}, { locale: localeEntry.lang })), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</div><div class="max-w-full"><ul class="text-xs font-mono bg-bg rounded-md max-h-64 overflow-y-auto overflow-x-auto space-y-1 p-2 mt-0"><!--[-->`);
						ssrRenderList(localeEntry.missingKeys, (key) => {
							_push(`<li class="text-fg-muted break-all whitespace-normal border-b border-border/10 last:border-0 pb-1"${ssrRenderAttr("title", key)}>${ssrInterpolate(key)}</li>`);
						});
						_push(`<!--]--></ul></div><div class="mt-4">`);
						_push(ssrRenderComponent(_component_LinkBase, {
							to: localeEntry.githubEditUrl,
							variant: "button-secondary",
							size: "md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref($t)("i18n.edit_on_github", {}, { locale: localeEntry.lang }))}`);
								else return [createTextVNode(toDisplayString(unref($t)("i18n.edit_on_github", {}, { locale: localeEntry.lang })), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</div><!--]-->`);
					} else _push(`<div class="p-4 rounded bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-200 flex items-start gap-2"><span>${ssrInterpolate(unref($t)("translation_status.complete_text", {}, { locale: localeEntry.lang }))}</span><span aria-hidden="true">🎉</span></div>`);
					_push(`</div></details>`);
				});
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</section></article></main>`);
		};
	}
});
//#endregion
//#region app/pages/translation-status.vue
var _sfc_setup = translation_status_vue_vue_type_script_setup_true_lang_default.setup;
translation_status_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/translation-status.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var translation_status_default = translation_status_vue_vue_type_script_setup_true_lang_default;

export { translation_status_default as default };
//# sourceMappingURL=translation-status-BgE6wcgz.mjs.map

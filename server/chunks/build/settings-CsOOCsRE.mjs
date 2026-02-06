import { k as useI18n, X as useRouter$1, t as useColorMode, c as onKeyStroke, S as isKeyWithoutModifiers, x as isEditableElement, U as useSeoMeta$1, z as client_only_default, M as useFetch, P as onPrehydrate, l as useClipboard } from './server.mjs';
import { a as useSettings, b as useAccentColor, c as useBackgroundTheme } from './useSettings-rf2hWHFQ.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-DjwIIYSm.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, computed, shallowRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
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
import 'perfect-debounce';

var AccentColorPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AccentColorPicker",
	__ssrInlineRender: true,
	setup(__props) {
		const { accentColors, selectedAccentColor} = useAccentColor();
		onPrehydrate("(e=>{let t=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`).accentColorId;if(t){let n=e.querySelector(`input[value=\"${t}\"]`);n&&(n.checked=!0)}})", "Q7v0uTW-Tq");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-accent/70 has-[input:focus-visible]:outline-offset-4 rounded-xl w-fit" }, _attrs))}><legend class="sr-only">${ssrInterpolate(_ctx.$t("settings.accent_colors"))}</legend><!--[-->`);
			ssrRenderList(unref(accentColors), (color) => {
				_push(`<label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle" style="${ssrRenderStyle({ backgroundColor: color.value })}"><input type="radio" name="accent-color" class="sr-only"${ssrRenderAttr("value", color.id)}${ssrIncludeBooleanAttr(unref(selectedAccentColor) === color.id) ? " checked" : ""}${ssrRenderAttr("aria-label", color.name)}></label>`);
			});
			_push(`<!--]--><label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle flex items-center justify-center bg-fg"><input type="radio" name="accent-color" class="sr-only" value=""${ssrIncludeBooleanAttr(unref(selectedAccentColor) === null) ? " checked" : ""}${ssrRenderAttr("aria-label", _ctx.$t("settings.clear_accent"))}><span class="i-carbon-error size-4 text-bg" aria-hidden="true"></span></label></fieldset>`);
		};
	}
});
var _sfc_setup$4 = AccentColorPicker_vue_vue_type_script_setup_true_lang_default.setup;
AccentColorPicker_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/AccentColorPicker.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AccentColorPicker_default = Object.assign(AccentColorPicker_vue_vue_type_script_setup_true_lang_default, { __name: "SettingsAccentColorPicker" });
var BgThemePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BgThemePicker",
	__ssrInlineRender: true,
	setup(__props) {
		const { backgroundThemes, selectedBackgroundTheme} = useBackgroundTheme();
		onPrehydrate("(e=>{let t=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`).preferredBackgroundTheme;if(t){let n=e.querySelector(`input[value=\"${t||`neutral`}\"]`);n&&(n.checked=!0)}})", "ooUbQKK2X7");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-accent/70 has-[input:focus-visible]:outline-offset-4 rounded-xl w-fit" }, _attrs))}><legend class="sr-only">${ssrInterpolate(_ctx.$t("settings.background_themes"))}</legend><!--[-->`);
			ssrRenderList(unref(backgroundThemes), (theme) => {
				_push(`<label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle" style="${ssrRenderStyle({ backgroundColor: theme.value })}"><input type="radio" name="background-theme" class="sr-only"${ssrRenderAttr("value", theme.id)}${ssrIncludeBooleanAttr(unref(selectedBackgroundTheme) === theme.id) ? " checked" : ""}${ssrRenderAttr("aria-label", theme.name)}></label>`);
			});
			_push(`<!--]--></fieldset>`);
		};
	}
});
var _sfc_setup$3 = BgThemePicker_vue_vue_type_script_setup_true_lang_default.setup;
BgThemePicker_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/BgThemePicker.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BgThemePicker_default = Object.assign(BgThemePicker_vue_vue_type_script_setup_true_lang_default, { __name: "SettingsBgThemePicker" });
var Toggle_server_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Toggle.server",
	__ssrInlineRender: true,
	props: {
		label: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SkeletonBlock = SkeletonBlock_default;
			_push(`<!--[--><div class="w-full flex items-center justify-between gap-4">`);
			if (__props.label) _push(`<span class="text-sm text-fg font-medium text-start">${ssrInterpolate(__props.label)}</span>`);
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-6 w-11 shrink-0 rounded-full" }, null, _parent));
			_push(`</div>`);
			if (__props.description) _push(`<p class="text-sm text-fg-muted">${ssrInterpolate(__props.description)}</p>`);
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$2 = Toggle_server_vue_vue_type_script_setup_true_lang_default.setup;
Toggle_server_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/Toggle.server.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Toggle_server_default = Object.assign(Toggle_server_vue_vue_type_script_setup_true_lang_default, { __name: "SettingsToggle" });
var INITIAL_SHOW_COUNT = 5;
var contributionGuideUrl = "https://github.com/npmx-dev/npmx.dev/blob/main/CONTRIBUTING.md#localization-i18n";
var TranslationHelper_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TranslationHelper",
	__ssrInlineRender: true,
	props: { status: {} },
	setup(__props) {
		const props = __props;
		const showAll = shallowRef(false);
		const missingKeysToShow = computed(() => {
			if (showAll.value || props.status.missingKeys.length <= INITIAL_SHOW_COUNT) return props.status.missingKeys;
			return props.status.missingKeys.slice(0, INITIAL_SHOW_COUNT);
		});
		const hasMoreKeys = computed(() => props.status.missingKeys.length > INITIAL_SHOW_COUNT && !showAll.value);
		const remainingCount = computed(() => props.status.missingKeys.length - INITIAL_SHOW_COUNT);
		const { copy, copied } = useClipboard();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="space-y-1.5"><div class="flex items-center justify-between text-xs text-fg-muted"><span>${ssrInterpolate(_ctx.$t("settings.translation_progress"))}</span><span class="tabular-nums">${ssrInterpolate(__props.status.completedKeys)}/${ssrInterpolate(__props.status.totalKeys)} (${ssrInterpolate(__props.status.percentComplete)}%)</span></div><div class="h-1.5 bg-bg rounded-full overflow-hidden"><div class="h-full bg-accent transition-all duration-300 motion-reduce:transition-none" style="${ssrRenderStyle({ width: `${__props.status.percentComplete}%` })}"></div></div></div>`);
			if (__props.status.missingKeys.length > 0) {
				_push(`<div class="space-y-2"><div class="flex items-center justify-between"><h4 class="text-xs text-fg-muted font-medium">${ssrInterpolate(_ctx.$t("i18n.missing_keys", { count: __props.status.missingKeys.length }))}</h4><button type="button" class="text-xs text-accent hover:underline rounded focus-visible:outline-accent/70">${ssrInterpolate(unref(copied) ? _ctx.$t("common.copied") : _ctx.$t("i18n.copy_keys"))}</button></div><ul class="space-y-1 text-xs font-mono bg-bg rounded-md p-2 max-h-32 overflow-y-auto"><!--[-->`);
				ssrRenderList(unref(missingKeysToShow), (key) => {
					_push(`<li class="text-fg-muted truncate"${ssrRenderAttr("title", key)}>${ssrInterpolate(key)}</li>`);
				});
				_push(`<!--]--></ul>`);
				if (unref(hasMoreKeys)) _push(`<button type="button" class="text-xs text-fg-muted hover:text-fg rounded focus-visible:outline-accent/70">${ssrInterpolate(_ctx.$t("i18n.show_more_keys", { count: unref(remainingCount) }))}</button>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<div class="pt-2 border-t border-border space-y-2"><p class="text-xs text-fg-muted">${ssrInterpolate(_ctx.$t("i18n.contribute_hint"))}</p><div class="flex flex-wrap gap-2"><a${ssrRenderAttr("href", __props.status.githubEditUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-bg hover:bg-bg-subtle border border-border rounded-md transition-colors focus-visible:outline-accent/70"><span class="i-carbon-edit w-3.5 h-3.5" aria-hidden="true"></span> ${ssrInterpolate(_ctx.$t("i18n.edit_on_github"))}</a><a${ssrRenderAttr("href", contributionGuideUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-fg-muted hover:text-fg rounded transition-colors focus-visible:outline-accent/70"><span class="i-carbon-document w-3.5 h-3.5" aria-hidden="true"></span> ${ssrInterpolate(_ctx.$t("i18n.view_guide"))}</a></div></div></div>`);
		};
	}
});
var _sfc_setup$1 = TranslationHelper_vue_vue_type_script_setup_true_lang_default.setup;
TranslationHelper_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/TranslationHelper.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TranslationHelper_default = Object.assign(TranslationHelper_vue_vue_type_script_setup_true_lang_default, { __name: "SettingsTranslationHelper" });
function useI18nStatus() {
	const { locale } = useI18n();
	const { data: status, status: fetchStatus, error } = useFetch("/lunaria/status.json", {
		responseType: "json",
		server: false,
		getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
	}, "$_RVmx0z2Mi");
	function getLocaleStatus(langCode) {
		if (!status.value) return null;
		return status.value.locales.find((l) => l.lang === langCode) ?? null;
	}
	const currentLocaleStatus = computed(() => {
		return getLocaleStatus(locale.value);
	});
	return {
		status,
		fetchStatus,
		error,
		getLocaleStatus,
		currentLocaleStatus,
		isComplete: computed(() => {
			const localeStatus = currentLocaleStatus.value;
			if (!localeStatus) return true;
			return localeStatus.percentComplete === 100;
		}),
		isSourceLocale: computed(() => {
			return locale.value === (status.value?.sourceLocale.lang ?? "en-US");
		}),
		githubEditUrl: computed(() => {
			return currentLocaleStatus.value?.githubEditUrl ?? null;
		})
	};
}
var settings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "settings",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const router = useRouter$1();
		const { settings } = useSettings();
		const { locale, locales, setLocale: setNuxti18nLocale } = useI18n();
		const colorMode = useColorMode();
		const { currentLocaleStatus, isSourceLocale } = useI18nStatus();
		onKeyStroke((e) => isKeyWithoutModifiers(e, "Escape") && !isEditableElement(e.target) && !(void 0).documentElement.matches("html:has(:modal)"), (e) => {
			e.preventDefault();
			router.back();
		}, { dedupe: true });
		useSeoMeta$1({
			title: () => `${$t("settings.title")} - npmx`,
			ogTitle: () => `${$t("settings.title")} - npmx`,
			twitterTitle: () => `${$t("settings.title")} - npmx`,
			description: () => $t("settings.meta_description"),
			ogDescription: () => $t("settings.meta_description"),
			twitterDescription: () => $t("settings.meta_description")
		});
		defineOgImageComponent("Default", {
			title: () => $t("settings.title"),
			description: () => $t("settings.tagline"),
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SettingsAccentColorPicker = AccentColorPicker_default;
			const _component_SettingsBgThemePicker = BgThemePicker_default;
			const _component_SettingsToggle = Toggle_server_default;
			const _component_ClientOnly = client_only_default;
			const _component_SettingsTranslationHelper = TranslationHelper_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 w-full" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("settings.title"))}</h1><button type="button" class="inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0 p-1.5 -mx-1.5"><span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("nav.back"))}</span></button></div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("settings.tagline"))}</p></header><div class="space-y-8"><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.appearance"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6 space-y-6"><div class="space-y-2"><label for="theme-select" class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.theme"))}</label><select id="theme-select"${ssrRenderAttr("value", unref(colorMode).preference)} class="w-full sm:w-auto min-w-48 bg-bg border border-border rounded-md px-3 py-2 text-sm text-fg cursor-pointer duration-200 transition-colors hover:border-fg-subtle"><option value="system">${ssrInterpolate(unref($t)("settings.theme_system"))}</option><option value="light">${ssrInterpolate(unref($t)("settings.theme_light"))}</option><option value="dark">${ssrInterpolate(unref($t)("settings.theme_dark"))}</option></select></div><div class="space-y-3"><span class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.accent_colors"))}</span>`);
			_push(ssrRenderComponent(_component_SettingsAccentColorPicker, null, null, _parent));
			_push(`</div><div class="space-y-3"><span class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.background_themes"))}</span>`);
			_push(ssrRenderComponent(_component_SettingsBgThemePicker, null, null, _parent));
			_push(`</div></div></section><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.display"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6">`);
			_push(ssrRenderComponent(_component_SettingsToggle, {
				label: unref($t)("settings.relative_dates"),
				modelValue: unref(settings).relativeDates,
				"onUpdate:modelValue": ($event) => unref(settings).relativeDates = $event
			}, null, _parent));
			_push(`<div class="border-t border-border my-4"></div>`);
			_push(ssrRenderComponent(_component_SettingsToggle, {
				label: unref($t)("settings.include_types"),
				description: unref($t)("settings.include_types_description"),
				modelValue: unref(settings).includeTypesInInstall,
				"onUpdate:modelValue": ($event) => unref(settings).includeTypesInInstall = $event
			}, null, _parent));
			_push(`<div class="border-t border-border my-4"></div>`);
			_push(ssrRenderComponent(_component_SettingsToggle, {
				label: unref($t)("settings.hide_platform_packages"),
				description: unref($t)("settings.hide_platform_packages_description"),
				modelValue: unref(settings).hidePlatformPackages,
				"onUpdate:modelValue": ($event) => unref(settings).hidePlatformPackages = $event
			}, null, _parent));
			_push(`</div></section><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.language"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6 space-y-4"><div class="space-y-2"><label for="language-select" class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.language"))}</label>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<select id="language-select" disabled class="w-full sm:w-auto min-w-48 bg-bg border border-border rounded-md px-3 py-2 text-sm text-fg opacity-50 cursor-wait duration-200 transition-colors hover:border-fg-subtle"${_scopeId}><option${_scopeId}>${ssrInterpolate(unref($t)("common.loading"))}</option></select>`);
				else return [createVNode("select", {
					id: "language-select",
					disabled: "",
					class: "w-full sm:w-auto min-w-48 bg-bg border border-border rounded-md px-3 py-2 text-sm text-fg opacity-50 cursor-wait duration-200 transition-colors hover:border-fg-subtle"
				}, [createVNode("option", null, toDisplayString(unref($t)("common.loading")), 1)])];
			}) }, _parent));
			_push(`</div>`);
			if (unref(currentLocaleStatus) && !unref(isSourceLocale)) {
				_push(`<div class="border-t border-border pt-4">`);
				_push(ssrRenderComponent(_component_SettingsTranslationHelper, { status: unref(currentLocaleStatus) }, null, _parent));
				_push(`</div>`);
			} else _push(`<a href="https://github.com/npmx-dev/npmx.dev/tree/main/i18n/locales" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors duration-200 focus-visible:outline-accent/70 rounded"><span class="i-carbon:logo-github w-4 h-4" aria-hidden="true"></span> ${ssrInterpolate(unref($t)("settings.help_translate"))}</a>`);
			_push(`</div></section></div></article></main>`);
		};
	}
});
var _sfc_setup = settings_vue_vue_type_script_setup_true_lang_default.setup;
settings_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var settings_default = settings_vue_vue_type_script_setup_true_lang_default;

export { settings_default as default };
//# sourceMappingURL=settings-CsOOCsRE.mjs.map

import { H as useI18n, lt as useRouter$1, d as useSettings, f as useColorMode, h as onKeyStroke, P as isKeyWithoutModifiers, N as isEditableElement, nt as useSeoMeta$1, Q as client_only_default, G as useFetch, a as _plugin_vue_export_helper_default, c as useAccentColor, q as onPrehydrate, l as useBackgroundTheme, g as useClipboard } from './server.mjs';
import { u as useCanGoBack } from './useCanGoBack-DH1Opmzd.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DtDCPnhJ.mjs';
import { u as useNumberFormatter } from './useNumberFormatter-B-AHKObJ.mjs';
import { F as Field_default } from './Field-CwiCxWgG.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-BtX7g4rd.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, computed, shallowRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
		const { accentColors, selectedAccentColor, setAccentColor } = useAccentColor();
		onPrehydrate("(e=>{let t=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`).accentColorId;if(t){let n=e.querySelector(`input[value=\"${t}\"]`);n&&(n.checked=!0,n.setAttribute(`checked`,``));let r=e.querySelector(`input[value=\"\"]`);r&&(r.checked=!1,r.removeAttribute(`checked`))}})", "Xj-dzq6qrF");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-accent/70 has-[input:focus-visible]:outline-offset-4 rounded-xl w-fit" }, _attrs))} data-v-08747be7><legend class="sr-only" data-v-08747be7>${ssrInterpolate(_ctx.$t("settings.accent_colors"))}</legend><!--[-->`);
			ssrRenderList(unref(accentColors), (color) => {
				_push(`<label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle" style="${ssrRenderStyle({ backgroundColor: `var(--swatch-${color.id})` })}" data-v-08747be7><input type="radio" name="accent-color" class="sr-only"${ssrRenderAttr("value", color.id)}${ssrIncludeBooleanAttr(unref(selectedAccentColor) === color.id) ? " checked" : ""}${ssrRenderAttr("aria-label", color.name)} data-v-08747be7></label>`);
			});
			_push(`<!--]--><label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle flex items-center justify-center bg-fg" data-v-08747be7><input type="radio" name="accent-color" class="sr-only" value=""${ssrIncludeBooleanAttr(unref(selectedAccentColor) === null) ? " checked" : ""}${ssrRenderAttr("aria-label", _ctx.$t("settings.clear_accent"))} data-v-08747be7><span class="i-carbon-error size-4 text-bg" aria-hidden="true" data-v-08747be7></span></label></fieldset>`);
		};
	}
});
var _sfc_setup$4 = AccentColorPicker_vue_vue_type_script_setup_true_lang_default.setup;
AccentColorPicker_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/AccentColorPicker.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AccentColorPicker_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(AccentColorPicker_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-08747be7"]]), { __name: "SettingsAccentColorPicker" });
var BgThemePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BgThemePicker",
	__ssrInlineRender: true,
	setup(__props) {
		const { backgroundThemes, selectedBackgroundTheme, setBackgroundTheme } = useBackgroundTheme();
		onPrehydrate("(e=>{let t=JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`).preferredBackgroundTheme;if(t){let n=e.querySelector(`input[value=\"${t}\"]`);n&&(n.checked=!0,n.setAttribute(`checked`,``))}})", "S24DflCoip");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 has-[input:focus-visible]:outline-solid has-[input:focus-visible]:outline-accent/70 has-[input:focus-visible]:outline-offset-4 rounded-xl w-fit" }, _attrs))} data-v-f99a0b81><legend class="sr-only" data-v-f99a0b81>${ssrInterpolate(_ctx.$t("settings.background_themes"))}</legend><!--[-->`);
			ssrRenderList(unref(backgroundThemes), (theme) => {
				_push(`<label class="size-6 rounded-full transition-transform duration-150 motion-safe:hover:scale-110 has-[:checked]:ring-2 has-[:checked]:ring-fg has-[:checked]:ring-offset-2 has-[:checked]:ring-offset-bg-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-fg has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-subtle" style="${ssrRenderStyle({ backgroundColor: theme.value })}" data-v-f99a0b81><input type="radio" name="background-theme" class="sr-only"${ssrRenderAttr("value", theme.id)}${ssrIncludeBooleanAttr(unref(selectedBackgroundTheme) === theme.id) ? " checked" : ""}${ssrRenderAttr("aria-label", theme.name)} data-v-f99a0b81></label>`);
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
var BgThemePicker_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(BgThemePicker_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-f99a0b81"]]), { __name: "SettingsBgThemePicker" });
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
			_push(`<!--[--><div class="w-full flex items-center justify-between gap-4 py-1 -my-1">`);
			if (__props.label) _push(`<span class="text-sm text-fg font-medium text-start">${ssrInterpolate(__props.label)}</span>`);
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-6 w-11 shrink-0 rounded-full" }, null, _parent));
			_push(`</div>`);
			if (__props.description) _push(`<p class="text-sm text-fg-muted mt-2">${ssrInterpolate(__props.description)}</p>`);
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
		const numberFormatter = useNumberFormatter();
		const percentageFormatter = useNumberFormatter({ style: "percent" });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="space-y-1.5"><div class="flex items-center justify-between text-xs text-fg-muted"><span>${ssrInterpolate(_ctx.$t("settings.translation_progress"))}</span><span class="tabular-nums">${ssrInterpolate(unref(numberFormatter).format(__props.status.completedKeys))}/${ssrInterpolate(unref(numberFormatter).format(__props.status.totalKeys))} (${ssrInterpolate(unref(percentageFormatter).format(__props.status.percentComplete / 100))})</span></div><div class="h-1.5 bg-bg rounded-full overflow-hidden"><div class="h-full bg-accent transition-all duration-300 motion-reduce:transition-none" style="${ssrRenderStyle({ width: `${__props.status.percentComplete}%` })}"></div></div></div>`);
			if (__props.status.missingKeys.length > 0) {
				_push(`<div class="space-y-2"><div class="flex items-center justify-between"><h4 class="text-xs text-fg-muted font-medium">${ssrInterpolate(_ctx.$t("i18n.missing_keys", { count: unref(numberFormatter).format(__props.status.missingKeys.length) }, __props.status.missingKeys.length))}</h4><button type="button" class="text-xs text-accent hover:underline rounded focus-visible:outline-accent/70">${ssrInterpolate(unref(copied) ? _ctx.$t("common.copied") : _ctx.$t("i18n.copy_keys"))}</button></div><ul class="space-y-1 text-xs font-mono bg-bg rounded-md p-2 max-h-32 overflow-y-auto"><!--[-->`);
				ssrRenderList(unref(missingKeysToShow), (key) => {
					_push(`<li class="text-fg-muted truncate"${ssrRenderAttr("title", key)}>${ssrInterpolate(key)}</li>`);
				});
				_push(`<!--]--></ul>`);
				if (unref(hasMoreKeys)) _push(`<button type="button" class="text-xs text-fg-muted hover:text-fg rounded focus-visible:outline-accent/70">${ssrInterpolate(_ctx.$t("i18n.show_more_keys", { count: unref(numberFormatter).format(unref(remainingCount)) }, unref(remainingCount)))}</button>`);
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
		const canGoBack = useCanGoBack();
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
			const _component_SelectField = Field_default;
			const _component_SettingsAccentColorPicker = AccentColorPicker_default;
			const _component_SettingsBgThemePicker = BgThemePicker_default;
			const _component_SettingsToggle = Toggle_server_default;
			const _component_ClientOnly = client_only_default;
			const _component_SettingsTranslationHelper = TranslationHelper_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 w-full" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("settings.title"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0 p-1.5 -mx-1.5"><span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("settings.tagline"))}</p></header><div class="space-y-8"><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.appearance"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6 space-y-6"><div class="space-y-2"><label for="theme-select" class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.theme"))}</label>`);
			_push(ssrRenderComponent(_component_SelectField, {
				id: "theme-select",
				modelValue: unref(colorMode).preference,
				"onUpdate:modelValue": ($event) => unref(colorMode).preference = $event,
				block: "",
				size: "sm",
				class: "max-w-48",
				items: [
					{
						label: unref($t)("settings.theme_system"),
						value: "system"
					},
					{
						label: unref($t)("settings.theme_light"),
						value: "light"
					},
					{
						label: unref($t)("settings.theme_dark"),
						value: "dark"
					}
				]
			}, null, _parent));
			_push(`</div><div class="space-y-3"><span class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.accent_colors"))}</span>`);
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
			_push(`</div></section><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.search"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6"><div class="space-y-2"><label for="search-provider-select" class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.data_source.label"))}</label><p class="text-xs text-fg-muted mb-3">${ssrInterpolate(unref($t)("settings.data_source.description"))}</p>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_SelectField, {
					id: "search-provider-select",
					disabled: "",
					items: [{
						label: unref($t)("common.loading"),
						value: "loading"
					}],
					block: "",
					size: "sm",
					class: "max-w-48"
				}, null, _parent, _scopeId));
				else return [createVNode(_component_SelectField, {
					id: "search-provider-select",
					disabled: "",
					items: [{
						label: unref($t)("common.loading"),
						value: "loading"
					}],
					block: "",
					size: "sm",
					class: "max-w-48"
				}, null, 8, ["items"])];
			}) }, _parent));
			_push(`<p class="text-xs text-fg-subtle mt-2">${ssrInterpolate(unref(settings).searchProvider === "algolia" ? unref($t)("settings.data_source.algolia_description") : unref($t)("settings.data_source.npm_description"))}</p>`);
			if (unref(settings).searchProvider === "algolia") _push(`<a href="https://www.algolia.com/developers" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-fg-subtle hover:text-fg-muted transition-colors mt-2">${ssrInterpolate(unref($t)("search.algolia_disclaimer"))} <span class="i-carbon:launch w-3 h-3" aria-hidden="true"></span></a>`);
			else _push(`<!---->`);
			_push(`</div></div></section><section><h2 class="text-xs text-fg-muted uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("settings.sections.language"))}</h2><div class="bg-bg-subtle border border-border rounded-lg p-4 sm:p-6 space-y-4"><div class="space-y-2"><label for="language-select" class="block text-sm text-fg font-medium">${ssrInterpolate(unref($t)("settings.language"))}</label>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_SelectField, {
					id: "language-select",
					disabled: "",
					items: [{
						label: unref($t)("common.loading"),
						value: "loading"
					}],
					block: "",
					size: "sm",
					class: "max-w-48"
				}, null, _parent, _scopeId));
				else return [createVNode(_component_SelectField, {
					id: "language-select",
					disabled: "",
					items: [{
						label: unref($t)("common.loading"),
						value: "loading"
					}],
					block: "",
					size: "sm",
					class: "max-w-48"
				}, null, 8, ["items"])];
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
//# sourceMappingURL=settings-CT20cTFu.mjs.map

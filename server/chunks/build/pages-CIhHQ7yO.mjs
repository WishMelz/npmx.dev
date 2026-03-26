import { _ as _plugin_vue_export_helper_default, u as useI18n, p as useGlobalSearch, q as useAppConfig, a as useSeoMeta$1, A as AppLogo_default, t as Base_default, m as Base_default$1, v as BuildEnvironment_default, B as Base_default$2, w as packageRoute, x as useSettings, y as onPrehydrate } from './server-placeholder-C9fYItBT.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { C as CallToAction_default } from './CallToAction-DS2HHGbE.mjs';
import { S as SHOWCASED_FRAMEWORKS } from './frameworks-hCp8-s9f.mjs';
import { defineComponent, shallowRef, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

//#region app/components/InstantSearch.vue?vue&type=script&setup=true&lang.ts
var InstantSearch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstantSearch",
	__ssrInlineRender: true,
	setup(__props) {
		const { settings } = useSettings();
		onPrehydrate("(e=>{JSON.parse(localStorage.getItem(`npmx-settings`)||`{}`).instantSearch===!1&&(e.querySelector(`[data-instant-search-on]`).className=`hidden`,e.querySelector(`[data-instant-search-off]`).className=``)})", "-D4awrbzj_");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<p${ssrRenderAttrs(mergeProps({
				id: "instant-search-advisory",
				class: "text-fg-muted text-sm text-pretty"
			}, _attrs))}><span class="i-lucide:zap align-middle text-fg relative top-[-0.1em] me-1" style="${ssrRenderStyle({ "font-size": "0.8em" })}" aria-hidden="true"></span><span data-instant-search-on class="${ssrRenderClass(unref(settings).instantSearch ? "" : "hidden")}">`);
			_push(ssrRenderComponent(_component_i18n_t, { keypath: "search.instant_search_advisory" }, {
				label: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("search.instant_search"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("search.instant_search")), 1)];
				}),
				state: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>${ssrInterpolate(_ctx.$t("search.instant_search_on"))}</strong>`);
					else return [createVNode("strong", null, toDisplayString(_ctx.$t("search.instant_search_on")), 1)];
				}),
				action: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="underline"${_scopeId}>${ssrInterpolate(_ctx.$t("search.instant_search_turn_off"))}</button>`);
					else return [createVNode("button", {
						type: "button",
						class: "underline",
						onClick: ($event) => unref(settings).instantSearch = false
					}, toDisplayString(_ctx.$t("search.instant_search_turn_off")), 9, ["onClick"])];
				}),
				_: 1
			}, _parent));
			_push(`</span><span data-instant-search-off class="${ssrRenderClass(unref(settings).instantSearch ? "hidden" : "")}">`);
			_push(ssrRenderComponent(_component_i18n_t, { keypath: "search.instant_search_advisory" }, {
				label: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("search.instant_search"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("search.instant_search")), 1)];
				}),
				state: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>${ssrInterpolate(_ctx.$t("search.instant_search_off"))}</strong>`);
					else return [createVNode("strong", null, toDisplayString(_ctx.$t("search.instant_search_off")), 1)];
				}),
				action: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="underline"${_scopeId}>${ssrInterpolate(_ctx.$t("search.instant_search_turn_on"))}</button>`);
					else return [createVNode("button", {
						type: "button",
						class: "underline",
						onClick: ($event) => unref(settings).instantSearch = true
					}, toDisplayString(_ctx.$t("search.instant_search_turn_on")), 9, ["onClick"])];
				}),
				_: 1
			}, _parent));
			_push(`</span></p>`);
		};
	}
});
//#endregion
//#region app/components/InstantSearch.vue
var _sfc_setup$1 = InstantSearch_vue_vue_type_script_setup_true_lang_default.setup;
InstantSearch_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstantSearch.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var InstantSearch_default = Object.assign(InstantSearch_vue_vue_type_script_setup_true_lang_default, { __name: "InstantSearch" });
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { model: searchQuery, startSearch } = useGlobalSearch();
		const isSearchFocused = shallowRef(false);
		const { env } = useAppConfig().buildInfo;
		useSeoMeta$1({
			title: () => $t("seo.home.title"),
			ogTitle: () => $t("seo.home.title"),
			twitterTitle: () => $t("seo.home.title"),
			description: () => $t("seo.home.description"),
			ogDescription: () => $t("seo.home.description"),
			twitterDescription: () => $t("seo.home.description")
		});
		defineOgImageComponent("Default", {
			primaryColor: "#60a5fa",
			title: "npmx",
			description: "a fast, modern browser for the **npm registry**"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AppLogo = AppLogo_default;
			const _component_InputBase = Base_default;
			const _component_ButtonBase = Base_default$1;
			const _component_InstantSearch = InstantSearch_default;
			const _component_BuildEnvironment = BuildEnvironment_default;
			const _component_LinkBase = Base_default$2;
			const _component_CallToAction = CallToAction_default;
			_push(`<main${ssrRenderAttrs(_attrs)} data-v-68412fe5><section class="container min-h-screen flex flex-col" data-v-68412fe5><header class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-20" data-v-68412fe5><h1 dir="ltr" class="relative flex items-center justify-center gap-2 header-logo font-mono text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight mb-6 motion-safe:animate-fade-in motion-safe:animate-fill-both" data-v-68412fe5>`);
			_push(ssrRenderComponent(_component_AppLogo, { class: "w-42 h-auto sm:w-58 md:w-70" }, null, _parent));
			_push(`<span aria-hidden="true" class="text-sm sm:text-base md:text-lg transform-origin-br font-mono tracking-widest text-accent absolute -bottom-4 -inset-ie-1.5" data-v-68412fe5>${ssrInterpolate(unref(env) === "release" ? "alpha" : unref(env))}</span></h1><p class="text-fg-muted text-lg sm:text-xl max-w-xl mb-12 lg:mb-14 motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-68412fe5>${ssrInterpolate(unref($t)("tagline"))}</p><search class="w-full max-w-2xl motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-68412fe5><form method="GET" action="/search" class="relative grid justify-items-center gap-4" data-v-68412fe5><label for="home-search" class="sr-only" data-v-68412fe5>${ssrInterpolate(unref($t)("search.label"))}</label><div class="${ssrRenderClass([{ "is-focused": unref(isSearchFocused) }, "relative group w-full max-w-xl"])}" data-v-68412fe5><div class="absolute z-1 -inset-px pointer-events-none rounded-lg bg-gradient-to-r from-fg/0 to-accent/5 opacity-0 transition-opacity duration-500 blur-sm group-[.is-focused]:opacity-100" data-v-68412fe5></div><div class="search-box relative flex items-center" data-v-68412fe5><kbd class="absolute inset-is-4 text-fg-subtle font-mono text-lg pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1 rounded" aria-hidden="true" data-v-68412fe5> / </kbd>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "home-search",
				modelValue: unref(searchQuery),
				"onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
				type: "search",
				name: "q",
				autofocus: "",
				placeholder: unref($t)("search.placeholder"),
				"no-correct": "",
				size: "lg",
				class: "w-full ps-8 pe-24",
				"aria-describedby": "instant-search-advisory",
				onFocus: ($event) => isSearchFocused.value = true,
				onBlur: ($event) => isSearchFocused.value = false,
				ariaKeyshortcuts: "/"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ButtonBase, {
				type: "submit",
				variant: "primary",
				class: "absolute inset-ie-2 border-transparent",
				classicon: "i-lucide:search"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="sr-only sm:not-sr-only" data-v-68412fe5${_scopeId}>${ssrInterpolate(unref($t)("search.button"))}</span>`);
					else return [createVNode("span", { class: "sr-only sm:not-sr-only" }, toDisplayString(unref($t)("search.button")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
			_push(ssrRenderComponent(_component_InstantSearch, null, null, _parent));
			_push(`</form></search>`);
			_push(ssrRenderComponent(_component_BuildEnvironment, { class: "mt-4" }, null, _parent));
			_push(`</header><nav${ssrRenderAttr("aria-label", unref($t)("nav.popular_packages"))} class="pt-4 pb-36 sm:pb-40 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both max-w-xl mx-auto" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-68412fe5><ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 list-none m-0 p-0" data-v-68412fe5><!--[-->`);
			ssrRenderList(unref(SHOWCASED_FRAMEWORKS), (framework) => {
				_push(`<li data-v-68412fe5>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(framework.package),
					class: "gap-2 text-sm"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" data-v-68412fe5${_scopeId}></span> ${ssrInterpolate(framework.name)}`);
						else return [createVNode("span", { class: "home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" }), createTextVNode(" " + toDisplayString(framework.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav></section><section class="border-t border-border py-24 bg-bg-subtle/10" data-v-68412fe5><div class="container max-w-3xl mx-auto" data-v-68412fe5>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div></section></main>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /* @__PURE__ */ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-68412fe5"]]);

export { pages_default as default };
//# sourceMappingURL=pages-CIhHQ7yO.mjs.map

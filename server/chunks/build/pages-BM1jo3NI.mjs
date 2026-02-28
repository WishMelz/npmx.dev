import { _ as _plugin_vue_export_helper_default, u as useI18n, k as useGlobalSearch, l as useAppConfig, b as useSeoMeta$1, A as AppLogo_default, m as Base_default$1, o as Base_default, p as BuildEnvironment_default, B as Base_default$2, q as packageRoute } from './server.mjs';
import { C as CallToAction_default } from './CallToAction-CTd_DlY1.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { S as SHOWCASED_FRAMEWORKS } from './frameworks-Cvl8C7l0.mjs';
import { defineComponent, shallowRef, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
import 'semver';
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
import 'vue-router';
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'perfect-debounce';

var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { model: searchQuery, flushUpdateUrlQuery } = useGlobalSearch();
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
			const _component_InputBase = Base_default$1;
			const _component_ButtonBase = Base_default;
			const _component_BuildEnvironment = BuildEnvironment_default;
			const _component_LinkBase = Base_default$2;
			const _component_CallToAction = CallToAction_default;
			_push(`<main${ssrRenderAttrs(_attrs)} data-v-99b22386><section class="container min-h-screen flex flex-col" data-v-99b22386><header class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-20" data-v-99b22386><h1 dir="ltr" class="relative flex items-center justify-center gap-2 header-logo font-mono text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight mb-2 motion-safe:animate-fade-in motion-safe:animate-fill-both" data-v-99b22386>`);
			_push(ssrRenderComponent(_component_AppLogo, { class: "w-12 h-12 -ms-3 sm:w-20 sm:h-20 sm:-ms-5 md:w-24 md:h-24 md:-ms-6 rounded-2xl sm:rounded-3xl" }, null, _parent));
			_push(`<span class="pb-4" data-v-99b22386>npmx</span><span aria-hidden="true" class="scale-15 transform-origin-br font-mono tracking-widest text-accent absolute bottom-3 -inset-ie-1.5" data-v-99b22386>${ssrInterpolate(unref(env) === "release" ? "alpha" : unref(env))}</span></h1><p class="text-fg-muted text-lg sm:text-xl max-w-xl mb-12 lg:mb-14 motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-99b22386>${ssrInterpolate(unref($t)("tagline"))}</p><search class="w-full max-w-xl motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-99b22386><form method="GET" action="/search" class="relative" data-v-99b22386><label for="home-search" class="sr-only" data-v-99b22386>${ssrInterpolate(unref($t)("search.label"))}</label><div class="${ssrRenderClass([{ "is-focused": unref(isSearchFocused) }, "relative group"])}" data-v-99b22386><div class="absolute z-1 -inset-px pointer-events-none rounded-lg bg-gradient-to-r from-fg/0 to-accent/5 opacity-0 transition-opacity duration-500 blur-sm group-[.is-focused]:opacity-100" data-v-99b22386></div><div class="search-box relative flex items-center" data-v-99b22386><span class="absolute inset-is-4 text-fg-subtle font-mono text-lg pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1" data-v-99b22386> / </span>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "home-search",
				modelValue: unref(searchQuery),
				"onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
				type: "search",
				name: "q",
				autofocus: "",
				placeholder: unref($t)("search.placeholder"),
				"no-correct": "",
				size: "large",
				class: "w-full ps-8 pe-24",
				onFocus: ($event) => isSearchFocused.value = true,
				onBlur: ($event) => isSearchFocused.value = false
			}, null, _parent));
			_push(ssrRenderComponent(_component_ButtonBase, {
				type: "submit",
				variant: "primary",
				class: "absolute inset-ie-2 border-transparent",
				classicon: "i-lucide:search"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="sr-only sm:not-sr-only" data-v-99b22386${_scopeId}>${ssrInterpolate(unref($t)("search.button"))}</span>`);
					else return [createVNode("span", { class: "sr-only sm:not-sr-only" }, toDisplayString(unref($t)("search.button")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></form></search>`);
			_push(ssrRenderComponent(_component_BuildEnvironment, { class: "mt-4" }, null, _parent));
			_push(`</header><nav${ssrRenderAttr("aria-label", unref($t)("nav.popular_packages"))} class="pt-4 pb-36 sm:pb-40 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both max-w-xl mx-auto" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-99b22386><ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 list-none m-0 p-0" data-v-99b22386><!--[-->`);
			ssrRenderList(unref(SHOWCASED_FRAMEWORKS), (framework) => {
				_push(`<li data-v-99b22386>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(framework.package),
					class: "gap-2 text-sm"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" data-v-99b22386${_scopeId}></span> ${ssrInterpolate(framework.name)}`);
						else return [createVNode("span", { class: "home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" }), createTextVNode(" " + toDisplayString(framework.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav></section><section class="border-t border-border py-24 bg-bg-subtle/10" data-v-99b22386><div class="container max-w-3xl mx-auto" data-v-99b22386>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div></section></main>`);
		};
	}
});
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /* @__PURE__ */ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-99b22386"]]);

export { pages_default as default };
//# sourceMappingURL=pages-BM1jo3NI.mjs.map

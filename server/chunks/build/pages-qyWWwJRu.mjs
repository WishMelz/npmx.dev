import { k as useI18n, f as useFocus, U as useSeoMeta$1, w as AppLogo_default, C as noCorrect, n as BuildEnvironment_default, j as nuxt_link_default, J as navigateTo } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { C as CallToAction_default } from './CallToAction-DIg9b0S9.mjs';
import { S as SHOWCASED_FRAMEWORKS } from './frameworks-BKkcLNOX.mjs';
import { defineComponent, shallowRef, useTemplateRef, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const searchQuery = shallowRef("");
		const searchInputRef = useTemplateRef("searchInputRef");
		const { focused: isSearchFocused } = useFocus(searchInputRef);
		async function search() {
			const query = searchQuery.value.trim();
			if (!query) return;
			await navigateTo({
				path: "/search",
				query: query ? { q: query } : void 0
			});
			if (searchQuery.value.trim() !== query) await search();
		}
		debounce(search, 250, {
			leading: true,
			trailing: true
		});
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
			description: "A better browser for the **npm registry**"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AppLogo = AppLogo_default;
			const _component_BuildEnvironment = BuildEnvironment_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_CallToAction = CallToAction_default;
			let _temp0;
			_push(`<main${ssrRenderAttrs(_attrs)}><section class="container min-h-screen flex flex-col"><header class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-20"><h1 dir="ltr" class="flex items-center justify-center gap-2 header-logo font-mono text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight mb-2 motion-safe:animate-fade-in motion-safe:animate-fill-both">`);
			_push(ssrRenderComponent(_component_AppLogo, { class: "w-12 h-12 -ms-3 sm:w-20 sm:h-20 sm:-ms-5 md:w-24 md:h-24 md:-ms-6 rounded-2xl sm:rounded-3xl" }, null, _parent));
			_push(`<span class="pb-4">npmx</span></h1><p class="text-fg-muted text-lg sm:text-xl max-w-md mb-12 lg:mb-14 motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}">${ssrInterpolate(unref($t)("tagline"))}</p><search class="w-full max-w-xl motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"><form method="GET" action="/search" class="relative"><label for="home-search" class="sr-only">${ssrInterpolate(unref($t)("search.label"))}</label><div class="${ssrRenderClass([{ "is-focused": unref(isSearchFocused) }, "relative group"])}"><div class="absolute -inset-px rounded-lg bg-gradient-to-r from-fg/0 via-fg/5 to-fg/0 opacity-0 transition-opacity duration-500 blur-sm group-[.is-focused]:opacity-100"></div><div class="search-box relative flex items-center"><span class="absolute inset-is-4 text-fg-subtle font-mono text-lg pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1"> / </span><input${ssrRenderAttrs((_temp0 = mergeProps({
				id: "home-search",
				ref_key: "searchInputRef",
				ref: searchInputRef,
				value: unref(searchQuery),
				type: "search",
				name: "q",
				autofocus: "",
				placeholder: unref($t)("search.placeholder")
			}, "noCorrect" in _ctx ? _ctx.noCorrect : unref(noCorrect), { class: "w-full bg-bg-subtle border border-border rounded-xl ps-8 pe-24 h-14 py-4 font-mono text-base text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 motion-reduce:transition-none hover:border-fg-subtle outline-2 outline-transparent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70" }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(searchQuery)))))}><button type="submit" class="absolute group inset-ie-2.5 px-2.5 sm:ps-4 sm:pe-4 py-2 font-mono text-sm text-bg bg-fg/90 rounded-md transition-[background-color,transform] duration-200 hover:bg-fg! group-focus-within:bg-fg/80 active:scale-95 focus-visible:outline-accent/70"><span class="inline-block i-carbon:search align-middle w-4 h-4 sm:me-2" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("search.button"))}</span></button></div></div></form></search>`);
			_push(ssrRenderComponent(_component_BuildEnvironment, { class: "mt-4" }, null, _parent));
			_push(`</header><nav${ssrRenderAttr("aria-label", unref($t)("nav.popular_packages"))} class="pt-4 pb-36 sm:pb-40 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}"><ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 list-none m-0 p-0"><!--[-->`);
			ssrRenderList(unref(SHOWCASED_FRAMEWORKS), (framework) => {
				_push(`<li>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: {
						name: "package",
						params: { package: [framework.package] }
					},
					class: "link-subtle font-mono text-sm inline-flex items-center gap-2 group"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200"${_scopeId}></span> ${ssrInterpolate(framework.name)}`);
						else return [createVNode("span", { class: "w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" }), createTextVNode(" " + toDisplayString(framework.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav></section><section class="border-t border-border py-24 bg-bg-subtle/10"><div class="container max-w-3xl mx-auto">`);
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
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-qyWWwJRu.mjs.map

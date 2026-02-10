import { a as _plugin_vue_export_helper_default, H as useI18n, u as useSearchProvider, nt as useSeoMeta$1, F as AppLogo_default, M as Base_default$1, i as Base_default, t as BuildEnvironment_default, I as Base_default$2, s as packageRoute, st as navigateTo } from './server.mjs';
import { C as CallToAction_default } from './CallToAction-C5cSDbAQ.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DtDCPnhJ.mjs';
import { S as SHOWCASED_FRAMEWORKS } from './frameworks-DgfDq5Tu.mjs';
import { defineComponent, shallowRef, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { isAlgolia } = useSearchProvider();
		const searchQuery = shallowRef("");
		const isSearchFocused = shallowRef(false);
		async function search() {
			const query = searchQuery.value.trim();
			if (!query) return;
			await navigateTo({
				path: "/search",
				query: query ? { q: query } : void 0
			});
			if (searchQuery.value.trim() !== query) await search();
		}
		const handleInputNpm = debounce(search, 250, {
			leading: true,
			trailing: true
		});
		const handleInputAlgolia = debounce(search, 80, {
			leading: true,
			trailing: true
		});
		function handleInput() {
			if (isAlgolia.value) handleInputAlgolia();
			else handleInputNpm();
		}
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
			_push(`<main${ssrRenderAttrs(_attrs)} data-v-293c23a7><section class="container min-h-screen flex flex-col" data-v-293c23a7><header class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-20" data-v-293c23a7><h1 dir="ltr" class="flex items-center justify-center gap-2 header-logo font-mono text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight mb-2 motion-safe:animate-fade-in motion-safe:animate-fill-both" data-v-293c23a7>`);
			_push(ssrRenderComponent(_component_AppLogo, { class: "w-12 h-12 -ms-3 sm:w-20 sm:h-20 sm:-ms-5 md:w-24 md:h-24 md:-ms-6 rounded-2xl sm:rounded-3xl" }, null, _parent));
			_push(`<span class="pb-4" data-v-293c23a7>npmx</span></h1><p class="text-fg-muted text-lg sm:text-xl max-w-xl mb-12 lg:mb-14 motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-293c23a7>${ssrInterpolate(unref($t)("tagline"))}</p><search class="w-full max-w-xl motion-safe:animate-slide-up motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-293c23a7><form method="GET" action="/search" class="relative" data-v-293c23a7><label for="home-search" class="sr-only" data-v-293c23a7>${ssrInterpolate(unref($t)("search.label"))}</label><div class="${ssrRenderClass([{ "is-focused": unref(isSearchFocused) }, "relative group"])}" data-v-293c23a7><div class="absolute z-1 -inset-px pointer-events-none rounded-lg bg-gradient-to-r from-fg/0 to-accent/5 opacity-0 transition-opacity duration-500 blur-sm group-[.is-focused]:opacity-100" data-v-293c23a7></div><div class="search-box relative flex items-center" data-v-293c23a7><span class="absolute inset-is-4 text-fg-subtle font-mono text-lg pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1" data-v-293c23a7> / </span>`);
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
				onBlur: ($event) => isSearchFocused.value = false,
				onInput: handleInput
			}, null, _parent));
			_push(ssrRenderComponent(_component_ButtonBase, {
				type: "submit",
				variant: "primary",
				class: "absolute inset-ie-2",
				classicon: "i-carbon:search"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="sr-only sm:not-sr-only" data-v-293c23a7${_scopeId}>${ssrInterpolate(unref($t)("search.button"))}</span>`);
					else return [createVNode("span", { class: "sr-only sm:not-sr-only" }, toDisplayString(unref($t)("search.button")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></form></search>`);
			_push(ssrRenderComponent(_component_BuildEnvironment, { class: "mt-4" }, null, _parent));
			_push(`</header><nav${ssrRenderAttr("aria-label", unref($t)("nav.popular_packages"))} class="pt-4 pb-36 sm:pb-40 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-293c23a7><ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 list-none m-0 p-0" data-v-293c23a7><!--[-->`);
			ssrRenderList(unref(SHOWCASED_FRAMEWORKS), (framework) => {
				_push(`<li data-v-293c23a7>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(framework.package),
					class: "gap-2 text-sm"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" data-v-293c23a7${_scopeId}></span> ${ssrInterpolate(framework.name)}`);
						else return [createVNode("span", { class: "home-tag-dot w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" }), createTextVNode(" " + toDisplayString(framework.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav></section><section class="border-t border-border py-24 bg-bg-subtle/10" data-v-293c23a7><div class="container max-w-3xl mx-auto" data-v-293c23a7>`);
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
var pages_default = /* @__PURE__ */ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-293c23a7"]]);

export { pages_default as default };
//# sourceMappingURL=pages-DOWQLUy2.mjs.map

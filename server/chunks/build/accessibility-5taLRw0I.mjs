import { u as useI18n, b as useSeoMeta$1, a as useRouter, n as nuxt_link_default } from './server.mjs';
import { u as useCanGoBack } from './useCanGoBack-DqTkP1_4.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

var accessibility_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "accessibility",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("a11y.title")} - npmx`,
			description: () => $t("a11y.welcome", { app: "npmx" })
		});
		defineOgImageComponent("Default", {
			title: () => $t("a11y.title"),
			description: () => $t("a11y.welcome", { app: "npmx" })
		});
		useRouter();
		const canGoBack = useCanGoBack();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_NuxtLink = nuxt_link_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("a11y.title"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded shrink-0"><span class="i-lucide:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div></header><section class="prose prose-invert max-w-none space-y-8"><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "a11y.welcome",
				tag: "span",
				scope: "global"
			}, {
				app: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>npmx</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, "npmx")];
				}),
				_: 1
			}, _parent));
			_push(`</p><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("a11y.approach.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("a11y.approach.p1"))}</p><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "a11y.approach.p2",
				tag: "span",
				scope: "global"
			}, {
				about: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
						to: { name: "about" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("a11y.approach.about_link"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("a11y.approach.about_link")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_NuxtLink, {
						to: { name: "about" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("a11y.approach.about_link")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("a11y.measures.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("a11y.measures.p1"))}</p><ul class="space-y-3 text-fg-muted list-none p-0"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li1"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li2"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li3"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li4"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li5"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("a11y.measures.li6"))}</span></li></ul></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("a11y.limitations.title"))}</h2><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("a11y.limitations.p1"))}</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("a11y.contact.title"))}</h2><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "a11y.contact.p1",
				tag: "span",
				scope: "global"
			}, {
				app: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>npmx</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, "npmx")];
				}),
				link: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://github.com/npmx-dev/npmx.dev/issues" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("a11y.contact.link"))} <span class="i-lucide:external-link rtl-flip w-4 h-4" aria-hidden="true"${_scopeId}></span></a>`);
					else return [createVNode("a", {
						href: "https://github.com/npmx-dev/npmx.dev/issues",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, [createTextVNode(toDisplayString(unref($t)("a11y.contact.link")) + " ", 1), createVNode("span", {
						class: "i-lucide:external-link rtl-flip w-4 h-4",
						"aria-hidden": "true"
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></section></article></main>`);
		};
	}
});
var _sfc_setup = accessibility_vue_vue_type_script_setup_true_lang_default.setup;
accessibility_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/accessibility.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var accessibility_default = accessibility_vue_vue_type_script_setup_true_lang_default;

export { accessibility_default as default };
//# sourceMappingURL=accessibility-5taLRw0I.mjs.map

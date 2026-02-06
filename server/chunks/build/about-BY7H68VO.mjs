import { k as useI18n, X as useRouter$1, U as useSeoMeta$1, M as useFetch } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { C as CallToAction_default } from './CallToAction-DIg9b0S9.mjs';
import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

var about_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useRouter$1();
		useSeoMeta$1({
			title: () => `${$t("about.title")} - npmx`,
			ogTitle: () => `${$t("about.title")} - npmx`,
			twitterTitle: () => `${$t("about.title")} - npmx`,
			description: () => $t("about.meta_description"),
			ogDescription: () => $t("about.meta_description"),
			twitterDescription: () => $t("about.meta_description")
		});
		defineOgImageComponent("Default", {
			primaryColor: "#60a5fa",
			title: "About npmx",
			description: "A better browser for the **npm registry**"
		});
		const pmLinks = {
			npm: "https://www.npmjs.com/",
			pnpm: "https://pnpm.io/",
			yarn: "https://yarnpkg.com/",
			bun: "https://bun.sh/",
			deno: "https://deno.com/",
			vlt: "https://www.vlt.sh/"
		};
		const { data: contributors, status: contributorsStatus } = useFetch("/api/contributors", { lazy: true }, "$ZVWQaBtXE8");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_CallToAction = CallToAction_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("about.heading"))}</h1><button type="button" class="inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="hidden sm:inline">${ssrInterpolate(unref($t)("nav.back"))}</span></button></div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("tagline"))}</p></header><section class="prose prose-invert max-w-none space-y-8"><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("about.what_we_are.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "about.what_we_are.description",
				tag: "span",
				scope: "global"
			}, {
				betterUxDx: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are.better_ux_dx"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("about.what_we_are.better_ux_dx")), 1)];
				}),
				jsr: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://jsr.io/" target="_blank" rel="noopener noreferrer" class="link text-fg"${_scopeId}>JSR</a>`);
					else return [createVNode("a", {
						href: "https://jsr.io/",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "link text-fg"
					}, "JSR")];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "about.what_we_are.admin_description",
				tag: "span",
				scope: "global"
			}, {
				adminUi: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are.admin_ui"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("about.what_we_are.admin_ui")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("about.what_we_are_not.title"))}</h2><ul class="space-y-3 text-fg-muted list-none p-0"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0 mt-1">—</span><span><strong class="text-fg">${ssrInterpolate(unref($t)("about.what_we_are_not.not_package_manager"))}</strong> ${ssrInterpolate(" ")} `);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "about.what_we_are_not.package_managers_exist",
				tag: "span",
				scope: "global"
			}, {
				already: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.already"))}`);
					else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.already")), 1)];
				}),
				people: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.npm)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.people"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.npm,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.people")), 9, ["href"])];
				}),
				building: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.pnpm)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.building"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.pnpm,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.building")), 9, ["href"])];
				}),
				really: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.yarn)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.really"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.yarn,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.really")), 9, ["href"])];
				}),
				cool: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.bun)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.cool"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.bun,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.cool")), 9, ["href"])];
				}),
				package: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.deno)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.package"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.deno,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.package")), 9, ["href"])];
				}),
				managers: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", pmLinks.vlt)} target="_blank" rel="noopener noreferrer" class="text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("about.what_we_are_not.words.managers"))}</a>`);
					else return [createVNode("a", {
						href: pmLinks.vlt,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, toDisplayString(unref($t)("about.what_we_are_not.words.managers")), 9, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0 mt-1">—</span><span><strong class="text-fg">${ssrInterpolate(unref($t)("about.what_we_are_not.not_registry"))}</strong> ${ssrInterpolate(unref($t)("about.what_we_are_not.registry_description"))}</span></li></ul></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("about.contributors.title", { count: _ctx.$n(unref(contributors)?.length ?? 0) }, unref(contributors)?.length ?? 0))}</h2><p class="text-fg-muted leading-relaxed mb-6">${ssrInterpolate(unref($t)("about.contributors.description"))}</p>`);
			if (unref(contributorsStatus) === "pending") _push(`<div class="text-fg-subtle text-sm">${ssrInterpolate(unref($t)("about.contributors.loading"))}</div>`);
			else if (unref(contributorsStatus) === "error") _push(`<div class="text-fg-subtle text-sm">${ssrInterpolate(unref($t)("about.contributors.error"))}</div>`);
			else if (unref(contributors)?.length) {
				_push(`<div class="grid grid-cols-[repeat(auto-fill,48px)] justify-center gap-2"><!--[-->`);
				ssrRenderList(unref(contributors), (contributor) => {
					_push(`<a${ssrRenderAttr("href", contributor.html_url)} target="_blank" rel="noopener noreferrer" class="group relative"${ssrRenderAttr("aria-label", unref($t)("about.contributors.view_profile", { name: contributor.login }))}><div class="relative flex items-center"><img${ssrRenderAttr("src", `${contributor.avatar_url}&s=64`)}${ssrRenderAttr("alt", contributor.login)} width="32" height="32" class="w-12 h-12 rounded-lg ring-2 ring-transparent group-hover:ring-accent transition-all duration-200 ease-out hover:scale-125 will-change-transform" loading="lazy"><span class="pointer-events-none absolute -top-9 inset-is-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 text-xs px-2 py-1 shadow-lg opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100"> @${ssrInterpolate(contributor.login)}</span></div></a>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</section></article></main>`);
		};
	}
});
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = about_vue_vue_type_script_setup_true_lang_default;

export { about_default as default };
//# sourceMappingURL=about-BY7H68VO.mjs.map

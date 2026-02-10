import { H as useI18n, lt as useRouter$1, nt as useSeoMeta$1, K as useLazyFetch, I as Base_default$2 } from './server.mjs';
import { C as CallToAction_default } from './CallToAction-C5cSDbAQ.mjs';
import { u as useCanGoBack } from './useCanGoBack-DH1Opmzd.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DtDCPnhJ.mjs';
import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

var about_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useRouter$1();
		const canGoBack = useCanGoBack();
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
			title: "about npmx",
			description: "a fast, modern browser for the **npm registry**"
		});
		const pmLinks = {
			npm: "https://www.npmjs.com/",
			pnpm: "https://pnpm.io/",
			yarn: "https://yarnpkg.com/",
			bun: "https://bun.sh/",
			deno: "https://deno.com/",
			vlt: "https://www.vlt.sh/"
		};
		const { data: contributors, status: contributorsStatus } = useLazyFetch("/api/contributors", "$ZVWQaBtXE8");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_LinkBase = Base_default$2;
			const _component_CallToAction = CallToAction_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("about.heading"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="hidden sm:inline">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("tagline"))}</p></header><section class="prose prose-invert max-w-none space-y-8"><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("about.what_we_are.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
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
					if (_push) _push(ssrRenderComponent(_component_LinkBase, { to: "https://jsr.io/" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`JSR`);
							else return [createTextVNode("JSR")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, { to: "https://jsr.io/" }, {
						default: withCtx(() => [createTextVNode("JSR")]),
						_: 1
					})];
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
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.npm,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.people"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.people")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.npm,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.people")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				building: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.pnpm,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.building"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.building")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.pnpm,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.building")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				really: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.yarn,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.really"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.really")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.yarn,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.really")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				cool: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.bun,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.cool"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.cool")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.bun,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.cool")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				package: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.deno,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.package"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.package")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.deno,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.package")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				managers: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						to: pmLinks.vlt,
						class: "font-sans"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("about.what_we_are_not.words.managers"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.managers")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						to: pmLinks.vlt,
						class: "font-sans"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("about.what_we_are_not.words.managers")), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				_: 1
			}, _parent));
			_push(`</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0 mt-1">—</span><span><strong class="text-fg">${ssrInterpolate(unref($t)("about.what_we_are_not.not_registry"))}</strong> ${ssrInterpolate(unref($t)("about.what_we_are_not.registry_description"))}</span></li></ul></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("about.contributors.title", { count: _ctx.$n(unref(contributors)?.length ?? 0) }, unref(contributors)?.length ?? 0))}</h2><p class="text-fg-muted leading-relaxed mb-6">${ssrInterpolate(unref($t)("about.contributors.description"))}</p>`);
			if (unref(contributorsStatus) === "pending") _push(`<div class="text-fg-subtle text-sm">${ssrInterpolate(unref($t)("about.contributors.loading"))}</div>`);
			else if (unref(contributorsStatus) === "error") _push(`<div class="text-fg-subtle text-sm">${ssrInterpolate(unref($t)("about.contributors.error"))}</div>`);
			else if (unref(contributors)?.length) {
				_push(`<div class="grid grid-cols-[repeat(auto-fill,48px)] justify-center gap-2"><!--[-->`);
				ssrRenderList(unref(contributors), (contributor) => {
					_push(`<a${ssrRenderAttr("href", contributor.html_url)} target="_blank" rel="noopener noreferrer" class="group relative"${ssrRenderAttr("aria-label", unref($t)("about.contributors.view_profile", { name: contributor.login }))}><div class="relative flex items-center"><img${ssrRenderAttr("src", `${contributor.avatar_url}&s=64`)}${ssrRenderAttr("alt", contributor.login)} width="32" height="32" class="w-12 h-12 rounded-lg ring-2 ring-transparent group-hover:ring-accent transition-all duration-200 ease-out hover:scale-125 will-change-transform" loading="lazy"><span class="pointer-events-none absolute -top-9 inset-is-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 text-xs px-2 py-1 shadow-lg opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100" dir="ltr"> @${ssrInterpolate(contributor.login)}</span></div></a>`);
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
//# sourceMappingURL=about-DmgAOZ5F.mjs.map

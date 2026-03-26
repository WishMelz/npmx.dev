import { u as useI18n, a as useSeoMeta$1, B as Base_default } from './server-placeholder-C9fYItBT.mjs';
import { u as useLazyFetch } from './fetch-CVxFI0ck.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { B as BackButton_default } from './BackButton-Dnk12j1Z.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
import './asyncData-Dr04OizO.mjs';
import './useCanGoBack-CvNAow9_.mjs';
import '@floating-ui/vue';

//#region app/pages/pds.vue?vue&type=script&setup=true&lang.ts
var pds_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "pds",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("pds.title")} - npmx`,
			ogTitle: () => `${$t("pds.title")} - npmx`,
			twitterTitle: () => `${$t("pds.title")} - npmx`,
			description: () => $t("pds.meta_description"),
			ogDescription: () => $t("pds.meta_description"),
			twitterDescription: () => $t("pds.meta_description")
		});
		defineOgImageComponent("Default", {
			primaryColor: "#60a5fa",
			title: "npmx.social",
			description: "The official **PDS** for the npmx community."
		});
		const brokenImages = ref(/* @__PURE__ */ new Set());
		const handleImageError = (handle) => {
			brokenImages.value.add(handle);
		};
		const { data: pdsUsers, status: pdsStatus } = useLazyFetch("/api/atproto/pds-users", { default: () => [] }, "$5teALsv7GP");
		const usersWithAvatars = computed(() => {
			return pdsUsers.value.filter((user) => user.avatar && !brokenImages.value.has(user.handle));
		});
		const usersWithoutAvatars = computed(() => {
			return pdsUsers.value.filter((user) => !user.avatar || brokenImages.value.has(user.handle));
		});
		const totalAccounts = computed(() => pdsUsers.value.length);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BackButton = BackButton_default;
			const _component_LinkBase = Base_default;
			const _component_TooltipApp = App_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("pds.title"))}</h1>`);
			_push(ssrRenderComponent(_component_BackButton, null, null, _parent));
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("pds.meta_description"))}</p></header><section class="max-w-none space-y-12"><div><h2 class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("pds.join.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("pds.join.description"))}</p><div class="mt-6">`);
			_push(ssrRenderComponent(_component_LinkBase, {
				to: "https://pdsmoover.com/moover/npmx.social",
				class: "gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border hover:border-border-hover bg-bg-muted hover:bg-bg",
				"no-underline": ""
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-lucide:arrow-right-left w-4 h-4 text-fg-muted" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(unref($t)("pds.join.migrate"))}`);
					else return [createVNode("span", {
						class: "i-lucide:arrow-right-left w-4 h-4 text-fg-muted",
						"aria-hidden": "true"
					}), createTextVNode(" " + toDisplayString(unref($t)("pds.join.migrate")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div><h2 class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("pds.server.title"))}</h2><ul class="space-y-3 text-fg-muted list-none p-0"><li class="flex items-start gap-3"><span class="i-lucide:map-pin shrink-0 mt-1 w-4 h-4 text-fg-subtle" aria-hidden="true"></span><span><strong class="text-fg">${ssrInterpolate(unref($t)("pds.server.location_label"))}</strong> ${ssrInterpolate(unref($t)("pds.server.location_value"))}</span></li><li class="flex items-start gap-3"><span class="i-lucide:server shrink-0 mt-1 w-4 h-4 text-fg-subtle" aria-hidden="true"></span><span><strong class="text-fg">${ssrInterpolate(unref($t)("pds.server.infrastructure_label"))}</strong> ${ssrInterpolate(unref($t)("pds.server.infrastructure_value"))}</span></li><li class="flex items-start gap-3"><span class="i-lucide:shield-check shrink-0 mt-1 w-4 h-4 text-fg-subtle" aria-hidden="true"></span><span><strong class="text-fg">${ssrInterpolate(unref($t)("pds.server.privacy_label"))}</strong> ${ssrInterpolate(unref($t)("pds.server.privacy_value"))}</span></li></ul><div class="mt-6">`);
			_push(ssrRenderComponent(_component_LinkBase, {
				to: "https://docs.npmx.dev/integrations/atmosphere",
				class: "gap-2 text-sm text-fg-muted hover:text-fg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-lucide:book-open w-4 h-4" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(unref($t)("pds.server.learn_more"))}`);
					else return [createVNode("span", {
						class: "i-lucide:book-open w-4 h-4",
						"aria-hidden": "true"
					}), createTextVNode(" " + toDisplayString(unref($t)("pds.server.learn_more")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div aria-labelledby="community-heading"><h2 id="community-heading" class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("pds.community.title"))}</h2><p class="text-fg-muted leading-relaxed mb-6">${ssrInterpolate(unref($t)("pds.community.description", { count: unref(totalAccounts) }))}</p>`);
			if (unref(pdsStatus) === "pending") _push(`<div class="text-fg-subtle text-sm" role="status">${ssrInterpolate(unref($t)("pds.community.loading"))}</div>`);
			else if (unref(pdsStatus) === "error") _push(`<div class="text-fg-subtle text-sm" role="alert">${ssrInterpolate(unref($t)("pds.community.error"))}</div>`);
			else if (!unref(pdsUsers).length) _push(`<div class="text-fg-subtle text-sm">${ssrInterpolate(unref($t)("pds.community.empty"))}</div>`);
			else {
				_push(`<div><ul class="grid grid-cols-[repeat(auto-fill,48px)] justify-center gap-2 list-none p-0"><!--[-->`);
				ssrRenderList(unref(usersWithAvatars), (user) => {
					_push(`<li class="block group relative hover:z-10">`);
					_push(ssrRenderComponent(_component_TooltipApp, {
						text: `@${user.handle}`,
						class: "block",
						position: "top"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<a${ssrRenderAttr("href", `https://bsky.app/profile/${user.handle}`)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", unref($t)("pds.community.view_profile", { handle: user.handle }))} class="block rounded-lg"${_scopeId}><img${ssrRenderAttr("src", user.avatar)}${ssrRenderAttr("alt", `${user.handle}'s avatar`)} width="48" height="48" class="w-12 h-12 rounded-lg ring-2 ring-transparent group-hover:ring-accent transition-all duration-200 ease-out group-hover:scale-125 will-change-transform" loading="lazy"${_scopeId}></a>`);
							else return [createVNode("a", {
								href: `https://bsky.app/profile/${user.handle}`,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": unref($t)("pds.community.view_profile", { handle: user.handle }),
								class: "block rounded-lg"
							}, [createVNode("img", {
								src: user.avatar,
								alt: `${user.handle}'s avatar`,
								onError: ($event) => handleImageError(user.handle),
								width: "48",
								height: "48",
								class: "w-12 h-12 rounded-lg ring-2 ring-transparent group-hover:ring-accent transition-all duration-200 ease-out group-hover:scale-125 will-change-transform",
								loading: "lazy"
							}, null, 40, [
								"src",
								"alt",
								"onError"
							])], 8, ["href", "aria-label"])];
						}),
						_: 2
					}, _parent));
					_push(`</li>`);
				});
				_push(`<!--]--></ul>`);
				if (unref(usersWithoutAvatars).length) _push(`<p class="text-center mt-4 text-fg-muted text-sm">${ssrInterpolate(unref($t)("pds.community.new_accounts", { count: unref(usersWithoutAvatars).length }))}</p>`);
				else _push(`<!---->`);
				_push(`</div>`);
			}
			_push(`</div></section></article></main>`);
		};
	}
});
//#endregion
//#region app/pages/pds.vue
var _sfc_setup = pds_vue_vue_type_script_setup_true_lang_default.setup;
pds_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pds.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pds_default = pds_vue_vue_type_script_setup_true_lang_default;

export { pds_default as default };
//# sourceMappingURL=pds-BZofvear.mjs.map

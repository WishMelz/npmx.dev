import { _ as _plugin_vue_export_helper_default, u as useI18n, a as useSeoMeta$1, J as server_placeholder_default, B as Base_default } from './server-placeholder-C9fYItBT.mjs';
import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { B as BackButton_default } from './BackButton-Dnk12j1Z.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/pages/recharging.vue?vue&type=script&setup=true&lang.ts
var recharging_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "recharging",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("vacations.title")} - npmx`,
			description: () => $t("vacations.meta_description"),
			ogTitle: () => `${$t("vacations.title")} - npmx`,
			ogDescription: () => $t("vacations.meta_description"),
			twitterTitle: () => `${$t("vacations.title")} - npmx`,
			twitterDescription: () => $t("vacations.meta_description")
		});
		defineOgImageComponent("Default", {
			title: () => $t("vacations.title"),
			description: () => $t("vacations.meta_description")
		});
		const { data: stats } = useFetch("/api/repo-stats", "$ixdzfitgel");
		/**
		* Formats a number into a compact human-readable string.
		* e.g. 1142 → "1.1k+", 163 → "160+"
		*/
		function formatStat(n) {
			if (n >= 1e3) return `${Math.floor(n / 100) / 10}k+`;
			return `${Math.floor(n / 10) * 10}+`;
		}
		ref(0);
		const fireVisible = ref(false);
		const icons = [
			"i-lucide:snowflake",
			"i-lucide:mountain",
			"i-lucide:tree-pine",
			"i-lucide:coffee",
			"i-lucide:book",
			"i-lucide:music",
			"i-lucide:snowflake",
			"i-lucide:star",
			"i-lucide:moon"
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BackButton = BackButton_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_BlueskyPostEmbed = server_placeholder_default;
			const _component_LinkBase = Base_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden max-w-full" }, _attrs))} data-v-3624a39a><article class="max-w-2xl mx-auto" data-v-3624a39a><header class="mb-12" data-v-3624a39a><div class="max-w-2xl mx-auto py-8 bg-none flex justify-center" data-v-3624a39a><div class="relative inline-block" data-v-3624a39a><div class="absolute inset-0 bg-accent/20 blur-3xl rounded-full" aria-hidden="true" data-v-3624a39a></div><span class="relative text-8xl sm:text-9xl animate-bounce-slow inline-block" data-v-3624a39a>🏖️</span></div></div><div class="flex items-baseline justify-between gap-4 mb-4" data-v-3624a39a><h1 class="font-mono text-3xl sm:text-4xl font-medium" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.heading"))}</h1>`);
			_push(ssrRenderComponent(_component_BackButton, null, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "vacations.subtitle",
				tag: "p",
				scope: "global",
				class: "text-fg-muted text-lg sm:text-xl"
			}, {
				some: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="line-through decoration-fg" data-v-3624a39a${_scopeId}>${ssrInterpolate(unref($t)("vacations.stats.subtitle.some"))}</span> ${ssrInterpolate(" ")} <strong class="text-fg" data-v-3624a39a${_scopeId}>${ssrInterpolate(unref($t)("vacations.stats.subtitle.all"))}</strong>`);
					else return [
						createVNode("span", { class: "line-through decoration-fg" }, toDisplayString(unref($t)("vacations.stats.subtitle.some")), 1),
						createTextVNode(" " + toDisplayString(" ") + " "),
						createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("vacations.stats.subtitle.all")), 1)
					];
				}),
				_: 1
			}, _parent));
			_push(`</header><div class="my-8" data-v-3624a39a>`);
			_push(ssrRenderComponent(_component_BlueskyPostEmbed, { uri: "at://did:plc:u5zp7npt5kpueado77kuihyz/app.bsky.feed.post/3mejzn5mrcc2g" }, null, _parent));
			_push(`</div><section class="max-w-none space-y-8" data-v-3624a39a><div data-v-3624a39a><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.what.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4" data-v-3624a39a>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "vacations.what.p1",
				tag: "span",
				scope: "global"
			}, {
				dates: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg" data-v-3624a39a${_scopeId}>${ssrInterpolate(unref($t)("vacations.what.dates"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("vacations.what.dates")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed mb-4" data-v-3624a39a>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "vacations.what.p2",
				tag: "span",
				scope: "global"
			}, {
				garden: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<code class="font-mono text-fg text-sm" data-v-3624a39a${_scopeId}>${ssrInterpolate(unref($t)("vacations.what.garden"))}</code>`);
					else return [createVNode("code", { class: "font-mono text-fg text-sm" }, toDisplayString(unref($t)("vacations.what.garden")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div data-v-3624a39a><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.meantime.title"))}</h2><p class="text-fg-muted leading-relaxed" data-v-3624a39a>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "vacations.meantime.p1",
				tag: "span",
				scope: "global"
			}, {
				site: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						class: "font-sans",
						to: "/"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`npmx.dev`);
							else return [createTextVNode("npmx.dev")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						class: "font-sans",
						to: "/"
					}, {
						default: withCtx(() => [createTextVNode("npmx.dev")]),
						_: 1
					})];
				}),
				repo: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						class: "font-sans",
						to: "https://repo.npmx.dev"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("vacations.meantime.repo_link"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("vacations.meantime.repo_link")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						class: "font-sans",
						to: "https://repo.npmx.dev"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("vacations.meantime.repo_link")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div class="relative mb-12 px-4 border border-border rounded-lg bg-bg-subtle overflow-hidden select-none"${ssrRenderAttr("aria-label", unref($t)("vacations.illustration_alt"))} role="group" data-v-3624a39a><div class="flex items-center gap-4 sm:gap-5 py-3 sm:py-4 w-max" data-v-3624a39a><!--[-->`);
			ssrRenderList(4, (n) => {
				_push(`<!--[--><button type="button" class="relative shrink-0 cursor-pointer rounded transition-transform duration-200 hover:scale-110 focus-visible:outline-accent/70 w-5 h-5 sm:w-6 sm:h-6"${ssrRenderAttr("aria-label", unref($t)("vacations.poke_log"))} data-v-3624a39a><span class="${ssrRenderClass([unref(fireVisible) ? "opacity-100" : "opacity-0", "absolute inset-0 i-lucide:flame-kindling w-5 h-5 sm:w-6 sm:h-6 text-orange-400 transition-opacity duration-400"])}" data-v-3624a39a></span><span class="${ssrRenderClass([unref(fireVisible) ? "text-amber-700" : "", "absolute inset-0 i-lucide:tent w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-400"])}" data-v-3624a39a></span></button><!--[-->`);
				ssrRenderList(icons, (icon, i) => {
					_push(`<span class="${ssrRenderClass([icon, "shrink-0 w-5 h-5 sm:w-6 sm:h-6 opacity-40"])}" aria-hidden="true" data-v-3624a39a></span>`);
				});
				_push(`<!--]--><!--]-->`);
			});
			_push(`<!--]--></div></div><div data-v-3624a39a><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.return.title"))}</h2><p class="text-fg-muted leading-relaxed mb-6" data-v-3624a39a>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "vacations.return.p1",
				tag: "span",
				scope: "global"
			}, {
				social: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						class: "font-sans",
						to: "https://social.npmx.dev"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("vacations.return.social_link"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("vacations.return.social_link")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						class: "font-sans",
						to: "https://social.npmx.dev"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("vacations.return.social_link")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p></div>`);
			if (unref(stats)) _push(`<div class="grid grid-cols-3 justify-center gap-4 sm:gap-8 mb-8 py-8 border-y border-border/50" data-v-3624a39a><div class="space-y-1 text-center" data-v-3624a39a><div class="font-mono text-2xl sm:text-3xl font-bold text-fg" data-v-3624a39a>${ssrInterpolate(formatStat(unref(stats).contributors))}</div><div class="text-xs sm:text-sm text-fg-subtle uppercase tracking-wider" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.stats.contributors"))}</div></div><div class="space-y-1 text-center" data-v-3624a39a><div class="font-mono text-2xl sm:text-3xl font-bold text-fg" data-v-3624a39a>${ssrInterpolate(formatStat(unref(stats).commits))}</div><div class="text-xs sm:text-sm text-fg-subtle uppercase tracking-wider" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.stats.commits"))}</div></div><div class="space-y-1 text-center" data-v-3624a39a><div class="font-mono text-2xl sm:text-3xl font-bold text-fg" data-v-3624a39a>${ssrInterpolate(formatStat(unref(stats).pullRequests))}</div><div class="text-xs sm:text-sm text-fg-subtle uppercase tracking-wider" data-v-3624a39a>${ssrInterpolate(unref($t)("vacations.stats.pr"))}</div></div></div>`);
			else _push(`<!---->`);
			_push(`</section></article></main>`);
		};
	}
});
//#endregion
//#region app/pages/recharging.vue
var _sfc_setup = recharging_vue_vue_type_script_setup_true_lang_default.setup;
recharging_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recharging.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recharging_default = /* @__PURE__ */ _plugin_vue_export_helper_default(recharging_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3624a39a"]]);

export { recharging_default as default };
//# sourceMappingURL=recharging-CZXksQ8m.mjs.map

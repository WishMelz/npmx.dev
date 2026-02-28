import { u as useI18n, b as useSeoMeta$1, a as useRouter, l as useAppConfig, H as _sfc_main$1, n as nuxt_link_default } from './server.mjs';
import { u as useCanGoBack } from './useCanGoBack-DqTkP1_4.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
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

var privacy_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "privacy",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("privacy_policy.title")} - npmx`,
			description: () => $t("privacy_policy.welcome", { app: "npmx" })
		});
		defineOgImageComponent("Default", {
			title: () => $t("privacy_policy.title"),
			description: () => $t("privacy_policy.welcome", { app: "npmx" })
		});
		useRouter();
		const canGoBack = useCanGoBack();
		const buildInfo = useAppConfig().buildInfo;
		const { locale } = useI18n();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _component_NuxtTime = _sfc_main$1;
			const _component_NuxtLink = nuxt_link_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("privacy_policy.title"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-lucide:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.last_updated",
				tag: "p",
				scope: "global",
				class: "text-fg-muted text-lg"
			}, {
				date: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtTime, {
						locale: unref(locale),
						datetime: unref(buildInfo).privacyPolicyDate,
						"date-style": "long",
						"time-style": "medium"
					}, null, _parent, _scopeId));
					else return [createVNode(_component_NuxtTime, {
						locale: unref(locale),
						datetime: unref(buildInfo).privacyPolicyDate,
						"date-style": "long",
						"time-style": "medium"
					}, null, 8, ["locale", "datetime"])];
				}),
				_: 1
			}, _parent));
			_push(`</header><section class="prose prose-invert max-w-none space-y-8"><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.welcome",
				tag: "span",
				scope: "global"
			}, {
				app: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>npmx</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, "npmx")];
				}),
				_: 1
			}, _parent));
			_push(`</p><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.cookies.what_are.title"))}</h2><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("privacy_policy.cookies.what_are.p1"))}</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.cookies.types.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.types.p1",
				tag: "span",
				scope: "global"
			}, {
				bold: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.bold"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.cookies.types.bold")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><ul class="space-y-3 text-fg-muted list-none p-0"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.types.li1",
				tag: "span"
			}, {
				li11: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg font-mono text-sm"${_scopeId}><bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.cookie_vdpl"))}</bdi></strong>`);
					else return [createVNode("strong", { class: "text-fg font-mono text-sm" }, [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.cookie_vdpl")), 1)])];
				}),
				separator: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.separator"))}</bdi>`);
					else return [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.separator")), 1)];
				}),
				li12: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.cookie_vdpl_desc"))}</bdi>`);
					else return [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.cookie_vdpl_desc")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.types.li2",
				tag: "span"
			}, {
				li21: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg font-mono text-sm"${_scopeId}><bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.cookie_h3"))}</bdi></strong>`);
					else return [createVNode("strong", { class: "text-fg font-mono text-sm" }, [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.cookie_h3")), 1)])];
				}),
				separator: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.separator"))}</bdi>`);
					else return [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.separator")), 1)];
				}),
				li22: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<bdi${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.types.cookie_h3_desc"))}</bdi>`);
					else return [createVNode("bdi", null, toDisplayString(unref($t)("privacy_policy.cookies.types.cookie_h3_desc")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</span></li></ul></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.cookies.local_storage.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.local_storage.p1",
				tag: "span",
				scope: "global"
			}, {
				bold: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.local_storage.bold"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.cookies.local_storage.bold")), 1)];
				}),
				settings: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
						to: { name: "settings" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("privacy_policy.cookies.local_storage.settings"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("privacy_policy.cookies.local_storage.settings")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_NuxtLink, {
						to: { name: "settings" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("privacy_policy.cookies.local_storage.settings")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.local_storage.p2",
				tag: "span",
				scope: "global"
			}, {
				bold2: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.local_storage.bold2"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.cookies.local_storage.bold2")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.cookies.management.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.cookies.management.p1",
				tag: "span",
				scope: "global"
			}, {
				bold: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.cookies.management.bold"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.cookies.management.bold")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("privacy_policy.cookies.management.p2"))}</p><ul class="space-y-3 text-fg-muted list-none p-0"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg">${ssrInterpolate(unref($t)("privacy_policy.cookies.management.chrome"))} <span class="i-lucide:external-link rtl-flip w-4 h-4" aria-hidden="true"></span></a></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg">${ssrInterpolate(unref($t)("privacy_policy.cookies.management.firefox"))} <span class="i-lucide:external-link rtl-flip w-4 h-4" aria-hidden="true"></span></a></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg">${ssrInterpolate(unref($t)("privacy_policy.cookies.management.edge"))} <span class="i-lucide:external-link rtl-flip w-4 h-4" aria-hidden="true"></span></a></li></ul></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.analytics.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.analytics.p1",
				tag: "span",
				scope: "global"
			}, {
				bold: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.analytics.bold"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.analytics.bold")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("privacy_policy.analytics.p2"))}</p><ul class="space-y-3 text-fg-muted list-none p-0 mb-4"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.analytics.li1"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.analytics.li2"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.analytics.li3"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.analytics.li4"))}</span></li></ul><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("privacy_policy.analytics.p3"))}</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.authenticated.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.authenticated.p1",
				tag: "span",
				scope: "global"
			}, {
				bold: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong class="text-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.authenticated.bold"))}</strong>`);
					else return [createVNode("strong", { class: "text-fg" }, toDisplayString(unref($t)("privacy_policy.authenticated.bold")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</p><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.authenticated.p2",
				tag: "span",
				scope: "global"
			}, {
				settings: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
						to: { name: "settings" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("privacy_policy.authenticated.settings"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("privacy_policy.authenticated.settings")), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_NuxtLink, {
						to: { name: "settings" },
						class: "text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("privacy_policy.authenticated.settings")), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.data_retention.title"))}</h2><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("privacy_policy.data_retention.p1"))}</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.your_rights.title"))}</h2><p class="text-fg-muted leading-relaxed mb-4">${ssrInterpolate(unref($t)("privacy_policy.your_rights.p1"))}</p><ul class="space-y-3 text-fg-muted list-none p-0 mb-4"><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.your_rights.li1"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.your_rights.li2"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.your_rights.li3"))}</span></li><li class="flex items-start gap-3"><span class="text-fg-subtle shrink-0">—</span><span>${ssrInterpolate(unref($t)("privacy_policy.your_rights.li4"))}</span></li></ul><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("privacy_policy.your_rights.p2"))}</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.contact.title"))}</h2><p class="text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "privacy_policy.contact.p1",
				tag: "span",
				scope: "global"
			}, {
				link: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a href="https://github.com/npmx-dev/npmx.dev/issues" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"${_scopeId}>${ssrInterpolate(unref($t)("privacy_policy.contact.link"))} <span class="i-lucide:external-link rtl-flip w-4 h-4" aria-hidden="true"${_scopeId}></span></a>`);
					else return [createVNode("a", {
						href: "https://github.com/npmx-dev/npmx.dev/issues",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "inline-flex items-center gap-1 text-fg-muted hover:text-fg underline decoration-fg-subtle/50 hover:decoration-fg"
					}, [createTextVNode(toDisplayString(unref($t)("privacy_policy.contact.link")) + " ", 1), createVNode("span", {
						class: "i-lucide:external-link rtl-flip w-4 h-4",
						"aria-hidden": "true"
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</p></div><div><h2 class="text-lg text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("privacy_policy.changes.title"))}</h2><p class="text-fg-muted leading-relaxed">${ssrInterpolate(unref($t)("privacy_policy.changes.p1"))}</p></div></section></article></main>`);
		};
	}
});
var _sfc_setup = privacy_vue_vue_type_script_setup_true_lang_default.setup;
privacy_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var privacy_default = privacy_vue_vue_type_script_setup_true_lang_default;

export { privacy_default as default };
//# sourceMappingURL=privacy-C1OQ9Gc-.mjs.map

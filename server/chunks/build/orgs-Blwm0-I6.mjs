import { u as useI18n, g as useRoute, t as useConnector, b as useSeoMeta$1, n as nuxt_link_default, D as client_only_default } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { A as Avatar_default } from './Avatar-BQCinbk6.mjs';
import { defineComponent, computed, shallowRef, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './fetch-BX-wNfYP.mjs';
import '@vue/shared';

var orgs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "orgs",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const route = useRoute();
		const username = computed(() => route.params.username);
		const { isConnected, npmUser, listUserOrgs, listOrgUsers } = useConnector();
		const isOwnProfile = computed(() => {
			return isConnected.value && npmUser.value?.toLowerCase() === username.value.toLowerCase();
		});
		const isLoading = shallowRef(true);
		const orgs = shallowRef([]);
		const error = shallowRef(null);
		async function loadOrgDetails(org) {
			org.isLoadingDetails = true;
			try {
				org.packageCount = (await $fetch(`/api/registry/org/${encodeURIComponent(org.name)}/packages`, { timeout: 5e3 })).count;
			} catch {
				org.packageCount = null;
			}
			try {
				const users = await listOrgUsers(org.name);
				if (users && npmUser.value) {
					const lowerUser = npmUser.value.toLowerCase();
					org.role = Object.entries(users).find(([k]) => k.toLowerCase() === lowerUser)?.[1] ?? null;
				}
			} catch {
				org.role = null;
			}
			org.isLoadingDetails = false;
		}
		async function loadOrgs() {
			if (!isOwnProfile.value) {
				isLoading.value = false;
				return;
			}
			isLoading.value = true;
			error.value = null;
			try {
				const orgList = await listUserOrgs();
				if (orgList) {
					orgs.value = orgList.map((name) => ({
						name,
						role: null,
						packageCount: null,
						isLoadingDetails: true
					}));
					await Promise.all(orgs.value.map((org) => loadOrgDetails(org)));
				} else error.value = $t("header.orgs_dropdown.error");
			} catch (e) {
				error.value = e instanceof Error ? e.message : $t("header.orgs_dropdown.error");
			} finally {
				isLoading.value = false;
			}
		}
		error.value = $t("header.orgs_dropdown.error");
		watch(isOwnProfile, loadOrgs, { immediate: true });
		useSeoMeta$1({
			title: () => `@${username.value} Organizations - npmx`,
			ogTitle: () => `@${username.value} Organizations - npmx`,
			twitterTitle: () => `@${username.value} Organizations - npmx`,
			description: () => `npm organizations for ${username.value}`,
			ogDescription: () => `npm organizations for ${username.value}`,
			twitterDescription: () => `npm organizations for ${username.value}`
		});
		defineOgImageComponent("Default", {
			title: () => `@${username.value}`,
			description: () => {
				if (isLoading.value) return "npm organizations";
				if (orgs.value.length === 0) return "No organizations found";
				const count = orgs.value.length;
				return `${count} ${count === 1 ? "organization" : "organizations"}`;
			},
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UserAvatar = Avatar_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_ClientOnly = client_only_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-8 sm:py-12 w-full" }, _attrs))}><header class="mb-8 pb-8 border-b border-border"><div class="flex flex-wrap items-center gap-4 mb-4">`);
			_push(ssrRenderComponent(_component_UserAvatar, { username: unref(username) }, null, _parent));
			_push(`<div><h1 class="font-mono text-2xl sm:text-3xl font-medium">~${ssrInterpolate(unref(username))}</h1><p class="text-fg-muted text-sm mt-1">${ssrInterpolate(unref($t)("user.orgs_page.title"))}</p></div></div><nav aria-labelledby="back-to-profile">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: {
					name: "~username",
					params: { username: unref(username) }
				},
				id: "back-to-profile",
				class: "link-subtle font-mono text-sm inline-flex items-center gap-1.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-lucide:arrow-left rtl-flip w-4 h-4" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(unref($t)("user.orgs_page.back_to_profile"))}`);
					else return [createVNode("span", {
						class: "i-lucide:arrow-left rtl-flip w-4 h-4",
						"aria-hidden": "true"
					}), createTextVNode(" " + toDisplayString(unref($t)("user.orgs_page.back_to_profile")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</nav></header>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(`</main>`);
		};
	}
});
var _sfc_setup = orgs_vue_vue_type_script_setup_true_lang_default.setup;
orgs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/~[username]/orgs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var orgs_default = orgs_vue_vue_type_script_setup_true_lang_default;

export { orgs_default as default };
//# sourceMappingURL=orgs-Blwm0-I6.mjs.map

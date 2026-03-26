import { u as useI18n, d as useRoute, k as createError$1, a as useSeoMeta$1, m as Base_default$1, B as Base_default, n as nuxt_link_default, w as packageRoute, o as client_only_default } from './server-placeholder-C9fYItBT.mjs';
import { a as useFetch, u as useLazyFetch } from './fetch-CVxFI0ck.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { a as useCompactNumberFormatter } from './useNumberFormatter-6MIdB6Qd.mjs';
import { u as useAtproto, t as togglePackageLike, a as useModal } from './likes-xTtdlbfa.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-DdKo1i2Y.mjs';
import { B as BaseCard_default } from './BaseCard-Bmgsx7UV.mjs';
import { defineComponent, computed, withAsyncContext, ref, watchEffect, mergeProps, unref, withCtx, createTextVNode, toDisplayString, toValue, createVNode, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import '@floating-ui/vue';

//#region app/components/Package/LikeCard.vue?vue&type=script&setup=true&lang.ts
var LikeCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LikeCard",
	__ssrInlineRender: true,
	props: { packageUrl: {} },
	setup(__props) {
		const props = __props;
		const compactNumberFormatter = useCompactNumberFormatter();
		function extractPackageFromRef(ref) {
			return /https:\/\/npmx.dev\/package\/(?<pkg>.*)/.exec(ref)?.groups?.pkg ?? ref;
		}
		const name = computed(() => extractPackageFromRef(props.packageUrl));
		const { user } = useAtproto();
		const authModal = useModal("auth-modal");
		const { data: likesData, status: likesStatus } = useFetch(() => `/api/social/likes/${name.value}`, {
			default: () => ({
				totalLikes: 0,
				userHasLiked: false
			}),
			server: false
		}, "$QZiyIJLkf-");
		const isLikeActionPending = ref(false);
		const likeAction = async () => {
			if (user.value?.handle == null) {
				authModal.open();
				return;
			}
			if (isLikeActionPending.value) return;
			const currentlyLiked = likesData.value?.userHasLiked ?? false;
			const currentLikes = likesData.value?.totalLikes ?? 0;
			likesData.value = {
				totalLikes: currentlyLiked ? currentLikes - 1 : currentLikes + 1,
				userHasLiked: !currentlyLiked
			};
			isLikeActionPending.value = true;
			try {
				const result = await togglePackageLike(name.value, currentlyLiked, user.value?.handle);
				isLikeActionPending.value = false;
				if (result.success) likesData.value = result.data;
				else likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
			} catch (e) {
				likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
				isLikeActionPending.value = false;
			}
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_BaseCard = BaseCard_default;
			const _component_ClientOnly = client_only_default;
			const _component_TooltipApp = App_default;
			_push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(name)) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_BaseCard, { class: "font-mono flex justify-between min-w-0" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span class="truncate min-w-0"${ssrRenderAttr("title", unref(name))}${_scopeId}>${ssrInterpolate(unref(name))}</span><div class="flex items-center gap-4 justify-between shrink-0"${_scopeId}>`);
								_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent, _scopeId));
								_push(`<p class="transition-transform duration-150 group-hover:rotate-45 pb-1"${_scopeId}>↗</p></div>`);
							} else return [createVNode("span", {
								class: "truncate min-w-0",
								title: unref(name)
							}, toDisplayString(unref(name)), 9, ["title"]), createVNode("div", { class: "flex items-center gap-4 justify-between shrink-0" }, [createVNode(_component_ClientOnly, null, {
								default: withCtx(() => [unref(likesStatus) !== "pending" ? (openBlock(), createBlock(_component_TooltipApp, {
									key: 0,
									text: unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
									position: "bottom"
								}, {
									default: withCtx(() => [createVNode("button", {
										onClick: withModifiers(likeAction, ["prevent"]),
										type: "button",
										title: unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
										class: "inline-flex items-center gap-1.5 font-mono text-sm text-fg hover:text-fg-muted transition-colors duration-200",
										"aria-label": unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like")
									}, [createVNode("span", {
										class: [unref(likesData)?.userHasLiked ? "i-lucide-heart-minus text-red-500" : "i-lucide-heart-plus", "w-4 h-4"],
										"aria-hidden": "true"
									}, null, 2), createVNode("span", null, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1)], 8, ["title", "aria-label"])]),
									_: 1
								}, 8, ["text"])) : createCommentVNode("", true)]),
								_: 1
							}), createVNode("p", { class: "transition-transform duration-150 group-hover:rotate-45 pb-1" }, "↗")])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_BaseCard, { class: "font-mono flex justify-between min-w-0" }, {
						default: withCtx(() => [createVNode("span", {
							class: "truncate min-w-0",
							title: unref(name)
						}, toDisplayString(unref(name)), 9, ["title"]), createVNode("div", { class: "flex items-center gap-4 justify-between shrink-0" }, [createVNode(_component_ClientOnly, null, {
							default: withCtx(() => [unref(likesStatus) !== "pending" ? (openBlock(), createBlock(_component_TooltipApp, {
								key: 0,
								text: unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
								position: "bottom"
							}, {
								default: withCtx(() => [createVNode("button", {
									onClick: withModifiers(likeAction, ["prevent"]),
									type: "button",
									title: unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
									class: "inline-flex items-center gap-1.5 font-mono text-sm text-fg hover:text-fg-muted transition-colors duration-200",
									"aria-label": unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like")
								}, [createVNode("span", {
									class: [unref(likesData)?.userHasLiked ? "i-lucide-heart-minus text-red-500" : "i-lucide-heart-plus", "w-4 h-4"],
									"aria-hidden": "true"
								}, null, 2), createVNode("span", null, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1)], 8, ["title", "aria-label"])]),
								_: 1
							}, 8, ["text"])) : createCommentVNode("", true)]),
							_: 1
						}), createVNode("p", { class: "transition-transform duration-150 group-hover:rotate-45 pb-1" }, "↗")])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region app/components/Package/LikeCard.vue
var _sfc_setup$1 = LikeCard_vue_vue_type_script_setup_true_lang_default.setup;
LikeCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/LikeCard.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var LikeCard_default = Object.assign(LikeCard_vue_vue_type_script_setup_true_lang_default, { __name: "PackageLikeCard" });
//#endregion
//#region app/composables/atproto/useProfileLikes.ts
function useProfileLikes(handle) {
	return useLazyFetch(() => `/api/social/profile/${toValue(handle)}/likes`, "$qNvtPIqXnI");
}
//#endregion
//#region app/pages/profile/[identity]/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { t: $t } = useI18n();
		const route = useRoute();
		const identity = computed(() => route.params.identity);
		const { data: profile, error: profileError } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/social/profile/${identity.value}`, { default: () => ({
			displayName: identity.value,
			description: "",
			website: "",
			recordExists: false
		}) }, "$B0ar0m7MM5")), __temp = await __temp, __restore(), __temp);
		if (!profile.value || profileError.value?.statusCode === 404) throw createError$1({
			statusCode: 404,
			statusMessage: $t("profile.not_found"),
			message: $t("profile.not_found_message", { handle: identity.value })
		});
		const { user, pending: userPending } = useAtproto();
		const isEditing = ref(false);
		const displayNameInput = ref();
		const descriptionInput = ref();
		const websiteInput = ref();
		const isUpdateProfileActionPending = ref(false);
		watchEffect(() => {
			if (isEditing.value) {
				if (profile) {
					displayNameInput.value = profile.value.displayName;
					descriptionInput.value = profile.value.description;
					websiteInput.value = profile.value.website;
				}
			}
		});
		const { data: likes, status } = useProfileLikes(identity);
		const showInviteSection = computed(() => {
			return profile.value.recordExists === false && status.value === "success" && !likes.value?.records?.length && !userPending.value && user.value?.handle !== profile.value.handle;
		});
		const inviteUrl = computed(() => {
			const text = $t("profile.invite.compose_text", { handle: profile.value.handle });
			return `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`;
		});
		useSeoMeta$1({
			title: () => $t("profile.seo_title", { handle: identity.value }),
			description: () => $t("profile.seo_description", { handle: identity.value })
		});
		/**
		defineOgImageComponent('Default', {
		title: () => `~${username.value}`,
		description: () => (results.value ? `${results.value.total} packages` : 'npm user profile'),
		primaryColor: '#60a5fa',
		})
		**/
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			const _component_LinkBase = Base_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			const _component_PackageLikeCard = LikeCard_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 flex flex-col py-8 sm:py-12 w-full" }, _attrs))}><header class="mb-8 pb-8 border-b border-border">`);
			if (unref(isEditing)) {
				_push(`<form class="flex flex-col flex-wrap gap-4"><label for="displayName" class="text-sm flex flex-col gap-2">${ssrInterpolate(unref($t)("profile.display_name"))} <input required name="displayName" type="text" class="w-full min-w-25 bg-bg-subtle border border-border rounded-md ps-3 pe-3 py-1.5 font-mono text-sm text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 hover:border-fg-subtle outline-2 outline-transparent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70"${ssrRenderAttr("value", unref(displayNameInput))}></label><label for="description" class="text-sm flex flex-col gap-2">${ssrInterpolate(unref($t)("profile.description"))} <input name="description" type="text"${ssrRenderAttr("placeholder", unref($t)("profile.no_description"))}${ssrRenderAttr("value", unref(descriptionInput))} class="w-full min-w-25 bg-bg-subtle border border-border rounded-md ps-3 pe-3 py-1.5 font-mono text-sm text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 hover:border-fg-subtle outline-2 outline-transparent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70"></label><label for="website" class="text-sm flex flex-col gap-2">${ssrInterpolate(unref($t)("profile.website"))} <input name="website" type="url"${ssrRenderAttr("placeholder", unref($t)("profile.website_placeholder"))}${ssrRenderAttr("value", unref(websiteInput))} class="w-full min-w-25 bg-bg-subtle border border-border rounded-md ps-3 pe-3 py-1.5 font-mono text-sm text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 hover:border-fg-subtle outline-2 outline-transparent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70"></label><div class="flex gap-4 items-center font-mono text-sm"><h2>@${ssrInterpolate(unref(profile)?.handle)}</h2>`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					onClick: ($event) => isEditing.value = false,
					type: "button"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("common.cancel"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("common.cancel")), 1)];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(_component_ButtonBase, {
					variant: "primary",
					disabled: unref(isUpdateProfileActionPending),
					type: "submit"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("common.save"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("common.save")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div></form>`);
			} else {
				_push(`<div class="flex flex-col flex-wrap gap-4">`);
				if (unref(profile).displayName) _push(`<h1 class="font-mono text-2xl sm:text-3xl font-medium">${ssrInterpolate(unref(profile).displayName)}</h1>`);
				else _push(`<!---->`);
				if (unref(profile).description) _push(`<p>${ssrInterpolate(unref(profile).description)}</p>`);
				else _push(`<!---->`);
				_push(`<div class="flex gap-4 items-center font-mono text-sm"><h2>@${ssrInterpolate(unref(profile).handle ?? unref(identity))}</h2>`);
				if (unref(profile).website) _push(ssrRenderComponent(_component_LinkBase, {
					to: unref(profile).website,
					classicon: "i-lucide:link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(profile).website)}`);
						else return [createTextVNode(toDisplayString(unref(profile).website), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					onClick: ($event) => isEditing.value = true,
					class: [unref(user)?.handle === unref(profile)?.handle ? "" : "invisible", "hidden sm:inline-flex"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("common.edit"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("common.edit")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			}
			_push(`</header><section class="flex flex-col gap-8"><h2 class="font-mono text-2xl sm:text-3xl font-medium min-w-0 break-words"${ssrRenderAttr("title", unref($t)("profile.likes"))} dir="ltr">${ssrInterpolate(unref($t)("profile.likes"))} `);
			if (unref(likes)) _push(`<span>(${ssrInterpolate(unref(likes).records?.length ?? 0)})</span>`);
			else _push(`<!---->`);
			_push(`</h2>`);
			if (unref(status) === "pending") {
				_push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><!--[-->`);
				ssrRenderList(4, (i) => {
					_push(ssrRenderComponent(_component_SkeletonBlock, {
						key: i,
						class: "h-16 rounded-lg"
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else if (unref(status) === "error") _push(`<div><p>${ssrInterpolate(unref($t)("common.error"))}</p></div>`);
			else if (unref(likes)?.records) {
				_push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><!--[-->`);
				ssrRenderList(unref(likes).records, (like) => {
					_push(ssrRenderComponent(_component_PackageLikeCard, { packageUrl: like.value.subjectRef }, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (unref(showInviteSection)) {
				_push(`<div class="flex flex-col items-start gap-4 p-6 bg-bg-subtle border border-border rounded-lg"><p class="text-fg-muted">${ssrInterpolate(unref($t)("profile.invite.message"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					classicon: "i-simple-icons:bluesky",
					to: unref(inviteUrl)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("profile.invite.share_button"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("profile.invite.share_button")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</section></main>`);
		};
	}
});
//#endregion
//#region app/pages/profile/[identity]/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[identity]/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _identity__default = index_vue_vue_type_script_setup_true_lang_default;

export { _identity__default as default };
//# sourceMappingURL=_identity_-DbJ-ckNd.mjs.map

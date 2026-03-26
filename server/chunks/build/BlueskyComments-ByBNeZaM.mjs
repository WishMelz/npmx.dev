import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { B as Base_default, U as _sfc_main } from './server-placeholder-C9fYItBT.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, toRef, useSSRContext } from 'vue';
import { bm as BLUESKY_COMMENTS_REQUEST, bn as BSKY_POST_AT_URI_REGEX } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { segmentize } from '@atcute/bluesky-richtext-segmenter';
import './asyncData-Dr04OizO.mjs';
import 'perfect-debounce';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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

//#region app/utils/bluesky.ts
function atUriToWebUrl(atUri) {
	const match = atUri.match(BSKY_POST_AT_URI_REGEX);
	if (!match) return null;
	const [, did, rkey] = match;
	return `https://bsky.app/profile/${did}/post/${rkey}`;
}
//#endregion
//#region app/components/BlueskyComment.vue?vue&type=script&setup=true&lang.ts
var MaxDepth = 4;
var BlueskyComment_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlueskyComment",
	__ssrInlineRender: true,
	props: {
		comment: {},
		depth: {}
	},
	setup(__props) {
		function getCommentUrl(comment) {
			return atUriToWebUrl(comment.uri) ?? "#";
		}
		const props = __props;
		function getFeatureUrl(feature) {
			if (feature.$type === "app.bsky.richtext.facet#link") return feature.uri;
			if (feature.$type === "app.bsky.richtext.facet#mention") return `https://bsky.app/profile/${feature.did}`;
			if (feature.$type === "app.bsky.richtext.facet#tag") return `https://bsky.app/hashtag/${feature.tag}`;
		}
		const processedSegments = segmentize(props.comment.text, props.comment.facets).map((segment) => ({
			text: segment.text,
			url: segment.features?.[0] ? getFeatureUrl(segment.features[0]) : void 0
		}));
		function getHostname(uri) {
			try {
				return new URL(uri).hostname;
			} catch {
				return uri;
			}
		}
		let segmenter = null;
		function firstChar(str) {
			segmenter ??= new Intl.Segmenter(void 0, { granularity: "grapheme" });
			return Array.from(segmenter.segment(str))[0]?.segment ?? "";
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtTime = _sfc_main;
			const _component_BlueskyComment = BlueskyComment_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: __props.depth === 0 ? "flex gap-3" : "sm:flex sm:gap-3" }, _attrs))}><a${ssrRenderAttr("href", `https://bsky.app/profile/${__props.comment.author.handle}`)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([__props.depth > 0 ? "hidden sm:block" : "", "shrink-0"])}">`);
			if (__props.comment.author.avatar) _push(`<img${ssrRenderAttr("src", __props.comment.author.avatar)}${ssrRenderAttr("alt", __props.comment.author.displayName || __props.comment.author.handle)} class="${ssrRenderClass(["rounded-full", __props.depth === 0 ? "w-10 h-10" : "w-8 h-8"])}" width="40" height="40" loading="lazy">`);
			else _push(`<div class="${ssrRenderClass(["rounded-full bg-border flex items-center justify-center text-fg-muted", __props.depth === 0 ? "w-10 h-10" : "w-8 h-8 text-sm"])}">${ssrInterpolate(firstChar(__props.comment.author.displayName || __props.comment.author.handle).toUpperCase())}</div>`);
			_push(`</a><div class="flex-1 min-w-0"><div class="flex flex-wrap items-center gap-x-2 gap-y-0">`);
			if (__props.depth > 0) {
				_push(`<a${ssrRenderAttr("href", `https://bsky.app/profile/${__props.comment.author.handle}`)} target="_blank" rel="noopener noreferrer" class="shrink-0 sm:hidden">`);
				if (__props.comment.author.avatar) _push(`<img${ssrRenderAttr("src", __props.comment.author.avatar)}${ssrRenderAttr("alt", __props.comment.author.displayName || __props.comment.author.handle)} class="w-6 h-6 rounded-full" width="24" height="24" loading="lazy">`);
				else _push(`<div class="w-6 h-6 rounded-full bg-border flex items-center justify-center text-fg-muted text-xs">${ssrInterpolate(firstChar(__props.comment.author.displayName || __props.comment.author.handle).toUpperCase())}</div>`);
				_push(`</a>`);
			} else _push(`<!---->`);
			_push(`<a${ssrRenderAttr("href", `https://bsky.app/profile/${__props.comment.author.handle}`)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass(["font-medium text-fg hover:underline", __props.depth > 0 ? "text-sm" : ""])}">${ssrInterpolate(__props.comment.author.displayName || __props.comment.author.handle)}</a><span class="text-fg-subtle text-sm">·</span><a${ssrRenderAttr("href", getCommentUrl(props.comment))} target="_blank" rel="noopener noreferrer" class="text-fg-subtle text-sm hover:underline">`);
			_push(ssrRenderComponent(_component_NuxtTime, {
				relative: "",
				datetime: __props.comment.createdAt
			}, null, _parent));
			_push(`</a></div><p class="text-fg-muted whitespace-pre-wrap mt-2 mb-3"><!--[-->`);
			ssrRenderList(unref(processedSegments), (segment, i) => {
				_push(`<!--[-->`);
				if (segment.url) _push(`<a${ssrRenderAttr("href", segment.url)} target="_blank" rel="noopener noreferrer" class="link">${ssrInterpolate(segment.text)}</a>`);
				else _push(`<!--[-->${ssrInterpolate(segment.text)}<!--]-->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></p>`);
			if (__props.comment.embed?.type === "images" && __props.comment.embed.images) {
				_push(`<div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(__props.comment.embed.images, (img, i) => {
					_push(`<a${ssrRenderAttr("href", img.fullsize)} target="_blank" rel="noopener noreferrer" class="block"><img${ssrRenderAttr("src", img.thumb)}${ssrRenderAttr("alt", img.alt || "Embedded image")} class="rounded-lg max-w-48 max-h-36 object-cover" loading="lazy"></a>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (__props.comment.embed?.type === "external" && __props.comment.embed.external) {
				_push(`<a${ssrRenderAttr("href", __props.comment.embed.external.uri)} target="_blank" rel="noopener noreferrer" class="flex gap-3 p-3 border border-border rounded-lg bg-bg-subtle hover:bg-bg-subtle/80 transition-colors no-underline">`);
				if (__props.comment.embed.external.thumb) _push(`<img${ssrRenderAttr("src", __props.comment.embed.external.thumb)}${ssrRenderAttr("alt", __props.comment.embed.external.title)} width="20" height="20" class="w-20 h-20 rounded object-cover shrink-0" loading="lazy">`);
				else _push(`<!---->`);
				_push(`<div class="min-w-0"><div class="font-medium text-fg truncate">${ssrInterpolate(__props.comment.embed.external.title)}</div><div class="text-sm text-fg-muted line-clamp-2">${ssrInterpolate(__props.comment.embed.external.description)}</div><div class="text-xs text-fg-subtle mt-1 truncate">${ssrInterpolate(getHostname(__props.comment.embed.external.uri))}</div></div></a>`);
			} else _push(`<!---->`);
			if (__props.comment.likeCount > 0 || __props.comment.repostCount > 0) {
				_push(`<div class="mt-1 flex gap-4 text-sm text-fg-subtle">`);
				if (__props.comment.likeCount > 0) _push(`<span>${ssrInterpolate(_ctx.$t("blog.atproto.like_count", { count: __props.comment.likeCount }, __props.comment.likeCount))}</span>`);
				else _push(`<!---->`);
				if (__props.comment.repostCount > 0) _push(`<span>${ssrInterpolate(_ctx.$t("blog.atproto.repost_count", { count: __props.comment.repostCount }, __props.comment.repostCount))}</span>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			if (__props.comment.replies.length > 0) {
				_push(`<!--[-->`);
				if (__props.depth < MaxDepth) {
					_push(`<div class="mt-3 ps-3 border-is-2 border-border flex flex-col gap-3"><!--[-->`);
					ssrRenderList(__props.comment.replies, (reply) => {
						_push(ssrRenderComponent(_component_BlueskyComment, {
							key: reply.uri,
							comment: reply,
							depth: __props.depth + 1
						}, null, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<a${ssrRenderAttr("href", getCommentUrl(__props.comment.replies[0]))} target="_blank" rel="noopener noreferrer" class="mt-2 block text-sm link">${ssrInterpolate(_ctx.$t("blog.atproto.more_replies", { count: __props.comment.replies.length }, __props.comment.replies.length))}</a>`);
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region app/components/BlueskyComment.vue
var _sfc_setup$1 = BlueskyComment_vue_vue_type_script_setup_true_lang_default.setup;
BlueskyComment_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlueskyComment.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var BlueskyComment_default = Object.assign(BlueskyComment_vue_vue_type_script_setup_true_lang_default, { __name: "BlueskyComment" });
//#endregion
//#region app/composables/useBlueskyComments.ts
function useBlueskyComments(postUri) {
	const uri = toRef(postUri);
	const { data, pending, error, refresh } = useFetch(BLUESKY_COMMENTS_REQUEST, {
		query: { uri },
		key: () => `bsky-comments-${uri.value}`,
		default: () => ({
			thread: null,
			likes: [],
			totalLikes: 0,
			postUrl: null
		})
	}, "$d206xXdhHT");
	return {
		data,
		pending,
		error,
		refresh
	};
}
//#endregion
//#region app/components/BlueskyComments.vue?vue&type=script&setup=true&lang.ts
var BlueskyComments_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlueskyComments",
	__ssrInlineRender: true,
	props: { postUri: {} },
	setup(__props) {
		const props = __props;
		const { data, pending, error } = useBlueskyComments(() => props.postUri);
		const thread = computed(() => data.value?.thread);
		const likes = computed(() => data.value?.likes ?? []);
		const totalLikes = computed(() => data.value?.totalLikes ?? 0);
		const postUrl = computed(() => data.value?.postUrl);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_LinkBase = Base_default;
			const _component_BlueskyComment = BlueskyComment_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-12 pt-8 border-t border-border max-w-prose mx-auto" }, _attrs))}>`);
			if (unref(likes).length > 0) {
				_push(`<div class="mb-8"><h3 class="text-xl font-semibold text-fg mb-4">${ssrInterpolate(_ctx.$t("blog.atproto.likes_on_bluesky"))} (${ssrInterpolate(unref(totalLikes))}) </h3><ul class="flex flex-wrap gap-1 list-none p-0 m-0"><!--[-->`);
				ssrRenderList(unref(likes), (like) => {
					_push(`<li class="m-0 p-0"><a${ssrRenderAttr("href", `https://bsky.app/profile/${like.actor.handle}`)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", like.actor.displayName || like.actor.handle)}>`);
					if (like.actor.avatar) _push(`<img${ssrRenderAttr("src", like.actor.avatar)}${ssrRenderAttr("alt", like.actor.displayName || like.actor.handle)} class="w-8 h-8 rounded-full hover:opacity-80 transition-opacity m-0">`);
					else _push(`<div class="w-8 h-8 rounded-full bg-bg-subtle flex items-center justify-center text-fg-muted text-xs">${ssrInterpolate((like.actor.displayName || like.actor.handle).charAt(0).toUpperCase())}</div>`);
					_push(`</a></li>`);
				});
				_push(`<!--]-->`);
				if (unref(totalLikes) > unref(likes).length) {
					_push(`<li class="flex items-center text-fg-muted text-sm m-0 p-0 ps-2">`);
					if (unref(postUrl)) _push(`<a${ssrRenderAttr("href", unref(postUrl))} target="_blank" rel="noopener noreferrer" class="link ms-auto"> +${ssrInterpolate(unref(totalLikes) - unref(likes).length)}</a>`);
					else _push(`<!---->`);
					_push(`</li>`);
				} else _push(`<!---->`);
				_push(`</ul></div>`);
			} else _push(`<!---->`);
			_push(`<div class="mb-8"><h3 class="text-xl font-semibold text-fg mb-4">${ssrInterpolate(_ctx.$t("blog.atproto.comments"))}</h3>`);
			if (unref(pending) && !unref(thread)) _push(`<div class="flex items-center gap-2 text-fg-muted" role="status"><span class="i-svg-spinners:90-ring-with-bg h-5 w-5" aria-hidden="true"></span><span>${ssrInterpolate(_ctx.$t("blog.atproto.loading_comments"))}</span></div>`);
			else if (unref(pending) && unref(thread)) _push(`<div class="text-xs text-fg-subtle mb-4 animate-pulse">${ssrInterpolate(_ctx.$t("blog.atproto.updating"))}</div>`);
			else if (unref(error)) {
				_push(`<div class="text-fg-muted">${ssrInterpolate(_ctx.$t("blog.atproto.could_not_load_comments"))} `);
				if (unref(postUrl)) _push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-primary",
					to: unref(postUrl)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("blog.atproto.view_on_bluesky"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("blog.atproto.view_on_bluesky")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div>`);
			} else if (!unref(thread) || unref(thread).replies.length === 0) {
				_push(`<div><p class="text-fg-muted mb-4">${ssrInterpolate(_ctx.$t("blog.atproto.no_comments_yet"))}</p>`);
				if (unref(postUrl)) _push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-primary",
					to: unref(postUrl)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("blog.atproto.reply_on_bluesky"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("blog.atproto.reply_on_bluesky")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div>`);
			} else {
				_push(`<div class="flex flex-col gap-6"><div class="flex items-center justify-between gap-4 text-sm text-fg-muted"><span>${ssrInterpolate(_ctx.$t("blog.atproto.reply_count", { count: unref(thread).replyCount }, unref(thread).replyCount))}</span>`);
				if (unref(postUrl)) _push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-primary",
					to: unref(postUrl)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("blog.atproto.reply_on_bluesky"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("blog.atproto.reply_on_bluesky")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div><!--[-->`);
				ssrRenderList(unref(thread).replies, (reply) => {
					_push(ssrRenderComponent(_component_BlueskyComment, {
						key: reply.uri,
						comment: reply,
						depth: 0
					}, null, _parent));
				});
				_push(`<!--]-->`);
				if (unref(postUrl)) _push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-primary",
					to: unref(postUrl)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("blog.atproto.like_or_reply_on_bluesky"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("blog.atproto.like_or_reply_on_bluesky")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div>`);
			}
			_push(`</div></section>`);
		};
	}
});
//#endregion
//#region app/components/BlueskyComments.vue
var _sfc_setup = BlueskyComments_vue_vue_type_script_setup_true_lang_default.setup;
BlueskyComments_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlueskyComments.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BlueskyComments_default = Object.assign(BlueskyComments_vue_vue_type_script_setup_true_lang_default, { __name: "BlueskyComments" });

export { BlueskyComments_default as default };
//# sourceMappingURL=BlueskyComments-ByBNeZaM.mjs.map

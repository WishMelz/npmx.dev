import { u as useI18n, a as useSeoMeta$1, n as nuxt_link_default, R as DateTime_default } from './server-placeholder-C9fYItBT.mjs';
import { p as posts, A as AuthorList_default } from './virtual_nuxt__home_runner_work_npmx.dev_npmx.dev_node_modules_.cache_nuxt_.nuxt_blog_posts-C2lbUcqh.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
import './AuthorAvatar-BHTSoUO-.mjs';

//#region app/components/BlogPostListCard.vue?vue&type=script&setup=true&lang.ts
var BlogPostListCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlogPostListCard",
	__ssrInlineRender: true,
	props: {
		authors: {},
		title: {},
		topics: {},
		excerpt: {},
		published: {},
		path: {},
		index: {},
		draft: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_DateTime = DateTime_default;
			const _component_AuthorList = AuthorList_default;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "group relative hover:bg-bg-subtle transition-colors duration-150 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-bg focus-within:ring-offset-2 focus-within:ring-fg/50 -mx-4 px-4 -my-2 py-2 sm:-mx-6 sm:px-6 sm:-my-3 sm:py-3 sm:rounded-md" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: `/blog/${__props.path}`,
				"data-suggestion-index": __props.index,
				class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex-1 min-w-0 text-start gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-fg-muted font-mono"${_scopeId}>`);
						_push(ssrRenderComponent(_component_DateTime, {
							datetime: __props.published,
							year: "numeric",
							month: "short",
							day: "numeric"
						}, null, _parent, _scopeId));
						_push(`</span>`);
						if (__props.draft) _push(`<span class="text-xs px-1.5 py-0.5 rounded badge-orange font-sans font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("blog.draft_badge"))}</span>`);
						else _push(`<!---->`);
						_push(`</div><h2 class="font-mono text-xl font-medium text-fg group-hover:text-primary transition-colors hover:underline"${_scopeId}>${ssrInterpolate(__props.title)}</h2>`);
						if (__props.excerpt) _push(`<p class="text-fg-muted leading-relaxed line-clamp-2 no-underline"${_scopeId}>${ssrInterpolate(__props.excerpt)}</p>`);
						else _push(`<!---->`);
						_push(`<div class="flex flex-wrap items-center gap-2 text-xs text-fg-muted font-mono mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_component_AuthorList, { authors: __props.authors }, null, _parent, _scopeId));
						_push(`</div></div><span class="i-lucide:arrow-right w-4 h-4 text-fg-subtle group-hover:text-fg relative inset-is-0 group-hover:inset-is-1 transition-all duration-200 shrink-0" aria-hidden="true"${_scopeId}></span>`);
					} else return [createVNode("div", { class: "flex-1 min-w-0 text-start gap-2" }, [
						createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: "text-xs text-fg-muted font-mono" }, [createVNode(_component_DateTime, {
							datetime: __props.published,
							year: "numeric",
							month: "short",
							day: "numeric"
						}, null, 8, ["datetime"])]), __props.draft ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-xs px-1.5 py-0.5 rounded badge-orange font-sans font-medium"
						}, toDisplayString(_ctx.$t("blog.draft_badge")), 1)) : createCommentVNode("", true)]),
						createVNode("h2", { class: "font-mono text-xl font-medium text-fg group-hover:text-primary transition-colors hover:underline" }, toDisplayString(__props.title), 1),
						__props.excerpt ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-fg-muted leading-relaxed line-clamp-2 no-underline"
						}, toDisplayString(__props.excerpt), 1)) : createCommentVNode("", true),
						createVNode("div", { class: "flex flex-wrap items-center gap-2 text-xs text-fg-muted font-mono mt-4" }, [createVNode(_component_AuthorList, { authors: __props.authors }, null, 8, ["authors"])])
					]), createVNode("span", {
						class: "i-lucide:arrow-right w-4 h-4 text-fg-subtle group-hover:text-fg relative inset-is-0 group-hover:inset-is-1 transition-all duration-200 shrink-0",
						"aria-hidden": "true"
					})];
				}),
				_: 1
			}, _parent));
			_push(`</article>`);
		};
	}
});
//#endregion
//#region app/components/BlogPostListCard.vue
var _sfc_setup$1 = BlogPostListCard_vue_vue_type_script_setup_true_lang_default.setup;
BlogPostListCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostListCard.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var BlogPostListCard_default = Object.assign(BlogPostListCard_vue_vue_type_script_setup_true_lang_default, { __name: "BlogPostListCard" });
//#endregion
//#region app/pages/blog/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const placeHolder = ["atproto", "nuxt"];
		useSeoMeta$1({
			title: () => `${$t("blog.title")} - npmx`,
			ogTitle: () => `${$t("blog.title")} - npmx`,
			twitterTitle: () => `${$t("blog.title")} - npmx`,
			description: () => $t("blog.meta_description"),
			ogDescription: () => $t("blog.meta_description"),
			twitterDescription: () => $t("blog.meta_description")
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BlogPostListCard = BlogPostListCard_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container w-full flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("blog.heading"))}</h1><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("tagline"))}</p></header>`);
			if (unref(posts) && unref(posts).length > 0) {
				_push(`<article class="flex flex-col gap-8"><!--[-->`);
				ssrRenderList(unref(posts), (post, idx) => {
					_push(`<!--[-->`);
					_push(ssrRenderComponent(_component_BlogPostListCard, {
						authors: post.authors,
						title: post.title,
						path: post.slug,
						excerpt: post.excerpt || post.description,
						topics: Array.isArray(post.tags) ? post.tags : placeHolder,
						published: post.date,
						index: idx,
						draft: post.draft
					}, null, _parent));
					if (idx < unref(posts).length - 1) _push(`<hr class="border-border-subtle">`);
					else _push(`<!---->`);
					_push(`<!--]-->`);
				});
				_push(`<!--]--></article>`);
			} else _push(`<p class="text-center py-20 text-fg-subtle">${ssrInterpolate(unref($t)("blog.no_posts"))}</p>`);
			_push(`</article></main>`);
		};
	}
});
//#endregion
//#region app/pages/blog/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var blog_default = index_vue_vue_type_script_setup_true_lang_default;

export { blog_default as default };
//# sourceMappingURL=blog-BfrIbxkJ.mjs.map

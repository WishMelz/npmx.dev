import { _ as _plugin_vue_export_helper_default, a as useSeoMeta$1, Y as useHead$1, R as DateTime_default, ab as useCachedFetch } from './server-placeholder-C9fYItBT.mjs';
import { u as useAsyncData } from './asyncData-Dr04OizO.mjs';
import { p as posts, A as AuthorList_default } from './virtual_nuxt__home_runner_work_npmx.dev_npmx.dev_node_modules_.cache_nuxt_.nuxt_blog_posts-C2lbUcqh.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, toValue, defineAsyncComponent, useSSRContext } from 'vue';
import { aB as NPMX_DEV_DID, bj as generateBlogTID, bk as NPMX_SITE, a as Constellation, bl as NPMX_DID } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'devalue';
import 'perfect-debounce';
import './AuthorAvatar-BHTSoUO-.mjs';
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

//#region app/composables/useBlogPostBlueskyLink.ts
var BLOG_BACKLINK_TTL_IN_SECONDS = 300;
function useBlogPostBlueskyLink(slug) {
	const cachedFetch = useCachedFetch();
	const blogUrl = computed(() => {
		const s = toValue(slug);
		if (!s) return null;
		return `${NPMX_SITE}/blog/${s}`;
	});
	return useAsyncData(() => blogUrl.value ? `blog-bsky-link:${blogUrl.value}` : "blog-bsky-link:none", async () => {
		const url = blogUrl.value;
		if (!url) return null;
		const constellation = new Constellation(cachedFetch);
		try {
			const { data: embedBacklinks } = await constellation.getBackLinks(url, "app.bsky.feed.post", "embed.external.uri", 1, void 0, true, [[NPMX_DID]], BLOG_BACKLINK_TTL_IN_SECONDS);
			const embedRecord = embedBacklinks.records[0];
			if (embedRecord) return {
				did: embedRecord.did,
				rkey: embedRecord.rkey,
				postUri: `at://${embedRecord.did}/app.bsky.feed.post/${embedRecord.rkey}`
			};
			const { data: facetBacklinks } = await constellation.getBackLinks(url, "app.bsky.feed.post", "facets[].features[app.bsky.richtext.facet#link].uri", 1, void 0, true, [[NPMX_DID]], BLOG_BACKLINK_TTL_IN_SECONDS);
			const facetRecord = facetBacklinks.records[0];
			if (facetRecord) return {
				did: facetRecord.did,
				rkey: facetRecord.rkey,
				postUri: `at://${facetRecord.did}/app.bsky.feed.post/${facetRecord.rkey}`
			};
		} catch (error) {}
		return null;
	}, "$qb5Kck_US6");
}
//#endregion
//#region app/components/global/BlogPostWrapper.vue?vue&type=script&setup=true&lang.ts
var __nuxt_component_2_lazy = defineAsyncComponent(() => import('./BlueskyComments-ByBNeZaM.mjs').then((c) => c.default || c));
var BlogPostWrapper_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlogPostWrapper",
	__ssrInlineRender: true,
	props: { frontmatter: {} },
	async setup(__props) {
		let __temp, __restore;
		const props = __props;
		const post = computed(() => posts.find((p) => p.slug === props.frontmatter.slug));
		useSeoMeta$1({
			title: props.frontmatter.title,
			description: props.frontmatter.description || props.frontmatter.excerpt,
			ogTitle: props.frontmatter.title,
			ogDescription: props.frontmatter.description || props.frontmatter.excerpt,
			ogType: "article",
			...props.frontmatter.draft ? { robots: "noindex, nofollow" } : {}
		});
		useHead$1({ link: [{
			rel: "site.standard.document",
			href: `at://${NPMX_DEV_DID}/site.standard.document/${generateBlogTID(props.frontmatter.date, props.frontmatter.slug)}`
		}] });
		defineOgImageComponent("BlogPost", {
			title: props.frontmatter.title,
			authors: post.value?.authors ?? [],
			date: props.frontmatter.date
		});
		const slug = computed(() => props.frontmatter.slug);
		const { data: blueskyLink } = ([__temp, __restore] = withAsyncContext(() => useBlogPostBlueskyLink(slug)), __temp = await __temp, __restore(), __temp);
		const blueskyPostUri = computed(() => blueskyLink.value?.postUri ?? null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AuthorList = AuthorList_default;
			const _component_DateTime = DateTime_default;
			const _component_LazyBlueskyComments = __nuxt_component_2_lazy;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container w-full py-8" }, _attrs))} data-v-647e9489>`);
			if (__props.frontmatter.draft) _push(`<div class="max-w-prose mx-auto mb-8 px-4 py-3 rounded-md border border-badge-orange/30 bg-badge-orange/5" data-v-647e9489><div class="flex items-center gap-2 text-badge-orange" data-v-647e9489><span class="i-lucide:file-edit w-4 h-4 shrink-0" aria-hidden="true" data-v-647e9489></span><span class="text-sm font-medium" data-v-647e9489>${ssrInterpolate(_ctx.$t("blog.draft_banner"))}</span></div></div>`);
			else _push(`<!---->`);
			if (unref(post)?.authors) {
				_push(`<div class="mb-12 max-w-prose mx-auto" data-v-647e9489><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" data-v-647e9489>`);
				_push(ssrRenderComponent(_component_AuthorList, {
					authors: unref(post).authors,
					variant: "expanded"
				}, null, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`<article class="max-w-prose mx-auto prose dark:prose-invert" data-v-647e9489><div class="text-sm text-fg-muted font-mono mb-4" data-v-647e9489>`);
			_push(ssrRenderComponent(_component_DateTime, {
				datetime: __props.frontmatter.date,
				year: "numeric",
				month: "short",
				day: "numeric"
			}, null, _parent));
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</article>`);
			if (unref(blueskyPostUri)) _push(ssrRenderComponent(_component_LazyBlueskyComments, { "post-uri": unref(blueskyPostUri) }, null, _parent));
			else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/components/global/BlogPostWrapper.vue
var _sfc_setup = BlogPostWrapper_vue_vue_type_script_setup_true_lang_default.setup;
BlogPostWrapper_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/BlogPostWrapper.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BlogPostWrapper_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(BlogPostWrapper_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-647e9489"]]), { __name: "BlogPostWrapper" });

export { BlogPostWrapper_default as default };
//# sourceMappingURL=BlogPostWrapper-iaPYrCYw.mjs.map

import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { A as AuthorAvatar_default } from './AuthorAvatar-BHTSoUO-.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import './server-placeholder-C9fYItBT.mjs';
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

//#region app/composables/useBlueskyAuthorProfiles.ts
/**
* Fetches author avatar URLs and profile links from the Bluesky API (AT Protocol).
*
* Makes a server-side request to `/api/atproto/bluesky-author-profiles`, which looks up
* each author's Bluesky profile to retrieve their avatar. Results are cached for 1 day.
*
* While the fetch is pending (or if it fails), returns authors with `avatar: null`
* and a constructed profile URL as fallback.
*/
function useBlueskyAuthorProfiles(authors) {
	const { data } = useFetch("/api/atproto/bluesky-author-profiles", { query: { authors: JSON.stringify(authors) } }, "$GL9m-S87W9");
	return { resolvedAuthors: computed(() => data.value?.authors ?? withoutBlueskyData(authors)) };
}
function withoutBlueskyData(authors) {
	return authors.map((author) => ({
		...author,
		avatar: null,
		profileUrl: author.blueskyHandle ? `https://bsky.app/profile/${author.blueskyHandle}` : null
	}));
}
//#endregion
//#region app/components/global/BlogPostFederatedArticles.vue?vue&type=script&setup=true&lang.ts
var BlogPostFederatedArticles_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlogPostFederatedArticles",
	__ssrInlineRender: true,
	props: {
		headline: {},
		articles: {}
	},
	setup(__props) {
		const props = __props;
		const { resolvedAuthors } = useBlueskyAuthorProfiles(computed(() => props.articles.map((article) => ({
			name: article.authorHandle,
			blueskyHandle: article.authorHandle
		}))).value);
		const federatedArticles = computed(() => {
			return props.articles.map((article, index) => {
				const profile = resolvedAuthors.value[index];
				return {
					url: article.url,
					title: article.title,
					description: article.description,
					authorHandle: article.authorHandle,
					author: {
						name: profile?.name || article.authorHandle,
						blueskyHandle: article.authorHandle,
						avatar: profile?.avatar || null,
						profileUrl: profile?.profileUrl || null
					}
				};
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AuthorAvatar = AuthorAvatar_default;
			_push(`<aside${ssrRenderAttrs(mergeProps({ class: "sm:-mx-6 sm:px-6 sm:-my-3 sm:py-3 sm:rounded-md" }, _attrs))}><h2 class="font-mono text-xl font-medium text-fg mt-0">${ssrInterpolate(__props.headline)}</h2>`);
			if (unref(federatedArticles).length) {
				_push(`<div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] transition-[grid-template-cols]"><!--[-->`);
				ssrRenderList(unref(federatedArticles), (article) => {
					_push(`<a${ssrRenderAttr("href", article.url)} target="_blank" rel="noopener noreferrer" class="grid grid-cols-[auto_1fr] gap-x-5 no-underline hover:no-underline rounded-lg border border-border p-4 transition-all hover:shadow-md hover:shadow-fg/5 hover:border-border-hover">`);
					if (article.author) _push(ssrRenderComponent(_component_AuthorAvatar, {
						author: article.author,
						size: "md",
						class: "row-span-2"
					}, null, _parent));
					else _push(`<!---->`);
					_push(`<div class="flex flex-col"><p class="text-lg text-fg leading-tight m-0">${ssrInterpolate(article.title)}</p><p class="text-md font-semibold text-fg-muted leading-none mt-2">${ssrInterpolate(article.author.name)}</p><p class="text-sm text-fg-subtle leading-snug m-0">${ssrInterpolate(article.description)}</p></div></a>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</aside>`);
		};
	}
});
//#endregion
//#region app/components/global/BlogPostFederatedArticles.vue
var _sfc_setup = BlogPostFederatedArticles_vue_vue_type_script_setup_true_lang_default.setup;
BlogPostFederatedArticles_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/BlogPostFederatedArticles.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BlogPostFederatedArticles_default = Object.assign(BlogPostFederatedArticles_vue_vue_type_script_setup_true_lang_default, { __name: "BlogPostFederatedArticles" });

export { BlogPostFederatedArticles_default as default };
//# sourceMappingURL=BlogPostFederatedArticles-5gPa6jf0.mjs.map

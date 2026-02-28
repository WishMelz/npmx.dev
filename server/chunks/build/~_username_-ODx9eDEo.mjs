import { g as useRoute, a as useRouter, b as useSeoMeta$1, B as Base_default, G as useSearchProvider, e as useNuxtApp, z as useLazyAsyncData, u as useI18n, m as Base_default$1 } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { L as LoadingSpinner_default, u as useAlgoliaSearch, e as emptySearchResponse } from './LoadingSpinner-qFOxe1aJ.mjs';
import { F as Field_default } from './Field-BBRX0YgS.mjs';
import { L as List_default } from './List-Dz9PwL_5.mjs';
import { A as Avatar_default } from './Avatar-BQCinbk6.mjs';
import { defineComponent, computed, shallowRef, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, toValue, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { aB as normalizeSearchParam } from '../nitro/nitro.mjs';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'algoliasearch/lite';
import './useNumberFormatter-CNADtHud.mjs';
import './useMarkdown-GGTGrYo2.mjs';
import './fetch-BX-wNfYP.mjs';
import '@vue/shared';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

var ListControls_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ListControls",
	__ssrInlineRender: true,
	props: {
		filter: {},
		sort: {},
		placeholder: {},
		totalCount: {},
		filteredCount: {}
	},
	emits: ["update:filter", "update:sort"],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const emit = __emit;
		const filterValue = computed({
			get: () => props.filter,
			set: (value) => emit("update:filter", value)
		});
		const sortValue = computed({
			get: () => props.sort,
			set: (value) => emit("update:sort", value)
		});
		const sortOptions = computed(() => [
			{
				value: "downloads",
				label: $t("package.sort.downloads")
			},
			{
				value: "updated",
				label: $t("package.sort.published")
			},
			{
				value: "name-asc",
				label: $t("package.sort.name_asc")
			},
			{
				value: "name-desc",
				label: $t("package.sort.name_desc")
			}
		]);
		const showFilteredCount = computed(() => {
			return props.filter && props.filteredCount !== void 0 && props.totalCount !== void 0 && props.filteredCount !== props.totalCount;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_InputBase = Base_default$1;
			const _component_SelectField = Field_default;
			_push(`<!--[--><div class="flex flex-col sm:flex-row gap-3 mb-6"><div class="flex-1 relative"><label for="package-filter" class="sr-only">${ssrInterpolate(unref($t)("package.list.filter_label"))}</label><div class="absolute h-full w-10 flex items-center justify-center text-fg-subtle pointer-events-none" aria-hidden="true"><div class="i-lucide:search w-4 h-4"></div></div>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "package-filter",
				modelValue: unref(filterValue),
				"onUpdate:modelValue": ($event) => isRef(filterValue) ? filterValue.value = $event : null,
				type: "search",
				placeholder: __props.placeholder ?? unref($t)("package.list.filter_placeholder"),
				"no-correct": "",
				class: "w-full min-w-25 ps-10",
				size: "medium"
			}, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_SelectField, {
				label: unref($t)("package.list.sort_label"),
				"hidden-label": "",
				id: "package-sort",
				class: "relative shrink-0",
				modelValue: unref(sortValue),
				"onUpdate:modelValue": ($event) => isRef(sortValue) ? sortValue.value = $event : null,
				items: unref(sortOptions).map((option) => ({
					label: option.label,
					value: option.value
				}))
			}, null, _parent));
			_push(`</div>`);
			if (unref(showFilteredCount)) _push(`<p class="text-fg-subtle text-xs font-mono mb-4">${ssrInterpolate(unref($t)("package.list.showing_count", {
				filtered: __props.filteredCount,
				total: __props.totalCount
			}))}</p>`);
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$1 = ListControls_vue_vue_type_script_setup_true_lang_default.setup;
ListControls_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ListControls.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ListControls_default = Object.assign(ListControls_vue_vue_type_script_setup_true_lang_default, { __name: "PackageListControls" });
/** Default page size for incremental loading (npm registry path) */
var PAGE_SIZE = 50;
/** npm search API practical limit for maintainer queries */
var MAX_RESULTS = 250;
/**
* Fetch packages for a given npm user/maintainer.
*
* The composable handles all loading strategy internally based on the active
* search provider. Consumers get a uniform interface regardless of provider:
*
* - **Algolia**: Fetches all packages at once via `owner.name` filter (fast).
* - **npm**: Incrementally paginates through `maintainer:` search results.
*
* @example
* ```ts
* const { data, status, hasMore, isLoadingMore, loadMore } = useUserPackages(username)
* ```
*/
function useUserPackages(username) {
	const route = useRoute();
	const { searchProvider } = useSearchProvider();
	const searchProviderValue = computed(() => {
		if (normalizeSearchParam(route.query.p) === "npm" || searchProvider.value === "npm") return "npm";
		return "algolia";
	});
	const { $npmRegistry } = useNuxtApp();
	const { searchByOwner } = useAlgoliaSearch();
	const currentPage = shallowRef(1);
	/** Tracks which provider actually served the current data (may differ from
	*  searchProvider when Algolia returns empty and we fall through to npm) */
	const activeProvider = shallowRef(searchProviderValue.value);
	const cache = shallowRef(null);
	const isLoadingMore = shallowRef(false);
	const asyncData = useLazyAsyncData(() => `user-packages:${searchProviderValue.value}:${toValue(username)}`, async ({ $npmRegistry }, { signal }) => {
		const user = toValue(username);
		if (!user) return emptySearchResponse();
		const provider = searchProviderValue.value;
		if (provider === "algolia") try {
			const response = await searchByOwner(user);
			if (user !== toValue(username) || provider !== searchProviderValue.value) return emptySearchResponse();
			if (response.objects.length > 0) {
				activeProvider.value = "algolia";
				cache.value = {
					username: user,
					objects: response.objects,
					total: response.total
				};
				return response;
			}
		} catch {}
		activeProvider.value = "npm";
		cache.value = null;
		currentPage.value = 1;
		const params = new URLSearchParams();
		params.set("text", `maintainer:${user}`);
		params.set("size", String(PAGE_SIZE));
		const { data: response, isStale } = await $npmRegistry(`/-/v1/search?${params.toString()}`, { signal }, 60);
		if (user !== toValue(username) || provider !== searchProviderValue.value) return emptySearchResponse();
		cache.value = {
			username: user,
			objects: response.objects,
			total: response.total
		};
		return {
			...response,
			isStale
		};
	}, { default: emptySearchResponse });
	/**
	* Fetch the next page of results from npm registry.
	* @param manageLoadingState - When false, caller manages isLoadingMore (used by loadAll to prevent flicker)
	*/
	async function fetchMore(manageLoadingState = true) {
		const user = toValue(username);
		if (!user || activeProvider.value !== "npm") return;
		if (cache.value && cache.value.username !== user) {
			cache.value = null;
			await asyncData.refresh();
			return;
		}
		const currentCount = cache.value?.objects.length ?? 0;
		const total = Math.min(cache.value?.total ?? Infinity, MAX_RESULTS);
		if (currentCount >= total) return;
		if (manageLoadingState) isLoadingMore.value = true;
		try {
			const from = currentCount;
			const size = Math.min(PAGE_SIZE, total - currentCount);
			const params = new URLSearchParams();
			params.set("text", `maintainer:${user}`);
			params.set("size", String(size));
			params.set("from", String(from));
			const { data: response } = await $npmRegistry(`/-/v1/search?${params.toString()}`, {}, 60);
			if (user !== toValue(username) || activeProvider.value !== "npm") return;
			if (cache.value && cache.value.username === user) {
				const existingNames = new Set(cache.value.objects.map((obj) => obj.package.name));
				const newObjects = response.objects.filter((obj) => !existingNames.has(obj.package.name));
				cache.value = {
					username: user,
					objects: [...cache.value.objects, ...newObjects],
					total: response.total
				};
			} else cache.value = {
				username: user,
				objects: response.objects,
				total: response.total
			};
		} finally {
			if (manageLoadingState) isLoadingMore.value = false;
		}
	}
	/** Load the next page of results (no-op if all loaded or using Algolia) */
	async function loadMore() {
		if (isLoadingMore.value || !hasMore.value) return;
		currentPage.value++;
		await fetchMore();
	}
	/** Load all remaining results at once (e.g. when user starts filtering) */
	async function loadAll() {
		if (!hasMore.value) return;
		isLoadingMore.value = true;
		try {
			while (hasMore.value) await fetchMore(false);
		} finally {
			isLoadingMore.value = false;
		}
	}
	watch(() => searchProviderValue.value, (newProvider) => {
		cache.value = null;
		currentPage.value = 1;
		activeProvider.value = newProvider;
	});
	const data = computed(() => {
		const user = toValue(username);
		if (cache.value && cache.value.username === user) return {
			isStale: false,
			objects: cache.value.objects,
			total: cache.value.total,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
		return asyncData.data.value;
	});
	/** Whether there are more results available to load (npm path only) */
	const hasMore = computed(() => {
		if (!toValue(username)) return false;
		if (activeProvider.value !== "npm") return false;
		if (!cache.value) return true;
		const fetched = cache.value.objects.length;
		return fetched < cache.value.total && fetched < MAX_RESULTS;
	});
	return {
		...asyncData,
		data,
		isLoadingMore,
		hasMore,
		loadMore,
		loadAll,
		pageSize: PAGE_SIZE
	};
}
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const username = computed(() => route.params.username.toLowerCase());
		const updateUrl = debounce((updates) => {
			router.replace({ query: {
				...route.query,
				page: updates.page && updates.page > 1 ? updates.page : void 0,
				q: updates.filter || void 0,
				sort: updates.sort && updates.sort !== "downloads" ? updates.sort : void 0
			} });
		}, 300);
		const filterText = shallowRef(normalizeSearchParam(route.query.q));
		const sortOption = shallowRef(normalizeSearchParam(route.query.sort) || "downloads");
		const debouncedUpdateUrl = debounce((filter, sort) => {
			updateUrl({
				filter,
				sort
			});
		}, 300);
		watch([filterText, sortOption], ([filter, sort]) => {
			if (filter !== "" || sort !== "downloads") loadAll();
			debouncedUpdateUrl(filter, sort);
		});
		const { data: results, status, error, isLoadingMore, hasMore, loadMore, loadAll, pageSize } = useUserPackages(username);
		const initialPage = computed(() => {
			const p = Number.parseInt(normalizeSearchParam(route.query.page), 10);
			return Number.isNaN(p) ? 1 : Math.max(1, p);
		});
		const packages = computed(() => results.value?.objects ?? []);
		const packageCount = computed(() => packages.value.length);
		const filteredAndSortedPackages = computed(() => {
			let pkgs = [...packages.value];
			if (filterText.value) {
				const search = filterText.value.toLowerCase();
				pkgs = pkgs.filter((pkg) => pkg.package.name.toLowerCase().includes(search) || pkg.package.description?.toLowerCase().includes(search));
			}
			switch (sortOption.value) {
				case "updated":
					pkgs.sort((a, b) => {
						const dateA = a.package.date || "";
						return (b.package.date || "").localeCompare(dateA);
					});
					break;
				case "name-asc":
					pkgs.sort((a, b) => a.package.name.localeCompare(b.package.name));
					break;
				case "name-desc":
					pkgs.sort((a, b) => b.package.name.localeCompare(a.package.name));
					break;
				default:
					pkgs.sort((a, b) => (b.downloads?.weekly ?? 0) - (a.downloads?.weekly ?? 0));
					break;
			}
			return pkgs;
		});
		const filteredCount = computed(() => filteredAndSortedPackages.value.length);
		const totalWeeklyDownloads = computed(() => filteredAndSortedPackages.value.reduce((sum, pkg) => sum + (pkg.downloads?.weekly ?? 0), 0));
		function handlePageChange(page) {
			updateUrl({
				page,
				filter: filterText.value,
				sort: sortOption.value
			});
		}
		watch(username, () => {
			filterText.value = "";
			sortOption.value = "downloads";
		});
		useSeoMeta$1({
			title: () => `~${username.value} - npmx`,
			ogTitle: () => `~${username.value} - npmx`,
			twitterTitle: () => `~${username.value} - npmx`,
			description: () => `npm packages maintained by ${username.value}`,
			ogDescription: () => `npm packages maintained by ${username.value}`,
			twitterDescription: () => `npm packages maintained by ${username.value}`
		});
		defineOgImageComponent("Default", {
			title: () => `~${username.value}`,
			description: () => results.value ? `${results.value.total} packages` : "npm user profile",
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UserAvatar = Avatar_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_LinkBase = Base_default;
			const _component_PackageListControls = ListControls_default;
			const _component_PackageList = List_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 flex flex-col py-8 sm:py-12 w-full" }, _attrs))}><header class="mb-8 pb-8 border-b border-border"><div class="flex flex-wrap items-center gap-4">`);
			_push(ssrRenderComponent(_component_UserAvatar, { username: unref(username) }, null, _parent));
			_push(`<div><h1 class="font-mono text-2xl sm:text-3xl font-medium">~${ssrInterpolate(unref(username))}</h1>`);
			if (unref(results)?.total) _push(`<p class="text-fg-muted text-sm mt-1">${ssrInterpolate(_ctx.$t("org.public_packages", { count: _ctx.$n(unref(results).total) }, unref(results).total))}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="ms-auto text-end"><nav aria-label="External links"><a${ssrRenderAttr("href", `https://www.npmjs.com/~${unref(username)}`)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5"${ssrRenderAttr("title", _ctx.$t("common.view_on_npm"))}><span class="i-simple-icons:npm w-4 h-4" aria-hidden="true"></span> npm </a></nav><p class="text-fg-subtle text-xs mt-1 flex items-center gap-1.5 justify-end cursor-help"${ssrRenderAttr("title", _ctx.$t("common.vanity_downloads_hint", { count: unref(filteredCount) }, unref(filteredCount)))}><span class="i-lucide:chart-line w-3.5 h-3.5" aria-hidden="true"></span><span class="font-mono">${ssrInterpolate(_ctx.$n(unref(totalWeeklyDownloads)))} ${ssrInterpolate(_ctx.$t("common.per_week"))}</span></p></div></div></header>`);
			if (unref(status) === "pending" && unref(packages).length === 0 && !unref(error)) _push(ssrRenderComponent(_component_LoadingSpinner, { text: _ctx.$t("common.loading_packages") }, null, _parent));
			else if (unref(error) || unref(status) === "error") {
				_push(`<div role="alert" class="py-12 text-center"><p class="text-fg-muted mb-4">${ssrInterpolate(unref(error)?.message ?? _ctx.$t("user.page.failed_to_load"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: { name: "index" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("common.go_back_home"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("common.go_back_home")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(packages).length > 0) {
				_push(`<section><h2 class="text-xs text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(_ctx.$t("user.page.packages_title"))}</h2>`);
				_push(ssrRenderComponent(_component_PackageListControls, {
					filter: unref(filterText),
					"onUpdate:filter": ($event) => isRef(filterText) ? filterText.value = $event : null,
					sort: unref(sortOption),
					"onUpdate:sort": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
					placeholder: _ctx.$t("user.page.filter_placeholder", { count: unref(results)?.total ?? 0 }),
					"total-count": unref(packageCount),
					"filtered-count": unref(filteredCount)
				}, null, _parent));
				if (unref(filteredAndSortedPackages).length === 0) _push(`<p class="text-fg-muted py-8 text-center font-mono">${ssrInterpolate(_ctx.$t("user.page.no_match", { query: unref(filterText) }))}</p>`);
				else _push(ssrRenderComponent(_component_PackageList, {
					results: unref(filteredAndSortedPackages),
					"has-more": unref(hasMore),
					"is-loading": unref(isLoadingMore),
					"page-size": unref(pageSize),
					"initial-page": unref(initialPage),
					onLoadMore: unref(loadMore),
					onPageChange: handlePageChange
				}, null, _parent));
				_push(`</section>`);
			} else if (unref(status) === "success") _push(`<div class="flex-1 flex items-center justify-center"><div class="text-center"><p class="text-fg-muted font-mono">${ssrInterpolate(_ctx.$t("user.page.no_packages"))} <span class="text-fg">~${ssrInterpolate(unref(username))}</span></p><p class="text-fg-subtle text-sm mt-2">${ssrInterpolate(_ctx.$t("user.page.no_packages_hint"))}</p></div></div>`);
			else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/~[username]/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var __username__default = index_vue_vue_type_script_setup_true_lang_default;

export { __username__default as default };
//# sourceMappingURL=~_username_-ODx9eDEo.mjs.map

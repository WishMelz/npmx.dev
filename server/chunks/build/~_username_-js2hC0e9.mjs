import { Y as useRoute$1, X as useRouter$1, U as useSeoMeta$1, j as nuxt_link_default, k as useI18n, C as noCorrect } from './server.mjs';
import { u as useNpmSearch, L as LoadingSpinner_default } from './useNpmSearch-BEb17E8y.mjs';
import { L as List_default } from './List-DALO9r7v.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { A as Avatar_default } from './Avatar-C-tsP1Dr.mjs';
import { defineComponent, computed, shallowRef, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDynamicModelProps, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { ar as normalizeSearchParam } from '../nitro/nitro.mjs';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atproto/oauth-client-node';
import 'valibot';
import '@upstash/redis';
import 'node:module';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import 'semver';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'marked';
import 'sanitize-html';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '@atproto/lex';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import './useCachedFetch-B1uvSFXX.mjs';
import './DateTime-BZR-7EUH.mjs';
import './useSettings-rf2hWHFQ.mjs';
import './useMarkdown-VT0m3PMc.mjs';
import './formatters-CMCwf4t3.mjs';

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
			let _temp0;
			_push(`<!--[--><div class="flex flex-col sm:flex-row gap-3 mb-6"><div class="flex-1 relative"><label for="package-filter" class="sr-only">${ssrInterpolate(unref($t)("package.list.filter_label"))}</label><div class="absolute h-full w-10 flex items-center justify-center text-fg-subtle pointer-events-none" aria-hidden="true"><div class="i-carbon:search w-4 h-4"></div></div><input${ssrRenderAttrs((_temp0 = mergeProps({
				id: "package-filter",
				value: unref(filterValue),
				type: "search",
				placeholder: __props.placeholder ?? unref($t)("package.list.filter_placeholder")
			}, "noCorrect" in _ctx ? _ctx.noCorrect : unref(noCorrect), { class: "w-full bg-bg-subtle border border-border rounded-lg ps-10 pe-4 py-2 font-mono text-sm text-fg placeholder:text-fg-subtle transition-colors duration-200 focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70" }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(filterValue)))))}></div><div class="relative shrink-0 flex"><label for="package-sort" class="sr-only">${ssrInterpolate(unref($t)("package.list.sort_label"))}</label><div class="relative"><select id="package-sort" class="appearance-none bg-bg-subtle border border-border rounded-lg ps-3 pe-8 py-2 font-mono text-sm text-fg cursor-pointer transition-colors duration-200 focus:border-border-hover focus:outline-none hover:border-border-hover"><!--[-->`);
			ssrRenderList(unref(sortOptions), (option) => {
				_push(`<option${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(sortValue)) ? ssrLooseContain(unref(sortValue), option.value) : ssrLooseEqual(unref(sortValue), option.value)) ? " selected" : ""}>${ssrInterpolate(option.label)}</option>`);
			});
			_push(`<!--]--></select><div class="absolute inset-ie-3 top-1/2 -translate-y-1/2 text-fg-subtle pointer-events-none" aria-hidden="true"><div class="i-carbon:chevron-down w-4 h-4"></div></div></div></div></div>`);
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
var pageSize = 50;
var maxResults = 250;
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const router = useRouter$1();
		const username = computed(() => route.params.username);
		const currentPage = shallowRef(1);
		const initialPage = computed(() => {
			const p = Number.parseInt(normalizeSearchParam(route.query.page), 10);
			return Number.isNaN(p) ? 1 : Math.max(1, p);
		});
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
		const hasLoadedAll = shallowRef(Boolean(route.query.q) || route.query.sort && normalizeSearchParam(route.query.sort) !== "downloads");
		const debouncedUpdateUrl = debounce((filter, sort) => {
			updateUrl({
				filter,
				sort
			});
		}, 300);
		watch([filterText, sortOption], ([filter, sort]) => {
			if (!hasLoadedAll.value && (filter !== "" || sort !== "downloads")) hasLoadedAll.value = true;
			debouncedUpdateUrl(filter, sort);
		});
		const searchQuery = computed(() => `maintainer:${username.value}`);
		const requestSize = computed(() => hasLoadedAll.value ? maxResults : pageSize * currentPage.value);
		const { data: results, status, error, isLoadingMore, hasMore: apiHasMore, fetchMore } = useNpmSearch(searchQuery, () => ({ size: requestSize.value }));
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
		const hasMore = computed(() => {
			if (!results.value) return false;
			if (hasLoadedAll.value) return false;
			if (!apiHasMore.value) return false;
			return results.value.objects.length < maxResults;
		});
		async function loadMore() {
			if (isLoadingMore.value || !hasMore.value) return;
			currentPage.value++;
			await fetchMore(requestSize.value);
		}
		function handlePageChange(page) {
			updateUrl({
				page,
				filter: filterText.value,
				sort: sortOption.value
			});
		}
		watch(username, () => {
			currentPage.value = 1;
			filterText.value = "";
			sortOption.value = "downloads";
			hasLoadedAll.value = false;
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
			const _component_NuxtLink = nuxt_link_default;
			const _component_PackageListControls = ListControls_default;
			const _component_PackageList = List_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 flex flex-col py-8 sm:py-12 w-full" }, _attrs))}><header class="mb-8 pb-8 border-b border-border"><div class="flex flex-wrap items-center gap-4">`);
			_push(ssrRenderComponent(_component_UserAvatar, { username: unref(username) }, null, _parent));
			_push(`<div><h1 class="font-mono text-2xl sm:text-3xl font-medium">~${ssrInterpolate(unref(username))}</h1>`);
			if (unref(results)?.total) _push(`<p class="text-fg-muted text-sm mt-1">${ssrInterpolate(_ctx.$t("org.public_packages", { count: _ctx.$n(unref(results).total) }, unref(results).total))}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="ms-auto text-end"><nav aria-label="External links"><a${ssrRenderAttr("href", `https://www.npmjs.com/~${unref(username)}`)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5"${ssrRenderAttr("title", _ctx.$t("common.view_on_npm"))}><span class="i-carbon:logo-npm w-4 h-4" aria-hidden="true"></span> npm </a></nav><p class="text-fg-subtle text-xs mt-1 flex items-center gap-1.5 justify-end cursor-help"${ssrRenderAttr("title", _ctx.$t("common.vanity_downloads_hint", { count: unref(filteredCount) }, unref(filteredCount)))}><span class="i-carbon:chart-line w-3.5 h-3.5" aria-hidden="true"></span><span class="font-mono">${ssrInterpolate(_ctx.$n(unref(totalWeeklyDownloads)))} ${ssrInterpolate(_ctx.$t("common.per_week"))}</span></p></div></div></header>`);
			if (unref(status) === "pending" && unref(currentPage) === 1) _push(ssrRenderComponent(_component_LoadingSpinner, { text: _ctx.$t("common.loading_packages") }, null, _parent));
			else if (unref(status) === "error") {
				_push(`<div role="alert" class="py-12 text-center"><p class="text-fg-muted mb-4">${ssrInterpolate(unref(error)?.message ?? _ctx.$t("user.page.failed_to_load"))}</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/",
					class: "btn"
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
					"is-loading": unref(isLoadingMore) || unref(status) === "pending" && unref(currentPage) > 1,
					"page-size": pageSize,
					"initial-page": unref(initialPage),
					onLoadMore: loadMore,
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
//# sourceMappingURL=~_username_-js2hC0e9.mjs.map

import { u as useI18n, g as useRoute, a as useRouter, t as useConnector, Q as showError, R as useHead$1, b as useSeoMeta$1, D as client_only_default, B as Base_default, G as useSearchProvider, z as useLazyAsyncData, S as createError$1 } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { L as LoadingSpinner_default, u as useAlgoliaSearch, e as emptySearchResponse, m as metaToSearchResult } from './LoadingSpinner-qFOxe1aJ.mjs';
import { u as usePackageListPreferences, a as useStructuredFilters, L as ListToolbar_default, P as PaginationControls_default } from './useStructuredFilters-C1haXYPk.mjs';
import { L as List_default } from './List-Dz9PwL_5.mjs';
import { defineComponent, computed, watch, shallowRef, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, toValue, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { aB as normalizeSearchParam, aV as mapWithConcurrency, n as encodePackageName } from '../nitro/nitro.mjs';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'algoliasearch/lite';
import './App-B-_OJFKC.mjs';
import '@floating-ui/vue';
import './Field-BBRX0YgS.mjs';
import './useNumberFormatter-CNADtHud.mjs';
import './useMarkdown-GGTGrYo2.mjs';
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

/**
* Fetch all packages for an npm organization.
*
* 1. Gets the authoritative package list from the npm registry (single request)
* 2. Fetches metadata from Algolia by exact name (single request)
* 3. Falls back to lightweight server-side package-meta lookups
*/
function useOrgPackages(orgName) {
	const route = useRoute();
	const { searchProvider } = useSearchProvider();
	const searchProviderValue = computed(() => {
		if (normalizeSearchParam(route.query.p) === "npm" || searchProvider.value === "npm") return "npm";
		return "algolia";
	});
	const { getPackagesByName } = useAlgoliaSearch();
	return useLazyAsyncData(() => `org-packages:${searchProviderValue.value}:${toValue(orgName)}`, async ({ ssrContext }, { signal }) => {
		const org = toValue(orgName);
		if (!org) return emptySearchResponse();
		let packageNames;
		try {
			const { packages } = await $fetch(`/api/registry/org/${encodeURIComponent(org)}/packages`, { signal });
			packageNames = packages;
		} catch (err) {
			if (err && typeof err === "object" && "statusCode" in err && err.statusCode === 404) {
				const error = createError$1({
					statusCode: 404,
					statusMessage: "Organization not found",
					message: `The organization "@${org}" does not exist on npm`
				});
				ssrContext.payload.error = error;
				throw error;
			}
			packageNames = [];
		}
		if (packageNames.length === 0) return emptySearchResponse();
		if (searchProviderValue.value === "algolia") try {
			const response = await getPackagesByName(packageNames);
			if (response.objects.length > 0) return response;
		} catch {}
		const results = (await mapWithConcurrency(packageNames, async (name) => {
			try {
				return await $fetch(`/api/registry/package-meta/${encodePackageName(name)}`, { signal });
			} catch {
				return null;
			}
		}, 10)).filter((meta) => meta !== null).map(metaToSearchResult);
		return {
			isStale: false,
			objects: results,
			total: results.length,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
	}, { default: emptySearchResponse });
}
var _org__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[org]",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const route = useRoute();
		const router = useRouter();
		const orgName = computed(() => route.params.org.toLowerCase());
		const { isConnected } = useConnector();
		const { data: results, status, error } = useOrgPackages(orgName);
		watch([status, error], ([newStatus, newError]) => {
			if (newStatus === "error" && newError?.statusCode === 404) showError({
				statusCode: 404,
				statusMessage: $t("org.page.not_found"),
				message: $t("org.page.not_found_message", { name: orgName.value })
			});
		}, { immediate: true });
		const packages = computed(() => results.value?.objects ?? []);
		const packageCount = computed(() => packages.value.length);
		const { viewMode, paginationMode, pageSize, columns, toggleColumn, resetColumns } = usePackageListPreferences();
		const { filters, sortOption, sortedPackages, availableKeywords, activeFilters, setTextFilter, setSearchScope, setDownloadRange, setSecurity, setUpdatedWithin, toggleKeyword, clearFilter, clearAllFilters, setSort } = useStructuredFilters({
			packages,
			initialSort: normalizeSearchParam(route.query.sort) ?? "updated-desc"
		});
		const currentPage = shallowRef(1);
		const totalPages = computed(() => {
			if (pageSize.value === "all") return 1;
			const numericSize = typeof pageSize.value === "number" ? pageSize.value : 25;
			return Math.ceil(sortedPackages.value.length / numericSize);
		});
		watch([filters, sortOption], () => {
			currentPage.value = 1;
		});
		watch(totalPages, (newTotal) => {
			if (currentPage.value > newTotal && newTotal > 0) currentPage.value = newTotal;
		});
		const updateUrl = debounce((updates) => {
			router.replace({ query: {
				...route.query,
				q: updates.filter || void 0,
				sort: updates.sort && updates.sort !== "updated-desc" ? updates.sort : void 0
			} });
		}, 300);
		watch([
			() => filters.value.text,
			() => filters.value.keywords,
			() => sortOption.value
		], ([text, keywords, sort]) => {
			updateUrl({
				filter: [text, ...keywords.map((keyword) => `keyword:${keyword}`)].filter(Boolean).join(" "),
				sort
			});
		});
		const filteredCount = computed(() => sortedPackages.value.length);
		const totalWeeklyDownloads = computed(() => sortedPackages.value.reduce((sum, pkg) => sum + (pkg.downloads?.weekly ?? 0), 0));
		watch(orgName, () => {
			clearAllFilters();
			setSort("updated-desc");
			currentPage.value = 1;
		});
		function handleClearFilter(chip) {
			clearFilter(chip);
		}
		shallowRef("members");
		useHead$1({ link: [{
			rel: "canonical",
			href: computed(() => `https://npmx.dev/@${orgName.value}`)
		}] });
		useSeoMeta$1({
			title: () => `@${orgName.value} - npmx`,
			ogTitle: () => `@${orgName.value} - npmx`,
			twitterTitle: () => `@${orgName.value} - npmx`,
			description: () => `npm packages published by the ${orgName.value} organization`,
			ogDescription: () => `npm packages published by the ${orgName.value} organization`,
			twitterDescription: () => `npm packages published by the ${orgName.value} organization`
		});
		defineOgImageComponent("Default", {
			title: () => `@${orgName.value}`,
			description: () => packageCount.value ? `${packageCount.value} packages` : "npm organization",
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ClientOnly = client_only_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_LinkBase = Base_default;
			const _component_PackageListToolbar = ListToolbar_default;
			const _component_PackageList = List_default;
			const _component_PaginationControls = PaginationControls_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-8 sm:py-12 w-full" }, _attrs))}><header class="mb-8 pb-8 border-b border-border"><div class="flex flex-wrap items-end gap-4"><div class="size-16 shrink-0 rounded-lg bg-bg-muted border border-border flex items-center justify-center" aria-hidden="true"><span class="text-2xl text-fg-subtle font-mono">${ssrInterpolate(unref(orgName).charAt(0).toUpperCase())}</span></div><div><h1 class="font-mono text-2xl sm:text-3xl font-medium">@${ssrInterpolate(unref(orgName))}</h1>`);
			if (unref(status) === "success") _push(`<p class="text-fg-muted text-sm mt-1">${ssrInterpolate(unref($t)("org.public_packages", { count: _ctx.$n(unref(packageCount)) }, unref(packageCount)))}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="ms-auto text-end"><nav aria-label="External links"><a${ssrRenderAttr("href", `https://www.npmjs.com/org/${unref(orgName)}`)} target="_blank" rel="noopener noreferrer" class="link-subtle font-mono text-sm inline-flex items-center gap-1.5"${ssrRenderAttr("title", unref($t)("common.view_on_npm"))}><span class="i-simple-icons:npm w-4 h-4" aria-hidden="true"></span> npm </a></nav><p class="text-fg-subtle text-xs mt-1 flex items-center gap-1.5 justify-end cursor-help"${ssrRenderAttr("title", unref($t)("common.vanity_downloads_hint", { count: unref(filteredCount) }, unref(filteredCount)))}><span class="i-lucide:chart-line w-3.5 h-3.5" aria-hidden="true"></span><span class="font-mono">${ssrInterpolate(_ctx.$n(unref(totalWeeklyDownloads)))} ${ssrInterpolate(unref($t)("common.per_week"))}</span></p></div></div></header>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			if (unref(status) === "pending") _push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("common.loading_packages") }, null, _parent));
			else if (unref(status) === "error") {
				_push(`<div role="alert" class="py-12 text-center"><p class="text-fg-muted mb-4">${ssrInterpolate(unref(error)?.message ?? unref($t)("org.page.failed_to_load"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: { name: "index" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("common.go_back_home"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("common.go_back_home")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(packageCount) === 0) _push(`<div class="py-12 text-center"><p class="text-fg-muted font-mono">${ssrInterpolate(unref($t)("org.page.no_packages"))} <span class="text-fg">@${ssrInterpolate(unref(orgName))}</span></p><p class="text-fg-subtle text-sm mt-2">${ssrInterpolate(unref($t)("org.page.no_packages_hint"))}</p></div>`);
			else if (unref(packages).length > 0) {
				_push(`<section${ssrRenderAttr("aria-label", unref($t)("org.page.packages_title"))}><h2 class="text-xs text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("org.page.packages_title"))}</h2>`);
				_push(ssrRenderComponent(_component_PackageListToolbar, {
					filters: unref(filters),
					"sort-option": unref(sortOption),
					"onUpdate:sortOption": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
					"view-mode": unref(viewMode),
					"onUpdate:viewMode": ($event) => isRef(viewMode) ? viewMode.value = $event : null,
					columns: unref(columns),
					"pagination-mode": unref(paginationMode),
					"onUpdate:paginationMode": ($event) => isRef(paginationMode) ? paginationMode.value = $event : null,
					"page-size": unref(pageSize),
					"onUpdate:pageSize": ($event) => isRef(pageSize) ? pageSize.value = $event : null,
					"total-count": unref(packageCount),
					"filtered-count": unref(filteredCount),
					"available-keywords": unref(availableKeywords),
					"active-filters": unref(activeFilters),
					onToggleColumn: unref(toggleColumn),
					onResetColumns: unref(resetColumns),
					onClearFilter: handleClearFilter,
					onClearAllFilters: unref(clearAllFilters),
					"onUpdate:text": unref(setTextFilter),
					"onUpdate:searchScope": unref(setSearchScope),
					"onUpdate:downloadRange": unref(setDownloadRange),
					"onUpdate:security": unref(setSecurity),
					"onUpdate:updatedWithin": unref(setUpdatedWithin),
					onToggleKeyword: unref(toggleKeyword)
				}, null, _parent));
				if (unref(sortedPackages).length === 0) _push(`<p class="text-fg-muted py-8 text-center font-mono">${ssrInterpolate(unref($t)("org.page.no_match", { query: unref(filters).text }))}</p>`);
				else {
					_push(`<!--[-->`);
					_push(ssrRenderComponent(_component_PackageList, {
						results: unref(sortedPackages),
						"view-mode": unref(viewMode),
						columns: unref(columns),
						filters: unref(filters),
						"sort-option": unref(sortOption),
						"onUpdate:sortOption": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
						"pagination-mode": unref(paginationMode),
						"page-size": unref(pageSize),
						"current-page": unref(currentPage),
						onClickKeyword: unref(toggleKeyword)
					}, null, _parent));
					_push(ssrRenderComponent(_component_PaginationControls, {
						mode: unref(paginationMode),
						"onUpdate:mode": ($event) => isRef(paginationMode) ? paginationMode.value = $event : null,
						"page-size": unref(pageSize),
						"onUpdate:pageSize": ($event) => isRef(pageSize) ? pageSize.value = $event : null,
						"current-page": unref(currentPage),
						"onUpdate:currentPage": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
						"total-items": unref(sortedPackages).length,
						"view-mode": unref(viewMode)
					}, null, _parent));
					_push(`<!--]-->`);
				}
				_push(`</section>`);
			} else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
var _sfc_setup = _org__vue_vue_type_script_setup_true_lang_default.setup;
_org__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/org/[org].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _org__default = _org__vue_vue_type_script_setup_true_lang_default;

export { _org__default as default };
//# sourceMappingURL=_org_-7qdlfaIQ.mjs.map

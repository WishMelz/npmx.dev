import { _ as _plugin_vue_export_helper_default, u as useI18n, g as useRoute, k as useGlobalSearch, r as useSettings, t as useConnector, v as onKeyDown, b as useSeoMeta$1, w as navigateTo, q as packageRoute, n as nuxt_link_default, c as useAsyncData, x as server_placeholder_default } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { L as LoadingSpinner_default } from './LoadingSpinner-qFOxe1aJ.mjs';
import { u as useSearch, i as isValidNewPackageName, c as checkPackageName } from './useSearch-CpT6BA2b.mjs';
import { u as usePackageListPreferences, a as useStructuredFilters, L as ListToolbar_default, P as PaginationControls_default } from './useStructuredFilters-C1haXYPk.mjs';
import { L as List_default, B as BaseCard_default } from './List-Dz9PwL_5.mjs';
import { defineComponent, computed, shallowRef, watch, ref, useTemplateRef, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { aB as normalizeSearchParam, aC as PROVIDER_SORT_KEYS, aD as parseSortOption } from '../nitro/nitro.mjs';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'algoliasearch/lite';
import 'validate-npm-package-name';
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

var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex items-center justify-center w-8 h-8 rounded-md text-fg-subtle"><span class="i-lucide:settings w-4 h-4" aria-hidden="true"></span></div></div>`);
}
var _sfc_setup$3 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchProviderToggle.server.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SearchProviderToggle_server_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SearchProviderToggle" });
var SearchSuggestionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SearchSuggestionCard",
	__ssrInlineRender: true,
	props: {
		type: {},
		name: {},
		isExactMatch: { type: Boolean },
		index: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseCard = BaseCard_default;
			const _component_NuxtLink = nuxt_link_default;
			_push(ssrRenderComponent(_component_BaseCard, mergeProps({ isExactMatch: __props.isExactMatch }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
						to: __props.type === "user" ? {
							name: "~username",
							params: { username: __props.name.toLowerCase() }
						} : {
							name: "org",
							params: { org: __props.name.toLowerCase() }
						},
						"data-suggestion-index": __props.index,
						class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="${ssrRenderClass([__props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted", "w-10 h-10 shrink-0 flex items-center justify-center border border-border"])}" aria-hidden="true"${_scopeId}><span class="text-lg text-fg-subtle font-mono"${_scopeId}>${ssrInterpolate(__props.name.charAt(0).toUpperCase())}</span></div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors" dir="ltr"${_scopeId}>${ssrInterpolate(__props.type === "user" ? "~" : "@")}${ssrInterpolate(__props.name)}</span><span class="text-xs px-1.5 py-0.5 rounded bg-bg-muted border border-border text-fg-muted font-mono"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.user") : _ctx.$t("search.suggestion.org"))}</span>`);
								if (__props.isExactMatch) _push(`<span class="text-xs px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono"${_scopeId}>${ssrInterpolate(_ctx.$t("search.exact_match"))}</span>`);
								else _push(`<!---->`);
								_push(`</div><p class="text-xs sm:text-sm text-fg-muted mt-0.5"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.view_user_packages") : _ctx.$t("search.suggestion.view_org_packages"))}</p></div><span class="i-lucide:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0" aria-hidden="true"${_scopeId}></span>`);
							} else return [
								createVNode("div", {
									class: ["w-10 h-10 shrink-0 flex items-center justify-center border border-border", __props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted"],
									"aria-hidden": "true"
								}, [createVNode("span", { class: "text-lg text-fg-subtle font-mono" }, toDisplayString(__props.name.charAt(0).toUpperCase()), 1)], 2),
								createVNode("div", { class: "min-w-0 flex-1" }, [createVNode("div", { class: "flex items-center gap-2" }, [
									createVNode("span", {
										class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors",
										dir: "ltr"
									}, toDisplayString(__props.type === "user" ? "~" : "@") + toDisplayString(__props.name), 1),
									createVNode("span", { class: "text-xs px-1.5 py-0.5 rounded bg-bg-muted border border-border text-fg-muted font-mono" }, toDisplayString(__props.type === "user" ? _ctx.$t("search.suggestion.user") : _ctx.$t("search.suggestion.org")), 1),
									__props.isExactMatch ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-xs px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono"
									}, toDisplayString(_ctx.$t("search.exact_match")), 1)) : createCommentVNode("", true)
								]), createVNode("p", { class: "text-xs sm:text-sm text-fg-muted mt-0.5" }, toDisplayString(__props.type === "user" ? _ctx.$t("search.suggestion.view_user_packages") : _ctx.$t("search.suggestion.view_org_packages")), 1)]),
								createVNode("span", {
									class: "i-lucide:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0",
									"aria-hidden": "true"
								})
							];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_NuxtLink, {
						to: __props.type === "user" ? {
							name: "~username",
							params: { username: __props.name.toLowerCase() }
						} : {
							name: "org",
							params: { org: __props.name.toLowerCase() }
						},
						"data-suggestion-index": __props.index,
						class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
					}, {
						default: withCtx(() => [
							createVNode("div", {
								class: ["w-10 h-10 shrink-0 flex items-center justify-center border border-border", __props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted"],
								"aria-hidden": "true"
							}, [createVNode("span", { class: "text-lg text-fg-subtle font-mono" }, toDisplayString(__props.name.charAt(0).toUpperCase()), 1)], 2),
							createVNode("div", { class: "min-w-0 flex-1" }, [createVNode("div", { class: "flex items-center gap-2" }, [
								createVNode("span", {
									class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors",
									dir: "ltr"
								}, toDisplayString(__props.type === "user" ? "~" : "@") + toDisplayString(__props.name), 1),
								createVNode("span", { class: "text-xs px-1.5 py-0.5 rounded bg-bg-muted border border-border text-fg-muted font-mono" }, toDisplayString(__props.type === "user" ? _ctx.$t("search.suggestion.user") : _ctx.$t("search.suggestion.org")), 1),
								__props.isExactMatch ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-xs px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono"
								}, toDisplayString(_ctx.$t("search.exact_match")), 1)) : createCommentVNode("", true)
							]), createVNode("p", { class: "text-xs sm:text-sm text-fg-muted mt-0.5" }, toDisplayString(__props.type === "user" ? _ctx.$t("search.suggestion.view_user_packages") : _ctx.$t("search.suggestion.view_org_packages")), 1)]),
							createVNode("span", {
								class: "i-lucide:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0",
								"aria-hidden": "true"
							})
						]),
						_: 1
					}, 8, ["to", "data-suggestion-index"])];
				}),
				_: 1
			}, _parent));
		};
	}
});
var _sfc_setup$2 = SearchSuggestionCard_vue_vue_type_script_setup_true_lang_default.setup;
SearchSuggestionCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchSuggestionCard.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SearchSuggestionCard_default = Object.assign(SearchSuggestionCard_vue_vue_type_script_setup_true_lang_default, { __name: "SearchSuggestionCard" });
var ClaimPackageModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ClaimPackageModal",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		packageScope: {},
		canPublishToScope: { type: Boolean }
	},
	setup(__props, { expose: __expose }) {
		const { t: $t } = useI18n();
		const props = __props;
		const { isConnected, state, npmUser, addOperation, approveOperation, executeOperations, refreshState } = useConnector();
		shallowRef(false);
		const publishSuccess = shallowRef(false);
		const publishError = shallowRef(null);
		const { data: checkResult, refresh: checkAvailability, status, error: checkError } = useAsyncData((_nuxtApp, { signal }) => {
			return checkPackageName(props.packageName, { signal });
		}, {
			default: () => null,
			immediate: false
		}, "$Z_MEDrod7m");
		computed(() => {
			return status.value === "pending";
		});
		computed(() => {
			return checkResult.value !== null ? null : publishError.value ?? (checkError.value instanceof Error ? checkError.value.message : $t("claim.modal.failed_to_check"));
		});
		const dialogRef = useTemplateRef("dialogRef");
		function open() {
			publishError.value = null;
			publishSuccess.value = false;
			checkAvailability();
			dialogRef.value?.showModal();
		}
		function close() {
			dialogRef.value?.close();
		}
		__expose({
			open,
			close
		});
		computed(() => {
			if (!checkResult.value?.similarPackages) return false;
			return checkResult.value.similarPackages.some((pkg) => pkg.similarity === "exact-match" || pkg.similarity === "very-similar");
		});
		const isScoped = computed(() => props.packageName.startsWith("@"));
		computed(() => {
			const access = isScoped.value ? "public" : void 0;
			return {
				name: props.packageName,
				version: "0.0.0",
				description: `Placeholder for ${props.packageName}`,
				main: "index.js",
				scripts: {},
				keywords: [],
				author: npmUser.value ? `${npmUser.value} (https://www.npmjs.com/~${npmUser.value})` : "",
				license: "UNLICENSED",
				private: false,
				...access && { publishConfig: { access } }
			};
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(server_placeholder_default, mergeProps({
				ref_key: "dialogRef",
				ref: dialogRef,
				modalTitle: unref($t)("claim.modal.title"),
				id: "claim-package-modal",
				class: "max-w-md"
			}, _attrs), {}, _parent));
		};
	}
});
var _sfc_setup$1 = ClaimPackageModal_vue_vue_type_script_setup_true_lang_default.setup;
ClaimPackageModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ClaimPackageModal.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ClaimPackageModal_default = Object.assign(ClaimPackageModal_vue_vue_type_script_setup_true_lang_default, { __name: "PackageClaimPackageModal" });
/**
* Detects if a package name is a platform-specific native binary package.
* These are typically optional dependencies that contain native binaries
* for specific OS/architecture combinations (e.g., @oxlint/win32-x64, esbuild-darwin-arm64).
* Sourced from searches for esbuild, and the napi-rs build triplets support matrix.
*/
var PLATFORMS = new Set([
	"win32",
	"darwin",
	"linux",
	"android",
	"freebsd",
	"openbsd",
	"netbsd",
	"sunos",
	"aix"
]);
var ARCHITECTURES = new Set([
	"x64",
	"arm64",
	"arm",
	"ia32",
	"ppc64",
	"ppc64le",
	"s390x",
	"riscv64",
	"mips64el",
	"loong64"
]);
var ABI_SUFFIXES = new Set([
	"gnu",
	"musl",
	"msvc",
	"gnueabihf"
]);
/**
* Checks if a package name is a platform-specific native binary package.
* Matches patterns like:
* - @scope/pkg-win32-x64
* - @scope/pkg-linux-arm64-gnu
* - pkg-darwin-arm64
* - @rollup/rollup-linux-x64-musl
*
* @param name - The full package name (including scope if present)
* @returns true if the package appears to be a platform-specific binary
*/
function isPlatformSpecificPackage(name) {
	const unscopedName = name.startsWith("@") ? name.split("/")[1] ?? "" : name;
	if (!unscopedName) return false;
	const parts = unscopedName.split("-");
	if (parts.length < 2) return false;
	for (let i = 0; i < parts.length - 1; i++) {
		const os = parts[i];
		const arch = parts[i + 1];
		if (os && arch && PLATFORMS.has(os) && ARCHITECTURES.has(arch)) {
			const abiSuffix = parts[i + 2];
			if (abiSuffix && !ABI_SUFFIXES.has(abiSuffix)) {
				if (i + 2 === parts.length - 1) continue;
			}
			return true;
		}
	}
	return false;
}
var pageSize = 25;
var search_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "search",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const route = useRoute();
		const { viewMode, paginationMode, pageSize: preferredPageSize, columns, toggleColumn, resetColumns } = usePackageListPreferences();
		const updateUrlPage = debounce((page) => {
			const url = new URL((void 0).location.href);
			if (page > 1) url.searchParams.set("page", page.toString());
			else url.searchParams.delete("page");
			(void 0).history.replaceState((void 0).history.state, "", url);
		}, 500);
		const { model: searchQuery, provider: searchProvider } = useGlobalSearch();
		const query = computed(() => searchQuery.value);
		const hasInteracted = shallowRef(false);
		const currentPage = shallowRef(1);
		const initialPage = computed(() => {
			const p = Number.parseInt(normalizeSearchParam(route.query.page), 10);
			return Number.isNaN(p) ? 1 : Math.max(1, p);
		});
		const rawVisibleResults = computed(() => results.value);
		const { settings } = useSettings();
		/**
		* Reorder results to put exact package name match at the top,
		* and optionally filter out platform-specific packages.
		*/
		const visibleResults = computed(() => {
			const raw = rawVisibleResults.value;
			if (!raw) return raw;
			let objects = raw.objects;
			if (settings.value.hidePlatformPackages) objects = objects.filter((r) => !isPlatformSpecificPackage(r.package.name));
			const q = query.value.trim().toLowerCase();
			if (!q) return objects === raw.objects ? raw : {
				...raw,
				objects
			};
			const exactIdx = objects.findIndex((r) => r.package.name.toLowerCase() === q);
			if (exactIdx <= 0) return objects === raw.objects ? raw : {
				...raw,
				objects
			};
			const reordered = [...objects];
			const [exactMatch] = reordered.splice(exactIdx, 1);
			if (exactMatch) reordered.unshift(exactMatch);
			return {
				...raw,
				objects: reordered
			};
		});
		const resultsArray = computed(() => visibleResults.value?.objects ?? []);
		const ALL_SORT_KEYS = [
			"downloads-week",
			"downloads-day",
			"downloads-month",
			"downloads-year",
			"updated",
			"name",
			"quality",
			"popularity",
			"maintenance",
			"score"
		];
		const disabledSortKeys = computed(() => {
			const supported = PROVIDER_SORT_KEYS[searchProvider.value];
			return ALL_SORT_KEYS.filter((k) => !supported.has(k));
		});
		const { filters, sortOption, availableKeywords, activeFilters, setTextFilter, setSearchScope, setDownloadRange, setSecurity, setUpdatedWithin, toggleKeyword, clearFilter, clearAllFilters } = useStructuredFilters({
			packages: resultsArray,
			initialSort: "relevance-desc",
			searchQueryModel: searchQuery
		});
		const isRelevanceSort = computed(() => sortOption.value === "relevance-desc" || sortOption.value === "relevance-asc");
		const EAGER_LOAD_SIZE = {
			algolia: 500,
			npm: 500
		};
		const requestedSize = computed(() => {
			const numericPrefSize = preferredPageSize.value === "all" ? 250 : preferredPageSize.value;
			const base = Math.max(pageSize, currentPage.value * numericPrefSize);
			if (!isRelevanceSort.value) {
				const cap = EAGER_LOAD_SIZE[searchProvider.value];
				return Math.max(base, cap);
			}
			return base;
		});
		watch(searchProvider, (provider) => {
			const { key } = parseSortOption(sortOption.value);
			if (!PROVIDER_SORT_KEYS[provider].has(key)) sortOption.value = "relevance-desc";
		});
		const { data: results, status, isLoadingMore, hasMore, fetchMore, isRateLimited, suggestions: validatedSuggestions, packageAvailability } = useSearch(query, searchProvider, () => ({ size: requestedSize.value }), { suggestions: true });
		const displayResults = computed(() => {
			if (isRelevanceSort.value) return resultsArray.value;
			const { key, direction } = parseSortOption(sortOption.value);
			const multiplier = direction === "asc" ? 1 : -1;
			return [...resultsArray.value].sort((a, b) => {
				let diff;
				switch (key) {
					case "downloads-week":
					case "downloads-day":
					case "downloads-month":
					case "downloads-year":
						diff = (a.downloads?.weekly ?? 0) - (b.downloads?.weekly ?? 0);
						break;
					case "updated":
						diff = new Date(a.package.date).getTime() - new Date(b.package.date).getTime();
						break;
					case "name":
						diff = a.package.name.localeCompare(b.package.name);
						break;
					default: diff = 0;
				}
				return diff * multiplier;
			});
		});
		const resultCount = computed(() => displayResults.value.length);
		/**
		* The effective total for display and pagination purposes.
		* When sorting by non-relevance, we're working with a fetched subset (e.g. 250),
		* not the full Algolia total (e.g. 92,324). Show the actual working set size.
		*/
		const effectiveTotal = computed(() => {
			if (isRelevanceSort.value) return visibleResults.value?.total ?? 0;
			return displayResults.value.length;
		});
		function handleClearFilter(chip) {
			clearFilter(chip);
		}
		const showSearching = computed(() => {
			if (!hasInteracted.value) return false;
			return status.value === "pending" && displayResults.value.length === 0;
		});
		async function loadMore() {
			if (isLoadingMore.value || !hasMore.value) return;
			currentPage.value++;
			await fetchMore(requestedSize.value);
		}
		function handlePageChange(page) {
			updateUrlPage(page);
		}
		watch(query, (newQuery, oldQuery) => {
			if (newQuery.trim() === (oldQuery || "").trim()) return;
			currentPage.value = 1;
			hasInteracted.value = true;
		});
		const isValidPackageName = computed(() => isValidNewPackageName(query.value.trim()));
		const { isConnected, npmUser, listOrgUsers } = useConnector();
		const packageScope = computed(() => {
			const q = query.value.trim();
			if (!q.startsWith("@")) return null;
			const match = q.match(/^@([^/]+)\//);
			return match ? match[1] : null;
		});
		const orgMembership = ref({});
		watch([
			packageScope,
			isConnected,
			npmUser
		], async ([scope, connected, user]) => {
			if (!scope || !connected || !user) return;
			if (scope in orgMembership.value) return;
			try {
				const users = await listOrgUsers(scope);
				if (users && user in users) orgMembership.value[scope] = true;
				else orgMembership.value[scope] = false;
			} catch {
				orgMembership.value[scope] = false;
			}
		}, { immediate: true });
		const canPublishToScope = computed(() => {
			const scope = packageScope.value;
			if (!scope) return true;
			if (!npmUser.value) return false;
			if (scope.toLowerCase() === npmUser.value.toLowerCase()) return true;
			return orgMembership.value[scope] === true;
		});
		const showClaimPrompt = computed(() => {
			return isValidPackageName.value && packageAvailability.value?.available === true && packageAvailability.value.name === query.value.trim() && (!isConnected.value || isConnected.value && canPublishToScope.value) && status.value !== "pending";
		});
		const claimPackageModalRef = useTemplateRef("claimPackageModalRef");
		/** Check if there's an exact package match in results */
		const hasExactPackageMatch = computed(() => {
			const q = query.value.trim().toLowerCase();
			if (!q || !visibleResults.value) return false;
			return visibleResults.value.objects.some((r) => r.package.name.toLowerCase() === q);
		});
		/** Check if query is an exact org match (e.g., @nuxt matches org nuxt) */
		const isExactOrgQuery = computed(() => {
			const q = query.value.trim();
			if (!q.startsWith("@") || q.includes("/")) return false;
			const orgName = q.slice(1).toLowerCase();
			return validatedSuggestions.value.some((s) => s.type === "org" && s.name.toLowerCase() === orgName && s.exists);
		});
		/** Determine which item should be highlighted as exact match */
		const exactMatchType = computed(() => {
			if (hasExactPackageMatch.value) return "package";
			if (isExactOrgQuery.value) return "org";
			const q = query.value.trim();
			if (q.startsWith("~")) {
				const userName = q.slice(1).toLowerCase();
				if (validatedSuggestions.value.some((s) => s.type === "user" && s.name.toLowerCase() === userName && s.exists)) return "user";
			}
			return null;
		});
		const suggestionCount = computed(() => validatedSuggestions.value.length);
		const totalSelectableCount = computed(() => suggestionCount.value + resultCount.value);
		/**
		* Get all focusable result elements in DOM order (suggestions first, then packages)
		*/
		function getFocusableElements() {
			const isVisible = (el) => el.getClientRects().length > 0;
			const suggestions = Array.from((void 0).querySelectorAll("[data-suggestion-index]")).filter(isVisible).sort((a, b) => {
				return Number.parseInt(a.dataset.suggestionIndex ?? "0", 10) - Number.parseInt(b.dataset.suggestionIndex ?? "0", 10);
			});
			const packages = Array.from((void 0).querySelectorAll("[data-result-index]")).filter(isVisible).sort((a, b) => {
				return Number.parseInt(a.dataset.resultIndex ?? "0", 10) - Number.parseInt(b.dataset.resultIndex ?? "0", 10);
			});
			return [...suggestions, ...packages];
		}
		/**
		* Focus an element and scroll it into view
		*/
		function focusElement(el) {
			el.focus();
			el.scrollIntoView({
				block: "nearest",
				behavior: "smooth"
			});
		}
		async function navigateToPackage(packageName) {
			await navigateTo(packageRoute(packageName));
		}
		const pendingEnterQuery = shallowRef(null);
		watch(displayResults, (results) => {
			if (!pendingEnterQuery.value) return;
			if ((void 0).activeElement?.tagName !== "INPUT") {
				pendingEnterQuery.value = null;
				return;
			}
			const firstResult = results[0];
			console.log("[search] watcher fired", {
				pending: pendingEnterQuery.value,
				firstResult: firstResult?.package.name
			});
			if (firstResult?.package.name === pendingEnterQuery.value) {
				pendingEnterQuery.value = null;
				navigateToPackage(firstResult.package.name);
			}
		});
		/**
		* Focus the header search input
		*/
		function focusSearchInput() {
			(void 0).querySelector("input[type=\"search\"], input[name=\"q\"]")?.focus();
		}
		function handleResultsKeydown(e) {
			if (e.key === "Enter" && (void 0).activeElement?.tagName === "INPUT") {
				const inputValue = (void 0).activeElement.value.trim();
				if (!inputValue) return;
				const firstResult = displayResults.value[0];
				if (firstResult?.package.name === inputValue) {
					pendingEnterQuery.value = null;
					return navigateToPackage(firstResult.package.name);
				}
				pendingEnterQuery.value = inputValue;
				return;
			}
			if (totalSelectableCount.value <= 0) return;
			const elements = getFocusableElements();
			if (elements.length === 0) return;
			const currentIndex = elements.findIndex((el) => el === (void 0).activeElement);
			if (e.key === "ArrowDown") {
				e.preventDefault();
				const el = elements[currentIndex < 0 ? 0 : Math.min(currentIndex + 1, elements.length - 1)];
				if (el) focusElement(el);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault();
				if (currentIndex <= 0) {
					focusSearchInput();
					return;
				}
				const el = elements[currentIndex - 1];
				if (el) focusElement(el);
				return;
			}
			if (e.key === "Enter") {
				if ((void 0).activeElement && elements.includes((void 0).activeElement)) {
					const el = (void 0).activeElement;
					if (el.tagName !== "A") {
						e.preventDefault();
						el.click();
					}
				}
			}
		}
		onKeyDown([
			"ArrowDown",
			"ArrowUp",
			"Enter"
		], handleResultsKeydown);
		useSeoMeta$1({
			title: () => `${query.value ? $t("search.title_search", { search: query.value }) : $t("search.title_packages")} - npmx`,
			ogTitle: () => `${query.value ? $t("search.title_search", { search: query.value }) : $t("search.title_packages")} - npmx`,
			twitterTitle: () => `${query.value ? $t("search.title_search", { search: query.value }) : $t("search.title_packages")} - npmx`,
			description: () => query.value ? $t("search.meta_description", { search: query.value }) : $t("search.meta_description_packages"),
			ogDescription: () => query.value ? $t("search.meta_description", { search: query.value }) : $t("search.meta_description_packages"),
			twitterDescription: () => query.value ? $t("search.meta_description", { search: query.value }) : $t("search.meta_description_packages")
		});
		defineOgImageComponent("Default", {
			title: () => `${query.value ? $t("search.title_search", { search: query.value }) : $t("search.title_packages")} - npmx`,
			description: () => query.value ? $t("search.meta_description", { search: query.value }) : $t("search.meta_description_packages"),
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SearchProviderToggle = SearchProviderToggle_server_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_SearchSuggestionCard = SearchSuggestionCard_default;
			const _component_PackageListToolbar = ListToolbar_default;
			const _component_PackageList = List_default;
			const _component_PaginationControls = PaginationControls_default;
			const _component_PackageClaimPackageModal = ClaimPackageModal_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: ["flex-1 py-8 search-page", { "overflow-x-hidden": unref(viewMode) !== "table" }] }, _attrs))} data-v-94b26821><div class="container-sm" data-v-94b26821><div class="flex items-center justify-between gap-4 mb-4" data-v-94b26821><h1 class="font-mono text-2xl sm:text-3xl font-medium" data-v-94b26821>${ssrInterpolate(unref($t)("search.title"))}</h1>`);
			_push(ssrRenderComponent(_component_SearchProviderToggle, null, null, _parent));
			_push(`</div>`);
			if (unref(query)) {
				_push(`<section class="results-layout" data-v-94b26821>`);
				if (unref(showSearching)) _push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("search.searching") }, null, _parent));
				else _push(`<!---->`);
				_push(`<div style="${ssrRenderStyle(unref(results) || unref(displayResults).length > 0 || unref(isRateLimited) || unref(status) === "error" || unref(status) === "success" ? null : { display: "none" })}" data-v-94b26821>`);
				if (unref(validatedSuggestions).length > 0 && unref(displayResults).length > 0) {
					_push(`<div class="mb-6 space-y-3" data-v-94b26821><!--[-->`);
					ssrRenderList(unref(validatedSuggestions), (suggestion, idx) => {
						_push(ssrRenderComponent(_component_SearchSuggestionCard, {
							key: `${suggestion.type}-${suggestion.name}`,
							type: suggestion.type,
							name: suggestion.name,
							index: idx,
							"is-exact-match": unref(exactMatchType) === "org" && suggestion.type === "org" || unref(exactMatchType) === "user" && suggestion.type === "user"
						}, null, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				if (unref(showClaimPrompt) && unref(visibleResults) && unref(displayResults).length > 0) _push(`<div class="mb-6 p-4 bg-bg-subtle border border-border rounded-lg sm:flex hidden flex-row sm:items-center gap-3 sm:gap-4" data-v-94b26821><div class="flex-1 min-w-0" data-v-94b26821><p class="font-mono text-sm text-fg" data-v-94b26821>${ssrInterpolate(unref($t)("search.not_taken", { name: unref(query) }))}</p><p class="text-xs text-fg-muted mt-0.5" data-v-94b26821>${ssrInterpolate(unref($t)("search.claim_prompt"))}</p></div><button type="button" class="shrink-0 px-4 py-2 font-mono text-sm text-bg bg-fg rounded-md motion-safe:transition-colors motion-safe:duration-200 hover:bg-fg/90 focus-visible:outline-accent/70" data-v-94b26821>${ssrInterpolate(unref($t)("search.claim_button", { name: unref(query) }))}</button></div>`);
				else _push(`<!---->`);
				if (unref(isRateLimited)) _push(`<div role="status" class="py-12" data-v-94b26821><p class="text-fg-muted font-mono mb-6 text-center" data-v-94b26821>${ssrInterpolate(unref($t)("search.rate_limited"))}</p></div>`);
				else if (unref(visibleResults) && unref(displayResults).length > 0) {
					_push(`<div class="mb-6" data-v-94b26821>`);
					_push(ssrRenderComponent(_component_PackageListToolbar, {
						filters: unref(filters),
						"sort-option": unref(sortOption),
						"onUpdate:sortOption": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
						"view-mode": unref(viewMode),
						"onUpdate:viewMode": ($event) => isRef(viewMode) ? viewMode.value = $event : null,
						columns: unref(columns),
						"pagination-mode": unref(paginationMode),
						"onUpdate:paginationMode": ($event) => isRef(paginationMode) ? paginationMode.value = $event : null,
						"page-size": unref(preferredPageSize),
						"onUpdate:pageSize": ($event) => isRef(preferredPageSize) ? preferredPageSize.value = $event : null,
						"total-count": unref(effectiveTotal),
						"filtered-count": unref(displayResults).length,
						"available-keywords": unref(availableKeywords),
						"active-filters": unref(activeFilters),
						"disabled-sort-keys": unref(disabledSortKeys),
						"search-context": "",
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
					if (unref(viewMode) === "cards" && unref(paginationMode) === "infinite") {
						_push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono" data-v-94b26821>`);
						if (unref(isRelevanceSort)) _push(`<!--[-->${ssrInterpolate(unref($t)("search.found_packages", { count: _ctx.$n(unref(visibleResults).total) }, unref(visibleResults).total))}<!--]-->`);
						else _push(`<!--[-->${ssrInterpolate(unref($t)("search.found_packages_sorted", { count: _ctx.$n(unref(effectiveTotal)) }, unref(effectiveTotal)))}<!--]-->`);
						if (unref(status) === "pending") _push(`<span class="text-fg-subtle" data-v-94b26821>${ssrInterpolate(unref($t)("search.updating"))}</span>`);
						else _push(`<!---->`);
						_push(`</p>`);
					} else _push(`<!---->`);
					if (unref(viewMode) === "table" || unref(paginationMode) === "paginated") _push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono" data-v-94b26821>${ssrInterpolate(unref($t)("filters.count.showing_paginated", {
						pageSize: unref(preferredPageSize) === "all" ? _ctx.$n(unref(effectiveTotal)) : Math.min(unref(preferredPageSize), unref(effectiveTotal)),
						count: _ctx.$n(unref(effectiveTotal))
					}, unref(effectiveTotal)))}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else if (unref(status) === "success" || unref(status) === "error") {
					_push(`<div role="status" class="py-12" data-v-94b26821><p class="text-fg-muted font-mono mb-6 text-center" data-v-94b26821>${ssrInterpolate(unref($t)("search.no_results", { query: unref(query) }))}</p>`);
					if (unref(validatedSuggestions).length > 0) {
						_push(`<div class="max-w-md mx-auto mb-6 space-y-3" data-v-94b26821><!--[-->`);
						ssrRenderList(unref(validatedSuggestions), (suggestion, idx) => {
							_push(ssrRenderComponent(_component_SearchSuggestionCard, {
								key: `${suggestion.type}-${suggestion.name}`,
								type: suggestion.type,
								name: suggestion.name,
								index: idx,
								"is-exact-match": unref(exactMatchType) === "org" && suggestion.type === "org" || unref(exactMatchType) === "user" && suggestion.type === "user"
							}, null, _parent));
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					if (unref(showClaimPrompt)) _push(`<div class="max-w-md mx-auto text-center hidden sm:block" data-v-94b26821><div class="p-4 bg-bg-subtle border border-border rounded-lg" data-v-94b26821><p class="text-sm text-fg-muted mb-3" data-v-94b26821>${ssrInterpolate(unref($t)("search.want_to_claim"))}</p><button type="button" class="px-4 py-2 font-mono text-sm text-bg bg-fg rounded-md transition-colors duration-200 hover:bg-fg/90 focus-visible:outline-accent/70" data-v-94b26821>${ssrInterpolate(unref($t)("search.claim_button", { name: unref(query) }))}</button></div></div>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(ssrRenderComponent(_component_PackageList, {
					style: unref(displayResults).length > 0 && !unref(isRateLimited) ? null : { display: "none" },
					results: unref(displayResults),
					"search-query": unref(query),
					filters: unref(filters),
					"search-context": "",
					"heading-level": "h2",
					"show-publisher": "",
					"has-more": unref(hasMore),
					"is-loading": unref(isLoadingMore),
					"page-size": unref(preferredPageSize),
					"initial-page": unref(initialPage),
					"view-mode": unref(viewMode),
					columns: unref(columns),
					"sort-option": unref(sortOption),
					"onUpdate:sortOption": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
					"pagination-mode": unref(paginationMode),
					"current-page": unref(currentPage),
					onLoadMore: loadMore,
					onPageChange: handlePageChange,
					onClickKeyword: unref(toggleKeyword)
				}, null, _parent));
				if (unref(displayResults).length > 0 && !unref(isRateLimited)) _push(ssrRenderComponent(_component_PaginationControls, {
					mode: unref(paginationMode),
					"onUpdate:mode": ($event) => isRef(paginationMode) ? paginationMode.value = $event : null,
					"page-size": unref(preferredPageSize),
					"onUpdate:pageSize": ($event) => isRef(preferredPageSize) ? preferredPageSize.value = $event : null,
					"current-page": unref(currentPage),
					"onUpdate:currentPage": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
					"total-items": unref(effectiveTotal),
					"view-mode": unref(viewMode)
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</div></section>`);
			} else _push(`<section class="py-20 text-center" data-v-94b26821><p class="text-fg-subtle font-mono text-sm" data-v-94b26821>${ssrInterpolate(unref($t)("search.start_typing"))}</p></section>`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_PackageClaimPackageModal, {
				ref_key: "claimPackageModalRef",
				ref: claimPackageModalRef,
				"package-name": unref(query),
				"package-scope": unref(packageScope),
				"can-publish-to-scope": unref(canPublishToScope)
			}, null, _parent));
			_push(`</main>`);
		};
	}
});
var _sfc_setup = search_vue_vue_type_script_setup_true_lang_default.setup;
search_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var search_default = /* @__PURE__ */ _plugin_vue_export_helper_default(search_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-94b26821"]]);

export { search_default as default };
//# sourceMappingURL=search-BA4e2M4g.mjs.map

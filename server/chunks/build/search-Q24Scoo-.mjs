import { H as useI18n, ct as useRoute$1, lt as useRouter$1, u as useSearchProvider, d as useSettings, o as useConnector, m as onKeyDown, nt as useSeoMeta$1, st as navigateTo, s as packageRoute, a as _plugin_vue_export_helper_default, W as nuxt_link_default, X as useAsyncData, $ as server_placeholder_default } from './server.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DtDCPnhJ.mjs';
import { L as LoadingSpinner_default } from './LoadingSpinner-er2gks8E.mjs';
import { u as useSearch, i as isValidNewPackageName, c as checkPackageName } from './useSearch-DuwuODWO.mjs';
import { u as usePackageListPreferences, a as useStructuredFilters, p as parseSearchOperators, L as ListToolbar_default, P as PaginationControls_default } from './useStructuredFilters-DsoGXNOY.mjs';
import { L as List_default, B as BaseCard_default } from './List-C77sESZJ.mjs';
import { defineComponent, computed, shallowRef, watch, ref, useTemplateRef, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { aC as normalizeSearchParam, aU as PROVIDER_SORT_KEYS, aV as parseSortOption } from '../nitro/nitro.mjs';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atproto/oauth-client-node';
import 'valibot';
import '@upstash/redis';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
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
import 'algoliasearch/lite';
import './App-cOlf6p32.mjs';
import '@floating-ui/vue';
import './Field-CwiCxWgG.mjs';
import './useNumberFormatter-B-AHKObJ.mjs';
import './useMarkdown-DuX2wexs.mjs';

var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex items-center justify-center w-8 h-8 rounded-md text-fg-subtle"><span class="i-carbon:settings w-4 h-4" aria-hidden="true"></span></div></div>`);
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
							params: { username: __props.name }
						} : {
							name: "org",
							params: { org: __props.name }
						},
						"data-suggestion-index": __props.index,
						class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="${ssrRenderClass([__props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted", "w-10 h-10 shrink-0 flex items-center justify-center border border-border"])}" aria-hidden="true"${_scopeId}><span class="text-lg text-fg-subtle font-mono"${_scopeId}>${ssrInterpolate(__props.name.charAt(0).toUpperCase())}</span></div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors" dir="ltr"${_scopeId}>${ssrInterpolate(__props.type === "user" ? "~" : "@")}${ssrInterpolate(__props.name)}</span><span class="text-xs px-1.5 py-0.5 rounded bg-bg-muted border border-border text-fg-muted font-mono"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.user") : _ctx.$t("search.suggestion.org"))}</span>`);
								if (__props.isExactMatch) _push(`<span class="text-xs px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono"${_scopeId}>${ssrInterpolate(_ctx.$t("search.exact_match"))}</span>`);
								else _push(`<!---->`);
								_push(`</div><p class="text-xs sm:text-sm text-fg-muted mt-0.5"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.view_user_packages") : _ctx.$t("search.suggestion.view_org_packages"))}</p></div><span class="i-carbon:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0" aria-hidden="true"${_scopeId}></span>`);
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
									class: "i-carbon:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0",
									"aria-hidden": "true"
								})
							];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_NuxtLink, {
						to: __props.type === "user" ? {
							name: "~username",
							params: { username: __props.name }
						} : {
							name: "org",
							params: { org: __props.name }
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
								class: "i-carbon:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0",
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
	props: { packageName: {} },
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
		const route = useRoute$1();
		const router = useRouter$1();
		const { isAlgolia } = useSearchProvider();
		const { viewMode, paginationMode, pageSize: preferredPageSize, columns, toggleColumn, resetColumns } = usePackageListPreferences();
		const updateUrlPage = debounce((page) => {
			router.replace({ query: {
				...route.query,
				page: page > 1 ? page : void 0
			} });
		}, 500);
		const query = computed(() => normalizeSearchParam(route.query.q));
		const hasInteracted = shallowRef(false);
		const currentPage = shallowRef(1);
		const initialPage = computed(() => {
			const p = Number.parseInt(normalizeSearchParam(route.query.page), 10);
			return Number.isNaN(p) ? 1 : Math.max(1, p);
		});
		const rawVisibleResults = computed(() => results.value);
		const { settings } = useSettings();
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
			const supported = PROVIDER_SORT_KEYS[isAlgolia.value ? "algolia" : "npm"];
			return ALL_SORT_KEYS.filter((k) => !supported.has(k));
		});
		const { filters, sortOption, availableKeywords, activeFilters, setTextFilter, setSearchScope, setDownloadRange, setSecurity, setUpdatedWithin, toggleKeyword, clearFilter, clearAllFilters } = useStructuredFilters({
			packages: resultsArray,
			initialFilters: { ...parseSearchOperators(normalizeSearchParam(route.query.q)) },
			initialSort: "relevance-desc"
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
				const cap = isAlgolia.value ? EAGER_LOAD_SIZE.algolia : EAGER_LOAD_SIZE.npm;
				return Math.max(base, cap);
			}
			return base;
		});
		watch(isAlgolia, (algolia) => {
			const { key } = parseSortOption(sortOption.value);
			if (!PROVIDER_SORT_KEYS[algolia ? "algolia" : "npm"].has(key)) sortOption.value = "relevance-desc";
		});
		const { data: results, status, isLoadingMore, hasMore, fetchMore, isRateLimited, suggestions: validatedSuggestions, packageAvailability } = useSearch(query, () => ({ size: requestedSize.value }), { suggestions: true });
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
		watch(query, () => {
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
			return isConnected.value && isValidPackageName.value && packageAvailability.value?.available === true && packageAvailability.value.name === query.value.trim() && canPublishToScope.value && status.value !== "pending";
		});
		const claimPackageModalRef = useTemplateRef("claimPackageModalRef");
		const hasExactPackageMatch = computed(() => {
			const q = query.value.trim().toLowerCase();
			if (!q || !visibleResults.value) return false;
			return visibleResults.value.objects.some((r) => r.package.name.toLowerCase() === q);
		});
		const isExactOrgQuery = computed(() => {
			const q = query.value.trim();
			if (!q.startsWith("@") || q.includes("/")) return false;
			const orgName = q.slice(1).toLowerCase();
			return validatedSuggestions.value.some((s) => s.type === "org" && s.name.toLowerCase() === orgName && s.exists);
		});
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
		function getFocusableElements() {
			const suggestions = Array.from((void 0).querySelectorAll("[data-suggestion-index]")).sort((a, b) => {
				return Number.parseInt(a.dataset.suggestionIndex ?? "0", 10) - Number.parseInt(b.dataset.suggestionIndex ?? "0", 10);
			});
			const packages = Array.from((void 0).querySelectorAll("[data-result-index]")).sort((a, b) => {
				return Number.parseInt(a.dataset.resultIndex ?? "0", 10) - Number.parseInt(b.dataset.resultIndex ?? "0", 10);
			});
			return [...suggestions, ...packages];
		}
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
				const el = elements[currentIndex < 0 ? 0 : Math.max(currentIndex - 1, 0)];
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
			_push(`<main${ssrRenderAttrs(mergeProps({ class: ["flex-1 py-8", { "overflow-x-hidden": unref(viewMode) !== "table" }] }, _attrs))}><div class="container-sm"><div class="flex items-center justify-between gap-4 mb-4"><h1 class="font-mono text-2xl sm:text-3xl font-medium">${ssrInterpolate(unref($t)("search.title"))}</h1>`);
			_push(ssrRenderComponent(_component_SearchProviderToggle, null, null, _parent));
			_push(`</div>`);
			if (unref(query)) {
				_push(`<section>`);
				if (unref(showSearching)) _push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("search.searching") }, null, _parent));
				else if (unref(visibleResults)) {
					_push(`<div>`);
					if (unref(validatedSuggestions).length > 0) {
						_push(`<div class="mb-6 space-y-3"><!--[-->`);
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
					if (unref(showClaimPrompt) && unref(visibleResults).total > 0) _push(`<div class="mb-6 p-4 bg-bg-subtle border border-border rounded-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"><div class="flex-1 min-w-0"><p class="font-mono text-sm text-fg">${ssrInterpolate(unref($t)("search.not_taken", { name: unref(query) }))}</p><p class="text-xs text-fg-muted mt-0.5">${ssrInterpolate(unref($t)("search.claim_prompt"))}</p></div><button type="button" class="shrink-0 px-4 py-2 font-mono text-sm text-bg bg-fg rounded-md motion-safe:transition-colors motion-safe:duration-200 hover:bg-fg/90 focus-visible:outline-accent/70">${ssrInterpolate(unref($t)("search.claim_button", { name: unref(query) }))}</button></div>`);
					else _push(`<!---->`);
					if (unref(isRateLimited)) _push(`<div role="status" class="py-12"><p class="text-fg-muted font-mono mb-6 text-center">${ssrInterpolate(unref($t)("search.rate_limited"))}</p></div>`);
					else if (unref(visibleResults).total > 0) {
						_push(`<div class="mb-6">`);
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
							_push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono">`);
							if (unref(isRelevanceSort)) _push(`<!--[-->${ssrInterpolate(unref($t)("search.found_packages", { count: _ctx.$n(unref(visibleResults).total) }, unref(visibleResults).total))}<!--]-->`);
							else _push(`<!--[-->${ssrInterpolate(unref($t)("search.found_packages_sorted", { count: _ctx.$n(unref(effectiveTotal)) }, unref(effectiveTotal)))}<!--]-->`);
							if (unref(status) === "pending") _push(`<span class="text-fg-subtle">${ssrInterpolate(unref($t)("search.updating"))}</span>`);
							else _push(`<!---->`);
							_push(`</p>`);
						} else _push(`<!---->`);
						if (unref(viewMode) === "table" || unref(paginationMode) === "paginated") _push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono">${ssrInterpolate(unref($t)("filters.count.showing_paginated", {
							pageSize: unref(preferredPageSize) === "all" ? _ctx.$n(unref(effectiveTotal)) : Math.min(unref(preferredPageSize), unref(effectiveTotal)),
							count: _ctx.$n(unref(effectiveTotal))
						}, unref(effectiveTotal)))}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else if (unref(status) === "success" || unref(status) === "error") {
						_push(`<div role="status" class="py-12"><p class="text-fg-muted font-mono mb-6 text-center">${ssrInterpolate(unref($t)("search.no_results", { query: unref(query) }))}</p>`);
						if (unref(validatedSuggestions).length > 0) {
							_push(`<div class="max-w-md mx-auto mb-6 space-y-3"><!--[-->`);
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
						if (unref(showClaimPrompt)) _push(`<div class="max-w-md mx-auto text-center"><div class="p-4 bg-bg-subtle border border-border rounded-lg"><p class="text-sm text-fg-muted mb-3">${ssrInterpolate(unref($t)("search.want_to_claim"))}</p><button type="button" class="px-4 py-2 font-mono text-sm text-bg bg-fg rounded-md transition-colors duration-200 hover:bg-fg/90 focus-visible:outline-accent/70">${ssrInterpolate(unref($t)("search.claim_button", { name: unref(query) }))}</button></div></div>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else _push(`<!---->`);
					if (unref(displayResults).length > 0 && !unref(isRateLimited)) _push(ssrRenderComponent(_component_PackageList, {
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
					else _push(`<!---->`);
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
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</section>`);
			} else _push(`<section class="py-20 text-center"><p class="text-fg-subtle font-mono text-sm">${ssrInterpolate(unref($t)("search.start_typing"))}</p></section>`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_PackageClaimPackageModal, {
				ref_key: "claimPackageModalRef",
				ref: claimPackageModalRef,
				"package-name": unref(query)
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
var search_default = search_vue_vue_type_script_setup_true_lang_default;

export { search_default as default };
//# sourceMappingURL=search-Q24Scoo-.mjs.map

import { k as useI18n, Y as useRoute$1, X as useRouter$1, a as useConnector, s as onKeyDown, U as useSeoMeta$1, J as navigateTo, j as nuxt_link_default, L as useAsyncData, B as server_placeholder_default } from './server.mjs';
import { u as useNpmSearch, L as LoadingSpinner_default } from './useNpmSearch-BEb17E8y.mjs';
import { u as usePackageListPreferences, a as useStructuredFilters, p as parseSearchOperators, L as ListToolbar_default, P as PaginationControls_default } from './useStructuredFilters-CmF9SRZE.mjs';
import { L as List_default, a as BaseCard_default } from './List-DALO9r7v.mjs';
import { a as useSettings } from './useSettings-rf2hWHFQ.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-B9kXXNCy.mjs';
import { defineComponent, computed, shallowRef, watch, ref, useTemplateRef, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { ar as normalizeSearchParam } from '../nitro/nitro.mjs';
import validatePackageName from 'validate-npm-package-name';
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
import './App-ao9FX9qi.mjs';
import '@floating-ui/vue';
import './DateTime-BZR-7EUH.mjs';
import './useMarkdown-VT0m3PMc.mjs';
import './formatters-CMCwf4t3.mjs';

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
						to: __props.type === "user" ? `/~${__props.name}` : `/@${__props.name}`,
						"data-suggestion-index": __props.index,
						class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="${ssrRenderClass([__props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted", "w-10 h-10 shrink-0 flex items-center justify-center border border-border"])}" aria-hidden="true"${_scopeId}><span class="text-lg text-fg-subtle font-mono"${_scopeId}>${ssrInterpolate(__props.name.charAt(0).toUpperCase())}</span></div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors"${_scopeId}>${ssrInterpolate(__props.type === "user" ? "~" : "@")}${ssrInterpolate(__props.name)}</span><span class="text-xs px-1.5 py-0.5 rounded bg-bg-muted border border-border text-fg-muted font-mono"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.user") : _ctx.$t("search.suggestion.org"))}</span>`);
								if (__props.isExactMatch) _push(`<span class="text-xs px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30 text-accent font-mono"${_scopeId}>${ssrInterpolate(_ctx.$t("search.exact_match"))}</span>`);
								else _push(`<!---->`);
								_push(`</div><p class="text-xs sm:text-sm text-fg-muted mt-0.5"${_scopeId}>${ssrInterpolate(__props.type === "user" ? _ctx.$t("search.suggestion.view_user_packages") : _ctx.$t("search.suggestion.view_org_packages"))}</p></div><span class="i-carbon:arrow-right rtl-flip w-4 h-4 text-fg-subtle group-hover:text-fg transition-colors shrink-0" aria-hidden="true"${_scopeId}></span>`);
							} else return [
								createVNode("div", {
									class: ["w-10 h-10 shrink-0 flex items-center justify-center border border-border", __props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted"],
									"aria-hidden": "true"
								}, [createVNode("span", { class: "text-lg text-fg-subtle font-mono" }, toDisplayString(__props.name.charAt(0).toUpperCase()), 1)], 2),
								createVNode("div", { class: "min-w-0 flex-1" }, [createVNode("div", { class: "flex items-center gap-2" }, [
									createVNode("span", { class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors" }, toDisplayString(__props.type === "user" ? "~" : "@") + toDisplayString(__props.name), 1),
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
						to: __props.type === "user" ? `/~${__props.name}` : `/@${__props.name}`,
						"data-suggestion-index": __props.index,
						class: "flex items-center gap-4 focus-visible:outline-none after:content-[''] after:absolute after:inset-0"
					}, {
						default: withCtx(() => [
							createVNode("div", {
								class: ["w-10 h-10 shrink-0 flex items-center justify-center border border-border", __props.type === "org" ? "rounded-lg bg-bg-muted" : "rounded-full bg-bg-muted"],
								"aria-hidden": "true"
							}, [createVNode("span", { class: "text-lg text-fg-subtle font-mono" }, toDisplayString(__props.name.charAt(0).toUpperCase()), 1)], 2),
							createVNode("div", { class: "min-w-0 flex-1" }, [createVNode("div", { class: "flex items-center gap-2" }, [
								createVNode("span", { class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors" }, toDisplayString(__props.type === "user" ? "~" : "@") + toDisplayString(__props.name), 1),
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
function normalizePackageName(name) {
	return (name.startsWith("@") ? name.split("/")[1] || name : name).toLowerCase().replace(/[.\-_]/g, "").replace(/^(node|js)|(-?js|-?node)$/g, "");
}
function levenshteinDistance(a, b) {
	const matrix = [];
	for (let i = 0; i <= b.length; i++) matrix[i] = [i];
	for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
	for (let i = 1; i <= b.length; i++) for (let j = 1; j <= a.length; j++) if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
	else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
	return matrix[b.length][a.length];
}
function isValidNewPackageName(name) {
	if (!name) return false;
	return validatePackageName(name).validForNewPackages === true;
}
var NPM_REGISTRY$1 = "https://registry.npmjs.org";
async function checkPackageExists(name, options = {}) {
	try {
		const encodedName = name.startsWith("@") ? `@${encodeURIComponent(name.slice(1))}` : encodeURIComponent(name);
		await $fetch(`${NPM_REGISTRY$1}/${encodedName}`, {
			...options,
			method: "HEAD"
		});
		return true;
	} catch {
		return false;
	}
}
async function findSimilarPackages(name, options = {}) {
	const normalized = normalizePackageName(name);
	const similar = [];
	try {
		const searchResponse = await $fetch(`${NPM_REGISTRY$1}/-/v1/search?text=${encodeURIComponent(name)}&size=20`, options);
		for (const obj of searchResponse.objects) {
			const pkgName = obj.package.name;
			const pkgNormalized = normalizePackageName(pkgName);
			if (pkgName === name) {
				similar.push({
					name: pkgName,
					description: obj.package.description,
					similarity: "exact-match"
				});
				continue;
			}
			if (normalized === pkgNormalized) {
				similar.push({
					name: pkgName,
					description: obj.package.description,
					similarity: "very-similar"
				});
				continue;
			}
			const distance = levenshteinDistance(normalized, pkgNormalized);
			const maxLen = Math.max(normalized.length, pkgNormalized.length);
			if (maxLen === 0) continue;
			if (1 - distance / maxLen >= .8 || distance <= 2) similar.push({
				name: pkgName,
				description: obj.package.description,
				similarity: "similar"
			});
		}
		const order = {
			"exact-match": 0,
			"very-similar": 1,
			"similar": 2
		};
		similar.sort((a, b) => order[a.similarity] - order[b.similarity]);
		return similar.slice(0, 10);
	} catch {
		return [];
	}
}
async function checkPackageName(name, options = {}) {
	const validation = validatePackageName(name);
	const valid = validation.validForNewPackages === true;
	const result = {
		name,
		available: false,
		valid
	};
	if (validation.errors?.length) result.validationErrors = validation.errors;
	if (validation.warnings?.length) result.validationWarnings = validation.warnings;
	if (!valid) return result;
	const [exists, similarPackages] = await Promise.all([checkPackageExists(name, options), findSimilarPackages(name, options)]);
	result.available = !exists;
	result.similarPackages = similarPackages;
	return result;
}
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
			return publishError.value ?? (checkError.value instanceof Error ? checkError.value.message : $t("claim.modal.failed_to_check"));
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
var NPM_REGISTRY = "https://registry.npmjs.org";
var search_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "search",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const route = useRoute$1();
		const router = useRouter$1();
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
		const requestedSize = computed(() => {
			const numericPrefSize = preferredPageSize.value === "all" ? 250 : preferredPageSize.value;
			return Math.max(pageSize, currentPage.value * numericPrefSize);
		});
		const initialPage = computed(() => {
			const p = Number.parseInt(normalizeSearchParam(route.query.page), 10);
			return Number.isNaN(p) ? 1 : Math.max(1, p);
		});
		const { data: results, status, isLoadingMore, hasMore, fetchMore } = useNpmSearch(query, () => ({
			size: requestedSize.value,
			incremental: true
		}));
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
		const { filters, sortOption, sortedPackages, availableKeywords, activeFilters, setTextFilter, setSearchScope, setDownloadRange, setSecurity, setUpdatedWithin, toggleKeyword, clearFilter, clearAllFilters } = useStructuredFilters({
			packages: resultsArray,
			initialFilters: { ...parseSearchOperators(normalizeSearchParam(route.query.q)) },
			initialSort: "relevance-desc"
		});
		const displayResults = computed(() => {
			if (sortOption.value === "relevance-desc" || sortOption.value === "relevance-asc") return resultsArray.value;
			return sortedPackages.value;
		});
		const resultCount = computed(() => displayResults.value.length);
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
		const packageAvailability = shallowRef(null);
		const checkAvailability = debounce(async (name) => {
			if (!isValidNewPackageName(name)) {
				packageAvailability.value = null;
				return;
			}
			try {
				const exists = await checkPackageExists(name);
				if (name === query.value.trim()) packageAvailability.value = {
					name,
					available: !exists
				};
			} catch {
				packageAvailability.value = null;
			}
		}, 300);
		watch(query, (q) => {
			const trimmed = q.trim();
			if (isValidNewPackageName(trimmed)) checkAvailability(trimmed);
			else packageAvailability.value = null;
		}, { immediate: true });
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
		function isValidNpmName(name) {
			if (!name || name.length === 0 || name.length > 214) return false;
			if (!/^[a-z0-9]/i.test(name)) return false;
			return /^[a-z0-9_-]+$/i.test(name);
		}
		const existenceCache = ref({});
		async function checkOrgExists(name) {
			const cacheKey = `org:${name.toLowerCase()}`;
			if (cacheKey in existenceCache.value) return existenceCache.value[cacheKey] === true;
			existenceCache.value[cacheKey] = "pending";
			try {
				const response = await $fetch(`${NPM_REGISTRY}/-/v1/search`, { query: {
					text: `@${name}`,
					size: 5
				} });
				const scopePrefix = `@${name.toLowerCase()}/`;
				const exists = response.objects.some((obj) => obj.package.name.toLowerCase().startsWith(scopePrefix));
				existenceCache.value[cacheKey] = exists;
				return exists;
			} catch {
				existenceCache.value[cacheKey] = false;
				return false;
			}
		}
		async function checkUserExists(name) {
			const cacheKey = `user:${name.toLowerCase()}`;
			if (cacheKey in existenceCache.value) return existenceCache.value[cacheKey] === true;
			existenceCache.value[cacheKey] = "pending";
			try {
				const exists = (await $fetch(`${NPM_REGISTRY}/-/v1/search`, { query: {
					text: `maintainer:${name}`,
					size: 1
				} })).total > 0;
				existenceCache.value[cacheKey] = exists;
				return exists;
			} catch {
				existenceCache.value[cacheKey] = false;
				return false;
			}
		}
		const parsedQuery = computed(() => {
			const q = query.value.trim();
			if (!q) return {
				type: null,
				name: ""
			};
			if (q.startsWith("~")) {
				const name = q.slice(1);
				if (isValidNpmName(name)) return {
					type: "user",
					name
				};
				return {
					type: null,
					name: ""
				};
			}
			if (q.startsWith("@")) {
				if (q.includes("/")) return {
					type: null,
					name: ""
				};
				const name = q.slice(1);
				if (isValidNpmName(name)) return {
					type: "org",
					name
				};
				return {
					type: null,
					name: ""
				};
			}
			if (isValidNpmName(q)) return {
				type: "both",
				name: q
			};
			return {
				type: null,
				name: ""
			};
		});
		const validatedSuggestions = ref([]);
		const suggestionsLoading = shallowRef(false);
		const validateSuggestions = debounce(async (parsed) => {
			if (!parsed.type || !parsed.name) {
				validatedSuggestions.value = [];
				return;
			}
			suggestionsLoading.value = true;
			const suggestions = [];
			try {
				if (parsed.type === "user") {
					if (await checkUserExists(parsed.name)) suggestions.push({
						type: "user",
						name: parsed.name,
						exists: true
					});
				} else if (parsed.type === "org") {
					if (await checkOrgExists(parsed.name)) suggestions.push({
						type: "org",
						name: parsed.name,
						exists: true
					});
				} else if (parsed.type === "both") {
					const [orgExists, userExists] = await Promise.all([checkOrgExists(parsed.name), checkUserExists(parsed.name)]);
					if (orgExists) suggestions.push({
						type: "org",
						name: parsed.name,
						exists: true
					});
					if (userExists) suggestions.push({
						type: "user",
						name: parsed.name,
						exists: true
					});
				}
			} finally {
				suggestionsLoading.value = false;
			}
			validatedSuggestions.value = suggestions;
		}, 200);
		watch(parsedQuery, (parsed) => {
			validateSuggestions(parsed);
		}, { immediate: true });
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
			await navigateTo({
				name: "package",
				params: { package: packageName.split("/") }
			});
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
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_SearchSuggestionCard = SearchSuggestionCard_default;
			const _component_PackageListToolbar = ListToolbar_default;
			const _component_PackageList = List_default;
			const _component_PaginationControls = PaginationControls_default;
			const _component_PackageClaimPackageModal = ClaimPackageModal_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: ["flex-1 py-8", { "overflow-x-hidden": unref(viewMode) !== "table" }] }, _attrs))}><div class="container-sm"><h1 class="font-mono text-2xl sm:text-3xl font-medium mb-4">${ssrInterpolate(unref($t)("search.title"))}</h1>`);
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
					if (unref(visibleResults).total > 0) {
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
							"total-count": unref(visibleResults).total,
							"filtered-count": unref(displayResults).length,
							"available-keywords": unref(availableKeywords),
							"active-filters": unref(activeFilters),
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
							_push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono">${ssrInterpolate(unref($t)("search.found_packages", { count: _ctx.$n(unref(visibleResults).total) }, unref(visibleResults).total))} `);
							if (unref(status) === "pending") _push(`<span class="text-fg-subtle">${ssrInterpolate(unref($t)("search.updating"))}</span>`);
							else _push(`<!---->`);
							_push(`</p>`);
						} else _push(`<!---->`);
						if (unref(viewMode) === "table" || unref(paginationMode) === "paginated") _push(`<p role="status" class="text-fg-muted text-sm mt-4 font-mono">${ssrInterpolate(unref($t)("filters.count.showing_paginated", {
							pageSize: unref(preferredPageSize) === "all" ? _ctx.$n(unref(visibleResults).total) : unref(preferredPageSize),
							count: _ctx.$n(unref(visibleResults).total)
						}, unref(visibleResults).total))}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else if (unref(status) !== "pending") {
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
					if (unref(displayResults).length > 0) _push(ssrRenderComponent(_component_PackageList, {
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
					if (unref(displayResults).length > 0) _push(ssrRenderComponent(_component_PaginationControls, {
						mode: unref(paginationMode),
						"onUpdate:mode": ($event) => isRef(paginationMode) ? paginationMode.value = $event : null,
						"page-size": unref(preferredPageSize),
						"onUpdate:pageSize": ($event) => isRef(preferredPageSize) ? preferredPageSize.value = $event : null,
						"current-page": unref(currentPage),
						"onUpdate:currentPage": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
						"total-items": unref(visibleResults)?.total ?? unref(displayResults).length,
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
//# sourceMappingURL=search-D-DDFeNV.mjs.map

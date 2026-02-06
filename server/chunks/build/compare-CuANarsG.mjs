import { k as useI18n, X as useRouter$1, U as useSeoMeta$1, W as useRoute, G as useRouter, y as tryOnScopeDispose, i as _plugin_vue_export_helper_default, j as nuxt_link_default } from './server.mjs';
import { L as LoadingSpinner_default, u as useNpmSearch } from './useNpmSearch-BEb17E8y.mjs';
import { A as App_default } from './App-ao9FX9qi.mjs';
import { D as DateTime_default } from './DateTime-BZR-7EUH.mjs';
import { f as formatBytes, a as formatCompactNumber } from './formatters-CMCwf4t3.mjs';
import { D as DownloadAnalytics_default } from './DownloadAnalytics-Cw74_EQM.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, openBlock, createBlock, Fragment, renderList, customRef, toValue, nextTick, watch, shallowRef, readonly, useModel, createTextVNode, toDisplayString, mergeModels, resolveComponent, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { aZ as DEFAULT_FACETS, a_ as ALL_FACETS, a$ as FACET_INFO, b0 as CATEGORY_ORDER, b1 as FACETS_BY_CATEGORY } from '../nitro/nitro.mjs';
import 'perfect-debounce';
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
import '@floating-ui/vue';
import './useSettings-rf2hWHFQ.mjs';
import './frameworks-BKkcLNOX.mjs';

const NO_DEPENDENCY_ID = "__no_dependency__";
const NoDependencyDisplay = {
	DASH: "__display_dash__",
	UP_TO_YOU: "__display_up_to_you__"
};
function usePackageComparison(packageNames) {
	const { t } = useI18n();
	const packages = computed(() => toValue(packageNames));
	const cache = shallowRef(/* @__PURE__ */ new Map());
	const packagesData = computed(() => packages.value.map((name) => cache.value.get(name) ?? null));
	const status = shallowRef("idle");
	const error = shallowRef(null);
	const loadingPackages = shallowRef(/* @__PURE__ */ new Set());
	const installSizeLoading = shallowRef(false);
	function getFacetValues(facet) {
		if (!packagesData.value || packagesData.value.length === 0) return [];
		return packagesData.value.map((pkg) => {
			if (!pkg) return null;
			return computeFacetValue(facet, pkg, t);
		});
	}
	function isFacetLoading(facet) {
		if (!installSizeLoading.value) return false;
		return facet === "installSize" || facet === "totalDependencies";
	}
	function isColumnLoading(index) {
		const name = packages.value[index];
		return name ? loadingPackages.value.has(name) : false;
	}
	return {
		packagesData: readonly(packagesData),
		status: readonly(status),
		error: readonly(error),
		getFacetValues,
		isFacetLoading,
		isColumnLoading
	};
}
function resolveNoDependencyDisplay(marker, t) {
	switch (marker) {
		case NoDependencyDisplay.DASH: return {
			display: "–",
			status: "neutral"
		};
		case NoDependencyDisplay.UP_TO_YOU: return {
			display: t("compare.facets.values.up_to_you"),
			status: "good"
		};
		default: return null;
	}
}
function computeFacetValue(facet, data, t) {
	const { isNoDependency } = data;
	switch (facet) {
		case "downloads":
			if (data.downloads === void 0) {
				if (isNoDependency) return {
					raw: 0,
					display: "–",
					status: "neutral"
				};
				return null;
			}
			return {
				raw: data.downloads,
				display: formatCompactNumber(data.downloads),
				status: "neutral"
			};
		case "packageSize":
			if (data.packageSize == null) return null;
			return {
				raw: data.packageSize,
				display: formatBytes(data.packageSize),
				status: data.packageSize > 5 * 1024 * 1024 ? "warning" : "neutral"
			};
		case "installSize":
			if (data.installSize == null) return null;
			return {
				raw: data.installSize.totalSize,
				display: formatBytes(data.installSize.totalSize),
				status: data.installSize.totalSize > 50 * 1024 * 1024 ? "warning" : "neutral"
			};
		case "moduleFormat": {
			if (!data.analysis) {
				if (isNoDependency) return {
					raw: "up-to-you",
					display: t("compare.facets.values.up_to_you"),
					status: "good"
				};
				return null;
			}
			const format = data.analysis.moduleFormat;
			return {
				raw: format,
				display: format === "dual" ? "ESM + CJS" : format.toUpperCase(),
				status: format === "esm" || format === "dual" ? "good" : "neutral"
			};
		}
		case "types": {
			if (data.isBinaryOnly) return {
				raw: "binary",
				display: "N/A",
				status: "muted",
				tooltip: t("compare.facets.binary_only_tooltip")
			};
			if (!data.analysis) {
				if (isNoDependency) return {
					raw: "up-to-you",
					display: t("compare.facets.values.up_to_you"),
					status: "good"
				};
				return null;
			}
			const types = data.analysis.types;
			return {
				raw: types.kind,
				display: types.kind === "included" ? t("compare.facets.values.types_included") : types.kind === "@types" ? "@types" : t("compare.facets.values.types_none"),
				status: types.kind === "included" ? "good" : types.kind === "@types" ? "info" : "bad"
			};
		}
		case "engines": {
			const engines = data.metadata?.engines;
			if (!engines?.node) {
				if (isNoDependency) return {
					raw: "up-to-you",
					display: t("compare.facets.values.up_to_you"),
					status: "good"
				};
				return {
					raw: null,
					display: t("compare.facets.values.any"),
					status: "neutral"
				};
			}
			return {
				raw: engines.node,
				display: `Node.js ${engines.node}`,
				status: "neutral"
			};
		}
		case "vulnerabilities": {
			if (!data.vulnerabilities) {
				if (isNoDependency) return {
					raw: "up-to-you",
					display: t("compare.facets.values.up_to_you"),
					status: "good"
				};
				return null;
			}
			const count = data.vulnerabilities.count;
			const sev = data.vulnerabilities.severity;
			return {
				raw: count,
				display: count === 0 ? t("compare.facets.values.none") : t("compare.facets.values.vulnerabilities_summary", {
					count,
					critical: sev.critical,
					high: sev.high
				}),
				status: count === 0 ? "good" : sev.critical > 0 || sev.high > 0 ? "bad" : "warning"
			};
		}
		case "lastUpdated": {
			const lastUpdated = data.metadata?.lastUpdated;
			const resolved = lastUpdated ? resolveNoDependencyDisplay(lastUpdated, t) : null;
			if (resolved) return {
				raw: 0,
				...resolved
			};
			if (!lastUpdated) return null;
			const date = new Date(lastUpdated);
			return {
				raw: date.getTime(),
				display: lastUpdated,
				status: isStale(date) ? "warning" : "neutral",
				type: "date"
			};
		}
		case "license": {
			const license = data.metadata?.license;
			const resolved = license ? resolveNoDependencyDisplay(license, t) : null;
			if (resolved) return {
				raw: null,
				...resolved
			};
			if (!license) {
				if (isNoDependency) return {
					raw: null,
					display: "–",
					status: "neutral"
				};
				return {
					raw: null,
					display: t("compare.facets.values.unknown"),
					status: "warning"
				};
			}
			return {
				raw: license,
				display: license,
				status: "neutral"
			};
		}
		case "dependencies": {
			const depCount = data.directDeps;
			if (depCount == null) return null;
			return {
				raw: depCount,
				display: String(depCount),
				status: depCount > 10 ? "warning" : "neutral"
			};
		}
		case "deprecated": {
			const isDeprecated = !!data.metadata?.deprecated;
			return {
				raw: isDeprecated,
				display: isDeprecated ? t("compare.facets.values.deprecated") : t("compare.facets.values.not_deprecated"),
				status: isDeprecated ? "bad" : "good"
			};
		}
		case "totalDependencies": {
			if (!data.installSize) return null;
			const totalDepCount = data.installSize.dependencyCount;
			return {
				raw: totalDepCount,
				display: String(totalDepCount),
				status: totalDepCount > 50 ? "warning" : "neutral"
			};
		}
		default: return null;
	}
}
function isStale(date) {
	return ((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / (1e3 * 60 * 60 * 24 * 365) > 2;
}
var PackageSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PackageSelector",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({ max: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const packages = useModel(__props, "modelValue");
		const props = __props;
		const maxPackages = computed(() => props.max ?? 4);
		const inputValue = shallowRef("");
		const isInputFocused = shallowRef(false);
		const { data: searchData, status } = useNpmSearch(inputValue, { size: 15 });
		const isSearching = computed(() => status.value === "pending");
		const EASTER_EGG_TRIGGERS = new Set([
			"no dep",
			"none",
			"vanilla",
			"diy",
			"zero",
			"nothing",
			"0",
			"don't",
			"native",
			"use the platform"
		]);
		const showNoDependencyOption = computed(() => {
			if (packages.value.includes("__no_dependency__")) return false;
			const input = inputValue.value.toLowerCase().trim();
			if (!input) return false;
			return EASTER_EGG_TRIGGERS.has(input);
		});
		const filteredResults = computed(() => {
			if (!searchData.value?.objects) return [];
			return searchData.value.objects.map((o) => ({
				name: o.package.name,
				description: o.package.description
			})).filter((r) => !packages.value.includes(r.name));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}>`);
			if (packages.value.length > 0) {
				_push(`<div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(packages.value, (pkg) => {
					_push(`<div class="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-subtle border border-border rounded-md">`);
					if (pkg === unref("__no_dependency__")) _push(`<span class="text-sm text-accent italic flex items-center gap-1.5"><span class="i-carbon:clean w-3.5 h-3.5" aria-hidden="true"></span> ${ssrInterpolate(_ctx.$t("compare.no_dependency.label"))}</span>`);
					else _push(ssrRenderComponent(_component_NuxtLink, {
						to: `/package/${pkg}`,
						class: "font-mono text-sm text-fg hover:text-accent transition-colors"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(pkg)}`);
							else return [createTextVNode(toDisplayString(pkg), 1)];
						}),
						_: 2
					}, _parent));
					_push(`<button type="button" class="text-fg-subtle hover:text-fg transition-colors rounded"${ssrRenderAttr("aria-label", _ctx.$t("compare.selector.remove_package", { package: pkg === unref("__no_dependency__") ? _ctx.$t("compare.no_dependency.label") : pkg }))}><span class="i-carbon:close flex items-center w-3.5 h-3.5" aria-hidden="true"></span></button></div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (packages.value.length < unref(maxPackages)) {
				_push(`<div class="relative"><div class="relative group"><label for="package-search" class="sr-only">${ssrInterpolate(_ctx.$t("compare.selector.search_label"))}</label><span class="absolute inset-y-0 start-3 flex items-center text-fg-subtle pointer-events-none group-focus-within:text-accent" aria-hidden="true"><span class="i-carbon:search w-4 h-4"></span></span><input id="package-search"${ssrRenderAttr("value", unref(inputValue))} type="text"${ssrRenderAttr("placeholder", packages.value.length === 0 ? _ctx.$t("compare.selector.search_first") : _ctx.$t("compare.selector.search_add"))} class="w-full bg-bg-subtle border border-border rounded-lg ps-10 pe-4 py-2.5 font-mono text-sm text-fg placeholder:text-fg-subtle motion-reduce:transition-none duration-200 focus:border-accent focus-visible:outline-2 focus-visible:outline-accent/70" aria-autocomplete="list"></div>`);
				if (unref(isInputFocused) && (unref(filteredResults).length > 0 || unref(isSearching) || unref(showNoDependencyOption))) {
					_push(`<div class="absolute top-full inset-x-0 mt-1 bg-bg-elevated border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">`);
					if (unref(showNoDependencyOption)) _push(`<button type="button" class="w-full text-start px-4 py-2.5 hover:bg-bg-muted transition-colors focus-visible:outline-none focus-visible:bg-bg-muted border-b border-border/50"${ssrRenderAttr("aria-label", _ctx.$t("compare.no_dependency.add_column"))}><div class="text-sm text-accent italic flex items-center gap-2"><span class="i-carbon:clean w-4 h-4" aria-hidden="true"></span> ${ssrInterpolate(_ctx.$t("compare.no_dependency.typeahead_title"))}</div><div class="text-xs text-fg-muted truncate mt-0.5">${ssrInterpolate(_ctx.$t("compare.no_dependency.typeahead_description"))}</div></button>`);
					else _push(`<!---->`);
					if (unref(isSearching)) _push(`<div class="px-4 py-3 text-sm text-fg-muted">${ssrInterpolate(_ctx.$t("compare.selector.searching"))}</div>`);
					else _push(`<!---->`);
					_push(`<!--[-->`);
					ssrRenderList(unref(filteredResults), (result) => {
						_push(`<button type="button" class="w-full text-start px-4 py-2.5 hover:bg-bg-muted transition-colors focus-visible:outline-none focus-visible:bg-bg-muted"><div class="font-mono text-sm text-fg">${ssrInterpolate(result.name)}</div>`);
						if (result.description) _push(`<div class="text-xs text-fg-muted truncate mt-0.5">${ssrInterpolate(result.description)}</div>`);
						else _push(`<!---->`);
						_push(`</button>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<p class="text-xs text-fg-subtle">${ssrInterpolate(_ctx.$t("compare.selector.packages_selected", {
				count: packages.value.length,
				max: unref(maxPackages)
			}))} `);
			if (packages.value.length < 2) _push(`<span>${ssrInterpolate(_ctx.$t("compare.selector.add_hint"))}</span>`);
			else _push(`<!---->`);
			_push(`</p></div>`);
		};
	}
});
var _sfc_setup$7 = PackageSelector_vue_vue_type_script_setup_true_lang_default.setup;
PackageSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/PackageSelector.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var PackageSelector_default = Object.assign(PackageSelector_vue_vue_type_script_setup_true_lang_default, { __name: "ComparePackageSelector" });
var ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ReplacementSuggestion",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		replacement: {},
		variant: {},
		showAction: { type: Boolean }
	},
	emits: ["addNoDep"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const docUrl = computed(() => {
			if (props.replacement.type !== "documented" || !props.replacement.docPath) return null;
			return `https://github.com/es-tooling/module-replacements/blob/main/docs/modules/${props.replacement.docPath}.md`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["flex items-start gap-2 px-3 py-2 rounded-lg text-sm", __props.variant === "nodep" ? "bg-amber-500/10 border border-amber-600/30 text-amber-700 dark:text-amber-400" : "bg-blue-500/10 border border-blue-600/30 text-blue-700 dark:text-blue-400"] }, _attrs))}><span class="${ssrRenderClass([__props.variant === "nodep" ? "i-carbon:idea" : "i-carbon:information", "w-4 h-4 flex-shrink-0 mt-0.5"])}"></span><div class="min-w-0 flex-1"><p class="font-medium">${ssrInterpolate(__props.packageName)}: ${ssrInterpolate(_ctx.$t("package.replacement.title"))}</p><p class="text-xs mt-0.5 opacity-80">`);
			if (__props.replacement.type === "native") _push(`<!--[-->${ssrInterpolate(_ctx.$t("package.replacement.native", {
				replacement: __props.replacement.replacement,
				nodeVersion: __props.replacement.nodeVersion
			}))}<!--]-->`);
			else if (__props.replacement.type === "simple") _push(`<!--[-->${ssrInterpolate(_ctx.$t("package.replacement.simple", {
				replacement: __props.replacement.replacement,
				community: _ctx.$t("package.replacement.community")
			}))}<!--]-->`);
			else if (__props.replacement.type === "documented") _push(`<!--[-->${ssrInterpolate(_ctx.$t("package.replacement.documented", { community: _ctx.$t("package.replacement.community") }))}<!--]-->`);
			else _push(`<!---->`);
			_push(`</p></div>`);
			if (__props.variant === "nodep" && __props.showAction !== false) _push(`<button type="button" class="flex-shrink-0 px-2 py-1 text-xs font-medium bg-amber-500/20 hover:bg-amber-500/30 rounded transition-colors"${ssrRenderAttr("aria-label", _ctx.$t("compare.no_dependency.add_column"))}>${ssrInterpolate(_ctx.$t("package.replacement.consider_no_dep"))}</button>`);
			else if (unref(docUrl)) _push(`<a${ssrRenderAttr("href", unref(docUrl))} target="_blank" rel="noopener noreferrer" class="flex-shrink-0 px-2 py-1 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 rounded transition-colors inline-flex items-center gap-1">${ssrInterpolate(_ctx.$t("package.replacement.learn_more"))} <span class="i-carbon:launch w-3 h-3"></span></a>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$6 = ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup;
ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ReplacementSuggestion.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var ReplacementSuggestion_default = Object.assign(ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default, { __name: "CompareReplacementSuggestion" });
var _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
	const { mode = "replace", route = useRoute(), router = useRouter(), transform } = options;
	let transformGet = (value) => value;
	let transformSet = (value) => value;
	if (typeof transform === "function") transformGet = transform;
	else if (transform) {
		if (transform.get) transformGet = transform.get;
		if (transform.set) transformSet = transform.set;
	}
	if (!_queue.has(router)) _queue.set(router, /* @__PURE__ */ new Map());
	const _queriesQueue = _queue.get(router);
	let query = route.query[name];
	tryOnScopeDispose(() => {
		query = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return transformGet(query !== void 0 ? query : toValue(defaultValue));
			},
			set(v) {
				v = transformSet(v);
				if (query === v) return;
				query = v === toValue(defaultValue) ? void 0 : v;
				_queriesQueue.set(name, v === toValue(defaultValue) ? void 0 : v);
				trigger();
				nextTick(() => {
					if (_queriesQueue.size === 0) return;
					const newQueries = Object.fromEntries(_queriesQueue.entries());
					_queriesQueue.clear();
					const { params, query: query$1, hash } = route;
					router[toValue(mode)]({
						params,
						query: {
							...query$1,
							...newQueries
						},
						hash
					});
				});
			}
		};
	});
	watch(() => route.query[name], (v) => {
		if (query === transformGet(v)) return;
		query = v;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}
function useFacetSelection(queryParam = "facets") {
	const { t } = useI18n();
	function buildFacetInfo(facet) {
		return {
			id: facet,
			...FACET_INFO[facet],
			label: t(`compare.facets.items.${facet}.label`),
			description: t(`compare.facets.items.${facet}.description`)
		};
	}
	const facetsParam = useRouteQuery(queryParam, "", { mode: "replace" });
	const selectedFacetIds = computed({
		get() {
			if (!facetsParam.value) return DEFAULT_FACETS;
			const parsed = facetsParam.value.split(",").map((f) => f.trim()).filter((f) => ALL_FACETS.includes(f) && !FACET_INFO[f].comingSoon);
			return parsed.length > 0 ? parsed : DEFAULT_FACETS;
		},
		set(facets) {
			if (facets.length === 0 || arraysEqual(facets, DEFAULT_FACETS)) facetsParam.value = "";
			else facetsParam.value = facets.join(",");
		}
	});
	const selectedFacets = computed(() => selectedFacetIds.value.map(buildFacetInfo));
	function isFacetSelected(facet) {
		return selectedFacetIds.value.includes(facet);
	}
	function toggleFacet(facet) {
		const current = selectedFacetIds.value;
		if (current.includes(facet)) {
			if (current.length > 1) selectedFacetIds.value = current.filter((f) => f !== facet);
		} else selectedFacetIds.value = [...current, facet];
	}
	function getFacetsInCategory(category) {
		return ALL_FACETS.filter((f) => {
			const info = FACET_INFO[f];
			return info.category === category && !info.comingSoon;
		});
	}
	function selectCategory(category) {
		const categoryFacets = getFacetsInCategory(category);
		const current = selectedFacetIds.value;
		selectedFacetIds.value = [...new Set([...current, ...categoryFacets])];
	}
	function deselectCategory(category) {
		const categoryFacets = getFacetsInCategory(category);
		const remaining = selectedFacetIds.value.filter((f) => !categoryFacets.includes(f));
		if (remaining.length > 0) selectedFacetIds.value = remaining;
	}
	function selectAll() {
		selectedFacetIds.value = DEFAULT_FACETS;
	}
	function deselectAll() {
		selectedFacetIds.value = [DEFAULT_FACETS[0]];
	}
	const isAllSelected = computed(() => selectedFacetIds.value.length === DEFAULT_FACETS.length);
	const isNoneSelected = computed(() => selectedFacetIds.value.length === 1);
	function getCategoryLabel(category) {
		return t(`compare.facets.categories.${category}`);
	}
	return {
		selectedFacets,
		isFacetSelected,
		toggleFacet,
		selectCategory,
		deselectCategory,
		selectAll,
		deselectAll,
		isAllSelected,
		isNoneSelected,
		allFacets: ALL_FACETS,
		getCategoryLabel,
		facetsByCategory: computed(() => {
			const result = {};
			for (const category of CATEGORY_ORDER) result[category] = FACETS_BY_CATEGORY[category].map(buildFacetInfo);
			return result;
		}),
		categoryOrder: CATEGORY_ORDER
	};
}
function arraysEqual(a, b) {
	if (a.length !== b.length) return false;
	const sortedA = [...a].sort();
	const sortedB = [...b].sort();
	return sortedA.every((val, i) => val === sortedB[i]);
}
var FacetSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetSelector",
	__ssrInlineRender: true,
	setup(__props) {
		const { isFacetSelected, facetsByCategory, categoryOrder, getCategoryLabel } = useFacetSelection();
		function isCategoryAllSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => isFacetSelected(f.id));
		}
		function isCategoryNoneSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => !isFacetSelected(f.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "space-y-3",
				role: "group",
				"aria-label": _ctx.$t("compare.facets.group_label")
			}, _attrs))}><!--[-->`);
			ssrRenderList(unref(categoryOrder), (category) => {
				_push(`<div><div class="flex items-center gap-2 mb-2"><span class="text-[10px] text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref(getCategoryLabel)(category))}</span><button type="button" class="${ssrRenderClass([isCategoryAllSelected(category) ? "text-fg-muted" : "text-fg-muted/60 hover:text-fg-muted", "text-[10px] transition-colors focus-visible:outline-none focus-visible:underline focus-visible:underline-accent"])}"${ssrRenderAttr("aria-label", _ctx.$t("compare.facets.select_category", { category: unref(getCategoryLabel)(category) }))}${ssrIncludeBooleanAttr(isCategoryAllSelected(category)) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("compare.facets.all"))}</button><span class="text-[10px] text-fg-muted/40">/</span><button type="button" class="${ssrRenderClass([isCategoryNoneSelected(category) ? "text-fg-muted" : "text-fg-muted/60 hover:text-fg-muted", "text-[10px] transition-colors focus-visible:outline-none focus-visible:underline focus-visible:underline-accent"])}"${ssrRenderAttr("aria-label", _ctx.$t("compare.facets.deselect_category", { category: unref(getCategoryLabel)(category) }))}${ssrIncludeBooleanAttr(isCategoryNoneSelected(category)) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("compare.facets.none"))}</button></div><div class="flex items-center gap-1.5 flex-wrap" role="group"><!--[-->`);
				ssrRenderList(unref(facetsByCategory)[category], (facet) => {
					_push(`<button type="button"${ssrRenderAttr("title", facet.comingSoon ? _ctx.$t("compare.facets.coming_soon") : facet.description)}${ssrIncludeBooleanAttr(facet.comingSoon) ? " disabled" : ""}${ssrRenderAttr("aria-pressed", unref(isFacetSelected)(facet.id))}${ssrRenderAttr("aria-label", facet.label)} class="${ssrRenderClass([facet.comingSoon ? "text-fg-subtle/50 bg-bg-subtle border-border-subtle cursor-not-allowed" : unref(isFacetSelected)(facet.id) ? "text-fg-muted bg-bg-muted border-border" : "text-fg-subtle bg-bg-subtle border-border-subtle hover:text-fg-muted hover:border-border", "inline-flex items-center gap-1 px-1.5 py-0.5 font-mono text-xs rounded border transition-colors duration-200 focus-visible:outline-accent/70"])}">`);
					if (!facet.comingSoon) _push(`<span class="${ssrRenderClass([unref(isFacetSelected)(facet.id) ? "i-carbon:checkmark" : "i-carbon:add", "w-3 h-3"])}" aria-hidden="true"></span>`);
					else _push(`<!---->`);
					_push(` ${ssrInterpolate(facet.label)} `);
					if (facet.comingSoon) _push(`<span class="text-[9px]">(${ssrInterpolate(_ctx.$t("compare.facets.coming_soon"))})</span>`);
					else _push(`<!---->`);
					_push(`</button>`);
				});
				_push(`<!--]--></div></div>`);
			});
			_push(`<!--]--></div>`);
		};
	}
});
var _sfc_setup$5 = FacetSelector_vue_vue_type_script_setup_true_lang_default.setup;
FacetSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetSelector.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var FacetSelector_default = Object.assign(FacetSelector_vue_vue_type_script_setup_true_lang_default, { __name: "CompareFacetSelector" });
var ComparisonGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ComparisonGrid",
	__ssrInlineRender: true,
	props: {
		columns: {},
		showNoDependency: { type: Boolean }
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const totalColumns = computed(() => props.columns.length + (props.showNoDependency ? 1 : 0));
		function getReplacementTooltip(col) {
			if (!col.replacement) return "";
			return [$t("package.replacement.title"), $t("package.replacement.learn_more_above")].join(" ");
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_TooltipApp = App_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))} data-v-a1e9e69b><div class="${ssrRenderClass([[unref(totalColumns) === 4 ? "min-w-[800px]" : "min-w-[600px]", `columns-${unref(totalColumns)}`], "comparison-grid"])}" style="${ssrRenderStyle({ "--columns": unref(totalColumns) })}" data-v-a1e9e69b><div class="comparison-header" data-v-a1e9e69b><div class="comparison-label" data-v-a1e9e69b></div><!--[-->`);
			ssrRenderList(__props.columns, (col) => {
				_push(`<div class="comparison-cell comparison-cell-header" data-v-a1e9e69b><span class="inline-flex items-center gap-1.5 truncate" data-v-a1e9e69b>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/package/${col.header}`,
					class: "link-subtle font-mono text-sm font-medium text-fg truncate",
					title: col.header
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(col.header)}`);
						else return [createTextVNode(toDisplayString(col.header), 1)];
					}),
					_: 2
				}, _parent));
				if (col.replacement) _push(ssrRenderComponent(_component_TooltipApp, {
					text: getReplacementTooltip(col),
					position: "bottom"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-carbon:idea w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help" role="img"${ssrRenderAttr("aria-label", unref($t)("package.replacement.title"))} data-v-a1e9e69b${_scopeId}></span>`);
						else return [createVNode("span", {
							class: "i-carbon:idea w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help",
							role: "img",
							"aria-label": unref($t)("package.replacement.title")
						}, null, 8, ["aria-label"])];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`</span></div>`);
			});
			_push(`<!--]-->`);
			if (__props.showNoDependency) {
				_push(`<div class="comparison-cell comparison-cell-header comparison-cell-nodep" data-v-a1e9e69b><span class="inline-flex items-center gap-1.5 text-sm font-medium text-accent italic truncate" data-v-a1e9e69b>${ssrInterpolate(unref($t)("compare.no_dependency.label"))} `);
				_push(ssrRenderComponent(_component_TooltipApp, {
					interactive: "",
					position: "bottom"
				}, {
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<p class="text-sm font-medium text-fg mb-1" data-v-a1e9e69b${_scopeId}>${ssrInterpolate(unref($t)("compare.no_dependency.tooltip_title"))}</p><p class="text-xs text-fg-muted" data-v-a1e9e69b${_scopeId}>`);
							_push(ssrRenderComponent(_component_i18n_t, {
								keypath: "compare.no_dependency.tooltip_description",
								tag: "span"
							}, {
								link: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<a href="https://e18e.dev/docs/replacements/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline" data-v-a1e9e69b${_scopeId}>${ssrInterpolate(unref($t)("compare.no_dependency.e18e_community"))}</a>`);
									else return [createVNode("a", {
										href: "https://e18e.dev/docs/replacements/",
										target: "_blank",
										rel: "noopener noreferrer",
										class: "text-accent hover:underline"
									}, toDisplayString(unref($t)("compare.no_dependency.e18e_community")), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</p>`);
						} else return [createVNode("p", { class: "text-sm font-medium text-fg mb-1" }, toDisplayString(unref($t)("compare.no_dependency.tooltip_title")), 1), createVNode("p", { class: "text-xs text-fg-muted" }, [createVNode(_component_i18n_t, {
							keypath: "compare.no_dependency.tooltip_description",
							tag: "span"
						}, {
							link: withCtx(() => [createVNode("a", {
								href: "https://e18e.dev/docs/replacements/",
								target: "_blank",
								rel: "noopener noreferrer",
								class: "text-accent hover:underline"
							}, toDisplayString(unref($t)("compare.no_dependency.e18e_community")), 1)]),
							_: 1
						})])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-carbon:idea w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help" role="img"${ssrRenderAttr("aria-label", unref($t)("compare.no_dependency.tooltip_title"))} data-v-a1e9e69b${_scopeId}></span>`);
						else return [createVNode("span", {
							class: "i-carbon:idea w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help",
							role: "img",
							"aria-label": unref($t)("compare.no_dependency.tooltip_title")
						}, null, 8, ["aria-label"])];
					}),
					_: 1
				}, _parent));
				_push(`</span></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div>`);
		};
	}
});
var _sfc_setup$4 = ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup;
ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ComparisonGrid.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ComparisonGrid_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ComparisonGrid_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a1e9e69b"]]), { __name: "CompareComparisonGrid" });
var FacetRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetRow",
	__ssrInlineRender: true,
	props: {
		label: {},
		description: {},
		values: {},
		facetLoading: { type: Boolean },
		columnLoading: {},
		bar: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const isNumeric = computed(() => {
			return props.values.every((v) => v === null || v === void 0 || typeof v.raw === "number");
		});
		const showBar = computed(() => {
			return props.bar ?? isNumeric.value;
		});
		const maxValue = computed(() => {
			if (!isNumeric.value) return 0;
			return Math.max(...props.values.map((v) => typeof v?.raw === "number" ? v.raw : 0));
		});
		function getBarWidth(value) {
			if (!isNumeric.value || !maxValue.value || !value || typeof value.raw !== "number") return 0;
			return value.raw / maxValue.value * 100;
		}
		function getStatusClass(status, hasBar = false) {
			if (hasBar) switch (status) {
				case "muted": return "text-fg-subtle";
				default: return "text-fg";
			}
			switch (status) {
				case "good": return "bg-emerald-400/20 px-3 py-0.5 rounded-xl";
				case "info": return "bg-blue-400/20 px-3 py-0.5 rounded-xl";
				case "warning": return "bg-amber-400/20 px-3 py-0.5 rounded-xl";
				case "bad": return "bg-red-400/20 px-3 py-0.5 rounded-xl";
				case "muted": return "text-fg-subtle";
				default: return "text-fg";
			}
		}
		function getStatusBarClass(status) {
			switch (status) {
				case "good": return "bg-emerald-500/20";
				case "info": return "bg-blue-500/20";
				case "warning": return "bg-amber-500/20";
				case "bad": return "bg-red-500/20";
				default: return "bg-fg/5";
			}
		}
		function isCellLoading(index) {
			return props.facetLoading || (props.columnLoading?.[index] ?? false);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			const _component_DateTime = DateTime_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))}><div class="comparison-label flex items-center gap-1.5 px-4 py-3 border-b border-border"><span class="text-xs text-fg-muted uppercase tracking-wider">${ssrInterpolate(__props.label)}</span>`);
			if (__props.description) _push(ssrRenderComponent(_component_TooltipApp, {
				text: __props.description,
				position: "top"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-carbon:information w-3 h-3 text-fg-subtle cursor-help" aria-hidden="true"${_scopeId}></span>`);
					else return [createVNode("span", {
						class: "i-carbon:information w-3 h-3 text-fg-subtle cursor-help",
						"aria-hidden": "true"
					})];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div><!--[-->`);
			ssrRenderList(__props.values, (value, index) => {
				_push(`<div class="comparison-cell relative flex items-center justify-center px-4 py-3 border-b border-border">`);
				if (unref(showBar) && value && getBarWidth(value) > 0) _push(`<div class="${ssrRenderClass([getStatusBarClass(value.status), "absolute inset-y-1 inset-is-1 rounded-sm transition-all duration-300"])}" style="${ssrRenderStyle({ width: `calc(${getBarWidth(value)}% - 8px)` })}" aria-hidden="true"></div>`);
				else _push(`<!---->`);
				if (isCellLoading(index)) _push(`<span class="i-carbon:circle-dash w-4 h-4 text-fg-subtle motion-safe:animate-spin" aria-hidden="true"></span>`);
				else if (!value) _push(`<span class="text-fg-subtle text-sm">-</span>`);
				else {
					_push(`<!--[-->`);
					if (value.tooltip) _push(ssrRenderComponent(_component_TooltipApp, {
						text: value.tooltip,
						position: "top"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span class="${ssrRenderClass([getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0), "relative font-mono text-sm text-center tabular-nums cursor-help"])}"${ssrRenderAttr("data-status", value.status)}${_scopeId}>`);
								if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
									datetime: value.display,
									"date-style": "medium"
								}, null, _parent, _scopeId));
								else _push(`<!--[-->${ssrInterpolate(value.display)}<!--]-->`);
								_push(`</span>`);
							} else return [createVNode("span", {
								class: ["relative font-mono text-sm text-center tabular-nums cursor-help", getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0)],
								"data-status": value.status
							}, [value.type === "date" ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: value.display,
								"date-style": "medium"
							}, null, 8, ["datetime"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(value.display), 1)], 64))], 10, ["data-status"])];
						}),
						_: 2
					}, _parent));
					else {
						_push(`<span class="${ssrRenderClass([getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0), "relative font-mono text-sm text-center tabular-nums"])}"${ssrRenderAttr("data-status", value.status)}>`);
						if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
							datetime: value.display,
							"date-style": "medium"
						}, null, _parent));
						else _push(`<!--[-->${ssrInterpolate(value.display)}<!--]-->`);
						_push(`</span>`);
					}
					_push(`<!--]-->`);
				}
				_push(`</div>`);
			});
			_push(`<!--]--></div>`);
		};
	}
});
var _sfc_setup$3 = FacetRow_vue_vue_type_script_setup_true_lang_default.setup;
FacetRow_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetRow.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var FacetRow_default = Object.assign(FacetRow_vue_vue_type_script_setup_true_lang_default, { __name: "CompareFacetRow" });
var FacetCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetCard",
	__ssrInlineRender: true,
	props: {
		label: {},
		description: {},
		values: {},
		facetLoading: { type: Boolean },
		columnLoading: {},
		bar: { type: Boolean },
		headers: {}
	},
	setup(__props) {
		const props = __props;
		const isNumeric = computed(() => {
			return props.values.every((v) => v === null || v === void 0 || typeof v.raw === "number");
		});
		const showBar = computed(() => {
			return props.bar ?? isNumeric.value;
		});
		const maxValue = computed(() => {
			if (!isNumeric.value) return 0;
			return Math.max(...props.values.map((v) => typeof v?.raw === "number" ? v.raw : 0));
		});
		function getBarWidth(value) {
			if (!isNumeric.value || !maxValue.value || !value || typeof value.raw !== "number") return 0;
			return value.raw / maxValue.value * 100;
		}
		function getStatusClass(status) {
			switch (status) {
				case "good": return "text-emerald-400";
				case "info": return "text-blue-400";
				case "warning": return "text-amber-400";
				case "bad": return "text-red-400";
				default: return "text-fg";
			}
		}
		function isCellLoading(index) {
			return props.facetLoading || (props.columnLoading?.[index] ?? false);
		}
		function getShortName(header) {
			const atIndex = header.lastIndexOf("@");
			if (atIndex > 0) return header.substring(0, atIndex);
			return header;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			const _component_DateTime = DateTime_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-border rounded-lg overflow-hidden" }, _attrs))}><div class="flex items-center gap-1.5 px-3 py-2 bg-bg-subtle border-b border-border"><span class="text-xs text-fg-muted uppercase tracking-wider font-medium">${ssrInterpolate(__props.label)}</span>`);
			if (__props.description) _push(ssrRenderComponent(_component_TooltipApp, {
				text: __props.description,
				position: "top"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-carbon:information w-3 h-3 text-fg-subtle"${ssrRenderAttr("title", __props.description)} aria-hidden="true"${_scopeId}></span>`);
					else return [createVNode("span", {
						class: "i-carbon:information w-3 h-3 text-fg-subtle",
						title: __props.description,
						"aria-hidden": "true"
					}, null, 8, ["title"])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div><div class="divide-y divide-border"><!--[-->`);
			ssrRenderList(__props.values, (value, index) => {
				_push(`<div class="relative flex items-center justify-between gap-2 px-3 py-2">`);
				if (unref(showBar) && value && getBarWidth(value) > 0) _push(`<div class="absolute inset-y-0 inset-is-0 bg-fg/5 transition-all duration-300" style="${ssrRenderStyle({ width: `${getBarWidth(value)}%` })}" aria-hidden="true"></div>`);
				else _push(`<!---->`);
				_push(`<span class="relative font-mono text-xs text-fg-muted truncate flex-shrink min-w-0"${ssrRenderAttr("title", __props.headers[index])}>${ssrInterpolate(getShortName(__props.headers[index] ?? ""))}</span><span class="relative flex-shrink-0">`);
				if (isCellLoading(index)) _push(`<span class="i-carbon:circle-dash w-4 h-4 text-fg-subtle motion-safe:animate-spin" aria-hidden="true"></span>`);
				else if (!value) _push(`<span class="text-fg-subtle text-sm">-</span>`);
				else {
					_push(`<span class="${ssrRenderClass([getStatusClass(value.status), "font-mono text-sm tabular-nums"])}">`);
					if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
						datetime: value.display,
						"date-style": "medium"
					}, null, _parent));
					else _push(`<!--[-->${ssrInterpolate(value.display)}<!--]-->`);
					_push(`</span>`);
				}
				_push(`</span></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
var _sfc_setup$2 = FacetCard_vue_vue_type_script_setup_true_lang_default.setup;
FacetCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetCard.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var FacetCard_default = Object.assign(FacetCard_vue_vue_type_script_setup_true_lang_default, { __name: "CompareFacetCard" });
var LineChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LineChart",
	__ssrInlineRender: true,
	props: { packages: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "font-mono" }, _attrs))}>`);
			_push(ssrRenderComponent(DownloadAnalytics_default, {
				"package-names": __props.packages,
				"in-modal": false
			}, null, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$1 = LineChart_vue_vue_type_script_setup_true_lang_default.setup;
LineChart_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/LineChart.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var LineChart_default = Object.assign(LineChart_vue_vue_type_script_setup_true_lang_default, { __name: "CompareLineChart" });
var NO_DEP_REPLACEMENT_TYPES = ["native", "simple"];
var INFO_REPLACEMENT_TYPES = ["documented"];
function useCompareReplacements(packageNames) {
	const packages = computed(() => toValue(packageNames));
	const replacements = shallowRef(/* @__PURE__ */ new Map());
	const loading = shallowRef(false);
	const allSuggestions = computed(() => {
		const result = [];
		for (const pkg of packages.value) {
			const replacement = replacements.value.get(pkg);
			if (!replacement) continue;
			result.push({
				forPackage: pkg,
				replacement
			});
		}
		return result;
	});
	const noDepSuggestions = computed(() => allSuggestions.value.filter((s) => NO_DEP_REPLACEMENT_TYPES.includes(s.replacement.type)));
	const infoSuggestions = computed(() => allSuggestions.value.filter((s) => INFO_REPLACEMENT_TYPES.includes(s.replacement.type)));
	return {
		replacements: readonly(replacements),
		noDepSuggestions: readonly(noDepSuggestions),
		infoSuggestions: readonly(infoSuggestions),
		loading: readonly(loading)
	};
}
var compare_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "compare",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useRouter$1();
		const packagesParam = useRouteQuery("packages", "", { mode: "replace" });
		const packages = computed({
			get() {
				if (!packagesParam.value) return [];
				return packagesParam.value.split(",").map((p) => p.trim()).filter((p) => p.length > 0).slice(0, 4);
			},
			set(value) {
				packagesParam.value = value.length > 0 ? value.join(",") : "";
			}
		});
		const { selectedFacets, isAllSelected, isNoneSelected } = useFacetSelection();
		const { packagesData, status, getFacetValues, isFacetLoading, isColumnLoading } = usePackageComparison(packages);
		const { noDepSuggestions, infoSuggestions, replacements } = useCompareReplacements(packages);
		const showNoDependency = computed(() => packages.value.includes(NO_DEPENDENCY_ID));
		const gridColumns = computed(() => packages.value.map((pkg, i) => ({
			pkg,
			originalIndex: i
		})).filter(({ pkg }) => pkg !== NO_DEPENDENCY_ID).map(({ pkg, originalIndex }) => {
			const data = packagesData.value?.[originalIndex];
			return {
				header: data ? data.package.version ? `${data.package.name}@${data.package.version}` : data.package.name : pkg,
				replacement: replacements.value.get(pkg) ?? null
			};
		}));
		const canAddNoDep = computed(() => packages.value.length < 4 && !packages.value.includes("__no_dependency__"));
		function addNoDep() {
			if (packages.value.length >= 4) return;
			if (packages.value.includes("__no_dependency__")) return;
			packages.value = [...packages.value, NO_DEPENDENCY_ID];
		}
		const columnLoading = computed(() => packages.value.map((_, i) => isColumnLoading(i)));
		const canCompare = computed(() => packages.value.length >= 2);
		const gridHeaders = computed(() => gridColumns.value.map((col) => col.header));
		useSeoMeta$1({
			title: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			ogTitle: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			twitterTitle: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			description: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty"),
			ogDescription: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty"),
			twitterDescription: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty")
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ComparePackageSelector = PackageSelector_default;
			const _component_CompareReplacementSuggestion = ReplacementSuggestion_default;
			const _component_CompareFacetSelector = FacetSelector_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_CompareComparisonGrid = ComparisonGrid_default;
			const _component_CompareFacetRow = FacetRow_default;
			const _component_CompareFacetCard = FacetCard_default;
			const _component_CompareLineChart = LineChart_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 w-full" }, _attrs))}><div class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("compare.packages.title"))}</h1><button type="button" class="inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="hidden sm:inline">${ssrInterpolate(unref($t)("nav.back"))}</span></button></div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("compare.packages.tagline"))}</p></header><section class="mb-8" aria-labelledby="packages-heading"><h2 id="packages-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(unref($t)("compare.packages.section_packages"))}</h2>`);
			_push(ssrRenderComponent(_component_ComparePackageSelector, {
				modelValue: unref(packages),
				"onUpdate:modelValue": ($event) => isRef(packages) ? packages.value = $event : null,
				max: 4
			}, null, _parent));
			if (unref(noDepSuggestions).length > 0) {
				_push(`<div class="mt-3 space-y-2"><!--[-->`);
				ssrRenderList(unref(noDepSuggestions), (suggestion) => {
					_push(ssrRenderComponent(_component_CompareReplacementSuggestion, {
						key: suggestion.forPackage,
						"package-name": suggestion.forPackage,
						replacement: suggestion.replacement,
						variant: "nodep",
						"show-action": unref(canAddNoDep),
						onAddNoDep: addNoDep
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (unref(infoSuggestions).length > 0) {
				_push(`<div class="mt-3 space-y-2"><!--[-->`);
				ssrRenderList(unref(infoSuggestions), (suggestion) => {
					_push(ssrRenderComponent(_component_CompareReplacementSuggestion, {
						key: suggestion.forPackage,
						"package-name": suggestion.forPackage,
						replacement: suggestion.replacement,
						variant: "info"
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</section><section class="mb-8" aria-labelledby="facets-heading"><div class="flex items-center gap-2 mb-3"><h2 id="facets-heading" class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("compare.packages.section_facets"))}</h2><button type="button" class="${ssrRenderClass([unref(isAllSelected) ? "text-fg-muted" : "text-fg-muted/60 hover:text-fg-muted", "text-[10px] transition-colors focus-visible:outline-none focus-visible:underline focus-visible:underline-accent"])}"${ssrIncludeBooleanAttr(unref(isAllSelected)) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref($t)("compare.facets.select_all"))}>${ssrInterpolate(unref($t)("compare.facets.all"))}</button><span class="text-[10px] text-fg-muted/40" aria-hidden="true">/</span><button type="button" class="${ssrRenderClass([unref(isNoneSelected) ? "text-fg-muted" : "text-fg-muted/60 hover:text-fg-muted", "text-[10px] transition-colors focus-visible:outline-none focus-visible:underline focus-visible:underline-accent"])}"${ssrIncludeBooleanAttr(unref(isNoneSelected)) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref($t)("compare.facets.deselect_all"))}>${ssrInterpolate(unref($t)("compare.facets.none"))}</button></div>`);
			_push(ssrRenderComponent(_component_CompareFacetSelector, null, null, _parent));
			_push(`</section>`);
			if (unref(canCompare)) {
				_push(`<section class="mt-10" aria-labelledby="comparison-heading"><h2 id="comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("compare.packages.section_comparison"))}</h2>`);
				if (unref(status) === "pending" && (!unref(packagesData) || unref(packagesData).every((p) => p === null))) {
					_push(`<div class="flex items-center justify-center py-12">`);
					_push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("compare.packages.loading") }, null, _parent));
					_push(`</div>`);
				} else if (unref(packagesData) && unref(packagesData).some((p) => p !== null)) {
					_push(`<div><div class="hidden md:block overflow-x-auto">`);
					_push(ssrRenderComponent(_component_CompareComparisonGrid, {
						columns: unref(gridColumns),
						"show-no-dependency": unref(showNoDependency)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<!--[-->`);
								ssrRenderList(unref(selectedFacets), (facet) => {
									_push(ssrRenderComponent(_component_CompareFacetRow, {
										key: facet.id,
										label: facet.label,
										description: facet.description,
										values: unref(getFacetValues)(facet.id),
										"facet-loading": unref(isFacetLoading)(facet.id),
										"column-loading": unref(columnLoading),
										bar: facet.id !== "lastUpdated",
										headers: unref(gridHeaders)
									}, null, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							} else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(selectedFacets), (facet) => {
								return openBlock(), createBlock(_component_CompareFacetRow, {
									key: facet.id,
									label: facet.label,
									description: facet.description,
									values: unref(getFacetValues)(facet.id),
									"facet-loading": unref(isFacetLoading)(facet.id),
									"column-loading": unref(columnLoading),
									bar: facet.id !== "lastUpdated",
									headers: unref(gridHeaders)
								}, null, 8, [
									"label",
									"description",
									"values",
									"facet-loading",
									"column-loading",
									"bar",
									"headers"
								]);
							}), 128))];
						}),
						_: 1
					}, _parent));
					_push(`</div><div class="md:hidden space-y-3"><!--[-->`);
					ssrRenderList(unref(selectedFacets), (facet) => {
						_push(ssrRenderComponent(_component_CompareFacetCard, {
							key: facet.id,
							label: facet.label,
							description: facet.description,
							values: unref(getFacetValues)(facet.id),
							"facet-loading": unref(isFacetLoading)(facet.id),
							"column-loading": unref(columnLoading),
							bar: facet.id !== "lastUpdated",
							headers: unref(gridHeaders)
						}, null, _parent));
					});
					_push(`<!--]--></div><h2 id="comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-4 mt-10">${ssrInterpolate(unref($t)("package.downloads.title"))}</h2>`);
					_push(ssrRenderComponent(_component_CompareLineChart, { packages: unref(packages).filter((p) => p !== unref(NO_DEPENDENCY_ID)) }, null, _parent));
					_push(`</div>`);
				} else _push(`<div class="text-center py-12" role="alert"><p class="text-fg-muted">${ssrInterpolate(unref($t)("compare.packages.error"))}</p></div>`);
				_push(`</section>`);
			} else _push(`<section class="text-center px-1.5 py-16 border border-dashed border-border rounded-lg"><div class="i-carbon:compare w-12 h-12 text-fg-subtle mx-auto mb-4" aria-hidden="true"></div><h2 class="font-mono text-lg text-fg-muted mb-2">${ssrInterpolate(unref($t)("compare.packages.empty_title"))}</h2><p class="text-sm text-fg-subtle max-w-md mx-auto">${ssrInterpolate(unref($t)("compare.packages.empty_description"))}</p></section>`);
			_push(`</div></main>`);
		};
	}
});
var _sfc_setup = compare_vue_vue_type_script_setup_true_lang_default.setup;
compare_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compare.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var compare_default = compare_vue_vue_type_script_setup_true_lang_default;

export { compare_default as default };
//# sourceMappingURL=compare-CuANarsG.mjs.map

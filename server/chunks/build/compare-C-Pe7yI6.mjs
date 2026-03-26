import { u as useI18n, P as useClipboard, a as useSeoMeta$1, m as Base_default$1, c as useNuxtApp, _ as _plugin_vue_export_helper_default, Q as useSearchProvider, C as useKeyboardShortcuts, L as onClickOutside, B as Base_default, w as packageRoute, t as Base_default$2, R as DateTime_default, S as useColorMode, T as useElementSize, o as client_only_default } from './server-placeholder-C9fYItBT.mjs';
import { B as BackButton_default } from './BackButton-Dnk12j1Z.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { S as Static_default } from './Static-k7Eg8Ng9.mjs';
import { u as useCssVariables, i as insertLineBreaks, a as applyEllipsis, c as createChartPatternSlotMarkup, b as copyAltTextForCompareFacetBarChart, l as loadFile, T as TrendsChart_default, s as sanitise } from './TrendsChart-jAJHm3WC.mjs';
import { u as useNumberFormatter, a as useCompactNumberFormatter, b as useBytesFormatter } from './useNumberFormatter-6MIdB6Qd.mjs';
import { L as LoadingSpinner_default } from './LoadingSpinner-Ch8PmXtt.mjs';
import { u as useSearch } from './useSearch-BjYmWonO.mjs';
import { u as useRouteQuery } from './dist-vCkMLnH7.mjs';
import { C as CopyToClipboardButton_default } from './CopyToClipboardButton-TTydHqo-.mjs';
import { i as isListedFramework, g as getFrameworkColor } from './frameworks-hCp8-s9f.mjs';
import { S as SkeletonInline_default } from './SkeletonInline-BPNTVz6t.mjs';
import { defineComponent, computed, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, toValue, shallowRef, readonly, useModel, useTemplateRef, watch, createCommentVNode, mergeModels, resolveComponent, useSSRContext } from 'vue';
import { debounce } from 'perfect-debounce';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { b0 as DEFAULT_FACETS, b1 as ALL_FACETS, b2 as FACET_INFO, b3 as CATEGORY_ORDER, b4 as FACETS_BY_CATEGORY, b5 as stripHtmlTags, a$ as decodeHtmlEntities } from '../nitro/nitro.mjs';
import 'devalue';
import './useCanGoBack-CvNAow9_.mjs';
import '@floating-ui/vue';
import './Field-BPqWwnWu.mjs';
import 'fast-npm-meta';
import 'semver';
import 'algoliasearch/lite';
import './asyncData-Dr04OizO.mjs';
import 'validate-npm-package-name';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import '@jsr/deno__doc';
import 'valibot';
import 'node:crypto';
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

//#region app/composables/usePackageComparison.ts
/** Special identifier for the "What Would James Do?" comparison column */
var NO_DEPENDENCY_ID = "__no_dependency__";
/**
* Special display values for the "no dependency" column.
* These are explicit markers that get special rendering treatment.
*/
var NoDependencyDisplay = {
	DASH: "__display_dash__",
	UP_TO_YOU: "__display_up_to_you__"
};
/**
* Composable for fetching and comparing multiple packages.
*
*/
function usePackageComparison(packageNames) {
	const { t } = useI18n();
	const { $npmRegistry } = useNuxtApp();
	const numberFormatter = useNumberFormatter();
	const compactNumberFormatter = useCompactNumberFormatter();
	const bytesFormatter = useBytesFormatter();
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
			return computeFacetValue(facet, pkg, numberFormatter.value.format, compactNumberFormatter.value.format, bytesFormatter.format, t);
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
/**
* Converts a special display marker to its FacetValue representation.
*/
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
function computeFacetValue(facet, data, formatNumber, formatCompactNumber, formatBytes, t) {
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
		case "totalLikes":
			if (data.totalLikes === void 0) return null;
			return {
				raw: data.totalLikes,
				display: formatCompactNumber(data.totalLikes),
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
				display: formatNumber(depCount),
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
				display: formatNumber(totalDepCount),
				status: totalDepCount > 50 ? "warning" : "neutral"
			};
		}
		default: return null;
	}
}
function isStale(date) {
	return ((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / (1e3 * 60 * 60 * 24 * 365) > 2;
}
//#endregion
//#region app/components/Compare/PackageSelector.vue?vue&type=script&setup=true&lang.ts
var PAGE_JUMP = 5;
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
		const highlightedIndex = shallowRef(-1);
		const listRef = useTemplateRef("listRef");
		const { searchProvider } = useSearchProvider();
		const { data: searchData, status } = useSearch(inputValue, searchProvider, { size: 15 });
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
		const navigableItems = computed(() => {
			const items = [];
			if (showNoDependencyOption.value) items.push({
				type: "no-dependency",
				name: NO_DEPENDENCY_ID
			});
			for (const r of filteredResults.value) items.push({
				type: "package",
				name: r.name
			});
			return items;
		});
		const resultIndexOffset = computed(() => showNoDependencyOption.value ? 1 : 0);
		const numberFormatter = useNumberFormatter();
		const keyboardShortcuts = useKeyboardShortcuts();
		function addPackage(name) {
			if (packages.value.length >= maxPackages.value) return;
			if (packages.value.includes(name)) return;
			if (name === "__no_dependency__") packages.value = [...packages.value, name];
			else if (packages.value.includes("__no_dependency__")) packages.value = [
				...packages.value.filter((p) => p !== NO_DEPENDENCY_ID),
				name,
				NO_DEPENDENCY_ID
			];
			else packages.value = [...packages.value, name];
			inputValue.value = "";
			highlightedIndex.value = -1;
		}
		function removePackage(name) {
			packages.value = packages.value.filter((p) => p !== name);
		}
		function handleKeydown(e) {
			if (!keyboardShortcuts.value) return;
			const items = navigableItems.value;
			const count = items.length;
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault();
					if (count === 0) return;
					if (highlightedIndex.value < count - 1) highlightedIndex.value++;
					else highlightedIndex.value = 0;
					break;
				case "ArrowUp":
					e.preventDefault();
					if (count === 0) return;
					if (highlightedIndex.value > 0) highlightedIndex.value--;
					else highlightedIndex.value = count - 1;
					break;
				case "PageDown":
					e.preventDefault();
					if (count === 0) return;
					if (highlightedIndex.value === -1) highlightedIndex.value = Math.min(PAGE_JUMP - 1, count - 1);
					else highlightedIndex.value = Math.min(highlightedIndex.value + PAGE_JUMP, count - 1);
					break;
				case "PageUp":
					e.preventDefault();
					if (count === 0) return;
					highlightedIndex.value = Math.max(highlightedIndex.value - PAGE_JUMP, 0);
					break;
				case "Enter": {
					const inputValueTrim = inputValue.value.trim();
					if (!inputValueTrim) return;
					e.preventDefault();
					if (highlightedIndex.value >= 0 && highlightedIndex.value < count) {
						addPackage(items[highlightedIndex.value].name);
						return;
					}
					if (showNoDependencyOption.value) addPackage(NO_DEPENDENCY_ID);
					else if (filteredResults.value.find((r) => r.name === inputValueTrim)) addPackage(inputValueTrim);
					break;
				}
				case "Escape":
					inputValue.value = "";
					highlightedIndex.value = -1;
					break;
			}
		}
		watch(inputValue, () => {
			highlightedIndex.value = -1;
		});
		watch(highlightedIndex, (index) => {
			if (index >= 0 && listRef.value) listRef.value.querySelectorAll("[data-navigable]")[index]?.scrollIntoView({ block: "nearest" });
		});
		onClickOutside(useTemplateRef("containerRef"), () => {
			isInputFocused.value = false;
			highlightedIndex.value = -1;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TagStatic = Static_default;
			const _component_LinkBase = Base_default;
			const _component_ButtonBase = Base_default$1;
			const _component_InputBase = Base_default$2;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}>`);
			if (packages.value.length > 0) {
				_push(`<div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(packages.value, (pkg) => {
					_push(ssrRenderComponent(_component_TagStatic, { key: pkg }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								if (pkg === unref("__no_dependency__")) _push(`<span class="text-sm text-accent italic flex items-center gap-1.5"${_scopeId}><span class="i-lucide:leaf w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("compare.no_dependency.label"))}</span>`);
								else _push(ssrRenderComponent(_component_LinkBase, {
									to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(pkg),
									class: "text-sm"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(pkg)}`);
										else return [createTextVNode(toDisplayString(pkg), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_ButtonBase, {
									size: "sm",
									"aria-label": _ctx.$t("compare.selector.remove_package", { package: pkg === unref("__no_dependency__") ? _ctx.$t("compare.no_dependency.label") : pkg }),
									onClick: ($event) => removePackage(pkg),
									classicon: "i-lucide:x"
								}, null, _parent, _scopeId));
							} else return [pkg === unref("__no_dependency__") ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-sm text-accent italic flex items-center gap-1.5"
							}, [createVNode("span", {
								class: "i-lucide:leaf w-3.5 h-3.5",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(_ctx.$t("compare.no_dependency.label")), 1)])) : (openBlock(), createBlock(_component_LinkBase, {
								key: 1,
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(pkg),
								class: "text-sm"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(pkg), 1)]),
								_: 2
							}, 1032, ["to"])), createVNode(_component_ButtonBase, {
								size: "sm",
								"aria-label": _ctx.$t("compare.selector.remove_package", { package: pkg === unref("__no_dependency__") ? _ctx.$t("compare.no_dependency.label") : pkg }),
								onClick: ($event) => removePackage(pkg),
								classicon: "i-lucide:x"
							}, null, 8, ["aria-label", "onClick"])];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (packages.value.length < unref(maxPackages)) {
				_push(`<div class="relative"><div class="relative group flex items-center"><label for="package-search" class="sr-only">${ssrInterpolate(_ctx.$t("compare.selector.search_label"))}</label><span class="absolute inset-is-3 text-fg-subtle font-mono text-md pointer-events-none transition-colors duration-200 motion-reduce:transition-none [.group:hover:not(:focus-within)_&amp;]:text-fg/80 group-focus-within:text-accent z-1"> / </span>`);
				_push(ssrRenderComponent(_component_InputBase, {
					id: "package-search",
					modelValue: unref(inputValue),
					"onUpdate:modelValue": ($event) => isRef(inputValue) ? inputValue.value = $event : null,
					type: "text",
					placeholder: packages.value.length === 0 ? _ctx.$t("compare.selector.search_first") : _ctx.$t("compare.selector.search_add"),
					"no-correct": "",
					class: "w-full min-w-25 ps-7",
					"aria-autocomplete": "list",
					ref: "inputRef",
					onFocus: ($event) => isInputFocused.value = true,
					onKeydown: handleKeydown
				}, null, _parent));
				_push(`</div>`);
				if (unref(isInputFocused) && (unref(navigableItems).length > 0 || unref(isSearching))) {
					_push(`<div class="absolute top-full inset-x-0 mt-1 px-0.5 bg-bg-elevated border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">`);
					if (unref(showNoDependencyOption)) _push(ssrRenderComponent(_component_ButtonBase, {
						"data-navigable": "",
						class: ["block w-full text-start !border-transparent", unref(highlightedIndex) === 0 ? "!bg-accent/15" : ""],
						"aria-label": _ctx.$t("compare.no_dependency.add_column"),
						onMouseenter: ($event) => highlightedIndex.value = 0,
						onClick: ($event) => addPackage(unref(NO_DEPENDENCY_ID))
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="text-sm text-accent italic flex items-center gap-2"${_scopeId}><span class="i-lucide:leaf w-4 h-4" aria-hidden="true"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("compare.no_dependency.typeahead_title"))}</span><span class="text-xs text-fg-muted truncate mt-0.5"${_scopeId}>${ssrInterpolate(_ctx.$t("compare.no_dependency.typeahead_description"))}</span>`);
							else return [createVNode("span", { class: "text-sm text-accent italic flex items-center gap-2" }, [createVNode("span", {
								class: "i-lucide:leaf w-4 h-4",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(_ctx.$t("compare.no_dependency.typeahead_title")), 1)]), createVNode("span", { class: "text-xs text-fg-muted truncate mt-0.5" }, toDisplayString(_ctx.$t("compare.no_dependency.typeahead_description")), 1)];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					if (unref(isSearching) && unref(navigableItems).length === 0) _push(`<div class="px-4 py-3 text-sm text-fg-muted">${ssrInterpolate(_ctx.$t("compare.selector.searching"))}</div>`);
					else _push(`<!---->`);
					_push(`<!--[-->`);
					ssrRenderList(unref(filteredResults), (result, index) => {
						_push(ssrRenderComponent(_component_ButtonBase, {
							key: result.name,
							"data-navigable": "",
							class: ["block w-full text-start my-0.5 !border-transparent", unref(highlightedIndex) === index + unref(resultIndexOffset) ? "!bg-accent/15" : ""],
							onMouseenter: ($event) => highlightedIndex.value = index + unref(resultIndexOffset),
							onClick: ($event) => addPackage(result.name)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="font-mono text-sm text-fg block"${_scopeId}>${ssrInterpolate(result.name)}</span>`);
									if (result.description) _push(`<span class="text-xs text-fg-muted truncate mt-0.5 w-full block"${_scopeId}>${ssrInterpolate(("stripHtmlTags" in _ctx ? _ctx.stripHtmlTags : unref(stripHtmlTags))(("decodeHtmlEntities" in _ctx ? _ctx.decodeHtmlEntities : unref(decodeHtmlEntities))(result.description)))}</span>`);
									else _push(`<!---->`);
								} else return [createVNode("span", { class: "font-mono text-sm text-fg block" }, toDisplayString(result.name), 1), result.description ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-xs text-fg-muted truncate mt-0.5 w-full block"
								}, toDisplayString(("stripHtmlTags" in _ctx ? _ctx.stripHtmlTags : unref(stripHtmlTags))(("decodeHtmlEntities" in _ctx ? _ctx.decodeHtmlEntities : unref(decodeHtmlEntities))(result.description))), 1)) : createCommentVNode("", true)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<p class="text-xs text-fg-subtle">${ssrInterpolate(_ctx.$t("compare.selector.packages_selected", {
				count: unref(numberFormatter).format(packages.value.length),
				max: unref(numberFormatter).format(unref(maxPackages))
			}))} `);
			if (packages.value.length < 2) _push(`<span>${ssrInterpolate(_ctx.$t("compare.selector.add_hint"))}</span>`);
			else _push(`<!---->`);
			_push(`</p></div>`);
		};
	}
});
//#endregion
//#region app/components/Compare/PackageSelector.vue
var _sfc_setup$8 = PackageSelector_vue_vue_type_script_setup_true_lang_default.setup;
PackageSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/PackageSelector.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var PackageSelector_default = Object.assign(PackageSelector_vue_vue_type_script_setup_true_lang_default, { __name: "ComparePackageSelector" });
//#endregion
//#region app/components/Compare/ReplacementSuggestion.vue?vue&type=script&setup=true&lang.ts
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
		const emit = __emit;
		const docUrl = computed(() => {
			if (props.replacement.type !== "documented" || !props.replacement.docPath) return null;
			return `https://e18e.dev/docs/replacements/${props.replacement.docPath}.html`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			const _component_LinkBase = Base_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["flex items-start gap-2 px-3 py-2 rounded-lg text-sm", __props.variant === "nodep" ? "bg-amber-500/10 border border-amber-600/30 text-amber-800 dark:text-amber-400" : "bg-blue-500/10 border border-blue-600/30 text-blue-700 dark:text-blue-400"] }, _attrs))}><span class="${ssrRenderClass([__props.variant === "nodep" ? "i-lucide:lightbulb" : "i-lucide:info", "w-4 h-4 flex-shrink-0 mt-0.5"])}"></span><div class="min-w-0 flex-1"><p class="font-medium">${ssrInterpolate(__props.packageName)}: ${ssrInterpolate(_ctx.$t("package.replacement.title"))}</p><p class="text-xs mt-0.5 opacity-80">`);
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
			if (__props.variant === "nodep" && __props.showAction !== false) _push(ssrRenderComponent(_component_ButtonBase, {
				size: "sm",
				"aria-label": _ctx.$t("compare.no_dependency.add_column"),
				onClick: ($event) => emit("addNoDep")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("package.replacement.consider_no_dep"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("package.replacement.consider_no_dep")), 1)];
				}),
				_: 1
			}, _parent));
			else if (unref(docUrl)) _push(ssrRenderComponent(_component_LinkBase, {
				to: unref(docUrl),
				variant: "button-secondary",
				size: "sm"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(_ctx.$t("package.replacement.learn_more"))}`);
					else return [createTextVNode(toDisplayString(_ctx.$t("package.replacement.learn_more")), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Compare/ReplacementSuggestion.vue
var _sfc_setup$7 = ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup;
ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ReplacementSuggestion.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var ReplacementSuggestion_default = Object.assign(ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default, { __name: "CompareReplacementSuggestion" });
//#endregion
//#region app/composables/useFacetSelection.ts
function getFacetsInCategory(category) {
	return ALL_FACETS.filter((f) => {
		const info = FACET_INFO[f];
		return info.category === category && !info.comingSoon;
	});
}
/**
* Composable for managing comparison facet selection with URL sync.
*
* @param queryParam - The URL query parameter name to use (default: 'facets')
*/
function useFacetSelection(queryParam = "facets") {
	const { t } = useI18n();
	const facetLabels = computed(() => ({
		downloads: {
			label: t(`compare.facets.items.downloads.label`),
			description: t(`compare.facets.items.downloads.description`),
			chartable: true
		},
		totalLikes: {
			label: t(`compare.facets.items.totalLikes.label`),
			description: t(`compare.facets.items.totalLikes.description`),
			chartable: true
		},
		packageSize: {
			label: t(`compare.facets.items.packageSize.label`),
			description: t(`compare.facets.items.packageSize.description`),
			chartable: true
		},
		installSize: {
			label: t(`compare.facets.items.installSize.label`),
			description: t(`compare.facets.items.installSize.description`),
			chartable: true
		},
		moduleFormat: {
			label: t(`compare.facets.items.moduleFormat.label`),
			description: t(`compare.facets.items.moduleFormat.description`),
			chartable: false
		},
		types: {
			label: t(`compare.facets.items.types.label`),
			description: t(`compare.facets.items.types.description`),
			chartable: false
		},
		engines: {
			label: t(`compare.facets.items.engines.label`),
			description: t(`compare.facets.items.engines.description`),
			chartable: false
		},
		vulnerabilities: {
			label: t(`compare.facets.items.vulnerabilities.label`),
			description: t(`compare.facets.items.vulnerabilities.description`),
			chartable: false
		},
		lastUpdated: {
			label: t(`compare.facets.items.lastUpdated.label`),
			description: t(`compare.facets.items.lastUpdated.description`),
			chartable: false
		},
		license: {
			label: t(`compare.facets.items.license.label`),
			description: t(`compare.facets.items.license.description`),
			chartable: false
		},
		dependencies: {
			label: t(`compare.facets.items.dependencies.label`),
			description: t(`compare.facets.items.dependencies.description`),
			chartable: true
		},
		totalDependencies: {
			label: t(`compare.facets.items.totalDependencies.label`),
			description: t(`compare.facets.items.totalDependencies.description`),
			chartable: true
		},
		deprecated: {
			label: t(`compare.facets.items.deprecated.label`),
			description: t(`compare.facets.items.deprecated.description`),
			chartable: false
		}
	}));
	function buildFacetInfo(facet) {
		return {
			id: facet,
			...FACET_INFO[facet],
			label: facetLabels.value[facet].label,
			description: facetLabels.value[facet].description,
			chartable: facetLabels.value[facet].chartable
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
	const facetCategories = {
		performance: t(`compare.facets.categories.performance`),
		health: t(`compare.facets.categories.health`),
		compatibility: t(`compare.facets.categories.compatibility`),
		security: t(`compare.facets.categories.security`)
	};
	function getCategoryLabel(category) {
		return facetCategories[category];
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
//#endregion
//#region app/components/Compare/FacetSelector.vue?vue&type=script&setup=true&lang.ts
var FacetSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetSelector",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { isFacetSelected, toggleFacet, selectCategory, deselectCategory, facetsByCategory, categoryOrder, getCategoryLabel } = useFacetSelection();
		function isCategoryAllSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => isFacetSelected(f.id));
		}
		function isCategoryNoneSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => !isFacetSelected(f.id));
		}
		const liveRegionText = ref("");
		const clearLiveRegion = debounce(() => {
			liveRegionText.value = "";
		}, 250);
		const updateLiveRegion = debounce((message) => {
			liveRegionText.value = message;
			clearLiveRegion();
		}, 250);
		function selectAllFacet(category) {
			if (!isCategoryAllSelected(category)) {
				updateLiveRegion($t("compare.facets.selected_all_category_facets", { category }));
				selectCategory(category);
			}
		}
		function deselectAllFacet(category) {
			if (!isCategoryNoneSelected(category)) {
				updateLiveRegion($t("compare.facets.deselected_all_category_facets", { category }));
				deselectCategory(category);
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			_push(`<!--[--><div role="status" aria-live="polite" class="sr-only">${ssrInterpolate(unref(liveRegionText))}</div><div class="space-y-3"><!--[-->`);
			ssrRenderList(unref(categoryOrder), (category) => {
				_push(`<div><div class="flex items-center gap-2 mb-2"><span${ssrRenderAttr("id", `facet-category-label-${category}`)} class="text-3xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref(getCategoryLabel)(category))}</span>`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "sm",
					"data-facet-category-action": "all",
					"data-facet-category": category,
					"aria-label": unref($t)("compare.facets.select_all_category_facets", { category: unref(getCategoryLabel)(category) }),
					"aria-disabled": isCategoryAllSelected(category),
					class: "aria-disabled:opacity-40 aria-disabled:border-transparent",
					onClick: ($event) => selectAllFacet(category)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("compare.facets.all"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("compare.facets.all")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`<span class="text-2xs text-fg-muted/40" aria-hidden="true">/</span>`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "sm",
					"data-facet-category-action": "none",
					"data-facet-category": category,
					"aria-label": unref($t)("compare.facets.deselect_all_category_facets", { category: unref(getCategoryLabel)(category) }),
					"aria-disabled": isCategoryNoneSelected(category),
					class: "aria-disabled:opacity-40 aria-disabled:border-transparent",
					onClick: ($event) => deselectAllFacet(category)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("compare.facets.none"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("compare.facets.none")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</div><div class="flex items-center gap-1.5 flex-wrap" role="group"${ssrRenderAttr("aria-labelledby", `facet-category-label-${category}`)} data-facet-category-facets><!--[-->`);
				ssrRenderList(unref(facetsByCategory)[category], (facet) => {
					_push(ssrRenderComponent(_component_ButtonBase, {
						key: facet.id,
						size: "sm",
						role: "checkbox",
						title: facet.comingSoon ? unref($t)("compare.facets.coming_soon") : facet.description,
						disabled: facet.comingSoon,
						"aria-checked": unref(isFacetSelected)(facet.id),
						"aria-label": facet.label,
						class: "gap-1 px-1.5 rounded transition-colors text-fg-subtle bg-bg-subtle border-border-subtle enabled:hover:text-fg-muted enabled:hover:border-border aria-checked:text-fg-muted aria-checked:bg-fg/10 aria-checked:border-fg/20 aria-checked:hover:enabled:bg-fg/20 aria-checked:hover:enabled:text-fg/50 focus-visible:outline-accent/70 disabled:text-fg-subtle/50 disabled:bg-bg-subtle disabled:border-border-subtle",
						onClick: ($event) => !facet.comingSoon && unref(toggleFacet)(facet.id),
						classicon: facet.comingSoon ? void 0 : unref(isFacetSelected)(facet.id) ? "i-lucide:check" : "i-lucide:plus"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`${ssrInterpolate(facet.label)} `);
								if (facet.comingSoon) _push(`<span class="text-4xs"${_scopeId}>(${ssrInterpolate(unref($t)("compare.facets.coming_soon"))})</span>`);
								else _push(`<!---->`);
							} else return [createTextVNode(toDisplayString(facet.label) + " ", 1), facet.comingSoon ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-4xs"
							}, "(" + toDisplayString(unref($t)("compare.facets.coming_soon")) + ")", 1)) : createCommentVNode("", true)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></div>`);
			});
			_push(`<!--]--></div><!--]-->`);
		};
	}
});
//#endregion
//#region app/components/Compare/FacetSelector.vue
var _sfc_setup$6 = FacetSelector_vue_vue_type_script_setup_true_lang_default.setup;
FacetSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetSelector.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var FacetSelector_default = Object.assign(FacetSelector_vue_vue_type_script_setup_true_lang_default, { __name: "CompareFacetSelector" });
//#endregion
//#region app/components/Compare/ComparisonGrid.vue?vue&type=script&setup=true&lang.ts
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
		/** Total column count including the optional no-dep column */
		const totalColumns = computed(() => props.columns.length + (props.showNoDependency ? 1 : 0));
		const visibleColumns = computed(() => Math.min(totalColumns.value, 4));
		/** Compute plain-text tooltip for a replacement column */
		function getReplacementTooltip(col) {
			if (!col.replacement) return "";
			return [$t("package.replacement.title"), $t("package.replacement.learn_more_above")].join(" ");
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_LinkBase = Base_default;
			const _component_TooltipApp = App_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))} data-v-515ed2e2><div class="comparison-grid" style="${ssrRenderStyle({
				"--package-count": unref(totalColumns),
				"--visible-columns": unref(visibleColumns)
			})}" data-v-515ed2e2><div class="comparison-header" data-v-515ed2e2><div class="comparison-label relative bg-bg" data-v-515ed2e2></div><!--[-->`);
			ssrRenderList(__props.columns, (col) => {
				_push(`<div class="comparison-cell comparison-cell-header min-w-0" data-v-515ed2e2><div class="flex items-start justify-center gap-1.5 min-w-0" data-v-515ed2e2>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(col.name, col.version),
					class: "flex min-w-0 flex-col items-center text-center text-sm",
					title: col.version ? `${col.name}@${col.version}` : col.name
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span class="min-w-0 break-words line-clamp-1" data-v-515ed2e2${_scopeId}>${ssrInterpolate(col.name)}</span>`);
							if (col.version) _push(`<span class="text-fg-muted line-clamp-1" data-v-515ed2e2${_scopeId}> @${ssrInterpolate(col.version)}</span>`);
							else _push(`<!---->`);
						} else return [createVNode("span", { class: "min-w-0 break-words line-clamp-1" }, toDisplayString(col.name), 1), col.version ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-fg-muted line-clamp-1"
						}, " @" + toDisplayString(col.version), 1)) : createCommentVNode("", true)];
					}),
					_: 2
				}, _parent));
				if (col.replacement) _push(ssrRenderComponent(_component_TooltipApp, {
					text: getReplacementTooltip(col),
					position: "bottom"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-lucide:lightbulb mt-0.5 h-3.5 w-3.5 shrink-0 cursor-help text-amber-500" role="img"${ssrRenderAttr("aria-label", unref($t)("package.replacement.title"))} data-v-515ed2e2${_scopeId}></span>`);
						else return [createVNode("span", {
							class: "i-lucide:lightbulb mt-0.5 h-3.5 w-3.5 shrink-0 cursor-help text-amber-500",
							role: "img",
							"aria-label": unref($t)("package.replacement.title")
						}, null, 8, ["aria-label"])];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`</div></div>`);
			});
			_push(`<!--]-->`);
			if (__props.showNoDependency) {
				_push(`<div class="comparison-cell comparison-cell-header comparison-cell-nodep" data-v-515ed2e2><span class="inline-flex items-center gap-1.5 text-sm font-medium text-accent italic truncate" data-v-515ed2e2>${ssrInterpolate(unref($t)("compare.no_dependency.label"))} `);
				_push(ssrRenderComponent(_component_TooltipApp, {
					interactive: "",
					position: "bottom"
				}, {
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<p class="text-sm font-medium text-fg mb-1" data-v-515ed2e2${_scopeId}>${ssrInterpolate(unref($t)("compare.no_dependency.tooltip_title"))}</p><p class="text-xs text-fg-muted" data-v-515ed2e2${_scopeId}>`);
							_push(ssrRenderComponent(_component_i18n_t, {
								keypath: "compare.no_dependency.tooltip_description",
								tag: "span"
							}, {
								link: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_component_LinkBase, { to: "https://e18e.dev/docs/replacements/" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(unref($t)("compare.no_dependency.e18e_community"))}`);
											else return [createTextVNode(toDisplayString(unref($t)("compare.no_dependency.e18e_community")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									else return [createVNode(_component_LinkBase, { to: "https://e18e.dev/docs/replacements/" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("compare.no_dependency.e18e_community")), 1)]),
										_: 1
									})];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</p>`);
						} else return [createVNode("p", { class: "text-sm font-medium text-fg mb-1" }, toDisplayString(unref($t)("compare.no_dependency.tooltip_title")), 1), createVNode("p", { class: "text-xs text-fg-muted" }, [createVNode(_component_i18n_t, {
							keypath: "compare.no_dependency.tooltip_description",
							tag: "span"
						}, {
							link: withCtx(() => [createVNode(_component_LinkBase, { to: "https://e18e.dev/docs/replacements/" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("compare.no_dependency.e18e_community")), 1)]),
								_: 1
							})]),
							_: 1
						})])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-lucide:lightbulb w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help" role="img"${ssrRenderAttr("aria-label", unref($t)("compare.no_dependency.tooltip_title"))} data-v-515ed2e2${_scopeId}></span>`);
						else return [createVNode("span", {
							class: "i-lucide:lightbulb w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help",
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
//#endregion
//#region app/components/Compare/ComparisonGrid.vue
var _sfc_setup$5 = ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup;
ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ComparisonGrid.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ComparisonGrid_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ComparisonGrid_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-515ed2e2"]]), { __name: "CompareComparisonGrid" });
//#endregion
//#region app/components/Compare/FacetRow.vue?vue&type=script&setup=true&lang.ts
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
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))} data-v-ccc430df><div class="comparison-label relative bg-bg flex items-center gap-1.5 px-4 py-3 border-b border-border" data-v-ccc430df><span class="text-xs text-fg-muted uppercase tracking-wider" data-v-ccc430df>${ssrInterpolate(__props.label)}</span>`);
			if (__props.description) _push(ssrRenderComponent(_component_TooltipApp, {
				text: __props.description,
				position: "top"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-lucide:info w-3 h-3 text-fg-subtle cursor-help" aria-hidden="true" data-v-ccc430df${_scopeId}></span>`);
					else return [createVNode("span", {
						class: "i-lucide:info w-3 h-3 text-fg-subtle cursor-help",
						"aria-hidden": "true"
					})];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div><!--[-->`);
			ssrRenderList(__props.values, (value, index) => {
				_push(`<div class="comparison-cell relative flex items-center justify-center px-4 py-3 border-b border-border" data-v-ccc430df>`);
				if (unref(showBar) && value && getBarWidth(value) > 0) _push(`<div class="${ssrRenderClass([getStatusBarClass(value.status), "absolute inset-y-1 inset-is-1 rounded-sm transition-all duration-300"])}" style="${ssrRenderStyle({ width: `calc(${getBarWidth(value)}% - 8px)` })}" aria-hidden="true" data-v-ccc430df></div>`);
				else _push(`<!---->`);
				if (isCellLoading(index)) _push(`<span class="i-svg-spinners:ring-resize w-4 h-4 text-fg-subtle" aria-hidden="true" data-v-ccc430df></span>`);
				else if (!value) _push(`<span class="text-fg-subtle text-sm" data-v-ccc430df>-</span>`);
				else {
					_push(`<!--[-->`);
					if (value.tooltip) _push(ssrRenderComponent(_component_TooltipApp, {
						text: value.tooltip,
						position: "top"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span class="${ssrRenderClass([getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0), "relative font-mono text-sm text-center tabular-nums cursor-help"])}"${ssrRenderAttr("data-status", value.status)} data-v-ccc430df${_scopeId}>`);
								if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
									datetime: value.display,
									"date-style": "medium"
								}, null, _parent, _scopeId));
								else _push(`<span dir="auto" data-v-ccc430df${_scopeId}>${ssrInterpolate(value.display)}</span>`);
								_push(`</span>`);
							} else return [createVNode("span", {
								class: ["relative font-mono text-sm text-center tabular-nums cursor-help", getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0)],
								"data-status": value.status
							}, [value.type === "date" ? (openBlock(), createBlock(_component_DateTime, {
								key: 0,
								datetime: value.display,
								"date-style": "medium"
							}, null, 8, ["datetime"])) : (openBlock(), createBlock("span", {
								key: 1,
								dir: "auto"
							}, toDisplayString(value.display), 1))], 10, ["data-status"])];
						}),
						_: 2
					}, _parent));
					else {
						_push(`<span class="${ssrRenderClass([getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0), "relative font-mono text-sm text-center tabular-nums"])}"${ssrRenderAttr("data-status", value.status)} data-v-ccc430df>`);
						if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
							datetime: value.display,
							"date-style": "medium"
						}, null, _parent));
						else _push(`<span dir="auto" data-v-ccc430df>${ssrInterpolate(value.display)}</span>`);
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
//#endregion
//#region app/components/Compare/FacetRow.vue
var _sfc_setup$4 = FacetRow_vue_vue_type_script_setup_true_lang_default.setup;
FacetRow_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetRow.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var FacetRow_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(FacetRow_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ccc430df"]]), { __name: "CompareFacetRow" });
//#endregion
//#region app/components/Compare/FacetCard.vue?vue&type=script&setup=true&lang.ts
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
					if (_push) _push(`<span class="i-lucide:info w-3 h-3 text-fg-subtle"${ssrRenderAttr("title", __props.description)} aria-hidden="true"${_scopeId}></span>`);
					else return [createVNode("span", {
						class: "i-lucide:info w-3 h-3 text-fg-subtle",
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
				_push(`<span class="relative font-mono text-xs text-fg-muted truncate flex-shrink-0"${ssrRenderAttr("title", __props.headers[index])}>${ssrInterpolate(getShortName(__props.headers[index] ?? ""))}</span><span class="relative min-w-0 text-end">`);
				if (isCellLoading(index)) _push(`<span class="i-svg-spinners:ring-resize w-4 h-4 text-fg-subtle" aria-hidden="true"></span>`);
				else if (!value) _push(`<span class="text-fg-subtle text-sm">-</span>`);
				else {
					_push(`<span class="${ssrRenderClass([getStatusClass(value.status), "font-mono text-sm tabular-nums"])}">`);
					if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
						datetime: value.display,
						"date-style": "medium"
					}, null, _parent));
					else _push(`<span dir="auto">${ssrInterpolate(value.display)}</span>`);
					_push(`</span>`);
				}
				_push(`</span></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/components/Compare/FacetCard.vue
var _sfc_setup$3 = FacetCard_vue_vue_type_script_setup_true_lang_default.setup;
FacetCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetCard.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var FacetCard_default = Object.assign(FacetCard_vue_vue_type_script_setup_true_lang_default, { __name: "CompareFacetCard" });
//#endregion
//#region app/components/Compare/LineChart.vue?vue&type=script&setup=true&lang.ts
var LineChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LineChart",
	__ssrInlineRender: true,
	props: { packages: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "font-mono" }, _attrs))}>`);
			_push(ssrRenderComponent(TrendsChart_default, {
				"package-names": __props.packages,
				"in-modal": false,
				"show-facet-selector": ""
			}, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Compare/LineChart.vue
var _sfc_setup$2 = LineChart_vue_vue_type_script_setup_true_lang_default.setup;
LineChart_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/LineChart.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var LineChart_default = Object.assign(LineChart_vue_vue_type_script_setup_true_lang_default, { __name: "CompareLineChart" });
//#endregion
//#region app/components/Compare/FacetBarChart.vue?vue&type=script&setup=true&lang.ts
var mobileBreakpointWidth = 640;
var FacetBarChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetBarChart",
	__ssrInlineRender: true,
	props: {
		values: {},
		packages: {},
		label: {},
		description: {},
		facetLoading: { type: Boolean }
	},
	setup(__props) {
		const { t: $t } = useI18n();
		Promise.resolve({          });
		const props = __props;
		const colorMode = useColorMode();
		const resolvedMode = shallowRef("light");
		const rootEl = shallowRef(null);
		const { width } = useElementSize(rootEl);
		const { copy} = useClipboard();
		const isMobile = computed(() => width.value > 0 && width.value < mobileBreakpointWidth);
		const chartKey = ref(0);
		const { colors } = useCssVariables([
			"--bg",
			"--fg",
			"--bg-subtle",
			"--bg-elevated",
			"--fg-subtle",
			"--fg-muted",
			"--border",
			"--border-subtle"
		], {
			element: rootEl,
			watchHtmlAttributes: true,
			watchResize: false
		});
		computed(() => ({
			fg: colors.value.fg ?? "oklch(0.633 0 0)",
			bg: colors.value.bg ?? "oklch(0.633 0 0)",
			fgSubtle: colors.value.fgSubtle ?? "oklch(0.633 0 0)"
		}));
		watch(() => colorMode.value, (value) => {
			resolvedMode.value = value === "dark" ? "dark" : "light";
		}, { flush: "sync" });
		watch(() => props.packages, (newP, oldP) => {
			if (newP.length !== oldP.length) return;
			chartKey.value += 1;
		});
		const isDarkMode = computed(() => resolvedMode.value === "dark");
		const dataset = computed(() => {
			if (props.facetLoading) return [];
			return props.packages.map((name, index) => {
				const rawValue = props.values[index]?.raw;
				return {
					name: insertLineBreaks(applyEllipsis(name)),
					value: typeof rawValue === "number" ? rawValue : 0,
					color: isListedFramework(name) ? getFrameworkColor(name) : void 0,
					formattedValue: props.values[index]?.display
				};
			});
		});
		const skeletonDataset = computed(() => props.packages.map((_pkg, i) => ({
			name: "_",
			value: i + 1,
			color: colors.value.border
		})));
		function buildExportFilename(extension) {
			const sanitizedPackages = props.packages.map((p) => sanitise(p).slice(0, 10)).join("_");
			const comparisonLabel = sanitise($t("compare.packages.section_comparison"));
			return `${sanitise(props.label)}_${comparisonLabel}_${sanitizedPackages}.${extension}`;
		}
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "",
				a11y: { translations: {
					keyboardNavigation: $t("package.trends.chart_assistive_text.keyboard_navigation_vertical"),
					tableAvailable: $t("package.trends.chart_assistive_text.table_available"),
					tableCaption: $t("package.trends.chart_assistive_text.table_caption")
				} },
				userOptions: {
					buttons: {
						tooltip: false,
						pdf: false,
						fullscreen: false,
						sort: false,
						annotator: false,
						table: false,
						csv: false,
						altCopy: true
					},
					buttonTitle: {
						img: $t("package.trends.download_file", { fileType: "PNG" }),
						svg: $t("package.trends.download_file", { fileType: "SVG" }),
						altCopy: $t("package.trends.copy_alt.button_label")
					},
					callbacks: {
						img: (args) => {
							const imageUri = args?.imageUri;
							if (!imageUri) return;
							loadFile(imageUri, buildExportFilename("png"));
						},
						svg: (args) => {
							const blob = args?.blob;
							if (!blob) return;
							const url = URL.createObjectURL(blob);
							loadFile(url, buildExportFilename("svg"));
							URL.revokeObjectURL(url);
						},
						altCopy: ({ dataset: dst, config: cfg }) => {
							copyAltTextForCompareFacetBarChart({
								dataset: dst,
								config: {
									...cfg,
									facet: props.label,
									description: props.description,
									copy,
									$t
								}
							});
						}
					}
				},
				skeletonDataset: skeletonDataset.value,
				skeletonConfig: { style: { chart: { backgroundColor: colors.value.bg } } },
				style: { chart: {
					backgroundColor: colors.value.bg,
					height: 60 * props.packages.length,
					layout: {
						bars: {
							rowColor: isDarkMode.value ? colors.value.borderSubtle : colors.value.bgSubtle,
							rowRadius: 4,
							borderRadius: 4,
							dataLabels: {
								fontSize: isMobile.value ? 12 : 18,
								percentage: { show: false },
								offsetX: 12,
								bold: false,
								color: colors.value.fg,
								value: { formatter: ({ config: formatterConfig }) => {
									return formatterConfig?.datapoint?.formattedValue ?? "0";
								} }
							},
							nameLabels: {
								fontSize: isMobile.value ? 12 : 18,
								color: colors.value.fgSubtle
							},
							underlayerColor: colors.value.bg
						},
						highlighter: { opacity: isMobile.value ? 0 : 5 }
					},
					legend: { show: false },
					title: {
						fontSize: 16,
						bold: false,
						text: props.label,
						color: colors.value.fg,
						subtitle: {
							text: props.description,
							fontSize: 12,
							color: colors.value.fgSubtle
						}
					},
					tooltip: {
						show: !isMobile.value,
						borderColor: "transparent",
						backdropFilter: false,
						backgroundColor: "transparent",
						customFormat: ({ datapoint }) => {
							const name = datapoint?.name?.replace(/\n/g, "<br>") ?? "";
							const safeSeriesIndex = datapoint?.absoluteIndex ?? 0;
							const patternId = `tooltip-pattern-${safeSeriesIndex}`;
							const usePattern = safeSeriesIndex !== 0;
							return `
            <div class="font-mono p-3 border border-border rounded-md bg-[var(--bg)]/10 backdrop-blur-md">
              <div class="grid grid-cols-[12px_minmax(0,1fr)_max-content] items-center gap-x-3">
                <div class="w-3 h-3">
                  <svg viewBox="0 0 20 20" class="w-full h-full" aria-hidden="true">
                    <defs>
                      ${usePattern ? createChartPatternSlotMarkup({
								id: patternId,
								seed: safeSeriesIndex,
								foregroundColor: colors.value.bg,
								fallbackColor: "transparent",
								maxSize: 24,
								minSize: 16
							}) : ""}
                    </defs>
                    ${usePattern ? `
              <rect x="0" y="0" width="20" height="20" rx="3" fill="${datapoint?.color ?? "transparent"}" />
              <rect x="0" y="0" width="20" height="20" rx="3" fill="url(#${patternId})" />
            ` : `
              <rect x="0" y="0" width="20" height="20" rx="3" fill="${datapoint?.color ?? "transparent"}" />
            `}
                  </svg>
                </div>
                <span class="text-3xs uppercase tracking-wide text-[var(--fg)]/70 truncate">
                  ${name}
                </span>
                <span class="text-base text-[var(--fg)] font-mono tabular-nums text-end">
                  ${datapoint?.formattedValue ?? 0}
                </span>
              </div>
            </div>
          `;
						}
					}
				} }
			};
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ClientOnly = client_only_default;
			const _component_SkeletonInline = SkeletonInline_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "font-mono facet-bar" }, _attrs))} data-v-caa3c2b7>`);
			if (dataset.value.length) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="flex flex-col gap-2 justify-center items-center mb-2" data-v-caa3c2b7${_scopeId}>`);
					_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-16" }, null, _parent, _scopeId));
					_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-28" }, null, _parent, _scopeId));
					_push(`</div><div class="flex flex-col gap-1" data-v-caa3c2b7${_scopeId}><!--[-->`);
					ssrRenderList(__props.packages, (pkg) => {
						_push(ssrRenderComponent(_component_SkeletonInline, {
							class: "h-7 w-full",
							key: pkg
						}, null, _parent, _scopeId));
					});
					_push(`<!--]--></div>`);
				} else return [createVNode("div", { class: "flex flex-col gap-2 justify-center items-center mb-2" }, [createVNode(_component_SkeletonInline, { class: "h-4 w-16" }), createVNode(_component_SkeletonInline, { class: "h-4 w-28" })]), createVNode("div", { class: "flex flex-col gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.packages, (pkg) => {
					return openBlock(), createBlock(_component_SkeletonInline, {
						class: "h-7 w-full",
						key: pkg
					});
				}), 128))])];
			}) }, _parent));
			else {
				_push(`<!--[--><div class="flex flex-col gap-2 justify-center items-center mb-2" data-v-caa3c2b7>`);
				_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-16" }, null, _parent));
				_push(ssrRenderComponent(_component_SkeletonInline, { class: "h-4 w-28" }, null, _parent));
				_push(`</div><div class="flex flex-col gap-1" data-v-caa3c2b7><!--[-->`);
				ssrRenderList(__props.packages, (pkg) => {
					_push(ssrRenderComponent(_component_SkeletonInline, {
						class: "h-7 w-full",
						key: pkg
					}, null, _parent));
				});
				_push(`<!--]--></div><!--]-->`);
			}
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Compare/FacetBarChart.vue
var _sfc_setup$1 = FacetBarChart_vue_vue_type_script_setup_true_lang_default.setup;
FacetBarChart_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/FacetBarChart.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var FacetBarChart_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(FacetBarChart_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-caa3c2b7"]]), { __name: "CompareFacetBarChart" });
//#endregion
//#region app/composables/useCompareReplacements.ts
/**
* Replacement types that suggest "no dependency" (can be replaced with native code or inline).
*/
var NO_DEP_REPLACEMENT_TYPES = ["native", "simple"];
/**
* Replacement types that are informational only.
* These suggest alternative packages exist but don't fit the "no dependency" pattern.
*/
var INFO_REPLACEMENT_TYPES = ["documented"];
/**
* Composable for fetching module replacement suggestions for packages in comparison.
* Returns replacements split into "no dep" (actionable) and informational categories.
*/
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
//#endregion
//#region app/pages/compare.vue?vue&type=script&setup=true&lang.ts
var maxPackages = 4;
var compare_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "compare",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { locale } = useI18n();
		const { copied, copy } = useClipboard({ copiedDuring: 2e3 });
		const packagesParam = useRouteQuery("packages", "", { mode: "replace" });
		const packages = computed({
			get() {
				if (!packagesParam.value) return [];
				return packagesParam.value.split(",").map((p) => p.trim()).filter((p) => p.length > 0).slice(0, maxPackages);
			},
			set(value) {
				packagesParam.value = value.length > 0 ? value.join(",") : "";
			}
		});
		const { selectedFacets, selectAll, deselectAll, isAllSelected, isNoneSelected } = useFacetSelection();
		const { packagesData, status, getFacetValues, isFacetLoading, isColumnLoading } = usePackageComparison(packages);
		const { noDepSuggestions, infoSuggestions, replacements } = useCompareReplacements(packages);
		const showNoDependency = computed(() => packages.value.includes(NO_DEPENDENCY_ID));
		const gridColumns = computed(() => packages.value.map((pkg, i) => ({
			pkg,
			originalIndex: i
		})).filter(({ pkg }) => pkg !== NO_DEPENDENCY_ID).map(({ pkg, originalIndex }) => {
			const data = packagesData.value?.[originalIndex];
			return {
				name: data?.package.name || pkg,
				version: data?.package.version,
				replacement: replacements.value.get(pkg) ?? null
			};
		}));
		const canAddNoDep = computed(() => packages.value.length < maxPackages && !packages.value.includes("__no_dependency__"));
		function addNoDep() {
			if (packages.value.length >= maxPackages) return;
			if (packages.value.includes("__no_dependency__")) return;
			packages.value = [...packages.value, NO_DEPENDENCY_ID];
		}
		const columnLoading = computed(() => packages.value.map((_, i) => isColumnLoading(i)));
		const canCompare = computed(() => packages.value.length >= 2);
		const comparisonView = ref("table");
		const gridHeaders = computed(() => gridColumns.value.map((col) => col.version ? `${col.name}@${col.version}` : col.name));
		function exportComparisonDataAsMarkdown() {
			const mdData = [];
			const headers = [
				"",
				...gridHeaders.value,
				...showNoDependency.value ? [$t("compare.no_dependency.label")] : []
			];
			mdData.push(headers);
			const maxLengths = headers.map((item) => item.length);
			selectedFacets.value.forEach((facet, index) => {
				const label = facet.label;
				const data = getFacetValues(facet.id);
				mdData.push([label, ...data.map((item) => item?.type === "date" ? new Date(item.display).toLocaleDateString(locale.value, {
					year: "numeric",
					month: "short",
					day: "numeric"
				}) : item?.display || "")]);
				mdData?.[index + 1]?.forEach((item, itemIndex) => {
					if (item.length > (maxLengths?.[itemIndex] || 0)) maxLengths[itemIndex] = item.length;
				});
			});
			copy(mdData.reduce((result, row, index) => {
				result += `| ${row.map((el, ind) => el.padEnd(maxLengths[ind] || 0, " ").replace(/\|/g, "ǀ")).join(" | ")} |`;
				if (index === 0) {
					result += `\n|`;
					maxLengths.forEach((len) => result += ` ${"-".padEnd(len, "-")} |`);
				}
				result += `\n`;
				return result;
			}, ""));
		}
		useSeoMeta$1({
			title: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			ogTitle: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			twitterTitle: () => packages.value.length > 0 ? $t("compare.packages.meta_title", { packages: packages.value.join(" vs ") }) : $t("compare.packages.meta_title_empty"),
			description: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty"),
			ogDescription: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty"),
			twitterDescription: () => packages.value.length > 0 ? $t("compare.packages.meta_description", { packages: packages.value.join(", ") }) : $t("compare.packages.meta_description_empty")
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BackButton = BackButton_default;
			const _component_ComparePackageSelector = PackageSelector_default;
			const _component_CompareReplacementSuggestion = ReplacementSuggestion_default;
			const _component_ButtonBase = Base_default$1;
			const _component_CompareFacetSelector = FacetSelector_default;
			const _component_CopyToClipboardButton = CopyToClipboardButton_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_CompareComparisonGrid = ComparisonGrid_default;
			const _component_CompareFacetRow = FacetRow_default;
			const _component_CompareFacetCard = FacetCard_default;
			const _component_CompareLineChart = LineChart_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 w-full" }, _attrs))}><div class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("compare.packages.title"))}</h1>`);
			_push(ssrRenderComponent(_component_BackButton, null, null, _parent));
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("compare.packages.tagline"))}</p></header><section class="mb-8" aria-labelledby="packages-heading"><h2 id="packages-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(unref($t)("compare.packages.section_packages"))}</h2>`);
			_push(ssrRenderComponent(_component_ComparePackageSelector, {
				modelValue: unref(packages),
				"onUpdate:modelValue": ($event) => isRef(packages) ? packages.value = $event : null,
				max: maxPackages
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
			_push(`</section><section class="mb-8" aria-labelledby="facets-heading"><div class="flex items-center gap-2 mb-3"><h2 id="facets-heading" class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("compare.packages.section_facets"))}</h2>`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				size: "sm",
				"aria-pressed": unref(isAllSelected),
				disabled: unref(isAllSelected),
				"aria-label": unref($t)("compare.facets.select_all"),
				onClick: unref(selectAll)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("compare.facets.all"))}`);
					else return [createTextVNode(toDisplayString(unref($t)("compare.facets.all")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<span class="text-3xs text-fg-muted/40" aria-hidden="true">/</span>`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				size: "sm",
				"aria-pressed": unref(isNoneSelected),
				disabled: unref(isNoneSelected),
				"aria-label": unref($t)("compare.facets.deselect_all"),
				onClick: unref(deselectAll)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("compare.facets.none"))}`);
					else return [createTextVNode(toDisplayString(unref($t)("compare.facets.none")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_CompareFacetSelector, null, null, _parent));
			_push(`</section>`);
			if (unref(canCompare)) {
				_push(`<section class="mt-10" aria-labelledby="comparison-heading">`);
				if (unref(packagesData) && unref(packagesData).some((p) => p !== null)) _push(ssrRenderComponent(_component_CopyToClipboardButton, {
					copied: unref(copied),
					"copy-text": unref($t)("compare.packages.copy_as_markdown"),
					class: "mb-4",
					"button-attrs": { class: "hidden md:inline-flex" },
					onClick: exportComparisonDataAsMarkdown
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<h2 id="comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider"${_scopeId}>${ssrInterpolate(unref($t)("compare.packages.section_comparison"))}</h2>`);
						else return [createVNode("h2", {
							id: "comparison-heading",
							class: "text-xs text-fg-subtle uppercase tracking-wider"
						}, toDisplayString(unref($t)("compare.packages.section_comparison")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<h2 id="comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("compare.packages.section_comparison"))}</h2>`);
				if ((unref(status) === "pending" || unref(status) === "idle") && (!unref(packagesData) || unref(packagesData).every((p) => p === null))) {
					_push(`<div class="flex items-center justify-center py-12">`);
					_push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("compare.packages.loading") }, null, _parent));
					_push(`</div>`);
				} else if (unref(packagesData) && unref(packagesData).some((p) => p !== null)) {
					_push(`<div>`);
					if (unref(selectedFacets).some((facet) => facet.chartable)) _push(`<div class="inline-flex items-center gap-1 rounded-md border border-border-subtle bg-bg-subtle p-0.5 mt-4" role="tablist"${ssrRenderAttr("aria-label", unref($t)("compare.packages.section_comparison"))}><button id="comparison-tab-table" type="button" role="tab"${ssrRenderAttr("aria-selected", unref(comparisonView) === "table" ? "true" : "false")} aria-controls="comparison-panel-table"${ssrRenderAttr("tabindex", unref(comparisonView) === "table" ? -1 : 0)} class="${ssrRenderClass([unref(comparisonView) === "table" ? "bg-bg border-border shadow-sm text-fg" : "border-transparent text-fg-subtle hover:text-fg", "flex items-center justify-center gap-x-2 rounded px-3 py-2 font-mono text-sm border border-solid transition-colors duration-150 focus-visible:outline-accent/70"])}"><span class="i-lucide:table size-[1em]" aria-hidden="true"></span><span>${ssrInterpolate(unref($t)("compare.packages.table_view"))}</span></button><button id="comparison-tab-charts" type="button" role="tab"${ssrRenderAttr("aria-selected", unref(comparisonView) === "charts" ? "true" : "false")} aria-controls="comparison-panel-charts"${ssrRenderAttr("tabindex", unref(comparisonView) === "charts" ? -1 : 0)} class="${ssrRenderClass([unref(comparisonView) === "charts" ? "bg-bg border-border shadow-sm text-fg" : "border-transparent text-fg-subtle hover:text-fg", "flex items-center justify-center gap-x-2 rounded px-3 py-2 font-mono text-sm border border-solid transition-colors duration-150 focus-visible:outline-accent/70"])}"><span class="i-lucide:chart-bar-decreasing size-[1em]" aria-hidden="true"></span><span>${ssrInterpolate(unref($t)("compare.packages.charts_view"))}</span></button></div>`);
					else _push(`<!---->`);
					_push(`<div role="tabpanel" style="${ssrRenderStyle(unref(comparisonView) === "table" ? null : { display: "none" })}"><div class="hidden md:block overflow-x-auto">`);
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
					_push(`<!--]--></div></div>`);
					if (unref(comparisonView) === "charts") {
						_push(`<div role="tabpanel"><div class="sm:grid grid-cols-2 gap-x-4"><!--[-->`);
						ssrRenderList(unref(selectedFacets).filter((facet) => facet.chartable), (facet) => {
							_push(`<div class="my-6">`);
							_push(ssrRenderComponent(FacetBarChart_default, {
								values: unref(getFacetValues)(facet.id),
								packages: unref(packages).filter((p) => p !== unref(NO_DEPENDENCY_ID)),
								label: facet.label,
								description: facet.description,
								"facet-loading": unref(isFacetLoading)(facet.id)
							}, null, _parent));
							_push(`</div>`);
						});
						_push(`<!--]--></div></div>`);
					} else _push(`<!---->`);
					_push(`<h2 id="trends-comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-4 mt-10">${ssrInterpolate(unref($t)("compare.facets.trends.title"))}</h2>`);
					_push(ssrRenderComponent(_component_CompareLineChart, { packages: unref(packages).filter((p) => p !== unref(NO_DEPENDENCY_ID)) }, null, _parent));
					_push(`</div>`);
				} else if (unref(status) === "error") _push(`<div class="text-center py-12" role="alert"><p class="text-fg-muted">${ssrInterpolate(unref($t)("compare.packages.error"))}</p></div>`);
				else {
					_push(`<div class="flex items-center justify-center py-12">`);
					_push(ssrRenderComponent(_component_LoadingSpinner, { text: unref($t)("compare.packages.loading") }, null, _parent));
					_push(`</div>`);
				}
				_push(`</section>`);
			} else _push(`<section class="text-center px-1.5 py-16 border border-dashed border-border-hover rounded-lg"><div class="i-lucide:git-compare w-12 h-12 text-fg-subtle mx-auto mb-4" aria-hidden="true"></div><h2 class="font-mono text-lg text-fg-muted mb-2">${ssrInterpolate(unref($t)("compare.packages.empty_title"))}</h2><p class="text-sm text-fg-subtle max-w-md mx-auto">${ssrInterpolate(unref($t)("compare.packages.empty_description"))}</p></section>`);
			_push(`</div></main>`);
		};
	}
});
//#endregion
//#region app/pages/compare.vue
var _sfc_setup = compare_vue_vue_type_script_setup_true_lang_default.setup;
compare_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compare.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var compare_default = compare_vue_vue_type_script_setup_true_lang_default;

export { compare_default as default };
//# sourceMappingURL=compare-C-Pe7yI6.mjs.map

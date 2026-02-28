import { u as useI18n, a as useRouter, F as useClipboard, b as useSeoMeta$1, o as Base_default, e as useNuxtApp, _ as _plugin_vue_export_helper_default, G as useSearchProvider, C as onClickOutside, B as Base_default$1, q as packageRoute, m as Base_default$1$1, E as DateTime_default } from './server.mjs';
import { u as useCanGoBack } from './useCanGoBack-DqTkP1_4.mjs';
import { S as Static_default, A as App_default } from './App-B-_OJFKC.mjs';
import { u as useRouteQuery, C as CopyToClipboardButton_default, T as TrendsChart_default } from './TrendsChart-BwimLnmi.mjs';
import { u as useNumberFormatter, a as useCompactNumberFormatter, b as useBytesFormatter } from './useNumberFormatter-CNADtHud.mjs';
import { L as LoadingSpinner_default } from './LoadingSpinner-qFOxe1aJ.mjs';
import { u as useSearch } from './useSearch-CpT6BA2b.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, toValue, shallowRef, readonly, useModel, useTemplateRef, watch, createCommentVNode, mergeModels, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { aQ as DEFAULT_FACETS, aR as ALL_FACETS, aS as FACET_INFO, aT as CATEGORY_ORDER, aU as FACETS_BY_CATEGORY, aO as stripHtmlTags, aP as decodeHtmlEntities } from '../nitro/nitro.mjs';
import 'vue-router';
import 'perfect-debounce';
import 'devalue';
import 'unhead/plugins';
import '@floating-ui/vue';
import './Field-BBRX0YgS.mjs';
import './frameworks-Cvl8C7l0.mjs';
import 'fast-npm-meta';
import 'semver';
import 'algoliasearch/lite';
import 'validate-npm-package-name';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
import '@jsr/deno__doc';
import 'valibot';
import 'node:crypto';
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

/** Special identifier for the "What Would James Do?" comparison column */
const NO_DEPENDENCY_ID = "__no_dependency__";
/**
* Special display values for the "no dependency" column.
* These are explicit markers that get special rendering treatment.
*/
const NoDependencyDisplay = {
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
			const _component_LinkBase = Base_default$1;
			const _component_ButtonBase = Base_default;
			const _component_InputBase = Base_default$1$1;
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
									size: "small",
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
								size: "small",
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
					size: "medium",
					class: "w-full min-w-25 ps-7",
					"aria-autocomplete": "list",
					ref: "inputRef",
					onFocus: ($event) => isInputFocused.value = true,
					onKeydown: handleKeydown
				}, null, _parent));
				_push(`</div>`);
				if (unref(isInputFocused) && (unref(navigableItems).length > 0 || unref(isSearching))) {
					_push(`<div class="absolute top-full inset-x-0 mt-1 bg-bg-elevated border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">`);
					if (unref(showNoDependencyOption)) _push(ssrRenderComponent(_component_ButtonBase, {
						"data-navigable": "",
						class: ["block w-full text-start", unref(highlightedIndex) === 0 ? "!bg-accent/15" : ""],
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
							class: ["block w-full text-start", unref(highlightedIndex) === index + unref(resultIndexOffset) ? "!bg-accent/15" : ""],
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
		const emit = __emit;
		const docUrl = computed(() => {
			if (props.replacement.type !== "documented" || !props.replacement.docPath) return null;
			return `https://e18e.dev/docs/replacements/${props.replacement.docPath}.html`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default;
			const _component_LinkBase = Base_default$1;
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
				size: "small",
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
				size: "small"
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
var _sfc_setup$6 = ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup;
ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ReplacementSuggestion.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var ReplacementSuggestion_default = Object.assign(ReplacementSuggestion_vue_vue_type_script_setup_true_lang_default, { __name: "CompareReplacementSuggestion" });
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
			description: t(`compare.facets.items.downloads.description`)
		},
		totalLikes: {
			label: t(`compare.facets.items.totalLikes.label`),
			description: t(`compare.facets.items.totalLikes.description`)
		},
		packageSize: {
			label: t(`compare.facets.items.packageSize.label`),
			description: t(`compare.facets.items.packageSize.description`)
		},
		installSize: {
			label: t(`compare.facets.items.installSize.label`),
			description: t(`compare.facets.items.installSize.description`)
		},
		moduleFormat: {
			label: t(`compare.facets.items.moduleFormat.label`),
			description: t(`compare.facets.items.moduleFormat.description`)
		},
		types: {
			label: t(`compare.facets.items.types.label`),
			description: t(`compare.facets.items.types.description`)
		},
		engines: {
			label: t(`compare.facets.items.engines.label`),
			description: t(`compare.facets.items.engines.description`)
		},
		vulnerabilities: {
			label: t(`compare.facets.items.vulnerabilities.label`),
			description: t(`compare.facets.items.vulnerabilities.description`)
		},
		lastUpdated: {
			label: t(`compare.facets.items.lastUpdated.label`),
			description: t(`compare.facets.items.lastUpdated.description`)
		},
		license: {
			label: t(`compare.facets.items.license.label`),
			description: t(`compare.facets.items.license.description`)
		},
		dependencies: {
			label: t(`compare.facets.items.dependencies.label`),
			description: t(`compare.facets.items.dependencies.description`)
		},
		totalDependencies: {
			label: t(`compare.facets.items.totalDependencies.label`),
			description: t(`compare.facets.items.totalDependencies.description`)
		},
		deprecated: {
			label: t(`compare.facets.items.deprecated.label`),
			description: t(`compare.facets.items.deprecated.description`)
		}
	}));
	function buildFacetInfo(facet) {
		return {
			id: facet,
			...FACET_INFO[facet],
			label: facetLabels.value[facet].label,
			description: facetLabels.value[facet].description
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
var FacetSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FacetSelector",
	__ssrInlineRender: true,
	setup(__props) {
		const { isFacetSelected, toggleFacet, selectCategory, deselectCategory, facetsByCategory, categoryOrder, getCategoryLabel } = useFacetSelection();
		function isCategoryAllSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => isFacetSelected(f.id));
		}
		function isCategoryNoneSelected(category) {
			const selectableFacets = (facetsByCategory.value[category] ?? []).filter((f) => !f.comingSoon);
			return selectableFacets.length > 0 && selectableFacets.every((f) => !isFacetSelected(f.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "space-y-3",
				role: "group",
				"aria-label": _ctx.$t("compare.facets.group_label")
			}, _attrs))}><!--[-->`);
			ssrRenderList(unref(categoryOrder), (category) => {
				_push(`<div><div class="flex items-center gap-2 mb-2"><span class="text-3xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref(getCategoryLabel)(category))}</span>`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					"aria-label": _ctx.$t("compare.facets.select_category", { category: unref(getCategoryLabel)(category) }),
					"aria-pressed": isCategoryAllSelected(category),
					disabled: isCategoryAllSelected(category),
					onClick: ($event) => unref(selectCategory)(category),
					size: "small"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("compare.facets.all"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("compare.facets.all")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`<span class="text-2xs text-fg-muted/40">/</span>`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					"aria-label": _ctx.$t("compare.facets.deselect_category", { category: unref(getCategoryLabel)(category) }),
					"aria-pressed": isCategoryNoneSelected(category),
					disabled: isCategoryNoneSelected(category),
					onClick: ($event) => unref(deselectCategory)(category),
					size: "small"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("compare.facets.none"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("compare.facets.none")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</div><div class="flex items-center gap-1.5 flex-wrap" role="group"><!--[-->`);
				ssrRenderList(unref(facetsByCategory)[category], (facet) => {
					_push(ssrRenderComponent(_component_ButtonBase, {
						key: facet.id,
						size: "small",
						title: facet.comingSoon ? _ctx.$t("compare.facets.coming_soon") : facet.description,
						disabled: facet.comingSoon,
						"aria-pressed": unref(isFacetSelected)(facet.id),
						"aria-label": facet.label,
						class: ["gap-1 px-1.5 rounded transition-colors focus-visible:outline-accent/70", facet.comingSoon ? "text-fg-subtle/50 bg-bg-subtle border-border-subtle cursor-not-allowed" : unref(isFacetSelected)(facet.id) ? "text-fg-muted bg-bg-muted" : "text-fg-subtle bg-bg-subtle border-border-subtle hover:text-fg-muted hover:border-border"],
						onClick: ($event) => !facet.comingSoon && unref(toggleFacet)(facet.id),
						classicon: facet.comingSoon ? void 0 : unref(isFacetSelected)(facet.id) ? "i-lucide:check" : "i-lucide:plus"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`${ssrInterpolate(facet.label)} `);
								if (facet.comingSoon) _push(`<span class="text-4xs"${_scopeId}>(${ssrInterpolate(_ctx.$t("compare.facets.coming_soon"))})</span>`);
								else _push(`<!---->`);
							} else return [createTextVNode(toDisplayString(facet.label) + " ", 1), facet.comingSoon ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-4xs"
							}, "(" + toDisplayString(_ctx.$t("compare.facets.coming_soon")) + ")", 1)) : createCommentVNode("", true)];
						}),
						_: 2
					}, _parent));
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
		/** Total column count including the optional no-dep column */
		const totalColumns = computed(() => props.columns.length + (props.showNoDependency ? 1 : 0));
		/** Compute plain-text tooltip for a replacement column */
		function getReplacementTooltip(col) {
			if (!col.replacement) return "";
			return [$t("package.replacement.title"), $t("package.replacement.learn_more_above")].join(" ");
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_LinkBase = Base_default$1;
			const _component_TooltipApp = App_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))} data-v-ae4b1009><div class="${ssrRenderClass([[unref(totalColumns) === 4 ? "min-w-[800px]" : "min-w-[600px]", `columns-${unref(totalColumns)}`], "comparison-grid"])}" style="${ssrRenderStyle({ "--columns": unref(totalColumns) })}" data-v-ae4b1009><div class="comparison-header" data-v-ae4b1009><div class="comparison-label" data-v-ae4b1009></div><!--[-->`);
			ssrRenderList(__props.columns, (col) => {
				_push(`<div class="comparison-cell comparison-cell-header" data-v-ae4b1009><span class="inline-flex items-center gap-1.5 truncate" data-v-ae4b1009>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(col.name, col.version),
					class: "text-sm truncate",
					block: "",
					title: col.version ? `${col.name}@${col.version}` : col.name
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`${ssrInterpolate(col.name)}`);
							if (col.version) _push(`<!--[-->@${ssrInterpolate(col.version)}<!--]-->`);
							else _push(`<!---->`);
						} else return [createTextVNode(toDisplayString(col.name), 1), col.version ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode("@" + toDisplayString(col.version), 1)], 64)) : createCommentVNode("", true)];
					}),
					_: 2
				}, _parent));
				if (col.replacement) _push(ssrRenderComponent(_component_TooltipApp, {
					text: getReplacementTooltip(col),
					position: "bottom"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="i-lucide:lightbulb w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help" role="img"${ssrRenderAttr("aria-label", unref($t)("package.replacement.title"))} data-v-ae4b1009${_scopeId}></span>`);
						else return [createVNode("span", {
							class: "i-lucide:lightbulb w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help",
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
				_push(`<div class="comparison-cell comparison-cell-header comparison-cell-nodep" data-v-ae4b1009><span class="inline-flex items-center gap-1.5 text-sm font-medium text-accent italic truncate" data-v-ae4b1009>${ssrInterpolate(unref($t)("compare.no_dependency.label"))} `);
				_push(ssrRenderComponent(_component_TooltipApp, {
					interactive: "",
					position: "bottom"
				}, {
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<p class="text-sm font-medium text-fg mb-1" data-v-ae4b1009${_scopeId}>${ssrInterpolate(unref($t)("compare.no_dependency.tooltip_title"))}</p><p class="text-xs text-fg-muted" data-v-ae4b1009${_scopeId}>`);
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
						if (_push) _push(`<span class="i-lucide:lightbulb w-3.5 h-3.5 text-amber-500 shrink-0 cursor-help" role="img"${ssrRenderAttr("aria-label", unref($t)("compare.no_dependency.tooltip_title"))} data-v-ae4b1009${_scopeId}></span>`);
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
var _sfc_setup$4 = ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup;
ComparisonGrid_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Compare/ComparisonGrid.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ComparisonGrid_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ComparisonGrid_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ae4b1009"]]), { __name: "CompareComparisonGrid" });
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
					if (_push) _push(`<span class="i-lucide:info w-3 h-3 text-fg-subtle cursor-help" aria-hidden="true"${_scopeId}></span>`);
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
				_push(`<div class="comparison-cell relative flex items-center justify-center px-4 py-3 border-b border-border">`);
				if (unref(showBar) && value && getBarWidth(value) > 0) _push(`<div class="${ssrRenderClass([getStatusBarClass(value.status), "absolute inset-y-1 inset-is-1 rounded-sm transition-all duration-300"])}" style="${ssrRenderStyle({ width: `calc(${getBarWidth(value)}% - 8px)` })}" aria-hidden="true"></div>`);
				else _push(`<!---->`);
				if (isCellLoading(index)) _push(`<span class="i-svg-spinners:ring-resize w-4 h-4 text-fg-subtle" aria-hidden="true"></span>`);
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
								else _push(`<span dir="auto"${_scopeId}>${ssrInterpolate(value.display)}</span>`);
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
						_push(`<span class="${ssrRenderClass([getStatusClass(value.status, unref(showBar) && getBarWidth(value) > 0), "relative font-mono text-sm text-center tabular-nums"])}"${ssrRenderAttr("data-status", value.status)}>`);
						if (value.type === "date") _push(ssrRenderComponent(_component_DateTime, {
							datetime: value.display,
							"date-style": "medium"
						}, null, _parent));
						else _push(`<span dir="auto">${ssrInterpolate(value.display)}</span>`);
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
			_push(ssrRenderComponent(TrendsChart_default, {
				"package-names": __props.packages,
				"in-modal": false,
				"show-facet-selector": ""
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
var compare_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "compare",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const { locale } = useI18n();
		useRouter();
		const canGoBack = useCanGoBack();
		const { copied, copy } = useClipboard({ copiedDuring: 2e3 });
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
		const canAddNoDep = computed(() => packages.value.length < 4 && !packages.value.includes("__no_dependency__"));
		function addNoDep() {
			if (packages.value.length >= 4) return;
			if (packages.value.includes("__no_dependency__")) return;
			packages.value = [...packages.value, NO_DEPENDENCY_ID];
		}
		const columnLoading = computed(() => packages.value.map((_, i) => isColumnLoading(i)));
		const canCompare = computed(() => packages.value.length >= 2);
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
			const _component_ComparePackageSelector = PackageSelector_default;
			const _component_CompareReplacementSuggestion = ReplacementSuggestion_default;
			const _component_ButtonBase = Base_default;
			const _component_CompareFacetSelector = FacetSelector_default;
			const _component_CopyToClipboardButton = CopyToClipboardButton_default;
			const _component_LoadingSpinner = LoadingSpinner_default;
			const _component_CompareComparisonGrid = ComparisonGrid_default;
			const _component_CompareFacetRow = FacetRow_default;
			const _component_CompareFacetCard = FacetCard_default;
			const _component_CompareLineChart = LineChart_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 w-full" }, _attrs))}><div class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("compare.packages.title"))}</h1>`);
			if (unref(canGoBack)) _push(`<button type="button" class="cursor-pointer inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"><span class="i-lucide:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="hidden sm:inline">${ssrInterpolate(unref($t)("nav.back"))}</span></button>`);
			else _push(`<!---->`);
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("compare.packages.tagline"))}</p></header><section class="mb-8" aria-labelledby="packages-heading"><h2 id="packages-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-3">${ssrInterpolate(unref($t)("compare.packages.section_packages"))}</h2>`);
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
			_push(`</section><section class="mb-8" aria-labelledby="facets-heading"><div class="flex items-center gap-2 mb-3"><h2 id="facets-heading" class="text-xs text-fg-subtle uppercase tracking-wider">${ssrInterpolate(unref($t)("compare.packages.section_facets"))}</h2>`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				size: "small",
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
				size: "small",
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
					_push(`<!--]--></div><h2 id="trends-comparison-heading" class="text-xs text-fg-subtle uppercase tracking-wider mb-4 mt-10">${ssrInterpolate(unref($t)("compare.facets.trends.title"))}</h2>`);
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
var _sfc_setup = compare_vue_vue_type_script_setup_true_lang_default.setup;
compare_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compare.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var compare_default = compare_vue_vue_type_script_setup_true_lang_default;

export { compare_default as default };
//# sourceMappingURL=compare-Ct21Xx2C.mjs.map

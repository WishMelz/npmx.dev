import { Y as useRoute$1, X as useRouter$1, k as useI18n, i as _plugin_vue_export_helper_default, o as onClickOutside, s as onKeyDown } from './server.mjs';
import { A as App_default } from './App-ao9FX9qi.mjs';
import { B as Button_default } from './List-DALO9r7v.mjs';
import { computed, shallowRef, watch, ref, defineComponent, useModel, mergeProps, unref, mergeModels, useTemplateRef, useId, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { ar as normalizeSearchParam, aN as DEFAULT_FILTERS, aO as DEFAULT_PREFERENCES, aP as DEFAULT_COLUMNS, aQ as DOWNLOAD_RANGES, aR as UPDATED_WITHIN_OPTIONS, aS as parseSortOption, aT as SORT_KEYS, aU as PAGE_SIZE_OPTIONS, aV as SEARCH_SCOPE_VALUES, aW as SECURITY_FILTER_VALUES } from '../nitro/nitro.mjs';

var ViewModeToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ViewModeToggle",
	__ssrInlineRender: true,
	props: {
		"modelValue": { default: "cards" },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const viewMode = useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "inline-flex rounded-md border border-border p-0.5 bg-bg-subtle",
				role: "group",
				"aria-label": _ctx.$t("filters.view_mode.label")
			}, _attrs))}><button type="button" class="${ssrRenderClass([viewMode.value === "cards" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "inline-flex items-center px-2.5 py-1.5 text-sm font-medium rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", viewMode.value === "cards")}${ssrRenderAttr("aria-label", _ctx.$t("filters.view_mode.cards"))}><span class="i-carbon-horizontal-view w-4 h-4" aria-hidden="true"></span><span class="sr-only">${ssrInterpolate(_ctx.$t("filters.view_mode.cards"))}</span></button><button type="button" class="${ssrRenderClass([viewMode.value === "table" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "inline-flex items-center px-2.5 py-1.5 text-sm font-medium rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", viewMode.value === "table")}${ssrRenderAttr("aria-label", _ctx.$t("filters.view_mode.table"))}><span class="i-carbon-table-split w-4 h-4" aria-hidden="true"></span><span class="sr-only">${ssrInterpolate(_ctx.$t("filters.view_mode.table"))}</span></button></div>`);
		};
	}
});
var _sfc_setup$7 = ViewModeToggle_vue_vue_type_script_setup_true_lang_default.setup;
ViewModeToggle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ViewModeToggle.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var ViewModeToggle_default = Object.assign(ViewModeToggle_vue_vue_type_script_setup_true_lang_default, { __name: "ViewModeToggle" });
var ColumnPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ColumnPicker",
	__ssrInlineRender: true,
	props: { columns: {} },
	emits: ["toggle", "reset"],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const isOpen = shallowRef(false);
		const buttonRef = useTemplateRef("buttonRef");
		const menuRef = useTemplateRef("menuRef");
		const menuId = useId();
		onClickOutside(menuRef, () => {
			isOpen.value = false;
		}, { ignore: [buttonRef] });
		onKeyDown("Escape", (e) => {
			if (!isOpen.value) return;
			isOpen.value = false;
			buttonRef.value?.focus();
		}, { dedupe: true });
		const toggleableColumns = computed(() => props.columns.filter((col) => col.id !== "name"));
		const columnLabelKey = {
			name: "filters.columns.name",
			version: "filters.columns.version",
			description: "filters.columns.description",
			downloads: "filters.columns.downloads",
			updated: "filters.columns.published",
			maintainers: "filters.columns.maintainers",
			keywords: "filters.columns.keywords",
			qualityScore: "filters.columns.quality_score",
			popularityScore: "filters.columns.popularity_score",
			maintenanceScore: "filters.columns.maintenance_score",
			combinedScore: "filters.columns.combined_score",
			security: "filters.columns.security"
		};
		function getColumnLabel(id) {
			const key = columnLabelKey[id];
			return key ? $t(key) : id;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-e20083a1><button type="button" class="btn-ghost inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md hover:border-border-hover focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-haspopup="true"${ssrRenderAttr("aria-controls", unref(menuId))} data-v-e20083a1><span class="i-carbon-column w-4 h-4" aria-hidden="true" data-v-e20083a1></span><span class="font-mono text-sm" data-v-e20083a1>${ssrInterpolate(unref($t)("filters.columns.title"))}</span></button>`);
			if (unref(isOpen)) {
				_push(`<div${ssrRenderAttr("id", unref(menuId))} class="absolute inset-is-0 sm:inset-is-auto sm:inset-ie-0 mt-2 w-60 bg-bg-subtle border border-border rounded-lg shadow-lg z-20" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.columns.show"))} data-v-e20083a1><div class="py-1" data-v-e20083a1><div class="px-3 py-2 text-xs font-mono text-fg-subtle uppercase tracking-wider border-b border-border" aria-hidden="true" data-v-e20083a1>${ssrInterpolate(unref($t)("filters.columns.show"))}</div><div class="py-1 max-h-64 overflow-y-auto" data-v-e20083a1><!--[-->`);
				ssrRenderList(unref(toggleableColumns), (column) => {
					_push(`<label class="${ssrRenderClass([column.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-bg-muted cursor-pointer", "flex gap-2 items-center px-3 py-2 transition-colors duration-200"])}" data-v-e20083a1><input type="checkbox"${ssrIncludeBooleanAttr(column.visible) ? " checked" : ""}${ssrIncludeBooleanAttr(column.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-describedby", column.disabled ? `${column.id}-disabled-reason` : void 0)} class="w-4 h-4 accent-fg bg-bg-muted border-border rounded disabled:opacity-50" data-v-e20083a1><span class="text-sm text-fg-muted font-mono flex-1" data-v-e20083a1>${ssrInterpolate(getColumnLabel(column.id))}</span>`);
					if (column.disabled) _push(ssrRenderComponent(_component_TooltipApp, {
						id: `${column.id}-disabled-reason`,
						class: "text-fg-subtle",
						text: unref($t)("filters.columns.coming_soon"),
						position: "left"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="size-4 flex justify-center items-center text-xs border rounded-full" data-v-e20083a1${_scopeId}>i</span>`);
							else return [createVNode("span", { class: "size-4 flex justify-center items-center text-xs border rounded-full" }, "i")];
						}),
						_: 2
					}, _parent));
					else _push(`<!---->`);
					_push(`</label>`);
				});
				_push(`<!--]--></div><div class="border-t border-border py-1" data-v-e20083a1><button type="button" class="w-full px-3 py-2 text-start text-sm font-mono text-fg-muted hover:bg-bg-muted hover:text-fg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset" data-v-e20083a1>${ssrInterpolate(unref($t)("filters.columns.reset"))}</button></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$6 = ColumnPicker_vue_vue_type_script_setup_true_lang_default.setup;
ColumnPicker_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColumnPicker.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var ColumnPicker_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ColumnPicker_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e20083a1"]]), { __name: "ColumnPicker" });
var RadioButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RadioButton",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		disabled: { type: Boolean },
		type: {},
		checked: {},
		value: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const props = __props;
		const uid = useId();
		const internalId = `${model.value}-${uid}`;
		const checked = computed(() => model.value === props.value);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><input type="radio"${ssrRenderAttr("id", internalId)}${ssrRenderAttr("value", props.value)}${ssrIncludeBooleanAttr(unref(checked)) ? " checked" : ""}${ssrIncludeBooleanAttr(props.disabled ? true : void 0) ? " disabled" : ""} class="peer sr-only"><label class="bg-bg-muted text-fg-muted border-border hover:text-fg hover:border-border-hover inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-fg border-none peer-checked:bg-fg peer-checked:text-bg peer-checked:border-fg peer-checked:hover:text-text-bg/50 peer-disabled:opacity-50 peer-disabled:pointer-events-none"${ssrRenderAttr("htmlFor", internalId)}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</label></div>`);
		};
	}
});
var _sfc_setup$5 = RadioButton_vue_vue_type_script_setup_true_lang_default.setup;
RadioButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/RadioButton.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var RadioButton_default = Object.assign(RadioButton_vue_vue_type_script_setup_true_lang_default, { __name: "TagRadioButton" });
var Panel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Panel",
	__ssrInlineRender: true,
	props: {
		filters: {},
		availableKeywords: {}
	},
	emits: [
		"update:text",
		"update:searchScope",
		"update:downloadRange",
		"update:security",
		"update:updatedWithin",
		"toggleKeyword"
	],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const emit = __emit;
		const isExpanded = shallowRef(false);
		const showAllKeywords = shallowRef(false);
		const displayedKeywords = computed(() => {
			const keywords = props.availableKeywords ?? [];
			return showAllKeywords.value ? keywords : keywords.slice(0, 20);
		});
		const searchPlaceholder = computed(() => {
			switch (props.filters.searchScope) {
				case "name": return $t("filters.search_placeholder_name");
				case "description": return $t("filters.search_placeholder_description");
				case "keywords": return $t("filters.search_placeholder_keywords");
				case "all": return $t("filters.search_placeholder_all");
				default: return $t("filters.search_placeholder_name");
			}
		});
		const hasMoreKeywords = computed(() => {
			return !showAllKeywords.value && (props.availableKeywords?.length ?? 0) > 20;
		});
		const scopeLabelKeys = {
			name: "filters.scope_name",
			description: "filters.scope_description",
			keywords: "filters.scope_keywords",
			all: "filters.scope_all"
		};
		const scopeDescriptionKeys = {
			name: "filters.scope_name_description",
			description: "filters.scope_description_description",
			keywords: "filters.scope_keywords_description",
			all: "filters.scope_all_description"
		};
		const downloadRangeLabelKeys = {
			"any": "filters.download_range.any",
			"lt100": "filters.download_range.lt100",
			"100-1k": "filters.download_range.100_1k",
			"1k-10k": "filters.download_range.1k_10k",
			"10k-100k": "filters.download_range.10k_100k",
			"gt100k": "filters.download_range.gt100k"
		};
		const updatedWithinLabelKeys = {
			any: "filters.updated.any",
			week: "filters.updated.week",
			month: "filters.updated.month",
			quarter: "filters.updated.quarter",
			year: "filters.updated.year"
		};
		const securityLabelKeys = {
			all: "filters.security_options.all",
			secure: "filters.security_options.secure",
			warnings: "filters.security_options.insecure"
		};
		function getScopeLabelKey(value) {
			return scopeLabelKeys[value];
		}
		function getScopeDescriptionKey(value) {
			return scopeDescriptionKeys[value];
		}
		function getDownloadRangeLabelKey(value) {
			return downloadRangeLabelKeys[value];
		}
		function getUpdatedWithinLabelKey(value) {
			return updatedWithinLabelKeys[value];
		}
		function getSecurityLabelKey(value) {
			return securityLabelKeys[value];
		}
		const filterSummary = computed(() => {
			const parts = [];
			if (props.filters.text) if (props.filters.searchScope === "all") parts.push(props.filters.text);
			else {
				const op = {
					name: "name",
					description: "desc",
					keywords: "kw"
				}[props.filters.searchScope] ?? "name";
				parts.push(`${op}:${props.filters.text}`);
			}
			if (props.filters.keywords.length > 0) parts.push(`kw:${props.filters.keywords.join(",")}`);
			if (props.filters.downloadRange !== "any") parts.push(`dl:${props.filters.downloadRange}`);
			if (props.filters.updatedWithin !== "any") parts.push(`updated:${props.filters.updatedWithin}`);
			if (props.filters.security !== "all") {
				const label = props.filters.security === "secure" ? "secure" : "warnings";
				parts.push(`security:${label}`);
			}
			return parts.length > 0 ? parts.join(" ") : null;
		});
		const hasActiveFilters = computed(() => !!filterSummary.value);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TagRadioButton = RadioButton_default;
			const _component_TagButton = Button_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-border rounded-lg bg-bg-subtle" }, _attrs))} data-v-7e4fd189><button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-start hover:bg-bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset"${ssrRenderAttr("aria-expanded", unref(isExpanded))} data-v-7e4fd189><span class="flex items-center gap-2 text-sm font-mono text-fg shrink-0" data-v-7e4fd189><span class="i-carbon-filter w-4 h-4" aria-hidden="true" data-v-7e4fd189></span> ${ssrInterpolate(unref($t)("filters.title"))}</span>`);
			if (!unref(isExpanded) && unref(hasActiveFilters)) _push(`<span class="text-xs font-mono text-fg-muted truncate" data-v-7e4fd189>${ssrInterpolate(unref(filterSummary))}</span>`);
			else _push(`<!---->`);
			_push(`<span class="${ssrRenderClass([{ "rotate-180": unref(isExpanded) }, "i-carbon-chevron-down w-4 h-4 text-fg-subtle transition-transform duration-200 shrink-0 ms-auto"])}" aria-hidden="true" data-v-7e4fd189></span></button>`);
			if (unref(isExpanded)) {
				_push(`<div class="px-4 pb-5 border-t border-border" data-v-7e4fd189><div class="pt-4" data-v-7e4fd189><div class="flex items-center gap-3 mb-1" data-v-7e4fd189><label for="filter-search" class="text-sm font-mono text-fg-muted" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.search"))}</label><div class="inline-flex rounded-md border border-border p-0.5 bg-bg" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.search_scope"))} data-v-7e4fd189><!--[-->`);
				ssrRenderList(unref(SEARCH_SCOPE_VALUES), (scope) => {
					_push(`<button type="button" class="${ssrRenderClass([__props.filters.searchScope === scope ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "px-2 py-0.5 text-xs font-mono rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", __props.filters.searchScope === scope)}${ssrRenderAttr("title", unref($t)(getScopeDescriptionKey(scope)))} data-v-7e4fd189>${ssrInterpolate(unref($t)(getScopeLabelKey(scope)))}</button>`);
				});
				_push(`<!--]--></div></div><input id="filter-search" type="text"${ssrRenderAttr("value", __props.filters.text)}${ssrRenderAttr("placeholder", unref(searchPlaceholder))} autocomplete="off" class="w-full bg-bg-subtle border border-border rounded-md px-4 py-3 font-mono text-sm text-fg placeholder:text-fg-subtle transition-all duration-200 focus:border-fg/40 focus:outline-none focus:ring-1 focus:ring-fg/10" data-v-7e4fd189></div><fieldset class="border-0 p-0 m-0 mt-4" data-v-7e4fd189><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.weekly_downloads"))}</legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.weekly_downloads"))} data-v-7e4fd189><!--[-->`);
				ssrRenderList(unref(DOWNLOAD_RANGES), (range) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: range.value,
						"model-value": __props.filters.downloadRange,
						value: range.value,
						"onUpdate:modelValue": ($event) => emit("update:downloadRange", $event),
						name: "range"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)(getDownloadRangeLabelKey(range.value)))}`);
							else return [createTextVNode(toDisplayString(unref($t)(getDownloadRangeLabelKey(range.value))), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset><fieldset class="border-0 p-0 m-0 mt-4" data-v-7e4fd189><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.updated_within"))}</legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.updated_within"))} data-v-7e4fd189><!--[-->`);
				ssrRenderList(unref(UPDATED_WITHIN_OPTIONS), (option) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: option.value,
						"model-value": __props.filters.updatedWithin,
						value: option.value,
						name: "updatedWithin",
						"onUpdate:modelValue": ($event) => emit("update:updatedWithin", $event)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)(getUpdatedWithinLabelKey(option.value)))}`);
							else return [createTextVNode(toDisplayString(unref($t)(getUpdatedWithinLabelKey(option.value))), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset><fieldset class="border-0 p-0 m-0 mt-4" data-v-7e4fd189><legend class="flex items-center gap-2 text-sm font-mono text-fg-muted mb-1" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.security"))} <span class="text-xs px-1.5 py-0.5 rounded bg-bg-muted text-fg-subtle" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.columns.coming_soon"))}</span></legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.security"))} data-v-7e4fd189><!--[-->`);
				ssrRenderList(unref(SECURITY_FILTER_VALUES), (security) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: security,
						disabled: "",
						"model-value": __props.filters.security,
						value: security,
						name: "security"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)(getSecurityLabelKey(security)))}`);
							else return [createTextVNode(toDisplayString(unref($t)(getSecurityLabelKey(security))), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset>`);
				if (unref(displayedKeywords).length > 0) {
					_push(`<fieldset class="border-0 p-0 m-0 mt-4" data-v-7e4fd189><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.keywords"))}</legend><div class="flex flex-wrap gap-1.5" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.keywords"))} data-v-7e4fd189><!--[-->`);
					ssrRenderList(unref(displayedKeywords), (keyword) => {
						_push(ssrRenderComponent(_component_TagButton, {
							key: keyword,
							pressed: __props.filters.keywords.includes(keyword),
							onClick: ($event) => emit("toggleKeyword", keyword)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(keyword)}`);
								else return [createTextVNode(toDisplayString(keyword), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]-->`);
					if (unref(hasMoreKeywords)) _push(`<button type="button" class="text-xs text-fg-subtle self-center font-mono hover:text-fg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1" data-v-7e4fd189>${ssrInterpolate(unref($t)("filters.more_keywords", { count: (__props.availableKeywords?.length ?? 0) - 20 }))}</button>`);
					else _push(`<!---->`);
					_push(`</div></fieldset>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$4 = Panel_vue_vue_type_script_setup_true_lang_default.setup;
Panel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Panel.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Panel_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Panel_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7e4fd189"]]), { __name: "FilterPanel" });
var Static_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Static",
	__ssrInlineRender: true,
	props: { as: { default: "span" } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({ class: "inline-flex items-center px-2 py-0.5 text-xs font-mono text-fg-muted bg-bg-muted border border-border rounded" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
var _sfc_setup$3 = Static_vue_vue_type_script_setup_true_lang_default.setup;
Static_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/Static.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Static_default = Object.assign(Static_vue_vue_type_script_setup_true_lang_default, { __name: "TagStatic" });
var Chips_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Chips",
	__ssrInlineRender: true,
	props: { chips: {} },
	emits: ["remove", "clearAll"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TagStatic = Static_default;
			if (__props.chips.length > 0) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2" }, _attrs))} data-v-63574b60><!--[-->`);
				ssrRenderList(__props.chips, (chip) => {
					_push(ssrRenderComponent(_component_TagStatic, {
						key: chip.id,
						class: "gap-1"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="text-fg-subtle text-xs" data-v-63574b60${_scopeId}>${ssrInterpolate(chip.label)}:</span><span class="max-w-32 truncate" data-v-63574b60${_scopeId}>${ssrInterpolate(Array.isArray(chip.value) ? chip.value.join(", ") : chip.value)}</span><button type="button" class="flex items-center ms-0.5 hover:text-fg rounded-full p-0.5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrRenderAttr("aria-label", _ctx.$t("filters.remove_filter", { label: chip.label }))} data-v-63574b60${_scopeId}><span class="i-carbon-close w-3 h-3" aria-hidden="true" data-v-63574b60${_scopeId}></span></button>`);
							else return [
								createVNode("span", { class: "text-fg-subtle text-xs" }, toDisplayString(chip.label) + ":", 1),
								createVNode("span", { class: "max-w-32 truncate" }, toDisplayString(Array.isArray(chip.value) ? chip.value.join(", ") : chip.value), 1),
								createVNode("button", {
									type: "button",
									class: "flex items-center ms-0.5 hover:text-fg rounded-full p-0.5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1",
									"aria-label": _ctx.$t("filters.remove_filter", { label: chip.label }),
									onClick: ($event) => emit("remove", chip)
								}, [createVNode("span", {
									class: "i-carbon-close w-3 h-3",
									"aria-hidden": "true"
								})], 8, ["aria-label", "onClick"])
							];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				if (__props.chips.length > 1) _push(`<button type="button" class="text-sm text-fg-subtle hover:text-fg underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2" data-v-63574b60>${ssrInterpolate(_ctx.$t("filters.clear_all"))}</button>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
var _sfc_setup$2 = Chips_vue_vue_type_script_setup_true_lang_default.setup;
Chips_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Chips.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Chips_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Chips_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-63574b60"]]), { __name: "FilterChips" });
var ListToolbar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ListToolbar",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		filters: {},
		columns: {},
		totalCount: {},
		filteredCount: {},
		availableKeywords: {},
		activeFilters: {},
		searchContext: { type: Boolean }
	}, {
		"sortOption": { required: true },
		"sortOptionModifiers": {},
		"viewMode": { required: true },
		"viewModeModifiers": {},
		"paginationMode": { required: true },
		"paginationModeModifiers": {},
		"pageSize": { required: true },
		"pageSizeModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"toggleColumn",
		"resetColumns",
		"clearFilter",
		"clearAllFilters",
		"update:text",
		"update:searchScope",
		"update:downloadRange",
		"update:security",
		"update:updatedWithin",
		"toggleKeyword"
	], [
		"update:sortOption",
		"update:viewMode",
		"update:paginationMode",
		"update:pageSize"
	]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const sortOption = useModel(__props, "sortOption");
		const viewMode = useModel(__props, "viewMode");
		const paginationMode = useModel(__props, "paginationMode");
		const pageSize = useModel(__props, "pageSize");
		const emit = __emit;
		const showingFiltered = computed(() => props.filteredCount !== props.totalCount);
		const currentSort = computed(() => parseSortOption(sortOption.value));
		const availableSortKeys = computed(() => {
			if (props.searchContext) return SORT_KEYS.filter((k) => !k.searchOnly || k.key === "relevance").map((k) => Object.assign({}, k, { disabled: k.key !== "relevance" }));
			return SORT_KEYS.filter((k) => !k.searchOnly);
		});
		const sortKeyLabelKeys = {
			"relevance": "filters.sort.relevance",
			"downloads-week": "filters.sort.downloads_week",
			"downloads-day": "filters.sort.downloads_day",
			"downloads-month": "filters.sort.downloads_month",
			"downloads-year": "filters.sort.downloads_year",
			"updated": "filters.sort.published",
			"name": "filters.sort.name",
			"quality": "filters.sort.quality",
			"popularity": "filters.sort.popularity",
			"maintenance": "filters.sort.maintenance",
			"score": "filters.sort.score"
		};
		function getSortKeyLabelKey(key) {
			return sortKeyLabelKeys[key];
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ViewModeToggle = ViewModeToggle_default;
			const _component_ColumnPicker = ColumnPicker_default;
			const _component_FilterPanel = Panel_default;
			const _component_FilterChips = Chips_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3 mb-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center gap-3">`);
			if (viewMode.value === "cards" && paginationMode.value === "infinite" && !__props.searchContext) {
				_push(`<div class="text-sm font-mono text-fg-muted">`);
				if (unref(showingFiltered)) _push(`<!--[-->${ssrInterpolate(_ctx.$t("filters.count.showing_filtered", {
					filtered: _ctx.$n(__props.filteredCount),
					count: _ctx.$n(__props.totalCount)
				}, __props.totalCount))}<!--]-->`);
				else _push(`<!--[-->${ssrInterpolate(_ctx.$t("filters.count.showing_all", { count: _ctx.$n(__props.totalCount) }, __props.totalCount))}<!--]-->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			if ((viewMode.value === "table" || paginationMode.value === "paginated") && !__props.searchContext) _push(`<div class="text-sm font-mono text-fg-muted">${ssrInterpolate(_ctx.$t("filters.count.showing_paginated", {
				pageSize: pageSize.value === "all" ? _ctx.$n(__props.filteredCount) : pageSize.value,
				count: _ctx.$n(__props.filteredCount)
			}, __props.filteredCount))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="flex-1"></div><div class="flex flex-wrap items-center gap-3 sm:justify-end justify-between w-full sm:w-auto"><div class="flex items-center gap-1 shrink-0 order-1 sm:order-1"><div class="relative"><label for="sort-select" class="sr-only">${ssrInterpolate(_ctx.$t("filters.sort.label"))}</label><select id="sort-select"${ssrRenderAttr("value", unref(currentSort).key)} class="appearance-none bg-bg-subtle border border-border rounded-md ps-3 pe-8 py-1.5 font-mono text-sm text-fg cursor-pointer transition-colors duration-200 hover:border-border-hover"><!--[-->`);
			ssrRenderList(unref(availableSortKeys), (keyConfig) => {
				_push(`<option${ssrRenderAttr("value", keyConfig.key)}${ssrIncludeBooleanAttr(keyConfig.disabled) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t(getSortKeyLabelKey(keyConfig.key)))}</option>`);
			});
			_push(`<!--]--></select><div class="flex items-center absolute inset-ie-2 top-1/2 -translate-y-1/2 text-fg-subtle pointer-events-none" aria-hidden="true"><span class="i-carbon-chevron-down w-4 h-4"></span></div></div>`);
			if (!__props.searchContext) _push(`<button type="button" class="p-1.5 rounded border border-border bg-bg-subtle text-fg-muted hover:text-fg hover:border-border-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"${ssrRenderAttr("aria-label", _ctx.$t("filters.sort.toggle_direction"))}${ssrRenderAttr("title", unref(currentSort).direction === "asc" ? _ctx.$t("filters.sort.ascending") : _ctx.$t("filters.sort.descending"))}><span class="${ssrRenderClass([unref(currentSort).direction === "asc" ? "i-carbon-sort-ascending" : "i-carbon-sort-descending", "w-4 h-4 block transition-transform duration-200"])}" aria-hidden="true"></span></button>`);
			else _push(`<!---->`);
			_push(`</div><div class="flex sm:hidden items-center gap-1 order-2">`);
			_push(ssrRenderComponent(_component_ViewModeToggle, {
				modelValue: viewMode.value,
				"onUpdate:modelValue": ($event) => viewMode.value = $event
			}, null, _parent));
			_push(`</div>`);
			if (viewMode.value === "table") _push(ssrRenderComponent(_component_ColumnPicker, {
				class: "flex sm:hidden order-3",
				columns: __props.columns,
				onToggle: ($event) => emit("toggleColumn", $event),
				onReset: ($event) => emit("resetColumns")
			}, null, _parent));
			else _push(`<!---->`);
			_push(`<div class="hidden sm:flex items-center gap-1 order-2">`);
			_push(ssrRenderComponent(_component_ViewModeToggle, {
				modelValue: viewMode.value,
				"onUpdate:modelValue": ($event) => viewMode.value = $event
			}, null, _parent));
			if (viewMode.value === "table") _push(ssrRenderComponent(_component_ColumnPicker, {
				columns: __props.columns,
				onToggle: ($event) => emit("toggleColumn", $event),
				onReset: ($event) => emit("resetColumns")
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div></div></div>`);
			if (!__props.searchContext) _push(ssrRenderComponent(_component_FilterPanel, {
				filters: __props.filters,
				"available-keywords": __props.availableKeywords,
				"onUpdate:text": ($event) => emit("update:text", $event),
				"onUpdate:searchScope": ($event) => emit("update:searchScope", $event),
				"onUpdate:downloadRange": ($event) => emit("update:downloadRange", $event),
				"onUpdate:security": ($event) => emit("update:security", $event),
				"onUpdate:updatedWithin": ($event) => emit("update:updatedWithin", $event),
				onToggleKeyword: ($event) => emit("toggleKeyword", $event)
			}, null, _parent));
			else _push(`<!---->`);
			if (!__props.searchContext) _push(ssrRenderComponent(_component_FilterChips, {
				chips: __props.activeFilters,
				onRemove: ($event) => emit("clearFilter", $event),
				onClearAll: ($event) => emit("clearAllFilters")
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$1 = ListToolbar_vue_vue_type_script_setup_true_lang_default.setup;
ListToolbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/ListToolbar.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ListToolbar_default = Object.assign(ListToolbar_vue_vue_type_script_setup_true_lang_default, { __name: "PackageListToolbar" });
var PaginationControls_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationControls",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		totalItems: {},
		viewMode: {}
	}, {
		"mode": { required: true },
		"modeModifiers": {},
		"pageSize": { required: true },
		"pageSizeModifiers": {},
		"currentPage": { required: true },
		"currentPageModifiers": {}
	}),
	emits: [
		"update:mode",
		"update:pageSize",
		"update:currentPage"
	],
	setup(__props) {
		const props = __props;
		const mode = useModel(__props, "mode");
		const pageSize = useModel(__props, "pageSize");
		const currentPage = useModel(__props, "currentPage");
		const shouldShowControls = computed(() => props.viewMode === "table" || mode.value === "paginated");
		const effectiveMode = computed(() => shouldShowControls.value ? "paginated" : "infinite");
		const isShowingAll = computed(() => pageSize.value === "all");
		const totalPages = computed(() => isShowingAll.value ? 1 : Math.ceil(props.totalItems / pageSize.value));
		const showModeToggle = computed(() => props.viewMode !== "table");
		const startItem = computed(() => {
			if (props.totalItems === 0) return 0;
			if (isShowingAll.value) return 1;
			return (currentPage.value - 1) * pageSize.value + 1;
		});
		const endItem = computed(() => {
			if (isShowingAll.value) return props.totalItems;
			return Math.min(currentPage.value * pageSize.value, props.totalItems);
		});
		const canGoPrev = computed(() => currentPage.value > 1);
		const canGoNext = computed(() => currentPage.value < totalPages.value);
		const visiblePages = computed(() => {
			const total = totalPages.value;
			const current = currentPage.value;
			const pages = [];
			if (total <= 7) for (let i = 1; i <= total; i++) pages.push(i);
			else {
				pages.push(1);
				if (current > 3) pages.push("ellipsis");
				const start = Math.max(2, current - 1);
				const end = Math.min(total - 1, current + 1);
				for (let i = start; i <= end; i++) pages.push(i);
				if (current < total - 2) pages.push("ellipsis");
				if (total > 1) pages.push(total);
			}
			return pages;
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(shouldShowControls)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center justify-between gap-4 py-4 border-t border-border mt-6" }, _attrs))}><div class="flex items-center gap-4">`);
				if (unref(showModeToggle)) _push(`<div class="inline-flex rounded-md border border-border p-0.5 bg-bg-subtle" role="group"${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.mode_label"))}><button type="button" class="${ssrRenderClass([mode.value === "infinite" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "px-2.5 py-1 text-xs font-mono rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", mode.value === "infinite")}>${ssrInterpolate(_ctx.$t("filters.pagination.infinite"))}</button><button type="button" class="${ssrRenderClass([mode.value === "paginated" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "px-2.5 py-1 text-xs font-mono rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", mode.value === "paginated")}>${ssrInterpolate(_ctx.$t("filters.pagination.paginated"))}</button></div>`);
				else _push(`<!---->`);
				if (unref(effectiveMode) === "paginated") {
					_push(`<div class="relative shrink-0"><label for="page-size" class="sr-only">${ssrInterpolate(_ctx.$t("filters.pagination.items_per_page"))}</label><select id="page-size"${ssrRenderAttr("value", pageSize.value)} class="appearance-none bg-bg-subtle border border-border rounded-md ps-3 pe-8 py-1 font-mono text-sm text-fg cursor-pointer transition-colors duration-200 hover:border-border-hover"><!--[-->`);
					ssrRenderList(unref(PAGE_SIZE_OPTIONS), (size) => {
						_push(`<option${ssrRenderAttr("value", size)}>${ssrInterpolate(size === "all" ? _ctx.$t("filters.pagination.all_yolo") : _ctx.$t("filters.pagination.per_page", { count: size }))}</option>`);
					});
					_push(`<!--]--></select><div class="flex items-center absolute inset-ie-2 top-1/2 -translate-y-1/2 text-fg-subtle pointer-events-none" aria-hidden="true"><span class="i-carbon-chevron-down w-3 h-3"></span></div></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
				if (unref(effectiveMode) === "paginated") {
					_push(`<div class="flex items-center gap-4"><span class="text-sm font-mono text-fg-muted">${ssrInterpolate(_ctx.$t("filters.pagination.showing", {
						start: unref(startItem),
						end: unref(endItem),
						total: _ctx.$n(__props.totalItems)
					}))}</span>`);
					if (unref(totalPages) > 1) {
						_push(`<nav class="flex items-center gap-1"${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.nav_label"))}><button type="button" class="p-1.5 rounded hover:bg-bg-muted text-fg-muted hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrIncludeBooleanAttr(!unref(canGoPrev)) ? " disabled" : ""}${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.previous"))}><span class="i-carbon-chevron-left w-4 h-4" aria-hidden="true"></span></button><!--[-->`);
						ssrRenderList(unref(visiblePages), (page, idx) => {
							_push(`<!--[-->`);
							if (page === "ellipsis") _push(`<span class="px-2 text-fg-subtle font-mono">…</span>`);
							else _push(`<button type="button" class="${ssrRenderClass([page === currentPage.value ? "bg-fg text-bg" : "text-fg-muted hover:text-fg hover:bg-bg-muted", "min-w-[32px] h-8 px-2 font-mono text-sm rounded transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-current", page === currentPage.value ? "page" : void 0)}>${ssrInterpolate(page)}</button>`);
							_push(`<!--]-->`);
						});
						_push(`<!--]--><button type="button" class="p-1.5 rounded hover:bg-bg-muted text-fg-muted hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrIncludeBooleanAttr(!unref(canGoNext)) ? " disabled" : ""}${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.next"))}><span class="i-carbon-chevron-right w-4 h-4" aria-hidden="true"></span></button></nav>`);
					} else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
var _sfc_setup = PaginationControls_vue_vue_type_script_setup_true_lang_default.setup;
PaginationControls_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaginationControls.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PaginationControls_default = Object.assign(PaginationControls_vue_vue_type_script_setup_true_lang_default, { __name: "PaginationControls" });
function createLocalStorageProvider(key) {
	return {
		get: () => {
			return null;
		},
		set: (value) => {},
		remove: () => {}
	};
}
function usePreferencesProvider(defaultValue) {
	const provider = createLocalStorageProvider();
	const data = ref(defaultValue);
	const isHydrated = shallowRef(false);
	function save() {
		provider.set(data.value);
	}
	function reset() {
		data.value = { ...defaultValue };
	}
	function update(key, value) {
		data.value[key] = value;
		save();
	}
	return {
		data,
		isHydrated,
		save,
		reset,
		update
	};
}
function usePackageListPreferences() {
	const { data: preferences, isHydrated, save, reset } = usePreferencesProvider(DEFAULT_PREFERENCES);
	const viewMode = computed({
		get: () => preferences.value.viewMode,
		set: (value) => {
			preferences.value.viewMode = value;
			save();
		}
	});
	const paginationMode = computed({
		get: () => preferences.value.paginationMode,
		set: (value) => {
			preferences.value.paginationMode = value;
			save();
		}
	});
	const pageSize = computed({
		get: () => preferences.value.pageSize,
		set: (value) => {
			preferences.value.pageSize = value;
			save();
		}
	});
	const columns = computed({
		get: () => preferences.value.columns,
		set: (value) => {
			preferences.value.columns = value;
			save();
		}
	});
	const visibleColumns = computed(() => columns.value.filter((col) => col.visible));
	function setColumnVisibility(columnId, visible) {
		const column = columns.value.find((col) => col.id === columnId);
		if (column) {
			column.visible = visible;
			save();
		}
	}
	function toggleColumn(columnId) {
		const column = columns.value.find((col) => col.id === columnId);
		if (column) {
			column.visible = !column.visible;
			save();
		}
	}
	function resetColumns() {
		preferences.value.columns = DEFAULT_COLUMNS.map((col) => Object.assign({}, col));
		save();
	}
	function isColumnVisible(columnId) {
		return columns.value.find((col) => col.id === columnId)?.visible ?? false;
	}
	return {
		preferences,
		isHydrated,
		viewMode,
		paginationMode,
		pageSize,
		columns,
		visibleColumns,
		setColumnVisibility,
		toggleColumn,
		resetColumns,
		isColumnVisible,
		reset
	};
}
function parseSearchOperators(input) {
	const result = {};
	const operatorRegex = /\b(name|desc|description|kw|keyword):([^\s]+)/gi;
	let remaining = input;
	let match;
	while ((match = operatorRegex.exec(input)) !== null) {
		const [fullMatch, operator, value] = match;
		if (!operator || !value) continue;
		const values = value.split(",").map((v) => v.trim()).filter(Boolean);
		const normalizedOp = operator.toLowerCase();
		if (normalizedOp === "name") result.name = [...result.name ?? [], ...values];
		else if (normalizedOp === "desc" || normalizedOp === "description") result.description = [...result.description ?? [], ...values];
		else if (normalizedOp === "kw" || normalizedOp === "keyword") result.keywords = [...result.keywords ?? [], ...values];
		remaining = remaining.replace(fullMatch, "");
	}
	const cleanedText = remaining.trim().replace(/\s+/g, " ");
	if (cleanedText) result.text = cleanedText;
	return result;
}
function hasSearchOperators(parsed) {
	return !!(parsed.name?.length || parsed.description?.length || parsed.keywords?.length);
}
function matchesKeywords(pkg, keywords) {
	if (keywords.length === 0) return true;
	const pkgKeywords = new Set((pkg.package.keywords ?? []).map((k) => k.toLowerCase()));
	return keywords.every((k) => pkgKeywords.has(k.toLowerCase()));
}
function matchesSecurity(pkg, security) {
	if (security === "all") return true;
	const hasWarnings = (pkg.flags?.insecure ?? 0) > 0;
	if (security === "secure") return !hasWarnings;
	if (security === "warnings") return hasWarnings;
	return true;
}
function useStructuredFilters(options) {
	const route = useRoute$1();
	const router = useRouter$1();
	const { packages, initialFilters, initialSort } = options;
	const { t } = useI18n();
	const searchQuery = shallowRef(normalizeSearchParam(route.query.q));
	watch(() => route.query.q, (urlQuery) => {
		const value = normalizeSearchParam(urlQuery);
		if (searchQuery.value !== value) searchQuery.value = value;
	});
	const filters = ref({
		...DEFAULT_FILTERS,
		...initialFilters
	});
	const sortOption = shallowRef(initialSort ?? "updated-desc");
	const availableKeywords = computed(() => {
		const keywordCounts = /* @__PURE__ */ new Map();
		for (const pkg of packages.value) {
			const keywords = pkg.package.keywords ?? [];
			for (const keyword of keywords) keywordCounts.set(keyword, (keywordCounts.get(keyword) ?? 0) + 1);
		}
		return Array.from(keywordCounts.entries()).sort((a, b) => b[1] - a[1]).map(([keyword]) => keyword);
	});
	function matchesTextFilter(pkg, text, scope) {
		if (!text) return true;
		const pkgName = pkg.package.name.toLowerCase();
		const pkgDescription = (pkg.package.description ?? "").toLowerCase();
		const pkgKeywords = (pkg.package.keywords ?? []).map((k) => k.toLowerCase());
		if (scope === "all") {
			const parsed = parseSearchOperators(text);
			if (hasSearchOperators(parsed)) {
				if (parsed.name?.length) {
					if (!parsed.name.some((n) => pkgName.includes(n.toLowerCase()))) return false;
				}
				if (parsed.description?.length) {
					if (!parsed.description.some((d) => pkgDescription.includes(d.toLowerCase()))) return false;
				}
				if (parsed.keywords?.length) {
					if (!parsed.keywords.some((kw) => pkgKeywords.some((pk) => pk.includes(kw.toLowerCase())))) return false;
				}
				if (parsed.text) {
					const textLower = parsed.text.toLowerCase();
					if (!(pkgName.includes(textLower) || pkgDescription.includes(textLower) || pkgKeywords.some((k) => k.includes(textLower)))) return false;
				}
				return true;
			}
			const lower = text.toLowerCase();
			return pkgName.includes(lower) || pkgDescription.includes(lower) || pkgKeywords.some((k) => k.includes(lower));
		}
		const lower = text.toLowerCase();
		switch (scope) {
			case "name": return pkgName.includes(lower);
			case "description": return pkgDescription.includes(lower);
			case "keywords": return pkgKeywords.some((k) => k.includes(lower));
			default: return pkgName.includes(lower);
		}
	}
	function matchesDownloadRange(pkg, range) {
		if (range === "any") return true;
		const downloads = pkg.downloads?.weekly ?? 0;
		const config = DOWNLOAD_RANGES.find((r) => r.value === range);
		if (!config) return true;
		if (config.min !== void 0 && downloads < config.min) return false;
		if (config.max !== void 0 && downloads >= config.max) return false;
		return true;
	}
	function matchesUpdatedWithin(pkg, within) {
		if (within === "any") return true;
		const config = UPDATED_WITHIN_OPTIONS.find((o) => o.value === within);
		if (!config?.days) return true;
		const updatedDate = new Date(pkg.package.date);
		const cutoff = /* @__PURE__ */ new Date();
		cutoff.setDate(cutoff.getDate() - config.days);
		return updatedDate >= cutoff;
	}
	const filteredPackages = computed(() => {
		return packages.value.filter((pkg) => {
			if (!matchesTextFilter(pkg, filters.value.text, filters.value.searchScope)) return false;
			if (!matchesDownloadRange(pkg, filters.value.downloadRange)) return false;
			if (!matchesKeywords(pkg, filters.value.keywords)) return false;
			if (!matchesSecurity(pkg, filters.value.security)) return false;
			if (!matchesUpdatedWithin(pkg, filters.value.updatedWithin)) return false;
			return true;
		});
	});
	function comparePackages(a, b, option) {
		const { key, direction } = parseSortOption(option);
		const multiplier = direction === "asc" ? 1 : -1;
		let diff;
		switch (key) {
			case "downloads-week":
				diff = (a.downloads?.weekly ?? 0) - (b.downloads?.weekly ?? 0);
				break;
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
			case "quality":
				diff = (a.score?.detail?.quality ?? 0) - (b.score?.detail?.quality ?? 0);
				break;
			case "popularity":
				diff = (a.score?.detail?.popularity ?? 0) - (b.score?.detail?.popularity ?? 0);
				break;
			case "maintenance":
				diff = (a.score?.detail?.maintenance ?? 0) - (b.score?.detail?.maintenance ?? 0);
				break;
			case "score":
				diff = (a.score?.final ?? 0) - (b.score?.final ?? 0);
				break;
			case "relevance":
				diff = 0;
				break;
			default: diff = 0;
		}
		return diff * multiplier;
	}
	const sortedPackages = computed(() => {
		return [...filteredPackages.value].sort((a, b) => comparePackages(a, b, sortOption.value));
	});
	const downloadRangeKeys = {
		"any": "filters.download_range.any",
		"lt100": "filters.download_range.lt100",
		"100-1k": "filters.download_range.100_1k",
		"1k-10k": "filters.download_range.1k_10k",
		"10k-100k": "filters.download_range.10k_100k",
		"gt100k": "filters.download_range.gt100k"
	};
	const securityKeys = {
		all: "filters.security_options.all",
		secure: "filters.security_options.secure",
		warnings: "filters.security_options.insecure"
	};
	const updatedWithinKeys = {
		any: "filters.updated.any",
		week: "filters.updated.week",
		month: "filters.updated.month",
		quarter: "filters.updated.quarter",
		year: "filters.updated.year"
	};
	const activeFilters = computed(() => {
		const chips = [];
		if (filters.value.text) chips.push({
			id: "text",
			type: "text",
			label: t("filters.chips.search"),
			value: filters.value.text
		});
		if (filters.value.downloadRange !== "any") chips.push({
			id: "downloadRange",
			type: "downloadRange",
			label: t("filters.chips.downloads"),
			value: t(downloadRangeKeys[filters.value.downloadRange])
		});
		for (const keyword of filters.value.keywords) chips.push({
			id: `keyword-${keyword}`,
			type: "keywords",
			label: t("filters.chips.keyword"),
			value: keyword
		});
		if (filters.value.security !== "all") chips.push({
			id: "security",
			type: "security",
			label: t("filters.chips.security"),
			value: t(securityKeys[filters.value.security])
		});
		if (filters.value.updatedWithin !== "any") chips.push({
			id: "updatedWithin",
			type: "updatedWithin",
			label: t("filters.chips.updated"),
			value: t(updatedWithinKeys[filters.value.updatedWithin])
		});
		return chips;
	});
	const hasActiveFilters = computed(() => activeFilters.value.length > 0);
	function setTextFilter(text) {
		filters.value.text = text;
	}
	function setSearchScope(scope) {
		filters.value.searchScope = scope;
	}
	function setDownloadRange(range) {
		filters.value.downloadRange = range;
	}
	function addKeyword(keyword) {
		if (!filters.value.keywords.includes(keyword)) {
			filters.value.keywords = [...filters.value.keywords, keyword];
			const newQ = searchQuery.value ? `${searchQuery.value.trim()} keyword:${keyword}` : `keyword:${keyword}`;
			router.replace({ query: {
				...route.query,
				q: newQ
			} });
		}
	}
	function removeKeyword(keyword) {
		filters.value.keywords = filters.value.keywords.filter((k) => k !== keyword);
		const newQ = searchQuery.value.replace(new RegExp(`keyword:${keyword}($| )`, "g"), "").trim();
		router.replace({ query: {
			...route.query,
			q: newQ || void 0
		} });
	}
	function toggleKeyword(keyword) {
		if (filters.value.keywords.includes(keyword)) removeKeyword(keyword);
		else addKeyword(keyword);
	}
	function setSecurity(security) {
		filters.value.security = security;
	}
	function setUpdatedWithin(within) {
		filters.value.updatedWithin = within;
	}
	function clearFilter(chip) {
		switch (chip.type) {
			case "text":
				filters.value.text = "";
				break;
			case "downloadRange":
				filters.value.downloadRange = "any";
				break;
			case "keywords":
				removeKeyword(chip.value);
				break;
			case "security":
				filters.value.security = "all";
				break;
			case "updatedWithin":
				filters.value.updatedWithin = "any";
				break;
		}
	}
	function clearAllFilters() {
		filters.value = { ...DEFAULT_FILTERS };
	}
	function setSort(option) {
		sortOption.value = option;
	}
	return {
		filters,
		sortOption,
		filteredPackages,
		sortedPackages,
		availableKeywords,
		activeFilters,
		hasActiveFilters,
		setTextFilter,
		setSearchScope,
		setDownloadRange,
		addKeyword,
		removeKeyword,
		toggleKeyword,
		setSecurity,
		setUpdatedWithin,
		clearFilter,
		clearAllFilters,
		setSort
	};
}

export { ListToolbar_default as L, PaginationControls_default as P, useStructuredFilters as a, parseSearchOperators as p, usePackageListPreferences as u };
//# sourceMappingURL=useStructuredFilters-CmF9SRZE.mjs.map

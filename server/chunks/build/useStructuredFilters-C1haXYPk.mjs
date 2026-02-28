import { g as useRoute, a as useRouter, u as useI18n, _ as _plugin_vue_export_helper_default, C as onClickOutside, v as onKeyDown, o as Base_default, m as Base_default$1 } from './server.mjs';
import { A as App_default, S as Static_default } from './App-B-_OJFKC.mjs';
import { F as Field_default } from './Field-BBRX0YgS.mjs';
import { computed, shallowRef, ref, watch, defineComponent, useModel, mergeProps, unref, isRef, mergeModels, useTemplateRef, useId, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { aB as normalizeSearchParam, aE as DEFAULT_FILTERS, aF as DEFAULT_PREFERENCES, aG as DEFAULT_COLUMNS, aH as DOWNLOAD_RANGES, aI as UPDATED_WITHIN_OPTIONS, aD as parseSortOption, aJ as SORT_KEYS, aK as buildSortOption, aL as PAGE_SIZE_OPTIONS, aM as SEARCH_SCOPE_VALUES, aN as SECURITY_FILTER_VALUES } from '../nitro/nitro.mjs';

var ColumnPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ColumnPicker",
	__ssrInlineRender: true,
	props: { columns: {} },
	emits: ["toggle", "reset"],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const emit = __emit;
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
		const columnLabels = computed(() => ({
			name: $t("filters.columns.name"),
			version: $t("filters.columns.version"),
			description: $t("filters.columns.description"),
			downloads: $t("filters.columns.downloads"),
			updated: $t("filters.columns.published"),
			maintainers: $t("filters.columns.maintainers"),
			keywords: $t("filters.columns.keywords"),
			qualityScore: $t("filters.columns.quality_score"),
			popularityScore: $t("filters.columns.popularity_score"),
			maintenanceScore: $t("filters.columns.maintenance_score"),
			combinedScore: $t("filters.columns.combined_score"),
			security: $t("filters.columns.security")
		}));
		function getColumnLabel(id) {
			return columnLabels.value[id] ?? id;
		}
		function handleReset() {
			emit("reset");
			isOpen.value = false;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default;
			const _component_TooltipApp = App_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-7a38e890>`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				ref_key: "buttonRef",
				ref: buttonRef,
				"aria-expanded": unref(isOpen),
				"aria-haspopup": "true",
				"aria-controls": unref(menuId),
				onClick: ($event) => isOpen.value = !unref(isOpen),
				classicon: "i-lucide:columns-3-cog"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("filters.columns.title"))}`);
					else return [createTextVNode(toDisplayString(unref($t)("filters.columns.title")), 1)];
				}),
				_: 1
			}, _parent));
			if (unref(isOpen)) {
				_push(`<div${ssrRenderAttr("id", unref(menuId))} class="absolute top-full inset-is-auto sm:inset-ie-0 mt-2 w-60 bg-bg-subtle border border-border rounded-lg shadow-lg z-20" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.columns.show"))} data-v-7a38e890><div class="py-1" data-v-7a38e890><div class="px-3 py-2 text-xs font-mono text-fg-subtle uppercase tracking-wider border-b border-border" aria-hidden="true" data-v-7a38e890>${ssrInterpolate(unref($t)("filters.columns.show"))}</div><div class="py-1 max-h-64 overflow-y-auto" data-v-7a38e890><!--[-->`);
				ssrRenderList(unref(toggleableColumns), (column) => {
					_push(`<label class="${ssrRenderClass([column.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-bg-muted", "flex gap-2 items-center px-3 py-2 transition-colors duration-200"])}" data-v-7a38e890><input type="checkbox"${ssrIncludeBooleanAttr(column.visible) ? " checked" : ""}${ssrIncludeBooleanAttr(column.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-describedby", column.disabled ? `${column.id}-disabled-reason` : void 0)} class="w-4 h-4 accent-fg bg-bg-muted border-border rounded disabled:opacity-50" data-v-7a38e890><span class="text-sm text-fg-muted font-mono flex-1" data-v-7a38e890>${ssrInterpolate(getColumnLabel(column.id))}</span>`);
					if (column.disabled) _push(ssrRenderComponent(_component_TooltipApp, {
						id: `${column.id}-disabled-reason`,
						class: "text-fg-subtle",
						text: unref($t)("filters.columns.coming_soon"),
						position: "left"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="size-4 flex justify-center items-center text-xs border rounded-full" data-v-7a38e890${_scopeId}>i</span>`);
							else return [createVNode("span", { class: "size-4 flex justify-center items-center text-xs border rounded-full" }, "i")];
						}),
						_: 2
					}, _parent));
					else _push(`<!---->`);
					_push(`</label>`);
				});
				_push(`<!--]--></div><div class="border-t border-border py-1" data-v-7a38e890>`);
				_push(ssrRenderComponent(_component_ButtonBase, { onClick: handleReset }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("filters.columns.reset"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("filters.columns.reset")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></div>`);
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
var ColumnPicker_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ColumnPicker_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7a38e890"]]), { __name: "ColumnPicker" });
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
				class: "inline-flex rounded-md border border-border p-0.5 bg-bg-muted",
				role: "group",
				"aria-label": _ctx.$t("filters.view_mode.label")
			}, _attrs))}><button type="button" class="${ssrRenderClass([viewMode.value === "cards" ? "bg-bg-subtle text-fg border-fg-subtle" : "text-fg-muted hover:text-fg border-transparent", "inline-flex items-center px-2.5 py-1.5 text-sm font-medium rounded-sm border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", viewMode.value === "cards")}${ssrRenderAttr("aria-label", _ctx.$t("filters.view_mode.cards"))}><span class="i-lucide:rows-2 w-4 h-4" aria-hidden="true"></span><span class="sr-only">${ssrInterpolate(_ctx.$t("filters.view_mode.cards"))}</span></button><button type="button" class="${ssrRenderClass([viewMode.value === "table" ? "bg-bg-subtle  text-fg border-fg-subtle" : "text-fg-muted hover:text-fg border-transparent", "inline-flex items-center px-2.5 py-1.5 text-sm font-medium rounded-sm border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", viewMode.value === "table")}${ssrRenderAttr("aria-label", _ctx.$t("filters.view_mode.table"))}><span class="i-lucide:table w-4 h-4" aria-hidden="true"></span><span class="sr-only">${ssrInterpolate(_ctx.$t("filters.view_mode.table"))}</span></button></div>`);
		};
	}
});
var _sfc_setup$5 = ViewModeToggle_vue_vue_type_script_setup_true_lang_default.setup;
ViewModeToggle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ViewModeToggle.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ViewModeToggle_default = Object.assign(ViewModeToggle_vue_vue_type_script_setup_true_lang_default, { __name: "ViewModeToggle" });
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
			_push(`<div${ssrRenderAttrs(_attrs)}><input type="radio"${ssrRenderAttr("id", internalId)}${ssrRenderAttr("value", props.value)}${ssrIncludeBooleanAttr(unref(checked)) ? " checked" : ""}${ssrIncludeBooleanAttr(props.disabled ? true : void 0) ? " disabled" : ""} class="peer sr-only"><label class="bg-bg-muted text-fg-muted border-border hover:text-fg hover:border-border-hover inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded transition-colors duration-200 peer-focus-visible:outline-2 peer-focus-visible:outline-accent/70 peer-focus-visible:outline-offset-2 border-none peer-checked:bg-fg peer-checked:text-bg peer-checked:border-fg peer-checked:hover:text-text-bg/50 peer-disabled:opacity-50 peer-disabled:pointer-events-none"${ssrRenderAttr("htmlFor", internalId)}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</label></div>`);
		};
	}
});
var _sfc_setup$4 = RadioButton_vue_vue_type_script_setup_true_lang_default.setup;
RadioButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/RadioButton.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
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
		const { t } = useI18n();
		const isExpanded = shallowRef(false);
		const showAllKeywords = shallowRef(false);
		const filterText = computed({
			get: () => props.filters.text,
			set: (value) => emit("update:text", value)
		});
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
		const scopeLabelKeys = computed(() => ({
			name: t("filters.scope_name"),
			description: t("filters.scope_description"),
			keywords: t("filters.scope_keywords"),
			all: t("filters.scope_all")
		}));
		const scopeDescriptionKeys = computed(() => ({
			name: t("filters.scope_name_description"),
			description: t("filters.scope_description_description"),
			keywords: t("filters.scope_keywords_description"),
			all: t("filters.scope_all_description")
		}));
		const downloadRangeLabelKeys = computed(() => ({
			"any": t("filters.download_range.any"),
			"lt100": t("filters.download_range.lt100"),
			"100-1k": t("filters.download_range.100_1k"),
			"1k-10k": t("filters.download_range.1k_10k"),
			"10k-100k": t("filters.download_range.10k_100k"),
			"gt100k": t("filters.download_range.gt100k")
		}));
		const updatedWithinLabelKeys = computed(() => ({
			any: t("filters.updated.any"),
			week: t("filters.updated.week"),
			month: t("filters.updated.month"),
			quarter: t("filters.updated.quarter"),
			year: t("filters.updated.year")
		}));
		const securityLabelKeys = computed(() => ({
			all: t("filters.security_options.all"),
			secure: t("filters.security_options.secure"),
			warnings: t("filters.security_options.insecure")
		}));
		function getScopeLabelKey(value) {
			return scopeLabelKeys.value[value];
		}
		function getScopeDescriptionKey(value) {
			return scopeDescriptionKeys.value[value];
		}
		function getDownloadRangeLabelKey(value) {
			return downloadRangeLabelKeys.value[value];
		}
		function getUpdatedWithinLabelKey(value) {
			return updatedWithinLabelKeys.value[value];
		}
		function getSecurityLabelKey(value) {
			return securityLabelKeys.value[value];
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
			const _component_InputBase = Base_default$1;
			const _component_TagRadioButton = RadioButton_default;
			const _component_ButtonBase = Base_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-border rounded-lg bg-bg-subtle" }, _attrs))} data-v-a8fe1bac><button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-start hover:bg-bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset"${ssrRenderAttr("aria-expanded", unref(isExpanded))} data-v-a8fe1bac><span class="flex items-center gap-2 text-sm font-mono text-fg shrink-0" data-v-a8fe1bac><span class="i-lucide:funnel w-4 h-4" aria-hidden="true" data-v-a8fe1bac></span> ${ssrInterpolate(unref($t)("filters.title"))}</span>`);
			if (!unref(isExpanded) && unref(hasActiveFilters)) _push(`<span class="text-xs font-mono text-fg-muted truncate" data-v-a8fe1bac>${ssrInterpolate(unref(filterSummary))}</span>`);
			else _push(`<!---->`);
			_push(`<span class="${ssrRenderClass([{ "rotate-180": unref(isExpanded) }, "i-lucide:chevron-down w-4 h-4 text-fg-subtle transition-transform duration-200 shrink-0 ms-auto"])}" aria-hidden="true" data-v-a8fe1bac></span></button>`);
			if (unref(isExpanded)) {
				_push(`<div class="px-4 pb-5 border-t border-border" data-v-a8fe1bac><div class="pt-4" data-v-a8fe1bac><div class="flex items-center gap-3 mb-1" data-v-a8fe1bac><label for="filter-search" class="text-sm font-mono text-fg-muted" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.search"))}</label><div class="inline-flex rounded-md border border-border p-0.5 bg-bg-muted" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.search_scope"))} data-v-a8fe1bac><!--[-->`);
				ssrRenderList(unref(SEARCH_SCOPE_VALUES), (scope) => {
					_push(`<button type="button" class="${ssrRenderClass([__props.filters.searchScope === scope ? "bg-bg-subtle text-fg border-fg-subtle" : "text-fg-muted hover:text-fg border-transparent", "px-2 py-0.5 text-xs font-mono rounded-sm border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", __props.filters.searchScope === scope)}${ssrRenderAttr("title", getScopeDescriptionKey(scope))} data-v-a8fe1bac>${ssrInterpolate(getScopeLabelKey(scope))}</button>`);
				});
				_push(`<!--]--></div></div>`);
				_push(ssrRenderComponent(_component_InputBase, {
					id: "filter-search",
					type: "text",
					modelValue: unref(filterText),
					"onUpdate:modelValue": ($event) => isRef(filterText) ? filterText.value = $event : null,
					placeholder: unref(searchPlaceholder),
					autocomplete: "off",
					class: "w-full min-w-25",
					size: "medium",
					"no-correct": ""
				}, null, _parent));
				_push(`</div><fieldset class="border-0 p-0 m-0 mt-4" data-v-a8fe1bac><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.weekly_downloads"))}</legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.weekly_downloads"))} data-v-a8fe1bac><!--[-->`);
				ssrRenderList(unref(DOWNLOAD_RANGES), (range) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: range.value,
						"model-value": __props.filters.downloadRange,
						value: range.value,
						"onUpdate:modelValue": ($event) => emit("update:downloadRange", $event),
						name: "range"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(getDownloadRangeLabelKey(range.value))}`);
							else return [createTextVNode(toDisplayString(getDownloadRangeLabelKey(range.value)), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset><fieldset class="border-0 p-0 m-0 mt-4" data-v-a8fe1bac><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.updated_within"))}</legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.updated_within"))} data-v-a8fe1bac><!--[-->`);
				ssrRenderList(unref(UPDATED_WITHIN_OPTIONS), (option) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: option.value,
						"model-value": __props.filters.updatedWithin,
						value: option.value,
						name: "updatedWithin",
						"onUpdate:modelValue": ($event) => emit("update:updatedWithin", $event)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(getUpdatedWithinLabelKey(option.value))}`);
							else return [createTextVNode(toDisplayString(getUpdatedWithinLabelKey(option.value)), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset><fieldset class="border-0 p-0 m-0 mt-4" data-v-a8fe1bac><legend class="flex items-center gap-2 text-sm font-mono text-fg-muted mb-1" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.security"))} <span class="text-xs px-1.5 py-0.5 rounded bg-bg-muted text-fg-subtle" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.columns.coming_soon"))}</span></legend><div class="flex flex-wrap gap-2" role="radiogroup"${ssrRenderAttr("aria-label", unref($t)("filters.security"))} data-v-a8fe1bac><!--[-->`);
				ssrRenderList(unref(SECURITY_FILTER_VALUES), (security) => {
					_push(ssrRenderComponent(_component_TagRadioButton, {
						key: security,
						disabled: "",
						"model-value": __props.filters.security,
						value: security,
						name: "security"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(getSecurityLabelKey(security))}`);
							else return [createTextVNode(toDisplayString(getSecurityLabelKey(security)), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></fieldset>`);
				if (unref(displayedKeywords).length > 0) {
					_push(`<fieldset class="border-0 p-0 m-0 mt-4" data-v-a8fe1bac><legend class="block text-sm font-mono text-fg-muted mb-1" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.keywords"))}</legend><div class="flex flex-wrap gap-1.5" role="group"${ssrRenderAttr("aria-label", unref($t)("filters.keywords"))} data-v-a8fe1bac><!--[-->`);
					ssrRenderList(unref(displayedKeywords), (keyword) => {
						_push(ssrRenderComponent(_component_ButtonBase, {
							key: keyword,
							size: "small",
							"aria-pressed": __props.filters.keywords.includes(keyword),
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
					if (unref(hasMoreKeywords)) _push(`<button type="button" class="text-xs text-fg-subtle self-center font-mono hover:text-fg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1" data-v-a8fe1bac>${ssrInterpolate(unref($t)("filters.more_keywords", { count: (__props.availableKeywords?.length ?? 0) - 20 }))}</button>`);
					else _push(`<!---->`);
					_push(`</div></fieldset>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$3 = Panel_vue_vue_type_script_setup_true_lang_default.setup;
Panel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Panel.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Panel_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Panel_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a8fe1bac"]]), { __name: "FilterPanel" });
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
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2" }, _attrs))} data-v-9e72d505><!--[-->`);
				ssrRenderList(__props.chips, (chip) => {
					_push(ssrRenderComponent(_component_TagStatic, {
						key: chip.id,
						class: "gap-2 pe-1"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="text-fg-subtle text-xs" data-v-9e72d505${_scopeId}>${ssrInterpolate(chip.label)}:</span><span class="max-w-32 truncate" data-v-9e72d505${_scopeId}>${ssrInterpolate(Array.isArray(chip.value) ? chip.value.join(", ") : chip.value)}</span><button type="button" class="flex items-center p-1 -m-1 hover:text-fg rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrRenderAttr("aria-label", _ctx.$t("filters.remove_filter", { label: chip.label }))} data-v-9e72d505${_scopeId}><span class="i-lucide:x w-3 h-3" aria-hidden="true" data-v-9e72d505${_scopeId}></span></button>`);
							else return [
								createVNode("span", { class: "text-fg-subtle text-xs" }, toDisplayString(chip.label) + ":", 1),
								createVNode("span", { class: "max-w-32 truncate" }, toDisplayString(Array.isArray(chip.value) ? chip.value.join(", ") : chip.value), 1),
								createVNode("button", {
									type: "button",
									class: "flex items-center p-1 -m-1 hover:text-fg rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1",
									"aria-label": _ctx.$t("filters.remove_filter", { label: chip.label }),
									onClick: ($event) => emit("remove", chip)
								}, [createVNode("span", {
									class: "i-lucide:x w-3 h-3",
									"aria-hidden": "true"
								})], 8, ["aria-label", "onClick"])
							];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				if (__props.chips.length > 1) _push(`<button type="button" class="text-sm p-0.5 text-fg-muted hover:text-fg underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2" data-v-9e72d505>${ssrInterpolate(_ctx.$t("filters.clear_all"))}</button>`);
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
var Chips_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Chips_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9e72d505"]]), { __name: "FilterChips" });
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
		searchContext: { type: Boolean },
		disabledSortKeys: {}
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
		const { t } = useI18n();
		const sortOption = useModel(__props, "sortOption");
		const viewMode = useModel(__props, "viewMode");
		const paginationMode = useModel(__props, "paginationMode");
		const pageSize = useModel(__props, "pageSize");
		const emit = __emit;
		const showingFiltered = computed(() => props.filteredCount !== props.totalCount);
		const currentSort = computed(() => parseSortOption(sortOption.value));
		const disabledSet = computed(() => new Set(props.disabledSortKeys ?? []));
		const availableSortKeys = computed(() => {
			const applyDisabled = (k) => ({
				...k,
				disabled: k.disabled || disabledSet.value.has(k.key)
			});
			if (props.searchContext) return SORT_KEYS.filter((k) => !k.searchOnly || k.key === "relevance").map(applyDisabled);
			return SORT_KEYS.filter((k) => !k.searchOnly).map(applyDisabled);
		});
		const sortKeyModel = computed({
			get: () => currentSort.value.key,
			set: (newKey) => {
				sortOption.value = buildSortOption(newKey, SORT_KEYS.find((k) => k.key === newKey)?.defaultDirection ?? "desc");
			}
		});
		const sortKeyLabelKeys = computed(() => ({
			"relevance": t("filters.sort.relevance"),
			"downloads-week": t("filters.sort.downloads_week"),
			"downloads-day": t("filters.sort.downloads_day"),
			"downloads-month": t("filters.sort.downloads_month"),
			"downloads-year": t("filters.sort.downloads_year"),
			"updated": t("filters.sort.published"),
			"name": t("filters.sort.name"),
			"quality": t("filters.sort.quality"),
			"popularity": t("filters.sort.popularity"),
			"maintenance": t("filters.sort.maintenance"),
			"score": t("filters.sort.score")
		}));
		function getSortKeyLabelKey(key) {
			return sortKeyLabelKeys.value[key];
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectField = Field_default;
			const _component_ColumnPicker = ColumnPicker_default;
			const _component_ViewModeToggle = ViewModeToggle_default;
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
				pageSize: pageSize.value === "all" ? _ctx.$n(__props.filteredCount) : Math.min(pageSize.value, __props.filteredCount),
				count: _ctx.$n(__props.filteredCount)
			}, __props.filteredCount))}</div>`);
			else _push(`<!---->`);
			_push(`<div class="flex-1"></div><div class="flex flex-col sm:flex-row items-start sm:items-center gap-3"><div class="flex items-center gap-1 shrink-0">`);
			_push(ssrRenderComponent(_component_SelectField, {
				label: _ctx.$t("filters.sort.label"),
				"hidden-label": "",
				id: "sort-select",
				modelValue: unref(sortKeyModel),
				"onUpdate:modelValue": ($event) => isRef(sortKeyModel) ? sortKeyModel.value = $event : null,
				items: unref(availableSortKeys).map((keyConfig) => ({
					label: getSortKeyLabelKey(keyConfig.key),
					value: keyConfig.key,
					disabled: keyConfig.disabled
				}))
			}, null, _parent));
			if (!__props.searchContext || unref(currentSort).key !== "relevance") _push(`<button type="button" class="p-1.5 rounded border border-border bg-bg-subtle text-fg-muted hover:text-fg hover:border-border-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"${ssrRenderAttr("aria-label", _ctx.$t("filters.sort.toggle_direction"))}${ssrRenderAttr("title", unref(currentSort).direction === "asc" ? _ctx.$t("filters.sort.ascending") : _ctx.$t("filters.sort.descending"))}><span class="${ssrRenderClass([unref(currentSort).direction === "asc" ? "i-lucide:arrow-down-narrow-wide" : "i-lucide:arrow-down-wide-narrow", "w-4 h-4 block transition-transform duration-200"])}" aria-hidden="true"></span></button>`);
			else _push(`<!---->`);
			_push(`</div><div class="flex flex-row-reverse sm:flex-row items-center gap-1">`);
			if (viewMode.value === "table") _push(ssrRenderComponent(_component_ColumnPicker, {
				columns: __props.columns,
				onToggle: ($event) => emit("toggleColumn", $event),
				onReset: ($event) => emit("resetColumns")
			}, null, _parent));
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_ViewModeToggle, {
				modelValue: viewMode.value,
				"onUpdate:modelValue": ($event) => viewMode.value = $event
			}, null, _parent));
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
		const pageSizeSelectValue = computed(() => String(pageSize.value));
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
		function handlePageSizeChange(event) {
			const value = event.target.value;
			pageSize.value = value === "all" ? "all" : Number(value);
			currentPage.value = 1;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectField = Field_default;
			if (unref(shouldShowControls)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center justify-between gap-4 py-4 mt-2" }, _attrs))}><div class="flex items-center gap-4">`);
				if (unref(showModeToggle)) _push(`<div class="inline-flex rounded-md border border-border p-0.5 bg-bg-subtle" role="group"${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.mode_label"))}><button type="button" class="${ssrRenderClass([mode.value === "infinite" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "px-2.5 py-1 text-xs font-mono rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", mode.value === "infinite")}>${ssrInterpolate(_ctx.$t("filters.pagination.infinite"))}</button><button type="button" class="${ssrRenderClass([mode.value === "paginated" ? "bg-bg-muted text-fg" : "text-fg-muted hover:text-fg", "px-2.5 py-1 text-xs font-mono rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-pressed", mode.value === "paginated")}>${ssrInterpolate(_ctx.$t("filters.pagination.paginated"))}</button></div>`);
				else _push(`<!---->`);
				if (unref(effectiveMode) === "paginated") {
					_push(`<div class="relative shrink-0">`);
					_push(ssrRenderComponent(_component_SelectField, {
						label: _ctx.$t("filters.pagination.items_per_page"),
						"hidden-label": "",
						id: "page-size",
						modelValue: unref(pageSizeSelectValue),
						"onUpdate:modelValue": ($event) => isRef(pageSizeSelectValue) ? pageSizeSelectValue.value = $event : null,
						onChange: handlePageSizeChange,
						items: unref(PAGE_SIZE_OPTIONS).map((size) => ({
							label: size === "all" ? _ctx.$t("filters.pagination.all_yolo") : _ctx.$t("filters.pagination.per_page", { count: size }),
							value: String(size)
						}))
					}, null, _parent));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
				if (unref(effectiveMode) === "paginated") {
					_push(`<div class="flex items-center gap-4"><span class="text-sm font-mono text-fg-muted">${ssrInterpolate(_ctx.$t("filters.pagination.showing", {
						start: unref(startItem),
						end: unref(endItem),
						total: _ctx.$n(__props.totalItems)
					}))}</span>`);
					if (unref(totalPages) > 1) {
						_push(`<nav class="flex items-center gap-1"${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.nav_label"))}><button type="button" class="p-1.5 rounded hover:bg-bg-muted text-fg-muted hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrIncludeBooleanAttr(!unref(canGoPrev)) ? " disabled" : ""}${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.previous"))}><span class="i-lucide:chevron-left block rtl-flip w-4 h-4" aria-hidden="true"></span></button><!--[-->`);
						ssrRenderList(unref(visiblePages), (page, idx) => {
							_push(`<!--[-->`);
							if (page === "ellipsis") _push(`<span class="px-2 text-fg-subtle font-mono">…</span>`);
							else _push(`<button type="button" class="${ssrRenderClass([page === currentPage.value ? "bg-fg text-bg" : "text-fg-muted hover:text-fg hover:bg-bg-muted", "min-w-[32px] h-8 px-2 font-mono text-sm rounded transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"])}"${ssrRenderAttr("aria-current", page === currentPage.value ? "page" : void 0)}>${ssrInterpolate(page)}</button>`);
							_push(`<!--]-->`);
						});
						_push(`<!--]--><button type="button" class="p-1.5 rounded hover:bg-bg-muted text-fg-muted hover:text-fg disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-1"${ssrIncludeBooleanAttr(!unref(canGoNext)) ? " disabled" : ""}${ssrRenderAttr("aria-label", _ctx.$t("filters.pagination.next"))}><span class="i-lucide:chevron-right block rtl-flip w-4 h-4" aria-hidden="true"></span></button></nav>`);
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
/**
* Creates a localStorage-based storage provider
*/
function createLocalStorageProvider(key) {
	return {
		get: () => {
			return null;
		},
		set: (value) => {},
		remove: () => {}
	};
}
/**
* Composable for managing preferences storage
* Abstracts the storage mechanism to allow future migration to API-based storage
*
*/
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
/**
* Composable for managing package list display preferences
* Persists to localStorage and provides reactive state
*
*/
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
/**
* Parse search operators from text input.
* Supports: name:, desc:/description:, kw:/keyword:
* Multiple values can be comma-separated: kw:foo,bar
* Remaining text is treated as a general search term.
*
* Example: "name:react kw:typescript,hooks some text"
* Returns: { name: ['react'], keywords: ['typescript', 'hooks'], text: 'some text' }
*/
function parseSearchOperators(input) {
	const result = {};
	const operatorRegex = /\b(name|desc|description|kw|keyword):(\S+)/gi;
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
	if (result.keywords) {
		const seen = /* @__PURE__ */ new Set();
		result.keywords = result.keywords.filter((kw) => {
			const lower = kw.toLowerCase();
			if (seen.has(lower)) return false;
			seen.add(lower);
			return true;
		});
	}
	return result;
}
/**
* Check if parsed operators has any content
*/
function hasSearchOperators(parsed) {
	return !!(parsed.name?.length || parsed.description?.length || parsed.keywords?.length);
}
/**
* Remove a keyword from a search query string.
* Handles kw:xxx and keyword:xxx formats, including comma-separated values.
*/
function removeKeywordFromQuery(query, keyword) {
	const operatorRegex = /\b((?:kw|keyword):)(\S+)/gi;
	const lowerKeyword = keyword.toLowerCase();
	let result = query.replace(operatorRegex, (match, prefix, value) => {
		const values = value.split(",").filter(Boolean);
		const filtered = values.filter((v) => v.toLowerCase() !== lowerKeyword);
		if (filtered.length === 0) return "";
		if (filtered.length === values.length) return match;
		return `${prefix}${filtered.join(",")}`;
	});
	result = result.replace(/\s+/g, " ").trim();
	return result;
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
/**
* Composable for structured filtering and sorting of package lists
*
*/
function useStructuredFilters(options) {
	const route = useRoute();
	const router = useRouter();
	const { packages, initialFilters, initialSort, searchQueryModel } = options;
	const { t } = useI18n();
	const searchQuery = shallowRef(normalizeSearchParam(route.query.q));
	const filters = ref({
		...DEFAULT_FILTERS,
		...initialFilters
	});
	watch(() => route.query.q, (urlQuery) => {
		const value = normalizeSearchParam(urlQuery);
		if (searchQuery.value !== value) searchQuery.value = value;
		const parsed = parseSearchOperators(value);
		filters.value.text = parsed.text ?? "";
		filters.value.keywords = parsed.keywords ?? [];
	}, { immediate: true });
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
	const downloadRangeLabels = computed(() => ({
		"any": t("filters.download_range.any"),
		"lt100": t("filters.download_range.lt100"),
		"100-1k": t("filters.download_range.100_1k"),
		"1k-10k": t("filters.download_range.1k_10k"),
		"10k-100k": t("filters.download_range.10k_100k"),
		"gt100k": t("filters.download_range.gt100k")
	}));
	const securityLabels = computed(() => ({
		all: t("filters.security_options.all"),
		secure: t("filters.security_options.secure"),
		warnings: t("filters.security_options.insecure")
	}));
	const updatedWithinLabels = computed(() => ({
		any: t("filters.updated.any"),
		week: t("filters.updated.week"),
		month: t("filters.updated.month"),
		quarter: t("filters.updated.quarter"),
		year: t("filters.updated.year")
	}));
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
			value: downloadRangeLabels.value[filters.value.downloadRange]
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
			value: securityLabels.value[filters.value.security]
		});
		if (filters.value.updatedWithin !== "any") chips.push({
			id: "updatedWithin",
			type: "updatedWithin",
			label: t("filters.chips.updated"),
			value: updatedWithinLabels.value[filters.value.updatedWithin]
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
		const lowerKeyword = keyword.toLowerCase();
		if (!filters.value.keywords.some((k) => k.toLowerCase() === lowerKeyword)) {
			filters.value.keywords = [...filters.value.keywords, keyword];
			const newQ = searchQuery.value ? `${searchQuery.value.trim()} keyword:${keyword}` : `keyword:${keyword}`;
			router.replace({ query: {
				...route.query,
				q: newQ
			} });
			if (searchQueryModel) searchQueryModel.value = newQ;
		}
	}
	function removeKeyword(keyword) {
		const lowerKeyword = keyword.toLowerCase();
		filters.value.keywords = filters.value.keywords.filter((k) => k.toLowerCase() !== lowerKeyword);
		const newQ = removeKeywordFromQuery(searchQuery.value, keyword);
		router.replace({ query: {
			...route.query,
			q: newQ || void 0
		} });
		if (searchQueryModel) searchQueryModel.value = newQ;
	}
	function toggleKeyword(keyword) {
		const lowerKeyword = keyword.toLowerCase();
		if (filters.value.keywords.some((k) => k.toLowerCase() === lowerKeyword)) removeKeyword(keyword);
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

export { ListToolbar_default as L, PaginationControls_default as P, useStructuredFilters as a, usePackageListPreferences as u };
//# sourceMappingURL=useStructuredFilters-C1haXYPk.mjs.map

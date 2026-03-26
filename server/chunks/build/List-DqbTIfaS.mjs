import { o as client_only_default, u as useI18n, n as nuxt_link_default, w as packageRoute, R as DateTime_default, m as Base_default$1, _ as _plugin_vue_export_helper_default } from './server-placeholder-C9fYItBT.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { u as useNumberFormatter, a as useCompactNumberFormatter } from './useNumberFormatter-6MIdB6Qd.mjs';
import { u as useRouteQuery } from './dist-vCkMLnH7.mjs';
import { B as BaseCard_default } from './BaseCard-Bmgsx7UV.mjs';
import { P as ProvenanceBadge_default } from './ProvenanceBadge-wpBL-1hz.mjs';
import { u as useMarkdown } from './useMarkdown-WJFZUyH8.mjs';
import { computed, defineComponent, useTemplateRef, useModel, shallowRef, watch, nextTick, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, mergeModels, toValue, mergeProps, resolveDynamicComponent, createTextVNode, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderVNode, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { aU as DEFAULT_COLUMNS, aQ as parseSortOption, b5 as stripHtmlTags, a$ as decodeHtmlEntities } from '../nitro/nitro.mjs';

//#region app/utils/responsive.ts
function isTouchDevice() {
	return false;
}

function usePackageSelection() {
	const selectedPackagesParam = useRouteQuery("selection", "", { mode: "replace" });
	const showSelectionViewParam = useRouteQuery("view", "", { mode: "push" });
	const selectedPackages = computed({
		get() {
			const raw = selectedPackagesParam.value;
			if (!raw) return [];
			return raw.split(",").map((p) => p.trim()).filter(Boolean).slice(0, 4);
		},
		set(pkgs) {
			const validPkgs = (Array.isArray(pkgs) ? pkgs : []).map((p) => p.trim()).filter(Boolean);
			selectedPackagesParam.value = validPkgs.length > 0 ? validPkgs.join(",") : "";
		}
	});
	const canSelectMore = computed(() => selectedPackages.value.length < 4);
	const showSelectionView = computed({
		get() {
			return showSelectionViewParam.value === "selection";
		},
		set(isOpen) {
			showSelectionViewParam.value = isOpen ? "selection" : "";
		}
	});
	function closeSelectionView() {
		showSelectionView.value = false;
	}
	function isPackageSelected(packageName) {
		return selectedPackages.value.includes(packageName.trim());
	}
	function togglePackageSelection(packageName) {
		const safeName = packageName.trim();
		if (!safeName) return;
		const pkgs = [...selectedPackages.value];
		const idx = pkgs.indexOf(safeName);
		if (idx !== -1) pkgs.splice(idx, 1);
		else if (pkgs.length < 4) pkgs.push(safeName);
		selectedPackages.value = pkgs;
	}
	function clearSelectedPackages() {
		selectedPackages.value = [];
	}
	function openSelectionView() {
		showSelectionView.value = true;
	}
	return {
		selectedPackages,
		selectedPackagesParam,
		showSelectionView,
		canSelectMore,
		clearSelectedPackages,
		isPackageSelected,
		togglePackageSelection,
		closeSelectionView,
		openSelectionView
	};
}
//#endregion
//#region app/components/Package/SelectionCheckbox.vue?vue&type=script&setup=true&lang.ts
var SelectionCheckbox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SelectionCheckbox",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		checked: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["change"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const disabledText = t("package.card.select_maximum", 4);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-1" }, _attrs))}><label>`);
			if (__props.disabled) _push(`<span class="sr-only">${ssrInterpolate(unref(disabledText))}</span>`);
			else _push(`<span class="sr-only">${ssrInterpolate(_ctx.$t("package.card.select"))}: ${ssrInterpolate(__props.packageName)}</span>`);
			if (__props.disabled) _push(ssrRenderComponent(_component_TooltipApp, {
				text: unref(disabledText),
				position: "top"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<input class="${ssrRenderClass([{ "opacity-100! disabled:opacity-30!": ("isTouchDevice" in _ctx ? _ctx.isTouchDevice : unref(isTouchDevice))() }, "opacity-0 group-hover:opacity-100 size-4 accent-accent border border-fg-muted/30 hover:cursor-not-allowed"])}" type="checkbox"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${_scopeId}>`);
					else return [createVNode("input", {
						class: ["opacity-0 group-hover:opacity-100 size-4 accent-accent border border-fg-muted/30 hover:cursor-not-allowed", { "opacity-100! disabled:opacity-30!": ("isTouchDevice" in _ctx ? _ctx.isTouchDevice : unref(isTouchDevice))() }],
						type: "checkbox",
						disabled: __props.disabled
					}, null, 10, ["disabled"])];
				}),
				_: 1
			}, _parent));
			else _push(`<input data-package-card-checkbox class="${ssrRenderClass([{ "opacity-100! disabled:opacity-30!": ("isTouchDevice" in _ctx ? _ctx.isTouchDevice : unref(isTouchDevice))() }, "opacity-0 group-focus-within:opacity-100 checked:opacity-100 group-hover:opacity-100 size-4 cursor-pointer accent-accent border border-fg-muted/30 hover:border-accent transition-colors disabled:group-hover:opacity-30 disabled:hover:cursor-not-allowed"])}" type="checkbox"${ssrIncludeBooleanAttr(__props.checked) ? " checked" : ""}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>`);
			_push(`</label></div>`);
		};
	}
});
//#endregion
//#region app/components/Package/SelectionCheckbox.vue
var _sfc_setup$4 = SelectionCheckbox_vue_vue_type_script_setup_true_lang_default.setup;
SelectionCheckbox_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/SelectionCheckbox.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var SelectionCheckbox_default = Object.assign(SelectionCheckbox_vue_vue_type_script_setup_true_lang_default, { __name: "PackageSelectionCheckbox" });
//#endregion
//#region app/components/Package/TableRow.vue?vue&type=script&setup=true&lang.ts
var TableRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TableRow",
	__ssrInlineRender: true,
	props: {
		result: {},
		columns: {},
		index: {},
		filters: {}
	},
	emits: ["clickKeyword"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const pkg = computed(() => props.result.package);
		const updatedDate = computed(() => props.result.package.date);
		const { isPackageSelected, togglePackageSelection, canSelectMore } = usePackageSelection();
		const isSelected = computed(() => {
			return isPackageSelected(props.result.package.name);
		});
		function isColumnVisible(id) {
			return props.columns.find((c) => c.id === id)?.visible ?? false;
		}
		const packageUrl = computed(() => packageRoute(pkg.value.name));
		const allMaintainersText = computed(() => {
			if (!pkg.value.maintainers?.length) return "";
			return pkg.value.maintainers.map((m) => m.name || m.email).join(", ");
		});
		const compactNumberFormatter = useCompactNumberFormatter();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageSelectionCheckbox = SelectionCheckbox_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_DateTime = DateTime_default;
			const _component_ButtonBase = Base_default$1;
			_push(`<tr${ssrRenderAttrs(mergeProps({
				class: "group relative scale-100 [clip-path:inset(0)] border-b border-border hover:bg-bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset focus-visible:outline-none focus:bg-bg-muted",
				tabindex: "0",
				"data-result-index": __props.index
			}, _attrs))} data-v-b92c69b8><td class="ps-3" data-v-b92c69b8>`);
			_push(ssrRenderComponent(_component_PackageSelectionCheckbox, {
				"package-name": __props.result.package.name,
				disabled: !unref(canSelectMore) && !unref(isSelected),
				checked: unref(isSelected),
				onChange: unref(togglePackageSelection)
			}, null, _parent));
			_push(`</td><td class="py-2 px-3" data-v-b92c69b8>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: unref(packageUrl),
				class: "row-link font-mono text-sm text-fg hover:text-accent-fallback transition-colors duration-200",
				dir: "ltr"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(pkg).name)}`);
					else return [createTextVNode(toDisplayString(unref(pkg).name), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</td>`);
			if (isColumnVisible("version")) _push(`<td class="py-2 px-3 font-mono text-xs text-fg-subtle" data-v-b92c69b8><span dir="ltr" data-v-b92c69b8>${ssrInterpolate(unref(pkg).version)}</span></td>`);
			else _push(`<!---->`);
			if (isColumnVisible("description")) _push(`<td class="py-2 px-3 text-sm text-fg-muted max-w-xs truncate" data-v-b92c69b8>${ssrInterpolate(("stripHtmlTags" in _ctx ? _ctx.stripHtmlTags : unref(stripHtmlTags))(("decodeHtmlEntities" in _ctx ? _ctx.decodeHtmlEntities : unref(decodeHtmlEntities))(unref(pkg).description || "")) || "-")}</td>`);
			else _push(`<!---->`);
			if (isColumnVisible("downloads")) _push(`<td class="py-2 px-3 font-mono text-xs text-fg-muted text-end tabular-nums" data-v-b92c69b8>${ssrInterpolate(__props.result.downloads?.weekly !== void 0 ? unref(compactNumberFormatter).format(__props.result.downloads.weekly) : "-")}</td>`);
			else _push(`<!---->`);
			if (isColumnVisible("updated")) {
				_push(`<td class="py-2 px-3 font-mono text-end text-xs text-fg-muted" data-v-b92c69b8>`);
				if (unref(updatedDate)) _push(ssrRenderComponent(_component_DateTime, {
					datetime: unref(updatedDate),
					year: "numeric",
					month: "short",
					day: "numeric"
				}, null, _parent));
				else _push(`<span data-v-b92c69b8>-</span>`);
				_push(`</td>`);
			} else _push(`<!---->`);
			if (isColumnVisible("maintainers")) {
				_push(`<td class="py-2 px-3 text-sm text-fg-muted text-end" data-v-b92c69b8>`);
				if (unref(pkg).maintainers?.length) {
					_push(`<span${ssrRenderAttr("title", unref(pkg).maintainers.length > 3 ? unref(allMaintainersText) : void 0)} class="${ssrRenderClass({ "cursor-help": unref(pkg).maintainers.length > 3 })}" data-v-b92c69b8><!--[-->`);
					ssrRenderList(unref(pkg).maintainers.slice(0, 3), (maintainer, idx) => {
						_push(`<!--[-->`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							to: {
								name: "~username",
								params: { username: maintainer.username || maintainer.name || "" }
							},
							class: "relative z-10 hover:text-accent-fallback transition-colors duration-200",
							onClick: () => {}
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(maintainer.username || maintainer.name || maintainer.email)}`);
								else return [createTextVNode(toDisplayString(maintainer.username || maintainer.name || maintainer.email), 1)];
							}),
							_: 2
						}, _parent));
						if (idx < Math.min(unref(pkg).maintainers.length, 3) - 1) _push(`<span data-v-b92c69b8>, </span>`);
						else _push(`<!---->`);
						_push(`<!--]-->`);
					});
					_push(`<!--]-->`);
					if (unref(pkg).maintainers.length > 3) _push(`<span class="text-fg-subtle" data-v-b92c69b8> +${ssrInterpolate(unref(pkg).maintainers.length - 3)}</span>`);
					else _push(`<!---->`);
					_push(`</span>`);
				} else _push(`<span class="text-fg-subtle" data-v-b92c69b8>-</span>`);
				_push(`</td>`);
			} else _push(`<!---->`);
			if (isColumnVisible("keywords")) {
				_push(`<td class="py-2 px-3 text-end" data-v-b92c69b8>`);
				if (unref(pkg).keywords?.length) {
					_push(`<div class="relative z-10 flex flex-wrap gap-1 justify-end"${ssrRenderAttr("aria-label", _ctx.$t("package.card.keywords"))} data-v-b92c69b8><!--[-->`);
					ssrRenderList(unref(pkg).keywords.slice(0, 3), (keyword) => {
						_push(ssrRenderComponent(_component_ButtonBase, {
							key: keyword,
							size: "sm",
							"aria-pressed": props.filters?.keywords.includes(keyword),
							title: `Filter by ${keyword}`,
							onClick: ($event) => emit("clickKeyword", keyword),
							class: { "group-hover:bg-bg-elevated": !props.filters?.keywords.includes(keyword) }
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(keyword)}`);
								else return [createTextVNode(toDisplayString(keyword), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]-->`);
					if (unref(pkg).keywords.length > 3) _push(`<span class="text-fg-subtle text-xs"${ssrRenderAttr("title", unref(pkg).keywords.slice(3).join(", "))} data-v-b92c69b8> +${ssrInterpolate(unref(pkg).keywords.length - 3)}</span>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<span class="text-fg-subtle" data-v-b92c69b8>-</span>`);
				_push(`</td>`);
			} else _push(`<!---->`);
			if (isColumnVisible("security")) {
				_push(`<td class="py-2 px-3" data-v-b92c69b8>`);
				if (__props.result.flags?.insecure) _push(`<span class="text-syntax-kw" data-v-b92c69b8><span class="i-lucide:circle-alert w-4 h-4" aria-hidden="true" data-v-b92c69b8></span><span class="sr-only" data-v-b92c69b8>${ssrInterpolate(_ctx.$t("filters.table.security_warning"))}</span></span>`);
				else if (__props.result.flags !== void 0) _push(`<span class="text-provider-nuxt" data-v-b92c69b8><span class="i-lucide:check w-4 h-4" aria-hidden="true" data-v-b92c69b8></span><span class="sr-only" data-v-b92c69b8>${ssrInterpolate(_ctx.$t("filters.table.secure"))}</span></span>`);
				else _push(`<span class="text-fg-subtle" data-v-b92c69b8> - </span>`);
				_push(`</td>`);
			} else _push(`<!---->`);
			_push(`</tr>`);
		};
	}
});
//#endregion
//#region app/components/Package/TableRow.vue
var _sfc_setup$3 = TableRow_vue_vue_type_script_setup_true_lang_default.setup;
TableRow_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/TableRow.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var TableRow_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(TableRow_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-b92c69b8"]]), { __name: "PackageTableRow" });
//#endregion
//#region app/components/Package/Table.vue?vue&type=script&setup=true&lang.ts
var Table_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Table",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		results: {},
		columns: {},
		filters: {},
		isLoading: { type: Boolean }
	}, {
		"sortOption": {},
		"sortOptionModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["clickKeyword"], ["update:sortOption"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { t } = useI18n();
		const sortOption = useModel(__props, "sortOption");
		const emit = __emit;
		function isColumnVisible(id) {
			return props.columns.find((c) => c.id === id)?.visible ?? false;
		}
		function isSortable(id) {
			return props.columns.find((c) => c.id === id)?.sortable ?? false;
		}
		const columnToSortKey = {
			name: "name",
			downloads: "downloads-week",
			updated: "updated"
		};
		function isColumnSorted(id) {
			const option = sortOption.value;
			if (!option) return false;
			const { key } = parseSortOption(option);
			return key === columnToSortKey[id];
		}
		function getSortDirection(id) {
			const option = sortOption.value;
			if (!option) return null;
			if (!isColumnSorted(id)) return null;
			const { direction } = parseSortOption(option);
			return direction;
		}
		const columnLabels = computed(() => ({
			name: t("filters.columns.name"),
			version: t("filters.columns.version"),
			description: t("filters.columns.description"),
			downloads: t("filters.columns.downloads"),
			updated: t("filters.columns.published"),
			maintainers: t("filters.columns.maintainers"),
			keywords: t("filters.columns.keywords"),
			security: t("filters.columns.security"),
			selection: t("filters.columns.selection")
		}));
		function getColumnLabel(id) {
			return columnLabels.value[id];
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageTableRow = TableRow_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><table class="w-full text-start"><thead class="border-b border-border"><tr><th scope="col" class="w-8"><span class="sr-only">${ssrInterpolate(getColumnLabel("selection"))}</span></th><th scope="col" class="${ssrRenderClass([{ "hover:text-fg transition-colors duration-200": isSortable("name") }, "py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset focus-visible:outline-none"])}"${ssrRenderAttr("aria-sort", isColumnSorted("name") ? getSortDirection("name") === "asc" ? "ascending" : "descending" : void 0)}${ssrRenderAttr("tabindex", isSortable("name") ? 0 : void 0)} role="columnheader"><span class="inline-flex items-center gap-1">${ssrInterpolate(getColumnLabel("name"))} `);
			if (isSortable("name")) {
				_push(`<!--[-->`);
				if (isColumnSorted("name")) _push(`<span class="${ssrRenderClass([getSortDirection("name") === "asc" ? "rotate-180" : "", "i-lucide:chevron-down w-3 h-3"])}" aria-hidden="true"></span>`);
				else _push(`<span class="i-lucide:chevrons-up-down w-3 h-3 opacity-30" aria-hidden="true"></span>`);
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</span></th>`);
			if (isColumnVisible("version")) _push(`<th scope="col" class="py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none">${ssrInterpolate(getColumnLabel("version"))}</th>`);
			else _push(`<!---->`);
			if (isColumnVisible("description")) _push(`<th scope="col" class="py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none">${ssrInterpolate(getColumnLabel("description"))}</th>`);
			else _push(`<!---->`);
			if (isColumnVisible("downloads")) {
				_push(`<th scope="col" class="${ssrRenderClass([{ "hover:text-fg transition-colors duration-200": isSortable("downloads") }, "py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none text-end focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset focus-visible:outline-none"])}"${ssrRenderAttr("aria-sort", isColumnSorted("downloads") ? getSortDirection("downloads") === "asc" ? "ascending" : "descending" : void 0)}${ssrRenderAttr("tabindex", isSortable("downloads") ? 0 : void 0)} role="columnheader"><span class="inline-flex items-center gap-1 justify-end">${ssrInterpolate(getColumnLabel("downloads"))} `);
				if (isSortable("downloads")) {
					_push(`<!--[-->`);
					if (isColumnSorted("downloads")) _push(`<span class="${ssrRenderClass([getSortDirection("downloads") === "asc" ? "rotate-180" : "", "i-lucide:chevron-down w-3 h-3"])}" aria-hidden="true"></span>`);
					else _push(`<span class="i-lucide:chevrons-up-down w-3 h-3 opacity-30" aria-hidden="true"></span>`);
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</span></th>`);
			} else _push(`<!---->`);
			if (isColumnVisible("updated")) {
				_push(`<th scope="col" class="${ssrRenderClass([{ "hover:text-fg transition-colors duration-200": isSortable("updated") }, "py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none text-end focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-inset focus-visible:outline-none"])}"${ssrRenderAttr("aria-sort", isColumnSorted("updated") ? getSortDirection("updated") === "asc" ? "ascending" : "descending" : void 0)}${ssrRenderAttr("tabindex", isSortable("updated") ? 0 : void 0)} role="columnheader"><span class="inline-flex items-center gap-1">${ssrInterpolate(getColumnLabel("updated"))} `);
				if (isSortable("updated")) {
					_push(`<!--[-->`);
					if (isColumnSorted("updated")) _push(`<span class="${ssrRenderClass([getSortDirection("updated") === "asc" ? "rotate-180" : "", "i-lucide:chevron-down w-3 h-3"])}" aria-hidden="true"></span>`);
					else _push(`<span class="i-lucide:chevrons-up-down w-3 h-3 opacity-30" aria-hidden="true"></span>`);
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</span></th>`);
			} else _push(`<!---->`);
			if (isColumnVisible("maintainers")) _push(`<th scope="col" class="py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none text-end">${ssrInterpolate(getColumnLabel("maintainers"))}</th>`);
			else _push(`<!---->`);
			if (isColumnVisible("keywords")) _push(`<th scope="col" class="py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none text-end">${ssrInterpolate(getColumnLabel("keywords"))}</th>`);
			else _push(`<!---->`);
			if (isColumnVisible("security")) _push(`<th scope="col" class="py-3 px-3 text-xs text-start text-fg-muted font-mono font-medium uppercase tracking-wider whitespace-nowrap select-none text-end">${ssrInterpolate(getColumnLabel("security"))}</th>`);
			else _push(`<!---->`);
			_push(`</tr></thead><tbody>`);
			if (__props.isLoading && __props.results.length === 0) {
				_push(`<!--[-->`);
				ssrRenderList(5, (i) => {
					_push(`<tr class="border-b border-border"><td class="py-3 px-3 w-8"><div class="h-4 w-4 bg-bg-muted rounded animate-pulse ms-auto"></div></td><td class="py-3 px-3"><div class="h-4 w-32 bg-bg-muted rounded animate-pulse"></div></td>`);
					if (isColumnVisible("version")) _push(`<td class="py-3 px-3"><div class="h-4 w-12 bg-bg-muted rounded animate-pulse"></div></td>`);
					else _push(`<!---->`);
					if (isColumnVisible("description")) _push(`<td class="py-3 px-3"><div class="h-4 w-48 bg-bg-muted rounded animate-pulse"></div></td>`);
					else _push(`<!---->`);
					if (isColumnVisible("downloads")) _push(`<td class="py-3 px-3"><div class="h-4 w-16 bg-bg-muted rounded animate-pulse ms-auto"></div></td>`);
					else _push(`<!---->`);
					if (isColumnVisible("updated")) _push(`<td class="py-3 px-3"><div class="h-4 w-20 bg-bg-muted rounded animate-pulse ms-auto"></div></td>`);
					else _push(`<!---->`);
					if (isColumnVisible("maintainers")) _push(`<td class="py-3 px-3"><div class="h-4 w-24 bg-bg-muted rounded animate-pulse ms-auto"></div></td>`);
					else _push(`<!---->`);
					if (isColumnVisible("keywords")) _push(`<td class="py-3 px-3"><div class="h-4 w-32 bg-bg-muted rounded animate-pulse ms-auto"></div></td>`);
					else _push(`<!---->`);
					_push(`</tr>`);
				});
				_push(`<!--]-->`);
			} else {
				_push(`<!--[-->`);
				ssrRenderList(__props.results, (result, index) => {
					_push(ssrRenderComponent(_component_PackageTableRow, {
						key: result.package.name,
						result,
						columns: __props.columns,
						index,
						filters: __props.filters,
						onClickKeyword: ($event) => emit("clickKeyword", $event)
					}, null, _parent));
				});
				_push(`<!--]-->`);
			}
			_push(`</tbody></table>`);
			if (__props.results.length === 0 && !__props.isLoading) _push(`<div class="py-12 text-center text-fg-subtle font-mono text-sm">${ssrInterpolate(_ctx.$t("filters.table.no_packages"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Package/Table.vue
var _sfc_setup$2 = Table_vue_vue_type_script_setup_true_lang_default.setup;
Table_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Table.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Table_default = Object.assign(Table_vue_vue_type_script_setup_true_lang_default, { __name: "PackageTable" });
//#endregion
//#region app/components/Package/Card.vue?vue&type=script&setup=true&lang.ts
var Card_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Card",
	__ssrInlineRender: true,
	props: {
		result: {},
		headingLevel: {},
		showPublisher: { type: Boolean },
		prefetch: { type: Boolean },
		index: {},
		filters: {},
		searchQuery: {}
	},
	emits: ["clickKeyword"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { isPackageSelected, togglePackageSelection, canSelectMore } = usePackageSelection();
		const isSelected = computed(() => {
			return isPackageSelected(props.result.package.name);
		});
		const emit = __emit;
		/** Check if this package is an exact match for the search query */
		const isExactMatch = computed(() => {
			if (!props.searchQuery) return false;
			return props.searchQuery.trim().toLowerCase() === props.result.package.name.toLowerCase();
		});
		const pkgDescription = useMarkdown(() => ({
			text: props.result.package.description ?? "",
			plain: true
		}));
		const numberFormatter = useNumberFormatter();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseCard = BaseCard_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_PackageSelectionCheckbox = SelectionCheckbox_default;
			const _component_DateTime = DateTime_default;
			const _component_ProvenanceBadge = ProvenanceBadge_default;
			const _component_ButtonBase = Base_default$1;
			_push(ssrRenderComponent(_component_BaseCard, mergeProps({
				selected: unref(isSelected),
				isExactMatch: unref(isExactMatch)
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<header class="mb-4 flex items-baseline justify-between gap-2"${_scopeId}>`);
						ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.headingLevel ?? "h3"), { class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors duration-200 min-w-0 break-all" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(_component_NuxtLink, {
										to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.result.package.name),
										"prefetch-on": __props.prefetch ? "visibility" : "interaction",
										class: "decoration-none after:content-[''] after:absolute after:inset-0",
										"data-result-index": __props.index,
										dir: "ltr"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(__props.result.package.name)}`);
											else return [createTextVNode(toDisplayString(__props.result.package.name), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									if (unref(isExactMatch)) _push(`<span class="text-xs px-1.5 py-0.5 ms-2 rounded bg-bg-elevated border border-border-hover text-fg"${_scopeId}>${ssrInterpolate(_ctx.$t("search.exact_match"))}</span>`);
									else _push(`<!---->`);
								} else return [createVNode(_component_NuxtLink, {
									to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.result.package.name),
									"prefetch-on": __props.prefetch ? "visibility" : "interaction",
									class: "decoration-none after:content-[''] after:absolute after:inset-0",
									"data-result-index": __props.index,
									dir: "ltr"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(__props.result.package.name), 1)]),
									_: 1
								}, 8, [
									"to",
									"prefetch-on",
									"data-result-index"
								]), unref(isExactMatch) ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-xs px-1.5 py-0.5 ms-2 rounded bg-bg-elevated border border-border-hover text-fg"
								}, toDisplayString(_ctx.$t("search.exact_match")), 1)) : createCommentVNode("", true)];
							}),
							_: 1
						}), _parent, _scopeId);
						_push(ssrRenderComponent(_component_PackageSelectionCheckbox, {
							"package-name": __props.result.package.name,
							disabled: !unref(canSelectMore) && !unref(isSelected),
							checked: unref(isSelected),
							onChange: unref(togglePackageSelection)
						}, null, _parent, _scopeId));
						_push(`</header><div class="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-6 sm:gap-8"${_scopeId}><div class="min-w-0 w-full"${_scopeId}>`);
						if (unref(pkgDescription)) _push(`<p class="text-fg-muted text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3"${_scopeId}><span${_scopeId}>${unref(pkgDescription) ?? ""}</span></p>`);
						else _push(`<!---->`);
						_push(`<div class="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs text-fg-muted"${_scopeId}>`);
						if (__props.showPublisher || __props.result.package.date) {
							_push(`<dl class="flex items-center gap-4 m-0"${_scopeId}>`);
							if (__props.showPublisher && __props.result.package.publisher?.username) _push(`<div class="flex items-center gap-1.5"${_scopeId}><dt class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.card.publisher"))}</dt><dd class="font-mono"${_scopeId}>${ssrInterpolate(__props.result.package.publisher.username)}</dd></div>`);
							else _push(`<!---->`);
							if (__props.result.package.date) {
								_push(`<div class="flex items-center gap-1.5"${_scopeId}><dt class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.card.published"))}</dt><dd${_scopeId}>`);
								_push(ssrRenderComponent(_component_DateTime, {
									datetime: __props.result.package.date,
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, _parent, _scopeId));
								_push(`</dd></div>`);
							} else _push(`<!---->`);
							if (__props.result.package.license) _push(`<div class="flex items-center gap-1.5"${_scopeId}><dt class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.card.license"))}</dt><dd${_scopeId}>${ssrInterpolate(__props.result.package.license)}</dd></div>`);
							else _push(`<!---->`);
							_push(`</dl>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (__props.result.downloads?.weekly) _push(`<dl class="sm:hidden flex items-center gap-4 mt-2 text-xs text-fg-muted m-0"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><dt class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.card.weekly_downloads"))}</dt><dd class="flex items-center gap-1.5"${_scopeId}><span class="i-lucide:chart-line w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span><span class="font-mono"${_scopeId}>${ssrInterpolate(_ctx.$n(__props.result.downloads.weekly))}/w</span></dd></div></dl>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex flex-col gap-2 shrink-0"${_scopeId}><div class="text-fg-subtle flex items-start gap-2 sm:justify-end"${_scopeId}>`);
						if (__props.result.package.version) _push(`<span class="font-mono text-xs truncate max-w-32"${ssrRenderAttr("title", __props.result.package.version)}${_scopeId}> v${ssrInterpolate(__props.result.package.version)}</span>`);
						else _push(`<!---->`);
						if (__props.result.package.publisher?.trustedPublisher) {
							_push(`<div class="flex items-center gap-1.5 shrink-0 max-w-32"${_scopeId}>`);
							_push(ssrRenderComponent(_component_ProvenanceBadge, {
								provider: __props.result.package.publisher.trustedPublisher.id,
								"package-name": __props.result.package.name,
								version: __props.result.package.version,
								linked: false,
								compact: ""
							}, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (__props.result.downloads?.weekly) _push(`<div class="text-fg-subtle gap-2 flex items-center sm:justify-end"${_scopeId}><span class="i-lucide:chart-line w-3.5 h-3.5" aria-hidden="true"${_scopeId}></span><span class="font-mono text-xs"${_scopeId}>${ssrInterpolate(_ctx.$n(__props.result.downloads.weekly))} ${ssrInterpolate(_ctx.$t("common.per_week"))}</span></div>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
						if (__props.result.package.keywords?.length) {
							_push(`<ul role="list"${ssrRenderAttr("aria-label", _ctx.$t("package.card.keywords"))} class="relative z-10 flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border list-none m-0 p-0 pointer-events-none items-center"${_scopeId}><!--[-->`);
							ssrRenderList(__props.result.package.keywords.slice(0, 5), (keyword) => {
								_push(`<li${_scopeId}>`);
								_push(ssrRenderComponent(_component_ButtonBase, {
									class: "pointer-events-auto",
									size: "sm",
									"aria-pressed": props.filters?.keywords.includes(keyword),
									title: `Filter by ${keyword}`,
									onClick: ($event) => emit("clickKeyword", keyword)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(keyword)}`);
										else return [createTextVNode(toDisplayString(keyword), 1)];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`</li>`);
							});
							_push(`<!--]--><li${_scopeId}>`);
							if (__props.result.package.keywords.length > 5) _push(`<span class="text-fg-subtle text-xs pointer-events-auto"${ssrRenderAttr("title", __props.result.package.keywords.slice(5).join(", "))}${_scopeId}> +${ssrInterpolate(unref(numberFormatter).format(__props.result.package.keywords.length - 5))}</span>`);
							else _push(`<!---->`);
							_push(`</li></ul>`);
						} else _push(`<!---->`);
					} else return [
						createVNode("header", { class: "mb-4 flex items-baseline justify-between gap-2" }, [(openBlock(), createBlock(resolveDynamicComponent(__props.headingLevel ?? "h3"), { class: "font-mono text-sm sm:text-base font-medium text-fg group-hover:text-fg transition-colors duration-200 min-w-0 break-all" }, {
							default: withCtx(() => [createVNode(_component_NuxtLink, {
								to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.result.package.name),
								"prefetch-on": __props.prefetch ? "visibility" : "interaction",
								class: "decoration-none after:content-[''] after:absolute after:inset-0",
								"data-result-index": __props.index,
								dir: "ltr"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.result.package.name), 1)]),
								_: 1
							}, 8, [
								"to",
								"prefetch-on",
								"data-result-index"
							]), unref(isExactMatch) ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-xs px-1.5 py-0.5 ms-2 rounded bg-bg-elevated border border-border-hover text-fg"
							}, toDisplayString(_ctx.$t("search.exact_match")), 1)) : createCommentVNode("", true)]),
							_: 1
						})), createVNode(_component_PackageSelectionCheckbox, {
							"package-name": __props.result.package.name,
							disabled: !unref(canSelectMore) && !unref(isSelected),
							checked: unref(isSelected),
							onChange: unref(togglePackageSelection)
						}, null, 8, [
							"package-name",
							"disabled",
							"checked",
							"onChange"
						])]),
						createVNode("div", { class: "flex flex-col sm:flex-row sm:justify-start sm:items-start gap-6 sm:gap-8" }, [createVNode("div", { class: "min-w-0 w-full" }, [
							unref(pkgDescription) ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-fg-muted text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3"
							}, [createVNode("span", { innerHTML: unref(pkgDescription) }, null, 8, ["innerHTML"])])) : createCommentVNode("", true),
							createVNode("div", { class: "flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs text-fg-muted" }, [__props.showPublisher || __props.result.package.date ? (openBlock(), createBlock("dl", {
								key: 0,
								class: "flex items-center gap-4 m-0"
							}, [
								__props.showPublisher && __props.result.package.publisher?.username ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex items-center gap-1.5"
								}, [createVNode("dt", { class: "sr-only" }, toDisplayString(_ctx.$t("package.card.publisher")), 1), createVNode("dd", { class: "font-mono" }, toDisplayString(__props.result.package.publisher.username), 1)])) : createCommentVNode("", true),
								__props.result.package.date ? (openBlock(), createBlock("div", {
									key: 1,
									class: "flex items-center gap-1.5"
								}, [createVNode("dt", { class: "sr-only" }, toDisplayString(_ctx.$t("package.card.published")), 1), createVNode("dd", null, [createVNode(_component_DateTime, {
									datetime: __props.result.package.date,
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, 8, ["datetime"])])])) : createCommentVNode("", true),
								__props.result.package.license ? (openBlock(), createBlock("div", {
									key: 2,
									class: "flex items-center gap-1.5"
								}, [createVNode("dt", { class: "sr-only" }, toDisplayString(_ctx.$t("package.card.license")), 1), createVNode("dd", null, toDisplayString(__props.result.package.license), 1)])) : createCommentVNode("", true)
							])) : createCommentVNode("", true)]),
							__props.result.downloads?.weekly ? (openBlock(), createBlock("dl", {
								key: 1,
								class: "sm:hidden flex items-center gap-4 mt-2 text-xs text-fg-muted m-0"
							}, [createVNode("div", { class: "flex items-center gap-1.5" }, [createVNode("dt", { class: "sr-only" }, toDisplayString(_ctx.$t("package.card.weekly_downloads")), 1), createVNode("dd", { class: "flex items-center gap-1.5" }, [createVNode("span", {
								class: "i-lucide:chart-line w-3.5 h-3.5",
								"aria-hidden": "true"
							}), createVNode("span", { class: "font-mono" }, toDisplayString(_ctx.$n(__props.result.downloads.weekly)) + "/w", 1)])])])) : createCommentVNode("", true)
						]), createVNode("div", { class: "flex flex-col gap-2 shrink-0" }, [createVNode("div", { class: "text-fg-subtle flex items-start gap-2 sm:justify-end" }, [__props.result.package.version ? (openBlock(), createBlock("span", {
							key: 0,
							class: "font-mono text-xs truncate max-w-32",
							title: __props.result.package.version
						}, " v" + toDisplayString(__props.result.package.version), 9, ["title"])) : createCommentVNode("", true), __props.result.package.publisher?.trustedPublisher ? (openBlock(), createBlock("div", {
							key: 1,
							class: "flex items-center gap-1.5 shrink-0 max-w-32"
						}, [createVNode(_component_ProvenanceBadge, {
							provider: __props.result.package.publisher.trustedPublisher.id,
							"package-name": __props.result.package.name,
							version: __props.result.package.version,
							linked: false,
							compact: ""
						}, null, 8, [
							"provider",
							"package-name",
							"version"
						])])) : createCommentVNode("", true)]), __props.result.downloads?.weekly ? (openBlock(), createBlock("div", {
							key: 0,
							class: "text-fg-subtle gap-2 flex items-center sm:justify-end"
						}, [createVNode("span", {
							class: "i-lucide:chart-line w-3.5 h-3.5",
							"aria-hidden": "true"
						}), createVNode("span", { class: "font-mono text-xs" }, toDisplayString(_ctx.$n(__props.result.downloads.weekly)) + " " + toDisplayString(_ctx.$t("common.per_week")), 1)])) : createCommentVNode("", true)])]),
						__props.result.package.keywords?.length ? (openBlock(), createBlock("ul", {
							key: 0,
							role: "list",
							"aria-label": _ctx.$t("package.card.keywords"),
							class: "relative z-10 flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border list-none m-0 p-0 pointer-events-none items-center"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.result.package.keywords.slice(0, 5), (keyword) => {
							return openBlock(), createBlock("li", { key: keyword }, [createVNode(_component_ButtonBase, {
								class: "pointer-events-auto",
								size: "sm",
								"aria-pressed": props.filters?.keywords.includes(keyword),
								title: `Filter by ${keyword}`,
								onClick: withModifiers(($event) => emit("clickKeyword", keyword), ["stop"])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(keyword), 1)]),
								_: 2
							}, 1032, [
								"aria-pressed",
								"title",
								"onClick"
							])]);
						}), 128)), createVNode("li", null, [__props.result.package.keywords.length > 5 ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-fg-subtle text-xs pointer-events-auto",
							title: __props.result.package.keywords.slice(5).join(", ")
						}, " +" + toDisplayString(unref(numberFormatter).format(__props.result.package.keywords.length - 5)), 9, ["title"])) : createCommentVNode("", true)])], 8, ["aria-label"])) : createCommentVNode("", true)
					];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region app/components/Package/Card.vue
var _sfc_setup$1 = Card_vue_vue_type_script_setup_true_lang_default.setup;
Card_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Card.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Card_default = Object.assign(Card_vue_vue_type_script_setup_true_lang_default, { __name: "PackageCard" });
//#endregion
//#region app/composables/useVirtualInfiniteScroll.ts
/**
* Composable for handling infinite scroll with virtua's WindowVirtualizer
* Detects when user scrolls near the end and triggers loading more items
* Also tracks current visible page for URL persistence
*/
function useVirtualInfiniteScroll(options) {
	const { listRef, itemCount, hasMore, isLoading, pageSize, threshold = 5, onLoadMore, onPageChange } = options;
	const fetchedCountRef = shallowRef(-1);
	const currentPage = shallowRef(1);
	function handleScroll() {
		const list = listRef.value;
		if (!list) return;
		const startIndex = list.findItemIndex(list.scrollOffset);
		const currentPageSize = toValue(pageSize);
		const newPage = Math.floor(startIndex / currentPageSize) + 1;
		if (newPage !== currentPage.value && onPageChange) {
			currentPage.value = newPage;
			onPageChange(newPage);
		}
		if (isLoading.value || !hasMore.value) return;
		const count = itemCount.value;
		if (fetchedCountRef.value >= count) return;
		const endOffset = list.scrollOffset + list.viewportSize;
		if (list.findItemIndex(endOffset) + threshold >= count) {
			fetchedCountRef.value = count;
			onLoadMore();
		}
	}
	/**
	* Scroll to a specific page (1-indexed)
	* Call this after data is loaded to restore scroll position
	*/
	function scrollToPage(page) {
		const list = listRef.value;
		if (!list || page < 1) return;
		const targetIndex = (page - 1) * toValue(pageSize);
		list.scrollToIndex(targetIndex, { align: "start" });
		currentPage.value = page;
	}
	watch(itemCount, (newCount, oldCount) => {
		if (newCount < oldCount || newCount === 0) {
			fetchedCountRef.value = -1;
			currentPage.value = 1;
		}
	});
	return {
		handleScroll,
		scrollToPage,
		currentPage
	};
}
//#endregion
//#region app/components/Package/List.vue?vue&type=script&setup=true&lang.ts
/** Number of items to render statically during SSR */
var SSR_COUNT = 20;
var List_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "List",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		results: {},
		filters: {},
		headingLevel: {},
		showPublisher: { type: Boolean },
		hasMore: { type: Boolean },
		isLoading: { type: Boolean },
		pageSize: {},
		initialPage: {},
		searchQuery: {},
		viewMode: {},
		columns: {},
		paginationMode: {},
		currentPage: {},
		searchContext: { type: Boolean }
	}, {
		"sortOption": {},
		"sortOptionModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"loadMore",
		"pageChange",
		"update:sortOption",
		"clickKeyword"
	], ["update:sortOption"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const listRef = useTemplateRef("listRef");
		/** Sort option for table header sorting */
		const sortOption = useModel(__props, "sortOption");
		const viewMode = computed(() => props.viewMode ?? "cards");
		const columns = computed(() => {
			const targetColumns = props.columns ?? DEFAULT_COLUMNS;
			if (props.searchContext) return targetColumns.map((column) => ({
				...column,
				sortable: false
			}));
			return targetColumns;
		});
		const paginationMode = computed(() => viewMode.value === "table" ? "paginated" : props.paginationMode ?? "infinite");
		const currentPage = computed(() => props.currentPage ?? 1);
		const pageSize = computed(() => props.pageSize ?? 25);
		const numericPageSize = computed(() => pageSize.value);
		const displayedResults = computed(() => {
			if (paginationMode.value === "infinite") return props.results;
			const start = (currentPage.value - 1) * numericPageSize.value;
			const end = start + numericPageSize.value;
			return props.results.slice(start, end);
		});
		const hasMore = computed(() => props.hasMore ?? false);
		const isLoading = computed(() => props.isLoading ?? false);
		const { scrollToPage } = useVirtualInfiniteScroll({
			listRef,
			itemCount: computed(() => props.results.length),
			hasMore,
			isLoading,
			pageSize: numericPageSize,
			threshold: 5,
			onLoadMore: () => emit("loadMore"),
			onPageChange: (page) => emit("pageChange", page)
		});
		const hasScrolledToInitial = shallowRef(false);
		watch([
			() => props.results.length,
			() => props.initialPage,
			listRef
		], ([length, initialPage, list]) => {
			if (!hasScrolledToInitial.value && list && length > 0 && initialPage && initialPage > 1) nextTick(() => {
				scrollToPage(initialPage);
				hasScrolledToInitial.value = true;
			});
		}, { immediate: true });
		const newSearchBatchSize = shallowRef(Infinity);
		watch(() => props.results, (newResults, oldResults) => {
			if (!oldResults || newResults.length === 0 || oldResults.length > 0 && newResults[0]?.package.name !== oldResults[0]?.package.name) {
				hasScrolledToInitial.value = false;
				newSearchBatchSize.value = newResults.length;
			}
		});
		function scrollToIndex(index, smooth = true) {
			listRef.value?.scrollToIndex(index, {
				align: "center",
				smooth
			});
		}
		__expose({ scrollToIndex });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_PackageTable = Table_default;
			const _component_ClientOnly = client_only_default;
			const _component_PackageCard = Card_default;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			if (unref(viewMode) === "table") _push(ssrRenderComponent(_component_PackageTable, {
				results: unref(displayedResults),
				filters: __props.filters,
				columns: unref(columns),
				"sort-option": sortOption.value,
				"onUpdate:sortOption": ($event) => sortOption.value = $event,
				"is-loading": unref(isLoading),
				onClickKeyword: ($event) => emit("clickKeyword", $event)
			}, null, _parent));
			else if (unref(paginationMode) === "infinite") _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<ol class="list-none m-0 p-0"${_scopeId}><!--[-->`);
					ssrRenderList(__props.results.slice(0, SSR_COUNT), (item, index) => {
						_push(`<li${_scopeId}><div class="pb-4"${_scopeId}>`);
						_push(ssrRenderComponent(_component_PackageCard, {
							result: item,
							"heading-level": __props.headingLevel,
							"show-publisher": __props.showPublisher,
							index,
							"search-query": __props.searchQuery,
							filters: __props.filters,
							onClickKeyword: ($event) => emit("clickKeyword", $event)
						}, null, _parent, _scopeId));
						_push(`</div></li>`);
					});
					_push(`<!--]--></ol>`);
				} else return [createVNode("ol", { class: "list-none m-0 p-0" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.results.slice(0, SSR_COUNT), (item, index) => {
					return openBlock(), createBlock("li", { key: item.package.name }, [createVNode("div", { class: "pb-4" }, [createVNode(_component_PackageCard, {
						result: item,
						"heading-level": __props.headingLevel,
						"show-publisher": __props.showPublisher,
						index,
						"search-query": __props.searchQuery,
						filters: __props.filters,
						onClickKeyword: ($event) => emit("clickKeyword", $event)
					}, null, 8, [
						"result",
						"heading-level",
						"show-publisher",
						"index",
						"search-query",
						"filters",
						"onClickKeyword"
					])])]);
				}), 128))])];
			}) }, _parent));
			else {
				_push(`<!--[-->`);
				if (unref(isLoading) && unref(displayedResults).length === 0) _push(`<div class="py-12 flex items-center justify-center"><div class="flex items-center gap-3 text-fg-muted font-mono text-sm"><span class="w-5 h-5 border-2 border-fg-subtle border-t-fg rounded-full motion-safe:animate-spin"></span> ${ssrInterpolate(_ctx.$t("common.loading"))}</div></div>`);
				else {
					_push(`<ol class="list-none m-0 p-0"><!--[-->`);
					ssrRenderList(unref(displayedResults), (item, index) => {
						_push(`<li class="pb-4">`);
						_push(ssrRenderComponent(_component_PackageCard, {
							result: item,
							"heading-level": __props.headingLevel,
							"show-publisher": __props.showPublisher,
							index,
							"search-query": __props.searchQuery,
							class: index >= unref(newSearchBatchSize) && "motion-safe:animate-fade-in motion-safe:animate-fill-both",
							style: index >= unref(newSearchBatchSize) ? { animationDelay: `${Math.min((index - unref(newSearchBatchSize)) * .02, .3)}s` } : {},
							filters: __props.filters,
							onClickKeyword: ($event) => emit("clickKeyword", $event)
						}, null, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ol>`);
				}
				_push(`<!--]-->`);
			}
			if (unref(isLoading) && __props.results.length === 0 && unref(viewMode) !== "table") _push(`<div class="py-12 flex items-center justify-center"><div class="flex items-center gap-3 text-fg-muted font-mono text-sm"><span class="w-5 h-5 border-2 border-fg-subtle border-t-fg rounded-full motion-safe:animate-spin"></span> ${ssrInterpolate(_ctx.$t("common.loading"))}</div></div>`);
			else if (unref(isLoading) && unref(paginationMode) === "infinite") _push(`<div class="py-4 flex items-center justify-center"><div class="flex items-center gap-3 text-fg-muted font-mono text-sm"><span class="w-4 h-4 border-2 border-fg-subtle border-t-fg rounded-full motion-safe:animate-spin"></span> ${ssrInterpolate(_ctx.$t("common.loading_more"))}</div></div>`);
			else if (!unref(hasMore) && __props.results.length > 0 && unref(paginationMode) === "infinite") _push(`<p class="py-4 text-center text-fg-subtle font-mono text-sm">${ssrInterpolate(_ctx.$t("common.end_of_results"))}</p>`);
			else _push(`<!---->`);
			if (__props.results.length === 0 && !unref(isLoading) && unref(viewMode) !== "table") _push(`<p class="py-12 text-center text-fg-subtle font-mono text-sm">${ssrInterpolate(_ctx.$t("filters.table.no_packages"))}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Package/List.vue
var _sfc_setup = List_vue_vue_type_script_setup_true_lang_default.setup;
List_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/List.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var List_default = Object.assign(List_vue_vue_type_script_setup_true_lang_default, { __name: "PackageList" });

export { List_default as L, usePackageSelection as u };
//# sourceMappingURL=List-DqbTIfaS.mjs.map

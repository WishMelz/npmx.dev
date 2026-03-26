import { _ as _plugin_vue_export_helper_default, d as useRoute, ac as refDebounced, n as nuxt_link_default, w as packageRoute, t as Base_default, B as Base_default$1, R as DateTime_default, o as client_only_default } from './server-placeholder-C9fYItBT.mjs';
import { a as useLazyAsyncData } from './asyncData-Dr04OizO.mjs';
import { b as buildVersionToTagsMap, e as buildTaggedVersionRows, h as compareTagRows, a as getVersionGroupKey, j as compareVersionGroupKeys, c as getVersionGroupLabel, f as filterVersions } from './versions-c9k_hFa5.mjs';
import { P as ProvenanceBadge_default } from './ProvenanceBadge-wpBL-1hz.mjs';
import { defineComponent, computed, shallowRef, ref, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, isRef, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { getVersions } from 'fast-npm-meta';
import { compare, validRange } from 'semver';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import '@jsr/deno__doc';
import 'valibot';
import 'node:crypto';
import 'validate-npm-package-name';
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
import 'perfect-debounce';

//#region app/pages/package/[[org]]/[name]/versions.vue?vue&type=script&setup=true&lang.ts
var SSR_COUNT = 20;
var versions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "versions",
	__ssrInlineRender: true,
	setup(__props) {
		/** Number of flat items (headers + version rows) to render statically during SSR */
		const route = useRoute();
		const packageName = computed(() => {
			const { org, name } = route.params;
			return org ? `${org}/${name}` : name;
		});
		const orgName = computed(() => route.params.org?.replace("@", "") ?? null);
		const { data: versionSummary } = useLazyAsyncData(() => `package-version-summary:${packageName.value}`, async () => {
			const data = await getVersions(packageName.value);
			return {
				distTags: data.distTags,
				versions: data.versions,
				time: data.time
			};
		}, { deep: false });
		const distTags = computed(() => versionSummary.value?.distTags ?? {});
		const versionStrings = computed(() => versionSummary.value?.versions ?? []);
		const versionTimes = computed(() => versionSummary.value?.time ?? {});
		const fullVersionMap = shallowRef(null);
		computed(() => buildVersionToTagsMap(distTags.value));
		const tagRows = computed(() => buildTaggedVersionRows(distTags.value));
		const latestTagRow = computed(() => tagRows.value.find((r) => r.tags.includes("latest")) ?? null);
		const otherTagRows = computed(() => tagRows.value.filter((r) => !r.tags.includes("latest")).sort((rowA, rowB) => compareTagRows(rowA, rowB, versionTimes.value)));
		function getVersionTime(version) {
			return versionTimes.value[version];
		}
		const expandedGroups = ref(/* @__PURE__ */ new Set());
		ref(null);
		const versionGroups = computed(() => {
			const byKey = /* @__PURE__ */ new Map();
			for (const v of versionStrings.value) {
				const key = getVersionGroupKey(v);
				if (!byKey.has(key)) byKey.set(key, []);
				byKey.get(key).push(v);
			}
			return Array.from(byKey.keys()).sort(compareVersionGroupKeys).map((groupKey) => ({
				groupKey,
				label: getVersionGroupLabel(groupKey),
				versions: byKey.get(groupKey).sort((a, b) => compare(b, a))
			}));
		});
		const versionFilterInput = ref("");
		const versionFilter = refDebounced(versionFilterInput, 100);
		const isFilterActive = computed(() => versionFilter.value.trim() !== "");
		const filteredVersionSet = computed(() => {
			const trimmed = versionFilter.value.trim();
			if (!trimmed) return null;
			if (validRange(trimmed)) return filterVersions(versionStrings.value, trimmed);
			const lower = trimmed.toLowerCase();
			return new Set(versionStrings.value.filter((v) => v.toLowerCase().includes(lower)));
		});
		const filteredGroups = computed(() => {
			if (!isFilterActive.value || !filteredVersionSet.value) return versionGroups.value;
			return versionGroups.value.map((group) => Object.assign({}, group, { versions: group.versions.filter((v) => filteredVersionSet.value.has(v)) })).filter((group) => group.versions.length > 0);
		});
		computed(() => {
			const items = [];
			for (const group of filteredGroups.value) {
				items.push({
					type: "header",
					key: `header:${group.groupKey}`,
					groupKey: group.groupKey,
					label: group.label,
					versions: group.versions
				});
				if (expandedGroups.value.has(group.groupKey) || isFilterActive.value) for (const version of group.versions) items.push({
					type: "version",
					key: `version:${version}`,
					version,
					groupKey: group.groupKey
				});
			}
			return items;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_InputBase = Base_default;
			const _component_LinkBase = Base_default$1;
			const _component_ProvenanceBadge = ProvenanceBadge_default;
			const _component_DateTime = DateTime_default;
			const _component_ClientOnly = client_only_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col" }, _attrs))} data-v-d8b05906><header class="border-b border-border bg-bg sticky top-14 z-20" data-v-d8b05906><div class="container py-3 flex items-center justify-between gap-4" data-v-d8b05906><div class="flex items-center gap-2 min-w-0" data-v-d8b05906>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName)),
				class: "text-lg font-medium hover:text-fg-muted transition-colors min-w-0 truncate",
				title: unref(packageName),
				dir: "ltr"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(orgName)) _push(`<span class="text-fg-muted" data-v-d8b05906${_scopeId}>@${ssrInterpolate(unref(orgName))}/</span>`);
						else _push(`<!---->`);
						_push(`${ssrInterpolate(unref(orgName) ? unref(packageName).replace(`@${unref(orgName)}/`, "") : unref(packageName))}`);
					} else return [unref(orgName) ? (openBlock(), createBlock("span", {
						key: 0,
						class: "text-fg-muted"
					}, "@" + toDisplayString(unref(orgName)) + "/", 1)) : createCommentVNode("", true), createTextVNode(toDisplayString(unref(orgName) ? unref(packageName).replace(`@${unref(orgName)}/`, "") : unref(packageName)), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<span class="text-fg-subtle shrink-0" data-v-d8b05906>/</span><h1 class="text-sm text-fg-muted shrink-0" data-v-d8b05906>${ssrInterpolate(_ctx.$t("package.versions.page_title"))}</h1></div>`);
			_push(ssrRenderComponent(_component_InputBase, {
				modelValue: unref(versionFilterInput),
				"onUpdate:modelValue": ($event) => isRef(versionFilterInput) ? versionFilterInput.value = $event : null,
				type: "text",
				placeholder: _ctx.$t("package.versions.version_filter_placeholder"),
				"aria-label": _ctx.$t("package.versions.version_filter_label"),
				size: "sm",
				class: "w-36 sm:w-44"
			}, null, _parent));
			_push(`</div></header><div class="container w-full py-8 space-y-8" data-v-d8b05906><section class="space-y-3" data-v-d8b05906><h2 class="text-xs text-fg-subtle uppercase tracking-wider px-4 sm:px-6 ps-1" data-v-d8b05906>${ssrInterpolate(_ctx.$t("package.versions.current_tags"))}</h2>`);
			if (unref(latestTagRow)) {
				_push(`<div class="border-y sm:rounded-lg sm:border border-accent/40 bg-accent/5 px-5 py-4 relative flex items-center justify-between gap-4 hover:bg-accent/8 transition-colors" data-v-d8b05906><div data-v-d8b05906><div class="flex items-center gap-2 mb-1.5 flex-wrap" data-v-d8b05906><span class="text-3xs font-bold uppercase tracking-widest text-accent" data-v-d8b05906>latest</span><!--[-->`);
				ssrRenderList(unref(latestTagRow).tags.filter((t) => t !== "latest"), (tag) => {
					_push(`<span class="text-3xs font-semibold uppercase tracking-wide text-fg-subtle" data-v-d8b05906>${ssrInterpolate(tag)}</span>`);
				});
				_push(`<!--]--></div>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), unref(latestTagRow).version),
					class: "text-2xl font-semibold tracking-tight after:absolute after:inset-0 after:content-['']",
					dir: "ltr"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(latestTagRow).version)}`);
						else return [createTextVNode(toDisplayString(unref(latestTagRow).version), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div><div class="flex flex-col items-end gap-1.5 shrink-0 relative z-10" data-v-d8b05906>`);
				if (unref(fullVersionMap)?.get(unref(latestTagRow).version)?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
					"package-name": unref(packageName),
					version: unref(latestTagRow).version,
					compact: "",
					linked: false
				}, null, _parent));
				else _push(`<!---->`);
				if (getVersionTime(unref(latestTagRow).version)) _push(ssrRenderComponent(_component_DateTime, {
					datetime: getVersionTime(unref(latestTagRow).version),
					class: "text-xs text-fg-subtle",
					year: "numeric",
					month: "short",
					day: "numeric"
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</div></div>`);
			} else _push(`<!---->`);
			if (unref(otherTagRows).length > 0) {
				_push(`<div class="border-y sm:rounded-lg sm:border border-border sm:overflow-hidden" data-v-d8b05906><!--[-->`);
				ssrRenderList(unref(otherTagRows), (row) => {
					_push(`<div class="flex items-center gap-4 px-4 py-2.5 border-b border-border last:border-0 hover:bg-bg-subtle transition-colors relative" data-v-d8b05906><div class="w-28 shrink-0 flex flex-wrap gap-x-1.5 gap-y-0.5" data-v-d8b05906><!--[-->`);
					ssrRenderList(row.tags, (tag) => {
						_push(`<span class="text-3xs font-semibold uppercase tracking-wide text-fg-subtle" data-v-d8b05906>${ssrInterpolate(tag)}</span>`);
					});
					_push(`<!--]--></div>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), row.version),
						class: "text-sm flex-1 min-w-0 after:absolute after:inset-0 after:content-['']",
						dir: "ltr"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(row.version)}`);
							else return [createTextVNode(toDisplayString(row.version), 1)];
						}),
						_: 2
					}, _parent));
					if (getVersionTime(row.version)) _push(ssrRenderComponent(_component_DateTime, {
						datetime: getVersionTime(row.version),
						class: "text-xs text-fg-subtle shrink-0 hidden sm:block",
						year: "numeric",
						month: "short",
						day: "numeric"
					}, null, _parent));
					else _push(`<!---->`);
					if (unref(fullVersionMap)?.get(row.version)?.hasProvenance) _push(ssrRenderComponent(_component_ProvenanceBadge, {
						"package-name": unref(packageName),
						version: row.version,
						compact: "",
						linked: false,
						class: "relative z-10 shrink-0"
					}, null, _parent));
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</section>`);
			if (unref(versionGroups).length > 0) {
				_push(`<section data-v-d8b05906><h2 class="text-xs text-fg-subtle uppercase tracking-wider mb-3 px-4 sm:px-6 ps-1" data-v-d8b05906>${ssrInterpolate(_ctx.$t("package.versions.page_title"))} <span class="ms-1 normal-case font-normal tracking-normal" data-v-d8b05906> (${ssrInterpolate(unref(versionStrings).length)}) </span></h2>`);
				if (unref(isFilterActive) && unref(filteredGroups).length === 0) _push(`<div class="px-1 py-4 text-sm text-fg-subtle" role="status" aria-live="polite" data-v-d8b05906>${ssrInterpolate(_ctx.$t("package.versions.no_match_filter", { filter: unref(versionFilter) }))}</div>`);
				else {
					_push(`<div class="flex-1 min-w-0 self-start border-y sm:border border-border sm:rounded-lg sm:overflow-hidden" data-v-d8b05906>`);
					_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div data-v-d8b05906${_scopeId}><!--[-->`);
							ssrRenderList(unref(versionGroups).slice(0, SSR_COUNT), (item) => {
								_push(`<button type="button" class="flex items-center gap-3 px-4 py-2.5 w-full text-start border-b border-border last:border-b-0"${ssrRenderAttr("aria-expanded", false)} data-v-d8b05906${_scopeId}><span class="w-4 h-4 flex items-center justify-center text-fg-subtle shrink-0" data-v-d8b05906${_scopeId}><span class="i-lucide:chevron-right w-3 h-3 rtl-flip" aria-hidden="true" data-v-d8b05906${_scopeId}></span></span><span class="text-sm font-medium" data-v-d8b05906${_scopeId}>${ssrInterpolate(item.label)}</span><span class="text-xs text-fg-subtle" data-v-d8b05906${_scopeId}>(${ssrInterpolate(item.versions.length)})</span><span class="ms-auto flex items-center gap-3 shrink-0" data-v-d8b05906${_scopeId}><span class="text-xs text-fg-muted" dir="ltr" data-v-d8b05906${_scopeId}>${ssrInterpolate(item.versions[0])}</span>`);
								if (getVersionTime(item.versions[0] ?? "")) _push(ssrRenderComponent(_component_DateTime, {
									datetime: getVersionTime(item.versions[0] ?? ""),
									class: "text-xs text-fg-subtle hidden sm:block",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
								_push(`</span></button>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", null, [(openBlock(true), createBlock(Fragment, null, renderList(unref(versionGroups).slice(0, SSR_COUNT), (item) => {
							return openBlock(), createBlock("button", {
								key: item.groupKey,
								type: "button",
								class: "flex items-center gap-3 px-4 py-2.5 w-full text-start border-b border-border last:border-b-0",
								"aria-expanded": false
							}, [
								createVNode("span", { class: "w-4 h-4 flex items-center justify-center text-fg-subtle shrink-0" }, [createVNode("span", {
									class: "i-lucide:chevron-right w-3 h-3 rtl-flip",
									"aria-hidden": "true"
								})]),
								createVNode("span", { class: "text-sm font-medium" }, toDisplayString(item.label), 1),
								createVNode("span", { class: "text-xs text-fg-subtle" }, "(" + toDisplayString(item.versions.length) + ")", 1),
								createVNode("span", { class: "ms-auto flex items-center gap-3 shrink-0" }, [createVNode("span", {
									class: "text-xs text-fg-muted",
									dir: "ltr"
								}, toDisplayString(item.versions[0]), 1), getVersionTime(item.versions[0] ?? "") ? (openBlock(), createBlock(_component_DateTime, {
									key: 0,
									datetime: getVersionTime(item.versions[0] ?? ""),
									class: "text-xs text-fg-subtle hidden sm:block",
									year: "numeric",
									month: "short",
									day: "numeric"
								}, null, 8, ["datetime"])) : createCommentVNode("", true)])
							]);
						}), 128))])];
					}) }, _parent));
					_push(`</div>`);
				}
				_push(`</section>`);
			} else _push(`<!---->`);
			_push(`</div></main>`);
		};
	}
});
//#endregion
//#region app/pages/package/[[org]]/[name]/versions.vue
var _sfc_setup = versions_vue_vue_type_script_setup_true_lang_default.setup;
versions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package/[[org]]/[name]/versions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var versions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(versions_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-d8b05906"]]);

export { versions_default as default };
//# sourceMappingURL=versions-qI-aj-Bw.mjs.map

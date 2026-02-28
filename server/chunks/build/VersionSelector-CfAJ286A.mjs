import { C as onClickOutside, n as nuxt_link_default, q as packageRoute } from './server.mjs';
import { b as buildVersionToTagsMap, g as getPrereleaseChannel, i as isSameVersionGroup, a as getVersionGroupKey, c as getVersionGroupLabel } from './versions-DO0mMTkZ.mjs';
import { defineComponent, shallowRef, useTemplateRef, ref, computed, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { compare } from 'semver';

/** All version groups (dist-tags + major versions) */
var VersionSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VersionSelector",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		currentVersion: {},
		versions: {},
		distTags: {},
		urlPattern: {}
	},
	setup(__props) {
		const props = __props;
		const isOpen = shallowRef(false);
		const dropdownRef = useTemplateRef("dropdownRef");
		useTemplateRef("listboxRef");
		const focusedIndex = shallowRef(-1);
		onClickOutside(dropdownRef, () => {
			isOpen.value = false;
		});
		const versionGroups = ref([]);
		/** Whether we've loaded all versions from the API */
		const hasLoadedAll = shallowRef(false);
		shallowRef(false);
		/** Cached full version list */
		const allVersionsCache = shallowRef(null);
		const latestVersion = computed(() => props.distTags.latest);
		const versionToTags = computed(() => buildVersionToTagsMap(props.distTags));
		/** Get URL for a specific version */
		function getVersionUrl(version) {
			return props.urlPattern.replace("{version}", version);
		}
		/** Safe semver comparison with fallback */
		function safeCompareVersions(a, b) {
			try {
				return compare(a, b);
			} catch {
				return a.localeCompare(b);
			}
		}
		/** Build initial version groups from dist-tags only */
		function buildInitialGroups() {
			const groups = [];
			const seenVersions = /* @__PURE__ */ new Set();
			const versionMap = /* @__PURE__ */ new Map();
			for (const [tag, version] of Object.entries(props.distTags)) {
				const existing = versionMap.get(version);
				if (existing) existing.tags.push(tag);
				else versionMap.set(version, { tags: [tag] });
			}
			for (const entry of versionMap.values()) entry.tags.sort((a, b) => {
				if (a === "latest") return -1;
				if (b === "latest") return 1;
				return a.localeCompare(b);
			});
			const sortedEntries = Array.from(versionMap.entries()).sort((a, b) => safeCompareVersions(b[0], a[0]));
			for (const [version, { tags }] of sortedEntries) {
				seenVersions.add(version);
				const primaryTag = tags[0];
				groups.push({
					id: `tag:${primaryTag}`,
					label: primaryTag,
					primaryVersion: {
						version,
						tags,
						isCurrent: version === props.currentVersion
					},
					versions: [],
					isExpanded: false,
					isLoading: false
				});
			}
			return groups;
		}
		versionGroups.value = buildInitialGroups();
		/** Process loaded versions and populate groups */
		function processLoadedVersions(allVersions) {
			const groups = [];
			const claimedVersions = /* @__PURE__ */ new Set();
			for (const [tag, tagVersion] of Object.entries(props.distTags)) {
				const existingGroup = groups.find((g) => g.primaryVersion.version === tagVersion);
				if (existingGroup) {
					if (!existingGroup.primaryVersion.tags?.includes(tag)) {
						existingGroup.primaryVersion.tags = [...existingGroup.primaryVersion.tags ?? [], tag];
						existingGroup.primaryVersion.tags.sort((a, b) => {
							if (a === "latest") return -1;
							if (b === "latest") return 1;
							return a.localeCompare(b);
						});
						existingGroup.label = existingGroup.primaryVersion.tags[0];
						existingGroup.id = `tag:${existingGroup.label}`;
					}
					continue;
				}
				const tagChannel = getPrereleaseChannel(tagVersion);
				const channelVersions = allVersions.filter((v) => {
					const vChannel = getPrereleaseChannel(v.version);
					return isSameVersionGroup(v.version, tagVersion) && vChannel === tagChannel;
				}).sort((a, b) => safeCompareVersions(b.version, a.version)).map((v) => ({
					version: v.version,
					tags: versionToTags.value.get(v.version),
					isCurrent: v.version === props.currentVersion
				}));
				for (const v of channelVersions) claimedVersions.add(v.version);
				groups.push({
					id: `tag:${tag}`,
					label: tag,
					primaryVersion: {
						version: tagVersion,
						tags: versionToTags.value.get(tagVersion),
						isCurrent: tagVersion === props.currentVersion
					},
					versions: channelVersions,
					isExpanded: false,
					isLoading: false
				});
			}
			groups.sort((a, b) => safeCompareVersions(b.primaryVersion.version, a.primaryVersion.version));
			const deduped = [];
			for (const group of groups) {
				const existing = deduped.find((g) => g.primaryVersion.version === group.primaryVersion.version);
				if (existing) {
					const allTags = [...existing.primaryVersion.tags ?? [], ...group.primaryVersion.tags ?? []];
					const uniqueTags = [...new Set(allTags)].sort((a, b) => {
						if (a === "latest") return -1;
						if (b === "latest") return 1;
						return a.localeCompare(b);
					});
					existing.primaryVersion.tags = uniqueTags;
					existing.label = uniqueTags[0];
					existing.id = `tag:${existing.label}`;
				} else deduped.push(group);
			}
			const byGroupKey = /* @__PURE__ */ new Map();
			for (const v of allVersions) {
				if (claimedVersions.has(v.version)) continue;
				const groupKey = getVersionGroupKey(v.version);
				if (!byGroupKey.has(groupKey)) byGroupKey.set(groupKey, []);
				byGroupKey.get(groupKey).push({
					version: v.version,
					tags: versionToTags.value.get(v.version),
					isCurrent: v.version === props.currentVersion
				});
			}
			const sortedGroupKeys = Array.from(byGroupKey.keys()).sort((a, b) => {
				const [aMajor, aMinor] = a.split(".").map(Number);
				const [bMajor, bMinor] = b.split(".").map(Number);
				if (aMajor !== bMajor) return (bMajor ?? 0) - (aMajor ?? 0);
				return (bMinor ?? -1) - (aMinor ?? -1);
			});
			for (const groupKey of sortedGroupKeys) {
				const versions = byGroupKey.get(groupKey);
				versions.sort((a, b) => safeCompareVersions(b.version, a.version));
				const primaryVersion = versions[0];
				if (primaryVersion) deduped.push({
					id: `group:${groupKey}`,
					label: getVersionGroupLabel(groupKey),
					primaryVersion,
					versions,
					isExpanded: false,
					isLoading: false
				});
			}
			versionGroups.value = deduped;
		}
		/** Flat list of navigable items for keyboard navigation */
		const flatItems = computed(() => {
			const items = [];
			for (const group of versionGroups.value) {
				items.push({
					type: "group",
					groupId: group.id,
					version: group.primaryVersion
				});
				if (group.isExpanded && group.versions.length > 1) for (const v of group.versions.slice(1)) items.push({
					type: "version",
					groupId: group.id,
					version: v
				});
			}
			return items;
		});
		watch(isOpen, (open) => {
			if (open) {
				const currentIdx = flatItems.value.findIndex((item) => item.version?.isCurrent);
				focusedIndex.value = currentIdx >= 0 ? currentIdx : 0;
			}
		});
		watch(() => [
			props.distTags,
			props.versions,
			props.currentVersion
		], () => {
			if (hasLoadedAll.value && allVersionsCache.value) processLoadedVersions(allVersionsCache.value);
			else versionGroups.value = buildInitialGroups();
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "dropdownRef",
				ref: dropdownRef,
				class: "relative"
			}, _attrs))}><button type="button" aria-haspopup="listbox"${ssrRenderAttr("aria-expanded", unref(isOpen))} class="flex items-center gap-1.5 text-fg-subtle font-mono text-sm hover:text-fg transition-[color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"><span dir="ltr">${ssrInterpolate(__props.currentVersion)}</span>`);
			if (__props.currentVersion === unref(latestVersion)) _push(`<span class="text-xs px-1.5 py-0.5 rounded badge-green font-sans font-medium"> latest </span>`);
			else _push(`<!---->`);
			_push(`<span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-lucide:chevron-down w-3.5 h-3.5 transition-[transform] duration-200 motion-reduce:transition-none"])}" aria-hidden="true"></span></button>`);
			if (unref(isOpen)) {
				_push(`<div role="listbox" tabindex="0"${ssrRenderAttr("aria-activedescendant", unref(focusedIndex) >= 0 ? `version-${unref(flatItems)[unref(focusedIndex)]?.version?.version}` : void 0)} class="absolute top-full inset-is-0 mt-2 min-w-[220px] bg-bg-subtle/80 backdrop-blur-sm border border-border-subtle rounded-lg shadow-lg shadow-fg-subtle/10 z-50 py-1 max-h-[400px] overflow-y-auto overscroll-contain focus-visible:outline-none"><!--[-->`);
				ssrRenderList(unref(versionGroups), (group) => {
					_push(`<div><div${ssrRenderAttr("id", `version-${group.primaryVersion.version}`)} role="option"${ssrRenderAttr("aria-selected", group.primaryVersion.isCurrent)}${ssrRenderAttr("data-focused", unref(flatItems)[unref(focusedIndex)]?.groupId === group.id && unref(flatItems)[unref(focusedIndex)]?.type === "group")} class="${ssrRenderClass([[group.primaryVersion.isCurrent ? "text-fg bg-bg-muted" : "text-fg-muted", unref(flatItems)[unref(focusedIndex)]?.groupId === group.id && unref(flatItems)[unref(focusedIndex)]?.type === "group" ? "bg-bg-muted" : ""], "flex items-center gap-2 px-3 py-2 text-sm font-mono hover:bg-bg-muted transition-[color,background-color] focus-visible:outline-none"])}">`);
					if (group.versions.length > 1 || !unref(hasLoadedAll)) {
						_push(`<button type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0"${ssrRenderAttr("aria-expanded", group.isExpanded)}${ssrRenderAttr("aria-label", group.isExpanded ? "Collapse" : "Expand")}>`);
						if (group.isLoading) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3" aria-hidden="true"></span>`);
						else _push(`<span class="${ssrRenderClass([group.isExpanded ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3 h-3 transition-transform duration-200 rtl-flip"])}" aria-hidden="true"></span>`);
						_push(`</button>`);
					} else _push(`<span class="w-4"></span>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: getVersionUrl(group.primaryVersion.version),
						class: "flex-1 truncate hover:text-fg transition-colors",
						onClick: ($event) => isOpen.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span dir="ltr"${_scopeId}>${ssrInterpolate(group.primaryVersion.version)}</span>`);
							else return [createVNode("span", { dir: "ltr" }, toDisplayString(group.primaryVersion.version), 1)];
						}),
						_: 2
					}, _parent));
					if (group.primaryVersion.tags?.length) {
						_push(`<span class="flex items-center gap-1 shrink-0"><!--[-->`);
						ssrRenderList(group.primaryVersion.tags, (tag) => {
							_push(`<span class="${ssrRenderClass([tag === "latest" ? "badge-green" : "badge-subtle", "text-xs px-1.5 py-0.5 rounded font-sans font-medium"])}">${ssrInterpolate(tag)}</span>`);
						});
						_push(`<!--]--></span>`);
					} else _push(`<!---->`);
					_push(`</div>`);
					if (group.isExpanded && group.versions.length > 1) {
						_push(`<div class="ms-6 border-is border-border"><!--[-->`);
						ssrRenderList(group.versions.slice(1), (v) => {
							_push(ssrRenderComponent(_component_NuxtLink, {
								id: `version-${v.version}`,
								to: getVersionUrl(v.version),
								role: "option",
								"aria-selected": v.isCurrent,
								"data-focused": unref(flatItems)[unref(focusedIndex)]?.groupId === group.id && unref(flatItems)[unref(focusedIndex)]?.type === "version" && unref(flatItems)[unref(focusedIndex)]?.version?.version === v.version,
								class: ["flex items-center justify-between gap-2 ps-4 pe-3 py-1.5 text-xs font-mono hover:bg-bg-muted transition-[color,background-color] focus-visible:outline-none", [v.isCurrent ? "text-fg bg-bg-muted" : "text-fg-subtle", unref(flatItems)[unref(focusedIndex)]?.version?.version === v.version ? "bg-bg-muted" : ""]],
								onClick: ($event) => isOpen.value = false
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<span class="truncate" dir="ltr"${_scopeId}>${ssrInterpolate(v.version)}</span>`);
										if (v.tags?.length) {
											_push(`<span class="flex items-center gap-1 shrink-0"${_scopeId}><!--[-->`);
											ssrRenderList(v.tags, (tag) => {
												_push(`<span class="${ssrRenderClass([tag === "latest" ? "bg-emerald-500/10 text-emerald-400" : "bg-bg-muted text-fg-subtle", "text-4xs px-1 py-0.5 rounded font-sans font-medium"])}"${_scopeId}>${ssrInterpolate(tag)}</span>`);
											});
											_push(`<!--]--></span>`);
										} else _push(`<!---->`);
									} else return [createVNode("span", {
										class: "truncate",
										dir: "ltr"
									}, toDisplayString(v.version), 1), v.tags?.length ? (openBlock(), createBlock("span", {
										key: 0,
										class: "flex items-center gap-1 shrink-0"
									}, [(openBlock(true), createBlock(Fragment, null, renderList(v.tags, (tag) => {
										return openBlock(), createBlock("span", {
											key: tag,
											class: ["text-4xs px-1 py-0.5 rounded font-sans font-medium", tag === "latest" ? "bg-emerald-500/10 text-emerald-400" : "bg-bg-muted text-fg-subtle"]
										}, toDisplayString(tag), 3);
									}), 128))])) : createCommentVNode("", true)];
								}),
								_: 2
							}, _parent));
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--><div class="border-t border-border mt-1 pt-1 px-3 py-2">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(__props.packageName),
					class: "text-xs text-fg-subtle hover:text-fg transition-[color] focus-visible:outline-none focus-visible:text-fg",
					onClick: ($event) => isOpen.value = false
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("package.versions.view_all", { count: Object.keys(__props.versions).length }, Object.keys(__props.versions).length))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("package.versions.view_all", { count: Object.keys(__props.versions).length }, Object.keys(__props.versions).length)), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = VersionSelector_vue_vue_type_script_setup_true_lang_default.setup;
VersionSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionSelector.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VersionSelector_default = Object.assign(VersionSelector_vue_vue_type_script_setup_true_lang_default, { __name: "VersionSelector" });

export { VersionSelector_default as V };
//# sourceMappingURL=VersionSelector-CfAJ286A.mjs.map

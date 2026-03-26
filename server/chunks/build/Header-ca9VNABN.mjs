import { $ as useState, _ as _plugin_vue_export_helper_default, a0 as useElementBounding, a1 as useEventListener, a2 as useScroll, P as useClipboard, i as useRouter, w as packageRoute, a3 as diffRoute, C as useKeyboardShortcuts, G as onKeyStroke, F as navigateTo, H as isKeyWithoutModifiers, I as isEditableElement, B as Base_default, m as Base_default$1, d as useRoute, L as onClickOutside, n as nuxt_link_default, a4 as createSharedComposable, a5 as useMediaQuery, O as tryOnScopeDispose } from './server-placeholder-C9fYItBT.mjs';
import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { a as useCompactNumberFormatter } from './useNumberFormatter-6MIdB6Qd.mjs';
import { C as CopyToClipboardButton_default } from './CopyToClipboardButton-TTydHqo-.mjs';
import { u as useAtproto, t as togglePackageLike, a as useModal } from './likes-xTtdlbfa.mjs';
import { b as buildVersionToTagsMap, g as getPrereleaseChannel, i as isSameVersionGroup, a as getVersionGroupKey, c as getVersionGroupLabel } from './versions-c9k_hFa5.mjs';
import { defineComponent, useTemplateRef, shallowRef, watch, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, ref, mergeProps, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { compare } from 'semver';

//#region app/components/Package/Likes.vue?vue&type=script&setup=true&lang.ts
var Likes_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Likes",
	__ssrInlineRender: true,
	props: { packageName: {} },
	setup(__props) {
		const props = __props;
		const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
		const likeAnimKey = shallowRef(0);
		const showLikeFloat = shallowRef(false);
		const likeFloatKey = shallowRef(0);
		let likeFloatTimer = null;
		const heartAnimStyle = computed(() => {
			if (likeAnimKey.value === 0 || prefersReducedMotion.value) return {};
			return { animation: likesData.value?.userHasLiked ? "heart-spring 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards" : "heart-unlike 0.3s ease forwards" };
		});
		const { user } = useAtproto();
		const authModal = useModal("auth-modal");
		const compactNumberFormatter = useCompactNumberFormatter();
		const { data: likesData, status: likeStatus } = useFetch(() => `/api/social/likes/${props.packageName}`, {
			default: () => ({
				totalLikes: 0,
				userHasLiked: false
			}),
			server: false
		}, "$t4kUyqFdSL");
		const isLoadingLikeData = computed(() => likeStatus.value === "pending" || likeStatus.value === "idle");
		const isLikeActionPending = shallowRef(false);
		const likeAction = async () => {
			if (user.value?.handle == null) {
				authModal.open();
				return;
			}
			if (isLikeActionPending.value) return;
			const currentlyLiked = likesData.value?.userHasLiked ?? false;
			const currentLikes = likesData.value?.totalLikes ?? 0;
			likeAnimKey.value++;
			if (!currentlyLiked && !prefersReducedMotion.value) {
				if (likeFloatTimer !== null) {
					clearTimeout(likeFloatTimer);
					likeFloatTimer = null;
				}
				likeFloatKey.value++;
				showLikeFloat.value = true;
				likeFloatTimer = setTimeout(() => {
					showLikeFloat.value = false;
					likeFloatTimer = null;
				}, 850);
			}
			likesData.value = {
				totalLikes: currentlyLiked ? currentLikes - 1 : currentLikes + 1,
				userHasLiked: !currentlyLiked
			};
			isLikeActionPending.value = true;
			try {
				const result = await togglePackageLike(props.packageName, currentlyLiked, user.value?.handle);
				isLikeActionPending.value = false;
				if (result.success) likesData.value = result.data;
				else likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
			} catch {
				likesData.value = {
					totalLikes: currentLikes,
					userHasLiked: currentlyLiked
				};
				isLikeActionPending.value = false;
			}
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TooltipApp = App_default;
			const _component_ButtonBase = Base_default$1;
			_push(ssrRenderComponent(_component_TooltipApp, mergeProps({
				text: unref(isLoadingLikeData) ? _ctx.$t("common.loading") : unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
				position: "bottom",
				class: "items-center",
				strategy: "fixed"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="${ssrRenderClass(_ctx.$style.likeWrapper)}"${_scopeId}>`);
						if (unref(showLikeFloat)) _push(`<span aria-hidden="true" class="${ssrRenderClass(_ctx.$style.likeFloat)}"${_scopeId}>+1</span>`);
						else _push(`<!---->`);
						_push(ssrRenderComponent(_component_ButtonBase, {
							onClick: likeAction,
							size: "md",
							"aria-label": unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
							"aria-pressed": unref(likesData)?.userHasLiked
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="${ssrRenderClass([unref(likesData)?.userHasLiked ? "i-lucide:heart-minus fill-red-500 text-red-500" : "i-lucide:heart-plus", "inline-block w-4 h-4"])}" style="${ssrRenderStyle(unref(heartAnimStyle))}" aria-hidden="true"${_scopeId}></span>`);
									if (unref(isLoadingLikeData)) _push(`<span class="i-svg-spinners:ring-resize w-3 h-3 my-0.5" aria-hidden="true"${_scopeId}></span>`);
									else _push(`<span${_scopeId}>${ssrInterpolate(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0))}</span>`);
								} else return [(openBlock(), createBlock("span", {
									key: unref(likeAnimKey),
									class: [unref(likesData)?.userHasLiked ? "i-lucide:heart-minus fill-red-500 text-red-500" : "i-lucide:heart-plus", "inline-block w-4 h-4"],
									style: unref(heartAnimStyle),
									"aria-hidden": "true"
								}, null, 6)), unref(isLoadingLikeData) ? (openBlock(), createBlock("span", {
									key: 0,
									class: "i-svg-spinners:ring-resize w-3 h-3 my-0.5",
									"aria-hidden": "true"
								})) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: _ctx.$style.likeWrapper }, [unref(showLikeFloat) ? (openBlock(), createBlock("span", {
						key: unref(likeFloatKey),
						"aria-hidden": "true",
						class: _ctx.$style.likeFloat
					}, "+1", 2)) : createCommentVNode("", true), createVNode(_component_ButtonBase, {
						onClick: likeAction,
						size: "md",
						"aria-label": unref(likesData)?.userHasLiked ? _ctx.$t("package.likes.unlike") : _ctx.$t("package.likes.like"),
						"aria-pressed": unref(likesData)?.userHasLiked
					}, {
						default: withCtx(() => [(openBlock(), createBlock("span", {
							key: unref(likeAnimKey),
							class: [unref(likesData)?.userHasLiked ? "i-lucide:heart-minus fill-red-500 text-red-500" : "i-lucide:heart-plus", "inline-block w-4 h-4"],
							style: unref(heartAnimStyle),
							"aria-hidden": "true"
						}, null, 6)), unref(isLoadingLikeData) ? (openBlock(), createBlock("span", {
							key: 0,
							class: "i-svg-spinners:ring-resize w-3 h-3 my-0.5",
							"aria-hidden": "true"
						})) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(compactNumberFormatter).format(unref(likesData)?.totalLikes ?? 0)), 1))]),
						_: 1
					}, 8, ["aria-label", "aria-pressed"])], 2)];
				}),
				_: 1
			}, _parent));
		};
	}
});
var Likes_vue_vue_type_style_index_0_lang_module_default = {
	likeWrapper: "_likeWrapper_1eigf_2",
	likeFloat: "_likeFloat_1eigf_7",
	"float-up": "_float-up_1eigf_1"
};
//#endregion
//#region app/components/Package/Likes.vue
var cssModules$1 = { "$style": Likes_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup$2 = Likes_vue_vue_type_script_setup_true_lang_default.setup;
Likes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Likes.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Likes_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Likes_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]), { __name: "PackageLikes" });
//#endregion
//#region app/components/VersionSelector.vue?vue&type=script&setup=true&lang.ts
/** All version groups (dist-tags + major versions) */
var VersionSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VersionSelector",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		currentVersion: {},
		versions: {},
		distTags: {},
		urlPattern: {},
		positionClass: { default: "inset-is-0" }
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
			}, _attrs))}><button type="button" aria-haspopup="listbox"${ssrRenderAttr("aria-expanded", unref(isOpen))} class="break-all text-start text-fg-subtle font-mono text-sm hover:text-fg transition-[color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded" data-testid="version-selector-button"><span dir="ltr" class="me-1.5">${ssrInterpolate(__props.currentVersion)}</span>`);
			if (__props.currentVersion === unref(latestVersion)) _push(`<span class="text-xs px-1.5 py-0.5 rounded badge-accent font-sans font-medium me-1.5"> latest </span>`);
			else _push(`<!---->`);
			_push(`<span class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "i-lucide:chevron-down w-3.5 h-3.5 transition-[transform] duration-200 motion-reduce:transition-none vertical-middle"])}" aria-hidden="true"></span></button>`);
			if (unref(isOpen)) {
				_push(`<div role="listbox" tabindex="0"${ssrRenderAttr("aria-activedescendant", unref(focusedIndex) >= 0 ? `version-${unref(flatItems)[unref(focusedIndex)]?.version?.version}` : void 0)} class="${ssrRenderClass([__props.positionClass, "absolute top-full mt-2 min-w-[220px] max-w-[calc(100vw-40px)] bg-bg-subtle/80 backdrop-blur-sm border border-border-subtle rounded-lg shadow-lg shadow-fg-subtle/10 z-50 py-1 max-h-[400px] overflow-y-auto overscroll-contain focus-visible:outline-none"])}"><!--[-->`);
				ssrRenderList(unref(versionGroups), (group) => {
					_push(`<div><div${ssrRenderAttr("id", `version-${group.primaryVersion.version}`)} role="option"${ssrRenderAttr("aria-selected", group.primaryVersion.isCurrent)}${ssrRenderAttr("data-focused", unref(flatItems)[unref(focusedIndex)]?.groupId === group.id && unref(flatItems)[unref(focusedIndex)]?.type === "group")} class="${ssrRenderClass([[group.primaryVersion.isCurrent ? "text-fg bg-bg-muted" : "text-fg-muted", unref(flatItems)[unref(focusedIndex)]?.groupId === group.id && unref(flatItems)[unref(focusedIndex)]?.type === "group" ? "bg-bg-muted" : ""], "flex items-center gap-2 px-3 py-2 text-sm font-mono hover:bg-bg-muted transition-[color,background-color] focus-visible:outline-none"])}">`);
					if (group.versions.length > 1 || !unref(hasLoadedAll)) {
						_push(`<button type="button" class="w-4 h-4 flex items-center justify-center text-fg-subtle hover:text-fg transition-colors shrink-0"${ssrRenderAttr("aria-expanded", group.isExpanded)}${ssrRenderAttr("aria-label", group.isExpanded ? _ctx.$t("common.collapse") : _ctx.$t("common.expand"))}>`);
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
							_push(`<span class="${ssrRenderClass([tag === "latest" ? "badge-accent" : "badge-subtle", "text-xs px-1.5 py-0.5 rounded font-sans font-medium"])}">${ssrInterpolate(tag)}</span>`);
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
												_push(`<span class="${ssrRenderClass([tag === "latest" ? "badge-accent" : "badge-subtle", "text-4xs px-1 py-0.5 rounded font-sans font-medium"])}"${_scopeId}>${ssrInterpolate(tag)}</span>`);
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
											class: ["text-4xs px-1 py-0.5 rounded font-sans font-medium", tag === "latest" ? "badge-accent" : "badge-subtle"]
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
//#endregion
//#region app/components/VersionSelector.vue
var _sfc_setup$1 = VersionSelector_vue_vue_type_script_setup_true_lang_default.setup;
VersionSelector_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VersionSelector.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var VersionSelector_default = Object.assign(VersionSelector_vue_vue_type_script_setup_true_lang_default, { __name: "VersionSelector" });
//#endregion
//#region app/composables/useScrollToTop.ts
var easeOutQuad = (t) => t * (2 - t);
var SCROLL_TO_TOP_DURATION = 500;
/**
* Scroll to the top of the page with a smooth animation.
* @param options - Configuration options for the scroll animation.
* @returns An object containing the scrollToTop function and a cancel function.
*/
var useScrollToTop = createSharedComposable(function useScrollToTop() {
	const preferReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	/**
	* Active requestAnimationFrame id for the current auto-scroll animation
	*/
	let rafId = null;
	const isScrolling = ref(false);
	/**
	* Stop any in-flight auto-scroll before starting a new one.
	*/
	function cancel() {
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
		isScrolling.value = false;
	}
	function scrollToTop() {
		cancel();
		if (preferReducedMotion.value) {
			(void 0).scrollTo({
				top: 0,
				behavior: "instant"
			});
			return;
		}
		const start = (void 0).scrollY;
		if (start <= 0) return;
		isScrolling.value = true;
		const startTime = performance.now();
		const change = -start;
		function animate() {
			const elapsed = performance.now() - startTime;
			const t = Math.min(elapsed / SCROLL_TO_TOP_DURATION, 1);
			const y = start + change * easeOutQuad(t);
			(void 0).scrollTo({ top: y });
			if (t < 1 && isScrolling.value) rafId = requestAnimationFrame(animate);
			else cancel();
		}
		rafId = requestAnimationFrame(animate);
	}
	tryOnScopeDispose(cancel);
	return {
		scrollToTop,
		cancel,
		isTouchDeviceClient: shallowRef(false)
	};
});
//#endregion
//#region app/composables/usePackageRoute.ts
/**
* Parse package name and optional version from the route URL.
*
* Routes use structured params:
*   /package/nuxt → org: undefined, name: "nuxt"
*   /package/@nuxt/kit → org: "@nuxt", name: "kit"
*   /package/nuxt/v/4.2.0 → org: undefined, name: "nuxt", version: "4.2.0"
*   /package/@nuxt/kit/v/1.0.0 → org: "@nuxt", name: "kit", version: "1.0.0"
*/
function usePackageRoute() {
	const route = useRoute();
	return {
		packageName: computed(() => {
			const { org, name } = route.params;
			return org ? `${org}/${name}` : name;
		}),
		requestedVersion: computed(() => "version" in route.params ? route.params.version : null),
		orgName: computed(() => {
			const org = route.params.org;
			return org ? org.replace(/^@/, "") : null;
		})
	};
}
//#endregion
//#region app/composables/usePackageHeaderHeight.ts
function usePackageHeaderHeight() {
	return useState("package-header-height", () => 0);
}
//#endregion
//#region app/components/Package/Header.vue?vue&type=script&setup=true&lang.ts
var Header_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Header",
	__ssrInlineRender: true,
	props: {
		pkg: {},
		resolvedVersion: {},
		displayVersion: {},
		latestVersion: {},
		provenanceData: {},
		provenanceStatus: {},
		page: {},
		versionUrlPattern: {}
	},
	setup(__props) {
		const props = __props;
		const { requestedVersion, orgName } = usePackageRoute();
		const { scrollToTop } = useScrollToTop();
		const packageHeaderHeight = usePackageHeaderHeight();
		const header = useTemplateRef("header");
		const isHeaderPinned = shallowRef(false);
		const { height: headerHeight } = useElementBounding(header);
		function isStickyPinned(el) {
			if (!el) return false;
			const style = getComputedStyle(el);
			const top = parseFloat(style.top) || 0;
			const rect = el.getBoundingClientRect();
			return Math.abs(rect.top - top) < 1;
		}
		function checkHeaderPosition() {
			isHeaderPinned.value = isStickyPinned(header.value);
		}
		useEventListener("scroll", checkHeaderPosition, { passive: true });
		useEventListener("resize", checkHeaderPosition);
		watch(headerHeight, (value) => {
			packageHeaderHeight.value = Math.max(0, value);
		}, { immediate: true });
		const navExtraOffsetStyle = { "--package-nav-extra": "0px" };
		const { y: scrollY } = useScroll(void 0);
		const showScrollToTop = computed(() => scrollY.value > 300);
		const packageName = computed(() => props.pkg?.name ?? "");
		const { copied: copiedPkgName, copy: copyPkgName } = useClipboard({
			source: packageName,
			copiedDuring: 2e3
		});
		function hasProvenance(version) {
			if (!version?.dist) return false;
			return !!version.dist.attestations;
		}
		const router = useRouter();
		const docsLink = computed(() => {
			if (!props.resolvedVersion) return null;
			return {
				name: "docs",
				params: { path: [
					props.pkg?.name ?? "",
					"v",
					props.resolvedVersion
				] }
			};
		});
		const codeLink = computed(() => {
			if (props.pkg == null || props.resolvedVersion == null) return null;
			const split = props.pkg.name.split("/");
			return {
				name: "code",
				params: {
					org: split.length === 2 ? split[0] : void 0,
					packageName: split.length === 2 ? split[1] : split[0],
					version: props.resolvedVersion,
					filePath: ""
				}
			};
		});
		const mainLink = computed(() => {
			if (props.pkg == null || props.resolvedVersion == null) return null;
			return packageRoute(props.pkg.name, props.resolvedVersion);
		});
		const diffLink = computed(() => {
			if (props.pkg == null || props.resolvedVersion == null || props.latestVersion == null || props.latestVersion.version === props.resolvedVersion) return null;
			return diffRoute(props.pkg.name, props.resolvedVersion, props.latestVersion.version);
		});
		const keyboardShortcuts = useKeyboardShortcuts();
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, ".") && !isEditableElement(e.target), (e) => {
			if (codeLink.value === null) return;
			e.preventDefault();
			navigateTo(codeLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "m") && !isEditableElement(e.target), (e) => {
			if (mainLink.value === null) return;
			e.preventDefault();
			navigateTo(mainLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "d") && !isEditableElement(e.target), (e) => {
			if (!docsLink.value) return;
			e.preventDefault();
			navigateTo(docsLink.value);
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "c") && !isEditableElement(e.target), (e) => {
			if (!props.pkg) return;
			e.preventDefault();
			router.push({
				name: "compare",
				query: { packages: props.pkg.name }
			});
		}, { dedupe: true });
		onKeyStroke((e) => keyboardShortcuts.value && isKeyWithoutModifiers(e, "f") && !isEditableElement(e.target), (e) => {
			if (diffLink.value === null) return;
			e.preventDefault();
			navigateTo(diffLink.value);
		}, { dedupe: true });
		const fundingUrl = computed(() => {
			let funding = props.displayVersion?.funding;
			if (Array.isArray(funding)) funding = funding[0];
			if (!funding) return null;
			return typeof funding === "string" ? funding : funding.url;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CopyToClipboardButton = CopyToClipboardButton_default;
			const _component_LinkBase = Base_default;
			const _component_PackageLikes = Likes_default;
			const _component_ButtonBase = Base_default$1;
			const _component_TooltipApp = App_default;
			const _component_VersionSelector = VersionSelector_default;
			_push(`<!--[--><header class="bg-bg pt-5 pb-1 w-full container"><div class="flex items-baseline justify-between gap-x-2 gap-y-1 flex-wrap min-w-0">`);
			_push(ssrRenderComponent(_component_CopyToClipboardButton, {
				copied: unref(copiedPkgName),
				"copy-text": _ctx.$t("package.copy_name"),
				class: "flex flex-col items-start min-w-0",
				onClick: ($event) => unref(copyPkgName)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h1 class="font-mono text-lg sm:text-3xl font-medium min-w-0 break-words"${ssrRenderAttr("title", __props.pkg?.name)} dir="ltr"${_scopeId}>`);
						if (unref(orgName)) _push(ssrRenderComponent(_component_LinkBase, { to: {
							name: "org",
							params: { org: unref(orgName) }
						} }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` @${ssrInterpolate(unref(orgName))}`);
								else return [createTextVNode(" @" + toDisplayString(unref(orgName)), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if (unref(orgName)) _push(`<span${_scopeId}>/</span>`);
						else _push(`<!---->`);
						_push(`<span class="${ssrRenderClass({ "text-fg-muted": unref(orgName) })}"${_scopeId}>${ssrInterpolate(unref(orgName) ? __props.pkg?.name.replace(`@${unref(orgName)}/`, "") : __props.pkg?.name)}</span></h1>`);
					} else return [createVNode("h1", {
						class: "font-mono text-lg sm:text-3xl font-medium min-w-0 break-words",
						title: __props.pkg?.name,
						dir: "ltr"
					}, [
						unref(orgName) ? (openBlock(), createBlock(_component_LinkBase, {
							key: 0,
							to: {
								name: "org",
								params: { org: unref(orgName) }
							}
						}, {
							default: withCtx(() => [createTextVNode(" @" + toDisplayString(unref(orgName)), 1)]),
							_: 1
						}, 8, ["to"])) : createCommentVNode("", true),
						unref(orgName) ? (openBlock(), createBlock("span", { key: 1 }, "/")) : createCommentVNode("", true),
						createVNode("span", { class: { "text-fg-muted": unref(orgName) } }, toDisplayString(unref(orgName) ? __props.pkg?.name.replace(`@${unref(orgName)}/`, "") : __props.pkg?.name), 3)
					], 8, ["title"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex gap-2 flex-wrap items-stretch">`);
			_push(ssrRenderComponent(_component_LinkBase, {
				variant: "button-secondary",
				to: {
					name: "compare",
					query: { packages: unref(packageName) }
				},
				"aria-keyshortcuts": "c",
				classicon: "i-lucide:git-compare"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="max-sm:sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.links.compare_this_package"))}</span>`);
					else return [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(_ctx.$t("package.links.compare_this_package")), 1)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_PackageLikes, { packageName: unref(packageName) }, null, _parent));
			if (unref(fundingUrl)) _push(ssrRenderComponent(_component_LinkBase, {
				variant: "button-secondary",
				to: unref(fundingUrl),
				classicon: "i-lucide:handshake text-accent"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="max-sm:sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("package.links.fund"))}</span>`);
					else return [createVNode("span", { class: "max-sm:sr-only" }, toDisplayString(_ctx.$t("package.links.fund")), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div></div></header><div class="${ssrRenderClass([[_ctx.$style.packageHeader], "w-full bg-bg sticky top-14 z-10 border-b border-border pt-2"])}" data-testid="package-subheader"><div class="w-full container flex flex-col md:flex-row-reverse items-baseline justify-between gap-x-2 gap-y-1 flex-wrap"><div class="flex items-center max-md:justify-between max-md:w-full max-md:flex-row-reverse gap-2">`);
			_push(ssrRenderComponent(_component_ButtonBase, {
				variant: "secondary",
				"aria-label": _ctx.$t("common.scroll_to_top"),
				onClick: unref(scrollToTop),
				classicon: "i-lucide:arrow-up",
				class: [unref(showScrollToTop) ? "" : "opacity-0 pointer-events-none select-none", "py-1.5 px-2.5 sm:me-2"],
				tabindex: unref(showScrollToTop) ? 0 : -1
			}, null, _parent));
			_push(`<div class="flex-inline items-center flex-nowrap gap-1 font-mono text-fg-muted">`);
			if (__props.displayVersion && hasProvenance(__props.displayVersion)) _push(ssrRenderComponent(_component_TooltipApp, {
				text: __props.provenanceData && __props.provenanceStatus !== "pending" ? _ctx.$t("package.provenance_section.built_and_signed_on", { provider: __props.provenanceData.providerLabel }) : _ctx.$t("package.verified_provenance"),
				position: "bottom",
				strategy: "fixed"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_LinkBase, {
						variant: "button-secondary",
						to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), __props.resolvedVersion, "#provenance"),
						"aria-label": _ctx.$t("package.provenance_section.view_more_details"),
						classicon: "i-lucide:shield-check",
						class: "py-1.25 px-2 me-2"
					}, null, _parent, _scopeId));
					else return [createVNode(_component_LinkBase, {
						variant: "button-secondary",
						to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), __props.resolvedVersion, "#provenance"),
						"aria-label": _ctx.$t("package.provenance_section.view_more_details"),
						classicon: "i-lucide:shield-check",
						class: "py-1.25 px-2 me-2"
					}, null, 8, ["to", "aria-label"])];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (unref(requestedVersion) && __props.resolvedVersion !== unref(requestedVersion)) _push(ssrRenderComponent(_component_TooltipApp, {
				text: unref(requestedVersion),
				position: "bottom",
				strategy: "fixed",
				class: "vertical-middle"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="i-lucide:cable rtl-flip min-w-3 w-3 h-3 mx-1" aria-hidden="true"${_scopeId}></span>`);
					else return [createVNode("span", {
						class: "i-lucide:cable rtl-flip min-w-3 w-3 h-3 mx-1",
						"aria-hidden": "true"
					})];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.resolvedVersion && __props.pkg?.versions && __props.pkg?.["dist-tags"]) _push(ssrRenderComponent(_component_VersionSelector, {
				"package-name": unref(packageName),
				"current-version": __props.resolvedVersion,
				versions: __props.pkg.versions,
				"dist-tags": __props.pkg["dist-tags"],
				"url-pattern": __props.versionUrlPattern,
				"position-class": "max-md:inset-is-0 md:inset-ie-0"
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div></div>`);
			if (__props.resolvedVersion) {
				_push(`<nav${ssrRenderAttr("aria-label", _ctx.$t("package.navigation"))} style="${ssrRenderStyle(navExtraOffsetStyle)}" class="${ssrRenderClass([_ctx.$style.packageNav, "flex gap-4 me-auto -mb-px max-w-full overflow-x-auto"])}">`);
				if (unref(mainLink)) _push(ssrRenderComponent(_component_LinkBase, {
					to: unref(mainLink),
					"aria-keyshortcuts": "m",
					class: ["decoration-none border-b-2 p-1 hover:border-accent/50 lowercase focus-visible:[outline-offset:-2px]!", __props.page === "main" ? "border-accent text-accent!" : "border-transparent"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("package.links.main"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("package.links.main")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(docsLink)) _push(ssrRenderComponent(_component_LinkBase, {
					to: unref(docsLink),
					"aria-keyshortcuts": "d",
					class: ["decoration-none border-b-2 p-1 hover:border-accent/50 focus-visible:[outline-offset:-2px]!", __props.page === "docs" ? "border-accent text-accent!" : "border-transparent"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("package.links.docs"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("package.links.docs")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(codeLink)) _push(ssrRenderComponent(_component_LinkBase, {
					to: unref(codeLink),
					"aria-keyshortcuts": ".",
					class: ["decoration-none border-b-2 p-1 hover:border-accent/50 focus-visible:[outline-offset:-2px]!", __props.page === "code" ? "border-accent text-accent!" : "border-transparent"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("package.links.code"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("package.links.code")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (unref(diffLink)) _push(ssrRenderComponent(_component_LinkBase, {
					to: unref(diffLink),
					title: _ctx.$t("compare.compare_versions_title"),
					"aria-keyshortcuts": "f",
					class: ["decoration-none border-b-2 p-1 hover:border-accent/50 focus-visible:[outline-offset:-2px]!", __props.page === "diff" ? "border-accent text-accent!" : "border-transparent"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(_ctx.$t("compare.compare_versions"))}`);
						else return [createTextVNode(toDisplayString(_ctx.$t("compare.compare_versions")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</nav>`);
			} else _push(`<!---->`);
			_push(`</div></div><!--]-->`);
		};
	}
});
var Header_vue_vue_type_style_index_0_lang_module_default = {
	packageHeader: "_packageHeader_xmqtd_2",
	packageNav: "_packageNav_xmqtd_12"
};
//#endregion
//#region app/components/Package/Header.vue
var cssModules = { "$style": Header_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = Header_vue_vue_type_script_setup_true_lang_default.setup;
Header_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/Header.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Header_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Header_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]), { __name: "PackageHeader" });

export { Header_default as H, VersionSelector_default as V, usePackageRoute as a, usePackageHeaderHeight as u };
//# sourceMappingURL=Header-ca9VNABN.mjs.map

import { g as useRoute, a as useRouter, V as diffRoute, b as useSeoMeta$1, n as nuxt_link_default, q as packageRoute, D as client_only_default, _ as _plugin_vue_export_helper_default, u as useI18n, C as onClickOutside } from './server.mjs';
import { a as useFetch } from './fetch-BX-wNfYP.mjs';
import { u as usePackage } from './usePackage-BKsfNl2r.mjs';
import { V as VersionSelector_default } from './VersionSelector-CfAJ286A.mjs';
import { T as Toggle_server_default } from './Toggle.server-C3otQ64r.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, useModel, mergeModels, useTemplateRef, watchEffect, resolveComponent, provide, inject, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'valibot';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
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
import 'vue-router';
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'perfect-debounce';
import '@vue/shared';
import './versions-DO0mMTkZ.mjs';
import './SkeletonBlock-CUGWiqJT.mjs';

var FileTree_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FileTree",
	__ssrInlineRender: true,
	props: {
		files: {},
		selectedPath: {},
		treeNodes: {},
		depth: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const depth = computed(() => props.depth ?? 0);
		function sortTree(nodes) {
			return nodes.map((n) => ({
				...n,
				children: n.children ? sortTree(n.children) : void 0
			})).sort((a, b) => {
				if (a.type !== b.type) return a.type === "directory" ? -1 : 1;
				return a.name.localeCompare(b.name);
			});
		}
		function buildTree(files) {
			const root = [];
			for (const file of files) {
				const parts = file.path.split("/");
				let current = root;
				for (let i = 0; i < parts.length; i++) {
					const part = parts[i];
					const isFile = i === parts.length - 1;
					const path = parts.slice(0, i + 1).join("/");
					let node = current.find((n) => n.name === part);
					if (!node) {
						node = {
							name: part,
							path,
							type: isFile ? "file" : "directory",
							changeType: isFile ? file.type : void 0,
							children: isFile ? void 0 : []
						};
						current.push(node);
					}
					if (!isFile) current = node.children;
				}
			}
			return sortTree(root);
		}
		const tree = computed(() => props.treeNodes ?? buildTree(props.files));
		function isNodeActive(node) {
			if (props.selectedPath === node.path) return true;
			if (props.selectedPath?.startsWith(node.path + "/")) return true;
			return false;
		}
		const expandedDirs = ref(/* @__PURE__ */ new Set());
		function collectDirs(nodes) {
			for (const node of nodes) if (node.type === "directory") {
				expandedDirs.value.add(node.path);
				if (node.children) collectDirs(node.children);
			}
		}
		watchEffect(() => {
			if (props.depth === void 0 || props.depth === 0) collectDirs(tree.value);
		});
		function isExpanded(path) {
			return expandedDirs.value.has(path);
		}
		function getChangeIcon(type) {
			switch (type) {
				case "added": return "i-lucide:file-plus text-green-500";
				case "removed": return "i-lucide:file-minus text-red-500";
				case "modified": return "i-lucide:file-diff text-yellow-500";
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_FileTree = resolveComponent("FileTree", true);
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: ["list-none m-0 p-0", unref(depth) === 0 ? "py-2" : ""] }, _attrs))}><!--[-->`);
			ssrRenderList(unref(tree), (node) => {
				_push(`<li>`);
				if (node.type === "directory") {
					_push(`<!--[--><button type="button" class="${ssrRenderClass([isNodeActive(node) ? "text-fg" : "text-fg-muted", "w-full flex items-center gap-1.5 py-1.5 px-3 text-start font-mono text-sm transition-colors hover:bg-bg-muted"])}" style="${ssrRenderStyle({ paddingLeft: `${unref(depth) * 12 + 12}px` })}"><span class="${ssrRenderClass([[isExpanded(node.path) ? "i-lucide:chevron-down" : "i-lucide:chevron-right"], "w-4 h-4 shrink-0 transition-transform"])}"></span><span class="${ssrRenderClass([isExpanded(node.path) ? "i-lucide:folder-open text-yellow-500" : "i-lucide:folder text-yellow-600", "w-4 h-4 shrink-0"])}"></span><span class="truncate">${ssrInterpolate(node.name)}</span></button>`);
					if (isExpanded(node.path) && node.children) _push(ssrRenderComponent(_component_FileTree, {
						files: __props.files,
						"tree-nodes": node.children,
						"selected-path": __props.selectedPath,
						depth: unref(depth) + 1,
						onSelect: ($event) => emit("select", $event)
					}, null, _parent));
					else _push(`<!---->`);
					_push(`<!--]-->`);
				} else _push(`<button type="button" class="${ssrRenderClass([__props.selectedPath === node.path ? "bg-bg-muted text-fg" : "text-fg-muted", "w-full flex items-center gap-1.5 py-1.5 px-3 font-mono text-sm transition-colors hover:bg-bg-muted text-start"])}" style="${ssrRenderStyle({ paddingLeft: `${unref(depth) * 12 + 32}px` })}"><span class="${ssrRenderClass([getChangeIcon(node.changeType), "w-4 h-4 shrink-0"])}"></span><span class="truncate">${ssrInterpolate(node.name)}</span></button>`);
				_push(`</li>`);
			});
			_push(`<!--]--></ul>`);
		};
	}
});
var _sfc_setup$7 = FileTree_vue_vue_type_script_setup_true_lang_default.setup;
FileTree_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/FileTree.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var FileTree_default = Object.assign(FileTree_vue_vue_type_script_setup_true_lang_default, { __name: "DiffFileTree" });
var SidebarPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SidebarPanel",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		compare: {},
		groupedDeps: {},
		allChanges: {},
		showSettings: { type: Boolean }
	}, {
		"selectedFile": { default: null },
		"selectedFileModifiers": {},
		"fileFilter": { default: "all" },
		"fileFilterModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["file-select"], ["update:selectedFile", "update:fileFilter"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const selectedFile = useModel(__props, "selectedFile");
		const fileFilter = useModel(__props, "fileFilter");
		const sectionOrder = [
			"dependencies",
			"devDependencies",
			"peerDependencies",
			"optionalDependencies"
		];
		const { t } = useI18n();
		const sectionMeta = computed(() => ({
			dependencies: {
				label: t("compare.dependencies"),
				icon: "i-lucide:box"
			},
			devDependencies: {
				label: t("compare.dev_dependencies"),
				icon: "i-lucide:wrench"
			},
			peerDependencies: {
				label: t("compare.peer_dependencies"),
				icon: "i-lucide:users"
			},
			optionalDependencies: {
				label: t("compare.optional_dependencies"),
				icon: "i-lucide:circle-help"
			}
		}));
		const sectionList = computed(() => {
			return Array.from(props.groupedDeps.entries()).map(([key, changes]) => ({
				key,
				changes,
				label: sectionMeta.value[key]?.label ?? key,
				icon: sectionMeta.value[key]?.icon ?? "i-lucide:box",
				order: sectionOrder.indexOf(key) === -1 ? sectionOrder.length + 1 : sectionOrder.indexOf(key)
			})).sort((a, b) => a.order - b.order);
		});
		const fileSearch = ref("");
		const filteredChanges = computed(() => {
			let files = props.allChanges;
			if (fileFilter.value !== "all") files = files.filter((f) => f.type === fileFilter.value);
			if (fileSearch.value.trim()) {
				const query = fileSearch.value.trim().toLowerCase();
				files = files.filter((f) => f.path.toLowerCase().includes(query));
			}
			return files;
		});
		function getSemverBadgeClass(semverDiff) {
			switch (semverDiff) {
				case "major": return "bg-red-500/10 text-red-500";
				case "minor": return "bg-yellow-500/10 text-yellow-500";
				case "patch": return "bg-green-500/10 text-green-500";
				case "prerelease": return "bg-purple-500/10 text-purple-500";
				default: return "bg-bg-muted text-fg-subtle";
			}
		}
		function handleFileSelect(file) {
			selectedFile.value = file;
			emit("file-select", file);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_DiffFileTree = FileTree_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-0" }, _attrs))}><div class="border-b border-border shrink-0"><div class="px-3 py-2.5 border-b border-border"><div class="flex flex-wrap items-center justify-between gap-2"><span class="text-xs font-medium flex items-center gap-1.5"><span class="i-lucide-lightbulb w-3.5 h-3.5"></span> ${ssrInterpolate(_ctx.$t("compare.summary"))}</span><div class="flex items-center gap-3 font-mono text-3xs"><span class="flex items-center gap-1"><span class="text-green-500">+${ssrInterpolate(__props.compare.stats.filesAdded)}</span><span class="text-fg-subtle">/</span><span class="text-red-500">-${ssrInterpolate(__props.compare.stats.filesRemoved)}</span><span class="text-fg-subtle">/</span><span class="text-yellow-500">~${ssrInterpolate(__props.compare.stats.filesModified)}</span></span>`);
			if (__props.compare.dependencyChanges.length > 0) _push(`<span class="text-fg-muted">${ssrInterpolate(_ctx.$t("compare.deps_count", { count: __props.compare.dependencyChanges.length }))}</span>`);
			else _push(`<!---->`);
			_push(`</div></div></div>`);
			if (__props.compare.meta.warnings?.length) {
				_push(`<div class="px-3 py-2 bg-yellow-500/5 border-b border-border"><div class="flex items-start gap-2"><span class="i-lucide:triangle-alert w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5"></span><div class="text-3xs text-fg-muted"><!--[-->`);
				ssrRenderList(__props.compare.meta.warnings, (warning) => {
					_push(`<p>${ssrInterpolate(warning)}</p>`);
				});
				_push(`<!--]--></div></div></div>`);
			} else _push(`<!---->`);
			if (__props.compare.dependencyChanges.length > 0) {
				_push(`<div class="px-3 py-2.5 space-y-2"><!--[-->`);
				ssrRenderList(unref(sectionList), (section) => {
					_push(`<details class="group"><summary class="cursor-pointer list-none flex items-center gap-2 text-xs font-medium mb-2 hover:text-fg transition-colors"><span class="i-lucide:chevron-right w-3.5 h-3.5 transition-transform group-open:rotate-90"></span><span class="${ssrRenderClass([section.icon, "w-3.5 h-3.5"])}"></span> ${ssrInterpolate(section.label)} (${ssrInterpolate(section.changes.length)}) </summary><div class="space-y-1 ms-5 max-h-40 overflow-y-auto"><!--[-->`);
					ssrRenderList(section.changes, (dep) => {
						_push(`<div class="flex items-center gap-2 text-xs py-0.5"><span class="${ssrRenderClass(["w-3 h-3 shrink-0", dep.type === "added" ? "i-lucide:plus text-green-500" : dep.type === "removed" ? "i-lucide:minus text-red-500" : "i-lucide:arrow-left-right text-yellow-500"])}"></span>`);
						_push(ssrRenderComponent(_component_NuxtLink, {
							to: unref(packageRoute)(dep.name),
							class: "font-mono hover:text-fg transition-colors truncate min-w-0"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(dep.name)}`);
								else return [createTextVNode(toDisplayString(dep.name), 1)];
							}),
							_: 2
						}, _parent));
						_push(`<div class="flex items-center gap-1.5 text-fg-muted font-mono text-3xs ms-auto shrink-0">`);
						if (dep.from) _push(`<span class="${ssrRenderClass({ "line-through opacity-50": dep.type === "updated" })}">${ssrInterpolate(dep.from)}</span>`);
						else _push(`<!---->`);
						if (dep.type === "updated") _push(`<span class="i-lucide:arrow-right w-2.5 h-2.5"></span>`);
						else _push(`<!---->`);
						if (dep.to) _push(`<span>${ssrInterpolate(dep.to)}</span>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (dep.semverDiff) _push(`<span class="${ssrRenderClass([getSemverBadgeClass(dep.semverDiff), "text-4xs px-1.5 py-0.5 rounded font-medium shrink-0"])}">${ssrInterpolate(dep.semverDiff)}</span>`);
						else _push(`<!---->`);
						_push(`</div>`);
					});
					_push(`<!--]--></div></details>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			if (__props.compare.dependencyChanges.length === 0 && !__props.compare.meta.warnings?.length) _push(`<div class="px-3 py-2 text-3xs text-fg-muted text-center">${ssrInterpolate(_ctx.$t("compare.no_dependency_changes"))}</div>`);
			else _push(`<!---->`);
			_push(`</div><details class="flex-1 flex flex-col open:flex-1 group min-h-0" open><summary class="border-b border-border px-3 py-2 shrink-0 cursor-pointer list-none flex items-center justify-between gap-2"><span class="text-xs font-medium flex items-center gap-1.5"><span class="i-lucide:file-text w-3.5 h-3.5"></span> ${ssrInterpolate(_ctx.$t("compare.file_changes"))}</span><span class="i-lucide:chevron-right w-3.5 h-3.5 transition-transform group-open:rotate-90"></span></summary><div class="border-b border-border px-3 py-2 shrink-0 space-y-2"><div class="relative"><span class="absolute inset-is-2 top-1/2 -translate-y-1/2 i-lucide:search w-3 h-3 text-fg-subtle pointer-events-none"></span><input${ssrRenderAttr("value", unref(fileSearch))} type="search"${ssrRenderAttr("placeholder", _ctx.$t("compare.search_files_placeholder"))}${ssrRenderAttr("aria-label", _ctx.$t("compare.search_files_placeholder"))} class="w-full text-2xs ps-6.5 pe-2 py-1 bg-bg-subtle border border-border rounded font-mono placeholder:text-fg-subtle transition-colors hover:border-border-hover focus:border-accent focus:outline-none"></div><div class="flex items-center justify-end"><select${ssrRenderAttr("aria-label", _ctx.$t("compare.filter_files_label"))} class="text-3xs px-2 py-1 bg-bg-subtle border border-border rounded font-mono cursor-pointer hover:border-border-hover transition-colors"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(fileFilter.value) ? ssrLooseContain(fileFilter.value, "all") : ssrLooseEqual(fileFilter.value, "all")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("compare.file_filter_option.all", { count: __props.allChanges.length }))}</option><option value="added"${ssrIncludeBooleanAttr(Array.isArray(fileFilter.value) ? ssrLooseContain(fileFilter.value, "added") : ssrLooseEqual(fileFilter.value, "added")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("compare.file_filter_option.added", { count: __props.compare.stats.filesAdded }))}</option><option value="removed"${ssrIncludeBooleanAttr(Array.isArray(fileFilter.value) ? ssrLooseContain(fileFilter.value, "removed") : ssrLooseEqual(fileFilter.value, "removed")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("compare.file_filter_option.removed", { count: __props.compare.stats.filesRemoved }))}</option><option value="modified"${ssrIncludeBooleanAttr(Array.isArray(fileFilter.value) ? ssrLooseContain(fileFilter.value, "modified") : ssrLooseEqual(fileFilter.value, "modified")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("compare.file_filter_option.modified", { count: __props.compare.stats.filesModified }))}</option></select></div></div><div class="flex-1 overflow-y-auto min-h-0">`);
			if (unref(filteredChanges).length === 0) _push(`<div class="p-8 text-center text-xs text-fg-muted">${ssrInterpolate(unref(fileSearch).trim() ? _ctx.$t("compare.no_files_search", { query: unref(fileSearch).trim() }) : fileFilter.value === "all" ? _ctx.$t("compare.no_files_all") : fileFilter.value === "added" ? _ctx.$t("compare.no_files_filtered", { filter: _ctx.$t("compare.filter.added") }) : fileFilter.value === "removed" ? _ctx.$t("compare.no_files_filtered", { filter: _ctx.$t("compare.filter.removed") }) : _ctx.$t("compare.no_files_filtered", { filter: _ctx.$t("compare.filter.modified") }))}</div>`);
			else _push(ssrRenderComponent(_component_DiffFileTree, {
				files: unref(filteredChanges),
				"selected-path": selectedFile.value?.path ?? null,
				onSelect: handleFileSelect
			}, null, _parent));
			_push(`</div></details></div>`);
		};
	}
});
var _sfc_setup$6 = SidebarPanel_vue_vue_type_script_setup_true_lang_default.setup;
SidebarPanel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/SidebarPanel.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var SidebarPanel_default = Object.assign(SidebarPanel_vue_vue_type_script_setup_true_lang_default, { __name: "DiffSidebarPanel" });
var Line_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Line",
	__ssrInlineRender: true,
	props: { line: {} },
	setup(__props) {
		const props = __props;
		const diffContext = inject("diffContext");
		const lineNumberNew = computed(() => {
			if (props.line.type === "normal") return props.line.newLineNumber;
			return props.line.lineNumber ?? props.line.newLineNumber;
		});
		const lineNumberOld = computed(() => {
			if (props.line.type === "normal") return props.line.oldLineNumber;
			return props.line.type === "delete" ? props.line.lineNumber ?? props.line.oldLineNumber : void 0;
		});
		const rowClasses = computed(() => {
			const shouldWrap = diffContext?.wordWrap?.value ?? false;
			const classes = [
				"whitespace-pre-wrap",
				"box-border",
				"border-none"
			];
			if (shouldWrap) classes.push("min-h-6");
			else classes.push("h-6", "min-h-6");
			const fileStatus = diffContext?.fileStatus.value;
			if (props.line.type === "insert" && fileStatus !== "add") classes.push("bg-[var(--code-added)]/10");
			if (props.line.type === "delete" && fileStatus !== "delete") classes.push("bg-[var(--code-removed)]/10");
			return classes;
		});
		const borderClasses = computed(() => {
			const classes = [
				"border-transparent",
				"w-1",
				"border-is-3"
			];
			if (props.line.type === "insert") classes.push("border-[color:var(--code-added)]/60");
			if (props.line.type === "delete") classes.push("border-[color:var(--code-removed)]/80");
			return classes;
		});
		const contentClasses = computed(() => {
			return ["pe-6", diffContext?.wordWrap?.value ?? false ? "whitespace-pre-wrap break-words" : "text-nowrap"];
		});
		function escapeHtml(str) {
			return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		}
		const renderedSegments = computed(() => props.line.content.map((seg) => ({
			html: seg.html ?? escapeHtml(seg.value),
			type: seg.type
		})));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<tr${ssrRenderAttrs(mergeProps({
				"data-line-new": unref(lineNumberNew),
				"data-line-old": unref(lineNumberOld),
				"data-line-kind": __props.line.type,
				class: unref(rowClasses)
			}, _attrs))} data-v-da0fa903><td class="${ssrRenderClass(unref(borderClasses))}" data-v-da0fa903></td><td class="tabular-nums text-center opacity-50 px-2 text-xs select-none w-12 shrink-0" data-v-da0fa903>${ssrInterpolate(__props.line.type === "delete" ? "–" : unref(lineNumberNew))}</td><td class="${ssrRenderClass(unref(contentClasses))}" data-v-da0fa903>`);
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.line.type === "insert" ? "ins" : __props.line.type === "delete" ? "del" : "span"), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(unref(renderedSegments), (seg, i) => {
							_push(`<span class="${ssrRenderClass({
								"bg-[var(--code-added)]/20": seg.type === "insert",
								"bg-[var(--code-removed)]/20": seg.type === "delete"
							})}" data-v-da0fa903${_scopeId}>${seg.html ?? ""}</span>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(renderedSegments), (seg, i) => {
						return openBlock(), createBlock("span", {
							key: i,
							class: {
								"bg-[var(--code-added)]/20": seg.type === "insert",
								"bg-[var(--code-removed)]/20": seg.type === "delete"
							},
							innerHTML: seg.html
						}, null, 10, ["innerHTML"]);
					}), 128))];
				}),
				_: 1
			}), _parent);
			_push(`</td></tr>`);
		};
	}
});
var _sfc_setup$5 = Line_vue_vue_type_script_setup_true_lang_default.setup;
Line_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/Line.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Line_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Line_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-da0fa903"]]), { __name: "DiffLine" });
var Hunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Hunk",
	__ssrInlineRender: true,
	props: { hunk: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DiffLine = Line_default;
			_push(`<!--[-->`);
			ssrRenderList(__props.hunk.lines, (line, index) => {
				_push(ssrRenderComponent(_component_DiffLine, {
					key: index,
					line
				}, null, _parent));
			});
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$4 = Hunk_vue_vue_type_script_setup_true_lang_default.setup;
Hunk_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/Hunk.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Hunk_default = Object.assign(Hunk_vue_vue_type_script_setup_true_lang_default, { __name: "DiffHunk" });
var SkipBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkipBlock",
	__ssrInlineRender: true,
	props: {
		count: {},
		content: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><tr class="h-2"></tr><tr class="h-10 font-mono bg-bg-muted text-fg-muted"><td></td><td class="opacity-50 select-none text-center"><span class="i-lucide:chevrons-up-down w-4 h-4"></span></td><td><span class="px-0 sticky inset-is-2 italic opacity-50">${ssrInterpolate(__props.content || _ctx.$t("compare.lines_hidden", { count: __props.count }))}</span></td></tr><tr class="h-2"></tr><!--]-->`);
		};
	}
});
var _sfc_setup$3 = SkipBlock_vue_vue_type_script_setup_true_lang_default.setup;
SkipBlock_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/SkipBlock.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SkipBlock_default = Object.assign(SkipBlock_vue_vue_type_script_setup_true_lang_default, { __name: "DiffSkipBlock" });
var Table_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Table",
	__ssrInlineRender: true,
	props: {
		hunks: {},
		type: {},
		fileName: {},
		wordWrap: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		provide("diffContext", {
			fileStatus: computed(() => props.type),
			wordWrap: computed(() => props.wordWrap ?? false)
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DiffHunk = Hunk_default;
			const _component_DiffSkipBlock = SkipBlock_default;
			_push(`<table${ssrRenderAttrs(mergeProps({ class: "diff-table shiki font-mono text-sm w-full m-0 border-separate border-0 outline-none overflow-x-auto border-spacing-0" }, _attrs))} data-v-431bbde8><tbody class="w-full box-border" data-v-431bbde8><!--[-->`);
			ssrRenderList(__props.hunks, (hunk, index) => {
				_push(`<!--[-->`);
				if (hunk.type === "hunk") _push(ssrRenderComponent(_component_DiffHunk, { hunk }, null, _parent));
				else _push(ssrRenderComponent(_component_DiffSkipBlock, {
					count: hunk.count,
					content: hunk.content
				}, null, _parent));
				_push(`<!--]-->`);
			});
			_push(`<!--]--></tbody></table>`);
		};
	}
});
var _sfc_setup$2 = Table_vue_vue_type_script_setup_true_lang_default.setup;
Table_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/Table.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Table_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Table_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-431bbde8"]]), { __name: "DiffTable" });
var ViewerPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ViewerPanel",
	__ssrInlineRender: true,
	props: {
		packageName: {},
		fromVersion: {},
		toVersion: {},
		file: {}
	},
	setup(__props) {
		const props = __props;
		const mergeModifiedLines = ref(true);
		const maxChangeRatio = ref(.45);
		const maxDiffDistance = ref(30);
		const inlineMaxCharEdits = ref(2);
		const wordWrap = ref(false);
		const showOptions = ref(false);
		onClickOutside(useTemplateRef("optionsDropdownRef"), () => {
			showOptions.value = false;
		});
		const { data: diff, status, error: loadError } = useFetch(computed(() => `/api/registry/compare-file/${props.packageName}/v/${props.fromVersion}...${props.toVersion}/${props.file.path}`), {
			query: computed(() => ({
				mergeModifiedLines: String(mergeModifiedLines.value),
				maxChangeRatio: String(maxChangeRatio.value),
				maxDiffDistance: String(maxDiffDistance.value),
				inlineMaxCharEdits: String(inlineMaxCharEdits.value)
			})),
			timeout: 15e3
		}, "$U90D3AHmZ-");
		function calcPercent(value, min, max) {
			if (max === min) return 0;
			const percent = (value - min) / (max - min) * 100;
			return Math.min(100, Math.max(0, percent));
		}
		function getStepMarks(min, max, step) {
			const marks = [];
			const range = max - min;
			const stepCount = Math.floor(range / step);
			if (stepCount <= 10) for (let i = 1; i <= stepCount; i++) {
				const positionPercent = i * step / range * 100;
				marks.push(positionPercent);
			}
			return marks;
		}
		const changeRatioMarks = computed(() => getStepMarks(0, 1, .1));
		const diffDistanceMarks = computed(() => getStepMarks(1, 60, 10));
		const charEditMarks = computed(() => []);
		const changeRatioPercent = computed(() => calcPercent(maxChangeRatio.value, 0, 1));
		const diffDistancePercent = computed(() => calcPercent(maxDiffDistance.value, 1, 60));
		const charEditPercent = computed(() => calcPercent(inlineMaxCharEdits.value, 0, 10));
		function formatBytes(bytes) {
			if (bytes === void 0) return "";
			if (bytes < 1024) return `${bytes} B`;
			if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
			return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		}
		function getCodeUrl(version) {
			return `/package-code/${props.packageName}/v/${version}/${props.file.path}`;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SettingsToggle = Toggle_server_default;
			const _component_NuxtLink = nuxt_link_default;
			const _component_DiffTable = Table_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col bg-bg" }, _attrs))} data-v-c6d08c92><div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-bg-subtle border-b border-border shrink-0" data-v-c6d08c92><div class="flex items-center gap-3 min-w-0 flex-1" data-v-c6d08c92><span class="${ssrRenderClass(["w-4 h-4 shrink-0", __props.file.type === "added" ? "i-lucide:plus text-green-500" : __props.file.type === "removed" ? "i-lucide:minus text-red-500" : "i-lucide:pen text-yellow-500"])}" data-v-c6d08c92></span><span class="font-mono text-sm truncate max-w-[65vw] sm:max-w-none" data-v-c6d08c92>${ssrInterpolate(__props.file.path)}</span>`);
			if (unref(diff)?.stats) {
				_push(`<!--[-->`);
				if (unref(diff).stats.additions > 0) _push(`<span class="text-xs text-green-500 font-mono shrink-0" data-v-c6d08c92> +${ssrInterpolate(unref(diff).stats.additions)}</span>`);
				else _push(`<!---->`);
				if (unref(diff).stats.deletions > 0) _push(`<span class="text-xs text-red-500 font-mono shrink-0" data-v-c6d08c92> -${ssrInterpolate(unref(diff).stats.deletions)}</span>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			if (__props.file.oldSize || __props.file.newSize) {
				_push(`<span class="text-xs text-fg-subtle shrink-0" data-v-c6d08c92>`);
				if (__props.file.type === "modified") _push(`<!--[-->${ssrInterpolate(formatBytes(__props.file.oldSize))} → ${ssrInterpolate(formatBytes(__props.file.newSize))}<!--]-->`);
				else if (__props.file.type === "added") _push(`<!--[-->${ssrInterpolate(formatBytes(__props.file.newSize))}<!--]-->`);
				else _push(`<!--[-->${ssrInterpolate(formatBytes(__props.file.oldSize))}<!--]-->`);
				_push(`</span>`);
			} else _push(`<!---->`);
			_push(`</div><div class="flex items-center gap-2 shrink-0" data-v-c6d08c92><div class="relative" data-v-c6d08c92><button type="button" class="${ssrRenderClass([{ "bg-bg-elevated text-fg": unref(showOptions) }, "px-2 py-1 text-xs text-fg-muted hover:text-fg bg-bg-muted border border-border rounded transition-colors flex items-center gap-1.5"])}" data-v-c6d08c92><span class="i-lucide:settings w-3.5 h-3.5" data-v-c6d08c92></span> Options <span class="${ssrRenderClass([{ "rotate-180": unref(showOptions) }, "i-lucide:chevron-down w-3 h-3 transition-transform"])}" data-v-c6d08c92></span></button>`);
			if (unref(showOptions)) {
				_push(`<div class="absolute inset-ie-0 top-full mt-2 z-20 p-4 bg-bg-elevated border border-border rounded-xl shadow-2xl overflow-auto" style="${ssrRenderStyle({
					width: unref(mergeModifiedLines) ? "min(420px, calc(100vw - 24px))" : "min(320px, calc(100vw - 24px))",
					maxWidth: "calc(100vw - 24px)",
					maxHeight: "70vh"
				})}" data-v-c6d08c92><div class="flex flex-col gap-2" data-v-c6d08c92>`);
				_push(ssrRenderComponent(_component_SettingsToggle, {
					label: "Merge modified lines",
					modelValue: unref(mergeModifiedLines),
					"onUpdate:modelValue": ($event) => isRef(mergeModifiedLines) ? mergeModifiedLines.value = $event : null
				}, null, _parent));
				_push(ssrRenderComponent(_component_SettingsToggle, {
					label: "Word wrap",
					modelValue: unref(wordWrap),
					"onUpdate:modelValue": ($event) => isRef(wordWrap) ? wordWrap.value = $event : null
				}, null, _parent));
				_push(`<div class="${ssrRenderClass([unref(mergeModifiedLines) ? "opacity-100" : "opacity-0", "flex flex-col gap-2 transition-opacity duration-150"])}" data-v-c6d08c92><div class="sr-only" data-v-c6d08c92><label for="change-ratio" data-v-c6d08c92>Change ratio</label></div><div class="${ssrRenderClass([{ "is-disabled": !unref(mergeModifiedLines) }, "slider-shell w-full min-w-0"])}" data-v-c6d08c92><div class="slider-labels" data-v-c6d08c92><span class="slider-label" data-v-c6d08c92>Change ratio</span><span class="slider-value tabular-nums" data-v-c6d08c92>${ssrInterpolate(unref(maxChangeRatio).toFixed(2))}</span></div><div class="slider-track" data-v-c6d08c92><!--[-->`);
				ssrRenderList(unref(changeRatioMarks), (mark) => {
					_push(`<div class="slider-mark" style="${ssrRenderStyle({ left: `calc(${mark}% - 11px)` })}" data-v-c6d08c92></div>`);
				});
				_push(`<!--]--><div class="slider-range" style="${ssrRenderStyle({ width: `${unref(changeRatioPercent)}%` })}" data-v-c6d08c92></div></div><input id="change-ratio"${ssrRenderAttr("value", unref(maxChangeRatio))} type="range" min="0" max="1" step="0.01"${ssrIncludeBooleanAttr(!unref(mergeModifiedLines)) ? " disabled" : ""} class="slider-input" data-v-c6d08c92></div><div class="sr-only" data-v-c6d08c92><label for="diff-distance" data-v-c6d08c92>Diff distance</label></div><div class="${ssrRenderClass([{ "is-disabled": !unref(mergeModifiedLines) }, "slider-shell w-full min-w-0"])}" data-v-c6d08c92><div class="slider-labels" data-v-c6d08c92><span class="slider-label" data-v-c6d08c92>Diff distance</span><span class="slider-value tabular-nums" data-v-c6d08c92>${ssrInterpolate(unref(maxDiffDistance))}</span></div><div class="slider-track" data-v-c6d08c92><!--[-->`);
				ssrRenderList(unref(diffDistanceMarks), (mark) => {
					_push(`<div class="slider-mark" style="${ssrRenderStyle({ left: `calc(${mark}% - 11px)` })}" data-v-c6d08c92></div>`);
				});
				_push(`<!--]--><div class="slider-range" style="${ssrRenderStyle({ width: `${unref(diffDistancePercent)}%` })}" data-v-c6d08c92></div></div><input id="diff-distance"${ssrRenderAttr("value", unref(maxDiffDistance))} type="range" min="1" max="60" step="1"${ssrIncludeBooleanAttr(!unref(mergeModifiedLines)) ? " disabled" : ""} class="slider-input" data-v-c6d08c92></div><div class="sr-only" data-v-c6d08c92><label for="char-edits" data-v-c6d08c92>Char edits</label></div><div class="${ssrRenderClass([{ "is-disabled": !unref(mergeModifiedLines) }, "slider-shell w-full min-w-0"])}" data-v-c6d08c92><div class="slider-labels" data-v-c6d08c92><span class="slider-label" data-v-c6d08c92>Char edits</span><span class="slider-value tabular-nums" data-v-c6d08c92>${ssrInterpolate(unref(inlineMaxCharEdits))}</span></div><div class="slider-track" data-v-c6d08c92><!--[-->`);
				ssrRenderList(unref(charEditMarks), (mark) => {
					_push(`<div class="slider-mark" style="${ssrRenderStyle({ left: `calc(${mark}% - 11px)` })}" data-v-c6d08c92></div>`);
				});
				_push(`<!--]--><div class="slider-range" style="${ssrRenderStyle({ width: `${unref(charEditPercent)}%` })}" data-v-c6d08c92></div></div><input id="char-edits"${ssrRenderAttr("value", unref(inlineMaxCharEdits))} type="range" min="0" max="10" step="1"${ssrIncludeBooleanAttr(!unref(mergeModifiedLines)) ? " disabled" : ""} class="slider-input" data-v-c6d08c92></div></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
			if (__props.file.type !== "removed") _push(ssrRenderComponent(_component_NuxtLink, {
				to: getCodeUrl(__props.toVersion),
				class: "px-2 py-1 text-xs text-fg-muted hover:text-fg bg-bg-muted border border-border rounded transition-colors",
				target: "_blank"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` View file `);
					else return [createTextVNode(" View file ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div></div><div class="flex-1 overflow-auto relative" data-v-c6d08c92>`);
			if (unref(status) === "pending") _push(`<div class="py-12 text-center" data-v-c6d08c92><div class="i-svg-spinners-ring-resize w-6 h-6 mx-auto text-fg-muted" data-v-c6d08c92></div><p class="mt-2 text-sm text-fg-muted" data-v-c6d08c92>Loading diff...</p></div>`);
			else if (unref(status) === "error") {
				_push(`<div class="py-8 text-center" data-v-c6d08c92><span class="i-lucide:triangle-alert w-8 h-8 mx-auto text-fg-subtle mb-2 block" data-v-c6d08c92></span><p class="text-fg-muted text-sm mb-2" data-v-c6d08c92>${ssrInterpolate(unref(loadError)?.message || "Failed to load diff")}</p><div class="flex items-center justify-center gap-2" data-v-c6d08c92>`);
				if (__props.file.type !== "removed") _push(ssrRenderComponent(_component_NuxtLink, {
					to: getCodeUrl(__props.toVersion),
					class: "text-xs text-fg-muted hover:text-fg underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` View in code browser `);
						else return [createTextVNode(" View in code browser ")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</div></div>`);
			} else if (unref(diff) && unref(diff).hunks.length === 0) _push(`<div class="py-8 text-center text-fg-muted text-sm" data-v-c6d08c92> No content changes detected </div>`);
			else if (unref(diff)) _push(ssrRenderComponent(_component_DiffTable, {
				hunks: unref(diff).hunks,
				type: unref(diff).type,
				"file-name": __props.file.path,
				"word-wrap": unref(wordWrap)
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
var _sfc_setup$1 = ViewerPanel_vue_vue_type_script_setup_true_lang_default.setup;
ViewerPanel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diff/ViewerPanel.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ViewerPanel_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(ViewerPanel_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c6d08c92"]]), { __name: "DiffViewerPanel" });
var _versionRange__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[versionRange]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const packageName = computed(() => route.params.org ? `${route.params.org}/${route.params.packageName}` : route.params.packageName);
		const versionRange = computed(() => {
			const parts = route.params.versionRange.split("...");
			if (parts.length !== 2) return null;
			return {
				from: parts[0],
				to: parts[1]
			};
		});
		const fromVersion = computed(() => versionRange.value?.from ?? "");
		const toVersion = computed(() => versionRange.value?.to ?? "");
		const router = useRouter();
		const { data: pkg } = usePackage(packageName);
		const { data: compare, status: compareStatus } = useFetch(() => `/api/registry/compare/${packageName.value}/v/${fromVersion.value}...${toVersion.value}`, {
			immediate: !!versionRange.value,
			timeout: 15e3
		}, "$GVvsdWq69c");
		const manualSelection = ref(null);
		const fileFilter = ref("all");
		ref(false);
		const allChanges = computed(() => {
			if (!compare.value) return [];
			return [
				...compare.value.files.added,
				...compare.value.files.removed,
				...compare.value.files.modified
			].sort((a, b) => a.path.localeCompare(b.path));
		});
		const selectedFile = computed({
			get: () => {
				if (manualSelection.value) return manualSelection.value;
				const filePath = route.query.file;
				if (!filePath || !compare.value) return null;
				return allChanges.value.find((f) => f.path === filePath) ?? null;
			},
			set: (file) => {
				manualSelection.value = file;
			}
		});
		const groupedDeps = computed(() => {
			if (!compare.value?.dependencyChanges) return /* @__PURE__ */ new Map();
			const groups = /* @__PURE__ */ new Map();
			for (const change of compare.value.dependencyChanges) {
				const existing = groups.get(change.section) ?? [];
				existing.push(change);
				groups.set(change.section, existing);
			}
			return groups;
		});
		const fromVersionUrlPattern = computed(() => {
			return router.resolve(diffRoute(packageName.value, "{version}", toVersion.value)).href;
		});
		const toVersionUrlPattern = computed(() => {
			return router.resolve(diffRoute(packageName.value, fromVersion.value, "{version}")).href;
		});
		useSeoMeta$1({
			title: () => {
				if (fromVersion.value && toVersion.value) return `Compare ${packageName.value} ${fromVersion.value}...${toVersion.value} - npmx`;
				return `Compare - ${packageName.value} - npmx`;
			},
			description: () => `Compare changes between ${packageName.value} versions ${fromVersion.value} and ${toVersion.value}`
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_VersionSelector = VersionSelector_default;
			const _component_DiffSidebarPanel = SidebarPanel_default;
			const _component_DiffViewerPanel = ViewerPanel_default;
			const _component_ClientOnly = client_only_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col min-h-0" }, _attrs))}><header class="border-b border-border bg-bg sticky top-14 z-20"><div class="container py-4"><div class="flex items-center gap-2 mb-3 flex-wrap min-w-0">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: unref(packageRoute)(unref(packageName)),
				class: "font-mono text-lg font-medium hover:text-fg transition-colors min-w-0 truncate"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(packageName))}`);
					else return [createTextVNode(toDisplayString(unref(packageName)), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<span class="text-fg-subtle">/</span><span class="font-mono text-sm text-fg-muted">compare</span></div><div class="flex items-center gap-3 flex-wrap"><div class="flex items-center gap-2"><span class="text-xs text-fg-subtle uppercase tracking-wide">From</span>`);
			if (unref(pkg)?.versions && unref(pkg)?.["dist-tags"]) _push(ssrRenderComponent(_component_VersionSelector, {
				"package-name": unref(packageName),
				"current-version": unref(fromVersion),
				versions: unref(pkg).versions,
				"dist-tags": unref(pkg)["dist-tags"],
				"url-pattern": unref(fromVersionUrlPattern)
			}, null, _parent));
			else _push(`<span class="font-mono text-sm text-fg-muted">${ssrInterpolate(unref(fromVersion))}</span>`);
			_push(`</div><span class="i-lucide:arrow-right w-4 h-4 text-fg-subtle"></span><div class="flex items-center gap-2"><span class="text-xs text-fg-subtle uppercase tracking-wide">To</span>`);
			if (unref(pkg)?.versions && unref(pkg)?.["dist-tags"]) _push(ssrRenderComponent(_component_VersionSelector, {
				"package-name": unref(packageName),
				"current-version": unref(toVersion),
				versions: unref(pkg).versions,
				"dist-tags": unref(pkg)["dist-tags"],
				"url-pattern": unref(toVersionUrlPattern)
			}, null, _parent));
			else _push(`<span class="font-mono text-sm text-fg-muted">${ssrInterpolate(unref(toVersion))}</span>`);
			_push(`</div></div></div></header>`);
			if (!unref(versionRange)) {
				_push(`<div class="container py-20 text-center"><p class="text-fg-muted mb-4"> Invalid comparison URL. Use format: /diff/package/v/from...to </p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: unref(packageRoute)(unref(packageName)),
					class: "btn"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Go to package`);
						else return [createTextVNode("Go to package")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(compareStatus) === "pending") _push(`<div class="container py-20 text-center"><div class="i-svg-spinners-ring-resize w-8 h-8 mx-auto text-fg-muted"></div><p class="mt-4 text-fg-muted">Comparing versions...</p></div>`);
			else if (unref(compareStatus) === "error") {
				_push(`<div class="container py-20 text-center" role="alert"><p class="text-fg-muted mb-4">Failed to compare versions</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: unref(packageRoute)(unref(packageName)),
					class: "btn"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Back to package`);
						else return [createTextVNode("Back to package")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(compare)) {
				_push(`<div class="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden"><aside class="hidden md:flex w-80 border-ie border-border bg-bg-subtle flex-col shrink-0 min-h-0">`);
				_push(ssrRenderComponent(_component_DiffSidebarPanel, {
					compare: unref(compare),
					"grouped-deps": unref(groupedDeps),
					"all-changes": unref(allChanges),
					"selected-file": unref(selectedFile),
					"onUpdate:selectedFile": ($event) => isRef(selectedFile) ? selectedFile.value = $event : null,
					"file-filter": unref(fileFilter),
					"onUpdate:fileFilter": ($event) => isRef(fileFilter) ? fileFilter.value = $event : null,
					onFileSelect: ($event) => selectedFile.value = $event
				}, null, _parent));
				_push(`</aside><div class="flex-1 flex flex-col min-w-0 overflow-hidden"><div class="md:hidden border-b border-border bg-bg-subtle px-4 py-3 flex items-center justify-between gap-3"><div class="flex items-center gap-2 text-2xs font-mono text-fg-muted"><span class="flex items-center gap-1"><span class="text-green-500">+${ssrInterpolate(unref(compare).stats.filesAdded)}</span><span class="text-fg-subtle">/</span><span class="text-red-500">-${ssrInterpolate(unref(compare).stats.filesRemoved)}</span><span class="text-fg-subtle">/</span><span class="text-yellow-500">~${ssrInterpolate(unref(compare).stats.filesModified)}</span></span><span class="text-fg-subtle">•</span><span>${ssrInterpolate(_ctx.$t("compare.files_count", { count: unref(allChanges).length }))}</span></div><button type="button" class="px-2 py-1 inline-flex items-center gap-1.5 font-mono text-xs bg-bg-muted border border-border rounded text-fg-muted hover:text-fg hover:border-border-hover transition-colors"><span class="i-lucide:file-text w-3.5 h-3.5"></span> ${ssrInterpolate(_ctx.$t("compare.files_button"))}</button></div><div class="flex-1 overflow-hidden bg-bg-subtle">`);
				if (unref(selectedFile)) _push(ssrRenderComponent(_component_DiffViewerPanel, {
					"package-name": unref(packageName),
					"from-version": unref(fromVersion),
					"to-version": unref(toVersion),
					file: unref(selectedFile)
				}, null, _parent));
				else _push(`<div class="h-full flex items-center justify-center text-center p-8"><div><span class="i-lucide:file-text w-16 h-16 mx-auto text-fg-subtle/50 block mb-4"></span><p class="text-fg-muted">${ssrInterpolate(_ctx.$t("compare.select_file_prompt"))}</p></div></div>`);
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(`</main>`);
		};
	}
});
var _sfc_setup = _versionRange__vue_vue_type_script_setup_true_lang_default.setup;
_versionRange__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/diff/[[org]]/[packageName]/v/[versionRange].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _versionRange__default = _versionRange__vue_vue_type_script_setup_true_lang_default;

export { _versionRange__default as default };
//# sourceMappingURL=_versionRange_-DWNF7KdP.mjs.map

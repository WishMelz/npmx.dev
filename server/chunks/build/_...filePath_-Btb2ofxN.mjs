import { u as useI18n, g as useRoute, W as useEventListener, F as useClipboard, R as useHead$1, b as useSeoMeta$1, n as nuxt_link_default, q as packageRoute, B as Base_default, D as client_only_default, _ as _plugin_vue_export_helper_default, o as Base_default$1, X as useState, w as navigateTo } from './server.mjs';
import { a as useFetch } from './fetch-BX-wNfYP.mjs';
import { u as usePackage } from './usePackage-BKsfNl2r.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-DS9T_Aki.mjs';
import { b as useBytesFormatter } from './useNumberFormatter-CNADtHud.mjs';
import { V as VersionSelector_default } from './VersionSelector-CfAJ286A.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-CUGWiqJT.mjs';
import { R as Readme_default, S as SkeletonInline_default } from './SkeletonInline-5VR7VjON.mjs';
import { defineComponent, computed, watch, shallowRef, nextTick, useTemplateRef, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

/**
* Get icon class for a file based on its name/extension.
* Uses vscode-icons and lucide icons.
*
* Based on this file, a sprite file (<ORIGIN_URL>/file-tree-sprite.svg) is generated on postinstall
* @see /scripts/generate-file-tree-sprite.ts
*/
const EXTENSION_ICONS = {
	"js": "vscode-icons-file-type-js-official",
	"mjs": "vscode-icons-file-type-js-official",
	"cjs": "vscode-icons-file-type-js-official",
	"ts": "vscode-icons-file-type-typescript-official",
	"mts": "vscode-icons-file-type-typescript-official",
	"cts": "vscode-icons-file-type-typescript-official",
	"jsx": "vscode-icons-file-type-reactjs",
	"tsx": "vscode-icons-file-type-reactts",
	"html": "vscode-icons-file-type-html",
	"htm": "vscode-icons-file-type-html",
	"css": "vscode-icons-file-type-css",
	"scss": "vscode-icons-file-type-scss",
	"sass": "vscode-icons-file-type-sass",
	"less": "vscode-icons-file-type-less",
	"styl": "vscode-icons-file-type-stylus",
	"vue": "vscode-icons-file-type-vue",
	"svelte": "vscode-icons-file-type-svelte",
	"astro": "vscode-icons-file-type-astro",
	"gjs": "vscode-icons-file-type-glimmer",
	"gts": "vscode-icons-file-type-glimmer",
	"json": "vscode-icons-file-type-json",
	"jsonc": "vscode-icons-file-type-json",
	"json5": "vscode-icons-file-type-json5",
	"yaml": "vscode-icons-file-type-yaml",
	"yml": "vscode-icons-file-type-yaml",
	"toml": "vscode-icons-file-type-toml",
	"xml": "vscode-icons-file-type-xml",
	"svg": "vscode-icons-file-type-svg",
	"graphql": "vscode-icons-file-type-graphql",
	"gql": "vscode-icons-file-type-graphql",
	"prisma": "vscode-icons-file-type-prisma",
	"md": "vscode-icons-file-type-markdown",
	"mdx": "vscode-icons-file-type-mdx",
	"txt": "vscode-icons-file-type-text",
	"rst": "vscode-icons-file-type-text",
	"pdf": "vscode-icons-file-type-pdf2",
	"sh": "vscode-icons-file-type-shell",
	"bash": "vscode-icons-file-type-shell",
	"zsh": "vscode-icons-file-type-shell",
	"fish": "vscode-icons-file-type-shell",
	"ps1": "vscode-icons-file-type-powershell",
	"bat": "vscode-icons-file-type-bat",
	"cmd": "vscode-icons-file-type-bat",
	"py": "vscode-icons-file-type-python",
	"pyi": "vscode-icons-file-type-python",
	"rb": "vscode-icons-file-type-ruby",
	"go": "vscode-icons-file-type-go",
	"rs": "vscode-icons-file-type-rust",
	"java": "vscode-icons-file-type-java",
	"kt": "vscode-icons-file-type-kotlin",
	"swift": "vscode-icons-file-type-swift",
	"c": "vscode-icons-file-type-c",
	"cpp": "vscode-icons-file-type-cpp",
	"h": "vscode-icons-file-type-cheader",
	"hpp": "vscode-icons-file-type-cppheader",
	"cs": "vscode-icons-file-type-csharp",
	"php": "vscode-icons-file-type-php",
	"lua": "vscode-icons-file-type-lua",
	"luau": "vscode-icons-file-type-luau",
	"r": "vscode-icons-file-type-r",
	"sql": "vscode-icons-file-type-sql",
	"pl": "vscode-icons-file-type-perl",
	"ex": "vscode-icons-file-type-elixir",
	"exs": "vscode-icons-file-type-elixir",
	"erl": "vscode-icons-file-type-erlang",
	"hs": "vscode-icons-file-type-haskell",
	"clj": "vscode-icons-file-type-clojure",
	"scala": "vscode-icons-file-type-scala",
	"zig": "vscode-icons-file-type-zig",
	"nim": "vscode-icons-file-type-nim",
	"v": "vscode-icons-file-type-vlang",
	"wasm": "vscode-icons-file-type-wasm",
	"png": "vscode-icons-file-type-image",
	"jpg": "vscode-icons-file-type-image",
	"jpeg": "vscode-icons-file-type-image",
	"gif": "vscode-icons-file-type-image",
	"webp": "vscode-icons-file-type-image",
	"ico": "vscode-icons-file-type-image",
	"bmp": "vscode-icons-file-type-image",
	"woff": "vscode-icons-file-type-font",
	"woff2": "vscode-icons-file-type-font",
	"ttf": "vscode-icons-file-type-font",
	"otf": "vscode-icons-file-type-font",
	"eot": "vscode-icons-file-type-font",
	"zip": "vscode-icons-file-type-zip",
	"tar": "vscode-icons-file-type-zip",
	"gz": "vscode-icons-file-type-zip",
	"tgz": "vscode-icons-file-type-zip",
	"bz2": "vscode-icons-file-type-zip",
	"7z": "vscode-icons-file-type-zip",
	"rar": "vscode-icons-file-type-zip",
	"pem": "vscode-icons-file-type-cert",
	"crt": "vscode-icons-file-type-cert",
	"key": "vscode-icons-file-type-key",
	"diff": "vscode-icons-file-type-diff",
	"patch": "vscode-icons-file-type-diff",
	"log": "vscode-icons-file-type-log",
	"lock": "vscode-icons-file-type-json",
	"map": "vscode-icons-file-type-map",
	"wrl": "vscode-icons-file-type-binary",
	"bin": "vscode-icons-file-type-binary",
	"node": "vscode-icons-file-type-node"
};
const FILENAME_ICONS = {
	"package.json": "vscode-icons-file-type-npm",
	"package-lock.json": "vscode-icons-file-type-npm",
	"pnpm-lock.yaml": "vscode-icons-file-type-pnpm",
	"pnpm-workspace.yaml": "vscode-icons-file-type-pnpm",
	"yarn.lock": "vscode-icons-file-type-yarn",
	".yarnrc": "vscode-icons-file-type-yarn",
	".yarnrc.yml": "vscode-icons-file-type-yarn",
	"bun.lockb": "vscode-icons-file-type-bun",
	"bunfig.toml": "vscode-icons-file-type-bun",
	"deno.json": "vscode-icons-file-type-deno",
	"deno.jsonc": "vscode-icons-file-type-deno",
	"tsconfig.json": "vscode-icons-file-type-tsconfig",
	"tsconfig.base.json": "vscode-icons-file-type-tsconfig",
	"tsconfig.build.json": "vscode-icons-file-type-tsconfig",
	"tsconfig.node.json": "vscode-icons-file-type-tsconfig",
	"jsconfig.json": "vscode-icons-file-type-jsconfig",
	"vite.config.ts": "vscode-icons-file-type-vite",
	"vite.config.js": "vscode-icons-file-type-vite",
	"vite.config.mts": "vscode-icons-file-type-vite",
	"vite.config.mjs": "vscode-icons-file-type-vite",
	"webpack.config.js": "vscode-icons-file-type-webpack",
	"webpack.config.ts": "vscode-icons-file-type-webpack",
	"rollup.config.js": "vscode-icons-file-type-rollup",
	"rollup.config.ts": "vscode-icons-file-type-rollup",
	"rollup.config.mjs": "vscode-icons-file-type-rollup",
	"esbuild.config.js": "vscode-icons-file-type-esbuild",
	"turbo.json": "vscode-icons-file-type-turbo",
	"nx.json": "vscode-icons-file-type-nx",
	"nuxt.config.ts": "vscode-icons-file-type-nuxt",
	"nuxt.config.js": "vscode-icons-file-type-nuxt",
	"next.config.js": "vscode-icons-file-type-next",
	"next.config.mjs": "vscode-icons-file-type-next",
	"next.config.ts": "vscode-icons-file-type-next",
	"svelte.config.js": "vscode-icons-file-type-svelte",
	"astro.config.mjs": "vscode-icons-file-type-astro",
	"astro.config.ts": "vscode-icons-file-type-astro",
	"remix.config.js": "vscode-icons-file-type-js-official",
	"angular.json": "vscode-icons-file-type-angular",
	"nest-cli.json": "vscode-icons-file-type-nestjs",
	".eslintrc": "vscode-icons-file-type-eslint",
	".eslintrc.js": "vscode-icons-file-type-eslint",
	".eslintrc.cjs": "vscode-icons-file-type-eslint",
	".eslintrc.json": "vscode-icons-file-type-eslint",
	".eslintrc.yml": "vscode-icons-file-type-eslint",
	"eslint.config.js": "vscode-icons-file-type-eslint",
	"eslint.config.mjs": "vscode-icons-file-type-eslint",
	"eslint.config.ts": "vscode-icons-file-type-eslint",
	".prettierrc": "vscode-icons-file-type-prettier",
	".prettierrc.js": "vscode-icons-file-type-prettier",
	".prettierrc.json": "vscode-icons-file-type-prettier",
	"prettier.config.js": "vscode-icons-file-type-prettier",
	"prettier.config.mjs": "vscode-icons-file-type-prettier",
	".prettierignore": "vscode-icons-file-type-prettier",
	"biome.json": "vscode-icons-file-type-biome",
	".stylelintrc": "vscode-icons-file-type-stylelint",
	".stylelintrc.json": "vscode-icons-file-type-stylelint",
	"jest.config.js": "vscode-icons-file-type-jest",
	"jest.config.ts": "vscode-icons-file-type-jest",
	"vitest.config.ts": "vscode-icons-file-type-vitest",
	"vitest.config.js": "vscode-icons-file-type-vitest",
	"vitest.config.mts": "vscode-icons-file-type-vitest",
	"playwright.config.ts": "vscode-icons-file-type-playwright",
	"playwright.config.js": "vscode-icons-file-type-playwright",
	"cypress.config.ts": "vscode-icons-file-type-cypress",
	"cypress.config.js": "vscode-icons-file-type-cypress",
	".gitignore": "vscode-icons-file-type-git",
	".gitattributes": "vscode-icons-file-type-git",
	".gitmodules": "vscode-icons-file-type-git",
	".gitkeep": "vscode-icons-file-type-git",
	".travis.yml": "vscode-icons-file-type-travis",
	".gitlab-ci.yml": "vscode-icons-file-type-gitlab",
	"Jenkinsfile": "vscode-icons-file-type-jenkins",
	"azure-pipelines.yml": "vscode-icons-file-type-azurepipelines",
	"cloudbuild.yaml": "vscode-icons-file-type-yaml",
	"vercel.json": "vscode-icons-file-type-vercel",
	"netlify.toml": "vscode-icons-file-type-netlify",
	"Dockerfile": "vscode-icons-file-type-docker",
	"docker-compose.yml": "vscode-icons-file-type-docker",
	"docker-compose.yaml": "vscode-icons-file-type-docker",
	".dockerignore": "vscode-icons-file-type-docker",
	".env": "vscode-icons-file-type-dotenv",
	".env.local": "vscode-icons-file-type-dotenv",
	".env.development": "vscode-icons-file-type-dotenv",
	".env.production": "vscode-icons-file-type-dotenv",
	".env.test": "vscode-icons-file-type-dotenv",
	".env.example": "vscode-icons-file-type-dotenv",
	".editorconfig": "vscode-icons-file-type-editorconfig",
	".vscode": "vscode-icons-file-type-vscode",
	"settings.json": "vscode-icons-file-type-vscode",
	"launch.json": "vscode-icons-file-type-vscode",
	"extensions.json": "vscode-icons-file-type-vscode",
	"README": "vscode-icons-file-type-markdown",
	"README.md": "vscode-icons-file-type-markdown",
	"readme.md": "vscode-icons-file-type-markdown",
	"README.markdown": "vscode-icons-file-type-markdown",
	"readme.markdown": "vscode-icons-file-type-markdown",
	"CHANGELOG": "vscode-icons-file-type-markdown",
	"CHANGELOG.md": "vscode-icons-file-type-markdown",
	"changelog.md": "vscode-icons-file-type-markdown",
	"CONTRIBUTING.md": "vscode-icons-file-type-markdown",
	"contributing.md": "vscode-icons-file-type-markdown",
	"CODE_OF_CONDUCT.md": "vscode-icons-file-type-markdown",
	"LICENSE": "vscode-icons-file-type-license",
	"LICENSE.md": "vscode-icons-file-type-license",
	"LICENSE.txt": "vscode-icons-file-type-license",
	"license": "vscode-icons-file-type-license",
	"license.md": "vscode-icons-file-type-license",
	"license.txt": "vscode-icons-file-type-license",
	".npmrc": "vscode-icons-file-type-npm",
	".npmignore": "vscode-icons-file-type-npm",
	".nvmrc": "vscode-icons-file-type-node",
	".node-version": "vscode-icons-file-type-node",
	"Makefile": "vscode-icons-file-type-makefile",
	".browserslistrc": "vscode-icons-file-type-browserslist",
	"browserslist": "vscode-icons-file-type-browserslist",
	".babelrc": "vscode-icons-file-type-babel",
	"babel.config.js": "vscode-icons-file-type-babel",
	"tailwind.config.js": "vscode-icons-file-type-tailwind",
	"tailwind.config.ts": "vscode-icons-file-type-tailwind",
	"postcss.config.js": "vscode-icons-file-type-postcss",
	"postcss.config.cjs": "vscode-icons-file-type-postcss",
	"uno.config.ts": "vscode-icons-file-type-unocss",
	"unocss.config.ts": "vscode-icons-file-type-unocss"
};
const COMPOUND_EXTENSIONS = {
	".d.ts": "vscode-icons-file-type-typescriptdef",
	".d.mts": "vscode-icons-file-type-typescriptdef",
	".d.cts": "vscode-icons-file-type-typescriptdef",
	".test.ts": "vscode-icons-file-type-testts",
	".test.js": "vscode-icons-file-type-testjs",
	".spec.ts": "vscode-icons-file-type-testts",
	".spec.js": "vscode-icons-file-type-testjs",
	".test.tsx": "vscode-icons-file-type-testts",
	".test.jsx": "vscode-icons-file-type-testjs",
	".spec.tsx": "vscode-icons-file-type-testts",
	".spec.jsx": "vscode-icons-file-type-testjs",
	".stories.tsx": "vscode-icons-file-type-storybook",
	".stories.ts": "vscode-icons-file-type-storybook",
	".stories.jsx": "vscode-icons-file-type-storybook",
	".stories.js": "vscode-icons-file-type-storybook",
	".min.js": "vscode-icons-file-type-js-official",
	".min.css": "vscode-icons-file-type-css"
};
const DEFAULT_ICON = "vscode-icons-default-file";
const ADDITIONAL_ICONS = {
	"folder": "lucide-folder",
	"folder-open": "lucide-folder-open"
};
/**
* Get the icon class for a file based on its name
*/
function getFileIcon(filename) {
	if (FILENAME_ICONS[filename]) return FILENAME_ICONS[filename];
	for (const [suffix, icon] of Object.entries(COMPOUND_EXTENSIONS)) if (filename.endsWith(suffix)) return icon;
	const ext = filename.split(".").pop()?.toLowerCase() ?? "";
	if (EXTENSION_ICONS[ext]) return EXTENSION_ICONS[ext];
	return DEFAULT_ICON;
}
function useFileTreeState(baseUrl) {
	const expanded = useState(`npmx-file-tree${baseUrl}`, () => /* @__PURE__ */ new Set());
	function toggleDir(path) {
		if (expanded.value.has(path)) expanded.value.delete(path);
		else expanded.value.add(path);
	}
	function isExpanded(path) {
		return expanded.value.has(path);
	}
	function autoExpandAncestors(path) {
		if (!path) return;
		const parts = path.split("/").filter(Boolean);
		let prefix = "";
		for (const part of parts) {
			prefix = prefix ? `${prefix}/${part}` : part;
			expanded.value.add(prefix);
		}
	}
	return {
		toggleDir,
		isExpanded,
		autoExpandAncestors
	};
}
var FileTree_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FileTree",
	__ssrInlineRender: true,
	props: {
		tree: {},
		currentPath: {},
		baseUrl: {},
		baseRoute: {},
		depth: {}
	},
	setup(__props) {
		const props = __props;
		const depth = computed(() => props.depth ?? 0);
		function isNodeActive(node) {
			if (props.currentPath === node.path) return true;
			if (props.currentPath.startsWith(node.path + "/")) return true;
			return false;
		}
		function getFileRoute(nodePath) {
			return {
				name: "code",
				params: {
					org: props.baseRoute.params.org,
					packageName: props.baseRoute.params.packageName,
					version: props.baseRoute.params.version,
					filePath: nodePath ?? ""
				}
			};
		}
		const { toggleDir, isExpanded, autoExpandAncestors } = useFileTreeState(props.baseUrl);
		watch(() => props.currentPath, (path) => {
			if (path) autoExpandAncestors(path);
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ButtonBase = Base_default$1;
			const _component_CodeFileTree = FileTree_default;
			const _component_LinkBase = Base_default;
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: ["list-none m-0 p-0", unref(depth) === 0 ? "py-2" : ""] }, _attrs))}><!--[-->`);
			ssrRenderList(__props.tree, (node) => {
				_push(`<li>`);
				if (node.type === "directory") {
					_push(`<!--[-->`);
					_push(ssrRenderComponent(_component_ButtonBase, {
						class: "w-full justify-start! rounded-none! border-none!",
						block: "",
						"aria-pressed": isNodeActive(node),
						style: { paddingLeft: `${unref(depth) * 12 + 12}px` },
						onClick: ($event) => unref(toggleDir)(node.path),
						classicon: unref(isExpanded)(node.path) ? "i-lucide:chevron-down" : "i-lucide:chevron-right"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<svg class="${ssrRenderClass([unref(isExpanded)(node.path) ? "text-yellow-500" : "text-yellow-600", "size-[1em] me-1 shrink-0"])}" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"${_scopeId}><use${ssrRenderAttr("href", `/file-tree-sprite.svg#${unref(isExpanded)(node.path) ? unref(ADDITIONAL_ICONS)["folder-open"] : unref(ADDITIONAL_ICONS)["folder"]}`)}${_scopeId}></use></svg><span class="truncate"${_scopeId}>${ssrInterpolate(node.name)}</span>`);
							else return [(openBlock(), createBlock("svg", {
								class: ["size-[1em] me-1 shrink-0", unref(isExpanded)(node.path) ? "text-yellow-500" : "text-yellow-600"],
								viewBox: "0 0 16 16",
								fill: "currentColor",
								"aria-hidden": "true"
							}, [createVNode("use", { href: `/file-tree-sprite.svg#${unref(isExpanded)(node.path) ? unref(ADDITIONAL_ICONS)["folder-open"] : unref(ADDITIONAL_ICONS)["folder"]}` }, null, 8, ["href"])], 2)), createVNode("span", { class: "truncate" }, toDisplayString(node.name), 1)];
						}),
						_: 2
					}, _parent));
					if (unref(isExpanded)(node.path) && node.children) _push(ssrRenderComponent(_component_CodeFileTree, {
						tree: node.children,
						"current-path": __props.currentPath,
						"base-url": __props.baseUrl,
						"base-route": __props.baseRoute,
						depth: unref(depth) + 1
					}, null, _parent));
					else _push(`<!---->`);
					_push(`<!--]-->`);
				} else _push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: getFileRoute(node.path),
					"aria-current": __props.currentPath === node.path,
					class: "w-full justify-start! rounded-none! border-none!",
					block: "",
					style: { paddingLeft: `${unref(depth) * 12 + 32}px` }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<svg class="size-[1em] me-1 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"${_scopeId}><use${ssrRenderAttr("href", `/file-tree-sprite.svg#${unref(getFileIcon)(node.name)}`)}${_scopeId}></use></svg><span class="truncate"${_scopeId}>${ssrInterpolate(node.name)}</span>`);
						else return [(openBlock(), createBlock("svg", {
							class: "size-[1em] me-1 shrink-0",
							viewBox: "0 0 16 16",
							fill: "currentColor",
							"aria-hidden": "true"
						}, [createVNode("use", { href: `/file-tree-sprite.svg#${unref(getFileIcon)(node.name)}` }, null, 8, ["href"])])), createVNode("span", { class: "truncate" }, toDisplayString(node.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul>`);
		};
	}
});
var _sfc_setup$3 = FileTree_vue_vue_type_script_setup_true_lang_default.setup;
FileTree_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Code/FileTree.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var FileTree_default = Object.assign(FileTree_vue_vue_type_script_setup_true_lang_default, { __name: "CodeFileTree" });
var Viewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Viewer",
	__ssrInlineRender: true,
	props: {
		html: {},
		lines: {},
		selectedLines: {}
	},
	emits: ["lineClick"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const codeRef = useTemplateRef("codeRef");
		const lineNumbers = computed(() => {
			return Array.from({ length: props.lines }, (_, i) => i + 1);
		});
		const lineDigits = computed(() => {
			return String(props.lines).length;
		});
		function isLineSelected(lineNum) {
			if (!props.selectedLines) return false;
			return lineNum >= props.selectedLines.start && lineNum <= props.selectedLines.end;
		}
		function updateLineHighlighting() {
			if (!codeRef.value) return;
			codeRef.value.querySelectorAll("code > .line").forEach((line, index) => {
				if (isLineSelected(index + 1)) line.classList.add("highlighted");
				else line.classList.remove("highlighted");
			});
		}
		watch(() => [props.selectedLines, props.html], () => {
			nextTick(updateLineHighlighting);
		}, { immediate: true });
		function handleImportLinkNavigate() {
			if (!codeRef.value) return;
			codeRef.value.querySelectorAll("a.import-link").forEach((anchor) => {
				anchor.addEventListener("click", (event) => {
					if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
					const href = anchor.getAttribute("href");
					if (href) {
						event.preventDefault();
						navigateTo(href);
					}
				});
			});
		}
		watch(() => props.html, () => {
			nextTick(handleImportLinkNavigate);
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "code-viewer flex min-h-full max-w-full" }, _attrs))} data-v-f5b9d052><div class="line-numbers shrink-0 bg-bg-subtle border-ie border-solid border-border text-end select-none relative" style="${ssrRenderStyle({ "--line-digits": unref(lineDigits) })}" aria-hidden="true" data-v-f5b9d052><!--[-->`);
			ssrRenderList(unref(lineNumbers), (lineNum) => {
				_push(`<a${ssrRenderAttr("id", `L${lineNum}`)}${ssrRenderAttr("href", `#L${lineNum}`)} tabindex="-1" class="${ssrRenderClass([[isLineSelected(lineNum) ? "bg-yellow-500/20 text-fg" : "text-fg-subtle hover:text-fg-muted"], "line-number block px-3 py-0 font-mono text-sm leading-6 cursor-pointer transition-colors no-underline"])}" data-v-f5b9d052>${ssrInterpolate(lineNum)}</a>`);
			});
			_push(`<!--]--></div><div class="code-content flex-1 overflow-x-auto min-w-0" data-v-f5b9d052><div class="code-lines w-fit" data-v-f5b9d052>${__props.html ?? ""}</div></div></div>`);
		};
	}
});
var _sfc_setup$2 = Viewer_vue_vue_type_script_setup_true_lang_default.setup;
Viewer_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Code/Viewer.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Viewer_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Viewer_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-f5b9d052"]]), { __name: "CodeViewer" });
var DirectoryListing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DirectoryListing",
	__ssrInlineRender: true,
	props: {
		tree: {},
		currentPath: {},
		baseUrl: {},
		baseRoute: {}
	},
	setup(__props) {
		const props = __props;
		const currentContents = computed(() => {
			if (!props.currentPath) return props.tree;
			const parts = props.currentPath.split("/");
			let current = props.tree;
			for (const part of parts) {
				const found = current?.find((n) => n.name === part);
				if (!found || found.type === "file") return [];
				current = found.children;
			}
			return current ?? [];
		});
		const parentPath = computed(() => {
			if (!props.currentPath) return null;
			const parts = props.currentPath.split("/");
			if (parts.length <= 1) return "";
			return parts.slice(0, -1).join("/");
		});
		function getCodeRoute(nodePath) {
			return {
				name: "code",
				params: {
					org: props.baseRoute.params.org,
					packageName: props.baseRoute.params.packageName,
					version: props.baseRoute.params.version,
					filePath: nodePath ?? ""
				}
			};
		}
		const bytesFormatter = useBytesFormatter();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_LinkBase = Base_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "directory-listing" }, _attrs))}>`);
			if (unref(currentContents).length === 0) _push(`<div class="py-20 text-center text-fg-muted"><p>${ssrInterpolate(_ctx.$t("code.no_files"))}</p></div>`);
			else {
				_push(`<table class="w-full"><thead class="sr-only"><tr><th>${ssrInterpolate(_ctx.$t("code.table.name"))}</th><th>${ssrInterpolate(_ctx.$t("code.table.size"))}</th></tr></thead><tbody>`);
				if (unref(parentPath) !== null) {
					_push(`<tr class="border-b border-border hover:bg-bg-subtle transition-colors"><td colspan="2">`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: getCodeRoute(unref(parentPath) || void 0),
						class: "py-2 px-4 font-mono text-sm w-full",
						"no-underline": ""
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<svg class="size-[1em] me-1 shrink-0 text-yellow-600" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"${_scopeId}><use${ssrRenderAttr("href", `/file-tree-sprite.svg#${unref(ADDITIONAL_ICONS)["folder"]}`)}${_scopeId}></use></svg><span class="w-full flex justify-self-stretch items-center gap-2"${_scopeId}> .. </span>`);
							else return [(openBlock(), createBlock("svg", {
								class: "size-[1em] me-1 shrink-0 text-yellow-600",
								viewBox: "0 0 16 16",
								fill: "currentColor",
								"aria-hidden": "true"
							}, [createVNode("use", { href: `/file-tree-sprite.svg#${unref(ADDITIONAL_ICONS)["folder"]}` }, null, 8, ["href"])])), createVNode("span", { class: "w-full flex justify-self-stretch items-center gap-2" }, " .. ")];
						}),
						_: 1
					}, _parent));
					_push(`</td></tr>`);
				} else _push(`<!---->`);
				_push(`<!--[-->`);
				ssrRenderList(unref(currentContents), (node) => {
					_push(`<tr class="border-b border-border hover:bg-bg-subtle transition-colors"><td colspan="2">`);
					_push(ssrRenderComponent(_component_LinkBase, {
						to: getCodeRoute(node.path),
						class: "py-2 px-4 font-mono text-sm w-full",
						"no-underline": ""
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<svg viewBox="0 0 16 16" fill="currentColor" class="${ssrRenderClass([node.type === "directory" ? "text-yellow-600" : void 0, "size-[1em] me-1 shrink-0"])}" aria-hidden="true"${_scopeId}><use${ssrRenderAttr("href", `/file-tree-sprite.svg#${node.type === "directory" ? unref(ADDITIONAL_ICONS)["folder"] : unref(getFileIcon)(node.name)}`)}${_scopeId}></use></svg><span class="w-full flex justify-self-stretch items-center gap-2"${_scopeId}><span class="flex-1"${_scopeId}>${ssrInterpolate(node.name)}</span>`);
								if (typeof node.size === "number") _push(`<span class="text-end text-xs text-fg-subtle"${_scopeId}>${ssrInterpolate(unref(bytesFormatter).format(node.size))}</span>`);
								else _push(`<!---->`);
								_push(`</span>`);
							} else return [(openBlock(), createBlock("svg", {
								class: ["size-[1em] me-1 shrink-0", node.type === "directory" ? "text-yellow-600" : void 0],
								viewBox: "0 0 16 16",
								fill: "currentColor",
								"aria-hidden": "true"
							}, [createVNode("use", { href: `/file-tree-sprite.svg#${node.type === "directory" ? unref(ADDITIONAL_ICONS)["folder"] : unref(getFileIcon)(node.name)}` }, null, 8, ["href"])], 2)), createVNode("span", { class: "w-full flex justify-self-stretch items-center gap-2" }, [createVNode("span", { class: "flex-1" }, toDisplayString(node.name), 1), typeof node.size === "number" ? (openBlock(), createBlock("span", {
								key: 0,
								class: "text-end text-xs text-fg-subtle"
							}, toDisplayString(unref(bytesFormatter).format(node.size)), 1)) : createCommentVNode("", true)])];
						}),
						_: 2
					}, _parent));
					_push(`</td></tr>`);
				});
				_push(`<!--]--></tbody></table>`);
			}
			_push(`</div>`);
		};
	}
});
var _sfc_setup$1 = DirectoryListing_vue_vue_type_script_setup_true_lang_default.setup;
DirectoryListing_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Code/DirectoryListing.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var DirectoryListing_default = Object.assign(DirectoryListing_vue_vue_type_script_setup_true_lang_default, { __name: "CodeDirectoryListing" });
var MAX_FILE_SIZE = 500 * 1024;
var ____filePath__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[...filePath]",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const route = useRoute();
		const parsedRoute = computed(() => {
			return {
				packageName: route.params.org ? `${route.params.org}/${route.params.packageName}` : route.params.packageName,
				version: route.params.version,
				filePath: route.params.filePath || null
			};
		});
		const packageName = computed(() => parsedRoute.value.packageName);
		const version = computed(() => parsedRoute.value.version);
		const filePathOrig = computed(() => parsedRoute.value.filePath);
		const filePath = computed(() => parsedRoute.value.filePath?.replace(/\/$/, ""));
		function getCodeUrl(args) {
			const base = args.org ? `/package-code/${args.org}/${args.packageName}/v/${args.version}` : `/package-code/${args.packageName}/v/${args.version}`;
			return args.filePath ? `${base}/${args.filePath}` : base;
		}
		const { data: pkg } = usePackage(packageName);
		const versionUrlPattern = computed(() => getCodeUrl({
			org: route.params.org,
			packageName: route.params.packageName,
			version: "{version}",
			filePath: filePath.value
		}));
		const { data: fileTree, status: treeStatus } = useFetch(() => `/api/registry/files/${packageName.value}/v/${version.value}`, { immediate: !!version.value }, "$mXWboDlr9X");
		const currentNode = computed(() => {
			if (!fileTree.value?.tree || !filePathOrig.value) return null;
			const parts = filePathOrig.value.split("/");
			let current = fileTree.value.tree;
			let lastFound = null;
			const partsLength = parts.length;
			for (let i = 0; i < partsLength; i++) {
				const part = parts[i];
				const isLast = i === partsLength - 1;
				if (!part && isLast && lastFound?.type === "directory") return lastFound;
				const found = current?.find((n) => n.name === part);
				if (!found) return null;
				lastFound = found;
				if (found.type === "file" && isLast) return found;
				current = found.children;
			}
			return lastFound;
		});
		const isViewingFile = computed(() => currentNode.value?.type === "file");
		const isFileTooLarge = computed(() => {
			const size = currentNode.value?.size;
			return size !== void 0 && size > MAX_FILE_SIZE;
		});
		const fileContentUrl = computed(() => {
			if (!filePath.value || !fileTree.value || isFileTooLarge.value || !isViewingFile.value) return null;
			return `/api/registry/file/${packageName.value}/v/${version.value}/${filePath.value}`;
		});
		const { data: fileContent, status: fileStatus, execute: fetchFileContent } = useFetch(() => fileContentUrl.value, { immediate: false }, "$462TuAop2a");
		watch(fileContentUrl, (url) => {
			if (url) fetchFileContent();
		}, { immediate: true });
		const currentHash = shallowRef("");
		useEventListener("popstate", () => currentHash.value = (void 0).location.hash);
		watch(() => route.hash, (hash) => {
			currentHash.value = hash;
		});
		const selectedLines = computed(() => {
			const hash = currentHash.value;
			if (!hash) return null;
			const match = hash.match(/^#L(\d+)(?:-L(\d+))?$/);
			if (!match) return null;
			const start = parseInt(match[1] ?? "0", 10);
			return {
				start,
				end: match[2] ? parseInt(match[2], 10) : start
			};
		});
		const shouldScrollOnHashChange = shallowRef(true);
		function scrollToLine() {
			if (!shouldScrollOnHashChange.value) return;
			if (!selectedLines.value) return;
			const lineEl = (void 0).getElementById(`L${selectedLines.value.start}`);
			if (lineEl) lineEl.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
		watch(fileContent, () => {
			shouldScrollOnHashChange.value = true;
			nextTick(scrollToLine);
		});
		const breadcrumbs = computed(() => {
			const parts = filePath.value?.split("/").filter(Boolean) ?? [];
			const result = [];
			for (let i = 0; i < parts.length; i++) {
				const part = parts[i];
				if (part) result.push({
					name: part,
					path: parts.slice(0, i + 1).join("/")
				});
			}
			return result;
		});
		function getCurrentCodeUrlWithPath(path) {
			return getCodeUrl({
				...route.params,
				filePath: path
			});
		}
		const orgName = computed(() => {
			const name = packageName.value;
			if (!name.startsWith("@")) return null;
			const match = name.match(/^@([^/]+)\//);
			return match ? match[1] : null;
		});
		function handleLineClick(lineNum, event) {
			let newHash;
			if (event.shiftKey && selectedLines.value) newHash = `#L${Math.min(selectedLines.value.start, lineNum)}-L${Math.max(selectedLines.value.end, lineNum)}`;
			else newHash = `#L${lineNum}`;
			shouldScrollOnHashChange.value = false;
			const url = new URL((void 0).location.href);
			url.hash = newHash;
			(void 0).history.replaceState(history.state, "", url.toString());
			currentHash.value = newHash;
		}
		const { copied: permalinkCopied} = useClipboard({ copiedDuring: 2e3 });
		useTemplateRef("contentContainer");
		const canonicalUrl = computed(() => `https://npmx.dev${getCodeUrl(route.params)}`);
		const markdownViewModes = [{
			key: "preview",
			label: $t("code.markdown_view_mode.preview"),
			icon: "i-lucide:eye"
		}, {
			key: "code",
			label: $t("code.markdown_view_mode.code"),
			icon: "i-lucide:code"
		}];
		const markdownViewMode = shallowRef("preview");
		const bytesFormatter = useBytesFormatter();
		useHead$1({ link: [{
			rel: "canonical",
			href: canonicalUrl
		}] });
		useSeoMeta$1({
			title: () => {
				if (filePath.value) return `${filePath.value} - ${packageName.value}@${version.value} - npmx`;
				return `Code - ${packageName.value}@${version.value} - npmx`;
			},
			ogTitle: () => {
				if (filePath.value) return `${filePath.value} - ${packageName.value}@${version.value} - npmx`;
				return `Code - ${packageName.value}@${version.value} - npmx`;
			},
			twitterTitle: () => {
				if (filePath.value) return `${filePath.value} - ${packageName.value}@${version.value} - npmx`;
				return `Code - ${packageName.value}@${version.value} - npmx`;
			},
			description: () => `Browse source code for ${packageName.value}@${version.value}`,
			ogDescription: () => `Browse source code for ${packageName.value}@${version.value}`,
			twitterDescription: () => `Browse source code for ${packageName.value}@${version.value}`
		});
		defineOgImageComponent("Default", {
			title: () => `${pkg.value?.name ?? "Package"} - Code`,
			description: () => pkg.value?.license ?? "",
			primaryColor: "#60a5fa"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = nuxt_link_default;
			const _component_VersionSelector = VersionSelector_default;
			const _component_LinkBase = Base_default;
			const _component_CodeFileTree = FileTree_default;
			const _component_Readme = Readme_default;
			const _component_CodeViewer = Viewer_default;
			const _component_SkeletonInline = SkeletonInline_default;
			const _component_SkeletonBlock = SkeletonBlock_default;
			const _component_CodeDirectoryListing = DirectoryListing_default;
			const _component_ClientOnly = client_only_default;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col" }, _attrs))}><header class="border-b border-border bg-bg sticky top-14 z-20"><div class="container py-4"><div class="flex items-center gap-2 mb-3 flex-wrap min-w-0">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), unref(version)),
				class: "font-mono text-lg font-medium hover:text-fg transition-colors min-w-0 truncate max-w-[60vw] sm:max-w-none",
				title: unref(packageName)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(orgName)) _push(`<span class="text-fg-muted"${_scopeId}>@${ssrInterpolate(unref(orgName))}/</span>`);
						else _push(`<!---->`);
						_push(`${ssrInterpolate(unref(orgName) ? unref(packageName).replace(`@${unref(orgName)}/`, "") : unref(packageName))}`);
					} else return [unref(orgName) ? (openBlock(), createBlock("span", {
						key: 0,
						class: "text-fg-muted"
					}, "@" + toDisplayString(unref(orgName)) + "/", 1)) : createCommentVNode("", true), createTextVNode(toDisplayString(unref(orgName) ? unref(packageName).replace(`@${unref(orgName)}/`, "") : unref(packageName)), 1)];
				}),
				_: 1
			}, _parent));
			if (unref(version) && unref(pkg)?.versions && unref(pkg)?.["dist-tags"]) _push(ssrRenderComponent(_component_VersionSelector, {
				"package-name": unref(packageName),
				"current-version": unref(version),
				versions: unref(pkg).versions,
				"dist-tags": unref(pkg)["dist-tags"],
				"url-pattern": unref(versionUrlPattern)
			}, null, _parent));
			else if (unref(version)) _push(`<span class="px-2 py-0.5 font-mono text-sm bg-bg-muted border border-border rounded truncate max-w-32 sm:max-w-48"${ssrRenderAttr("title", `v${unref(version)}`)}> v${ssrInterpolate(unref(version))}</span>`);
			else _push(`<!---->`);
			_push(`<span class="text-fg-subtle shrink-0">/</span><span class="font-mono text-sm text-fg-muted shrink-0">${ssrInterpolate(unref($t)("package.links.code"))}</span></div><nav${ssrRenderAttr("aria-label", unref($t)("code.file_path"))} class="flex items-center gap-1 font-mono text-sm overflow-x-auto" dir="ltr">`);
			if (unref(filePath)) _push(ssrRenderComponent(_component_NuxtLink, {
				to: getCurrentCodeUrlWithPath(),
				class: "text-fg-muted hover:text-fg transition-colors shrink-0"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref($t)("code.root"))}`);
					else return [createTextVNode(toDisplayString(unref($t)("code.root")), 1)];
				}),
				_: 1
			}, _parent));
			else _push(`<span class="text-fg shrink-0">${ssrInterpolate(unref($t)("code.root"))}</span>`);
			_push(`<!--[-->`);
			ssrRenderList(unref(breadcrumbs), (crumb, i) => {
				_push(`<!--[--><span class="text-fg-subtle">/</span>`);
				if (i < unref(breadcrumbs).length - 1) _push(ssrRenderComponent(_component_NuxtLink, {
					to: getCurrentCodeUrlWithPath(crumb.path),
					class: "text-fg-muted hover:text-fg transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(crumb.name)}`);
						else return [createTextVNode(toDisplayString(crumb.name), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<span class="text-fg">${ssrInterpolate(crumb.name)}</span>`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></nav></div></header>`);
			if (!unref(version)) {
				_push(`<div class="container py-20 text-center"><p class="text-fg-muted mb-4">${ssrInterpolate(unref($t)("code.version_required"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName))
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("code.go_to_package"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("code.go_to_package")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(treeStatus) === "pending") _push(`<div class="container py-20 text-center"><div class="i-svg-spinners:ring-resize w-8 h-8 mx-auto text-fg-muted"></div><p class="mt-4 text-fg-muted">${ssrInterpolate(unref($t)("code.loading_tree"))}</p></div>`);
			else if (unref(treeStatus) === "error") {
				_push(`<div class="container py-20 text-center" role="alert"><p class="text-fg-muted mb-4">${ssrInterpolate(unref($t)("code.failed_to_load_tree"))}</p>`);
				_push(ssrRenderComponent(_component_LinkBase, {
					variant: "button-secondary",
					to: ("packageRoute" in _ctx ? _ctx.packageRoute : unref(packageRoute))(unref(packageName), unref(version))
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref($t)("code.back_to_package"))}`);
						else return [createTextVNode(toDisplayString(unref($t)("code.back_to_package")), 1)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(fileTree)) {
				_push(`<div class="flex flex-1" dir="ltr"><aside class="w-64 lg:w-72 border-ie border-border shrink-0 hidden md:block bg-bg-subtle sticky top-28 self-start h-[calc(100vh-7rem)] overflow-y-auto">`);
				_push(ssrRenderComponent(_component_CodeFileTree, {
					tree: unref(fileTree).tree,
					"current-path": unref(filePath) ?? "",
					"base-url": getCurrentCodeUrlWithPath(),
					"base-route": unref(route)
				}, null, _parent));
				_push(`</aside><div class="flex-1 min-w-0 overflow-x-hidden sticky top-28 self-start h-[calc(100vh-7rem)] overflow-y-auto">`);
				if (unref(isViewingFile) && unref(fileContent)) {
					_push(`<!--[--><div class="sticky z-10 top-0 bg-bg border-b border-border px-4 py-2 flex items-center justify-between"><div class="flex items-center gap-2">`);
					if (unref(fileContent).markdownHtml) {
						_push(`<div class="flex items-center gap-1 p-0.5 bg-bg-subtle border border-border-subtle rounded-md overflow-x-auto" role="tablist" aria-label="Markdown view mode selector"><!--[-->`);
						ssrRenderList(markdownViewModes, (mode) => {
							_push(`<button role="tab" class="${ssrRenderClass([unref(markdownViewMode) === mode.key ? "bg-bg shadow text-fg border-border" : "text-fg-subtle hover:text-fg border-transparent", "px-2 py-1.5 font-mono text-xs rounded transition-colors duration-150 border border-solid focus-visible:outline-accent/70 inline-flex items-center gap-1.5"])}"><span class="${ssrRenderClass([mode.icon, "inline-block h-3 w-3"])}" aria-hidden="true"></span> ${ssrInterpolate(mode.label)}</button>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(`<div class="flex items-center gap-3 text-sm"><span class="text-fg-muted" dir="auto">${ssrInterpolate(unref($t)("code.lines", { count: unref(fileContent).lines }))}</span>`);
					if (unref(currentNode)?.size) _push(`<span class="text-fg-subtle">${ssrInterpolate(unref(bytesFormatter).format(unref(currentNode).size))}</span>`);
					else _push(`<!---->`);
					_push(`</div></div><div class="flex items-center gap-2"><button type="button" class="px-2 py-1 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded hover:text-fg hover:border-border-hover transition-colors items-center inline-flex gap-1"><span class="i-lucide:arrow-up w-3 h-3"></span> ${ssrInterpolate(unref($t)("code.scroll_to_top"))}</button>`);
					if (unref(selectedLines)) _push(`<button type="button" class="px-2 py-1 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded hover:text-fg hover:border-border-hover transition-colors active:scale-95">${ssrInterpolate(unref(permalinkCopied) ? unref($t)("common.copied") : unref($t)("code.copy_link"))}</button>`);
					else _push(`<!---->`);
					_push(`<a${ssrRenderAttr("href", `https://cdn.jsdelivr.net/npm/${unref(packageName)}@${unref(version)}/${unref(filePath)}`)} target="_blank" rel="noopener noreferrer" class="px-2 py-1 font-mono text-xs text-fg-muted bg-bg-subtle border border-border rounded hover:text-fg hover:border-border-hover transition-colors inline-flex items-center gap-1">${ssrInterpolate(unref($t)("code.raw"))} <span class="i-lucide:external-link w-3 h-3"></span></a></div></div>`);
					if (unref(fileContent).markdownHtml) {
						_push(`<div class="flex justify-center p-4" style="${ssrRenderStyle(unref(markdownViewMode) === "preview" ? null : { display: "none" })}">`);
						_push(ssrRenderComponent(_component_Readme, { html: unref(fileContent).markdownHtml.html }, null, _parent));
						_push(`</div>`);
					} else _push(`<!---->`);
					_push(ssrRenderComponent(_component_CodeViewer, {
						style: !unref(fileContent).markdownHtml || unref(markdownViewMode) === "code" ? null : { display: "none" },
						html: unref(fileContent).html,
						lines: unref(fileContent).lines,
						"selected-lines": unref(selectedLines),
						onLineClick: handleLineClick
					}, null, _parent));
					_push(`<!--]-->`);
				} else if (unref(isViewingFile) && unref(isFileTooLarge)) {
					_push(`<div class="py-20 text-center"><div class="i-lucide:file-text w-12 h-12 mx-auto text-fg-subtle mb-4"></div><p class="text-fg-muted mb-2">${ssrInterpolate(unref($t)("code.file_too_large"))}</p><p class="text-fg-subtle text-sm mb-4">${ssrInterpolate(unref($t)("code.file_size_warning", { size: unref(bytesFormatter).format(unref(currentNode)?.size ?? 0) }))}</p>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						variant: "button-secondary",
						to: `https://cdn.jsdelivr.net/npm/${unref(packageName)}@${unref(version)}/${unref(filePath)}`
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("code.view_raw"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("code.view_raw")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else if (unref(filePath) && unref(fileStatus) === "pending") {
					_push(`<div class="flex min-h-full" aria-busy="true"${ssrRenderAttr("aria-label", unref($t)("common.loading"))}><div class="shrink-0 bg-bg-subtle border-ie border-border w-14 py-0"><!--[-->`);
					ssrRenderList(20, (n) => {
						_push(`<div class="px-3 h-6 flex items-center justify-end">`);
						_push(ssrRenderComponent(_component_SkeletonInline, { class: "w-4 h-3 rounded-sm" }, null, _parent));
						_push(`</div>`);
					});
					_push(`<!--]--></div><div class="flex-1 p-4 space-y-1.5">`);
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-32 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-48 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-24 rounded-sm" }, null, _parent));
					_push(`<div class="h-4"></div>`);
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-64 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-56 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-40 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-72 rounded-sm" }, null, _parent));
					_push(`<div class="h-4"></div>`);
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-36 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-52 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-44 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-28 rounded-sm" }, null, _parent));
					_push(`<div class="h-4"></div>`);
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-60 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-48 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-32 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-56 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-40 rounded-sm" }, null, _parent));
					_push(ssrRenderComponent(_component_SkeletonBlock, { class: "h-4 w-24 rounded-sm" }, null, _parent));
					_push(`</div></div>`);
				} else if (unref(filePath) && unref(fileStatus) === "error") {
					_push(`<div class="py-20 text-center" role="alert"><div class="i-lucide:circle-alert w-8 h-8 mx-auto text-fg-subtle mb-4"></div><p class="text-fg-muted mb-2">${ssrInterpolate(unref($t)("code.failed_to_load"))}</p><p class="text-fg-subtle text-sm mb-4">${ssrInterpolate(unref($t)("code.unavailable_hint"))}</p>`);
					_push(ssrRenderComponent(_component_LinkBase, {
						variant: "button-secondary",
						to: `https://cdn.jsdelivr.net/npm/${unref(packageName)}@${unref(version)}/${unref(filePath)}`
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(unref($t)("code.view_raw"))}`);
							else return [createTextVNode(toDisplayString(unref($t)("code.view_raw")), 1)];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else _push(ssrRenderComponent(_component_CodeDirectoryListing, {
					tree: unref(fileTree).tree,
					"current-path": unref(filePath) ?? "",
					"base-url": getCurrentCodeUrlWithPath(),
					"base-route": unref(route)
				}, null, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(`</main>`);
		};
	}
});
var _sfc_setup = ____filePath__vue_vue_type_script_setup_true_lang_default.setup;
____filePath__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package-code/[[org]]/[packageName]/v/[version]/[...filePath].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____filePath__default = ____filePath__vue_vue_type_script_setup_true_lang_default;

export { ____filePath__default as default };
//# sourceMappingURL=_...filePath_-Btb2ofxN.mjs.map

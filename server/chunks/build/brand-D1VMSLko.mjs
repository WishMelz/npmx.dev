import { u as useI18n, a as useSeoMeta$1, m as Base_default$1, A as AppLogo_default, o as client_only_default } from './server-placeholder-C9fYItBT.mjs';
import { d as defineOgImageComponent } from './defineOgImageComponent-AYn-m8kF.mjs';
import { B as BackButton_default } from './BackButton-Dnk12j1Z.mjs';
import { d as downloadFileLink, a as downloadFile } from './download-BhcGnbTM.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { aM as ACCENT_COLORS, aN as DISCORD_COMMUNITY_URL } from '../nitro/nitro.mjs';
import 'devalue';
import 'perfect-debounce';
import './useCanGoBack-CvNAow9_.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'valibot';
import 'fast-npm-meta';
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

//#region app/utils/svg.ts
/**
* Convert an SVG (URL or data URI) into a PNG Blob.
*
* @param svgUrl - URL or data URI pointing to the SVG to convert. If remote,
*                 the resource must be accessible (CORS allowed) for use in a canvas.
* @param width - Desired logical width (CSS pixels) of the output image.
* @param height - Desired logical height (CSS pixels) of the output image.
* @param scale - Optional pixel scale multiplier (use 2 for high-DPI output). Default: 2.
* @returns A Promise that resolves with a PNG Blob containing the rendered image.
* @throws {Error} If the SVG fails to load or if the canvas cannot produce a Blob.
*/
async function svgToPng(svgUrl, width, height, scale = 2) {
	await (void 0).fonts.ready;
	const img = new Image();
	img.crossOrigin = "anonymous";
	const loaded = new Promise((resolve, reject) => {
		img.onload = () => resolve();
		img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load SVG: ${svgUrl}`));
	});
	img.src = svgUrl;
	await loaded;
	const canvas = (void 0).createElement("canvas");
	canvas.width = width * scale;
	canvas.height = height * scale;
	const ctx = canvas.getContext("2d");
	ctx.scale(scale, scale);
	ctx.drawImage(img, 0, 0, width, height);
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (blob) resolve(blob);
			else reject(/* @__PURE__ */ new Error("Canvas toBlob failed"));
		}, "image/png");
	});
}
//#endregion
//#region app/pages/brand.vue?vue&type=script&setup=true&lang.ts
var brand_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "brand",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		useSeoMeta$1({
			title: () => `${$t("brand.title")} - npmx`,
			ogTitle: () => `${$t("brand.title")} - npmx`,
			twitterTitle: () => `${$t("brand.title")} - npmx`,
			description: () => $t("brand.meta_description"),
			ogDescription: () => $t("brand.meta_description"),
			twitterDescription: () => $t("brand.meta_description")
		});
		defineOgImageComponent("Default", {
			primaryColor: "#51c8fc",
			title: $t("brand.title"),
			description: $t("brand.meta_description")
		});
		const logos = [{
			name: () => $t("brand.logos.wordmark"),
			src: "/logo.svg",
			srcLight: "/logo-light.svg",
			altDark: () => $t("brand.logos.wordmark_alt"),
			altLight: () => $t("brand.logos.wordmark_light_alt"),
			width: 602,
			height: 170,
			span: true
		}, {
			name: () => $t("brand.logos.mark"),
			src: "/logo-mark.svg",
			srcLight: "/logo-mark-light.svg",
			altDark: () => $t("brand.logos.mark_alt"),
			altLight: () => $t("brand.logos.mark_light_alt"),
			width: 153,
			height: 153,
			span: true
		}];
		const typographySizes = [
			"text-2xl",
			"text-xl",
			"text-lg",
			"text-base",
			"text-sm"
		];
		const svgLoading = ref(/* @__PURE__ */ new Set());
		const pngLoading = ref(/* @__PURE__ */ new Set());
		function handleSvgDownload(src) {
			if (svgLoading.value.has(src)) return;
			svgLoading.value.add(src);
			try {
				downloadFileLink(src, src.replace("/", ""));
			} finally {
				svgLoading.value.delete(src);
			}
		}
		async function handlePngDownload(logo) {
			if (pngLoading.value.has(logo.src)) return;
			pngLoading.value.add(logo.src);
			try {
				downloadFile(await svgToPng(logo.src, logo.width, logo.height), logo.src.replace(/^\//, "").replace(".svg", ".png"));
			} finally {
				pngLoading.value.delete(logo.src);
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BackButton = BackButton_default;
			const _component_ButtonBase = Base_default$1;
			const _component_AppLogo = AppLogo_default;
			const _component_ClientOnly = client_only_default;
			const _component_i18n_t = resolveComponent("i18n-t");
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container flex-1 py-12 sm:py-16 overflow-x-hidden" }, _attrs))}><article class="max-w-2xl mx-auto"><header class="mb-12"><div class="flex items-baseline justify-between gap-4 mb-4"><h1 class="font-mono text-3xl sm:text-4xl font-medium">${ssrInterpolate(unref($t)("brand.heading"))}</h1>`);
			_push(ssrRenderComponent(_component_BackButton, null, null, _parent));
			_push(`</div><p class="text-fg-muted text-lg">${ssrInterpolate(unref($t)("brand.intro"))}</p></header><div class="flex flex-col gap-16"><section aria-labelledby="brand-logos-heading"><h2 id="brand-logos-heading" class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("brand.logos.title"))}</h2><p class="text-fg-muted leading-relaxed mb-8">${ssrInterpolate(unref($t)("brand.logos.description"))}</p><div><!--[-->`);
			ssrRenderList(logos, (logo) => {
				_push(`<figure class="m-0 mt-12 first:mt-0" role="group"${ssrRenderAttr("aria-label", logo.name())}><figcaption class="font-mono text-sm text-fg mb-3">${ssrInterpolate(logo.name())}</figcaption><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="flex flex-col"><div class="bg-[#0a0a0a] rounded-lg p-6 sm:p-8 flex items-center justify-center border border-border min-h-40 flex-1"><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.altDark())} class="${ssrRenderClass([{ "max-h-20": logo.span }, "max-h-16 w-auto max-w-full"])}"></div><div class="flex items-center justify-between mt-2"><span class="text-sm text-fg-subtle font-mono">${ssrInterpolate(unref($t)("brand.logos.on_dark"))}</span><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "md",
					"aria-label": unref($t)("brand.logos.download_svg_aria", { name: `${logo.name()} (${unref($t)("brand.logos.on_dark")})` }),
					disabled: unref(svgLoading).has(logo.src),
					onClick: ($event) => handleSvgDownload(logo.src)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span aria-hidden="true" class="${ssrRenderClass([unref(svgLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download", "size-[1em]"])}"${_scopeId}></span> ${ssrInterpolate(unref($t)("brand.logos.download_svg"))}`);
						else return [createVNode("span", {
							class: ["size-[1em]", unref(svgLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download"],
							"aria-hidden": "true"
						}, null, 2), createTextVNode(" " + toDisplayString(unref($t)("brand.logos.download_svg")), 1)];
					}),
					_: 2
				}, _parent));
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "md",
					"aria-label": unref($t)("brand.logos.download_png_aria", { name: `${logo.name()} (${unref($t)("brand.logos.on_dark")})` }),
					disabled: unref(pngLoading).has(logo.src),
					onClick: ($event) => handlePngDownload(logo)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span aria-hidden="true" class="${ssrRenderClass([unref(pngLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download", "size-[1em]"])}"${_scopeId}></span> ${ssrInterpolate(unref($t)("brand.logos.download_png"))}`);
						else return [createVNode("span", {
							class: ["size-[1em]", unref(pngLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download"],
							"aria-hidden": "true"
						}, null, 2), createTextVNode(" " + toDisplayString(unref($t)("brand.logos.download_png")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</div></div></div><div class="flex flex-col"><div class="bg-white rounded-lg p-6 sm:p-8 flex items-center justify-center border border-border min-h-40 flex-1">`);
				if (logo.src === "/logo.svg") _push(ssrRenderComponent(_component_AppLogo, {
					class: "max-h-20 w-auto max-w-full text-[#0a0a0a]",
					style: { "--accent": unref(ACCENT_COLORS).light.sky },
					"aria-label": logo.altLight()
				}, null, _parent));
				else _push(`<img${ssrRenderAttr("src", logo.srcLight ?? logo.src)}${ssrRenderAttr("alt", logo.altLight())} class="${ssrRenderClass([{ "max-h-20": logo.span }, "max-h-16 w-auto max-w-full"])}">`);
				_push(`</div><div class="flex items-center justify-between mt-2"><span class="text-sm text-fg-subtle font-mono">${ssrInterpolate(unref($t)("brand.logos.on_light"))}</span><div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "md",
					"aria-label": unref($t)("brand.logos.download_svg_aria", { name: `${logo.name()} (${unref($t)("brand.logos.on_light")})` }),
					disabled: unref(svgLoading).has(logo.srcLight ?? logo.src),
					onClick: ($event) => handleSvgDownload(logo.srcLight ?? logo.src)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span aria-hidden="true" class="${ssrRenderClass([unref(svgLoading).has(logo.srcLight ?? logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download", "size-[1em]"])}"${_scopeId}></span> ${ssrInterpolate(unref($t)("brand.logos.download_svg"))}`);
						else return [createVNode("span", {
							class: ["size-[1em]", unref(svgLoading).has(logo.srcLight ?? logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download"],
							"aria-hidden": "true"
						}, null, 2), createTextVNode(" " + toDisplayString(unref($t)("brand.logos.download_svg")), 1)];
					}),
					_: 2
				}, _parent));
				_push(ssrRenderComponent(_component_ButtonBase, {
					size: "md",
					"aria-label": unref($t)("brand.logos.download_png_aria", { name: `${logo.name()} (${unref($t)("brand.logos.on_light")})` }),
					disabled: unref(pngLoading).has(logo.src),
					onClick: ($event) => handlePngDownload(logo)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span aria-hidden="true" class="${ssrRenderClass([unref(pngLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download", "size-[1em]"])}"${_scopeId}></span> ${ssrInterpolate(unref($t)("brand.logos.download_png"))}`);
						else return [createVNode("span", {
							class: ["size-[1em]", unref(pngLoading).has(logo.src) ? "i-lucide:loader-circle animate-spin" : "i-lucide:download"],
							"aria-hidden": "true"
						}, null, 2), createTextVNode(" " + toDisplayString(unref($t)("brand.logos.download_png")), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</div></div></div></div></figure>`);
			});
			_push(`<!--]--></div></section>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(`<section aria-labelledby="brand-typography-heading"><h2 id="brand-typography-heading" class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("brand.typography.title"))}</h2><p class="text-fg-muted leading-relaxed mb-8">${ssrInterpolate(unref($t)("brand.typography.description"))}</p><div class="space-y-10"><div><h3 class="font-mono text-sm text-fg uppercase tracking-wider mb-1">${ssrInterpolate(unref($t)("brand.typography.sans"))}</h3><p class="text-fg-subtle text-sm mb-4 m-0">${ssrInterpolate(unref($t)("brand.typography.sans_desc"))}</p><div class="space-y-2 border border-border rounded-lg p-6"><!--[-->`);
			ssrRenderList(typographySizes, (size) => {
				_push(`<p class="${ssrRenderClass([size, "font-sans text-fg m-0"])}">${ssrInterpolate(unref($t)("brand.typography.pangram"))}</p>`);
			});
			_push(`<!--]--><p class="font-sans text-fg text-lg m-0 mt-4 tracking-widest">${ssrInterpolate(unref($t)("brand.typography.numbers"))}</p></div></div><div><h3 class="font-mono text-sm text-fg uppercase tracking-wider mb-1">${ssrInterpolate(unref($t)("brand.typography.mono"))}</h3><p class="text-fg-subtle text-sm mb-4 m-0">${ssrInterpolate(unref($t)("brand.typography.mono_desc"))}</p><div class="space-y-2 border border-border rounded-lg p-6"><!--[-->`);
			ssrRenderList(typographySizes, (size) => {
				_push(`<p class="${ssrRenderClass([size, "font-mono text-fg m-0"])}">${ssrInterpolate(unref($t)("brand.typography.pangram"))}</p>`);
			});
			_push(`<!--]--><p class="font-mono text-fg text-lg m-0 mt-4 tracking-widest">${ssrInterpolate(unref($t)("brand.typography.numbers"))}</p></div></div></div></section><section aria-labelledby="brand-guidelines-heading"><h2 id="brand-guidelines-heading" class="text-lg text-fg uppercase tracking-wider mb-4">${ssrInterpolate(unref($t)("brand.guidelines.title"))}</h2><blockquote class="border-is-2 border-is-accent ps-6 py-2 text-fg-muted leading-relaxed">`);
			_push(ssrRenderComponent(_component_i18n_t, {
				keypath: "brand.guidelines.message",
				tag: "p",
				class: "m-0"
			}, {
				link: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<a${ssrRenderAttr("href", unref(DISCORD_COMMUNITY_URL))} target="_blank" rel="noopener noreferrer" class="text-accent hover:underline"${_scopeId}>${ssrInterpolate(unref($t)("brand.guidelines.discord_link_text"))}</a>`);
					else return [createVNode("a", {
						href: unref(DISCORD_COMMUNITY_URL),
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-accent hover:underline"
					}, toDisplayString(unref($t)("brand.guidelines.discord_link_text")), 9, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</blockquote></section></div></article></main>`);
		};
	}
});
//#endregion
//#region app/pages/brand.vue
var _sfc_setup = brand_vue_vue_type_script_setup_true_lang_default.setup;
brand_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brand.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var brand_default = brand_vue_vue_type_script_setup_true_lang_default;

export { brand_default as default };
//# sourceMappingURL=brand-D1VMSLko.mjs.map

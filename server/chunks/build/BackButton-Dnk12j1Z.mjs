import { i as useRouter } from './server-placeholder-C9fYItBT.mjs';
import { u as useCanGoBack } from './useCanGoBack-CvNAow9_.mjs';
import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/BackButton.vue?vue&type=script&setup=true&lang.ts
var BackButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BackButton",
	__ssrInlineRender: true,
	setup(__props) {
		useRouter();
		const canGoBack = useCanGoBack();
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(canGoBack)) _push(`<button${ssrRenderAttrs(mergeProps({
				type: "button",
				class: "inline-flex items-center gap-2 p-1.5 -mx-1.5 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"
			}, _attrs))}><span class="i-lucide:arrow-left rtl-flip w-4 h-4" aria-hidden="true"></span><span class="sr-only sm:not-sr-only">${ssrInterpolate(_ctx.$t("nav.back"))}</span></button>`);
			else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/components/BackButton.vue
var _sfc_setup = BackButton_vue_vue_type_script_setup_true_lang_default.setup;
BackButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackButton.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BackButton_default = Object.assign(BackButton_vue_vue_type_script_setup_true_lang_default, { __name: "BackButton" });

export { BackButton_default as B };
//# sourceMappingURL=BackButton-Dnk12j1Z.mjs.map

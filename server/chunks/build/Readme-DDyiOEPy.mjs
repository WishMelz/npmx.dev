import { _ as _plugin_vue_export_helper_default, P as useClipboard } from './server-placeholder-C9fYItBT.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/Readme.vue?vue&type=script&setup=true&lang.ts
var Readme_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Readme",
	__ssrInlineRender: true,
	props: { html: {} },
	setup(__props) {
		useClipboard();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<article${ssrRenderAttrs(mergeProps({
				class: "readme max-w-[70ch] lg:max-w-none px-1",
				dir: "auto",
				style: {
					"--i18n-note": "'" + _ctx.$t("package.readme.callout.note") + "'",
					"--i18n-tip": "'" + _ctx.$t("package.readme.callout.tip") + "'",
					"--i18n-important": "'" + _ctx.$t("package.readme.callout.important") + "'",
					"--i18n-warning": "'" + _ctx.$t("package.readme.callout.warning") + "'",
					"--i18n-caution": "'" + _ctx.$t("package.readme.callout.caution") + "'"
				}
			}, _attrs))} data-v-6bad1df8>${__props.html ?? ""}</article>`);
		};
	}
});
//#endregion
//#region app/components/Readme.vue
var _sfc_setup = Readme_vue_vue_type_script_setup_true_lang_default.setup;
Readme_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Readme.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Readme_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Readme_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-6bad1df8"]]), { __name: "Readme" });

export { Readme_default as R };
//# sourceMappingURL=Readme-DDyiOEPy.mjs.map

import { _ as _plugin_vue_export_helper_default, F as useClipboard } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

var Readme_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Readme",
	__ssrInlineRender: true,
	props: { html: {} },
	setup(__props) {
		useClipboard();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<article${ssrRenderAttrs(mergeProps({
				class: "readme prose prose-invert max-w-[70ch] lg:max-w-none px-1",
				dir: "auto",
				style: {
					"--i18n-note": "'" + _ctx.$t("package.readme.callout.note") + "'",
					"--i18n-tip": "'" + _ctx.$t("package.readme.callout.tip") + "'",
					"--i18n-important": "'" + _ctx.$t("package.readme.callout.important") + "'",
					"--i18n-warning": "'" + _ctx.$t("package.readme.callout.warning") + "'",
					"--i18n-caution": "'" + _ctx.$t("package.readme.callout.caution") + "'"
				}
			}, _attrs))} data-v-3b4b55b6>${__props.html ?? ""}</article>`);
		};
	}
});
var _sfc_setup$1 = Readme_vue_vue_type_script_setup_true_lang_default.setup;
Readme_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Readme.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Readme_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Readme_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3b4b55b6"]]), { __name: "Readme" });
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-block bg-bg-elevated rounded animate-skeleton-pulse" }, _attrs))}></span>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonInline.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SkeletonInline_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SkeletonInline" });

export { Readme_default as R, SkeletonInline_default as S };
//# sourceMappingURL=SkeletonInline-5VR7VjON.mjs.map

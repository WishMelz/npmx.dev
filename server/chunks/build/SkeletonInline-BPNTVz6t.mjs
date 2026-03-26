import { _ as _plugin_vue_export_helper_default } from './server-placeholder-C9fYItBT.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/SkeletonInline.vue
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

export { SkeletonInline_default as S };
//# sourceMappingURL=SkeletonInline-BPNTVz6t.mjs.map

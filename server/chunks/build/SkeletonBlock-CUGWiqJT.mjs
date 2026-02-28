import { _ as _plugin_vue_export_helper_default } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bg-elevated rounded animate-skeleton-pulse" }, _attrs))}></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonBlock.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SkeletonBlock_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SkeletonBlock" });

export { SkeletonBlock_default as S };
//# sourceMappingURL=SkeletonBlock-CUGWiqJT.mjs.map

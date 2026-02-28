import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

var _version__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[version]",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}></div>`);
		};
	}
});
var _sfc_setup = _version__vue_vue_type_script_setup_true_lang_default.setup;
_version__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package/[[org]]/[name]/v/[version].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _version__default = _version__vue_vue_type_script_setup_true_lang_default;

export { _version__default as default };
//# sourceMappingURL=_version_-BEjGATXJ.mjs.map

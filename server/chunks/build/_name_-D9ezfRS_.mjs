import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/pages/package/[[org]]/[name]/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}></div>`);
		};
	}
});
//#endregion
//#region app/pages/package/[[org]]/[name]/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/package/[[org]]/[name]/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _name__default = index_vue_vue_type_script_setup_true_lang_default;

export { _name__default as default };
//# sourceMappingURL=_name_-D9ezfRS_.mjs.map

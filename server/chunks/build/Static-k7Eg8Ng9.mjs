import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/Tag/Static.vue?vue&type=script&setup=true&lang.ts
var Static_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Static",
	__ssrInlineRender: true,
	props: {
		as: { default: "span" },
		variant: { default: "default" },
		classicon: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({ class: ["bg-bg-muted text-fg-muted inline-flex gap-x-1 items-center justify-center font-mono border border-gray-400 dark:border-gray-500 rounded-md text-xs px-2 py-0.5", { "opacity-80 border-dashed": __props.variant === "ghost" }] }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.classicon) _push(`<span class="${ssrRenderClass([__props.classicon, "size-[1em]"])}" aria-hidden="true"${_scopeId}></span>`);
						else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [__props.classicon ? (openBlock(), createBlock("span", {
						key: 0,
						class: ["size-[1em]", __props.classicon],
						"aria-hidden": "true"
					}, null, 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
//#endregion
//#region app/components/Tag/Static.vue
var _sfc_setup = Static_vue_vue_type_script_setup_true_lang_default.setup;
Static_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/Static.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Static_default = Object.assign(Static_vue_vue_type_script_setup_true_lang_default, { __name: "TagStatic" });

export { Static_default as S };
//# sourceMappingURL=Static-k7Eg8Ng9.mjs.map

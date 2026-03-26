import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/BaseCard.vue?vue&type=script&setup=true&lang.ts
var BaseCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BaseCard",
	__ssrInlineRender: true,
	props: {
		isExactMatch: { type: Boolean },
		selected: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<article${ssrRenderAttrs(mergeProps({ class: ["group bg-bg-subtle border border-border rounded-lg p-4 sm:p-6 transition-[border-color,background-color] duration-200 hover:border-border-hover hover:bg-bg-muted cursor-pointer relative focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-bg focus-within:ring-offset-2 focus-within:ring-fg/50 focus-within:bg-bg-muted focus-within:border-border-hover", {
				"border-accent/30 contrast-more:border-accent/90 bg-accent/5": __props.isExactMatch,
				"bg-fg-subtle/15!": __props.selected
			}] }, _attrs))}>`);
			if (__props.isExactMatch) _push(`<div class="absolute -inset-px rounded-lg bg-gradient-to-r from-accent/0 via-accent/0 to-accent/10 opacity-100 blur-sm -z-1 pointer-events-none motion-reduce:opacity-50" aria-hidden="true"></div>`);
			else _push(`<!---->`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</article>`);
		};
	}
});
//#endregion
//#region app/components/BaseCard.vue
var _sfc_setup = BaseCard_vue_vue_type_script_setup_true_lang_default.setup;
BaseCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BaseCard_default = Object.assign(BaseCard_vue_vue_type_script_setup_true_lang_default, { __name: "BaseCard" });

export { BaseCard_default as B };
//# sourceMappingURL=BaseCard-Bmgsx7UV.mjs.map

import { defineComponent, shallowRef, useId, computed, mergeProps, unref, createSlots, withCtx, renderSlot, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useTemplateRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrRenderClass, ssrRenderAttrs, ssrRenderTeleport, ssrInterpolate } from 'vue/server-renderer';
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue';

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
var _sfc_setup$2 = Static_vue_vue_type_script_setup_true_lang_default.setup;
Static_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag/Static.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Static_default = Object.assign(Static_vue_vue_type_script_setup_true_lang_default, { __name: "TagStatic" });
var Base_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Base",
	__ssrInlineRender: true,
	props: {
		text: {},
		position: {},
		isVisible: { type: Boolean },
		interactive: { type: Boolean },
		tooltipAttr: {},
		to: { default: "body" },
		defer: { type: Boolean },
		offset: { default: 4 },
		strategy: { default: "absolute" }
	},
	setup(__props) {
		const props = __props;
		const triggerRef = useTemplateRef("triggerRef");
		const tooltipRef = useTemplateRef("tooltipRef");
		const { floatingStyles } = useFloating(triggerRef, tooltipRef, {
			placement: computed(() => props.position || "bottom"),
			whileElementsMounted: autoUpdate,
			strategy: props.strategy,
			middleware: [
				offset(props.offset),
				flip(),
				shift({ padding: 8 })
			]
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "triggerRef",
				ref: triggerRef,
				class: "inline-flex"
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			ssrRenderTeleport(_push, (_push) => {
				if (props.isVisible) {
					_push(`<div${ssrRenderAttrs(mergeProps({
						ref_key: "tooltipRef",
						ref: tooltipRef,
						class: ["px-2 py-1 font-mono text-xs text-fg bg-bg-elevated border border-border rounded shadow-lg whitespace-pre-line break-words max-w-xs z-[100]", { "pointer-events-none": !__props.interactive }],
						style: unref(floatingStyles)
					}, __props.tooltipAttr))}>`);
					ssrRenderSlot(_ctx.$slots, "content", {}, () => {
						_push(`${ssrInterpolate(__props.text)}`);
					}, _push, _parent);
					_push(`</div>`);
				} else _push(`<!---->`);
			}, props.to, false, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$1 = Base_vue_vue_type_script_setup_true_lang_default.setup;
Base_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tooltip/Base.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Base_default = Object.assign(Base_vue_vue_type_script_setup_true_lang_default, { __name: "TooltipBase" });
var App_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	__ssrInlineRender: true,
	props: {
		text: {},
		position: {},
		interactive: { type: Boolean },
		to: {},
		defer: { type: Boolean },
		offset: {}
	},
	setup(__props) {
		const props = __props;
		const isVisible = shallowRef(false);
		const tooltipId = useId();
		const hideTimeout = shallowRef(null);
		function show() {
			if (hideTimeout.value) {
				clearTimeout(hideTimeout.value);
				hideTimeout.value = null;
			}
			isVisible.value = true;
		}
		function hide() {
			if (props.interactive) hideTimeout.value = setTimeout(() => {
				isVisible.value = false;
			}, 150);
			else isVisible.value = false;
		}
		const tooltipAttrs = computed(() => {
			const attrs = {
				role: "tooltip",
				id: tooltipId
			};
			if (props.interactive) {
				attrs.onMouseenter = show;
				attrs.onMouseleave = hide;
			}
			return attrs;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(Base_default, mergeProps({
				text: __props.text,
				isVisible: unref(isVisible),
				position: __props.position,
				interactive: __props.interactive,
				to: __props.to,
				defer: __props.defer,
				offset: __props.offset,
				"tooltip-attr": unref(tooltipAttrs),
				onMouseenter: show,
				onMouseleave: hide,
				onFocusin: show,
				onFocusout: hide,
				"aria-describedby": unref(isVisible) ? unref(tooltipId) : void 0
			}, _attrs), createSlots({
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 2
			}, [_ctx.$slots.content ? {
				name: "content",
				fn: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "content")];
				}),
				key: "0"
			} : void 0]), _parent));
		};
	}
});
var _sfc_setup = App_vue_vue_type_script_setup_true_lang_default.setup;
App_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tooltip/App.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App_default = Object.assign(App_vue_vue_type_script_setup_true_lang_default, { __name: "TooltipApp" });

export { App_default as A, Static_default as S };
//# sourceMappingURL=App-B-_OJFKC.mjs.map

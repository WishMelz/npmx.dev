import { defineComponent, useModel, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, mergeModels, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';

const SELECT_SIZES = {
	none: "",
	sm: "text-xs px-2 py-1.75 rounded-md",
	md: "text-sm px-3 py-2.25 rounded-lg",
	lg: "text-base px-6 py-4 rounded-xl"
};
var Base_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Base",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		disabled: { type: Boolean },
		size: { default: "md" }
	}, {
		"modelValue": { default: void 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<select${ssrRenderAttrs(mergeProps({
				class: ["bg-bg border border-border font-mono text-fg placeholder:text-fg-subtle transition-[border-color,outline-color] duration-300 hover:border-fg-subtle outline-2 outline-transparent outline-offset-2 focus:border-accent focus-visible:outline-accent/70 disabled:opacity-50 disabled:cursor-not-allowed", [unref(SELECT_SIZES)[__props.size]]],
				disabled: __props.disabled ? true : void 0
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</select>`);
		};
	}
});
var _sfc_setup$1 = Base_vue_vue_type_script_setup_true_lang_default.setup;
Base_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Select/Base.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Base_default = Object.assign(Base_vue_vue_type_script_setup_true_lang_default, { __name: "SelectBase" });
var Field_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Field",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		items: {},
		size: { default: "md" },
		selectAttrs: {},
		label: {},
		labelAttrs: {},
		hiddenLabel: { type: Boolean },
		id: {},
		block: { type: Boolean },
		disabled: { type: Boolean }
	}, {
		"modelValue": { default: void 0 },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const SELECT_FIELD_SIZES = {
			sm: "text-xs py-1.75 ps-2 pe-6 rounded-md",
			md: "text-sm py-2.25 ps-3 pe-9 rounded-lg",
			lg: "text-base py-4 ps-6 pe-15 rounded-xl"
		};
		const SELECT_FIELD_ICON_SIZES = {
			sm: "inset-ie-2 size-[0.75rem]",
			md: "inset-ie-3 size-[1rem]",
			lg: "inset-ie-5 size-[1.5rem]"
		};
		const SELECT_FIELD_LABEL_SIZES = {
			sm: "text-2xs",
			md: "text-xs",
			lg: "text-sm"
		};
		const model = useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectBase = Base_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "group/select" }, _attrs))}>`);
			if (__props.label) _push(`<label${ssrRenderAttrs(mergeProps({ for: __props.id }, __props.labelAttrs, { class: ["block mb-1 font-mono text-fg-subtle tracking-wide uppercase", [__props.hiddenLabel ? "sr-only" : "", SELECT_FIELD_LABEL_SIZES[__props.size]]] }))}>${ssrInterpolate(__props.label)}</label>`);
			else _push(`<!---->`);
			_push(`<div class="${ssrRenderClass([[__props.block ? "w-full" : "w-fit"], "relative"])}">`);
			_push(ssrRenderComponent(_component_SelectBase, mergeProps({
				disabled: __props.disabled,
				size: "none",
				class: ["appearance-none group-hover/select:border-fg-muted", [SELECT_FIELD_SIZES[__props.size], __props.block ? "w-full" : "w-fit"]],
				modelValue: model.value,
				"onUpdate:modelValue": ($event) => model.value = $event
			}, __props.selectAttrs, { id: __props.id }), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.items, (item) => {
							_push(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(item.disabled) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(item.label)}</option>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
						return openBlock(), createBlock("option", {
							key: item.value,
							value: item.value,
							disabled: item.disabled
						}, toDisplayString(item.label), 9, ["value", "disabled"]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`<span aria-hidden="true" class="${ssrRenderClass([[SELECT_FIELD_ICON_SIZES[__props.size]], "block i-lucide:chevron-down absolute top-1/2 -translate-y-1/2 text-fg-subtle pointer-events-none group-hover/select:text-fg group-focus-within/select:text-fg"])}"></span></div></div>`);
		};
	}
});
var _sfc_setup = Field_vue_vue_type_script_setup_true_lang_default.setup;
Field_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Select/Field.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Field_default = Object.assign(Field_vue_vue_type_script_setup_true_lang_default, { __name: "SelectField" });

export { Field_default as F };
//# sourceMappingURL=Field-BBRX0YgS.mjs.map

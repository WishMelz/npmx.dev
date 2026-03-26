import { _ as _plugin_vue_export_helper_default, u as useI18n } from './server-placeholder-C9fYItBT.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/CopyToClipboardButton.vue?vue&type=script&setup=true&lang.ts
var CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CopyToClipboardButton",
	__ssrInlineRender: true,
	props: {
		copied: { type: Boolean },
		copyText: {},
		copiedText: {},
		ariaLabelCopy: {},
		ariaLabelCopied: {},
		buttonAttrs: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const buttonCopyText = computed(() => props.copyText || $t("common.copy"));
		const buttonCopiedText = computed(() => props.copiedText || $t("common.copied"));
		const buttonAriaLabelCopy = computed(() => props.ariaLabelCopy || $t("common.copy"));
		const buttonAriaLabelCopied = computed(() => props.ariaLabelCopied || $t("common.copied"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative" }, _ctx.$attrs, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`<button${ssrRenderAttrs(mergeProps({
				type: "button",
				class: ["absolute z-20 inset-is-0 top-full inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-mono whitespace-nowrap transition-all duration-150 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:pointer-events-auto", [_ctx.$style.copyButton, __props.copied ? ["text-accent", _ctx.$style.copiedBg] : "text-fg-muted bg-bg border-border"]],
				"aria-label": __props.copied ? unref(buttonAriaLabelCopied) : unref(buttonAriaLabelCopy)
			}, __props.buttonAttrs))}><span class="${ssrRenderClass([__props.copied ? "i-lucide:check" : "i-lucide:copy", "w-3.5 h-3.5"])}" aria-hidden="true"></span> ${ssrInterpolate(__props.copied ? unref(buttonCopiedText) : unref(buttonCopyText))}</button></div>`);
		};
	}
});
var CopyToClipboardButton_vue_vue_type_style_index_0_lang_module_default = {
	copyButton: "_copyButton_1d7q1_2",
	copiedBg: "_copiedBg_1d7q1_29"
};
//#endregion
//#region app/components/CopyToClipboardButton.vue
var cssModules = { "$style": CopyToClipboardButton_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup = CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default.setup;
CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CopyToClipboardButton.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CopyToClipboardButton_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]), { __name: "CopyToClipboardButton" });

export { CopyToClipboardButton_default as C };
//# sourceMappingURL=CopyToClipboardButton-TTydHqo-.mjs.map

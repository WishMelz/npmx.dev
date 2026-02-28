import { _ as _plugin_vue_export_helper_default } from './server.mjs';
import { S as SkeletonBlock_default } from './SkeletonBlock-CUGWiqJT.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

var Toggle_server_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Toggle.server",
	__ssrInlineRender: true,
	props: {
		label: {},
		description: {},
		justify: { default: "between" },
		reverseOrder: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SkeletonBlock = SkeletonBlock_default;
			_push(`<!--[--><div class="${ssrRenderClass([[__props.justify === "start" ? "justify-start" : ""], "grid items-center gap-4 py-1 -my-1 grid-cols-[auto_1fr_auto]"])}" style="${ssrRenderStyle(props.reverseOrder ? "grid-template-areas: 'toggle . label-text'" : "grid-template-areas: 'label-text . toggle'")}" data-v-ecbed00d>`);
			if (props.reverseOrder) {
				_push(`<!--[-->`);
				_push(ssrRenderComponent(_component_SkeletonBlock, {
					class: "h-6 w-11 shrink-0 rounded-full",
					style: { "grid-area": "toggle" }
				}, null, _parent));
				if (__props.label) _push(`<span class="text-sm text-fg font-medium text-start" style="${ssrRenderStyle({ "grid-area": "label-text" })}" data-v-ecbed00d>${ssrInterpolate(__props.label)}</span>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			} else {
				_push(`<!--[-->`);
				if (__props.label) _push(`<span class="text-sm text-fg font-medium text-start" style="${ssrRenderStyle({ "grid-area": "label-text" })}" data-v-ecbed00d>${ssrInterpolate(__props.label)}</span>`);
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_SkeletonBlock, {
					class: "h-6 w-11 shrink-0 rounded-full",
					style: {
						"grid-area": "toggle",
						"justify-self": "end"
					}
				}, null, _parent));
				_push(`<!--]-->`);
			}
			_push(`</div>`);
			if (__props.description) _push(`<p class="text-sm text-fg-muted mt-2" data-v-ecbed00d>${ssrInterpolate(__props.description)}</p>`);
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup = Toggle_server_vue_vue_type_script_setup_true_lang_default.setup;
Toggle_server_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Settings/Toggle.server.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Toggle_server_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(Toggle_server_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ecbed00d"]]), { __name: "SettingsToggle" });

export { Toggle_server_default as T };
//# sourceMappingURL=Toggle.server-C3otQ64r.mjs.map

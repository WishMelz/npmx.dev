import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/AuthorAvatar.vue?vue&type=script&setup=true&lang.ts
var AuthorAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AuthorAvatar",
	__ssrInlineRender: true,
	props: {
		author: {},
		size: {}
	},
	setup(__props) {
		const props = __props;
		const sizeClasses = computed(() => {
			switch (props.size ?? "md") {
				case "sm": return "w-8 h-8 text-sm";
				case "lg": return "w-12 h-12 text-xl";
				default: return "w-10 h-10 text-lg";
			}
		});
		const initials = computed(() => props.author.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["shrink-0 flex items-center justify-center border border-border rounded-full bg-bg-muted overflow-hidden", [unref(sizeClasses)]] }, _attrs))}>`);
			if (__props.author.avatar) _push(`<img${ssrRenderAttr("src", __props.author.avatar)}${ssrRenderAttr("alt", __props.author.name)} class="w-full h-full object-cover">`);
			else _push(`<span class="text-fg-subtle font-mono" aria-hidden="true">${ssrInterpolate(unref(initials))}</span>`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/AuthorAvatar.vue
var _sfc_setup = AuthorAvatar_vue_vue_type_script_setup_true_lang_default.setup;
AuthorAvatar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthorAvatar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AuthorAvatar_default = Object.assign(AuthorAvatar_vue_vue_type_script_setup_true_lang_default, { __name: "AuthorAvatar" });

export { AuthorAvatar_default as A };
//# sourceMappingURL=AuthorAvatar-BHTSoUO-.mjs.map

import { u as useLazyFetch } from './fetch-BX-wNfYP.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

var Avatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Avatar",
	__ssrInlineRender: true,
	props: { username: {} },
	setup(__props) {
		const props = __props;
		const { data: gravatarUrl } = useLazyFetch(() => `/api/gravatar/${props.username}`, {
			transform: (res) => res.hash ? `/_avatar/${res.hash}?s=128&d=404` : null,
			getCachedData(key, nuxtApp) {
				return nuxtApp.static.data[key] ?? nuxtApp.payload.data[key];
			}
		}, "$GjizOL0YWn");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "size-16 shrink-0 rounded-full bg-bg-muted border border-border flex items-center justify-center overflow-hidden",
				role: "img",
				"aria-label": `Avatar for ${__props.username}`
			}, _attrs))}>`);
			if (unref(gravatarUrl)) _push(`<img${ssrRenderAttr("src", unref(gravatarUrl))} alt="" width="64" height="64" class="w-full h-full object-cover">`);
			else _push(`<span class="text-2xl text-fg-subtle font-mono" aria-hidden="true">${ssrInterpolate(__props.username.charAt(0).toUpperCase())}</span>`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = Avatar_vue_vue_type_script_setup_true_lang_default.setup;
Avatar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/Avatar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Avatar_default = Object.assign(Avatar_vue_vue_type_script_setup_true_lang_default, { __name: "UserAvatar" });

export { Avatar_default as A };
//# sourceMappingURL=Avatar-BQCinbk6.mjs.map

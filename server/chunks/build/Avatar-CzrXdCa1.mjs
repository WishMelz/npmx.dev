import { u as useLazyFetch } from './fetch-CVxFI0ck.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/User/Avatar.vue?vue&type=script&setup=true&lang.ts
var Avatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Avatar",
	__ssrInlineRender: true,
	props: {
		username: {},
		size: {}
	},
	setup(__props) {
		const props = __props;
		const sizePixels = computed(() => {
			switch (props.size) {
				case "xs": return 24;
				case "lg": return 64;
			}
		});
		const sizeClass = computed(() => {
			switch (props.size) {
				case "xs": return "size-6";
				case "lg": return "size-16";
			}
		});
		const textClass = computed(() => {
			switch (props.size) {
				case "xs": return "text-xs";
				case "lg": return "text-2xl";
			}
		});
		const { data: gravatarUrl } = useLazyFetch(() => `/api/gravatar/${props.username}`, {
			transform: (res) => res.hash ? `/_avatar/${res.hash}?s=128&d=404` : null,
			getCachedData(key, nuxtApp) {
				return nuxtApp.static.data[key] ?? nuxtApp.payload.data[key];
			}
		}, "$GjizOL0YWn");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: ["shrink-0 rounded-full bg-bg-muted border border-border flex items-center justify-center overflow-hidden", unref(sizeClass)],
				role: "img",
				"aria-label": `Avatar for ${__props.username}`
			}, _attrs))}>`);
			if (unref(gravatarUrl)) _push(`<img${ssrRenderAttr("src", unref(gravatarUrl))} alt=""${ssrRenderAttr("width", unref(sizePixels))}${ssrRenderAttr("height", unref(sizePixels))} class="w-full h-full object-cover">`);
			else _push(`<svg xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("width", unref(sizePixels))}${ssrRenderAttr("height", unref(sizePixels))} class="${ssrRenderClass([unref(textClass), "text-fg-subtle"])}"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="currentColor">${ssrInterpolate(__props.username.charAt(0).toUpperCase())}</text></svg>`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/User/Avatar.vue
var _sfc_setup = Avatar_vue_vue_type_script_setup_true_lang_default.setup;
Avatar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/Avatar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Avatar_default = Object.assign(Avatar_vue_vue_type_script_setup_true_lang_default, { __name: "UserAvatar" });

export { Avatar_default as A };
//# sourceMappingURL=Avatar-CzrXdCa1.mjs.map

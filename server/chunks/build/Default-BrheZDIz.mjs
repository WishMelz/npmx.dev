import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

var Default_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Default",
	__ssrInlineRender: true,
	props: {
		primaryColor: { default: "#60a5fa" },
		title: { default: "npmx" },
		description: { default: "a fast, modern browser for the **npm registry**" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "h-full w-full flex flex-col justify-center px-20 bg-[#050505] text-[#fafafa] relative overflow-hidden",
				style: { "font-family": "'Geist Mono', sans-serif" }
			}, _attrs))}><div class="relative z-10 flex flex-col gap-6"><div class="flex items-start gap-4"><div class="flex items-start justify-center w-16 h-16 p-3.5 rounded-xl bg-gradient-to-tr from-[#3b82f6] shadow-lg" style="${ssrRenderStyle({ backgroundColor: props.primaryColor })}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><h1 class="text-8xl font-bold"><span class="opacity-80 tracking-[-0.1em]" style="${ssrRenderStyle([{ color: props.primaryColor }, {
				"margin-left": "-1rem",
				"margin-right": "0.5rem"
			}])}">./</span>${ssrInterpolate(props.title)}</h1></div><div class="flex flex-wrap items-center gap-x-3 text-4xl text-[#a3a3a3]" style="${ssrRenderStyle({ "font-family": "'Geist', sans-serif" })}"><!--[-->`);
			ssrRenderList(props.description.split(/(\*\*.*?\*\*)/), (part, index) => {
				_push(`<!--[-->`);
				if (part.startsWith("**") && part.endsWith("**")) _push(`<span class="px-3 py-1 rounded-lg border font-normal" style="${ssrRenderStyle({
					color: props.primaryColor,
					backgroundColor: props.primaryColor + "10",
					borderColor: props.primaryColor + "30",
					boxShadow: `0 0 20px ${props.primaryColor}25`
				})}">${ssrInterpolate(part.replaceAll("**", ""))}</span>`);
				else if (part.trim() !== "") _push(`<span>${ssrInterpolate(part)}</span>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div></div><div class="absolute -top-32 -inset-ie-32 w-[550px] h-[550px] rounded-full blur-3xl" style="${ssrRenderStyle({ backgroundColor: props.primaryColor + "10" })}"></div></div>`);
		};
	}
});
var _sfc_setup = Default_vue_vue_type_script_setup_true_lang_default.setup;
Default_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/Default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Default_default = Object.assign(Default_vue_vue_type_script_setup_true_lang_default, { __name: "OgImageDefault" });

export { Default_default as default };
//# sourceMappingURL=Default-BrheZDIz.mjs.map

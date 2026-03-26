import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

//#region app/components/OgImage/BlogPost.vue?vue&type=script&setup=true&lang.ts
var MAX_VISIBLE_AUTHORS = 2;
var BlogPost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BlogPost",
	__ssrInlineRender: true,
	props: {
		title: {},
		authors: { default: () => [] },
		date: { default: "" },
		primaryColor: { default: "#60a5fa" }
	},
	setup(__props) {
		const props = __props;
		const formattedDate = computed(() => {
			if (!props.date) return "";
			try {
				return new Date(props.date).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric"
				});
			} catch {
				return props.date;
			}
		});
		const getInitials = (name) => name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
		const visibleAuthors = computed(() => {
			if (props.authors.length <= 3) return props.authors;
			return props.authors.slice(0, MAX_VISIBLE_AUTHORS);
		});
		const extraCount = computed(() => {
			if (props.authors.length <= 3) return 0;
			return props.authors.length - MAX_VISIBLE_AUTHORS;
		});
		const formattedAuthorNames = computed(() => {
			const allNames = props.authors.map((a) => a.name);
			if (allNames.length === 0) return "";
			if (allNames.length === 1) return allNames[0];
			if (allNames.length === 2) return `${allNames[0]} and ${allNames[1]}`;
			if (allNames.length === 3) return `${allNames[0]}, ${allNames[1]}, and ${allNames[2]}`;
			const shown = allNames.slice(0, MAX_VISIBLE_AUTHORS);
			const remaining = allNames.length - MAX_VISIBLE_AUTHORS;
			return `${shown.join(", ")} and ${remaining} others`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex flex-col justify-center px-20 bg-[#050505] text-[#fafafa] relative overflow-hidden" }, _attrs))}><div class="absolute top-12 z-10 flex items-center gap-1 text-5xl font-bold tracking-tight" style="${ssrRenderStyle({
				"font-family": "'Geist', sans-serif",
				"right": "6rem"
			})}"><span style="${ssrRenderStyle({ color: __props.primaryColor })}" class="opacity-80">./</span><span class="text-white">npmx</span></div><div class="relative z-10 flex flex-col gap-2">`);
			if (unref(formattedDate)) _push(`<span class="text-3xl text-[#a3a3a3] font-light" style="${ssrRenderStyle({ "font-family": "'Geist', sans-serif" })}">${ssrInterpolate(unref(formattedDate))}</span>`);
			else _push(`<!---->`);
			_push(`<h1 class="text-6xl font-semibold tracking-tight leading-snug w-9/10" style="${ssrRenderStyle({
				"font-family": "'Geist', sans-serif",
				"letter-spacing": "-0.03em"
			})}">${ssrInterpolate(__props.title)}</h1>`);
			if (__props.authors.length) {
				_push(`<div class="flex items-center gap-4 self-start justify-start flex-nowrap" style="${ssrRenderStyle({ "font-family": "'Geist', sans-serif" })}"><span><!--[-->`);
				ssrRenderList(unref(visibleAuthors), (author, index) => {
					_push(`<span class="flex items-center justify-center rounded-full border border-[#050505] bg-[#1a1a1a] overflow-hidden w-12 h-12" style="${ssrRenderStyle({ marginLeft: index > 0 ? "-20px" : "0" })}">`);
					if (author.avatar) _push(`<img${ssrRenderAttr("src", author.avatar)}${ssrRenderAttr("alt", author.name)} width="48" height="48" class="w-full h-full object-cover">`);
					else _push(`<span style="${ssrRenderStyle({
						"font-size": "20px",
						"color": "#666",
						"font-weight": "500"
					})}">${ssrInterpolate(getInitials(author.name))}</span>`);
					_push(`</span>`);
				});
				_push(`<!--]-->`);
				if (unref(extraCount) > 0) _push(`<span class="flex items-center justify-center text-lg font-medium text-[#a3a3a3] rounded-full border border-[#050505] bg-[#262626] overflow-hidden w-12 h-12" style="${ssrRenderStyle({ marginLeft: "-20px" })}"> +${ssrInterpolate(unref(extraCount))}</span>`);
				else _push(`<!---->`);
				_push(`</span><span style="${ssrRenderStyle({
					"font-size": "24px",
					"color": "#a3a3a3",
					"font-weight": "300"
				})}">${ssrInterpolate(unref(formattedAuthorNames))}</span></div>`);
			} else _push(`<!---->`);
			_push(`</div><div class="absolute -top-32 -inset-ie-32 w-[550px] h-[550px] rounded-full blur-3xl" style="${ssrRenderStyle({ backgroundColor: __props.primaryColor + "10" })}"></div></div>`);
		};
	}
});
//#endregion
//#region app/components/OgImage/BlogPost.vue
var _sfc_setup = BlogPost_vue_vue_type_script_setup_true_lang_default.setup;
BlogPost_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/BlogPost.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BlogPost_default = Object.assign(BlogPost_vue_vue_type_script_setup_true_lang_default, { __name: "OgImageBlogPost" });

export { BlogPost_default as default };
//# sourceMappingURL=BlogPost-DL55WUSe.mjs.map

import { u as useI18n } from './server-placeholder-C9fYItBT.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/ProvenanceBadge.vue?vue&type=script&setup=true&lang.ts
var ProvenanceBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProvenanceBadge",
	__ssrInlineRender: true,
	props: {
		provider: {},
		packageName: {},
		version: {},
		compact: { type: Boolean },
		linked: { type: Boolean }
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const providerLabels = {
			github: "GitHub Actions",
			gitlab: "GitLab CI"
		};
		const title = computed(() => props.provider ? $t("badges.provenance.verified_via", { provider: providerLabels[props.provider] ?? props.provider }) : $t("badges.provenance.verified_title"));
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.packageName && __props.version && __props.linked !== false) {
				_push(`<a${ssrRenderAttrs(mergeProps({
					href: `https://www.npmjs.com/package/${__props.packageName}/v/${__props.version}#provenance`,
					target: "_blank",
					rel: "noopener noreferrer",
					class: "inline-flex items-center justify-center gap-1 text-xs font-mono text-fg-muted hover:text-fg transition-colors duration-200 min-w-6 min-h-6",
					title: unref(title)
				}, _attrs))}><span class="${ssrRenderClass([__props.compact ? "w-3.5 h-3.5" : "w-4 h-4", "i-lucide:shield-check shrink-0"])}"></span>`);
				if (!__props.compact) _push(`<span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("badges.provenance.verified"))}</span>`);
				else _push(`<!---->`);
				_push(`</a>`);
			} else {
				_push(`<span${ssrRenderAttrs(mergeProps({
					class: "inline-flex items-center gap-1 text-xs font-mono text-fg-muted",
					title: unref(title)
				}, _attrs))}><span class="${ssrRenderClass([__props.compact ? "w-3.5 h-3.5" : "w-4 h-4", "i-lucide:shield-check shrink-0"])}"></span>`);
				if (!__props.compact) _push(`<span class="sr-only sm:not-sr-only">${ssrInterpolate(unref($t)("badges.provenance.verified"))}</span>`);
				else _push(`<!---->`);
				_push(`</span>`);
			}
		};
	}
});
//#endregion
//#region app/components/ProvenanceBadge.vue
var _sfc_setup = ProvenanceBadge_vue_vue_type_script_setup_true_lang_default.setup;
ProvenanceBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProvenanceBadge.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProvenanceBadge_default = Object.assign(ProvenanceBadge_vue_vue_type_script_setup_true_lang_default, { __name: "ProvenanceBadge" });

export { ProvenanceBadge_default as P };
//# sourceMappingURL=ProvenanceBadge-wpBL-1hz.mjs.map

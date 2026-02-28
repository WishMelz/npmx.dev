import { u as useI18n } from './server.mjs';
import { defineComponent, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

var CallToAction_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CallToAction",
	__ssrInlineRender: true,
	setup(__props) {
		const { t: $t } = useI18n();
		const socialLinks = computed(() => [
			{
				id: "github",
				href: "https://repo.npmx.dev",
				icon: "i-simple-icons:github",
				titleKey: $t("about.get_involved.contribute.title"),
				descriptionKey: $t("about.get_involved.contribute.description"),
				ctaKey: $t("about.get_involved.contribute.cta")
			},
			{
				id: "discord",
				href: "https://chat.npmx.dev",
				icon: "i-lucide:message-circle",
				titleKey: $t("about.get_involved.community.title"),
				descriptionKey: $t("about.get_involved.community.description"),
				ctaKey: $t("about.get_involved.community.cta")
			},
			{
				id: "bluesky",
				href: "https://social.npmx.dev",
				icon: "i-simple-icons:bluesky",
				titleKey: $t("about.get_involved.follow.title"),
				descriptionKey: $t("about.get_involved.follow.description"),
				ctaKey: $t("about.get_involved.follow.cta")
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-lg text-fg uppercase tracking-wider mb-6">${ssrInterpolate(unref($t)("about.get_involved.title"))}</h2><div class="grid gap-4 sm:grid-cols-3 sm:items-stretch sm:grid-rows-[auto,1fr,auto]"><!--[-->`);
			ssrRenderList(unref(socialLinks), (link) => {
				_push(`<div class="cursor-pointer group relative grid gap-3 p-4 rounded-lg bg-bg-subtle hover:bg-bg-elevated border border-border hover:border-border-hover transition-all duration-200 sm:grid-rows-subgrid sm:row-span-3 focus-within:ring-2 focus-within:ring-accent/50"><h3 class="flex gap-2"><span class="${ssrRenderClass([link.icon, "shrink-0 mt-1 w-5 h-5 text-fg"])}" aria-hidden="true"></span><span class="font-medium text-fg">${ssrInterpolate(link.titleKey)}</span></h3><p class="text-sm text-fg-muted leading-relaxed">${ssrInterpolate(link.descriptionKey)}</p><a${ssrRenderAttr("href", link.href)} target="_blank" rel="noopener noreferrer" class="text-sm text-fg-muted group-hover:text-fg inline-flex items-center gap-1 mt-auto focus-visible:outline-none">${ssrInterpolate(link.ctaKey)} <span class="i-lucide:arrow-right rtl-flip w-3 h-3" aria-hidden="true"></span></a></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
var _sfc_setup = CallToAction_vue_vue_type_script_setup_true_lang_default.setup;
CallToAction_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CallToAction_default = Object.assign(CallToAction_vue_vue_type_script_setup_true_lang_default, { __name: "CallToAction" });

export { CallToAction_default as C };
//# sourceMappingURL=CallToAction-CTd_DlY1.mjs.map

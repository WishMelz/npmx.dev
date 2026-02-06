import { k as useI18n, z as client_only_default, r as nuxt_time_default } from './server.mjs';
import { u as useRelativeDates } from './useSettings-rf2hWHFQ.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

var DateTime_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DateTime",
	__ssrInlineRender: true,
	props: {
		datetime: {},
		title: { default: void 0 },
		dateStyle: { default: void 0 },
		year: { default: void 0 },
		month: { default: void 0 },
		day: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const { locale } = useI18n();
		useRelativeDates();
		const dateFormatter = new Intl.DateTimeFormat(locale.value, {
			month: "short",
			day: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "2-digit",
			timeZoneName: "short"
		});
		const titleValue = computed(() => {
			if (props.title) return props.title;
			const date = typeof props.datetime === "string" ? new Date(props.datetime) : props.datetime;
			return dateFormatter.format(date);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ClientOnly = client_only_default;
			const _component_NuxtTime = nuxt_time_default;
			_push(`<span${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_NuxtTime, {
					datetime: __props.datetime,
					title: unref(titleValue),
					"date-style": __props.dateStyle,
					year: __props.year,
					month: __props.month,
					day: __props.day,
					locale: unref(locale)
				}, null, _parent, _scopeId));
				else return [createVNode(_component_NuxtTime, {
					datetime: __props.datetime,
					title: unref(titleValue),
					"date-style": __props.dateStyle,
					year: __props.year,
					month: __props.month,
					day: __props.day,
					locale: unref(locale)
				}, null, 8, [
					"datetime",
					"title",
					"date-style",
					"year",
					"month",
					"day",
					"locale"
				])];
			}) }, _parent));
			_push(`</span>`);
		};
	}
});
var _sfc_setup = DateTime_vue_vue_type_script_setup_true_lang_default.setup;
DateTime_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DateTime.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var DateTime_default = Object.assign(DateTime_vue_vue_type_script_setup_true_lang_default, { __name: "DateTime" });

export { DateTime_default as D };
//# sourceMappingURL=DateTime-BZR-7EUH.mjs.map

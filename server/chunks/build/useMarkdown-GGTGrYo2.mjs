import { u as useI18n } from './server.mjs';
import { computed, toValue, defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { aP as decodeHtmlEntities } from '../nitro/nitro.mjs';

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
var _sfc_setup = ProvenanceBadge_vue_vue_type_script_setup_true_lang_default.setup;
ProvenanceBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProvenanceBadge.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProvenanceBadge_default = Object.assign(ProvenanceBadge_vue_vue_type_script_setup_true_lang_default, { __name: "ProvenanceBadge" });
function useMarkdown(options) {
	return computed(() => parseMarkdown(toValue(options)));
}
function stripMarkdownImages(text) {
	text = text.replace(/\[!\[[^\]]{0,500}\]\([^)]{0,2000}\)\]\([^)]{0,2000}\)?/g, "");
	text = text.replace(/!\[[^\]]{0,500}\]\([^)]{0,2000}\)/g, "");
	text = text.replace(/\[\]\([^)]{0,2000}\)?/g, "");
	return text.trim();
}
function stripAndEscapeHtml(text, packageName) {
	let stripped = decodeHtmlEntities(text);
	stripped = stripMarkdownImages(stripped);
	stripped = stripped.replace(/(`[^`]*`)|<\/?[a-z][^>]*>/gi, (match, codeSpan) => codeSpan ?? "");
	stripped = stripped.replace(/(`[^`]*`)|<!--[\s\S]*?(-->|$)/g, (match, codeSpan) => codeSpan ?? "");
	if (packageName) {
		stripped = stripped.trim();
		stripped = stripped.replace(/\s+/g, " ");
		const escapedName = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const namePattern = new RegExp(`^${escapedName}\\s*[-:—]?\\s*`, "i");
		stripped = stripped.replace(namePattern, "").trim();
	}
	return stripped.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function parseMarkdown({ text, packageName, plain }) {
	if (!text) return "";
	let html = stripAndEscapeHtml(text, packageName);
	html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
	html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
	html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
	html = html.replace(/\b_(.+?)_\b/g, "<em>$1</em>");
	html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
	html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, url) => {
		if (plain) return text;
		const decodedUrl = url.replace(/&amp;/g, "&");
		try {
			const { protocol, href } = new URL(decodedUrl);
			if (["https:", "mailto:"].includes(protocol)) return `<a href="${href.replace(/"/g, "&quot;")}" rel="nofollow noreferrer noopener" target="_blank">${text}</a>`;
		} catch {}
		return `${text} (${url})`;
	});
	return html;
}

export { ProvenanceBadge_default as P, useMarkdown as u };
//# sourceMappingURL=useMarkdown-GGTGrYo2.mjs.map

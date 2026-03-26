import { computed, toValue } from 'vue';
import { a$ as decodeHtmlEntities } from '../nitro/nitro.mjs';

//#region app/composables/useMarkdown.ts
function useMarkdown(options) {
	return computed(() => parseMarkdown(toValue(options)));
}
function stripMarkdownImages(text) {
	text = text.replace(/\[!\[[^\]]{0,500}\]\([^)]{0,2000}\)\]\([^)]{0,2000}\)?/g, "");
	text = text.replace(/!\[[^\]]{0,500}\]\([^)]{0,2000}\)/g, "");
	text = text.replace(/\[\]\([^)]{0,2000}\)?/g, "");
	return text.trim();
}
function stripAndEscapeHtml(text) {
	let stripped = decodeHtmlEntities(text);
	stripped = stripMarkdownImages(stripped);
	stripped = stripped.replace(/(`[^`]*`)|<\/?[a-z][^>]*>/gi, (match, codeSpan) => codeSpan ?? "");
	stripped = stripped.replace(/(`[^`]*`)|<!--[\s\S]*?(-->|$)/g, (match, codeSpan) => codeSpan ?? "");
	return stripped.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function parseMarkdown({ text, plain }) {
	if (!text) return "";
	let html = stripAndEscapeHtml(text);
	html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
	html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
	html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
	html = html.replace(/\b_(.+?)_\b/g, "<em>$1</em>");
	html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
	html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, textGroup, url) => {
		if (plain) return textGroup;
		const decodedUrl = url.replace(/&amp;/g, "&");
		try {
			const { protocol, href } = new URL(decodedUrl);
			if (["https:", "mailto:"].includes(protocol)) return `<a href="${href.replace(/"/g, "&quot;")}" rel="nofollow noreferrer noopener" target="_blank">${textGroup}</a>`;
		} catch {}
		return `${textGroup} (${url})`;
	});
	return html;
}

export { useMarkdown as u };
//# sourceMappingURL=useMarkdown-WJFZUyH8.mjs.map

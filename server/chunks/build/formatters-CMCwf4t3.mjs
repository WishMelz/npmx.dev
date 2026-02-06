var htmlEntities = {
	"&amp;": "&",
	"&lt;": "<",
	"&gt;": ">",
	"&quot;": "\"",
	"&#39;": "'",
	"&apos;": "'",
	"&nbsp;": " "
};
function decodeHtmlEntities(text) {
	return text.replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39);/g, (match) => htmlEntities[match] || match);
}
function formatCompactNumber(value, options) {
	const decimals = options?.decimals ?? 0;
	const space = options?.space ?? false;
	const sign = value < 0 ? "-" : "";
	const abs = Math.abs(value);
	const fmt = (n) => {
		if (decimals <= 0) return Math.round(n).toString();
		return n.toFixed(decimals).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
	};
	const join = (suffix, n) => `${sign}${fmt(n)}${space ? " " : ""}${suffix}`;
	if (abs >= 0xe8d4a51000) return join("T", abs / 0xe8d4a51000);
	if (abs >= 1e9) return join("B", abs / 1e9);
	if (abs >= 1e6) return join("M", abs / 1e6);
	if (abs >= 1e3) return join("k", abs / 1e3);
	return `${sign}${Math.round(abs)}`;
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export { formatCompactNumber as a, decodeHtmlEntities as d, formatBytes as f };
//# sourceMappingURL=formatters-CMCwf4t3.mjs.map

import { u as useI18n } from './server-placeholder-C9fYItBT.mjs';
import { computed } from 'vue';

//#region app/composables/useNumberFormatter.ts
function useNumberFormatter(options) {
	const { locale } = useI18n();
	return computed(() => new Intl.NumberFormat(locale.value, options));
}
var useCompactNumberFormatter = () => useNumberFormatter({
	notation: "compact",
	compactDisplay: "short",
	maximumFractionDigits: 1
});
var useBytesFormatter = () => {
	const { t } = useI18n();
	const decimalNumberFormatter = useNumberFormatter({ maximumFractionDigits: 1 });
	const KB = 1e3;
	const MB = 1e3 * 1e3;
	return { format: (bytes) => {
		if (bytes < KB) return t("package.size.b", { size: decimalNumberFormatter.value.format(bytes) });
		if (bytes < MB) return t("package.size.kb", { size: decimalNumberFormatter.value.format(bytes / KB) });
		return t("package.size.mb", { size: decimalNumberFormatter.value.format(bytes / MB) });
	} };
};

export { useCompactNumberFormatter as a, useBytesFormatter as b, useNumberFormatter as u };
//# sourceMappingURL=useNumberFormatter-6MIdB6Qd.mjs.map

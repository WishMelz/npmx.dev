import { H as useI18n } from './server.mjs';
import { computed } from 'vue';

function useNumberFormatter(options) {
	const { locale } = useI18n();
	return computed(() => new Intl.NumberFormat(locale.value, options));
}
const useCompactNumberFormatter = () => useNumberFormatter({
	notation: "compact",
	compactDisplay: "short",
	maximumFractionDigits: 1
});
const useBytesFormatter = () => {
	const { t } = useI18n();
	const decimalNumberFormatter = useNumberFormatter({ maximumFractionDigits: 1 });
	return { format: (bytes) => {
		if (bytes < 1024) return t("package.size.b", { size: decimalNumberFormatter.value.format(bytes) });
		if (bytes < 1024 * 1024) return t("package.size.kb", { size: decimalNumberFormatter.value.format(bytes / 1024) });
		return t("package.size.mb", { size: decimalNumberFormatter.value.format(bytes / (1024 * 1024)) });
	} };
};

export { useCompactNumberFormatter as a, useBytesFormatter as b, useNumberFormatter as u };
//# sourceMappingURL=useNumberFormatter-B-AHKObJ.mjs.map

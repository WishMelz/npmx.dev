import { u as useI18n } from './server-placeholder-C9fYItBT.mjs';
import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { computed } from 'vue';

//#region app/composables/useI18nStatus.ts
/**
* Composable for accessing translation status data from Lunaria.
* Provides information about translation progress for each locale.
*/
function useI18nStatus() {
	const { locale: currentLocale } = useI18n();
	const { data: status, status: fetchStatus, error } = useFetch("/lunaria/status.json", {
		responseType: "json",
		server: false,
		getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
	}, "$_RVmx0z2Mi");
	const localesMap = computed(() => {
		return status.value?.locales.reduce((acc, locale) => {
			acc.set(locale.lang, locale);
			return acc;
		}, /* @__PURE__ */ new Map());
	});
	/**
	* Get the translation status for a specific locale
	*/
	function getLocaleStatus(langCode) {
		return localesMap.value?.get(langCode) ?? null;
	}
	/**
	* Translation status for the current locale
	*/
	const currentLocaleStatus = computed(() => getLocaleStatus(currentLocale.value));
	return {
		status,
		fetchStatus,
		error,
		getLocaleStatus,
		currentLocaleStatus,
		isComplete: computed(() => {
			const localeStatus = currentLocaleStatus.value;
			if (!localeStatus) return true;
			return localeStatus.percentComplete === 100;
		}),
		isSourceLocale: computed(() => {
			const sourceLang = status.value?.sourceLocale.lang ?? "en";
			return currentLocale.value === sourceLang || currentLocale.value.startsWith(`${sourceLang}-`);
		}),
		githubEditUrl: computed(() => {
			return currentLocaleStatus.value?.githubEditUrl ?? null;
		}),
		localesMap
	};
}

export { useI18nStatus as u };
//# sourceMappingURL=useI18nStatus-CrSsvs9P.mjs.map

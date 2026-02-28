const countryLocaleVariants = {
	ar: [{
		country: true,
		code: "ar-EG",
		name: "العربية"
	}],
	en: [{
		country: true,
		code: "en-US",
		name: "English (US)"
	}, {
		code: "en-GB",
		name: "English (UK)"
	}],
	es: [{
		country: true,
		code: "es-ES",
		name: "Español (España)"
	}, {
		code: "es-419",
		name: "Español (Latinoamérica)"
	}]
};
function createPluralRule(locale, mapping) {
	return (choice, choicesLength) => {
		const plural = mapping[new Intl.PluralRules(locale).select(choice)] || 0;
		if (plural > choicesLength - 1) return choicesLength - 1;
		return plural;
	};
}
var locales = [
	{
		code: "en",
		file: "en.json",
		name: "English"
	},
	{
		code: "ar",
		file: "ar.json",
		name: "العربية",
		dir: "rtl",
		pluralRule: createPluralRule("ar-EG", {
			zero: 0,
			one: 1,
			two: 2,
			few: 3,
			many: 4,
			other: 5
		})
	},
	{
		code: "az-AZ",
		file: "az-AZ.json",
		name: "Azərbaycanca"
	},
	{
		code: "bn-IN",
		file: "bn-IN.json",
		name: "বাংলা"
	},
	{
		code: "bg-BG",
		file: "bg-BG.json",
		name: "Български",
		pluralRule: createPluralRule("bg-BG", {
			zero: 1,
			one: 0,
			two: 1,
			few: 1,
			many: 1,
			other: 1
		})
	},
	{
		code: "de-DE",
		file: "de-DE.json",
		name: "Deutsch"
	},
	{
		code: "ta-IN",
		file: "ta-IN.json",
		name: "தமிழ்"
	},
	{
		code: "hi-IN",
		file: "hi-IN.json",
		name: "हिंदी"
	},
	{
		code: "kn-IN",
		file: "kn-IN.json",
		name: "ಕನ್ನಡ"
	},
	{
		code: "te-IN",
		file: "te-IN.json",
		name: "తెలుగు"
	},
	{
		code: "mr-IN",
		file: "mr-IN.json",
		name: "मराठी"
	},
	{
		code: "hu-HU",
		file: "hu-HU.json",
		name: "Magyar",
		pluralRule: createPluralRule("hu-HU", {
			zero: 0,
			one: 0,
			two: 1,
			few: 1,
			many: 1,
			other: 1
		})
	},
	{
		code: "zh-CN",
		file: "zh-CN.json",
		name: "简体中文"
	},
	{
		code: "zh-TW",
		file: "zh-TW.json",
		name: "繁體中文"
	},
	{
		code: "ja-JP",
		file: "ja-JP.json",
		name: "日本語"
	},
	{
		code: "ne-NP",
		file: "ne-NP.json",
		name: "नेपाली"
	},
	{
		code: "es",
		file: "es.json",
		name: "Español"
	},
	{
		code: "fr-FR",
		file: "fr-FR.json",
		name: "Français"
	},
	{
		code: "ru-RU",
		file: "ru-RU.json",
		name: "Русский",
		pluralRule: createPluralRule("ru-RU", {
			zero: 2,
			one: 0,
			two: 1,
			few: 1,
			many: 2,
			other: 3
		})
	},
	{
		code: "uk-UA",
		file: "uk-UA.json",
		name: "Українська",
		pluralRule: createPluralRule("uk-UA", {
			zero: 0,
			one: 1,
			two: 0,
			few: 2,
			many: 3,
			other: 4
		})
	},
	{
		code: "cs-CZ",
		file: "cs-CZ.json",
		name: "Čeština",
		pluralRule: createPluralRule("cs-CZ", {
			zero: 2,
			one: 0,
			two: 1,
			few: 1,
			many: 2,
			other: 2
		})
	},
	{
		code: "id-ID",
		file: "id-ID.json",
		name: "Indonesia"
	},
	{
		code: "it-IT",
		file: "it-IT.json",
		name: "Italiano"
	},
	{
		code: "pl-PL",
		file: "pl-PL.json",
		name: "Polski",
		pluralRule: createPluralRule("pl-PL", {
			zero: 0,
			one: 1,
			two: 0,
			few: 2,
			many: 3,
			other: 4
		})
	},
	{
		code: "pt-BR",
		file: "pt-BR.json",
		name: "Português (Brasil)"
	},
	{
		code: "nb-NO",
		file: "nb-NO.json",
		name: "Norsk (Bokmål)"
	}
];
var lunariaJSONFiles = {};
function buildLocales() {
	return Object.values(locales).reduce((acc, data) => {
		const locales = countryLocaleVariants[data.code];
		if (locales) locales.forEach((l) => {
			const entry = {
				...data,
				code: l.code,
				name: l.name,
				files: [data.file, `${l.code}.json`]
			};
			lunariaJSONFiles[l.code] = l.country ? data.file : `${l.code}.json`;
			delete entry.file;
			acc.push(entry);
		});
		else {
			lunariaJSONFiles[data.code] = data.file;
			acc.push(data);
		}
		return acc;
	}, []).sort((a, b) => a.code.localeCompare(b.code));
}
const currentLocales = buildLocales();
const datetimeFormats = Object.values(currentLocales).reduce((acc, data) => {
	const dateTimeFormats = data.dateTimeFormats;
	if (dateTimeFormats) {
		acc[data.code] = { ...dateTimeFormats };
		delete data.dateTimeFormats;
	} else acc[data.code] = {
		shortDate: { dateStyle: "short" },
		short: {
			dateStyle: "short",
			timeStyle: "short"
		},
		long: {
			dateStyle: "long",
			timeStyle: "medium"
		}
	};
	return acc;
}, {});
const numberFormats = Object.values(currentLocales).reduce((acc, data) => {
	const numberFormats = data.numberFormats;
	if (numberFormats) {
		acc[data.code] = { ...numberFormats };
		delete data.numberFormats;
	} else acc[data.code] = {
		percentage: {
			style: "percent",
			maximumFractionDigits: 1
		},
		smallCounting: {
			style: "decimal",
			maximumFractionDigits: 0
		},
		kiloCounting: {
			notation: "compact",
			compactDisplay: "short",
			maximumFractionDigits: 1
		},
		millionCounting: {
			notation: "compact",
			compactDisplay: "short",
			maximumFractionDigits: 2
		}
	};
	return acc;
}, {});
const pluralRules = Object.values(currentLocales).reduce((acc, data) => {
	const pluralRule = data.pluralRule;
	if (pluralRule) {
		acc[data.code] = pluralRule;
		delete data.pluralRule;
	}
	return acc;
}, {});
var i18n_config_default = () => {
	return {
		availableLocales: currentLocales.map((l) => l.code),
		fallbackLocale: "en-US",
		fallbackWarn: true,
		missingWarn: true,
		datetimeFormats,
		numberFormats,
		pluralRules
	};
};

export { i18n_config_default as default };
//# sourceMappingURL=i18n.config-DzLP4obE.mjs.map

import { p as useLocalStorage, t as useColorMode } from './server.mjs';
import { computed, watch } from 'vue';
import { aX as ACCENT_COLORS, aY as BACKGROUND_THEMES } from '../nitro/nitro.mjs';

var DEFAULT_SETTINGS = {
	relativeDates: false,
	includeTypesInInstall: true,
	accentColorId: null,
	hidePlatformPackages: true,
	selectedLocale: null,
	preferredBackgroundTheme: null,
	sidebar: { collapsed: [] }
};
var STORAGE_KEY = "npmx-settings";
var settingsRef = null;
function useSettings() {
	if (!settingsRef) settingsRef = useLocalStorage(STORAGE_KEY, DEFAULT_SETTINGS, { mergeDefaults: true });
	return { settings: settingsRef };
}
function useRelativeDates() {
	const { settings } = useSettings();
	return computed(() => settings.value.relativeDates);
}
function useAccentColor() {
	const { settings } = useSettings();
	const colorMode = useColorMode();
	const accentColors = computed(() => {
		const colors = colorMode.value === "dark" ? ACCENT_COLORS.dark : ACCENT_COLORS.light;
		return Object.entries(colors).map(([id, value]) => ({
			id,
			name: id,
			value
		}));
	});
	function setAccentColor(id) {
		if (id) {
			const color = colorMode.value === "dark" ? ACCENT_COLORS.dark[id] : ACCENT_COLORS.light[id];
			(void 0).documentElement.style.setProperty("--accent-color", color);
		} else (void 0).documentElement.style.removeProperty("--accent-color");
		settings.value.accentColorId = id;
	}
	watch(() => colorMode.value, () => {
		if (settings.value.accentColorId) setAccentColor(settings.value.accentColorId);
	});
	return {
		accentColors,
		selectedAccentColor: computed(() => settings.value.accentColorId),
		setAccentColor
	};
}
function useBackgroundTheme() {
	const backgroundThemes = Object.entries(BACKGROUND_THEMES).map(([id, value]) => ({
		id,
		name: id,
		value
	}));
	const { settings } = useSettings();
	function setBackgroundTheme(id) {
		if (id) (void 0).documentElement.dataset.bgTheme = id;
		else (void 0).documentElement.removeAttribute("data-bg-theme");
		settings.value.preferredBackgroundTheme = id;
	}
	return {
		backgroundThemes,
		selectedBackgroundTheme: computed(() => settings.value.preferredBackgroundTheme),
		setBackgroundTheme
	};
}

export { useSettings as a, useAccentColor as b, useBackgroundTheme as c, useRelativeDates as u };
//# sourceMappingURL=useSettings-rf2hWHFQ.mjs.map

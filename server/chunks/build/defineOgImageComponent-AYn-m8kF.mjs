import { c as useNuxtApp, d as useRoute, e as useOgImageRuntimeConfig, s as setHeadOgImagePrebuilt, g as getOgImagePath, h as createOgImageMeta } from './server-placeholder-C9fYItBT.mjs';
import { ref, toValue } from 'vue';

//#region node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.10_vue@3.5.30_typescript@6.0.2___magicast@0.5.2_un_be4c86cddcb48b102a20b3e58b7dcbeb/node_modules/nuxt-og-image/dist/runtime/app/composables/defineOgImage.js
function defineOgImage(_options = {}) {
	const nuxtApp = useNuxtApp();
	const route = useRoute();
	const basePath = route.path || "/";
	if (nuxtApp.payload.path === basePath) {
		const state = ref(false);
		state.value = true;
	}
	const { defaults } = useOgImageRuntimeConfig();
	const options = toValue(_options);
	if (options === false) return;
	const validOptions = options;
	for (const key in defaults) if (validOptions[key] === void 0) validOptions[key] = defaults[key];
	if (route.query) validOptions._query = route.query;
	if (validOptions.url) {
		setHeadOgImagePrebuilt(validOptions);
		return;
	}
	const path = getOgImagePath(basePath, validOptions);
	createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
//#endregion
//#region node_modules/.pnpm/nuxt-og-image@5.1.13_@unhead+vue@2.1.10_vue@3.5.30_typescript@6.0.2___magicast@0.5.2_un_be4c86cddcb48b102a20b3e58b7dcbeb/node_modules/nuxt-og-image/dist/runtime/app/composables/defineOgImageComponent.js
function defineOgImageComponent(component, props = {}, options = {}) {
	return defineOgImage({
		...options,
		component,
		props
	});
}

export { defineOgImageComponent as d };
//# sourceMappingURL=defineOgImageComponent-AYn-m8kF.mjs.map

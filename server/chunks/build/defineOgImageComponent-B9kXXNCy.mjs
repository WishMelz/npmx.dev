import { Z as useNuxtApp, Y as useRoute$1, O as useOgImageRuntimeConfig, D as setHeadOgImagePrebuilt, E as getOgImagePath, T as createOgImageMeta } from './server.mjs';
import { ref, toValue } from 'vue';

function defineOgImage(_options = {}) {
	const nuxtApp = useNuxtApp();
	const route = useRoute$1();
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
function defineOgImageComponent(component, props = {}, options = {}) {
	return defineOgImage({
		...options,
		component,
		props
	});
}

export { defineOgImageComponent as d };
//# sourceMappingURL=defineOgImageComponent-B9kXXNCy.mjs.map

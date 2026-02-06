import { F as useRequestEvent } from './server.mjs';

const NPM_REGISTRY = "https://registry.npmjs.org";
const NPM_API = "https://api.npmjs.org";
function useCachedFetch() {
	const serverCachedFetch = useRequestEvent()?.context?.cachedFetch;
	if (serverCachedFetch) return serverCachedFetch;
	return async (url, options = {}, _ttl) => {
		return {
			data: await $fetch(url, options),
			isStale: false,
			cachedAt: null
		};
	};
}

export { NPM_REGISTRY as N, NPM_API as a, useCachedFetch as u };
//# sourceMappingURL=useCachedFetch-B1uvSFXX.mjs.map

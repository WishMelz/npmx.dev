import { f as fetchDefaults, r as require_shared_cjs_prod, b as useRequestFetch } from './server-placeholder-C9fYItBT.mjs';
import { u as useAsyncData } from './asyncData-Dr04OizO.mjs';
import { computed, toValue, reactive } from 'vue';
import { x as hash } from '../nitro/nitro.mjs';

//#region node_modules/.pnpm/nuxt@4.3.1_@parcel+watcher@2.5.4_@types+node@24.12.0_@upstash+redis@1.37.0_@vue+compile_f0cd0552faee97afd8a1bbd3deb1c7f3/node_modules/nuxt/dist/app/composables/fetch.js
var import_shared_cjs_prod = require_shared_cjs_prod();
function useFetch(request, arg1, arg2) {
	const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
	const _request = computed(() => toValue(request));
	const key = computed(() => toValue(opts.key) || "$f" + hash([
		autoKey,
		typeof _request.value === "string" ? _request.value : "",
		...generateOptionSegments(opts)
	]));
	if (!opts.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") throw new Error("[nuxt] [useFetch] the request URL must not start with \"//\".");
	const { server, lazy, default: defaultFn, transform, pick, watch: watchSources, immediate, getCachedData, deep, dedupe, timeout, ...fetchOptions } = opts;
	const _fetchOptions = reactive({
		...fetchDefaults,
		...fetchOptions,
		cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
	});
	const _asyncDataOptions = {
		server,
		lazy,
		default: defaultFn,
		transform,
		pick,
		immediate,
		getCachedData,
		deep,
		dedupe,
		timeout,
		watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
	};
	return useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
		let _$fetch = opts.$fetch || globalThis.$fetch;
		if (!opts.$fetch) {
			if (typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/")) _$fetch = useRequestFetch();
		}
		return _$fetch(_request.value, {
			signal,
			..._fetchOptions
		});
	}, _asyncDataOptions);
}
function useLazyFetch(request, arg1, arg2) {
	const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
	return useFetch(request, {
		...opts,
		lazy: true
	}, autoKey);
}
function generateOptionSegments(opts) {
	const segments = [toValue(opts.method)?.toUpperCase() || "GET", toValue(opts.baseURL)];
	for (const _obj of [opts.query || opts.params]) {
		const obj = toValue(_obj);
		if (!obj) continue;
		const unwrapped = {};
		for (const [key, value] of Object.entries(obj)) unwrapped[toValue(key)] = toValue(value);
		segments.push(unwrapped);
	}
	if (opts.body) {
		const value = toValue(opts.body);
		if (!value) segments.push(hash(value));
		else if (value instanceof ArrayBuffer) segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
		else if (value instanceof FormData) {
			const obj = {};
			for (const entry of value.entries()) {
				const [key, val] = entry;
				obj[key] = val instanceof File ? val.name : val;
			}
			segments.push(hash(obj));
		} else if ((0, import_shared_cjs_prod.isPlainObject)(value)) segments.push(hash(reactive(value)));
		else try {
			segments.push(hash(value));
		} catch {
			console.warn("[useFetch] Failed to hash body", value);
		}
	}
	return segments;
}

export { useFetch as a, useLazyFetch as u };
//# sourceMappingURL=fetch-CVxFI0ck.mjs.map

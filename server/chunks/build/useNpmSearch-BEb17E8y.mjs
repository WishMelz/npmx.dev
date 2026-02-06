import { R as useLazyAsyncData } from './server.mjs';
import { u as useCachedFetch, N as NPM_REGISTRY, a as NPM_API } from './useCachedFetch-B1uvSFXX.mjs';
import { shallowRef, toValue, watch, computed, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { aM as encodePackageName } from '../nitro/nitro.mjs';

var LoadingSpinner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LoadingSpinner",
	__ssrInlineRender: true,
	props: { text: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"aria-busy": "true",
				class: "flex items-center gap-3 text-fg-muted font-mono text-sm py-8"
			}, _attrs))}><span class="w-4 h-4 border-2 border-fg-subtle border-t-fg rounded-full motion-safe:animate-spin"></span> ${ssrInterpolate(__props.text ?? _ctx.$t("common.loading"))}</div>`);
		};
	}
});
var _sfc_setup = LoadingSpinner_vue_vue_type_script_setup_true_lang_default.setup;
LoadingSpinner_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingSpinner.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var LoadingSpinner_default = Object.assign(LoadingSpinner_vue_vue_type_script_setup_true_lang_default, { __name: "LoadingSpinner" });
function packumentToSearchResult(pkg, weeklyDownloads) {
	let latestVersion = "";
	if (pkg["dist-tags"]) latestVersion = pkg["dist-tags"].latest || Object.values(pkg["dist-tags"])[0] || "";
	const modified = pkg.time.modified || pkg.time[latestVersion] || "";
	return {
		package: {
			name: pkg.name,
			version: latestVersion,
			description: pkg.description,
			keywords: pkg.keywords,
			date: pkg.time[latestVersion] || modified,
			links: { npm: `https://www.npmjs.com/package/${pkg.name}` },
			maintainers: pkg.maintainers
		},
		score: {
			final: 0,
			detail: {
				quality: 0,
				popularity: 0,
				maintenance: 0
			}
		},
		searchScore: 0,
		downloads: weeklyDownloads !== void 0 ? { weekly: weeklyDownloads } : void 0,
		updated: pkg.time[latestVersion] || modified
	};
}
const emptySearchResponse = {
	objects: [],
	total: 0,
	isStale: false,
	time: (/* @__PURE__ */ new Date()).toISOString()
};
function useNpmSearch(query, options = {}) {
	const cachedFetch = useCachedFetch();
	const cache = shallowRef(null);
	const isLoadingMore = shallowRef(false);
	const asyncData = useLazyAsyncData(() => `search:incremental:${toValue(query)}`, async (_nuxtApp, { signal }) => {
		const q = toValue(query);
		if (!q.trim()) return emptySearchResponse;
		const opts = toValue(options);
		cache.value = null;
		const params = new URLSearchParams();
		params.set("text", q);
		params.set("size", String(opts.size ?? 25));
		if (q.length === 1) {
			const encodedName = encodePackageName(q);
			const [{ data: pkg, isStale }, { data: downloads }] = await Promise.all([cachedFetch(`${NPM_REGISTRY}/${encodedName}`, { signal }), cachedFetch(`${NPM_API}/downloads/point/last-week/${encodedName}`, { signal })]);
			if (!pkg) return emptySearchResponse;
			const result = packumentToSearchResult(pkg, downloads?.downloads);
			if (q !== toValue(query)) return emptySearchResponse;
			cache.value = {
				query: q,
				objects: [result],
				total: 1
			};
			return {
				objects: [result],
				total: 1,
				isStale,
				time: (/* @__PURE__ */ new Date()).toISOString()
			};
		}
		const { data: response, isStale } = await cachedFetch(`${NPM_REGISTRY}/-/v1/search?${params.toString()}`, { signal }, 60);
		if (q !== toValue(query)) return emptySearchResponse;
		cache.value = {
			query: q,
			objects: response.objects,
			total: response.total
		};
		return {
			...response,
			isStale
		};
	}, { default: () => emptySearchResponse });
	async function fetchMore(targetSize) {
		const q = toValue(query).trim();
		if (!q) {
			cache.value = null;
			return;
		}
		if (cache.value && cache.value.query !== q) {
			cache.value = null;
			await asyncData.refresh();
			return;
		}
		const currentCount = cache.value?.objects.length ?? 0;
		const total = cache.value?.total ?? Infinity;
		if (currentCount >= targetSize || currentCount >= total) return;
		isLoadingMore.value = true;
		try {
			const from = currentCount;
			const size = Math.min(targetSize - currentCount, total - currentCount);
			const params = new URLSearchParams();
			params.set("text", q);
			params.set("size", String(size));
			params.set("from", String(from));
			const { data: response } = await cachedFetch(`${NPM_REGISTRY}/-/v1/search?${params.toString()}`, {}, 60);
			if (cache.value && cache.value.query === q) {
				const existingNames = new Set(cache.value.objects.map((obj) => obj.package.name));
				const newObjects = response.objects.filter((obj) => !existingNames.has(obj.package.name));
				cache.value = {
					query: q,
					objects: [...cache.value.objects, ...newObjects],
					total: response.total
				};
			} else cache.value = {
				query: q,
				objects: response.objects,
				total: response.total
			};
			if (cache.value.objects.length < targetSize && cache.value.objects.length < cache.value.total) await fetchMore(targetSize);
		} finally {
			isLoadingMore.value = false;
		}
	}
	watch(() => toValue(options).size, async (newSize, oldSize) => {
		if (!newSize) return;
		if (oldSize && newSize > oldSize && toValue(query).trim()) await fetchMore(newSize);
	});
	const data = computed(() => {
		if (cache.value) return {
			isStale: false,
			objects: cache.value.objects,
			total: cache.value.total,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
		return asyncData.data.value;
	});
	const hasMore = computed(() => {
		if (!cache.value) return true;
		return cache.value.objects.length < cache.value.total;
	});
	return {
		...asyncData,
		data,
		isLoadingMore,
		hasMore,
		fetchMore
	};
}

export { LoadingSpinner_default as L, emptySearchResponse as e, packumentToSearchResult as p, useNpmSearch as u };
//# sourceMappingURL=useNpmSearch-BEb17E8y.mjs.map

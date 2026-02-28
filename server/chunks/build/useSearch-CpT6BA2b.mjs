import { z as useLazyAsyncData, e as useNuxtApp } from './server.mjs';
import { u as useAlgoliaSearch, p as parseSuggestionIntent, e as emptySearchResponse, m as metaToSearchResult } from './LoadingSpinner-qFOxe1aJ.mjs';
import { shallowRef, toValue, watch, computed, readonly } from 'vue';
import { N as NPM_REGISTRY, n as encodePackageName } from '../nitro/nitro.mjs';
import validatePackageName from 'validate-npm-package-name';

/**
* Normalize a package name for comparison by removing common variations.
* This aims to mirror npm's typosquatting detection algorithm.
*/
function normalizePackageName(name) {
	return (name.startsWith("@") ? name.split("/")[1] || name : name).toLowerCase().replace(/[.\-_]/g, "").replace(/^(node|js)|(-?js|-?node)$/g, "");
}
/**
* Calculate similarity between two strings using Levenshtein distance.
*/
function levenshteinDistance(a, b) {
	const matrix = [];
	for (let i = 0; i <= b.length; i++) matrix[i] = [i];
	for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
	for (let i = 1; i <= b.length; i++) for (let j = 1; j <= a.length; j++) if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
	else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
	return matrix[b.length][a.length];
}
function isValidNewPackageName(name) {
	if (!name) return false;
	return validatePackageName(name).validForNewPackages === true;
}
async function checkPackageExists(name, options = {}) {
	try {
		await $fetch(`${NPM_REGISTRY}/${encodePackageName(name)}`, {
			...options,
			method: "HEAD"
		});
		return true;
	} catch {
		return false;
	}
}
async function findSimilarPackages(name, options = {}) {
	const normalized = normalizePackageName(name);
	const similar = [];
	try {
		const searchResponse = await $fetch(`${NPM_REGISTRY}/-/v1/search?text=${encodeURIComponent(name)}&size=20`, options);
		for (const obj of searchResponse.objects) {
			const pkgName = obj.package.name;
			const pkgNormalized = normalizePackageName(pkgName);
			if (pkgName === name) {
				similar.push({
					name: pkgName,
					description: obj.package.description,
					similarity: "exact-match"
				});
				continue;
			}
			if (normalized === pkgNormalized) {
				similar.push({
					name: pkgName,
					description: obj.package.description,
					similarity: "very-similar"
				});
				continue;
			}
			const distance = levenshteinDistance(normalized, pkgNormalized);
			const maxLen = Math.max(normalized.length, pkgNormalized.length);
			if (maxLen === 0) continue;
			if (1 - distance / maxLen >= .8 || distance <= 2) similar.push({
				name: pkgName,
				description: obj.package.description,
				similarity: "similar"
			});
		}
		const order = {
			"exact-match": 0,
			"very-similar": 1,
			"similar": 2
		};
		similar.sort((a, b) => order[a.similarity] - order[b.similarity]);
		return similar.slice(0, 10);
	} catch {
		return [];
	}
}
async function checkPackageName(name, options = {}) {
	const validation = validatePackageName(name);
	const valid = validation.validForNewPackages === true;
	const result = {
		name,
		available: false,
		valid
	};
	if (validation.errors?.length) result.validationErrors = validation.errors;
	if (validation.warnings?.length) result.validationWarnings = validation.warnings;
	if (!valid) return result;
	const [exists, similarPackages] = await Promise.all([checkPackageExists(name, options), findSimilarPackages(name, options)]);
	result.available = !exists;
	result.similarPackages = similarPackages;
	return result;
}
async function checkOrgExists(name) {
	try {
		const scopePrefix = `@${name.toLowerCase()}/`;
		return (await $fetch(`${NPM_REGISTRY}/-/v1/search`, { query: {
			text: `@${name}`,
			size: 5
		} })).objects.some((obj) => obj.package.name.toLowerCase().startsWith(scopePrefix));
	} catch {
		return false;
	}
}
async function checkUserExists(name) {
	try {
		return (await $fetch(`${NPM_REGISTRY}/-/v1/search`, { query: {
			text: `maintainer:${name}`,
			size: 1
		} })).total > 0;
	} catch {
		return false;
	}
}
/**
* Composable providing npm registry search.
* Must be called during component setup.
*/
function useNpmSearch() {
	const { $npmRegistry } = useNuxtApp();
	/**
	* Search npm packages. Single-character queries fetch lightweight metadata
	* via a server proxy since the search API returns poor results for them.
	*/
	async function search(query, options = {}, signal) {
		if (query.length === 1) try {
			return {
				objects: [metaToSearchResult(await $fetch(`/api/registry/package-meta/${encodePackageName(query)}`, { signal }))],
				total: 1,
				isStale: false,
				time: (/* @__PURE__ */ new Date()).toISOString()
			};
		} catch {
			return emptySearchResponse();
		}
		const params = new URLSearchParams();
		params.set("text", query);
		params.set("size", String(options.size ?? 25));
		if (options.from) params.set("from", String(options.from));
		const { data: response, isStale } = await $npmRegistry(`/-/v1/search?${params.toString()}`, { signal }, 60);
		return {
			...response,
			isStale
		};
	}
	return {
		search,
		checkOrgExists,
		checkUserExists
	};
}
function emptySearchPayload() {
	return {
		searchResponse: emptySearchResponse(),
		suggestions: [],
		packageAvailability: null
	};
}
function useSearch(query, searchProvider, options = {}, config = {}) {
	const { search: searchAlgolia, searchWithSuggestions: algoliaMultiSearch } = useAlgoliaSearch();
	const { search: searchNpm, checkOrgExists: checkOrgNpm, checkUserExists: checkUserNpm } = useNpmSearch();
	const cache = shallowRef(null);
	const isLoadingMore = shallowRef(false);
	const isRateLimited = shallowRef(false);
	const suggestions = shallowRef([]);
	const suggestionsLoading = shallowRef(false);
	const packageAvailability = shallowRef(null);
	const existenceCache = shallowRef({});
	const suggestionRequestId = shallowRef(0);
	/**
	* Determine which extra checks to include in the Algolia multi-search.
	* Returns `undefined` when nothing uncached needs checking.
	*/
	function buildAlgoliaChecks(q) {
		if (!config.suggestions) return void 0;
		const { intent, name } = parseSuggestionIntent(q);
		const lowerName = name.toLowerCase();
		const checks = {};
		let hasChecks = false;
		if (intent && name) {
			const wantOrg = intent === "org" || intent === "both";
			const wantUser = intent === "user" || intent === "both";
			if (wantOrg && existenceCache.value[`org:${lowerName}`] === void 0) {
				checks.name = name;
				checks.checkOrg = true;
				hasChecks = true;
			}
			if (wantUser && existenceCache.value[`user:${lowerName}`] === void 0) {
				checks.name = name;
				checks.checkUser = true;
				hasChecks = true;
			}
		}
		const trimmed = q.trim();
		if (isValidNewPackageName(trimmed)) {
			checks.checkPackage = trimmed;
			hasChecks = true;
		}
		return hasChecks ? checks : void 0;
	}
	/**
	* Update suggestion and package-availability state from multi-search results.
	* Only writes to the cache for checks that were actually sent; reads from
	* existing cache for the rest.
	*/
	function processAlgoliaChecks(q, checks, result) {
		const { intent, name } = parseSuggestionIntent(q);
		if (intent && name) {
			const lowerName = name.toLowerCase();
			const wantOrg = intent === "org" || intent === "both";
			const wantUser = intent === "user" || intent === "both";
			const updates = {};
			if (checks?.checkOrg) updates[`org:${lowerName}`] = result.orgExists;
			if (checks?.checkUser) updates[`user:${lowerName}`] = result.userExists;
			if (Object.keys(updates).length > 0) existenceCache.value = {
				...existenceCache.value,
				...updates
			};
			const isOrg = wantOrg && existenceCache.value[`org:${lowerName}`];
			const isUser = wantUser && existenceCache.value[`user:${lowerName}`];
			const newSuggestions = [];
			if (isOrg) newSuggestions.push({
				type: "org",
				name: lowerName,
				exists: true
			});
			if (isUser && !isOrg) newSuggestions.push({
				type: "user",
				name: lowerName,
				exists: true
			});
			suggestions.value = newSuggestions;
		} else suggestions.value = [];
		const trimmed = q.trim();
		if (result.packageExists !== null && isValidNewPackageName(trimmed)) packageAvailability.value = {
			name: trimmed,
			available: !result.packageExists
		};
		else if (!isValidNewPackageName(trimmed)) packageAvailability.value = null;
		suggestionsLoading.value = false;
	}
	const asyncData = useLazyAsyncData(() => `search:${toValue(searchProvider)}:${toValue(query)}`, async (_nuxtApp, { signal }) => {
		const q = toValue(query);
		const provider = toValue(searchProvider);
		if (!q.trim()) {
			isRateLimited.value = false;
			return emptySearchPayload();
		}
		const opts = toValue(options);
		cache.value = null;
		if (provider === "algolia") {
			const checks = config.suggestions ? buildAlgoliaChecks(q) : void 0;
			if (config.suggestions) {
				suggestionsLoading.value = true;
				const result = await algoliaMultiSearch(q, { size: opts.size ?? 25 }, checks);
				if (q !== toValue(query)) return emptySearchPayload();
				isRateLimited.value = false;
				processAlgoliaChecks(q, checks, result);
				return {
					searchResponse: result.search,
					suggestions: suggestions.value,
					packageAvailability: packageAvailability.value
				};
			}
			const response = await searchAlgolia(q, { size: opts.size ?? 25 });
			if (q !== toValue(query)) return emptySearchPayload();
			isRateLimited.value = false;
			return {
				searchResponse: response,
				suggestions: [],
				packageAvailability: null
			};
		}
		try {
			const response = await searchNpm(q, { size: opts.size ?? 25 }, signal);
			if (q !== toValue(query)) return emptySearchPayload();
			cache.value = {
				query: q,
				provider,
				objects: response.objects,
				total: response.total
			};
			isRateLimited.value = false;
			return {
				searchResponse: response,
				suggestions: [],
				packageAvailability: null
			};
		} catch (error) {
			const errorMessage = error?.message || String(error);
			if (errorMessage.includes("Failed to fetch") || errorMessage.includes("429")) {
				isRateLimited.value = true;
				return emptySearchPayload();
			}
			throw error;
		}
	}, { default: emptySearchPayload });
	async function fetchMore(targetSize) {
		const q = toValue(query).trim();
		const provider = toValue(searchProvider);
		if (!q) {
			cache.value = null;
			return;
		}
		if (cache.value && (cache.value.query !== q || cache.value.provider !== provider)) {
			cache.value = null;
			await asyncData.refresh();
			return;
		}
		if (!cache.value && asyncData.data.value) {
			const { searchResponse } = asyncData.data.value;
			cache.value = {
				query: q,
				provider,
				objects: [...searchResponse.objects],
				total: searchResponse.total
			};
		}
		const currentCount = cache.value?.objects.length ?? 0;
		const total = cache.value?.total ?? Infinity;
		if (currentCount >= targetSize || currentCount >= total) return;
		isLoadingMore.value = true;
		try {
			const from = currentCount;
			const size = Math.min(targetSize - currentCount, total - currentCount);
			const response = await (provider === "algolia" ? searchAlgolia : searchNpm)(q, {
				size,
				from
			});
			if (cache.value && cache.value.query === q && cache.value.provider === provider) {
				const existingNames = new Set(cache.value.objects.map((obj) => obj.package.name));
				const newObjects = response.objects.filter((obj) => !existingNames.has(obj.package.name));
				cache.value = {
					query: q,
					provider,
					objects: [...cache.value.objects, ...newObjects],
					total: response.total
				};
			} else cache.value = {
				query: q,
				provider,
				objects: response.objects,
				total: response.total
			};
			if (cache.value && cache.value.objects.length < targetSize && cache.value.objects.length < cache.value.total) await fetchMore(targetSize);
		} finally {
			isLoadingMore.value = false;
		}
	}
	watch(() => toValue(options).size, async (newSize, oldSize) => {
		if (!newSize) return;
		if (oldSize && newSize > oldSize && toValue(query).trim()) await fetchMore(newSize);
	});
	watch(() => toValue(searchProvider), async () => {
		cache.value = null;
		existenceCache.value = {};
		await asyncData.refresh();
		const targetSize = toValue(options).size;
		if (targetSize) await fetchMore(targetSize);
	});
	const data = computed(() => {
		if (cache.value) return {
			isStale: false,
			objects: cache.value.objects,
			total: cache.value.total,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
		return asyncData.data.value?.searchResponse ?? null;
	});
	const hasMore = computed(() => {
		if (!cache.value) return true;
		return cache.value.objects.length < cache.value.total;
	});
	async function validateSuggestionsNpm(q) {
		const requestId = ++suggestionRequestId.value;
		const { intent, name } = parseSuggestionIntent(q);
		let availability = null;
		const promises = [];
		const trimmed = q.trim();
		if (isValidNewPackageName(trimmed)) promises.push(checkPackageExists(trimmed).then((exists) => {
			if (trimmed === toValue(query).trim()) {
				availability = {
					name: trimmed,
					available: !exists
				};
				packageAvailability.value = availability;
			}
		}).catch(() => {
			availability = null;
		}));
		else availability = null;
		if (!intent || !name) {
			suggestionsLoading.value = false;
			await Promise.all(promises);
			return {
				suggestions: [],
				packageAvailability: availability
			};
		}
		suggestionsLoading.value = true;
		const result = [];
		const lowerName = name.toLowerCase();
		try {
			const wantOrg = intent === "org" || intent === "both";
			const wantUser = intent === "user" || intent === "both";
			if (wantOrg && existenceCache.value[`org:${lowerName}`] === void 0) promises.push(checkOrgNpm(lowerName).then((exists) => {
				existenceCache.value = {
					...existenceCache.value,
					[`org:${lowerName}`]: exists
				};
			}).catch(() => {
				existenceCache.value = {
					...existenceCache.value,
					[`org:${lowerName}`]: false
				};
			}));
			if (wantUser && existenceCache.value[`user:${lowerName}`] === void 0) promises.push(checkUserNpm(lowerName).then((exists) => {
				existenceCache.value = {
					...existenceCache.value,
					[`user:${lowerName}`]: exists
				};
			}).catch(() => {
				existenceCache.value = {
					...existenceCache.value,
					[`user:${lowerName}`]: false
				};
			}));
			if (promises.length > 0) await Promise.all(promises);
			if (requestId !== suggestionRequestId.value) return {
				suggestions: [],
				packageAvailability: availability
			};
			const isOrg = wantOrg && existenceCache.value[`org:${lowerName}`];
			const isUser = wantUser && existenceCache.value[`user:${lowerName}`];
			if (isOrg) result.push({
				type: "org",
				name: lowerName,
				exists: true
			});
			if (isUser && !isOrg) result.push({
				type: "user",
				name: lowerName,
				exists: true
			});
		} finally {
			if (requestId === suggestionRequestId.value) suggestionsLoading.value = false;
		}
		if (requestId === suggestionRequestId.value) {
			suggestions.value = result;
			return {
				suggestions: result,
				packageAvailability: availability
			};
		}
		return {
			suggestions: [],
			packageAvailability: availability
		};
	}
	const npmSuggestions = useLazyAsyncData(() => `npm-suggestions:${toValue(searchProvider)}:${toValue(query)}`, async () => {
		const q = toValue(query).trim();
		if (toValue(searchProvider) === "algolia" || !q) return {
			suggestions: [],
			packageAvailability: null
		};
		const { intent, name } = parseSuggestionIntent(q);
		if (!intent || !name) return {
			suggestions: [],
			packageAvailability: null
		};
		return validateSuggestionsNpm(q);
	}, { default: () => ({
		suggestions: [],
		packageAvailability: null
	}) });
	watch([() => asyncData.data.value.suggestions, () => npmSuggestions.data.value.suggestions], ([algoliaSuggestions, npmSuggestionsValue]) => {
		if (algoliaSuggestions.length || npmSuggestionsValue.length) suggestions.value = algoliaSuggestions.length ? algoliaSuggestions : npmSuggestionsValue;
	}, { immediate: true });
	watch([() => asyncData.data.value?.packageAvailability, () => npmSuggestions.data.value.packageAvailability], ([algoliaPackageAvailability, npmPackageAvailability]) => {
		if (algoliaPackageAvailability || npmPackageAvailability) packageAvailability.value = algoliaPackageAvailability || npmPackageAvailability;
	}, { immediate: true });
	return {
		...asyncData,
		data,
		isLoadingMore,
		hasMore,
		fetchMore,
		isRateLimited: readonly(isRateLimited),
		suggestions: readonly(suggestions),
		suggestionsLoading: readonly(suggestionsLoading),
		packageAvailability: readonly(packageAvailability)
	};
}

export { checkPackageName as c, isValidNewPackageName as i, useSearch as u };
//# sourceMappingURL=useSearch-CpT6BA2b.mjs.map

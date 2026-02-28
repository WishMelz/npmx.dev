import { y as useRuntimeConfig } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { liteClient } from 'algoliasearch/lite';

function metaToSearchResult(meta) {
	return {
		package: {
			name: meta.name,
			version: meta.version,
			description: meta.description,
			keywords: meta.keywords,
			license: meta.license,
			date: meta.date,
			links: meta.links,
			author: meta.author,
			maintainers: meta.maintainers
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
		downloads: meta.weeklyDownloads !== void 0 ? { weekly: meta.weeklyDownloads } : void 0,
		updated: meta.date
	};
}
function emptySearchResponse() {
	return {
		objects: [],
		total: 0,
		isStale: false,
		time: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function isValidNpmName(name) {
	if (!name || name.length === 0 || name.length > 214) return false;
	if (!/^[a-z0-9]/i.test(name)) return false;
	return /^[\w-]+$/.test(name);
}
/** Parse a search query into a suggestion intent (`~user`, `@org`, or plain `both`). */
function parseSuggestionIntent(query) {
	const q = query.trim();
	if (!q) return {
		intent: null,
		name: ""
	};
	if (q.startsWith("~")) {
		const name = q.slice(1);
		return isValidNpmName(name) ? {
			intent: "user",
			name
		} : {
			intent: null,
			name: ""
		};
	}
	if (q.startsWith("@")) {
		if (q.includes("/")) return {
			intent: null,
			name: ""
		};
		const name = q.slice(1);
		return isValidNpmName(name) ? {
			intent: "org",
			name
		} : {
			intent: null,
			name: ""
		};
	}
	return isValidNpmName(q) ? {
		intent: "both",
		name: q
	} : {
		intent: null,
		name: ""
	};
}
var _searchClient = null;
var _configuredAppId = null;
function getOrCreateClient(appId, apiKey) {
	if (!_searchClient || _configuredAppId !== appId) {
		_searchClient = liteClient(appId, apiKey);
		_configuredAppId = appId;
	}
	return _searchClient;
}
var ATTRIBUTES_TO_RETRIEVE = [
	"name",
	"version",
	"description",
	"modified",
	"homepage",
	"repository",
	"owners",
	"downloadsLast30Days",
	"downloadsRatio",
	"popular",
	"keywords",
	"deprecated",
	"isDeprecated",
	"license"
];
var EXISTENCE_CHECK_ATTRS = ["name"];
function hitToSearchResult(hit) {
	return {
		package: {
			name: hit.name,
			version: hit.version,
			description: hit.description || "",
			keywords: hit.keywords,
			date: new Date(hit.modified).toISOString(),
			links: {
				npm: `https://www.npmjs.com/package/${hit.name}`,
				homepage: hit.homepage || void 0,
				repository: hit.repository?.url || void 0
			},
			maintainers: hit.owners ? hit.owners.map((owner) => ({
				name: owner.name,
				email: owner.email
			})) : []
		},
		score: {
			final: 0,
			detail: {
				quality: hit.popular ? 1 : 0,
				popularity: hit.downloadsRatio,
				maintenance: 0
			}
		},
		searchScore: 0,
		downloads: { weekly: Math.round(hit.downloadsLast30Days / 4.3) },
		updated: new Date(hit.modified).toISOString()
	};
}
/**
* Composable providing Algolia search for npm packages.
* Must be called during component setup.
*/
function useAlgoliaSearch() {
	const { algolia } = (/* @__PURE__ */ useRuntimeConfig()).public;
	const client = getOrCreateClient(algolia.appId, algolia.apiKey);
	const indexName = algolia.indexName;
	async function search(query, options = {}) {
		const { results } = await client.search({ requests: [{
			indexName,
			query,
			offset: options.from,
			length: options.size,
			filters: options.filters || "",
			analyticsTags: ["npmx.dev"],
			attributesToRetrieve: ATTRIBUTES_TO_RETRIEVE,
			attributesToHighlight: []
		}] });
		const response = results[0];
		if (!response) throw new Error("Algolia returned an empty response");
		return {
			isStale: false,
			objects: response.hits.map(hitToSearchResult),
			total: response.nbHits ?? 0,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
	/** Fetch all packages for an owner using `owner.name` filter with pagination. */
	async function searchByOwner(ownerName, options = {}) {
		const max = options.maxResults ?? 1e3;
		const allHits = [];
		let offset = 0;
		let serverTotal = 0;
		const batchSize = 200;
		while (offset < max) {
			const remaining = serverTotal > 0 ? Math.min(max, serverTotal) - offset : max - offset;
			if (remaining <= 0) break;
			const length = Math.min(batchSize, remaining);
			const { results } = await client.search({ requests: [{
				indexName,
				query: "",
				offset,
				length,
				filters: `owner.name:${ownerName}`,
				analyticsTags: ["npmx.dev"],
				attributesToRetrieve: ATTRIBUTES_TO_RETRIEVE,
				attributesToHighlight: []
			}] });
			const response = results[0];
			if (!response) break;
			serverTotal = response.nbHits ?? 0;
			allHits.push(...response.hits);
			if (response.hits.length < length || allHits.length >= serverTotal) break;
			offset += length;
		}
		return {
			isStale: false,
			objects: allHits.map(hitToSearchResult),
			total: serverTotal,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
	/** Fetch metadata for specific packages by exact name using Algolia's getObjects API. */
	async function getPackagesByName(packageNames) {
		if (packageNames.length === 0) return {
			isStale: false,
			objects: [],
			total: 0,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
		const hits = (await $fetch(`https://${algolia.appId}-dsn.algolia.net/1/indexes/*/objects`, {
			method: "POST",
			headers: {
				"x-algolia-api-key": algolia.apiKey,
				"x-algolia-application-id": algolia.appId
			},
			body: { requests: packageNames.map((name) => ({
				indexName,
				objectID: name,
				attributesToRetrieve: ATTRIBUTES_TO_RETRIEVE
			})) }
		})).results.filter((r) => r !== null && "name" in r);
		return {
			isStale: false,
			objects: hits.map(hitToSearchResult),
			total: hits.length,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
	/**
	* Combined search + org/user/package existence checks in a single
	* Algolia multi-search request.
	*/
	async function searchWithSuggestions(query, options = {}, checks) {
		const requests = [{
			indexName,
			query,
			offset: options.from,
			length: options.size,
			filters: options.filters || "",
			analyticsTags: ["npmx.dev"],
			attributesToRetrieve: ATTRIBUTES_TO_RETRIEVE,
			attributesToHighlight: []
		}];
		const orgQueryIndex = checks?.checkOrg && checks.name ? requests.length : -1;
		if (checks?.checkOrg && checks.name) requests.push({
			indexName,
			query: `"@${checks.name}"`,
			length: 1,
			analyticsTags: ["npmx.dev"],
			attributesToRetrieve: EXISTENCE_CHECK_ATTRS,
			attributesToHighlight: []
		});
		const userQueryIndex = checks?.checkUser && checks.name ? requests.length : -1;
		if (checks?.checkUser && checks.name) requests.push({
			indexName,
			query: "",
			filters: `owner.name:${checks.name}`,
			length: 1,
			analyticsTags: ["npmx.dev"],
			attributesToRetrieve: EXISTENCE_CHECK_ATTRS,
			attributesToHighlight: []
		});
		const packageQueryIndex = checks?.checkPackage ? requests.length : -1;
		if (checks?.checkPackage) requests.push({
			indexName,
			query: "",
			filters: `objectID:${checks.checkPackage}`,
			length: 1,
			analyticsTags: ["npmx.dev"],
			attributesToRetrieve: EXISTENCE_CHECK_ATTRS,
			attributesToHighlight: []
		});
		const { results } = await client.search({ requests });
		const mainResponse = results[0];
		if (!mainResponse) throw new Error("Algolia returned an empty response");
		const searchResult = {
			isStale: false,
			objects: mainResponse.hits.map(hitToSearchResult),
			total: mainResponse.nbHits ?? 0,
			time: (/* @__PURE__ */ new Date()).toISOString()
		};
		let orgExists = false;
		if (orgQueryIndex >= 0 && checks?.name) {
			const orgResponse = results[orgQueryIndex];
			const scopePrefix = `@${checks.name.toLowerCase()}/`;
			orgExists = orgResponse?.hits?.some((h) => h.name?.toLowerCase().startsWith(scopePrefix)) ?? false;
		}
		let userExists = false;
		if (userQueryIndex >= 0) userExists = (results[userQueryIndex]?.nbHits ?? 0) > 0;
		let packageExists = null;
		if (packageQueryIndex >= 0) packageExists = (results[packageQueryIndex]?.nbHits ?? 0) > 0;
		return {
			search: searchResult,
			orgExists,
			userExists,
			packageExists
		};
	}
	return {
		search,
		searchWithSuggestions,
		searchByOwner,
		getPackagesByName
	};
}
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

export { LoadingSpinner_default as L, emptySearchResponse as e, metaToSearchResult as m, parseSuggestionIntent as p, useAlgoliaSearch as u };
//# sourceMappingURL=LoadingSpinner-qFOxe1aJ.mjs.map

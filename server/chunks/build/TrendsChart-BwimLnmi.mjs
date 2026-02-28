import { e as useNuxtApp, a2 as tryOnScopeDispose, _ as _plugin_vue_export_helper_default, u as useI18n, N as useAccentColor, r as useSettings, F as useClipboard, I as useColorMode, a8 as useElementSize, m as Base_default$1, a9 as DATE_INPUT_MAX, B as Base_default, D as client_only_default, aa as useResizeObserver, ab as useMutationObserver, ac as useSupported } from './server.mjs';
import { A as App_default } from './App-B-_OJFKC.mjs';
import { a as useCompactNumberFormatter } from './useNumberFormatter-CNADtHud.mjs';
import { F as Field_default } from './Field-BBRX0YgS.mjs';
import { i as isListedFramework, g as getFrameworkColor } from './frameworks-Cvl8C7l0.mjs';
import { n as encodePackageName } from '../nitro/nitro.mjs';
import { getVersions } from 'fast-npm-meta';
import { compare } from 'semver';
import { customRef, toValue, nextTick, watch, defineComponent, computed, mergeProps, unref, shallowRef, reactive, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';

function sum(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}
function clamp(value, minValue, maxValue) {
	if (value < minValue) return minValue;
	if (value > maxValue) return maxValue;
	return value;
}
/**
* Computes a quantile value from a sorted numeric array using linear interpolation.
*
* The input array must already be sorted in ascending order.
* The function does not sort the array internally.
*
* Behavior:
* - If the array is empty → returns 0
* - If quantileValue <= 0 → returns the first element
* - If quantileValue >= 1 → returns the last element
* - Otherwise → returns the interpolated value between the two nearest ranks
*
* The quantile is computed using the "linear interpolation between closest ranks" method:
*
*   position = (n - 1) * q
*
* where:
*   n = number of elements
*   q = quantileValue (between 0 and 1)
*
* The result is interpolated between the floor and ceil positions.
*
* @example quantile([1, 2, 3, 4], 0.5) // 2.5
* @param sortedValues Sorted array of numeric values (ascending order)
* @param quantileValue Quantile to compute (typically between 0 and 1)
* @returns The computed quantile value
*/
function quantile(sortedValues, quantileValue) {
	const length = sortedValues.length;
	if (length === 0) return 0;
	if (quantileValue <= 0) {
		const first = sortedValues[0];
		return first === void 0 ? 0 : first;
	}
	if (quantileValue >= 1) {
		const last = sortedValues[length - 1];
		return last === void 0 ? 0 : last;
	}
	const position = (length - 1) * quantileValue;
	const lowerIndex = Math.floor(position);
	const upperIndex = Math.ceil(position);
	const weight = position - lowerIndex;
	const lower = sortedValues[lowerIndex];
	return lower + (sortedValues[upperIndex] - lower) * weight;
}
/**
* Applies winsorization to a numeric array.
*
* Winsorization limits extreme values by clamping them to percentile-based bounds
* instead of removing them. Values below the lower quantile are replaced with the
* lower quantile value, and values above the upper quantile are replaced with the
* upper quantile value.
*
* This reduces the influence of outliers while preserving:
* - The original array length
* - The original order of elements
*
* Does not mutate the input array.
*
* @param values Array of numeric values
* @param lowerQuantile Lower percentile boundary (between 0 and 1)
* @param upperQuantile Upper percentile boundary (between 0 and 1)
* @returns A new array with values clamped to the computed quantile bounds
*/
function winsorize(values, lowerQuantile, upperQuantile) {
	const sorted = values.toSorted((a, b) => a - b);
	const lowerBound = quantile(sorted, lowerQuantile);
	const upperBound = quantile(sorted, upperQuantile);
	return values.map((v) => clamp(v, lowerBound, upperBound));
}
/**
* Computes descriptive statistics and trend analysis for a numeric time series.
*
* - Ignores null and undefined values
* - Preserves original indexes for regression (gaps do not shift time)
* - Computes absolute and relative volatility
* - Fits a linear regression to estimate directional trend
* - Applies optional winsorization (5th–95th percentile) for datasets >= 20 points
*   to reduce outlier influence on regression
*
* Returned metrics:
*
* - mean: arithmetic mean of valid values
* - standardDeviation: population standard deviation
* - coefficientOfVariation: relative volatility (std / mean), or null when mean is 0
* - slope: regression slope (change per time step)
* - rSquared: linear fit consistency (0–1), or null when undefined
* - interpretation:
*     - volatility: qualitative stability classification
*     - trend: qualitative trend classification derived from:
*         - rSquared (linearity / consistency)
*         - relativeSlope (|slope| normalized by typical level)
*
* Trend classification logic:
* - Base classification comes from rSquared
* - May be upgraded when directional magnitude (relativeSlope)
*   exceeds configured thresholds
*
* Edge cases:
* - Empty input: fully undefined interpretation
* - Single value: no trend, very stable
* - Zero variance: rSquared null
*
* @param values Array of numeric values (can contain null)
* @returns LineChartAnalysis object with statistics and qualitative interpretation
*/
function computeLineChartAnalysis(values) {
	const indexedValues = [];
	for (let i = 0; i < values.length; i += 1) {
		const v = values[i];
		if (v === null || v === void 0) continue;
		indexedValues.push({
			value: v,
			index: i
		});
	}
	const n = indexedValues.length;
	if (n === 0) return {
		mean: 0,
		standardDeviation: 0,
		coefficientOfVariation: null,
		slope: 0,
		rSquared: null,
		interpretation: {
			volatility: "undefined",
			trend: "undefined"
		}
	};
	if (n === 1) return {
		mean: indexedValues[0]?.value ?? 0,
		standardDeviation: 0,
		coefficientOfVariation: null,
		slope: 0,
		rSquared: null,
		interpretation: {
			volatility: "very_stable",
			trend: "none"
		}
	};
	let _sum = 0;
	for (const entry of indexedValues) _sum += entry.value;
	const mean = _sum / n;
	let varianceSum = 0;
	for (const entry of indexedValues) {
		const diff = entry.value - mean;
		varianceSum += diff * diff;
	}
	const standardDeviation = Math.sqrt(varianceSum / n);
	const coefficientOfVariation = mean === 0 ? null : standardDeviation / mean;
	const originalYValues = [];
	for (const entry of indexedValues) originalYValues.push(entry.value);
	/**
	* Apply winsorization (5th–95th percentile) only when the dataset is large enough.
	*
	* For small samples, percentile bounds can fall inside the true min/max,
	* which would artificially clamp endpoints and distort perfectly linear trends:
	*
	* - If we have enough observations (>= 20), use winsorization to reduce outlier influence
	* - If the sample is small, we keep original values to preserve exact statistical properties and
	*   avoid biasing regression results
	*/
	const winsorizedYValues = originalYValues.length >= 20 ? winsorize(originalYValues, .05, .95) : originalYValues;
	let sumX = 0;
	let sumY = 0;
	let sumXY = 0;
	let sumXX = 0;
	for (let i = 0; i < indexedValues.length; i += 1) {
		const entry = indexedValues[i];
		const y = winsorizedYValues[i];
		if (entry === void 0 || y === void 0) continue;
		const x = entry.index;
		sumX += x;
		sumY += y;
		sumXY += x * y;
		sumXX += x * x;
	}
	const denominator = n * sumXX - sumX * sumX;
	const slope = denominator === 0 ? 0 : (n * sumXY - sumX * sumY) / denominator;
	let rSquared = null;
	if (denominator !== 0) {
		const meanY = sumY / n;
		const intercept = (sumY - slope * sumX) / n;
		let ssTotal = 0;
		let ssResidual = 0;
		for (let i = 0; i < indexedValues.length; i += 1) {
			const entry = indexedValues[i];
			const y = winsorizedYValues[i];
			if (entry === void 0 || y === void 0) continue;
			const x = entry.index;
			const diff = y - meanY;
			ssTotal += diff * diff;
			const residual = y - (slope * x + intercept);
			ssResidual += residual * residual;
		}
		if (ssTotal !== 0) rSquared = 1 - ssResidual / ssTotal;
	}
	let volatility = "undefined";
	if (coefficientOfVariation !== null) if (coefficientOfVariation < .1) volatility = "very_stable";
	else if (coefficientOfVariation < .25) volatility = "moderate";
	else volatility = "volatile";
	let robustMeanY = 0;
	if (winsorizedYValues.length > 0) robustMeanY = sum(winsorizedYValues) / winsorizedYValues.length;
	const relativeSlope = robustMeanY === 0 ? 0 : Math.abs(slope) / robustMeanY;
	let trend = "undefined";
	if (standardDeviation === 0) trend = "none";
	else if (rSquared !== null) {
		if (rSquared > .75) trend = "strong";
		else if (rSquared > .4) trend = "weak";
		else trend = "none";
		if (trend === "none") {
			if (relativeSlope >= .03) trend = "weak";
		} else if (trend === "weak") {
			if (relativeSlope >= .06) trend = "strong";
		}
	}
	return {
		mean,
		standardDeviation,
		coefficientOfVariation,
		slope,
		rSquared,
		interpretation: {
			volatility,
			trend
		}
	};
}
function createAltTextForTrendLineChart({ dataset, config }) {
	if (!dataset) return "";
	const analysis = dataset.lines.map(({ name, series }) => ({
		name,
		...computeLineChartAnalysis(series),
		dates: config.formattedDates,
		hasEstimation: config.hasEstimation
	}));
	const granularityKey = {
		daily: "package.trends.granularity_daily",
		weekly: "package.trends.granularity_weekly",
		monthly: "package.trends.granularity_monthly",
		yearly: "package.trends.granularity_yearly"
	}[config.granularity] ?? "package.trends.granularity_weekly";
	const granularity = String(config.$t(granularityKey)).toLocaleLowerCase();
	const packages_analysis = analysis.map((pkg, i) => {
		const trendText = (() => {
			switch (pkg.interpretation.trend) {
				case "none": return config.$t("package.trends.copy_alt.trend_none");
				case "weak": return config.$t("package.trends.copy_alt.trend_weak");
				case "strong": return config.$t("package.trends.copy_alt.trend_strong");
				default: return config.$t("package.trends.copy_alt.trend_undefined");
			}
		})();
		return config.$t("package.trends.copy_alt.analysis", {
			package_name: pkg.name,
			start_value: config.formattedDatasetValues[i]?.[0] ?? 0,
			end_value: config.formattedDatasetValues[i]?.at(-1) ?? 0,
			trend: trendText,
			downloads_slope: config.numberFormatter(pkg.slope)
		});
	}).join(", ");
	const isSinglePackage = analysis.length === 1;
	const estimation_notice = config.hasEstimation ? ` ${isSinglePackage ? config.$t("package.trends.copy_alt.estimation") : config.$t("package.trends.copy_alt.estimations")}` : "";
	const compareText = `${config.$t("package.trends.copy_alt.compare", { packages: analysis.map((a) => a.name).join(", ") })} `;
	const singlePackageText = `${config.$t("package.trends.copy_alt.single_package", { package: analysis?.[0]?.name ?? "" })} `;
	const generalAnalysis = config.$t("package.trends.copy_alt.general_description", {
		start_date: analysis?.[0]?.dates[0]?.text ?? "-",
		end_date: analysis?.[0]?.dates.at(-1)?.text ?? "-",
		granularity,
		packages_analysis,
		watermark: config.$t("package.trends.copy_alt.watermark"),
		estimation_notice
	});
	return (isSinglePackage ? singlePackageText : compareText) + generalAnalysis;
}
async function copyAltTextForTrendLineChart({ dataset, config }) {
	const altText = createAltTextForTrendLineChart({
		dataset,
		config
	});
	await config.copy(altText);
}
function createAltTextForVersionsBarChart({ dataset, config }) {
	if (!dataset) return "";
	const versions = (dataset.bars[0]?.series ?? []).map((value, index) => ({
		index,
		name: config.datapointLabels[index] ?? "-",
		rawDownloads: value ?? 0,
		downloads: config.numberFormatter(value ?? 0)
	}));
	const versionWithMaxDownloads = versions.length > 0 ? versions.reduce((max, current) => current.rawDownloads > max.rawDownloads ? current : max) : void 0;
	const per_version_analysis = versions.toReversed().filter((v) => v.index !== versionWithMaxDownloads?.index).map((v) => config.$t(`package.versions.copy_alt.per_version_analysis`, {
		version: v?.name ?? "-",
		downloads: v?.downloads ?? "-"
	})).join(", ");
	const semver_grouping_mode = config.semverGroupingMode === "major" ? config.$t("package.versions.grouping_major") : config.$t("package.versions.grouping_minor");
	return `${config.$t("package.versions.copy_alt.general_description", {
		package_name: dataset?.bars[0]?.name ?? "-",
		versions_count: versions?.length,
		semver_grouping_mode: semver_grouping_mode.toLocaleLowerCase(),
		first_version: versions[0]?.name ?? "-",
		last_version: versions.at(-1)?.name ?? "-",
		date_range_label: config.dateRangeLabel ?? "-",
		max_downloaded_version: versionWithMaxDownloads?.name ?? "-",
		max_version_downloads: versionWithMaxDownloads?.downloads ?? "-",
		per_version_analysis,
		watermark: config.$t("package.trends.copy_alt.watermark")
	})}`;
}
async function copyAltTextForVersionsBarChart({ dataset, config }) {
	const altText = createAltTextForVersionsBarChart({
		dataset,
		config
	});
	await config.copy(altText);
}

/**
* Fetch download range data from npm API.
* Exported for external use (e.g., in components).
*/
async function fetchNpmDownloadsRange(packageName, start, end) {
	const { $npmApi } = useNuxtApp();
	return (await $npmApi(`/downloads/range/${start}:${end}/${encodePackageName(packageName)}`)).data;
}
var allVersionsCache = /* @__PURE__ */ new Map();
/**
* Fetch all versions of a package using fast-npm-meta API.
* Returns version info sorted by version (newest first).
* Results are cached to avoid duplicate requests.
*
* Note: This is a standalone async function for use in event handlers.
* For composable usage, use useAllPackageVersions instead.
*
* @see https://github.com/antfu/fast-npm-meta
*/
async function fetchAllPackageVersions(packageName) {
	const cached = allVersionsCache.get(packageName);
	if (cached) return cached;
	const promise = (async () => {
		const data = await getVersions(packageName, { metadata: true });
		return Object.entries(data.versionsMeta).map(([version, meta]) => ({
			version,
			time: meta.time,
			hasProvenance: meta.provenance === "trustedPublisher" || meta.provenance === true,
			deprecated: meta.deprecated
		})).sort((a, b) => compare(b.version, a.version));
	})();
	allVersionsCache.set(packageName, promise);
	return promise;
}

function getDependencyCount(version) {
	if (!version?.dependencies) return 0;
	return Object.keys(version.dependencies).length;
}
var _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
	const { mode = "replace", route = useRoute(), router = useRouter(), transform } = options;
	let transformGet = (value) => value;
	let transformSet = (value) => value;
	if (typeof transform === "function") transformGet = transform;
	else if (transform) {
		if (transform.get) transformGet = transform.get;
		if (transform.set) transformSet = transform.set;
	}
	if (!_queue.has(router)) _queue.set(router, /* @__PURE__ */ new Map());
	const _queriesQueue = _queue.get(router);
	let query = route.query[name];
	tryOnScopeDispose(() => {
		query = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return transformGet(query !== void 0 ? query : toValue(defaultValue));
			},
			set(v) {
				v = transformSet(v);
				if (query === v) return;
				query = v === toValue(defaultValue) ? void 0 : v;
				_queriesQueue.set(name, v === toValue(defaultValue) ? void 0 : v);
				trigger();
				nextTick(() => {
					if (_queriesQueue.size === 0) return;
					const newQueries = Object.fromEntries(_queriesQueue.entries());
					_queriesQueue.clear();
					const { params, query: query$1, hash } = route;
					router[toValue(mode)]({
						params,
						query: {
							...query$1,
							...newQueries
						},
						hash
					});
				});
			}
		};
	});
	watch(() => route.query[name], (v) => {
		if (query === transformGet(v)) return;
		query = v;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}
var CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CopyToClipboardButton",
	__ssrInlineRender: true,
	props: {
		copied: { type: Boolean },
		copyText: {},
		copiedText: {},
		ariaLabelCopy: {},
		ariaLabelCopied: {},
		buttonAttrs: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const { t: $t } = useI18n();
		const props = __props;
		const buttonCopyText = computed(() => props.copyText || $t("common.copy"));
		const buttonCopiedText = computed(() => props.copiedText || $t("common.copied"));
		const buttonAriaLabelCopy = computed(() => props.ariaLabelCopy || $t("common.copy"));
		const buttonAriaLabelCopied = computed(() => props.ariaLabelCopied || $t("common.copied"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative" }, _ctx.$attrs, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`<button${ssrRenderAttrs(mergeProps({
				type: "button",
				class: ["absolute z-20 inset-is-0 top-full inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-mono whitespace-nowrap transition-all duration-150 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:pointer-events-auto", [_ctx.$style.copyButton, __props.copied ? "text-accent bg-accent/10" : "text-fg-muted bg-bg border-border"]],
				"aria-label": __props.copied ? unref(buttonAriaLabelCopied) : unref(buttonAriaLabelCopy)
			}, __props.buttonAttrs))}><span class="${ssrRenderClass([__props.copied ? "i-lucide:check" : "i-lucide:copy", "w-3.5 h-3.5"])}" aria-hidden="true"></span> ${ssrInterpolate(__props.copied ? unref(buttonCopiedText) : unref(buttonCopyText))}</button></div>`);
		};
	}
});
var CopyToClipboardButton_vue_vue_type_style_index_0_lang_module_default = { copyButton: "_copyButton_1f7a8_2" };
var cssModules = { "$style": CopyToClipboardButton_vue_vue_type_style_index_0_lang_module_default };
var _sfc_setup$1 = CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default.setup;
CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CopyToClipboardButton.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var CopyToClipboardButton_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(CopyToClipboardButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]), { __name: "CopyToClipboardButton" });
function readCssVariable(element, variableName) {
	return getComputedStyle(element).getPropertyValue(variableName).trim();
}
function toCamelCase(cssVariable) {
	return cssVariable.replace(/^--/, "").replace(/-([a-z0-9])/gi, (_, c) => c.toUpperCase());
}
function resolveElement(element) {
	return null;
}
/**
* Read multiple CSS custom properties at once and expose them as a reactive object.
*
* Each CSS variable name is normalized into a camelCase key:
* - Leading `--` is removed
* - kebab-case is converted to camelCase
*
* Example:
* ```ts
* useCssVariables(['--bg', '--fg-subtle'])
* // => colors.value = { bg: '...', fgSubtle: '...' }
* ```
*
* The returned values are always resolved via `getComputedStyle`, meaning the
* effective value is returned (after cascade, theme classes, etc.).
*
* Reactivity behavior:
* - Updates automatically when the observed element changes
* - Can react to theme toggles via `watchHtmlAttributes`
* - Can react to responsive CSS variables via `watchResize`
*
* @param variables - List of CSS variable names (must include the leading `--`)
* @param options - Configuration options
* @param options.element - Element to read variables from (defaults to `:root`)
* @param options.watchResize - Re-evaluate values on resize (useful for media-query-driven variables)
* @param options.watchHtmlAttributes - Re-evaluate values when `<html>` attributes change
*
* @returns An object containing a reactive `colors` map, keyed by camelCase names
*/
function useCssVariables(variables, options = {}) {
	const isClientSupported = useSupported(() => false);
	const elementComputed = computed(() => resolveElement(options.element));
	const colors = computed(() => {
		const element = elementComputed.value;
		if (!element) return {};
		const result = {};
		for (const variable of variables) result[toCamelCase(variable)] = readCssVariable(element, variable);
		return result;
	});
	if (options.watchResize) useResizeObserver(elementComputed, () => void colors.value);
	if (options.watchHtmlAttributes && isClientSupported.value) useMutationObserver((void 0).documentElement, () => void colors.value, {
		attributes: true,
		attributeFilter: [
			"class",
			"style",
			"data-theme",
			"data-bg-theme"
		]
	});
	return { colors };
}
/**
* Lighten an OKLCH color by a given factor.
*
* Works with strict TypeScript settings including `noUncheckedIndexedAccess`,
* where `match[n]` is typed as `string | undefined`.
*
* @param oklch - Color in the form "oklch(L C H)" or "oklch(L C H / A)"
* @param factor - Lightening force in range [0, 1]
* @returns Lightened OKLCH color string (0.5 = 50% lighter)
*/
function lightenOklch(oklch, factor) {
	if (oklch == null) return oklch;
	const match = oklch.trim().match(/^oklch\(\s*([+-]?[\d.]+%?)\s+([+-]?[\d.]+)\s+([+-]?[\d.]+)(?:\s*\/\s*([+-]?[\d.]+%?))?\s*\)$/i);
	if (!match) throw new Error("Invalid OKLCH color format");
	const [, lightnessText, chromaText, hueText, alphaText] = match;
	if (lightnessText === void 0 || chromaText === void 0 || hueText === void 0) throw new Error("Invalid OKLCH color format");
	let lightness = lightnessText.endsWith("%") ? Number.parseFloat(lightnessText) / 100 : Number.parseFloat(lightnessText);
	let chroma = Number.parseFloat(chromaText);
	const hue = Number.parseFloat(hueText);
	const alpha = alphaText === void 0 ? null : alphaText.endsWith("%") ? Number.parseFloat(alphaText) / 100 : Number.parseFloat(alphaText);
	const clampedFactor = Math.min(Math.max(factor, 0), 1);
	lightness = lightness + (1 - lightness) * clampedFactor;
	chroma = chroma * (1 - clampedFactor * .3);
	lightness = Math.min(Math.max(lightness, 0), 1);
	chroma = Math.max(chroma, 0);
	return alpha === null ? `oklch(${lightness} ${chroma} ${hue})` : `oklch(${lightness} ${chroma} ${hue} / ${alpha})`;
}
/**
* Make an OKLCH color transparent by a given factor.
*
* @param oklch - Color in the form "oklch(L C H)" or "oklch(L C H / A)"
* @param factor - Transparency factor in range [0, 1]
* @returns OKLCH color string with adjusted alpha (0.5 = 50% transparency, 1 = fully transparent)
*/
function transparentizeOklch(oklch, factor, fallback = "oklch(0 0 0 / 0)") {
	if (oklch == null) return fallback;
	const input = oklch.trim();
	if (!input) return fallback;
	const match = input.match(/^oklch\(\s*([+-]?[\d.]+%?)\s+([+-]?[\d.]+)\s+([+-]?[\d.]+)(?:\s*\/\s*([+-]?[\d.]+%?))?\s*\)$/i);
	if (!match) return fallback;
	const [, lightnessText, chromaText, hueText, alphaText] = match;
	if (lightnessText === void 0 || chromaText === void 0 || hueText === void 0) return fallback;
	const lightness = lightnessText.endsWith("%") ? Math.min(Math.max(Number.parseFloat(lightnessText) / 100, 0), 1) : Math.min(Math.max(Number.parseFloat(lightnessText), 0), 1);
	const chroma = Math.max(0, Number.parseFloat(chromaText));
	const hue = Number.parseFloat(hueText);
	const originalAlpha = alphaText === void 0 ? 1 : alphaText.endsWith("%") ? Math.min(Math.max(Number.parseFloat(alphaText) / 100, 0), 1) : Math.min(Math.max(Number.parseFloat(alphaText), 0), 1);
	const clampedFactor = Math.min(Math.max(factor, 0), 1);
	return `oklch(${lightness} ${chroma} ${hue} / ${Math.max(0, originalAlpha * (1 - clampedFactor))})`;
}
/**
* Bidirectional moving average. Blends a trailing (left-anchored) and leading
* (right-anchored) average by position so transitions from both fixed endpoints
* are smooth.
* First and last points are preserved.
*
* @param halfWindow - number of points on each side (0 = disabled)
*/
function movingAverage(data, halfWindow) {
	if (halfWindow <= 0 || data.length < 3) return data;
	const n = data.length;
	const trailing = Array.from({ length: n });
	for (let i = 0; i < n; i++) {
		const lo = Math.max(0, i - halfWindow);
		let sum = 0;
		for (let j = lo; j <= i; j++) sum += data[j].value;
		trailing[i] = sum / (i - lo + 1);
	}
	const leading = Array.from({ length: n });
	for (let i = 0; i < n; i++) {
		const hi = Math.min(n - 1, i + halfWindow);
		let sum = 0;
		for (let j = i; j <= hi; j++) sum += data[j].value;
		leading[i] = sum / (hi - i + 1);
	}
	const result = data.map((d) => ({ ...d }));
	for (let i = 1; i < n - 1; i++) {
		const t = i / (n - 1);
		result[i].value = (1 - t) * trailing[i] + t * leading[i];
	}
	return result;
}
/**
* Forward-backward exponential smoothing (zero-phase).
* Smooths without introducing lag — preserves the dynamics/timing of trends.
* First and last points are preserved.
*
* @param tau - time constant (0 = disabled, higher = smoother)
*/
function smoothing(data, tau) {
	if (tau <= 0 || data.length < 3) return data;
	const alpha = 1 / (1 + tau);
	const n = data.length;
	const forward = Array.from({ length: n });
	forward[0] = data[0].value;
	for (let i = 1; i < n; i++) forward[i] = alpha * data[i].value + (1 - alpha) * forward[i - 1];
	const backward = Array.from({ length: n });
	backward[n - 1] = data[n - 1].value;
	for (let i = n - 2; i >= 0; i--) backward[i] = alpha * data[i].value + (1 - alpha) * backward[i + 1];
	const result = data.map((d) => ({ ...d }));
	for (let i = 1; i < n - 1; i++) {
		const t = i / (n - 1);
		result[i].value = (1 - t) * forward[i] + t * backward[i];
	}
	return result;
}
/**
* Applies moving average then smoothing in sequence.
*/
function applyDataCorrection(data, settings) {
	let result = data;
	result = movingAverage(result, settings.averageWindow);
	result = smoothing(result, settings.smoothingTau);
	return result;
}
const DOWNLOAD_ANOMALIES = [{
	packageName: "vite",
	start: {
		date: "2025-08-04",
		weeklyDownloads: 33913132
	},
	end: {
		date: "2025-09-08",
		weeklyDownloads: 38665727
	}
}];
function getDateString(point, granularity) {
	switch (granularity) {
		case "daily": return point.day;
		case "weekly": return point.weekStart;
		case "monthly": return `${point.month}-01`;
		case "yearly": return `${point.year}-01-01`;
	}
}
/**
* For daily/weekly the point date falls strictly between the anomaly bounds.
* For monthly/yearly the anomaly bounds are truncated to the same resolution
* so that any period overlapping the anomaly is caught (inclusive).
*/
function isDateAffected(date, anomaly, granularity) {
	switch (granularity) {
		case "daily":
		case "weekly": return date > anomaly.start.date && date < anomaly.end.date;
		case "monthly": {
			const startMonth = anomaly.start.date.slice(0, 7) + "-01";
			const endMonth = anomaly.end.date.slice(0, 7) + "-01";
			return date >= startMonth && date <= endMonth;
		}
		case "yearly": {
			const startYear = anomaly.start.date.slice(0, 4) + "-01-01";
			const endYear = anomaly.end.date.slice(0, 4) + "-01-01";
			return date >= startYear && date <= endYear;
		}
	}
}
function scaleWeeklyValue(weeklyValue, granularity) {
	switch (granularity) {
		case "daily": return Math.round(weeklyValue / 7);
		case "weekly": return weeklyValue;
		case "monthly": return Math.round(weeklyValue / 7 * 30);
		case "yearly": return Math.round(weeklyValue / 7 * 365);
	}
}
function getAnomaliesForPackages(packageNames) {
	return DOWNLOAD_ANOMALIES.filter((a) => packageNames.includes(a.packageName)).map((a) => ({
		packageName: a.packageName,
		start: a.start.date,
		end: a.end.date
	}));
}
function applyBlocklistCorrection(opts) {
	const { data, packageName, granularity } = opts;
	const anomalies = DOWNLOAD_ANOMALIES.filter((a) => a.packageName === packageName);
	if (!anomalies.length) return data;
	const result = data.map((d) => ({ ...d }));
	for (const anomaly of anomalies) {
		const affectedIndices = [];
		for (let i = 0; i < result.length; i++) if (isDateAffected(getDateString(result[i], granularity), anomaly, granularity)) affectedIndices.push(i);
		if (!affectedIndices.length) continue;
		const firstAffected = affectedIndices[0];
		const lastAffected = affectedIndices[affectedIndices.length - 1];
		const scaledStart = scaleWeeklyValue(anomaly.start.weeklyDownloads, granularity);
		const scaledEnd = scaleWeeklyValue(anomaly.end.weeklyDownloads, granularity);
		const startVal = firstAffected > 0 ? result[firstAffected - 1].value : scaledStart;
		const endVal = lastAffected < result.length - 1 ? result[lastAffected + 1].value : scaledEnd;
		const count = affectedIndices.length;
		for (let i = 0; i < count; i++) {
			const t = (i + 1) / (count + 1);
			result[affectedIndices[i]].value = Math.round(startVal + t * (endVal - startVal));
		}
	}
	return result;
}
function toIsoDateString(date) {
	return date.toISOString().slice(0, 10);
}
function addDays(date, days) {
	const updatedDate = new Date(date);
	updatedDate.setUTCDate(updatedDate.getUTCDate() + days);
	return updatedDate;
}
function startOfUtcMonth(date) {
	return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}
function startOfUtcYear(date) {
	return new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
}
function parseIsoDateOnly(value) {
	return /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`);
}
function formatIsoDateOnly(date) {
	return date.toISOString().slice(0, 10);
}
function differenceInUtcDaysInclusive(startIso, endIso) {
	const start = parseIsoDateOnly(startIso);
	const end = parseIsoDateOnly(endIso);
	return Math.floor((end.getTime() - start.getTime()) / 864e5) + 1;
}
function splitIsoRangeIntoChunksInclusive(startIso, endIso, maximumDaysPerRequest) {
	if (differenceInUtcDaysInclusive(startIso, endIso) <= maximumDaysPerRequest) return [{
		startIso,
		endIso
	}];
	const chunks = [];
	let cursorStart = parseIsoDateOnly(startIso);
	const finalEnd = parseIsoDateOnly(endIso);
	while (cursorStart.getTime() <= finalEnd.getTime()) {
		const cursorEnd = addDays(cursorStart, maximumDaysPerRequest - 1);
		const actualEnd = cursorEnd.getTime() < finalEnd.getTime() ? cursorEnd : finalEnd;
		chunks.push({
			startIso: formatIsoDateOnly(cursorStart),
			endIso: formatIsoDateOnly(actualEnd)
		});
		cursorStart = addDays(actualEnd, 1);
	}
	return chunks;
}
function mergeDailyPoints(points) {
	const valuesByDay = /* @__PURE__ */ new Map();
	for (const point of points) valuesByDay.set(point.day, (valuesByDay.get(point.day) ?? 0) + point.value);
	return Array.from(valuesByDay.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([day, value]) => ({
		day,
		value
	}));
}
function buildDailyEvolutionFromDaily(daily) {
	return daily.slice().sort((a, b) => a.day.localeCompare(b.day)).map((item) => {
		const timestamp = parseIsoDateOnly(item.day).getTime();
		return {
			day: item.day,
			value: item.value,
			timestamp
		};
	});
}
function buildRollingWeeklyEvolutionFromDaily(daily, rangeStartIso, rangeEndIso) {
	const sorted = daily.slice().sort((a, b) => a.day.localeCompare(b.day));
	const rangeStartDate = parseIsoDateOnly(rangeStartIso);
	const rangeEndDate = parseIsoDateOnly(rangeEndIso);
	const groupedByIndex = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const itemDate = parseIsoDateOnly(item.day);
		const dayOffset = Math.floor((itemDate.getTime() - rangeStartDate.getTime()) / 864e5);
		if (dayOffset < 0) continue;
		const weekIndex = Math.floor(dayOffset / 7);
		groupedByIndex.set(weekIndex, (groupedByIndex.get(weekIndex) ?? 0) + item.value);
	}
	return Array.from(groupedByIndex.entries()).sort(([a], [b]) => a - b).map(([weekIndex, value]) => {
		const weekStartDate = addDays(rangeStartDate, weekIndex * 7);
		const weekEndDate = addDays(weekStartDate, 6);
		const clampedWeekEndDate = weekEndDate.getTime() > rangeEndDate.getTime() ? rangeEndDate : weekEndDate;
		const weekStartIso = toIsoDateString(weekStartDate);
		const weekEndIso = toIsoDateString(clampedWeekEndDate);
		const timestampStart = weekStartDate.getTime();
		const timestampEnd = clampedWeekEndDate.getTime();
		return {
			value,
			weekKey: `${weekStartIso}_${weekEndIso}`,
			weekStart: weekStartIso,
			weekEnd: weekEndIso,
			timestampStart,
			timestampEnd
		};
	});
}
function buildMonthlyEvolutionFromDaily(daily) {
	const sorted = daily.slice().sort((a, b) => a.day.localeCompare(b.day));
	const valuesByMonth = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const month = item.day.slice(0, 7);
		valuesByMonth.set(month, (valuesByMonth.get(month) ?? 0) + item.value);
	}
	return Array.from(valuesByMonth.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([month, value]) => {
		return {
			month,
			value,
			timestamp: parseIsoDateOnly(`${month}-01`).getTime()
		};
	});
}
function buildYearlyEvolutionFromDaily(daily) {
	const sorted = daily.slice().sort((a, b) => a.day.localeCompare(b.day));
	const valuesByYear = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const year = item.day.slice(0, 4);
		valuesByYear.set(year, (valuesByYear.get(year) ?? 0) + item.value);
	}
	return Array.from(valuesByYear.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([year, value]) => {
		return {
			year,
			value,
			timestamp: parseIsoDateOnly(`${year}-01-01`).getTime()
		};
	});
}
function pad2(value) {
	return value.toString().padStart(2, "0");
}
function toIsoMonthKey(date) {
	return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}`;
}
function isOverlappingRange(start, end, rangeStart, rangeEnd) {
	return end.getTime() >= rangeStart.getTime() && start.getTime() <= rangeEnd.getTime();
}
function buildWeeklyEvolutionFromContributorCounts(weeklyCounts, rangeStart, rangeEnd) {
	return Array.from(weeklyCounts.entries()).sort(([a], [b]) => a - b).map(([weekStartSeconds, value]) => {
		const weekStartDate = /* @__PURE__ */ new Date(weekStartSeconds * 1e3);
		const weekEndDate = addDays(weekStartDate, 6);
		if (!isOverlappingRange(weekStartDate, weekEndDate, rangeStart, rangeEnd)) return null;
		const clampedWeekEndDate = weekEndDate.getTime() > rangeEnd.getTime() ? rangeEnd : weekEndDate;
		const weekStartIso = toIsoDateString(weekStartDate);
		const weekEndIso = toIsoDateString(clampedWeekEndDate);
		return {
			value,
			weekKey: `${weekStartIso}_${weekEndIso}`,
			weekStart: weekStartIso,
			weekEnd: weekEndIso,
			timestampStart: weekStartDate.getTime(),
			timestampEnd: clampedWeekEndDate.getTime()
		};
	}).filter((item) => Boolean(item));
}
function buildMonthlyEvolutionFromContributorCounts(monthlyCounts, rangeStart, rangeEnd) {
	return Array.from(monthlyCounts.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([month, value]) => {
		const [year, monthNumber] = month.split("-").map(Number);
		if (!year || !monthNumber) return null;
		const monthStartDate = new Date(Date.UTC(year, monthNumber - 1, 1));
		if (!isOverlappingRange(monthStartDate, new Date(Date.UTC(year, monthNumber, 0)), rangeStart, rangeEnd)) return null;
		return {
			month,
			value,
			timestamp: monthStartDate.getTime()
		};
	}).filter((item) => Boolean(item));
}
function buildYearlyEvolutionFromContributorCounts(yearlyCounts, rangeStart, rangeEnd) {
	return Array.from(yearlyCounts.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([year, value]) => {
		const yearNumber = Number(year);
		if (!yearNumber) return null;
		const yearStartDate = new Date(Date.UTC(yearNumber, 0, 1));
		if (!isOverlappingRange(yearStartDate, new Date(Date.UTC(yearNumber, 11, 31)), rangeStart, rangeEnd)) return null;
		return {
			year,
			value,
			timestamp: yearStartDate.getTime()
		};
	}).filter((item) => Boolean(item));
}
function buildContributorCounts(stats) {
	const weeklyCounts = /* @__PURE__ */ new Map();
	const monthlyCounts = /* @__PURE__ */ new Map();
	const yearlyCounts = /* @__PURE__ */ new Map();
	for (const contributor of stats ?? []) {
		const monthSet = /* @__PURE__ */ new Set();
		const yearSet = /* @__PURE__ */ new Set();
		for (const week of contributor?.weeks ?? []) {
			if (!week || week.c <= 0) continue;
			weeklyCounts.set(week.w, (weeklyCounts.get(week.w) ?? 0) + 1);
			const weekStartDate = /* @__PURE__ */ new Date(week.w * 1e3);
			monthSet.add(toIsoMonthKey(weekStartDate));
			yearSet.add(String(weekStartDate.getUTCFullYear()));
		}
		for (const key of monthSet) monthlyCounts.set(key, (monthlyCounts.get(key) ?? 0) + 1);
		for (const key of yearSet) yearlyCounts.set(key, (yearlyCounts.get(key) ?? 0) + 1);
	}
	return {
		weeklyCounts,
		monthlyCounts,
		yearlyCounts
	};
}
async function fetchDailyRangeCached(packageName, startIso, endIso) {
	return [...(await fetchNpmDownloadsRange(packageName, startIso, endIso)).downloads].sort((a, b) => a.day.localeCompare(b.day)).map((d) => ({
		day: d.day,
		value: d.downloads
	}));
}
/**
* API limit workaround:
* If the requested range is larger than the API allows (≈18 months),
* split into multiple requests, then merge/sum by day.
*/
async function fetchDailyRangeChunked(packageName, startIso, endIso) {
	const ranges = splitIsoRangeIntoChunksInclusive(startIso, endIso, 540);
	if (ranges.length === 1) return fetchDailyRangeCached(packageName, startIso, endIso);
	const all = [];
	for (const range of ranges) {
		const part = await fetchDailyRangeCached(packageName, range.startIso, range.endIso);
		all.push(...part);
	}
	return mergeDailyPoints(all);
}
function toDateOnly(value) {
	if (!value) return null;
	const dateOnly = value.slice(0, 10);
	return /^\d{4}-\d{2}-\d{2}$/.test(dateOnly) ? dateOnly : null;
}
function getNpmPackageCreationDate(packument) {
	const time = packument.time;
	if (!time) return null;
	if (time.created) return time.created;
	return Object.entries(time).filter(([key, value]) => key !== "modified" && key !== "created" && Boolean(value)).map(([, value]) => value).sort((a, b) => a.localeCompare(b))[0] ?? null;
}
function useCharts() {
	function resolveDateRange(evolutionOptions, packageCreatedIso) {
		const today = /* @__PURE__ */ new Date();
		const yesterday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1));
		const endDateOnly = toDateOnly(evolutionOptions.endDate);
		const end = endDateOnly ? parseIsoDateOnly(endDateOnly) : yesterday;
		const startDateOnly = toDateOnly(evolutionOptions.startDate);
		if (startDateOnly) return {
			start: parseIsoDateOnly(startDateOnly),
			end
		};
		let start;
		if (evolutionOptions.granularity === "year") if (packageCreatedIso) start = startOfUtcYear(new Date(packageCreatedIso));
		else start = addDays(end, -1824);
		else if (evolutionOptions.granularity === "month") {
			const monthCount = evolutionOptions.months ?? 12;
			const firstOfThisMonth = startOfUtcMonth(end);
			start = new Date(Date.UTC(firstOfThisMonth.getUTCFullYear(), firstOfThisMonth.getUTCMonth() - (monthCount - 1), 1));
		} else if (evolutionOptions.granularity === "week") start = addDays(end, -((evolutionOptions.weeks ?? 52) * 7) + 1);
		else start = addDays(end, -29);
		return {
			start,
			end
		};
	}
	async function fetchPackageDownloadEvolution(packageName, createdIso, evolutionOptions) {
		const resolvedPackageName = toValue(packageName);
		const resolvedCreatedIso = toValue(createdIso) ?? null;
		const resolvedOptions = toValue(evolutionOptions);
		const { start, end } = resolveDateRange(resolvedOptions, resolvedCreatedIso);
		const startIso = toIsoDateString(start);
		const endIso = toIsoDateString(end);
		const sortedDaily = await fetchDailyRangeChunked(resolvedPackageName, startIso, endIso);
		if (resolvedOptions.granularity === "day") return buildDailyEvolutionFromDaily(sortedDaily);
		if (resolvedOptions.granularity === "week") return buildRollingWeeklyEvolutionFromDaily(sortedDaily, startIso, endIso);
		if (resolvedOptions.granularity === "month") return buildMonthlyEvolutionFromDaily(sortedDaily);
		return buildYearlyEvolutionFromDaily(sortedDaily);
	}
	async function fetchPackageLikesEvolution(packageName, evolutionOptions) {
		const resolvedPackageName = toValue(packageName);
		const resolvedOptions = toValue(evolutionOptions);
		let dailyLikesPromise;
		{
			dailyLikesPromise = $fetch(`/api/social/likes-evolution/${resolvedPackageName}`).then((data) => (data ?? []).map((d) => ({
				day: d.day,
				value: d.likes
			}))).catch((error) => {
				throw error;
			});
		}
		const sortedDaily = await dailyLikesPromise;
		const { start, end } = resolveDateRange(resolvedOptions, null);
		const startIso = toIsoDateString(start);
		const endIso = toIsoDateString(end);
		const filteredDaily = sortedDaily.filter((d) => d.day >= startIso && d.day <= endIso);
		if (resolvedOptions.granularity === "day") return buildDailyEvolutionFromDaily(filteredDaily);
		if (resolvedOptions.granularity === "week") return buildRollingWeeklyEvolutionFromDaily(filteredDaily, startIso, endIso);
		if (resolvedOptions.granularity === "month") return buildMonthlyEvolutionFromDaily(filteredDaily);
		return buildYearlyEvolutionFromDaily(filteredDaily);
	}
	async function fetchRepoContributorsEvolution(repoRef, evolutionOptions) {
		const resolvedRepoRef = toValue(repoRef);
		if (!resolvedRepoRef || resolvedRepoRef.provider !== "github") return [];
		const resolvedOptions = toValue(evolutionOptions);
		`${resolvedRepoRef.owner}/${resolvedRepoRef.repo}`;
		let statsPromise;
		{
			statsPromise = $fetch(`/api/github/contributors-evolution/${resolvedRepoRef.owner}/${resolvedRepoRef.repo}`).then((data) => Array.isArray(data) ? data : []).catch((error) => {
				throw error;
			});
		}
		const stats = await statsPromise;
		const { start, end } = resolveDateRange(resolvedOptions, null);
		const { weeklyCounts, monthlyCounts, yearlyCounts } = buildContributorCounts(stats);
		if (resolvedOptions.granularity === "week") return buildWeeklyEvolutionFromContributorCounts(weeklyCounts, start, end);
		if (resolvedOptions.granularity === "month") return buildMonthlyEvolutionFromContributorCounts(monthlyCounts, start, end);
		if (resolvedOptions.granularity === "year") return buildYearlyEvolutionFromContributorCounts(yearlyCounts, start, end);
		return [];
	}
	async function fetchRepoRefsForPackages(packageNames) {
		(toValue(packageNames) ?? []).map((n) => String(n).trim()).filter(Boolean);
		return {};
	}
	return {
		fetchPackageDownloadEvolution,
		fetchPackageLikesEvolution,
		fetchRepoContributorsEvolution,
		fetchRepoRefsForPackages,
		getNpmPackageCreationDate
	};
}
/**
* Creates a computed property that uses route query parameters by default,
* with an option to use local state instead.
*/
function usePermalink(queryKey, defaultValue = "", options = {}) {
	const { permanent = true } = options;
	const localValue = shallowRef(defaultValue);
	const routeValue = useRouteQuery(queryKey, defaultValue);
	return computed({
		get: () => permanent ? routeValue.value : localValue.value,
		set: (value) => {
			if (permanent) routeValue.value = value;
			else localValue.value = value;
		}
	});
}
var mobileBreakpointWidth = 640;
var DEFAULT_GRANULARITY = "weekly";
var DEFAULT_METRIC_ID = "downloads";
var TrendsChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TrendsChart",
	__ssrInlineRender: true,
	props: {
		weeklyDownloads: {},
		inModal: { type: Boolean },
		packageName: {},
		packageNames: {},
		repoRef: {},
		createdIso: {},
		showFacetSelector: { type: Boolean },
		permalink: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const { locale } = useI18n();
		const { accentColors, selectedAccentColor } = useAccentColor();
		const { settings } = useSettings();
		const { copy} = useClipboard();
		const colorMode = useColorMode();
		const resolvedMode = shallowRef("light");
		const rootEl = shallowRef(null);
		const isZoomed = shallowRef(false);
		const { width } = useElementSize(rootEl);
		const compactNumberFormatter = useCompactNumberFormatter();
		const { colors } = useCssVariables([
			"--bg",
			"--fg",
			"--bg-subtle",
			"--bg-elevated",
			"--fg-subtle",
			"--fg-muted",
			"--border",
			"--border-subtle"
		], {
			element: rootEl,
			watchHtmlAttributes: true,
			watchResize: false
		});
		watch(() => colorMode.value, (value) => {
			resolvedMode.value = value === "dark" ? "dark" : "light";
		}, { flush: "sync" });
		const isDarkMode = computed(() => resolvedMode.value === "dark");
		const accentColorValueById = computed(() => {
			const map = {};
			for (const item of accentColors.value) map[item.id] = item.value;
			return map;
		});
		const accent = computed(() => {
			const id = selectedAccentColor.value;
			return id ? accentColorValueById.value[id] ?? colors.value.fgSubtle ?? "oklch(0.633 0 0)" : colors.value.fgSubtle ?? "oklch(0.633 0 0)";
		});
		computed(() => ({
			fg: colors.value.fg ?? "oklch(0.633 0 0)",
			bg: colors.value.bg ?? "oklch(0.633 0 0)",
			fgSubtle: colors.value.fgSubtle ?? "oklch(0.633 0 0)"
		}));
		const isMobile = computed(() => width.value > 0 && width.value < mobileBreakpointWidth);
		function isRecord(value) {
			return typeof value === "object" && value !== null;
		}
		function isWeeklyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "weekStart" in data[0] && "weekEnd" in data[0] && "value" in data[0];
		}
		function isDailyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "day" in data[0] && "value" in data[0];
		}
		function isMonthlyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "month" in data[0] && "value" in data[0];
		}
		function isYearlyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "year" in data[0] && "value" in data[0];
		}
		/**
		* Formats a single evolution dataset into the structure expected by `VueUiXy`
		* for single-series charts.
		*
		* The dataset is interpreted based on the selected time granularity:
		* - **daily**   → uses `timestamp`
		* - **weekly**  → uses `timestampEnd`
		* - **monthly** → uses `timestamp`
		* - **yearly**  → uses `timestamp`
		*
		* Only datasets matching the expected shape for the given granularity are
		* accepted. If the dataset does not match, an empty result is returned.
		*
		* The returned structure includes:
		* - a single line-series dataset with a consistent color
		* - a list of timestamps used as the x-axis values
		*
		* @param selectedGranularity - Active chart time granularity
		* @param dataset - Raw evolution dataset to format
		* @param seriesName - Display name for the resulting series
		* @returns An object containing a formatted dataset and its associated dates,
		*          or `{ dataset: null, dates: [] }` when the input is incompatible
		*/
		function formatXyDataset(selectedGranularity, dataset, seriesName) {
			const lightColor = isDarkMode.value ? lightenOklch(accent.value, .618) : void 0;
			const temperatureColors = lightColor ? [lightColor, accent.value] : void 0;
			const datasetItem = {
				name: seriesName,
				type: "line",
				series: dataset.map((d) => d.value),
				color: accent.value,
				temperatureColors,
				useArea: true
			};
			if (selectedGranularity === "weekly" && isWeeklyDataset(dataset)) return {
				dataset: [datasetItem],
				dates: dataset.map((d) => d.timestampEnd)
			};
			if (selectedGranularity === "daily" && isDailyDataset(dataset)) return {
				dataset: [datasetItem],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "monthly" && isMonthlyDataset(dataset)) return {
				dataset: [datasetItem],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "yearly" && isYearlyDataset(dataset)) return {
				dataset: [datasetItem],
				dates: dataset.map((d) => d.timestamp)
			};
			return {
				dataset: null,
				dates: []
			};
		}
		/**
		* Extracts normalized time-series points from an evolution dataset based on
		* the selected time granularity.
		*
		* Each returned point contains:
		* - `timestamp`: the numeric time value used for x-axis alignment
		* - `value`: the corresponding value at that time
		*
		* The timestamp field is selected according to granularity:
		* - **daily**   → `timestamp`
		* - **weekly**  → `timestampEnd`
		* - **monthly** → `timestamp`
		* - **yearly**  → `timestamp`
		*
		* If the dataset does not match the expected shape for the given granularity,
		* an empty array is returned.
		*
		* This helper is primarily used in multi-package mode to align multiple
		* datasets on a shared time axis.
		*
		* @param selectedGranularity - Active chart time granularity
		* @param dataset - Raw evolution dataset to extract points from
		* @returns An array of normalized `{ timestamp, value }` points
		*/
		function extractSeriesPoints(selectedGranularity, dataset) {
			if (selectedGranularity === "weekly" && isWeeklyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestampEnd,
				value: d.value
			}));
			if (selectedGranularity === "daily" && isDailyDataset(dataset) || selectedGranularity === "monthly" && isMonthlyDataset(dataset) || selectedGranularity === "yearly" && isYearlyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestamp,
				value: d.value
			}));
			return [];
		}
		function toIsoDateOnly(value) {
			return value.slice(0, 10);
		}
		function isValidIsoDateOnly(value) {
			return /^\d{4}-\d{2}-\d{2}$/.test(value);
		}
		function safeMin(a, b) {
			return a.localeCompare(b) <= 0 ? a : b;
		}
		function safeMax(a, b) {
			return a.localeCompare(b) >= 0 ? a : b;
		}
		/**
		* Multi-package mode detection:
		* packageNames has entries, and packageName is not set.
		*/
		const isMultiPackageMode = computed(() => {
			const names = (props.packageNames ?? []).map((n) => String(n).trim()).filter(Boolean);
			const single = String(props.packageName ?? "").trim();
			return names.length > 0 && !single;
		});
		const effectivePackageNames = computed(() => {
			if (isMultiPackageMode.value) return (props.packageNames ?? []).map((n) => String(n).trim()).filter(Boolean);
			const single = String(props.packageName ?? "").trim();
			return single ? [single] : [];
		});
		const { fetchPackageDownloadEvolution, fetchPackageLikesEvolution, fetchRepoContributorsEvolution} = useCharts();
		const repoRefsByPackage = shallowRef({});
		shallowRef(0);
		watch(() => effectivePackageNames.value, async (names) => {}, { immediate: true });
		const selectedGranularity = usePermalink("granularity", DEFAULT_GRANULARITY, { permanent: props.permalink });
		const displayedGranularity = shallowRef(DEFAULT_GRANULARITY);
		const isEndDateOnPeriodEnd = computed(() => {
			const g = selectedGranularity.value;
			if (g !== "monthly" && g !== "yearly") return false;
			const iso = String(endDate.value ?? "").slice(0, 10);
			if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
			const [year, month, day] = iso.split("-").map(Number);
			if (!year || !month || !day) return false;
			if (g === "monthly") return day === new Date(Date.UTC(year, month, 0)).getUTCDate();
			return month === 12 && day === 31;
		});
		const isEstimationGranularity = computed(() => displayedGranularity.value === "monthly" || displayedGranularity.value === "yearly");
		const supportsEstimation = computed(() => isEstimationGranularity.value && selectedMetric.value !== "contributors");
		computed(() => !pending.value && supportsEstimation.value);
		const startDate = usePermalink("start", "", { permanent: props.permalink });
		const endDate = usePermalink("end", "", { permanent: props.permalink });
		const hasUserEditedDates = shallowRef(false);
		/**
		* Initializes a default date range for multi-package mode using a fixed
		* 52-week rolling window.
		*
		* The range is computed in UTC to ensure consistent boundaries across
		* timezones:
		* - `endDate` is set to yesterday (UTC)
		* - `startDate` is set to the first day of the 52-week window ending yesterday
		*
		* This function is intended for multi-package comparisons where no explicit
		* date range or dataset-derived range is available.
		*
		* This function is a no-op when:
		* - the user has already edited the date range
		* - the code is running on the server
		* - the component is not in multi-package mode
		* - both `startDate` and `endDate` are already defined
		*/
		function initDateRangeForMultiPackageWeekly52() {
			if (hasUserEditedDates.value) return;
		}
		watch(() => (props.packageNames ?? []).length, () => {
			initDateRangeForMultiPackageWeekly52();
		}, { immediate: true });
		const initialStartDate = shallowRef("");
		const initialEndDate = shallowRef("");
		function setInitialRangeIfEmpty() {
			if (initialStartDate.value || initialEndDate.value) return;
			if (startDate.value) initialStartDate.value = startDate.value;
			if (endDate.value) initialEndDate.value = endDate.value;
		}
		watch([startDate, endDate], () => {
			if (startDate.value || endDate.value) hasUserEditedDates.value = true;
			setInitialRangeIfEmpty();
		}, {
			immediate: true,
			flush: "post"
		});
		const showResetButton = computed(() => {
			if (!initialStartDate.value && !initialEndDate.value) return false;
			return startDate.value !== initialStartDate.value || endDate.value !== initialEndDate.value;
		});
		const options = shallowRef({
			granularity: "week",
			weeks: 52
		});
		/**
		* Applies the current date range (`startDate` / `endDate`) to a base options
		* object, returning a new object augmented with validated date fields.
		*
		* Dates are normalized to `YYYY-MM-DD`, validated, and ordered to ensure
		* logical consistency:
		* - When both dates are valid, the earliest is assigned to `startDate` and
		*   the latest to `endDate`
		* - When only one valid date is present, only that boundary is applied
		* - Invalid or empty dates are omitted from the result
		*
		* The input object is not mutated.
		*
		* @typeParam T - Base options type to extend with date range fields
		* @param base - Base options object to which the date range should be applied
		* @returns A new options object including the applicable `startDate` and/or
		*          `endDate` fields
		*/
		function applyDateRange(base) {
			const next = { ...base };
			const start = startDate.value ? toIsoDateOnly(startDate.value) : "";
			const end = endDate.value ? toIsoDateOnly(endDate.value) : "";
			const validStart = start && isValidIsoDateOnly(start) ? start : "";
			const validEnd = end && isValidIsoDateOnly(end) ? end : "";
			if (validStart && validEnd) {
				next.startDate = safeMin(validStart, validEnd);
				next.endDate = safeMax(validStart, validEnd);
			} else {
				if (validStart) next.startDate = validStart;
				else delete next.startDate;
				if (validEnd) next.endDate = validEnd;
				else delete next.endDate;
			}
			return next;
		}
		const hasContributorsFacet = computed(() => {
			if (isMultiPackageMode.value) return Object.values(repoRefsByPackage.value).some((ref) => ref?.provider === "github");
			const ref = props.repoRef;
			return ref?.provider === "github" && ref.owner && ref.repo;
		});
		const METRICS = computed(() => {
			const metrics = [{
				id: "downloads",
				label: $t("package.trends.items.downloads"),
				fetch: ({ packageName }, opts) => fetchPackageDownloadEvolution(packageName, props.createdIso ?? null, opts),
				supportsMulti: true
			}, {
				id: "likes",
				label: $t("package.trends.items.likes"),
				fetch: ({ packageName }, opts) => fetchPackageLikesEvolution(packageName, opts),
				supportsMulti: true
			}];
			if (hasContributorsFacet.value) metrics.push({
				id: "contributors",
				label: $t("package.trends.items.contributors"),
				fetch: ({ repoRef }, opts) => fetchRepoContributorsEvolution(repoRef, opts),
				supportsMulti: true
			});
			return metrics;
		});
		const selectedMetric = usePermalink("facet", DEFAULT_METRIC_ID, { permanent: props.permalink });
		const effectivePackageNamesForMetric = computed(() => {
			if (!isMultiPackageMode.value) return effectivePackageNames.value;
			if (selectedMetric.value !== "contributors") return effectivePackageNames.value;
			return effectivePackageNames.value.filter((name) => repoRefsByPackage.value[name]?.provider === "github");
		});
		const skippedPackagesWithoutGitHub = computed(() => {
			if (!isMultiPackageMode.value) return [];
			if (selectedMetric.value !== "contributors") return [];
			if (!effectivePackageNames.value.length) return [];
			return effectivePackageNames.value.filter((name) => repoRefsByPackage.value[name]?.provider !== "github");
		});
		const availableGranularities = computed(() => {
			if (selectedMetric.value === "contributors") return [
				"weekly",
				"monthly",
				"yearly"
			];
			return [
				"daily",
				"weekly",
				"monthly",
				"yearly"
			];
		});
		watch(() => [selectedMetric.value, availableGranularities.value], () => {
			if (!availableGranularities.value.includes(selectedGranularity.value)) selectedGranularity.value = "weekly";
		}, { immediate: true });
		watch(() => METRICS.value, (metrics) => {
			if (!metrics.some((m) => m.id === selectedMetric.value)) selectedMetric.value = DEFAULT_METRIC_ID;
		}, { immediate: true });
		const metricStates = reactive({
			downloads: {
				pending: false,
				evolution: props.weeklyDownloads ?? [],
				evolutionsByPackage: {},
				requestToken: 0
			},
			likes: {
				pending: false,
				evolution: [],
				evolutionsByPackage: {},
				requestToken: 0
			},
			contributors: {
				pending: false,
				evolution: [],
				evolutionsByPackage: {},
				requestToken: 0
			}
		});
		const activeMetricState = computed(() => metricStates[selectedMetric.value]);
		const activeMetricDef = computed(() => METRICS.value.find((m) => m.id === selectedMetric.value) ?? METRICS.value[0]);
		const pending = computed(() => activeMetricState.value.pending);
		const isMounted = shallowRef(false);
		watch([
			selectedGranularity,
			startDate,
			endDate
		], ([granularityValue]) => {
			if (granularityValue === "daily") options.value = applyDateRange({ granularity: "day" });
			else if (granularityValue === "weekly") options.value = applyDateRange({
				granularity: "week",
				weeks: 52
			});
			else if (granularityValue === "monthly") options.value = applyDateRange({
				granularity: "month",
				months: 24
			});
			else options.value = applyDateRange({ granularity: "year" });
			if (!isMounted.value) return;
			effectivePackageNames.value;
			activeMetricState.value.pending = false;
		}, { immediate: true });
		/**
		* Fetches evolution data for a given metric based on the current granularity,
		* date range, and package selection.
		*
		* This function:
		* - runs only on the client
		* - supports both single-package and multi-package modes
		* - applies request de-duplication via a request token to avoid race conditions
		* - updates the appropriate reactive stores with fetched data
		* - manages the metric's `pending` loading state
		*/
		async function loadMetric(metricId) {}
		const fetchTriggerKey = computed(() => {
			const names = effectivePackageNames.value.join(",");
			const o = options.value;
			const repoKey = props.repoRef ? `${props.repoRef.provider}:${props.repoRef.owner}/${props.repoRef.repo}` : "";
			return [
				isMultiPackageMode.value ? "M" : "S",
				names,
				repoKey,
				String(props.createdIso ?? ""),
				String(o.granularity ?? ""),
				String("weeks" in o ? o.weeks ?? "" : ""),
				String("months" in o ? o.months ?? "" : ""),
				String("startDate" in o ? o.startDate ?? "" : ""),
				String("endDate" in o ? o.endDate ?? "" : "")
			].join("|");
		});
		watch(() => fetchTriggerKey.value, () => {}, { flush: "post" });
		watch(() => repoRefsByPackage.value, () => {}, { deep: true });
		const effectiveDataSingle = computed(() => {
			const state = activeMetricState.value;
			let data;
			if (selectedMetric.value === DEFAULT_METRIC_ID && displayedGranularity.value === DEFAULT_GRANULARITY && props.weeklyDownloads?.length) data = isWeeklyDataset(state.evolution) && state.evolution.length ? state.evolution : props.weeklyDownloads;
			else data = state.evolution;
			if (isDownloadsMetric.value && data.length) {
				const pkg = effectivePackageNames.value[0] ?? props.packageName ?? "";
				if (settings.value.chartFilter.anomaliesFixed) data = applyBlocklistCorrection({
					data,
					packageName: pkg,
					granularity: displayedGranularity.value
				});
				return applyDataCorrection(data, settings.value.chartFilter);
			}
			return data;
		});
		/**
		* Normalized chart data derived from the active metric's evolution datasets.
		*
		* Adapts its behavior based on the current mode:
		* - **Single-package mode**: formats via `formatXyDataset`
		* - **Multi-package mode**: merges datasets into a shared time axis
		
		* The returned structure matches the expectations of `VueUiXy`:
		* - `dataset`: array of series definitions, or `null` when no data is available
		* - `dates`: sorted list of timestamps used as the x-axis reference
		*
		* Returning `dataset: null` explicitly signals the absence of data and allows
		* the template to handle empty states without ambiguity.
		*/
		const chartData = computed(() => {
			if (!isMultiPackageMode.value) {
				const pkg = effectivePackageNames.value[0] ?? props.packageName ?? "";
				return formatXyDataset(displayedGranularity.value, effectiveDataSingle.value, pkg);
			}
			const state = activeMetricState.value;
			const names = effectivePackageNamesForMetric.value;
			const granularity = displayedGranularity.value;
			const timestampSet = /* @__PURE__ */ new Set();
			const pointsByPackage = /* @__PURE__ */ new Map();
			for (const pkg of names) {
				let data = state.evolutionsByPackage[pkg] ?? [];
				if (isDownloadsMetric.value && data.length) {
					if (settings.value.chartFilter.anomaliesFixed) data = applyBlocklistCorrection({
						data,
						packageName: pkg,
						granularity
					});
					data = applyDataCorrection(data, settings.value.chartFilter);
				}
				const points = extractSeriesPoints(granularity, data);
				pointsByPackage.set(pkg, points);
				for (const p of points) timestampSet.add(p.timestamp);
			}
			const dates = Array.from(timestampSet).sort((a, b) => a - b);
			if (!dates.length) return {
				dataset: null,
				dates: []
			};
			return {
				dataset: names.map((pkg) => {
					const points = pointsByPackage.get(pkg) ?? [];
					const map = /* @__PURE__ */ new Map();
					for (const p of points) map.set(p.timestamp, p.value);
					const item = {
						name: pkg,
						type: "line",
						series: dates.map((t) => map.get(t) ?? 0)
					};
					if (isListedFramework(pkg)) item.color = getFrameworkColor(pkg);
					return item;
				}),
				dates
			};
		});
		computed(() => {
			return chartData.value.dataset?.map((d) => {
				const lastValue = d.series.at(-1) ?? 0;
				const projectedLastValue = selectedMetric.value === "contributors" ? lastValue : extrapolateLastValue(lastValue);
				return {
					...d,
					series: [...d.series.slice(0, -1), projectedLastValue]
				};
			});
		});
		computed(() => Math.max(0, ...(chartData.value.dataset ?? []).map((d) => d.series.length)));
		const loadFile = (link, filename) => {
			const a = (void 0).createElement("a");
			a.href = link;
			a.download = filename;
			a.click();
			a.remove();
		};
		const datetimeFormatterOptions = computed(() => {
			return {
				daily: {
					year: "yyyy-MM-dd",
					month: "yyyy-MM-dd",
					day: "yyyy-MM-dd"
				},
				weekly: {
					year: "yyyy-MM-dd",
					month: "yyyy-MM-dd",
					day: "yyyy-MM-dd"
				},
				monthly: {
					year: "MMM yyyy",
					month: "MMM yyyy",
					day: "MMM yyyy"
				},
				yearly: {
					year: "yyyy",
					month: "yyyy",
					day: "yyyy"
				}
			}[selectedGranularity.value];
		});
		const sanitise = (value) => value.replace(/^@/, "").replace(/[\\/:"*?<>|]/g, "-").replace(/\//g, "-");
		function buildExportFilename(extension) {
			const g = selectedGranularity.value;
			const range = `${startDate.value}_${endDate.value}`;
			if (!isMultiPackageMode.value) return `${sanitise(effectivePackageNames.value[0] ?? props.packageName ?? "package")}-${g}_${range}.${extension}`;
			const names = effectivePackageNames.value;
			return `${sanitise((names.length === 1 ? names[0] : names.join("_")) ?? "")}-${g}_${range}.${extension}`;
		}
		const granularityLabels = computed(() => ({
			daily: $t("package.trends.granularity_daily"),
			weekly: $t("package.trends.granularity_weekly"),
			monthly: $t("package.trends.granularity_monthly"),
			yearly: $t("package.trends.granularity_yearly")
		}));
		function getGranularityLabel(granularity) {
			return granularityLabels.value[granularity];
		}
		const granularityItems = computed(() => availableGranularities.value.map((granularity) => ({
			label: granularityLabels.value[granularity],
			value: granularity
		})));
		function clampRatio(value) {
			if (value < 0) return 0;
			if (value > 1) return 1;
			return value;
		}
		/**
		* Convert a `YYYY-MM-DD` date to UTC timestamp representing the end of that day.
		* The returned timestamp corresponds to `23:59:59.999` in UTC
		*
		* @param endDateOnly - ISO-like date string (`YYYY-MM-DD`)
		* @returns The UTC timestamp in milliseconds for the end of the given day,
		* or `null` if the input is invalid.
		*/
		function endDateOnlyToUtcMs(endDateOnly) {
			if (!/^\d{4}-\d{2}-\d{2}$/.test(endDateOnly)) return null;
			const [y, m, d] = endDateOnly.split("-").map(Number);
			if (!y || !m || !d) return null;
			return Date.UTC(y, m - 1, d, 23, 59, 59, 999);
		}
		/**
		* Computes the UTC timestamp corresponding to the start of the time bucket
		* that contains the given timestamp.
		*
		* This function is used to derive period boundaries when computing completion
		* ratios or extrapolating values for partially completed periods.
		*
		* Bucket boundaries are defined in UTC:
		* - **monthly** : first day of the month at `00:00:00.000` UTC
		* - **yearly** : January 1st of the year at `00:00:00.000` UTC
		*
		* @param timestampMs - Reference timestamp in milliseconds
		* @param granularity - Bucket granularity (`monthly` or `yearly`)
		* @returns The UTC timestamp representing the start of the corresponding
		* time bucket.
		*/
		function getBucketStartUtc(timestampMs, granularity) {
			const date = new Date(timestampMs);
			if (granularity === "yearly") return Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
			return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1, 0, 0, 0, 0);
		}
		/**
		* Computes the UTC timestamp corresponding to the end of the time
		* bucket that contains the given timestamp. This end timestamp is paired with `getBucketStartUtc` to define
		* a half-open interval `[start, end)` when computing elapsed time or completion
		* ratios within a period.
		*
		* Bucket boundaries are defined in UTC and are **exclusive**:
		* - **monthly** : first day of the following month at `00:00:00.000` UTC
		* - **yearly** : January 1st of the following year at `00:00:00.000` UTC
		*
		* @param timestampMs - Reference timestamp in milliseconds
		* @param granularity - Bucket granularity (`monthly` or `yearly`)
		* @returns The UTC timestamp (in milliseconds) representing the exclusive end
		* of the corresponding time bucket.
		*/
		function getBucketEndUtc(timestampMs, granularity) {
			const date = new Date(timestampMs);
			if (granularity === "yearly") return Date.UTC(date.getUTCFullYear() + 1, 0, 1, 0, 0, 0, 0);
			return Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1, 0, 0, 0, 0);
		}
		/**
		* Computes the completion ratio of a time bucket relative to a reference time.
		*
		* The ratio represents how much of the bucket’s duration has elapsed at
		* `referenceMs`, expressed as a normalized value in the range `[0, 1]`.
		*
		* The bucket is defined by the calendar period (monthly or yearly) that
		* contains `bucketTimestampMs`, using UTC boundaries:
		* - start: `getBucketStartUtc(...)`
		* - end: `getBucketEndUtc(...)`
		*
		* The returned value is clamped to `[0, 1]`:
		* - `0`: reference time is at or before the start of the bucket
		* - `1`: reference time is at or after the end of the bucket
		*
		* This function is used to detect partially completed periods and to
		* extrapolate full period values from partial data.
		*
		* @param params.bucketTimestampMs - Timestamp belonging to the bucket
		* @param params.granularity - Bucket granularity (`monthly` or `yearly`)
		* @param params.referenceMs - Reference timestamp used to measure progress
		* @returns A normalized completion ratio in the range `[0, 1]`.
		*/
		function getCompletionRatioForBucket(params) {
			const start = getBucketStartUtc(params.bucketTimestampMs, params.granularity);
			const total = getBucketEndUtc(params.bucketTimestampMs, params.granularity) - start;
			if (total <= 0) return 1;
			return clampRatio((params.referenceMs - start) / total);
		}
		/**
		* Extrapolate the last observed value of a time series when the last bucket
		* (month or year) is only partially complete.
		*
		* This is used to replace the final value in each `VueUiXy` series
		* before rendering, so the chart can display an estimated full-period value
		* for the current month or year.
		*
		* Notes:
		* - This function assumes `lastValue` is the value corresponding to the last
		*   date in `chartData.value.dates`
		*
		* @param lastValue - The last observed numeric value for a series.
		* @returns The extrapolated value for partially completed monthly or yearly granularities,
		* or the original `lastValue` when no extrapolation should be applied.
		*/
		function extrapolateLastValue(lastValue) {
			if (selectedMetric.value === "contributors") return lastValue;
			if (displayedGranularity.value !== "monthly" && displayedGranularity.value !== "yearly") return lastValue;
			const referenceMs = (endDate.value ? endDateOnlyToUtcMs(endDate.value) : null) ?? Date.now();
			const completionRatio = getCompletionRatioForBucket({
				bucketTimestampMs: chartData.value.dates.at(-1) ?? 0,
				granularity: displayedGranularity.value,
				referenceMs
			});
			if (!(completionRatio > 0 && completionRatio < 1)) return lastValue;
			const extrapolatedValue = lastValue / completionRatio;
			if (!Number.isFinite(extrapolatedValue)) return lastValue;
			return extrapolatedValue;
		}
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "",
				chart: {
					height: isMobile.value ? 950 : 600,
					backgroundColor: colors.value.bg,
					padding: {
						bottom: displayedGranularity.value === "yearly" ? 84 : 64,
						right: 128
					},
					userOptions: {
						buttons: {
							pdf: false,
							labels: false,
							fullscreen: false,
							table: false,
							tooltip: false,
							altCopy: true
						},
						buttonTitles: {
							csv: $t("package.trends.download_file", { fileType: "CSV" }),
							img: $t("package.trends.download_file", { fileType: "PNG" }),
							svg: $t("package.trends.download_file", { fileType: "SVG" }),
							annotator: $t("package.trends.toggle_annotator"),
							stack: $t("package.trends.toggle_stack_mode"),
							altCopy: $t("package.trends.copy_alt.button_label")
						},
						callbacks: {
							img: (args) => {
								const imageUri = args?.imageUri;
								if (!imageUri) return;
								loadFile(imageUri, buildExportFilename("png"));
							},
							csv: (csvStr) => {
								if (!csvStr) return;
								const PLACEHOLDER_CHAR = "\0";
								const multilineDateTemplate = $t("package.trends.date_range_multiline", {
									start: PLACEHOLDER_CHAR,
									end: PLACEHOLDER_CHAR
								}).replaceAll(PLACEHOLDER_CHAR, "").trim();
								const blob = new Blob([csvStr.replace("data:text/csv;charset=utf-8,", "").replaceAll(`\n${multilineDateTemplate}`, ` ${multilineDateTemplate}`)]);
								const url = URL.createObjectURL(blob);
								loadFile(url, buildExportFilename("csv"));
								URL.revokeObjectURL(url);
							},
							svg: (args) => {
								const blob = args?.blob;
								if (!blob) return;
								const url = URL.createObjectURL(blob);
								loadFile(url, buildExportFilename("svg"));
								URL.revokeObjectURL(url);
							},
							altCopy: ({ dataset: dst, config: cfg }) => copyAltTextForTrendLineChart({
								dataset: dst,
								config: {
									...cfg,
									formattedDatasetValues: (dst?.lines || []).map((d) => d.series.map((n) => compactNumberFormatter.value.format(n ?? 0))),
									hasEstimation: supportsEstimation.value && !isEndDateOnPeriodEnd.value && !isZoomed.value,
									granularity: displayedGranularity.value,
									copy,
									$t,
									numberFormatter: compactNumberFormatter.value.format
								}
							})
						}
					},
					grid: {
						stroke: colors.value.border,
						showHorizontalLines: true,
						labels: {
							fontSize: isMobile.value ? 24 : 16,
							color: pending.value ? colors.value.border : colors.value.fgSubtle,
							axis: {
								yLabel: $t("package.trends.y_axis_label", {
									granularity: getGranularityLabel(selectedGranularity.value),
									facet: activeMetricDef.value?.label
								}),
								yLabelOffsetX: 12,
								fontSize: isMobile.value ? 32 : 24
							},
							xAxisLabels: {
								show: true,
								showOnlyAtModulo: true,
								modulo: 12,
								values: chartData.value?.dates,
								datetimeFormatter: {
									enable: true,
									locale: locale.value,
									useUTC: true,
									options: datetimeFormatterOptions.value
								}
							},
							yAxis: {
								formatter: ({ value }) => {
									return compactNumberFormatter.value.format(Number.isFinite(value) ? value : 0);
								},
								useNiceScale: true,
								gap: 24
							}
						}
					},
					timeTag: {
						show: true,
						backgroundColor: colors.value.bgElevated,
						color: colors.value.fg,
						fontSize: 16,
						circleMarker: {
							radius: 3,
							color: colors.value.border
						},
						useDefaultFormat: true,
						timeFormat: "yyyy-MM-dd HH:mm:ss"
					},
					highlighter: { useLine: true },
					legend: {
						show: false,
						position: "top"
					},
					tooltip: {
						teleportTo: props.inModal ? "#chart-modal" : void 0,
						borderColor: "transparent",
						backdropFilter: false,
						backgroundColor: "transparent",
						customFormat: ({ datapoint: items }) => {
							if (!items || pending.value) return "";
							const hasMultipleItems = items.length > 1;
							const rows = items.map((d) => {
								const label = String(d?.name ?? "").trim();
								const raw = Number(d?.value ?? 0);
								const v = compactNumberFormatter.value.format(Number.isFinite(raw) ? raw : 0);
								if (!hasMultipleItems) return `<div>
                  <span class="text-base text-[var(--fg)] font-mono tabular-nums">${v}</span>
                </div>`;
								return `<div class="grid grid-cols-[12px_minmax(0,1fr)_max-content] items-center gap-x-3">
                <div class="w-3 h-3">
                  <svg viewBox="0 0 2 2" class="w-full h-full">
                    <rect x="0" y="0" width="2" height="2" rx="0.3" fill="${d.color}" />
                  </svg>
                </div>

                <span class="text-3xs uppercase tracking-wide text-[var(--fg)]/70 truncate">
                  ${label}
                </span>

                <span class="text-base text-[var(--fg)] font-mono tabular-nums text-end">
                  ${v}
                </span>
              </div>`;
							}).join("");
							return `<div class="font-mono text-xs p-3 border border-border rounded-md bg-[var(--bg)]/10 backdrop-blur-md">
            <div class="${hasMultipleItems ? "flex flex-col gap-2" : ""}">
              ${rows}
            </div>
          </div>`;
						}
					},
					zoom: {
						maxWidth: isMobile.value ? 350 : 500,
						highlightColor: colors.value.bgElevated,
						useResetSlot: true,
						minimap: {
							show: true,
							lineColor: "#FAFAFA",
							selectedColor: accent.value,
							selectedColorOpacity: .06,
							frameColor: colors.value.border,
							handleWidth: isMobile.value ? 40 : 20,
							handleBorderColor: colors.value.fgSubtle,
							handleType: "grab"
						},
						preview: {
							fill: transparentizeOklch(accent.value, isDarkMode.value ? .95 : .92),
							stroke: transparentizeOklch(accent.value, .5),
							strokeWidth: 1,
							strokeDasharray: 3
						}
					}
				}
			};
		});
		const isDownloadsMetric = computed(() => selectedMetric.value === "downloads");
		const showCorrectionControls = shallowRef(false);
		const packageAnomalies = computed(() => getAnomaliesForPackages(effectivePackageNames.value));
		const hasAnomalies = computed(() => packageAnomalies.value.length > 0);
		function formatAnomalyDate(dateStr) {
			const [y, m, d] = dateStr.split("-").map(Number);
			if (!y || !m || !d) return dateStr;
			return new Intl.DateTimeFormat(locale.value, {
				year: "numeric",
				month: "short",
				day: "numeric",
				timeZone: "UTC"
			}).format(new Date(Date.UTC(y, m - 1, d)));
		}
		watch(selectedMetric, (value) => {
			if (!isMounted.value) return;
			loadMetric();
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectField = Field_default;
			const _component_InputBase = Base_default$1;
			const _component_TooltipApp = App_default;
			const _component_LinkBase = Base_default;
			const _component_ClientOnly = client_only_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "w-full relative",
				id: "trends-chart",
				"aria-busy": unref(activeMetricState).pending ? "true" : "false"
			}, _attrs))}><div class="w-full mb-4 flex flex-col gap-3"><div class="flex flex-col sm:flex-row gap-3 sm:gap-2 sm:items-end">`);
			if (__props.showFacetSelector) _push(ssrRenderComponent(_component_SelectField, {
				id: "trends-metric-select",
				modelValue: unref(selectedMetric),
				"onUpdate:modelValue": ($event) => isRef(selectedMetric) ? selectedMetric.value = $event : null,
				disabled: unref(activeMetricState).pending,
				items: unref(METRICS).map((m) => ({
					label: m.label,
					value: m.id
				})),
				label: unref($t)("package.trends.facet")
			}, null, _parent));
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_SelectField, {
				label: unref($t)("package.trends.granularity"),
				id: "granularity",
				modelValue: unref(selectedGranularity),
				"onUpdate:modelValue": ($event) => isRef(selectedGranularity) ? selectedGranularity.value = $event : null,
				disabled: unref(activeMetricState).pending,
				items: unref(granularityItems)
			}, null, _parent));
			_push(`<div class="grid grid-cols-2 gap-2 flex-1"><div class="flex flex-col gap-1"><label for="startDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.start_date"))}</label><div class="relative flex items-center"><span class="absolute inset-is-2 i-lucide:calendar w-4 h-4 text-fg-subtle shrink-0 pointer-events-none" aria-hidden="true"></span>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "startDate",
				modelValue: unref(startDate),
				"onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
				type: "date",
				max: unref(DATE_INPUT_MAX),
				class: "w-full min-w-0 bg-transparent ps-7",
				size: "medium"
			}, null, _parent));
			_push(`</div></div><div class="flex flex-col gap-1"><label for="endDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.end_date"))}</label><div class="relative flex items-center"><span class="absolute inset-is-2 i-lucide:calendar w-4 h-4 text-fg-subtle shrink-0 pointer-events-none" aria-hidden="true"></span>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "endDate",
				modelValue: unref(endDate),
				"onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
				type: "date",
				max: unref(DATE_INPUT_MAX),
				class: "w-full min-w-0 bg-transparent ps-7",
				size: "medium"
			}, null, _parent));
			_push(`</div></div></div>`);
			if (unref(showResetButton)) _push(`<button type="button" aria-label="Reset date range" class="self-end flex items-center justify-center px-2.5 py-2.25 border border-transparent rounded-md text-fg-subtle hover:text-fg transition-colors hover:border-border focus-visible:outline-accent/70 sm:mb-0"><span class="block i-lucide:undo-2 w-5 h-5" aria-hidden="true"></span></button>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(isDownloadsMetric)) {
				_push(`<div class="flex flex-col gap-2"><button type="button" class="self-start flex items-center gap-1 text-2xs font-mono text-fg-subtle hover:text-fg transition-colors"><span class="${ssrRenderClass([unref(showCorrectionControls) ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3.5 h-3.5 transition-transform"])}" aria-hidden="true"></span> ${ssrInterpolate(unref($t)("package.trends.data_correction"))}</button>`);
				if (unref(showCorrectionControls)) {
					_push(`<div class="flex items-end gap-3"><label class="flex flex-col gap-1 flex-1"><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.average_window"))} <span class="text-fg-muted">(${ssrInterpolate(unref(settings).chartFilter.averageWindow)})</span></span><input${ssrRenderAttr("value", unref(settings).chartFilter.averageWindow)} type="range" min="0" max="20" step="1" class="accent-[var(--accent-color,var(--fg-subtle))]"></label><label class="flex flex-col gap-1 flex-1"><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.smoothing"))} <span class="text-fg-muted">(${ssrInterpolate(unref(settings).chartFilter.smoothingTau)})</span></span><input${ssrRenderAttr("value", unref(settings).chartFilter.smoothingTau)} type="range" min="0" max="20" step="1" class="accent-[var(--accent-color,var(--fg-subtle))]"></label><div class="flex flex-col gap-1 shrink-0"><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase flex items-center justify-between">${ssrInterpolate(unref($t)("package.trends.known_anomalies"))} `);
					_push(ssrRenderComponent(_component_TooltipApp, {
						interactive: "",
						to: __props.inModal ? "#chart-modal" : void 0
					}, {
						content: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="flex flex-col gap-3"${_scopeId}><p class="text-xs text-fg-muted"${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_description"))}</p>`);
								if (unref(hasAnomalies)) {
									_push(`<div${_scopeId}><p class="text-xs text-fg-subtle font-medium"${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_ranges"))}</p><ul class="text-xs text-fg-subtle list-disc list-inside"${_scopeId}><!--[-->`);
									ssrRenderList(unref(packageAnomalies), (a) => {
										_push(`<li${_scopeId}>${ssrInterpolate(unref(isMultiPackageMode) ? unref($t)("package.trends.known_anomalies_range_named", {
											packageName: a.packageName,
											start: formatAnomalyDate(a.start),
											end: formatAnomalyDate(a.end)
										}) : unref($t)("package.trends.known_anomalies_range", {
											start: formatAnomalyDate(a.start),
											end: formatAnomalyDate(a.end)
										}))}</li>`);
									});
									_push(`<!--]--></ul></div>`);
								} else _push(`<p class="text-xs text-fg-muted"${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_none", unref(effectivePackageNames).length))}</p>`);
								_push(`<div class="flex justify-end"${_scopeId}>`);
								_push(ssrRenderComponent(_component_LinkBase, {
									to: "https://github.com/npmx-dev/npmx.dev/edit/main/app/utils/download-anomalies.data.ts",
									class: "text-xs text-accent"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(unref($t)("package.trends.known_anomalies_contribute"))}`);
										else return [createTextVNode(toDisplayString(unref($t)("package.trends.known_anomalies_contribute")), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div></div>`);
							} else return [createVNode("div", { class: "flex flex-col gap-3" }, [
								createVNode("p", { class: "text-xs text-fg-muted" }, toDisplayString(unref($t)("package.trends.known_anomalies_description")), 1),
								unref(hasAnomalies) ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("p", { class: "text-xs text-fg-subtle font-medium" }, toDisplayString(unref($t)("package.trends.known_anomalies_ranges")), 1), createVNode("ul", { class: "text-xs text-fg-subtle list-disc list-inside" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(packageAnomalies), (a) => {
									return openBlock(), createBlock("li", { key: `${a.packageName}-${a.start}` }, toDisplayString(unref(isMultiPackageMode) ? unref($t)("package.trends.known_anomalies_range_named", {
										packageName: a.packageName,
										start: formatAnomalyDate(a.start),
										end: formatAnomalyDate(a.end)
									}) : unref($t)("package.trends.known_anomalies_range", {
										start: formatAnomalyDate(a.start),
										end: formatAnomalyDate(a.end)
									})), 1);
								}), 128))])])) : (openBlock(), createBlock("p", {
									key: 1,
									class: "text-xs text-fg-muted"
								}, toDisplayString(unref($t)("package.trends.known_anomalies_none", unref(effectivePackageNames).length)), 1)),
								createVNode("div", { class: "flex justify-end" }, [createVNode(_component_LinkBase, {
									to: "https://github.com/npmx-dev/npmx.dev/edit/main/app/utils/download-anomalies.data.ts",
									class: "text-xs text-accent"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("package.trends.known_anomalies_contribute")), 1)]),
									_: 1
								})])
							])];
						}),
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<button type="button" class="i-lucide:info w-3.5 h-3.5 text-fg-muted cursor-help"${ssrRenderAttr("aria-label", unref($t)("package.trends.known_anomalies"))}${_scopeId}></button>`);
							else return [createVNode("button", {
								type: "button",
								class: "i-lucide:info w-3.5 h-3.5 text-fg-muted cursor-help",
								"aria-label": unref($t)("package.trends.known_anomalies")
							}, null, 8, ["aria-label"])];
						}),
						_: 1
					}, _parent));
					_push(`</span><label class="${ssrRenderClass([{ "opacity-50 pointer-events-none": !unref(hasAnomalies) }, "flex items-center gap-1.5 text-2xs font-mono text-fg-subtle cursor-pointer"])}"><input${ssrIncludeBooleanAttr(Array.isArray(unref(settings).chartFilter.anomaliesFixed) ? ssrLooseContain(unref(settings).chartFilter.anomaliesFixed, null) : unref(settings).chartFilter.anomaliesFixed) ? " checked" : ""} type="checkbox"${ssrIncludeBooleanAttr(!unref(hasAnomalies)) ? " disabled" : ""} class="accent-[var(--accent-color,var(--fg-subtle))]"> ${ssrInterpolate(unref($t)("package.trends.apply_correction"))}</label></div></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			if (unref(skippedPackagesWithoutGitHub).length > 0) _push(`<p class="text-2xs font-mono text-fg-subtle">${ssrInterpolate(unref($t)("package.trends.contributors_skip", { count: unref(skippedPackagesWithoutGitHub).length }))} ${ssrInterpolate(unref(skippedPackagesWithoutGitHub).join(", "))}</p>`);
			else _push(`<!---->`);
			_push(`</div><h2 id="trends-chart-title" class="sr-only">${ssrInterpolate(unref($t)("package.trends.title"))} — ${ssrInterpolate(unref(activeMetricDef)?.label)}</h2><div role="region" aria-labelledby="trends-chart-title" class="${ssrRenderClass(unref(isMobile) === false && unref(width) > 0 ? "min-h-[567px]" : "min-h-[260px]")}">`);
			if (unref(chartData).dataset) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="min-h-[260px]"${_scopeId}></div>`);
				else return [createVNode("div", { class: "min-h-[260px]" })];
			}) }, _parent));
			else _push(`<!---->`);
			if (!unref(chartData).dataset && !unref(activeMetricState).pending) _push(`<div class="min-h-[260px] flex items-center justify-center text-fg-subtle font-mono text-sm">${ssrInterpolate(unref($t)("package.trends.no_data"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(activeMetricState).pending) _push(`<div role="status" aria-live="polite" class="absolute top-1/2 inset-is-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-fg-subtle font-mono bg-bg/70 backdrop-blur px-3 py-2 rounded-md border border-border">${ssrInterpolate(unref($t)("package.trends.loading"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = TrendsChart_vue_vue_type_script_setup_true_lang_default.setup;
TrendsChart_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/TrendsChart.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TrendsChart_default = Object.assign(TrendsChart_vue_vue_type_script_setup_true_lang_default, { __name: "PackageTrendsChart" });

export { CopyToClipboardButton_default as C, TrendsChart_default as T, useCssVariables as a, applyBlocklistCorrection as b, applyDataCorrection as c, copyAltTextForVersionsBarChart as d, fetchAllPackageVersions as f, getDependencyCount as g, lightenOklch as l, transparentizeOklch as t, useRouteQuery as u };
//# sourceMappingURL=TrendsChart-BwimLnmi.mjs.map

import { c as useNuxtApp, ae as useResizeObserver, af as useMutationObserver, _ as _plugin_vue_export_helper_default, ag as useSupported, u as useI18n, V as useAccentColor, x as useSettings, P as useClipboard, S as useColorMode, T as useElementSize, ah as useTimeoutFn, t as Base_default, ai as DATE_INPUT_MAX, B as Base_default$1, o as client_only_default } from './server-placeholder-C9fYItBT.mjs';
import { A as App_default } from './App-BNEn-XjJ.mjs';
import { a as useCompactNumberFormatter } from './useNumberFormatter-6MIdB6Qd.mjs';
import { u as useRouteQuery } from './dist-vCkMLnH7.mjs';
import { F as Field_default } from './Field-BPqWwnWu.mjs';
import { i as isListedFramework, g as getFrameworkColor } from './frameworks-hCp8-s9f.mjs';
import { v as encodePackageName, b6 as mapWithConcurrency } from '../nitro/nitro.mjs';
import { getVersions } from 'fast-npm-meta';
import { compare } from 'semver';
import { computed, defineComponent, shallowRef, watch, reactive, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';

//#region app/utils/charts.ts
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
function createAltTextForCompareFacetBarChart({ dataset, config }) {
	if (!dataset) return "";
	const { facet, description, $t } = config;
	const packages = dataset.map((d) => d.name).join(", ");
	const facet_analysis = dataset.map((d) => $t("package.trends.copy_alt.facet_bar_analysis", {
		package_name: d.name,
		value: d.formattedValue
	})).join(" ");
	return `${config.$t("package.trends.copy_alt.facet_bar_general_description", {
		packages,
		facet,
		description,
		facet_analysis,
		watermark: config.$t("package.trends.copy_alt.watermark")
	})}`;
}
async function copyAltTextForCompareFacetBarChart({ dataset, config }) {
	const altText = createAltTextForCompareFacetBarChart({
		dataset,
		config
	});
	await config.copy(altText);
}
function loadFile(link, filename) {
	const a = (void 0).createElement("a");
	a.href = link;
	a.download = filename;
	a.click();
	a.remove();
}
function sanitise(value) {
	return value.replace(/^@/, "").replace(/[\\/:"*?<>|]/g, "-").replace(/\//g, "-");
}
function insertLineBreaks(text, maxCharactersPerLine = 24) {
	if (typeof text !== "string") return "";
	if (!Number.isInteger(maxCharactersPerLine) || maxCharactersPerLine <= 0) return text;
	const tokens = text.match(/\S+|\s+/g) || [];
	const lines = [];
	let currentLine = "";
	const pushLine = () => {
		const trimmedLine = currentLine.trim();
		if (trimmedLine.length) lines.push(trimmedLine);
		currentLine = "";
	};
	for (const token of tokens) {
		if (/^\s+$/.test(token)) {
			if (currentLine.length && !currentLine.endsWith(" ")) currentLine += " ";
			continue;
		}
		if (token.length > maxCharactersPerLine) {
			pushLine();
			for (let index = 0; index < token.length; index += maxCharactersPerLine) lines.push(token.slice(index, index + maxCharactersPerLine));
			continue;
		}
		const candidate = currentLine.length ? `${currentLine}${token}` : token;
		if (candidate.length <= maxCharactersPerLine) currentLine = candidate;
		else {
			pushLine();
			currentLine = token;
		}
	}
	pushLine();
	return lines.join("\n");
}
function applyEllipsis(text, maxLength = 45) {
	if (typeof text !== "string") return "";
	if (!Number.isInteger(maxLength) || maxLength <= 0) return text;
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + "...";
}
/**
* Generates a deterministic 32-bit unsigned integer hash from a string.
*
* This function is based on the FNV-1a hashing algorithm. It is used to
* transform any string input into a stable numeric seed suitable for
* deterministic pseudo-random number generation.
*
* The same input string will always produce the same output number.
*
* @param value - The input string to hash.
* @returns A 32-bit unsigned integer hash.
*/
function createSeedNumber(value) {
	let hashValue = 2166136261;
	for (let index = 0; index < value.length; index += 1) {
		hashValue ^= value.charCodeAt(index);
		hashValue = Math.imul(hashValue, 16777619);
	}
	return hashValue >>> 0;
}
/**
* Creates a deterministic pseudo-random number generator (PRNG) based on a numeric seed.
*
* This function implements a fast, non-cryptographic PRNG similar to Mulberry32.
* It produces a reproducible sequence of numbers in the range [0, 1), meaning
* the same seed will always generate the same sequence.
*
* The returned function maintains internal state and should be called repeatedly
* to obtain successive pseudo-random values.
*
* @param seedNumber - 32 bit integer seed
* @returns A function that returns a pseudo rand number between 0 (inclusive) and 1 (exclusive).
*
* @example
* const random = createDeterministicRandomGenerator(12345)
* const a = random() // always the same for seed 12345
* const b = random()
*/
function createDeterministicRandomGenerator(seedNumber) {
	let state = seedNumber >>> 0;
	return function generateRandomNumber() {
		state += 1831565813;
		let intermediateValue = state;
		intermediateValue = Math.imul(intermediateValue ^ intermediateValue >>> 15, intermediateValue | 1);
		intermediateValue ^= intermediateValue + Math.imul(intermediateValue ^ intermediateValue >>> 7, intermediateValue | 61);
		return ((intermediateValue ^ intermediateValue >>> 14) >>> 0) / 4294967296;
	};
}
function pickValue(values, generateRandomNumber) {
	const selectedValue = values[Math.floor(generateRandomNumber() * values.length)];
	if (selectedValue === void 0) throw new Error("pickValue requires a non-empty array");
	return selectedValue;
}
function escapeSvgAttribute(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function createLineElement(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
	return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${escapeSvgAttribute(stroke)}" stroke-width="${strokeWidth}" opacity="${opacity}" shape-rendering="crispEdges" stroke-linecap="round" stroke-linejoin="round" />`;
}
function createCircleElement(centerX, centerY, radius, fill, opacity) {
	return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${escapeSvgAttribute(fill)}" opacity="${opacity}" />`;
}
function createPathElement(pathData, fill, stroke, strokeWidth, opacity) {
	return `<path d="${pathData}" fill="${escapeSvgAttribute(fill)}" stroke="${escapeSvgAttribute(stroke)}" stroke-width="${strokeWidth}" opacity="${opacity}" stroke-linecap="round" stroke-linejoin="round" />`;
}
function toNonEmptyReadonlyArray(values) {
	if (values.length === 0) throw new Error("Expected a non-empty array");
	return values;
}
function createSeededSvgPattern(seed, options) {
	const normalizedSeed = String(seed);
	const foregroundColor = options?.foregroundColor ?? "#111111";
	const backgroundColor = options?.backgroundColor ?? "transparent";
	const minimumSize = options?.minimumSize;
	const maximumSize = options?.maximumSize;
	if (!Number.isFinite(minimumSize) || !Number.isFinite(maximumSize) || minimumSize <= 0 || maximumSize <= 0 || minimumSize > maximumSize) throw new RangeError("minimumSize and maximumSize must be finite, positive, and minimumSize must not exceed maximumSize");
	const generateRandomNumber = createDeterministicRandomGenerator(createSeedNumber(normalizedSeed));
	const patternType = pickValue([
		"diagonalLines",
		"verticalLines",
		"horizontalLines",
		"crosshatch",
		"dots",
		"grid",
		"zigzag"
	], generateRandomNumber);
	const availableSizes = [];
	for (let size = minimumSize; size <= maximumSize; size += 2) availableSizes.push(size);
	const tileSize = pickValue(toNonEmptyReadonlyArray(availableSizes), generateRandomNumber);
	const gap = pickValue([
		2,
		3,
		4,
		5,
		6
	], generateRandomNumber);
	const strokeWidth = pickValue([
		1,
		1.25,
		1.5,
		1.75,
		2
	], generateRandomNumber);
	const opacity = pickValue([
		.7,
		.8,
		.9,
		1
	], generateRandomNumber);
	const rotation = pickValue([
		0,
		15,
		30,
		45,
		60,
		75,
		90,
		120,
		135
	], generateRandomNumber);
	let contentMarkup = "";
	switch (patternType) {
		case "diagonalLines":
			contentMarkup = [
				createLineElement(-tileSize, tileSize, tileSize, -tileSize, foregroundColor, strokeWidth, opacity),
				createLineElement(0, tileSize, tileSize, 0, foregroundColor, strokeWidth, opacity),
				createLineElement(0, tileSize * 2, tileSize * 2, 0, foregroundColor, strokeWidth, opacity)
			].join("");
			break;
		case "verticalLines":
			contentMarkup = [
				0,
				gap + strokeWidth,
				(gap + strokeWidth) * 2
			].map((x) => createLineElement(x, 0, x, tileSize, foregroundColor, strokeWidth, opacity)).join("");
			break;
		case "horizontalLines":
			contentMarkup = [
				0,
				gap + strokeWidth,
				(gap + strokeWidth) * 2
			].map((y) => createLineElement(0, y, tileSize, y, foregroundColor, strokeWidth, opacity)).join("");
			break;
		case "crosshatch":
			contentMarkup = [
				createLineElement(0, tileSize / 2, tileSize, tileSize / 2, foregroundColor, strokeWidth, opacity),
				createLineElement(tileSize / 2, 0, tileSize / 2, tileSize, foregroundColor, strokeWidth, opacity),
				createLineElement(0, 0, tileSize, tileSize, foregroundColor, strokeWidth * .75, opacity),
				createLineElement(tileSize, 0, 0, tileSize, foregroundColor, strokeWidth * .75, opacity)
			].join("");
			break;
		case "dots": {
			const radius = Math.max(1, tileSize / 12);
			contentMarkup = [
				createCircleElement(tileSize / 4, tileSize / 4, radius, foregroundColor, opacity),
				createCircleElement(tileSize * 3 / 4, tileSize / 4, radius, foregroundColor, opacity),
				createCircleElement(tileSize / 4, tileSize * 3 / 4, radius, foregroundColor, opacity),
				createCircleElement(tileSize * 3 / 4, tileSize * 3 / 4, radius, foregroundColor, opacity)
			].join("");
			break;
		}
		case "grid":
			contentMarkup = [
				createLineElement(0, 0, tileSize, 0, foregroundColor, strokeWidth, opacity),
				createLineElement(0, 0, 0, tileSize, foregroundColor, strokeWidth, opacity),
				createLineElement(0, tileSize / 2, tileSize, tileSize / 2, foregroundColor, strokeWidth * .8, opacity),
				createLineElement(tileSize / 2, 0, tileSize / 2, tileSize, foregroundColor, strokeWidth * .8, opacity)
			].join("");
			break;
		case "zigzag": {
			const midPoint = tileSize / 2;
			contentMarkup = createPathElement(`M 0 ${midPoint} L ${tileSize / 4} 0 L ${tileSize / 2} ${midPoint} L ${tileSize * 3 / 4} ${tileSize} L ${tileSize} ${midPoint}`, "none", foregroundColor, strokeWidth, opacity);
			break;
		}
	}
	if (backgroundColor !== "transparent") contentMarkup = `<rect x="0" y="0" width="${tileSize}" height="${tileSize}" fill="${escapeSvgAttribute(backgroundColor)}" />${contentMarkup}`;
	return {
		width: tileSize,
		height: tileSize,
		rotation,
		patternType,
		contentMarkup
	};
}
function createChartPatternSlotMarkup({ id, seed, color, foregroundColor, fallbackColor, maxSize, minSize }) {
	const pattern = createSeededSvgPattern(seed, {
		foregroundColor,
		backgroundColor: color ?? fallbackColor,
		minimumSize: minSize,
		maximumSize: maxSize
	});
	return `
    <pattern
      id="${id}"
      patternUnits="userSpaceOnUse"
      width="${pattern.width}"
      height="${pattern.height}"
      patternTransform="rotate(${pattern.rotation})"
    >
      ${pattern.contentMarkup}
    </pattern>
  `;
}

//#region app/utils/npm/api.ts
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

//#region app/utils/npm/dependency-count.ts
function getDependencyCount(version) {
	if (!version?.dependencies) return 0;
	return Object.keys(version.dependencies).length;
}
//#endregion
//#region app/composables/useColors.ts
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
//#endregion
//#region app/utils/chart-data-correction.ts
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
//#endregion
//#region app/utils/chart-data-prediction.ts
var DAY_MS$1 = 864e5;
function getUtcDayStart(ts) {
	const d = new Date(ts);
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}
function getWeeklyBucketStartUtc(ts) {
	const dayStart = getUtcDayStart(ts);
	return dayStart - (new Date(dayStart).getUTCDay() + 6) % 7 * DAY_MS$1;
}
function clampRatio(value) {
	if (value < 0) return 0;
	if (value > 1) return 1;
	return value;
}
/** Convert `YYYY-MM-DD` to UTC ms at end-of-day (`23:59:59.999`). */
function endDateOnlyToUtcMs(d) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return null;
	const [y, m, day] = d.split("-").map(Number);
	if (!y || !m || !day) return null;
	return Date.UTC(y, m - 1, day, 23, 59, 59, 999);
}
/** Start of the bucket containing `ts` (inclusive). */
function getBucketStartUtc(ts, g) {
	const d = new Date(ts);
	if (g === "yearly") return Date.UTC(d.getUTCFullYear(), 0, 1);
	if (g === "monthly") return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1);
	if (g === "weekly") return getWeeklyBucketStartUtc(ts);
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}
/** End of the bucket containing `ts` (exclusive). */
function getBucketEndUtc(ts, g) {
	const d = new Date(ts);
	if (g === "yearly") return Date.UTC(d.getUTCFullYear() + 1, 0, 1);
	if (g === "monthly") return Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1);
	if (g === "weekly") return getWeeklyBucketStartUtc(ts) + 7 * DAY_MS$1;
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
}
/** How much of the bucket has elapsed at `refMs` — value in `[0, 1]`. */
function getCompletionRatio(bucketTs, g, refMs) {
	const start = getBucketStartUtc(bucketTs, g);
	const total = getBucketEndUtc(bucketTs, g) - start;
	return total <= 0 ? 1 : clampRatio((refMs - start) / total);
}
/** Project the next value via least-squares on `pts` (min 2). Returns `null` on failure. */
function linearProject(pts) {
	const n = pts.length;
	if (n < 2) return null;
	let sx = 0, sy = 0, sxy = 0, sxx = 0;
	for (let i = 0; i < n; i++) {
		sx += i;
		sy += pts[i];
		sxy += i * pts[i];
		sxx += i * i;
	}
	const det = n * sxx - sx * sx;
	if (det === 0) return null;
	const slope = (n * sxy - sx * sy) / det;
	const intercept = (sy - slope * sx) / n;
	const v = slope * n + intercept;
	return Number.isFinite(v) ? Math.max(0, v) : null;
}
/**
* Estimate the full-period value for a partially-complete last bucket.
*
* Uses linear projection when enough complete lookback points are available
* (`>= predictionPoints`), otherwise falls back to proportional scale-up.
* Returns the raw last value when the period is already complete or prediction is disabled.
*/
function extrapolateLastValue(params) {
	const { series, granularity, lastDateMs, referenceMs, predictionPoints } = params;
	const last = series.at(-1) ?? 0;
	const ratio = getCompletionRatio(lastDateMs, granularity, referenceMs);
	if (!(ratio > 0 && ratio < 1) || predictionPoints <= 0) return last;
	const lookback = series.slice(0, -1).slice(-predictionPoints);
	if (lookback.length >= predictionPoints) {
		const projected = linearProject(lookback);
		if (projected !== null) return projected;
	}
	const scaled = last / ratio;
	return Number.isFinite(scaled) ? scaled : last;
}
/**
* Full data-tweak pipeline for a single series:
* 1. Prediction – replace last partial value with extrapolated estimate
* 2. Data correction – smoothing & averaging
*/
function applyDataPipeline(series, settings, ctx) {
	if (series.length === 0) return series;
	let s = series;
	if (!ctx.isAbsoluteMetric) {
		const projected = extrapolateLastValue({
			series,
			granularity: ctx.granularity,
			lastDateMs: ctx.lastDateMs,
			referenceMs: ctx.referenceMs,
			predictionPoints: settings.predictionPoints
		});
		s = [...series.slice(0, -1), projected];
	}
	return applyDataCorrection(s.map((value) => ({ value })), settings).map((d) => d.value);
}
//#endregion
//#region app/utils/download-anomalies.data.ts
var DOWNLOAD_ANOMALIES = [
	{
		packageName: "vite",
		start: {
			date: "2025-08-04",
			weeklyDownloads: 33913132
		},
		end: {
			date: "2025-09-08",
			weeklyDownloads: 38665727
		}
	},
	{
		packageName: "svelte",
		start: {
			date: "2022-11-15",
			weeklyDownloads: 75233
		},
		end: {
			date: "2022-11-30",
			weeklyDownloads: 69524
		}
	},
	{
		packageName: "svelte",
		start: {
			date: "2023-06-19",
			weeklyDownloads: 107491
		},
		end: {
			date: "2023-06-22",
			weeklyDownloads: 112432
		}
	},
	{
		packageName: "svelte",
		start: {
			date: "2023-11-18",
			weeklyDownloads: 59611
		},
		end: {
			date: "2023-11-21",
			weeklyDownloads: 150680
		}
	}
];
//#endregion
//#region app/utils/download-anomalies.ts
function getDateString(point, granularity) {
	switch (granularity) {
		case "daily": return point.day;
		case "weekly": return point.weekStart;
		case "monthly": return `${point.month}-01`;
		case "yearly": return `${point.year}-01-01`;
	}
}
/**
* For daily the point date falls strictly between the anomaly bounds.
* For weekly the point date is the week start, and the full 7-day range is
* checked so any overlapping week is affected.
* For monthly/yearly the anomaly bounds are truncated to the same resolution
* so that any period overlapping the anomaly is caught (inclusive).
*/
function isDateAffected(date, anomaly, granularity) {
	switch (granularity) {
		case "daily": return date > anomaly.start.date && date < anomaly.end.date;
		case "weekly": {
			const startWeek = date;
			const weekStartDate = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
			const weekEndDate = new Date(weekStartDate);
			weekEndDate.setUTCDate(weekEndDate.getUTCDate() + 6);
			const endWeek = weekEndDate.toISOString().slice(0, 10);
			return startWeek < anomaly.end.date && endWeek > anomaly.start.date;
		}
		case "monthly": {
			const monthStart = date;
			const monthStartDate = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
			const monthEndDate = new Date(monthStartDate);
			monthEndDate.setUTCMonth(monthEndDate.getUTCMonth() + 1);
			monthEndDate.setUTCDate(monthEndDate.getUTCDate() - 1);
			const monthEnd = monthEndDate.toISOString().slice(0, 10);
			return monthStart < anomaly.end.date && monthEnd > anomaly.start.date;
		}
		case "yearly": {
			const yearStart = date;
			const yearEnd = `${date.slice(0, 4)}-12-31`;
			return yearStart < anomaly.end.date && yearEnd > anomaly.start.date;
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
	const result = data.map((d) => Object.assign({}, d));
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
			result[affectedIndices[i]].hasAnomaly = true;
		}
	}
	return result;
}
//#endregion
//#region app/utils/date.ts
var DAY_MS = 864e5;
function parseIsoDate(value) {
	return /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`);
}
function toIsoDate(date) {
	return date.toISOString().slice(0, 10);
}
function addDays(date, days) {
	const d = new Date(date);
	d.setUTCDate(d.getUTCDate() + days);
	return d;
}
function daysInMonth(year, month) {
	return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
function daysInYear(year) {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
}
//#endregion
//#region app/utils/chart-data-buckets.ts
/** Proportionally scale a partial bucket to estimate the full-period value. */
function fillPartialBucket(value, actualDays, totalDays) {
	if (actualDays <= 0 || actualDays >= totalDays) return value;
	return Math.round(value * totalDays / actualDays);
}
function sortedDaily(daily) {
	return daily.slice().sort((a, b) => a.day.localeCompare(b.day));
}
function buildDailyEvolution(daily) {
	return sortedDaily(daily).map((item) => ({
		day: item.day,
		value: item.value,
		timestamp: parseIsoDate(item.day).getTime()
	}));
}
function buildWeeklyEvolution(daily, rangeStartIso, rangeEndIso) {
	const sorted = sortedDaily(daily);
	if (sorted.length === 0) return [];
	const rangeStartDate = parseIsoDate(rangeStartIso);
	const rangeEndDate = parseIsoDate(rangeEndIso);
	const buckets = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const itemDate = parseIsoDate(item.day);
		const offset = Math.floor((rangeEndDate.getTime() - itemDate.getTime()) / DAY_MS);
		if (offset < 0) continue;
		const idx = Math.floor(offset / 7);
		buckets.set(idx, (buckets.get(idx) ?? 0) + item.value);
	}
	return Array.from(buckets.entries()).sort(([a], [b]) => b - a).map(([idx, value]) => {
		const weekEndDate = addDays(rangeEndDate, -(idx * 7));
		let weekStartDate = addDays(weekEndDate, -6);
		if (weekStartDate.getTime() < rangeStartDate.getTime()) {
			weekStartDate = rangeStartDate;
			const actualDays = Math.floor((weekEndDate.getTime() - rangeStartDate.getTime()) / DAY_MS) + 1;
			value = fillPartialBucket(value, actualDays, 7);
		}
		const weekStartIso = toIsoDate(weekStartDate);
		const weekEndIso = toIsoDate(weekEndDate);
		return {
			value,
			weekKey: `${weekStartIso}_${weekEndIso}`,
			weekStart: weekStartIso,
			weekEnd: weekEndIso,
			timestampStart: weekStartDate.getTime(),
			timestampEnd: weekEndDate.getTime()
		};
	});
}
function buildMonthlyEvolution(daily, rangeStartIso, rangeEndIso) {
	const sorted = sortedDaily(daily);
	const byMonth = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const m = item.day.slice(0, 7);
		byMonth.set(m, (byMonth.get(m) ?? 0) + item.value);
	}
	const entries = Array.from(byMonth.entries()).sort(([a], [b]) => a.localeCompare(b));
	return entries.map(([month, value], i) => {
		const [y, m] = month.split("-").map(Number);
		const total = daysInMonth(y, m - 1);
		const isFirst = i === 0;
		const isLast = i === entries.length - 1;
		const startDay = isFirst && rangeStartIso ? Number(rangeStartIso.split("-")[2]) : 1;
		const actualDays = (isLast && rangeEndIso ? Number(rangeEndIso.split("-")[2]) : total) - startDay + 1;
		if (actualDays < total) value = fillPartialBucket(value, actualDays, total);
		return {
			month,
			value,
			timestamp: parseIsoDate(`${month}-01`).getTime()
		};
	});
}
function buildYearlyEvolution(daily, rangeStartIso, rangeEndIso) {
	const sorted = sortedDaily(daily);
	const byYear = /* @__PURE__ */ new Map();
	for (const item of sorted) {
		const y = item.day.slice(0, 4);
		byYear.set(y, (byYear.get(y) ?? 0) + item.value);
	}
	const entries = Array.from(byYear.entries()).sort(([a], [b]) => a.localeCompare(b));
	return entries.map(([year, value], i) => {
		const total = daysInYear(Number(year));
		const yearStart = parseIsoDate(`${year}-01-01`);
		const isFirst = i === 0;
		const isLast = i === entries.length - 1;
		const startOffset = isFirst && rangeStartIso ? Math.floor((parseIsoDate(rangeStartIso).getTime() - yearStart.getTime()) / DAY_MS) : 0;
		const actualDays = (isLast && rangeEndIso ? Math.floor((parseIsoDate(rangeEndIso).getTime() - yearStart.getTime()) / DAY_MS) + 1 : total) - startOffset;
		if (actualDays < total) value = fillPartialBucket(value, actualDays, total);
		return {
			year,
			value,
			timestamp: yearStart.getTime()
		};
	});
}
//#endregion
//#region app/composables/useCharts.ts
function startOfUtcMonth(date) {
	return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}
function startOfUtcYear(date) {
	return new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
}
function differenceInUtcDaysInclusive(startIso, endIso) {
	const start = parseIsoDate(startIso);
	const end = parseIsoDate(endIso);
	return Math.floor((end.getTime() - start.getTime()) / 864e5) + 1;
}
function splitIsoRangeIntoChunksInclusive(startIso, endIso, maximumDaysPerRequest) {
	if (differenceInUtcDaysInclusive(startIso, endIso) <= maximumDaysPerRequest) return [{
		startIso,
		endIso
	}];
	const chunks = [];
	let cursorStart = parseIsoDate(startIso);
	const finalEnd = parseIsoDate(endIso);
	while (cursorStart.getTime() <= finalEnd.getTime()) {
		const cursorEnd = addDays(cursorStart, maximumDaysPerRequest - 1);
		const actualEnd = cursorEnd.getTime() < finalEnd.getTime() ? cursorEnd : finalEnd;
		chunks.push({
			startIso: toIsoDate(cursorStart),
			endIso: toIsoDate(actualEnd)
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
		const weekStartIso = toIsoDate(weekStartDate);
		const weekEndIso = toIsoDate(clampedWeekEndDate);
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
	return mergeDailyPoints((await mapWithConcurrency(ranges, (range) => fetchDailyRangeCached(packageName, range.startIso, range.endIso), 10)).flat());
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
		const end = endDateOnly ? parseIsoDate(endDateOnly) : yesterday;
		const startDateOnly = toDateOnly(evolutionOptions.startDate);
		if (startDateOnly) return {
			start: parseIsoDate(startDateOnly),
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
		const startIso = toIsoDate(start);
		const endIso = toIsoDate(end);
		const sortedDaily = await fetchDailyRangeChunked(resolvedPackageName, startIso, endIso);
		if (resolvedOptions.granularity === "day") return buildDailyEvolution(sortedDaily);
		if (resolvedOptions.granularity === "week") return buildWeeklyEvolution(sortedDaily, startIso, endIso);
		if (resolvedOptions.granularity === "month") return buildMonthlyEvolution(sortedDaily, startIso, endIso);
		return buildYearlyEvolution(sortedDaily, startIso, endIso);
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
		const startIso = toIsoDate(start);
		const endIso = toIsoDate(end);
		const filteredDaily = sortedDaily.filter((d) => d.day >= startIso && d.day <= endIso);
		if (resolvedOptions.granularity === "day") return buildDailyEvolution(filteredDaily);
		if (resolvedOptions.granularity === "week") return buildWeeklyEvolution(filteredDaily, startIso, endIso);
		if (resolvedOptions.granularity === "month") return buildMonthlyEvolution(filteredDaily, startIso, endIso);
		return buildYearlyEvolution(filteredDaily, startIso, endIso);
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
//#endregion
//#region app/composables/usePermalink.ts
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
//#endregion
//#region app/components/Package/TrendsChart.vue?vue&type=script&setup=true&lang.ts
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
		Promise.resolve({          });
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
				name: applyEllipsis(seriesName, 32),
				type: "line",
				series: dataset.map((d) => d.value),
				color: accent.value,
				temperatureColors,
				useArea: true,
				dashIndices: dataset.map((item, index) => item.hasAnomaly ? index : -1).filter((index) => index !== -1)
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
				value: d.value,
				hasAnomaly: !!d.hasAnomaly
			}));
			if (selectedGranularity === "daily" && isDailyDataset(dataset) || selectedGranularity === "monthly" && isMonthlyDataset(dataset) || selectedGranularity === "yearly" && isYearlyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestamp,
				value: d.value,
				hasAnomaly: !!d.hasAnomaly
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
			const iso = String(endDate.value ?? "").slice(0, 10);
			if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
			const [year, month, day] = iso.split("-").map(Number);
			if (!year || !month || !day) return false;
			if (g === "daily") return true;
			if (g === "weekly") {
				const startIso = String(startDate.value ?? "").slice(0, 10);
				if (!/^\d{4}-\d{2}-\d{2}$/.test(startIso)) return false;
				const startMs = Date.UTC(...startIso.split("-").map(Number));
				const endMs = Date.UTC(year, month - 1, day);
				return (Math.floor((endMs - startMs) / 864e5) + 1) % 7 === 0;
			}
			if (g === "monthly") return day === new Date(Date.UTC(year, month, 0)).getUTCDate();
			return month === 12 && day === 31;
		});
		const supportsEstimation = computed(() => !["daily", "weekly"].includes(displayedGranularity.value) && selectedMetric.value !== "contributors");
		computed(() => normalisedDataset.value?.some((datapoint) => !!datapoint.dashIndices.length));
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
					const valueByTimestamp = /* @__PURE__ */ new Map();
					const anomalyTimestamps = /* @__PURE__ */ new Set();
					for (const p of points) {
						valueByTimestamp.set(p.timestamp, p.value);
						if (p.hasAnomaly) anomalyTimestamps.add(p.timestamp);
					}
					const series = dates.map((t) => valueByTimestamp.get(t) ?? 0);
					const dashIndices = dates.map((t, index) => anomalyTimestamps.has(t) ? index : -1).filter((index) => index !== -1);
					const item = {
						name: applyEllipsis(pkg, 32),
						type: "line",
						series,
						dashIndices
					};
					if (isListedFramework(pkg)) item.color = getFrameworkColor(pkg);
					return item;
				}),
				dates
			};
		});
		const normalisedDataset = computed(() => {
			const granularity = displayedGranularity.value;
			const referenceMs = (endDate.value ? endDateOnlyToUtcMs(endDate.value) : null) ?? Date.now();
			const lastDateMs = chartData.value.dates.at(-1) ?? 0;
			const isAbsoluteMetric = selectedMetric.value === "contributors";
			return chartData.value.dataset?.map((d) => {
				const series = applyDataPipeline(d.series.map((v) => v ?? 0), {
					averageWindow: settings.value.chartFilter.averageWindow,
					smoothingTau: settings.value.chartFilter.smoothingTau,
					predictionPoints: granularity === "weekly" ? 0 : settings.value.chartFilter.predictionPoints ?? 4
				}, {
					granularity,
					lastDateMs,
					referenceMs,
					isAbsoluteMetric
				});
				return {
					...d,
					series,
					dashIndices: d.dashIndices ?? []
				};
			});
		});
		computed(() => Math.max(0, ...(chartData.value.dataset ?? []).map((d) => d.series.length)));
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
		const tooltipDateFormatter = computed(() => {
			const granularity = displayedGranularity.value;
			return new Intl.DateTimeFormat(locale.value, {
				year: "numeric",
				month: granularity === "yearly" ? void 0 : "short",
				day: granularity === "daily" || granularity === "weekly" ? "numeric" : void 0,
				timeZone: "UTC"
			});
		});
		function buildExportFilename(extension) {
			const g = selectedGranularity.value;
			const range = `${startDate.value}_${endDate.value}`;
			if (!isMultiPackageMode.value) return `${sanitise(applyEllipsis(effectivePackageNames.value[0] ?? props.packageName ?? "package", 32))}-${g}_${range}.${extension}`;
			const names = effectivePackageNames.value.map((name) => applyEllipsis(name, 32));
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
		const showCorrectionControls = shallowRef(false);
		const isResizing = shallowRef(false);
		const chartHeight = computed(() => {
			if (isMobile.value) return 950;
			return showCorrectionControls.value && props.inModal ? 494 : 600;
		});
		const { start } = useTimeoutFn(() => {
			isResizing.value = false;
		}, 200, { immediate: false });
		function pauseChartTransitions() {
			isResizing.value = true;
			start();
		}
		watch(chartHeight, (newH, oldH) => {
			if (newH !== oldH) pauseChartTransitions();
		}, { immediate: true });
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "",
				a11y: { translations: {
					keyboardNavigation: $t("package.trends.chart_assistive_text.keyboard_navigation_horizontal"),
					tableAvailable: $t("package.trends.chart_assistive_text.table_available"),
					tableCaption: $t("package.trends.chart_assistive_text.table_caption")
				} },
				chart: {
					height: chartHeight.value,
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
							altCopy: $t("package.trends.copy_alt.button_label"),
							open: $t("package.trends.open_options"),
							close: $t("package.trends.close_options")
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
						customFormat: ({ datapoint: items, absoluteIndex }) => {
							if (!items || pending.value) return "";
							const hasMultipleItems = items.length > 1;
							let formattedDate = "";
							if (hasMultipleItems && absoluteIndex !== void 0) {
								const index = Number(absoluteIndex);
								if (Number.isInteger(index) && index >= 0 && index < chartData.value.dates.length) {
									const timestamp = chartData.value.dates[index];
									if (typeof timestamp === "number") formattedDate = tooltipDateFormatter.value.format(new Date(timestamp));
								}
							}
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
            ${formattedDate ? `<div class="text-2xs text-[var(--fg-subtle)] mb-2">${formattedDate}</div>` : ""}
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
			const _component_InputBase = Base_default;
			const _component_TooltipApp = App_default;
			const _component_LinkBase = Base_default$1;
			const _component_ClientOnly = client_only_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "w-full relative",
				id: "trends-chart",
				"aria-busy": unref(activeMetricState).pending ? "true" : "false"
			}, _attrs))} data-v-d78132de><div class="w-full mb-4 flex flex-col gap-3" data-v-d78132de><div class="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-2 sm:items-end" data-v-d78132de>`);
			if (__props.showFacetSelector) _push(ssrRenderComponent(_component_SelectField, {
				id: "trends-metric-select",
				modelValue: unref(selectedMetric),
				"onUpdate:modelValue": ($event) => isRef(selectedMetric) ? selectedMetric.value = $event : null,
				disabled: unref(activeMetricState).pending,
				items: unref(METRICS).map((m) => ({
					label: m.label,
					value: m.id
				})),
				label: unref($t)("package.trends.facet"),
				block: ""
			}, null, _parent));
			else _push(`<!---->`);
			_push(ssrRenderComponent(_component_SelectField, {
				label: unref($t)("package.trends.granularity"),
				id: "granularity",
				modelValue: unref(selectedGranularity),
				"onUpdate:modelValue": ($event) => isRef(selectedGranularity) ? selectedGranularity.value = $event : null,
				disabled: unref(activeMetricState).pending,
				items: unref(granularityItems),
				block: ""
			}, null, _parent));
			_push(`<div class="col-span-2 sm:col-span-1 grid grid-cols-2 gap-2 flex-1" data-v-d78132de><div class="flex flex-col gap-1" data-v-d78132de><label for="startDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.start_date"))}</label><div class="relative flex items-center" data-v-d78132de>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "startDate",
				modelValue: unref(startDate),
				"onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
				type: "date",
				max: unref(DATE_INPUT_MAX),
				class: "w-full min-w-0 bg-transparent"
			}, null, _parent));
			_push(`</div></div><div class="flex flex-col gap-1" data-v-d78132de><label for="endDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.end_date"))}</label><div class="relative flex items-center" data-v-d78132de>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "endDate",
				modelValue: unref(endDate),
				"onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
				type: "date",
				max: unref(DATE_INPUT_MAX),
				class: "w-full min-w-0 bg-transparent"
			}, null, _parent));
			_push(`</div></div></div>`);
			if (unref(showResetButton)) _push(`<button${ssrRenderAttr("aria-expanded", unref(showCorrectionControls))} aria-controls="trends-correction-controls" type="button" aria-label="Reset date range" class="self-end flex items-center justify-center px-2.5 py-2.25 border border-transparent rounded-md text-fg-subtle hover:text-fg transition-colors hover:border-border focus-visible:outline-accent/70 sm:mb-0" data-v-d78132de><span class="block i-lucide:undo-2 w-5 h-5" aria-hidden="true" data-v-d78132de></span></button>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(isDownloadsMetric)) {
				_push(`<div class="flex flex-col gap-2" data-v-d78132de><button type="button" class="self-start flex items-center gap-1 text-2xs font-mono text-fg-subtle hover:text-fg transition-colors" data-v-d78132de><span class="${ssrRenderClass([unref(showCorrectionControls) ? "i-lucide:chevron-down" : "i-lucide:chevron-right", "w-3.5 h-3.5 transition-transform"])}" aria-hidden="true" data-v-d78132de></span> ${ssrInterpolate(unref($t)("package.trends.data_correction"))}</button><div id="trends-correction-controls"${ssrRenderAttr("aria-hidden", !unref(showCorrectionControls))}${ssrIncludeBooleanAttr(!unref(showCorrectionControls)) ? " inert" : ""} class="${ssrRenderClass([unref(showCorrectionControls) ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0 pointer-events-none", "overflow-hidden transition-[opacity] duration-200 ease-out"])}" data-v-d78132de><div class="pt-1 min-h-[160px] sm:min-h-[76px]" data-v-d78132de><div class="grid grid-cols-2 sm:flex items-end gap-3" data-v-d78132de><label class="flex flex-col gap-1 flex-1" data-v-d78132de><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.average_window"))} <span class="text-fg-muted" data-v-d78132de>(${ssrInterpolate(unref(settings).chartFilter.averageWindow)})</span></span><input${ssrRenderAttr("value", unref(settings).chartFilter.averageWindow)}${ssrIncludeBooleanAttr(!unref(showCorrectionControls)) ? " disabled" : ""} type="range" min="0" max="20" step="1" class="accent-[var(--accent-color,var(--fg-subtle))]" data-v-d78132de></label><label class="flex flex-col gap-1 flex-1" data-v-d78132de><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.smoothing"))} <span class="text-fg-muted" data-v-d78132de>(${ssrInterpolate(unref(settings).chartFilter.smoothingTau)})</span></span><input${ssrRenderAttr("value", unref(settings).chartFilter.smoothingTau)}${ssrIncludeBooleanAttr(!unref(showCorrectionControls)) ? " disabled" : ""} type="range" min="0" max="20" step="1" class="accent-[var(--accent-color,var(--fg-subtle))]" data-v-d78132de></label><label class="flex flex-col gap-1 flex-1" data-v-d78132de><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.prediction"))} <span class="text-fg-muted" data-v-d78132de>(${ssrInterpolate(unref(settings).chartFilter.predictionPoints)})</span></span><input${ssrRenderAttr("value", unref(settings).chartFilter.predictionPoints)}${ssrIncludeBooleanAttr(!unref(showCorrectionControls)) ? " disabled" : ""} type="range" min="0" max="30" step="1" class="accent-[var(--accent-color,var(--fg-subtle))]" data-v-d78132de></label><div class="flex flex-col gap-1 shrink-0" data-v-d78132de><span class="text-2xs font-mono text-fg-subtle tracking-wide uppercase flex items-center justify-between" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.known_anomalies"))} `);
				if (unref(showCorrectionControls)) _push(ssrRenderComponent(_component_TooltipApp, {
					interactive: "",
					to: __props.inModal ? "#chart-modal" : void 0
				}, {
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="flex flex-col gap-3" data-v-d78132de${_scopeId}><p class="text-xs text-fg-muted" data-v-d78132de${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_description"))}</p>`);
							if (unref(hasAnomalies)) {
								_push(`<div data-v-d78132de${_scopeId}><p class="text-xs text-fg-subtle font-medium" data-v-d78132de${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_ranges"))}</p><ul class="text-xs text-fg-subtle list-disc list-inside" data-v-d78132de${_scopeId}><!--[-->`);
								ssrRenderList(unref(packageAnomalies), (a) => {
									_push(`<li data-v-d78132de${_scopeId}>${ssrInterpolate(unref(isMultiPackageMode) ? unref($t)("package.trends.known_anomalies_range_named", {
										packageName: a.packageName,
										start: formatAnomalyDate(a.start),
										end: formatAnomalyDate(a.end)
									}) : unref($t)("package.trends.known_anomalies_range", {
										start: formatAnomalyDate(a.start),
										end: formatAnomalyDate(a.end)
									}))}</li>`);
								});
								_push(`<!--]--></ul></div>`);
							} else _push(`<p class="text-xs text-fg-muted" data-v-d78132de${_scopeId}>${ssrInterpolate(unref($t)("package.trends.known_anomalies_none", unref(effectivePackageNames).length))}</p>`);
							_push(`<div class="flex justify-end" data-v-d78132de${_scopeId}>`);
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
						if (_push) _push(`<button type="button" class="i-lucide:info w-3.5 h-3.5 text-fg-muted cursor-help"${ssrRenderAttr("aria-label", unref($t)("package.trends.known_anomalies"))} data-v-d78132de${_scopeId}></button>`);
						else return [createVNode("button", {
							type: "button",
							class: "i-lucide:info w-3.5 h-3.5 text-fg-muted cursor-help",
							"aria-label": unref($t)("package.trends.known_anomalies")
						}, null, 8, ["aria-label"])];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`</span><label class="${ssrRenderClass([{ "opacity-50": !unref(hasAnomalies) }, "flex items-center gap-1.5 text-2xs font-mono text-fg-subtle cursor-pointer h-4"])}" data-v-d78132de><input${ssrIncludeBooleanAttr(unref(settings).chartFilter.anomaliesFixed) ? " checked" : ""}${ssrIncludeBooleanAttr(!unref(showCorrectionControls)) ? " disabled" : ""} type="checkbox" class="accent-[var(--accent-color,var(--fg-subtle))]" data-v-d78132de> ${ssrInterpolate(unref($t)("package.trends.apply_correction"))}</label></div></div></div></div></div>`);
			} else _push(`<!---->`);
			if (unref(skippedPackagesWithoutGitHub).length > 0) _push(`<p class="text-2xs font-mono text-fg-subtle" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.contributors_skip", { count: unref(skippedPackagesWithoutGitHub).length }))} ${ssrInterpolate(unref(skippedPackagesWithoutGitHub).join(", "))}</p>`);
			else _push(`<!---->`);
			_push(`</div><h2 id="trends-chart-title" class="sr-only" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.title"))} — ${ssrInterpolate(unref(activeMetricDef)?.label)}</h2><div role="region" aria-labelledby="trends-chart-title" class="${ssrRenderClass(unref(isMobile) === false && unref(width) > 0 ? unref(showCorrectionControls) ? "h-[491px]" : "h-[567px]" : "min-h-[260px]")}" data-v-d78132de>`);
			if (unref(chartData).dataset) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="min-h-[260px]" data-v-d78132de${_scopeId}></div>`);
				else return [createVNode("div", { class: "min-h-[260px]" })];
			}) }, _parent));
			else _push(`<!---->`);
			if (!unref(chartData).dataset && !unref(activeMetricState).pending) _push(`<div class="min-h-[260px] flex items-center justify-center text-fg-subtle font-mono text-sm" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.no_data"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(activeMetricState).pending) _push(`<div role="status" aria-live="polite" class="absolute top-1/2 inset-is-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-fg-subtle font-mono bg-bg/70 backdrop-blur px-3 py-2 rounded-md border border-border" data-v-d78132de>${ssrInterpolate(unref($t)("package.trends.loading"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/components/Package/TrendsChart.vue
var _sfc_setup = TrendsChart_vue_vue_type_script_setup_true_lang_default.setup;
TrendsChart_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/TrendsChart.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TrendsChart_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(TrendsChart_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-d78132de"]]), { __name: "PackageTrendsChart" });

export { TrendsChart_default as T, applyEllipsis as a, copyAltTextForCompareFacetBarChart as b, createChartPatternSlotMarkup as c, lightenOklch as d, applyBlocklistCorrection as e, applyDataCorrection as f, getDependencyCount as g, fetchAllPackageVersions as h, insertLineBreaks as i, copyAltTextForVersionsBarChart as j, loadFile as l, sanitise as s, transparentizeOklch as t, useCssVariables as u };
//# sourceMappingURL=TrendsChart-jAJHm3WC.mjs.map

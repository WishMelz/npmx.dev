import { H as useI18n, c as useAccentColor, f as useColorMode, v as useElementSize, M as Base_default$1, Q as client_only_default, w as useResizeObserver, C as useMutationObserver, T as useSupported } from './server.mjs';
import { a as useCompactNumberFormatter } from './useNumberFormatter-B-AHKObJ.mjs';
import { F as Field_default } from './Field-CwiCxWgG.mjs';
import { i as isListedFramework, g as getFrameworkColor } from './frameworks-DgfDq5Tu.mjs';
import { defineComponent, shallowRef, watch, computed, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

function getDependencyCount(version) {
	if (!version?.dependencies) return 0;
	return Object.keys(version.dependencies).length;
}
function readCssVariable(element, variableName) {
	return getComputedStyle(element).getPropertyValue(variableName).trim();
}
function toCamelCase(cssVariable) {
	return cssVariable.replace(/^--/, "").replace(/-([a-z0-9])/gi, (_, c) => c.toUpperCase());
}
function resolveElement(element) {
	return null;
}
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
var mobileBreakpointWidth = 640;
var DownloadAnalytics_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DownloadAnalytics",
	__ssrInlineRender: true,
	props: {
		weeklyDownloads: {},
		inModal: { type: Boolean },
		packageName: {},
		packageNames: {},
		createdIso: {}
	},
	setup(__props) {
		const { t: $t } = useI18n();
		const props = __props;
		const { locale } = useI18n();
		const { accentColors, selectedAccentColor } = useAccentColor();
		const colorMode = useColorMode();
		const resolvedMode = shallowRef("light");
		const rootEl = shallowRef(null);
		shallowRef(false);
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
		const isMobile = computed(() => width.value > 0 && width.value < mobileBreakpointWidth);
		function isRecord(value) {
			return typeof value === "object" && value !== null;
		}
		function isWeeklyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "weekStart" in data[0] && "weekEnd" in data[0] && "downloads" in data[0];
		}
		function isDailyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "day" in data[0] && "downloads" in data[0];
		}
		function isMonthlyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "month" in data[0] && "downloads" in data[0];
		}
		function isYearlyDataset(data) {
			return Array.isArray(data) && data.length > 0 && isRecord(data[0]) && "year" in data[0] && "downloads" in data[0];
		}
		function formatXyDataset(selectedGranularity, dataset, seriesName) {
			if (selectedGranularity === "weekly" && isWeeklyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value,
					useArea: true
				}],
				dates: dataset.map((d) => d.timestampEnd)
			};
			if (selectedGranularity === "daily" && isDailyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value,
					useArea: true
				}],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "monthly" && isMonthlyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value,
					useArea: true
				}],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "yearly" && isYearlyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value,
					useArea: true
				}],
				dates: dataset.map((d) => d.timestamp)
			};
			return {
				dataset: null,
				dates: []
			};
		}
		function extractSeriesPoints(selectedGranularity, dataset) {
			if (selectedGranularity === "weekly" && isWeeklyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestampEnd,
				downloads: d.downloads
			}));
			if (selectedGranularity === "daily" && isDailyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestamp,
				downloads: d.downloads
			}));
			if (selectedGranularity === "monthly" && isMonthlyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestamp,
				downloads: d.downloads
			}));
			if (selectedGranularity === "yearly" && isYearlyDataset(dataset)) return dataset.map((d) => ({
				timestamp: d.timestamp,
				downloads: d.downloads
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
		const selectedGranularity = shallowRef("weekly");
		const displayedGranularity = shallowRef("weekly");
		computed(() => {
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
		computed(() => !pending.value && isEstimationGranularity.value);
		const startDate = shallowRef("");
		const endDate = shallowRef("");
		const hasUserEditedDates = shallowRef(false);
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
		const evolution = shallowRef(props.weeklyDownloads ?? []);
		const evolutionsByPackage = shallowRef({});
		const pending = shallowRef(false);
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
			pending.value = false;
		}, { immediate: true });
		const fetchTriggerKey = computed(() => {
			const names = effectivePackageNames.value.join(",");
			const o = options.value;
			return [
				isMultiPackageMode.value ? "M" : "S",
				names,
				String(props.createdIso ?? ""),
				String(o.granularity ?? ""),
				String(o.weeks ?? ""),
				String(o.months ?? ""),
				String(o.startDate ?? ""),
				String(o.endDate ?? "")
			].join("|");
		});
		watch(() => fetchTriggerKey.value, () => {}, { flush: "post" });
		const effectiveDataSingle = computed(() => {
			if (displayedGranularity.value === "weekly" && props.weeklyDownloads?.length) {
				if (isWeeklyDataset(evolution.value) && evolution.value.length) return evolution.value;
				return props.weeklyDownloads;
			}
			return evolution.value;
		});
		const chartData = computed(() => {
			if (!isMultiPackageMode.value) {
				const pkg = effectivePackageNames.value[0] ?? props.packageName ?? "";
				return formatXyDataset(displayedGranularity.value, effectiveDataSingle.value, pkg);
			}
			const names = effectivePackageNames.value;
			const granularity = displayedGranularity.value;
			const timestampSet = /* @__PURE__ */ new Set();
			const pointsByPackage = /* @__PURE__ */ new Map();
			for (const pkg of names) {
				const points = extractSeriesPoints(granularity, evolutionsByPackage.value[pkg] ?? []);
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
					for (const p of points) map.set(p.timestamp, p.downloads);
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
		computed(() => Math.max(0, ...(chartData.value.dataset ?? []).map((d) => d.series.length)));
		const estimatedMaxFromData = computed(() => {
			if (pending.value) return 0;
			if (!isEstimationGranularity.value) return 0;
			const dataset = chartData.value.dataset;
			const dates = chartData.value.dates;
			if (!dataset?.length || dates.length < 2) return 0;
			const lastBucketTimestampMs = dates[dates.length - 1] ?? 0;
			const referenceMs = (endDate.value ? endDateOnlyToUtcMs(endDate.value) : null) ?? Date.now();
			const completionRatio = getCompletionRatioForBucket({
				bucketTimestampMs: lastBucketTimestampMs,
				granularity: displayedGranularity.value,
				referenceMs
			});
			if (!(completionRatio > 0 && completionRatio < 1)) return 0;
			let maxEstimated = 0;
			for (const serie of dataset) {
				const values = Array.isArray(serie.series) ? serie.series : [];
				if (values.length < 2) continue;
				const lastValue = Number(values[values.length - 1]);
				if (!Number.isFinite(lastValue) || lastValue <= 0) continue;
				const estimated = lastValue / completionRatio;
				if (Number.isFinite(estimated) && estimated > maxEstimated) maxEstimated = estimated;
			}
			return maxEstimated;
		});
		const yAxisScaleMax = computed(() => {
			if (!isEstimationGranularity.value || pending.value) return void 0;
			const datasetMax = getDatasetMaxValue(chartData.value.dataset);
			const estimatedMax = estimatedMaxFromData.value;
			const candidateMax = Math.max(datasetMax, estimatedMax);
			const niceMax = candidateMax > 0 ? niceMaxScale(candidateMax) : 0;
			return niceMax > datasetMax ? niceMax : void 0;
		});
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
		function clampRatio(value) {
			if (value < 0) return 0;
			if (value > 1) return 1;
			return value;
		}
		function endDateOnlyToUtcMs(endDateOnly) {
			if (!/^\d{4}-\d{2}-\d{2}$/.test(endDateOnly)) return null;
			const [y, m, d] = endDateOnly.split("-").map(Number);
			if (!y || !m || !d) return null;
			return Date.UTC(y, m - 1, d, 23, 59, 59, 999);
		}
		function getBucketStartUtc(timestampMs, granularity) {
			const date = new Date(timestampMs);
			if (granularity === "yearly") return Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
			return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1, 0, 0, 0, 0);
		}
		function getBucketEndUtc(timestampMs, granularity) {
			const date = new Date(timestampMs);
			if (granularity === "yearly") return Date.UTC(date.getUTCFullYear() + 1, 0, 1, 0, 0, 0, 0);
			return Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1, 0, 0, 0, 0);
		}
		function getCompletionRatioForBucket(params) {
			const start = getBucketStartUtc(params.bucketTimestampMs, params.granularity);
			const total = getBucketEndUtc(params.bucketTimestampMs, params.granularity) - start;
			if (total <= 0) return 1;
			return clampRatio((params.referenceMs - start) / total);
		}
		function niceMaxScale(value) {
			const v = Number(value);
			if (!Number.isFinite(v) || v <= 0) return 0;
			const base = 10 ** Math.floor(Math.log10(v));
			const fraction = v / base;
			if (fraction <= 1) return 1 * base;
			if (fraction <= 1.25) return 1.25 * base;
			if (fraction <= 1.5) return 1.5 * base;
			if (fraction <= 2) return 2 * base;
			if (fraction <= 2.5) return 2.5 * base;
			if (fraction <= 3) return 3 * base;
			if (fraction <= 4) return 4 * base;
			if (fraction <= 5) return 5 * base;
			if (fraction <= 6) return 6 * base;
			if (fraction <= 8) return 8 * base;
			return 10 * base;
		}
		function getDatasetMaxValue(dataset) {
			if (!dataset?.length) return 0;
			let max = 0;
			for (const serie of dataset) {
				const values = Array.isArray(serie.series) ? serie.series : [];
				for (const v of values) {
					const n = Number(v);
					if (Number.isFinite(n) && n > max) max = n;
				}
			}
			return max;
		}
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "default",
				chart: {
					height: isMobile.value ? 950 : 600,
					backgroundColor: colors.value.bg,
					padding: {
						bottom: displayedGranularity.value === "yearly" ? 84 : 64,
						right: 100
					},
					userOptions: {
						buttons: {
							pdf: false,
							labels: false,
							fullscreen: false,
							table: false,
							tooltip: false
						},
						buttonTitles: {
							csv: $t("package.trends.download_file", { fileType: "CSV" }),
							img: $t("package.trends.download_file", { fileType: "PNG" }),
							svg: $t("package.trends.download_file", { fileType: "SVG" }),
							annotator: $t("package.trends.toggle_annotator")
						},
						callbacks: {
							img: ({ imageUri }) => {
								loadFile(imageUri, buildExportFilename("png"));
							},
							csv: (csvStr) => {
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
							svg: ({ blob }) => {
								const url = URL.createObjectURL(blob);
								loadFile(url, buildExportFilename("svg"));
								URL.revokeObjectURL(url);
							}
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
									facet: $t("package.trends.items.downloads")
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
								useNiceScale: !isEstimationGranularity.value || pending.value,
								scaleMax: yAxisScaleMax.value,
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
						customFormat: ({ datapoint }) => {
							if (!datapoint) return "";
							const items = Array.isArray(datapoint) ? datapoint : [datapoint[0]];
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
						minimap: {
							show: true,
							lineColor: "#FAFAFA",
							selectedColor: accent.value,
							selectedColorOpacity: .06,
							frameColor: colors.value.border
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
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SelectField = Field_default;
			const _component_InputBase = Base_default$1;
			const _component_ClientOnly = client_only_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "w-full relative",
				id: "download-analytics",
				"aria-busy": unref(pending) ? "true" : "false"
			}, _attrs))}><div class="w-full mb-4 flex flex-col gap-3"><div class="flex flex-col sm:flex-row gap-3 sm:gap-2 sm:items-end">`);
			_push(ssrRenderComponent(_component_SelectField, {
				label: unref($t)("package.trends.granularity"),
				id: "granularity",
				modelValue: unref(selectedGranularity),
				"onUpdate:modelValue": ($event) => isRef(selectedGranularity) ? selectedGranularity.value = $event : null,
				disabled: unref(pending),
				items: [
					{
						label: unref($t)("package.trends.granularity_daily"),
						value: "daily"
					},
					{
						label: unref($t)("package.trends.granularity_weekly"),
						value: "weekly"
					},
					{
						label: unref($t)("package.trends.granularity_monthly"),
						value: "monthly"
					},
					{
						label: unref($t)("package.trends.granularity_yearly"),
						value: "yearly"
					}
				]
			}, null, _parent));
			_push(`<div class="grid grid-cols-2 gap-2 flex-1"><div class="flex flex-col gap-1"><label for="startDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.start_date"))}</label><div class="relative flex items-center"><span class="absolute inset-is-2 i-carbon:calendar w-4 h-4 text-fg-subtle shrink-0 pointer-events-none" aria-hidden="true"></span>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "startDate",
				modelValue: unref(startDate),
				"onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
				disabled: unref(pending),
				type: "date",
				class: "w-full min-w-0 bg-transparent ps-7",
				size: "medium"
			}, null, _parent));
			_push(`</div></div><div class="flex flex-col gap-1"><label for="endDate" class="text-2xs font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.trends.end_date"))}</label><div class="relative flex items-center"><span class="absolute inset-is-2 i-carbon:calendar w-4 h-4 text-fg-subtle shrink-0 pointer-events-none" aria-hidden="true"></span>`);
			_push(ssrRenderComponent(_component_InputBase, {
				id: "endDate",
				modelValue: unref(endDate),
				"onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
				disabled: unref(pending),
				type: "date",
				class: "w-full min-w-0 bg-transparent ps-7",
				size: "medium"
			}, null, _parent));
			_push(`</div></div></div>`);
			if (unref(showResetButton)) _push(`<button type="button" aria-label="Reset date range" class="self-end flex items-center justify-center px-2.5 py-1.75 border border-transparent rounded-md text-fg-subtle hover:text-fg transition-colors hover:border-border focus-visible:outline-accent/70 sm:mb-0"><span class="i-carbon:reset w-5 h-5" aria-hidden="true"></span></button>`);
			else _push(`<!---->`);
			_push(`</div></div><h2 id="download-analytics-title" class="sr-only">${ssrInterpolate(unref($t)("package.downloads.title"))}</h2><div role="region" aria-labelledby="download-analytics-title">`);
			if (unref(chartData).dataset) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="min-h-[260px]"${_scopeId}></div>`);
				else return [createVNode("div", { class: "min-h-[260px]" })];
			}) }, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
			if (!unref(chartData).dataset && !unref(pending)) _push(`<div class="min-h-[260px] flex items-center justify-center text-fg-subtle font-mono text-sm">${ssrInterpolate(unref($t)("package.trends.no_data", { facet: unref($t)("package.trends.items.downloads") }))}</div>`);
			else _push(`<!---->`);
			if (unref(pending)) _push(`<div role="status" aria-live="polite" class="absolute top-1/2 inset-is-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-fg-subtle font-mono bg-bg/70 backdrop-blur px-3 py-2 rounded-md border border-border">${ssrInterpolate(unref($t)("package.trends.loading"))}</div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = DownloadAnalytics_vue_vue_type_script_setup_true_lang_default.setup;
DownloadAnalytics_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Package/DownloadAnalytics.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var DownloadAnalytics_default = Object.assign(DownloadAnalytics_vue_vue_type_script_setup_true_lang_default, { __name: "PackageDownloadAnalytics" });

export { DownloadAnalytics_default as D, getDependencyCount as g, lightenOklch as l, useCssVariables as u };
//# sourceMappingURL=DownloadAnalytics-BykjdyXg.mjs.map

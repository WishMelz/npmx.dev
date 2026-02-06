import { k as useI18n, t as useColorMode, u as useElementSize, z as client_only_default, g as useResizeObserver, h as useMutationObserver, _ as useSupported } from './server.mjs';
import { b as useAccentColor } from './useSettings-rf2hWHFQ.mjs';
import { a as formatCompactNumber } from './formatters-CMCwf4t3.mjs';
import { i as isListedFramework, g as getFrameworkColor } from './frameworks-BKkcLNOX.mjs';
import { defineComponent, shallowRef, watch, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

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
		const { width } = useElementSize(rootEl);
		const { colors } = useCssVariables([
			"--bg",
			"--fg",
			"--bg-subtle",
			"--bg-elevated",
			"--fg-subtle",
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
					color: accent.value
				}],
				dates: dataset.map((d) => d.timestampEnd)
			};
			if (selectedGranularity === "daily" && isDailyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value
				}],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "monthly" && isMonthlyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value
				}],
				dates: dataset.map((d) => d.timestamp)
			};
			if (selectedGranularity === "yearly" && isYearlyDataset(dataset)) return {
				dataset: [{
					name: seriesName,
					type: "line",
					series: dataset.map((d) => d.downloads),
					color: accent.value
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
		const xAxisLabel = computed(() => {
			if (!isMultiPackageMode.value) return props.packageName ?? "";
			const names = effectivePackageNames.value;
			if (names.length === 1) return names[0];
			return "packages";
		});
		const selectedGranularity = shallowRef("weekly");
		const displayedGranularity = shallowRef("weekly");
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
		const formatter = ({ value }) => formatCompactNumber(value, { decimals: 1 });
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
		computed(() => {
			return {
				theme: isDarkMode.value ? "dark" : "default",
				chart: {
					height: isMobile.value ? 950 : 600,
					padding: { bottom: 36 },
					userOptions: {
						buttons: {
							pdf: false,
							labels: false,
							fullscreen: false,
							table: false,
							tooltip: false
						},
						buttonTitles: {
							csv: $t("package.downloads.download_file", { fileType: "CSV" }),
							img: $t("package.downloads.download_file", { fileType: "PNG" }),
							svg: $t("package.downloads.download_file", { fileType: "SVG" }),
							annotator: $t("package.downloads.toggle_annotator")
						},
						callbacks: {
							img: ({ imageUri }) => {
								loadFile(imageUri, buildExportFilename("png"));
							},
							csv: (csvStr) => {
								const PLACEHOLDER_CHAR = "\0";
								const multilineDateTemplate = $t("package.downloads.date_range_multiline", {
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
					backgroundColor: colors.value.bg,
					grid: {
						stroke: colors.value.border,
						labels: {
							fontSize: isMobile.value ? 24 : 16,
							axis: {
								yLabel: $t("package.downloads.y_axis_label", { granularity: $t(`package.downloads.granularity_${selectedGranularity.value}`) }),
								xLabel: isMultiPackageMode.value ? "" : xAxisLabel.value,
								yLabelOffsetX: 12,
								fontSize: isMobile.value ? 32 : 24
							},
							xAxisLabels: {
								show: false,
								values: chartData.value?.dates,
								datetimeFormatter: {
									enable: true,
									locale: locale.value,
									useUTC: true,
									options: datetimeFormatterOptions.value
								}
							},
							yAxis: {
								formatter,
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
						customFormat: ({ datapoint }) => {
							if (!datapoint) return "";
							const items = Array.isArray(datapoint) ? datapoint : [datapoint[0]];
							const hasMultipleItems = items.length > 1;
							const rows = items.map((d) => {
								const label = String(d?.name ?? "").trim();
								const raw = Number(d?.value ?? 0);
								const v = formatter({ value: Number.isFinite(raw) ? raw : 0 });
								if (!hasMultipleItems) return `<div>
                  <span class="text-base text-[var(--fg)] font-mono tabular-nums">${v}</span>
                </div>`;
								return `<div class="grid grid-cols-[12px_minmax(0,1fr)_max-content] items-center gap-x-3">
                <div class="w-3 h-3">
                  <svg viewBox="0 0 2 2" class="w-full h-full">
                    <rect x="0" y="0" width="2" height="2" rx="0.3" fill="${d.color}" />
                  </svg>
                </div>

                <span class="text-[10px] uppercase tracking-wide text-[var(--fg)]/70 truncate">
                  ${label}
                </span>

                <span class="text-base text-[var(--fg)] font-mono tabular-nums text-right">
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
			const _component_ClientOnly = client_only_default;
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "w-full relative",
				id: "download-analytics",
				"aria-busy": unref(pending) ? "true" : "false"
			}, _attrs))}><div class="w-full mb-4 flex flex-col gap-3"><div class="flex flex-col sm:flex-row gap-3 sm:gap-2 sm:items-end"><div class="flex flex-col gap-1 sm:shrink-0"><label for="granularity" class="text-[10px] font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.downloads.granularity"))}</label><div class="flex items-center bg-bg-subtle border border-border rounded-md overflow-hidden"><select id="granularity"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="w-full px-2.5 py-1.75 bg-bg-subtle font-mono text-sm text-fg outline-none appearance-none focus-visible:outline-accent/70"><option value="daily"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedGranularity)) ? ssrLooseContain(unref(selectedGranularity), "daily") : ssrLooseEqual(unref(selectedGranularity), "daily")) ? " selected" : ""}>${ssrInterpolate(unref($t)("package.downloads.granularity_daily"))}</option><option value="weekly"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedGranularity)) ? ssrLooseContain(unref(selectedGranularity), "weekly") : ssrLooseEqual(unref(selectedGranularity), "weekly")) ? " selected" : ""}>${ssrInterpolate(unref($t)("package.downloads.granularity_weekly"))}</option><option value="monthly"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedGranularity)) ? ssrLooseContain(unref(selectedGranularity), "monthly") : ssrLooseEqual(unref(selectedGranularity), "monthly")) ? " selected" : ""}>${ssrInterpolate(unref($t)("package.downloads.granularity_monthly"))}</option><option value="yearly"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedGranularity)) ? ssrLooseContain(unref(selectedGranularity), "yearly") : ssrLooseEqual(unref(selectedGranularity), "yearly")) ? " selected" : ""}>${ssrInterpolate(unref($t)("package.downloads.granularity_yearly"))}</option></select></div></div><div class="grid grid-cols-2 gap-2 flex-1"><div class="flex flex-col gap-1"><label for="startDate" class="text-[10px] font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.downloads.start_date"))}</label><div class="flex items-center gap-2 px-2.5 py-1.75 bg-bg-subtle border border-border rounded-md focus-within:border-border-hover focus-within:ring-2 focus-within:ring-accent/70"><span class="i-carbon:calendar w-4 h-4 text-fg-subtle shrink-0" aria-hidden="true"></span><input id="startDate"${ssrRenderAttr("value", unref(startDate))}${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} type="date" class="w-full min-w-0 bg-transparent font-mono text-sm text-fg outline-none [color-scheme:light] dark:[color-scheme:dark]"></div></div><div class="flex flex-col gap-1"><label for="endDate" class="text-[10px] font-mono text-fg-subtle tracking-wide uppercase">${ssrInterpolate(unref($t)("package.downloads.end_date"))}</label><div class="flex items-center gap-2 px-2.5 py-1.75 bg-bg-subtle border border-border rounded-md focus-within:border-border-hover focus-within:ring-2 focus-within:ring-accent/70"><span class="i-carbon:calendar w-4 h-4 text-fg-subtle shrink-0" aria-hidden="true"></span><input id="endDate"${ssrRenderAttr("value", unref(endDate))}${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} type="date" class="w-full min-w-0 bg-transparent font-mono text-sm text-fg outline-none [color-scheme:light] dark:[color-scheme:dark]"></div></div></div>`);
			if (unref(showResetButton)) _push(`<button type="button" aria-label="Reset date range" class="self-end flex items-center justify-center px-2.5 py-1.75 border border-transparent rounded-md text-fg-subtle hover:text-fg transition-colors hover:border-border focus-visible:outline-accent/70 sm:mb-0"><span class="i-carbon:reset w-5 h-5" aria-hidden="true"></span></button>`);
			else _push(`<!---->`);
			_push(`</div></div><h2 id="download-analytics-title" class="sr-only">${ssrInterpolate(unref($t)("package.downloads.title"))}</h2><div role="region" aria-labelledby="download-analytics-title">`);
			if (unref(chartData).dataset) _push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="min-h-[260px]"${_scopeId}></div>`);
				else return [createVNode("div", { class: "min-h-[260px]" })];
			}) }, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
			if (!unref(chartData).dataset && !unref(pending)) _push(`<div class="min-h-[260px] flex items-center justify-center text-fg-subtle font-mono text-sm">${ssrInterpolate(unref($t)("package.downloads.no_data"))}</div>`);
			else _push(`<!---->`);
			if (unref(pending)) _push(`<div role="status" aria-live="polite" class="absolute top-1/2 inset-is-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-fg-subtle font-mono bg-bg/70 backdrop-blur px-3 py-2 rounded-md border border-border">${ssrInterpolate(unref($t)("package.downloads.loading"))}</div>`);
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
//# sourceMappingURL=DownloadAnalytics-Cw74_EQM.mjs.map

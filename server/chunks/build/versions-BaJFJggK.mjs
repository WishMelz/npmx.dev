function parseVersion(version) {
	const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?/);
	if (!match) return {
		major: 0,
		minor: 0,
		patch: 0,
		prerelease: ""
	};
	return {
		major: Number(match[1]),
		minor: Number(match[2]),
		patch: Number(match[3]),
		prerelease: match[4] ?? ""
	};
}
function getPrereleaseChannel(version) {
	const parsed = parseVersion(version);
	if (!parsed.prerelease) return "";
	const match = parsed.prerelease.match(/^([a-z]+)/i);
	return match ? match[1].toLowerCase() : "";
}
function buildVersionToTagsMap(distTags) {
	const map = /* @__PURE__ */ new Map();
	for (const [tag, version] of Object.entries(distTags)) {
		const existing = map.get(version);
		if (existing) existing.push(tag);
		else map.set(version, [tag]);
	}
	for (const tags of map.values()) tags.sort((a, b) => {
		if (a === "latest") return -1;
		if (b === "latest") return 1;
		return a.localeCompare(b);
	});
	return map;
}
function filterExcludedTags(tags, excludeTags) {
	const excludeSet = new Set(excludeTags);
	return tags.filter((tag) => !excludeSet.has(tag));
}
function getVersionGroupKey(version) {
	const parsed = parseVersion(version);
	if (parsed.major === 0) return `0.${parsed.minor}`;
	return String(parsed.major);
}
function getVersionGroupLabel(groupKey) {
	return `${groupKey}.x`;
}
function isSameVersionGroup(versionA, versionB) {
	return getVersionGroupKey(versionA) === getVersionGroupKey(versionB);
}

export { getVersionGroupKey as a, buildVersionToTagsMap as b, getVersionGroupLabel as c, filterExcludedTags as f, getPrereleaseChannel as g, isSameVersionGroup as i };
//# sourceMappingURL=versions-BaJFJggK.mjs.map

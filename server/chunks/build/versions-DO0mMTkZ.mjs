import { validRange, satisfies } from 'semver';

/**
* Parse a semver version string into its components
* @param version - The version string (e.g., "1.2.3" or "1.0.0-beta.1")
* @returns Parsed version object with major, minor, patch, and prerelease
*/
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
/**
* Extract the prerelease channel from a version string
* @param version - The version string (e.g., "1.0.0-beta.1")
* @returns The channel name (e.g., "beta") or empty string for stable versions
*/
function getPrereleaseChannel(version) {
	const parsed = parseVersion(version);
	if (!parsed.prerelease) return "";
	const match = parsed.prerelease.match(/^([a-z]+)/i);
	return match ? match[1].toLowerCase() : "";
}
/**
* Build a map from version strings to their associated dist-tags
* Handles the case where multiple tags point to the same version
* @param distTags - Object mapping tag names to version strings
* @returns Map from version to sorted array of tags
*/
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
/**
* Filter tags to exclude those already shown in a parent context
* Useful when showing nested versions that shouldn't repeat parent tags
* @param tags - Tags to filter
* @param excludeTags - Tags to exclude
* @returns Filtered array of tags
*/
function filterExcludedTags(tags, excludeTags) {
	const excludeSet = new Set(excludeTags);
	return tags.filter((tag) => !excludeSet.has(tag));
}
/**
* Get a grouping key for a version that handles 0.x versions specially.
*
* Per semver spec, versions below 1.0.0 can have breaking changes in minor bumps,
* so 0.9.x should be in a separate group from 0.10.x.
*
* @param version - The version string (e.g., "0.9.3", "1.2.3")
* @returns A grouping key string (e.g., "0.9", "1")
*/
function getVersionGroupKey(version) {
	const parsed = parseVersion(version);
	if (parsed.major === 0) return `0.${parsed.minor}`;
	return String(parsed.major);
}
/**
* Get a display label for a version group key.
*
* @param groupKey - The group key from getVersionGroupKey()
* @returns A display label (e.g., "0.9.x", "1.x")
*/
function getVersionGroupLabel(groupKey) {
	return `${groupKey}.x`;
}
/**
* Check if two versions belong to the same version group.
*
* For versions >= 1.0.0, same major = same group.
* For versions < 1.0.0, same major.minor = same group.
*
* @param versionA - First version string
* @param versionB - Second version string
* @returns true if both versions are in the same group
*/
function isSameVersionGroup(versionA, versionB) {
	return getVersionGroupKey(versionA) === getVersionGroupKey(versionB);
}
/**
* Filter versions by a semver range string.
*
* @param versions - Array of version strings to filter
* @param range - A semver range string (e.g., "^3.0.0", ">=2.0.0 <3.0.0")
* @returns Set of version strings that satisfy the range.
*   Returns all versions if range is empty/whitespace.
*   Returns empty set if range is invalid.
*/
function filterVersions(versions, range) {
	const trimmed = range.trim();
	if (trimmed === "") return new Set(versions);
	if (!validRange(trimmed)) return /* @__PURE__ */ new Set();
	const matched = /* @__PURE__ */ new Set();
	for (const v of versions) if (satisfies(v, trimmed, { includePrerelease: true })) matched.add(v);
	return matched;
}

export { getVersionGroupKey as a, buildVersionToTagsMap as b, getVersionGroupLabel as c, filterExcludedTags as d, filterVersions as f, getPrereleaseChannel as g, isSameVersionGroup as i };
//# sourceMappingURL=versions-DO0mMTkZ.mjs.map

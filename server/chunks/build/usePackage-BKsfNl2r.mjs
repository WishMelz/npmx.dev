import { z as useLazyAsyncData } from './server.mjs';
import { toValue } from 'vue';
import { n as encodePackageName } from '../nitro/nitro.mjs';

var INSTALL_SCRIPTS = new Set([
	"preinstall",
	"install",
	"postinstall"
]);
var NPX_PATTERN = /\bnpx\s+(?:--?\w+(?:=\S+)?\s+)*(@?[\w.-]+(?:\/[\w.-]+)?(?:@[\w.^~<>=|-]+)?)/g;
var PACKAGE_VERSION_PATTERN = /^(@[\w.-]+\/[\w.-]+|[\w.-]+)(?:@(.+))?$/;
/**
* Extract packages from npx calls in install scripts.
* Only considers preinstall, install, postinstall - scripts that run for end-users.
*
* @param scripts - The scripts object from package.json
* @returns Record of package name to version (or "latest" if none specified)
*/
function extractNpxDependencies(scripts) {
	if (!scripts) return {};
	const npxPackages = {};
	for (const [scriptName, script] of Object.entries(scripts)) {
		if (!INSTALL_SCRIPTS.has(scriptName)) continue;
		NPX_PATTERN.lastIndex = 0;
		let match;
		while ((match = NPX_PATTERN.exec(script)) !== null) {
			const captured = match[1];
			if (!captured) continue;
			const parsed = PACKAGE_VERSION_PATTERN.exec(captured);
			if (parsed && parsed[1]) {
				const packageName = parsed[1];
				const version = parsed[2] || "latest";
				if (isBuiltinCommand(packageName)) continue;
				if (!(packageName in npxPackages)) npxPackages[packageName] = version;
			}
		}
	}
	return npxPackages;
}
/**
* Check if a command is a built-in/common command that isn't an npm package
*/
function isBuiltinCommand(name) {
	return new Set([
		"env",
		"node",
		"npm",
		"yarn",
		"pnpm",
		"yes",
		"no",
		"quiet",
		"shell"
	]).has(name);
}
/**
* Extract install script information from package.json scripts.
* Returns info about which install scripts exist and any npx packages they call.
*
* @param scripts - The scripts object from package.json
* @returns Info about install scripts and npx dependencies, or null if no install scripts
*/
function extractInstallScriptsInfo(scripts) {
	if (!scripts) return null;
	const presentScripts = [];
	const content = {};
	for (const scriptName of INSTALL_SCRIPTS) if (scripts[scriptName]) {
		presentScripts.push(scriptName);
		content[scriptName] = scripts[scriptName];
	}
	if (presentScripts.length === 0) return null;
	return {
		scripts: presentScripts,
		content,
		npxDependencies: extractNpxDependencies(scripts)
	};
}
/**
* Pattern to match scripts that are just `node <file-path>`
* Captures the file path (relative paths with alphanumeric chars, dots, hyphens, underscores, and slashes)
*/
var NODE_SCRIPT_PATTERN = /^node\s+([\w./-]+)$/;
/**
* Parse an install script into a prefix and a linkable file path.
* - If the script is `node <file-path>`, returns { prefix: 'node ', filePath: '<file-path>' }
*   so only the file path portion can be rendered as a link.
* - Otherwise, returns null (the entire script content should link to package.json).
*
* @param scriptContent - The content of the script
* @returns Parsed parts, or null if no node file path was extracted
*/
function parseNodeScript(scriptContent) {
	const match = NODE_SCRIPT_PATTERN.exec(scriptContent);
	if (match?.[1]) {
		const filePath = match[1].replace(/^\.\//, "");
		if (filePath.includes("../") || filePath.includes("./")) return null;
		return {
			prefix: scriptContent.slice(0, match.index + match[0].indexOf(match[1])),
			filePath
		};
	}
	return null;
}
/** Number of recent versions to include in initial payload */
var RECENT_VERSIONS_COUNT = 5;
function hasAttestations(version) {
	return Boolean(version.dist.attestations);
}
function hasTrustedPublisher(version) {
	return Boolean(version._npmUser?.trustedPublisher);
}
function getTrustLevel(version) {
	if (hasTrustedPublisher(version)) return "trustedPublisher";
	if (hasAttestations(version)) return "provenance";
	return "none";
}
/**
* Transform a full Packument into a slimmed version for client-side use.
* Reduces payload size by:
* - Removing readme (fetched separately)
* - Including only: 5 most recent versions + one version per dist-tag + requested version
* - Stripping unnecessary fields from version objects
*/
function transformPackument(pkg, requestedVersion) {
	const distTagVersions = new Set(Object.values(pkg["dist-tags"] ?? {}));
	const recentVersions = Object.keys(pkg.versions).filter((v) => pkg.time[v]).sort((a, b) => {
		const timeA = pkg.time[a];
		const timeB = pkg.time[b];
		if (!timeA || !timeB) return 0;
		return new Date(timeB).getTime() - new Date(timeA).getTime();
	}).slice(0, RECENT_VERSIONS_COUNT);
	const includedVersions = new Set([...recentVersions, ...distTagVersions]);
	if (requestedVersion && pkg.versions[requestedVersion]) includedVersions.add(requestedVersion);
	const securityVersionEntries = Object.entries(pkg.versions).map(([version, metadata]) => {
		const trustLevel = getTrustLevel(metadata);
		return {
			version,
			time: pkg.time[version],
			hasProvenance: trustLevel !== "none",
			trustLevel,
			deprecated: metadata.deprecated
		};
	});
	const securityVersions = new Set(securityVersionEntries.map((v) => v.trustLevel)).size > 1 ? securityVersionEntries : void 0;
	const filteredVersions = {};
	let versionData = null;
	for (const v of includedVersions) {
		const version = pkg.versions[v];
		if (version) {
			if (version.version === requestedVersion) {
				const { readme: _readme, scripts, ...slimVersion } = version;
				const installScripts = scripts ? extractInstallScriptsInfo(scripts) : null;
				versionData = {
					...slimVersion,
					installScripts: installScripts ?? void 0
				};
			}
			const trustLevel = getTrustLevel(version);
			filteredVersions[v] = {
				hasProvenance: trustLevel !== "none",
				trustLevel,
				version: version.version,
				deprecated: version.deprecated,
				tags: version.tags
			};
		}
	}
	const filteredTime = {};
	if (pkg.time.modified) filteredTime.modified = pkg.time.modified;
	if (pkg.time.created) filteredTime.created = pkg.time.created;
	for (const v of includedVersions) if (pkg.time[v]) filteredTime[v] = pkg.time[v];
	let license = pkg.license;
	if (license && typeof license === "object" && "type" in license) license = license.type;
	const rawStorybook = (requestedVersion ? pkg.versions[requestedVersion] : null)?.storybook;
	const storybook = rawStorybook && typeof rawStorybook === "object" && "url" in rawStorybook ? { url: rawStorybook.url } : void 0;
	return {
		"_id": pkg._id,
		"_rev": pkg._rev,
		"name": pkg.name,
		"description": pkg.description,
		"dist-tags": pkg["dist-tags"],
		"time": filteredTime,
		"maintainers": pkg.maintainers,
		"author": pkg.author,
		"license": license,
		"homepage": pkg.homepage,
		"keywords": pkg.keywords,
		"repository": pkg.repository,
		"bugs": pkg.bugs,
		...storybook && { storybook },
		"requestedVersion": versionData,
		"versions": filteredVersions,
		"securityVersions": securityVersions
	};
}
function usePackage(name, requestedVersion) {
	return useLazyAsyncData(() => `package:${toValue(name)}:${toValue(requestedVersion) ?? ""}`, async ({ $npmRegistry }, { signal }) => {
		const { data: r, isStale } = await $npmRegistry(`/${encodePackageName(toValue(name))}`, { signal });
		return {
			...transformPackument(r, toValue(requestedVersion)),
			isStale
		};
	}, "$vZzEhzMnZw");
}

export { parseNodeScript as p, usePackage as u };
//# sourceMappingURL=usePackage-BKsfNl2r.mjs.map

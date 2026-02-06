import { R as useLazyAsyncData } from './server.mjs';
import { u as useCachedFetch, N as NPM_REGISTRY } from './useCachedFetch-B1uvSFXX.mjs';
import { toValue } from 'vue';
import { aM as encodePackageName } from '../nitro/nitro.mjs';

var INSTALL_SCRIPTS = new Set([
	"preinstall",
	"install",
	"postinstall"
]);
var NPX_PATTERN = /\bnpx\s+(?:--?\w+(?:=\S+)?\s+)*(@?[\w.-]+(?:\/[\w.-]+)?(?:@[\w.^~<>=|-]+)?)/g;
var PACKAGE_VERSION_PATTERN = /^(@[\w.-]+\/[\w.-]+|[\w.-]+)(?:@(.+))?$/;
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
var RECENT_VERSIONS_COUNT = 5;
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
			filteredVersions[v] = {
				...version?.dist ? { hasProvenance: true } : {},
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
		"requestedVersion": versionData,
		"versions": filteredVersions
	};
}
function usePackage(name, requestedVersion) {
	const cachedFetch = useCachedFetch();
	return useLazyAsyncData(() => `package:${toValue(name)}:${toValue(requestedVersion) ?? ""}`, async (_nuxtApp, { signal }) => {
		const { data: r, isStale } = await cachedFetch(`${NPM_REGISTRY}/${encodePackageName(toValue(name))}`, { signal });
		return {
			...transformPackument(r, toValue(requestedVersion)),
			isStale
		};
	}, "$vZzEhzMnZw");
}

export { usePackage as u };
//# sourceMappingURL=usePackage-BXGEuekC.mjs.map

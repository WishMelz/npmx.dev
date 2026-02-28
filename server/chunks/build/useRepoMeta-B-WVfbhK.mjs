import { c as useAsyncData, U as useCachedFetch, z as useLazyAsyncData } from './server.mjs';
import { computed, toValue } from 'vue';
import { y as parseRepoUrl, aY as GITLAB_HOSTS } from '../nitro/nitro.mjs';

function useResolvedVersion(packageName, requestedVersion) {
	return useAsyncData(() => `resolved-version:${toValue(packageName)}:${toValue(requestedVersion) ?? "latest"}`, async () => {
		const version = toValue(requestedVersion);
		const name = toValue(packageName);
		const url = version ? `https://npm.antfu.dev/${name}@${version}` : `https://npm.antfu.dev/${name}`;
		return (await $fetch(url)).version;
	}, { default: () => void 0 });
}
var REPO_META_TTL = 600;
var providers = [
	{
		id: "github",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "github.com" && host !== "www.github.com") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "github",
				owner,
				repo
			};
		},
		links(ref) {
			const base = `https://github.com/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: `${base}/stargazers`,
				forks: `${base}/forks`,
				watchers: `${base}/watchers`
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			let res = null;
			try {
				const { data } = await cachedFetch(`https://ungh.cc/repos/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			const repo = res?.repo;
			if (!repo) return null;
			return {
				provider: "github",
				url: links.repo,
				stars: repo.stars ?? 0,
				forks: repo.forks ?? 0,
				watchers: repo.watchers ?? 0,
				description: repo.description ?? null,
				defaultBranch: repo.defaultBranch,
				links
			};
		}
	},
	{
		id: "gitlab",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (!GITLAB_HOSTS.some((h) => host === h || host === `www.${h}`)) return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const repo = decodeURIComponent(parts[parts.length - 1] ?? "").trim().replace(/\.git$/i, "");
			const owner = parts.slice(0, -1).map((p) => decodeURIComponent(p).trim()).join("/");
			if (!owner || !repo) return null;
			return {
				provider: "gitlab",
				owner,
				repo,
				host
			};
		},
		links(ref) {
			const base = `https://${ref.host ?? "gitlab.com"}/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: `${base}/-/starrers`,
				forks: `${base}/-/forks`
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			const baseHost = ref.host ?? "gitlab.com";
			const projectPath = encodeURIComponent(`${ref.owner}/${ref.repo}`);
			let res = null;
			try {
				const { data } = await cachedFetch(`https://${baseHost}/api/v4/projects/${projectPath}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "gitlab",
				url: links.repo,
				stars: res.star_count ?? 0,
				forks: res.forks_count ?? 0,
				description: res.description ?? null,
				defaultBranch: res.default_branch,
				links
			};
		}
	},
	{
		id: "bitbucket",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "bitbucket.org" && host !== "www.bitbucket.org") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "bitbucket",
				owner,
				repo
			};
		},
		links(ref) {
			const base = `https://bitbucket.org/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: `${base}/forks`
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			let res = null;
			try {
				const { data } = await cachedFetch(`https://api.bitbucket.org/2.0/repositories/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "bitbucket",
				url: links.repo,
				stars: 0,
				forks: 0,
				description: res.description ?? null,
				defaultBranch: res.mainbranch?.name,
				links
			};
		}
	},
	{
		id: "codeberg",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "codeberg.org" && host !== "www.codeberg.org") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "codeberg",
				owner,
				repo,
				host: "codeberg.org"
			};
		},
		links(ref) {
			const base = `https://codeberg.org/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: `${base}/forks`,
				watchers: base
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			let res = null;
			try {
				const { data } = await cachedFetch(`https://codeberg.org/api/v1/repos/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "codeberg",
				url: links.repo,
				stars: res.stars_count ?? 0,
				forks: res.forks_count ?? 0,
				watchers: res.watchers_count ?? 0,
				description: res.description ?? null,
				defaultBranch: res.default_branch,
				links
			};
		}
	},
	{
		id: "gitee",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "gitee.com" && host !== "www.gitee.com") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "gitee",
				owner,
				repo
			};
		},
		links(ref) {
			const base = `https://gitee.com/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: `${base}/stargazers`,
				forks: `${base}/members`,
				watchers: `${base}/watchers`
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			let res = null;
			try {
				const { data } = await cachedFetch(`https://gitee.com/api/v5/repos/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "gitee",
				url: links.repo,
				stars: res.stargazers_count ?? 0,
				forks: res.forks_count ?? 0,
				watchers: res.watchers_count ?? 0,
				description: res.description ?? null,
				defaultBranch: res.default_branch,
				links
			};
		}
	},
	{
		id: "sourcehut",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "sr.ht" && host !== "git.sr.ht") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "sourcehut",
				owner,
				repo
			};
		},
		links(ref) {
			const base = `https://git.sr.ht/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: base
			};
		},
		async fetchMeta(_cachedFetch, _ref, links) {
			return {
				provider: "sourcehut",
				url: links.repo,
				stars: 0,
				forks: 0,
				links
			};
		}
	},
	{
		id: "tangled",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "tangled.sh" && host !== "www.tangled.sh" && host !== "tangled.org" && host !== "www.tangled.org") return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "tangled",
				owner,
				repo
			};
		},
		links(ref) {
			const base = `https://tangled.org/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: `${base}/fork`
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			try {
				const { data } = await cachedFetch(`/api/atproto/tangled-stats/${ref.owner}/${ref.repo}`, options, REPO_META_TTL);
				return {
					provider: "tangled",
					url: links.repo,
					stars: data.stars,
					forks: data.forks,
					links
				};
			} catch {
				return {
					provider: "tangled",
					url: links.repo,
					stars: 0,
					forks: 0,
					links
				};
			}
		}
	},
	{
		id: "radicle",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (host !== "radicle.at" && host !== "app.radicle.at" && host !== "seed.radicle.at") return null;
			const radMatch = url.pathname.match(/rad:[a-zA-Z0-9]+/);
			if (!radMatch?.[0]) return null;
			return {
				provider: "radicle",
				owner: "",
				repo: radMatch[0],
				host
			};
		},
		links(ref) {
			const base = `https://app.radicle.at/nodes/seed.radicle.at/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: base
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			let res = null;
			try {
				const { data } = await cachedFetch(`https://seed.radicle.at/api/v1/projects/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "radicle",
				url: links.repo,
				stars: res.seeding ?? 0,
				forks: 0,
				description: res.description ?? null,
				defaultBranch: res.defaultBranch,
				links
			};
		}
	},
	{
		id: "forgejo",
		parse(url) {
			const host = url.hostname.toLowerCase();
			if (!(["next.forgejo.org", "try.next.forgejo.org"].some((h) => host === h) || [/^forgejo\./i, /\.forgejo\./i].some((p) => p.test(host)))) return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "forgejo",
				owner,
				repo,
				host
			};
		},
		links(ref) {
			const base = `https://${ref.host}/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: `${base}/forks`,
				watchers: base
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			if (!ref.host) return null;
			let res = null;
			try {
				const { data } = await cachedFetch(`https://${ref.host}/api/v1/repos/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "forgejo",
				url: links.repo,
				stars: res.stars_count ?? 0,
				forks: res.forks_count ?? 0,
				watchers: res.watchers_count ?? 0,
				description: res.description ?? null,
				defaultBranch: res.default_branch,
				links
			};
		}
	},
	{
		id: "gitea",
		parse(url) {
			const host = url.hostname.toLowerCase();
			const giteaPatterns = [
				/^git\./i,
				/^gitea\./i,
				/^forgejo\./i,
				/^code\./i,
				/^src\./i,
				/gitea\.io$/i
			];
			if ([
				"github.com",
				"gitlab.com",
				"codeberg.org",
				"bitbucket.org",
				"gitee.com",
				"sr.ht",
				"git.sr.ht",
				...GITLAB_HOSTS
			].some((h) => host === h || host.endsWith(`.${h}`))) return null;
			if (!giteaPatterns.some((p) => p.test(host))) return null;
			const parts = url.pathname.split("/").filter(Boolean);
			if (parts.length < 2) return null;
			const owner = decodeURIComponent(parts[0] ?? "").trim();
			const repo = decodeURIComponent(parts[1] ?? "").trim().replace(/\.git$/i, "");
			if (!owner || !repo) return null;
			return {
				provider: "gitea",
				owner,
				repo,
				host
			};
		},
		links(ref) {
			const base = `https://${ref.host}/${ref.owner}/${ref.repo}`;
			return {
				repo: base,
				stars: base,
				forks: `${base}/forks`,
				watchers: base
			};
		},
		async fetchMeta(cachedFetch, ref, links, options = {}) {
			if (!ref.host) return null;
			let res = null;
			try {
				const { data } = await cachedFetch(`https://${ref.host}/api/v1/repos/${ref.owner}/${ref.repo}`, {
					headers: {
						"User-Agent": "npmx",
						...options.headers
					},
					...options
				}, REPO_META_TTL);
				res = data;
			} catch {
				return null;
			}
			if (!res) return null;
			return {
				provider: "gitea",
				url: links.repo,
				stars: res.stars_count ?? 0,
				forks: res.forks_count ?? 0,
				watchers: res.watchers_count ?? 0,
				description: res.description ?? null,
				defaultBranch: res.default_branch,
				links
			};
		}
	}
];
var parseRepoFromUrl = parseRepoUrl;
function useRepoMeta(repositoryUrl) {
	const cachedFetch = useCachedFetch();
	const repoRef = computed(() => {
		const url = toValue(repositoryUrl);
		if (!url) return null;
		return parseRepoFromUrl(url);
	});
	const { data, pending, error, refresh } = useLazyAsyncData(() => repoRef.value ? `repo-meta:${repoRef.value.provider}:${repoRef.value.owner}/${repoRef.value.repo}` : "repo-meta:none", async (_nuxtApp, { signal }) => {
		const ref = repoRef.value;
		if (!ref) return null;
		const adapter = providers.find((provider) => provider.id === ref.provider);
		if (!adapter) return null;
		const links = adapter.links(ref);
		return await adapter.fetchMeta(cachedFetch, ref, links, { signal });
	}, "$VF0cmbNfT_");
	const meta = computed(() => data.value ?? null);
	return {
		repoRef,
		meta,
		stars: computed(() => meta.value?.stars ?? 0),
		forks: computed(() => meta.value?.forks ?? 0),
		watchers: computed(() => meta.value?.watchers ?? 0),
		starsLink: computed(() => meta.value?.links.stars ?? null),
		forksLink: computed(() => meta.value?.links.forks ?? null),
		watchersLink: computed(() => meta.value?.links.watchers ?? null),
		repoLink: computed(() => meta.value?.links.repo ?? null),
		pending,
		error,
		refresh
	};
}

export { useRepoMeta as a, useResolvedVersion as u };
//# sourceMappingURL=useRepoMeta-B-WVfbhK.mjs.map

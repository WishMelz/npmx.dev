import { d as defineCachedEventHandler, u as useRuntimeConfig, c as createError } from '../../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'diff';
import '@atproto/common';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'valibot';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'marked';
import 'sanitize-html';
import 'node:dns/promises';
import 'ipaddr.js';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import 'vue-router';
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const FALLBACK_STEWARDS = /* @__PURE__ */ new Set(["danielroe", "patak-dev"]);
async function fetchTeamMembers(token) {
  const teams = {
    steward: "stewards",
    maintainer: "maintainers"
  };
  try {
    const result = { steward: /* @__PURE__ */ new Set(), maintainer: /* @__PURE__ */ new Set() };
    for (const [role, slug] of Object.entries(teams)) {
      const response = await fetch(
        `https://api.github.com/orgs/npmx-dev/teams/${slug}/members?per_page=100`,
        {
          headers: {
            "Accept": "application/vnd.github.v3+json",
            "Authorization": `Bearer ${token}`,
            "User-Agent": "npmx"
          }
        }
      );
      if (!response.ok) {
        console.warn(`Failed to fetch ${slug} team members: ${response.status}`);
        return null;
      }
      const members = await response.json();
      for (const member of members) {
        result[role].add(member.login);
      }
    }
    return result;
  } catch (error) {
    console.warn("Failed to fetch team members from GitHub:", error);
    return null;
  }
}
async function fetchSponsorable(token, logins) {
  if (logins.length === 0) return /* @__PURE__ */ new Set();
  const fragments = logins.map(
    (login, i) => `user${i}: user(login: "${login}") { hasSponsorsListing login }`
  );
  const query = `{ ${fragments.join("\n")} }`;
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "npmx"
      },
      body: JSON.stringify({ query })
    });
    if (!response.ok) {
      console.warn(`Failed to fetch sponsors info: ${response.status}`);
      return /* @__PURE__ */ new Set();
    }
    const json = await response.json();
    const sponsorable = /* @__PURE__ */ new Set();
    if (json.data) {
      for (const user of Object.values(json.data)) {
        if (user?.hasSponsorsListing) {
          sponsorable.add(user.login);
        }
      }
    }
    return sponsorable;
  } catch (error) {
    console.warn("Failed to fetch sponsors info:", error);
    return /* @__PURE__ */ new Set();
  }
}
function getRoleInfo(login, teams) {
  if (teams.steward.has(login)) return { role: "steward", order: 0 };
  if (teams.maintainer.has(login)) return { role: "maintainer", order: 1 };
  return { role: "contributor", order: 2 };
}
const contributors_get = defineCachedEventHandler(
  async () => {
    const githubToken = useRuntimeConfig().github.orgToken;
    const teams = await (async () => {
      if (githubToken) {
        const fetched = await fetchTeamMembers(githubToken);
        if (fetched) return fetched;
      }
      return { steward: FALLBACK_STEWARDS, maintainer: /* @__PURE__ */ new Set() };
    })();
    const allContributors = [];
    let page = 1;
    const perPage = 100;
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/npmx-dev/npmx.dev/contributors?per_page=${perPage}&page=${page}`,
        {
          headers: {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "npmx",
            ...githubToken && { Authorization: `Bearer ${githubToken}` }
          }
        }
      );
      if (!response.ok) {
        throw createError({
          statusCode: response.status,
          message: "Failed to fetch contributors"
        });
      }
      const contributors = await response.json();
      if (contributors.length === 0) {
        break;
      }
      allContributors.push(...contributors);
      if (contributors.length < perPage) {
        break;
      }
      page++;
    }
    const filtered = allContributors.filter((c) => !c.login.includes("[bot]"));
    const maintainerLogins = filtered.filter((c) => teams.steward.has(c.login) || teams.maintainer.has(c.login)).map((c) => c.login);
    const sponsorable = githubToken ? await fetchSponsorable(githubToken, maintainerLogins) : /* @__PURE__ */ new Set();
    return filtered.map((c) => {
      const { role, order } = getRoleInfo(c.login, teams);
      const sponsors_url = sponsorable.has(c.login) ? `https://github.com/sponsors/${c.login}` : null;
      Object.assign(c, { role, order, sponsors_url });
      return c;
    }).sort((a, b) => a.order - b.order || b.contributions - a.contributions).map(({ order: _, ...rest }) => rest);
  },
  {
    maxAge: 3600,
    // Cache for 1 hour
    name: "github-contributors",
    getKey: () => "contributors"
  }
);

export { contributors_get as default };
//# sourceMappingURL=contributors.get.mjs.map

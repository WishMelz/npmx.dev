import { d as defineCachedEventHandler, f as CACHE_MAX_AGE_ONE_HOUR, at as getRequestURL, m as PackageRouteParamsSchema, B as fetchNpmPackage, c as createError, r as getPackageFileTree, av as findSkillDirs, cu as fetchSkillsListForWellKnown, D as setHeader, az as fetchSkillFile, G as CACHE_MAX_AGE_ONE_YEAR } from '../../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import { S as SkillNameSchema } from '../../../../../_/skills.mjs';

const ____skills_$1 = defineCachedEventHandler(
  async (event) => {
    const url = getRequestURL(event);
    const match = url.pathname.match(/^\/(.+?)\/\.well-known\/skills\/(.*)$/);
    const [, pkgPath, skillsPath] = match;
    const validated = v.parse(PackageRouteParamsSchema, {
      packageName: pkgPath,
      version: void 0
    });
    const packument = await fetchNpmPackage(validated.packageName);
    const version = packument["dist-tags"]?.latest;
    if (!version) throw createError({ statusCode: 404, message: "No latest version found" });
    if (skillsPath === "index.json" || skillsPath === "") {
      const fileTree = await getPackageFileTree(validated.packageName, version);
      const skillDirs = findSkillDirs(fileTree.tree);
      const skills = skillDirs.length ? await fetchSkillsListForWellKnown(
        validated.packageName,
        version,
        skillDirs.map((s) => s.name)
      ) : [];
      setHeader(event, "Cache-Control", `public, max-age=${CACHE_MAX_AGE_ONE_HOUR}`);
      setHeader(event, "Content-Type", "application/json");
      return { skills };
    }
    const [skillName, ...rest] = skillsPath.split("/");
    const fileName = rest.join("/");
    if (fileName === "SKILL.md" || fileName === "") {
      const content = await fetchSkillFile(
        validated.packageName,
        version,
        `skills/${v.parse(SkillNameSchema, skillName)}/SKILL.md`
      );
      setHeader(event, "Cache-Control", `public, max-age=${CACHE_MAX_AGE_ONE_YEAR}, immutable`);
      setHeader(event, "Content-Type", "text/markdown; charset=utf-8");
      return content;
    }
    throw createError({ statusCode: 404, message: "File not found" });
  },
  {
    maxAge: CACHE_MAX_AGE_ONE_HOUR,
    swr: true,
    getKey: (event) => `well-known-skills:v1:${getRequestURL(event).pathname.replace(/\/+$/, "")}`
  }
);

const ____skills_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____skills_$1
}, Symbol.toStringTag, { value: 'Module' }));

const ____skills_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____skills_$1
}, Symbol.toStringTag, { value: 'Module' }));

export { ____skills_$2 as _, ____skills_ as a };
//# sourceMappingURL=_...skills_.mjs.map

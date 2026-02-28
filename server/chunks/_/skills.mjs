import * as v from 'valibot';

const SkillNameSchema = v.pipe(
  v.string(),
  v.minLength(1),
  v.maxLength(64),
  v.regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, "Invalid skill name"),
  v.check((s) => !s.includes("--"), "No consecutive hyphens")
);

export { SkillNameSchema as S };
//# sourceMappingURL=skills.mjs.map

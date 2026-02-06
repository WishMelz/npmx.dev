import * as v from 'valibot';
import validatePackageName from 'validate-npm-package-name';

const PackageNameSchema = v.pipe(
  v.string(),
  v.nonEmpty("Package name is required"),
  v.check((input) => {
    const result = validatePackageName(input);
    return result.validForNewPackages || result.validForOldPackages;
  }, "Invalid package name format")
);
const VersionSchema = v.pipe(
  v.string(),
  v.nonEmpty("Version is required"),
  v.regex(/^[a-z0-9._+-]+$/i, "Invalid version format")
);
const FilePathSchema = v.pipe(
  v.string(),
  v.nonEmpty("File path is required"),
  v.check((input) => !input.includes(".."), "Invalid path: directory traversal not allowed"),
  v.check((input) => !input.startsWith("/"), "Invalid path: must be relative to package root")
);
const SearchQuerySchema = v.pipe(
  v.string(),
  v.trim(),
  v.maxLength(100, "Search query is too long")
);
const PackageRouteParamsSchema = v.object({
  packageName: PackageNameSchema,
  version: v.optional(VersionSchema)
});
const PackageVersionQuerySchema = v.object({
  packageName: PackageNameSchema,
  version: VersionSchema
});
const PackageFileQuerySchema = v.object({
  packageName: PackageNameSchema,
  version: VersionSchema,
  filePath: FilePathSchema
});

export { PackageNameSchema as P, SearchQuerySchema as S, PackageRouteParamsSchema as a, PackageFileQuerySchema as b, PackageVersionQuerySchema as c };
//# sourceMappingURL=package.mjs.map

import * as v from 'valibot';
import { P as PackageNameSchema } from '../nitro/nitro.mjs';

const PackageLikeBodySchema = v.object({
  packageName: PackageNameSchema
});
const ProfileEditBodySchema = v.object({
  displayName: v.pipe(v.string(), v.maxLength(640)),
  website: v.optional(
    v.union([
      v.literal(""),
      v.pipe(
        v.string(),
        v.url(),
        v.check(
          (url) => url.startsWith("https://") || url.startsWith("http://"),
          "Website must use http or https"
        )
      )
    ])
  ),
  description: v.optional(v.pipe(v.string(), v.maxLength(2560)))
});

export { PackageLikeBodySchema as P, ProfileEditBodySchema as a };
//# sourceMappingURL=social.mjs.map

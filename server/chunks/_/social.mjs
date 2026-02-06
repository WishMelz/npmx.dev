import * as v from 'valibot';
import { P as PackageNameSchema } from './package.mjs';

const PackageLikeBodySchema = v.object({
  packageName: PackageNameSchema
});

export { PackageLikeBodySchema as P };
//# sourceMappingURL=social.mjs.map

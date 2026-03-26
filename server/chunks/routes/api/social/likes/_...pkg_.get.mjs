import { e as eventHandlerWithOAuthSession, g as getRouterParam, p as parsePackageParams, c as createError, n as PackageRouteParamsSchema, ap as PackageLikesUtils, i as handleApiError } from '../../../../nitro/nitro.mjs';
import * as v from 'valibot';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atcute/tid';
import 'diff';
import '@atproto/lex';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'fast-npm-meta';
import 'node:crypto';
import 'validate-npm-package-name';
import '@shikijs/primitive';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'gray-matter';
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
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const ____pkg__get = eventHandlerWithOAuthSession(async (event, oAuthSession, _) => {
  const pkgParamSegments = getRouterParam(event, "pkg")?.split("/") ?? [];
  const { rawPackageName } = parsePackageParams(pkgParamSegments);
  if (!rawPackageName) {
    throw createError({
      status: 400,
      message: "package name not provided"
    });
  }
  try {
    const { packageName } = v.parse(PackageRouteParamsSchema, {
      packageName: decodeURIComponent(rawPackageName)
    });
    const likesUtil = new PackageLikesUtils();
    return await likesUtil.getLikes(packageName, oAuthSession?.did.toString());
  } catch (error) {
    handleApiError(error, {
      statusCode: 502,
      message: "Failed to get likes"
    });
  }
});

export { ____pkg__get as default };
//# sourceMappingURL=_...pkg_.get.mjs.map

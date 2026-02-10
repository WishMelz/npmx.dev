import { bI as main$2, i as defineEventHandler, bJ as useRuntimeConfig, c as createError, j as getQuery, a6 as getOauthClientMetadata, be as useServerSession, bK as handleResolver, bL as getOAuthLock, aK as getCookie, aT as deleteCookie, bM as sendRedirect, bN as clientUri, aS as setCookie, bO as scope, h as handleApiError, bP as SLINGSHOT_HOST, bQ as useOAuthStorage, bR as UNSET_NUXT_SESSION_PASSWORD } from '../../../nitro/nitro.mjs';
import { NodeOAuthClient } from '@atproto/oauth-client-node';
import { l, Client, isAtIdentifierString } from '@atproto/lex';
import { s as selfLabels } from '../../../_/defs.defs.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'valibot';
import '@upstash/redis';
import 'node:module';
import 'semver';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import '@shikijs/vscode-textmate';
import 'hast-util-to-html';
import 'oniguruma-to-es';
import 'marked';
import 'sanitize-html';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import 'vue-router';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const $nsid$1 = "app.bsky.actor.profile";
const main$1 = l.record(
  "literal:self",
  $nsid$1,
  l.object({
    avatar: l.optional(
      l.blob({
        accept: ["image/png", "image/jpeg"],
        maxSize: 1e6,
        allowLegacy: false
      })
    ),
    banner: l.optional(
      l.blob({
        accept: ["image/png", "image/jpeg"],
        maxSize: 1e6,
        allowLegacy: false
      })
    ),
    labels: l.optional(
      l.typedUnion(
        [l.typedRef((() => selfLabels))],
        false
      )
    ),
    website: l.optional(l.string({ format: "uri" })),
    pronouns: l.optional(l.string({ maxLength: 200, maxGraphemes: 20 })),
    createdAt: l.optional(l.string({ format: "datetime" })),
    pinnedPost: l.optional(
      l.ref((() => main$2))
    ),
    description: l.optional(l.string({ maxLength: 2560, maxGraphemes: 256 })),
    displayName: l.optional(l.string({ maxLength: 640, maxGraphemes: 64 })),
    joinedViaStarterPack: l.optional(
      l.ref((() => main$2))
    )
  })
);
const $isTypeOf = /* @__PURE__ */ main$1.isTypeOf.bind(main$1), $build = /* @__PURE__ */ main$1.build.bind(main$1), $type = main$1.$type;
const $assert = /* @__PURE__ */ main$1.assert.bind(main$1), $check = /* @__PURE__ */ main$1.check.bind(main$1), $cast = /* @__PURE__ */ main$1.cast.bind(main$1), $ifMatches = /* @__PURE__ */ main$1.ifMatches.bind(main$1), $matches = /* @__PURE__ */ main$1.matches.bind(main$1), $parse = /* @__PURE__ */ main$1.parse.bind(main$1), $safeParse = /* @__PURE__ */ main$1.safeParse.bind(main$1), $validate = /* @__PURE__ */ main$1.validate.bind(main$1), $safeValidate = /* @__PURE__ */ main$1.safeValidate.bind(main$1);

const profile_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $assert: $assert,
  $build: $build,
  $cast: $cast,
  $check: $check,
  $ifMatches: $ifMatches,
  $isTypeOf: $isTypeOf,
  $matches: $matches,
  $nsid: $nsid$1,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main$1
}, Symbol.toStringTag, { value: 'Module' }));

const profile = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $assert: $assert,
  $build: $build,
  $cast: $cast,
  $check: $check,
  $defs: profile_defs,
  $ifMatches: $ifMatches,
  $isTypeOf: $isTypeOf,
  $matches: $matches,
  $nsid: $nsid$1,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main$1
}, Symbol.toStringTag, { value: 'Module' }));

const $nsid = "com.bad-example.identity.resolveMiniDoc";
const main = l.query(
  $nsid,
  l.params({ identifier: l.string({ format: "at-identifier" }) }),
  l.jsonPayload({
    did: l.string({ format: "did" }),
    pds: l.string({ format: "uri" }),
    handle: l.string({ format: "handle" }),
    signing_key: l.string()
  })
);
const $lxm = main.nsid, $params = main.parameters, $output = main.output;

const resolveMiniDoc_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const resolveMiniDoc = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: resolveMiniDoc_defs,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const OAUTH_LOCALES = /* @__PURE__ */ new Set(["en", "fr-FR", "ja-JP"]);
async function getAvatar(did, pds) {
  if (!isAtIdentifierString(did)) {
    return void 0;
  }
  let avatar;
  try {
    const pdsUrl = new URL(pds);
    if (pdsUrl.protocol === "https:") {
      const client = new Client(pdsUrl);
      const profileResponse = await client.get(profile, {
        repo: did,
        rkey: "self"
      });
      const validatedResponse = main$1.validate(profileResponse.value);
      if (validatedResponse.avatar?.ref) {
        avatar = `https://cdn.bsky.app/img/feed_thumbnail/plain/${did}/${validatedResponse.avatar?.ref}@jpeg`;
      }
    }
  } catch {
  }
  return avatar;
}
const atproto_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.sessionPassword) {
    throw createError({
      status: 500,
      message: UNSET_NUXT_SESSION_PASSWORD
    });
  }
  const query = getQuery(event);
  const clientMetadata = getOauthClientMetadata();
  const session = await useServerSession(event);
  const { stateStore, sessionStore } = useOAuthStorage(session);
  const atclient = new NodeOAuthClient({
    stateStore,
    sessionStore,
    clientMetadata,
    requestLock: getOAuthLock(),
    handleResolver
  });
  const error = query.error;
  if (error === "access_denied") {
    const returnToURL2 = getCookie(event, "auth_return_to") || "/";
    deleteCookie(event, "auth_return_to", { path: "/" });
    return sendRedirect(event, returnToURL2);
  }
  if (!query.code) {
    let redirectPath = "/";
    try {
      const clientOrigin = new URL(clientUri).origin;
      const returnToUrl = new URL(query.returnTo?.toString() || "/", clientUri);
      if (returnToUrl.origin === clientOrigin) {
        redirectPath = returnToUrl.pathname + returnToUrl.search + returnToUrl.hash;
      }
    } catch {
    }
    setCookie(event, "auth_return_to", redirectPath, {
      maxAge: 60 * 5,
      httpOnly: true,
      // secure only if NOT in dev mode
      secure: true
    });
    try {
      const handle = query.handle?.toString();
      const create = query.create?.toString();
      if (!handle) {
        throw createError({
          statusCode: 401,
          message: "Handle not provided in query"
        });
      }
      const localeFromQuery = query.locale?.toString() ?? "en";
      const locale = OAUTH_LOCALES.has(localeFromQuery) ? localeFromQuery : "en";
      const redirectUrl = await atclient.authorize(handle, {
        scope,
        prompt: create ? "create" : void 0,
        ui_locales: locale
      });
      return sendRedirect(event, redirectUrl.toString());
    } catch (error2) {
      const message = error2 instanceof Error ? error2.message : "Authentication failed.";
      return handleApiError(error2, {
        statusCode: 401,
        statusMessage: "Unauthorized",
        message: `${message}. Please login and try again.`
      });
    }
  }
  const { session: authSession } = await atclient.callback(
    new URLSearchParams(query)
  );
  const client = new Client({ service: `https://${SLINGSHOT_HOST}` });
  const response = await client.xrpcSafe(resolveMiniDoc, {
    headers: { "User-Agent": "npmx" },
    params: { identifier: authSession.did }
  });
  if (response.success) {
    const miniDoc = response.body;
    let avatar = await getAvatar(authSession.did, miniDoc.pds);
    await session.update({
      public: {
        ...miniDoc,
        avatar
      }
    });
  } else {
    const pdsBase = (await authSession.getTokenInfo()).aud;
    let avatar = await getAvatar(authSession.did, pdsBase);
    await session.update({
      public: {
        did: authSession.did,
        handle: "Not available",
        pds: pdsBase,
        avatar
      }
    });
  }
  const returnToURL = getCookie(event, "auth_return_to") || "/";
  deleteCookie(event, "auth_return_to");
  return sendRedirect(event, returnToURL);
});

export { atproto_get as default };
//# sourceMappingURL=atproto.get.mjs.map

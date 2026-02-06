import { bA as main$1, i as defineEventHandler, bB as useRuntimeConfig, c as createError, j as getQuery, a1 as getOauthClientMetadata, b8 as useServerSession, bC as useOAuthStorage, bD as handleResolver, bE as getOAuthLock, bF as clientUri, aJ as setCookie, bG as scope, bH as sendRedirect, h as handleApiError, bI as SLINGSHOT_HOST, aB as getCookie, aK as deleteCookie, bJ as UNSET_NUXT_SESSION_PASSWORD } from '../../../nitro/nitro.mjs';
import { Agent } from '@atproto/api';
import { NodeOAuthClient } from '@atproto/oauth-client-node';
import { l, Client } from '@atproto/lex';
import { ensureValidAtIdentifier } from '@atproto/syntax';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'valibot';
import '@upstash/redis';
import 'node:module';
import '@jsr/deno__doc';
import 'node:crypto';
import 'fast-npm-meta';
import 'validate-npm-package-name';
import 'semver';
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

const $nsid$1 = "com.atproto.label.defs";
l.typedObject(
  $nsid$1,
  "label",
  l.object({
    cid: l.optional(l.string({ format: "cid" })),
    cts: l.string({ format: "datetime" }),
    exp: l.optional(l.string({ format: "datetime" })),
    neg: l.optional(l.boolean()),
    sig: l.optional(l.bytes()),
    src: l.string({ format: "did" }),
    uri: l.string({ format: "uri" }),
    val: l.string({ maxLength: 128 }),
    ver: l.optional(l.integer())
  })
);
const selfLabel = l.typedObject(
  $nsid$1,
  "selfLabel",
  l.object({ val: l.string({ maxLength: 128 }) })
);
l.string();
const selfLabels = l.typedObject(
  $nsid$1,
  "selfLabels",
  l.object({
    values: l.array(l.ref((() => selfLabel)), {
      maxLength: 10
    })
  })
);
l.typedObject(
  $nsid$1,
  "labelValueDefinition",
  l.object({
    blurs: l.string(),
    locales: l.array(
      l.ref(
        (() => labelValueDefinitionStrings)
      )
    ),
    severity: l.string(),
    adultOnly: l.optional(l.boolean()),
    identifier: l.string({ maxLength: 100, maxGraphemes: 100 }),
    defaultSetting: l.optional(l.withDefault(l.string(), "warn"))
  })
);
const labelValueDefinitionStrings = l.typedObject(
  $nsid$1,
  "labelValueDefinitionStrings",
  l.object({
    lang: l.string({ format: "language" }),
    name: l.string({ maxLength: 640, maxGraphemes: 64 }),
    description: l.string({ maxLength: 1e5, maxGraphemes: 1e4 })
  })
);

const $nsid = "app.bsky.actor.profile";
const main = l.record(
  "literal:self",
  $nsid,
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
      l.ref((() => main$1))
    ),
    description: l.optional(l.string({ maxLength: 2560, maxGraphemes: 256 })),
    displayName: l.optional(l.string({ maxLength: 640, maxGraphemes: 64 })),
    joinedViaStarterPack: l.optional(
      l.ref((() => main$1))
    )
  })
);
const $isTypeOf = /* @__PURE__ */ main.isTypeOf.bind(main), $build = /* @__PURE__ */ main.build.bind(main), $type = main.$type;
const $assert = /* @__PURE__ */ main.assert.bind(main), $check = /* @__PURE__ */ main.check.bind(main), $cast = /* @__PURE__ */ main.cast.bind(main), $ifMatches = /* @__PURE__ */ main.ifMatches.bind(main), $matches = /* @__PURE__ */ main.matches.bind(main), $parse = /* @__PURE__ */ main.parse.bind(main), $safeParse = /* @__PURE__ */ main.safeParse.bind(main), $validate = /* @__PURE__ */ main.validate.bind(main), $safeValidate = /* @__PURE__ */ main.safeValidate.bind(main);

const profile_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $assert: $assert,
  $build: $build,
  $cast: $cast,
  $check: $check,
  $ifMatches: $ifMatches,
  $isTypeOf: $isTypeOf,
  $matches: $matches,
  $nsid: $nsid,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main
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
  $nsid: $nsid,
  $parse: $parse,
  $safeParse: $safeParse,
  $safeValidate: $safeValidate,
  $type: $type,
  $validate: $validate,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

async function getAvatar(did, pds) {
  var _a, _b;
  let avatar;
  try {
    const pdsUrl = new URL(pds);
    if (did && pdsUrl.protocol === "https:") {
      ensureValidAtIdentifier(did);
      const client = new Client(pdsUrl);
      const profileResponse = await client.get(profile, {
        repo: did,
        rkey: "self"
      });
      const validatedResponse = main.validate(profileResponse.value);
      if ((_a = validatedResponse.avatar) == null ? void 0 : _a.ref) {
        avatar = `https://cdn.bsky.app/img/feed_thumbnail/plain/${did}/${(_b = validatedResponse.avatar) == null ? void 0 : _b.ref}@jpeg`;
      }
    }
  } catch {
  }
  return avatar;
}
const atproto_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
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
  if (!query.code) {
    let redirectPath = "/";
    try {
      const clientOrigin = new URL(clientUri).origin;
      const returnToUrl = new URL(((_a = query.returnTo) == null ? void 0 : _a.toString()) || "/", clientUri);
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
      const handle = (_b = query.handle) == null ? void 0 : _b.toString();
      const create = (_c = query.create) == null ? void 0 : _c.toString();
      if (!handle) {
        throw createError({
          statusCode: 401,
          message: "Handle not provided in query"
        });
      }
      const redirectUrl = await atclient.authorize(handle, {
        scope,
        prompt: create ? "create" : void 0
      });
      return sendRedirect(event, redirectUrl.toString());
    } catch (error) {
      const message = error instanceof Error ? error.message : "Authentication failed.";
      return handleApiError(error, {
        statusCode: 401,
        message: `${message}. Please login and try again.`
      });
    }
  }
  const { session: authSession } = await atclient.callback(
    new URLSearchParams(query)
  );
  const agent = new Agent(authSession);
  event.context.agent = agent;
  const response = await fetch(
    `https://${SLINGSHOT_HOST}/xrpc/com.bad-example.identity.resolveMiniDoc?identifier=${agent.did}`,
    { headers: { "User-Agent": "npmx" } }
  );
  if (response.ok) {
    const miniDoc = await response.json();
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

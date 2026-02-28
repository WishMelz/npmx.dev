import { bv as main$2, j as defineEventHandler, u as useRuntimeConfig, c as createError, k as getQuery, bw as useServerSession, bx as clientUri, by as scope, bz as sendRedirect, i as handleApiError, bA as setCookie, bB as getCookie, bC as deleteCookie, bD as SLINGSHOT_HOST, bE as UNSET_NUXT_SESSION_PASSWORD } from '../../../nitro/nitro.mjs';
import { OAuthCallbackError } from '@atproto/oauth-client-node';
import { l, isAtIdentifierString, Client } from '@atproto/lex';
import { s as selfLabels } from '../../../_/defs.defs.mjs';
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
import '@upstash/redis';
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

const atproto_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.sessionPassword) {
    throw createError({
      status: 500,
      message: UNSET_NUXT_SESSION_PASSWORD
    });
  }
  const query = getQuery(event);
  const session = await useServerSession(event);
  if (query.handle) {
    if (typeof query.handle !== "string" || !query.handle.startsWith("https://") && !isAtIdentifierString(query.handle)) {
      throw createError({
        statusCode: 400,
        message: "Invalid handle parameter"
      });
    }
    let redirectPath = "/";
    try {
      const clientOrigin = new URL(clientUri).origin;
      const returnToUrl = new URL(query.returnTo?.toString() || "/", clientUri);
      if (returnToUrl.origin === clientOrigin) {
        redirectPath = returnToUrl.pathname + returnToUrl.search + returnToUrl.hash;
      }
    } catch {
    }
    try {
      const redirectUrl = await event.context.oauthClient.authorize(query.handle, {
        scope,
        prompt: query.create ? "create" : void 0,
        // TODO: I do not beleive this is working as expected on
        // a unsupported locale on the PDS. Gives Invalid at body.ui_locales
        // Commenting out for now
        // ui_locales: query.locale?.toString(),
        state: encodeOAuthState(event, { redirectPath })
      });
      return sendRedirect(event, redirectUrl.toString());
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to initiate authentication.";
      return handleApiError(error, {
        statusCode: 401,
        statusMessage: "Unauthorized",
        message: `${message}. Please login and try again.`
      });
    }
  } else {
    try {
      const params = new URLSearchParams(query);
      const result = await event.context.oauthClient.callback(params);
      try {
        const state = decodeOAuthState(event, result.state);
        const profile = await getMiniProfile(result.session);
        await session.update({ public: profile });
        return sendRedirect(event, state.redirectPath);
      } catch (error) {
        await result.session.signOut();
        throw error;
      }
    } catch (error) {
      if (error instanceof OAuthCallbackError && error.state) {
        const state = decodeOAuthState(event, error.state);
        if (query.error === "access_denied") {
          return sendRedirect(event, state.redirectPath);
        }
      }
      const message = error instanceof Error ? error.message : "Authentication failed.";
      return handleApiError(error, {
        statusCode: 401,
        statusMessage: "Unauthorized",
        message: `${message}. Please login and try again.`
      });
    }
  }
});
const OAUTH_REQUEST_COOKIE_PREFIX = "atproto_oauth_req";
function encodeOAuthState(event, data) {
  const id = generateRandomHexString();
  setCookie(event, `${OAUTH_REQUEST_COOKIE_PREFIX}_${id}`, "1", {
    maxAge: 60 * 5,
    httpOnly: true,
    // secure only if NOT in dev mode
    secure: true,
    sameSite: "lax",
    path: event.path.split("?", 1)[0]
  });
  return JSON.stringify({ data, id });
}
function generateRandomHexString(byteLength = 16) {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(byteLength)),
    (byte) => byte.toString(16).padStart(2, "0")
  ).join("");
}
function decodeOAuthState(event, state) {
  if (!state) {
    throw createError({
      statusCode: 400,
      message: "Missing state parameter"
    });
  }
  const decoded = JSON.parse(state);
  const requestCookieName = `${OAUTH_REQUEST_COOKIE_PREFIX}_${decoded.id}`;
  if (getCookie(event, requestCookieName) != null) {
    deleteCookie(event, requestCookieName, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: event.path.split("?", 1)[0]
    });
  } else {
    throw createError({
      statusCode: 400,
      message: "Missing authentication state. Please enable cookies and try again."
    });
  }
  return decoded.data;
}
async function getMiniProfile(authSession) {
  const client = new Client({ service: `https://${SLINGSHOT_HOST}` });
  const response = await client.xrpcSafe(resolveMiniDoc, {
    headers: { "User-Agent": "npmx" },
    params: { identifier: authSession.did }
  });
  if (response.success) {
    const miniDoc = response.body;
    let avatar = await getAvatar(authSession.did, miniDoc.pds);
    return {
      ...miniDoc,
      avatar
    };
  } else {
    const pdsBase = (await authSession.getTokenInfo()).aud;
    let avatar = await getAvatar(authSession.did, pdsBase);
    return {
      did: authSession.did,
      handle: "Not available",
      pds: pdsBase,
      avatar
    };
  }
}
async function getAvatar(did, pds) {
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
      const cid = validatedResponse.avatar?.ref;
      if (cid) {
        avatar = `https://cdn.bsky.app/img/feed_thumbnail/plain/${did}/${cid}@jpeg`;
      }
    }
  } catch {
  }
  return avatar;
}

export { atproto_get as default };
//# sourceMappingURL=atproto.get.mjs.map

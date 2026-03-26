import { l } from '@atproto/lex';
import { p as profileViewDetailed } from './defs.defs.mjs';

const $nsid = "app.bsky.actor.getProfiles";
const main = l.query(
  $nsid,
  l.params({
    actors: l.array(l.string({ format: "at-identifier" }), { maxLength: 25 })
  }),
  l.jsonPayload({
    profiles: l.array(
      l.ref(
        (() => profileViewDetailed)
      )
    )
  })
);
const $lxm = main.nsid, $params = main.parameters, $output = main.output;

const getProfiles_defs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

const getProfiles = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $defs: getProfiles_defs,
  $lxm: $lxm,
  $nsid: $nsid,
  $output: $output,
  $params: $params,
  main: main
}, Symbol.toStringTag, { value: 'Module' }));

export { getProfiles as g };
//# sourceMappingURL=getProfiles.mjs.map

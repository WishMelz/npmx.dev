import { l } from '@atproto/lex';

const $nsid = "com.atproto.label.defs";
const label = l.typedObject(
  $nsid,
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
  $nsid,
  "selfLabel",
  l.object({ val: l.string({ maxLength: 128 }) })
);
const labelValue = l.string();
const selfLabels = l.typedObject(
  $nsid,
  "selfLabels",
  l.object({
    values: l.array(l.ref((() => selfLabel)), {
      maxLength: 10
    })
  })
);
const labelValueDefinition = l.typedObject(
  $nsid,
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
    defaultSetting: l.optional(
      l.withDefault(
        l.string(),
        "warn"
      )
    )
  })
);
const labelValueDefinitionStrings = l.typedObject(
  $nsid,
  "labelValueDefinitionStrings",
  l.object({
    lang: l.string({ format: "language" }),
    name: l.string({ maxLength: 640, maxGraphemes: 64 }),
    description: l.string({ maxLength: 1e5, maxGraphemes: 1e4 })
  })
);

export { labelValueDefinition as a, labelValue as b, label as l, selfLabels as s };
//# sourceMappingURL=defs.defs.mjs.map

import { l } from '@atproto/lex';
import { l as label, a as labelValueDefinition, b as labelValue } from './defs.defs.mjs';
import { bv as main$8 } from '../nitro/nitro.mjs';

const $nsid$e = "app.bsky.embed.external";
const main$7 = l.typedObject(
  $nsid$e,
  "main",
  l.object({ external: l.ref((() => external)) })
);
main$7.$type;
const view$4 = l.typedObject(
  $nsid$e,
  "view",
  l.object({ external: l.ref((() => viewExternal)) })
);
const external = l.typedObject(
  $nsid$e,
  "external",
  l.object({
    uri: l.string({ format: "uri" }),
    thumb: l.optional(
      l.blob({ accept: ["image/*"], maxSize: 1e6, allowLegacy: false })
    ),
    title: l.string(),
    description: l.string()
  })
);
const viewExternal = l.typedObject(
  $nsid$e,
  "viewExternal",
  l.object({
    uri: l.string({ format: "uri" }),
    thumb: l.optional(l.string({ format: "uri" })),
    title: l.string(),
    description: l.string()
  })
);

const $nsid$d = "app.bsky.richtext.facet";
const tag = l.typedObject(
  $nsid$d,
  "tag",
  l.object({ tag: l.string({ maxLength: 640, maxGraphemes: 64 }) })
);
const link = l.typedObject(
  $nsid$d,
  "link",
  l.object({ uri: l.string({ format: "uri" }) })
);
const main$6 = l.typedObject(
  $nsid$d,
  "main",
  l.object({
    index: l.ref((() => byteSlice)),
    features: l.array(
      l.typedUnion(
        [
          l.typedRef((() => mention)),
          l.typedRef((() => link)),
          l.typedRef((() => tag))
        ],
        false
      )
    )
  })
);
main$6.$type;
const mention = l.typedObject(
  $nsid$d,
  "mention",
  l.object({ did: l.string({ format: "did" }) })
);
const byteSlice = l.typedObject(
  $nsid$d,
  "byteSlice",
  l.object({
    byteEnd: l.integer({ minimum: 0 }),
    byteStart: l.integer({ minimum: 0 })
  })
);

const $nsid$c = "app.bsky.embed.defs";
const aspectRatio = l.typedObject(
  $nsid$c,
  "aspectRatio",
  l.object({
    width: l.integer({ minimum: 1 }),
    height: l.integer({ minimum: 1 })
  })
);

const $nsid$b = "app.bsky.embed.images";
const main$5 = l.typedObject(
  $nsid$b,
  "main",
  l.object({
    images: l.array(l.ref((() => image)), { maxLength: 4 })
  })
);
main$5.$type;
const view$3 = l.typedObject(
  $nsid$b,
  "view",
  l.object({
    images: l.array(l.ref((() => viewImage)), {
      maxLength: 4
    })
  })
);
const image = l.typedObject(
  $nsid$b,
  "image",
  l.object({
    alt: l.string(),
    image: l.blob({
      accept: ["image/*"],
      maxSize: 1e6,
      allowLegacy: false
    }),
    aspectRatio: l.optional(
      l.ref((() => aspectRatio))
    )
  })
);
const viewImage = l.typedObject(
  $nsid$b,
  "viewImage",
  l.object({
    alt: l.string(),
    thumb: l.string({ format: "uri" }),
    fullsize: l.string({ format: "uri" }),
    aspectRatio: l.optional(
      l.ref((() => aspectRatio))
    )
  })
);

const $nsid$a = "app.bsky.embed.video";
const main$4 = l.typedObject(
  $nsid$a,
  "main",
  l.object({
    alt: l.optional(l.string({ maxLength: 1e4, maxGraphemes: 1e3 })),
    video: l.blob({
      accept: ["video/mp4"],
      maxSize: 1e8,
      allowLegacy: false
    }),
    captions: l.optional(
      l.array(l.ref((() => caption)), { maxLength: 20 })
    ),
    aspectRatio: l.optional(
      l.ref((() => aspectRatio))
    ),
    presentation: l.optional(l.string())
  })
);
main$4.$type;
const view$2 = l.typedObject(
  $nsid$a,
  "view",
  l.object({
    alt: l.optional(l.string({ maxLength: 1e4, maxGraphemes: 1e3 })),
    cid: l.string({ format: "cid" }),
    playlist: l.string({ format: "uri" }),
    thumbnail: l.optional(l.string({ format: "uri" })),
    aspectRatio: l.optional(
      l.ref((() => aspectRatio))
    ),
    presentation: l.optional(l.string())
  })
);
const caption = l.typedObject(
  $nsid$a,
  "caption",
  l.object({
    file: l.blob({ accept: ["text/vtt"], maxSize: 2e4, allowLegacy: false }),
    lang: l.string({ format: "language" })
  })
);

const $nsid$9 = "com.atproto.moderation.defs";
l.token($nsid$9, "reasonRude");
l.token($nsid$9, "reasonSpam");
const reasonType = l.string();
l.token($nsid$9, "reasonOther");
const subjectType = l.string();
l.token($nsid$9, "reasonAppeal");
l.token($nsid$9, "reasonSexual");
l.token($nsid$9, "reasonViolation");
l.token($nsid$9, "reasonMisleading");

const $nsid$8 = "app.bsky.labeler.defs";
const labelerView = l.typedObject(
  $nsid$8,
  "labelerView",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    viewer: l.optional(
      l.ref((() => labelerViewerState))
    ),
    creator: l.ref((() => profileView)),
    indexedAt: l.string({ format: "datetime" }),
    likeCount: l.optional(l.integer({ minimum: 0 }))
  })
);
const labelerPolicies = l.typedObject(
  $nsid$8,
  "labelerPolicies",
  l.object({
    labelValues: l.array(
      l.ref((() => labelValue))
    ),
    labelValueDefinitions: l.optional(
      l.array(
        l.ref(
          (() => labelValueDefinition)
        )
      )
    )
  })
);
const labelerViewerState = l.typedObject(
  $nsid$8,
  "labelerViewerState",
  l.object({ like: l.optional(l.string({ format: "at-uri" })) })
);
l.typedObject(
  $nsid$8,
  "labelerViewDetailed",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    viewer: l.optional(
      l.ref((() => labelerViewerState))
    ),
    creator: l.ref((() => profileView)),
    policies: l.ref((() => labelerPolicies)),
    indexedAt: l.string({ format: "datetime" }),
    likeCount: l.optional(l.integer({ minimum: 0 })),
    reasonTypes: l.optional(
      l.array(
        l.ref(
          (() => reasonType)
        )
      )
    ),
    subjectTypes: l.optional(
      l.array(
        l.ref(
          (() => subjectType)
        )
      )
    ),
    subjectCollections: l.optional(l.array(l.string({ format: "nsid" })))
  })
);

const $nsid$7 = "app.bsky.embed.recordWithMedia";
const main$3 = l.typedObject(
  $nsid$7,
  "main",
  l.object({
    media: l.typedUnion(
      [
        l.typedRef((() => main$5)),
        l.typedRef((() => main$4)),
        l.typedRef((() => main$7))
      ],
      false
    ),
    record: l.ref((() => main$2))
  })
);
main$3.$type;
const view$1 = l.typedObject(
  $nsid$7,
  "view",
  l.object({
    media: l.typedUnion(
      [
        l.typedRef((() => view$3)),
        l.typedRef((() => view$2)),
        l.typedRef((() => view$4))
      ],
      false
    ),
    record: l.ref((() => view))
  })
);

const $nsid$6 = "app.bsky.embed.record";
const main$2 = l.typedObject(
  $nsid$6,
  "main",
  l.object({
    record: l.ref((() => main$8))
  })
);
main$2.$type;
const view = l.typedObject(
  $nsid$6,
  "view",
  l.object({
    record: l.typedUnion(
      [
        l.typedRef((() => viewRecord)),
        l.typedRef((() => viewNotFound)),
        l.typedRef((() => viewBlocked)),
        l.typedRef((() => viewDetached)),
        l.typedRef(
          (() => generatorView)
        ),
        l.typedRef((() => listView)),
        l.typedRef(
          (() => labelerView)
        ),
        l.typedRef(
          (() => starterPackViewBasic)
        )
      ],
      false
    )
  })
);
const viewRecord = l.typedObject(
  $nsid$6,
  "viewRecord",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    value: l.lexMap(),
    author: l.ref(
      (() => profileViewBasic)
    ),
    embeds: l.optional(
      l.array(
        l.typedUnion(
          [
            l.typedRef((() => view$3)),
            l.typedRef((() => view$2)),
            l.typedRef((() => view$4)),
            l.typedRef((() => view)),
            l.typedRef(
              (() => view$1)
            )
          ],
          false
        )
      )
    ),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    indexedAt: l.string({ format: "datetime" }),
    likeCount: l.optional(l.integer()),
    quoteCount: l.optional(l.integer()),
    replyCount: l.optional(l.integer()),
    repostCount: l.optional(l.integer())
  })
);
const viewBlocked = l.typedObject(
  $nsid$6,
  "viewBlocked",
  l.object({
    uri: l.string({ format: "at-uri" }),
    author: l.ref(
      (() => blockedAuthor)
    ),
    blocked: l.literal(true)
  })
);
const viewDetached = l.typedObject(
  $nsid$6,
  "viewDetached",
  l.object({ uri: l.string({ format: "at-uri" }), detached: l.literal(true) })
);
const viewNotFound = l.typedObject(
  $nsid$6,
  "viewNotFound",
  l.object({ uri: l.string({ format: "at-uri" }), notFound: l.literal(true) })
);

const $nsid$5 = "app.bsky.feed.defs";
const postView = l.typedObject(
  $nsid$5,
  "postView",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    debug: l.optional(l.lexMap()),
    embed: l.optional(
      l.typedUnion(
        [
          l.typedRef((() => view$3)),
          l.typedRef((() => view$2)),
          l.typedRef((() => view$4)),
          l.typedRef((() => view)),
          l.typedRef(
            (() => view$1)
          )
        ],
        false
      )
    ),
    author: l.ref(
      (() => profileViewBasic)
    ),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    record: l.lexMap(),
    viewer: l.optional(l.ref((() => viewerState$1))),
    indexedAt: l.string({ format: "datetime" }),
    likeCount: l.optional(l.integer()),
    quoteCount: l.optional(l.integer()),
    replyCount: l.optional(l.integer()),
    threadgate: l.optional(
      l.ref((() => threadgateView))
    ),
    repostCount: l.optional(l.integer()),
    bookmarkCount: l.optional(l.integer())
  })
);
const replyRef = l.typedObject(
  $nsid$5,
  "replyRef",
  l.object({
    root: l.typedUnion(
      [
        l.typedRef((() => postView)),
        l.typedRef((() => notFoundPost)),
        l.typedRef((() => blockedPost))
      ],
      false
    ),
    parent: l.typedUnion(
      [
        l.typedRef((() => postView)),
        l.typedRef((() => notFoundPost)),
        l.typedRef((() => blockedPost))
      ],
      false
    ),
    grandparentAuthor: l.optional(
      l.ref(
        (() => profileViewBasic)
      )
    )
  })
);
const reasonPin = l.typedObject($nsid$5, "reasonPin", l.object({}));
const blockedPost = l.typedObject(
  $nsid$5,
  "blockedPost",
  l.object({
    uri: l.string({ format: "at-uri" }),
    author: l.ref((() => blockedAuthor)),
    blocked: l.literal(true)
  })
);
l.typedObject(
  $nsid$5,
  "interaction",
  l.object({
    item: l.optional(l.string({ format: "at-uri" })),
    event: l.optional(
      l.string()
    ),
    reqId: l.optional(l.string({ maxLength: 100 })),
    feedContext: l.optional(l.string({ maxLength: 2e3 }))
  })
);
l.token($nsid$5, "requestLess");
l.token($nsid$5, "requestMore");
const viewerState$1 = l.typedObject(
  $nsid$5,
  "viewerState",
  l.object({
    like: l.optional(l.string({ format: "at-uri" })),
    pinned: l.optional(l.boolean()),
    repost: l.optional(l.string({ format: "at-uri" })),
    bookmarked: l.optional(l.boolean()),
    threadMuted: l.optional(l.boolean()),
    replyDisabled: l.optional(l.boolean()),
    embeddingDisabled: l.optional(l.boolean())
  })
);
l.typedObject(
  $nsid$5,
  "feedViewPost",
  l.object({
    post: l.ref((() => postView)),
    reply: l.optional(l.ref((() => replyRef))),
    reqId: l.optional(l.string({ maxLength: 100 })),
    reason: l.optional(
      l.typedUnion(
        [
          l.typedRef((() => reasonRepost)),
          l.typedRef((() => reasonPin))
        ],
        false
      )
    ),
    feedContext: l.optional(l.string({ maxLength: 2e3 }))
  })
);
const notFoundPost = l.typedObject(
  $nsid$5,
  "notFoundPost",
  l.object({ uri: l.string({ format: "at-uri" }), notFound: l.literal(true) })
);
const reasonRepost = l.typedObject(
  $nsid$5,
  "reasonRepost",
  l.object({
    by: l.ref(
      (() => profileViewBasic)
    ),
    cid: l.optional(l.string({ format: "cid" })),
    uri: l.optional(l.string({ format: "at-uri" })),
    indexedAt: l.string({ format: "datetime" })
  })
);
const blockedAuthor = l.typedObject(
  $nsid$5,
  "blockedAuthor",
  l.object({
    did: l.string({ format: "did" }),
    viewer: l.optional(
      l.ref((() => viewerState))
    )
  })
);
const generatorView = l.typedObject(
  $nsid$5,
  "generatorView",
  l.object({
    cid: l.string({ format: "cid" }),
    did: l.string({ format: "did" }),
    uri: l.string({ format: "at-uri" }),
    avatar: l.optional(l.string({ format: "uri" })),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    viewer: l.optional(
      l.ref((() => generatorViewerState))
    ),
    creator: l.ref((() => profileView)),
    indexedAt: l.string({ format: "datetime" }),
    likeCount: l.optional(l.integer({ minimum: 0 })),
    contentMode: l.optional(
      l.string()
    ),
    description: l.optional(l.string({ maxLength: 3e3, maxGraphemes: 300 })),
    displayName: l.string(),
    descriptionFacets: l.optional(
      l.array(l.ref((() => main$6)))
    ),
    acceptsInteractions: l.optional(l.boolean())
  })
);
const threadContext = l.typedObject(
  $nsid$5,
  "threadContext",
  l.object({ rootAuthorLike: l.optional(l.string({ format: "at-uri" })) })
);
const threadViewPost = l.typedObject(
  $nsid$5,
  "threadViewPost",
  l.object({
    post: l.ref((() => postView)),
    parent: l.optional(
      l.typedUnion(
        [
          l.typedRef((() => threadViewPost)),
          l.typedRef((() => notFoundPost)),
          l.typedRef((() => blockedPost))
        ],
        false
      )
    ),
    replies: l.optional(
      l.array(
        l.typedUnion(
          [
            l.typedRef((() => threadViewPost)),
            l.typedRef((() => notFoundPost)),
            l.typedRef((() => blockedPost))
          ],
          false
        )
      )
    ),
    threadContext: l.optional(
      l.ref((() => threadContext))
    )
  })
);
const threadgateView = l.typedObject(
  $nsid$5,
  "threadgateView",
  l.object({
    cid: l.optional(l.string({ format: "cid" })),
    uri: l.optional(l.string({ format: "at-uri" })),
    lists: l.optional(
      l.array(
        l.ref((() => listViewBasic))
      )
    ),
    record: l.optional(l.lexMap())
  })
);
l.token($nsid$5, "interactionLike");
l.token($nsid$5, "interactionSeen");
l.token($nsid$5, "clickthroughItem");
l.token($nsid$5, "contentModeVideo");
l.token($nsid$5, "interactionQuote");
l.token($nsid$5, "interactionReply");
l.token($nsid$5, "interactionShare");
l.typedObject(
  $nsid$5,
  "skeletonFeedPost",
  l.object({
    post: l.string({ format: "at-uri" }),
    reason: l.optional(
      l.typedUnion(
        [
          l.typedRef((() => skeletonReasonRepost)),
          l.typedRef((() => skeletonReasonPin))
        ],
        false
      )
    ),
    feedContext: l.optional(l.string({ maxLength: 2e3 }))
  })
);
l.token($nsid$5, "clickthroughEmbed");
l.token($nsid$5, "interactionRepost");
const skeletonReasonPin = l.typedObject(
  $nsid$5,
  "skeletonReasonPin",
  l.object({})
);
l.token($nsid$5, "clickthroughAuthor");
l.token($nsid$5, "clickthroughReposter");
const generatorViewerState = l.typedObject(
  $nsid$5,
  "generatorViewerState",
  l.object({ like: l.optional(l.string({ format: "at-uri" })) })
);
const skeletonReasonRepost = l.typedObject(
  $nsid$5,
  "skeletonReasonRepost",
  l.object({ repost: l.string({ format: "at-uri" }) })
);
l.token($nsid$5, "contentModeUnspecified");

const $nsid$4 = "app.bsky.graph.defs";
l.token($nsid$4, "modlist");
const listView = l.typedObject(
  $nsid$4,
  "listView",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    name: l.string({ maxLength: 64, minLength: 1 }),
    avatar: l.optional(l.string({ format: "uri" })),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    viewer: l.optional(l.ref((() => listViewerState))),
    creator: l.ref((() => profileView)),
    purpose: l.ref((() => listPurpose)),
    indexedAt: l.string({ format: "datetime" }),
    description: l.optional(l.string({ maxLength: 3e3, maxGraphemes: 300 })),
    listItemCount: l.optional(l.integer({ minimum: 0 })),
    descriptionFacets: l.optional(
      l.array(l.ref((() => main$6)))
    )
  })
);
l.token($nsid$4, "curatelist");
const listPurpose = l.string();
const listItemView = l.typedObject(
  $nsid$4,
  "listItemView",
  l.object({
    uri: l.string({ format: "at-uri" }),
    subject: l.ref((() => profileView))
  })
);
l.typedObject(
  $nsid$4,
  "relationship",
  l.object({
    did: l.string({ format: "did" }),
    blocking: l.optional(l.string({ format: "at-uri" })),
    blockedBy: l.optional(l.string({ format: "at-uri" })),
    following: l.optional(l.string({ format: "at-uri" })),
    followedBy: l.optional(l.string({ format: "at-uri" })),
    blockedByList: l.optional(l.string({ format: "at-uri" })),
    blockingByList: l.optional(l.string({ format: "at-uri" }))
  })
);
const listViewBasic = l.typedObject(
  $nsid$4,
  "listViewBasic",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    name: l.string({ maxLength: 64, minLength: 1 }),
    avatar: l.optional(l.string({ format: "uri" })),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    viewer: l.optional(l.ref((() => listViewerState))),
    purpose: l.ref((() => listPurpose)),
    indexedAt: l.optional(l.string({ format: "datetime" })),
    listItemCount: l.optional(l.integer({ minimum: 0 }))
  })
);
l.typedObject(
  $nsid$4,
  "notFoundActor",
  l.object({
    actor: l.string({ format: "at-identifier" }),
    notFound: l.literal(true)
  })
);
l.token($nsid$4, "referencelist");
const listViewerState = l.typedObject(
  $nsid$4,
  "listViewerState",
  l.object({
    muted: l.optional(l.boolean()),
    blocked: l.optional(l.string({ format: "at-uri" }))
  })
);
l.typedObject(
  $nsid$4,
  "starterPackView",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    list: l.optional(l.ref((() => listViewBasic))),
    feeds: l.optional(
      l.array(
        l.ref((() => generatorView)),
        { maxLength: 3 }
      )
    ),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    record: l.lexMap(),
    creator: l.ref(
      (() => profileViewBasic)
    ),
    indexedAt: l.string({ format: "datetime" }),
    joinedWeekCount: l.optional(l.integer({ minimum: 0 })),
    listItemsSample: l.optional(
      l.array(l.ref((() => listItemView)), {
        maxLength: 12
      })
    ),
    joinedAllTimeCount: l.optional(l.integer({ minimum: 0 }))
  })
);
const starterPackViewBasic = l.typedObject(
  $nsid$4,
  "starterPackViewBasic",
  l.object({
    cid: l.string({ format: "cid" }),
    uri: l.string({ format: "at-uri" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    record: l.lexMap(),
    creator: l.ref(
      (() => profileViewBasic)
    ),
    indexedAt: l.string({ format: "datetime" }),
    listItemCount: l.optional(l.integer({ minimum: 0 })),
    joinedWeekCount: l.optional(l.integer({ minimum: 0 })),
    joinedAllTimeCount: l.optional(l.integer({ minimum: 0 }))
  })
);

const $nsid$3 = "app.bsky.notification.defs";
const preference = l.typedObject(
  $nsid$3,
  "preference",
  l.object({ list: l.boolean(), push: l.boolean() })
);
l.typedObject(
  $nsid$3,
  "preferences",
  l.object({
    chat: l.ref((() => chatPreference)),
    like: l.ref((() => filterablePreference)),
    quote: l.ref((() => filterablePreference)),
    reply: l.ref((() => filterablePreference)),
    follow: l.ref((() => filterablePreference)),
    repost: l.ref((() => filterablePreference)),
    mention: l.ref((() => filterablePreference)),
    verified: l.ref((() => preference)),
    unverified: l.ref((() => preference)),
    likeViaRepost: l.ref(
      (() => filterablePreference)
    ),
    subscribedPost: l.ref((() => preference)),
    repostViaRepost: l.ref(
      (() => filterablePreference)
    ),
    starterpackJoined: l.ref((() => preference))
  })
);
l.typedObject(
  $nsid$3,
  "recordDeleted",
  l.object({})
);
const chatPreference = l.typedObject(
  $nsid$3,
  "chatPreference",
  l.object({
    push: l.boolean(),
    include: l.string()
  })
);
const activitySubscription = l.typedObject(
  $nsid$3,
  "activitySubscription",
  l.object({ post: l.boolean(), reply: l.boolean() })
);
const filterablePreference = l.typedObject(
  $nsid$3,
  "filterablePreference",
  l.object({
    list: l.boolean(),
    push: l.boolean(),
    include: l.string()
  })
);
l.typedObject(
  $nsid$3,
  "subjectActivitySubscription",
  l.object({
    subject: l.string({ format: "did" }),
    activitySubscription: l.ref(
      (() => activitySubscription)
    )
  })
);

const $nsid$2 = "app.bsky.feed.threadgate";
const main$1 = l.record(
  "tid",
  $nsid$2,
  l.object({
    post: l.string({ format: "at-uri" }),
    allow: l.optional(
      l.array(
        l.typedUnion(
          [
            l.typedRef((() => mentionRule)),
            l.typedRef((() => followerRule)),
            l.typedRef((() => followingRule)),
            l.typedRef((() => listRule))
          ],
          false
        ),
        { maxLength: 5 }
      )
    ),
    createdAt: l.string({ format: "datetime" }),
    hiddenReplies: l.optional(
      l.array(l.string({ format: "at-uri" }), { maxLength: 300 })
    )
  })
);
main$1.$type;
const listRule = l.typedObject(
  $nsid$2,
  "listRule",
  l.object({ list: l.string({ format: "at-uri" }) })
);
const mentionRule = l.typedObject(
  $nsid$2,
  "mentionRule",
  l.object({})
);
const followerRule = l.typedObject(
  $nsid$2,
  "followerRule",
  l.object({})
);
const followingRule = l.typedObject(
  $nsid$2,
  "followingRule",
  l.object({})
);

const $nsid$1 = "app.bsky.feed.postgate";
const main = l.record(
  "tid",
  $nsid$1,
  l.object({
    post: l.string({ format: "at-uri" }),
    createdAt: l.string({ format: "datetime" }),
    embeddingRules: l.optional(
      l.array(
        l.typedUnion(
          [l.typedRef((() => disableRule))],
          false
        ),
        { maxLength: 5 }
      )
    ),
    detachedEmbeddingUris: l.optional(
      l.array(l.string({ format: "at-uri" }), { maxLength: 50 })
    )
  })
);
main.$type;
const disableRule = l.typedObject(
  $nsid$1,
  "disableRule",
  l.object({})
);

const $nsid = "app.bsky.actor.defs";
const nux = l.typedObject(
  $nsid,
  "nux",
  l.object({
    id: l.string({ maxLength: 100 }),
    data: l.optional(l.string({ maxLength: 3e3, maxGraphemes: 300 })),
    completed: l.withDefault(l.boolean(), false),
    expiresAt: l.optional(l.string({ format: "datetime" }))
  })
);
const mutedWord = l.typedObject(
  $nsid,
  "mutedWord",
  l.object({
    id: l.optional(l.string()),
    value: l.string({ maxLength: 1e4, maxGraphemes: 1e3 }),
    targets: l.array(l.ref((() => mutedWordTarget))),
    expiresAt: l.optional(l.string({ format: "datetime" })),
    actorTarget: l.optional(
      l.withDefault(
        l.string(),
        "all"
      )
    )
  })
);
const savedFeed = l.typedObject(
  $nsid,
  "savedFeed",
  l.object({
    id: l.string(),
    type: l.string(),
    value: l.string(),
    pinned: l.boolean()
  })
);
const statusView = l.typedObject(
  $nsid,
  "statusView",
  l.object({
    cid: l.optional(l.string({ format: "cid" })),
    uri: l.optional(l.string({ format: "at-uri" })),
    embed: l.optional(
      l.typedUnion(
        [l.typedRef((() => view$4))],
        false
      )
    ),
    record: l.lexMap(),
    status: l.string(),
    isActive: l.optional(l.boolean()),
    expiresAt: l.optional(l.string({ format: "datetime" })),
    isDisabled: l.optional(l.boolean())
  })
);
l.array(
  l.typedUnion(
    [
      l.typedRef((() => adultContentPref)),
      l.typedRef((() => contentLabelPref)),
      l.typedRef((() => savedFeedsPref)),
      l.typedRef((() => savedFeedsPrefV2)),
      l.typedRef((() => personalDetailsPref)),
      l.typedRef((() => declaredAgePref)),
      l.typedRef((() => feedViewPref)),
      l.typedRef((() => threadViewPref)),
      l.typedRef((() => interestsPref)),
      l.typedRef((() => mutedWordsPref)),
      l.typedRef((() => hiddenPostsPref)),
      l.typedRef((() => bskyAppStatePref)),
      l.typedRef((() => labelersPref)),
      l.typedRef(
        (() => postInteractionSettingsPref)
      ),
      l.typedRef((() => verificationPrefs)),
      l.typedRef((() => liveEventPreferences))
    ],
    false
  )
);
const profileView = l.typedObject(
  $nsid,
  "profileView",
  l.object({
    did: l.string({ format: "did" }),
    debug: l.optional(l.lexMap()),
    avatar: l.optional(l.string({ format: "uri" })),
    handle: l.string({ format: "handle" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    status: l.optional(l.ref((() => statusView))),
    viewer: l.optional(l.ref((() => viewerState))),
    pronouns: l.optional(l.string()),
    createdAt: l.optional(l.string({ format: "datetime" })),
    indexedAt: l.optional(l.string({ format: "datetime" })),
    associated: l.optional(
      l.ref((() => profileAssociated))
    ),
    description: l.optional(l.string({ maxLength: 2560, maxGraphemes: 256 })),
    displayName: l.optional(l.string({ maxLength: 640, maxGraphemes: 64 })),
    verification: l.optional(
      l.ref((() => verificationState))
    )
  })
);
const viewerState = l.typedObject(
  $nsid,
  "viewerState",
  l.object({
    muted: l.optional(l.boolean()),
    blocking: l.optional(l.string({ format: "at-uri" })),
    blockedBy: l.optional(l.boolean()),
    following: l.optional(l.string({ format: "at-uri" })),
    followedBy: l.optional(l.string({ format: "at-uri" })),
    mutedByList: l.optional(
      l.ref((() => listViewBasic))
    ),
    blockingByList: l.optional(
      l.ref((() => listViewBasic))
    ),
    knownFollowers: l.optional(
      l.ref((() => knownFollowers))
    ),
    activitySubscription: l.optional(
      l.ref(
        (() => activitySubscription)
      )
    )
  })
);
const feedViewPref = l.typedObject(
  $nsid,
  "feedViewPref",
  l.object({
    feed: l.string(),
    hideReplies: l.optional(l.boolean()),
    hideReposts: l.optional(l.boolean()),
    hideQuotePosts: l.optional(l.boolean()),
    hideRepliesByLikeCount: l.optional(l.integer()),
    hideRepliesByUnfollowed: l.optional(l.withDefault(l.boolean(), true))
  })
);
const labelersPref = l.typedObject(
  $nsid,
  "labelersPref",
  l.object({
    labelers: l.array(l.ref((() => labelerPrefItem)))
  })
);
const interestsPref = l.typedObject(
  $nsid,
  "interestsPref",
  l.object({
    tags: l.array(l.string({ maxLength: 640, maxGraphemes: 64 }), {
      maxLength: 100
    })
  })
);
const knownFollowers = l.typedObject(
  $nsid,
  "knownFollowers",
  l.object({
    count: l.integer(),
    followers: l.array(
      l.ref((() => profileViewBasic)),
      { maxLength: 5, minLength: 0 }
    )
  })
);
const mutedWordsPref = l.typedObject(
  $nsid,
  "mutedWordsPref",
  l.object({ items: l.array(l.ref((() => mutedWord))) })
);
const savedFeedsPref = l.typedObject(
  $nsid,
  "savedFeedsPref",
  l.object({
    saved: l.array(l.string({ format: "at-uri" })),
    pinned: l.array(l.string({ format: "at-uri" })),
    timelineIndex: l.optional(l.integer())
  })
);
const threadViewPref = l.typedObject(
  $nsid,
  "threadViewPref",
  l.object({
    sort: l.optional(
      l.string()
    )
  })
);
const declaredAgePref = l.typedObject(
  $nsid,
  "declaredAgePref",
  l.object({
    isOverAge13: l.optional(l.boolean()),
    isOverAge16: l.optional(l.boolean()),
    isOverAge18: l.optional(l.boolean())
  })
);
const hiddenPostsPref = l.typedObject(
  $nsid,
  "hiddenPostsPref",
  l.object({ items: l.array(l.string({ format: "at-uri" })) })
);
const labelerPrefItem = l.typedObject(
  $nsid,
  "labelerPrefItem",
  l.object({ did: l.string({ format: "did" }) })
);
const mutedWordTarget = l.string({ maxLength: 640, maxGraphemes: 64 });
const adultContentPref = l.typedObject(
  $nsid,
  "adultContentPref",
  l.object({ enabled: l.withDefault(l.boolean(), false) })
);
const bskyAppStatePref = l.typedObject(
  $nsid,
  "bskyAppStatePref",
  l.object({
    nuxs: l.optional(
      l.array(l.ref((() => nux)), { maxLength: 100 })
    ),
    queuedNudges: l.optional(
      l.array(l.string({ maxLength: 100 }), { maxLength: 1e3 })
    ),
    activeProgressGuide: l.optional(
      l.ref((() => bskyAppProgressGuide))
    )
  })
);
const contentLabelPref = l.typedObject(
  $nsid,
  "contentLabelPref",
  l.object({
    label: l.string(),
    labelerDid: l.optional(l.string({ format: "did" })),
    visibility: l.string()
  })
);
const profileViewBasic = l.typedObject(
  $nsid,
  "profileViewBasic",
  l.object({
    did: l.string({ format: "did" }),
    debug: l.optional(l.lexMap()),
    avatar: l.optional(l.string({ format: "uri" })),
    handle: l.string({ format: "handle" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    status: l.optional(l.ref((() => statusView))),
    viewer: l.optional(l.ref((() => viewerState))),
    pronouns: l.optional(l.string()),
    createdAt: l.optional(l.string({ format: "datetime" })),
    associated: l.optional(
      l.ref((() => profileAssociated))
    ),
    displayName: l.optional(l.string({ maxLength: 640, maxGraphemes: 64 })),
    verification: l.optional(
      l.ref((() => verificationState))
    )
  })
);
const savedFeedsPrefV2 = l.typedObject(
  $nsid,
  "savedFeedsPrefV2",
  l.object({ items: l.array(l.ref((() => savedFeed))) })
);
const verificationView = l.typedObject(
  $nsid,
  "verificationView",
  l.object({
    uri: l.string({ format: "at-uri" }),
    issuer: l.string({ format: "did" }),
    isValid: l.boolean(),
    createdAt: l.string({ format: "datetime" })
  })
);
const profileAssociated = l.typedObject(
  $nsid,
  "profileAssociated",
  l.object({
    chat: l.optional(
      l.ref((() => profileAssociatedChat))
    ),
    germ: l.optional(
      l.ref((() => profileAssociatedGerm))
    ),
    lists: l.optional(l.integer()),
    labeler: l.optional(l.boolean()),
    feedgens: l.optional(l.integer()),
    starterPacks: l.optional(l.integer()),
    activitySubscription: l.optional(
      l.ref(
        (() => profileAssociatedActivitySubscription)
      )
    )
  })
);
const verificationPrefs = l.typedObject(
  $nsid,
  "verificationPrefs",
  l.object({ hideBadges: l.optional(l.withDefault(l.boolean(), false)) })
);
const verificationState = l.typedObject(
  $nsid,
  "verificationState",
  l.object({
    verifications: l.array(
      l.ref((() => verificationView))
    ),
    verifiedStatus: l.string(),
    trustedVerifierStatus: l.string()
  })
);
const personalDetailsPref = l.typedObject(
  $nsid,
  "personalDetailsPref",
  l.object({ birthDate: l.optional(l.string({ format: "datetime" })) })
);
const profileViewDetailed = l.typedObject(
  $nsid,
  "profileViewDetailed",
  l.object({
    did: l.string({ format: "did" }),
    debug: l.optional(l.lexMap()),
    avatar: l.optional(l.string({ format: "uri" })),
    banner: l.optional(l.string({ format: "uri" })),
    handle: l.string({ format: "handle" }),
    labels: l.optional(
      l.array(l.ref((() => label)))
    ),
    status: l.optional(l.ref((() => statusView))),
    viewer: l.optional(l.ref((() => viewerState))),
    website: l.optional(l.string({ format: "uri" })),
    pronouns: l.optional(l.string()),
    createdAt: l.optional(l.string({ format: "datetime" })),
    indexedAt: l.optional(l.string({ format: "datetime" })),
    associated: l.optional(
      l.ref((() => profileAssociated))
    ),
    pinnedPost: l.optional(
      l.ref((() => main$8))
    ),
    postsCount: l.optional(l.integer()),
    description: l.optional(l.string({ maxLength: 2560, maxGraphemes: 256 })),
    displayName: l.optional(l.string({ maxLength: 640, maxGraphemes: 64 })),
    followsCount: l.optional(l.integer()),
    verification: l.optional(
      l.ref((() => verificationState))
    ),
    followersCount: l.optional(l.integer()),
    joinedViaStarterPack: l.optional(
      l.ref(
        (() => starterPackViewBasic)
      )
    )
  })
);
const bskyAppProgressGuide = l.typedObject(
  $nsid,
  "bskyAppProgressGuide",
  l.object({ guide: l.string({ maxLength: 100 }) })
);
const liveEventPreferences = l.typedObject(
  $nsid,
  "liveEventPreferences",
  l.object({
    hideAllFeeds: l.optional(l.withDefault(l.boolean(), false)),
    hiddenFeedIds: l.optional(l.array(l.string()))
  })
);
const profileAssociatedChat = l.typedObject(
  $nsid,
  "profileAssociatedChat",
  l.object({
    allowIncoming: l.string()
  })
);
const profileAssociatedGerm = l.typedObject(
  $nsid,
  "profileAssociatedGerm",
  l.object({
    messageMeUrl: l.string({ format: "uri" }),
    showButtonTo: l.string()
  })
);
const postInteractionSettingsPref = l.typedObject(
  $nsid,
  "postInteractionSettingsPref",
  l.object({
    threadgateAllowRules: l.optional(
      l.array(
        l.typedUnion(
          [
            l.typedRef(
              (() => mentionRule)
            ),
            l.typedRef(
              (() => followerRule)
            ),
            l.typedRef(
              (() => followingRule)
            ),
            l.typedRef(
              (() => listRule)
            )
          ],
          false
        ),
        { maxLength: 5 }
      )
    ),
    postgateEmbeddingRules: l.optional(
      l.array(
        l.typedUnion(
          [
            l.typedRef(
              (() => disableRule)
            )
          ],
          false
        ),
        { maxLength: 5 }
      )
    )
  })
);
const profileAssociatedActivitySubscription = l.typedObject(
  $nsid,
  "profileAssociatedActivitySubscription",
  l.object({
    allowSubscriptions: l.string()
  })
);

export { profileView as a, threadViewPost as b, blockedPost as c, postView as d, main$5 as e, main$4 as f, main$7 as g, main$2 as h, main$3 as i, view$4 as j, main$6 as m, notFoundPost as n, profileViewDetailed as p, threadgateView as t, view$3 as v };
//# sourceMappingURL=defs.defs2.mjs.map

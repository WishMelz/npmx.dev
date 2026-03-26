import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

//#region app/pages/blog/alpha-release.md
var authors = [
	{
		"name": "Daniel Roe",
		"blueskyHandle": "danielroe.dev"
	},
	{
		"name": "Salma Alam-Naylor",
		"blueskyHandle": "whitep4nth3r.com"
	},
	{
		"name": "Matias Capeletto",
		"blueskyHandle": "patak.cat"
	}
];
var title = "Announcing npmx: a fast, modern browser for the npm registry";
var tags = ["OpenSource", "Release"];
var excerpt = "Today we're releasing the alpha of npmx.dev – a fast, modern browser for the npm registry, built in the open by a growing community.";
var date = "2026-03-03";
var slug = "alpha-release";
var description = "Today we're releasing the alpha of npmx.dev – a fast, modern browser for the npm registry, built in the open by a growing community.";
var draft = false;
var _sfc_main = {
	__name: "alpha-release",
	__ssrInlineRender: true,
	setup(__props, { expose: __expose }) {
		const frontmatter = {
			"authors": [
				{
					"name": "Daniel Roe",
					"blueskyHandle": "danielroe.dev"
				},
				{
					"name": "Salma Alam-Naylor",
					"blueskyHandle": "whitep4nth3r.com"
				},
				{
					"name": "Matias Capeletto",
					"blueskyHandle": "patak.cat"
				}
			],
			"title": "Announcing npmx: a fast, modern browser for the npm registry",
			"tags": ["OpenSource", "Release"],
			"excerpt": "Today we're releasing the alpha of npmx.dev – a fast, modern browser for the npm registry, built in the open by a growing community.",
			"date": "2026-03-03",
			"slug": "alpha-release",
			"description": "Today we're releasing the alpha of npmx.dev – a fast, modern browser for the npm registry, built in the open by a growing community.",
			"draft": false
		};
		__expose({ frontmatter });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BlogPostWrapper = resolveComponent("BlogPostWrapper");
			const _component_BlueskyPostEmbed = resolveComponent("BlueskyPostEmbed");
			const _component_BlogPostFederatedArticles = resolveComponent("BlogPostFederatedArticles");
			_push(ssrRenderComponent(_component_BlogPostWrapper, mergeProps({ frontmatter }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="text-fg-muted leading-relaxed"${_scopeId}><h1 id="announcing-npmx%3A-a-fast%2C-modern-browser-for-the-npm-registry" tabindex="-1"${_scopeId}>Announcing npmx: a fast, modern browser for the npm registry</h1><p${_scopeId}>Today we’re releasing the alpha of <a href="https://npmx.dev"${_scopeId}>npmx.dev</a>, a fast, modern browser for the npm registry.</p><p${_scopeId}>npmx is about speed and simplicity: making it quicker and easier to find, evaluate, and manage npm packages. It gives you useful data – like install size, module format, and outdated dependencies – right where you need it, so you can make better decisions about the packages you use.</p><p${_scopeId}>We’re also building social features into npmx because open source is better when it’s easier to connect with the people behind the packages.</p><h2 id="the-need-for-npmx" tabindex="-1"${_scopeId}>The need for npmx</h2><p${_scopeId}>On January 22nd 2026, Daniel Roe, open-source maintainer and founder, and leader of the <a href="https://nuxt.com/"${_scopeId}>Nuxt</a> core team, had an idea, and made <a href="https://github.com/npmx-dev/npmx.dev/commit/e39e56c08fd1e7bdb556c8565c6b11b3c34c8934"${_scopeId}>the first commit to the npmx repository</a>. The next day, <a href="https://bsky.app/profile/danielroe.dev/post/3md3cmrg56k2r"${_scopeId}>Daniel posted on Bluesky</a> asking about people’s frustrations with the npm experience – both on the web and in the CLI. The responses came flooding in: code browsing, missing data, trust signals, dependency visibility, and the general friction around publishing.</p>`);
						_push(ssrRenderComponent(_component_BlueskyPostEmbed, { url: "https://bsky.app/profile/danielroe.dev/post/3md3cmrg56k2r" }, null, _parent, _scopeId));
						_push(`<p${_scopeId}>Clearly, there was an appetite for something better – and people were willing to help build it.</p><h2 id="the-power-of-community" tabindex="-1"${_scopeId}>The power of community</h2><p${_scopeId}>Things moved fast. Within 24 hours, 49 pull requests had been opened. Two weeks later, the <a href="https://github.com/npmx-dev/npmx.dev/issues/1000"${_scopeId}>community had contributed 1000 issues and PRs</a> – that’s roughly <em${_scopeId}>one every 20 minutes</em>, around the clock. With <a href="https://github.com/npmx-dev/npmx.dev/graphs/contributors"${_scopeId}>over 105 contributors</a> and 1500 stars in just 16 days, npmx became one of the most active early open-source projects we’ve seen.</p><p${_scopeId}><a href="https://www.star-history.com/#npmx-dev/npmx.dev&amp;type=date&amp;legend=top-left"${_scopeId}><img src="https://api.star-history.com/svg?repos=npmx-dev/npmx.dev&amp;type=date&amp;legend=top-left" alt="Star History Chart"${_scopeId}></a></p><p${_scopeId}>We don’t think this happened by accident. From the start, npmx prioritized accessibility, internationalization, and working in the open. This attracted people who care about those things – and who are good at collaborating because of it. The result is a genuinely diverse, global community that’s a joy to be part of.</p><h2 id="what-you-can-do-with-npmx-today" tabindex="-1"${_scopeId}>What you can do with npmx today</h2><p${_scopeId}>Search and view details about packages, users and organizations available on npm, and dive deeper into the code. Plus get detailed information on:</p><ul${_scopeId}><li${_scopeId}>download statistics</li><li${_scopeId}>outdated dependency warnings</li><li${_scopeId}>module format (ESM/CJS)</li><li${_scopeId}>install size</li><li${_scopeId}><a href="https://jsr.io/"${_scopeId}>JSR</a> cross-reference</li><li${_scopeId}>multi-provider repo support</li><li${_scopeId}>version range resolution</li><li${_scopeId}>package likes and social features</li><li${_scopeId}>performance recommendations powered by <a href="https://e18e.dev/"${_scopeId}>e18e</a></li></ul><p${_scopeId}>You can also launch <a href="https://stackblitz.com/"${_scopeId}>StackBlitz</a>, <a href="https://codesandbox.io/"${_scopeId}>CodeSandbox</a>, and other demo environments directly from package READMEs. Additionally, npmx is available in 19 languages, has light and dark mode, and is designed to be keyboard-friendly throughout.</p><h2 id="the-future-of-npmx" tabindex="-1"${_scopeId}>The future of npmx</h2><p${_scopeId}>We want to build a better package browsing and management experience for everyone in the JavaScript ecosystem. We’re moving fast, but we don’t have all the answers. Right now we’re building for our peers: open-source developers who work with packages daily and are willing to try something early and tell us what’s working and what isn’t. That feedback is how we’ll get to beta.</p><h2 id="join-us-at-npmx" tabindex="-1"${_scopeId}>Join us at npmx</h2><p${_scopeId}>We’d love for you to get involved. Even if you’ve never contributed to open source before – you are welcome. If you’re not sure where to start, Salma Alam-Naylor has written <a href="https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/"${_scopeId}>a ten-step guide to making your first open-source contribution on GitHub</a>.</p><p${_scopeId}>Below this post, you’ll also find articles from npmx contributors sharing their own perspectives and experiences.</p><p${_scopeId}>This npmx alpha is intentionally early. We want real-world feedback from <em${_scopeId}>you</em> to guide what we work on next. Try <a href="https://npmx.dev"${_scopeId}>npmx</a> today, tell us what you think at <a href="https://chat.npmx.dev"${_scopeId}>chat.npmx.dev</a>, <a href="https://github.com/npmx-dev/npmx.dev/issues"${_scopeId}>open an issue on GitHub</a>, or submit a pull request. And <a href="https://bsky.app/profile/npmx.dev"${_scopeId}>follow npmx.dev on Bluesky</a> to keep up with what we’re building.</p><p${_scopeId}>Thank you to everyone who has contributed so far – code, docs, testing, community, and more. You’re the ones building this.</p><hr${_scopeId}>`);
						_push(ssrRenderComponent(_component_BlogPostFederatedArticles, {
							headline: "Read more from the community",
							articles: [
								{
									url: "https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/",
									title: "How to Make Your First Open Source Contribution",
									authorHandle: "whitep4nth3r.com",
									description: "Getting involved in open source doesn't have to be scary! Understand how to find a great project and make your first contribution in this guide from Salma."
								},
								{
									url: "https://roe.dev/blog/virtuous-circle",
									title: "A Virtuous Circle",
									authorHandle: "danielroe.dev",
									description: "There's a reason why building npmx has been such a blast so far, and it's one of the most powerful patterns in open source software development. It's also why 'the 10x developer' is an incredibly dangerous myth."
								},
								{
									url: "https://patak.cat/npmx/converging-communities",
									title: "npmx: converging communities",
									authorHandle: "patak.cat",
									description: "The story of the many people and communities that converged to build npmx together."
								},
								{
									url: "https://www.freecodecamp.org/news/learning-to-enjoy-code-reviews-with-npmx/",
									title: "OSS Pull Request Therapy: Learning to Enjoy Code Reviews with npmx",
									authorHandle: "abbeyperini.dev",
									description: "For years, I thought Open Source Software (OSS) just wasn't for me. Curious about the hype I saw on Bluesky, I recently joined the npmx Discord server on a whim. My journey from lurker to contributor taught me a lot about OSS and gave me new confidence going into code reviews."
								},
								{
									url: "https://graphieros.github.io/graphieros-blog/blog/2026/npmx.html",
									title: "vue-data-ui is on npmx npmx is on vue-data-ui",
									authorHandle: "graphieros.npmx.social",
									description: "Graphieros explores a minimal npm-based workflow and why it exists."
								},
								{
									url: "https://www.alexdln.com/blog/npmx-the-month",
									title: "The month. npmx",
									authorHandle: "alexdln.com",
									description: "Alex reflects on the project, warm stories, wonderful people, and a look into the future"
								},
								{
									url: "https://www.netlify.com/blog/sponsoring-npmx",
									title: "Sponsoring npmx",
									authorHandle: "netlify.com",
									description: "It’s more important than ever that companies come together across competitive boundaries to sponsor and support the open ecosystem that lifts all boats."
								},
								{
									url: "https://atproto.com/blog/npmx-alpha-launch",
									title: "Supporting the npmx Alpha Launch",
									authorHandle: "atproto.com",
									description: "AT Protocol explores how the npmx alpha launch showcases open-source communities building quickly on top of atproto."
								},
								{
									url: "https://johnnyreilly.com/npmx-with-a-little-help-from-my-friends",
									title: "npmx: With a Little Help From My Friends",
									authorHandle: "johnnyreilly.com",
									description: "How to contribute to npmx.dev, and thoughts on Johnny's experience with the project."
								},
								{
									url: "https://opensourcepledge.com/blog/npmx-a-lesson-in-open-source-collaboration-feedback-loops/",
									title: "npmx: A Lesson in Open Source's Collaboration Feedback Loops",
									authorHandle: "opensourcepledge.com",
									description: "npmx's success is reminding us why Open Source is such a special social phenomenon."
								},
								{
									url: "https://blog.trueberryless.org/blog/npmx/",
									title: "Rising community at tomorrow's horizon",
									authorHandle: "trueberryless.org",
									description: "Telling the story of a newly founded community."
								},
								{
									url: "https://conf.zurichjs.com/blog/open-source-needs-community",
									title: "Open source needs community. Community needs open source.",
									authorHandle: "zurichjs.com",
									description: "Why ZurichJS cares about getting people into open source."
								},
								{
									url: "https://www.sybers.fr/blog/3mfhn5xoawz24",
									title: "From a Bluesky post to my favorite open source community",
									authorHandle: "sybers.fr",
									description: "The best open source projects aren't just about great code. They're about the people behind them."
								},
								{
									url: "https://storybook.js.org/blog/storybook-npmx",
									title: "Storybook 💙 npmx",
									authorHandle: "storybook.js.org",
									description: "We're huge fans of what the npmx community is building. Today's alpha is just the starting line, and we're proud to be running alongside them."
								},
								{
									url: "https://jensroemer.com/writing/open-source-whats-in-it-for-me/",
									title: "Open source, what's in it for me?",
									authorHandle: "jensroemer.com",
									description: "Reflections on learning, community, and change."
								},
								{
									url: "https://voidzero.dev/posts/npmx-alpha",
									title: "VoidZero and npmx: Building Better Tools Together",
									authorHandle: "voidzero.dev",
									description: "How VoidZero and npmx.dev share a vision for making JavaScript developers more productive, and how real-world feedback from open-source builders helps improve our tooling."
								},
								{
									url: "https://www.faziz-dev.com/blog/community-open-source-and-npmx",
									title: "Community, Open Source, and npmx",
									authorHandle: "farisaziz12.bsky.social",
									description: "npmx isn’t just an npm browser, it's a fast-moving open source train that welcomes you aboard the moment you show up."
								},
								{
									url: "https://paulie.codes/blog/3mfs2stugzp2v",
									title: "Overcoming Imposter Syndrome: My First Open Source Contribution",
									authorHandle: "paulie.codes",
									description: "The most important part of open source is the people, and everyone has something valuable to bring to the table."
								},
								{
									url: "https://philippeserhal.com/articles/oss-made-me-a-better-developer",
									title: "OSS made me a better developer",
									authorHandle: "philippeserhal.com",
									description: "How getting involved in npmx made me a better developer."
								},
								{
									url: "https://news.atmosphereconf.org/3mg5b3zvktc2i",
									title: "npmx goes social with atproto",
									authorHandle: "atprotocol.dev",
									description: "Announcing npmx speakers, and congratulations on launch day!"
								},
								{
									url: "https://www.radosvet.dev/posts/career/from-newsletter-to-open-source",
									title: "From a Newsletter Link to My First Open Source Contribution",
									authorHandle: "radosvet.dev",
									description: "How discovering npmx through a newsletter led to a first meaningful open source contribution and a new perspective on community-driven development."
								},
								{
									url: "https://vale.rocks/micros/20260303-1200",
									title: "npmx Is Open-Source Done Right",
									authorHandle: "vale.rocks",
									description: "How the ethos and practices of npmx represent a healthy open-source ecosystem that should be the standard, not an exception."
								},
								{
									url: "https://jaydip.me/blog/joy-of-open-source",
									title: "Joy of open source",
									authorHandle: "jaydip.me",
									description: "childish fun of making things together"
								},
								{
									url: "https://e18e.dev/blog/npmx-collaboration.html",
									title: "Collaborating with npmx",
									authorHandle: "43081j.com",
									description: "How the e18e community is collaborating closely with npmx to make best practices more visible and accessible to everyone in the ecosystem."
								},
								{
									url: "https://youtu.be/NoC5U6F6p4Y",
									title: "The npmjs.com that developers deserve - What is npmx? (video)",
									authorHandle: "thealexlichter.com",
									description: "An introductory video showcasing Alex's favorite features of npmx and the open-source idea behind it."
								},
								{
									url: "https://piccalil.li/blog/finding-an-accessibility-first-culture-in-npmx/",
									title: "Finding an accessibility-first culture in npmx",
									authorHandle: "abbeyperini.dev",
									description: "Abbey Perini talks about how accessibility is a deep part of the npmx culture."
								},
								{
									url: "https://jonathanyeong.com/writing/npmx-and-the-open-source-mindset/",
									title: "npmx and the open source mindset",
									authorHandle: "jonathanyeong.com",
									description: "How npmx taught me to embrace the open source mindset."
								}
							]
						}, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "text-fg-muted leading-relaxed" }, [
						createVNode("h1", {
							id: "announcing-npmx%3A-a-fast%2C-modern-browser-for-the-npm-registry",
							tabindex: "-1"
						}, "Announcing npmx: a fast, modern browser for the npm registry"),
						createVNode("p", null, [
							createTextVNode("Today we’re releasing the alpha of "),
							createVNode("a", { href: "https://npmx.dev" }, "npmx.dev"),
							createTextVNode(", a fast, modern browser for the npm registry.")
						]),
						createVNode("p", null, "npmx is about speed and simplicity: making it quicker and easier to find, evaluate, and manage npm packages. It gives you useful data – like install size, module format, and outdated dependencies – right where you need it, so you can make better decisions about the packages you use."),
						createVNode("p", null, "We’re also building social features into npmx because open source is better when it’s easier to connect with the people behind the packages."),
						createVNode("h2", {
							id: "the-need-for-npmx",
							tabindex: "-1"
						}, "The need for npmx"),
						createVNode("p", null, [
							createTextVNode("On January 22nd 2026, Daniel Roe, open-source maintainer and founder, and leader of the "),
							createVNode("a", { href: "https://nuxt.com/" }, "Nuxt"),
							createTextVNode(" core team, had an idea, and made "),
							createVNode("a", { href: "https://github.com/npmx-dev/npmx.dev/commit/e39e56c08fd1e7bdb556c8565c6b11b3c34c8934" }, "the first commit to the npmx repository"),
							createTextVNode(". The next day, "),
							createVNode("a", { href: "https://bsky.app/profile/danielroe.dev/post/3md3cmrg56k2r" }, "Daniel posted on Bluesky"),
							createTextVNode(" asking about people’s frustrations with the npm experience – both on the web and in the CLI. The responses came flooding in: code browsing, missing data, trust signals, dependency visibility, and the general friction around publishing.")
						]),
						createVNode(_component_BlueskyPostEmbed, { url: "https://bsky.app/profile/danielroe.dev/post/3md3cmrg56k2r" }),
						createVNode("p", null, "Clearly, there was an appetite for something better – and people were willing to help build it."),
						createVNode("h2", {
							id: "the-power-of-community",
							tabindex: "-1"
						}, "The power of community"),
						createVNode("p", null, [
							createTextVNode("Things moved fast. Within 24 hours, 49 pull requests had been opened. Two weeks later, the "),
							createVNode("a", { href: "https://github.com/npmx-dev/npmx.dev/issues/1000" }, "community had contributed 1000 issues and PRs"),
							createTextVNode(" – that’s roughly "),
							createVNode("em", null, "one every 20 minutes"),
							createTextVNode(", around the clock. With "),
							createVNode("a", { href: "https://github.com/npmx-dev/npmx.dev/graphs/contributors" }, "over 105 contributors"),
							createTextVNode(" and 1500 stars in just 16 days, npmx became one of the most active early open-source projects we’ve seen.")
						]),
						createVNode("p", null, [createVNode("a", { href: "https://www.star-history.com/#npmx-dev/npmx.dev&type=date&legend=top-left" }, [createVNode("img", {
							src: "https://api.star-history.com/svg?repos=npmx-dev/npmx.dev&type=date&legend=top-left",
							alt: "Star History Chart"
						})])]),
						createVNode("p", null, "We don’t think this happened by accident. From the start, npmx prioritized accessibility, internationalization, and working in the open. This attracted people who care about those things – and who are good at collaborating because of it. The result is a genuinely diverse, global community that’s a joy to be part of."),
						createVNode("h2", {
							id: "what-you-can-do-with-npmx-today",
							tabindex: "-1"
						}, "What you can do with npmx today"),
						createVNode("p", null, "Search and view details about packages, users and organizations available on npm, and dive deeper into the code. Plus get detailed information on:"),
						createVNode("ul", null, [
							createVNode("li", null, "download statistics"),
							createVNode("li", null, "outdated dependency warnings"),
							createVNode("li", null, "module format (ESM/CJS)"),
							createVNode("li", null, "install size"),
							createVNode("li", null, [createVNode("a", { href: "https://jsr.io/" }, "JSR"), createTextVNode(" cross-reference")]),
							createVNode("li", null, "multi-provider repo support"),
							createVNode("li", null, "version range resolution"),
							createVNode("li", null, "package likes and social features"),
							createVNode("li", null, [createTextVNode("performance recommendations powered by "), createVNode("a", { href: "https://e18e.dev/" }, "e18e")])
						]),
						createVNode("p", null, [
							createTextVNode("You can also launch "),
							createVNode("a", { href: "https://stackblitz.com/" }, "StackBlitz"),
							createTextVNode(", "),
							createVNode("a", { href: "https://codesandbox.io/" }, "CodeSandbox"),
							createTextVNode(", and other demo environments directly from package READMEs. Additionally, npmx is available in 19 languages, has light and dark mode, and is designed to be keyboard-friendly throughout.")
						]),
						createVNode("h2", {
							id: "the-future-of-npmx",
							tabindex: "-1"
						}, "The future of npmx"),
						createVNode("p", null, "We want to build a better package browsing and management experience for everyone in the JavaScript ecosystem. We’re moving fast, but we don’t have all the answers. Right now we’re building for our peers: open-source developers who work with packages daily and are willing to try something early and tell us what’s working and what isn’t. That feedback is how we’ll get to beta."),
						createVNode("h2", {
							id: "join-us-at-npmx",
							tabindex: "-1"
						}, "Join us at npmx"),
						createVNode("p", null, [
							createTextVNode("We’d love for you to get involved. Even if you’ve never contributed to open source before – you are welcome. If you’re not sure where to start, Salma Alam-Naylor has written "),
							createVNode("a", { href: "https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/" }, "a ten-step guide to making your first open-source contribution on GitHub"),
							createTextVNode(".")
						]),
						createVNode("p", null, "Below this post, you’ll also find articles from npmx contributors sharing their own perspectives and experiences."),
						createVNode("p", null, [
							createTextVNode("This npmx alpha is intentionally early. We want real-world feedback from "),
							createVNode("em", null, "you"),
							createTextVNode(" to guide what we work on next. Try "),
							createVNode("a", { href: "https://npmx.dev" }, "npmx"),
							createTextVNode(" today, tell us what you think at "),
							createVNode("a", { href: "https://chat.npmx.dev" }, "chat.npmx.dev"),
							createTextVNode(", "),
							createVNode("a", { href: "https://github.com/npmx-dev/npmx.dev/issues" }, "open an issue on GitHub"),
							createTextVNode(", or submit a pull request. And "),
							createVNode("a", { href: "https://bsky.app/profile/npmx.dev" }, "follow npmx.dev on Bluesky"),
							createTextVNode(" to keep up with what we’re building.")
						]),
						createVNode("p", null, "Thank you to everyone who has contributed so far – code, docs, testing, community, and more. You’re the ones building this."),
						createVNode("hr"),
						createVNode(_component_BlogPostFederatedArticles, {
							headline: "Read more from the community",
							articles: [
								{
									url: "https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/",
									title: "How to Make Your First Open Source Contribution",
									authorHandle: "whitep4nth3r.com",
									description: "Getting involved in open source doesn't have to be scary! Understand how to find a great project and make your first contribution in this guide from Salma."
								},
								{
									url: "https://roe.dev/blog/virtuous-circle",
									title: "A Virtuous Circle",
									authorHandle: "danielroe.dev",
									description: "There's a reason why building npmx has been such a blast so far, and it's one of the most powerful patterns in open source software development. It's also why 'the 10x developer' is an incredibly dangerous myth."
								},
								{
									url: "https://patak.cat/npmx/converging-communities",
									title: "npmx: converging communities",
									authorHandle: "patak.cat",
									description: "The story of the many people and communities that converged to build npmx together."
								},
								{
									url: "https://www.freecodecamp.org/news/learning-to-enjoy-code-reviews-with-npmx/",
									title: "OSS Pull Request Therapy: Learning to Enjoy Code Reviews with npmx",
									authorHandle: "abbeyperini.dev",
									description: "For years, I thought Open Source Software (OSS) just wasn't for me. Curious about the hype I saw on Bluesky, I recently joined the npmx Discord server on a whim. My journey from lurker to contributor taught me a lot about OSS and gave me new confidence going into code reviews."
								},
								{
									url: "https://graphieros.github.io/graphieros-blog/blog/2026/npmx.html",
									title: "vue-data-ui is on npmx npmx is on vue-data-ui",
									authorHandle: "graphieros.npmx.social",
									description: "Graphieros explores a minimal npm-based workflow and why it exists."
								},
								{
									url: "https://www.alexdln.com/blog/npmx-the-month",
									title: "The month. npmx",
									authorHandle: "alexdln.com",
									description: "Alex reflects on the project, warm stories, wonderful people, and a look into the future"
								},
								{
									url: "https://www.netlify.com/blog/sponsoring-npmx",
									title: "Sponsoring npmx",
									authorHandle: "netlify.com",
									description: "It’s more important than ever that companies come together across competitive boundaries to sponsor and support the open ecosystem that lifts all boats."
								},
								{
									url: "https://atproto.com/blog/npmx-alpha-launch",
									title: "Supporting the npmx Alpha Launch",
									authorHandle: "atproto.com",
									description: "AT Protocol explores how the npmx alpha launch showcases open-source communities building quickly on top of atproto."
								},
								{
									url: "https://johnnyreilly.com/npmx-with-a-little-help-from-my-friends",
									title: "npmx: With a Little Help From My Friends",
									authorHandle: "johnnyreilly.com",
									description: "How to contribute to npmx.dev, and thoughts on Johnny's experience with the project."
								},
								{
									url: "https://opensourcepledge.com/blog/npmx-a-lesson-in-open-source-collaboration-feedback-loops/",
									title: "npmx: A Lesson in Open Source's Collaboration Feedback Loops",
									authorHandle: "opensourcepledge.com",
									description: "npmx's success is reminding us why Open Source is such a special social phenomenon."
								},
								{
									url: "https://blog.trueberryless.org/blog/npmx/",
									title: "Rising community at tomorrow's horizon",
									authorHandle: "trueberryless.org",
									description: "Telling the story of a newly founded community."
								},
								{
									url: "https://conf.zurichjs.com/blog/open-source-needs-community",
									title: "Open source needs community. Community needs open source.",
									authorHandle: "zurichjs.com",
									description: "Why ZurichJS cares about getting people into open source."
								},
								{
									url: "https://www.sybers.fr/blog/3mfhn5xoawz24",
									title: "From a Bluesky post to my favorite open source community",
									authorHandle: "sybers.fr",
									description: "The best open source projects aren't just about great code. They're about the people behind them."
								},
								{
									url: "https://storybook.js.org/blog/storybook-npmx",
									title: "Storybook 💙 npmx",
									authorHandle: "storybook.js.org",
									description: "We're huge fans of what the npmx community is building. Today's alpha is just the starting line, and we're proud to be running alongside them."
								},
								{
									url: "https://jensroemer.com/writing/open-source-whats-in-it-for-me/",
									title: "Open source, what's in it for me?",
									authorHandle: "jensroemer.com",
									description: "Reflections on learning, community, and change."
								},
								{
									url: "https://voidzero.dev/posts/npmx-alpha",
									title: "VoidZero and npmx: Building Better Tools Together",
									authorHandle: "voidzero.dev",
									description: "How VoidZero and npmx.dev share a vision for making JavaScript developers more productive, and how real-world feedback from open-source builders helps improve our tooling."
								},
								{
									url: "https://www.faziz-dev.com/blog/community-open-source-and-npmx",
									title: "Community, Open Source, and npmx",
									authorHandle: "farisaziz12.bsky.social",
									description: "npmx isn’t just an npm browser, it's a fast-moving open source train that welcomes you aboard the moment you show up."
								},
								{
									url: "https://paulie.codes/blog/3mfs2stugzp2v",
									title: "Overcoming Imposter Syndrome: My First Open Source Contribution",
									authorHandle: "paulie.codes",
									description: "The most important part of open source is the people, and everyone has something valuable to bring to the table."
								},
								{
									url: "https://philippeserhal.com/articles/oss-made-me-a-better-developer",
									title: "OSS made me a better developer",
									authorHandle: "philippeserhal.com",
									description: "How getting involved in npmx made me a better developer."
								},
								{
									url: "https://news.atmosphereconf.org/3mg5b3zvktc2i",
									title: "npmx goes social with atproto",
									authorHandle: "atprotocol.dev",
									description: "Announcing npmx speakers, and congratulations on launch day!"
								},
								{
									url: "https://www.radosvet.dev/posts/career/from-newsletter-to-open-source",
									title: "From a Newsletter Link to My First Open Source Contribution",
									authorHandle: "radosvet.dev",
									description: "How discovering npmx through a newsletter led to a first meaningful open source contribution and a new perspective on community-driven development."
								},
								{
									url: "https://vale.rocks/micros/20260303-1200",
									title: "npmx Is Open-Source Done Right",
									authorHandle: "vale.rocks",
									description: "How the ethos and practices of npmx represent a healthy open-source ecosystem that should be the standard, not an exception."
								},
								{
									url: "https://jaydip.me/blog/joy-of-open-source",
									title: "Joy of open source",
									authorHandle: "jaydip.me",
									description: "childish fun of making things together"
								},
								{
									url: "https://e18e.dev/blog/npmx-collaboration.html",
									title: "Collaborating with npmx",
									authorHandle: "43081j.com",
									description: "How the e18e community is collaborating closely with npmx to make best practices more visible and accessible to everyone in the ecosystem."
								},
								{
									url: "https://youtu.be/NoC5U6F6p4Y",
									title: "The npmjs.com that developers deserve - What is npmx? (video)",
									authorHandle: "thealexlichter.com",
									description: "An introductory video showcasing Alex's favorite features of npmx and the open-source idea behind it."
								},
								{
									url: "https://piccalil.li/blog/finding-an-accessibility-first-culture-in-npmx/",
									title: "Finding an accessibility-first culture in npmx",
									authorHandle: "abbeyperini.dev",
									description: "Abbey Perini talks about how accessibility is a deep part of the npmx culture."
								},
								{
									url: "https://jonathanyeong.com/writing/npmx-and-the-open-source-mindset/",
									title: "npmx and the open source mindset",
									authorHandle: "jonathanyeong.com",
									description: "How npmx taught me to embrace the open source mindset."
								}
							]
						})
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/alpha-release.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { authors, date, _sfc_main as default, description, draft, excerpt, slug, tags, title };
//# sourceMappingURL=alpha-release-CYjMH9n9.mjs.map

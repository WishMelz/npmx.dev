import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

//#region app/pages/blog/first-post.md
var authors = [{
	"name": "Daniel Roe",
	"blueskyHandle": "danielroe.dev"
}, {
	"name": "Salma Alam-Naylor",
	"blueskyHandle": "whitep4nth3r.com"
}];
var title = "Hello World";
var tags = ["OpenSource", "Nuxt"];
var excerpt = "My first post";
var date = "2026-01-28T15:30:00Z";
var slug = "first-post";
var description = "My first post on the blog";
var draft = true;
var _sfc_main = {
	__name: "first-post",
	__ssrInlineRender: true,
	setup(__props, { expose: __expose }) {
		const frontmatter = {
			"authors": [{
				"name": "Daniel Roe",
				"blueskyHandle": "danielroe.dev"
			}, {
				"name": "Salma Alam-Naylor",
				"blueskyHandle": "whitep4nth3r.com"
			}],
			"title": "Hello World",
			"tags": ["OpenSource", "Nuxt"],
			"excerpt": "My first post",
			"date": "2026-01-28T15:30:00Z",
			"slug": "first-post",
			"description": "My first post on the blog",
			"draft": true
		};
		__expose({ frontmatter });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(resolveComponent("BlogPostWrapper"), mergeProps({ frontmatter }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="text-fg-muted leading-relaxed"${_scopeId}><h1 id="markdown%3A-syntax" tabindex="-1"${_scopeId}>Markdown: Syntax</h1><ul${_scopeId}><li${_scopeId}><a href="#overview"${_scopeId}>Overview</a><ul${_scopeId}><li${_scopeId}><a href="#philosophy"${_scopeId}>Philosophy</a></li></ul></li><li${_scopeId}><a href="#block-elements"${_scopeId}>Block Elements</a><ul${_scopeId}><li${_scopeId}><a href="#paragraphs-and-line-breaks"${_scopeId}>Paragraphs and Line Breaks</a></li><li${_scopeId}><a href="#headers"${_scopeId}>Headers</a></li><li${_scopeId}><a href="#blockquotes"${_scopeId}>Blockquotes</a></li><li${_scopeId}><a href="#lists"${_scopeId}>Lists</a></li><li${_scopeId}><a href="#code-blocks"${_scopeId}>Code Blocks</a></li></ul></li><li${_scopeId}><a href="#span-elements"${_scopeId}>Span Elements</a><ul${_scopeId}><li${_scopeId}><a href="#links"${_scopeId}>Links</a></li><li${_scopeId}><a href="#emphasis"${_scopeId}>Emphasis</a></li><li${_scopeId}><a href="#code"${_scopeId}>Code</a></li></ul></li></ul><p${_scopeId}><strong${_scopeId}>Note:</strong> This document is itself written using Markdown; you can <a href="/projects/markdown/syntax.text"${_scopeId}>see the source for it by adding ‘.text’ to the URL</a>.</p><hr${_scopeId}><h2 id="overview" tabindex="-1"${_scopeId}>Overview</h2><h3 id="philosophy" tabindex="-1"${_scopeId}>Philosophy</h3><p${_scopeId}>Markdown is intended to be as easy-to-read and easy-to-write as is feasible.</p><p${_scopeId}>Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters – including <a href="http://docutils.sourceforge.net/mirror/setext.html"${_scopeId}>Setext</a>, <a href="http://www.aaronsw.com/2002/atx/"${_scopeId}>atx</a>, <a href="http://textism.com/tools/textile/"${_scopeId}>Textile</a>, <a href="http://docutils.sourceforge.net/rst.html"${_scopeId}>reStructuredText</a>, <a href="http://www.triptico.com/software/grutatxt.html"${_scopeId}>Grutatext</a>, and <a href="http://ettext.taint.org/doc/"${_scopeId}>EtText</a> – the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.</p><h2 id="block-elements" tabindex="-1"${_scopeId}>Block Elements</h2><h3 id="paragraphs-and-line-breaks" tabindex="-1"${_scopeId}>Paragraphs and Line Breaks</h3><p${_scopeId}>A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line – a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs.</p><p${_scopeId}>The implication of the “one or more consecutive lines of text” rule is that Markdown supports “hard-wrapped” text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type’s “Convert Line Breaks” option) which translate every line break character in a paragraph into a <code${_scopeId}>&lt;br /&gt;</code> tag.</p><p${_scopeId}>When you <em${_scopeId}>do</em> want to insert a <code${_scopeId}>&lt;br /&gt;</code> break tag using Markdown, you end a line with two or more spaces, then type return.</p><h3 id="headers" tabindex="-1"${_scopeId}>Headers</h3><p${_scopeId}>Markdown supports two styles of headers, [Setext] [1] and [atx] [2].</p><p${_scopeId}>Optionally, you may “close” atx-style headers. This is purely cosmetic – you can use this if you think it looks better. The closing hashes don’t even need to match the number of hashes used to open the header. (The number of opening hashes determines the header level.)</p><h3 id="blockquotes" tabindex="-1"${_scopeId}>Blockquotes</h3><p${_scopeId}>Markdown uses email-style <code${_scopeId}>&gt;</code> characters for blockquoting. If you’re familiar with quoting passages of text in an email message, then you know how to create a blockquote in Markdown. It looks best if you hard wrap the text and put a <code${_scopeId}>&gt;</code> before every line:</p><blockquote${_scopeId}><p${_scopeId}>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p><p${_scopeId}>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</p></blockquote><p${_scopeId}>Markdown allows you to be lazy and only put the <code${_scopeId}>&gt;</code> before the first line of a hard-wrapped paragraph:</p><blockquote${_scopeId}><p${_scopeId}>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p></blockquote><blockquote${_scopeId}><p${_scopeId}>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</p></blockquote><p${_scopeId}>Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of <code${_scopeId}>&gt;</code>:</p><blockquote${_scopeId}><p${_scopeId}>This is the first level of quoting.</p><blockquote${_scopeId}><p${_scopeId}>This is nested blockquote.</p></blockquote><p${_scopeId}>Back to the first level.</p></blockquote><p${_scopeId}>Blockquotes can contain other Markdown elements, including headers, lists, and code blocks:</p><blockquote${_scopeId}><h2 id="this-is-a-header." tabindex="-1"${_scopeId}>This is a header.</h2><ol${_scopeId}><li${_scopeId}>This is the first list item.</li><li${_scopeId}>This is the second list item.</li></ol><p${_scopeId}>Here’s some example code:</p><pre${_scopeId}><code${_scopeId}>return shell_exec(&quot;echo \$input | \$markdown_script&quot;);
</code></pre></blockquote><p${_scopeId}>Any decent text editor should make email-style quoting easy. For example, with BBEdit, you can make a selection and choose Increase Quote Level from the Text menu.</p><h3 id="lists" tabindex="-1"${_scopeId}>Lists</h3><p${_scopeId}>Markdown supports ordered (numbered) and unordered (bulleted) lists.</p><p${_scopeId}>Unordered lists use asterisks, pluses, and hyphens – interchangably – as list markers:</p><ul${_scopeId}><li${_scopeId}>Red</li><li${_scopeId}>Green</li><li${_scopeId}>Blue</li></ul><p${_scopeId}>is equivalent to:</p><ul${_scopeId}><li${_scopeId}>Red</li><li${_scopeId}>Green</li><li${_scopeId}>Blue</li></ul><p${_scopeId}>and:</p><ul${_scopeId}><li${_scopeId}>Red</li><li${_scopeId}>Green</li><li${_scopeId}>Blue</li></ul><p${_scopeId}>Ordered lists use numbers followed by periods:</p><ol${_scopeId}><li${_scopeId}>Bird</li><li${_scopeId}>McHale</li><li${_scopeId}>Parish</li></ol><p${_scopeId}>It’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Markdown produces. The HTML Markdown produces from the above list is:</p><p${_scopeId}>If you instead wrote the list in Markdown like this:</p><ol${_scopeId}><li${_scopeId}>Bird</li><li${_scopeId}>McHale</li><li${_scopeId}>Parish</li></ol><p${_scopeId}>or even:</p><ol start="3"${_scopeId}><li${_scopeId}>Bird</li><li${_scopeId}>McHale</li><li${_scopeId}>Parish</li></ol><p${_scopeId}>you’d get the exact same HTML output. The point is, if you want to, you can use ordinal numbers in your ordered Markdown lists, so that the numbers in your source match the numbers in your published HTML. But if you want to be lazy, you don’t have to.</p><p${_scopeId}>To make lists look nice, you can wrap items with hanging indents:</p><ul${_scopeId}><li${_scopeId}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</li><li${_scopeId}>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul><p${_scopeId}>But if you want to be lazy, you don’t have to:</p><ul${_scopeId}><li${_scopeId}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</li><li${_scopeId}>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul><p${_scopeId}>List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:</p><ol${_scopeId}><li${_scopeId}><p${_scopeId}>This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.</p><p${_scopeId}>Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit.</p></li><li${_scopeId}><p${_scopeId}>Suspendisse id sem consectetuer libero luctus adipiscing.</p></li></ol><p${_scopeId}>It looks nice if you indent every line of the subsequent paragraphs, but here again, Markdown will allow you to be lazy:</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}>This is a list item with two paragraphs.</p><pre${_scopeId}><code${_scopeId}>This is the second paragraph in the list item. You&#39;re
</code></pre><p${_scopeId}>only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li><li${_scopeId}><p${_scopeId}>Another item in the same list.</p></li></ul><p${_scopeId}>To put a blockquote within a list item, the blockquote’s <code${_scopeId}>&gt;</code> delimiters need to be indented:</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}>A list item with a blockquote:</p><blockquote${_scopeId}><p${_scopeId}>This is a blockquote inside a list item.</p></blockquote></li></ul><p${_scopeId}>To put a code block within a list item, the code block needs to be indented <em${_scopeId}>twice</em> – 8 spaces or two tabs:</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}>A list item with a code block:</p><pre${_scopeId}><code${_scopeId}>&lt;code goes here&gt;
</code></pre></li></ul><h3 id="code-blocks" tabindex="-1"${_scopeId}>Code Blocks</h3><p${_scopeId}>Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both <code${_scopeId}>&lt;pre&gt;</code> and <code${_scopeId}>&lt;code&gt;</code> tags.</p><p${_scopeId}>To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab.</p><p${_scopeId}>This is a normal paragraph:</p><pre${_scopeId}><code${_scopeId}>This is a code block.
</code></pre><p${_scopeId}>Here is an example of AppleScript:</p><pre${_scopeId}><code${_scopeId}>tell application &quot;Foo&quot;
    beep
end tell
</code></pre><p${_scopeId}>A code block continues until it reaches a line that is not indented (or the end of the article).</p><p${_scopeId}>Within a code block, ampersands (<code${_scopeId}>&amp;</code>) and angle brackets (<code${_scopeId}>&lt;</code> and <code${_scopeId}>&gt;</code>) are automatically converted into HTML entities. This makes it very easy to include example HTML source code using Markdown – just paste it and indent it, and Markdown will handle the hassle of encoding the ampersands and angle brackets. For example, this:</p><pre${_scopeId}><code${_scopeId}>&lt;div class=&quot;footer&quot;&gt;
    &amp;copy; 2004 Foo Corporation
&lt;/div&gt;
</code></pre><p${_scopeId}>Regular Markdown syntax is not processed within code blocks. E.g., asterisks are just literal asterisks within a code block. This means it’s also easy to use Markdown to write about Markdown’s own syntax.</p><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
						"background-color": "#fff",
						"--shiki-dark-bg": "#24292e",
						"color": "#24292e",
						"--shiki-dark": "#e1e4e8"
					})}" tabindex="0"${_scopeId}><code class="language-text"${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>tell application &quot;Foo&quot;</span></span>
<span class="line"${_scopeId}><span${_scopeId}>    beep</span></span>
<span class="line"${_scopeId}><span${_scopeId}>end tell</span></span></code></pre><h2 id="span-elements" tabindex="-1"${_scopeId}>Span Elements</h2><h3 id="links" tabindex="-1"${_scopeId}>Links</h3><p${_scopeId}>Markdown supports two style of links: <em${_scopeId}>inline</em> and <em${_scopeId}>reference</em>.</p><p${_scopeId}>In both styles, the link text is delimited by [square brackets].</p><p${_scopeId}>To create an inline link, use a set of regular parentheses immediately after the link text’s closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an <em${_scopeId}>optional</em> title for the link, surrounded in quotes. For example:</p><p${_scopeId}>This is <a href="http://example.com/"${_scopeId}>an example</a> inline link.</p><p${_scopeId}><a href="http://example.net/"${_scopeId}>This link</a> has no title attribute.</p><h3 id="emphasis" tabindex="-1"${_scopeId}>Emphasis</h3><p${_scopeId}>Markdown treats asterisks (<code${_scopeId}>*</code>) and underscores (<code${_scopeId}>_</code>) as indicators of emphasis. Text wrapped with one <code${_scopeId}>*</code> or <code${_scopeId}>_</code> will be wrapped with an HTML <code${_scopeId}>&lt;em&gt;</code> tag; double <code${_scopeId}>*</code>&#39;s or <code${_scopeId}>_</code>&#39;s will be wrapped with an HTML <code${_scopeId}>&lt;strong&gt;</code> tag. E.g., this input:</p><p${_scopeId}><em${_scopeId}>single asterisks</em></p><p${_scopeId}><em${_scopeId}>single underscores</em></p><p${_scopeId}><strong${_scopeId}>double asterisks</strong></p><p${_scopeId}><strong${_scopeId}>double underscores</strong></p><h3 id="code" tabindex="-1"${_scopeId}>Code</h3><p${_scopeId}>To indicate a span of code, wrap it with backtick quotes (<code${_scopeId}>\`</code>). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:</p><p${_scopeId}>Use the <code${_scopeId}>printf()</code> function.</p><p${_scopeId}><img src="https://plus.unsplash.com/premium_photo-1769376812336-847642b315a2?q=80&amp;w=1287&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bagel image"${_scopeId}></p></div>`);
					else return [createVNode("div", { class: "text-fg-muted leading-relaxed" }, [
						createVNode("h1", {
							id: "markdown%3A-syntax",
							tabindex: "-1"
						}, "Markdown: Syntax"),
						createVNode("ul", null, [
							createVNode("li", null, [createVNode("a", { href: "#overview" }, "Overview"), createVNode("ul", null, [createVNode("li", null, [createVNode("a", { href: "#philosophy" }, "Philosophy")])])]),
							createVNode("li", null, [createVNode("a", { href: "#block-elements" }, "Block Elements"), createVNode("ul", null, [
								createVNode("li", null, [createVNode("a", { href: "#paragraphs-and-line-breaks" }, "Paragraphs and Line Breaks")]),
								createVNode("li", null, [createVNode("a", { href: "#headers" }, "Headers")]),
								createVNode("li", null, [createVNode("a", { href: "#blockquotes" }, "Blockquotes")]),
								createVNode("li", null, [createVNode("a", { href: "#lists" }, "Lists")]),
								createVNode("li", null, [createVNode("a", { href: "#code-blocks" }, "Code Blocks")])
							])]),
							createVNode("li", null, [createVNode("a", { href: "#span-elements" }, "Span Elements"), createVNode("ul", null, [
								createVNode("li", null, [createVNode("a", { href: "#links" }, "Links")]),
								createVNode("li", null, [createVNode("a", { href: "#emphasis" }, "Emphasis")]),
								createVNode("li", null, [createVNode("a", { href: "#code" }, "Code")])
							])])
						]),
						createVNode("p", null, [
							createVNode("strong", null, "Note:"),
							createTextVNode(" This document is itself written using Markdown; you can "),
							createVNode("a", { href: "/projects/markdown/syntax.text" }, "see the source for it by adding ‘.text’ to the URL"),
							createTextVNode(".")
						]),
						createVNode("hr"),
						createVNode("h2", {
							id: "overview",
							tabindex: "-1"
						}, "Overview"),
						createVNode("h3", {
							id: "philosophy",
							tabindex: "-1"
						}, "Philosophy"),
						createVNode("p", null, "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."),
						createVNode("p", null, [
							createTextVNode("Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters – including "),
							createVNode("a", { href: "http://docutils.sourceforge.net/mirror/setext.html" }, "Setext"),
							createTextVNode(", "),
							createVNode("a", { href: "http://www.aaronsw.com/2002/atx/" }, "atx"),
							createTextVNode(", "),
							createVNode("a", { href: "http://textism.com/tools/textile/" }, "Textile"),
							createTextVNode(", "),
							createVNode("a", { href: "http://docutils.sourceforge.net/rst.html" }, "reStructuredText"),
							createTextVNode(", "),
							createVNode("a", { href: "http://www.triptico.com/software/grutatxt.html" }, "Grutatext"),
							createTextVNode(", and "),
							createVNode("a", { href: "http://ettext.taint.org/doc/" }, "EtText"),
							createTextVNode(" – the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.")
						]),
						createVNode("h2", {
							id: "block-elements",
							tabindex: "-1"
						}, "Block Elements"),
						createVNode("h3", {
							id: "paragraphs-and-line-breaks",
							tabindex: "-1"
						}, "Paragraphs and Line Breaks"),
						createVNode("p", null, "A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line – a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs."),
						createVNode("p", null, [
							createTextVNode("The implication of the “one or more consecutive lines of text” rule is that Markdown supports “hard-wrapped” text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type’s “Convert Line Breaks” option) which translate every line break character in a paragraph into a "),
							createVNode("code", null, "<br />"),
							createTextVNode(" tag.")
						]),
						createVNode("p", null, [
							createTextVNode("When you "),
							createVNode("em", null, "do"),
							createTextVNode(" want to insert a "),
							createVNode("code", null, "<br />"),
							createTextVNode(" break tag using Markdown, you end a line with two or more spaces, then type return.")
						]),
						createVNode("h3", {
							id: "headers",
							tabindex: "-1"
						}, "Headers"),
						createVNode("p", null, "Markdown supports two styles of headers, [Setext] [1] and [atx] [2]."),
						createVNode("p", null, "Optionally, you may “close” atx-style headers. This is purely cosmetic – you can use this if you think it looks better. The closing hashes don’t even need to match the number of hashes used to open the header. (The number of opening hashes determines the header level.)"),
						createVNode("h3", {
							id: "blockquotes",
							tabindex: "-1"
						}, "Blockquotes"),
						createVNode("p", null, [
							createTextVNode("Markdown uses email-style "),
							createVNode("code", null, ">"),
							createTextVNode(" characters for blockquoting. If you’re familiar with quoting passages of text in an email message, then you know how to create a blockquote in Markdown. It looks best if you hard wrap the text and put a "),
							createVNode("code", null, ">"),
							createTextVNode(" before every line:")
						]),
						createVNode("blockquote", null, [createVNode("p", null, "This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus."), createVNode("p", null, "Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.")]),
						createVNode("p", null, [
							createTextVNode("Markdown allows you to be lazy and only put the "),
							createVNode("code", null, ">"),
							createTextVNode(" before the first line of a hard-wrapped paragraph:")
						]),
						createVNode("blockquote", null, [createVNode("p", null, "This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.")]),
						createVNode("blockquote", null, [createVNode("p", null, "Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.")]),
						createVNode("p", null, [
							createTextVNode("Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of "),
							createVNode("code", null, ">"),
							createTextVNode(":")
						]),
						createVNode("blockquote", null, [
							createVNode("p", null, "This is the first level of quoting."),
							createVNode("blockquote", null, [createVNode("p", null, "This is nested blockquote.")]),
							createVNode("p", null, "Back to the first level.")
						]),
						createVNode("p", null, "Blockquotes can contain other Markdown elements, including headers, lists, and code blocks:"),
						createVNode("blockquote", null, [
							createVNode("h2", {
								id: "this-is-a-header.",
								tabindex: "-1"
							}, "This is a header."),
							createVNode("ol", null, [createVNode("li", null, "This is the first list item."), createVNode("li", null, "This is the second list item.")]),
							createVNode("p", null, "Here’s some example code:"),
							createVNode("pre", null, [createVNode("code", null, "return shell_exec(\"echo $input | $markdown_script\");\n")])
						]),
						createVNode("p", null, "Any decent text editor should make email-style quoting easy. For example, with BBEdit, you can make a selection and choose Increase Quote Level from the Text menu."),
						createVNode("h3", {
							id: "lists",
							tabindex: "-1"
						}, "Lists"),
						createVNode("p", null, "Markdown supports ordered (numbered) and unordered (bulleted) lists."),
						createVNode("p", null, "Unordered lists use asterisks, pluses, and hyphens – interchangably – as list markers:"),
						createVNode("ul", null, [
							createVNode("li", null, "Red"),
							createVNode("li", null, "Green"),
							createVNode("li", null, "Blue")
						]),
						createVNode("p", null, "is equivalent to:"),
						createVNode("ul", null, [
							createVNode("li", null, "Red"),
							createVNode("li", null, "Green"),
							createVNode("li", null, "Blue")
						]),
						createVNode("p", null, "and:"),
						createVNode("ul", null, [
							createVNode("li", null, "Red"),
							createVNode("li", null, "Green"),
							createVNode("li", null, "Blue")
						]),
						createVNode("p", null, "Ordered lists use numbers followed by periods:"),
						createVNode("ol", null, [
							createVNode("li", null, "Bird"),
							createVNode("li", null, "McHale"),
							createVNode("li", null, "Parish")
						]),
						createVNode("p", null, "It’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Markdown produces. The HTML Markdown produces from the above list is:"),
						createVNode("p", null, "If you instead wrote the list in Markdown like this:"),
						createVNode("ol", null, [
							createVNode("li", null, "Bird"),
							createVNode("li", null, "McHale"),
							createVNode("li", null, "Parish")
						]),
						createVNode("p", null, "or even:"),
						createVNode("ol", { start: "3" }, [
							createVNode("li", null, "Bird"),
							createVNode("li", null, "McHale"),
							createVNode("li", null, "Parish")
						]),
						createVNode("p", null, "you’d get the exact same HTML output. The point is, if you want to, you can use ordinal numbers in your ordered Markdown lists, so that the numbers in your source match the numbers in your published HTML. But if you want to be lazy, you don’t have to."),
						createVNode("p", null, "To make lists look nice, you can wrap items with hanging indents:"),
						createVNode("ul", null, [createVNode("li", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus."), createVNode("li", null, "Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.")]),
						createVNode("p", null, "But if you want to be lazy, you don’t have to:"),
						createVNode("ul", null, [createVNode("li", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus."), createVNode("li", null, "Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.")]),
						createVNode("p", null, "List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:"),
						createVNode("ol", null, [createVNode("li", null, [createVNode("p", null, "This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus."), createVNode("p", null, "Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit.")]), createVNode("li", null, [createVNode("p", null, "Suspendisse id sem consectetuer libero luctus adipiscing.")])]),
						createVNode("p", null, "It looks nice if you indent every line of the subsequent paragraphs, but here again, Markdown will allow you to be lazy:"),
						createVNode("ul", null, [createVNode("li", null, [
							createVNode("p", null, "This is a list item with two paragraphs."),
							createVNode("pre", null, [createVNode("code", null, "This is the second paragraph in the list item. You're\n")]),
							createVNode("p", null, "only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
						]), createVNode("li", null, [createVNode("p", null, "Another item in the same list.")])]),
						createVNode("p", null, [
							createTextVNode("To put a blockquote within a list item, the blockquote’s "),
							createVNode("code", null, ">"),
							createTextVNode(" delimiters need to be indented:")
						]),
						createVNode("ul", null, [createVNode("li", null, [createVNode("p", null, "A list item with a blockquote:"), createVNode("blockquote", null, [createVNode("p", null, "This is a blockquote inside a list item.")])])]),
						createVNode("p", null, [
							createTextVNode("To put a code block within a list item, the code block needs to be indented "),
							createVNode("em", null, "twice"),
							createTextVNode(" – 8 spaces or two tabs:")
						]),
						createVNode("ul", null, [createVNode("li", null, [createVNode("p", null, "A list item with a code block:"), createVNode("pre", null, [createVNode("code", null, "<code goes here>\n")])])]),
						createVNode("h3", {
							id: "code-blocks",
							tabindex: "-1"
						}, "Code Blocks"),
						createVNode("p", null, [
							createTextVNode("Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both "),
							createVNode("code", null, "<pre>"),
							createTextVNode(" and "),
							createVNode("code", null, "<code>"),
							createTextVNode(" tags.")
						]),
						createVNode("p", null, "To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab."),
						createVNode("p", null, "This is a normal paragraph:"),
						createVNode("pre", null, [createVNode("code", null, "This is a code block.\n")]),
						createVNode("p", null, "Here is an example of AppleScript:"),
						createVNode("pre", null, [createVNode("code", null, "tell application \"Foo\"\n    beep\nend tell\n")]),
						createVNode("p", null, "A code block continues until it reaches a line that is not indented (or the end of the article)."),
						createVNode("p", null, [
							createTextVNode("Within a code block, ampersands ("),
							createVNode("code", null, "&"),
							createTextVNode(") and angle brackets ("),
							createVNode("code", null, "<"),
							createTextVNode(" and "),
							createVNode("code", null, ">"),
							createTextVNode(") are automatically converted into HTML entities. This makes it very easy to include example HTML source code using Markdown – just paste it and indent it, and Markdown will handle the hassle of encoding the ampersands and angle brackets. For example, this:")
						]),
						createVNode("pre", null, [createVNode("code", null, "<div class=\"footer\">\n    &copy; 2004 Foo Corporation\n</div>\n")]),
						createVNode("p", null, "Regular Markdown syntax is not processed within code blocks. E.g., asterisks are just literal asterisks within a code block. This means it’s also easy to use Markdown to write about Markdown’s own syntax."),
						createVNode("pre", {
							class: "shiki shiki-themes github-light github-dark",
							style: {
								"background-color": "#fff",
								"--shiki-dark-bg": "#24292e",
								"color": "#24292e",
								"--shiki-dark": "#e1e4e8"
							},
							tabindex: "0"
						}, [createVNode("code", { class: "language-text" }, [
							createVNode("span", { class: "line" }, [createVNode("span", null, "tell application \"Foo\"")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "    beep")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "end tell")])
						])]),
						createVNode("h2", {
							id: "span-elements",
							tabindex: "-1"
						}, "Span Elements"),
						createVNode("h3", {
							id: "links",
							tabindex: "-1"
						}, "Links"),
						createVNode("p", null, [
							createTextVNode("Markdown supports two style of links: "),
							createVNode("em", null, "inline"),
							createTextVNode(" and "),
							createVNode("em", null, "reference"),
							createTextVNode(".")
						]),
						createVNode("p", null, "In both styles, the link text is delimited by [square brackets]."),
						createVNode("p", null, [
							createTextVNode("To create an inline link, use a set of regular parentheses immediately after the link text’s closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an "),
							createVNode("em", null, "optional"),
							createTextVNode(" title for the link, surrounded in quotes. For example:")
						]),
						createVNode("p", null, [
							createTextVNode("This is "),
							createVNode("a", { href: "http://example.com/" }, "an example"),
							createTextVNode(" inline link.")
						]),
						createVNode("p", null, [createVNode("a", { href: "http://example.net/" }, "This link"), createTextVNode(" has no title attribute.")]),
						createVNode("h3", {
							id: "emphasis",
							tabindex: "-1"
						}, "Emphasis"),
						createVNode("p", null, [
							createTextVNode("Markdown treats asterisks ("),
							createVNode("code", null, "*"),
							createTextVNode(") and underscores ("),
							createVNode("code", null, "_"),
							createTextVNode(") as indicators of emphasis. Text wrapped with one "),
							createVNode("code", null, "*"),
							createTextVNode(" or "),
							createVNode("code", null, "_"),
							createTextVNode(" will be wrapped with an HTML "),
							createVNode("code", null, "<em>"),
							createTextVNode(" tag; double "),
							createVNode("code", null, "*"),
							createTextVNode("'s or "),
							createVNode("code", null, "_"),
							createTextVNode("'s will be wrapped with an HTML "),
							createVNode("code", null, "<strong>"),
							createTextVNode(" tag. E.g., this input:")
						]),
						createVNode("p", null, [createVNode("em", null, "single asterisks")]),
						createVNode("p", null, [createVNode("em", null, "single underscores")]),
						createVNode("p", null, [createVNode("strong", null, "double asterisks")]),
						createVNode("p", null, [createVNode("strong", null, "double underscores")]),
						createVNode("h3", {
							id: "code",
							tabindex: "-1"
						}, "Code"),
						createVNode("p", null, [
							createTextVNode("To indicate a span of code, wrap it with backtick quotes ("),
							createVNode("code", null, "`"),
							createTextVNode("). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:")
						]),
						createVNode("p", null, [
							createTextVNode("Use the "),
							createVNode("code", null, "printf()"),
							createTextVNode(" function.")
						]),
						createVNode("p", null, [createVNode("img", {
							src: "https://plus.unsplash.com/premium_photo-1769376812336-847642b315a2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
							alt: "bagel image"
						})])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/first-post.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { authors, date, _sfc_main as default, description, draft, excerpt, slug, tags, title };
//# sourceMappingURL=first-post-BKEwQblH.mjs.map

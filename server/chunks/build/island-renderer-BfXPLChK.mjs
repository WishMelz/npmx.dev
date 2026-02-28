import { Y as injectHead, S as createError$1 } from './server.mjs';
import { defineComponent, onErrorCaptured, createVNode, defineAsyncComponent } from 'vue';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'perfect-debounce';

const islandComponents = {
	"OgImageDefault": defineAsyncComponent(() => import(
		'./Default-BrheZDIz.mjs'
		/* webpackChunkName: "components/og-image-default" */
).then((c) => c.default || c)),
	"OgImagePackage": defineAsyncComponent(() => import(
		'./Package-sF4qWhjf.mjs'
		/* webpackChunkName: "components/og-image-package" */
).then((c) => c.default || c))
};
var island_renderer_default = defineComponent({
	name: "IslandRenderer",
	props: { context: {
		type: Object,
		required: true
	} },
	setup(props) {
		injectHead().entries.clear();
		const component = islandComponents[props.context.name];
		if (!component) throw createError$1({
			status: 404,
			statusText: `Island component not found: ${props.context.name}`
		});
		onErrorCaptured((e) => {
			console.log(e);
		});
		return () => createVNode(component || "span", {
			...props.context.props,
			"data-island-uid": ""
		});
	}
});

export { island_renderer_default as default };
//# sourceMappingURL=island-renderer-BfXPLChK.mjs.map

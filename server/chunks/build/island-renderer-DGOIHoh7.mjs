import { V as injectHead, K as createError$1 } from './server.mjs';
import { defineComponent, onErrorCaptured, createVNode, defineAsyncComponent } from 'vue';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import '@atproto/oauth-client-node';
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
import 'vue-router';
import '@atproto/lex';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'perfect-debounce';

const islandComponents = {
	"OgImageDefault": defineAsyncComponent(() => import(
		'./Default-Br7GR4Gc.mjs'
		/* webpackChunkName: "components/og-image-default" */
).then((c) => c.default || c)),
	"OgImagePackage": defineAsyncComponent(() => import(
		'./Package-B5NBQcuL.mjs'
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
//# sourceMappingURL=island-renderer-DGOIHoh7.mjs.map

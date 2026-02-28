import { j as defineEventHandler, at as getRequestURL, D as setHeader } from '../nitro/nitro.mjs';
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
import '@atproto/lex';
import '@atproto/oauth-client-node';
import '@upstash/redis';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const opensearch_xml_get = defineEventHandler((event) => {
  const url = getRequestURL(event);
  const origin = url.origin;
  setHeader(event, "Content-Type", "application/opensearchdescription+xml");
  return `
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>npm</ShortName>
  <Description>Search npm packages on npmx.dev</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/svg+xml">${origin}/favicon.svg</Image>
  <Url type="text/html" template="${origin}/search?q={searchTerms}"/>
  <Url type="application/x-suggestions+json" template="${origin}/api/opensearch/suggestions?q={searchTerms}"/>
  <Url type="application/opensearchdescription+xml" rel="self" template="${origin}/opensearch.xml"/>
</OpenSearchDescription>
  `.trim();
});

export { opensearch_xml_get as default };
//# sourceMappingURL=opensearch.xml.get.mjs.map

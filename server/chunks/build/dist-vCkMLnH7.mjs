import { M as useRoute, N as useRouter, O as tryOnScopeDispose } from './server-placeholder-C9fYItBT.mjs';
import { customRef, toValue, nextTick, watch } from 'vue';

//#region node_modules/.pnpm/@vueuse+router@14.2.1_vue-router@4.6.4_vue@3.5.30_typescript@6.0.2___vue@3.5.30_typescript@6.0.2_/node_modules/@vueuse/router/dist/index.js
var _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
	const { mode = "replace", route = useRoute(), router = useRouter(), transform } = options;
	let transformGet = (value) => value;
	let transformSet = (value) => value;
	if (typeof transform === "function") transformGet = transform;
	else if (transform) {
		if (transform.get) transformGet = transform.get;
		if (transform.set) transformSet = transform.set;
	}
	if (!_queue.has(router)) _queue.set(router, /* @__PURE__ */ new Map());
	const _queriesQueue = _queue.get(router);
	let query = route.query[name];
	tryOnScopeDispose(() => {
		query = void 0;
	});
	let _trigger;
	const proxy = customRef((track, trigger) => {
		_trigger = trigger;
		return {
			get() {
				track();
				return transformGet(query !== void 0 ? query : toValue(defaultValue));
			},
			set(v) {
				v = transformSet(v);
				if (query === v) return;
				query = v === toValue(defaultValue) ? void 0 : v;
				_queriesQueue.set(name, v === toValue(defaultValue) ? void 0 : v);
				trigger();
				nextTick(() => {
					if (_queriesQueue.size === 0) return;
					const newQueries = Object.fromEntries(_queriesQueue.entries());
					_queriesQueue.clear();
					const { params, query: query$1, hash } = route;
					router[toValue(mode)]({
						params,
						query: {
							...query$1,
							...newQueries
						},
						hash
					});
				});
			}
		};
	});
	watch(() => route.query[name], (v) => {
		if (query === transformGet(v)) return;
		query = v;
		_trigger();
	}, { flush: "sync" });
	return proxy;
}

export { useRouteQuery as u };
//# sourceMappingURL=dist-vCkMLnH7.mjs.map

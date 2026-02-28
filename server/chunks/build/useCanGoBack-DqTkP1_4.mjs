import { a as useRouter } from './server.mjs';
import { shallowRef } from 'vue';

function useCanGoBack() {
	const canGoBack = shallowRef(false);
	useRouter();
	return canGoBack;
}

export { useCanGoBack as u };
//# sourceMappingURL=useCanGoBack-DqTkP1_4.mjs.map

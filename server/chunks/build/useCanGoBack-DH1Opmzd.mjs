import { lt as useRouter$1 } from './server.mjs';
import { shallowRef } from 'vue';

function useCanGoBack() {
	const canGoBack = shallowRef(false);
	useRouter$1();
	return canGoBack;
}

export { useCanGoBack as u };
//# sourceMappingURL=useCanGoBack-DH1Opmzd.mjs.map

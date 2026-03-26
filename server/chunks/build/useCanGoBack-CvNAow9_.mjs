import { i as useRouter } from './server-placeholder-C9fYItBT.mjs';
import { shallowRef } from 'vue';

//#region app/composables/useCanGoBack.ts
function useCanGoBack() {
	const canGoBack = shallowRef(false);
	useRouter();
	return canGoBack;
}

export { useCanGoBack as u };
//# sourceMappingURL=useCanGoBack-CvNAow9_.mjs.map

import { a4 as createSharedComposable, F as navigateTo } from './server-placeholder-C9fYItBT.mjs';
import { a as useFetch } from './fetch-CVxFI0ck.mjs';
import { ag as FetchError, br as ERROR_NEED_REAUTH } from '../nitro/nitro.mjs';

//#region app/composables/useModal.ts
function useModal(modalId) {
	const getModal = () => (void 0).querySelector(`#${modalId}`);
	function open() {
		const modal = getModal();
		if (modal) setTimeout(() => {
			modal.showModal();
		});
	}
	function close() {
		const modal = getModal();
		if (modal) modal.close();
	}
	return {
		open,
		close
	};
}

//#region app/composables/atproto/useAtproto.ts
var useAtproto = createSharedComposable(function useAtproto() {
	const { data: user, pending, clear } = useFetch("/api/auth/session", {
		server: false,
		immediate: true
	}, "$aDcMA1jK0A");
	async function logout() {
		await $fetch("/api/auth/session", { method: "delete" });
		clear();
	}
	return {
		user,
		pending,
		logout
	};
});
//#endregion
//#region app/utils/atproto/helpers.ts
/**
* Redirect user to ATProto authentication
*/
async function authRedirect(identifier, options = {}) {
	let query = {
		handle: identifier,
		locale: options.locale || "en"
	};
	if (options.create) query = {
		...query,
		create: "true"
	};
	if (options.redirectTo) query = {
		...query,
		returnTo: options.redirectTo
	};
	await navigateTo({
		path: "/api/auth/atproto",
		query
	}, { external: true });
}
async function handleAuthError(fetchError, userHandle) {
	if (fetchError?.data?.message === ERROR_NEED_REAUTH && userHandle) await authRedirect(userHandle);
	throw fetchError;
}
//#endregion
//#region app/utils/atproto/likes.ts
/**
* Like a package via the API
*/
async function likePackage(packageName, userHandle) {
	try {
		return {
			success: true,
			data: await $fetch("/api/social/like", {
				method: "POST",
				body: { packageName }
			})
		};
	} catch (e) {
		if (e instanceof FetchError) await handleAuthError(e, userHandle);
		return {
			success: false,
			error: e
		};
	}
}
/**
* Unlike a package via the API
*/
async function unlikePackage(packageName, userHandle) {
	try {
		return {
			success: true,
			data: await $fetch("/api/social/like", {
				method: "DELETE",
				body: { packageName }
			})
		};
	} catch (e) {
		if (e instanceof FetchError) await handleAuthError(e, userHandle);
		return {
			success: false,
			error: e
		};
	}
}
/**
* Toggle like status for a package
*/
async function togglePackageLike(packageName, currentlyLiked, userHandle) {
	return currentlyLiked ? unlikePackage(packageName, userHandle) : likePackage(packageName, userHandle);
}

export { useModal as a, togglePackageLike as t, useAtproto as u };
//# sourceMappingURL=likes-xTtdlbfa.mjs.map

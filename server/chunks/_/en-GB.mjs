var settings = {
	tagline: "customise your npmx experience",
	clear_accent: "Clear accent colour"
};
var search = {
	suggestion: {
		view_org_packages: "View packages by this organisation"
	}
};
var connector = {
	modal: {
		connected_hint: "You can now manage packages and organisations from the web UI."
	}
};
var org = {
	page: {
		no_packages_hint: "This organisation may not exist or has no public packages.",
		failed_to_load: "Failed to load organisation packages",
		not_found_message: "The organisation \"{'@'}{name}\" does not exist on npm"
	}
};
var user = {
	orgs_page: {
		connect_required: "Connect the local CLI to view your organisations.",
		own_orgs_only: "You can only view your own organisations.",
		view_your_orgs: "View your organisations",
		loading: "Loading organisations...",
		empty: "No organisations found."
	}
};
var claim = {
	modal: {
		scope_warning_text: "Unscoped package names are a shared resource. Only claim a name if you intend to publish and maintain a package. For personal or organisational projects, use a scoped name like {'@'}{username}/{name}."
	}
};
var about = {
	what_we_are: {
		admin_description: "We also aim to provide a better {adminUi} for managing your packages, teams, and organisations — all from the browser, powered by your local npm CLI."
	}
};
var header = {
	orgs_dropdown: {
		error: "Failed to load organisations",
		empty: "No organisations found"
	}
};
const enGB = {
	settings: settings,
	search: search,
	connector: connector,
	org: org,
	user: user,
	claim: claim,
	about: about,
	header: header
};

export { about, claim, connector, enGB as default, header, org, search, settings, user };
//# sourceMappingURL=en-GB.mjs.map

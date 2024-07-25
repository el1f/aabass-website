module.exports = {
	fallbackLng: {
		default: ["en"],
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	localePath:
		typeof window === "undefined"
			? require("path").resolve("/locales")
			: "/public/locales",
};

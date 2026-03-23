const path = require("path");

module.exports = {
	fallbackLng: {
		default: ["en"],
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	localePath: path.resolve("./public/locales"),
};

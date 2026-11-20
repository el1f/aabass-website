// typescript-eslint still imports the TypeScript JavaScript API, which TypeScript 7
// does not ship. Redirect those imports to the TypeScript 6 API during lint only.
const Module = require("module");

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveTypeScript6(request, parent, isMain, options) {
	if (request === "typescript") {
		request = "@typescript/typescript6";
	} else if (request.startsWith("typescript/")) {
		request = `@typescript/typescript6/${request.slice("typescript/".length)}`;
	}

	return originalResolveFilename.call(this, request, parent, isMain, options);
};

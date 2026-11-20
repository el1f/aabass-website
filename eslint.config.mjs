import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import unusedImports from "eslint-plugin-unused-imports";

// eslint-plugin-typescript-sort-keys still calls the ESLint 9 context method.
function withLegacySourceCode(plugin) {
	return {
		...plugin,
		rules: Object.fromEntries(
			Object.entries(plugin.rules).map(([name, rule]) => [
				name,
				{
					...rule,
					create(context) {
						const legacyContext = new Proxy(context, {
							get(target, prop, receiver) {
								if (prop === "getSourceCode") {
									return () => target.sourceCode;
								}
								const value = Reflect.get(target, prop, receiver);
								return typeof value === "function" ? value.bind(target) : value;
							},
						});
						return rule.create(legacyContext);
					},
				},
			]),
		),
	};
}

export default defineConfig([
	...nextCoreWebVitals,
	{
		plugins: {
			import: importPlugin,
			react,
			"simple-import-sort": simpleImportSort,
			"sort-destructure-keys": sortDestructureKeys,
			"sort-keys-fix": sortKeysFix,
			"typescript-sort-keys": withLegacySourceCode(typescriptSortKeys),
			"unused-imports": unusedImports,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"no-console": "error",
			"react/jsx-sort-props": "error",
			"simple-import-sort/imports": [
				"error",
				{
					groups: [["^@?\\w"], ["^[^.]"], ["^\\."], ["^\\u0000"]],
				},
			],
			"sort-destructure-keys/sort-destructure-keys": [
				2,
				{ caseSensitive: false },
			],
			"sort-keys-fix/sort-keys-fix": "warn",
			"typescript-sort-keys/interface": "error",
			"typescript-sort-keys/string-enum": "error",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					args: "after-used",
					argsIgnorePattern: "^_",
					vars: "all",
					varsIgnorePattern: "^_",
				},
			],
		},
	},
	globalIgnores(["legacy/**", "dist/**"]),
]);

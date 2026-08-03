import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    ignores: [".next/**", "dist/**", "legacy/**", "next-env.d.ts"],
}, {
    extends: [...nextCoreWebVitals],

    languageOptions: {
        parser: tsParser,
    },

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
        "sort-destructure-keys": sortDestructureKeys,
        "sort-keys-fix": sortKeysFix,
        "typescript-sort-keys": typescriptSortKeys,
        "unused-imports": unusedImports,
    },

    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "import/first": "error",

        "import/newline-after-import": "error",

        "import/no-duplicates": "error",
        "no-console": "error",
        "react/jsx-sort-props": "error",
        "simple-import-sort/imports": ["error", {
            groups: [["^@?\\w"], ["^[^.]"], ["^\\."], ["^\\u0000"]],
        }],

        "sort-destructure-keys/sort-destructure-keys": [2, {
            caseSensitive: false,
        }],

        "react-hooks/refs": "warn",
        "react-hooks/set-state-in-effect": "warn",
        "sort-keys-fix/sort-keys-fix": "warn",

        "typescript-sort-keys/interface": "error",

        "typescript-sort-keys/string-enum": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_",
        }],
    },
}]);
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	documents: [
		"pages/**/*.tsx",
		"components/**/*.tsx",
		"graphql/**/*.ts",
		"lib/**/*.ts",
		"lib/**/*.tsx",
	],
	// for better experience with the watcher
	generates: {
		"./graphql/__generated__/": {
			plugins: [],
			preset: "client",
		},
	},
	ignoreNoDocuments: true,
	schema: "./graphql/supergraph.graphql",
};

export default config;

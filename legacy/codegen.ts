import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	documents: ["**/*.tsx", "**/*.ts"],
	// for better experience with the watcher
	generates: {
		"./graphql/__generated__/": {
			plugins: [],
			preset: "client",
		},
	},
	ignoreNoDocuments: true,
	schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
};

export default config;

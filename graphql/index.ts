export const clientSetup = {
	url: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "",
};

export * from "./ideas";
export * from "./polls";
export * from "./fragments";
export * from "./__generated__";
export { graphql as gql } from "./__generated__";

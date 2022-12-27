export const clientSetup = {
	url: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "",
};

export * from "./__generated__";
export { graphql as gql } from "./__generated__";

export * from "./fragments";

export * from "./home";
export * from "./ideas";
export * from "./posters";
export * from "./coffee";

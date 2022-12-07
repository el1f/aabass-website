import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

type Context = {
	req: NextApiRequest;
	res: NextApiResponse;
};

const server = new ApolloServer<Context>({
	resolvers,
	typeDefs,
});

export default startServerAndCreateNextHandler(server, {
	context: async (req, res) => ({ req, res }),
});

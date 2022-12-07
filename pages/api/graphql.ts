import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import { resolvers } from "../../graphql/localServices/resolvers";
import { typeDefs } from "../../graphql/localServices/schema";

const cors = Cors({
	methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
	req: NextApiRequest,
	res: NextApiResponse,
	fn: Function,
) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

type Context = {
	req: NextApiRequest;
	res: NextApiResponse;
};

const server = new ApolloServer<Context>({
	resolvers,
	typeDefs,
});

const apolloHandler = startServerAndCreateNextHandler(server, {
	context: async (req, res) => ({ req, res }),
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// Run cors middleware (to allow Apollo Studio access)
	await runMiddleware(req, res, cors);
	// run apollo server
	return apolloHandler(req, res);
}

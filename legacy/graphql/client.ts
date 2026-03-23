import { initUrqlClient } from "next-urql";
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from "urql";

import { clientSetup } from ".";

export const initGraphQLClient = () => {
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			...clientSetup,
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		false,
	);

	return [client, ssrCache] as const;
};

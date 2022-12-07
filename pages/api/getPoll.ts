import { NextApiRequest, NextApiResponse } from "next";

import { Poll } from "../../types/firebase/polls";
import { getPoll } from "./functions/poll/get";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Poll | Error>,
) {
	try {
		const poll = await getPoll(req.query.id as string);
		res.status(200).json(poll);
		res.end();
	} catch (e) {
		if (e instanceof Error) {
			if (e.message === "No poll found") {
				res.status(404).json(e);
			} else {
				res.status(500).json(e);
			}
		}
		res.end();
	}
}

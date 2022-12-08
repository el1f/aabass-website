import { NextApiRequest, NextApiResponse } from "next";

import { getAllPolls } from "../../../lib/firebase";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const polls = await getAllPolls();

		res.status(200).json(polls);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({
				error: {
					code: "UNHANDLED_ERROR",
					message: error.message,
				},
			});
		}

		res.status(500).json({
			error: {
				code: "UNKNOWN_ERROR",
				message: error,
			},
		});
	}
}

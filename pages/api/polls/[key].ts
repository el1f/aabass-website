import { NextApiRequest, NextApiResponse } from "next";

import { getPoll, voteOnPoll } from "../../../lib/firebase";

interface NextPollApiRequest extends NextApiRequest {
	body: {
		value: string;
	};
}

export default async function handler(
	req: NextPollApiRequest,
	res: NextApiResponse,
) {
	const { key } = req.query;

	if (!key || typeof key !== "string")
		return res.status(400).json({
			error: {
				code: "MISSING_KEY",
				message: "The key is required to get a poll",
			},
		});

	try {
		if (req.method === "GET") {
			const poll = await getPoll(key);

			return res.status(200).json(poll);
		}

		if (req.method === "POST") {
			if (!req.body.value)
				return res.status(400).json({
					error: {
						code: "MISSING_VALUE",
						message: "The value is required to vote on a poll",
					},
				});

			await voteOnPoll(key, {
				value: req.body.value,
				votedAt: new Date(),
			});
		}
	} catch (error) {
		if (error instanceof Error) {
			if (error.message === "No poll found")
				return res.status(404).json({
					error: {
						code: "RESOURCE_NOT_FOUND",
						message: "No poll found with the given key",
					},
				});

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

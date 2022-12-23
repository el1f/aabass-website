import { NextApiRequest, NextApiResponse } from "next";

import { getThoughts } from "../../../lib/thoughts";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
	const thoughts = getThoughts();

	res.status(200).json(thoughts);
}

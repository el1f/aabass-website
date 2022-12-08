import { Poll } from "../../../types";
import admin from "..";

export async function createPoll(poll: Poll) {
	const db = admin.firestore();
	try {
		if (!poll.key) throw Error("Poll Key is required");
		if (!poll.question) throw Error("Poll question is required");
		if (poll.options && poll.options.length < 2)
			throw Error("Polls require at least 2 options");

		await db.collection("polls").add({
			...poll,
			options: {
				...poll.options,
				totalVotes: 0,
			},
			totalVotes: 0,
		} as Poll);

		return poll.key;
	} catch (error) {
		throw error;
	}
}

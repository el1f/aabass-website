import { Poll, PollVote } from "../../../graphql/__generated__/graphql";
import admin from "..";

export async function updatePoll(id: string, poll: Partial<Poll>) {
	const db = admin.firestore();
	try {
		// TODO: share this across all queries
		const pollDocuments = await db
			.collection("polls")
			.where("id", "==", id)
			.get();

		if (pollDocuments.empty) throw Error("Poll not found");

		const pollDocument = pollDocuments.docs[0];

		await pollDocument.ref.update(poll);

		return id;
	} catch (error) {
		throw error;
	}
}

export async function voteOnPoll(key: string, vote: PollVote) {
	const db = admin.firestore();
	try {
		const pollDocuments = await db
			.collection("polls")
			.where("key", "==", key)
			.get();

		if (pollDocuments.empty) throw Error("Poll not found");

		const pollDocument = pollDocuments.docs[0];

		const pollData = (await pollDocument.data()) as Poll;
		const optionIndex = pollData.options.findIndex(
			(option) => option.value === vote.value,
		);

		await pollDocument.ref
			.collection("votes")
			.add({ ...vote, votedAt: new Date(vote.votedAt) });

		pollDocument.ref.update({
			options: [
				...pollData.options.slice(0, optionIndex),
				{
					...pollData.options[optionIndex],
					votes: pollData.options[optionIndex].votes + 1,
				},
				...pollData.options.slice(optionIndex + 1),
			],
			totalVotes: pollData.totalVotes + 1,
		});

		return key;
	} catch (error) {
		throw error;
	}
}

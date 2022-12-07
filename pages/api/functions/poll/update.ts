import admin from "../../../../lib/firebase";
import { Poll, PollVote } from "../../../../types/firebase/polls";

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

		pollDocument.ref
			.collection("votes")
			.add({ ...vote, votedAt: new Date(vote.votedAt) });

		return key;
	} catch (error) {
		throw error;
	}
}

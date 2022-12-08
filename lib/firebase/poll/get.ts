import { Poll } from "../../../types";
import admin from "..";

export async function getPoll(key: string) {
	const db = admin.firestore();

	const pollDocuments = await db
		.collection("polls")
		.where("key", "==", key)
		.get();
	if (pollDocuments.empty) throw Error("No poll found");
	const pollDocument = pollDocuments.docs[0];
	const pollData = await pollDocument.data();
	return pollData as Poll;
}

export async function getAllPolls() {
	const db = admin.firestore();

	const pollDocumentsRefs = await db.collection("polls").listDocuments();
	const pollDocuments = await Promise.all(
		pollDocumentsRefs.map((doc) => doc.get()),
	);
	const pollData = await pollDocuments.map((doc) => doc.data());
	// TODO: remove undefined values

	return pollData as Poll[];
}

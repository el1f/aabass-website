import { Poll, PollVote } from "../../../types/firebase/polls";
import { createPoll } from "../functions/poll/create";
import { getAllPolls, getPoll } from "../functions/poll/get";
import { voteOnPoll } from "../functions/poll/update";

export const resolvers = {
	// TODO: there is definitely a better way to type these.
	Mutation: {
		createPoll: (parent: any, { poll }: { poll: Poll }) => createPoll(poll),
		voteOnPoll: (parent: any, { key, vote }: { key: string; vote: PollVote }) =>
			voteOnPoll(key, vote),
	},
	Query: {
		allPolls: () => getAllPolls(),
		poll: (parent: any, { id }: { id: string }) => getPoll(id),
	},
};

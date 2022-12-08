import { createPoll } from "../../lib/firebase/poll/create";
import { getAllPolls, getPoll } from "../../lib/firebase/poll/get";
import { voteOnPoll } from "../../lib/firebase/poll/update";
import { Poll, PollVote } from "../__generated__/graphql";

export const resolvers = {
	// TODO: there is definitely a better way to type these.
	Mutation: {
		createPoll: (parent: any, { poll }: { poll: Poll }) => createPoll(poll),
		voteOnPoll: (parent: any, { key, vote }: { key: string; vote: PollVote }) =>
			voteOnPoll(key, vote),
	},
	Query: {
		allPolls: () => getAllPolls(),
		poll: (parent: any, { key }: { key: string }) => getPoll(key),
	},
};

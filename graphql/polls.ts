import { graphql } from "./__generated__";

export const getPoll = graphql(`
	query poll($key: String!) {
		poll(key: $key) {
			key
			question {
				en
			}
			options {
				value
				label {
					en
				}
			}
		}
	}
`);

export const voteOnPoll = graphql(`
	mutation voteOnPoll($key: String!, $vote: PollVoteInput!) {
		voteOnPoll(key: $key, vote: $vote)
	}
`);

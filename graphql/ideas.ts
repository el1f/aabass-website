import { graphql } from "./__generated__";

export const allIdeas = graphql(`
	query Ideas {
		backlog: ideas(where: { ideaStatus: PENDING, targetVersion: "TBD" }) {
			...IdeaCard
		}
		planned: ideas(where: { ideaStatus: PENDING, targetVersion_not: "TBD" }) {
			...IdeaCard
		}
		ongoing: ideas(where: { ideaStatus: IN_PROGRESS }) {
			...IdeaCard
		}
		testing: ideas(where: { ideaStatus: TESTING }) {
			...IdeaCard
		}
		done: ideas(where: { ideaStatus: DONE }) {
			...IdeaCard
		}
	}
`);

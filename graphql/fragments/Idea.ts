import { graphql } from "../__generated__";

export const IdeaCard = graphql(`
	fragment IdeaCard on Idea {
		id
		summary
		description
		dependencies {
			id
			summary
		}
		targetPages
		targetComponents
		targetVersion
		ideaStatus
	}
`);

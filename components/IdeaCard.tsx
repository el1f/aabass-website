import React from "react";

import {
	FragmentType,
	IdeaCard as IdeaCardFragment,
	useFragment,
} from "../graphql";
import { Anchor, CodeChip, Heading, Text } from ".";

export const IdeaCard: React.FC<{
	idea: FragmentType<typeof IdeaCardFragment>;
}> = ({ idea: ideaRef }) => {
	const idea = useFragment(IdeaCardFragment, ideaRef);

	return (
		<div
			className="max-w-xs p-3 border rounded-lg border-textDimmedDark"
			id={idea.id}
			key={idea.id}
		>
			<div className="flex flex-col items-start px-3 py-2 mb-3 -mx-3 -mt-3 border-b empty:hidden border-textDimmedDark before:text-xs">
				{idea.dependencies.map((dependency) => (
					<Anchor href={`#${dependency.id}`} key={dependency.id} size="sm">
						{dependency.summary}
					</Anchor>
				))}
			</div>
			<div className="flex items-center justify-between mb-2">
				<Heading level={5}>
					<strong>{idea.summary}</strong>
				</Heading>
				<CodeChip>{idea.targetVersion}</CodeChip>
			</div>
			<Text className="mb-4 line-clamp-5" component="div" size="sm">
				{idea.description}
			</Text>
			<div className="flex flex-wrap items-center gap-2">
				{idea.targetPages.map((page) => (
					<CodeChip key={page}>{page}</CodeChip>
				))}
				{idea.targetComponents.map((page) => (
					<CodeChip key={page}>{page}</CodeChip>
				))}
			</div>
		</div>
	);
};

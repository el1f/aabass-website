import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import {
	FragmentType,
	IdeaCard as IdeaCardFragment,
	useFragment,
} from "../graphql";
import { Anchor, CodeChip, Heading, OutlinedCard, Text } from ".";

export const IdeaCard: React.FC<{
	idea: FragmentType<typeof IdeaCardFragment>;
}> = ({ idea: ideaRef }) => {
	const router = useRouter();
	const focusedIdea = router.asPath.split("#")[1];
	const idea = useFragment(IdeaCardFragment, ideaRef);

	// TODO: I'd like this to be at the page level but for now I don't
	// want to propagate the content of the fragment there as well so
	// let's manage it like this for now.
	const [highlightIdea, setHighlightIdea] = useState(true);
	router.events?.on("hashChangeComplete", () => {
		setHighlightIdea(true);
		setTimeout(() => setHighlightIdea(false), 3000);
	});

	useEffect(() => {
		const fade = setTimeout(() => setHighlightIdea(false), 3000);

		return () => {
			clearTimeout(fade);
		};
	}, []);

	return (
        <Link href={`/ideas?activeIdea=${idea.id}`} legacyBehavior passHref>
			<OutlinedCard
				as={"a"}
				className={classNames(
					"max-w-xs p-3 outline outline-1 outline-offset-0 outline-primaryShade/0",
					{
						"outline-offset-8 outline-primaryShade/50":
							focusedIdea === idea.id && highlightIdea,
					},
				)}
				hasHover
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
				<Text as="div" className="mb-4 line-clamp-5" size="sm">
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
			</OutlinedCard>
		</Link>
    );
};

import React from "react";

import { ThoughtMeta } from "../types";
import { Heading, OutlinedCard, Text } from ".";

export interface ThoughtCardProps {
	data: ThoughtMeta;
	isOutlined?: boolean;
}

export const ThoughtCard: React.FC<ThoughtCardProps> = ({
	data: { category, date, description, title },
	isOutlined = false,
}) => {
	const Wrapper = isOutlined ? OutlinedCard : "article";
	const wrapperClass = isOutlined
		? "pt-3 pb-4 px-6 -mx-6 group rounded-xl"
		: "px-4 py-3 -mx-4 transition-all rounded-xl group hover:bg-bgRaised";

	return (
		<Wrapper className={wrapperClass}>
			<Text size="xs">{`${category} • ${date}`}</Text>
			<Heading
				className="mb-2 bg-no-repeat group-hover:text-primaryShade group-hover:underline"
				level={4}
			>
				{title}
			</Heading>
			<Text as="p" className="line-clamp-2">
				{description}
			</Text>
		</Wrapper>
	);
};

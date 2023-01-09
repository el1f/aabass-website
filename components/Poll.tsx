import Image from "next/legacy/image";
import React from "react";

import { Text } from ".";

interface PollProps {
	isActive: boolean;
	isLoading?: boolean;
	onVote: (value: string) => void;
	options: {
		label: string;
		value: string;
		votes: number;
	}[];
	question: string;
	value?: string;
	votes: number;
}

const MyMessage: React.FC<{
	content: React.ReactNode;
}> = ({ content }) => (
	<div className="flex items-end gap-3">
		<Image
			alt="Avatar of myself asking the following question"
			className="rounded-full"
			height={32}
			objectFit="cover"
			objectPosition="top"
			src="/me/about.jpg"
			width={32}
		/>

		<div className="max-w-lg py-2 pl-4 pr-5 border rounded-bl-xl w-fit rounded-3xl bg-bgRaisedDark border-textDimmedLight/10">
			{content}
		</div>
	</div>
);

export const PollPlaceholderLine: React.FC<{ w: string }> = ({ w }) => (
	<div className={`${w} h-3 rounded-full bg-textDimmedLight animate-pulse`} />
);

export const Poll: React.FC<PollProps> = ({
	isActive,
	isLoading,
	onVote,
	options,
	question,
	value,
	votes,
}) => {
	const showResults = !isActive || value;

	if (isLoading)
		return (
			<div className="flex flex-col gap-5">
				<MyMessage
					content={
						<div className="flex flex-col gap-2 p-2 opacity-25">
							<div className="flex gap-2">
								<PollPlaceholderLine w="w-36" />
								<PollPlaceholderLine w="w-48" />
							</div>
							<div className="flex gap-2">
								<PollPlaceholderLine w="w-16" />
								<PollPlaceholderLine w="w-8" />
								<PollPlaceholderLine w="w-32" />
							</div>
						</div>
					}
				/>
			</div>
		);

	return (
		<div className="flex flex-col gap-5">
			<MyMessage content={<Text>{question}</Text>} />

			<div className="max-w-lg ml-auto overflow-hidden border rounded-br-none rounded-3xl dark:border-textDimmedLight/25 border-textDimmedDark/25">
				{options.map((option) => {
					const percentage = (option.votes / votes) * 100;
					const isVoted = value === option.value;
					const votedClass = "bg-primaryShade/10";

					return (
						<div
							className={`relative px-4 py-2 transition-all border-b cursor-pointer last:border-b-0 dark:border-textDimmedLight/25 border-textDimmedDark/25 dark:hover:bg-textDimmedLight/5 hover:bg-textDimmedDark/5 group ${
								showResults ? "pointer-events-none" : ""
							}`}
							key={option.value}
							onClick={() => onVote(option.value)}
						>
							<div
								className={`h-[calc(100%-4px)] absolute block top-0.5 left-0.5 transition-all duration-200 ease-in-out origin-left bg-primaryLight bg-primaryDark rounded-[4px] group-first-of-type:rounded-tl-[21px] group-last-of-type:rounded-bl-[21px] ${
									isVoted
										? votedClass
										: "dark:bg-textDimmedLight/10 bg-textDimmedDark/10"
								} ${showResults ? "scale-x-100" : "scale-x-0"}`}
								style={{
									width: `calc(${percentage}% - 2px)`,
								}}
							/>
							<Text className={`relative ${showResults ? "opacity-50" : ""}`}>
								{option.label}
							</Text>
						</div>
					);
				})}
			</div>

			{showResults && (
				<MyMessage
					content={<Text>Thanks for voting fam! I really appreciate it.</Text>}
				/>
			)}
		</div>
	);
};

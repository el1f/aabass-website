import React from "react";

interface PollProps {
	onVote: (value: string) => void;
	options: {
		label: string;
		value: string;
		votes: number;
	}[];
	question: string;
	votes: number;
}

export const Poll: React.FC<PollProps> = () => {
	return <div>Poll</div>;
};

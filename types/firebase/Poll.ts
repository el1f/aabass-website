import { LocalizedString } from "./LocalizedString";

export interface Poll {
	key: string;
	options: PollOption[];
	question: LocalizedString;
	totalVotes: number;
	votes: PollVote[];
}

export interface PollOption {
	label: LocalizedString;
	totalVotes: number;
	value: string;
}

export interface PollVote {
	value: string;
	votedAt: Date;
}

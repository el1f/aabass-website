import { LocalizedString } from "./localizedString";

export interface Poll {
	key: string;
	options: {
		labels: LocalizedString;
		value: string;
	}[];
	question: LocalizedString;
}

export interface PollVote {
	value: string;
	votedAt: string;
}

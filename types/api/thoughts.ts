export interface Thought {
	content: string;
	data: ThoughtData;
	slug: string;
}

export interface ThoughtData {
	category: string;
	date: string;
	description?: string;
	isDraft: boolean;
	keywords?: string[];
	tags: string[];
	title: string;
}

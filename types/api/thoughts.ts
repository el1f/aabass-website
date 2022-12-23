export interface Thought {
	content: string;
	data: ThoughtMeta;
	slug: string;
}

export type ThoughtTOC = TOCNode[];

export interface TOCNode {
	nodes?: TOCNode[];
	target: string;
	title: string;
}

export interface ThoughtMeta {
	category: string;
	date: string;
	description?: string;
	hasToc: boolean;
	isDraft: boolean;
	keywords?: string[];
	readingTime: number;
	tags: string[];
	title: string;
}

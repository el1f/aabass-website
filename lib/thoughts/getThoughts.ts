import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Thought, ThoughtMeta, ThoughtTOC } from "../../types";

function matterDataToMeta(matterData: Record<string, any>): ThoughtMeta {
	return {
		category: matterData.categories[0],
		date: dayjs(matterData.date).format("DD MMM YYYY"),
		description: matterData.description,
		hasToc: matterData.toc,
		isDraft: matterData.draft,
		keywords: matterData.keywords,
		readingTime: matterData.duration,
		tags: matterData.tags,
		title: matterData.title,
	};
}

export function getThoughtMeta(slug: string): {
	meta: ThoughtMeta;
	toc: ThoughtTOC;
} {
	const fileContent = fs.readFileSync(
		path.join(process.cwd(), "pages", "thoughts", `${slug}.mdx`),
		"utf-8",
	);

	const { content, data } = matter(fileContent);

	const headers = content.match(/#{2,3}.+(?=\n)/g) ?? [];

	// TODO: do this in a WAY better way you ignorant fool please
	const toc = `,${headers.join()}`
		.split(",## ")
		.map((headerCluster) => headerCluster.split(",### "))
		.filter((header) => header[0] !== "")
		.map((headerGroup) => {
			return {
				nodes: headerGroup.slice(1).map((header) => {
					return {
						target: `#${header}`,
						title: header,
					};
				}),
				target: `#${headerGroup[0]}`,
				title: headerGroup[0],
			};
		});

	return {
		meta: matterDataToMeta(data),
		toc,
	};
}

export function getThoughts(): Thought[] {
	const dirFiles = fs.readdirSync(
		path.join(process.cwd(), "pages", "thoughts"),
		{
			withFileTypes: true,
		},
	);

	const thoughts = dirFiles.flatMap((file) => {
		if (!file.name.endsWith(".mdx")) return [];

		const fileContent = fs.readFileSync(
			path.join(process.cwd(), "pages", "thoughts", file.name),
			"utf-8",
		);
		const { content, data } = matter(fileContent);

		const slug = file.name.replace(/.mdx$/, "");
		return [
			{
				content,
				data: matterDataToMeta(data),
				slug,
			},
		];
	});

	return thoughts;
}

export function getThoughtsByCategory(category: string): Thought[] {
	return getThoughts().filter(({ data }) => {
		return data.category === category;
	});
}

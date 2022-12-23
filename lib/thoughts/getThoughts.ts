import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Thought } from "../../types";

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
				data: {
					category: data.categories[0],
					date: new Date(data.date).toLocaleDateString(),
					description: data.description,
					isDraft: data.draft,
					keywords: data.keywords,
					tags: data.tags,
					title: data.title,
				},
				slug,
			},
		];
	});

	return thoughts;
}

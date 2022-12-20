import React from "react";

import { SOCIALS } from "../data";
import { Anchor, Footer, Heading, Navbar, Seo, SeoProps, Text } from ".";

interface ThoughtsLayoutProps {
	header: {
		category: string;
		cover?: string;
		isLive?: boolean;
		publishedAt?: string;
		readingTime?: number;
		tags?: string[];
		title: string;
	};
	isWrapped?: boolean;
	seo: SeoProps;
}

export const ThoughtsLayout: React.FC<
	React.PropsWithChildren<ThoughtsLayoutProps>
> = ({ children, header, isWrapped, seo }) => {
	const content = isWrapped ? (
		<main className="container max-w-2xl px-6 pt-16 mx-auto mb-64">
			{children}
		</main>
	) : (
		children
	);

	return (
		<>
			<Seo {...seo} title={`Ayoub's thoughts • ${seo.title}`} />

			<Navbar socials={SOCIALS} />

			<header className="container max-w-2xl px-6 mx-auto mt-16">
				<Anchor className="inline-block mb-16 text-center" href="/thoughts">
					All thoughts
				</Anchor>

				<Heading className="leading-tight md:leading-tight" level={1}>
					{header.title}
				</Heading>
				<div className="flex items-center gap-4 mt-2">
					<Anchor
						className="font-mono leading-none"
						href={`/thoughts?category=${header.category}`}
						size="sm"
					>
						{header.category}
					</Anchor>
					<Text className="font-mono" component="span" size="sm">
						{`${
							header.publishedAt
								? new Date(header.publishedAt).toLocaleDateString()
								: "DRAFT"
						} • ${header.readingTime}m read`}
					</Text>
				</div>
			</header>

			{content}

			<Footer />
		</>
	);
};

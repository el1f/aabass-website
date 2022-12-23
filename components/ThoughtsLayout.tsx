import Link from "next/link";
import React from "react";

import { SOCIALS } from "../data";
import { ThoughtTOC } from "../types";
import { Anchor, Footer, Heading, Icon, Navbar, Seo, SeoProps, Text } from ".";
import { Toc } from "./Toc";

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
	toc?: ThoughtTOC;
}

export const ThoughtsLayout: React.FC<
	React.PropsWithChildren<ThoughtsLayoutProps>
> = ({ children, header, isWrapped, seo, toc }) => {
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

			<div className="grid items-start justify-center grid-cols-1 pt-32 md:gap-4 lg:gap-8 xl:gap-16 md:grid-cols-thought">
				<aside className="hidden sticky md:flex flex-col items-start justify-start max-w-xs md:min-h-[50vh] pt-2 transition-all top-8 opacity-20 hover:opacity-100">
					<Link href="/thoughts">
						<a className="inline-flex items-center self-end gap-2 p-3 lg:pr-4 hover:bg-bgRaised text-textDimmed rounded-xl">
							<Icon name="arrowLeft" />

							<Text className="hidden text-textDimmed dark:text-textDimmed lg:inline">
								Back
							</Text>
						</a>
					</Link>
				</aside>
				<div>
					<header className="container max-w-2xl px-6 mx-auto">
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
				</div>

				<aside className="sticky min-h-[50vh] flex-col items-start opacity-20 hover:opacity-100 transition-all max-w-xs pt-2 top-8 hidden lg:flex">
					{toc && <Toc contents={toc} />}
				</aside>
			</div>

			<Footer />
		</>
	);
};

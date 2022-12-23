import Link from "next/link";
import React from "react";

import { SOCIALS } from "../data";
import { Anchor, Footer, Heading, Icon, Navbar, Seo, SeoProps, Text } from ".";

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

	const anchors = React.Children.toArray(children)
		.filter(
			(child: any) =>
				child.props?.mdxType && ["h2", "h3"].includes(child.props.mdxType),
		)
		.map((child: any) => ({
			depth:
				(child.props?.mdxType &&
					parseInt(child.props.mdxType.replace("h", ""), 0)) ??
				0,
			text: child.props.children,
			url: "#" + child.props.id,
		}));

	console.log(children, anchors);

	return (
		<>
			<Seo {...seo} title={`Ayoub's thoughts • ${seo.title}`} />

			<Navbar socials={SOCIALS} />

			<div className="grid items-start justify-center gap-8 grid-cols-thought">
				<aside className="flex justify-end max-w-xs pt-2 mt-16">
					<Link href="/thoughts">
						<a className="inline-flex items-center gap-2 p-3 pr-4 hover:bg-bgRaised text-textDimmed rounded-xl">
							<Icon name="arrowLeft" />
							<Text className="text-textDimmed dark:text-textDimmed">Back</Text>
						</a>
					</Link>
				</aside>
				<div>
					<header className="container max-w-2xl px-6 mx-auto mt-16">
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
			</div>

			<Footer />
		</>
	);
};

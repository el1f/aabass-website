import classnames from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

import { useWindowScroll } from "../lib/hooks";
import { usePoll } from "../lib/hooks/polls/usePoll";
import { ThoughtTOC } from "../types";
import {
	Anchor,
	Footer,
	Heading,
	Icon,
	Navbar,
	Poll,
	Seo,
	SeoProps,
	Text,
} from ".";
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

const SCROLL_THRESHOLD = 512;

export const ThoughtsLayout: React.FC<
	React.PropsWithChildren<ThoughtsLayoutProps>
> = ({ children, header, isWrapped, seo, toc }) => {
	const { i18n } = useTranslation();
	const [scroll, direction] = useWindowScroll();
	const isScrollingUp = scroll.y > SCROLL_THRESHOLD && direction === "UP";

	const content = isWrapped ? (
		<article className="container max-w-2xl px-6 pt-16 mx-auto mb-16">
			{children}
		</article>
	) : (
		children
	);

	// TODO: remove when decision is made
	const [pollData, pollVote, onVote] = usePoll("POLL_THOUGHT_NEWSLETTER");

	return <>
        <Seo {...seo} title={`Ayoub's thoughts • ${seo.title}`} />

        <Navbar />

        <div className="grid items-start justify-center grid-cols-1 pt-32 md:gap-4 lg:gap-8 xl:gap-16 md:grid-cols-thought">
            <aside
                className={classnames(
                    "hidden sticky md:flex flex-col items-start justify-start max-w-xs md:min-h-[50vh] pt-2 transition-all top-8 opacity-20 hover:opacity-100",
                    {
                        "translate-y-32": isScrollingUp,
                    },
                )}
            >
                <Link
                    className="inline-flex items-center self-end gap-2 p-3 lg:pr-4 hover:bg-bgRaised text-textDimmed rounded-xl"
                    href="/thoughts">

                    <Icon name="arrowLeft" />
                    <Text className="hidden text-textDimmed dark:text-textDimmed lg:inline">
                        Back
                    </Text>

                </Link>
            </aside>
            <div>
                <main className="mb-32 md:mb-64">
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
                            <Text as="span" className="font-mono" size="sm">
                                {`${header.publishedAt ?? "DRAFT"} • ${
                                    header.readingTime
                                }m read`}
                            </Text>
                        </div>
                    </header>

                    {content}

                    <div className="px-6">
                        <Poll
                            // TODO: add the isActive flag to the API
                            isActive={true}
                            isLoading={!pollData}
                            onVote={onVote}
                            options={
                                pollData?.options.map((option) => ({
                                    label: option.label[i18n.language as "en" | "it"] ?? "",
                                    value: option.value,
                                    votes: option.totalVotes,
                                })) ?? []
                            }
                            question={
                                pollData?.question[i18n.language as "en" | "it"] ?? ""
                            }
                            value={pollVote}
                            votes={pollData?.totalVotes ?? 0}
                        />
                    </div>
                </main>
            </div>

            <aside
                className={classnames(
                    "sticky min-h-[50vh] flex-col items-start opacity-20 hover:opacity-100 transition-all max-w-xs pt-2 top-8 hidden lg:flex",
                    {
                        "translate-y-32": isScrollingUp,
                    },
                )}
            >
                {toc && <Toc contents={toc} />}
            </aside>
        </div>

        <Footer />
    </>;
};

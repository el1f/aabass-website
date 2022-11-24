import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initUrqlClient, withUrqlClient } from "next-urql";
import React, { Fragment, useEffect } from "react";
import {
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
	useQuery,
} from "urql";

import {
	Footer,
	Heading,
	IdeaCard,
	IdeaDialog,
	Navbar,
	Text,
} from "../components";
import { SOCIALS } from "../data";
import { allIdeas, clientSetup } from "../graphql";

const IdeasBoardColumn: React.FC<{
	cards: React.ReactNode[];
	title: string;
}> = ({ cards, title }) => {
	return (
		<section className="flex-shrink-0 w-full max-w-xs">
			<div className="p-2 mb-4">
				<Heading level={3}>{title}</Heading>
			</div>
			{cards.length === 0 && (
				<div className="max-w-xs p-8 text-center rounded-lg bg-textDimmedDark/20">
					<Text size="sm">No ideas have reached this stage yet.</Text>
				</div>
			)}
			<div className="flex flex-col gap-4">{cards}</div>
		</section>
	);
};

const Ideas = () => {
	const { t } = useTranslation(["common", "changelog"]);
	const router = useRouter();

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }, getActiveIdea] = useQuery({
		query: allIdeas,
		variables: {
			activeIdeaId: (router.query.activeIdea as string) ?? "",
		},
	});

	useEffect(() => {
		getActiveIdea({ requestPolicy: "network-only" });
	}, [getActiveIdea, router.query.activeIdea]);

	return (
		<>
			<Head>
				<title>{t("ideas.pageTitle")}</title>
				{/* TODO: replace with the OpenGraph component when fixed */}
				<meta content="website" property="og:type" />
				<meta content={t(`meta.og.title`)} property="og:title" />
				<meta content={process.env.NEXT_PUBLIC_HOSTNAME} property="og:url" />
				<meta
					content={`${process.env.NEXT_PUBLIC_HOSTNAME}/og-image.png`}
					property="og:image"
				/>
				<meta content={t(`meta.og.description`)} property="og:description" />
			</Head>

			<Navbar isExtended={false} socials={SOCIALS} />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto">
				<Text size="md">What's going on in the backstage?</Text>
				<Heading className="mb-4" level={1}>
					Ideas for the future
				</Heading>
			</header>

			<main className="flex gap-4 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] px-6 md:-mx-6 pb-32">
				{/* TODO: look for a better way to do this */}
				<IdeasBoardColumn
					cards={
						data?.backlog.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title="Backlog"
				/>
				<IdeasBoardColumn
					cards={
						data?.planned.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title="Planned"
				/>
				<IdeasBoardColumn
					cards={
						data?.ongoing.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title="In progress"
				/>
				<IdeasBoardColumn
					cards={
						data?.testing.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title="Testing"
				/>
				<IdeasBoardColumn
					cards={
						data?.done.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title="Done"
				/>
			</main>

			<Footer />

			{/* Active Idea */}
			<IdeaDialog
				idea={data?.activeIdea ?? undefined}
				onClose={() => router.replace("/ideas")}
				open={Boolean(data?.activeIdea)}
			/>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const defaultProps = {
		...(await serverSideTranslations(locale ?? "en", ["common", "changelog"])),
	};

	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			...clientSetup,
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		false,
	);

	if (!client) return { props: defaultProps };

	await client
		.query(allIdeas, {
			activeIdeaId: "",
		})
		.toPromise();

	return {
		props: {
			...defaultProps,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 3600,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Ideas);

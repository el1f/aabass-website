import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";
import React, { useEffect } from "react";
import { useQuery } from "urql";

import {
	Footer,
	Heading,
	IdeaCard,
	IdeaDialog,
	Navbar,
	Seo,
	Text,
} from "../components";
import { clientSetup, ideasPage, initGraphQLClient } from "../graphql";

const IdeasBoardColumn: React.FC<{
	cards: React.ReactNode[];
	title: string;
}> = ({ cards, title }) => {
	const { t } = useTranslation(["common", "ideas"]);

	return (
		<section className="flex-shrink-0 w-full max-w-xs">
			<div className="p-2 mb-4">
				<Heading level={3}>{title}</Heading>
			</div>
			{cards.length === 0 && (
				<div className="max-w-xs p-8 text-center rounded-lg bg-textDimmedDark/20">
					<Text size="sm">{t("ideas:board.columnPlaceholder")}</Text>
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
		query: ideasPage,
		variables: {
			activeIdeaId: (router.query.activeIdea as string) ?? "",
		},
	});

	useEffect(() => {
		getActiveIdea({ requestPolicy: "network-only" });
	}, [getActiveIdea, router.query.activeIdea]);

	return (
		<>
			<Seo title={t("ideas:pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto">
				<Text size="md">{t("ideas:header.lead")}</Text>
				<Heading className="mb-4" level={1}>
					{t("ideas:header.title")}
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
					title={t("ideas:board.backlogTitle")}
				/>
				<IdeasBoardColumn
					cards={
						data?.planned.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title={t("ideas:board.plannedTitle")}
				/>
				<IdeasBoardColumn
					cards={
						data?.ongoing.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title={t("ideas:board.ongoingTitle")}
				/>
				<IdeasBoardColumn
					cards={
						data?.testing.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title={t("ideas:board.testingTitle")}
				/>
				<IdeasBoardColumn
					cards={
						data?.done.map((ideaRef, i) => (
							<IdeaCard idea={ideaRef} key={`backlog-${i}`} />
						)) ?? []
					}
					title={t("ideas:board.doneTitle")}
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
	const [client, ssrCache] = initGraphQLClient();
	const i18nSetup = await serverSideTranslations(locale as string, [
		"common",
		"ideas",
		"changelog",
	]);

	if (!client) return { props: { ...i18nSetup } };

	await client
		.query(ideasPage, {
			activeIdeaId: "",
		})
		.toPromise();

	return {
		props: {
			...i18nSetup,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Ideas);

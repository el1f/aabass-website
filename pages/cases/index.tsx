import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";

import {
	Footer,
	Heading,
	Navbar,
	Poll,
	Seo,
	Text,
	Trans,
} from "../../components";
import { clientSetup } from "../../graphql";
import { usePoll } from "../../lib/hooks";

const CaseStudies: NextPage = () => {
	const { i18n, t } = useTranslation("cases");

	const [pollData, pollVote, onVote] = usePoll("CASE_STUDIES");

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
				<Heading className="mb-4 leading-tight" level={1}>
					{t("header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="cases:header.description" />
				</Text>
			</header>

			<section className="container max-w-2xl px-6 pt-8 pb-16 mx-auto mb-32">
				<Heading className="pb-4" level={2}>
					{t("wip.title")}
				</Heading>
				<Text as="p" className="mb-2">
					<Trans i18nKey="cases:wip.body" />
				</Text>

				<div className="mt-16">
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
						question={pollData?.question[i18n.language as "en" | "it"] ?? ""}
						value={pollVote}
						votes={pollData?.totalVotes ?? 0}
					/>
				</div>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", [
			"common",
			"cases",
			"changelog",
		])),
	},
});

export default withUrqlClient((_ssrExchange) => clientSetup)(CaseStudies);

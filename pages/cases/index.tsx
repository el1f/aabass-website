import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";
import React from "react";
import useSWR from "swr";

import { Footer, Heading, Navbar, Poll, Text, Trans } from "../../components";
import { SOCIALS } from "../../data";
import { clientSetup } from "../../graphql";
import { useLocalStorage } from "../../lib/hooks";
import { Poll as IPoll } from "../../types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const CaseStudies: NextPage = () => {
	const { i18n, t } = useTranslation("common");

	const [pollResponse, setPollResponse] = useLocalStorage<string | undefined>(
		`POLL_CASE_STUDIES`,
		undefined,
	);

	const { data: poll } = useSWR<IPoll>("/api/polls/CASE_STUDIES", fetcher, {});

	const handleVote = (value: string) => {
		try {
			axios({
				data: {
					value,
				},
				method: "POST",
				url: "/api/polls/CASE_STUDIES",
			});
			setPollResponse(value);
		} catch (error) {
			// TODO: handle error via UI
			// eslint-disable-next-line no-console
			console.error(error);
		}
	};

	return (
		<>
			<Head>
				<title>{t("cases.pageTitle")}</title>
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

			<Navbar socials={SOCIALS} />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
				<Heading className="mb-4 leading-tight" level={1}>
					{t("cases.header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="cases.header.description" />
				</Text>
			</header>

			<section className="container max-w-2xl px-6 pt-8 pb-16 mx-auto mb-32">
				<Heading className="pb-4" level={2}>
					{t("cases.wip.title")}
				</Heading>
				<Text as="p" className="mb-2">
					<Trans i18nKey="cases.wip.body" />
				</Text>

				<div className="mt-16">
					<Poll
						// TODO: add the isActive flag to the API
						isActive={true}
						isLoading={!poll}
						onVote={handleVote}
						options={
							poll?.options.map((option) => ({
								label: option.label[i18n.language as "en" | "it"] ?? "",
								value: option.value,
								votes: option.totalVotes,
							})) ?? []
						}
						question={poll?.question[i18n.language as "en" | "it"] ?? ""}
						value={pollResponse}
						votes={poll?.totalVotes ?? 0}
					/>
				</div>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common", "changelog"])),
	},
});

export default withUrqlClient((_ssrExchange) => clientSetup)(CaseStudies);

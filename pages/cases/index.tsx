import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initUrqlClient, withUrqlClient } from "next-urql";
import React from "react";
import {
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
	useMutation,
	useQuery,
} from "urql";

import { Footer, Heading, Navbar, Poll, Text } from "../../components";
import { SOCIALS } from "../../data";
import { clientSetup, getPoll, voteOnPoll } from "../../graphql";

const CaseStudies: NextPage = () => {
	const { t } = useTranslation("common");

	const [{ data }] = useQuery({
		query: getPoll,
		variables: {
			key: "CASE_STUDIES",
		},
	});
	const poll = data?.poll;

	const [voteResult, vote] = useMutation(voteOnPoll);

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

			<Navbar isExtended={false} socials={SOCIALS} />

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
					Currently structuring my thoughts!
				</Heading>
				<Text className="mb-2" component="p">
					I'm currently in the process of filling up this section. I'm planning
					to launch it with at least <strong>2-3 case studies</strong> split
					between client work and personal projects. I also am still considering
					whether to make it a set of custom pages that I manually craft, just a
					bunch of more structured and repeatable <em>Thoughts</em> fed from the
					CMS or something in-between (MDX? 👀).
				</Text>
				<Text component="p">What do you think I should go for?</Text>

				{poll && (
					<Poll
						options={poll.options.map((option) => ({
							label: option.label.en,
							value: option.value,
							votes: option.votes,
						}))}
						question={poll.totalVotes}
					/>
				)}
			</section>

			<Footer />
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
		.query(getPoll, {
			key: "CASE_STUDIES",
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

export default withUrqlClient((_ssrExchange) => clientSetup)(CaseStudies);

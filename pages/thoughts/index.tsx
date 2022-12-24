import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import {
	Footer,
	Heading,
	Navbar,
	Strong,
	Text,
	ThoughtCard,
} from "../../components";
import { SOCIALS } from "../../data";
import { getThoughts } from "../../lib/thoughts";
import { Thought } from "../../types";

const Thoughts: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("thoughts.pageTitle")}</title>
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

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto md:px-6">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					{t("thoughts.title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text as="div" className="mb-6">
					<Trans
						components={{
							hr: <hr className="my-1 opacity-0" />,
							strong: <Strong />,
						}}
						i18nKey="thoughts.body"
					/>
				</Text>
			</header>

			<section className="container max-w-2xl px-4 mx-auto mb-48 md:px-6">
				{thoughts.map(({ data, slug }) => (
					<Link href={`/thoughts/${slug}`} key={slug}>
						<a>
							<ThoughtCard data={data} />
						</a>
					</Link>
				))}
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const thoughts = getThoughts();

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
			thoughts,
		},
	};
};

export default Thoughts;

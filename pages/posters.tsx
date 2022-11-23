import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, PosterThumbnail, Text } from "../components";
import { POSTERS, SOCIALS } from "../data";
import * as ga from "../lib/ga";

const Posters: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("posters.pageTitle")}</title>
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
				<Heading className="mb-4" level={1}>
					{t("posters.header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="posters.header.description" />
				</Text>
			</header>

			<div className="container max-w-2xl px-6 mx-auto my-6">
				<Heading level={2}>{t("posters.standard.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
				{POSTERS.filter(({ format }) => format === "poster").map((poster) => (
					<PosterThumbnail
						className="flex-shrink-0 w-full"
						description={poster.description}
						key={poster.title}
						onClick={() => ga.posterPress(poster.title)}
						src={`/posters/${poster.thumbnail}`}
						title={poster.title}
					/>
				))}
			</section>

			<div className="container max-w-2xl px-6 mx-auto my-6">
				<Heading level={2}>{t("posters.square.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
				{POSTERS.filter(({ format }) => format === "disc").map((poster) => (
					<PosterThumbnail
						className="flex-shrink-0 w-full"
						description={poster.description}
						format="disc"
						key={poster.title}
						onClick={() => ga.posterPress(poster.title)}
						src={`/posters/${poster.thumbnail}`}
						title={poster.title}
					/>
				))}
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

export default Posters;

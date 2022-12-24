import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, Strong, Text } from "../components";
import { SOCIALS } from "../data";

const About: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("about.pageTitle")}</title>
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

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Text size="md">{t("about.lead")}</Text>
				<Heading className="mb-4" level={1}>
					{t("about.title")}
				</Heading>
			</header>

			<section className="container max-w-5xl px-4 mx-auto mb-48">
				<div className="flex flex-col items-start gap-12 md:flex-row">
					<div className="relative flex-shrink-0 w-80 aspect-poster">
						<Image
							alt="A picture of myself"
							className="w-full"
							layout="fill"
							objectFit="cover"
							src="/me/about.jpg"
						/>
					</div>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text as="div" className="leading-loose">
						<Trans
							components={{
								hr: <hr className="my-1 opacity-0" />,
								strong: <Strong />,
							}}
							i18nKey="about.bio"
						/>
					</Text>
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

export default About;

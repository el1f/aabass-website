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
			</Head>

			<Navbar isExtended={false} socials={SOCIALS} />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Text size="md">{t("about.lead")}</Text>
				<Heading className="mb-4" level={1}>
					{t("about.title")}
				</Heading>
			</header>

			<section className="container max-w-5xl px-4 mx-auto mb-48">
				<div className="flex items-start gap-12">
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
					<Text className="leading-loose" component="div">
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
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default About;

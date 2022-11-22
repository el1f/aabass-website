import { GetStaticProps, NextPage } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Navbar } from "../components/Navbar";
import { PosterThumbnail } from "../components/PosterThumbnail";
import { Text } from "../components/Text";
import { SOCIALS } from "../data/socials";
import Image from "next/image";
import { Strong } from "../components/Strong";
import Head from "next/head";

const About: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>About Ayoub</title>
			</Head>

			<Navbar isExtended={false} socials={SOCIALS} />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Text size="md">{t("about.lead")}</Text>
				<Heading level={1} className="mb-4">
					{t("about.title")}
				</Heading>
			</header>

			<section className="container max-w-5xl px-4 mx-auto mb-48">
				<div className="flex items-start gap-12">
					<div className="relative flex-shrink-0 w-80 aspect-poster">
						<Image
							src="/me/about.jpg"
							alt="A picture of myself"
							layout="fill"
							objectFit="cover"
							className="w-full"
						/>
					</div>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text component="div" className="leading-loose">
						<Trans
							i18nKey="about.bio"
							components={{
								strong: <Strong />,
								hr: <hr className="my-1 opacity-0" />,
							}}
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

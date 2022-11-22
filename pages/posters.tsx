import { GetStaticProps, NextPage } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Navbar } from "../components/Navbar";
import { PosterThumbnail } from "../components/PosterThumbnail";
import { Text } from "../components/Text";
import { POSTERS } from "../data/posters";
import { SOCIALS } from "../data/socials";

const Posters: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Navbar isExtended={false} socials={SOCIALS} />

			<header className="container max-w-2xl px-4 pt-32 pb-16 mx-auto">
				<Heading level={1} className="mb-4">
					{t("posters.header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="posters.header.description" />
				</Text>
			</header>

			<div className="container max-w-2xl px-4 mx-auto my-6">
				<Heading level={2}>{t("posters.standard.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-3 gap-8 mx-auto mb-48">
				{POSTERS.filter(({ format }) => format === "poster").map((poster) => (
					<PosterThumbnail
						key={poster.title}
						title={poster.title}
						src={`/posters/${poster.thumbnail}`}
						description={poster.description}
						className="flex-shrink-0 w-full"
					/>
				))}
			</section>

			<div className="container max-w-2xl px-4 mx-auto my-6">
				<Heading level={2}>{t("posters.square.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-3 gap-8 mx-auto mb-48">
				{POSTERS.filter(({ format }) => format === "disc").map((poster) => (
					<PosterThumbnail
						key={poster.title}
						title={poster.title}
						src={`/posters/${poster.thumbnail}`}
						description={poster.description}
						format="disc"
						className="flex-shrink-0 w-full"
					/>
				))}
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

export default Posters;

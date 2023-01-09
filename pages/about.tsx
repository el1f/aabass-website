import { GetStaticProps, NextPage } from "next";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Footer, Heading, Navbar, Seo, Text, Trans } from "../components";

const About: NextPage = () => {
	const { t } = useTranslation("about");

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Text size="md">{t("lead")}</Text>
				<Heading className="mb-4" level={1}>
					{t("title")}
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
						<Trans i18nKey="about:bio" />
					</Text>
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
			"about",
			"changelog",
		])),
	},
});

export default About;

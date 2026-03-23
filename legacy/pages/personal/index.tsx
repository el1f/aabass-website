import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Footer, Heading, Navbar, Seo, Text, Trans } from "../../components";

const Coffee: NextPage<{}> = () => {
	const { t } = useTranslation("personal");

	const placeholderCard = (
		<div className="container max-w-3xl px-6 mx-auto mb-section-3">
			<div className="flex flex-col items-center justify-center py-10 border rounded-lg md:py-20 hover-gradient hover-gradient-xl bg-bgRaised border-white/5">
				<Heading className="mb-2" level={3}>
					{t("personal:placeholder.title")}
				</Heading>
				<Text as="div">
					<Trans i18nKey="personal:placeholder.title" />
				</Text>
			</div>
		</div>
	);

	return (
		<>
			<Seo title={t("personal:pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto mb-heading-1">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					{t("personal:title")}
				</Heading>
				<Text as="div" className="mb-6">
					<Trans i18nKey="personal:body" />
				</Text>
			</header>

			{/* ART */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:art.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:art.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* COFFEE */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:coffee.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:coffee.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* GAMING */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:gaming.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:gaming.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* LONGBOARD */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:longboard.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:longboard.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* MUSIC */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:music.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:music.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* TRAVEL */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("personal:travel.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="personal:travel.description" />
					</Text>
				</header>

				{placeholderCard}
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const i18nSetup = await serverSideTranslations(locale as string, [
		"common",
		"personal",
		"changelog",
	]);

	return {
		props: {
			...i18nSetup,
		},
		revalidate: 4 * 60 * 60,
	};
};

export default Coffee;

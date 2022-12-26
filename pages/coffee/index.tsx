import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import {
	CoffeePlaceCard,
	Footer,
	Heading,
	Navbar,
	Strong,
	Text,
} from "../../components";
import CoffeeGearGrid from "../../components/CoffeeGearGrid";
import { SOCIALS } from "../../data";

const Coffee: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("coffee.pageTitle")}</title>
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
					{t("coffee.title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text as="div" className="mb-6">
					<Trans
						components={{
							hr: <hr className="my-1 opacity-0" />,
							strong: <Strong />,
						}}
						i18nKey="coffee.body"
					/>
				</Text>
			</header>

			<section className="mb-48">
				<header className="container max-w-2xl px-4 mx-auto md:px-6">
					<Heading className="mb-4" id="beans" level={2}>
						{t("coffee.beans.title")}
					</Heading>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text as="div" className="mb-6">
						<Trans
							components={{
								hr: <hr className="my-1 opacity-0" />,
								strong: <Strong />,
							}}
							i18nKey="coffee.beans.description"
						/>
					</Text>
				</header>
			</section>

			<section className="mb-48">
				<header className="container max-w-2xl px-4 mx-auto md:px-6">
					<Heading className="mb-4" id="gear" level={2}>
						{t("coffee.gear.title")}
					</Heading>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text as="div" className="mb-6">
						<Trans
							components={{
								hr: <hr className="my-1 opacity-0" />,
								strong: <Strong />,
							}}
							i18nKey="coffee.gear.description"
						/>
					</Text>
				</header>

				<CoffeeGearGrid />
			</section>

			<section className="mb-48 overflow-hidden">
				<header className="container max-w-2xl px-4 mx-auto md:px-6">
					<Heading className="mb-4" id="places" level={2}>
						{t("coffee.places.title")}
					</Heading>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text as="div" className="mb-6">
						<Trans
							components={{
								hr: <hr className="my-1 opacity-0" />,
								strong: <Strong />,
							}}
							i18nKey="coffee.places.description"
						/>
					</Text>
				</header>

				<section>
					<header className="container max-w-2xl px-4 mx-auto md:px-6">
						<Heading className="mb-4" id="places" level={5}>
							{t("coffee.places.favourites.title")}
						</Heading>
					</header>
					<div className="flex gap-8 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
						<CoffeePlaceCard
							country="italy"
							image="/coffee/places/tcb.webp"
							lastVisit="2w ago"
							name="The Coffee Box"
							score={5}
						/>
					</div>
				</section>
				<section>
					<header className="container max-w-2xl px-4 mx-auto md:px-6">
						<Heading className="mb-4" id="places" level={5}>
							{t("coffee.places.latest.title")}
						</Heading>
					</header>
					<div className="flex gap-8 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
					<CoffeePlaceCard
							country="italy"
							image="/coffee/places/tcb.webp"
							lastVisit="2w ago"
							name="The Coffee Box"
							score={5}
						/>
					</div>
				</section>
			</section>

			<section className="mb-48">
				<header className="container max-w-2xl px-4 mx-auto md:px-6">
					<Heading className="mb-4" id="thoughts" level={2}>
						{t("coffee.thoughts.title")}
					</Heading>
					{/* TODO: figure out why using a p causes a hydration issue */}
					<Text as="div" className="mb-6">
						<Trans
							components={{
								hr: <hr className="my-1 opacity-0" />,
								strong: <Strong />,
							}}
							i18nKey="coffee.thoughts.description"
						/>
					</Text>
				</header>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
		},
	};
};

export default Coffee;

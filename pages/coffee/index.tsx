import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import {
	CoffeeBeansCard,
	CoffeePlaceCard,
	Footer,
	Heading,
	Navbar,
	OutlinedCard,
	Strong,
	Text,
	ThoughtCard,
} from "../../components";
import CoffeeGearGrid from "../../components/CoffeeGearGrid";
import { SOCIALS } from "../../data";
import { getThoughtsByCategory } from "../../lib/thoughts";
import { Thought } from "../../types";

const Coffee: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
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

			<section className="mb-48 overflow-hidden">
				<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
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

				<section className="mb-8">
					<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
						<Heading className="mb-4" id="beans" level={5}>
							{t("coffee.beans.favorites.title")}
						</Heading>
					</header>
					<div className="flex pt-8 gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8">
						<CoffeeBeansCard
							espressoScore={5}
							filterScore={5}
							image="/coffee/beans/stratoberry.png"
							name="Strato Berry"
							origin="Uganda"
							processing="Natural"
							roaster="Giraffe Coffee"
						/>
						<CoffeeBeansCard
							espressoScore={5}
							filterScore={5}
							image="/coffee/beans/stratoberry.png"
							name="Strato Berry"
							origin="Uganda"
							processing="Natural"
							roaster="Giraffe Coffee"
						/>
						<CoffeeBeansCard
							espressoScore={5}
							filterScore={5}
							image="/coffee/beans/stratoberry.png"
							name="Strato Berry"
							origin="Uganda"
							processing="Natural"
							roaster="Giraffe Coffee"
						/>
						<CoffeeBeansCard
							espressoScore={5}
							filterScore={5}
							image="/coffee/beans/stratoberry.png"
							name="Strato Berry"
							origin="Uganda"
							processing="Natural"
							roaster="Giraffe Coffee"
						/>
					</div>
				</section>
				<section className="mb-8">
					<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
						<Heading className="mb-4" id="beans" level={5}>
							{t("coffee.beans.latest.title")}
						</Heading>
					</header>
					<div className="flex pt-8 gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8">
						<CoffeeBeansCard
							espressoScore={5}
							filterScore={5}
							image="/coffee/beans/stratoberry.png"
							name="Strato Berry"
							origin="Uganda"
							processing="Natural"
							roaster="Giraffe Coffee"
						/>
					</div>
				</section>
			</section>

			<section className="mb-48">
				<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
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
				<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
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

				<section className="mb-8">
					<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
						<Heading className="mb-4" id="places" level={5}>
							{t("coffee.places.favorites.title")}
						</Heading>
					</header>
					<div className="flex gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8">
						<CoffeePlaceCard
							country="italy"
							image="/coffee/places/tcb.webp"
							lastVisit="1d ago"
							name="The Coffee Box"
							score={5}
						/>
						<CoffeePlaceCard
							country="Netherlands"
							image="/coffee/places/giraffe.jpeg"
							lastVisit="6w ago"
							name="Giraffe Coffee"
							score={5}
						/>
						<CoffeePlaceCard
							country="United Kingdom"
							image="/coffee/places/qima.webp"
							lastVisit="2w ago"
							name="Qima Cafe"
							score={5}
						/>
					</div>
				</section>
				<section className="mb-8">
					<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
						<Heading className="mb-4" id="places" level={5}>
							{t("coffee.places.latest.title")}
						</Heading>
					</header>
					<div className="flex gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8">
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
				<header className="container max-w-2xl px-4 mx-auto mb-8 md:px-6">
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

				<section className="container max-w-2xl px-4 mx-auto mb-48 md:px-6">
					{thoughts.map(({ data, slug }) => (
						<Link href={`/thoughts/${slug}`} key={slug}>
							<a>
								<ThoughtCard data={data} />
							</a>
						</Link>
					))}

					{thoughts.length === 0 && (
						<OutlinedCard className="flex flex-col items-center justify-center min-h-[192px] text-center px-8">
							<Heading className="mb-2" level={3}>
								{t("coffee.thoughts.placeholder.title")}
							</Heading>
							<Text>{t("coffee.thoughts.placeholder.content")}</Text>
						</OutlinedCard>
					)}
				</section>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const thoughts = getThoughtsByCategory("COFFEE");

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

export default Coffee;

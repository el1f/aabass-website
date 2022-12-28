import classnames from "classnames";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initUrqlClient, withUrqlClient } from "next-urql";
import React from "react";
import {
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
	useQuery,
} from "urql";

import {
	Footer,
	FragCoffeeBeansCard,
	FragCoffeePlaceCard,
	Heading,
	Navbar,
	OutlinedCard,
	Seo,
	Strong,
	Text,
	ThoughtCard,
	Trans,
} from "../../components";
import CoffeeGearGrid from "../../components/CoffeeGearGrid";
import { SOCIALS } from "../../data";
import { clientSetup } from "../../graphql";
import { coffeePage } from "../../graphql/coffee";
import { getThoughtsByCategory } from "../../lib/thoughts";
import { Thought } from "../../types";

const CARD_CAROUSEL =
	"flex gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8 -mb-8";

const Coffee: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("common");

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data: pageData }] = useQuery({
		query: coffeePage,
	});

	return (
		<>
			<Seo title={t("coffee.pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto mb-heading-1">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					{t("coffee.title")}
				</Heading>
				<Text as="div" className="mb-6">
					<Trans i18nKey="coffee.body" />
				</Text>
			</header>

			{/* BEANS */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						{t("coffee.beans.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="coffee.beans.description" />
					</Text>
				</header>

				<section className="mb-section-3">
					<header className="container max-w-2xl px-6 mx-auto mb-1">
						<Heading id="beans" level={5}>
							{t("coffee.beans.favorites.title")}
						</Heading>
					</header>
					<div className={classnames(CARD_CAROUSEL, "pt-8")}>
						{(pageData?.favoriteBeans ?? []).map((bean) => (
							<FragCoffeeBeansCard beanRef={bean} key={bean.id} />
						))}
					</div>
				</section>
				<section>
					<header className="container max-w-2xl px-6 mx-auto mb-1">
						<Heading id="beans" level={5}>
							{t("coffee.beans.latest.title")}
						</Heading>
					</header>
					<div className={classnames(CARD_CAROUSEL, "pt-8")}>
						{(pageData?.latestBeans ?? []).map((bean) => (
							<FragCoffeeBeansCard beanRef={bean} key={bean.id} />
						))}
					</div>
				</section>
			</section>

			{/* GEAR */}
			<section className="mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-8">
					<Heading className="mb-heading-3" id="gear" level={2}>
						{t("coffee.gear.title")}
					</Heading>

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

			{/* PLACES */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-8">
					<Heading className="mb-heading-3" id="places" level={2}>
						{t("coffee.places.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="coffee.places.description" />
					</Text>
				</header>

				<section className="mb-section-3">
					<header className="container max-w-2xl px-6 mx-auto mb-heading-3">
						<Heading id="places" level={5}>
							{t("coffee.places.favorites.title")}
						</Heading>
					</header>
					<div className={classnames(CARD_CAROUSEL)}>
						{(pageData?.favoritePlaces ?? []).map((place) => (
							<FragCoffeePlaceCard key={place.id} placeRef={place} />
						))}
					</div>
				</section>
				<section className="mb-section-3">
					<header className="container max-w-2xl px-6 mx-auto mb-heading-3">
						<Heading id="places" level={5}>
							{t("coffee.places.latest.title")}
						</Heading>
					</header>
					<div className={classnames(CARD_CAROUSEL)}>
						{(pageData?.latestPlaces ?? []).map((place) => (
							<FragCoffeePlaceCard key={place.id} placeRef={place} />
						))}
					</div>
				</section>
			</section>

			{/* THOUGHTS */}
			<section className="mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-8">
					<Heading className="mb-heading-3" id="thoughts" level={2}>
						{t("coffee.thoughts.title")}
					</Heading>

					<Text as="div" className="mb-6">
						<Trans i18nKey="coffee.thoughts.description" />
					</Text>
				</header>

				<section className="container max-w-2xl px-6 mx-auto mb-48">
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
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			...clientSetup,
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		false,
	);

	if (!client)
		return {
			props: {
				...(await serverSideTranslations(locale ?? "en", [
					"common",
					"changelog",
				])),
			},
		};

	await client.query(coffeePage, {}).toPromise();
	const thoughts = getThoughtsByCategory("COFFEE");

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
			thoughts,
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Coffee);

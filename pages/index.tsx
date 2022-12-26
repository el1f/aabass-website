import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initUrqlClient, withUrqlClient } from "next-urql";
import {
	cacheExchange,
	dedupExchange,
	fetchExchange,
	ssrExchange,
	useQuery,
} from "urql";

import {
	Anchor,
	Button,
	Footer,
	Heading,
	Navbar,
	PosterThumbnail,
	Strong,
	Text,
	ThoughtCard,
} from "../components";
import { AvailabilityLabel } from "../components/AvailabilityLabel";
import CoffeeGearGrid from "../components/CoffeeGearGrid";
import { SOCIALS } from "../data";
import { allPosters, clientSetup } from "../graphql";
import * as ga from "../lib/ga";
import { getThoughts } from "../lib/thoughts";
import { Thought } from "../types";

const Home: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("common");

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }] = useQuery({
		query: allPosters,
	});

	return (
		<>
			<Head>
				<title>{t("home.pageTitle")}</title>

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

			<section className="container max-w-2xl px-6 py-32 mx-auto md:mb-32">
				<hgroup className="max-w-xl mb-6">
					<Heading className="mb-6 leading-none" isDimmed level={1}>
						<Trans
							components={{
								strong: <Strong />,
							}}
							i18nKey="home.hero.title"
						/>
					</Heading>
					<Text as="p" className="mb-4">
						<Trans
							components={{
								strong: <Strong />,
							}}
							i18nKey="home.hero.p1"
						/>
					</Text>
					<Text as="p" className="mb-4">
						<Trans
							components={{
								strong: <Strong />,
							}}
							i18nKey="home.hero.p2"
						/>
					</Text>
					<Text as="p">
						<Trans
							components={{
								availability: <AvailabilityLabel />,
								strong: <Strong />,
							}}
							i18nKey="home.hero.p3"
						/>
					</Text>
				</hgroup>
				<div className="flex gap-4 dark:gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<a>
							<Button
								onClick={() => {
									ga.contactPress("/");
								}}
							>
								{t("home.hero.cta1")}
							</Button>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<Button isOutlined isText>
								{t("home.hero.about")}
							</Button>
						</a>
					</Link>
				</div>
			</section>

			<section className="px-6 mb-32 md:mb-64">
				{/* TODO: find a better way to calculate the max width */}
				<div className="container max-w-[39rem] mx-auto">
					<Heading className="mb-4" id="playbook" level={2}>
						{t("home.playbook.title")}
					</Heading>
					<Text as="p" className="mb-12">
						{t("home.playbook.description")}
					</Text>

					<div className="flex items-center justify-between mb-4">
						<Heading id="posters" level={3}>
							{t("home.playbook.posters.title")}
						</Heading>
						<Anchor href="/posters" size="sm">
							{t("home.playbook.posters.showMore")}
						</Anchor>
					</div>
					<Text as="p" className="mb-8">
						{t("home.playbook.posters.description")}
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
					{(data?.standard ?? []).map((poster) => (
						<Link href={`/posters/${poster.slug}`} key={poster.slug}>
							<a>
								<PosterThumbnail
									className="flex-shrink-0 w-64"
									onClick={() => {
										ga.posterPress(poster.slug);
									}}
									src={`/posters/${poster.poster.url}`}
									title={poster.name}
								/>
							</a>
						</Link>
					))}
				</div>
			</section>

			<section className="container max-w-2xl px-6 mx-auto mb-8 md:mb-8">
				<Heading className="mb-4" id="personal" level={2}>
					{t("home.personal.title")}
				</Heading>
				<Text as="p" className="mb-12">
					<Trans
						components={{
							strong: <Strong />,
						}}
						i18nKey="home.personal.description"
					/>
				</Text>

				<section className="mb-32">
					<header className="flex items-center justify-between mb-4">
						<Heading id="thoughts" level={3}>
							{t("home.personal.thoughts.title")}
						</Heading>
						<Anchor href="/thoughts" size="sm">
							{t("home.personal.thoughts.showMore")}
						</Anchor>
					</header>
					<Text as="p" className="mb-8">
						{t("home.personal.thoughts.description")}
					</Text>

					<div className="flex flex-col gap-4">
						<Heading level={5}>{t("home.personal.thoughts.latest")}</Heading>
						{thoughts.map(({ data, slug }) => (
							<Link href={`/thoughts/${slug}`} key={slug}>
								<a>
									<ThoughtCard data={data} isOutlined />
								</a>
							</Link>
						))}
					</div>
				</section>

				<div className="flex items-center justify-between mb-4">
					<Heading id="coffee" level={3}>
						{t("home.personal.coffee.title")}
					</Heading>
					<Anchor href="/coffee" size="sm">
						{t("home.personal.coffee.showMore")}{" "}
					</Anchor>
				</div>
				<Text as="p" className="mb-8">
					{t("home.personal.coffee.description")}
				</Text>

				<Heading className="mt-16" level={5}>
					My current setup
				</Heading>
			</section>

			<CoffeeGearGrid />

			<section className="container max-w-2xl px-6 mx-auto">
				<Heading className="mb-4" level={2}>
					{t("home.footer.title")}
				</Heading>
				<Text as="p" className="mb-24">
					<Trans
						components={{
							strong: <Strong />,
						}}
						i18nKey="home.footer.description"
					/>
				</Text>
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

	// Posters
	await client.query(allPosters, {}).toPromise();

	// Thoughts
	const thoughts = getThoughts().slice(0, 3);

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
			thoughts,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Home);

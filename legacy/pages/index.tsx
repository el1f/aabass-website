import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import {
	Anchor,
	Button,
	Footer,
	Heading,
	Navbar,
	PosterThumbnail,
	Seo,
	Text,
	Trans,
} from "../components";
import { clientSetup, homePage, initGraphQLClient } from "../graphql";

import dayjs from "dayjs";

const WORK_START = new Date("2014-05-12T12:00:00.007Z");

const Home: NextPage = () => {
	const { t } = useTranslation("home");
	const careerYears = dayjs(new Date()).diff(WORK_START, "years");

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }] = useQuery({
		query: homePage,
	});

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<section className="container max-w-2xl px-6 py-32 mx-auto md:mb-32">
				<hgroup className="max-w-xl mb-6">
					<Heading className="mb-6 leading-none" isDimmed level={1}>
						<Trans i18nKey="home:hero.title" />
					</Heading>
					<Text as="p" className="mb-4">
						<Trans i18nKey="home:hero.p1" values={{ careerYears }} />
					</Text>
					<Text as="p" className="mb-4">
						<Trans i18nKey="home:hero.p2" />
					</Text>
				</hgroup>
				<div className="flex gap-4 dark:gap-4">
					<Link href="mailto:ayoub@aabass.net">
						<Button asChild size="xl">
							<motion.button>{t("hero.cta1")}</motion.button>
						</Button>
					</Link>
					<Link href="/about">
						<Button size="xl" variant="outline">
							{t("hero.about")}
						</Button>
					</Link>
				</div>
			</section>

			<section className="px-6 mb-32 md:mb-64">
				<div className="container max-w-[39rem] mx-auto">
					<Heading className="mb-4" id="playbook" level={2}>
						{t("playbook.title")}
					</Heading>
					<Text as="p" className="mb-12">
						{t("playbook.description")}
					</Text>

					<div className="flex items-center justify-between mb-4">
						<Heading id="posters" level={3}>
							{t("playbook.posters.title")}
						</Heading>
						<Anchor href="/posters" size="sm">
							{t("playbook.posters.showMore")}
						</Anchor>
					</div>
					<Text as="p" className="mb-8">
						{t("playbook.posters.description")}
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
					{(data?.posters ?? []).map((poster) => {
						return (
							// <Link
							// 	href={`/${i18n.language}/posters/${poster.slug}`}
							// 	key={poster.slug}
							// >
							<PosterThumbnail
								className="flex-shrink-0 w-64"
								key={poster.slug}
								// onClick={() => {
								// 	ga.posterPress(poster.slug);
								// }}
								src={`/posters/${poster.poster.url}`}
								title={poster.name}
							/>
							// </Link>
						);
					})}
				</div>
			</section>

			<section className="container max-w-2xl px-6 mx-auto">
				<Heading className="mb-4" level={2}>
					{t("footer.title")}
				</Heading>
				<Text as="p" className="mb-24">
					<Trans i18nKey="home:footer.description" />
				</Text>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const [client, ssrCache] = initGraphQLClient();
	const i18nSetup = await serverSideTranslations(locale as string, [
		"common",
		"home",
		"changelog",
	]);

	if (!client) return { props: { ...i18nSetup } };

	await client.query(homePage, {}).toPromise();

	return {
		props: {
			...i18nSetup,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Home);

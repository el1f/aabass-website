import classnames from "classnames";
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
	FragCoffeeBeansCard,
	FragCoffeePlaceCard,
	Heading,
	Navbar,
	PosterThumbnail,
	Seo,
	Text,
	ThoughtCard,
	Trans,
} from "../components";
import { clientSetup, homePage, initGraphQLClient } from "../graphql";
import * as ga from "../lib/ga";
import { getThoughts } from "../lib/thoughts";
import { Thought } from "../types";

const CARD_CAROUSEL =
	"flex gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8 -mb-8";

const Home: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("home");

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }] = useQuery({
		query: homePage,
	});

	return <>
        <Seo title={t("pageTitle")} />

        <Navbar />

        <section className="container max-w-2xl px-6 py-32 mx-auto md:mb-32">
            <hgroup className="max-w-xl mb-6">
                <Heading className="mb-6 leading-none" isDimmed level={1}>
                    <Trans i18nKey="home:hero.title" />
                </Heading>
                <Text as="p" className="mb-4">
                    <Trans i18nKey="home:hero.p1" />
                </Text>
                <Text as="p" className="mb-4">
                    <Trans i18nKey="home:hero.p2" />
                </Text>
                <Text as="p">
                    <Trans i18nKey="home:hero.p3" />
                </Text>
            </hgroup>
            <div className="flex gap-4 dark:gap-6">
                <Link href="mailto:ayoub@aabass.net">

                    <Button
                        onClick={() => {
                            ga.contactPress("/");
                        }}
                    >
                        {t("hero.cta1")}
                    </Button>

                </Link>
                <Link href="/about">

                    <Button isOutlined isText>
                        {t("hero.about")}
                    </Button>

                </Link>
            </div>
        </section>

        <section className="px-6 mb-32 md:mb-64">
            {/* TODO: find a better way to calculate the max width */}
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
                {(data?.posters ?? []).map((poster) => (
                    (<Link href={`/posters/${poster.slug}`} key={poster.slug}>

                        <PosterThumbnail
                            className="flex-shrink-0 w-64"
                            onClick={() => {
                                ga.posterPress(poster.slug);
                            }}
                            src={`/posters/${poster.poster.url}`}
                            title={poster.name}
                        />

                    </Link>)
                ))}
            </div>
        </section>

        <section className="container max-w-2xl px-6 mx-auto mb-8 md:mb-8">
            <Heading className="mb-4" id="personal" level={2}>
                {t("personal.title")}
            </Heading>
            <Text as="p" className="mb-12">
                <Trans i18nKey="home:personal.description" />
            </Text>

            <section className="mb-32">
                <header className="flex items-center justify-between mb-4">
                    <Heading id="thoughts" level={3}>
                        {t("personal.thoughts.title")}
                    </Heading>
                    <Anchor href="/thoughts" size="sm">
                        {t("personal.thoughts.showMore")}
                    </Anchor>
                </header>
                <Text as="p" className="mb-8">
                    {t("personal.thoughts.description")}
                </Text>

                <div className="flex flex-col gap-4">
                    <Heading level={5}>{t("personal.thoughts.latest")}</Heading>
                    {thoughts.map(({ data, slug }) => (
                        (<Link href={`/thoughts/${slug}`} key={slug}>

                            <ThoughtCard data={data} isOutlined />

                        </Link>)
                    ))}
                </div>
            </section>
        </section>

        <section className="overflow-hidden mb-section-2">
            <header className="container max-w-2xl px-6 mx-auto mb-heading-2">
                <div className="flex items-center justify-between mb-4">
                    <Heading id="coffee" level={3}>
                        {t("personal.coffee.title")}
                    </Heading>
                    <Anchor href="/coffee" size="sm">
                        {t("personal.coffee.showMore")}{" "}
                    </Anchor>
                </div>
                <Text as="p" className="mb-8">
                    {t("personal.coffee.description")}
                </Text>
            </header>

            <section className="mb-section-3">
                <header className="container max-w-2xl px-6 mx-auto mb-1">
                    <Heading id="beans" level={5}>
                        {t("personal.coffee.beansTitle")}
                    </Heading>
                </header>
                <div className={classnames(CARD_CAROUSEL, "pt-8")}>
                    {(data?.beans ?? []).map((bean) => (
                        <FragCoffeeBeansCard beanRef={bean} key={bean.id} />
                    ))}
                </div>
            </section>

            <section className="mb-section-3">
                <header className="container max-w-2xl px-6 mx-auto mb-1">
                    <Heading id="beans" level={5}>
                        {t("personal.coffee.placesTitle")}
                    </Heading>
                </header>
                <div className={classnames(CARD_CAROUSEL)}>
                    {(data?.coffeePlaces ?? []).map((place) => (
                        <FragCoffeePlaceCard key={place.id} placeRef={place} />
                    ))}
                </div>
            </section>
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
    </>;
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
	const thoughts = getThoughts().slice(0, 3);

	return {
		props: {
			...i18nSetup,
			thoughts,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Home);

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
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
	Heading,
	Navbar,
	PosterLightbox,
	PosterThumbnail,
	Text,
} from "../../components";
import { SOCIALS } from "../../data";
import { allPosters, clientSetup, poster } from "../../graphql";
import * as ga from "../../lib/ga";

const Posters: NextPage = () => {
	const { t } = useTranslation("common");
	const router = useRouter();

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }] = useQuery({
		query: allPosters,
	});
	const [{ data: selectedPosterData }] = useQuery({
		query: poster,
		variables: {
			slug: ((router.query.slug ?? []) as string[])[0],
		},
	});

	return (
		<>
			<Head>
				<title>{t("posters.pageTitle")}</title>
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

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
				<Heading className="mb-4" level={1}>
					{t("posters.header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="posters.header.description" />
				</Text>
			</header>

			<div className="container max-w-2xl px-6 mx-auto my-6">
				<Heading level={2}>{t("posters.standard.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
				{(data?.standard ?? []).map((poster) => (
					<Link
						href={`/posters/${poster.slug}`}
						key={poster.slug}
						scroll={false}
					>
						<a>
							<PosterThumbnail
								className="flex-shrink-0 w-full"
								onClick={() => ga.posterPress(poster.slug)}
								src={poster.poster.url}
								title={poster.name}
							/>
						</a>
					</Link>
				))}
			</section>

			<div className="container max-w-2xl px-6 mx-auto my-6">
				<Heading level={2}>{t("posters.square.title")}</Heading>
			</div>

			<section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
				{(data?.vinyl ?? []).map((poster) => (
					<Link
						href={`/posters/${poster.slug}`}
						key={poster.slug}
						scroll={false}
					>
						<a>
							<PosterThumbnail
								className="flex-shrink-0 w-full"
								format="disc"
								onClick={() => ga.posterPress(poster.slug)}
								src={poster.poster.url}
								title={poster.name}
							/>
						</a>
					</Link>
				))}
			</section>

			<PosterLightbox
				onClose={() => router.push("/posters", undefined, { scroll: false })}
				open={Boolean(poster)}
				poster={selectedPosterData?.poster ?? undefined}
			/>

			<Footer />
		</>
	);
};

export const getStaticPaths = async () => {
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			...clientSetup,
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		false,
	);

	if (!client) return { fallback: "blocking", paths: [] };

	const { data } = await client.query(allPosters, {}).toPromise();

	if (!data) return { fallback: "blocking", paths: [] };

	return {
		fallback: "blocking",
		paths: [
			{
				params: {
					slug: [""],
				},
			},
			...data.standard.map((data) => {
				return {
					params: {
						slug: [data.slug],
					},
				};
			}),
			...data.vinyl.map((data) => {
				return {
					params: {
						slug: [data.slug],
					},
				};
			}),
		],
	};
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

	await client.query(allPosters, {}).toPromise();

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Posters);

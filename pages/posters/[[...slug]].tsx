import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import {
	Footer,
	Heading,
	Navbar,
	PosterLightbox,
	PosterThumbnail,
	Seo,
	Text,
	Trans,
} from "../../components";
import {
	clientSetup,
	initGraphQLClient,
	poster,
	postersPage,
} from "../../graphql";
import * as ga from "../../lib/ga";

const Posters: NextPage = () => {
	const { t } = useTranslation("posters");
	const router = useRouter();

	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data }] = useQuery({
		query: postersPage,
	});
	const [{ data: selectedPosterData }] = useQuery({
		query: poster,
		variables: {
			slug: ((router.query.slug ?? []) as string[])[0],
		},
	});

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
				<Heading className="mb-4" level={1}>
					{t("header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="posters:header.description" />
				</Text>
			</header>

			<div className="container max-w-2xl px-6 mx-auto my-6">
				<Heading level={2}>{t("standard.title")}</Heading>
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
				<Heading level={2}>{t("square.title")}</Heading>
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
	const [client] = initGraphQLClient();
	if (!client) return { fallback: "blocking", paths: [] };

	const { data } = await client.query(postersPage, {}).toPromise();

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
	const [client, ssrCache] = initGraphQLClient();

	const i18nSetup = await serverSideTranslations(locale as string, [
		"common",
		"posters",
		"changelog",
	]);

	if (!client) return { props: { ...i18nSetup } };

	await client.query(postersPage, {}).toPromise();

	return {
		props: {
			...i18nSetup,
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Posters);

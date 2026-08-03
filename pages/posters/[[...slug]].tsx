import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
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
} from "../../components";
import {
	clientSetup,
	initGraphQLClient,
	poster,
	postersPage,
} from "../../graphql";
import * as ga from "../../lib/ga";

const Posters: NextPage = () => {
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

	return <>
        <Seo title="My poster collection" />

        <Navbar />

        <header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
            <Heading className="mb-4" level={1}>
                My posters collection
            </Heading>
            <Text>
                Print is not dead. I love to design posters and other printed
                media in my free time to experiment with the latest design trends
                and try out compositions and techniques that I wouldn&apos;t be
                able to use in my day-to-day work.
                <br />
                This is a collection of my favorite posters that I have designed
                over the past months, including some of my first experiments with
                print design. I hope you enjoy them as much as I do!
            </Text>
        </header>

        <div className="container max-w-2xl px-6 mx-auto my-6">
            <Heading level={2}>Standard Print</Heading>
        </div>

        <section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
            {(data?.standard ?? []).map((poster) => (
                (<Link
                    href={`/posters/${poster.slug}`}
                    key={poster.slug}
                    scroll={false}
                >

                    <PosterThumbnail
                        className="flex-shrink-0 w-full"
                        onClick={() => ga.posterPress(poster.slug)}
                        src={poster.poster.url}
                        title={poster.name}
                    />

                </Link>)
            ))}
        </section>

        <div className="container max-w-2xl px-6 mx-auto my-6">
            <Heading level={2}>Vinyl covers</Heading>
        </div>

        <section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
            {(data?.vinyl ?? []).map((poster) => (
                (<Link
                    href={`/posters/${poster.slug}`}
                    key={poster.slug}
                    scroll={false}
                >

                    <PosterThumbnail
                        className="flex-shrink-0 w-full"
                        format="disc"
                        onClick={() => ga.posterPress(poster.slug)}
                        src={poster.poster.url}
                        title={poster.name}
                    />

                </Link>)
            ))}
        </section>

        <PosterLightbox
            onClose={() => router.push("/posters", undefined, { scroll: false })}
            open={Boolean(poster)}
            poster={selectedPosterData?.poster ?? undefined}
        />

        <Footer />
    </>;
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

export const getStaticProps: GetStaticProps = async () => {
	const [client, ssrCache] = initGraphQLClient();

	if (!client) return { props: {} };

	await client.query(postersPage, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Posters);

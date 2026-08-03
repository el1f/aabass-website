import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import {
	Footer,
	Heading,
	Navbar,
	PosterLightbox,
	PosterThumbnail,
	Seo,
	Text,
} from "../../components";
import { POSTERS, STANDARD_POSTERS, VINYL_POSTERS } from "../../data";
import * as ga from "../../lib/ga";

const Posters: NextPage = () => {
	const router = useRouter();

	const activeSlug = ((router.query.slug ?? []) as string[])[0];
	const selectedPoster = POSTERS.find((poster) => poster.slug === activeSlug);

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
            {STANDARD_POSTERS.map((poster) => (
                (<Link
                    href={`/posters/${poster.slug}`}
                    key={poster.slug}
                    scroll={false}
                >

                    <PosterThumbnail
                        className="flex-shrink-0 w-full"
                        onClick={() => ga.posterPress(poster.slug)}
                        src={poster.src}
                        title={poster.name}
                    />

                </Link>)
            ))}
        </section>

        <div className="container max-w-2xl px-6 mx-auto my-6">
            <Heading level={2}>Vinyl covers</Heading>
        </div>

        <section className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
            {VINYL_POSTERS.map((poster) => (
                (<Link
                    href={`/posters/${poster.slug}`}
                    key={poster.slug}
                    scroll={false}
                >

                    <PosterThumbnail
                        className="flex-shrink-0 w-full"
                        format="disc"
                        onClick={() => ga.posterPress(poster.slug)}
                        src={poster.src}
                        title={poster.name}
                    />

                </Link>)
            ))}
        </section>

        <PosterLightbox
            onClose={() => router.push("/posters", undefined, { scroll: false })}
            open={Boolean(selectedPoster)}
            poster={selectedPoster}
        />

        <Footer />
    </>;
};

export const getStaticPaths = async () => {
	return {
		fallback: false,
		paths: [
			{
				params: {
					slug: [""],
				},
			},
			...POSTERS.map((poster) => ({
				params: {
					slug: [poster.slug],
				},
			})),
		],
	};
};

export const getStaticProps = async () => ({ props: {} });

export default Posters;

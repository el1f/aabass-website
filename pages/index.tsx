import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

import {
	Anchor,
	AvailabilityLabel,
	Button,
	Footer,
	Heading,
	Navbar,
	PosterThumbnail,
	Seo,
	Strong,
	Text,
} from "../components";
import { STANDARD_POSTERS } from "../data";

import dayjs from "dayjs";

const WORK_START = new Date("2014-05-12T12:00:00.007Z");

const Home: NextPage = () => {
	const careerYears = dayjs(new Date()).diff(WORK_START, "years");

	return (
		<>
			<Seo title="Hello, I'm Ayoub" />

			<Navbar />

			<section className="container max-w-2xl px-6 py-32 mx-auto md:mb-32">
				<hgroup className="max-w-xl mb-6">
					<Heading className="mb-6 leading-none" isDimmed level={1}>
						Hello, I&apos;m <Strong>Ayoub</Strong>
					</Heading>
					<Text as="p" className="mb-4">
						I&apos;ve been dabbling in software development and design for the
						past <Strong>{careerYears} years</Strong>, mostly focusing on{" "}
						<Strong>digital product development</Strong>. I like to obsess over
						corner radii and making sure those pixels look exceptionally clean.
					</Text>
					<Text as="p" className="mb-4">
						Currently working on <Strong>Grok</Strong> and more{" "}
						<Strong>@xAI</Strong>.
						<br />
						My availability right now is{" "}
						<AvailabilityLabel>non-existent</AvailabilityLabel>. Still, feel
						free to reach out for a chat!
					</Text>
				</hgroup>
				<div className="flex gap-4 dark:gap-4">
					<Link href="mailto:ayoub@aabass.net">
						<Button asChild size="xl">
							<motion.button>Reach out</motion.button>
						</Button>
					</Link>
					<Link href="/about">
						<Button size="xl" variant="outline">
							About me
						</Button>
					</Link>
				</div>
			</section>

			<section className="px-6 mb-32 md:mb-64">
				<div className="container max-w-[39rem] mx-auto">
					<Heading className="mb-4" id="playbook" level={2}>
						Playbook
					</Heading>
					<Text as="p" className="mb-12">
						A little collection of some nice things I&apos;m doing right now
						that I kinda like. These are updated every now and then so come
						back later, there could be something new that you didn&apos;t see
						last time.
					</Text>

					<div className="flex items-center justify-between mb-4">
						<Heading id="posters" level={3}>
							Posters
						</Heading>
						<Anchor href="/posters" size="sm">
							See all
						</Anchor>
					</div>
					<Text as="p" className="mb-8">
						I&apos;ve been playing around with a lot of new design styles as of
						lately and I&apos;ve been enjoying printing them way more than I
						ever expected. Here&apos;s a selection of my latest ones.
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
					{STANDARD_POSTERS.slice(0, 8).map((poster) => (
						<PosterThumbnail
							className="flex-shrink-0 w-64"
							key={poster.slug}
							src={poster.src}
							title={poster.name}
						/>
					))}
				</div>
			</section>

			<section className="container max-w-2xl px-6 mx-auto">
				<Heading className="mb-4" level={2}>
					Well, that&apos;s it
				</Heading>
				<Text as="p" className="mb-24">
					Congrats on getting all the way down here. <br /> I&apos;m thinking
					about giving people that reach this point a little reward but
					it&apos;s not ready yet. Come back later to check it out!
				</Text>
			</section>

			<Footer />
		</>
	);
};

export default Home;

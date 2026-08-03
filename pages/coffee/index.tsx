import classnames from "classnames";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import {
	Footer,
	FragCoffeeBeansCard,
	FragCoffeePlaceCard,
	Heading,
	Navbar,
	OutlinedCard,
	Seo,
	Text,
} from "../../components";
import CoffeeGearGrid from "../../components/CoffeeGearGrid";
import { clientSetup, initGraphQLClient } from "../../graphql";
import { coffeePage } from "../../graphql/coffee";

const CARD_CAROUSEL =
	"flex gap-4 overflow-x-scroll flex-nowrap justify-start md:px-[calc(50vw-21rem+24px)] px-4 pb-8 -mb-8";

const Coffee: NextPage = () => {
	// TODO: this seems to cause hydration issues every now and then but
	// according to this issue it isn't a problem that should happen
	// in production.
	// https://github.com/urql-graphql/urql/issues/1363#issuecomment-772789918
	const [{ data: pageData }] = useQuery({
		query: coffeePage,
	});

	return (
		<>
			<Seo title="Ayoub's Coffee life" />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto mb-heading-1">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					My coffee corner
				</Heading>
				<Text as="div" className="mb-6">
					Welcome to my little coffee space. Here I plan to share several
					aspects of my coffee discovery journey, from gear and bean reviews to
					personal thoughts about the dive into this beautiful, tasty and crazy
					rabbit hole. Enjoy your stay, possibly while sipping a nice warm cup
					of java.
				</Text>
			</header>

			{/* BEANS */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						My Beans
					</Heading>

					<Text as="div" className="mb-6">
						Every amazing cup of coffee starts from incredible beans. One
						aspect I&apos;m loving about getting more involved in my coffee
						consumption is discovering the stories behind these wonderful
						beans. Be it the different preparation techniques, the cultural
						implications of the country they are produced in, the biodiversity
						that&apos;s found within this plant&apos;s genus and the stories
						of the people behind them.
						<hr className="my-1 opacity-0" />
						Experimenting with different producers and roasters has become a
						treat I indulge in a lot and these are some of the experiences
						I&apos;ve had as of lately and some of those that I&apos;ve fell
						in love in the past months.
					</Text>
				</header>

				<section className="mb-section-3">
					<header className="container max-w-2xl px-6 mx-auto mb-1">
						<Heading id="beans" level={5}>
							My favorites
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
							Latest experiments
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
						My coffee gear
					</Heading>

					<Text as="div" className="mb-6">
						One incredibly fun (or terrible, depending on the perspective)
						aspect of getting into home brewing is getting to know all of the
						various tools that are used in the space to get ever so closer to
						brewing some incredible coffee drinks. These are the ones I&apos;m
						currently using in my home barista setup. I&apos;m soon going to
						update this section with more details for each of these and
						I&apos;m eventually going to add my drinkware and archive as well
						so stay tuned for that!
					</Text>
				</header>

				<CoffeeGearGrid />
			</section>

			{/* PLACES */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-8">
					<Heading className="mb-heading-3" id="places" level={2}>
						Cafes and Coffee places
					</Heading>

					<Text as="div" className="mb-6">
						Home brewing is great and all but nothing can replace the sheer
						joy of heading over to your favorite third place to enjoy a nice
						cup of your usual cozy brew or to experiment something entirely
						new while being served by people with a lot to teach you both
						thanks to their different backgrounds in life, and to their vast
						experience preparing cups of java. This is a collection of the
						places I love and the latest ones I&apos;ve been to.
					</Text>
				</header>

				<section className="mb-section-3">
					<header className="container max-w-2xl px-6 mx-auto mb-heading-3">
						<Heading id="places" level={5}>
							My third places
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
							Latest journeys
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
						Thinking about beans
					</Heading>

					<Text as="div" className="mb-6">
						So as per what&apos;s on the Thoughts page I&apos;ve been getting
						quite passionate about writing and wanting to improve my writing
						abilities, that also projects itself in the coffee space.
						I&apos;ve been learning a lot in the past months about these
						beautiful tasty beans and I&apos;m looking forward to sharing my
						process and what I learn down the line somewhere a little more
						&quot;formal&quot;, slowly but surely maturing my ability to
						articulate my thoughts about what I drink alongside my ability to
						actually taste and brew better cups.
					</Text>
				</header>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const [client, ssrCache] = initGraphQLClient();

	if (!client) return { props: {} };

	await client.query(coffeePage, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 4 * 60 * 60,
	};
};

export default withUrqlClient((_ssrExchange) => clientSetup)(Coffee);

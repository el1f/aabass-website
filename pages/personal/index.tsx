import { NextPage } from "next";

import { Footer, Heading, Navbar, Seo, Text } from "../../components";

const Coffee: NextPage<{}> = () => {
	const placeholderCard = (
		<div className="container max-w-3xl px-6 mx-auto mb-section-3">
			<div className="flex flex-col items-center justify-center py-10 border rounded-lg md:py-20 hover-gradient hover-gradient-xl bg-bgRaised border-white/5">
				<Heading className="mb-2" level={3}>
					Housekeeping in progress
				</Heading>
				<Text as="div">I&apos;m still working on this section. Check back later!</Text>
			</div>
		</div>
	);

	return (
		<>
			<Seo title="Personal Corner" />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto mb-heading-1">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					Personal Corner
				</Heading>
				<Text as="div" className="mb-6">
					Well, if you&apos;re here it seems you actually are interested into
					getting a fuller picture of who I am and what I care about. Hope this
					page helps you with that! I&apos;ll try and keep it updated with toys
					and experiments related to the various interests I&apos;ll post about
					here.
				</Text>
			</header>

			{/* ART */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Artsy Stuff
					</Heading>

					<Text as="div" className="mb-6">
						Ever since elementary school I made sure to upset my teachers by
						being more interested in doodling on my notebooks than paying
						attention to the class. I&apos;ve been trying to get back into
						drawing and painting, and I&apos;ve also started snapping some
						photos here and there. Have a look at them and lemme know what you
						think!
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* COFFEE */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Coffee
					</Heading>

					<Text as="div" className="mb-6">
						As a dev I&apos;ve taken revenge against all the gripes I have with
						Java by drinking copious amounts of coffee. I&apos;ve been a coffee
						enthusiast for a while now and I&apos;ve been trying to learn more
						about it. I&apos;ve been experimenting with different brewing
						methods and beans, and I&apos;ll try documenting some of my journey
						here.
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* GAMING */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Gaming
					</Heading>

					<Text as="div" className="mb-6">
						My uncle once brought us a NES from Paris with super mario on it. I
						was 3, I didn&apos;t know how to play that stuff. Afterwards my dad
						brought me a PS2 when I was 6, and I&apos;ve been gaming ever
						since. Adulting got in the way once I hit 16 but I am trying to get
						back into it. This corner will be about my experiences gaming and
						serve as an excuse for me to spend more time doing it.
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* LONGBOARD */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Longboarding
					</Heading>

					<Text as="div" className="mb-6">
						I took up longboarding in 2015 but really dove into it during the
						pandeminc. You could see me wrecking my shins ever since. I&apos;ve
						had a bunch of different ideas within the space ever since and
						I&apos;m trying to document them here. I&apos;ll also be posting
						about my experiences with longboarding and the community around it.
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* MUSIC */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Music
					</Heading>

					<Text as="div" className="mb-6">
						I never claimed to be into music since many people stake a lot of
						emotions on that claim and I definitely don&apos;t wanna upset the
						music loving crowd. That being said I definitely use it to keep my
						thoughts at bay quite a lot during my days and I wanna drop some
						honorable mentions here since it&apos;s a big part of my life.
					</Text>
				</header>

				{placeholderCard}
			</section>

			{/* TRAVEL */}
			<section className="overflow-hidden mb-section-2">
				<header className="container max-w-2xl px-6 mx-auto mb-heading-2">
					<Heading className="mb-heading-3" id="beans" level={2}>
						Travel
					</Heading>

					<Text as="div" className="mb-6">
						I&apos;ve been lucky enough to have traveled quite a bit in my
						life. Not nearly as much as I&apos;d like to but it serves as an
						excellent tying thread for my other experiences so let&apos;s drop
						it here for sure!
					</Text>
				</header>

				{placeholderCard}
			</section>

			<Footer />
		</>
	);
};

export default Coffee;

import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
	Anchor,
	Button,
	Footer,
	Heading,
	Navbar,
	PosterThumbnail,
	Strong,
	Text,
} from "../components";
import { AvailabilityLabel } from "../components/AvailabilityLabel";
import CoffeeGearGrid from "../components/CoffeeGearGrid";
import { POSTERS, SOCIALS } from "../data";
import * as ga from "../lib/ga";

const Home: NextPage = () => {
	const { t } = useTranslation("common");

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

			<Navbar isExtended={false} socials={SOCIALS} />

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
					<Text className="mb-4" component="p">
						<Trans
							components={{
								strong: <Strong />,
							}}
							i18nKey="home.hero.p1"
						/>
					</Text>
					<Text className="mb-4" component="p">
						<Trans
							components={{
								strong: <Strong />,
							}}
							i18nKey="home.hero.p2"
						/>
					</Text>
					<Text component="p">
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
					<Text className="mb-12" component="p">
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
					<Text className="mb-8" component="p">
						{t("home.playbook.posters.description")}
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] px-6 -mx-6 pb-8">
					{POSTERS.filter(({ format }) => format === "poster").map((poster) => (
						<PosterThumbnail
							className="flex-shrink-0 w-64"
							description={poster.description}
							key={poster.title}
							onClick={() => {
								ga.posterPress(poster.title);
							}}
							src={`/posters/${poster.thumbnail}`}
							title={poster.title}
						/>
					))}
				</div>
			</section>

			<section className="container max-w-2xl px-6 mx-auto mb-8 md:mb-8">
				<Heading className="mb-4" id="personal" level={2}>
					{t("home.personal.title")}
				</Heading>
				<Text className="mb-12" component="p">
					<Trans
						components={{
							strong: <Strong />,
						}}
						i18nKey="home.personal.description"
					/>
				</Text>

				<div className="flex items-center justify-between mb-4">
					<Heading id="coffee" level={3}>
						{t("home.personal.coffee.title")}
					</Heading>
					<Anchor href="/coffee" size="sm">
						{t("home.personal.coffee.showMore")}{" "}
					</Anchor>
				</div>
				<Text className="mb-8" component="p">
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
				<Text className="mb-24" component="p">
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common", "changelog"])),
	},
});

export default Home;

import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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

			<div className="container grid max-w-5xl grid-cols-6 gap-5 px-6 mx-auto mb-64 sm:grid-cols-3 lg:gap-8 lg:grid-cols-11 lg:grid-rows-6">
				<div className="relative col-span-6 p-4 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 lg:row-span-6 lg:col-span-6 sm:row-span-2 sm:col-span-2 rounded-2xl border-textDimmedLight/20 aspect-square group">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="sm">MACHINE</Text>
						<Heading
							className="transition-all duration-100 opacity-25 group-hover:opacity-100 text-8xl"
							level={3}
						>
							Sage Barista Express
						</Heading>
					</div>

					<div className="absolute w-[120%] -bottom-80 -left-40 group-hover:-translate-y-4 transition-all">
						<Image
							alt="Sage Barista Express"
							className="h-full"
							height={768}
							objectFit="contain"
							src="/coffee/machine.png"
							width={768}
						/>
					</div>
				</div>

				<div className="relative col-span-3 px-4 py-3 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group sm:row-span-1 sm:col-span-1 lg:row-span-3 lg:col-end-10 lg:col-start-7 rounded-2xl border-textDimmedLight/20 aspect-square ">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="sm">GRINDER</Text>
						<Heading
							className="text-3xl transition-all duration-100 opacity-25 group-hover:opacity-100 md:text-5xl"
							level={5}
						>
							Fellow Ode
						</Heading>
					</div>

					<div className="absolute group-hover:-translate-x-4 transition-all h-[120%] w-[120%] -bottom-12 -right-24">
						<Image
							alt="Fellow Ode Grinder"
							className="h-full"
							height={384}
							objectFit="contain"
							src="/coffee/grinder.png"
							width={384}
						/>
					</div>
				</div>
				<div className="relative col-span-3 px-4 py-3 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-start-4 sm:row-span-1 sm:col-span-1 lg:row-end-7 lg:col-end-10 lg:col-start-7 rounded-2xl border-textDimmedLight/20 aspect-square">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="sm">KETTLE</Text>
						<Heading
							className="text-3xl transition-all duration-100 opacity-25 group-hover:opacity-100 md:text-5xl"
							level={5}
						>
							Fellow Stagg
						</Heading>
					</div>

					<div className="absolute group-hover:-translate-y-4 transition-all w-[137.5%] -right-12 -bottom-16">
						<Image
							alt="Fellow Stagg Kettle"
							className="h-full"
							height={320}
							objectFit="contain"
							src="/coffee/kettle.png"
							width={320}
						/>
					</div>
				</div>

				<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="xs">BREWER</Text>
						<Heading
							className="transition-all duration-100 opacity-25 group-hover:opacity-100"
							level={5}
						>
							Hario v60
						</Heading>
					</div>

					<div className="absolute group-hover:rotate-[10deg] group-hover:-translate-y-2 group-hover:-translate-x-6 transition-all w-[90%] -right-4 -bottom-9">
						<Image
							alt="Hario v60"
							className="h-full"
							height={320}
							objectFit="contain"
							src="/coffee/v60.webp"
							width={320}
						/>
					</div>
				</div>
				<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="xs">BREWER</Text>
						<Heading
							className="transition-all duration-100 opacity-25 group-hover:opacity-100"
							level={5}
						>
							Aeropress
						</Heading>
					</div>

					<div className="absolute group-hover:rotate-[15deg] group-hover:translate-y-2 transition-all w-full rotate-[30deg] -right-8 -bottom-6">
						<Image
							alt="Aeropress"
							className="h-full"
							height={320}
							objectFit="contain"
							src="/coffee/aeropress.png"
							width={320}
						/>
					</div>
				</div>
				<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
					<div className="transition-all duration-100 group-hover:translate-x-1">
						<Text size="xs">SCALE</Text>
						<Heading
							className="transition-all duration-100 opacity-25 group-hover:opacity-100"
							level={5}
						>
							Rhino Dosing Scale
						</Heading>
					</div>

					<div className="absolute group-hover:translate-y-2 transition-all w-[120%] -right-12 -bottom-16 scale-x-[-1]">
						<Image
							alt="Rhinow Dosing Scale"
							className="h-full"
							height={320}
							objectFit="contain"
							src="/coffee/scale.png"
							width={320}
						/>
					</div>
				</div>
			</div>

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

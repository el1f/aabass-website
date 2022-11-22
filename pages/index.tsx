import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { PosterThumbnail } from "../components/PosterThumbnail";
import { Text, TextProps } from "../components/Text";
import { SOCIALS } from "../data/socials";
import { POSTERS } from "../data/posters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import Footer from "../components/Footer";
import { Anchor } from "../components/Anchor";
import { Strong } from "../components/Strong";

const Home: NextPage = () => {
	const { t, i18n } = useTranslation("common");

	return (
		<>
			<Navbar isExtended={false} socials={SOCIALS} />

			<section className="container max-w-2xl px-4 py-32 mx-auto">
				<hgroup className="max-w-xl mb-6">
					<Heading level={1} className="mb-6 leading-none" isDimmed>
						<Trans
							i18nKey="home.hero.title"
							components={{
								strong: <Strong />,
							}}
						/>
					</Heading>
					<Text component="p" className="mb-4">
						<Trans
							i18nKey="home.hero.p1"
							components={{
								strong: <Strong />,
							}}
						/>
					</Text>
					<Text component="p" className="mb-4">
						<Trans
							i18nKey="home.hero.p2"
							components={{
								strong: <Strong />,
							}}
						/>
					</Text>
					<Text component="p">
						<Trans
							i18nKey="home.hero.p3"
							components={{
								strong: <Strong />,
							}}
						/>
					</Text>
				</hgroup>
				<div className="flex gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<a>
							<Button>{t("home.hero.cta1")}</Button>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<Button isText isOutlined>
								{t("home.hero.about")}
							</Button>
						</a>
					</Link>
				</div>
			</section>

			<section className="px-4 py-32">
				<div className="container max-w-2xl mx-auto">
					<Heading id="playbook" level={2} className="mb-4">
						{t("home.playbook.title")}
					</Heading>
					<Text component="p" className="mb-12">
						{t("home.playbook.description")}
					</Text>

					<div className="flex justify-between mb-4">
						<Heading id="posters" level={3}>
							{t("home.playbook.posters.title")}
						</Heading>
						<Anchor href="/posters">
							{t("home.playbook.posters.showMore")}
						</Anchor>
					</div>
					<Text component="p" className="mb-8">
						{t("home.playbook.posters.description")}
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] md:-mx-4 pb-8">
					{POSTERS.filter(({ format }) => format === "poster").map((poster) => (
						<PosterThumbnail
							key={poster.title}
							title={poster.title}
							src={`/posters/${poster.thumbnail}`}
							description={poster.description}
							className="flex-shrink-0 w-64"
						/>
					))}
				</div>
			</section>

			<section className="container max-w-2xl px-4 py-32 mx-auto">
				<Heading id="personal" level={2} className="mb-4">
					{t("home.personal.title")}
				</Heading>
				<Text component="p" className="mb-12">
					<Trans
						i18nKey="home.personal.description"
						components={{
							strong: <Strong />,
						}}
					/>
				</Text>

				<div className="flex justify-between mb-4">
					<Heading id="coffee" level={3}>
						{t("home.personal.coffee.title")}
					</Heading>
					<Anchor href="/">{t("home.personal.coffee.showMore")}</Anchor>
				</div>
				<Text component="p" className="mb-8">
					{t("home.personal.coffee.description")}
				</Text>
			</section>

			<section className="container max-w-2xl px-4 mx-auto">
				<Heading level={2} className="mb-4">
					{t("home.footer.title")}
				</Heading>
				<Text component="p" className="mb-24">
					<Trans
						i18nKey="home.footer.description"
						components={{
							strong: <Strong />,
						}}
					/>
				</Text>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default Home;

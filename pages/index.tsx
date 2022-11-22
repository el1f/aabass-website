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
import { POSTERS, SOCIALS } from "../data";

const Home: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("home.pageTitle")}</title>
			</Head>

			<Navbar isExtended={false} socials={SOCIALS} />

			<section className="container max-w-2xl px-4 py-32 mx-auto">
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
								strong: <Strong />,
							}}
							i18nKey="home.hero.p3"
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
							<Button isOutlined isText>
								{t("home.hero.about")}
							</Button>
						</a>
					</Link>
				</div>
			</section>

			<section className="px-4 py-32">
				<div className="container max-w-2xl mx-auto">
					<Heading className="mb-4" id="playbook" level={2}>
						{t("home.playbook.title")}
					</Heading>
					<Text className="mb-12" component="p">
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
					<Text className="mb-8" component="p">
						{t("home.playbook.posters.description")}
					</Text>
				</div>
				<div className="flex gap-8 overflow-x-scroll flex-nowrap md:px-[calc(50vw-21rem)] md:-mx-4 pb-8">
					{POSTERS.filter(({ format }) => format === "poster").map((poster) => (
						<PosterThumbnail
							className="flex-shrink-0 w-64"
							description={poster.description}
							key={poster.title}
							src={`/posters/${poster.thumbnail}`}
							title={poster.title}
						/>
					))}
				</div>
			</section>

			<section className="container max-w-2xl px-4 py-32 mx-auto">
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

				<div className="flex justify-between mb-4">
					<Heading id="coffee" level={3}>
						{t("home.personal.coffee.title")}
					</Heading>
					<Anchor href="/">{t("home.personal.coffee.showMore")}</Anchor>
				</div>
				<Text className="mb-8" component="p">
					{t("home.personal.coffee.description")}
				</Text>
			</section>

			<section className="container max-w-2xl px-4 mx-auto">
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
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default Home;

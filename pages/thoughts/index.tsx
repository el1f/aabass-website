import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, Strong, Text } from "../../components";
import { SOCIALS } from "../../data";
import { getThoughts } from "../../lib/thoughts";

const Thoughts: NextPage<{
	thoughts: any[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("common");
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{t("thoughts.pageTitle")}</title>
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

			<Navbar socials={SOCIALS} />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("thoughts.title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text className="mb-6" component="div">
					<Trans
						components={{
							hr: <hr className="my-1 opacity-0" />,
							strong: <Strong />,
						}}
						i18nKey="thoughts.body"
					/>
				</Text>
			</header>

			<section className="container max-w-2xl px-4 mx-auto mb-48">
				{thoughts.map(
					({ data: { category, date, description, title }, slug }) => (
						<Link href={`/thoughts/${slug}`} key={slug}>
							<a>
								<article className="group">
									<Text size="xs">{`${category} • ${date}`}</Text>
									<Heading
										className="mb-2 bg-no-repeat group-hover:text-primaryShade group-hover:underline"
										level={3}
									>
										{title}
									</Heading>
									<Text component="p">{description}</Text>
								</article>
							</a>
						</Link>
					),
				)}
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const thoughts = getThoughts();

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"changelog",
			])),
			thoughts,
		},
	};
};

export default Thoughts;

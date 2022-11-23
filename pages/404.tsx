import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Button, Footer, Heading, Navbar, Strong, Text } from "../components";
import { SOCIALS } from "../data";
import * as ga from "../lib/ga";

const NotFound: NextPage = () => {
	const { t } = useTranslation("common");
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{t("404.pageTitle")}</title>
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

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("404.title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text className="mb-6" component="div">
					<Trans
						components={{
							hr: <hr className="my-1 opacity-0" />,
							strong: <Strong />,
						}}
						i18nKey="404.body"
					/>
				</Text>
				<div className="flex gap-4 dark:gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<a>
							<Button
								onClick={() => {
									ga.contactPress(router.route);
								}}
							>
								Ask about this page
							</Button>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<Button isOutlined isText>
								{t("common.about")}
							</Button>
						</a>
					</Link>
				</div>
			</header>

			<section className="container max-w-5xl px-4 mx-auto mb-48"></section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common", "changelog"])),
	},
});

export default NotFound;

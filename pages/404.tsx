import { GetStaticProps, NextPage } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Navbar } from "../components/Navbar";
import { PosterThumbnail } from "../components/PosterThumbnail";
import { Text } from "../components/Text";
import { SOCIALS } from "../data/socials";
import Image from "next/image";
import { Strong } from "../components/Strong";
import Head from "next/head";
import { Button } from "../components/Button";
import Link from "next/link";

const NotFound: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("404.pageTitle")}</title>
			</Head>

			<Navbar isExtended={false} socials={SOCIALS} />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Heading level={1} className="mb-4">
					{t("404.title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text component="div" className="mb-6">
					<Trans
						i18nKey="404.body"
						components={{
							strong: <Strong />,
							hr: <hr className="my-1 opacity-0" />,
						}}
					/>
				</Text>
				<div className="flex gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<a>
							<Button>Ask about this page</Button>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<Button isText isOutlined>
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
		...(await serverSideTranslations(locale ?? "en", ["common"])),
	},
});

export default NotFound;

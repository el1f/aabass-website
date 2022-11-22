import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, Text } from "../components";
import { CHANGELOG, SOCIALS } from "../data";

const Changelog = () => {
	const { t } = useTranslation(["common", "changelog"]);

	return (
		<>
			<Head>
				<title>{t("changelog.pageTitle")}</title>
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

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto">
				<Text size="md">{t("changelog.lead")}</Text>
				<Heading className="mb-4" level={1}>
					{t("changelog.title")}
				</Heading>
			</header>

			<section className="container max-w-2xl px-6 mx-auto mb-48">
				{CHANGELOG.map(({ date, features, version }) => (
					<article className="my-16" key={version}>
						<div className="flex items-end mb-2">
							<Heading id={version.replaceAll(".", "_")} level={2}>
								{t(`changelog:${version}.summary`)}
							</Heading>
							<code className="flex-shrink-0 inline-block w-16 py-1 ml-2 -mb-[3px] text-xs leading-none font-mono tracking-wider text-center -translate-y-1 border rounded-md bg-bgRaisedDark border-white/5">
								v{version}
							</code>
						</div>
						<Text>{t(`changelog:${version}.description`)}</Text>
						<div className="flex flex-col gap-4 py-8">
							{features.map((feature, i) => (
								<div className="flex items-start gap-4" key={i}>
									<code className="flex-shrink-0 inline-block w-16 py-1 text-sm leading-none tracking-wider text-center border rounded-md bg-bgRaisedDark border-white/5">
										{feature.type.toUpperCase()}
									</code>
									<div className="flex flex-col">
										<Text className="mt-[1px]" size="sm">
											{t(`changelog:${version}.features.${i}`)}
										</Text>
										<Text className="font-mono text-xs font-bold opacity-50">
											{new Date(date).toLocaleDateString()}
										</Text>
									</div>
								</div>
							))}
						</div>
					</article>
				))}
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

export default Changelog;

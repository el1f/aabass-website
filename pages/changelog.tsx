import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { CodeChip, Footer, Heading, Navbar, Text } from "../components";
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
							<CodeChip className="-translate-y-[1px] ml-2 px-2">
								v{version}
							</CodeChip>
						</div>
						<Text>{t(`changelog:${version}.description`)}</Text>
						<div className="flex flex-col gap-4 py-8">
							{features.map((feature, i) => (
								<div className="flex items-start gap-4" key={i}>
									<CodeChip className="flex-shrink-0 w-16 text-sm tracking-wide text-center">
										{feature.type.toUpperCase()}
									</CodeChip>
									<div className="flex flex-col">
										<Text size="sm">
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

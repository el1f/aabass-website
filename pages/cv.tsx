import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, Text } from "../components";
import { SOCIALS } from "../data";

const ContactLink: React.FC<{
	href: string;
	label: string;
	value: string;
}> = ({ href, label, value }) => (
	<a href={href}>
		<div className="flex flex-col px-3 py-2 -mx-3 -my-2 transition-all border border-transparent border-solid rounded-lg cursor-pointer group hover:border-textDimmedLight/10 hover:bg-bgRaisedDark">
			<Text className="transition-all group-hover:translate-x-1" size="sm">
				<strong className="dark:text-textLight text-textDark group-hover:text-primaryShade">
					{label}
				</strong>
			</Text>
			<Text className="transition-all group-hover:translate-x-2">{value}</Text>
		</div>
	</a>
);

const Curriculum: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Head>
				<title>{t("cv.pageTitle")}</title>
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

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto print:hidden">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("cv.title")}
				</Heading>
			</header>

			<div className="container grid max-w-4xl px-6 mx-auto mb-48 gap-x-10 md:gap-x-32 sm:gap-y-16 gap-y-4 xs:grid-cols-1 sm:grid-cols-cv print:grid-cols-cv print:pt-16">
				<div className="flex flex-col gap-2 print:pb-12">
					<Heading level={2}>{t("common.fullName")}</Heading>
					<Text>{t("common.professionalRole")}</Text>
				</div>
				<Text>{t("cv.document.introduction")}</Text>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv.document.dev.title")}
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{(
						t("cv.document.dev.skills", { returnObjects: true }) as string[]
					).map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv.document.des.title")}
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{(
						t("cv.document.des.skills", { returnObjects: true }) as string[]
					).map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					Work experience
				</Heading>
				<div className="flex flex-col gap-4">
					{t<
						string,
						{
							company: string;
							location: string;
							period: string;
							role: string;
							tasks: string[];
						}[]
					>("cv.document.experience.items", { returnObjects: true }).map(
						(job) => (
							<div className="flex flex-col gap-1" key={job.company}>
								<Text className="leading-none" size="sm">
									<strong className="dark:text-textLight text-textDark">
										{job.period} / {job.location}
									</strong>
								</Text>
								<Text>{`${job.role}${
									job.company ? ` @${job.company}` : ""
								}`}</Text>
							</div>
						),
					)}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv.document.contacts.title")}
				</Heading>
				<div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-4">
					<ContactLink
						href="mailto:ayoub@aabass.net"
						label={t("cv.document.contacts.email.title")}
						value={t("cv.document.contacts.email.value")}
					/>
					<ContactLink
						href={`tel:${t("cv.document.contacts.phone.value")}`}
						label={t("cv.document.contacts.phone.title")}
						value={t("cv.document.contacts.phone.value")}
					/>
					<ContactLink
						href={`https://${t("cv.document.contacts.web.value")}`}
						label={t("cv.document.contacts.web.title")}
						value={t("cv.document.contacts.web.value")}
					/>
					<ContactLink
						href={`https://${t("cv.document.contacts.github.value")}`}
						label={t("cv.document.contacts.github.title")}
						value={t("cv.document.contacts.github.value")}
					/>
					<ContactLink
						href={`https://${t("cv.document.contacts.dribbble.value")}`}
						label={t("cv.document.contacts.dribbble.title")}
						value={t("cv.document.contacts.dribbble.value")}
					/>
					<ContactLink
						href={`https://${t("cv.document.contacts.instagram.value")}`}
						label={t("cv.document.contacts.instagram.title")}
						value={t("cv.document.contacts.instagram.value")}
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", ["common", "changelog"])),
	},
});

export default Curriculum;

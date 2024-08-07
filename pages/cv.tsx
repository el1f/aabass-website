import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ContactLink, Footer, Heading, Navbar, Seo, Text } from "../components";

const Curriculum: NextPage = () => {
	const { t } = useTranslation(["common", "cv"]);

	return (
		<>
			<Seo title={t("cv:pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto print:hidden">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("cv:title")}
				</Heading>
			</header>

			<div className="container grid max-w-4xl px-6 mx-auto mb-48 gap-x-10 md:gap-x-32 sm:gap-y-16 gap-y-4 xs:grid-cols-1 sm:grid-cols-cv print:grid-cols-cv print:pt-16">
				<div className="flex flex-col gap-2 print:pb-12">
					<Heading level={3}>{t("common:fullName")}</Heading>
					<Text>{t("common:professionalRole")}</Text>
				</div>
				<Text>{t("cv:document.introduction")}</Text>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv:document.dev.title")}
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{(
						t("cv:document.dev.skills", { returnObjects: true }) as string[]
					).map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv:document.des.title")}
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{(
						t("cv:document.des.skills", { returnObjects: true }) as string[]
					).map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					Work experience
				</Heading>
				<div className="flex flex-col gap-4">
					{(
						t("cv:document.experience.items", { returnObjects: true }) as {
							company: string;
							location: string;
							period: string;
							role: string;
							tasks: string[];
						}[]
					).map((job) => (
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
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					{t("cv:document.contacts.title")}
				</Heading>
				<div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-4">
					<ContactLink
						href="mailto:ayoub@aabass.net"
						label={t("cv:document.contacts.email.title")}
						value={t("cv:document.contacts.email.value")}
					/>
					<ContactLink
						href={`tel:${t("cv:document.contacts.phone.value")}`}
						label={t("cv:document.contacts.phone.title")}
						value={t("cv:document.contacts.phone.value")}
					/>
					<ContactLink
						href={`https://${t("cv:document.contacts.web.value")}`}
						label={t("cv:document.contacts.web.title")}
						value={t("cv:document.contacts.web.value")}
					/>
					<ContactLink
						href={`https://${t("cv:document.contacts.github.value")}`}
						label={t("cv:document.contacts.github.title")}
						value={t("cv:document.contacts.github.value")}
					/>
					<ContactLink
						href={`https://${t("cv:document.contacts.dribbble.value")}`}
						label={t("cv:document.contacts.dribbble.title")}
						value={t("cv:document.contacts.dribbble.value")}
					/>
					<ContactLink
						href={`https://${t("cv:document.contacts.instagram.value")}`}
						label={t("cv:document.contacts.instagram.title")}
						value={t("cv:document.contacts.instagram.value")}
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			"common",
			"cv",
			"changelog",
		])),
	},
});

export default Curriculum;

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { Footer, Heading, Navbar, Text } from "../components";
import { SOCIALS } from "../data";

const NotFound: NextPage = () => {
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

			<header className="container max-w-2xl px-4 pt-32 pb-16 mx-auto">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("cv.title")}
				</Heading>
			</header>

			<div className="container grid max-w-4xl px-4 mx-auto gap-x-32 gap-y-16 grid-cols-cv">
				<div className="flex flex-col gap-2">
					<Heading level={2}>Ayoub Aabass</Heading>
					<Text>Full-stack developer and designer</Text>
				</div>
				<Text>
					Hey there! My name is Ayoub and I am a full-stack software developer
					and designer. I focus on conceptualizing and creating powerful and
					intuitive user interfaces to enable organizations and individuals to
					solve complex problems through digital tools.
				</Text>

				<Heading level={5}>Current dev knowledge</Heading>
				<div className="grid grid-cols-3 gap-2">
					<Text>HTML</Text>
					<Text>CSS</Text>
					<Text>Typescript</Text>
					<Text>React</Text>
					<Text>Next.JS</Text>
					<Text>Vue</Text>
					<Text>Redux</Text>
					<Text>REST</Text>
					<Text>GraphQL</Text>
					<Text>Relay </Text>
					<Text>Apollo</Text>
					<Text>Node.JS</Text>
					<Text>Java</Text>
					<Text>Android</Text>
					<Text>MySQL</Text>
					<Text>MongoDB</Text>
					<Text>Firebase</Text>
					<Text>Google GCP</Text>
					<Text>Amazon AWS</Text>
					<Text>Git</Text>
					<Text>GitHub Actions</Text>
				</div>

				<Heading level={5}>Current design knowledge</Heading>
				<div className="grid grid-cols-3 gap-2">
					<Text>Adobe Photoshop</Text>
					<Text>Adobe Illustrator</Text>
					<Text>Adobe InDesign</Text>
					<Text>Affinity Designer</Text>
					<Text>Affinity Photo</Text>
					<Text>Affinity Publisher</Text>
					<Text>Sketch</Text>
					<Text>Figma</Text>
					<Text>Framer</Text>
				</div>

				<Heading level={5}>Work experience</Heading>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								2015 - Now / Padova - IT
							</strong>
						</Text>
						<Text>Freelance full-stack developer and designer</Text>
					</div>
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								2020 - Now / Padova - IT
							</strong>
						</Text>
						<Text>Full-stack developer and designer @E-Fashion Software</Text>
					</div>
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								2018 - 2019 / London - UK
							</strong>
						</Text>
						<Text>
							Full-stack developer and design consultant @Hackpartners
						</Text>
					</div>
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								2016 - 2018 / Padova - IT
							</strong>
						</Text>
						<Text>Full-stack developer and designer @Aterrae</Text>
					</div>
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight">
								2015 text-textDark/ Treviso - IT
							</strong>
						</Text>
						<Text>Full-stack developer and designer @H-Farm</Text>
					</div>
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight">
								2014 text-textDark/ Treviso - IT
							</strong>
						</Text>
						<Text>Front-end developer @Antlos</Text>
					</div>
				</div>

				<Heading level={5}>Education</Heading>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								2020 - Now
							</strong>
						</Text>
						<Text>Computer Engineering @UNIPD</Text>
					</div>
				</div>

				<Heading level={5}>Contacts</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-4">
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								Email
							</strong>
						</Text>
						<Text>ayoub@aabass.net</Text>
					</div>
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								Phone
							</strong>
						</Text>
						<Text>+39 3479283096</Text>
					</div>
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								Website
							</strong>
						</Text>
						<Text>ayoub.aabass.net</Text>
					</div>
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								GitHub
							</strong>
						</Text>
						<Text>github.com/el1f</Text>
					</div>
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								Dribbble
							</strong>
						</Text>
						<Text>dribbble.com/el1flem</Text>
					</div>
					<div className="flex flex-col">
						<Text size="sm">
							<strong className="dark:text-textLight text-textDark">
								Instagram
							</strong>
						</Text>
						<Text>instagram.com/aabassayoub</Text>
					</div>
				</div>
			</div>

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

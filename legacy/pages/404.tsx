import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
	Button,
	Footer,
	Heading,
	Navbar,
	Seo,
	Text,
	Trans,
} from "../components";
import * as ga from "../lib/ga";

const NotFound: NextPage = () => {
	const { t } = useTranslation(["common", "404"]);
	const router = useRouter();

	return (
		<>
			<Seo title={t("404:pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Heading className="mb-4 leading-snug" level={1}>
					{t("404:title")}
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text as="div" className="mb-6">
					<Trans i18nKey="404:body" />
				</Text>
				<div className="flex gap-4 dark:gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<Button
							onClick={() => {
								ga.contactPress(router.route);
							}}
						>
							{t("404:cta")}
						</Button>
					</Link>
					<Link href="/about">
						<Button variant="outline">{t("common:about")}</Button>
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
		...(await serverSideTranslations(locale ?? "en", [
			"common",
			"404",
			"changelog",
		])),
	},
});

export default NotFound;

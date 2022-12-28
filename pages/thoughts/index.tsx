import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
	Footer,
	Heading,
	Navbar,
	Seo,
	Text,
	ThoughtCard,
	Trans,
} from "../../components";
import { getThoughts } from "../../lib/thoughts";
import { Thought } from "../../types";

const Thoughts: NextPage<{
	thoughts: Thought[];
}> = ({ thoughts }) => {
	const { t } = useTranslation("thoughts");

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto md:px-6">
				<Heading className="mb-4 leading-snug md:leading-snug" level={1}>
					{t("title")}
				</Heading>
				<Text as="div" className="mb-6">
					<Trans i18nKey="thoughts:body" />
				</Text>
			</header>

			<section className="container max-w-2xl px-4 mx-auto mb-48 md:px-6">
				{thoughts.map(({ data, slug }) => (
					<Link href={`/thoughts/${slug}`} key={slug}>
						<a>
							<ThoughtCard data={data} />
						</a>
					</Link>
				))}
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const thoughts = getThoughts();

	return {
		props: {
			...(await serverSideTranslations(locale as string, [
				"common",
				"thoughts",
				"changelog",
			])),
			thoughts,
		},
	};
};

export default Thoughts;

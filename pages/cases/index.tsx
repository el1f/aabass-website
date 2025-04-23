import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";

import {
	Footer,
	Heading,
	Navbar,
	Poll,
	Seo,
	Text,
	Trans,
} from "../../components";
import { clientSetup } from "../../graphql";
import { usePoll } from "../../lib/hooks";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

const CaseStudies: NextPage = () => {
	const { i18n, t } = useTranslation("cases");

	const [pollData, pollVote, onVote] = usePoll("CASE_STUDIES");

	return (
		<>
			<Seo title={t("pageTitle")} />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto">
				<Heading className="mb-4 leading-tight" level={1}>
					{t("header.title")}
				</Heading>
				<Text>
					<Trans i18nKey="cases:header.description" />
				</Text>
			</header>

			<section className="container max-w-5xl px-6 pt-8 pb-16 mx-auto mb-32">
				<div className="flex flex-col items-center justify-center px-8 py-16 bg-bgRaised rounded-3xl">
					{/* Folder */}
					<motion.figure
						className="relative w-2/5 mb-8 isolate"
						style={{
							perspectiveOrigin: "50% -50%",
							perspective: 2000,
							transformStyle: "preserve-3d",
						}}
					>
						{/* Back sheet */}
						<motion.div
							style={{
								transformOrigin: "0 100%",
								rotateX: 20,
							}}
						>
							<div
								className={cn(
									"w-2/5 h-8 rounded-t-md bg-primary-500 border border-b-0 -bottom-px border-primary-600 z-10 relative",
								)}
							/>
							<div className="w-full bg-primary-500 rounded-b-lg rounded-tr-lg aspect-[16/10] border-primary-600 border" />
						</motion.div>
						{/* Content */}
						<div className="z-10">
							<motion.div
								style={{
									rotateX: 15,
									rotateZ: 20,
									x: 16,
									y: -16,
								}}
								id="document"
								className="absolute h-[90%] bg-zinc-200 rounded-xs bottom-2 right-2 aspect-poster"
							/>
							<motion.div
								id="palette"
								className="absolute h-[90%] aspect-[1/3] bg-zinc-100 rounded-sm bottom-2 -left-4 flex flex-col p-1 gap-1"
								style={{
									rotateX: 30,
									rotateZ: -30,
									scale: 0.85,
								}}
							>
								<div className="h-full border-t border-l rounded bg-primary-300 border-primary-400/20" />
								<div className="h-full border-t border-l rounded bg-primary-400 border-primary-500/10" />
								<div className="h-full rounded bg-primary-600" />
								<div className="h-full rounded bg-primary-800" />
							</motion.div>
							<motion.div
								id="site"
								className="absolute flex w-2/3 gap-0.5 bg-alloyZinc-800 aspect-sweet rounded-xs bottom-6 left-10"
								style={{
									rotateX: 0,
									rotateZ: -5,
								}}
							>
								<aside className="flex flex-col items-start w-1/4 gap-2 p-2">
									<div className="flex gap-1">
										<div className="w-2 h-2 rounded-full bg-alloyZinc-700" />
										<div className="w-2 h-2 rounded-full bg-alloyZinc-700" />
										<div className="w-2 h-2 rounded-full bg-alloyZinc-700" />
									</div>
									<div className="flex flex-col w-full gap-1">
										<div className="w-full h-2 rounded-full bg-alloyZinc-700" />
										<div className="w-3/4 h-2 rounded-full bg-alloyZinc-700" />
										<div className="w-4/5 h-2 rounded-full bg-alloyZinc-700" />
									</div>
								</aside>
								<div className="flex-1 w-full h-full p-1">
									<div className="w-full h-full border rounded border-alloyZinc-600"></div>
								</div>
							</motion.div>
						</div>
						{/* Front sheet */}
						<motion.div
							style={{
								transformOrigin: "0 100%",
								rotateX: -20,
							}}
							className="absolute bottom-0 z-20 w-full border rounded-t-sm rounded-b-lg shadow-2xl border-white/40 bg-white/50 aspect-video backdrop-blur-md"
						>
							<div className="absolute h-1 rounded-full shadow bg-white/50 bottom-9 right-6 left-1/2 shadow-black/5" />
							<div className="absolute h-1 rounded-full shadow bg-white/50 bottom-6 right-6 left-6 shadow-black/5" />
						</motion.div>
					</motion.figure>

					<div className="flex flex-col max-w-xl gap-2 mx-auto text-center">
						<Heading level={3}>{t("wip.title")}</Heading>
						<Text>{t("wip.body")}</Text>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", [
			"common",
			"cases",
			"changelog",
		])),
	},
});

export default withUrqlClient((_ssrExchange) => clientSetup)(CaseStudies);

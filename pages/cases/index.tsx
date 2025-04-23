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

const FolderBackSheet = () => (
	<motion.div
		style={{
			transformOrigin: "0 100%",
			rotateX: 10,
		}}
	>
		<div
			className={cn(
				"w-2/5 h-8 rounded-t-md bg-primary-500 border border-b-0 -bottom-px dark:border-primary-700 border-primary-600 z-10 relative",
			)}
		/>
		<div className="w-full from-primary-500 via-primary-500 to-primary-600 bg-gradient-to-br rounded-b-lg rounded-tr-lg aspect-[16/10] dark:border-primary-700 border-primary-600 border" />
	</motion.div>
);

const FolderFrontSheet = () => (
	<motion.div
		className="absolute bottom-0 w-full"
		style={{
			transformOrigin: "0 100%",
			rotateX: -30,
		}}
	>
		<svg
			viewBox="0 0 24 24"
			className="absolute z-0 -top-6 fill-alloyZinc-700 right-4 -rotate-[30deg] size-20"
		>
			<path d="M13.886 3.872a1 1 0 0 0-1.428-1.4l-8.412 8.582a7 7 0 0 0 9.889 9.911l.009-.009.006-.006.02-.021 7.745-7.93a1 1 0 1 0-1.43-1.398l-7.76 7.946a5 5 0 0 1-7.06-7.083z" />
		</svg>

		<motion.div className="z-20 w-full border-t-2 rounded-t-lg rounded-b-lg shadow-2xl border-white/60 bg-white/50 aspect-video backdrop-blur-md">
			<div className="absolute h-1 rounded-full shadow bg-white/50 bottom-8 right-3 left-3 shadow-black/5" />
			<div className="absolute h-1 rounded-full shadow bg-white/50 bottom-5 right-3 left-3 shadow-black/5" />
		</motion.div>

		<div className="absolute top-0 flex items-end justify-start w-1/3 p-3 bg-yellow-400 border-t border-l border-yellow-500 shadow-sm rounded-xs right-4 rotate-6 aspect-square">
			<Text className="text-black dark:text-black/50">Sort me</Text>
		</div>

		<svg
			viewBox="0 0 24 24"
			className="absolute z-30 stroke-2 -top-6 right-4 -rotate-[30deg] size-20 stroke-alloyZinc-700 fill-none"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m16 6-8.414 8.586a2 2 0 0 0 2.828 2.828l8.414-8.586a4 4 0 0 0-5.656-5.656L12 4.344"
			/>
		</svg>
	</motion.div>
);

const FolderDocument = () => (
	<motion.div
		style={{
			rotateY: -20,
			rotateX: 30,
			rotateZ: 20,
		}}
		id="document"
		className="absolute h-[90%] bg-alloyZinc-100 rounded-xs bottom-5 right-0 aspect-poster shadow-xl grid-cols-5 grid-rows-8 grid p-2 gap-1 border border-alloyZinc-200/50"
	>
		<div className="w-full h-full col-span-2 row-span-2 rounded bg-alloyZinc-200"></div>
		<div className="flex flex-col w-full h-full col-span-3 gap-1 rounded">
			<div className="w-full h-full rounded bg-alloyZinc-200" />
			<div className="w-2/3 h-full rounded bg-alloyZinc-200" />
		</div>
		<div className="flex flex-col w-full h-full col-span-3 row-span-2 gap-1 pb-2 rounded">
			<div className="w-full h-full rounded bg-alloyZinc-200" />
			<div className="w-2/3 h-full rounded bg-alloyZinc-200" />
			<div className="w-full h-full rounded bg-alloyZinc-200" />
			<div className="w-3/5 h-full rounded bg-alloyZinc-200" />
			<div className="w-full h-full rounded bg-alloyZinc-200" />
			<div className="w-2/3 h-full rounded bg-alloyZinc-200" />
		</div>
		<div className="w-full h-full col-span-3 row-span-2 rounded bg-alloyZinc-200"></div>
		<div className="w-full h-full col-span-2 row-span-3 rounded bg-alloyZinc-200"></div>
	</motion.div>
);

const FolderPalette = () => (
	<motion.div
		id="palette"
		className="absolute h-[90%] aspect-[2/7] bg-alloyZinc-50 border-alloyZinc-200 border rounded-sm bottom-14 left-1/2 flex flex-col p-1 gap-1 shadow-xl"
		style={{
			rotateZ: 5,
		}}
	>
		<div className="h-full border rounded bg-primary-300 border-primary-900/5" />
		<div className="h-full border rounded bg-primary-400 border-primary-900/5" />
		<div className="h-full border rounded bg-primary-600 border-primary-900/10" />
		<div className="h-full border rounded bg-primary-800 border-primary-900/10" />
	</motion.div>
);

const FolderSite = () => (
	<motion.div
		id="site"
		className="absolute flex w-2/3 gap-0.5 bg-alloyZinc-800 border border-alloyZinc-900/25 aspect-sweet rounded-sm bottom-6 -left-3"
		style={{
			rotateX: 0,
			rotateZ: -10,
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
);

const Folder = () => (
	<motion.figure
		className="relative w-full mb-8 select-none max-w-80 sm:w-1/2 md:w-2/5 isolate"
		style={{
			perspectiveOrigin: "0% -0%",
			perspective: 900,
			transformStyle: "preserve-3d",
		}}
	>
		<FolderBackSheet />
		<motion.div className="z-10">
			<FolderDocument />
			<FolderPalette />
			<FolderSite />
		</motion.div>
		<FolderFrontSheet />
	</motion.figure>
);

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
					<Folder />

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

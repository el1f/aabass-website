import { GetStaticProps } from "next";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";

import {
	Anchor,
	CodeChip,
	Footer,
	Heading,
	Navbar,
	Seo,
	Text,
} from "../components";
import { CHANGELOG } from "../data";

const CHANGELOG_EASTER_EGGS: Record<
	string,
	{ content: React.ReactElement; type: "append" }
> = {
	"1.1.0_2": {
		content: (
			<Image
				alt="Pulp fiction scene easter egg"
				className="w-full"
				height={180}
				layout="responsive"
				src="/easter-eggs/english.gif"
				width={320}
			/>
		),
		type: "append",
	},
};

const Changelog = () => {
	const { t } = useTranslation(["common", "changelog"]);
	const [activeEasterEgg, setActiveEasterEgg] = useState<string | undefined>();
	const selectedEasterEgg = CHANGELOG_EASTER_EGGS[activeEasterEgg ?? ""];

	return (
		<>
			<Seo title={t("changelog.pageTitle")} />

			<Navbar />

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
							{features.map((feature, i) => {
								const featureIndex = `${version}_${i}`;
								const changelog = selectedEasterEgg &&
									activeEasterEgg === featureIndex && (
										<div className="py-4">{selectedEasterEgg.content}</div>
									);

								return (
									<>
										<div
											className={`flex items-start gap-4 ${
												CHANGELOG_EASTER_EGGS[featureIndex]
													? "cursor-pointer"
													: ""
											}`}
											key={featureIndex}
											onClick={() => setActiveEasterEgg(featureIndex)}
										>
											<CodeChip className="flex-shrink-0 w-16 text-sm tracking-wide text-center">
												{feature.type.toUpperCase()}
											</CodeChip>
											<div className="flex flex-col">
												<Text size="sm">
													{t(`changelog:${version}.features.${i}`)}
													{feature.ideaId && (
														<span className="mx-2">
															<Anchor href={`/ideas#${feature.ideaId}`}>
																💡
															</Anchor>
														</span>
													)}
												</Text>
												<div className="flex gap-4">
													<Text
														className="font-mono font-bold opacity-50"
														size="xs"
													>
														{date || feature.date
															? new Date(
																	date || feature.date || "",
															  ).toLocaleDateString()
															: "INDEV"}
													</Text>
												</div>
												{changelog}
											</div>
										</div>
									</>
								);
							})}
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
		...(await serverSideTranslations(locale as string, [
			"common",
			"changelog",
		])),
	},
});

export default Changelog;

"use client";

import Image from "next/legacy/image";
import React, { useState } from "react";

import {
	CodeChip,
	Footer,
	Heading,
	Navbar,
	Text,
} from "../../components";
import { CHANGELOG } from "../../data";

const CHANGELOG_EASTER_EGGS: Record<
	string,
	{ content: React.ReactElement<any>; type: "append" }
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
	const [activeEasterEgg, setActiveEasterEgg] = useState<string | undefined>();
	const selectedEasterEgg = CHANGELOG_EASTER_EGGS[activeEasterEgg ?? ""];

	return (
		<>
			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto">
				<Text size="md">What have I been working on</Text>
				<Heading className="mb-4" level={1}>
					Changelog
				</Heading>
			</header>

			<section className="container max-w-2xl px-6 mx-auto mb-48">
				{CHANGELOG.map(({ date, description, features, summary, version }) => (
					<article className="my-16" key={version}>
						<div className="flex items-end mb-2">
							<Heading id={version.replaceAll(".", "_")} level={2}>
								{summary}
							</Heading>
							<CodeChip className="-translate-y-[1px] ml-2 px-2">
								v{version}
							</CodeChip>
						</div>
						<Text>{description}</Text>
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
												<Text size="sm">{feature.title}</Text>
												<div className="flex gap-4">
													<Text
														className="font-mono font-bold opacity-50"
														size="xs"
													>
														{date || feature.date
															? new Date(
																	date || feature.date || "",
															  ).toLocaleDateString("en-GB")
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

export default Changelog;

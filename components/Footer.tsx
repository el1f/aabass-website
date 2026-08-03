import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import React from "react";

import { CHANGELOG } from "../data";
import { Anchor, ChangelogSummary, Heading, Icon, Logo, Text } from ".";

export const Footer = () => {
	const { setTheme, resolvedTheme: theme } = useTheme();
	const isDark = theme !== "light";

	return (
		<div className="overflow-hidden print:hidden">
			<footer className="container relative max-w-5xl px-6 pt-8 pb-32 mx-auto">
				<div className="flex flex-col justify-between gap-12 md:flex-row">
					<div className="flex flex-col">
						<div className="mb-2">
							<Logo height={56} isDark={!isDark} isExtended />
						</div>
						<Text size="sm">©️ {new Date().getFullYear()}</Text>

						<div className="flex gap-2 mt-16">
							<Switch
								checked={theme === "dark"}
								className={`group aspect-sweet rounded-2xl border border-textDimmedDark/40 w-full max-w-4xs p-3 flex-col items-start flex hover:bg-bgRaisedLight dark:hover:bg-bgRaisedDark hover:border-textDimmedDark/20 transition-all  flex-shrink-0`}
								onChange={() => setTheme(isDark ? "light" : "dark")}
							>
								<div className="p-2 -mt-2 -ml-2 w-14 rounded-xl bg-textDimmedDark/40 group-hover:bg-textDimmedDark/20 dark:justify-end">
									<div className="transition-all dark:translate-x-4">
										<Icon name={isDark ? "dark" : "light"} />
									</div>
								</div>
								<Text className="mt-auto leading-none text-left" size="xs">
									Switch theme
								</Text>
							</Switch>
						</div>
					</div>

					<div className="flex gap-12">
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>Work things</Heading>
							<Anchor href="/about">About me</Anchor>
							{/* <Anchor href="/cv">Curriculum</Anchor> */}
							<Anchor href="/cases">Case studies</Anchor>
						</div>
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>My corner</Heading>
							<Anchor href="/posters">Posters</Anchor>
						</div>
					</div>

					<ChangelogSummary
						versions={CHANGELOG.map(({ summary, version }) => ({
							summary,
							version,
						}))}
					/>
				</div>
			</footer>
		</div>
	);
};

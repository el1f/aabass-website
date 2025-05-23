import { Switch } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import React from "react";

import { CHANGELOG } from "../data";
import { Anchor, ChangelogSummary, Heading, Icon, Logo, Text } from ".";

export const Footer = () => {
	const router = useRouter();
	const { i18n, t } = useTranslation("common");
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
									{t("footer.changeTheme")}
								</Text>
							</Switch>
							<Link
								className={`aspect-sweet rounded-2xl border border-textDimmedDark/40 w-full max-w-4xs p-3 flex-col flex items-start dark:hover:bg-bgRaisedDark hover:bg-bgRaisedLight hover:border-textDimmedDark/20 transition-all flex-shrink-0`}
								href={router.route}
								locale={i18n.language === "it" ? "en" : "it"}
							>
								<span className="text-2xl leading-none">
									{i18n.language === "it" ? "🇮🇹" : "🌎"}
								</span>
								<Text className="mt-auto leading-none text-left" size="xs">
									{t("footer.changeLang")}
								</Text>
							</Link>
						</div>
					</div>

					<div className="flex gap-12">
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>{t("footer.work.title")}</Heading>
							<Anchor href="/about">{t("about")}</Anchor>
							{/* <Anchor href="/cv">{t("curriculum")}</Anchor> */}
							<Anchor href="/cases">{t("cases")}</Anchor>
						</div>
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>{t("footer.personal.title")}</Heading>
							<Anchor href="/posters">{t("posters")}</Anchor>
							<Anchor href="/coffee">{t("coffee")}</Anchor>
							<Anchor href="/ideas">{t("ideas")}</Anchor>
						</div>
					</div>

					<ChangelogSummary
						versions={CHANGELOG.map(({ version }) => ({
							version,
						}))}
					/>
				</div>
			</footer>
		</div>
	);
};

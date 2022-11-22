import { useTranslation } from "next-i18next";
import React from "react";

import { CHANGELOG } from "../data";
import { Anchor, ChangelogSummary, Heading, Logo, Text } from ".";

export const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<div className="overflow-hidden">
			<footer className="container relative max-w-2xl px-6 pt-8 pb-32 mx-auto">
				<div className="flex flex-col justify-between gap-12 md:flex-row">
					<div>
						<div className="mb-2">
							<Logo isDark={false} isExtended />
						</div>
						<Text size="sm">{t("footer.copyright")}</Text>
					</div>

					<div className="flex gap-12">
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>{t("footer.work.title")}</Heading>
							<Anchor href="/about">{t("common.about")}</Anchor>
							<Anchor href="/cases">{t("common.cases")}</Anchor>
							<Anchor href="/cv">{t("common.curriculum")}</Anchor>
							<Anchor href="/posters">{t("common.posters")}</Anchor>
							<Anchor href="/shop">{t("common.shop")}</Anchor>
						</div>
						<div className="flex flex-col items-start gap-2">
							<Heading level={5}>{t("footer.fun.title")}</Heading>
							<Anchor href="/coffee">{t("common.coffee")}</Anchor>
							<Anchor href="/gaming">{t("common.gaming")}</Anchor>
							<Anchor href="/longboard">{t("common.longboard")}</Anchor>
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

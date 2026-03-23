import Head from "next/head";
import { useTranslation } from "next-i18next";
import React from "react";

interface OpenGraphProps {
	namespace?: string;
	picture?: string;
}

export const OpenGraph: React.FC<OpenGraphProps> = ({
	namespace = "meta",
	picture = "og-image.png",
}) => {
	const { t } = useTranslation();

	// TODO: this component doesn't render. Figure out the reason why later.
	return (
		<Head>
			<meta content="website" property="og:type" />
			<meta content={t(`${namespace}.og.title`)} property="og:title" />
			<meta content={process.env.NEXT_PUBLIC_HOSTNAME} property="og:url" />
			<meta
				content={`${process.env.NEXT_PUBLIC_HOSTNAME}/${picture}`}
				property="og:image"
			/>
			<meta
				content={t(`${namespace}.og.description`)}
				property="og:description"
			/>
		</Head>
	);
};

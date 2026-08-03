import Head from "next/head";
import React from "react";

const DOMAIN = process.env.NEXT_PUBLIC_HOSTNAME;
const DEFAULT_OG_IMAGE = `${process.env.NEXT_PUBLIC_HOSTNAME}/og-image.png`;
const DEFAULT_OG_SITENAME = "Ayoub Aabass";
const DEFAULT_TITLE = "Ayoub Aabass • dev";
const DEFAULT_OG_TITLE = "Ayoub Aabass • Full stack dev and designer";
const DEFAULT_OG_DESCRIPTION =
	"I'm a full-stack web developer that dabbles in a lot of UI and UX design. I've been honing my skills for the better part of the last 8 years and I'm looking for more opportunities to create great products.";

export interface SeoProps {
	description?: string;
	ogDescription?: string;
	ogImage?: string;
	ogTitle?: string;
	ogType?: string;
	siteName?: string;
	title?: string;
	twitterHandle?: string;
	url?: string;
}

export const Seo: React.FC<SeoProps> = (props) => {
	const title = props.title ?? DEFAULT_TITLE;
	const ogType = props.ogType ?? "website";
	const ogTitle = props.ogTitle ?? DEFAULT_OG_TITLE;
	const ogDescription = props.ogDescription ?? DEFAULT_OG_DESCRIPTION;
	const url = props.url ?? DOMAIN;
	const ogImage = props.ogImage ?? DEFAULT_OG_IMAGE;
	const siteName = props.siteName ?? DEFAULT_OG_SITENAME;
	const twitterHandle = props.twitterHandle ?? "@el1flem";

	return (
		<Head>
			<title key="title">{title}</title>
			<meta content={ogDescription} name="description" />
			<meta content={ogType} key="og_type" property="og:type" />
			<meta content={ogTitle} key="og_title" property="og:title" />
			<meta
				content={ogDescription}
				key="og_description"
				property="og:description"
			/>
			<meta content="en_IE" key="og_locale" property="og:locale" />
			<meta content={siteName} key="og_site_name" property="og:site_name" />
			<meta content={url} key="og_url" property="og:url" />
			<meta content={ogImage} key="og_image" property="og:image" />
			<meta content={ogTitle} key="og_image:alt" property="og:image:alt" />
			<meta content="1200" key="og_image:width" property="og:image:width" />
			<meta content="630" key="og_image:height" property="og:image:height" />

			<meta content="index,follow" name="robots" />

			<meta
				content="summary_large_image"
				key="twitter:card"
				name="twitter:card"
			/>
			<meta content={twitterHandle} key="twitter:site" name="twitter:site" />
			<meta
				content={twitterHandle}
				key="twitter:creator"
				name="twitter:creator"
			/>
			<meta content={ogTitle} key="twitter:title" property="twitter:title" />
			<meta
				content={ogDescription}
				key="twitter:description"
				property="twitter:description"
			/>
			<link href={url} rel="url" />

			{/* TODO: add these tags */}
			{/* https://ogp.me/#type_article */}
		</Head>
	);
};

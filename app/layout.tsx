import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import "../styles/globals.css";

import { Providers } from "./providers";

const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME ?? "https://ayoub.aabass.net";

export const metadata: Metadata = {
	description:
		"I'm a full-stack web developer that dabbles in a lot of UI and UX design. I've been honing my skills for the better part of the last 8 years and I'm looking for more opportunities to create great products.",
	icons: {
		apple: "/favicons/apple-touch-icon.png",
		icon: [
			{ sizes: "32x32", type: "image/png", url: "/favicons/favicon-32x32.png" },
			{ sizes: "16x16", type: "image/png", url: "/favicons/favicon-16x16.png" },
		],
		other: [
			{ color: "#000000", rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg" },
		],
		shortcut: "/favicons/favicon.ico",
	},
	manifest: "/favicons/site.webmanifest",
	metadataBase: new URL(HOSTNAME),
	openGraph: {
		description:
			"I'm a full-stack web developer that dabbles in a lot of UI and UX design. I've been honing my skills for the better part of the last 8 years and I'm looking for more opportunities to create great products.",
		images: [{ height: 630, url: "/og-image.png", width: 1200 }],
		locale: "en_IE",
		siteName: "Ayoub Aabass",
		title: "Ayoub Aabass • Full stack dev and designer",
		type: "website",
		url: HOSTNAME,
	},
	other: {
		"msapplication-TileColor": "#000000",
		"msapplication-config": "/favicons/browserconfig.xml",
	},
	robots: "index,follow",
	title: "Ayoub Aabass • dev",
	twitter: {
		card: "summary_large_image",
		creator: "@el1flem",
		site: "@el1flem",
	},
};

export const viewport = {
	themeColor: "#ffffff",
};

const sofiaPro = localFont({
	src: [
		{
			path: "../public/fonts/sofia_pro/sofia_pro_bold.woff",
			style: "normal",
			weight: "700",
		},
		{
			path: "../public/fonts/sofia_pro/sofia_pro_bold_italic.woff",
			style: "italic",
			weight: "700",
		},
		{
			path: "../public/fonts/sofia_pro/sofia_pro_semibold.woff",
			style: "normal",
			weight: "600",
		},
		{
			path: "../public/fonts/sofia_pro/sofia_pro_semibold_italic.woff",
			style: "italic",
			weight: "600",
		},
		{
			path: "../public/fonts/sofia_pro/sofia_pro_regular.woff",
			style: "normal",
			weight: "400",
		},
	],
	variable: "--font-sofia-pro",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});
const jbMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jb-mobo",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const shouldInjectToolbar = process.env.NODE_ENV === "development";

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
        				window.dataLayer = window.dataLayer || [];
        				function gtag(){dataLayer.push(arguments);}
        				gtag('js', new Date());
        				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID}');
    				`}
				</Script>

				<Providers>
					<div
						className={`${sofiaPro.variable} ${spaceGrotesk.variable} ${jbMono.variable}font-sans`}
					>
						{children}
					</div>
				</Providers>

				{shouldInjectToolbar && <VercelToolbar />}

				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;

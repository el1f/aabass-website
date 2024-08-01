import { MDXProvider } from "@mdx-js/react";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "../styles/globals.css";

import { Heading, Strong, Text } from "../components";
import * as ga from "../lib/ga";

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

function MyApp({ Component, pageProps }: AppProps) {
	const shouldInjectToolbar = process.env.NODE_ENV === "development";
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			// track page views
			ga.pageView(url);

			// TODO: move this into a component
			// set the gradient variables
			for (const card of document.getElementsByClassName("hover-gradient")) {
				const safeCard = card as HTMLElement;
				safeCard.onmousemove = (e) => {
					const rect = safeCard.getBoundingClientRect(),
						x = e.clientX - rect.left,
						y = e.clientY - rect.top;

					safeCard.style.setProperty("--mouse-x", `${x}px`);
					safeCard.style.setProperty("--mouse-y", `${y}px`);
				};
			}
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
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

			<MDXProvider
				components={{
					h1: ({ children }) => (
						<Heading className="mb-12" id={children as string} level={1}>
							{children}
						</Heading>
					),
					h2: ({ children }) => (
						<Heading className="mt-12 mb-4" id={children as string} level={2}>
							{children}
						</Heading>
					),
					h3: ({ children }) => (
						<Heading className="mt-12 mb-4" id={children as string} level={3}>
							{children}
						</Heading>
					),
					h4: ({ children }) => (
						<Heading className="mt-12 mb-4" id={children as string} level={4}>
							{children}
						</Heading>
					),
					h5: ({ children }) => (
						<Heading className="mb-6" id={children as string} level={5}>
							{children}
						</Heading>
					),
					h6: ({ children }) => (
						<Heading className="mb-6" id={children as string} level={6}>
							{children}
						</Heading>
					),
					p: ({ children }) => (
						<Text as="p" className="mb-6">
							{children}
						</Text>
					),
					strong: Strong,
				}}
			>
				<ThemeProvider attribute="class">
					<div
						className={`${sofiaPro.variable} ${spaceGrotesk.variable} ${jbMono.variable}font-sans`}
					>
						<Component {...pageProps} />
					</div>
				</ThemeProvider>
			</MDXProvider>

			{shouldInjectToolbar && <VercelToolbar />}

			<Analytics />
		</>
	);
}

export default appWithTranslation(MyApp);

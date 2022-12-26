import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "../styles/globals.css";

import { Heading, Strong, Text } from "../components";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			ga.pageView(url);
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
					<Component {...pageProps} />
				</ThemeProvider>
			</MDXProvider>
		</>
	);
}

export default appWithTranslation(MyApp);

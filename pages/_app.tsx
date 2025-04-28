import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import "../styles/globals.css";

import { Button, Heading, Strong, Text } from "../components";
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
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			}),
	);

	const shouldInjectToolbar = process.env.NODE_ENV === "development";
	const router = useRouter();

	// Devtool state
	const [showGrid, setShowGrid] = useState(false);

	const setHoverGradients = useCallback(() => {
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
	}, []);

	useEffect(() => {
		setHoverGradients();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			// track page views
			ga.pageView(url);

			// TODO: move this into a component
			// set the gradient variables
			setHoverGradients();
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.events]);

	return (
		<QueryClientProvider client={queryClient}>
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

			<ThemeProvider attribute="class">
				<div
					className={`${sofiaPro.variable} ${spaceGrotesk.variable} ${jbMono.variable}font-sans`}
				>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>

			{shouldInjectToolbar && <VercelToolbar />}

			<Analytics />

			{/* Custom Devtools */}
			{shouldInjectToolbar && (
				<div className="fixed flex p-1 -translate-x-1/2 rounded-lg bottom-20 left-1/2 bg-bgRaised">
					<Button
						onClick={() => setShowGrid(!showGrid)}
						size="sm"
						variant="ghost"
					>
						{showGrid ? "Disable" : "Enable"} grid
					</Button>
				</div>
			)}

			<ReactQueryDevtools initialIsOpen={false} />

			{/* Grid */}
			{showGrid && (
				<div className="fixed top-0 left-0 w-full h-screen px-6 pointer-events-none bg-blue-100/10">
					<div className="fixed top-0 w-full h-screen max-w-2xl px-6 -translate-x-1/2 left-1/2 bg-red-400/10">
						<div className="w-full h-full border-dashed border-text opacity-30 border-x" />
					</div>
					<div className="fixed top-0 w-full h-screen max-w-5xl px-6 -translate-x-1/2 left-1/2 bg-red-400/10">
						<div className="w-full h-full border-dashed border-text opacity-30 border-x" />
					</div>
				</div>
			)}
		</QueryClientProvider>
	);
}

export default appWithTranslation(MyApp);

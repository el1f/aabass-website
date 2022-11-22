import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "../styles/globals.css";

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

			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);

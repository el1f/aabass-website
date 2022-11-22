import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
	return (
		<Html>
			<Head>
				<link
					href="/favicons/apple-touch-icon.png"
					rel="apple-touch-icon"
					sizes="180x180"
				/>
				<link
					href="/favicons/favicon-32x32.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/favicons/favicon-16x16.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/>
				<link href="/favicons/site.webmanifest" rel="manifest" />
				<link
					color="#000000"
					href="/favicons/safari-pinned-tab.svg"
					rel="mask-icon"
				/>
				<link href="/favicons/favicon.ico" rel="shortcut icon" />
				<meta content="#000000" name="msapplication-TileColor" />
				<meta
					content="/favicons/browserconfig.xml"
					name="msapplication-config"
				/>
				<meta content="#ffffff" name="theme-color" />
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;

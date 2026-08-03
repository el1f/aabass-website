import withVercelToolbar from "@vercel/toolbar/plugins/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["media.graphassets.com", "i.scdn.co"],
	},
	pageExtensions: ["ts", "tsx", "js", "jsx"],
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			issuer: /\.[jt]sx?$/,
			test: /\.svg$/i,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									active: false,
									name: "cleanupIDs",
								},
								{
									active: false,
									name: "collapseGroups",
								},
							],
						},
					},
				},
			],
		});
		return config;
	},
};

export default withVercelToolbar()(nextConfig);

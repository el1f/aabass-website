import withVercelToolbar from "@vercel/toolbar/plugins/next";

const svgrLoader = {
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
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "i.scdn.co",
				protocol: "https",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "js", "jsx"],
	reactStrictMode: true,
	turbopack: {
		rules: {
			"*.svg": {
				as: "*.js",
				loaders: [svgrLoader],
			},
		},
	},
};

export default withVercelToolbar()(nextConfig);

import withVercelToolbar from "@vercel/toolbar/plugins/next";

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
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							svgoConfig: {
								plugins: [
									{
										name: "preset-default",
										params: {
											overrides: {
												cleanupIds: false,
												collapseGroups: false,
											},
										},
									},
								],
							},
						},
					},
				],
			},
		},
	},
};

export default withVercelToolbar()(nextConfig);

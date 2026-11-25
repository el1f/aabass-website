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
	async redirects() {
		return [
			{ destination: "/", source: "/about", statusCode: 301 },
			{ destination: "/", source: "/cases", statusCode: 301 },
			{ destination: "/", source: "/changelog", statusCode: 301 },
			{ destination: "/", source: "/it", statusCode: 301 },
			{ destination: "/", source: "/it/:path*", statusCode: 301 },
			{ destination: "/", source: "/posters", statusCode: 301 },
		];
	},
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

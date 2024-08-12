import nextMDX from "@next/mdx";
import withVercelToolbar from "@vercel/toolbar/plugins/next";
import remarkFrontmatter from "remark-frontmatter";

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		rehypePlugins: [],
		remarkPlugins: [remarkFrontmatter],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	images: {
		domains: ["media.graphassets.com", "i.scdn.co"],
	},
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: true,
	swcMinify: true,
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

export default withVercelToolbar()(withMDX(nextConfig));

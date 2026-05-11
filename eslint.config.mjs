import nextConfig from "eslint-config-next/core-web-vitals";

const config = [
	...nextConfig,
	{
		ignores: ["node_modules/**", ".next/**", "dist/**", ".astro/**", "legacy/**", "**/__generated__/**"],
	},
	{
		rules: {
			"react-hooks/set-state-in-effect": "off",
			"react-hooks/refs": "off",
			"react-hooks/exhaustive-deps": "off",
			"react/no-unescaped-entities": "off",
		},
	},
];

export default config;
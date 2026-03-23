const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 4s linear infinite",
			},
			aspectRatio: {
				poster: "297/420",
				sweet: "4/3",
			},
			borderRadius: {
				lg: "1rem",
				md: ".75rem",
				sm: ".5rem",
				xl: "1.25rem",
				xs: ".25rem",
			},
			colors: {
				...defaultTheme.colors,
				alloyZinc: {
					100: "#F4F4F5",
					200: "#E7E5E4",
					300: "#D4D4D8",
					400: "#A1A1AA",
					50: "#FAFAF9",
					500: "#71717A",
					600: "#52525B",
					700: "#3F3F46",
					800: "#27272A",
					900: "#18181B",
					950: "#09090B",
				},
				bg: "var(--bg)",
				bgBaseDark: colors.zinc[900],
				bgBaseLight: colors.stone[200],
				bgRaised: "var(--bgRaised)",
				bgRaisedDark: colors.zinc[800],
				bgRaisedLight: colors.stone[50],
				// Painful Green
				primary: {
					100: "#f6fee7",
					200: "#ebfccb",
					300: "#d9f99d",
					400: "#c1f264",
					50: "#a8e635",
					500: "#8dcc16",
					600: "#6fa30d",
					700: "#567c0f",
					800: "#466212",
					900: "#3d5314",
					950: "#202e05",
				},
				primaryShade: "#D9F99D",
				text: "var(--text)",
				textDark: colors.zinc[900],
				textDimmed: "var(--textDimmed)",
				textDimmedDark: colors.zinc[600],
				textDimmedLight: colors.slate[300],
				textLight: colors.slate[50],
			},
			fontFamily: {
				display: ["var(--font-sofia-pro)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-jb-mono)", ...defaultTheme.fontFamily.mono],
				sans: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				cv: "minmax(64px, 192px) 2fr",
				systemSection: "192px 1fr",
				thought: "minmax(8rem, 20rem) 42rem minmax(8rem, 20rem)",
			},
			margin: {
				"heading-1": "6rem",
				"heading-2": "3rem",
				"heading-3": "1rem",
				"section-1": "16rem",
				"section-2": "8rem",
				"section-3": "4rem",
			},
			maxWidth: {
				"2xs": "16rem",
				"3xs": "12rem",
				"4xs": "8rem",
				"5xs": "4rem",
			},
		},
	},
};

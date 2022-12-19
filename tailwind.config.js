const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    extend: {
      aspectRatio: {
        poster: "297/420",
        sweet: "4/3",
      },
      colors: {
        ...defaultTheme.colors,
        bg: "var(--bg)",
        bgBaseDark: colors.zinc[900],
        bgBaseLight: colors.stone[200],
        bgRaised: "var(--bgRaised)",
        bgRaisedDark: colors.zinc[800],
        bgRaisedLight: colors.stone[50],
        // Painful Green
        primary: { 
          100: "#F8FEEC",
          200: "#F0FDD9",
          300: "#E9FBC5",
          400: "#E1FAB2",
          50: "#FBFEF5",
          500: "#D9F99D",
          600: "#BCF452",
          700: "#9BE70E",
          800: "#679A09",
          900: "#344D05"
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
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "cv": "minmax(64px, 192px) 2fr"
      },
      maxWidth: {
        "2xs": "16rem",
        "3xs": "12rem",
        "4xs": "8rem",
        "5xs": "4rem",
      }
    }
  },
}

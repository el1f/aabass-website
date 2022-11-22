const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      aspectRatio: {
        poster: "297/420"
      },
      colors: {
        ...defaultTheme.colors,
        bgBaseDark: colors.slate[900],
        bgBaseLight: colors.slate[200],
        bgRaisedDark: colors.slate[800],
        bgRaisedLight: colors.slate[50],
        primary: colors.amber,
        textDark: colors.slate[900],
        textDimmedDark: colors.slate[700],
        textDimmedLight: colors.slate[300],
        textLight: colors.slate[50],
      },
      fontFamily: {
        'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
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

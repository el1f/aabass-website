const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        primary: colors.amber,
        textDark: colors.slate[900],
        textLight: colors.slate[50],
        textDimmedDark: colors.slate[700],
        textDimmedLight: colors.slate[300],
        bgBaseLight: colors.slate[200],
        bgRaisedLight: colors.slate[50],
        bgBaseDark: colors.slate[900],
        bgRaisedDark: colors.slate[800],
      },
      aspectRatio: {
        poster: "297/420"
      }
    }
  },
  plugins: [],
}

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
        bgBaseDark: colors.zinc[900],
        bgBaseLight: colors.stone[200],
        bgRaisedDark: colors.zinc[800],
        bgRaisedLight: colors.stone[50],
        primary: colors.amber,
        textDark: colors.zinc[900],
        textDimmedDark: colors.zinc[600],
        textDimmedLight: colors.slate[300],
        textLight: colors.slate[50],
      },
      fontFamily: {
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
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

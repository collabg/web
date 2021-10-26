const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.indigo,
      gray: colors.coolGray,
      white: colors.white,
      transparent: colors.transparent,
      current: 'currentColor',
      teal: colors.teal,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '480px',
      sm: '760px',
      md: '840px',
      lg: '1050x',
      xl: '1060px',
    },
    backgroundImage: {
      'jeopardy': "url('../assets/jeopardy"
    },
    colors: {
      black: '#000',
      white: '#fff',
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      "yellow": '#eab308',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
}
}
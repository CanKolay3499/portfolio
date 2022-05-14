const colors = require('tailwindcss/colors')

const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
          900: '#0F0E13',
          800: '#151419',
          700: '#232429'
        },
        primary: colors.indigo
      }
    },
    fontFamily: {
      body: ['Outfit'],
      mono: ['Roboto\\ Mono']
    }
  }
}

module.exports = config

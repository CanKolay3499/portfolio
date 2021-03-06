const colors = require('tailwindcss/colors')

const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
          900: '#0F0E13',
          800: '#151419',
          700: '#232429'
        },
        primary: colors.emerald
      }
    },
    fontFamily: {
      body: ['Outfit'],
      mono: ['Roboto\\ Mono']
    }
  }
}

module.exports = config

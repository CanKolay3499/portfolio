const colors = require('tailwindcss/colors')

const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      }
    },
    fontFamily: {
      body: ['Poppins'],
      mono: ['JetBrains\\ Mono']
    }
  },
  plugins: []
}

module.exports = config

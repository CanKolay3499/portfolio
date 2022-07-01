import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
  extract: { include: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'] },
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
        primary: colors.emerald
      }
    },
    fontFamily: {
      body: ['Outfit'],
      mono: ['Roboto\\ Mono']
    }
  },
  shortcuts: {
    'bg-primary': 'bg-white dark:bg-gray-900',
    'bg-secondary': 'bg-gray-100 dark:bg-gray-800',
    'bg-tertiary': 'bg-gray-300 dark:bg-gray-700',
    'border-primary': 'border-gray-300 dark:border-gray-700',
    'text-primary': 'text-black dark:text-white',
    'text-secondary': 'text-gray-800 dark:text-gray-200',
    'text-secondary-disabled': 'text-gray-500 dark:text-gray-300'
  }
})

module.exports = config

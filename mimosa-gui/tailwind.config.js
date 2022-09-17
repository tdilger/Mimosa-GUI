const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'accent': '#496B72',
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'neutral': 'var(--color-neutral)',
      'contrast': 'var(--color-contrast)',
      'item-enabled': 'var(--color-item-enabled)',
      'card-selected': 'var(--color-card-selected)',
      'card': 'var(--color-card)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
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
}

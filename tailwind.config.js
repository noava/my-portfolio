/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#e4e2c4',
        background: {
          50: '#f3f1f3',
          100: '#e8e3e7',
          200: '#d0c8cf',
          300: '#b9acb7',
          400: '#a1919f',
          500: '#8a7587',
          600: '#6e5e6c',
          700: '#534651',
          800: '#372f36',
          DEFAULT: '#2f282e',
          850: '#282227',
          900: '#1c171b',
          950: '#0e0c0d'
        },
        card: '#3a3234',
        primary: '#faf3a3',
        secondary: '#475946',
        accent: '#819c87',
        navbarfooter: '#352a34'
      }
    },
    fontFamily: {
      saira: ['Saira']
    }
  },
  plugins: []
}

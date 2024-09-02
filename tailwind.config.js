/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#e4e2c4',
        background: '#2f282e',
        card: '#3a3234',
        primary: '#faf3a3',
        secondary: '#475946',
        accent: '#819c87',
        navbarfooter: '#352a34'
      }
    }
  },
  plugins: []
}

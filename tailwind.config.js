/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#e4e2c4',
        background: {
          DEFAULT: '#19191f',
          darker: '#020206'
        },
        card: '#5a2f32',
        primary: '#db8c74',
        secondary: '#773438',
        accent: '#cfa152',
        navbarfooter: '#392022'
      }
    },
    fontFamily: {
      saira: ['Saira']
    }
  },
  plugins: []
}

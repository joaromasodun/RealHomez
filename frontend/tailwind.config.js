/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A3C',
        secondary: '#81D4FA'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        qwitcher: ['"Qwitcher Grypen"', 'cursive'],
      },
    },
  },
  plugins: [],
}

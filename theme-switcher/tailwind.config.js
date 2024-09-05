/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",//there two methods media(changes on the basis of system) and class(on the basis of class)
  theme: {
    extend: {},
  },
  plugins: [],
}


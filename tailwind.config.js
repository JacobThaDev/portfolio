const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#D5412E",
      white: "#FFFFFF",
      black: "#000000"
    },
    container: {
      center: true,
      padding: "2em"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
}


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
      background: "#f5f5f5",
      primary: "#D5412E",
      white: "#FFFFFF",
      black: "#000000",
      danger: "#d2433f",
      secondary: "#9750DD",
      warning: "#f0ad4e",
      success: "#62af66",
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


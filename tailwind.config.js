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
      background: "#F8F8F8",
      primary: "#D5412E",
      alt: "#211131",
      white: "#FFFFFF",
      black: "#000000",
      danger: "#d2433f",
      secondary: "#ECEFF2",
      warning: "#f0ad4e",
      success: "#62af66",
    },
    container: {
      center: true,
      padding: "2em"
    },
    extend: {
        colors: {
            
        }
    },
  },
  darkMode: "class",
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
        colors: {
            background: "#F8f8f8",
            primary: "#3DB9F5",
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
    },
  },
  plugins: [],
}


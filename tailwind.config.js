/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#022B3A",
      "medium-green": "#04724D",
      "light-green": "#85CB33",
      "dark-blue": "#009DDC",
      "light-blue": "#56CBF9",
      black: "#000000",
      white: "#ffffff",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["helvetica", "sans-serif"],
      serif: ["georgia", "serif"],
    },
    extend: {
      backgroundImage: {
        // parallax: 'url("src/assets/replace/stock-closeup-mtn-bg.jpg")',
        // parallax: 'url("/white-vine-row.jpg")',
        parallax: 'url("src/assets/photos/white-vine-row.jpg")',
      },
      boxShadow: {
        instagram: "20px 12px #009DDC",
      },
    },
  },
  plugins: [],
};

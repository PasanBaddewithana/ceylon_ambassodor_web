/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollektif: ["Kollektif", "Kollektifbold", "sans-serif"], // Add the custom font here
        Montserrat: ["Montserrat-Regular", "sans-serif"],
      },
      colors: {
        customBlue: "#031c3f",
        customGray: "#dfdfdf",
      },
    },
  },
  plugins: [],
};

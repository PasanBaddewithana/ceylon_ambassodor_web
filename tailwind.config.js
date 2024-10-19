/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollektif: ["Kollektif", "Kollektifbold", "sans-serif"], // Add the custom font here
        Montserrat: ["Montserrat-Regular", "sans-serif"],
        MontserratMedium: ["Montserrat-Medium", "sans-serif"],
        MontserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
      },
      colors: {
        customBlue: "#031c3f",
        customGray: "#dfdfdf",
        bggray: "#A9ABAA",
      },
    },
  },
  plugins: [],
};

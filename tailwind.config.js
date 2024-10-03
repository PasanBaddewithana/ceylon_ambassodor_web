/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollektif: ["Kollektif", "Kollektifbold", "sans-serif"], // Add the custom font here
      },
    },
  },
  plugins: [],
};

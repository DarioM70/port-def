/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{
        'ms': '320px',
        // => @media (min-width: 320px) { ... }
        'm': '450px',

      },

      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

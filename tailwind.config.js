/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Paytone: "'Paytone One', sans-serif",
        island: "'Island Moments', cursive",
        lobstar: "'Lobster', cursive",
        poppins: "'Poppins', sans-serif",
        ubuntu: "'Ubuntu', sans-serif"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

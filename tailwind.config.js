/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        Paytone: "'Paytone One', sans-serif",
        island: "'Island Moments', cursive",
        lobstar: "'Lobster', cursive",
        poppins: "'Poppins', sans-serif",
        ubuntu: "'Ubuntu', sans-serif"
      },
      backgroundColor: {
        themeLightBg: "rgb(15 23 42/var(--tw-bg-opacity))",
        themeDarkBg: "linear-gradient(4deg, rgba(44,55,71,0.8463760504201681) 0%, rgba(37,69,80,1) 9%, rgba(12,43,41,1) 95%, rgba(0,212,255,1) 100%)"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

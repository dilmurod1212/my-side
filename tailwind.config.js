/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/img/hero-pattern.svg')",
      },
      colors: {
        'gold':'#FFBD33'
      }
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};

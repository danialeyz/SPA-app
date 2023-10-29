/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      pixely: ["Pixelify Sans", "sans-serif"],
      poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "540px",
      },
      backgroundImage: {
        "section-1-bg": "url('/assets/Frame-32.png')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};

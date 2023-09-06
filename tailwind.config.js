/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      extend: {
        fontFamily: {
          sans: ["Josefin Sans", "sans-serif"],
          alata: ["Alata"],
        },
        letterSpacing: {
          widest: "0.3em",
        },
      },
    },
  },
  plugins: [],
};

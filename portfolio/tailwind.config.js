/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Audiowide: "Audiowide",
        Courgette: "Courgette",
        Monoton: "Monoton",
        Roboto: "Roboto",
        Silkscreen: "Silkscreen",
      },
    },
  },
  plugins: [],
};

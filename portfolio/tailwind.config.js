/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
});

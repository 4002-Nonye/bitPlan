/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBlue: " hsl(220, 98%, 61%)",

        // LIGHT THEME
        veryLightGrayLT: "hsl(0, 0%, 98%)",
        veryLightGrayishBlueLT: "hsl(236, 33%, 92%)",
        lightGrayishBlueLT: " hsl(233, 11%, 84%)",
        darkGrayishBlueLT: " hsl(236, 9%, 61%)",
        veryDarkGrayishBlueLT: "hsl(235, 19%, 35%)",

        // DARK THEME
        veryDarkBlueDT: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlueDT: "hsl(235, 24%, 19%)",
        lightGrayishBlueDT: " hsl(234, 39%, 85%)",
        lightGrayishBlueHov: "hsl(236, 33%, 92%)",
        darkGrayishBlueDT: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlueDT: " hsl(233, 14%, 35%)",
        veryDarkGrayishBlueDT: " hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};

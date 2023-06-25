/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark-Emerald": "#243E36",
        "Mossy-Midnight": "#10451D ",
      },
      fontSize: {
        "12xl": "12rem",
      },
      borderColor: {
        "Lush-Forest": "#1E8338",
      },
      fontFamily: {
        "Fascinate-inline": ["Fascinate Inline"],
      },
      screens: {
        sm: "600px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

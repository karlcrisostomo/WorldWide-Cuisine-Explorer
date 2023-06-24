/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Emerald": "#243E36",
      },
      fontSize:{
        '12xl' : '12rem'
      }
    },
  },
  plugins: [],
};

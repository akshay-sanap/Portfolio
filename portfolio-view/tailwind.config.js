/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      transitionProperty: {
        filter: "filter",
        position: "top, left",
      },
    },
  },
  plugins: [tailwindScrollbar],
};

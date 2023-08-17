// import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "#fff9f5",
          10: "#ffede1",
          15: "#ffe1cc",
          20: "#ffd4b8",
          40: "#ffe8d9",
          60: "#ffd9c0",
          80: "#ffcaa6",
          100: "#fff0e6",
          200: "#ffd1b3",
          300: "#feb380",
          400: "#fe944d",
          500: "#fe761a",
          600: "#e55c01",
          700: "#b24801",
          800: "#7f3301",
          900: "#4c1f00",
          1000: "#190a00",
        },

        secondary: {
          500: "#0F0B0A",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
          garamond: ["var(--font-eb-garamond)"], 
          cylburn: ["var(--font-cylburn)"],
          noto: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
}
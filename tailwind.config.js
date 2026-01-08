/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We will add custom colors here later
      },
      fontFamily: {
        // We will add custom fonts here later
        sans: ['Inter', 'sans-serif'], // Defaulting to Inter as common dashboard font
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-1": "#477be4",
        "blue-2": "#0693e3",
      },
      textColor: {
        "blue-1": "#477be4",
        "blue-2": "#0693e3",
      }
    },
  },
  plugins: [],
}
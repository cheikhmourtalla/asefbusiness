/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#23B5D3", 
        footer: "#ff7a18",  
      }

    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #764fe3 0%, #7592ee 100%)',
      },
    },
    fontFamily: {
      'text': ["Manrope", 'sans-serif'],
      'heading': ["Lexend", 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
  
}
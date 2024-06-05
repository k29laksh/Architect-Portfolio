/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #764fe3 0%, #7592ee 100%)",
        community:
          "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
      },
    },
    fontFamily: {
      text: ["Manrope", "sans-serif"],
      heading: ["Lexend", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

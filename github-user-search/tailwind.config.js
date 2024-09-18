/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dustGray: "#dad7cd",
        lightestGreen: "#a3b18a",
        midGreen: "#588157",
        darkGreen: "#3a5a40",
        darkestGreen: "#344e41",
      },
    },
  },
  plugins: [],
};

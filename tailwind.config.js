/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      space: ["Space Mono", "monospace"],
    },
    colors: {
      lighterGrey: "#D3D3D3",
      lightGrey: "#808080",
      darkGrey: "#5A5A5A",
      darkerGrey: "#222222",
    },
    extend: {},
  },
  plugins: [],
};

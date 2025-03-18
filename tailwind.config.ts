/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000ff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter"
    ],
  },
}; 
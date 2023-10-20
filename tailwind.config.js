/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  aisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: '#DA674E'
    },
    extend: {},
  },
  aisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}


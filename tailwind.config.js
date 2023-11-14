/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#84A215", //color primario
        'primary-neutral': "#b5ca68",
        secondary: "#003865", //color secundario
        accent: "#cf2e2e", //color para destacar contenido
        neutral: "#b5b5b5", //color para
        'base-100': '#f3f4f6', //color fonde de interface
        info: "#0284c7", //color para mostrar alertas de información
        success: "#65a30d", //      ""        alertas satisfactorias
        warning: "#eab308", //      ""        alertas de advertencia
        error: "#b91c1c", //      ""        alertas de error
      },
    },
  },
  plugins: [require("daisyui")],
};

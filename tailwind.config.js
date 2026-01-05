/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        allura: ["ShelleyScript", "cursive"],           // para tu título script
        buffalo: ["Buffalo", "sans-serif"],             // por si quieres usarla
        espresso: ['"Compotes Espresso"', "serif"],     // para el cuerpo de texto
        pinyon: ['"Pinyon Script"', "cursive"],
      },
    },
  },
  plugins: [],
};

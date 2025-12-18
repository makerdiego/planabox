import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F6B3F", // Verde magdalenero
          dark: "#0B1220", // Texto / fondo oscuro suave
          light: "#F7FAF8", // Fondo principal claro
        },
      },
    },
  },
  plugins: [],
};
export default config;


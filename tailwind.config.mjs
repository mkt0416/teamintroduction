/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        theme: "#4169e1",
        secondary: "#9191a4",
        darkgray: "#3f3f51",
        inputBorder: "#565666",
        input: "#2a2a33",
      },
    },
  },
  plugins: [],
};

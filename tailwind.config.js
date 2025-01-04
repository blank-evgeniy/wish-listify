/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xxs: "360px",
      },
      spacing: {
        header: "var(--header)",
        container: "var(--container)",
      },
    },
  },
  plugins: [],
};

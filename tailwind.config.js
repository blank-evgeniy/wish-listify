/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui"],
        serif: ["Nunito", "ui-serif", "Georgia"],
        mono: ["Nunito", "ui-monospace", "SFMono-Regular"],
      },
      screens: {
        xs: "480px",
        xxs: "360px",
      },
      spacing: {
        header: "var(--header)",
        container: "var(--container)",
        "input-h": "var(--input-h)",
      },
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
        },
        text: {
          100: "var(--text-100)",
          200: "var(--text-200)",
        },
        bg: {
          100: "var(--bg-100)",
          200: "var(--bg-200)",
          300: "var(--bg-300)",
        },
      },
    },
  },
  plugins: [],
};

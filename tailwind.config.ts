import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--accent-color)",
        "accent-faded": "var(--accent-color-faded)",
        muted: "var(--color-muted)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        accent: "var(--color-text-accent)",
        muted: "var(--color-text-muted)",
        inverted: "var(--color-text-inverted)",
      },
    },
  },
  plugins: [
  ],
} satisfies Config;

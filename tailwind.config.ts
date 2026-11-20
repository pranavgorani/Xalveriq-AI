import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Calm Architectural Paper & Ink Palette */
        bg: "var(--bg)",
        paper: {
          DEFAULT: "var(--paper)",
          alt: "var(--paper-alt)",
          card: "var(--surface)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          pure: "#1B1B1B",
          subtle: "#2A2A2A",
        },
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "rgba(221, 213, 200, 0.6)",
        },
        /* ONE ACCENT ONLY: Deep Terracotta */
        terracotta: {
          DEFAULT: "var(--terracotta)",
          hover: "var(--terracotta-hover)",
          light: "var(--terracotta-light)",
        },
        accent: "var(--terracotta)",

        /* Backward-compat aliases mapped safely to calm palette */
        "bg-alt": "var(--paper-alt)",
        surface: "var(--surface)",
        "surface-solid": "var(--surface)",
        "text-muted": "var(--text-muted)",
        gold: {
          DEFAULT: "var(--terracotta)",
          400: "var(--terracotta)",
          500: "var(--terracotta)",
        },
        violet: {
          DEFAULT: "var(--terracotta)",
          500: "var(--terracotta)",
        },
        cyan: {
          DEFAULT: "var(--terracotta)",
          400: "var(--terracotta)",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        display: ["var(--font-fraunces)", "serif"],
        heading: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "6px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(27, 27, 27, 0.03)",
        card: "0 4px 20px rgba(27, 27, 27, 0.04)",
        "card-hover": "0 8px 30px rgba(27, 27, 27, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;

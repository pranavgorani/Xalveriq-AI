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
        /* Warm Luxury Ivory, Bronze & Espresso Palette */
        ivory: {
          DEFAULT: "var(--ivory)",
          50: "#FCFAF7",
          100: "#F7F4EE",
          200: "#EFEAE1",
          300: "#E5DDD0",
          card: "var(--surface)",
        },
        charcoal: {
          DEFAULT: "var(--charcoal)",
          soft: "#2A2A2E",
          muted: "var(--text-muted)",
        },
        bronze: {
          DEFAULT: "var(--bronze)",
          hover: "var(--bronze-hover)",
          light: "var(--bronze-light)",
          dark: "#987247",
        },
        espresso: {
          DEFAULT: "var(--espresso)",
          soft: "#1A1918",
          card: "#171615",
          border: "#2A2825",
        },
        /* Semantic Aliases */
        bg: "var(--bg)",
        paper: {
          DEFAULT: "var(--ivory)",
          alt: "var(--ivory-alt)",
          card: "var(--surface)",
        },
        ink: {
          DEFAULT: "var(--charcoal)",
          pure: "#121110",
        },
        text: {
          DEFAULT: "var(--charcoal)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "rgba(224, 216, 203, 0.7)",
          dark: "#2A2825",
        },
        gold: {
          DEFAULT: "var(--bronze)",
          400: "var(--bronze)",
          500: "var(--bronze)",
        },
        terracotta: {
          DEFAULT: "var(--bronze)",
          hover: "var(--bronze-hover)",
          light: "var(--bronze-light)",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(18, 17, 16, 0.04)",
        card: "0 8px 30px rgba(18, 17, 16, 0.06)",
        "card-hover": "0 16px 40px rgba(18, 17, 16, 0.10)",
        luxury: "0 24px 60px rgba(18, 17, 16, 0.12)",
        glow: "0 0 35px rgba(197, 168, 128, 0.25)",
      },
      animation: {
        "ken-burns": "kenburns 20s ease infinite alternate",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.0) translate(0%, 0%)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
        /* Core Light Theme Tokens */
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        surface: "var(--surface)",
        "surface-solid": "var(--surface-solid)",
        "surface-elevated": "var(--surface-elevated)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        gold: {
          DEFAULT: "var(--gold)",
          light: "#DFBA87",
          300: "#CDB084",
          400: "#B08A57",
          500: "#9C7541",
          600: "#805E32",
        },
        violet: {
          DEFAULT: "var(--violet)",
          300: "#A992FF",
          400: "#8869FF",
          500: "#6D4AFF",
          600: "#5532E6",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
          300: "#58C8EB",
          400: "#14A8D6",
          500: "#0F85AA",
        },
        ink: {
          DEFAULT: "var(--ink)",
          surface: "var(--ink-surface)",
          900: "#12121A",
          800: "#181824",
        },
        /* Backward compatibility aliases */
        space: {
          950: "var(--bg)",
          900: "var(--bg-alt)",
          850: "var(--surface-solid)",
          800: "var(--bg-alt)",
          700: "var(--border)",
        },
        pearl: {
          100: "var(--text)",
          200: "var(--text)",
          300: "var(--text-muted)",
          400: "#827C75",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(109, 74, 255, 0.08) 0%, rgba(250, 247, 242, 0) 70%)",
        "gold-glow": "radial-gradient(circle at 50% 50%, rgba(176, 138, 87, 0.1) 0%, rgba(250, 247, 242, 0) 75%)",
        "heading-gradient": "linear-gradient(135deg, #6D4AFF 0%, #14A8D6 50%, #B08A57 100%)",
        "btn-gradient": "linear-gradient(135deg, #6D4AFF 0%, #14A8D6 100%)",
      },
      boxShadow: {
        card: "0 10px 40px rgba(22, 22, 29, 0.06)",
        "card-hover": "0 20px 50px -10px rgba(109, 74, 255, 0.14), 0 0 25px rgba(20, 168, 214, 0.1)",
        "btn-glow": "0 8px 24px -4px rgba(109, 74, 255, 0.35)",
        floating: "0 24px 60px -12px rgba(22, 22, 29, 0.12)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 9s ease-in-out 3s infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

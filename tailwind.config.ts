import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "SF Mono", "monospace"],
        display: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 0.8rem + 0.35vw, 1rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", { lineHeight: "1.6" }],
        lg: ["clamp(1.125rem, 1rem + 0.6vw, 1.25rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.5rem, 1.25rem + 1.25vw, 2rem)", { lineHeight: "1.3" }],
        "3xl": ["clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)", { lineHeight: "1.1" }],
        "5xl": ["clamp(3rem, 2rem + 5vw, 5rem)", { lineHeight: "1" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        phosphor: {
          50: "hsl(var(--phosphor-50))",
          100: "hsl(var(--phosphor-100))",
          200: "hsl(var(--phosphor-200))",
          300: "hsl(var(--phosphor-300))",
          400: "hsl(var(--phosphor-400))",
          500: "hsl(var(--phosphor-500))",
          600: "hsl(var(--phosphor-600))",
        },
        terminal: {
          void: "hsl(var(--bg-void))",
          bg: "hsl(var(--bg-terminal))",
          surface: "hsl(var(--bg-surface))",
          elevated: "hsl(var(--bg-elevated))",
          amber: "hsl(var(--amber-terminal))",
          cyan: "hsl(var(--cyan-terminal))",
          red: "hsl(var(--red-terminal))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          ghost: "hsl(var(--text-ghost))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-sm": "var(--glow-sm)",
        "glow-md": "var(--glow-md)",
        "glow-lg": "var(--glow-lg)",
        terminal: "0 4px 6px -1px hsl(var(--bg-void) / 0.5), 0 2px 4px -2px hsl(var(--bg-void) / 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "var(--glow-sm)" },
          "50%": { boxShadow: "var(--glow-md)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s step-end infinite",
        "reveal-up": "reveal-up 0.6s ease-out backwards",
        "reveal-left": "reveal-left 0.6s ease-out backwards",
        "reveal-right": "reveal-right 0.6s ease-out backwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        typing: "typing 2s steps(40, end)",
        "fade-in": "fade-in 0.5s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            pre: {
              backgroundColor: "hsl(var(--bg-surface))",
              color: "hsl(var(--text-primary))",
            },
            code: {
              backgroundColor: "hsl(var(--bg-surface))",
              color: "hsl(var(--phosphor-400))",
              fontWeight: "400",
              "&::before": { content: '""' },
              "&::after": { content: '""' },
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;

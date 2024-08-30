import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans], // the second value is the default sans-serif font is for the case the custom font is not loaded
        primary: ["var(--font-primary)", ...fontFamily.sans],
        secondary: ["var(--font-secondary)", ...fontFamily.sans],
        third: ["var(--font-third)", ...fontFamily.sans]
      },
      colors: {
        "light-primary": "hsl(var(--light-primary))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "i-about-from": "hsl(var(--i-about-from))",
        "i-about-via": "hsl(var(--i-about-via))",
        "i-about-to": "hsl(var(--i-about-to))",
        "i-services-bg": "hsl(var(--i-services-bg))",
        "i-services-icon": "hsl(var(--i-services-icon))",
        "i-fun-facts-bg": "hsl(var(--i-fun-facts-bg))",
        "i-fun-facts-icon": "hsl(var(--i-fun-facts-icon))",
        "i-experience-from": "hsl(var(--i-experience-from))",
        "i-experience-via": "hsl(var(--i-experience-via))",
        "i-experience-to": "hsl(var(--i-experience-to))",
        "i-experience-date": "hsl(var(--i-experience-date))",
        "i-experience-bg": "hsl(var(--i-experience-bg))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        "vertical-line": "var(--i-vertical-line-width)",
      },
      boxShadow: {
        "i-about-from": "var(--i-about-from)",
        "i-services-bg": "var(--i-services-bg)",
        "i-fun-facts-bg": "var(--i-fun-facts-bg)",
        "i-experience-from": "var(--i-experience-from)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

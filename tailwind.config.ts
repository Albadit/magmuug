import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      primaryHover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      secondaryHover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
      accent1: 'rgb(var(--color-accent1) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      backgroundHighlight: 'rgb(var(--color-background-highlight) / <alpha-value>)',
      backgroundHover: 'rgb(var(--color-background-hover) / <alpha-value>)',
      backgroundCard: 'rgb(var(--color-background-card) / <alpha-value>)',
      textPrimary: 'rgb(var(--color-text-primary) / <alpha-value>)',
      textSecondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      textDim: 'rgb(var(--color-text-dim) / <alpha-value>)'
    },
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'secondary': ['Palanquin', 'sans-serif']
      },
      backgroundImage: {
        'title': "var(--bg-title)",
        'info': "var(--bg-info)",
        'login': "var(--bg-login)",
      },
      spacing: {
        'horizontal-padding-desktop': 'var(--space-horizontal-padding-desktop)',
        'horizontal-padding-mobile': 'var(--space-horizontal-padding-mobile)',
        'section-desktop': 'var(--space-section-desktop)',
        'section-mobile': 'var(--space-section-mobile)',
      },
      borderRadius: {
        'cart': 'var(--border-radius-cart)',
        'card': 'var(--border-radius-card)',
        'button': 'var(--border-radius-button)',
      },
      dropShadow: {
        'bottel': '-40px 25px 50px rgb(0, 0, 0, 0.25)',
        'card': '0 4px 50px rgb(0, 0, 0, 0.25)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-100%, 0)' },
        }
      },
      animation: {
        scroll: 'scroll 7s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;

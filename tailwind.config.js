import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-rounded", "system-ui", "sans-serif"],
        sans: ["var(--font-display)", "ui-rounded", "system-ui", "sans-serif"],
      },
      fontSize: {
        "window-title": ["16px", { lineHeight: "1.2", fontWeight: "700" }],
        h1: ["32px", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["22px", { lineHeight: "1.25", fontWeight: "700" }],
        body: ["15px", { lineHeight: "1.5", fontWeight: "500" }],
        "icon-label": ["12px", { lineHeight: "1.2", fontWeight: "700" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      colors: {
        ink: "var(--rd-ink)",
        cream: "var(--rd-cream)",
        "cream-alt": "var(--rd-cream-alt)",
        khaki: "var(--rd-khaki)",
        "sky-blue": "var(--rd-sky-blue)",
        "grass-light": "var(--rd-grass-light)",
        "grass-dark": "var(--rd-grass-dark)",
        "mint-teal": "var(--rd-mint-teal)",
        "coral-peach": "var(--rd-coral-peach)",
        "salmon-pink": "var(--rd-salmon-pink)",
        "salmon-stripe": "var(--rd-salmon-stripe)",
        mustard: "var(--rd-mustard)",
        "soft-red": "var(--rd-soft-red)",
        disabled: "var(--rd-disabled)",
        "disabled-text": "var(--rd-disabled-text)",
        muted: "var(--rd-muted)",
      },
      borderRadius: {
        window: "var(--rd-window-radius)",
        btn: "10px",
        dock: "20px",
        squircle: "12px",
      },
      borderWidth: {
        window: "var(--rd-window-border)",
      },
      boxShadow: {
        window: "var(--rd-window-shadow)",
        hard: "4px 4px 0 0 var(--rd-ink)",
      },
      spacing: {
        "title-bar": "var(--rd-title-bar-height)",
        "icon-gap": "6px",
      },
      keyframes: {
        "window-pop": {
          "0%": { transform: "scale(0.9)" },
          "70%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" },
        },
        "window-close": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "window-minimize": {
          "0%": { transform: "scale(1) translateY(0)", opacity: "1" },
          "100%": {
            transform: "scale(0.12) translateY(42vh)",
            opacity: "0",
          },
        },
        "dock-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "22%": { transform: "translateY(-18px)" },
          "40%": { transform: "translateY(0)" },
          "58%": { transform: "translateY(-10px)" },
          "76%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "window-pop": "window-pop 220ms ease-out both",
        "window-close": "window-close 150ms ease-in both",
        "window-minimize": "window-minimize 320ms ease-in both",
        "dock-bounce": "dock-bounce 700ms ease-in-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

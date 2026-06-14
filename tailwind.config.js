module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["'Space Grotesk'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        dark: "#050816",
        "dark-card": "#0f172a",
        "dark-lighter": "#1e293b",
        primary: "#7c3aed",
        "primary-light": "#a78bfa",
        "primary-dark": "#5b21b6",
        secondary: "#06b6d4",
        "secondary-light": "#67e8f9",
        accent: "#10b981",
        "accent-amber": "#f59e0b",
        "accent-pink": "#ec4899",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #7c3aed44, 0 0 10px #7c3aed22" },
          "100%": { boxShadow: "0 0 20px #7c3aed88, 0 0 40px #7c3aed44" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 1, boxShadow: "0 0 10px currentColor" },
          "50%": { opacity: 0.7, boxShadow: "0 0 25px currentColor, 0 0 50px currentColor" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.15) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

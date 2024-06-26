/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
    },
    extend: {
      animation: {
        "move-right": "moveRight 0.4s ease-out ",
      },
      keyframes: {
        moveRight: {
          "0%, 100%": { transform: "translateX(0)", opacity: 1 },
          "50%": { transform: "translateX(10px)", opacity: 0 },
          "51%": { transform: "translateX(-10px)", opacity: 0 },
        },
      },
      colors: {
        blacker: "#080d24",
        blackest: "#020617",
        halfblack: "#1e293b",
        dimgray: "#64748b",
        silver: "#e2e8f0",
        lightstar: "#f8fafc",
        orange: "#f59e0b",
        metalgray: "#F5F5F7",
        metaldark: "rgb(202,202,204)",
      },
      backgroundImage: {
        "sign-pattern": "url('../assets/background/sign-backdrop.webp')",
        "hero-backdrop": "url('../assets/background/hero-backdrop.svg')",
        "noise-pattern": "url('../assets/background/noisy.png')",
      },
    },
  },
  plugins: [],
};

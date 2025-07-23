module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        gold: {
          DEFAULT: "#C8B06A",
          dark: "#A68A3C",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      dropShadow: {
        gold: "0 2px 16px #C8B06A88",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEF1F6",
        paperdim: "#E2E7F0",
        ink: "#121A2E",
        inksoft: "#4B5670",
        inkfaint: "#8590A8",
        deep: "#101826",
        deepline: "#27314A",
        amber: "#E0962A",
        amberlight: "#F3B65C",
        line: "#C8CFDE",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}


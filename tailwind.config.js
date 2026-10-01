/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: "#0B2545",
          light: "#163A66",
          soft: "#2E4374",
        },
        ocean: {
          DEFAULT: "#145DA0",
          dark: "#0E4677",
          light: "#DCEEFC",
        },
        sky: {
          DEFAULT: "#4CA6E8",
          dark: "#2F86C7",
          light: "#E4F3FD",
        },
        steel: {
          DEFAULT: "#3D5A80",
          dark: "#2C4362",
          light: "#E7EDF5",
        },
        mist: {
          DEFAULT: "#EAF4FC",
          dark: "#D9EAF9",
        },
        powder: {
          DEFAULT: "#B8DFF7",
          dark: "#8FC7EF",
        },
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        hud: "0 2px 0 0 rgba(11,37,69,1)",
        card: "0 10px 30px -12px rgba(11,37,69,0.22)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["'Cinzel Decorative'", "serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        noto: ["'Noto Serif JP'", "serif"],
      },
      colors: {
        void: "#03020a",
        abyss: "#07050f",
        dusk: "#0e0a1a",
        crimson: "#8b0000",
        "blood-red": "#c0392b",
        "pale-red": "#e8a0a0",
        "ghost-white": "#f0eaf8",
        "spirit-blue": "#7b8fc4",
        "oracle-gold": "#c9a84c",
        "dark-plum": "#1a0a2e",
        "mist-gray": "#2a2438",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "flicker": "flicker 3s linear infinite",
        "rise": "rise 1s ease-out forwards",
        "fade-in": "fadeIn 1.5s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        "whisper": "whisper 2s ease-in-out infinite",
        "candle": "candle 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.4" },
          "97%": { opacity: "0.9" },
          "98%": { opacity: "0.3" },
          "99%": { opacity: "0.8" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        whisper: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        candle: {
          "0%": { transform: "scaleY(1) scaleX(1)", opacity: "0.9" },
          "100%": { transform: "scaleY(1.1) scaleX(0.95)", opacity: "1" },
        },
      },
      backgroundImage: {
        "radial-void":
          "radial-gradient(ellipse at center, #0e0a1a 0%, #03020a 70%)",
        "radial-crimson":
          "radial-gradient(ellipse at center, rgba(139,0,0,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

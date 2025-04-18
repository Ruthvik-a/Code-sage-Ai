/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vault: '#0f0f0f',
        neon: '#00ffcc',
        danger: '#ff0044'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
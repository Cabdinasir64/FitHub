/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FACC15",
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff',
          secondary: '#2d2d2d'
        },
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
          secondary: '#f5f5f5'
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E5662D", // برتقالي (قابل للتبديل)
          dark: "#0C1E3A",    // كحلي غامق
          light: "#F7F7F8"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Segoe UI", "Tahoma", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}

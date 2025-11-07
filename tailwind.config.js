// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f4ff',
          500: '#0ea5e9',
          600: '#0284c7'
        }
      }
    }
  },
  plugins: [],
};

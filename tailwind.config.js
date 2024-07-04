module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '816px',
        'custom-sm': '410px',
      },
      colors: {
        'white-smoke': '#f9f9f9',
        'footer-text-col': '#ddd'
      }
    },
  },
  plugins: [],
};



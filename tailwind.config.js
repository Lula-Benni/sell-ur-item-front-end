module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '866px',
        'message-screen': '665px',
        'custom-sm': '410px',
        'zero-screen': '0px'
      },
      colors: {
        'white-smoke': '#f9f9f9',
        'footer-text-col': '#ddd'
      }
    },
  },
  plugins: [],
};



module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fes-blue': '#0ea5e9',
        'fes-deep': '#0b4a6f'
      },
      backdropBlur: {
        xs: '2px',
        sm: '6px',
      }
    },
  },
  plugins: [],
}

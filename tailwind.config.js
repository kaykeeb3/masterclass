/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F1419',
        twitter: '#1DA1F2',
        color: '#EBEEF0',
        separator: '#F7F9FA',
        tweet: '#89A2B8'

      },
      gridTemplateColumns: {
        columns: '300px 1fr',
        column: '3rem 1fr',
        col: '80px 1fr'
      }
    },
  },
  plugins: [],
}


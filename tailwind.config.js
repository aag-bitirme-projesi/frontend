/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind'in tarayacağı dosyaları belirt
  ],
  theme: {
    extend: {
      colors: {
        'bg-mavi': '#071120', 
        'border-mavi': '#0C182A', 
        'side-gri': '#595D64', 
        'ebebeb': '#EBEBEB', 
        'afafaf': '#AFAFAF', 

      },
      margin: {
        'dashboard-table': '23rem', 
        'contact': '36rem', 
        'profile': '27rem', 
      }
    },
  },
  plugins: [],
}

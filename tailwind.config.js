/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lime' : "#EBFEE9",
        'sand': "#EEEADD",
        'summer': "#FFEC78",
        'skyblue': "#DDECEE",
        'purple': "#130F40",
        "turq": "#0F3740",
        "storm": "#B6C6CD"
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },
      height:{
        'line' : '1px',
      },
      letterSpacing: {
        'heading' : '1rem'
      }    
    },
  },
  plugins: [],
}
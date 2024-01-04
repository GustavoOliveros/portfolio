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
        "storm": "#93A3B6"
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },                   
    },
  },
  plugins: [],
}
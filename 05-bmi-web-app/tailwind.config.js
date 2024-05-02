/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'transY': {
          '0% , 100%': { transform: 'translateY(10px)'},
          '50%' : {transform: 'translateY(0)'},
          
        }
       },
       animation: {
        'transY': 'transY 1.5s ease-in-out infinite'
       }
    },
  },
  plugins: [],
}


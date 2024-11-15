/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
        fontFamily: {
          'rubik': ['Rubik', 'sans-serif'],
          'cairo': ['Cairo', 'sans-serif'],
          'agency':['Agency FB Bold', 'sans-serif']
        },
    		colors: {
          'brand-cyan' :'#0097bc',
          'brand-blue':'#12026e'
        }
    	}
    },
    plugins: [require("tailwindcss-animate")],
  }


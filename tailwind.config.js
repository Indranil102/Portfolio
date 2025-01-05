/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    
    extend: {
      screens:{
        'xs':'480px',
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      }
    },
  },
  plugins: [],
  darkMode: 'media',
  darkMode: 'class',
}



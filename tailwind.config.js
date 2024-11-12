/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
urbanist : ' "Urbanist", sans-serif;'
      },
      
      colors: {
        black: {
          light: '#191919',
         
          dark: '#141414',
          p:'#999999',

        },
        button :{
          secondray: '#703BF7',

        }

        
      },
    },
    screens: {

    
      
      '600px': {'max': '600px'}, // Custom breakpoint for max 600px
      '700px': {'max': '700px'}, // Custom breakpoint for max 700px
      '800px': {'max': '800px'}, // Custom breakpoint for max 800px
      '1000px': {'max': '1000px'}, // Custom breakpoint for max 800px
     
    },
  },
  plugins: [],
}


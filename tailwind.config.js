/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
   
    extend: {
      colors : {
        'primaryRed': 'hsl(354, 94%, 63%)',
      },
      fontFamily : {
        DMSans : ['DM Sans', 'sans-serif']
      }, 
    },
  },
  plugins: [],
}

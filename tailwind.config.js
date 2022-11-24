/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
      colors:{
        primary: '#ffbe33',
        secondary:'#222831',
      },
      fontFamily:{
        dancing:['Dancing Script', 'cursive'],
        sans:['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

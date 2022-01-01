module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./FrontEnd/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light': '1px 01px 10px 0px #0f172a45',
        'dark': '1px 01px 10px -2px #ffffff30',
      },
      transformOrigin:{
        'x2': '-200% 60% 0px',
        'x2-1': '-40% 60% 0px',
        'x2-2': '100% 30% 0px',
        'x3': '0 260% 0px'
      }
    },
    fontFamily:{
      'main': ['Overpass', 'Georgia', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class',
}

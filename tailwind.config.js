module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inknut:"'Inknut Antiqua', serif",
        Roboto:"'Roboto Mono', monospace",
      },
      variants: {
        width: ["responsive", "hover", "focus"]
      },
      colors: {
        light_purp:'#682ae9',
      },


      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('text.transparent') },
          '100%': { backgroundColor: theme('colors.red.300') },
        },
      }), 
    },
  },
  plugins: [],
}

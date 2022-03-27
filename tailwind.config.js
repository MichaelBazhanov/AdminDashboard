module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'prompt': ['Prompt', 'sans-serif'],
      },
      colors: {
        'main': '#f5f5f5',
        'yellow-me': '#fdbf5a',
        'gray-me': '#828282',
      },
      backgroundImage: {
        'map': "url('/src/asset/images/Vue.png')",
      },
      boxShadow: {
        'me': '0px 3px 20px rgba(0, 0, 0, 0.2)',
        'me-2': '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'me-3': '0px 5px 20px 2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'menu-in': 'menu-in 0.3s linear forwards alternate', //infinite
        'menu-out': 'menu-out 0.3s linear forwards alternate', //infinite
      },
      keyframes: {
        'menu-in': {
          '0%': { transform: 'translate(-100%, 0)', opacity: '0%' },
          '100%': { transform: 'translate(0%, 0)', opacity: '100%' },
        },
        'menu-out': {
          '0%': { transform: 'translate(0%, 0)', opacity: '100%' },
          '100%': { transform: 'translate(-100%, 0)', opacity: '0%' },
        }
      }
    },
  },
  plugins: [],
}

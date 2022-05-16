module.exports = {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-3deg)' },
          '40%': { transform: 'rotate(6deg)' },
          '100%' : {transform: 'rotate(0deg)' },
        },
        onload: {
          '0%' : { opacity: '0'},
          '50%' : { opacity: '0.4'},
          '100%' : { opacity: '1'},
        },
      },
      animation: {
        'spin-slow': 'spin 1s linear 2',
        'bounce-twice' : 'bounce 1s linear 2.5',
        'wiggle' : 'wiggle 1s ease-in-out',
        'loading' : 'onload 1s linear',
      }
    }
  },
  plugins: [],
}

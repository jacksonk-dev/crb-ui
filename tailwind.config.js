/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { 
            transform: 'scale(-1)',
            opacity: 0,
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: 1
          },
        },
        bounceCustom: {
          '0%': {
            transform: 'translateY(-100%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '20%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '40%': {
            transform: 'translateY(-80%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '60%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '80%': {
            transform: 'translateY(-60%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'zoom': 'zoomIn 1.5s ease-out',
        'bounce-finite': 'bounceCustom 1s linear'
      },
    },
  },
  plugins: [],
};


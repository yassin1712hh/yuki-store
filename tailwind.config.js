/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#8B5CF6',
        'secondary-blue': '#7C3AED',
        'accent-blue': '#A78BFA',
        'light-blue': '#C4B5FD',
        'dark-bg': '#1A0B2E',
        'card-bg': '#2D1B4E',
        'border-gray': '#4C2A85',
        'text-gray': '#1E1B4B',
        'text-secondary': '#5B21B6',
        'yuki-purple': '#B39CD0',
        'yuki-lavender': '#4C2A85',
        'yuki-dark': '#7C3AED',
        'danger-red': '#EF4444',
        'success-green': '#10B981',
      },
      fontFamily: {
        'professional': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotateSlow 8s linear infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
            transform: 'scale(1.02)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.768rem',
        '8xl': '5.96rem',
        '9xl': '7.451rem',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
      },
    },
  },
  plugins: [],
};
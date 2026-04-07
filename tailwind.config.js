/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        muted: '#71717A',
        accent: '#F4F4F5',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'parallax': 'parallax 10s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

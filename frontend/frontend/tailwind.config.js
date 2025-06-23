/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
      content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideRight: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } }
      },
      animation: {
        fadeIn: 'fadeIn 0.9s ease-in-out',
        slideRight: 'slideRight 0.9s ease-in-out',
      }
    }
  }
  } },
  plugins: [],
}

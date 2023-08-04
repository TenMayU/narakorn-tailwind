/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['var(--font-kanit)'],
      mono: ['var(--font-kanitlight)']
    },
    colors: {
      transparent: 'transparent',
    },
  },
  },
  plugins: [],
}


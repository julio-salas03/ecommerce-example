const spacerGen = (arr) => {
  return arr.reduce((acc, curr) => ({ ...acc, [curr]: `${curr}px` }), {})
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: spacerGen([10, 20, 120]),
    extend: {
      colors: { blue: { darker: "#00171f", dark: "#003459", DEFAULT: "#00A7E1", medium: "#007ea7" } }
    },
  },
  plugins: [],
}

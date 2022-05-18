const colors = require('tailwindcss/colors')

module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gradient-to-r',
    {
      pattern: /to-(gray|green|blue)-(100|200|300|500|600|700|800|900)/,
      pattern: /from-(gray|green|blue)-(100|200|300|500|600|700|800|900)/,
      
    },
  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      }
    },
  },

  plugins: [],
}

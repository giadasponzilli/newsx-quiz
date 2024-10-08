/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html",
  "./src/**/*.js", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
      'custom-color-purple': '#B4B1D4', // Define your custom color here
      'custom-color-grey': '#585858',
      'custom-color-purple-hover': '#645BC1',
      'custom-color-purple-gradient': '#923B99',
    },
    fontFamily: {
      serif: ['Times New Roman', 'Times', 'serif'],
      oswald: ['Oswald', 'sans-serif'],
      'open-sans': ['"Open Sans"', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    fontWeight: {
      'extra-bold': 900,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


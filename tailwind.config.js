// https://tailwindcss.com/docs/theme

module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //overrides default
    extend: {
      colors: {
        primary: "#59679D",
        secondary: "#dfe1e2",
        terciary: "#8dbce3",
        black: "#1b1b1b",
        gray: {
          "200": "#dfe1e2",
          "400": "#a9aeb1"
        },
      }
    } // extends default
  },
  variants: {
    //overrides default
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled']
    } // extends default
  },
  plugins: []
};

// tailwind.config.js

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   darkBlue: '#0F4C75',
    //   primaryBlue: '#3282B8'
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "caldar-dark-gray": "#010409",
      },
      fontFamily: {
        default: [
          '"Inter"',
          '"-apple-system"',
          '"BlinkMacSystemFont"',
          '"Segoe UI"',
          '"Roboto"',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          '"sans-serif"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

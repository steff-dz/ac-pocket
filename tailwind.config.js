const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: {
        DEFAULT: "#c48d3f",
      },
      yellow: {
        DEFAULT: "#fff563",
      },
      white: {
        DEFAULT: "#f8f8f8",
      },
      black: {
        DEFAULT: "#333",
      },
      green: {
        DEFAULT: "#3ba14e",
      },
      gray: colors.trueGray,
    },
    animation: {
      "spin-slow": "spin 2s linear infinite",
    },
  },
};

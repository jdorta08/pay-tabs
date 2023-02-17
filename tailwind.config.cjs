/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      //max width =>
      "-2xl": { max: "1535px" },
      "-xl": { max: "1279" },
      "-lg": { max: "1023px" },
      "-md": { max: "767px" },
      "-sm": { max: "639px" },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {},
  },
  plugins: [],
};

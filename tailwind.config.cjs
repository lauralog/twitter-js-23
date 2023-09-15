/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.sass", "./assets/**/*.scss", "./app/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"]
    },
    extend: {
      colors: {
        primary: 'rgb(29, 135, 240)',
        black: '#141414',
        dark_gray: 'rgb(22, 24, 28)',
        mid_gray: '#606060', // (61, 61, 61)
        light_gray: '#B8B8B8',
        white: 'rgb(255, 255, 255)',
        green: '#57EB89',
        red: '#EB5757',
      },
      fontSize: {
        base: ".95rem"
      },
      fontFamily: {
        source_sans: "'Source Sans Pro'",
      },
    },
  },
  plugins: [],
};

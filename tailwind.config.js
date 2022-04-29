module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
        },
        Neutral: {
          whiteCus: "hsla(0, 0%, 100%, 0.75)",
          grayCus: "hsl(0, 0%, 95%)",
        },
      },
      fontFamily: {
        lexend: ["'Lexend Deca', sans-serif"],
        big: ["'Big Shoulders Display', cursive;"],
      },
    },
  },
  plugins: [],
};

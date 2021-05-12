module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark_header: "#2b3743",
        dark_main: "#212e37",
        light_header: "#ffffff",
        light_main: "#eeeeee",
      },
      minHeight: {
        header: "10vh",
        main: "90vh",
        card: "200px",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

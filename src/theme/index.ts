import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#e0fbf9",
      100: "#c1ece8",
      200: "#9fddd7",
      300: "#7ccec7",
      400: "#59bfb7",
      500: "#40a69d",
      600: "#2e817a",
      700: "#1d5d57",
      800: "#093835",
      900: "#001512",
    },
    secondary: {
      50: "#f2f2f8",
      100: "#d8d8da",
      200: "#bebebf",
      300: "#a3a3a4",
      400: "#89898a",
      500: "#707071",
      600: "#575759",
      700: "#3e3e3f",
      800: "#252527",
      900: "#0c0c12",
    },
  },
  components: {
    Input: {
      baseStyle: {
        borderColor: "primary.500",
        selectionColor: "primary.500",
        color: "white",
        placeholder: "null",
      },
    },
    Button: {
      baseStyle: {
        bg: "primary.500",
        _text: { color: "white", bold: true },
      },
    },
    Link: {
      baseStyle: {
        _text: { color: "primary.500", bold: true },
      },
    },
  },
});

export default theme;

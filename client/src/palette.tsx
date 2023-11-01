import { createTheme } from "@mui/material/styles";

const sand = "#d8bd8a";
const dark = "#2C262C";
const white = "#00000";

export const theme = createTheme({
  palette: {
    primary: {
      main: sand,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: dark,
      light: white,
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

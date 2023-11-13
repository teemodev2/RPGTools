import { createTheme } from "@mui/material/styles";

// https://coolors.co/palette/6f1d1b-bb9457-432818-99582a-ffe6a7

const sand = "#BB9457";
const pearl = "#FFE6A7";
const dark = "#2C262C";
const white = "#00000";
const darkBrown = "#432818";

export const theme = createTheme({
  palette: {
    primary: {
      main: sand,
      light: pearl,
      dark: darkBrown,
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

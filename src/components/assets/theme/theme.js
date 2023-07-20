import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const newtheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

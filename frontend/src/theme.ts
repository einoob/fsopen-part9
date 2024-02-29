import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#326161",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            opacity: 0.9,
            backgroundColor: "#dfeddf",
          },
        },
      },
    },
  },
});
export default theme;

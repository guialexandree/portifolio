import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#3399ff'
    },
    secondary: {
      main: '#ffa726'
    },
    background: {
      default: '#121212'
    }
  }
})
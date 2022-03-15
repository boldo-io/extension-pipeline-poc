import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import '../styles/globals.css';


const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

const MyApp = ({ Component, pageProps }) => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp

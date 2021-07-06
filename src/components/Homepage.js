import React from "react";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Homepage = () => {
    const theme = createMuiTheme({
        typography: {
          h2: {
            fontSize: 25,
            marginBottom: 15,
            color: "white",
          }
        }
      })
      

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">AURAL//PSYNAPSE</Typography>
      </ThemeProvider>
    </div>
  );
};

export default Homepage;

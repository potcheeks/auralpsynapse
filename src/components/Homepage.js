import React from "react";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import WordOfTheDay from "./WordOfTheDay";
import TestCard from "./TestCard";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 45,
      marginBottom: 15,
      color: "white",
    },
  },
});

const Homepage = () => {
  



  return (
    <div>
      <Container>
        <ThemeProvider theme={theme}>
          <Typography className="headertitles" variant="h2">
            AURAL || PSY-NAPSE
          </Typography>
        </ThemeProvider>
        <WordOfTheDay />
        <br />
        <Grid container>
         
          <Grid item xs={12} sm={6} md={4}>
            <TestCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;

import React from "react";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CardOne from "./CardOne";
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
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));


  // grid is 12

  return (
    <div>
      <Container>
        <ThemeProvider theme={theme}>
          <Typography className="headertitles" variant="h2">
            AURAL || PSY-NAPSE
          </Typography>
        </ThemeProvider>
        <CardOne />
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TestCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;

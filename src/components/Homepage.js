import React from "react";
import ReactPlayer from "react-player";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import WordOfTheDay from "./WordOfTheDay";
import TestCard from "./TestCard";
import News from "./News"


const Homepage = () => {
  
    const theme = createMuiTheme({
        typography: {
          h2: {
            fontSize: 45,
            marginBottom: 15,
            color: "white",
          },
        },
      });


  return (
    <div>
      <Container >
        <ThemeProvider theme={theme}>
          <Typography className="headertitles" variant="h2">
            AURAL || PSY-NAPSE
          </Typography>
        </ThemeProvider>
        <br />
        <Grid container spacing={2} >
        <Grid item xs={12} sm={9} md={8}>
          <WordOfTheDay />
          </Grid>

          <Grid item xs={12} sm={3} md={4}>
          <TestCard />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <News/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={5}>
          <ReactPlayer url="https://www.youtube.com/watch?v=3bvPn2WRLkY" 
          width="800px" 
          height="450px"/>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;

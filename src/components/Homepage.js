import React from "react";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CardOne from "./CardOne"
import TestCard from "./TestCard"

  const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 45,
        marginBottom: 15,
        color: "white",
      }
    }
  })

const Homepage = () => {
   
    
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));  
      
      const classes = useStyles();

  return (
    <divc className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography className="headertitles" variant="h2">AURAL || PSY-NAPSE</Typography>
      </ThemeProvider>
      <CardOne />

      <Grid container spacing={1}>
          <Grid item xs>
          <Paper className={classes.paper}><TestCard /></Paper>
          </Grid>

          <Grid item xs>
          <Paper className={classes.paper}><TestCard /></Paper>
          </Grid>

          <Grid item xs>
          <Paper className={classes.paper}><TestCard /></Paper>
          </Grid>
      </Grid>
      
    </divc>
  );
};

export default Homepage;

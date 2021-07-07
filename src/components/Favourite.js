import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";



const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 45,
      marginBottom: 15,
      color: "white",
    },
  },
});

export default function Favourite({ fav }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();
  console.log("app",fav)

  return (
    <div>
    
      <Container>

      <ThemeProvider theme={theme}>
        <Typography className="headertitles" variant="h2">
          MY PLAYLIST
        </Typography>
      </ThemeProvider>

      
        <Grid container>
          {fav.map((item) => (
              <Grid item key={item.id} xs={12} md={6} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item?.strTrack}
                  height="140"
                  image={item?.strTrackThumb}
                  title={item?.strTrack}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {item?.strTrack}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item?.strDescriptionEN}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Read more
                </Button>
              </CardActions>
            </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

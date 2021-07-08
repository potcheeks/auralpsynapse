import * as React from 'react';
import ReactPlayer from "react-player";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MusicVideo = ({ videoInfo, setFav, fav }) => {
  const classes = useStyles();


  const handleSaveList = () => {
    setFav([...fav,videoInfo])
  };

  
 

  return (
    <>
    
      <div className="reactplayer">
           <ReactPlayer url={videoInfo.strMusicVid} width="1200px" height="360px"/>
           </div>

     
      <div className="songdescription">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body2" component="p">
              {videoInfo.strDescriptionEN}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleSaveList} size="small">Add to Playlist</Button>
          </CardActions>
        </Card>
      </div>
     
    </>
  );
};

export default MusicVideo;

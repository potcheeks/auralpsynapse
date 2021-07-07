import React, {useState} from "react";
import ReactPlayer from "react-player";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


export const ThemeContext = React.createContext()

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

const MusicVideo = ({ videoInfo }) => {
  const classes = useStyles();
  const [playlist, setPlaylist] = useState();
  


  const saveList = () => {
    setPlaylist(videoInfo)
    
  };

  console.log("this is my playlist",playlist)
 
  

  return (
    <>
    
      <div className="reactplayer">
           <ReactPlayer url={videoInfo.strMusicVid} />
      </div>

     
      <div className="songdescription">
      <ThemeContext.Provider value = {playlist}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body2" component="p">
              {videoInfo.strDescriptionEN}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={saveList} size="small">Add to Playlist</Button>
          </CardActions>
        </Card>
        </ThemeContext.Provider>
      </div>
      
    </>
  );
};

export default MusicVideo;

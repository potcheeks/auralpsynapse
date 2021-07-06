import React from "react";
import ReactPlayer from "react-player";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const MusicVideo = ({ videoInfo }) => {
  const theme = createMuiTheme({
    typography: {
      h4: {
        fontSize: 15,
        marginTop: 15,
        color: "white",
        backgroundColor: "black",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ReactPlayer url={videoInfo.strMusicVid} />

        <Typography variant="h4">{videoInfo.strDescriptionEN}</Typography>
      </div>
    </ThemeProvider>
  );
};

export default MusicVideo;

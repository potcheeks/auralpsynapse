import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 45,
      marginBottom: 15,
      color: "white",
    }
  }
})

const ArtistSelection = ({setFav, fav}) => {
  const [input, setInput] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [artist, setArtist] = useState("");
  const [error, setError] = useState(null)


  const handleChange = (event) => {
    setInput(event.target.value);
  }; // gets value from input text

  const handleClick = (event) => {
    setArtist(input);
    event.preventDefault();
  }; // logs the final value under state artist

  useEffect(() => {
    // getting artistID which will not be displayed
    // using ID to churn list of videos that will be mapped

    const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

    const makeApiCall = () => {
      fetch(artistUrl)
        .then((res) => {
          console.log(res);
          if(!res.ok) {
            throw Error("could not fetch the data for that artist")
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if(!data.ok) {
            throw Error("could not fetch the data for that artist")
          }
            let artistId = data.artists[0].idArtist;
            fetch(
              `https://www.theaudiodb.com/api/v1/json/523532/mvid.php?i=${artistId}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log("videodata", data.mvids);
                let videoDataArray = [];
                for (let i = 0; i < data.mvids.length; i++) {
                  videoDataArray.push(data.mvids[i]);
                }
                setVideoData(videoDataArray)
                setError(null)
              }).catch(error => {
                setError(error.message);
              })
        });
    };
    if (artist !== "") {
      makeApiCall();
    }
  }, [artist]);



  return (
    <div className="container">
       <Container>
         { error && <div> {error} </div> }
      <ThemeProvider theme={theme}>
      <Typography className="headertitles" variant="h2">SEARCH</Typography>
      <TextField
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search for artist"
      />

      <Button
        variant="contained"
        size="small"
        type="submit"
        onClick={handleClick}
      >
        submit
      </Button>
      {artist === "" ? null : <Dropdown 
      videoData={videoData} 
      setFav={setFav}
      fav={fav}
      />}
    
    </ThemeProvider>
    </Container>
    </div>
  );
};

export default ArtistSelection;

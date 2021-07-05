import "./App.css";
import ArtistSelection from "./components/ArtistSelection";
import React, { useState, useEffect } from "react";

function App() {
  

  // const [artistId, setArtistId] = useState();
  // const [artist, setArtist] = useState
  // useEffect(() => { // getting artistID which will not be displayed
    
  //   const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

  //   const makeApiCall = () => {
  //     fetch(artistUrl)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("idArtist", data.artists[0].idArtist);
  //         setArtistId(data.artists[0].idArtist)
  //         setGenre(data.artists[0].strGenre);
  //       });
  //   };
  //   makeApiCall();
  // }, []);






  return (
    <>
    <ArtistSelection  />
    
    </>
  );
}

export default App;

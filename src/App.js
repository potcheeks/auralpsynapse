import "./App.css";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from "react";

function App() {
  const [artist, setArtist] = useState("Armin Van Buuren");

  const dropdownData = [
    { value: 1, name: "Mood" },
    { value: 2, name: "Generating Playlist..." },
    { value: 3, name: "Visual Orgasm" },
  ];

  //
  //

  //youtube video: http://theaudiodb.com/api/v1/json/${process.env.REACT_APP_APIKEY}/mvid.php?i=112024

  useEffect(() => {
    const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

    const makeApiCall = () => {
      fetch(artistUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("you have chosen", data.artists[0].strArtist);
          setArtist(data.artists[0].strArtist);
        });
    };
    makeApiCall();
  }, []);


  return (
    <form onSubmit={() => {}}>
      <div className="container">
        <input type="text" 
        Classname="typebox" />
        {artist}
        <Dropdown options={dropdownData} />
        <button type="submit">Beam me up Scottaye!</button>
      </div>
    </form>
  );
}

export default App;

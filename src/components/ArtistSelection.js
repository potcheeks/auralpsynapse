import React, { useState, useEffect } from "react";

const ArtistSelection = () => {
  const [input, setInput] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [artist, setArtist] = useState("");
  const textStyle = { color: "white" };

  const handleChange = (event) => {
    setInput(event.target.value);
  }; // gets value from input text

  const handleClick = (event) => {
    setArtist(input);
    event.preventDefault();
    console.log("hey")
  }; // logs the final value under state artist



  useEffect(() => {
    // getting artistID which will not be displayed
    // using ID to churn list of videos that will be mapped

    const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    
    const makeApiCall = () => {
      console.log(artistUrl);
      fetch(artistUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("idArtist", data.artists[0].idArtist);
          let artistId = data.artists[0].idArtist
          fetch(
            `https://www.theaudiodb.com/api/v1/json/523532/mvid.php?i=${artistId}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log("videodata", data.mvids);
              let videoDataArray= [];
              for (let i = 0; i < data.mvids.length; i++) {
                videoDataArray.push(data.mvids[i]); 
              }
              setVideoData(videoDataArray);
            });
        });
    };
    if (artist !== "") {
      makeApiCall();
    }
  }, [artist]);

console.log("this is the",videoData)

  return (
    <div className="container">
      <h1 style={textStyle}>SEARCH</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for artist"
        />
        <button type="submit" onClick={handleClick}>Submit</button>
     
      <h1 style={textStyle}>GENRE </h1>
      <select>
        {videoData.map((item, index) => (
          <option key={index}>{item.strTrack}</option>
        ))}
      </select>
    </div>
  );
};

export default ArtistSelection;

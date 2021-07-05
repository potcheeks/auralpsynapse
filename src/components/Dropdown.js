import React, { useState } from "react";
import MusicVideo from './MusicVideo'

export const Dropdown = ({videoData}) => {
  const [selectedSong, setSelectedSong] = useState("");
  const textStyle = { color: "white" };

    const dropdownChanged = e => {
        setSelectedSong(e.target.value);
    }    

    //  const musicUrl = "https://www.youtube.com/watch?v=gnIZ7RMuLpU"
  
  return (
    <div>
      <select value={selectedSong} onChange={dropdownChanged}>
        {videoData.map((item, index) => (
          <option key={index} value={index}>{item.strTrack}</option>
        ))}
      </select>
      {selectedSong === "" ? null 
      : <MusicVideo 
      videoInfo={videoData[selectedSong]}
      />}
    </div>
  );
};

export default Dropdown;

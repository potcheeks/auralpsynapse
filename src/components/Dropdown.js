import React, { useState } from "react";
import MusicVideo from './MusicVideo'
import '@fontsource/roboto';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export const Dropdown = ({videoData}) => {
  const [selectedSong, setSelectedSong] = useState("");


    const dropdownChanged = e => {
        setSelectedSong(e.target.value);
    }    

    //  const musicUrl = "https://www.youtube.com/watch?v=gnIZ7RMuLpU"
  
  return (
    <div>
      <Select
      value={selectedSong} 
      onChange={dropdownChanged}>
        {videoData.map((item, index) => (
          <option key={index} value={index} className="Select">{item.strTrack}</option>
        ))}
      </Select>
      {selectedSong === "" ? null 
      : <MusicVideo 
      videoInfo={videoData[selectedSong]}
      />}
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import MusicVideo from "./MusicVideo";
import "@fontsource/roboto";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Dropdown = ({ videoData, setFav, fav }) => {
  const [selectedSong, setSelectedSong] = useState("");
  const classes = useStyles();

  const dropdownChanged = (e) => {
    setSelectedSong(e.target.value);
  };

  

  return (
    <div>
        
      <FormControl variant="filled" className={classes.formControl}>
        <Select value={selectedSong} onChange={dropdownChanged}>
          {videoData.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item.strTrack}
            </MenuItem>
          ))}
        </Select>
        {selectedSong === "" ? null : (
          <MusicVideo videoInfo={videoData[selectedSong]} 
          setFav={setFav}
          fav={fav}
          />
        )}
      </FormControl>
     
    </div>
  );
};

export default Dropdown;

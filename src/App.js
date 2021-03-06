import "./App.css";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import React, { useState } from "react";

import "@fontsource/roboto";
import Container from "@material-ui/core/Container";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ArtistSelection from "./components/ArtistSelection";
import Favourite from "./components/Favourite";
import Homepage from "./components/Homepage";

function App() {
  const [selected, setSelected] = useState(0);
  const [fav, setFav] = useState([]);

  const history = useHistory();

  function HomeHandleClick() {
    history.push("/");
  }

  function SearchHandleClick() {
    history.push("/search");
  }

  function FavouriteHandleClick() {
    history.push("/playlist");
  }
  


  return (
    <>
    
      <Container maxWidth="lg">
        <div>
          <Switch>
            <Route path="/playlist">
              <Favourite
                fav={fav}
              />
            </Route>

            <Route path="/search">
              <ArtistSelection setFav={setFav} fav={fav}/>
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Container>

      <BottomNavigation
        className="stickToBottom"
        value={selected}
        onChange={(value, newValue) => setSelected(newValue)}
        style={{ width: "100%" }}
        showLabels
      >
        <BottomNavigationAction
          label="HOME"
          icon={<HomeIcon />}
          onClick={HomeHandleClick}
        />
        <BottomNavigationAction
          label="SEARCH"
          icon={<MusicNoteIcon />}
          onClick={SearchHandleClick}
        />
        <BottomNavigationAction
          label="PLAYLIST"
          icon={<FavoriteIcon />}
          onClick={FavouriteHandleClick}
        />
      </BottomNavigation>
    </>
  );
}

export default App;

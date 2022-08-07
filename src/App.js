import { useState, useEffect } from "react";

import React from "react";
import Page from "./components/Page";
import InitilisationFailed from "./components/InitilisationFailed";

import "./App.css";

function App() {
  const hues = ["blue", "green", "yellow", "orange", "red", "pink", "purple"];
  const [hue, setHue] = useState();
  const [colour, setColour] = useState();
  const [shortlist, setShortlist] = useState([]);

  // For error handling (failed API requests)
  const [initialised, setInitialised] = useState(false);
  const [apiError, setApiError] = useState(false);

  // Return a random hex based on the requested hue
  // Default is blue
  const fetchColour = async (hue = "blue") => {
    try {
      const response = await fetch(
        `https://x-colors.herokuapp.com/api/random/${hue}`,
        {
          method: "GET",
        },
        { params: { number: 1 } }
      );
      const data = await response.json();
      // Record if the API request is successful even once
      setInitialised(true);
      setColour(data.hex);
    } catch (err) {
      // Record API request error in state
      setApiError(true);
      console.log(err);
    }
  };

  const chooseHue = (hue) => {
    setHue(hue);
    fetchColour(hue);
  };

  // Load shortlisted colours from local storage
  const loadExistingShortlist = () => {
    const retrievedData = localStorage.getItem("storedColours");
    if (!retrievedData) {
      return;
    }
    const shortlistLatest = JSON.parse(retrievedData);
    setShortlist(shortlistLatest);
  };

  // Updates the shortlist array when a colour is saved
  // And fetches a new colour
  const addToShortlist = (colour, hue) => {
    setShortlist([...shortlist, colour]);
    fetchColour(hue);
  };

  // Saves shade to local storage
  const saveToStorage = (newShortlist) => {
    localStorage.setItem("storedShortlist", JSON.stringify(newShortlist));
  };

  useEffect(() => {
    // On load, return a random hex
    // and load the shortlist
    fetchColour(hue);
    loadExistingShortlist();
  }, []);

  // This runs when 'shortlist' is changed
  useEffect(() => {
    saveToStorage(shortlist);
  }, [shortlist]);

  return (
    <React.Fragment>
      {initialised === true ? (
        <Page
          hues={hues}
          fetchColour={fetchColour}
          chooseHue={chooseHue}
          colour={colour}
          shortlist={shortlist}
          addToShortlist={addToShortlist}
          hue={hue}
          apiError={apiError}
        ></Page>
      ) : (
        // If the API requests fails the first time, the error message will
        // replace all components on the screen
        <InitilisationFailed />
      )}
    </React.Fragment>
  );
}

export default App;

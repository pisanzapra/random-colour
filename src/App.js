import { useState, useEffect } from "react";

import React from "react";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";

function App() {
  const hues = ["blue", "green", "yellow", "orange", "red", "pink", "purple"];
  const [colour, setColour] = useState();
  const [shortlist, setShortlist] = useState([]);

  // Return a random hex based on the requested hue
  // Default is blue
  const fetchColour = async (hue = "blue") => {
    const response = await fetch(
      `https://x-colors.herokuapp.com/api/random/${hue}`,
      {
        method: "GET",
      },
      { params: { number: 1 } }
    );
    const data = await response.json();
    try {
      setColour(data.hex);
    } catch (err) {
      console.log(err);
    }
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
  const addToShortlist = (colour) => {
    console.log(colour);
    setShortlist([...shortlist, colour]);
    fetchColour();
  };

  // Saves shade to local storage
  const saveToStorage = (newShortlist) => {
    localStorage.setItem("storedShortlist", JSON.stringify(newShortlist));
  };

  useEffect(() => {
    // On load, return a random hex
    // and load the shortlist
    fetchColour();
    loadExistingShortlist();
  }, []);

  // This runs when 'shortlist' is changed
  useEffect(() => {
    saveToStorage(shortlist);
  }, [shortlist]);

  return (
    <React.Fragment>
      <TopBar hues={hues} fetchColour={fetchColour}></TopBar>
      <MainContent
        colour={colour}
        addToShortlistHandler={addToShortlist}
      ></MainContent>
    </React.Fragment>
  );
}

export default App;

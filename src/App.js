import { useState, useEffect } from "react";

import React from "react";
import TopBar from "./components/TopBar";
import CurrentColour from "./components/CurrentColour";

function App() {
  const [colour, setColour] = useState();

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

  useEffect(() => {
    // On load, return a random hex
    fetchColour();
  }, []);

  const hues = ["blue", "green", "yellow", "orange", "red", "pink", "purple"];

  return (
    <React.Fragment>
      <TopBar hues={hues} fetchColour={fetchColour}></TopBar>
      <CurrentColour colour={colour}></CurrentColour>
    </React.Fragment>
  );
}

export default App;

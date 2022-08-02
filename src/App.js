import { useState, useEffect } from "react";

import React from "react";
import Button from "./components/Button";

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

  // Maps all hue options to a Button component
  function huesList() {
    return hues.map((hue) => {
      return <Button displayText={hue} key={hue} fetchColour={fetchColour} />;
    });
  }

  return (
    <div style={{ backgroundColor: `${colour}` }}>
      <div>{huesList()}</div>
      <div>{colour}</div>
    </div>
  );
}

export default App;

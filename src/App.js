import { useState, useEffect } from "react";

import React from "react";
import ButtonGroup from "./components/ButtonGroup";

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
    <div
      className="d-flex flex-column vh-100"
      style={{ backgroundColor: `${colour}` }}
    >
      <div className="container-md container-fluid flex-fill py-2">
        <div>
          <span className="m-1">Choose a hue to see random colours</span>
          <ButtonGroup hues={hues} fetchColour={fetchColour}></ButtonGroup>
        </div>

        <div>{colour}</div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import "./App.css";
import React from "react";

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

  return (
    <div className="App" style={{ backgroundColor: `${colour}` }}>
      <a onClick={() => fetchColour("purple")}>purple</a>
      {colour}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import "./App.css";
import React from "react";

function App() {
  const [colour, setColour] = useState();

  const fetchColour = async () => {
    const response = await fetch(
      "https://x-colors.herokuapp.com/api/random/blue",
      {
        method: "GET",
      },
      { params: { number: 1, type: "light" } }
    );
    const data = await response.json();
    try {
      setColour(data.hex);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchColour();
  }, []);

  return (
    <div className="App">
      <span>{colour}</span>
    </div>
  );
}

export default App;

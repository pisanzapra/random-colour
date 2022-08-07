import React from "react";

import Heart from "./Heart";

const CurrentColour = (props) => {
  return (
    <div className="py-5 text-center">
      {/* Check for API error. If one has occurred, 
      prompt the user to try again. Otherwise,
      display the component showing what the shade hex
      code is  */}
      {props.apiError === true ? (
        <h1 className="display-2">Couldn't load a shade. Please try again.</h1>
      ) : (
        <h1 className="display-2">This shade is {props.colour}</h1>
      )}
      {/* Only show the save icon if the latest API request
      has been successful */}
      {props.apiError === false && (
        <Heart
          colour={props.colour}
          addToShortlistHandler={props.addToShortlistHandler}
          hue={props.hue}
        ></Heart>
      )}
    </div>
  );
};

export default CurrentColour;

import React from "react";

import Heart from "./Heart";

const CurrentColour = (props) => {
  return (
    <div className="py-5 text-center">
      <h1 className="display-2">This shade is {props.colour}</h1>
      <Heart
        colour={props.colour}
        addToShortlistHandler={props.addToShortlistHandler}
        hue={props.hue}
      ></Heart>
    </div>
  );
};

export default CurrentColour;

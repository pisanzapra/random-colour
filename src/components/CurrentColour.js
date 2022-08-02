import React from "react";

import Heart from "./Heart";

const CurrentColour = (props) => {
  return (
    <div className="py-5">
      <div className="display-2 text-center">
        This shade is {props.colour} <br />
        <Heart colour={props.colour} addToShortlistHandler={props.addToShortlistHandler} hue={props.hue}></Heart>
      </div>
    </div>
  );
};

export default CurrentColour;

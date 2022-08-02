import React from "react";

import Heart from "./Heart";
import ShortlistedArea from "./ShortlistedArea";

const CurrentColour = (props) => {
  return (
    <div className="display-2 text-center">
          This shade is {props.colour} <br />
          <Heart></Heart>
          </div>
  );
};

export default CurrentColour;

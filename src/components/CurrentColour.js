import React from "react";

import Heart from "./Heart";

const CurrentColour = (props) => {
  return (
    <div
      className="d-flex flex-column vh-100"
      style={{ backgroundColor: `${props.colour}` }}
    >
      <div className="container-md container-fluid flex-fill py-5">
        <div className="display-2 text-center">
          This shade is {props.colour} <br />
          <Heart></Heart>
        </div>
      </div>
    </div>
  );
};

export default CurrentColour;

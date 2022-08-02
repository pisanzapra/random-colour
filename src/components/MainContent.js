import React from "react";

import CurrentColour from "./CurrentColour";
import ShortlistedArea from "./ShortlistedArea";

const MainContent = (props) => {
  return (
    <div
      className="d-flex flex-column vh-100"
      style={{ backgroundColor: `${props.colour}` }}
    >
      <div className="container-md container-fluid flex-fill py-5">
        <CurrentColour colour={props.colour}></CurrentColour>
        <ShortlistedArea></ShortlistedArea>
      </div>
    </div>
  );
};

export default MainContent;

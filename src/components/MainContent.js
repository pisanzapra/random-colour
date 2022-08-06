import React from "react";

import CurrentColour from "./CurrentColour";
import NothingSaved from "./NothingSaved";
import ShortlistedArea from "./ShortlistedArea";

const MainContent = (props) => {
  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: `${props.colour}` }}
    >
      <div className="container-md py-5">
        <CurrentColour colour={props.colour} addToShortlistHandler={props.addToShortlistHandler} hue={props.hue}></CurrentColour>
        {props.shortlist.length === 0 ? <NothingSaved /> : 
        <ShortlistedArea shortlist={props.shortlist}></ShortlistedArea>}
      </div>
    </div>
  );
};

export default MainContent;

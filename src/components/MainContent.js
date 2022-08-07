import React from "react";

import CurrentColour from "./CurrentColour";
import NothingSaved from "./NothingSaved";
import ShortlistedArea from "./ShortlistedArea";

const MainContent = (props) => {
  return (
    <div
      className="min-vh-100 container-md py-5"
      style={{ backgroundColor: `${props.colour}` }}
    >
      <CurrentColour
        colour={props.colour}
        addToShortlistHandler={props.addToShortlistHandler}
        hue={props.hue}
        apiError={props.apiError}
      ></CurrentColour>
      {/* If no colours are saved, display a message
      instructing the user how they can save a colour */}
      {props.shortlist.length === 0 && props.apiError === false && (
        <NothingSaved />
      )}
      {/* If at least one colour has been saved, display
      this */}
      {props.shortlist.length > 0 && (
        <ShortlistedArea shortlist={props.shortlist}></ShortlistedArea>
      )}
    </div>
  );
};

export default MainContent;

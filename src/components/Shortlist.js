import React from "react";

import SavedShade from "./SavedShade";

const Shortlist = (props) => {
  function showShortlist() {
    return props.shortlist.map(function (colour, colourIndex) {
      return <SavedShade key={colourIndex} colour={colour} />;
    });
  }

  return <div className="row gy-4 p-4 text-center">{showShortlist()}</div>;
};

export default Shortlist;

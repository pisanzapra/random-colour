import React from "react";
import Shortlist from "./Shortlist";

const ShortlistedArea = (props) => {
  return (
    <div className="col-12 p-4">
      <div className="container-md py-4" style={{ backgroundColor: "white" }}>
        <h1 className="display-5 text-center">Saved</h1>
        <div className="px-2">
          <Shortlist shortlist={props.shortlist}></Shortlist>
        </div>
      </div>
    </div>
  );
};

export default ShortlistedArea;

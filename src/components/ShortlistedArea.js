import React from "react";
import Shortlist from "./Shortlist";

const ShortlistedArea = (props) => {
  return (
    <div className="col-12">
      <div className="container-md py-4" style={{ backgroundColor: "white" }}>
        <div className="display-5 text-center">Saved</div>
        <div className="px-2">
          <Shortlist shortlist={props.shortlist}></Shortlist>
        </div>
      </div>
    </div>
  );
};

export default ShortlistedArea;

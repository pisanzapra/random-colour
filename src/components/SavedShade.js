import React from "react";

const SavedColour = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-2 col-md-3">
        <div
          className="circle"
          style={{ backgroundColor: `${props.colour}` }}
        ></div><br></br>
        <span className="text-center">{props.colour}</span>
      </div>
    </React.Fragment>
  );
};

export default SavedColour;

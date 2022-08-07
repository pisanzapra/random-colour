import React from "react";

const Heart = (props) => {
  return (
    <div>
      <i
        className="bi bi-heart-fill display-1"
        onClick={() => props.addToShortlistHandler(props.colour, props.hue)}
        title="Save this colour"
      ></i>
    </div>
  );
};

export default Heart;

import React from "react";

const Heart = (props) => {
  return (
    <i
      className="bi bi-heart-fill display-1"
      onClick={() => props.addToShortlistHandler(props.colour, props.hue)}
    ></i>
  );
};

export default Heart;

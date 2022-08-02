import React from "react";

const Heart = (props) => {
  return <i className="bi bi-heart" onClick={() => props.addToShortlistHandler(props.colour)}></i>;
};

export default Heart;

import React from "react";

const Button = (props) => {
  return (
    <a
      className="btn btn-dark px-3 fs-3 button-100"
      onClick={() => props.fetchColour(props.displayText)}
    >
      <span> {props.displayText}</span>
    </a>
  );
};

export default Button;

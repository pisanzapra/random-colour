import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="btn btn btn-outline-light m-1"
      onClick={() => props.fetchColour(props.displayText)}
    >
      <span> {props.displayText}</span>
    </button>
  );
};

export default Button;

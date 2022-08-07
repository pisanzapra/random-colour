import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="btn btn-lg btn-outline-light m-2"
      onClick={() => props.chooseHue(props.displayText)}
    >
      <span> {props.displayText}</span>
    </button>
  );
};

export default Button;

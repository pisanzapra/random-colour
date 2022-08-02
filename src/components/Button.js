import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // <button
    //   className={classes.button}
    //   onClick={() => props.fetchColour(props.displayText)}
    // >
    //   <span> {props.displayText}</span>
    // </button>
    <button
    className="btn btn-primary"
    onClick={() => props.fetchColour(props.displayText)}
  >
    <span> {props.displayText}</span>
  </button>
  );
};

export default Button;

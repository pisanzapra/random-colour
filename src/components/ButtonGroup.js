import React from "react";

import Button from "./Button";

const ButtonGroup = (props) => {
  // Maps all hue options to a Button component
  function huesList() {
    return props.hues.map((hue) => {
      return (
        <Button displayText={hue} key={hue} fetchColour={props.fetchColour} chooseHue={props.chooseHue} />
      );
    });
  }

  return <div>{huesList()}</div>;
};

export default ButtonGroup;

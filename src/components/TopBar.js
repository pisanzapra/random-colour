import React from "react";

import ButtonGroup from "./ButtonGroup";
import Instruction from "./Instruction";

const TopBar = (props) => {
  return (
    <React.Fragment>
      <Instruction />
      <ButtonGroup hues={props.hues} fetchColour={props.fetchColour}></ButtonGroup>
    </React.Fragment>
  );
};

export default TopBar;

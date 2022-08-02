import React from "react";

import ButtonGroup from "./ButtonGroup";
import Instruction from "./Instruction";

const TopBar = (props) => {
  return (
    <div className="container-md container-fluid flex-fill py-2">
      <Instruction />
      <ButtonGroup hues={props.hues} fetchColour={props.fetchColour}></ButtonGroup>
    </div>
  );
};

export default TopBar;

import React from "react";

import ButtonGroup from "./ButtonGroup";
import Instruction from "./Instruction";

const TopBar = (props) => {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <div className="container-md container-fluid flex-fill py-2">
        <Instruction />
        <ButtonGroup
          hues={props.hues}
          fetchColour={props.fetchColour} chooseHue={props.chooseHue}
        ></ButtonGroup>
      </div>
    </div>
  );
};

export default TopBar;

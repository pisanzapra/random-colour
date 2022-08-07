import React from "react";

import TopBar from "./TopBar";
import MainContent from "./MainContent";

function Page(props) {
  return (
    <React.Fragment>
      <TopBar
        hues={props.hues}
        fetchColour={props.fetchColour}
        chooseHue={props.chooseHue}
      ></TopBar>
      <MainContent
        colour={props.colour}
        shortlist={props.shortlist}
        addToShortlistHandler={props.addToShortlist}
        hue={props.hue} 
        apiError={props.apiError}
      ></MainContent>
    </React.Fragment>
  );
}

export default Page;

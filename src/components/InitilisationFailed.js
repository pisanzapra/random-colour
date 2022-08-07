import React from "react";

const InitilisationFailed = () => {
  return (
    <div className="container-md p-5">
      <h1 className="display-2">Error</h1>
      <p>
        {/* Error screen for if the API connection has failed straight away */}
        Sorry, it doesn't seem to be possible to load the shade selector at the
        moment. Please try again later.
      </p>
    </div>
  );
};

export default InitilisationFailed;

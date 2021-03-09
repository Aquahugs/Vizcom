import React from "react";

const CollectButton = (collectImage) => {
  return (
    <a className="collect" onClick={collectImage}>
      Collect
      <i className="material-icons right">add_box</i>
    </a>
  );
};
export default CollectButton;

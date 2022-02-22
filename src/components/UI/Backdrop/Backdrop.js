import React from "react";

const Backdrop = (props) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.37)",
        position: "fixed",
        zIndex: "100",
        top: "0",
        left: "0",
      }}
      onClick={props.clicked}
    ></div>
  );
};

export default Backdrop;

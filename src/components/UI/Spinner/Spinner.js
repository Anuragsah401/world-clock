import React from "react";

import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div style={{ top: `${props.top}` }} className={classes.loader}>
      Loading...
    </div>
  );
};

export default Spinner;

import React from "react";
import classes from "./SideDrawer.module.css";
import ColorNavigation from "../ColorNavigation/ColorNavigation";

const SideDrawer = (props) => {
  return (
    <div className={classes.sideDrawer}>
      <ColorNavigation colorChangeHandler={props.colorChangeHandler} />
    </div>
  );
};

export default SideDrawer;

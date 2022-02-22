import React from "react";
import logo from "../../../assets/images/logo.svg";
import classes from "./ToolBar.module.css";
import ColorNavigation from "../ColorNavigation/ColorNavigation";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const ToolBar = (props) => {
  return (
    <div className={classes.toolBar}>
      <img onClick={() => window.location.reload()} src={logo} alt="" />
      <h3>World Clock</h3>
      <nav className={classes.onlyDesktop}>
        <ColorNavigation colorChangeHandler={props.colorChangeHandler} />
      </nav>
      <DrawerToggle />
    </div>
  );
};

export default ToolBar;

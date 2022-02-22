import React from "react";
import Aux from "../hoc/Auxiliary";
import ToolBar from "../components/Header/ToolBar/ToolBar";
import SideDrawer from "../components/Header/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <Aux>
      {/* <SideDrawer colorChangeHandler={props.colorChangeHandler} /> */}
      <ToolBar colorChangeHandler={props.colorChangeHandler} />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;

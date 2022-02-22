import React, { useState } from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "./ColorNavigation.module.css";
const ColorNavigation = (props) => {
  const [liItemColor, setliItemColor] = useState(null);

  const colorChange = (color) => {
    props.colorChangeHandler(color);
  };

  const liItemColorHandler = (liBackgroundcolors) => {
    setliItemColor(["classes", liBackgroundcolors].join("."));
  };

  // adding 2 methods in one single function
  const handler = (color, activeClass) => {
    colorChange(color);
    liItemColorHandler(activeClass);
  };

  // console.log(liItemColor);
  return (
    <Aux>
      <div className={classes.backgroundColors}>
        <ul className={classes.backgroundColorsItems}>
          <li className={[classes.backgroundColorsItem, classes.title].join(" ")}>
            Change Background :
          </li>
          <li
            onClick={() => handler("red", "active1")}
            className={[classes.backgroundColorsItem, liItemColor, classes.red].join(" ")}
          >
            Red
          </li>
          <li
            onClick={() => handler("blue", "active2")}
            className={[classes.backgroundColorsItem, classes.blue, liItemColor].join(" ")}
          >
            Blue
          </li>
          <li
            onClick={() => handler("yellow", "active3")}
            className={[classes.backgroundColorsItem, classes.yellow, liItemColor].join(" ")}
          >
            YEllo
          </li>
        </ul>
      </div>
    </Aux>
  );
};

export default ColorNavigation;

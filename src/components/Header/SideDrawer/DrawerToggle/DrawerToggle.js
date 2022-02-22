import React, { useState } from "react";
import classes from "./DrawerToggle.module.css";
const DrawerToggle = (props) => {
  const [toggled, settoggled] = useState(false);

  function myFunction() {
    settoggled(!toggled);
  }
  return (
    <button
      className={[
        classes.hamburger,
        classes.hamburgerElastic,
        toggled ? classes.isActive : null,
      ].join(" ")}
      onClick={myFunction}
    >
      <span className={classes.hamburgerBox}>
        <span className={classes.hamburgerInner}></span>
      </span>
    </button>
  );
};

export default DrawerToggle;

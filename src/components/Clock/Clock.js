import React from "react";

import classes from "./Clock.module.css";
import Spinner from "../UI/Spinner/Spinner";

const Clock = (props) => {
  let hours = props.hours;
  let minutes = props.minutes;
  let seconds = props.seconds;
  let ampm = props.ampm;

  // useEffect(() => {
  //   console.log("asdasd");
  //   return () => {
  //     hours = null;
  //     minutes = null;
  //     seconds = null;
  //   };
  // });

  return (
    <div className={classes.time}>
      {props.hours ? (
        <div>
          {`${hours}:${minutes}:${seconds}`}
          <span className={classes.ampm}>{ampm}</span>
          <div className={classes.caption}>{`${props.selectedCountryName} Current Time`}</div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Clock;

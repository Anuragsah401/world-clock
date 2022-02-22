import React from "react";
import classes from "./ClockControl.module.css";
import Aux from "../../../hoc/Auxiliary";

const ClockControl = (props) => {
  // const [localTimezone, setLocalTimezone] = useState(null);

  // useEffect(() => setLocalTimezone(props.localTimezone), [props.localTimezone]);

  let countries = null;

  if (props.countries) {
    countries = props.countries.map((country) => {
      return (
        <option key={country} value={country} selected={country === props.localTimezone}>
          {country}
        </option>
      );
    });
  }

  // console.log(countries);

  function selectedCountryHandler(event) {
    props.selectedCountryHandler(event.target.value);
  }

  // let value = undefined;
  // if (props.localTimezone) {
  //   value = props.LocalTimezone;
  // }

  return (
    <div className={classes.clockControl}>
      {props.localTimezone ? (
        <Aux>
          <label>Select region: </label>
          <select name="country" id="" onChange={selectedCountryHandler}>
            {props.error ? <option>Cannot Find region!</option> : countries}
            {/* {countries} */}
          </select>
        </Aux>
      ) : null}
    </div>
  );
};

export default ClockControl;

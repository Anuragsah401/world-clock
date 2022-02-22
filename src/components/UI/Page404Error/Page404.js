import React from "react";
import image from "../../../assets/images/for-pc.svg";

import classes from "./Page404.module.css";
import Aux from "../../../hoc/Auxiliary";

const Page404 = () => {
  return (
    <div className={classes.pageError}>
      <div className={classes.image}>
        <img src={image} alt="" />
      </div>

      <div className={classes.errorMessage}>
        <Aux className={classes.errorMessageContents}>
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a mystery. But you can
            click the button below to refresh page.
          </p>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </Aux>
      </div>
    </div>
  );
};

export default Page404;

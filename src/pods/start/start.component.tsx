import React from "react";

const imagen = require("../../assets/personalCard.svg");
//CSS
import * as classes from "./start.styles";

export const StartComponent: React.FunctionComponent = () => {
  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.h1}>BankClient</h1>
      </div>
      <div className={classes.container}>
        <h2 className={classes.h2}>Scan your ID</h2>
        <p className={classes.text}>
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <div className={classes.imageContainer}>
          <img src={imagen} />
          <button className={classes.button}>TAKE PICTURE</button>
        </div>
      </div>
    </>
  );
};

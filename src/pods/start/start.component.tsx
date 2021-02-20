import React from "react";

const image = require("../../assets/personalCard.svg");

//CSS
import * as classes from "./start.styles";

interface Props {
  onTakePicture: () => void;
}

export const StartComponent: React.FunctionComponent<Props> = (props) => {
  const { onTakePicture } = props;
  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.h1}>BankClient</h1>
      </div>
      <div className={classes.container}>
        <h2 className={classes.h2}>Scan your ID</h2>
        <p className={classes.text} role="paragraph">
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <div className={classes.imageContainer}>
          <img src={image} />
          <button className={classes.button} onClick={onTakePicture}>
            TAKE PICTURE
          </button>
        </div>
      </div>
    </>
  );
};

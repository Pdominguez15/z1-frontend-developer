import React from "react";

const image = require("../../assets/personalCard.svg");

//CSS
import * as classes from "./start.styles";

import { HeaderComponent } from "common-app/components/header";

interface Props {
  onTakePicture: () => void;
}

export const StartComponent: React.FunctionComponent<Props> = (props) => {
  const { onTakePicture } = props;
  return (
    <>
      <HeaderComponent />
      <div className={classes.imageContainer}>
        <img src={image} />
        <button className={classes.button} onClick={onTakePicture}>
          TAKE PICTURE
        </button>
      </div>
    </>
  );
};

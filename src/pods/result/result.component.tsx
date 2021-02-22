import React from "react";
import { cx } from "emotion";

//Context
import { MyContext } from "common-app/context";

//CSS
import * as classes from "./result.styles";

import { HeaderComponent } from "common-app/components/header";

interface Props {
  onTakePicture: () => void;
}

const valid = require("../../assets/valid.svg");
const invalid = require("../../assets/invalid.svg");

export const ResultComponent: React.FunctionComponent<Props> = (props) => {
  const { onTakePicture } = props;

  //Context
  const bankContext = React.useContext(MyContext);

  return (
    <>
      <HeaderComponent />
      <div className={classes.containerResult}>
        <div
          className={cx(
            classes.imageContainer,
            bankContext.status
              ? classes.imageContainerValid
              : classes.imageContainerInvalid
          )}
        >
          <img src={bankContext.image} />
          {!bankContext.status && (
            <button className={classes.button} onClick={onTakePicture}>
              RETAKE PICTURE
            </button>
          )}
        </div>
        {bankContext.status && (
          <div className={cx(classes.result, classes.accepted)}>
            <div>
              <img src={valid} />
            </div>
            <p role="paragraph">ACCEPTED</p>
          </div>
        )}
        {!bankContext.status && (
          <div className={cx(classes.result, classes.rejected)}>
            <div>
              <img src={invalid} />
            </div>
            <p role="paragraph">REJECTED</p>
          </div>
        )}
      </div>
    </>
  );
};

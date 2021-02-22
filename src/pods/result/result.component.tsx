import React from "react";
import { cx } from "emotion";

//Context
import { MyContext } from "common-app/context";

//CSS
import * as classes from "./result.styles";

interface Props {
  onTakePicture: () => void;
}

const valid = require("../../assets/valid.svg");
const invalid = require("../../assets/invalid.svg");

export const ResultComponent: React.FunctionComponent<Props> = (props) => {
  const { onTakePicture } = props;

  //Context
  const bankContext = React.useContext(MyContext);

  React.useEffect(() => {
    console.log(bankContext);
  });

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
              <p>ACCEPTED</p>
            </div>
          )}
          {!bankContext.status && (
            <div className={cx(classes.result, classes.rejected)}>
              <div>
                <img src={invalid} />
              </div>
              <p>REJECTED</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

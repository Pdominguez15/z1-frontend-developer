import React from "react";
import { cx } from "emotion";
import Webcam from "react-webcam";

//Context
import { MyContext } from "common-app/context";

//Router
import { useHistory } from "react-router-dom";
import { switchRoutes } from "core/router";

const light = require("../../assets/light.svg");
const check = require("../../assets/check.svg");

//CSS
import * as classes from "./camera.styles";

interface Props {
  isValid: boolean;
}

export const CameraComponent: React.FunctionComponent<Props> = (props) => {
  const { isValid } = props;

  //Context
  const bankContext = React.useContext(MyContext);

  const webcamRef = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    if (isValid) {
      setTimeout(() => {
        saveImageContext();
        bankContext.setStatus(true);
        history.push(switchRoutes.finish);
      }, 1000);
    }
  }, [isValid]);

  const saveImageContext = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    bankContext.setImage(imageSrc);
  }, []);

  const handleCancel = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    bankContext.setImage(imageSrc);
    bankContext.setStatus(false);
    history.push(switchRoutes.finish);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>Take picture</h1>
        <p className={classes.text} role="paragraph">
          Fit your ID card inside the frame.
        </p>
        <p className={classes.text} role="paragraph">
          The picture will be taken automatically.
        </p>
        <div
          className={cx(
            classes.cameraContainer,
            isValid
              ? classes.cameraContainerValid
              : classes.cameraContainerInvalid
          )}
        >
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            role="video"
          />
        </div>
        <div className={classes.message}>
          {!isValid && (
            <>
              <img src={light}></img>
              <p className={classes.textMessage} role="paragraph">
                Room lighting is too low
              </p>
            </>
          )}
          {isValid && (
            <>
              <img src={check}></img>
              <p className={classes.textMessage} role="paragraph">
                Picture taken!
              </p>
            </>
          )}
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

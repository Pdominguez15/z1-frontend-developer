import React from "react";
import Webcam from "react-webcam";

const image = require("../../assets/light.svg");

//CSS
import * as classes from "./camera.styles";

export const CameraComponent: React.FunctionComponent = () => {
  const webcamRef = React.useRef(null);

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>Take picture</h1>
        <p className={classes.text}>Fit your ID card inside the frame.</p>
        <p className={classes.text}>The picture will be taken automatically.</p>
        <div className={classes.cameraContainer}>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>
        <div className={classes.message}>
          <img src={image}></img>
          <p className={classes.textMessage}>Room lighting is too low</p>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>CANCEL</button>
        </div>
      </div>
    </>
  );
};

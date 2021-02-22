import React from "react";

//API
import * as api from "./api";

import { CameraComponent } from "./camera.component";

export const CameraContainer: React.FunctionComponent = () => {
  const [isValid, setisValid] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const myInterval = setInterval(async () => {
      await api
        .checkImage(signal)
        .then((result) => {
          console.log(result.summary.outcome);
          if (result.summary.outcome === "Approved") {
            setisValid(true);
          } else {
            setisValid(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    return () => {
      clearInterval(myInterval);
      abortController.abort();
    };
  }, []);

  return (
    <>
      <CameraComponent isValid={isValid} />
    </>
  );
};

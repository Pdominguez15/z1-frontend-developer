import React from "react";
import { StartComponent } from "./start.component";

import { useHistory } from "react-router-dom";
import { switchRoutes } from "core/router";
export const StartContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const handleClick = React.useCallback(() => {
    history.push(switchRoutes.scaner);
  }, []);
  return (
    <>
      <StartComponent onTakePicture={handleClick} />
    </>
  );
};

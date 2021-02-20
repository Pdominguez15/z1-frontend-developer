import React from "react";

//Router
import { useHistory } from "react-router-dom";
import { switchRoutes } from "core/router";

import { StartComponent } from "./start.component";

export const StartContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const handleClick = React.useCallback(() => {
    history.push(switchRoutes.scanner);
  }, []);

  return (
    <>
      <StartComponent onTakePicture={handleClick} />
    </>
  );
};

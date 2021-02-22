import React from "react";

//Router
import { useHistory } from "react-router-dom";
import { switchRoutes } from "core/router";

import { ResultComponent } from "./result.component";

export const ResultContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const handleClick = React.useCallback(() => {
    history.push(switchRoutes.scanner);
  }, []);

  return (
    <>
      <ResultComponent onTakePicture={handleClick} />
    </>
  );
};

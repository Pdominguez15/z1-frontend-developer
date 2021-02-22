import React from "react";
import { MyContextProvider } from "common-app/context";
import { RouterComponent } from "core/router";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <MyContextProvider>
        <RouterComponent />
      </MyContextProvider>
    </>
  );
};

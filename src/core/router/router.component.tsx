import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { InitialScene, ScannerScene, FinishScene } from "scenes/principal";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={InitialScene} />
        <Route
          exact={true}
          path={switchRoutes.scanner}
          component={ScannerScene}
        />
        <Route
          exact={true}
          path={switchRoutes.finish}
          component={FinishScene}
        />
      </Switch>
    </Router>
  );
};

import React from "react";

//CSS
import * as classes from "./header.styles";

export const HeaderComponent: React.FunctionComponent = () => {
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
      </div>
    </>
  );
};

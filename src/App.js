import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.scss";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => {
  return (
    <Fragment>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;

import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./components/signInSignUp/SignInSignUp";
import NavBar from "./components/layout/NavBar";

import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, MusicDetails } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/music" exact component={MusicDetails} />
    </Switch>
  );
};

export default Routes;

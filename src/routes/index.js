import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import MusicDetails from "../pages/MusicDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/music/:id" exact component={MusicDetails} />
    </Switch>
  );
};

export default Routes;

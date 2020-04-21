import React from "react";
import { Switch, Route } from "react-router-dom";
// Import Router
import routes from "./routes";

const createSwitchRoutes = () => (
  <Switch>
    {routes.map((route) => {
      return <Route key={route.path} {...route} />;
    })}
  </Switch>
);

export default createSwitchRoutes;

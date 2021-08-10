import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "../App";
import { AdmRouter } from "./AdmRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/adm"} component={AdmRouter} />

          <Route exact path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

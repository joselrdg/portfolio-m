import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginScreen } from "../dashboard/auth/LoginScreen";
import { DashboardScreen } from "../dashboard/DashboardScreen";
import { UserContextProvider } from "../context/UserContext";

export const AdmRouter = () => {
  return (
    <Router>
      <Switch>
        <UserContextProvider>
          <Route exact path={"/adm/login"} component={LoginScreen} />
          <Route exact path={"/adm/dashboard"} component={DashboardScreen} />
          <Redirect to="/adm/login" />
        </UserContextProvider>
      </Switch>
    </Router>
  );
};

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import { Main } from "../components/Main";
  import { LoginScreen } from "../dashboard/auth/LoginScreen";
  import { DashboardScreen } from "../dashboard/DashboardScreen";
  // import { RegisterScreen } from "../dashboard/auth/RegisterScreen";
  
  export const AppRouter = () => {
    
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={HomeScreen} /> */}
            <Route exact path="/" component={Main} />
            <Route exact path={"/auth/login"} component={LoginScreen} />
            <Route exact path={"/adm/dashboard"} component={DashboardScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  };
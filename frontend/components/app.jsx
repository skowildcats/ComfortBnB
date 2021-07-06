import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <SplashNavContainer />
    <Switch>
      <ProtectedRoute exact path="/browse" component={LogInFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer}/>
      <Route exact path="/" component={SplashPage} />
    </Switch>
  </>
);

export default App;
import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import SplashAuth from "./splash/splash_auth";
import SplashModal from "./splash/splash_modal";
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <SplashNavContainer />
    <Switch>
      <ProtectedRoute exact path="/browse" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SplashModal}/>
      <Route exact path="/" component={SplashPage} />
    </Switch>
  </>
);

export default App;
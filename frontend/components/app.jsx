import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import SignUpFormContainer from "./session_form/signup_form_container"

const App = () => (
  <>
    <SplashPage />
    <Switch>
    </Switch>
  </>
);

export default App;
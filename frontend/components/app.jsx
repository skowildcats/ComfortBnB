import React from "react";
import SplashContainer from "./splash/splash_container"
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import SignUpFormContainer from "./session_form/signup_form_container"

const App = () => (
  <>
    <SplashContainer />
    <Switch>
    </Switch>
  </>
);

export default App;
import React from "react";
import SplashContainer from "./splash/splash_container"
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import SignUpFormContainer from "./session_form/signup_form_container"

const App = () => (
  <div className="nav-bar">
    <header>
      <Link to="/" className="home-link">
        ComfortBnB
      </Link>
    </header>
    <SplashContainer />
    <Switch>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import SplashModal from "./splash/splash_modal";
import { Link, Switch, Route } from 'react-router-dom';
import LogInFormContainer from "./session_form/login_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileShowContainer from '../components/profile/profile_show_container'


const App = () => (
  <>
    <SplashNavContainer />
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <ProtectedRoute exact path="/browse" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SplashModal}/>
      <Route path="/users/:userId" component={ProfileShowContainer} />
    </Switch>
  </>
);

export default App;
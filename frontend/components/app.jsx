import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import SplashModal from "./splash/splash_modal";
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileShowContainer from '../components/profile/profile_show_container'
import BrowsePageContainer from "./browse/browse_page_container";
import NavListener from "./splash/nav_listener";


const App = () => (
  <>
    <SplashNavContainer />
    <Route exact path="/" component={SplashPage} />
    <Switch>
      <Route exact path="/" component={NavListener} />
      <ProtectedRoute exact path="/browse" component={BrowsePageContainer} />
      <AuthRoute exact path="/signup" component={SplashModal}/>
      <Route path="/users/:userId" component={ProfileShowContainer} />
    </Switch>
  </>
);

export default App;
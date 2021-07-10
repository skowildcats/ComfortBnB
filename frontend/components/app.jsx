import React from "react";
import SplashNavContainer from "./splash/splash_nav_container"
import SplashPage from "./splash/splash_page";
import SplashModal from "./splash/splash_modal";
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileShowContainer from '../components/profile/profile_show_container'
import BrowsePageContainer from "./browse/browse_page_container";
import NavListener from "./splash/nav_listener";
import PropertyDetailContainer from "./property/property_detail_container"
import TripView from './trip/trip_view'


const App = () => (
  <>
    <SplashNavContainer />
    <Route exact path="/" component={SplashPage} />
    <Switch>
      <Route exact path="/" component={NavListener} />
      <ProtectedRoute exact path="/browse" component={BrowsePageContainer} />
      <AuthRoute exact path="/signup" component={SplashModal}/>
      <ProtectedRoute path="/browse/:propertyId" component={PropertyDetailContainer} />
      <ProtectedRoute path="/users/:userId" component={ProfileShowContainer} />
      <ProtectedRoute path="/trips" component={TripView} />
    </Switch>
  </>
);

export default App;
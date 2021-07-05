import SplashNavContainer from "./splash_nav_container";
import React from 'react';

class SplashPage extends React.Component {

  render() {
    return (
      
      <div className="splash-page">
        <SplashNavContainer />
        <div className="splash-body">
          Body Text
        </div>
      </div>
    )
  }
}

export default SplashPage
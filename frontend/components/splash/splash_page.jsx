import SplashNavContainer from "./splash_nav_container";
import React from 'react';
import SearchBarContainer from './search_bar_container'
import {Link, withRouter} from 'react-router-dom'


class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash-search">
        <div className="splash-background"></div>
        <SearchBarContainer  />
        <div className="splash-content">
          <div className="splash-body">
            <Link to="/browse" className="splash-text-background">
              <div className="splash-text">Take me to a comfort place</div>
            </Link>
            </div>
          <h1 className="splash-explore"> Explore nearby
            <div className="explore-cities">
              <div className="city-content"> 
                <div className="city-image chicago">
                </div> 
                <div className="city-name">
                  Chicago
                  <div className="city-description">
                    Chicago theatre
                  </div>
                </div>
              </div>
              <div className="city-content">
                <div className="city-image new-york">
                </div>
                <div className="city-name">
                  New York
                  <div className="city-description">
                    Brooklyn bridge
                  </div>
                </div>
              </div>
              <div className="city-content">
                <div className="city-image san-francisco">
                </div>
                <div className="city-name">
                  San Francisco
                  <div className="city-description">
                    Golden gate bridge
                  </div>
                </div>
              </div>
              <div className="city-content">
                <div className="city-image los-angeles">
                </div>
                <div className="city-name">
                  Los Angeles
                  <div className="city-description">
                    Hollywood sign
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        
      </div>
    )
  }
}

export default withRouter(SplashPage)
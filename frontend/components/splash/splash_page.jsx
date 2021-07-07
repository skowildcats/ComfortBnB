import SplashNavContainer from "./splash_nav_container";
import React from 'react';
import SearchBar from './search_bar'
import {Link, withRouter} from 'react-router-dom'


class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash-search">
        <div className="splash-background"></div>
        <SearchBar  />
        <div className="splash-content">
          <div className="splash-body">
            <div className="splash-text-background">
              <Link to="/browse" className="splash-text">Take me to a comfort place</Link>
            </div>
            </div>
          <h1 className="splash-explore"> Explore nearby</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(SplashPage)
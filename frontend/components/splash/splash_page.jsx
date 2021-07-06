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
        <SearchBar />
        <Link to="/browse" className="splash-body">Explore nearby</Link>
      </div>
    )
  }
}

export default withRouter(SplashPage)
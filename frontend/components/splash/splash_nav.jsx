import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container'
import { withRouter } from 'react-router-dom';
import SplashAuth from './splash_auth';

// $(".nav-bar").css({
//   "border-color": "#C1E0FF",
//   "border-width": "1px",
//   "border-style": "solid"
// });

class SplashNav extends React.Component {
  componentDidMount() {
    $(window).on('hashchange', function (e) {
      if (window.location.href.split('/').slice(-1)[0] === "") {
        // $(".nav-bar").css("--box-shadow-color", "transparent")
        $(".nav-bar").css("color", "transparent")
        $(".nav-bar").css("background-color", "transparent")
        $(".home-link").css("color", "white")
        $(".nav-search").css("display", "none")
      } else {
        $(".nav-search").css("color", "black")
        // $(".nav-bar").css("--box-shadow-color", "lightgrey")
        $(".nav-bar").css("color", "lightgrey")
        $(".nav-bar").css("background-color", "white")
        $(".home-link").css("color", "#fe385c")
        if ($(".nav-full-search").css("display") === "none") {
          $(".nav-search").css("display", "flex")
          $(".nav-search-icon").css("display", "block")
        }
      }
    });
    if (window.location.href.split('/').slice(-1)[0] === "") {
      $(".nav-bar").css("color", "transparent")
      $(".nav-bar").css("background-color", "transparent")
      $(".home-link").css("color", "white")
      $(".nav-search").css("display", "none")
    } else {
      $(".nav-search").css("color", "black")
      $(".nav-bar").css("color", "lightgrey")
    }
  }

  constructor(props) {
    super(props)
  }

  searchEvent(e) {
    if (!e.target.closest(".nav-full-search") && !e.target.closest(".nav-search")) {
      document.querySelector(".nav-search").style.display = 'flex'
      document.querySelector(".nav-full-search").style.display = 'none'
      document.removeEventListener("click", this.searchEvent)
    }
  }

  openSearch() {
    document.querySelector(".nav-search").style.display = 'none'
    document.querySelector(".nav-full-search").style.display = 'block'
    document.querySelector(".nav-full-search").style.display = 'block'
    $(".search-location-wrapper").css("margin-left", "0vw")
    document.addEventListener("click", this.searchEvent)
  }

  redirectHome() {
    this.props.clearFilters()
    this.props.history.push('/')
  }

  render() {
    const {currentUser, logout, login} = this.props

    const splashPage = () => (
      <div className="splash-nav">
        <div className="nav-bar">
          <header>
            <div onClick={this.redirectHome.bind(this)} className="home-link">
              ComfortBnB
            </div>
          </header>
          <div onClick={this.openSearch.bind(this)} className="nav-search">
            <div>Start your search</div>
            <button className="nav-search-icon">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="nav-full-search">
            <SearchBarContainer />
          </div>
          <SplashAuth currentUser={currentUser} logout={logout} login={login}/>
        </div>  
    </div>
  );

  return splashPage()
  }
};


export default withRouter(SplashNav);

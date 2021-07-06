import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"
import SearchBar from './search_bar';
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
        $(".nav-bar").css("border-style", "none")
        $(".nav-bar").css("background-color", "transparent")
        $(".home-link").css("color", "white")
        $(".nav-search").css("display", "none")
      } else {
        // $(".nav-bar").css("border-style", "none", "none", "solid", "none")
        $(".nav-bar").css("border-bottom-style", "solid")
        $(".nav-bar").css("background-color", "white")
        $(".home-link").css("color", "#fe385c")
        if ($(".nav-full-search").css("display") === "none") {
          $(".nav-search").css("display", "flex")
          $(".nav-search-icon").css("display", "block")
        }
      }
    });
    if (window.location.href.split('/').slice(-1)[0] === "") {
      $(".nav-bar").css("border-style", "none")
      $(".nav-bar").css("background-color", "transparent")
      $(".home-link").css("color", "white")
      $(".nav-search").css("display", "none")
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
    document.addEventListener("click", this.searchEvent)
  }

  render() {
    const {currentUser, logout, login} = this.props

    const splashPage = () => (
      <div className="splash-nav">
        <div className="nav-bar">
          <header>
            <Link to="/" className="home-link">
              ComfortBnB
            </Link>
          </header>
          <div onClick={this.openSearch.bind(this)} className="nav-search">
            <div>Start your search</div>
            <button className="nav-search-icon">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="nav-full-search">
            <SearchBar />
          </div>
          <SplashAuth currentUser={currentUser} logout={logout} login={login}/>
        </div>  
    </div>
  );

  return splashPage()
  }
};


export default withRouter(SplashNav);

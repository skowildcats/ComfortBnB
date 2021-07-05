import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"
import SearchBar from './search_bar';



class SplashNav extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {formType: null}
    this.scrollFunc()
  }

  scrollFunc() {
    window.onscroll = function () {
      let base = 70
      if ($(".nav-full-search").css("display") !== "none") {
        let newBase = $(window).scrollTop()
        if (newBase > base) {
          $(".nav-full-search").css("display", "none")
        }
      }
      if ($(window).scrollTop() >= 70) {
        $(".nav-bar").css("background-color", "white")
        $(".home-link").css("color", "#fe385c")
        if ($(".nav-full-search").css("display") === "none") {
          $(".nav-search").css("display", "flex")
          $(".nav-search-icon").css("display", "block")
        }
      } else {
        $(".nav-bar").css("background-color", "transparent")
        $(".home-link").css("color", "white")
        $(".nav-search").css("display", "none")
        $(".nav-search-icon").css("display", "none")
      }
    }
  }

  modalEvent(e) {
    if (!e.target.closest(".modal-form")) {
      document.getElementById('errors').style.display = "none"
      document.getElementById('session-modal').style.display = 'none'
      document.querySelector('.modal-screen').removeEventListener("click", this.modalEvent)
    }
  }

  modal(e) {
    document.getElementById('session-modal').style.display = 'block'
    document.getElementById('profile-dropdown-items').style.display = "none"
    this.setState({formType: e.target.value}) 
    document.querySelector('.modal-screen').addEventListener("click", this.modalEvent)
  }

  closeModal() {
    document.getElementById('session-modal').style.display = 'none'
  }

  openSearch() {
    document.querySelector(".nav-search").style.display = 'none'
    document.querySelector(".nav-full-search").style.display = 'block'
  }

  logoutUser() {
    this.props.logout()
    document.getElementById('profile-dropdown-items').style.display = "none"
  }

  dropDownEvent(e) {
    if (!e.target.closest(".profile-dropdown-items") && !e.target.closest(".profile-list-icon")) {
      document.querySelector(".profile-dropdown-items").style.display = 'none'
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  toggleDropDown() {
    if (document.getElementById('profile-dropdown-items').style.display !== "flex") {
      document.getElementById('profile-dropdown-items').style.display = "flex"
      document.addEventListener("click", this.dropDownEvent)
    } else {
      document.getElementById('profile-dropdown-items').style.display = "none"
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  toggleForm() {
    this.state.formType === "login" ? this.setState({ formType: "signup" }) : this.setState({ formType: "login" })
  }

  render() {
    const {currentUser, logout} = this.props
    let userIcon, profileItems, sessionItems

    if (currentUser) {
      userIcon = <div className="profile-name">{currentUser.fname[0] + currentUser.lname[0]}</div>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <button>Reservations</button>
        <button className="header-button" onClick={this.logoutUser.bind(this)}>Log Out</button>
      </div>
    } else {
      userIcon = <i className="profile-icon far fa-user"></i>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <button className="login-button" onClick={this.modal.bind(this)} value="login" >Log in</button>
        <button onClick={this.modal.bind(this)} value="signup">Sign up</button>
      </div>
    }

    if (this.state.formType === "login") {
      sessionItems = <>
      <LogInFormContainer />
        <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Create account </button>
        <br />
        <button className="demo-user"> Demo User </button>
      </>
    } else {
      sessionItems = <>
        <SignUpFormContainer />
        <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Log in instead</button>
      </>
    }
    const splashPage = () => (
      <div className="splash-nav">
        <div className="nav-bar">
          <header>
            <Link to="/" className="home-link">
              ComfortBnB
            </Link>
          </header>
          <div onClick={this.openSearch} className="nav-search">
            <div>Start your search</div>
            <button className="nav-search-icon">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="nav-full-search">
            <SearchBar />
          </div>
          <nav className="login-signup">
            <div id="session-modal" className="session-modal">
              <section className="modal-screen">
                <div className="modal-form">
                  <div className="modal-header">
                    <button onClick={this.closeModal} className="close-modal">&times;</button>
                    <p className="modal-form-text">Log in or sign up</p>
                  </div>
                  {sessionItems}
                </div>

              </section>
            </div>
          <div className="profile-dropdown">
            <button onClick={this.toggleDropDown.bind(this)} className="profile-list-icon">
              <i className="profile-list fas fa-bars"></i>
              {userIcon}
            </button>
            {profileItems }
          </div>
          </nav>
        </div>  
        <SearchBar />
    </div>
  );

  return splashPage()
  }
};


export default SplashNav;

import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"



class Splash extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {formType: null}
  }

  modalEvent(e) {
    if (!e.target.closest(".modal-form")) {
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
    // debugger
    // document.querySelector('.modal-screen').removeListeners()
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
      <>
      <div className="nav-bar">
        <header>
          <Link to="/" className="home-link">
            ComfortBnB
          </Link>
        </header>
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
      <form className="search-bar">
        <div className="search-location">  
          <h3> Location
            <br />
            <input placeholder="Where are you going?" disabled="disable" />
          </h3>
        </div>
        <div className="search-check-in">
          <h3>Check in
            <br />
            <input placeholder="Add dates" disabled="disable" />
          </h3>
        </div>
        <div className="search-check-out">
          <h3>Check out
            <br />
            <input placeholder="Add dates" disabled="disable" />
          </h3>
        </div>
        <div className="search-guests">
          <h3>Guest
            <br />
            <input placeholder="Add guests" disabled="disable" />
          </h3>
        </div>
        <button className="search-submit"><i className="fas fa-search"></i></button>
    </form>
      </>
  );

  return splashPage()
  }
};


export default Splash;

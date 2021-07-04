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

  toggleDropDown() {
    if (document.getElementById('profile-dropdown-items').style.display !== "flex") {
      document.getElementById('profile-dropdown-items').style.display = "flex"
    } else {
      document.getElementById('profile-dropdown-items').style.display = "none"
    }
  }

  render() {
    const {currentUser, logout} = this.props
    let userIcon, profileItems

    if (currentUser) {
      userIcon = <div className="profile-name">{currentUser.fname[0] + currentUser.lname[0]}</div>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <button className="header-button" onClick={this.logoutUser.bind(this)}>Log Out</button>
      </div>
    } else {
      userIcon = <i className="profile-icon far fa-user"></i>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <button onClick={this.modal.bind(this)} value="login" >Login</button>
        <button onClick={this.modal.bind(this)} value="signup">Sign up!</button>
      </div>
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
                <button onClick={this.closeModal} className="close-modal">&times;</button>
                {this.state.formType === "login" ? <LogInFormContainer /> : <SignUpFormContainer/>}
              </div>
            </section>
          </div>
          <div className="profile-dropdown">
            <button onClick={this.toggleDropDown} className="profile-list-icon">
              <i className="profile-list fas fa-bars"></i>
              {userIcon}
            </button>
            {profileItems }
          </div>

        </nav>
      </div>  
      <div className="search-bar">Search Bar Placeholder</div>
      </>
  );

  return splashPage()
  }
};


export default Splash;

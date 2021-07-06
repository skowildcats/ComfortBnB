import React from 'react';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"
import { Link, withRouter } from 'react-router-dom'

class SplashAuth extends React.Component{ 
  constructor(props) {
    super(props)
    this.state = { formType: null }
  }

  modalEvent(e) {
    if (!e.target.closest(".modal-form")) {
      document.getElementById('errors').style.display = "none"
      document.getElementById('session-modal').style.display = 'none'
      document.querySelector('.modal-screen').removeEventListener("click", this.modalEvent.bind(this))
      this.setState({ formType: null })
    }
  }

  modal(e) {
    document.getElementById('session-modal').style.display = 'block'
    document.getElementById('profile-dropdown-items').style.display = "none"
    this.setState({ formType: e.target.value })
    document.querySelector('.modal-screen').addEventListener("click", this.modalEvent.bind(this))
  }

  closeModal(e) {
    this.setState({ formType: null })
    document.getElementById('session-modal').style.display = 'none'
  }

  logoutUser() {
    this.props.logout()
    this.toggleDropDown()
    this.setState({ formType: null })
    this.props.history.push("/")
  }

  demoLogin() {
    this.props.login({username: "test", password: "test"})
  }

  dropDownEvent(e) {
    if (!e.target.closest(".profile-dropdown-items") && !e.target.closest(".profile-list-icon")) {
      document.querySelector(".profile-dropdown-items").style.display = 'none'
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  toggleDropDown() {
    let tmp = document.getElementById('profile-dropdown-items')
    if (tmp.style.display !== "flex") {
      tmp.style.display = "flex"
      document.addEventListener("click", this.dropDownEvent)
    } else {
      tmp.style.display = "none"
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  toggleForm() {
    this.state.formType === "login" ? this.setState({ formType: "signup" }) : this.setState({ formType: "login" })
  }

  render() {
    const { currentUser, logout } = this.props
    let userIcon, profileItems, sessionItems

    if (currentUser) {
      userIcon = <div className="profile-name">{currentUser.fname[0] + currentUser.lname[0]}</div>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <Link to={`/users/${currentUser.id}`}>Account </Link>
        <button> Reservations</button>
        <button onClick={this.logoutUser.bind(this)}> Log Out</button>
      </div>
    } else {
      userIcon = <i className="profile-icon far fa-user"></i>
      profileItems = <div id="profile-dropdown-items" className="profile-dropdown-items">
        <button className="login-button" onClick={this.modal.bind(this)} value="login" >Log in</button>
        <button onClick={this.modal.bind(this)} value="signup">Sign up</button>
      </div>
    }

    if (this.state.formType === "login") {
      sessionItems = <div>
        <LogInFormContainer />
        <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Create account </button>
        <br />
        <button className="demo-user" onClick={this.demoLogin.bind(this)}> Demo User </button>
      </div>
    } else if (this.state.formType === "signup") {
      sessionItems = <div>
        <SignUpFormContainer />
        <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Log in instead</button>
      </div>
    } else {
      sessionItems = <div>
        <SignUpFormContainer />
        <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Log in instead</button>
      </div>
    }

  return (
    <nav className="login-signup">
      <div id="session-modal" className="session-modal">
        <section className="modal-screen">
          <div className="modal-form">
            <div className="modal-header">
              <button onClick={this.closeModal.bind(this)} className="close-modal">&times;</button>
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
        {profileItems}
      </div>
    </nav>
    )
  }
}

export default withRouter(SplashAuth)
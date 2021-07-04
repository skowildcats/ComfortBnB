import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"



class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {formType: null}
  }

  modal(e) {
    document.getElementById('session-modal').style.display = 'block'
    this.setState({formType: e.target.value})
  }

  closeModal() {
    document.getElementById('session-modal').style.display = 'none'
  }

  render() {
    const {currentUser, logout} = this.props
    let userIcon

    if (currentUser) {
      userIcon = <div className="profile-name">{currentUser.fname[0] + currentUser.lname[0]}</div>
    } else {
      userIcon = <i className="profile-icon far fa-user"></i>
    }

    const sessionLinks = () => (
    <nav className="login-signup">
      <div id="session-modal" className="session-modal">
        <section className="modal-screen">
          <div className="modal-form">
            <button onClick= {this.closeModal} className="close-modal">&times;</button>
            {this.state.formType === "login" ? <LogInFormContainer /> : <SignUpFormContainer/>}
          </div>
        </section>
      </div>
      <div className="profile-dropdown">
        <button className="profile-list-icon">
          <i className="profile-list fas fa-bars"></i>
          {userIcon}
        </button>
        <button onClick={this.modal.bind(this)} value="login" >Login</button>
        <button onClick={this.modal.bind(this)} value="signup">Sign up!</button>
      </div>

      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return sessionLinks()
  }
};


export default Splash;

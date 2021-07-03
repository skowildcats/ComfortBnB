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

    const sessionLinks = () => (
    <nav className="login-signup">
      <div id="session-modal" className="session-modal">
        <section className="modal-screen"></section>
        <div className="modal-form">
          <button onClick= {this.closeModal}>&times;</button>
          {this.state.formType === "login" ? <LogInFormContainer /> : <SignUpFormContainer/>}
        </div>
      </div>
      <button onClick={this.modal.bind(this)} value="login" >Login</button>
      <button onClick={this.modal.bind(this)} value="signup">Sign up!</button>
    </nav>
  );


  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.fname}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
  }
};


export default Splash;

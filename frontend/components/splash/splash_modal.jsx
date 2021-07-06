import React from 'react';
import LogInFormContainer from "../session_form/login_form_container"
import SignUpFormContainer from "../session_form/signup_form_container"
import SplashAuth from './splash_auth';

class SplashModal extends React.Component {
  componentDidMount() {
    document.getElementById('session-modal').style.display = 'block'
    document.getElementById('profile-dropdown-items').style.display = "none"
    document.querySelector('.modal-screen').addEventListener("click", this.modalEvent.bind(this))
  }

  componentWillUnmount() {
    this.setState({formType: "signup"})
  }

  constructor(props) {
    super(props)
    this.state = { formType: null};
  }

  closeModal() {
    document.getElementById('session-modal').style.display = 'none'
  }

  toggleForm() {
    this.state.formType === "login" ? this.setState({ formType: "signup" }) : this.setState({ formType: "login" })
  }

  modalEvent(e) {
    if (!e.target.closest(".modal-form")) {
      document.getElementById('errors').style.display = "none"
      document.getElementById('session-modal').style.display = 'none'
      document.querySelector('.modal-screen').removeEventListener("click", this.modalEvent)
    }
  }

  render() {
    let sessionItems 
      if (this.state.formType === "login") {
        sessionItems = <>
          <LogInFormContainer />
          {/* onClick={this.toggleForm.bind(this)} */}
          <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Create account </button>
          <br />
          <button className="demo-user"> Demo User </button>
        </>
      } else if (this.state.formType === "signup") {
        sessionItems = <>
          <SignUpFormContainer />
          {/* onClick={this.toggleForm.bind(this)} */}
          <button onClick={this.toggleForm.bind(this)} className="modal-session-check"> Log in instead</button>
        </>
      }
    // }

    return (
      <div id = "session-modal" className = "session-modal" >
        <section className="modal-screen">
          <div className="modal-form">
            <div className="modal-header">
              <button onClick={this.closeModal} className="close-modal">&times;</button>
              <p className="modal-form-text">Log in or sign up</p>
            </div>
            {sessionItems}
          </div>

        </section>
      </div >
    )
  }
}

export default SplashModal
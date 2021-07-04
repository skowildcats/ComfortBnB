import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formContent;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById('session-modal').style.display = 'none'
    document.getElementById('profile-dropdown-items').style.display = "none"
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState(this.props.formContent)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let nameContainer
    if (this.props.formType === "sign up") {
      nameContainer = 
        <>
          <input type="text"
            value={this.state.fname}
            onChange={this.update('fname')}
            placeholder="First Name"
          />
        <br />
          <input type="text"
          value={this.state.lname}
          onChange={this.update('lname')}
            placeholder="Last Name"
          />
        <br />
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Email"
          />
        </>
    }
    let formRender
    if (!this.props.currentUser) {
      formRender = <form onSubmit={this.handleSubmit} className="login-form-box">
        <p>Welcome to ComfortBnB</p>
          <br />
          {this.renderErrors()}
          <div className="login-form">
            {nameContainer}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br />
            <input type="submit"
              value={this.props.formType}
            />
            {/* Please {this.props.formType} or {this.props.navLink} */}
            <br />
          </div>
        </form>
    } 
    return (
      <div className="login-form-container">
        {formRender}
      </div>
    );
  }
}

export default SessionForm;

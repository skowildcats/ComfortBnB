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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    if (this.props.formType === "signup") {
      nameContainer = 
      <div>
        <label>First name:
          <input type="text"
            value={this.state.fname}
            onChange={this.update('fname')}
          />
        </label>
        <br />
        <label>Last name:
          <input type="text"
            value={this.state.lname}
            onChange={this.update('lname')}
          />
        </label>
        <br />
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
        </div>
        
    }
    let formRender
    if (!this.props.currentUser) {
      formRender = <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to ComfortBnB!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            {nameContainer}
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
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

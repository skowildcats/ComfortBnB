import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props
    console.log(currentUser)
    return(
      <div className="profile-show">
        <h1 className="profile-header"> Personal info</h1>
        <li> <div> Legal name</div>
          <p>{currentUser.fname.charAt(0).toUpperCase() + currentUser.fname.slice(1) + " " + currentUser.lname.charAt(0).toUpperCase() + currentUser.lname.slice(1)}</p>
        </li>
        <li> <div> Email </div>
          <p>{currentUser.email.charAt(0).toUpperCase() + currentUser.email.slice(1)}</p>
        </li>
        <li> <div> Username </div>
          <p>{currentUser.username}</p>
        </li>
        
      </div>
    )
  }
}

export default ProfileShow
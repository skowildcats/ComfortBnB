import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit() {
    this.props.history.push('/browse')
  }

  updateState() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="search-bar">
        <div className="search-location">
          <h3> Location
            <br />
            <input type="text" placeholder="Where are you going?" />
          </h3>
        </div>
        <div className="search-check-in">
          <h3>Check in
            <br />
            <input type="date" placeholder="Add dates" />
          </h3>
        </div>
        <div className="search-check-out">
          <h3>Check out
            <br />
            <input type="date" placeholder="Add dates" />
          </h3>
        </div>
        <div className="search-guests">
          <h3>Guest
            <br />  
            <input placeholder="Add guests" />
          </h3>
        </div>
        <button onClick={this.handleSubmit.bind(this)} className="search-submit"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

export default withRouter(SearchBar)
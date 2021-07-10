import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {minGuest: 1}
  }

  handleSubmit() {
    this.props.history.push('/browse')
  }

  handleChange(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="search-bar">
        <div className="search-location">
          <h3> Location
            <br />
            <input onChange={this.handleChange('location')} type="text" placeholder="Where are you going?" />
          </h3>
        </div>
        <div className="search-check-in">
          <h3>Check in
            <br />
            <input onChange={this.handleChange('checkIn')} type="date" placeholder="Add dates" />
          </h3>
        </div>
        <div className="search-check-out">
          <h3>Check out
            <br />
            <input onChange={this.handleChange('checkOut')} type="date" placeholder="Add dates" />
          </h3>
        </div>
        <div className="search-guests">
          <h3>Guest
            <br />  
            <input onChange={this.handleChange('minGuest')} placeholder="Add guests" />
          </h3>
        </div>
        <button onClick={this.handleSubmit.bind(this)} className="search-submit"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

export default withRouter(SearchBar)
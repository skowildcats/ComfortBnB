import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {minGuest: 1,
            dropdownOpen: false,
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            guestsInputBorderFocused: false,
            redirectToSearchIdx: false
        };
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  handleSubmit() {
    this.props.history.push('/browse')
  }

  handleChange(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  dropDownEvent(e) {
    if (!e.target.closest(".search-location-wrapper") && !e.target.closest(".search-location")) {
      $(".search-location-wrapper").css("display", "none")
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  toggleDropdown() {
    // let tmp = document.getElementById('search-location-wrapper')
    let tmp = $(".search-location-wrapper")
    if (document.getElementById('search-location-wrapper').style.display !== "block") {
      tmp.css("display", "block")
      document.addEventListener("click", this.dropDownEvent)
    } else {
      tmp.css("display", "none")
      document.removeEventListener("click", this.dropDownEvent)
    }
  }

  browseLocation(location) {
    this.props.updateFilter('location', location)
    this.props.history.push('/browse')
  }

  onFocusChange() {
    this.setState({
        focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
    });
  }

  render() {
    return (
      <div>
        <div className="date-picker-container">
          <DayPickerRangeController 
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInputLeftCol}
            onFocusChange={this.onFocusChange}
            numberOfMonths={2}
            // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
            hideKeyboardShortcutsPanel={true}
          />
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} className="search-bar">
          <div onClick={this.toggleDropdown.bind(this)} className="search-location">
            <h3> Location
              <br />
              <input onClick={this.handleChange('location')} type="text" placeholder="Where are you going?"/>
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
      <div className="search-location-wrapper" id="search-location-wrapper">
          <div className="search-location-city-ny" onClick={this.browseLocation.bind(this, "New York")} >New York</div>
        <div className="search-location-city" onClick={this.browseLocation.bind(this, "Chicago")} >Chicago</div>
        <div className="search-location-city" onClick={this.browseLocation.bind(this, "San Francisco")} >San Francisco</div>
        <div className="search-location-city-la" onClick={this.browseLocation.bind(this, "Los Angeles")} >Los Angeles</div>
      </div>
    </div>
    )
  }
}

export default withRouter(SearchBar)
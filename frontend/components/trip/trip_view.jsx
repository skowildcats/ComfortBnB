import React from 'react'

class TripView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="trip-view">
      <h1 className="trip-header">
        Trips
        <div className="past">
          Past
        </div>
        <div className="upcoming">
          Upcoming
        </div>
      </h1>
    </div>
    )
  }
}

export default TripView
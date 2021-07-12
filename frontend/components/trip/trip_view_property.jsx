import React from 'react'
import {Link} from 'react-router-dom'

class TripViewProperty extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {property, checkIn, checkOut} = this.props
    let options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'}
    return(
      <Link to={`/browse/${property.id}`} className="trip-property">
        <div className="reservation-image">
          Image placeholder
        </div>
        <div className="reservation-information">
          <div className="reservation-information-date">
            {new Date(checkIn).toLocaleString('en-US', options)} - {new Date(checkOut).toLocaleString('en-US', options)}
          </div>
          <div className="reservation-information-description">
            {property.description}
          </div>
          <div className="reservation-show-more">
            {/* <div className="show-more-text"> */}
              Show More
            {/* </div> */}
          </div>
        </div>
      </Link>
    )
  }
}

export default TripViewProperty

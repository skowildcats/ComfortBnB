import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class TripViewProperty extends React.Component {
  constructor(props) {
    super(props)
  }

  cancelReservation() {
    this.props.destroyReservation(this.props.reservationId).then(() => {window.location.reload()})
  }

  redirectBrowse() {
    this.props.history.push(`/browse/${this.props.property.id}`)
  }

  render() {
    const {property, checkIn, checkOut} = this.props

    let options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'}
    let cancel

    if (this.props.type === "upcoming") {
      cancel = (
        <div onClick={this.cancelReservation.bind(this)} className="cancel-reservation">
          Cancel trip
        </div>
      )
    }

    return(
      <div className="trip-property">
        <div onClick={this.redirectBrowse.bind(this)} className="reservation-image">
          <img className="trip-image" src={property.image_urls[0]}/>
        </div>
        <div className="reservation-information">
          <div className="reservation-information-date">
            {new Date(checkIn).toLocaleString('en-US', options)} - {new Date(checkOut).toLocaleString('en-US', options)}
          </div>
          <div onClick={this.redirectBrowse.bind(this)} className="reservation-information-description">
            {property.description}
          </div>
          <div  className="reservation-show-more">
            <div onClick={this.redirectBrowse.bind(this)} className="show-more-text">
              Show more
            </div>
            {cancel}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TripViewProperty)

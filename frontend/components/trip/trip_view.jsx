import React from 'react'
import TripViewProperty from './trip_view_property'

class TripView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount() {
    this.props.fetchProperties(this.props.filters).then(() => this.setState({ loading: false }))
    this.props.fetchUser(this.props.currentUser.id) 
  }

  render() {
    const {currentUser, properties} = this.props

    if (this.state.loading) {
      return null
    } else if (!currentUser.reservations) {
      
      return (<div className="trip-view">
        <h1 className="trip-header">
          Trips
        </h1>
        <div className="past">
          <div className="past-text">
            Past
          </div>
        </div>
        <div className="upcoming">
          <div className="upcoming-text">
            Upcoming
          </div>
        </div>
      </div>)
    } else {
      let sortedReservations = Object.values(currentUser.reservations).sort((a, b) => new Date(a.checkin_date) - new Date(b.checkin_date))
      return (
        <div className="trip-view">
          <h1 className="trip-header">
            Trips
          </h1>
          <div className="past">
            <div className="past-text">
              Past
            </div>
            <div className="past-reservations">
              {sortedReservations.map((reservation) => {
                if (new Date() > new Date(reservation.checkout_date)) {
                  return (
                    <TripViewProperty property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} />
                  )
                }
              })}
            </div>
          </div>
          <div className="upcoming">
            <div className="upcoming-text">
              Upcoming
            </div>
            <div className="upcoming-reservations">
              {sortedReservations.map((reservation) => {
                if (new Date() <= new Date(reservation.checkin_date)) {
                  return (
                    <TripViewProperty property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} />
                  )
                } else if (new Date() >= new Date(reservation.checkin_date) && new Date() <= new Date(reservation.checkout_date)) {
                  return (
                    <TripViewProperty property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} />
                  )
                }
              })}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default TripView
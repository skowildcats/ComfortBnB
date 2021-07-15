import React from 'react'
import TripViewProperty from './trip_view_property'
import UpdateReservation from './update_reservation'


class TripView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true, changed: true, property: null}
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    this.props.fetchAllProperties().then(() => this.setState({ loading: false }))
  }

  // closeModal(e) {
  //   document.getElementById('reservation-session-modal').style.display = 'none'
  // }

  // modifyReservation(property) {
  //   document.getElementById('reservation-session-modal').style.display = 'block'
  //   document.querySelector('.reservation-modal-screen').addEventListener("click", (e)=>{
  //     if (!e.target.closest(".reservation-modal-form")) {
  //       document.getElementById('reservation-session-modal').style.display = 'none'
  //     }
  //   })
  // }


  render() {
    const {currentUser, properties, destroyReservation} = this.props
    
    if (this.state.loading) {
      return null
    } else if (!currentUser.reservations) {
      return (
      <div className="trip-view">
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
          {/* <div id="reservation-session-modal" className="reservation-session-modal">
            <section className="reservation-modal-screen">
              <div className="reservation-modal-form">
                <div className="reservation-modal-header">
                  Hi
                  <button onClick={this.closeModal} className="reservation-close-modal">&times;</button>
                  <UpdateReservation />
                </div>
              </div>
            </section>
          </div> */}
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
                    <TripViewProperty modifyReservation={this.modifyReservation} property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} reservationId={reservation.id} destroyReservation={destroyReservation} type="past"/>
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
                    <TripViewProperty modifyReservation={this.modifyReservation} property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} reservationId={reservation.id} destroyReservation={destroyReservation} type="upcoming"/>
                  )
                } else if (new Date() >= new Date(reservation.checkin_date) && new Date() <= new Date(reservation.checkout_date)) {
                  return (
                    <TripViewProperty modifyReservation={this.modifyReservation} property={properties[reservation.property_id]} checkIn={reservation.checkin_date} checkOut={reservation.checkout_date} key={reservation.id} reservationId={reservation.id} destroyReservation={destroyReservation} type="upcoming"/>
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
import React from 'react'
import {withRouter} from 'react-router-dom'

class PropertyMovingReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checkin_date: new Date().setUTCHours(0, 0, 0, 0), checkout_date: new Date().setUTCHours(0, 0, 0, 0) + 86400000, num_guests: 1, user_id: this.props.currentUser.id, property_id: this.props.property.id}
  }

  handleForm(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleCheckIn(field) {
    return e => {
      this.checkIn(e.currentTarget.value)
      this.setState({[field]: e.currentTarget.value})
    }
  }

  handleCheckOut(field) {
    return e => {
      this.checkOut(e.currentTarget.value)
      this.setState({ [field]: e.currentTarget.value})
    }
  }

  checkIn(date) {
    if (new Date().setUTCHours(0, 0, 0, 0) - 86400000 > new Date(date).setUTCHours(0, 0, 0, 0)) {
      this.props.addError(["Please select a date after today"])
    } else {
      this.props.clearErrors()
    }
  }

  checkOut(date) {
    if (new Date(date).setUTCHours(0, 0, 0, 0) <= new Date(this.state.checkin_date).setUTCHours(0,0,0,0)) {
      this.props.addError(["Please select a date after check in date"])
    } else {
      this.props.clearErrors()
    }
  }

  submitReservation(e) {
    e.preventDefault()
    const reservation = Object.assign({}, this.state)
    this.props.createReservation(reservation).then(()=> {
      if (this.props.errors.length === 0) {
        this.props.history.push('/trips')
      }
    }, () => {
      this.props.addError(["Please select both check in and checkout dates"])})
      // ()=>this.props.history.push('/trips'))
    // ()=>this.props.addError(["Please select both check in and checkout dates"]))
  }

  render() {
    const {property} = this.props 
    let year = String(new Date().getFullYear())
    let month, day
    new Date().getMonth() + 1 < 10 ? month = "0" + String(new Date().getMonth() + 1) : month = String(new Date().getMonth() + 1)
    new Date().getDate() < 10 ? day = "0" + String(new Date().getDate()) : day = String(new Date().getDate())
    let today = year + "-" + month + "-" + day

    let reservationTop

    if (this.props.errors.length > 0) {
      reservationTop = <ul className="reservation-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    } else {
      reservationTop = <div className="review-price">
        <div className="property-full-price">
          <div className="property-price">
            <div className="reservation-price">$&nbsp;{property.price}</div>
            <div className="reservation-night">&nbsp; / night</div>
          </div>
        </div>
        <div className="property-full-review">
          <i className="review-star fas fa-star"></i>
          <div className="review-rating">{parseFloat(property.average_rating).toFixed(2)}</div>
        </div>
      </div>
    }

    return (
      <div className="property-make-reservation">
        <div className="moving-reservation">
          <form onSubmit={this.submitReservation.bind(this)} className="reservation-content">
            {reservationTop}
            <div className="calendar-guest">
              <div className="property-full-calendar">
                <div className="property-full-check-in">
                  <h3>
                    <div>CHECK-IN</div>
                    <input onChange={this.handleCheckIn("checkin_date")} type="date" value={today} placeholder="Add dates" />
                  </h3>
                </div>
                <div className="property-full-check-out">
                  <h3>
                    <div>CHECKOUT</div>
                    <input onChange={this.handleCheckOut("checkout_date")} type="date" placeholder="Add dates"  />
                  </h3>
                </div>
              </div>
              <div className="property-full-guest">
                <h3>
                  <div>GUESTS</div>
                  <input onChange={this.handleForm("num_guests")} type="text" placeholder="Add guests" />
                </h3>
              </div>
            </div>
            <div className="check-availability">
              <button onClick={this.submitReservation.bind(this)} className="availability-button">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(PropertyMovingReservation)
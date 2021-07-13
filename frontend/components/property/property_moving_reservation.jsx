import React from 'React'
import {withRouter} from 'react-router-dom'

class PropertyMovingReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {checkin_date: null, checkout_date: null, num_guests: 1, user_id: this.props.currentUser.id, property_id: this.props.property.id}
  }

  handleForm(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  submitReservation(e) {
    e.preventDefault()
    const reservation = Object.assign({}, this.state)
    this.props.createReservation(reservation).then(()=>this.props.history.push('/trips'))
  }

  render() {
    const {property} = this.props 

    return (
      <div className="property-make-reservation">
        <div className="moving-reservation">
          <form onSubmit={this.submitReservation.bind(this)} className="reservation-content">
            <div className="review-price">
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
            <div className="calendar-guest">
              <div className="property-full-calendar">
                <div className="property-full-check-in">
                  <h3>
                    <div>CHECK-IN</div>
                    <input onChange={this.handleForm("checkin_date")} type="date" placeholder="Add dates" />
                  </h3>
                </div>
                <div className="property-full-check-out">
                  <h3>
                    <div>CHECKOUT</div>
                    <input onChange={this.handleForm("checkout_date")} type="date" placeholder="Add dates"  />
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
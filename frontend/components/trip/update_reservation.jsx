import React from 'react'

class UpdateReservation extends React.Component {
  constructor(props) {
    super(props)
  }


  getDateString(date) {
    let year = String(new Date(date).getFullYear())
    let month, day
    new Date(date).getMonth() + 1 < 10 ? month = "0" + String(new Date(date).getMonth() + 1) : month = String(new Date(date).getMonth() + 1)
    new Date(date).getDate() + 1 < 10 ? day = "0" + String(new Date(date).getDate() + 1) : day = String(new Date(date).getDate() + 1)
    let dateString = year + "-" + month + "-" + day
    return dateString
  }

  render() {
    // const {property} = this.props
  
    return (
      <div>
        <input type="date" placeholder="Add dates" />
        <input type="date" placeholder="Add dates" />
      </div>
    )
  }
}

export default UpdateReservation
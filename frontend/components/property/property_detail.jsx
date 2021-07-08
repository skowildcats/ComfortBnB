import React from 'react';
import {Link} from 'react-router-dom'

class PropertyDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProperty(this.props.match.params.propertyId).then(() => this.setState({ loading: false }))
  }

  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  scrollFunc() {
    window.onscroll = function () {
      if ($(window).scrollTop() >= 450 && $(window).scrollTop() <= 1015) {
        $(".moving-reservation").css("position", "fixed")
        $(".moving-reservation").css("transform", "translateY(-175%)")
      } else {
        $(".moving-reservation").css("position", "absolute")
        $(".moving-reservation").css("transform", "translateY(0%)")
      }
    }
  }


  render() {
    const { property } = this.props
    this.scrollFunc()  
    
    if (this.state.loading) {
      return null
    } else {
      return (
      <div className="property-detail">
        <Link to="/browse" className="back-browse">
            <i className="back-symbol fas fa-chevron-left"></i> Back to listings
        </Link>
        <h1 className="property-detail-description">
          {property.description}
        </h1>
        <div className="property-detail-header">
          Header Placeholder
        </div>
        <div className="property-detail-image">
          Image Placeholder
        </div>
        <div className="property-full-description">
          <div className="property-full-description-text">
              <div className="property-detail-capacity" >
                <div> {property.max_guests === 1 ? "1 guest" : `${property.max_guests} guests`}</div>
                <div> <div className="detail-bullet-marker">&#183; </div> {property.num_bedrooms === 1 ? "1 bedroom" : `${property.num_bedrooms} bedrooms`}</div>
                <div> <div className="detail-bullet-marker">&#183; </div> {property.num_beds === 1 ? "1 bed" : `${property.num_beds} beds`}</div>
                <div> <div className="detail-bullet-marker">&#183; </div> {property.num_baths === 1 ? "1 bath" : `${property.num_baths} baths`}</div>
              </div>
              <div className="property-full-paragraph">
                <h2 className="paragraph-header">All about ...</h2>
                <p className="paragraph-text">Property description here</p>
              </div>

              <div className="property-detail-amenities">
                <h2>
                  What this place offers
                </h2>
                <div className="amnity icons">
                  Amenities/icons here
                </div>
              </div>
          </div>

          <div className="property-make-reservation">
            <div className="moving-reservation">
              Moving Reservation
            </div>
          </div>
        </div>
        <div className="property-review">
          Reviews Placeholder
        </div>
      </div>
      )
    }
  }
}

export default PropertyDetail
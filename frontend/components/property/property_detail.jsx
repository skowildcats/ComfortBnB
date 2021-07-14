import React from 'react';
import {Link} from 'react-router-dom'
import PropertyMovingReservation from './property_moving_reservation';

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
      if ($(window).scrollTop() >= 480 && $(window).scrollTop() <= 895) {
        $(".moving-reservation").css("position", "fixed")
        $(".moving-reservation").css("transform", "translateY(-175%)")
      } else if ($(window).scrollTop() >= 895) {
        $(".moving-reservation").css("position", "absolute")
        $(".moving-reservation").css("transform", "translateY(150%)")
      } else {
        $(".moving-reservation").css("position", "absolute")
        $(".moving-reservation").css("transform", "translateY(0%)")
      }
    }
  }


  render() {
    const { currentUser, property, createReservation } = this.props
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
          <div className="property-review-rating">
            <i className="review-star fas fa-star"></i>
            <div className="review-rating">{parseFloat(property.average_rating).toFixed(2)}</div>
            <div>({property.review_count} reviews) </div>
          </div>
        </div>
        <div className="property-detail-image">
          <div className="main-image">
            <img src={property.image_urls[0]} />
          </div>
          <div className="sub-image">
            <img src={property.image_urls[1]} />
            <img className="sub-image-2" src={property.image_urls[2]} />
            <img src={property.image_urls[3]} />
            <img className="sub-image-4" src={property.image_urls[4]} />
          </div>
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
                <h2 className="paragraph-header">All about {property.description}</h2>
                <p className="paragraph-text">
                  Retreat to this getaway and enjoys the best that the city has to offer.
                  Located in one of the city's most eclectic neighborhoods, 
                  this is a lovely space to unwind and relax after a busy day whether it is work or play.
                  Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views.
                  Experience true urban living in this beautifully decorated well furnished residence while indulging in the comfort and tranquility of this contemporary apartment.
                </p>
              </div>

              <div className="property-detail-amenities">
                <h2>
                  What this place offers
                </h2>
                <div className="amenity-icons">
                  <div><i className="fas fa-tv"></i> 50" HDTV</div>
                  <div><i className="fas fa-utensils"></i> Kitchen</div>
                  <div><i className="fas fa-wifi"></i> Wifi</div>
                  <div><i className="fas fa-coffee"></i> Breakfast</div>
                  <div><i className="fas fa-paw"></i> Pets allowed</div>
                  <div><i className="fas fa-laptop"></i> Dedicated workspace</div>
                  <div><i className="far fa-calendar"></i> Long term stays allowed</div>
                  <div><i className="fas fa-parking"></i> Parking available</div>
                  <div><i className="fas fa-bath"></i> Bathtub</div>
                  <div><i className="far fa-snowflake"></i> Air conditioning</div>
                </div>
                <div className="show-all-amenities">Show all amenities</div>
              </div>
          </div>

          <PropertyMovingReservation property={property} currentUser={currentUser} createReservation={createReservation}/>
        </div>
        <div className="property-review">
          <div className="review-header">
            Placeholder
          </div>
          <div className="rating-scale">
            {property.average_rating}
          </div>
          <div className="user-reviews">
            {Object.values(property.reviews)[0].body}

          </div>
        </div>
        <div className="property-location">
          <div className="property-map-header">
            Where you'll be
          </div>
          <div className="property-map">
            Map placeholder
          </div>
        </div>
      </div>
      )
    }
  }
}

export default PropertyDetail
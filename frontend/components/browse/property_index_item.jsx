import React from 'react'
import { Link } from 'react-router-dom'

class PropertyIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {property} = this.props

    return (
      <div className="property-listing">
        <Link to={`/browse/${property.id}`} className="property-image">
          Image Placeholder
        </Link>
        <Link to={`/browse/${property.id}`} className="property-content">
          <div className="property-description" >{property.description} </div>

          <div className="property-capacity" >
            <div>{property.max_guests === 1 ? "1 guest" : `${property.max_guests} guests`}</div>
            <div> <div className="bullet-marker">&#183; </div> {property.num_bedrooms === 1 ? "1 bedroom" : `${property.num_bedrooms} bedrooms`}</div>
            <div> <div className="bullet-marker">&#183; </div> {property.num_beds === 1 ? "1 bed" : `${property.num_beds} beds`}</div>
            <div> <div className="bullet-marker">&#183; </div> {property.num_baths === 1 ? "1 bath" : `${property.num_baths} baths`}</div>
          </div>
          <div className="property-amenities">
            Amenities Placeholder
          </div>
          <div className="property-content-bottom"> 
            <div className="property-review-rating">
              <i className="review-star fas fa-star"></i>
              <div className="review-rating">{parseFloat(property.average_rating).toFixed(2)}</div>
              <div>({property.review_count} reviews) </div>
            </div>  
            <div className="property-price">
              <div className="property-price-bold">${property.price}</div>
               &nbsp; / night
            </div>
          </div>

        </Link>
      </div>
    )
  }
}

export default PropertyIndexItem
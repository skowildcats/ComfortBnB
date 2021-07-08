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
        <div className="property-image">
          Image Placeholder
        </div>
        <Link to={`/browse/${property.id}`} className="property-content">
          <div className="property-description" >{property.description}</div>
          <br />
          Max guests: {property.max_guests}
          <br />
        </Link>
      </div>
    )
  }
}

export default PropertyIndexItem
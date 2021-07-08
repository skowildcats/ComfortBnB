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
          {property.num_beds}
          <br />
          {property.num_baths}
        </Link>
      </div>
    )
  }
}

export default PropertyIndexItem
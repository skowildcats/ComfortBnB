import React from 'react'
import PropertyIndexItem from './property_index_item'


class PropertyIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {properties, filters} = this.props

    return (
      <div className="browse-index">
        <h1 className="browse-header">Stays in {filters.location}</h1>
        <h3>Browse all {properties.length} listings </h3>
        {properties.map((property, idx) => (
          <PropertyIndexItem property={property} key={property.id} idx={idx}/>
        ))}
      </div>
    )
  }
}

export default PropertyIndex  
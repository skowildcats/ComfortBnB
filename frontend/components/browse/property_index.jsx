import React from 'react'
import PropertyIndexItem from './property_index_item'


class PropertyIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {properties} = this.props

    return (
      <div className="browse-index">
        <h1 className="browse-header">Stays in New York</h1>
        {properties.map((property, idx) => (
          <PropertyIndexItem property={property} key={property.id} idx={idx}/>
        ))}
      </div>
    )
  }
}

export default PropertyIndex  
import React from 'react';

class PropertyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount() {
    this.props.fetchProperty(this.props.match.params.propertyId).then(() => this.setState({loading: false}))
  }

  render() {
    const { property } = this.props
    
    if (this.state.loading) {
      return null
    } else {
      return (
      <div className="property-detail">
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
          Description Placeholder
        </div>
      </div>
      )
    }
  }
}

export default PropertyDetail
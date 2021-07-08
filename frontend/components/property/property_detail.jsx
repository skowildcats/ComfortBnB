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
        <div className="property-description">
          {property.description}
        </div>
      </div>
      )
    }
  }
}

export default PropertyDetail
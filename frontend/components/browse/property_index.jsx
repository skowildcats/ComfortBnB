import React from 'react'


class PropertyIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProperties().then(() => {
      this.setState({loading: false})
    })
  }

  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  render() {
    const {properties} = this.props
    if (this.state.loading) {
      return null
    }
    return (
      <div>
        Properties
        {properties.map(property => (
          <div key={property.id}>
            {property.description}
          </div>
        ))}
      </div>
    )
  }
}

export default PropertyIndex  
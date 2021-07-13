import React from 'react'
import PropertyIndex from './property_index'
import BrowseMap from './browse_map'

class BrowsePage extends React.Component {
  componentDidMount() {
    this.props.fetchProperties(this.props.filters).then(() => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  render() {
    const { properties } = this.props
    
    if (this.state.loading) {
      null
    } return (
      <div className="browse-page">
        <div className="browse-properties">
          <PropertyIndex properties={properties}/>
        </div>
        <BrowseMap />
      </div>
    )
  }
}

export default BrowsePage
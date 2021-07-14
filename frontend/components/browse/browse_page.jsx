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
    const { properties, filters, mapSettings} = this.props
    
    if (this.state.loading) {
      return null
    } else {
      return (
        <div className="browse-page">
          <div className="browse-properties">
            <PropertyIndex properties={properties} filters={filters}/>
          </div>
          <BrowseMap properties={properties} mapSettings={mapSettings[filters.location]}/>
        </div>
    )}
  }
}

export default BrowsePage
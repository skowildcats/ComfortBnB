import React from 'react'
import PropertyIndexContainer from './property_index_container'

class BrowsePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="browse-page">
        <div className="browse-properties">
          <PropertyIndexContainer />
        </div>
        <div className="browse-map">
        
        </div>
      </div>
    )
  }
}

export default BrowsePage
import React from 'react'

class BrowseMap extends React.Component {
  constructor(props) {
    super(props)
  } 

  componentDidMount() {
    const {properties} = this.props
    const mapOptions = {
      center: { lat: 40.75, lng: -73.98 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    for (let i = 0; i < properties.length; i++) {
      new google.maps.Marker({
      position: new google.maps.LatLng(properties[i].lat, properties[i].lng),
      map: this.map,
      })
    }
  }

  render() {
    return(
      <div className="browse-map" ref={map => this.mapNode = map} />
    )
  }
}

export default BrowseMap
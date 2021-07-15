import React from 'react'

class PropertyMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { property } = this.props

    const mapOptions = {
      center: { lat: property.lat, lng: property.lng },
      zoom: 15
    };


    this.map = new google.maps.Map(this.mapNode, mapOptions);


    new google.maps.Marker({
      position: new google.maps.LatLng(property.lat, property.lng),
      map: this.map,
      animation: google.maps.Animation.DROP,
    })
  }


      

      // marker.addListener("click", () => {
      //   marker.setZIndex(++idx)
      //   for (let i = 0; i < infowindows.length; i++) {
      //     infowindows[i].close()
      //   }
      //   infowindow.open({
      //     anchor: marker,
      //     map: this.map,
      //     shoudlFocus: false,
      //   })
      //   setTimeout(() => { document.getElementById("listing-link").addEventListener("click", this.redirectBrowse.bind(this, properties[i])) }, 300)
      // })
 



  render() {
    return (
      <div className="property-map" ref={map => this.mapNode = map} />
    )
  }
}

export default PropertyMap
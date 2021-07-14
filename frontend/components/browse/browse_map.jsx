import React from 'react'
import {withRouter} from 'react-router-dom'

class BrowseMap extends React.Component {
  constructor(props) {
    super(props)
  } 

  componentDidMount() {
    const {properties, mapSettings} = this.props
    const mapOptions = {
      center: { lat: mapSettings.cords[0], lng: mapSettings.cords[1]},
      zoom: mapSettings.zoom
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var icon = {
      url: 'https://i.imgur.com/HB5Cvjd.png',
      // https://www.pinclipart.com/maxpin/iRwmwio/
      size: new google.maps.Size(40, 30),
      origin: new google.maps.Point(0, -2 ),
      anchor: new google.maps.Point(0, 30)
    };

    let infowindows = []
    let markers = []
    let idx = 0


    for (let i = 0; i < properties.length; i++) {
      let infowindow = new google.maps.InfoWindow({
        content: "<div class='marker-description'>"+properties[i].description+"</div>"+
          "<div >"+ 
            "<div class='marker-review-rating'>"+parseFloat(properties[i].average_rating).toFixed(2)
            +"  ("+properties[i].review_count+ " reviews)" +"</div>" +  
              ("<div class='marker-price'>"+"$"+properties[i].price+" / night" + "</div>"+
              "<div id='listing-link'>" +"View listing" + "</div>") + 
          "</div>"

      });
      
      infowindows.push(infowindow)
      let marker = new google.maps.Marker({
      position: new google.maps.LatLng(properties[i].lat, properties[i].lng),
      label: "$" + String(properties[i].price),
      map: this.map,
      animation: google.maps.Animation.DROP,
        icon: icon
      })
      markers.push(marker)
      marker.addListener("click", () => {
        marker.setZIndex(++idx)
        for (let i = 0; i < infowindows.length; i++) {
          infowindows[i].close()
        }
        infowindow.open({
          anchor: marker,
          map: this.map,
          shoudlFocus: false,
        })
        setTimeout(() => { document.getElementById("listing-link").addEventListener("click", this.redirectBrowse.bind(this, properties[i])) }, 300)
      })
    }
  }

  redirectBrowse(property) {
    this.props.history.push(`browse/${property.id}`)
  }


  render() {
    return(
      <div className="browse-map" ref={map => this.mapNode = map} />
    )
  }
}

export default withRouter(BrowseMap)
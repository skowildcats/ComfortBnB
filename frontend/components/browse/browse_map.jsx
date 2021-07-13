import React from 'react'
import {Link} from 'react-router-dom'

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
      let infowindow = new google.maps.InfoWindow({
        content: "<div class='marker-description'>"+properties[i].description+"</div>"+
          "<div >"+ "</i>"+
            "<div class='marker-review-rating'>"+parseFloat(properties[i].average_rating).toFixed(2)
            +"  ("+properties[i].review_count+ " reviews)" +"</div>"+  
            "<div class='marker-price'>"+"$"+properties[i].price+" / night" + "</div>"+
          "</div>"

      });
      let marker = new google.maps.Marker({
      position: new google.maps.LatLng(properties[i].lat, properties[i].lng),
      label: "$" + String(properties[i].price),
      map: this.map,
      animation: google.maps.Animation.DROP,
      })
      marker.addListener("click", () => { 
        infowindow.open({
          anchor: marker,
          map: this.map,
          shoudlFocus: false,
        })
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
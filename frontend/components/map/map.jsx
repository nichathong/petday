import React from 'react';
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/marker_manager';


class Map extends React.Component {

  componentDidMount() {
    let mapOptions 
    if (this.props.singleBusiness === true) {
      mapOptions = {
        center: { 
          lat: this.props.business.lat, 
          lng: this.props.business.long
        },
        zoom: 15
      };
    } else {
      mapOptions = {
        center: { 
          lat: 37.5655, 
          lng: -122.321 
        },
        zoom: 11,
      };
    }

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    if (this.props.singleBusiness) {
      this.MarkerManager.updateMarkers([this.props.business])
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);

    }
    $("#map-container").css("position", "none !important");
  }

  componentDidUpdate() {
    if (this.props.singleBusiness) {
      this.MarkerManager.updateMarkers([this.props.business])
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }

  }

  registerListeners() {
    let newbounds;
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, long: east },
        southWest: { lat: south, long: west },
      };
      newbounds = bounds
    });

  }

  handleMarkerClick(business) {
    this.props.history.push(`/businesses/${business.id}`);
  }

  render() {
    return (
      
      <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
      );
  }
}

export default withRouter(Map);
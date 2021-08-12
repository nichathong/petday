import React from 'react';
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
lat: latLng.lat(),
lng: latLng.lng()
});

class Map extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { 
        lat: 37.5655, 
        lng: -122.321 
      }, // this is SF
      zoom: 11,
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, long: east },
        southWest: { lat: south, long: west },
      };
      this.props.updateFilter("bounds", bounds);
    });
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  }

  handleMarkerClick(business) {
    this.props.history.push(`${business.id}`);
  }

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'businesses/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  render() {
    return (
      
      <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
      );
  }
}

export default withRouter(Map);
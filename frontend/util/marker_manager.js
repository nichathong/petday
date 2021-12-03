export default class MarkerManager {
    constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};

    }
    
    updateMarkers(businesses) {
      // debugger
      // console.log(businesses)
      const bizObj = {};
      businesses.forEach((biz) => bizObj[biz.id] = biz);

      businesses
        .filter(biz => !this.markers[biz.id])
        .forEach((newBiz,idx) =>
          this.createMarkerFromBusiness(newBiz, idx+1, this.handleClick));

      Object.keys(this.markers)
        .filter(bizId => !bizObj[bizId])
        .forEach((bizId) => this.removeMarker(this.markers[bizId]));
    }
    createMarkerFromBusiness(business) {
      const petIconMarker = "/petday_img/location (2).png";
      let iconbase = "/petday_img/location.png";
      const position = new google.maps.LatLng(business.lat, business.long);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        businessId: business.id,
        icon: petIconMarker
    })
    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;
  }
}
  
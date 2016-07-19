import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

  constructor(centerOfMap, data) {
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement() {
    super.createElement();

    setTimeout(() => {
      // Create map
      var map = new window.google.maps.Map(document.getElementById("map"),
        {
          zoom: 13,
          center: this.centerOfMap
        }
      );

      // Plot the location of vehicles
      for (let vehicle of this.data) {
        // Using ES6 desctruction
        let [lat, long] = vehicle.latLong.split(' ');
        console.log('lat: ' + lat);

        let myLatLng = new window.google.maps.LatLng(lat, long);

        var marker = new window.google.maps.Marker({
          position: myLatLng,
          map: map
        });

        marker.setMap(map);
      }
    }, 0); // Need to wait while element appears in DOM
  }

  getElementString() {
    return `<div class="google-map" id="map"></div>`
  }

}
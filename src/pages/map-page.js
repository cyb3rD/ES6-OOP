import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {GoogleMap} from '../ui/google-map.js';
import {app} from '../app.js';

export class MapPage extends Page {
  
  constructor() {
    super('Maps');
  }

  createElement() {
    super.createElement();

    let centerOfMap = {lat: 40.783661, lng: -73.965883};
    let map = new GoogleMap(centerOfMap, app.dataService.cars);
    console.log(this);
    map.appendToElement(this.element);
  }

  getElementString() {
    return '<h3>Map</h3>';
  }
}
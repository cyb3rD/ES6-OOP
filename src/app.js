import $ from 'jquery';
/**
 * Business logic classes
 */
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
/**
 * User interface classes
 */
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';
/**
 * Title bar
 */
let titleBar = new TitleBar('Vehicle fleet application');
titleBar.addLink('Home', '#');
titleBar.addLink('Cars', '#');
titleBar.addLink('Drones', '#');
titleBar.addLink('Map', '#');
titleBar.appendToElement($('body'));

/**
 * Image
 */
let img = new Image('src/images/Drone1.png');
img.appendToElement($('.page-content'));

/**
 * Car table
 */

let dataService = new FleetDataService(fleet);
dataService.loadData(fleet);

let headers = "License Model Make Miles".split(" ");
let dataTable = new DataTable(headers, dataService.cars);
dataTable.appendToElement($('.page-content'));

/**
 * Button
 */
let btn = new Button('Show more...');
btn.appendToElement($('.page-content'));

/**
 * Google Map
 */
let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);
map.appendToElement($('.page-content'));
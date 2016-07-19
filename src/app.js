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

let titleBar = new TitleBar('Vehicle fleet application');
titleBar.addLink('Home', '#');
titleBar.addLink('Cars', '#');
titleBar.addLink('Drones', '#');
titleBar.addLink('Map', '#');
titleBar.appendToElement($('body'));

let btn = new Button('Click me');
btn.appendToElement($('.page-content'));

let img = new Image('src/images/Drone1.png');
img.appendToElement($('.page-content'));

/**
 * Tests TODO: move to ./test/<module>.spec.js :
 */

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// for(let car of dataService.cars) {
//   console.log(car.license);
// }
  
// for (let e of dataService.errors) {
//   console.log(e.message);
// }  

// let carByLicense = dataService.getCarByLicense('AT4000');
// console.log(carByLicense);

// let sortedCars = dataService.getCarsSortedByLicense();
// console.log(sortedCars);

// let filteredCars = dataService.filterCarsByMake('U');
// console.log(filteredCars);
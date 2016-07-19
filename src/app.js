import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

for(let car of dataService.cars) {
  console.log(car.license);
}
  
for (let e of dataService.errors) {
  console.log(e.message);
}  

let carByLicense = dataService.getCarByLicense('AT4000');
console.log(carByLicense);

let sortedCars = dataService.getCarsSortedByLicense();
console.log(sortedCars);

let filteredCars = dataService.filterCarsByMake('U');
console.log(filteredCars);
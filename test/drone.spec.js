/**
 * Test module
 */
/**
 * Need to implemet with mocha
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


// Module
import {Drone} from '../src/classes/drone.js';

let chai = require('chai');

chai.should();

// Suite
describe('Drone class', () => {
  let drone;
  
  beforeEach(() => {
    drone = new Drone('TestDrone#123');
  });
  
  // test
  describe('#Drone()', () => {
    
    it('After calling constructor drone is an Object', () => {
      
      drone.should.be.an('object');
    });
    
    // it('has getter', () => {
    //   drone.id.should.equal('TestDrone#123');
    // });

    // it('has setter', () => {
    //   drone.id = 'Drone#1';    
    //   drone.id.should.equal('Drone#1');
    // });

  });

});
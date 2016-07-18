import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

/**
 * Class for managing cars and drones
 */
export class FleetDataService {

  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch(data.type) {
        case 'car':
          //
          let car = this.loadCar(data);
          this.cars.push(car);
          break;
        case 'drone':
          //
          let drone = this.loadDrone(data);
          this.drones.push(data);
          break;
        default:
          let e = new DataError('Invalid vehicle type!', data);
          this.error.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    // checking errors in creating car object
    try {
      let c = new Car(car.license, car.model, car.latLong);
      // create new fields
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch(e) {
      this.errors.push(new DataError('Error in creating Car object! ', car));
    }
  }

  loadDrone(drone) {
    // checking errors in creating drone object
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      // create new fields
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch(e) {
      this.errors.push(new DataError('Error in creating Car object! ', drone));
    }
  }

}
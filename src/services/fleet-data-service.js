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
          if (this.validateCarData(data)) {
            // loading data after validation check
            let car = this.loadCar(data);
            
            // check for errors after loadCar complete
            if(car)
              this.cars.push(car);
            
            break;
          } else {
            let e = new DataError('Error in car data', data);
            this.errors.push(e);
          }
         
        case 'drone':
          if (this.validateDroneData(data)) {
            // loading data after validation check
            let drone = this.loadDrone(data);
            
            // check for errors after loadDrone complete
            if (drone)
              this.drones.push(data);
            
            break;
          } else {
            let e = new DataError('Error in drone data', data);
            this.errors.push(e);
          }
          
        default:
          let e = new DataError('Invalid vehicle type!', data);
          this.errors.push(e);
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

    return null;
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

    return null;
  }

  validateCarData(car) {
    // TODO: check fields format
    let requiredProps = "license model latLong miles make".split(" ");
    let hasErrors = false;
    
    for (let field of requiredProps) {
      // check for valid field in car object
      if(!car[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, car));
        hasErrors = true;
      }
    }

    // miles must be Number check
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError('Miles must be a number', car));
      hasErrors = true;
    }

    // true - No Errors, false - there is Errors
    return !hasErrors;
  }

  validateDroneData(drone) {
    // TODO: check fields format
    let requiredProps = "license model latLong airTimeHours base".split(" ");
    let hasErrors = false;
    
    for (let field of requiredProps) {
      // check for valid field in drone object
      if(!drone[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, car));
        hasErrors = true;
      }
    }

    // airTimeHours must be Number check
    if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
      this.errors.push(new DataError('Air time hours must be a number', car));
      hasErrors = true;
    }

    // true - No Errors, false - there is Errors
    return !hasErrors;
  }

  getCarByLicense(licenseNum) {
    // My way:
    // for (let car of this.cars) {
    //   if (car.license === licenseNum) {
    //     return car;
    //   } else {
    //     this.errors.push(new DataError('There is no car with license: ', licenseNum));
    //   }
    // }

    // looping through the array performing fucntion
    return this.cars.find(function searchByLicense(car) {
      return car.license === licenseNum;
    });
  }

  getCarsSortedByLicense() {
    return this.cars.sort(function sortCars(car1, car2){
      // car1 comes first
      if (car1.license < car2.license)
        return -1;
      // car2 comes first
      if (car1.license > car2.license)
        return 1;
      return 0;
    });
  }

  filterCarsByMake(filter) {
    // don't need to use () if there is one input
    return this.cars.filter(car => car.make.indexOf(filter) >= 0);
  }

}